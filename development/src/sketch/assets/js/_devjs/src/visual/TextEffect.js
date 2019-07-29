/**
 * fileOverview:
 * Project:
 * File: TextEffect
 * Date: 18/2/6
 * Author: Teraguchi
 */

import * as THREE from 'three';
import * as dat from 'dat.gui';
// import CaptureText from "./Utils/CaptureText";

'use strict';

export default class TextEffect {

  constructor() {

    this.canvas = document.getElementById('webgl-output');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;

    this.canvasWidth = null;

		this.gui = new dat.GUI();

		this.capText = null;

		this.posX = null;
		this.posY = null;
		this.mesh = null;

		/**
		 * カメラ作成
		 * @type {PerspectiveCamera}
		 */
		this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1.0, 1000);

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

		this.uniforms = null;

		this.createLabel = this._createLabel.bind(this);
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
		// this.capText = new CaptureText('No', 256, 'sans-serif', '000000');
		// this.scene.add(this.capText.planeTexture);
		// let x = window.innerWidth / 2 - 300;
		this.posX = this.width / 2 - 300;
		this.posY = this.height / 2 - 300;
		this.mesh = this.createLabel('Norimaki.jp', this.posX, this.posY, 0, 100, '000', 'bold', 'sans-serif', 'ffff00', 50);
		this.scene.add(this.mesh);

		this.Update();

		this.onResize();
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
	 * キャンバステクスチャーを生成
	 * @param text							: 文字列
	 * @param x									: 文字の位置(X)
	 * @param y									: 文字の位置(Y)
	 * @param z									: 文字の位置(Z)
	 * @param size							: サイズ
	 * @param color							: 色
	 * @param weight						: ウェイト
	 * @param font							: フォントネーム
	 * @param backGroundColor		: 背景色
	 * @param backgroundMargin	: 余白
	 */
	_createLabel(text, x, y, z, size, color, weight, font, backGroundColor, backgroundMargin) {

		if(!backgroundMargin)
			backgroundMargin = 50;

		let canvas = document.createElement('canvas');

		let context = canvas.getContext('2d');
		context.font = weight + ' ' + size + 'px ' + font;

		let textWidth = context.measureText(text).width;

		this.canvasWidth = canvas.width = textWidth + backgroundMargin;
		canvas.height = size + backgroundMargin;
		context = canvas.getContext('2d');
		context.font = weight + ' ' + size + 'px ' + font;

		if(backGroundColor) {
			context.fillStyle = '#' + backGroundColor;
			context.fillRect(canvas.width / 2 - textWidth / 2 - backgroundMargin / 2, canvas.height / 2 - size / 2 - +backgroundMargin / 2, textWidth + backgroundMargin, size + backgroundMargin);
		}

		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillStyle = '#' + color;
		context.fillText(text, canvas.width / 2, canvas.height / 2);

		let texture = new THREE.CanvasTexture(canvas);
		texture.minFilter = THREE.LinearFilter;
		texture.needsUpdate = true;

		// ユニフォーム変数
		this.uniforms = {
			texture: { type: 't', value: texture },
			u_time: { type: 'f', value: 1.0 },
		};

		let material = new THREE.RawShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: require('../../../../glsl/textTransform.vert'),
			fragmentShader: require('../../../../glsl/textTransform.frag'),
			side: THREE.DoubleSide,
			transparent: true,
		});

		let mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(canvas.width, canvas.height), material);
		// mesh.overdraw = true;
		mesh.doubleSided = true;
		mesh.position.x = x - canvas.width;
		mesh.position.y = y - canvas.height;
		mesh.position.z = z;
		return mesh;
	}

  /**
   * 更新
   * @private
   */
  _Update() {

		this.renderer.render(this.scene, this.camera);

		this.uniforms.u_time.value += 1.0;

    requestAnimationFrame(() => {
      this.Update();
    });

  }

	/**
	 * 画面リサイズイベント
	 * @private
	 */
  _onResize() {

		this.width = document.body.clientWidth;
		this.height = document.body.clientHeight;

		this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;

		this.posX = this.canvasWidth / 2;

    // this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(this.width, this.height);

  }

	onLoad() {}

	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}
