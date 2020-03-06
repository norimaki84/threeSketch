/**
 * fileOverview:
 * Project:
 * File: DisplayTextTransform
 * Date: 18/2/6
 * Author: Teraguchi
 */

import TextTransform from '../visual/TextTransform';

'use strict';

export default class DisplayTextTransform {

  constructor(){

    this.textTransform = new TextTransform();

    this.setup();
    this.setEvents();

  }

  setup() {

    this.textTransform.init();
    
  }

  onLoad() {

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}