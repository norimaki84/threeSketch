/**
 * fileOverview:
 * Project:
 * File: DisplayWormhole
 * Date: 18/01/27
 * Author: Teraguchi
 */

import Wormhole from '../visual/Wormhole';

'use strict';

export default class DisplayWormhole {

	constructor() {

		this.wormhole = new Wormhole();

		this.setup();
		this.setEvents();

	}

	setup() {

		this.wormhole.init();

	}

	onLoad() {


	}

	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}