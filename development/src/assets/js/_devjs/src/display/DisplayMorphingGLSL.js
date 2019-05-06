/**
 * fileOverview:
 * Project:
 * File: DisplayMorphingGLSL
 * Date: 19/5/6
 * Author: Teraguchi
 */

import ZoomBlur from '../visual/MorphingGLSL';

'use strict';

export default class DisplayMorphingGLSL {

  constructor(){

		this.zoomBlur = new ZoomBlur();

    this.setup();
    this.setEvents();

  }

  setup() {

		this.zoomBlur.init();
    
  }

  onLoad() {


  }

  static run() {

		// window.console.log('static_Run');

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}