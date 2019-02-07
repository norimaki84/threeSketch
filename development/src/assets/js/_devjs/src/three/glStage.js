// import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
// import * as THREE from 'three'

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
		this._camera = new THREE.Camera();

		/**
		 * シーンの作成
		 * @type {Scene}
		 * @private
		 */
		this._scene = new THREE.Scene();

		/**
		 * レンダラの作成
		 * @type {WebGLRenderer}
		 * @private
		 */
		this._renderer = new THREE.WebGLRenderer({
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

		/**
		 * arToolkitSourceの作成（マーカトラッキングするメディアソース）
		 * @type {THREEx.ArToolkitSource|THREEx.ArToolkitSource}
		 * @private
		 */
		this._source = new THREEx.ArToolkitSource({
			sourceType: "webcam",
		});

	}

	/**
	 *
	 * @public
	 */
	setup() {
		// this._camera.position.y = 0;
		// this._camera.position.z = 5;
		// this._camera.lookAt( 0, 0, 0 );
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

		// ==========================================

		let light = new THREE.DirectionalLight(0xffffff);     // 平行光源（白）を作成
		light.position.set(0, 0, 2);                          // カメラ方向から照らす
		this._scene.add(light);

		// ==========================================
		this._source.init(function onReady() {           // ソースを初期化し、準備ができたら
			window.console.log('redady');
			this.resize();                                      // リサイズ処理
		}.bind(this));

		//===================================================================
		// arToolkitContext（カメラパラメータ、マーカ検出設定）
		//===================================================================
		this.context = new THREEx.ArToolkitContext({           // arToolkitContextの作成
			debug: false,                                       // デバッグ用キャンバス表示（デフォルトfalse）
			cameraParametersUrl: "assets/camera_para.dat",             // カメラパラメータファイル
			detectionMode: "mono",                              // 検出モード（color/color_and_matrix/mono/mono_and_matrix）
			imageSmoothingEnabled: true,                        // 画像をスムージングするか（デフォルトfalse）
			maxDetectionRate: 60,                               // マーカの検出レート（デフォルト60）
			canvasWidth: this._source.parameters.sourceWidth,         // マーカ検出用画像の幅（デフォルト640）
			canvasHeight: this._source.parameters.sourceHeight,       // マーカ検出用画像の高さ（デフォルト480）
		});
		this.context.init(function onCompleted(){                  // コンテクスト初期化が完了したら
			this._camera.projectionMatrix.copy(this.context.getProjectionMatrix());   // 射影行列をコピー
		}.bind(this));


		//===================================================================
		// ArMarkerControls（マーカと、マーカ検出時の表示オブジェクト）
		//===================================================================
		//-------------------------------
		// その１（hiroマーカ＋立方体）
		//-------------------------------
		// マーカ
		// ネットでhiroマーカの画像を得て、以下の AR.js のマーカトレーニングサイトで patt を作成
		// https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html
		let marker1 = new THREE.Group();                      // マーカをグループとして作成
		let controls = new THREEx.ArMarkerControls(this.context, marker1, {    // マーカを登録
			type: "pattern",                                    // マーカのタイプ
			patternUrl: "assets/hiro.patt",                            // マーカファイル
		});
		this._scene.add(marker1);                                   // マーカをシーンに追加

		// モデル（メッシュ）
		let geo = new THREE.CubeGeometry(1, 1, 1);            // cube ジオメトリ（サイズは 1x1x1）
		let mat = new THREE.MeshNormalMaterial({              // マテリアルの作成
			transparent: true,                                  // 透過
			opacity: 0.5,                                       // 不透明度
			side: THREE.DoubleSide,                             // 内側も描く
		});

		let mesh1 = new THREE.Mesh(geo, mat);                 // メッシュを生成
		mesh1.name = "cube";                                  // メッシュの名前（後でピッキングで使う）
		mesh1.position.set(0, 0.5, 0);                        // 初期位置
		marker1.add(mesh1);                                   // メッシュをマーカに追加

		// マーカ隠蔽（cloaking）
		// let videoTex = new THREE.VideoTexture(this._source.domElement);  // 映像をテクスチャとして取得
		// videoTex.minFilter = THREE.NearestFilter;             // 映像テクスチャのフィルタ処理
		// let cloak = new THREEx.ArMarkerCloak(videoTex);       // マーカ隠蔽(cloak)オブジェクト
		// cloak.object3d.material.uniforms.opacity.value = 1.0; // cloakの不透明度
		// marker1.add(cloak.object3d);

		//===================================================================
		// Tween アニメーション
		//===================================================================
		//-------------------------------
		// mesh1 について（cubeが転がる）
		//-------------------------------
		var twIni1 = {posZ: 0, rotX: 0};                      // 初期パラメータ
		var twVal1 = {posZ: 0, rotX: 0};                      // tweenによって更新されるパラメータ
		var twFor1 = {posZ: -2, rotX: -Math.PI};              // ターゲットパラメータ
		function tween1() {                                   // 「行き」のアニメーション
			var tween = new TWEEN.Tween(twVal1)                 // tweenオブジェクトを作成
				.to(twFor1, 2000)                                   // ターゲットと到達時間
				.easing(TWEEN.Easing.Back.Out)                      // イージング
				.onUpdate(function() {                              // フレーム更新時の処理
					mesh1.position.z = twVal1.posZ;                   // 位置を変更
					mesh1.rotation.x = twVal1.rotX;                   // 回転を変更
				})
				.onComplete(function() {                            // アニメーション完了時の処理
					tween1_back();                                    // 「帰り」のアニメーションを実行
				})
				.delay(0)                                           // 開始までの遅延時間
				.start();                                           // tweenアニメーション開始
		}
		function tween1_back() {                              // 「帰り」のアニメーション
			var tween = new TWEEN.Tween(twVal1)
				.to(twIni1, 2000)                                   // ターゲットを初期パラメータに設定
				.easing(TWEEN.Easing.Back.InOut)
				.onUpdate(function() {
					mesh1.position.z = twVal1.posZ;
					mesh1.rotation.x = twVal1.rotX;
				})
				.onComplete(function() {
					// なにもしない
				})
				.delay(100)
				.start();
		}

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
		// this._update();
		// window.console.log("render");
		// window.console.log(this._source.ready);
		if(this._source.ready === false)    { return; }             // メディアソースの準備ができていなければ抜ける

		this.context.update(this._source.domElement);                  // ARToolkitのコンテキストを更新
		TWEEN.update();
		this._renderer.render(this._scene, this._camera);

		// if (this._rendering) cancelAnimationFrame(this._rendering);
		// this._rendering = requestAnimationFrame(this.render.bind(this));

	}


	/**
	 * リサイズイベント
	 * @public
	 */
	resize() {
		// if ( this._initWidth === window.innerWidth ) {
		// 	return;
		// }

		// this._camera.aspect = window.innerWidth / window.innerHeight;
		// this._camera.updateProjectionMatrix();

		// this._renderer.setSize(window.innerWidth, window.innerHeight);

		this._source.onResizeElement();                           // トラッキングソースをリサイズ
		this._source.copyElementSizeTo(this._renderer.domElement);      // レンダラも同じサイズに
		if(this.context.arController !== null){                  // arControllerがnullでなければ
			this._source.copyElementSizeTo(this.context.arController.canvas);  // それも同じサイズに
		}
	}

	/**
	 * リサイズイベント
	 * @public
	 */
	initArMarkerControls() {

	}


	scroll(st) {

	}

}