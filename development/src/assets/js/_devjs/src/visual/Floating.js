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

		//this.updateStrength = this._updateStrength.bind(this);
		this.draw = this._draw.bind(this);

		this.uniforms = {};
		this.u_time = null;
		this.textureUnit = null;
		this.mesh = null;

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);
		// this.loadTexture = this._loadTexture.bind(this);


  }


  /**
   * 初期化
   */
  init() {

		this.createCamera();
		this.createScene();
		this.createRenderer();

  }

	/**
	 * マウスオーバー・マウスアウトでuniforms変数を更新
	 * @private
	 */
	// _updateStrength(){
	// 	let that = this;
	// 	this.canvasEl
	// 		.mouseover(function() {
	// 			TweenMax.to(that.mesh.material.uniforms.strength, 0.8, {
	// 				value: 15,
	// 				ease: Linear.easeNone,
	// 				overwrite: true,
	// 				onUpdate: () => {
	// 					return that.draw();
	// 				}
	// 			});
	// 		})
	// 		.mouseout(function() {
	// 			TweenMax.to(that.mesh.material.uniforms.strength, 0.8, {
	// 				value: 0,
	// 				ease: Linear.easeNone,
	// 				overwrite: true,
	// 				onUpdate: () => {
	// 					return that.draw();
	// 				}
	// 			});
	// 		});
	// }

	/**
	 * 再描画
	 * @private
	 */
	_draw() {

		this.renderer.render(this.scene, this.camera);

	}


  /**
   * カメラ作成
	 * @private
   */
  _createCamera() {

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 600;

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