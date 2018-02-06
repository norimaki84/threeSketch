/**
 * fileOverview:
 * Project:
 * File: DisplayTextTransform
 * Date: 18/2/6
 * Author: Teraguchi
 */

import TextTransform from "../visual/TextTransform";

'use strict';

export default class DisplayTextTransform {

  constructor(){

    this.setup();
    this.setEvents();

  }

  setup() {

    
  }

  onLoad() {

    gb.in.textTransform = new TextTransform();

    gb.in.textTransform.init();


  }

  static run() {

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}