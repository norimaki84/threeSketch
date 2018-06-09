/**
 * fileOverview:
 * Project:
 * File: simpleTimer
 * Date: 18/6/9
 * Author: Teraguchi
 */

'use strict';

export default class simpleTimer {
	/**
	 * @param countVal :　カウントする値
	 * @param callback :　コールバック関数
	 * @param setting : true = countUp、false = countDown（引数なしの場合のデフォルトはtrue）
	 */
  constructor(countVal, callback, setting) {
  	this.countVal = countVal;
		this.callback = callback;
  	this.setting = setting;
		if(typeof this.setting == 'undefined'){
			this.setting = true;
		} else {
			this.setting = false;
		}

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

	/**
	 * カウントスタート
	 * @private
	 */
	_start() {

		this.requestId = requestAnimationFrame(() => {
			this.start();
		});

		const allocate = this.setting ? this.countUp(this.countVal) : this.countDown(this.countVal);

  }

	/**
	 * タイマークリア
	 * @private
	 */
	_clear() {

		cancelAnimationFrame(this.requestId);

	}

	/**
	 * カウントアップ
	 * @private
	 */
	_countUp() {

		this.currentTime = new Date().getTime();
		this.status = this.currentTime - this.startTime;
		this.timeVal = this.computeDuration(this.status);
		window.console.log(this.timeVal);
		if(this.timeVal == this.countVal){
			cancelAnimationFrame(this.requestId);
			this.callback();
		}

	}

	/**
	 * カウントダウン
	 * @private
	 */
	_countDown() {

		this.currentTime = new Date().getTime();
		this.status = this.currentTime - this.startTime;
		this.timeVal = this.countVal - this.computeDuration(this.status);
		window.console.log(this.timeVal);
		if(this.timeVal == 0){
			cancelAnimationFrame(this.requestId);
			this.callback();
		}

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