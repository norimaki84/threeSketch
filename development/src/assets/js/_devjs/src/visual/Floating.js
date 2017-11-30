/**
 * fileOverview:
 * Project: GLSL Floating
 * File: Floating
 * Date: 17/11/19
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

		this.uniforms = {};
		this.u_time = null;
		this.textureUnit = null;
		this.mesh = null;
		this.createMesh = this._createMesh.bind(this);

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);
		this.loadTexture = this._loadTexture.bind(this);


  }

  /**
   * 初期化
   */
  init(){

		this.createCamera();
		this.createScene();
		this.createRenderer();

		this.loadTexture('../../../../assets/resource/img/sample.jpg', () => {
			// window.console.log('this.textureUnit', this.textureUnit);
			this.scene.add(this.mesh);
			window.addEventListener('resize', () => {
				this.onResize();
			}, false);
			this.onResize();
			this.Update();
		});

		// 平行光源
		// const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
		// directionalLight.position.set(1, 1, 1);
		// this.scene.add(directionalLight);

  }


  /**
   * カメラ作成
   */
  _createCamera(){

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 1000;

    this.camera.lookAt(new THREE.Vector3(0,0,0));

  }

	/**
	 *　シーン作成
	 */
	_createScene(){

		this.scene = new THREE.Scene();

	}

  /**
   * レンダラー作成
   */
  _createRenderer(){

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
	 *
	 * @returns {pe.params.Mesh|{}|Aa|*|Ln.params.Mesh|Mt}
	 * @private
	 */
	_createMesh() {
		this.uniforms = {
			u_time: { type: "f", value: this.u_time },
			u_resolution: { type: "v2", value: new THREE.Vector2(512, 512) },
			// u_mouse: { type: "v2", value: new THREE.Vector2() },
			textureUnit: { type: 't', value: this.textureUnit }
			// textureUnit: { type: 't', value: this.capture.texture() }
		};
		return new THREE.Mesh(
			new THREE.PlaneBufferGeometry(512, 512),
			new THREE.RawShaderMaterial({
			// new THREE.ShaderMaterial({
				uniforms: this.uniforms,
				vertexShader: require('../../../../glsl/floating.vert'),
				fragmentShader: require('../../../../glsl/floating.frag'),
			})
		);
	}

	/**
	 * 更新
	 * @private
	 */
	_Update() {

		this.uniforms.u_time.value += 0.05;

		// this.capture.render(this.scene, this.camera);

		this.renderer.render(this.scene, this.camera);

		requestAnimationFrame( () => {
			this.Update();
		});

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
			that.textureUnit = texture;
			this.mesh = this.createMesh();
			callback();
		});
	}

  /**
   * 画像をロード
   * @private
   */
	// _attachTexture(){
	//
	// 	this.plane.loadTexture('../../../../assets/resource/img/shibuya01.jpg', () => {
	// 		this.scene.add(this.plane.mesh);
	// 		window.addEventListener('resize', () => {
	// 			this.onResize();
	// 		}, false);
	// 		this.onResize();
	// 		this.Update();
	// 	});
	//
	// }


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