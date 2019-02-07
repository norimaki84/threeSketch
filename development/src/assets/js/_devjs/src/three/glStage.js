// import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import * as THREE from 'three'

// import RawShaderMesh from './modules/RawShaderMesh';

export default class glStage {
	constructor() {

		this.context = null;

		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._rendering = null;

		/**
		 * // カメラの作成
		 * @type {PerspectiveCamera}
		 * @private
		 */
		// this._camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
		this._camera = THREE.Camera();

		/**
		 * シーンの作成
		 * @type {Scene}
		 * @private
		 */
		this._scene = THREE.Scene();

		/**
		 * レンダラの作成
		 * @type {WebGLRenderer}
		 * @private
		 */
		this._renderer = THREE.WebGLRenderer({
			antialias: true,		// アンチエイリアス有効
			alpha: true					// canvasに透明度バッファを持たせる
		});

		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._cnt = 0;

		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._speed = 1;

		/**
		 *
		 * @type {{x: number, y: number}}
		 * @private
		 */
		this._mouse = {
			x: 0,
			y: 0
		};
		/**
		 *
		 * @type {{x: number, y: number}}
		 * @private
		 */
		this._mousePos = {
			x: 0,
			y: 0
		};

		/**
		 *
		 * @type {{x: number, y: number}}
		 * @private
		 */
		this._mouseRatio = {
			x: 0.01,
			y: 0.01
		};

		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._initWidth = window.innerWidth;

		//


		/**
		 *
		 * @type {RawShaderMesh}
		 * @private
		 */
		// this._rawShaderMesh = new RawShaderMesh(1, 1);



	}

	/**
	 *
	 * @public
	 */
	setup() {
		this._camera.position.y = 0;
		this._camera.position.z = 5;
		this._camera.lookAt( 0, 0, 0 );
		this._scene.add(this._camera);
		// ==========================================
		// this._renderer.setClearColor(0x010c22, 0.0);										// レンダラの背景色
		this._renderer.setClearColor(new THREE.Color("black"), 0);										// レンダラの背景色
		// this._renderer.setSize(window.innerWidth, window.innerHeight);  // レンダラのサイズ
		this._renderer.setSize(640, 480);  // レンダラのサイズ
		this._renderer.domElement.style.position = "absolute";      // レンダラの位置は絶対値
		this._renderer.domElement.style.top = "0px";      // レンダラの上端
		this._renderer.domElement.style.left = "0px";     // レンダラの左端

		this._renderer.setPixelRatio(window.devicePixelRatio);

		// window.console.log(window.innerWidth);
		// window.console.log(window.innerHeight);
		// ==========================================

		// this._rawShaderMesh.setup();
		// this._scene.add(this._rawShaderMesh.mesh);



		document.getElementById( 'stage' ).appendChild( this._renderer.domElement );

		window.addEventListener( 'resize', this.resize.bind( this ) );

		// document.getElementById( 'stage' ).addEventListener( 'mousemove', e => {
		// 	this._mouse = {
		// 		x: (2 * e.clientX - window.innerWidth) / window.innerWidth,
		// 		y: (-1 * (2 * e.clientY - window.innerHeight) / window.innerHeight)
		// 	};
		// } );

	}

	/**
	 * アップデート
	 * @private
	 */
	_update() {
		this._mousePos.x += (this._mouse.x - this._mousePos.x) * this._mouseRatio.x;
		this._mousePos.y += (this._mouse.y - this._mousePos.y) * this._mouseRatio.y;

		this._cnt += this._speed;
		this._cnt = this._cnt % 360;

		// this._rawShaderMesh.update( this._cnt );
	}

	/**
	 * アニメーションフレームを回す
	 * @public
	 */
	render() {
		requestAnimationFrame(this.render.bind(this));

		this._renderer.render(this._scene, this._camera);

		if (this._rendering) cancelAnimationFrame(this._rendering);
		this._rendering = requestAnimationFrame(this.render.bind(this));

	}


	/**
	 * リサイズイベント
	 * @public
	 */
	resize() {
		if ( this._initWidth === window.innerWidth ) {
			return;
		}

		this._camera.aspect = window.innerWidth / window.innerHeight;
		this._camera.updateProjectionMatrix();

		this._renderer.setSize(window.innerWidth, window.innerHeight);

	}


	scroll(st) {

	}

}