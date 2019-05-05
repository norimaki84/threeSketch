/**
 * fileOverview:
 * Project: GLSL Floating
 * File: Floating
 * Date: 18/2/28
 * Author: Teraguchi
 */

'use strict';

import * as THREE from 'three';
const OrbitControls = require('three-orbitcontrols');
// import Capture from "./Capture";

export default class Floating {

  constructor() {

    this.canvas = document.getElementById('webgl-output');

		this.width = document.body.clientWidth;
		this.height = document.body.clientHeight;

		/**
		 *
		 * @type {PerspectiveCamera}
		 */
		this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 10000);

		/**
		 *
		 * @type {Scene}
		 */
		this.scene = new THREE.Scene();

		/**
		 *
		 * @type {WebGLRenderer}
		 */
		this.renderer = new THREE.WebGLRenderer({
			alpha              : true,
			antialias          : false,
			stencil            : false,
			depth              : true,
			premultipliedAlpha : true,
			canvas: this.canvas
		});

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

		this.camera.position.x = 0;
		this.camera.position.y = 0;
		this.camera.position.z = 1400;
		this.camera.lookAt(new THREE.Vector3(0,0,0));

		this.renderer.setClearColor(0x000000, 1.0);
		this.renderer.setPixelRatio(window.devicePixelRatio || 1);
		this.renderer.setSize(this.width, this.height);

		this.createLight();
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
	 *  ライト作成
	 * @private
	 */
	_createLight() {

		// AmbientLight
		this.ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
		this.scene.add(this.ambientLight);

	}

	/**
	 *
	 * @private
	 */
	_createPlane () {

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
			u_resolution: { type: "v2", value: new THREE.Vector2(1024, 724) },
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
			wrapS: THREE.ClampToEdgeWrapping,
			wrapT: THREE.ClampToEdgeWrapping,
			minFilter: THREE.NearestFilter,
			magFilter: THREE.NearestFilter,
			stencilBuffer: false,
			depthBuffer: false
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
			callback();
		});

	}

	/**
	 * 更新
	 * @private
	 */
	_Update() {

		this.uniforms.u_time.value += 0.1;

		// オフスクリーンレンダリング
		this.renderer.setRenderTarget(this.renderTarget);
		this.renderer.render(this.baseScene, this.baseCamera);
		this.renderer.setRenderTarget(null);
		this.renderer.clear();

		this.renderer.render(this.scene, this.camera);

		requestAnimationFrame( () => {
			this.Update();
		});

	}

	/**
	 *
	 * @private
	 */
	_utilEvent() {

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

	onLoad() {

	}

	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}
