/**
 * fileOverview:
 * Project:
 * File: DisplayMaskEffect
 * Date: 19/9/6
 * Author: Teraguchi
 */

import MaskEffect from '../visual/MaskEffect';

'use strict';

export default class DisplayMaskEffect {

	constructor() {

		this.maskEffect = new MaskEffect();

		this.setup();
		this.setEvents();

	}

	setup() {
		this.maskEffect.init();

	}

	onLoad() {


	}

	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}
