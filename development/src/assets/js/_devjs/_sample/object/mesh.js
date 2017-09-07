window.THREE = require('three');

var glslify = require('glslify');

/**
 * Mesh
 */
'use strict';

var Mesh = (function () {
  // globalオブジェクト
  if (window.gb === undefined) window.gb = {};
  window.gb.in = {}; //instance


  function Mesh() {
    this.init.apply(this, arguments);
  }

  var p, s;

  s = Mesh;
  p = s.prototype;

  p.init = function() {
    this.mesh = null;
    this.geometry = null;
    this.material = null;

    this.uniforms = null;

    //イニシャライズ実行
    this.setup();

    this.update();
  };

  p.setup = function() {
    this.geometry = new THREE.PlaneBufferGeometry(2, 2);

		gb.in.uniforms = this.uniforms = {
      time:       { value: 1.0 },
      resolution: { value: new THREE.Vector2() }
    };

    this.material = new THREE.ShaderMaterial( {
      uniforms: this.uniforms,
      vertexShader: require('../../glsl/test.vert'),
      fragmentShader: require('../../glsl/test.frag')
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.castShadow = true;

    this.mesh.position.x = 0;
    this.mesh.position.y = 0;
    this.mesh.position.z = 0;

    return this.mesh;

  };

  //
  p.create = function () {

  };

  //
  p.update = function () {
    // this.uniforms.time.value += 0.05;
		gb.in.uniforms.time.value += 0.05;
		requestAnimationFrame(p.update);
		gb.in.renderer.render(gb.in.scene.scene, gb.in.camera.camera);

  };

  //
  p.setEvents = function () {

  };

  return Mesh;

  //グローバルオブジェクト化
  // gb.Cube = Cube;

}());

module.exports = Mesh;