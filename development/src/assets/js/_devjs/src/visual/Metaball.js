/**
 * fileOverview:
 * Project:
 * File: Metaball
 * Date: 18/4/20
 * Author: Teraguchi
 */

import * as THREE from 'three';

'use strict';

export default class Metaball {

  constructor() {

    this.canvas = document.getElementById('webgl-output');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;

    // 基本セット
		/**
		 *
		 * @type {PerspectiveCamera}
		 */
		this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.1, 1000);

    this.renderer = null;
    this.scene = null;
		this.geometry = null;
		this.material = null;
		this.mesh = null;
		this.pointsLight = null;
		this.ambientLight = null;
		this.controls = null;
		this.dpr = window.devicePixelRatio;

		this.uniforms = {};

    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);
    this.createLight = this._createLight.bind(this);
    this.createMesh = this._createMesh.bind(this);

    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);

  }

  /**
   * 初期化
   */
  init(){

		this.camera.position.x = 0;
		this.camera.position.y = 0;
		this.camera.position.z = 1.5;
		this.camera.lookAt(new THREE.Vector3(0,0,0));

		this.createRenderer();
		this.createScene();
		this.createLight();
		this.createMesh();

		this.Update();
		window.addEventListener('resize', this.onResize);

  }

  /**
   * レンダラー作成
   */
  _createRenderer() {

		this.renderer = new THREE.WebGLRenderer({
      alpha              : false,
      antialias          : false,
      stencil            : false,
      depth              : true,
      premultipliedAlpha : true,
      canvas: this.canvas
		});

    this.renderer.setClearColor(0xffffff, 1.0);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize(this.width, this.height);

  }

  /**
   *　シーン作成
   */
  _createScene() {

		this.scene = new THREE.Scene();
		// this.scene.fog = new THREE.Fog(0xffffff, 0.05, 1.6);

  }


	/**
	 * ライト作成
	 * @private
	 */
  _createLight() {

		// Ambient Light
		this.ambientLight = new THREE.AmbientLight(0xffffff);
		this.scene.add(this.ambientLight);

		// let light = new THREE.HemisphereLight(0xe9eff2, 0x01010f, 1);
		// this.scene.add(light);

	}

	/**
	 * メッシュ作成
	 * @private
	 */
	_createMesh() {

		this.uniforms = {
			// texture: { type: 't', value: this.texture },
			u_time: { type: "f", value: 1.0 },
			u_resolution: { type: "v2", value: new THREE.Vector2(window.innerWidth * this.dpr, window.innerHeight * this.dpr) },
		};

		// this.geometry = new THREE.PlaneBufferGeometry(2, 2);
		this.geometry = new THREE.IcosahedronGeometry(0.5, 4);


		this.material = new THREE.RawShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: require('../../../../glsl/metaball.vert'),
			fragmentShader: require('../../../../glsl/metaball.frag')
		});

		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.scene.add(this.mesh);

	}

  /**
   * 更新
   * @private
   */
  _Update() {

		this.uniforms.u_time.value += 0.01;

		this.renderer.render(this.scene, this.camera);

    requestAnimationFrame( () => {
      this.Update();
    });

  }

  /**
   *　画面リサイズイベント
	 * @private
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
