/**
 * fileOverview: 3DCarousel
 * Project:
 * File: Carousel
 * Date: 18/01/02
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';
import loadTexture from '../utils/modules/loadTexture';

'use strict';

export default class Carousel extends Entry {

  constructor() {

    super();

    this.canvas = document.getElementById('webgl-output');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;

    this.camera = null;
    this.renderer = null;
    this.scene = null;
		this.pointsLight = null;
		this.ambientLight = null;
		this.group = null;

		this.select = 0;
		this.tweenTime = 0.8;
		this.planeSize = 256;
		this.dx = 250;
		this.dz = 250;
		this.show = 2;
		this.deltaRotation = 15;
		this.half = 0;
		this.tweening = false;

    this.createCamera = this._createCamera.bind(this);
    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);
    this.createLight = this._createLight.bind(this);

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);
		this.loadTexture = this._loadTexture.bind(this);

		this.texsArray = {
			img01 : '../../../../assets/resource/img/shibuya01.jpg',
			img02 : '../../../../assets/resource/img/shibuya01.jpg',
			img03 : '../../../../assets/resource/img/shibuya01.jpg',
		};

  }

  /**
   * 初期化
   */
  init(){
  	
    this.createCamera();
		this.createScene();
    this.createRenderer();

		// カルーセル群を追加するグループを作成
		this.group = new THREE.Object3D();
		this.group.position.y = this.planeSize/2;
		this.scene.add(this.group);



		this.Update();

		this.loadTexture();
  }


  /**
   * カメラ作成
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
   *　シーン作成
   */
  _createScene() {

		this.scene = new THREE.Scene();

  }


	/**
	 * ライト作成
	 * @private
	 */
  _createLight() {

		// Point Light
		this.pointsLight = new THREE.PointLight(0xff0000);
		this.pointsLight.position.set(500, 500, 0);
		this.scene.add(this.pointsLight);

		// Ambiend Light
		this.ambientLight = new THREE.AmbientLight(0xffffff);
		this.scene.add(this.ambientLight);

	}

  /**
   * 画像をロード
   * @private
   */
	_loadTexture(){

		// const texLoader = new THREE.TextureLoader();
		// texLoader.crossOrigin = '*'; //クロスドメイン読み込みの許可
		// texLoader.load('../../../../assets/resource/img/shibuya01.jpg',
		// 	texture => { // onLoad
		// 		// const geometry = new THREE.BoxGeometry(1, 1, 1);
		// 		// const material = new MeshBasicMaterial({ map: texture });
		// 		// const cube = new THREE.Mesh(geometry, material);
		// 		// scene.add(cube);
		// 		// ...
		// 		window.console.log('完了');
		// 	},
		// 	xhr => { // onProgress
		// 		window.console.log('');
		// 	},
		// 	xhr => { // onError
		// 		// ...
		// 	}
		// );

		loadTexture(this.texsArray, function () {

			window.console.log('完了しました！！');

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