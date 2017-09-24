/**
 * fileOverview:
 * Project:
 * File: Capture
 * Date: 17/9/23
 * Author: Teraguchi
 */

// import Entry from '../Core/Entry';

'use strict';

export default class Capture extends THREE.Scene{

  constructor() {

    super();

    this._Texture;

    this.texture = this._texture.bind(this);
    this.render = this._render.bind(this);
    this.size = this._size.bind(this);

  }

	/**
   * 初期化
	 */
	init(){

		this._Texture = new THREE.WebGLRenderTarget(16, 16);

  }

	/**
   * テクスチャ
	 * @private
	 */
	_texture(){

	  return this._Texture._texture();

  }

	/**
   * テクスチャにレンダリング
	 * @param renderer
	 * @param camera
	 * @private
	 */
  _render(renderer, camera){

    renderer.render(this, camera, this._Texture);

  }

	/**
   * レンダリング先テクスチャのサイズ設定
	 * @param width
	 * @param height
	 * @private
	 */
  _size(width, height){

    let ratio = window.devicePixelRatio || 1;
		this._Texture.setSize(width * ratio, height * ratio)

  }

}