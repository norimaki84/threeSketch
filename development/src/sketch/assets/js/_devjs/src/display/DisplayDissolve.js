/**
 * fileOverview:
 * Project:
 * File: DisplayDissolve
 * Date: 18/6/11
 * Author: Teraguchi
 */

import Dissolve from '../visual/Dissolve';

'use strict';

export default class DisplayDissolve {

	constructor() {

		this.dissolve = new Dissolve();

		this.setup();
		this.setEvents();

	}

	setup() {

		this.dissolve.init();

	}

	onLoad() {

	}

	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}