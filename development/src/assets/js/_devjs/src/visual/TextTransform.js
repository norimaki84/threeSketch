/**
 * fileOverview:
 * Project:
 * File: TextTransform
 * Date: 18/2/6
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';
import CaptureText from "./Utils/CaptureText";

'use strict';

export default class TextTransform extends Entry {

  constructor() {

    super();

    this.canvas = document.getElementById('webgl-output');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;

		this.capText = null;

    this.camera = null;
    this.renderer = null;
    this.scene = null;

    this.createCamera = this._createCamera.bind(this);
    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);
		this.createLight = this._createLight.bind(this);

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


		// テキスト、フォントサイズ、フォント種類、フォントの色
		this.capText = new CaptureText('A', 256, 'sans-serif', '000000');
		this.scene.add(this.capText.planeTexture);

    this.createRenderer();

		this.Update();

		window.addEventListener('resize', this.onResize, false);

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
	 * レンダラー作成
	 * @private
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

    this.renderer.setClearColor(0xffffff, 0.0);
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
	 *  ライト作成
	 * @private
	 */
	_createLight() {

		// AmbientLight
		this.ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
		this.scene.add(this.ambientLight);

	}

  /**
   * 更新
   * @private
   */
  _Update() {

		// オフスクリーンレンダリング
		this.renderer.render(this.capText.baseScene, this.capText.baseCamera, this.capText.renderTarget);

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

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
  }


	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}