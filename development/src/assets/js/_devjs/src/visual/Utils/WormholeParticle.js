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

  	// 引数
		this.scene = scene;
		this.burst = burst;
		this.time = time;

		this.radius = Math.random()*0.002 + 0.0003;
		// this.geom = this.icosahedron;
		this.geom = null;
		this.random = Math.random();

		this.cube = null;
		this.sphere = null;
		this.icosahedron = null;

		this.createGeometry = this._createGeometry.bind(this);
		this.Update = this._Update.bind(this);

    this.init();
  }

  /**
   * 初期化
   */
  init(){

  	let that = this;

		if(this.random > 0.9){
			that.geom = this.cube;
		} else if(this.random > 0.8){
			that.geom = this.sphere;
		}

		let range = 50;
		if(this.burst){
			this.color = new THREE.Color("hsl("+(time / 50)+",100%,60%)");
		} else {
			let offset = 180;
			this.color = new THREE.Color("hsl("+(Math.random() * range + offset)+",100%,80%)");
		}
		let mat = new THREE.MeshPhongMaterial({
			color: this.color,
			shading:THREE.FlatShading
		});

  }

	/**
	 * ジオメトリ作成
	 * @private
	 */
	_createGeometry() {

	}

	/**
	 * 更新
	 * @private
	 */
	_Update() {

	}

}