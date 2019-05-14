/**
 * fileOverview: Use ClockTransform
 * Project:
 * File: ClockTexture
 * Date: 18/2/9
 * Author: Teraguchi
 */

'use strict';

import Entry from "../../Core/Entry";

export default class ClockTexture extends Entry {

  constructor(width, height) {

		super();

		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.width = this.canvas.width = width;
		this.height = this.canvas.height = height;

		this.getTime = this._getTime.bind(this);
		this.render = this._render.bind(this);

    this.init();
  }

  /**
   * 初期化
   */
  init() {


  }

	/**
	 *
	 * @private
	 */
	_getTime() {

		let date = new Date();

		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();

		if (hours.toString().length === 1) hours = `0${hours}`;
		if (minutes.toString().length === 1) minutes = `0${minutes}`;
		if (seconds.toString().length === 1) seconds = `0${seconds}`;

		//
		return `${hours}:${minutes}:${seconds}`;

	}

	/**
	 *
	 * @private
	 */
	_render() {

		this.ctx.fillStyle = '#111';
		this.ctx.fillRect(0, 0, this.width, this.height);
		this.ctx.fillStyle = '#fff';
		this.ctx.font = '120px Arial';
		this.ctx.textAlign = 'center';
		this.ctx.fillText(this.getTime(), this.width / 2, this.height / 2 + 30);
		let img = this.ctx.getImageData(0, 0, this.width, this.height);

		return new THREE.Texture(img);

	}

}