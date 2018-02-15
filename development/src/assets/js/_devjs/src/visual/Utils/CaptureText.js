/**
 * fileOverview: Use TextTransform
 * Project:
 * File: CaptureText
 * Date: 18/2/13
 * Author: Teraguchi
 */

'use strict';

import Entry from "../../Core/Entry";

export default class CaptureText extends Entry {

  constructor(text, fontSize, fontFamily, color) {

		super();

		this.text = text;
		this.fontSize = fontSize;
		this.fontFamily = fontFamily;
		this.color = color;
		this.texture = null;
		this.metrics = null;
		this.planeTexture = null;

		// キャンバスの作成
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.width = this.canvas.width = this.fontSize;
		this.height = this.canvas.height = this.fontSize;

		this.drawText = this._drawText.bind(this);
		this.createTexture = this._createTexture.bind(this);
		this.createPlane = this._createPlane.bind(this);

    this.init();

  }

  /**
   * 初期化
   */
  init() {

		this.drawText();

		this.createTexture();
		
		this.createPlane();

  }

	/**
	 * 文字の描画
	 * @private
	 */
	_drawText() {

		// 文字の描画開始
		this.context.beginPath();

		// 文字色指定
		this.context.fillStyle = '#' + this.color;

		// フォントサイズとスタイルの定義
		this.context.font= this.fontSize + 'px ' + this.fontFamily;

		// 文字の表示位置指定
		this.context.textAlign = 'center';
		this.context.textBaseline = 'middle';

		//幅を測定する文字列を指定
		this.metrics = this.context.measureText(this.text);
		// window.console.log('this.metrics.width', this.metrics.width);

		// 文字、文字の開始位置、最大幅
		this.context.fillText(this.text, this.width / 2, this.height / 2);
		this.context.fill();

	}

	/**
	 * テクスチャを作成
	 * @private
	 */
	_createTexture() {

		// テクスチャの作成
		this.texture = new THREE.Texture(this.canvas);

		this.texture.minFilter = THREE.LinearFilter;

		// これをやらないとマテリアルは真っ暗
		this.texture.needsUpdate = true;

	}

	/**
	 * テクスチャを貼り付ける板ポリを作成
	 * @private
	 */
	_createPlane() {
		
		let geometry = new THREE.PlaneBufferGeometry(this.metrics.width, this.height, 32);
		
		let material = new THREE.MeshPhongMaterial( {
			map: this.texture,
			color: 0xffffff,
			side: THREE.DoubleSide
		} );

		this.planeTexture = new THREE.Mesh(geometry, material);
	}

}