/**
 * fileOverview: ページ別クラスの実行
 * Project: Main
 * File: Main
 * Date: 18/2/6
 * Author: Teraguchi
 */

import DisplayTop from '../Display/DisplayTop';
import DisplayZoomBlur from '../Display/DisplayZoomBlur';
import DisplayFloating from '../Display/DisplayFloating';
import DisplayDissolve from '../Display/DisplayDissolve';
import DisplayMetaball from '../Display/DisplayMetaball';
import Display3DCarousel from '../Display/Display3DCarousel';
import DisplayTextureBg from '../Display/DisplayTextureBg';
import DisplayTextureMovie from '../Display/DisplayTextureMovie';
import DisplayGpgpu01 from '../Display/DisplayGpgpu01';
import DisplayObjStudy01 from '../Display/DisplayObjStudy01';
import DisplayDotMatrix from '../Display/DisplayDotMatrix';
import DisplayWormhole from "../display/DisplayWormhole";
import DisplayTextTransform from "../display/DisplayTextTransform";
import DisplayClockTransform from "../display/DisplayClockTransform";
import DisplaySimpleGlitch from "../display/DisplaySimpleGlitch";

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
    const page = $('body').data('id');

    window.console.log('現在のページIDは ', page);

		//pageのIDごとに発火するクラスの振り分け
    switch (page) {

      case 'top':

        new DisplayTop();

        break;

			case 'ZoomBlur':

				new DisplayZoomBlur();

				break;

			case 'Floating':

				new DisplayFloating();

				break;

			case 'Dissolve':

				new DisplayDissolve();

				break;

			case 'Metaball':

				new DisplayMetaball();

				break;

			case '3DCarousel':

				new Display3DCarousel();

				break;

			case 'textureBg':

				new DisplayTextureBg();

				break;

			case 'textureMovie':

				new DisplayTextureMovie();

				break;

			case 'gpgpu01':

				new DisplayGpgpu01();

				break;

			case 'objStudy01':

				new DisplayObjStudy01();

				break;

			case 'dotMatrix':

				new DisplayDotMatrix();

				break;

			case 'wormhole':

				new DisplayWormhole();

				break;

			case 'textTransform':

				new DisplayTextTransform();

				break;

			case 'clockTransform':

				new DisplayClockTransform();

				break;

			case 'simpleGlitch':

				new DisplaySimpleGlitch();

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