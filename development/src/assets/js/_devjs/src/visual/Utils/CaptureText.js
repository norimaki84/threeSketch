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

  constructor(text, width, height) {

		super();

		this.text = text;
		this.texture = null;
		this.metrics = null;

		// キャンバスの作成
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.width = this.canvas.width = width;
		this.height = this.canvas.height = height;


		this.drawText = this._drawText.bind(this);
		this.createTexture = this._createTexture.bind(this);

    this.init();
  }

  /**
   * 初期化
   */
  init() {

		this.drawText();

		this.createTexture();

  }

	/**
	 * 文字の描画
	 * @private
	 */
	_drawText() {

		// 文字の描画開始
		this.context.beginPath();

		// 文字色指定
		this.context.fillStyle = '#ffffff';

		// フォントサイズとスタイルの定義
		this.context.font= '256px sans-serif';

		// 文字の表示位置指定
		this.context.textAlign = 'center';
		this.context.textBaseline = 'middle';

		//幅を測定する文字列を指定
		this.metrics = this.context.measureText(this.text);

		// 文字、文字の開始位置、最大幅
		// this.context.fillText(this.text, 0, 0, this.width);
		this.context.fillText(this.text, this.metrics.width, this.metrics.width / 2);
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

}