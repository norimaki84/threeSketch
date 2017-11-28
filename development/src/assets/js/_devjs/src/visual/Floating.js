/**
 * fileOverview:
 * Project: GLSLのテスト Floating
 * File: Floating
 * Date: 17/11/19
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';
// import Plane from './Plane';

'use strict';

export default class Floating extends Entry{

  constructor() {

    super();

    this.canvas = document.getElementById('webgl-output');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;

    this.camera = null;
    this.scene = null;
		this.renderer = null;

    this.createCamera = this._createCamera.bind(this);
    this.createScene = this._createScene.bind(this);
		this.createRenderer = this._createRenderer.bind(this);

		// this.uniforms = {};
		this.vTexture = null;
		this.mesh = null;
		this.uniforms = {
			// u_time: { type: "f", value: 1.0 },
			// u_resolution: { type: "v2", value: new THREE.Vector2() },
			// u_mouse: { type: "v2", value: new THREE.Vector2() },
			texture: { type: 't', value: this.vTexture }
		};
		this.createMesh = this._createMesh.bind(this);

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);
		this.loadTexture = this._loadTexture.bind(this);

		// this.plane = new Plane();

  }

  /**
   * 初期化
   */
  init(){

    this.createCamera();
		this.createScene();
    this.createRenderer();

    this.mesh = this.createMesh();

    // window.console.log('this.createMesh', this.mesh);
    this.scene.add(this.mesh);
    
		// this.createMesh();

		this.Update();

		// this.loadTexture();
  }


  /**
   * カメラ作成
   */
  _createCamera(){

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 1;

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

    this.renderer.setClearColor(0xffffff, 0.0);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize(this.width, this.height);

  }

	/**
	 *
	 * @returns {pe.params.Mesh|{}|Aa|*|Ln.params.Mesh|Mt}
	 * @private
	 */
	_createMesh() {
		// this.uniforms = {
		// 	u_time: { type: "f", value: 1.0 },
		// 	u_resolution: { type: "v2", value: new THREE.Vector2() },
		// 	u_mouse: { type: "v2", value: new THREE.Vector2() }
		// };
		return new THREE.Mesh(
			new THREE.PlaneBufferGeometry(2, 2),
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
		const loader = new THREE.TextureLoader();
		loader.load(image, (texture) => {
			texture.magFilter = THREE.NearestFilter;
			texture.minFilter = THREE.NearestFilter;
			this.texture = texture;
			// this.mesh = this.createMesh();
			callback();
		});
	}

  /**
   * 画像をロード
   * @private
   */
	_attachTexture(){

		this.plane.loadTexture('../../../../assets/resource/img/shibuya01.jpg', () => {
			this.scene.add(this.plane.mesh);
			window.addEventListener('resize', () => {
				this.onResize();
			}, false);
			this.onResize();
			this.Update();
		});

	}


  /**
   *　画面リサイズイベント
   */
  _onResize() {
		this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
		this.plane.mesh.material.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }


	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}