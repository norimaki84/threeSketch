/**
 * fileOverview:
 * Project:
 * File: ClockTransform
 * Date: 18/2/9
 * Author: Teraguchi
 */

import * as THREE from 'three';

'use strict';

export default class ClockTransform {

  constructor() {

    this.canvas = document.getElementById('webgl-output');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;


    this.camera = null;
    this.renderer = null;
    this.scene = null;

    this.createCamera = this._createCamera.bind(this);
    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);
		this.loadTexture = this._loadTexture.bind(this);

  }

  /**
   * 初期化
   */
  init() {

    this.createCamera();
		this.createScene();
    this.createRenderer();

		this.Update();

		window.addEventListener('resize', this.onResize, false);

		// this.loadTexture();
  }


	/**
	 * カメラ作成
	 * @private
	 */
  _createCamera() {

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 100;

    this.camera.lookAt(new THREE.Vector3(0,0,0));
    

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
      premultipliedAlpha : true,
      canvas: this.canvas
		});

    this.renderer.setClearColor(0x00000, 0.0);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize(this.width, this.height);

  }

	/**
	 * シーン作成
	 * @private
	 */
  _createScene() {

		this.scene = new THREE.Scene();

  }


	/**
	 * 画像をロード
	 * @private
	 */
	_loadTexture(){

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
   * 更新
   * @private
   */
  _Update() {

		this.renderer.render(this.scene, this.camera);

    requestAnimationFrame( () => {
      this.Update();
    });

  }

	/**
	 * 画面リサイズイベント
	 * @private
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