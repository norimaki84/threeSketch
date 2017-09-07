/**
 * fileOverview:
 * Project:
 * File: Scene02
 * Date: 17/05/31
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';
import audio from "./Utils/audio";

'use strict';

export default class Scene03 extends Entry{

  constructor() {

    super();

    this.scene = null;
    this.camera = null;
    this.Box = null;
    this.timer = 0;

    this.elVolume = null;
    this.elVolumeVal = null;

    // this.audio = this._audio.bind(this);

    this.createScene = this._createScene.bind(this);
    this.update = this._update.bind(this);

    this.createScene();

    this.audioInit = new audio();
    //
    // this.aaa = this.audioInit.execute();
    // window.console.log(this.aaa);
    
    // this.aaa = this.audioInit.elVolumeVal();
    // window.console.log(this.audioInit);

    // this.audioInit(); //audioInit実行

  }


  audioInit(){

    let ctx, analyser, frequencies, getByteFrequencyDataAverage, execute;

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    ctx = new AudioContext();

    analyser = ctx.createAnalyser();
    frequencies = new Uint8Array(analyser.frequencyBinCount);

    getByteFrequencyDataAverage = function() {
      analyser.getByteFrequencyData(frequencies);
      return frequencies.reduce(function(previous, current) {
            return previous + current;
          }) / analyser.frequencyBinCount;
    };

    navigator.mediaDevices.getUserMedia({audio: true})
        .then((stream) => {
          window.hackForMozzila = stream;
          ctx.createMediaStreamSource(stream)
          // AnalyserNodeに接続
              .connect(analyser);
        })
        .catch((err) => {
          window.console.log(err.message);
        });

    // 音量を表示する要素
    this.elVolume = document.getElementById('volume');

    // 可能な限り高いフレームレートで音量を取得し、表示を更新する
    execute = function() {
      this.elVolume.innerHTML = Math.floor(getByteFrequencyDataAverage());
      this.elVolumeVal = Math.floor(getByteFrequencyDataAverage());

      requestAnimationFrame(execute);
    }.bind(this);

    //
    execute();
  }

  /**
   * シーンを作成。オブジェクトを格納
   * @private
   */
  _createScene(){

    this.scene = new THREE.Scene(); //シーン作成

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
    this.camera.position.z = 1000;

    this.geometry = new THREE.BoxGeometry(50,50,50);
    this.material = new THREE.MeshBasicMaterial(0x888888);

    this.Box = new THREE.Mesh(
        this.geometry,
        this.material
    );

    this.scene.add(this.Box);

  }


  /**
   * update関数
   * @private
   */
  _update(){

    // requestAnimationFrame(this.audioInit.execute());

    this.timer += 0.1;
    this.Box.position.x = 50 * Math.sin(this.timer);
    // this.Box.position.y = this.elVolumeVal * Math.sin(this.timer);

  }

}