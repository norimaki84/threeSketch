/**
 * fileOverview:
 * Project:
 * File: DisplayTextureMovie
 * Date: 20/03/07
 * Author: Teraguchi
 */

import Canvas from '../visual/Canvas';

'use strict';

export default class DisplayTextureMovie {

  constructor(){

    this.canvas = new Canvas();

    this.setup();
    this.setEvents();

  }

  setup() {

    this.canvas.init();
    
  }

  onLoad() {

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}