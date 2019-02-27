/**
 * fileOverview:
 * Project: GLSL ZoomBlur
 * File: Floating
 * Date: 17/11/19
 * Author: Teraguchi
 */

'use strict';
import * as THREE from 'three';

// import Entry from '../Core/Entry';

export default class ZoomBlur {

  constructor() {

    this.canvas = document.getElementById('webgl-output');
		this.canvasEl = $('#ZoomBlur #webgl-output');

		this.width = 512;
		this.height = 512;
		this.ratio = 1.0;

		/**
		 *
		 * @type {PerspectiveCamera}
		 */
		this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);

		/**
		 *
		 * @type {Scene}
		 */
		this.scene = new THREE.Scene();

		/**
		 *
		 * @type {WebGLRenderer}
		 */
		this.renderer = new THREE.WebGLRenderer({
			alpha              : false,
			antialias          : false,
			stencil            : false,
			depth              : true,
			premultipliedAlpha : false,
			canvas: this.canvas
		});

		this.updateStrength = this._updateStrength.bind(this);
		this.draw = this._draw.bind(this);

		this.uniforms = {};
		this.u_time = null;
		this.textureUnit = null;
		this.mesh = null;
		this.createMesh = this._createMesh.bind(this);

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);
		this.loadTexture = this._loadTexture.bind(this);


  }


  /**
   * 初期化
   */
  init(){

		this.camera.position.x = 0;
		this.camera.position.y = 0;
		this.camera.position.z = 600;
		this.camera.lookAt(new THREE.Vector3(0,0,0));

		this.renderer.setClearColor(0xEEEEEE, 1.0);
		this.renderer.setPixelRatio(window.devicePixelRatio || 1);
		this.renderer.setSize(this.width, this.height);


		let retina = window.devicePixelRatio;
		if(retina < 2) {
			// window.console.log('Retinaディスプレイとかの高解像度ではないです。');
			this.ratio = 1.0;
		} else if(retina >= 2) {
			// window.console.log('Retinaディスプレイとかの高解像度です！');
			this.ratio = 2.0;
		}

		this.loadTexture('../../../../assets/resource/img/sample.jpg', () => {
			this.scene.add(this.mesh);
			this.updateStrength();
			this.Update();
		});

  }

	/**
	 * マウスオーバー・マウスアウトでuniforms変数を更新
	 * @private
	 */
	_updateStrength(){
		let that = this;
		this.canvasEl
			.mouseover(() => {
				TweenMax.to(that.mesh.material.uniforms.strength, 0.8, {
					value: 15,
					ease: Linear.easeNone,
					overwrite: true,
					onUpdate: () => {
						return that.draw();
					}
				});
			})
			.mouseout(() => {
				TweenMax.to(that.mesh.material.uniforms.strength, 0.8, {
					value: 0,
					ease: Linear.easeNone,
					overwrite: true,
					onUpdate: () => {
						return that.draw();
					}
				});
			});
	}

	/**
	 * 再描画
	 * @private
	 */
	_draw(){
		this.renderer.render(this.scene, this.camera);
	}

	/**
	 *
	 * @returns {pe.params.Mesh|{}|Aa|*|Ln.params.Mesh|Mt}
	 * @private
	 */
	_createMesh() {

		this.uniforms = {
			textureUnit: { type: 't', value: this.textureUnit },
			u_time: { type: "f", value: this.u_time },
			strength: { type: "1f", value: 0 },
			u_resolution: { type: "v2", value: new THREE.Vector2(this.width * this.ratio, this.height * this.ratio) },
			u_ratio: { type: "1f", value: this.ratio }
		};
		return new THREE.Mesh(
			new THREE.PlaneBufferGeometry(1, 1),
			new THREE.RawShaderMaterial({
				uniforms: this.uniforms,
				vertexShader: require('../../../../glsl/zoomblur.vert'),
				fragmentShader: require('../../../../glsl/zoomblur.frag'),
			})
		);

	}

	/**
	 * 更新
	 * @private
	 */
	_Update() {

		this.renderer.render(this.scene, this.camera);

		requestAnimationFrame( () => {
			this.Update();
		});

	}

	/**
	 * 画像をロード
	 * @private
	 */
	_loadTexture(image, callback) {

		let that = this;
		const loader = new THREE.TextureLoader();
		loader.load(image, (texture) => {
			texture.magFilter = THREE.NearestFilter;
			texture.minFilter = THREE.NearestFilter;
			that.textureUnit = texture;
			this.mesh = this.createMesh();
			this.mesh.scale.set(512, 512, 512);
			window.console.log();
			callback();
		})

	}


  /**
   *　画面リサイズイベント
   */
  _onResize() {

		this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

  }


	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}
