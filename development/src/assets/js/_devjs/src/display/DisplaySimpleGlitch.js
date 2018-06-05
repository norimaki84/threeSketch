/**
 * fileOverview:
 * Project:
 * File: DisplaySimpleGlitch
 * Date: 18/6/5
 * Author: Teraguchi
 */

import SimpleGlitch from '../visual/SimpleGlitch';

'use strict';

export default class DisplaySimpleGlitch {

	constructor() {

		this.simpleGlitch = new SimpleGlitch();

		this.setup();
		this.setEvents();

	}

	setup() {

		this.simpleGlitch.init();

	}

	onLoad() {


	}

	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}