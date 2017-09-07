/**
 * fileOverview:
 * Project:
 * File: Main
 * Date:
 * Author:
 */

import DisplayTop from '../Display/DisplayTop';
import DisplayTextureBg from '../Display/DisplayTextureBg';
import DisplayTextureMovie from '../Display/DisplayTextureMovie';

'use strict';

export default class Main {

  constructor() {

    this.setup();
    this.setEvents();

  }

  setup() {

  }

  onReady() {

    //pageページ別のIDを取得
    var page = $('body').data('id');

    window.console.log('現在のページIDは ', page);

		//pageのIDごとに発火するクラスの振り分け
    switch (page) {

      case 'top':

        new DisplayTop();

        break;

			case 'textureBg':

				new DisplayTextureBg();

				break;

			case 'textureMovie':

				new DisplayTextureMovie();

				break;

    }

  }

  onLoad() {

    
  }

  onRender() {


  }

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
    $(window).on('load', this.onLoad.bind(this));        

  }

}