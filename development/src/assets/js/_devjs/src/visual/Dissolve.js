/**
 * fileOverview:
 * Project: GLSL Dissolve
 * File: Floating
 * Date: 18/6/11
 * Author: Teraguchi
 */

'use strict';

import Entry from '../Core/Entry';
// import Capture from "./Capture";

export default class Dissolve extends Entry{

  constructor() {

    super();

    this.canvas = document.getElementById('webgl-output');
		this.canvasEl = $('#top #webgl-output');



		this.width = document.body.clientWidth;
		this.height = document.body.clientHeight;

		// this.width = 512;
		// this.height = 512;

		this.currentTime = null;
		this.geometry = null;
		this.material = null;
		this.mesh = null;

		this.frontMap = null;

		this.frontDiffuseMapLoader = null;
		this.backDiffuseMapLoader = null;
		this.heightMapLoader = null;

		this.camera = null;
    this.scene = null;
		this.renderer = null;

		//オフスクリーンレンダリング
		// this.capture = new Capture();
		// this.capture.init();
		// this.capture.size(512,512);

		this.createLight = this._createLight.bind(this);

    this.createCamera = this._createCamera.bind(this);
    this.createScene = this._createScene.bind(this);
		this.createRenderer = this._createRenderer.bind(this);

		this.changeImg = this._changeImg.bind(this);

		this.updateStrength = this._updateStrength.bind(this);
		this.draw = this._draw.bind(this);

		this.uniforms = {};
		this.u_time = null;
		this.textureUnit = null;
		this.mesh = null;
		this.createMesh = this._createMesh.bind(this);

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);



  }


  /**
   * 初期化
   */
  init() {

		this.clock = new THREE.Clock();

		this.createCamera();
		this.createScene();
		this.createRenderer();
		this.createLight();

		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

		this.changeImg();

		// this.loadTexture('../../../../assets/resource/img/sample.jpg', () => {
		// 	this.scene.add(this.mesh);
		// 	// this.updateStrength();
		// 	window.addEventListener('resize', () => {
		// 		// this.onResize();
		// 	}, false);
		// 	// this.onResize();
		//
		// 	this.Update();
		// });

  }

  /**
   * カメラ作成
	 * @private
   */
  _createCamera() {

    this.camera = new THREE.PerspectiveCamera(45, 1, 1, 40000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 4;

    this.camera.lookAt(new THREE.Vector3(0,0,0));

  }

	/**
	 *　シーン作成
	 * @private
	 */
	_createScene() {

		this.scene = new THREE.Scene();

	}

  /**
   * レンダラー作成
	 * @private
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

    this.renderer.setClearColor(0xEEEEEE, 1.0);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize(this.width, this.height);

  }

	/**
	 * ライト作成
	 * @private
	 */
	_createLight() {

		let directionalLight = new THREE.DirectionalLight(0xffffff, .4);
		this.scene.add(directionalLight);
		directionalLight.position.set(0, 2, 4);

		let ambientLight = new THREE.AmbientLight(0xffffff, 1);
		this.scene.add(ambientLight);

	}

	/**
	 * 画像の切り替えイベント
	 * @private
	 */
	_changeImg() {

		this.frontDiffuseMapLoader = new THREE.TextureLoader();
		this.backDiffuseMapLoader = new THREE.TextureLoader();
		this.heightMapLoader = new THREE.TextureLoader();

		this.frontDiffuseMapLoader.load("../../../../assets/resource/img/dissolve01.png", function (frontMap) {
			this.backDiffuseMapLoader.load("../../../../assets/resource/img/dissolve02.png", function (backMap) {
				this.heightMapLoader.load("../../../../assets/resource/img/0a4h0.png", function (heightMap) {
					this.createMesh(frontMap, backMap, heightMap);
					window.addEventListener('resize', () => {
						this.onResize();
					}, false);
					this.onResize();
					this.Update();

				}.bind(this));
			}.bind(this));
		}.bind(this));

	}

	/**
	 * マウスオーバー・マウスアウトでuniforms変数を更新
	 * @private
	 */
	_updateStrength() {
		let that = this;
		this.canvasEl
			.mouseover(function() {
				TweenMax.to(that.mesh.material.uniforms.strength, 0.8, {
					value: 15,
					ease: Linear.easeNone,
					overwrite: true,
					onUpdate: () => {
						return that.draw();
					}
				});
			})
			.mouseout(function() {
				TweenMax.to(that.mesh.material.uniforms.strength, 0.8, {
					value: 0,
					ease: Linear.easeNone,
					overwrite: true,
					onUpdate: () => {
						return that.draw();
					}
				});
			});
	}

	/**
	 * 再描画
	 * @private
	 */
	_draw() {

		this.renderer.render(this.scene, this.camera);

	}

	/**
	 *
	 * @returns {pe.params.Mesh|{}|Aa|*|Ln.params.Mesh|Mt}
	 * @private
	 */
	_createMesh() {
		this.geometry = new THREE.BufferGeometry();

		// 平面用の頂点を定義
		// d - c
		// |   |
		// a - b
		let vertexPositions = [
			[-1.0, -1.0, 1.0], // a
			[ 1.0, -1.0, 1.0], // b
			[ 1.0,  1.0, 1.0], // c
			[-1.0,  1.0, 1.0]  // d
		];

		// Typed Arrayで頂点データを保持
		let vertices = new Float32Array(vertexPositions.length * 3);

		let uvs = new Float32Array(8);

		for (let i = 0; i < vertexPositions.length; i++) {
			let vo = i * 3;

			vertices[vo] = vertexPositions[i][0];
			vertices[vo + 1] = vertexPositions[i][1];
			vertices[vo + 2] = vertexPositions[i][2];
		}

		uvs[0] = 0;
		uvs[1] = 0;

		uvs[2] = 1;
		uvs[3] = 0;

		uvs[4] = 1;
		uvs[5] = 1;

		uvs[6] = 0;
		uvs[7] = 1;

		// 頂点インデックスを生成
		const indices = new Uint16Array([
			0, 1, 2,
			2, 3, 0
		]);

		this.geometry.setIndex(new THREE.BufferAttribute(indices, 1));
		this.geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
		this.geometry.addAttribute('uvs', new THREE.BufferAttribute(uvs, 2));

		this.geometry.computeBoundingBox();
		this.geometry.computeBoundingSphere();

		this.uniforms = {
			frontMap: {
				type: "t",
				value: this.frontMap
			},
			backMap: {
				type: "t",
				value: this.backMap
			},
			heightMap: {
				type: "t",
				value: this.heightMap
			},
			uTime: {
				type: "f",
				value: 0
			},
			range: {
				type: "f",
				value: 3.0
			}
		};

		this.material = new THREE.RawShaderMaterial({
			transparent: true,
			vertexShader: require('../../../../glsl/dissolve.vert'),
			fragmentShader: require('../../../../glsl/dissolve.frag'),
			side: THREE.DoubleSide,
			uniforms: this.uniforms
		});

		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(0, 0, 0);
		this.scene.add(this.mesh);


		// return new THREE.Mesh(
		// 	new THREE.PlaneBufferGeometry(512, 512),
		// 	new THREE.RawShaderMaterial({
		// 		uniforms: this.uniforms,
		// 		vertexShader: require('../../../../glsl/dissolve.vert'),
		// 		fragmentShader: require('../../../../glsl/dissolve.frag'),
		// 	})
		// );
	}

	/**
	 * 更新
	 * @private
	 */
	_Update(time) {

		// this.currentTime = time / 1000;

		// this.mesh.material.uniforms.uTime.value = this.currentTime;
		// this.mesh.material.uniforms.uTime.value = this.delta;

		this.uniforms.uTime.value += 0.01;

		window.console.log(this.uniforms.uTime.value);

		this.controls.update();

		this.renderer.render(this.scene, this.camera);

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