/**
 * fileOverview:
 * Project:
 * File: Capture
 * Date: 18/2/28
 * Author: Teraguchi
 */

'use strict';

// import Entry from "../../Core/Entry";

export default class Capture extends THREE.Scene {

  constructor() {

    super();

    this.Texture = null;

    this.texture = this._texture.bind(this);
    this.render = this._render.bind(this);
    this.size = this._size.bind(this);

  }

	/**
   * 初期化
	 */
	init(){

		this.Texture = new THREE.WebGLRenderTarget(16, 16);

  }

	/**
   * テクスチャ
	 */
	_texture(){

	  return this.Texture.texture;

  }

	/**
   * テクスチャにレンダリング
	 * @param renderer
	 * @param camera
	 */
  _render(renderer, camera){
		//this -> オフスクリーンレンダリング用のScene, camera -> オフスクリーンレンダリング用のCamera,
		//第三引数にはテクスチャを指定
    renderer.render(this, camera, this.Texture);

  }

	/**
   * レンダリング先テクスチャのサイズ設定
	 * @param width
	 * @param height
	 */
  _size(width, height){

    let ratio = window.devicePixelRatio || 1;
		this.Texture.setSize(width * ratio, height * ratio);

  }

}