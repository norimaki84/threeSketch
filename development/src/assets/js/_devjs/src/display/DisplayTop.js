/**
 * fileOverview:
 * Project:
 * File: DisplayTop
 * Date: 17/9/23
 * Author: Teraguchi
 */

'use strict';

import countTimer from '../func/countTimer';

export default class DisplayTop {

	constructor() {

		this.countTimer = new countTimer(5);
		// this.countTimer.start();

		this.setup();
		this.setEvents();

	}

	setup() {

	}

	onLoad() {


	}

	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}