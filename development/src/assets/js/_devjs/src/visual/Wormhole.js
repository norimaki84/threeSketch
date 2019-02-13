/**
 * fileOverview:
 * Project:
 * File: Wormhole
 * Date: 18/1/27
 * Author: Teraguchi
 */

// import Entry from '../Core/Entry';
import * as THREE from 'three';
import WormholeParticle from "./Utils/WormholeParticle";
// import loadTexture from '../utils/modules/loadTexture';

'use strict';

export default class Wormhole {

  constructor() {

    this.canvas = document.getElementById('webgl-output');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
    this.isMobile = this.width < 500;

    //
		this.speed = 1;
		this.prevTime = 0;

    this.stats = null;

    // 基本セット
    this.camera = null;
    this.renderer = null;
    this.scene = null;
		this.geometry = null;
		this.pointsLight = null;
		this.ambientLight = null;
		this.controls = null;
		this.mouse = {};
		this.particles = [];

		this.tubeGeometry = null;
		this.tubeGeometry_o = null;
		this.curve = null;
		this.splineMesh = null;

    this.createCamera = this._createCamera.bind(this);
    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);
    this.createLight = this._createLight.bind(this);

    this.addParticle = this._addParticle.bind(this);
    this.createMesh = this._createMesh.bind(this);
    this.handleEvents = this._handleEvents.bind(this);
    this.updateCameraPosition = this._updateCameraPosition.bind(this);
    this.updateCurve = this._updateCurve.bind(this);

		this.texsArray = [];
		this.vertShader = [

		];
		this.fragShader = [
			// "assets/glsl/computeShaderPosition.frag",
			// "assets/glsl/computeShaderVelocity.frag",
		];


