/**
 * fileOverview: dotMatrix
 * Project:
 * File: Carousel
 * Date: 18/01/22
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';
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
		this.renderTargetParameters = null;
		this.renderTargetDots = null;

		this.dotsComposer = null;
		this.glowComposer = null;
		this.blendComposer = null;


		this.pointsLight = null;
		this.ambientLight = null;
		this.uniforms = null;

		// オフスクリーンレンダリングで使用
		this.baseScene = null;
		this.baseCamera = null;
		this.baseLight = null;
		this.baseGeometry = null;
		this.baseMaterial = null;
		this.baseMesh = null;
		this.renderTarget = null;

    this.createCamera = this._createCamera.bind(this);
    this.createScene = this._createScene.bind(this);
		this.createRenderer = this._createRenderer.bind(this);
    this.createLight = this._createLight.bind(this);

    this.createCubeHolder = this._createCubeHolder.bind(this);
    this.postEvent = this._postEvent.bind(this);
    this.onParamsChange = this._onParamsChange.bind(this);

		this.offScreenEvent = this._offScreenEvent.bind(this);
    this.loadModel = this._loadModel.bind(this);
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

		this.createCubeHolder();
		this.postEvent();

		// this.offScreenEvent();
		// this.loadModel();

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

		this.cubeHolder = new THREE.Object3D();
		this.scene.add(this.cubeHolder);

		//create rotating cubes
		let geometry = new THREE.BoxBufferGeometry(100, 100, 100);
		let spread = 2000;
		for(let j = 0; j < 80; j++) {
			//random colors w/ additive blend
			let material = new THREE.MeshBasicMaterial({
				color: 0xFFFFFF * Math.random(),
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
		this.renderTargetParameters = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			format: THREE.RGBFormat,
			stencilBufer: false
		};

		//Init dotsComposer to render the dots effect
		//A composer is a stack of shader passes combined

		//a render target is an offscreen buffer to save a composer output
		this.renderTargetDots = new THREE.WebGLRenderTarget(this.width, this.height, this.renderTargetParameters);
		//dots Composer renders the dot effect
		this.dotsComposer = new THREE.EffectComposer(this.renderer, this.renderTargetDots);

		this.renderPass = new THREE.RenderPass(this.scene, this.camera);
		//a shader pass applies a shader effect to a texture (usually the previous shader output)
		this.dotMatrixPass = new THREE.ShaderPass(THREE.DotMatrixShader);
		this.dotsComposer.addPass(this.renderPass);
		this.dotsComposer.addPass(this.dotMatrixPass);


		//Init glowComposer renders a blurred version of the scene
		this.renderTargetGlow = new THREE.WebGLRenderTarget(this.width, this.height, this.renderTargetParameters);
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
		this.blendPass.uniforms[ 'tAdd' ].value = this.glowComposer.renderTarget1;
		this.blendComposer = new THREE.EffectComposer( this.renderer );
		this.blendComposer.addPass( this.blendPass );
		this.blendPass.renderToScreen = true;


		//////////////

		//Init DAT GUI control panel
		this.dotMatrixParams = {
			spacing: 20.0,
			size: 2.0,
			blur: 3.0
		};

		this.glowParams = {
			amount: 4.0,
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

		// オフスクリーンレンダリングの描画処理（renderTarget への描画用）
		this.baseScene = new THREE.Scene();

		// オフスクリーンレンダリングの描画処理用カメラ
		this.baseCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
		this.baseCamera.position.z = 1;

		// オフスクリーンレンダリング用ライトを追加
		this.baseLight = new THREE.DirectionalLight(new THREE.Color(0xffffff), 1);
		this.baseLight.position.set(0, 10, 20);
		this.baseScene.add(this.baseLight);

		// ベース用のマテリアルとジオメトリ
		this.baseGeometry = new THREE.BoxGeometry(1, 1, 1);

		//
		this.uniforms = {
			u_time: { type: "f", value: 1.0 },
			u_resolution: { type: "v2", value: new THREE.Vector2() },
		};
		this.baseMaterial = new THREE.RawShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: require('../../../../glsl/banana.vert'),
			fragmentShader: require('../../../../glsl/banana.frag'),
			side: THREE.DoubleSide,
			transparent: true
		});
		this.baseMesh = new THREE.Mesh(this.baseGeometry, this.baseMaterial);
		this.baseScene.add(this.baseMesh);


		// オフスクリーンレンダリング用
		this.renderTarget = new THREE.WebGLRenderTarget(1, 1, {
			magFilter: THREE.NearestFilter,
			minFilter: THREE.NearestFilter,
			wrapS: THREE.ClampToEdgeWrapping,
			wrapT: THREE.ClampToEdgeWrapping
		});

	}

	/**
	 * 3Dモデル読み込み・初期化
	 * @private
	 */
	_loadModel() {
		let that = this;

		//
		let manager = new THREE.LoadingManager();
		manager.onProgress = function ( item, loaded, total ) {
			window.console.log( item, loaded, total );
		};

		//
		let onProgress = function ( xhr ) {
			if ( xhr.lengthComputable ) {
				let percentComplete = xhr.loaded / xhr.total * 100;
				console.log( Math.round(percentComplete, 2) + '% downloaded' );
			}
		};

		// 読み込みエラー処理
		let onError = function ( xhr ) {
		};

		// let textureLoader = new THREE.TextureLoader( manager );
		// let texture = textureLoader.load( '../../../../assets/resource/img/Banana.jpg' );

		this.loader = new THREE.OBJLoader(manager);
		this.loader.load( '/assets/resource/model/banana03.obj', function ( object ) {
			object.traverse( function ( child ) {

				let material = new THREE.MeshPhongMaterial({
					map: that.renderTarget, //renderTargetをテクスチャとして渡す
					wireframe: false
				});
				window.console.log(material.map);
				object.children[0].material = material;

				if ( child instanceof THREE.Mesh ) {
					// child.material.map = texture;
				}

			});

			object.position.set(0.0, 0.0, 0.0);
			object.rotation.set(0.0, 0.0, 0.0);
			let scaleVal = 1.0;
			object.scale.set(scaleVal, scaleVal, scaleVal);
			that.scene.add( object );
		}, onProgress, onError );

	}

	/**
	 *
	 * @private
	 */
	_utilEvent() {
		//軸の長さ
		let axis = new THREE.AxesHelper(1000);
		// this.scene.add(axis);

		// カメラ
		let controls;
		controls = new THREE.OrbitControls(this.camera);
		controls.autoRotate = true;

		//add stats
		let stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';
		// this.$container.appendChild(stats.domElement);
		// $('#dotMatrix').appendChild(stats.domElement);

	}

  /**
   * 更新
   * @private
   */
  _Update() {

		// this.uniforms.u_time.value += 0.009;

		// オフスクリーンレンダリング
		// this.renderer.render(this.baseScene, this.baseCamera, this.renderTarget);

		//
		// this.renderer.render(this.scene, this.camera);

		// キューブの回転
		this.cubeHolder.rotation.y -= 0.01;
		this.cubeHolder.rotation.x += 0.005;

		// this.dotsComposer.render(0.01);
		this.glowComposer.render(0.1);
		this.blendComposer.render(0.1);

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

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }


	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}