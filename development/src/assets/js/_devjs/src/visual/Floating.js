/**
 * fileOverview:
 * Project: GLSL Floating
 * File: Floating
 * Date: 18/2/28
 * Author: Teraguchi
 */

'use strict';

import Entry from '../Core/Entry';
// import Capture from "./Capture";

export default class Floating extends Entry{

  constructor() {

    super();

    this.canvas = document.getElementById('webgl-output');

		this.width = document.body.clientWidth;
		this.height = document.body.clientHeight;

		this.camera = null;
    this.scene = null;
		this.renderer = null;

		//オフスクリーンレンダリング
		// this.capture = new Capture();
		// this.capture.init();
		// this.capture.size(512,512);
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
		this.createPlane = this._createPlane.bind(this);

		this.uniforms = {};
		this.u_time = null;
		this.texture = null;
		this.mesh = null;

		this.offScreenEvent = this._offScreenEvent.bind(this);
		this.loadTexture = this._loadTexture.bind(this);

		this.utilEvent = this._utilEvent.bind(this);
    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);

  }


  /**
   * 初期化
   */
  init() {

		this.createCamera();
		this.createScene();
		this.createLight();
		this.createRenderer();
		this.utilEvent();

		this.loadTexture('../../../../assets/resource/img/water.jpg', () => {

			this.offScreenEvent();

			this.createPlane();

			window.addEventListener('resize', this.onResize, false );

			this.onResize();
			this.Update();
		});

  }


  /**
   * カメラ作成
	 * @private
   */
  _createCamera() {

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 10000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 1400;

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
	 *  ライト作成
	 * @private
	 */
	_createLight() {

		// AmbientLight
		this.ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
		this.scene.add(this.ambientLight);

	}


  /**
   * レンダラー作成
   */
  _createRenderer() {

		this.renderer = new THREE.WebGLRenderer({
      alpha              : true,
      antialias          : false,
      stencil            : false,
      depth              : true,
      premultipliedAlpha : false,
      canvas: this.canvas
		});

    this.renderer.setClearColor(0x000000, 1.0);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize(this.width, this.height);

  }

	/**
	 *
	 * @private
	 */
	_createPlane (){

		const geometry = new THREE.PlaneBufferGeometry(1024, 724, 32);

		const material = new THREE.MeshPhongMaterial( {
			map: this.renderTarget.texture,
			side: THREE.DoubleSide
		});

		const Plane = new THREE.Mesh(geometry, material);
		this.scene.add(Plane);

	}

	/**
	 * オフスクリーンレンダリングイベント
	 * @private
	 */
	_offScreenEvent() {

		// オフスクリーンレンダリングの描画処理（renderTargetへの描画用）
		this.baseScene = new THREE.Scene();

		// オフスクリーンレンダリングの描画処理用カメラ
		this.baseCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
		this.baseCamera.position.z = 1;

		// オフスクリーンレンダリング用ライトを追加
		this.baseLight = new THREE.DirectionalLight(new THREE.Color(0xffffff), 1);
		this.baseLight.position.set(0, 10, 20);
		this.baseScene.add(this.baseLight);

		// ベース用のマテリアルとジオメトリ
		this.baseGeometry = new THREE.PlaneBufferGeometry(1, 1, 1);

		// ユニフォーム変数
		this.uniforms = {
			texture: { type: 't', value: this.texture },
			u_time: { type: "f", value: 1.0 },
			u_resolution: { type: "v2", value: new THREE.Vector2() },
		};
		this.baseMaterial = new THREE.RawShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: require('../../../../glsl/floating.vert'),
			fragmentShader: require('../../../../glsl/floating.frag'),
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

		this.renderTarget.setSize(this.width, this.height);

	}

	/**
	 * 画像をロード
	 * @private
	 */
	_loadTexture(image, callback) {

		let that = this;
		const loader = new THREE.TextureLoader();
		loader.load(image, (texture) => {
			texture.magFilter = THREE.NearestFilter;
			texture.minFilter = THREE.NearestFilter;
			that.texture = texture;
			//window.console.log('that.texture', that.texture);
			callback();
		});

	}

	/**
	 * 更新
	 * @private
	 */
	_Update() {

		// this.uniforms.u_time.value += 0.05;

		// オフスクリーンレンダリング
		this.renderer.render(this.baseScene, this.baseCamera, this.renderTarget);

		this.renderer.render(this.scene, this.camera);

		requestAnimationFrame( () => {
			this.Update();
		});

	}

	/**
	 *
	 * @private
	 */
	_utilEvent (){

		//軸の長さ
		let axis = new THREE.AxesHelper(1000);
		//this.scene.add(axis);

		// カメラ
		let controls;
		controls = new THREE.OrbitControls(this.camera);
		controls.autoRotate = true;

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