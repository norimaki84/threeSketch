window.THREE = require('three');
var Stats = require('./libs/stats.js');
var dat　= require('dat-gui');
require('./libs/OrbitControls.js');

var Scene = require('./object/Scene.js');
var Camera = require('./object/Camera.js');

var Mesh = require('./object/mesh.js');

'use strict';

(function() {

  // globalオブジェクト
  if (window.gb === undefined) window.gb = {};
  window.gb.in = {}; //instance

  var sample = window.sample || {};
  window.sample = sample;

  //初期化実行
  $(function() {
    new sample.MainDisplay();
  });

})();


require('./object/mesh.js');

//Planeをインスタンス化
// var PlaneObject = new Plane();

// var MeshObject = new Mesh();

(function(){
  var sample = window.sample || {};
  window.sample = sample;

  /**
   * メインクラス
   */
  sample.MainDisplay = function () {
    //イニシャライズ
    p.init();
  };

  var p, s;

  s = sample.MainDisplay;
  p = s.prototype;

  var renderScene;

  /**
   * イニシャライズ
   */
  p.init = function () {
    var self = this;

    var stats = initStats();


    this.$window = $(window);
    this.$MainDisplay = $('#WebGL-output');

    this.timer += 0.01;

    //WebGL renderer
    gb.in.renderer = this.renderer = new THREE.WebGLRenderer({antialias: true});
    if (!this.renderer) {
      alert('Three.jsの初期化に失敗しました。');
    }
    this.renderer.setClearColor(new THREE.Color(0xEEEEEE));
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.shadowMap.enabled = true;

    // 高解像度対応
    var pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(pixelRatio);

    //scene
    gb.in.scene = new Scene();
    this.scene = gb.in.scene.scene;

    //camera
    gb.in.camera = new Camera();
    this.camera = gb.in.camera.camera;

    //
    gb.in.controls = new THREE.OrbitControls(this.camera);
    this.controls = gb.in.controls;
    this.controls.update();

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x090909);
    this.scene.add(ambientLight);

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-25, 25, 32);
    spotLight.castShadow = true;
    this.scene.add(spotLight);

    // window resize
    this.$window.on('resize', function(e) {
      self.onResize();
    });

    // resizeイベントを発火してキャンバスサイズをリサイズ
    this.$window.trigger('resize');

    //Cubeをインスタンス化
    gb.in.MeshObject = new Mesh();
    this.MeshObject = gb.in.MeshObject.mesh;


		window.console.log(gb.in.MeshObject.mesh.uniforms);


    //Planeをシーンに追加
    this.scene.add(this.MeshObject);


    document.getElementById("WebGL-output").appendChild(this.renderer.domElement);

    renderScene = function () {
      stats.update();

      // render using requestAnimationFrame
      requestAnimationFrame(renderScene);
      this.renderer.render(this.scene, this.camera);
    }.bind(this);

    // call the render function
    // var step = 0;
    renderScene();



    /**
     * dat.gui
     * dat.guiのコントローラーを定義
     */
    // var controls = new function () {
    //   this.rotationSpeed = 0.001;
    //   this.bouncingSpeed = 0.001;
    // };

    // var gui = new dat.GUI();
    // gui.add(controls, 'rotationSpeed', 0, 0.1);
    // gui.add(controls, 'bouncingSpeed', 0, 0.1);

    // var render =  function() {
    //   stats.update();
    //
    //   requestAnimationFrame(render);
    //   this.renderer.render(this.scene, this.camera);
    // }.bind(this);
    // render();

  };

  //Stats表示設定
  function initStats() {

    var stats = gb.in.stats = new Stats();

    stats.setMode(0); // 0: fps, 1: ms

    // Align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';

    document.getElementById("Stats-output").appendChild(stats.domElement);

    return stats;
  }

  /**
   * アニメーション開始
   */
  // p.start = function() {
  //   var self = this;
  //
  //   var enterFrameHandler = function() {
  //     requestAnimationFrame(enterFrameHandler);
  //     self.update();
  //   };
  //
  //   enterFrameHandler();
  // }

  /**
   * アニメーションループ内で実行される
   */
  p.updateAnimation = function() {
    requestAnimationFrame(renderScene);
    this.renderer.render(this.scene, this.camera);
  };


  /**
   * リサイズ処理
   */
  p.onResize = function () {

    this.width = this.$window.width();
    this.height = this.$window.height();

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

		// gb.in.uniforms.resolution.value.x = this.width;
		// gb.in.uniforms.resolution.value.y = this.height;

    this.renderer.setSize(this.width, this.height);
  };



  // p.createDatGUIBox = function () {

  // };

})();