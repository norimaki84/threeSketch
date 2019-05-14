/**
 * fileOverview:
 * Project:
 * File: PlaneCover
 * Date: 18/01/24
 * Author: Teraguchi
 */

'use strict';

import Entry from '../Core/Entry';


export default class PlaneCover extends Entry{

  constructor() {

    super();

		this.uniforms = {};
		this.texture = null;
		this.mesh = null;

		this.loadTexture = this._loadTexture.bind(this);
		this.createMesh = this._createMesh.bind(this);
		this.render = this._render.bind(this);
		this.resize = this._resize.bind(this);

  }

	/**
	 *
	 * @param image
	 * @param callback
	 * @private
	 */
	_loadTexture(image, callback) {
		const loader = new THREE.TextureLoader();
		loader.load(image, (texture) => {
			texture.magFilter = THREE.NearestFilter;
			texture.minFilter = THREE.NearestFilter;
			this.texture = texture;
			this.mesh = this.createMesh();
			callback();
		});
	}

	/**
	 *
	 * @returns {*|pf.params.Mesh|{}|ra|gn.params.Mesh|Dt}
	 * @private
	 */
	_createMesh() {
		this.uniforms = {
			resolution: {
				type: 'v2',
				value: new THREE.Vector2(document.body.clientWidth, document.body.clientHeight),
			},
			imageResolution: {
				type: 'v2',
				value: new THREE.Vector2(2048, 1356),
			},
			texture: {
				type: 't',
				value: this.texture,
			}
		};
		this.mesh =  new THREE.Mesh(
			new THREE.PlaneBufferGeometry(2, 2),
			new THREE.RawShaderMaterial({
				uniforms: this.uniforms,
				vertexShader: require('../../../../glsl/cover02.vert'),
				fragmentShader: require('../../../../glsl/cover02.frag'),
			})
		);
	}


  /**
   * レンダラー
   * @private
   */
	_render(time) {

		if (this.stop) return;
		this.uniforms.time.value += time / this.interval;
		if (this.uniforms.time.value > 1) {
			this.uniforms.time.value = 0;
			this.prev_num = this.next_num;
			this.uniforms.texPrev.value = this.textures[this.next_num];
			while (this.next_num == this.prev_num) {
				this.next_num = Math.floor(Math.random() * this.textures.length);
			}
			this.uniforms.texNext.value = this.textures[this.next_num];
		}
  }

	_resize(){
		this.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);
	}

}