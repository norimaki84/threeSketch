/**
 * fileOverview:
 * Project:
 * File: DisplayDotMatrix
 * Date: 18/01/22
 * Author: Teraguchi
 */

import dotMatrix from '../visual/dotMatrix';

'use strict';

export default class DisplayDotMatrix {

	constructor() {

		this.dotMatrix= new dotMatrix();

		this.setup();
		this.setEvents();

	}

	setup() {

		this.dotMatrix.init();

	}

	onLoad() {


	}

	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}