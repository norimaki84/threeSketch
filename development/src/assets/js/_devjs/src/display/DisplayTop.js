/**
 * fileOverview:
 * Project:
 * File: DisplayTop
 * Date: 17/9/23
 * Author: Teraguchi
 */


'use strict';

export default class DisplayTop {

	constructor() {


		this.setup();
		this.setEvents();

	}

	setup() {
		//async/ awaitテスト
		const promise = (message, msec) => new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(message);
				resolve();
			}, msec);
		});

		const printMessage = async () => {
			await promise('hello', 1000);
			await promise('async', 200);
			await promise('world', 1000);
		};

		printMessage();
	}

	onLoad() {


	}

	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}