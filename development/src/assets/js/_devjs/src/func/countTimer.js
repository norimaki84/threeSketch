/**
 * fileOverview:
 * Project:
 * File: countTimer
 * Date: 18/2/9
 * Author: Teraguchi
 */

'use strict';

export default class countTimer {

  constructor(countVal) {

  	this.countVal = countVal;

    this.startTime = null;
    this.currentTime = null;
    this.requestId = null;
    this.status = null;
    this.timeVal = null;

    this.start = this._start.bind(this);
    this.clear = this._clear.bind(this);
    this.countUp = this._countUp.bind(this);
    this.countDown = this._countDown.bind(this);
    this.computeDuration = this._computeDuration.bind(this);

    this.init();

  }

  init() {

		this.startTime = new Date().getTime();

  }

  _start() {

		this.requestId = requestAnimationFrame(() => {
			this.start();
		});

		this.currentTime = new Date().getTime();
		this.status = this.currentTime - this.startTime;
		this.timeVal = this.countVal - this.computeDuration(this.status);
		window.console.log(this.timeVal);
		if(this.timeVal == 0){
			cancelAnimationFrame(this.requestId);
		}

		// this.countDown(countVal);

  }

	_clear() {

	}

	_countUp() {

  }

  _countDown() {

		// this.requestId = window.requestAnimationFrame(this.start());
		// this.currentTime = new Date().getTime();
		// this.status = this.currentTime - this.startTime;
		// this.timeVal = countVal - this.computeDuration(this.status);
		// window.console.log(this.timeVal);
		// if(this.timeVal == 0){
		// 	window.cancelAnimationFrame(this.requestId);
		// 	window.console.log('timerEnd');
		// }

  }

	/**
   * ミリ秒を時分秒へ変換
	 * @param ms : ミリ秒
	 * @returns {string}
	 * @private
	 */
	_computeDuration(ms) {

		let h = String(Math.floor(ms / 3600000) + 100).substring(1);
		let m = String(Math.floor((ms - h * 3600000)/60000)+ 100).substring(1);
		let s = String(Math.round((ms - h * 3600000 - m * 60000)/1000)+ 100).substring(1);

		return s;

  }

}