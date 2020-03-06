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

    this.clockTransform = new ClockTransform();

    this.setup();
    this.setEvents();

  }

  setup() {

    this.clockTransform.init();

  }

  onLoad() {

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}