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

    this.createCamera = this._createCamera.bind(this);
    this.createScene = this._createScene.bind(this);
		this.createRenderer = this._createRenderer.bind(this);
		this.createLight = this._createLight.bind(this);


		this.uniforms = {};
		this.u_time = null;
		this.textureUnit = null;
		this.mesh = null;

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);
		this.offScreenEvent = this._offScreenEvent.bind(this);

  }


  /**
   * 初期化
   */
  init() {

		this.createCamera();
		this.createScene();
		this.createRenderer();

		this.offScreenEvent();

		window.addEventListener('resize', this.onResize, false );

  }


  /**
   * カメラ作成
	 * @private
   */
  _createCamera() {

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 10000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 1000;

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

    this.renderer.setClearColor(0xffffff, 1.0);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize(this.width, this.height);

  }


	/**
	 * 更新
	 * @private
	 */
	_Update() {

		// this.uniforms.u_time.value += 0.05;

		// this.capture.render(this.scene, this.camera);

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