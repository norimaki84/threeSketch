/**
 * fileOverview:
 * Project:
 * File: TextTransform
 * Date: 18/2/6
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';
import CaptureText from "./Utils/CaptureText";
// import Plane from './Plane';

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

    // this.createTextTexture =

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);
		this.loadTexture = this._loadTexture.bind(this);

		// this.plane = new Plane();



  }

  /**
   * 初期化
   */
  init() {

    this.createCamera();
		this.createScene();

		// ライト
		this.pointsLight = new THREE.PointLight(0xffffff, 1.0); // 第二引数はintensity：ライトの強度でデフォルトは1.0
		this.scene.add(this.pointsLight);
		// Ambiend Light
		this.ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
		this.scene.add(this.ambientLight);

		//
		this.capText = new CaptureText('あ', 512, 256);

		// キューブ
		// let geometry = new THREE.BoxGeometry(this.capText.metrics.width, this.capText.metrics.width, this.capText.metrics.width);
		let geometry = new THREE.BoxGeometry(1, 1, 1);
		let material = new THREE.MeshPhongMaterial( {
			map: this.capText.texture,
			color: 0xffffff,
			side: THREE.DoubleSide
		} );

		let cube = new THREE.Mesh(geometry, material);
		cube.position.set(0, 0, 0);
		this.scene.add(cube);

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
    this.camera.position.z = 10;

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

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }


	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}