window.THREE = require('three');

/**
 * Camera
 */

'use strict';


var Camera = (function () {

  function Camera() {
    this.init.apply(this, arguments);
  }

  var p, s;

  s = Camera;
  p = s.prototype;

  p.init = function() {
    this.camera;
    this.vec3 = new THREE.Vector3(0,0,0);

    this.setup();
    this.create();

    this.update();
  };

  p.setup = function() {
    // console.log('Camera_setup!!!!!');

  };

  //
  p.create = function () {

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 1;
    // this.camera.lookAt( gb.in.scene.scene.position );
  };

  //
  p.update = function () {

  };

  //
  p.setEvents = function () {

  };

  return Camera;

}());

module.exports = Camera;
