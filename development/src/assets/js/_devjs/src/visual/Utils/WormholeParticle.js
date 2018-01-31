/**
 * fileOverview:
 * Project:
 * File: WormholeParticle
 * Date: 18/01/27
 * Author: Teraguchi
 */

'use strict';

import Entry from "../../Core/Entry";

export default class WormholeParticle extends Entry {
// export default class WormholeParticle{

  constructor(scene, burst, time) {

		super();

  	// 引数
		this.scene = scene;
		this.burst = burst;
		this.time = time;

		this.radius = Math.random() * 0.002 + 0.0003;
		// this.geom = this.icosahedron;
		this.geom = null;
		this.random = Math.random();
		this.mesh = null;

		this.color = null;

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
		this.mesh = new THREE.Mesh(geom, mat);
		this.mesh.scale.set(this.radius, this.radius, this.radius);
		this.mesh.position.set(0 ,0, 1.5);
		this.percent = burst ? 0.2 : Math.random();
		this.burst = burst ? true : false;
		this.offset = new THREE.Vector3((Math.random() - 0.5) * 0.025, (Math.random() -0.5) * 0.025, 0);
		this.speed = Math.random() * 0.004 + 0.0002;
		if (this.burst){
			this.speed += 0.003;
			this.mesh.scale.x *= 1.4;
			this.mesh.scale.y *= 1.4;
			this.mesh.scale.z *= 1.4;
		}
		this.rotate = new THREE.Vector3(-Math.random() * 0.1 + 0.01, 0, Math.random() * 0.01);

		this.pos = new THREE.Vector3(0,0,0);
		this.scene.add(this.mesh);

  }

	/**
	 * ジオメトリ作成
	 * @private
	 */
	_createGeometry() {
		this.cube = new THREE.BoxBufferGeometry(1, 1, 1);
		this.sphere = new THREE.SphereBufferGeometry(1, 6, 6 );
		this.icosahedron = new THREE.IcosahedronBufferGeometry(1,0);
	}

	/**
	 * 更新
	 * @private
	 */
	_Update(tunnel) {
		this.percent += this.speed * (this.burst?1:tunnel.speed);

		this.pos = tunnel.curve.getPoint(1 - (this.percent%1)) .add(this.offset);
		this.mesh.position.x = this.pos.x;
		this.mesh.position.y = this.pos.y;
		this.mesh.position.z = this.pos.z;
		this.mesh.rotation.x += this.rotate.x;
		this.mesh.rotation.y += this.rotate.y;
		this.mesh.rotation.z += this.rotate.z;
	}

}