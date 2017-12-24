/**
 * fileOverview:
 * Project:
 * File: DisplayTop
 * Date: 17/9/23
 * Author: Teraguchi
 */

import Floating from '../visual/Floating';
// import Distort from '../visual/Distort';


'use strict';

export default class DisplayTop {

	constructor() {

		this.floating = new Floating();
		// this.distort = new Distort();

		this.setup();
		this.setEvents();

	}

	setup() {

		this.floating.init();
		// this.distort.init();
	}

	onLoad() {


	}

	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}