    this.onResize = this._onResize.bind(this);
		this.Update = this._Update.bind(this);

  }

  /**
   * 初期化
   */
  init(){

		this.mouse = {
			position: new THREE.Vector2(this.width * 0.5, this.height * 0.7),
			ratio: new THREE.Vector2(0, 0),
			target: new THREE.Vector2(this.width * 0.5, this.height * 0.7)
		};

		this.createRenderer();
		this.createCamera();
		this.createScene();
		this.createLight();

		this.addParticle();

		this.createMesh();

		this.Update();

		window.addEventListener('resize', this.onResize, false );
		// this.loadTextureEvent();

  }


  /**
   * カメラ作成
   */
  _createCamera() {

    this.camera = new THREE.PerspectiveCamera(15, this.width / this.height, 0.01, 100);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 0.35;

		this.camera.rotation.y = Math.PI;

    this.camera.lookAt(new THREE.Vector3(0,0,0));

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
      premultipliedAlpha : false,
      canvas: this.canvas
		});

    this.renderer.setClearColor(0x000000, 1.0);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize(this.width, this.height);

  }

  /**
   *　シーン作成
   */
  _createScene() {

		this.scene = new THREE.Scene();
		this.scene.fog = new THREE.Fog(0xffffff, 0.05, 1.6);

  }


	/**
	 * ライト作成
	 * @private
	 */
  _createLight() {

		// Point Light
		// this.pointsLight = new THREE.PointLight(0xff0000);
		// this.pointsLight.position.set(500, 500, 0);
		// this.scene.add(this.pointsLight);

		// Ambient Light
		// this.ambientLight = new THREE.AmbientLight(0xffffff);
		// this.scene.add(this.ambientLight);

		let light = new THREE.HemisphereLight(0xe9eff2, 0x01010f, 1);
		this.scene.add(light);

	}

	/**
	 * パーティクルを生成
	 * @private
	 */
	_addParticle() {
		let that = this;
		for(let i = 0; i < (this.isMobile ? 70 : 150); i++){
			this.particles.push(new WormholeParticle(that.scene));
		}
	}

	/**
	 * メッシュを作成
	 * @private
	 */
	_createMesh() {
		let points = [];
		let i = 0;
		let geometry = new THREE.Geometry();
		// window.console.log('this.tubeMesh', this.tubeMesh);
		// this.scene.remove(this.tubeMesh);

		for (i = 0; i < 5; i += 1) {
			points.push(new THREE.Vector3(0, 0, 2.5 * (i / 4)));
		}
		points[4].y = -0.06;

		this.curve = new THREE.CatmullRomCurve3(points);
		this.curve.type = "catmullrom";

		// geometry = new THREE.Geometry();
		geometry.vertices = this.curve.getPoints(70);
		this.splineMesh = new THREE.Line(geometry, new THREE.LineBasicMaterial());

		this.tubeMaterial = new THREE.MeshBasicMaterial({
			side: THREE.BackSide,
			color: 0x000000
		});

		this.tubeGeometry = new THREE.TubeGeometry(this.curve, 70, 0.02, 30, false);
		this.tubeGeometry_o = this.tubeGeometry.clone();
		this.tubeMesh = new THREE.Mesh(this.tubeGeometry, this.tubeMaterial);

		this.scene.add(this.tubeMesh);
	}

	/**
	 * イベントアサイン
	 * @private
	 */
	_handleEvents() {

		window.addEventListener('resize', this.onResize, false );

	}

  /**
   * 更新
   * @private
   */
  _Update() {

  	let that = this;

		this.updateCameraPosition();

		this.updateCurve();

		for(let i = 0; i < this.particles.length; i++){
			that.particles[i].update(this);
			if(that.particles[i].burst && that.particles[i].percent > 1){
				that.particles.splice(i, 1);
				i--;
			}
		}

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
		// this.particleUniforms.cameraConstant.value = this.getCameraConstant(this.camera);

		this.isMobile = this.width < 500;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

  }

	/**
	 * カメラ位置を更新
	 * @private
	 */
	_updateCameraPosition() {

		this.mouse.position.x += (this.mouse.target.x - this.mouse.position.x) / 30;
		this.mouse.position.y += (this.mouse.target.y - this.mouse.position.y) / 30;
		this.mouse.ratio.x = (this.mouse.position.x / this.width);
		this.mouse.ratio.y = (this.mouse.position.y / this.height);

		this.camera.rotation.z = ((this.mouse.ratio.x) * 1 - 0.05);
		this.camera.rotation.y = Math.PI - (this.mouse.ratio.x * 0.3 - 0.15);
		this.camera.position.x = ((this.mouse.ratio.x) * 0.044 - 0.025);
		this.camera.position.y = ((this.mouse.ratio.y) * 0.044 - 0.025);

	}

	/**
	 * トンネルアップデート
	 * @private
	 */
	_updateCurve() {

		let i = 0;
		let index = 0;
		let vertice_o = null;
		let vertice = null;
		for (i = 0; i < this.tubeGeometry.vertices.length; i += 1) {
			vertice_o = this.tubeGeometry_o.vertices[i];
			vertice = this.tubeGeometry.vertices[i];
			index = Math.floor(i / 30);
			vertice.x += ((vertice_o.x + this.splineMesh.geometry.vertices[index].x) - vertice.x) / 15;
			vertice.y += ((vertice_o.y + this.splineMesh.geometry.vertices[index].y) - vertice.y) / 15;
		}
		this.tubeGeometry.verticesNeedUpdate = true;

		this.curve.points[2].x = 0.6 * (1 - this.mouse.ratio.x) - 0.3;
		this.curve.points[3].x = 0;
		this.curve.points[4].x = 0.6 * (1 - this.mouse.ratio.x) - 0.3;

		this.curve.points[2].y = 0.6 * (1 - this.mouse.ratio.y) - 0.3;
		this.curve.points[3].y = 0;
		this.curve.points[4].y = 0.6 * (1 - this.mouse.ratio.y) - 0.3;

		this.splineMesh.geometry.verticesNeedUpdate = true;
		this.splineMesh.geometry.vertices = this.curve.getPoints(70);

	}

	/**
	 * 画像をロード
	 * @private
	 */
	_loadTextureEvent() {

		loadTexture(this.texsArray, function () {

			window.console.log('リソース読み込み完了');

		});

	}

	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}