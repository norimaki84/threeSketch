/**
 * fileOverview: ObjStudy01
 * Project:
 * File: Carousel
 * Date: 18/01/13
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';
import loadTexture from '../utils/modules/loadTexture';

require('../../libs/loaders/OBJLoader');

'use strict';

export default class ObjStudy01 extends Entry {

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
		this.loader = null;
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
    this.createScene = this._createScene.bind(this);
		this.createRenderer = this._createRenderer.bind(this);
    this.createLight = this._createLight.bind(this);


    this.loadModel = this._loadModel.bind(this);

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);

		this.loadTextureEvent = this._loadTextureEvent.bind(this);
		this.mouseWheel = this._mouseWheel.bind(this);

		this.texsArray = {
			img01 : '../../../../assets/resource/img/sample01.jpg',
			img02 : '../../../../assets/resource/img/sample02.jpg',
			img03 : '../../../../assets/resource/img/sample03.jpg',
		};

  }

  /**
   * 初期化
   */
  init(){

		this.createScene();
    this.createCamera();
    this.createRenderer();
		this.createLight();

		this.loadModel();

		// カルーセル群を追加するグループを作成
		// this.group = new THREE.Object3D();
		// this.group.position.y = this.planeSize/2;
		// this.scene.add(this.group);

		// this.loadTextureEvent();

		//軸の長さ１０００
		let axis = new THREE.AxisHelper(1000);
		this.scene.add(axis);
		let controls;
		controls = new THREE.OrbitControls(this.camera);
		controls.autoRotate = true;

		this.Update();

		this.onResize();

		window.addEventListener('resize', this.onResize, false );
  }


  /**
   * カメラ作成
   */
  _createCamera() {

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1.0, 2000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 250;

    // this.camera.lookAt(new THREE.Vector3(0,0,0));
    this.camera.lookAt(this.scene.position);
    
    window.console.log('this.scene.position',this.scene.position);
    // window.console.log('this.scene',this.scene);

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

    this.renderer.setClearColor(0x000000, 0.0);
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
		this.pointsLight = new THREE.PointLight(0xffffff, 1.0); // 第二引数はintensity：ライトの強度でデフォルトは1.0
		this.scene.add(this.pointsLight);

		// Ambiend Light
		this.ambientLight = new THREE.AmbientLight(0xcccccc, 1.0);
		this.scene.add(this.ambientLight);

	}

	/**
	 * 3Dモデル読み込み・初期化
	 * @private
	 */
	_loadModel() {
		let that = this;

		//
		let manager = new THREE.LoadingManager();
		manager.onProgress = function ( item, loaded, total ) {
			window.console.log( item, loaded, total );
		};

		//
		let onProgress = function ( xhr ) {
			if ( xhr.lengthComputable ) {
				let percentComplete = xhr.loaded / xhr.total * 100;
				console.log( Math.round(percentComplete, 2) + '% downloaded' );
			}
		};

		// 読み込みエラー処理
		let onError = function ( xhr ) {
		};

		this.loader = new THREE.OBJLoader( manager );
		// this.loader.load( '../../../../assets/resource/model/male02.obj', function ( object ) {
		this.loader.load( '../../../../assets/resource/model/banana02.obj', function ( object ) {
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh ) {
					// child.material.map = texture;
				}
			} );
			object.position.set(0.0, -95.0, 0.0);
			object.rotation.set(0.0, 0.0, 0.0);
			// object.scale.set(0.6, 0.6, 0.6);
			let scaleVal = 4.0;
			object.scale.set(scaleVal, scaleVal, scaleVal);
			that.scene.add( object );
		}, onProgress, onError );

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
		// this.plane.mesh.material.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }



	/**
	 * 画像をロード
	 * @private
	 */
	_loadTextureEvent() {

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

			window.console.log('リソース読み込み完了');

		});

	}

	/**
	 * カルーセルのマウスホイールイベント
	 * @private
	 */
	_mouseWheel(event) {
		let delta = 0;
		if (!event) event = window.event;   /* IE  */
		if (event.wheelDelta) {             /* IE, Opera. */
			delta = event.wheelDelta/120;
		} else if (event.detail) {          /* Mozilla */
			delta = -event.detail;
		}

		if(delta && tweening===false) gotoDir(delta/Math.abs(delta));
	}

	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}