/**
 * fileOverview:
 * Project:
 * File: gpgpu01
 * Date: 18/01/10
 * Author: Teraguchi
 */

import * as THREE from 'three';
// import "imports-loader?THREE=three!three/examples/js/controls/TransformControls.js";
import GPUComputationRenderer from "./Utils/GPUComputationRenderer";

'use strict';

export default class gpgpu01 {

  constructor() {

    this.canvas = document.getElementById('webgl-output');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;

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

		this.vertShader = [

		];

		this.fragShader = [
			"assets/glsl/computeShaderPosition.frag",
			"assets/glsl/computeShaderVelocity.frag",
		];

    this.initComputeRenderer = this._initComputeRenderer.bind(this);
    this.initPosition = this._initPosition.bind(this);
    this.fillTextures = this._fillTextures.bind(this);
    this.getCameraConstant = this._getCameraConstant.bind(this);


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

		this.initComputeRenderer();
		this.initPosition();

		// this.loadTextureEvent();

		this.Update();

		window.addEventListener('resize', this.onResize, false );

  }


  /**
   * カメラ作成
   */
  _createCamera() {

    this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 5.0, 15000);
    this.camera.position.x = 0;
    this.camera.position.y = 120;
    this.camera.position.z = 200;

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
		this.pointsLight = new THREE.PointLight(0xff0000);
		this.pointsLight.position.set(500, 500, 0);
		this.scene.add(this.pointsLight);

