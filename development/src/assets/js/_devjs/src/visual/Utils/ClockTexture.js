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

    this.init();
  }

  /**
   * 初期化
   */
  init(){


  }


}