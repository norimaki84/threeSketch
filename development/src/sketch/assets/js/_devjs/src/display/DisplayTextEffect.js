/**
 * fileOverview:
 * Project:
 * File: DisplayTextEffect
 * Date: 19/7/18
 * Author: Teraguchi
 */

import TextEffect from '../visual/TextEffect';

'use strict';

export default class DisplayTextEffect {

  constructor(){

    this.textEffect = new TextEffect();

    this.setup();
    this.setEvents();

  }

  setup() {

    this.textEffect.init();

  }

  onLoad() {

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}
