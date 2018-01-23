/**
 * fileOverview: dotMatrix
 * Project:
 * File: Carousel
 * Date: 18/01/22
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';
// import PlaneCover from './PlaneCover';
require('../../libs/loaders/OBJLoader');
require('../../libs/three_post/DotMatrixShader');
require('../../libs/three_post/AdditiveBlendShader');

'use strict';

export default class dotMatrix extends Entry {

	constructor() {

		super();

		// this.$container = $('#dotMatrix');
		this.canvas = document.getElementById('webgl-output');

		//
		this.width = document.body.clientWidth;
		this.height = document.body.clientHeight;

		// 基本セット
		this.camera = null;
		this.renderer = null;
		this.scene = null;
		this.composer = null;
		this.cubeHolder = null;

		// シェーダ効果で使用
		this.dotMatrixPass = null;
		this.dotMatrixParams = null;
		this.glowParams = null;
		this.renderPass = null;
		this.hblurPass = null;
		this.vblurPass = null;
		this.blendPass = null;

		this.renderTargetParameters01 = null;
		this.renderTargetParameters02 = null;
		this.fbo01 = null;
		this.fbo02 = null;

		this.renderTargetDots = null;

		this.dotsComposer = null;
		this.glowComposer = null;
		this.blendComposer = null;


		this.pointsLight = null;
		this.ambientLight = null;
		this.uniforms = null;
		this.uniforms02 = null;
		this.uniforms03 = null;
		this.meshCover = null;

		// オフスクリーンレンダリングで使用
		this.baseScene = null;
		this.baseCamera = null;
		this.baseGeometry = null;
		this.baseMaterial = null;
		this.baseMesh = null;
		// this.renderTarget = null;

		this.baseScene02 = null;
		this.baseCamera02 = null;
		this.baseGeometry02 = null;
		this.baseMaterial02 = null;
		this.baseMesh02 = null;
		// this.renderTarget02 = null;

		// this.planeCover = new PlaneCover();

		this.createCamera = this._createCamera.bind(this);
		this.createScene = this._createScene.bind(this);
		this.createRenderer = this._createRenderer.bind(this);
		this.createLight = this._createLight.bind(this);

		this.createCubeHolder = this._createCubeHolder.bind(this);
		this.postEvent = this._postEvent.bind(this);
		this.onParamsChange = this._onParamsChange.bind(this);

		this.offScreenEvent = this._offScreenEvent.bind(this);
		this.utilEvent = this._utilEvent.bind(this);
		this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);

	}

	/**
	 * 初期化
	 */
	init(){

		this.createScene();
		this.createCamera();
		this.createRenderer();
		this.createLight();

		this.offScreenEvent();

		// this.createCubeHolder();

		this.uniforms03 = {
			resolution: {
				type: 'v2',
				value: new THREE.Vector2(document.body.clientWidth, document.body.clientHeight),
			},
			imageResolution: {
				type: 'v2',
				value: new THREE.Vector2(2048, 1356),
			},
			texture: {
				type: 't',
				value: this.texture,
			}
		};
		this.meshCover =  new THREE.Mesh(
			new THREE.PlaneBufferGeometry(2, 2),
			new THREE.MeshBasicMaterial({
				// color: 0xFFFFFF * Math.random(),
				map: this.fbo02.texture,
				// blending: THREE.AdditiveBlending,
				// depthTest: false,
				// transparent: false
			})
		);
		this.meshCover.position.set(0, 0 ,0);
		this.meshCover.scale.set(this.width, this.height, 1);
		this.scene.add(this.meshCover);

		// this.postEvent();

		this.utilEvent();

		this.Update();

		this.onResize();

		window.addEventListener('resize', this.onResize, false );
	}


	/**
	 * カメラ作成
	 */
	_createCamera() {

		this.camera = new THREE.PerspectiveCamera(55, this.width / this.height, 20, 3000);
		this.camera.position.x = 0;
		this.camera.position.y = 0;
		this.camera.position.z = 1000;

		// this.camera.lookAt(new THREE.Vector3(0,0,0));
		this.camera.lookAt(this.scene.position);

	}

	/**
	 * レンダラー作成
	 */
	_createRenderer() {

		this.renderer = new THREE.WebGLRenderer({
			alpha              : false,
			antialias          : false,
			stencil            : false,
			depth              : true,
			premultipliedAlpha : false,
			canvas: this.canvas
		});

		this.renderer.setClearColor(0x000000, 0.0);
		this.renderer.setPixelRatio(window.devicePixelRatio || 1);
		this.renderer.setSize(this.width, this.height);

	}

	/**
	 *　シーン作成
	 */
	_createScene() {

		this.scene = new THREE.Scene();

	}

	/**
	 * ライト作成
	 * @private
	 */
	_createLight() {

		// Point Light
		this.pointsLight = new THREE.PointLight(0xffffff, 1.0); // 第二引数はintensity：ライトの強度でデフォルトは1.0
		this.scene.add(this.pointsLight);

		// Ambiend Light
		this.ambientLight = new THREE.AmbientLight(0xcccccc, 1.0);
		this.scene.add(this.ambientLight);

	}

	/**
	 * init object to hold cubes and rotate
	 * @private
	 */
	_createCubeHolder() {
		let that = this;

		this.cubeHolder = new THREE.Object3D();
		this.scene.add(this.cubeHolder);
		// window.console.log(that.fbo01);
		//create rotating cubes
		let geometry = new THREE.BoxBufferGeometry(100, 100, 100);
		let spread = 2000;
		for(let j = 0; j < 80; j++) {
			//random colors w/ additive blend
			let material = new THREE.MeshBasicMaterial({
				color: 0xFFFFFF * Math.random(),
				// map: that.fbo02.texture,
				blending: THREE.AdditiveBlending,
				depthTest: false,
				transparent: true
			});
			let cube = new THREE.Mesh(geometry, material);
			//randomize size, posn + rotation
			cube.scale.x = cube.scale.y = cube.scale.z = Math.random() * 3 + .05;
			cube.position.x = Math.random() * spread - spread / 2;
			cube.position.y = Math.random() * spread - spread / 2;
			cube.position.z = Math.random() * spread - spread / 2;
			cube.rotation.x = Math.random() * 2 * Math.PI - Math.PI;
			cube.rotation.y = Math.random() * 2 * Math.PI - Math.PI;
			cube.rotation.z = Math.random() * 2 * Math.PI - Math.PI;
			this.cubeHolder.add(cube);
		}
	}

	/**
	 *
	 * @private
	 */
	_postEvent() {
		// POST PROCESSING

		//common render target params
		this.renderTargetParameters01 = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			format: THREE.RGBFormat,
			stencilBufer: false,
		};

		//Init dotsComposer to render the dots effect
		//A composer is a stack of shader passes combined
		//a render target is an offscreen buffer to save a composer output
		this.renderTargetDots = new THREE.WebGLRenderTarget(this.width, this.height, this.renderTargetParameters01);
		//dots Composer renders the dot effect
		this.dotsComposer = new THREE.EffectComposer(this.renderer, this.renderTargetDots);

		this.renderPass = new THREE.RenderPass(this.scene, this.camera);
		//a shader pass applies a shader effect to a texture (usually the previous shader output)
		this.dotMatrixPass = new THREE.ShaderPass(THREE.DotMatrixShader);
		this.dotsComposer.addPass(this.renderPass);
		this.dotsComposer.addPass(this.dotMatrixPass);


		//Init glowComposer renders a blurred version of the scene
		this.renderTargetGlow = new THREE.WebGLRenderTarget(this.width, this.height, this.renderTargetParameters01);
		this.glowComposer = new THREE.EffectComposer(this.renderer, this.renderTargetGlow);

		//create shader passes
		this.hblurPass = new THREE.ShaderPass(THREE.HorizontalBlurShader);
		this.vblurPass = new THREE.ShaderPass(THREE.VerticalBlurShader);

		this.glowComposer.addPass(this.renderPass);
		this.glowComposer.addPass(this.dotMatrixPass);
		this.glowComposer.addPass(this.hblurPass);
		this.glowComposer.addPass(this.vblurPass);
		//glowComposer.addPass( fxaaPass );

		//blend Composer runs the AdditiveBlendShader to combine the output of dotsComposer and glowComposer
		this.blendPass = new THREE.ShaderPass( THREE.AdditiveBlendShader );
		this.blendPass.uniforms[ 'tBase' ].value = this.dotsComposer.renderTarget1;
		// this.blendPass.uniforms[ 'tAdd' ].value = this.glowComposer.renderTarget1;
		this.blendComposer = new THREE.EffectComposer( this.renderer );
		this.blendComposer.addPass( this.blendPass );
		this.blendPass.renderToScreen = true;


		//////////////

		//Init DAT GUI control panel
		this.dotMatrixParams = {
			spacing: 12.0, // 20.0
			size: 1.2, //2.0
			blur: 2.6 // 3.0
		};

		this.glowParams = {
			amount: 4.0, // 0.9
			blur: 0.4
		};

		let gui = new dat.GUI();

		let f1 = gui.addFolder('Dot Matrix');
		f1.add(this.dotMatrixParams, 'spacing', 0, 50).step(1).onChange(this.onParamsChange);
		f1.add(this.dotMatrixParams, 'size', 0, 10).step(0.1).onChange(this.onParamsChange);
		f1.add(this.dotMatrixParams, 'blur', 0, 10).step(0.1).onChange(this.onParamsChange);
		f1.open();

		let f2 = gui.addFolder('Glow');
		f2.add(this.glowParams, 'amount', 0, 10).step(0.1).onChange(this.onParamsChange);
		f2.add(this.glowParams, 'blur', 0, 10).step(0.1).onChange(this.onParamsChange);
		f2.open();

		this.onParamsChange();

		this.dotMatrixPass.uniforms[ "resolution" ].value = new THREE.Vector2(this.width, this.height);

	}

	/**
	 *
	 * @private
	 */
	_onParamsChange() {

		//copy gui params into shader uniforms
		this.dotMatrixPass.uniforms[ "spacing" ].value = this.dotMatrixParams.spacing;
		this.dotMatrixPass.uniforms[ "size" ].value = Math.pow(this.dotMatrixParams.size, 2);
		this.dotMatrixPass.uniforms[ "blur" ].value = Math.pow(this.dotMatrixParams.blur*  2, 2);

		this.hblurPass.uniforms[ 'h' ].value = this.glowParams.blur / this.width * 2;
		this.vblurPass.uniforms[ 'v' ].value = this.glowParams.blur  / this.height * 2;
		this.blendPass.uniforms[ 'amount' ].value = this.glowParams.amount;

	}

	/**
	 * オフスクリーンレンダリングイベント
	 * @private
	 */
	_offScreenEvent() {

		let that = this;

		this.renderTargetParameters01 = {
			magFilter: THREE.NearestFilter,
			minFilter: THREE.NearestFilter,
			format: THREE.RGBFormat,
			stencilBufer: false,
		};

		// オフスクリーンレンダリング用
		this.fbo01 = new THREE.WebGLRenderTarget(this.width, this.height, this.renderTargetParameters01);
		this.fbo01.texture.format = THREE.RGBAFormat;

		// オフスクリーンレンダリングの描画処理（renderTarget への描画用）
		this.baseScene = new THREE.Scene();

		// オフスクリーンレンダリングの描画処理用カメラ
		this.baseCamera = new THREE.PerspectiveCamera(45, 1, 1.0, 1000);
		this.baseCamera.position.z = 1;

		// ベース用のマテリアルとジオメトリ
		this.baseGeometry = new THREE.BoxBufferGeometry(2, 2, 2);

		//
		this.uniforms = {
			u_resolution : { type: "v2", value: new THREE.Vector2(0)  }
		};
		this.baseMaterial = new THREE.RawShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: require('../../../../glsl/base.vert'),
			fragmentShader: require('../../../../glsl/base.frag'),
			side: THREE.DoubleSide,
			transparent: true
		});
		this.baseMesh = new THREE.Mesh(this.baseGeometry, this.baseMaterial);
		this.baseScene.add(this.baseMesh);




		//
		this.renderTargetParameters02 = {
			// magFilter: THREE.NearestFilter,
			// minFilter: THREE.NearestFilter,
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			format: THREE.RGBFormat,
			stencilBufer: false,
		};

		// オフスクリーンレンダリング用
		this.fbo02 = new THREE.WebGLRenderTarget(this.width, this.height, this.renderTargetParameters02);
		this.fbo02.texture.format = THREE.RGBAFormat;


		// オフスクリーンレンダリングの描画処理（renderTarget への描画用）
		this.baseScene02 = new THREE.Scene();

		// オフスクリーンレンダリングの描画処理用カメラ
		this.baseCamera02 = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
		this.baseCamera02.position.z = 1;

		// ベース用のマテリアルとジオメトリ
		this.baseGeometry02 = new THREE.BoxGeometry(1, 1, 1);

		//
		this.uniforms02 = {
			tDiffuse:   { type: "t", value: that.fbo01.texture },
			h:          { type: "f", value: 1.0 / 512.0 },
			v:          { type: "f", value: 1.0 / 512.0 },
			spacing:    { type: "f", value: 20.0 },
			size:       { type: "f", value: 15.0 },
			blur:       { type: "f", value: 150 },
			u_resolution : { type: "v2", value: new THREE.Vector2(800, 600) }
		};
		this.baseMaterial02 = new THREE.RawShaderMaterial({
			uniforms: this.uniforms02,
			vertexShader: require('../../../../glsl/dotMatrix.vert'),
			fragmentShader: require('../../../../glsl/dotMatrix.frag'),
			side: THREE.DoubleSide,
			transparent: true
		});
		this.baseMesh02 = new THREE.Mesh(this.baseGeometry02, this.baseMaterial02);
		this.baseScene02.add(this.baseMesh02);



	}

	/**
	 *
	 * @private
	 */
	_utilEvent() {
		//軸の長さ
		// let axis = new THREE.AxesHelper(1000);
		// this.scene.add(axis);

		// カメラ
		let controls;
		controls = new THREE.OrbitControls(this.camera);
		controls.autoRotate = true;

		//add stats
		// let stats = new Stats();
		// stats.domElement.style.position = 'absolute';
		// stats.domElement.style.top = '0px';
		// this.$container.appendChild(stats.domElement);
		// $('#dotMatrix').appendChild(stats.domElement);

	}

	/**
	 * 更新
	 * @private
	 */
	_Update() {

		// this.uniforms.u_time.value += 0.009;

		// オフスクリーンレンダリング = this.dotsCompose
		this.renderer.render(this.baseScene, this.baseCamera, this.fbo01);
		this.renderer.render(this.baseScene02, this.baseCamera02, this.fbo02);

		//
		this.renderer.render(this.scene, this.camera);

		// キューブの回転
		// this.cubeHolder.rotation.y -= 0.01;
		// this.cubeHolder.rotation.x += 0.005;

		// this.dotsComposer.render(0.1);
		// this.glowComposer.render(0.1);
		// this.blendComposer.render(0.1);

		// this.stats.update();

		requestAnimationFrame( () => {
			this.Update();
		});



	}

	/**
	 *　画面リサイズイベント
	 */
	_onResize() {
		this.canvas.width = document.body.clientWidth;
		this.canvas.height = document.body.clientHeight;

		// this.planeCover.mesh.material.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);

		// this.meshCover.scale.set(this.width, this.height, 1);

		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}


	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}
