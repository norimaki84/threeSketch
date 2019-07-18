/**
 * fileOverview:
 * Project:
 * File: TextEffect
 * Date: 18/2/6
 * Author: Teraguchi
 */

import * as THREE from 'three';
import * as dat from 'dat.gui';
import CaptureText from "./Utils/CaptureText";

'use strict';

export default class TextEffect {

  constructor() {

    this.canvas = document.getElementById('webgl-output');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;

		this.gui = new dat.GUI();

		this.capText = null;

		/**
		 * カメラ作成
		 * @type {PerspectiveCamera}
		 */
		this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1.0, 10000);

		/**
		 * レンダラー作成
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

		/**
		 * シーン作成
		 * @type {Scene}
		 */
		this.scene = new THREE.Scene();

		this.createLight = this._createLight.bind(this);
    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);

  }

  /**
   * 初期化
   */
  init() {

		this.camera.position.x = 0;
		this.camera.position.y = 0;
		this.camera.position.z = 1000;
		this.camera.lookAt(new THREE.Vector3(0,0,0));

		this.renderer.setClearColor(0xffffff, 0.0);
		this.renderer.setPixelRatio(window.devicePixelRatio || 1);
		this.renderer.setSize(this.width, this.height);

		this.createLight();

		// テキスト、フォントサイズ、フォント種類、フォントの色
		this.capText = new CaptureText('No', 256, 'sans-serif', '000000');
		this.scene.add(this.capText.planeTexture);

		window.console.log(this.capText.planeTexture);

		this.Update();

		window.addEventListener('resize', this.onResize, false);

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
		// this.renderer.render(this.capText.baseScene, this.capText.baseCamera, this.capText.renderTarget);
		this.renderer.setRenderTarget(this.capText.renderTarget);
		this.renderer.render(this.capText.baseScene, this.capText.baseCamera);
		this.renderer.setRenderTarget(null);
		this.renderer.clear();

		this.capText.drawText();

		this.capText.uniforms.u_time.value += 1.0;

		this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => {
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

	onLoad() {}

	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}
