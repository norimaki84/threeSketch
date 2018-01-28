/**
 * fileOverview:
 * Project:
 * File: Wormhole
 * Date: 18/01/27
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';
// import loadTexture from '../utils/modules/loadTexture';
// require('../../libs/GPUComputationRenderer');

'use strict';

export default class Wormhole extends Entry {

  constructor() {

    super();

    this.canvas = document.getElementById('webgl-output');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
    this.isMobile = this.width < 500;

    //
		this.speed = 1;
		this.prevTime = 0;
		this.particles = [];


    // パーティクルの数定義
    this.padticlesWidth = 500;
    this.padticles = this.padticlesWidth * this.padticlesWidth;

    this.stats = null;

    // 基本セット
    this.camera = null;
    this.renderer = null;
    this.scene = null;
		this.geometry = null;
		this.pointsLight = null;
		this.ambientLight = null;
		this.controls = null;

		// gpgpuで使用するオブジェクト
		this.gpuCompute = null;
		this.velocityVariable = null;
		this.positionVariable = null;
		this.positionUniforms = null;
		this.velocityUniforms = null;
		this.particleUniforms = null;
		this.effectController = null;

    this.createCamera = this._createCamera.bind(this);
    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);
    this.createLight = this._createLight.bind(this);
    this.controlsUtil = this._controlsUtil.bind(this);

    this.addParticle = this._addParticle.bind(this);

		this.vertShader = [

		];

		this.fragShader = [
			// "assets/glsl/computeShaderPosition.frag",
			// "assets/glsl/computeShaderVelocity.frag",
		];


    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);

  }

  /**
   * 初期化
   */
  init(){
  	
    this.createCamera();
		this.createScene();
    this.createRenderer();
    this.controlsUtil();

		// this.initComputeRenderer();
		// this.initPosition();

		// this.loadTextureEvent();

		this.Update();

		window.addEventListener('resize', this.onResize, false );

  }


  /**
   * カメラ作成
   */
  _createCamera() {

    this.camera = new THREE.PerspectiveCamera(15, this.width / this.height, 0.01, 100);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 0.35;

		this.camera.rotation.y = Math.PI;

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

    this.renderer.setClearColor(0x000000, 1.0);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize(this.width, this.height);

  }

  /**
   *　シーン作成
   */
  _createScene() {

		this.scene = new THREE.Scene();
		this.scene.fog = new THREE.Fog(0x000d25, 0.05, 1.6);

  }


	/**
	 * ライト作成
	 * @private
	 */
  _createLight() {

		// Point Light
		// this.pointsLight = new THREE.PointLight(0xff0000);
		// this.pointsLight.position.set(500, 500, 0);
		// this.scene.add(this.pointsLight);

		// Ambient Light
		// this.ambientLight = new THREE.AmbientLight(0xffffff);
		// this.scene.add(this.ambientLight);

		let light = new THREE.HemisphereLight( 0xe9eff2, 0x01010f, 1 );
		this.scene.add(light);

	}

	/**
	 * マウス操作で視点変更
	 * @private
	 */
	_controlsUtil() {

		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

	}

	/**
	 *
	 * @private
	 */
	_addParticle() {

		for(let i = 0; i < (this.isMobile ? 70 : 150); i++){
			this.particles.push(new Particle(this.scene));
		}

	}

  /**
   * 更新
   * @private
   */
  _Update() {

		// 計算用のテクスチャを更新
		// this.gpuCompute.compute();

		// 計算した結果が格納されたテクスチャをレンダリング用のシェーダーに渡す
		// this.particleUniforms.texturePosition.value = this.gpuCompute.getCurrentRenderTarget( this.positionVariable ).texture;
		// this.particleUniforms.textureVelocity.value = this.gpuCompute.getCurrentRenderTarget( this.velocityVariable ).texture;

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

		// this.particleUniforms.cameraConstant.value = this.getCameraConstant(this.camera);

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

	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}