		// Ambient Light
		this.ambientLight = new THREE.AmbientLight(0xffffff);
		this.scene.add(this.ambientLight);

	}

	/**
	 * マウス操作で視点変更
	 * @private
	 */
	_controlsUtil() {
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
	}

	/**
	 * gpuCopute用のRenderを作る
	 * @private
	 */
	_initComputeRenderer() {
		// gpgpuオブジェクトのインスタンスを格納
		this.gpuCompute = new GPUComputationRenderer(this.padticlesWidth, this.padticlesWidth, this.renderer);

		// 今回はパーティクルの位置情報と、移動方向を保存するテクスチャを2つ用意します
		let dtPosition = this.gpuCompute.createTexture();
		let dtVelocity = this.gpuCompute.createTexture();

		// テクスチャにGPUで計算するために初期情報を埋めていく
		this.fillTextures(dtPosition, dtVelocity);

		// shaderプログラムのアタッチ
		this.velocityVariable = this.gpuCompute.addVariable( "textureVelocity", document.getElementById( 'computeShaderVelocity' ).textContent, dtVelocity );
		this.positionVariable = this.gpuCompute.addVariable( "texturePosition", document.getElementById( 'computeShaderPosition' ).textContent, dtPosition );

		// 一連の関係性を構築するためのおまじない
		this.gpuCompute.setVariableDependencies( this.velocityVariable, [ this.positionVariable, this.velocityVariable ] );
		this.gpuCompute.setVariableDependencies( this.positionVariable, [ this.positionVariable, this.velocityVariable ] );


		// uniform変数を登録したい場合は以下のように作る
		/*
		positionUniforms = positionVariable.material.uniforms;
		velocityUniforms = velocityVariable.material.uniforms;

		velocityUniforms.time = { value: 0.0 };
		positionUniforms.time = { ValueB: 0.0 };
		***********************************
		たとえば、上でコメントアウトしているeffectControllerオブジェクトのtimeを
		わたしてあげれば、effectController.timeを更新すればuniform変数も変わったり、ということができる
		velocityUniforms.time = { value: effectController.time };
		************************************
		*/

		// error処理
		let error = this.gpuCompute.init();
		if ( error !== null ) {
			console.error( error );
		}
	}

	/**
	 * particleの初期化
	 * @private
	 */
	_initPosition() {
		// 最終的に計算された結果を反映するためのオブジェクト。
		// 位置情報はShader側(texturePosition, textureVelocity)
		// で決定されるので、以下のように適当にうめちゃってOK

		this.geometry = new THREE.BufferGeometry();
		let positions = new Float32Array(this.padticles * 3);
		let p = 0;
		for ( let i = 0; i < this.padticles; i++ ) {
			positions[ p++ ] = 0;
			positions[ p++ ] = 0;
			positions[ p++ ] = 0;
		}

		// uv情報の決定。テクスチャから情報を取り出すときに必要
		let uvs = new Float32Array(this.padticles * 2);
		p = 0;
		for ( let j = 0; j < this.padticlesWidth; j++ ) {
			for ( let i = 0; i < this.padticlesWidth; i++ ) {
				uvs[ p++ ] = i / ( this.padticlesWidth - 1 );
				uvs[ p++ ] = j / ( this.padticlesWidth - 1 );
			}
		}

		// attributeをgeometryに登録する
		this.geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
		this.geometry.addAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );


		// uniform変数をオブジェクトで定義
		// 今回はカメラをマウスでいじれるように、計算に必要な情報もわたす。
		this.particleUniforms = {
			texturePosition: { value: null },
			textureVelocity: { value: null },
			cameraConstant: { value: this.getCameraConstant(this.camera) }
		};



		// Shaderマテリアル これはパーティクルそのものの描写に必要なシェーダー
		let material = new THREE.ShaderMaterial( {
			uniforms:       this.particleUniforms,
			vertexShader: require('../../../../glsl/particleVertexShader.vert'),
			fragmentShader: require('../../../../glsl/particleFragmentShader.frag'),
		});
		material.extensions.drawBuffers = true;
		let particles = new THREE.Points(this.geometry, material);
		particles.matrixAutoUpdate = false;
		particles.updateMatrix();

		// パーティクルをシーンに追加
		this.scene.add(particles);

	}

	/**
	 *
	 * @private
	 */
	_fillTextures(texturePosition, textureVelocity) {

		// textureのイメージデータをいったん取り出す
		let posArray = texturePosition.image.data;
		let velArray = textureVelocity.image.data;

		// パーティクルの初期の位置は、ランダムなXZに平面おく。
		// 板状の正方形が描かれる

		for ( let k = 0, kl = posArray.length; k < kl; k += 4 ) {
			// Position
			let x, y, z;
			x = Math.random()*500-250;
			z = Math.random()*500-250;
			y = 0;
			// posArrayの実態は一次元配列なので
			// x,y,z,wの順番に埋めていく。
			// wは今回は使用しないが、配列の順番などを埋めておくといろいろ使えて便利
			posArray[ k + 0 ] = x;
			posArray[ k + 1 ] = y;
			posArray[ k + 2 ] = z;
			posArray[ k + 3 ] = 0;

			// 移動する方向はとりあえずランダムに決めてみる。
			// これでランダムな方向にとぶパーティクルが出来上がるはず。
			velArray[ k + 0 ] = Math.random()*2-1;
			velArray[ k + 1 ] = Math.random()*2-1;
			velArray[ k + 2 ] = Math.random()*2-1;
			velArray[ k + 3 ] = Math.random()*2-1;
		}

	}

	/**
	 *
	 * カメラオブジェクトからシェーダーに渡したい情報を引っ張ってくる関数
	 * カメラからパーティクルがどれだけ離れてるかを計算し、パーティクルの大きさを決定するため。
	 * @param camera
	 * @private
	 */
	_getCameraConstant(camera){
		return window.innerHeight / ( Math.tan( THREE.Math.DEG2RAD * 0.5 * camera.fov ) / camera.zoom );
	}

  /**
   * 更新
   * @private
   */
  _Update() {

		// 計算用のテクスチャを更新
		this.gpuCompute.compute();

		// 計算した結果が格納されたテクスチャをレンダリング用のシェーダーに渡す
		this.particleUniforms.texturePosition.value = this.gpuCompute.getCurrentRenderTarget( this.positionVariable ).texture;
		this.particleUniforms.textureVelocity.value = this.gpuCompute.getCurrentRenderTarget( this.velocityVariable ).texture;

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

		this.particleUniforms.cameraConstant.value = this.getCameraConstant(this.camera);

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

		// loadTexture(this.texsArray, function () {
		//
		// 	window.console.log('リソース読み込み完了');
		//
		// });

	}

	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}