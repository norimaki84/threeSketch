/**
 * fileOverview:
 * Project:
 * File: DisplayMetaball
 * Date: 18/4/20
 * Author: Teraguchi
 */

import Metaball from '../visual/Metaball';

'use strict';

export default class DisplayMetaball {

	constructor() {

		this.metaball = new Metaball();

		this.setup();
		this.setEvents();

	}

	setup() {

		this.metaball.init();

	}

	onLoad() {


	}

	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}