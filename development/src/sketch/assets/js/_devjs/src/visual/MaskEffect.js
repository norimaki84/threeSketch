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

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // 基本セット
		/**
		 *
		 * @type {PerspectiveCamera}
		 */

		this.utils = new Utils();

    this.renderer = null;
    this.scene = null;
		this.geometry = null;
		this.material = null;
		this.mesh = null;
		this.pointsLight = null;
		this.ambientLight = null;
		this.controls = null;
		this.dpr = window.devicePixelRatio;

		this.maskScene = null;
		this.maskTg = null;

		this.baseScene = null;
		this.baseTg = null;

		this.maskMesh = null;
		this.baseMesh = [];

		this.uniforms = {};

		this.setupMask = this._setupMask.bind(this);
		this.setupBase = this._setupBase.bind(this);

		this.onLoad = this._onLoad.bind(this);

    this.createMesh = this._createMesh.bind(this);

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);

  }

  /**
   * 初期化
   */
  init(){

		let sw = $(window).width();
		let sh = window.innerHeight;

		this.renderer = new THREE.WebGLRenderer({
			alpha : true,
			antialias : false,
			stencil : false,
			depth              : true,
			premultipliedAlpha : true,
			powerPreference : 'low-power',
			canvas: this.canvas,
		});
		this.renderer.autoCLear = true;

		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera(80, 1, 0.1, 50000);

		// マスク用のシーン作成
		this.setupMask();

		// ベースとなるシーン作成
		this.setupBase();

		this.createMesh();

		this.Update();

		window.addEventListener('resize', this.onResize);

  }

	/**
	 * メッシュ作成
	 * @private
	 */
	_createMesh() {
		this.uniforms = {
			tDiffuse:{ value: this.baseTg.texture },
			tMask:{ value: this.maskTg.texture }
		};
		this.geometry = new THREE.PlaneBufferGeometry(1, 1);
		this.material = new THREE.ShaderMaterial({
			uniforms: this.uniforms,
			transparent: true,
			vertexShader: require('../../../../glsl/maskEffect.vert'),
			fragmentShader: require('../../../../glsl/maskEffect.frag')
		});
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.scene.add(this.mesh);
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
		let sw = window.innerWidth;
		let sh = window.innerHeight;

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
   * 更新
   * @private
   */
  _Update() {

		let sw = window.innerWidth;
		let sh = window.innerHeight;

		// カメラ設定
		// ピクセル等倍になるように
		this.camera.aspect = sw / sh;
		this.camera.updateProjectionMatrix();
		this.camera.position.z = sh / Math.tan(this.camera.fov * Math.PI / 360) / 2;

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
		this.renderer.setClearColor(0x131521, 0);
		this.maskTg.setSize(sw * window.devicePixelRatio, sh * window.devicePixelRatio);
		this.renderer.setRenderTarget(this.maskTg, true);
		this.renderer.render(this.maskScene, this.camera);

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
		this.renderer.setClearColor(0x131521, 1);
		this.baseTg.setSize(sw * window.devicePixelRatio, sh * window.devicePixelRatio);
		this.renderer.setRenderTarget(this.baseTg, true);
		this.renderer.render(this.baseScene, this.camera);

		// 出力用メッシュを画面サイズに
		this.mesh.scale.set(sw, sh, 1);

		// レンダリング
		this.renderer.setClearColor(0x131521, 1);
		this.renderer.render(this.scene, this.camera);

    // requestAnimationFrame( () => {
    //   this.Update();
    // });

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
