/**
 * fileOverview:
 * Project:
 * File: DisplayTextEffect
 * Date: 19/7/18
 * Author: Teraguchi
 */

import TextEffect from "../visual/TextEffect";

'use strict';

export default class DisplayTextEffect {

  constructor(){

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  onLoad() {

    gb.in.textEffect = new TextEffect();

    gb.in.textEffect.init();


  }

  static run() {

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}
