/**
 * fileOverview:
 * Project:
 * File: DisplayTextureBg
 * Date: 20/03/07
 * Author: Teraguchi
 */

import TextureBg from '../visual/TextureBg';

'use strict';

export default class DisplayTextureBg {

  constructor() {

    this.textureBg = new TextureBg();

    this.setup();
    this.setEvents();

  }

  setup() {


    
  }

  onLoad() {

    this.textureBg.init();

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}