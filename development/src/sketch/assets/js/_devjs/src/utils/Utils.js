/**
 * fileOverview: 便利関数クラス
 * Project:
 * File: Utils
 * Date:
 * Author: Teraguchi
 */


export default class Utils {

	constructor() {

	}

	/**
	 * ランダムな数(float)
	 * @param min : 最小値(float)
	 * @param max : 最大値(float)
	 * @returns {*} : min(含む)からmax(含む)までのランダムな数(float)
	 */
	random(min, max) {
		return Math.random() * (max - min) + min;
	}

	randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// 1 / rangeの確率でtrueを取得
	// -----------------------------------
	// @range : 2以上の分母(int)
	// return : true or false(boolean)
	// -----------------------------------
	hit(range) {
		return (this.randomInt(0, range - 1) == 0);
	}

	range(val) {
		return this.random(-val, val);
	}

	/**
	 * ランダムな数(int)
	 * @param min : 最小値(int)
	 * @param max : 最大値(int)
	 * @returns {*} : min(含む)からmax(含む)までのランダムな数(int)
	 */
	randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	/**
	 * 値を範囲内におさめる
	 * @param val : 値
	 * @param min : 最小値
	 * @param max : 最大値
	 * @returns {number}
	 */
	clamp(val, min, max) {
		return Math.min(max, Math.max(val, min));
	}

	/**
	 * 範囲変換
	 * @param val
	 * @param toMin
	 * @param toMax
	 * @param fromMin
	 * @param fromMax
	 * @returns {*}
	 */
	map(val, toMin, toMax, fromMin, fromMax) {
		if(val <= fromMin) {
			return toMin;
		}
		if(val >= fromMax) {
			return toMax;
		}
		var p = (toMax - toMin) / (fromMax - fromMin);
		return ((val - fromMin) * p) + toMin;
	}

	/**
	 * ラジアンに変換
	 * @param degree : 度
	 * @returns {number}
	 */
	radian(degree) {
		return degree * Math.PI / 180;
	}

	/**
	 * 角度に変換
	 * @param radian : ラジアン
	 * @returns {number}
	 */
	degree(radian) {
		return radian / Math.PI /180;
	}

	/**
	 * nullを削除した配列を返す
	 * @param arr
	 * @returns {Array}
	 */
	sliceNull(arr) {
		var i, j, len, newArr, val;
		newArr = [];
		for (i = j = 0, len = arr.length; j < len; i = ++j) {
			val = arr[i];
			if (val !== null) {
				newArr.push(val);
			}
		}
		return newArr;
	}

	/**
	 * 文字列の全置換
	 * @param val
	 * @param org
	 * @param dest
	 * @returns {string}
	 */
	replaceAll(val, org, dest) {
		return val.split(org).join(dest);
	}

	/**
	 * 2点間の距離
	 * @param x1
	 * @param y1
	 * @param x2
	 * @param y2
	 * @returns {number}
	 */
	distance(x1, y1, x2, y2) {
		let dx = x1 - x2;
		let dy = y1 - y2;

		return Math.sqrt(dx * dx + dy * dy);
	}

	/**
	 * 数値を文字列に変換
	 * @param num : 数値
	 * @param keta : 桁数
	 * @returns {string | *}
	 */
	numStr(num, keta) {
		var i, len, str;
		str = String(num);
		if (str.length >= keta) {
			return str;
		}
		len = keta - str.length;
		i = 0;
		while (i < len) {
			str = '0' + str;
			i++;
		}
		return str;
	}

	/**
	 * rgbからHEXカラー取得
	 * @param r
	 * @param g
	 * @param b
	 * @returns {string}
	 */
	getHexColor(r,g,b) {
		let str = (r << 16 | g << 8 | b).toString(16);
		return '#' + new Array(7 - str.length).join('0') + str;
	}

}
