/**
 * fileOverview:
 * Project:
 * File: MaskEffect
 * Date: 19/9/6
 * Author: Teraguchi
 */

import Utils from "../utils/Utils";
import * as THREE from 'three';

'use strict';

export default class MaskEffect {

  constructor() {

    this.canvas = document.getElementById('webgl-output');

    // 基本セット
		this.utils = new Utils();

		this.video = null;
		this.videoTexture = null;

    this.renderer = null;

    this.mainScene = null;
    this.mainCamera = null;

		this.maskScene = null;
		this.maskTg = null;

		this.baseScene = null;
		this.baseTg = null;

		this.maskMesh = null;
		this.baseMesh = [];

		this.dest = null;
		this.bgColor = 0x131521;

		this.setupMask = this._setupMask.bind(this);
		this.setupBase = this._setupBase.bind(this);

		this.geometry = null;
		this.material = null;
		this.mesh = null;
		this.pointsLight = null;
		this.ambientLight = null;
		this.controls = null;
		this.dpr = window.devicePixelRatio;

		this.uniforms = {};

		this.onLoad = this._onLoad.bind(this);

    this.createMesh = this._createMesh.bind(this);

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);

  }

  /**
   * 初期化
   */
  init(){

		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			alpha : true,
			antialias : false,
			stencil : false,
			powerPreference : 'low-power',
		});
		this.renderer.autoCLear = true;

		// this.video = document.getElementById( 'video' );
		// this.video.play();
		// this.videoTexture = new THREE.VideoTexture(this.video);

		// メインシーン
		this.mainScene = new THREE.Scene();

		// メインカメラ
		this.mainCamera = new THREE.PerspectiveCamera(80, 1, 0.1, 50000);

		let sw = $(window).width();
		let sh = window.innerHeight;

		// マスク用のシーン作成
		this.setupMask();

		// ベースとなるシーン作成
		this.setupBase();

		// 描画部分
		this.createMesh();

		this.Update();

		// 毎フレーム実行
		window.requestAnimationFrame(this.Update);
		// window.addEventListener('resize', this.onResize);
  }

	/**
	 * 更新
	 * @private
	 */
	_Update() {

		let sw = window.innerWidth;
		let sh = window.innerHeight;

		// カメラ設定
		// ピクセル等倍になるように
		this.mainCamera.aspect = sw / sh;
		this.mainCamera.updateProjectionMatrix();
		this.mainCamera.position.z = sh / Math.tan(this.mainCamera.fov * Math.PI / 360) / 2;

		// レンダラーの設定
		this.renderer.setPixelRatio(window.devicePixelRatio || 1);
		this.renderer.setSize(sw, sh);

		// マスクとなるシーンのアニメーション
		let maskSize = sw * 0.3;
		this.maskMesh.scale.set(maskSize, maskSize, maskSize);
		this.maskMesh.rotation.x += 0.005;
		this.maskMesh.rotation.y -= 0.006;
		this.maskMesh.rotation.z += 0.011;

		// マスク用シーンのレンダリング
		this.renderer.setClearColor(this.bgColor, 0);
		this.maskTg.setSize(sw * window.devicePixelRatio, sh * window.devicePixelRatio);
		this.renderer.setRenderTarget(this.maskTg);
		// this.videoTexture.setSize(sw * window.devicePixelRatio, sh * window.devicePixelRatio);
		// this.renderer.setRenderTarget(this.videoTexture);
		this.renderer.render(this.maskScene, this.mainCamera);
		// this.renderer.setRenderTarget(null);

		// ベースとなるシーンのアニメーション
		for(let i = 0; i < this.baseMesh.length; i++) {
			let o = this.baseMesh[i];
			let m = o.mesh;
			let scaleNoise = o.scaleNoise;
			let posXNoise = o.posXNoise;
			let posYNoise = o.posYNoise;
			let speedNoise = o.speedNoise;

			// くるくる
			m.rotation.x += 0.005 * speedNoise;
			m.rotation.y -= 0.006 * speedNoise;
			m.rotation.z += 0.011 * speedNoise;

			// 位置とサイズ
			let bs = Math.min(sw, sh);
			m.scale.set(bs * scaleNoise, bs * scaleNoise, bs * scaleNoise);
			m.position.set(sw * posXNoise, sh * posYNoise, 0);
		}

		// ベースとなるシーンのレンダリング
		this.renderer.setClearColor(this.bgColor, 1);
		this.baseTg.setSize(sw * window.devicePixelRatio, sh * window.devicePixelRatio);
		this.renderer.setRenderTarget(this.baseTg);
		this.renderer.render(this.baseScene, this.mainCamera);
		this.renderer.setRenderTarget(null);　// TODO:RenderTargetをクリアするのを忘れない：その１

		// 出力用メッシュを画面サイズに
		this.dest.scale.set(sw, sh, 1);

		// レンダリング
		this.renderer.setClearColor(0x131521, 1);
		this.renderer.render(this.mainScene, this.mainCamera);
		this.renderer.setRenderTarget(null); // TODO:RenderTargetをクリアするのを忘れない：その２

		requestAnimationFrame( () => {
		  this.Update();
		});

	}

	/**
	 * メッシュ作成(描画部分)
	 * @private
	 */
	_createMesh() {
		this.uniforms = {
			tDiffuse:{ value: this.baseTg.texture },
			tMask:{  type : "t", value: this.maskTg.texture }
			// tMask:{ type : "t", value: this.maskTg.texture }
		};
		this.geometry = new THREE.PlaneBufferGeometry(1, 1);
		this.material = new THREE.ShaderMaterial({
			uniforms: this.uniforms,
			transparent: true,
			vertexShader: require('../../../../glsl/maskEffect.vert'),
			fragmentShader: require('../../../../glsl/maskEffect.frag')
		});

		//テクスチャの拡大縮小用のフィルタ
		// this.material.uniforms.tMask.value.magFilter = THREE.LinearFilter;
		// this.material.uniforms.tMask.value.minFilter = THREE.LinearFilter;
		// 動画テクスチャフォーマットの指定
		// this.material.uniforms.tMask.format = THREE.RGBFormat;
		//テクスチャのアップデート
		// this.material.uniforms.tMask.value.needsUpdate = true;

		this.dest = new THREE.Mesh(this.geometry, this.material);
		this.mainScene.add(this.dest);
	}

	/**
	 * マスク用のシーン作成
	 * @private
	 */
	_setupMask() {
		// マスクシーン
		this.maskScene = new THREE.Scene();

		// ↑のレンダリング先
		this.maskTg = new THREE.WebGLRenderTarget(16, 16);

		//
		this.maskMesh = new THREE.Mesh(
			new THREE.BoxBufferGeometry(1, 1, 1),
			new THREE.MeshBasicMaterial({
				color:0xff0000
			})
		);
		this.maskScene.add(this.maskMesh);
	}

	/**
	 * ベースとなるシーン作成
	 * @private
	 */
	_setupBase() {

		// ベースとなるシーン
		this.baseScene = new THREE.Scene();

		// ↑のレンダリング先
		this.baseTg = new THREE.WebGLRenderTarget(16, 16);

		for(let i = 0; i < 50; i++) {

			// この２つのカラーの間
			let colorA = new THREE.Color(0xe84932);
			let colorB = new THREE.Color(0x0a1d6d);

			let mesh = new THREE.Mesh(
				new THREE.BoxBufferGeometry(1, 1, 1),
				new THREE.MeshBasicMaterial({
					color:colorA.lerp(colorB, this.utils.random(0, 1)),
					wireframe: this.utils.hit(2) // 確率でワイヤー表示
				})
			);
			this.baseScene.add(mesh);

			this.baseMesh.push({
				mesh:mesh,
				scaleNoise: this.utils.random(0.1, 0.2),
				posXNoise: this.utils.range(0.6),
				posYNoise: this.utils.range(0.6),
				speedNoise: this.utils.range(0.6) * 2
			});

		}
	}



  /**
   *　画面リサイズイベント
	 * @private
   */
  _onResize() {

		// this.canvas.width = document.body.clientWidth;
    // this.canvas.height = document.body.clientHeight;
		//
    // this.camera.aspect = window.innerWidth / window.innerHeight;
    // this.camera.updateProjectionMatrix();
    // this.renderer.setSize(window.innerWidth, window.innerHeight);

  }

	_onLoad() {

	}

	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}
