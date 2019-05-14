/**
 * fileOverview:
 * Project:
 * File: DisplayClockTransform
 * Date: 18/2/9
 * Author: Teraguchi
 */

import ClockTransform from "../visual/ClockTransform";

'use strict';

export default class DisplayClockTransform {

  constructor(){

    this.setup();
    this.setEvents();

  }

  setup() {

    
  }

  onLoad() {

    gb.in.clockTransform = new ClockTransform();

    gb.in.clockTransform.init();


  }

  static run() {

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}