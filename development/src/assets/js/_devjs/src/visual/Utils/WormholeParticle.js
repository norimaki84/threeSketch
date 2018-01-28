/**
 * fileOverview:
 * Project:
 * File: WormholeParticle
 * Date: 18/01/27
 * Author: Teraguchi
 */

'use strict';

import Entry from "../../core/Entry";

export default class WormholeParticle extends Entry {

  constructor(scene, burst, time) {

		this.radius = Math.random()*0.002 + 0.0003;
		this.geom = this.icosahedron;
		this.random = Math.random();

    this.init();
  }

  /**
   * 初期化
   */
  init(){

    this.createCameraObject();

  }


}