/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * fileOverview:
 * Project:
 * File: Entry
 * Date:
 * Author:
 */

__webpack_require__(21);

'use strict';

class Entry {

	constructor() {}

	/**
  * 初期化
  */
	init() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Entry;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_Common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_Main__ = __webpack_require__(17);
/**
 * fileOverview:
 * Project:
 * File: Top
 * Date:
 * Author: Teraguchi
 */




(() => {

  // globalオブジェクト
  if (window.gb === undefined) window.gb = {};
  window.gb.in = {}; //instance

  gb.in.common = new __WEBPACK_IMPORTED_MODULE_0__page_Common__["a" /* default */]();
  gb.in.main = new __WEBPACK_IMPORTED_MODULE_1__page_Main__["a" /* default */]();
})();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_Conf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mylibs_Util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mylibs_Func__ = __webpack_require__(16);
/**
 * fileOverview:
 * Project:
 * File: Common
 * Date:
 * Author:
 */






'use strict';

class Common {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {

    /**
       * @type {Conf} : 初期値の設定・データの配置
     * @type {Util} : Util関数の初期化
     * @type {Func} : イベントマネージャーの設置
     */
    gb.in.conf = new __WEBPACK_IMPORTED_MODULE_0__Core_Conf__["a" /* default */]();
    gb.in.u = new __WEBPACK_IMPORTED_MODULE_1__mylibs_Util__["a" /* default */]();
    gb.in.f = new __WEBPACK_IMPORTED_MODULE_3__mylibs_Func__["a" /* default */]();

    gb.in.ut = new __WEBPACK_IMPORTED_MODULE_2__utils_Utils__["a" /* default */]();
  }

  onReady() {}

  onLoad() {}

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Common;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * fileOverview:
 * Project:
 * File: Conf
 * Date:
 * Author:
 */

// import SoundData from './Data/Sound.js';

class Conf {

  constructor() {

    // ------------------------------------------------------------
    //  本番フラグ
    // ------------------------------------------------------------    
    this.RELEASE = true;
    // this.RELEASE = false;

    // ------------------------------------------------------------
    //  フラグ関連
    // ------------------------------------------------------------
    this.FLG = {
      LOG: true, // ログ出力
      PARAM: true, // パラメータチェック
      STATS: true // Stats表示
    };
    if (!this.RELEASE) {
      this.FLG = {
        LOG: false,
        PARAM: false,
        STATS: false
      };
    }

    // ------------------------------------------------------------
    //  基本 width height
    // ------------------------------------------------------------
    this.defW = 1300;
    this.defH = 850;

    this.W = 1200;
    this.H = 750;

    this.spW = 375;
    this.spH = 667;

    // ------------------------------------------------------------
    //  ブレイクポイント
    // ------------------------------------------------------------
    this.bp = 768;

    // ------------------------------------------------------------
    //  mode
    // ------------------------------------------------------------
    this.mode = null;
    this.keys = [{
      'key': 'movie',
      'value': ['morning', 'afternoon', 'night']
    }, {
      'key': 'data',
      'value': ['data01', 'data02', 'data03']
    }, {
      'key': 'product',
      'value': ['01']
    }];
    this.switchMode();

    // ------------------------------------------------------------
    //  sound data
    // ------------------------------------------------------------
    // this.soundData = new SoundData();

    // ------------------------------------------------------------
    //  sec02 bg Img Num
    // ------------------------------------------------------------
    this.sec02ImgNum = 396;

    // ------------------------------------------------------------
    //  youtube ID
    // ------------------------------------------------------------
    this.youtubeID01 = 'xW2oNpNrKd0';
    this.youtubeID02 = 't2WeRRdAFeI';

    // ------------------------------------------------------------
    //  web font loaded
    // ------------------------------------------------------------
    this.webFontLoaded = false;
  }

  switchMode() {

    var i, key, len, param, ref, ref1, value;

    ref = location.search.replace('?', '').split('&');

    for (i = 0, len = ref.length; i < len; i++) {
      param = ref[i];
      ref1 = param.split('='), key = ref1[0], value = ref1[1];

      for (var j = 0; j < this.keys.length; j++) {

        var obj = this.keys[j];

        // パラメータがキーと一緒だったら
        if (obj.key === key) {

          // 各値と比較
          for (var k = 0; k < obj.value.length; k++) {

            var val = obj.value[k];

            // キーをthis.keysのkeyに、valueを比較して同値だったものに
            if (val === value) this[obj.key] = val;
          };
        };
      };
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Conf;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * fileOverview: 便利関数クラス
 * Project:
 * File: Util
 * Date:
 * Author:
 */

class Util {

  constructor() {

    this.isSetSPSize = false;

    this.startTime = null;
    this.elapsedTime = null;
    this.now = new Date();
  }

  /**
   * Math
   */

  /**
   * ランダムな値を返す
   * @param min : 最小値(int)
   * @param max : 最大値(int)
   * @returns {number} : minからmaxまでのランダムな整数(int)
   */
  random(min, max) {

    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  /**
   * ランダムな整数を2つの範囲から取得
   * @param min1 : 最小値1(int)
   * @param max1 : 最大値1(int)
   * @param min2 : 最小値2(int)
   * @param max2 : 最大値2(int)
   * @returns {number} : minからmaxまでのランダムな整数(int)
   */
  random2(min1, max1, min2, max2) {

    if (this.hit(2)) {
      return this.random(min1, max1);
    } else {
      return this.random(min2, max2);
    }
  }

  /**
   * 1/@rangeの確率でtrueを取得
   * @param range : 母数(int)
   * @returns {boolean} : true or false(boolean)
   */
  hit(range) {

    return this.random(0, range - 1) === 0;
  }

  // 0から範囲内でランダムな整数を取得
  // -----------------------------------
  // @val : 範囲(int)
  // return : ランダムな整数(int)
  // -----------------------------------
  range(val) {

    return this.random(-val, val);
  }

  // 値をマッピング
  // -----------------------------------
  // @num : マッピングする値(Number)
  // @resMin : 結果となる値の最小値(Number)
  // @resMax : 結果となる値の最大値(Number)
  // @baseMin : 元となる値の最小値(Number)
  // @baseMax : 元となる値の最大値(Number)
  // return : マッピングされた値(Number)
  // -----------------------------------
  map(num, resMin, resMax, baseMin, baseMax) {

    var p;
    if (num < baseMin) {
      return resMin;
    }
    if (num > baseMax) {
      return resMax;
    }
    p = (resMax - resMin) / (baseMax - baseMin);

    return (num - baseMin) * p + resMin;
  }

  // 数値に小数点第@n位までをつけた文字列を返す
  // -----------------------------------
  // @num : 値(Number)
  // @n : 小数点の位(int)
  // return : 変換された値(String)
  // -----------------------------------
  decimal(num, n) {
    var i, pos;
    num = String(num);
    pos = num.indexOf(".");
    if (n === 0) {
      return num.split(".")[0];
    }
    if (pos === -1) {
      num += ".";
      i = 0;
      while (i < n) {
        num += "0";
        i++;
      }
      return num;
    }
    num = num.substr(0, pos) + num.substr(pos, n + 1);
    return num;
  }

  clamp(numerator, denominator, val) {

    return val * (numerator / denominator);
  }

  /**
    * ラジアンを角度に変換
   * @param radians
   * @returns {number}
   */
  degree(radians) {

    return radians * 180 / Math.PI;
  }

  // to radians
  radian(angle) {

    return angle * Math.PI / 180; //1度何ラジアンか
  }

  dist(p1, p2) {

    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  ascend(arr) {

    arr.sort(function (a, b) {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
    // var a = [5,3,9,1,10]
    // 結果:10,9,5,3,1
  }

  descend(arr) {

    arr.sort(function (a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

    // var a = [5,3,9,1,10]
    // 結果:1,3,5,9,10
  }

  // map(value, min01, max01, min02, max02) {

  //   var dis01 = max01 - min01;
  //   var dis02 = max02 - min02

  //   var rate = dis02 / dis01;

  //   value = value * rate;

  //   return value;
  // }

  constrain(value, min, max) {

    return Math.min(max, Math.max(value, min));

    // if (value <= low) value = low;
    // if (value >= high) value = high;     
    // return value;
  }

  // ユニークIDを取得
  // -----------------------------------
  unique() {

    return new Date().getTime();
  }

  // **jquary使用
  // ボタンモード変更
  // trueならカーソルがポインターの形に
  // falseならデフォルトのカーソルに
  // -----------------------------------
  // @flg : 適用するかどうか(boolean)
  // -----------------------------------
  buttonMode(flg) {

    if (flg) {
      return $("body").css("cursor", "pointer");
    } else {
      return $("body").css("cursor", "default");
    }
  }

  // ------------------------------------------------------------
  //
  //  portrait / landscape
  //
  // ------------------------------------------------------------
  isDirection() {

    var W = window.innerWidth,
        H = window.innerHeight;

    if (H > W) {
      $("body").addClass("portrait");
      $("body").removeClass("landscape");
    } else {
      $("body").addClass("landscape");
      $("body").removeClass("portrait");
    }
  }

  // ------------------------------------------------------------
  //
  //  responsive 横幅を見る
  //
  // ------------------------------------------------------------
  isResponsive(bp) {

    if (bp == undefined) bp = 375;

    var W = window.innerWidth,
        H = window.innerHeight;

    if (W > bp) {
      this.isResSP = false;
      this.isResPC = true;
      $('body').removeClass('isResponsiveSP');
      $('body').addClass('isResponsivePC');
    } else {
      this.isResSP = true;
      this.isResPC = false;
      $('body').addClass('isResponsiveSP');
      $('body').removeClass('isResponsivePC');
    }
  }

  // ------------------------------------------------------------
  //
  //  URL
  //
  // ------------------------------------------------------------

  /**
   *
   * @returns {array}
   */
  getParam() {

    var url = location.href;
    var param = url.split('?')[1];
    if (param == undefined) return undefined;
    var paramItems = param.split('&');
    var list = {};

    for (var i = 0; i < paramItems.length; i++) {

      paramItem = paramItems[i].split('=');
      list[paramItem[0]] = paramItem[1];
    }

    return list;
  }

  /**
   * ハッシュ取得 : location.hashの#を削除したやつ
   * @returns {string}
   */
  hash() {

    return location.hash.replace("#", "");
  }

  /**
   * cookie取得
   * @param key
   * @returns {*}
   */
  getCookie(key) {

    var a, arr, i, l, len1, val;
    if (document.cookie === void 0 || document.cookie === null) {
      return null;
    }
    arr = document.cookie.split("; ");
    for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
      val = arr[i];
      a = val.split("=");
      if (a[0] === key) {
        return a[1];
      }
    }
    return null;
  }

  /**
   * cookie設定
   * @param key : パラメータ名
   * @param val : 値
   * @returns {string}
   */
  setCookie(key, val) {

    return document.cookie = key + "=" + val;
  }

  // ------------------------------------------------------------
  //
  //  Color
  //
  // ------------------------------------------------------------

  // rgbからHEXカラー取得
  // -----------------------------------
  // @r : 0~255
  // @g : 0~255
  // @b : 0~255
  // return : ex "#FFFFFF"
  // -----------------------------------
  getHexColor(r, g, b) {
    var str;
    str = (r << 16 | g << 8 | b).toString(16);
    return "#" + new Array(7 - str.length).join("0") + str;
  }

  // ------------------------------------------------------------
  //
  //  String
  //
  // ------------------------------------------------------------

  isContain(str, contain) {

    // strの中に,containが存在したら
    if (str.indexOf(contain) != -1) {
      return true;
    }

    return false;
  }

  // 0埋めで2桁にする関数
  add0(str, num = -2) {

    return ("000000000000" + str).substr(num);
  }

  floatFormat(number, n) {

    var _pow = Math.pow(10, n);
    return Math.round(number * _pow) / _pow;
  }

  // 値段表記
  // -----------------------------------
  price(num) {

    return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }

  // 文字列を反転
  // -----------------------------------
  // @str : 文字列(String)
  // return : 文字列(String)
  // -----------------------------------
  strReverse(str) {

    var i, len, res;
    res = "";
    len = str.length;
    i = 1;
    while (i <= len) {
      res += str.substr(-i, 1);
      i++;
    }
    return res;
  }

  // 文字列の全置換
  // -----------------------------------
  // @val  : 文字列
  // @oeg  : 置換前の文字列
  // @dest : 置換後の文字列
  // -----------------------------------
  replaceAll(val, org, dest) {

    return val.split(org).join(dest);
  }

  strReplace(str, before, after) {

    var r = new RegExp(before, 'g');

    return str.replace(r, after);
  }

  // ------------------------------------------------------------
  //
  //  Date
  //
  // ------------------------------------------------------------

  getNow() {

    this.now = new Date();
  }

  start() {

    this.startTime = this.now.getTime();
  }

  elapsed() {

    this.elapsedTime = this.now.getTime() - this.startTime;
  }

  m() {

    return Math.floor(this.elapsedTime + 100 / 60);
  }

  s() {

    return Math.floor(this.elapsedTime / 1000);
  }

  ms() {

    return this.elapsedTime;
  }

  time() {

    this.getNow();

    this.hour = this.now.getHours(); // 時
    this.minute = this.now.getMinutes(); // 分
    this.second = this.now.getSeconds();
    this.millSecond = this.now.getMilliseconds();
  }

  date() {

    return this.now.getDate();
  }

  months() {

    var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    return this.now.getMonth() + 1;
  }

  year() {

    return this.now.getFullYear();
  }

  day() {

    // 曜日 (日本語)
    var weekDayJP = ["日", "月", "火", "水", "木", "金", "土"];
    var wDJ = weekDayJP[this.now.getDay()];

    // 曜日 (英語)
    var weekDayEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var wDE = weekDayEN[this.now.getDay()];
  }

  // 数日後のDateオブジェクト取得
  // -----------------------------------
  afterDay(date, num) {

    return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);
  }

  // ------------------------------------------------------------
  //
  //  Data type check
  //
  // ------------------------------------------------------------

  isObject(value, ignoreArray) {
    return typeof value === 'object' && value !== null;
  }

  isNumber(value) {
    return typeof value === 'number';
  }

  isString(value) {
    return typeof value === 'string';
  }

  isFunction(value) {
    return typeof value === 'function';
  }

  isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  isNull(value) {
    return value === null;
  }

  isUndefined(value) {
    return typeof value === 'undefined';
  }

  // ------------------------------------------------------------
  //
  //  other
  //
  // ------------------------------------------------------------
  setImgSPSize($target) {

    // responsive spのとき処理
    if (!this.isResSP) return;
    // 一度だけ処理
    // if (this.isSetSPSize) return;
    // this.isSetSPSize = true;

    var $img = $target,
        len = $img.length;

    $img.each(function (i) {

      var w = Math.floor($(this).width() / 2),
          h = Math.floor($(this).height() / 2);

      $(this).attr({
        'width': w,
        'height': h
      });

      if (len == i + 1) $(window).trigger('setSpZieEnd');
    });
  }

  // ------------------------------------------------------------
  //  スマホ操作無効
  // ------------------------------------------------------------
  setPrevent() {

    var self = this;

    $(window).on('touchmove.noControl', function (e) {
      e.preventDefault();
    });
  }

  removePrevent() {

    $(window).off('touchmove.noControl');
  }

  // ------------------------------------------------------------
  //  host,protcol
  // ------------------------------------------------------------
  protocol() {

    return location.protocol;
  }

  host() {

    return location.hostname;
    // return location.host
  }

  port() {

    return location.port;
  }

  path() {

    return location.pathname;
  }

  preventDefault(e) {

    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  preventDefaultForScrollKeys(e) {

    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  disableScroll() {

    if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove = this.preventDefault; // mobile
    document.onkeydown = this.preventDefaultForScrollKeys;
  }

  enableScroll() {

    if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Util;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_requestAnimationFrame__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_requestAnimationFrame___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__animation_requestAnimationFrame__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_cancelAnimationFrame__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_cancelAnimationFrame___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__animation_cancelAnimationFrame__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array_Array__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ua_checkClient__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_preloadImg__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sns_setUpBtnTwitter__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sns_setUpBtnLine__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sns_setUpBtnFaceBook__ = __webpack_require__(15);
/**
 * fileOverview:
 * Project:
 * File: Utils
 * Date:
 * Author: Teraguchi
 */

/**
 * animation
 */











class Utils {

  constructor() {

    this._setup();
  }

  _setup() {
    // window.console.log('Utils_Setup!!');

    /**
     * array
     */
    this.Array = new __WEBPACK_IMPORTED_MODULE_2__array_Array__["a" /* default */]();

    /**
     * ua
     */
    this.checkClient = new __WEBPACK_IMPORTED_MODULE_3__ua_checkClient__["a" /* default */]();

    /**
     * img
     */
    // this.preloadImg = new preloadImg();

    /**
     * sns
     */
    // this.setUpBtnTwitter = new setUpBtnTwitter;
    // this.setUpBtnLine = new setUpBtnLine;
    // this.setUpBtnFaceBook = new setUpBtnFaceBook;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Utils;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * requestAnimationFrame
 */
window.requestAnimationFrame = function (_this) {
  return function () {
    return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return setTimeout(callback, 1000 / 30);
    };
  };
}(this)();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * cancelAnimationFrame
 */
window.cancelAnimationFrame = function (_this) {
  return function () {
    return window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
      return clearTimeout(id);
    };
  };
}(this)();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * fileOverview: 配列の操作系
 * Project:
 * File: Array
 * Date:
 * Author:
 */
class Array {

  constructor() {}

  /**
   * 配列内のランダムな値をひとつ取得
   * @param arr : 配列
   * @returns {*} : 配列内の値
   */
  arrRand(arr) {

    return arr[this.random(0, arr.length - 1)];
  }

  /**
    * 配列をランダムに並べ替え
   * @param arr : 配列(Array)
   * @returns {Array}
   */
  shuffle(arr) {

    let Arr = [];
    Arr = arr.slice();
    var i = arr.length;
    while (i) {
      var j = Math.floor(Math.random() * i);
      var t = Arr[--i];
      Arr[i] = Arr[j];
      Arr[j] = t;
    }
    return Arr;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Array;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * fileOverview: Ua判別
 * Project:
 * File: checkClient
 * Date:
 * Author: Teraguchi
 */

const parser = __webpack_require__(10);

'use strict';

class checkClient {

  constructor() {

    this.ua = new parser();
  }

  /**
   * IEかどうか判定
   * @returns {boolean}
   */
  isIE() {
    let browser = this.ua.getBrowser().name;
    return browser === 'IE' ? true : false;
  }

  /**
   * Firefoxかどうか判定
   * @returns {boolean}
   */
  isFirefox() {
    let browser = this.ua.getBrowser().name;
    return browser === 'Firefox' ? true : false;
  }

  /**
   * Chromeかどうか判定
   * @returns {boolean}
   */
  isChrome() {
    let browser = this.ua.getBrowser().name;
    return browser === 'Chrome' ? true : false;
  }

  /**
   * Safariかどうか判定
   * @returns {boolean}
   */
  isSafari() {
    let browser = this.ua.getBrowser().name;
    return browser === 'Safari' ? true : false;
  }

  /**
   * モバイルかどうか判定
   * @returns {*}
   */
  isMobile() {
    let device = this.ua.getDevice().type;
    return device === 'mobile' ? true : null;
  }

  /**
   * タブレットかどうか判定
   * @returns {*}
   */
  isTablet() {
    let device = this.ua.getDevice().type;
    return device === 'tablet' ? true : null;
  }

  /**
   * OS名を取得
   * @returns {string}
   */
  os() {
    return this.ua.getOS().name;
  }

  /**
   * デバイス名を取得
   * @returns {vendor|{HTC, Sprint}}
   */
  device_name() {
    let device_name = this.ua.getDevice().vendor;
    return device_name;
  }

  /**
   * ブラウザ名を取得
   */
  browser_name() {
    return this.ua.getBrowser().name;
  }

  /**
   * ユーザーエージェント情報：全てを取得
   */
  all() {
    return this.ua.getUA();
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = checkClient;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * UAParser.js v0.7.12
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */(function (e, t) {
  "use strict";
  var n = "0.7.12",
      r = "",
      i = "?",
      s = "function",
      o = "undefined",
      u = "object",
      a = "string",
      f = "major",
      l = "model",
      c = "name",
      h = "type",
      p = "vendor",
      d = "version",
      v = "architecture",
      m = "console",
      g = "mobile",
      y = "tablet",
      b = "smarttv",
      w = "wearable",
      E = "embedded",
      S = { extend: function (e, t) {
      var n = {};for (var r in e) t[r] && t[r].length % 2 === 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];return n;
    }, has: function (e, t) {
      return typeof e == "string" ? t.toLowerCase().indexOf(e.toLowerCase()) !== -1 : !1;
    }, lowerize: function (e) {
      return e.toLowerCase();
    }, major: function (e) {
      return typeof e === a ? e.replace(/[^\d\.]/g, "").split(".")[0] : t;
    }, trim: function (e) {
      return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    } },
      x = { rgx: function () {
      var e,
          n = 0,
          r,
          i,
          a,
          f,
          l,
          c,
          h = arguments;while (n < h.length && !l) {
        var p = h[n],
            d = h[n + 1];if (typeof e === o) {
          e = {};for (a in d) d.hasOwnProperty(a) && (f = d[a], typeof f === u ? e[f[0]] = t : e[f] = t);
        }r = i = 0;while (r < p.length && !l) {
          l = p[r++].exec(this.getUA());if (!!l) for (a = 0; a < d.length; a++) c = l[++i], f = d[a], typeof f === u && f.length > 0 ? f.length == 2 ? typeof f[1] == s ? e[f[0]] = f[1].call(this, c) : e[f[0]] = f[1] : f.length == 3 ? typeof f[1] === s && (!f[1].exec || !f[1].test) ? e[f[0]] = c ? f[1].call(this, c, f[2]) : t : e[f[0]] = c ? c.replace(f[1], f[2]) : t : f.length == 4 && (e[f[0]] = c ? f[3].call(this, c.replace(f[1], f[2])) : t) : e[f] = c ? c : t;
        }n += 2;
      }return e;
    }, str: function (e, n) {
      for (var r in n) if (typeof n[r] === u && n[r].length > 0) {
        for (var s = 0; s < n[r].length; s++) if (S.has(n[r][s], e)) return r === i ? t : r;
      } else if (S.has(n[r], e)) return r === i ? t : r;return e;
    } },
      T = { browser: { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } }, device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } },
      N = { browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [c, d], [/(opios)[\/\s]+([\w\.]+)/i], [[c, "Opera Mini"], d], [/\s(opr)\/([\w\.]+)/i], [[c, "Opera"], d], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [c, d], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[c, "IE"], d], [/(edge)\/((\d+)?[\w\.]+)/i], [c, d], [/(yabrowser)\/([\w\.]+)/i], [[c, "Yandex"], d], [/(comodo_dragon)\/([\w\.]+)/i], [[c, /_/g, " "], d], [/(micromessenger)\/([\w\.]+)/i], [[c, "WeChat"], d], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [d, [c, "MIUI Browser"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[c, /(.+)/, "$1 WebView"], d], [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [d, [c, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [c, d], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i], [[c, "UCBrowser"], d], [/(dolfin)\/([\w\.]+)/i], [[c, "Dolphin"], d], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[c, "Chrome"], d], [/;fbav\/([\w\.]+);/i], [d, [c, "Facebook"]], [/fxios\/([\w\.-]+)/i], [d, [c, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [d, [c, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [d, c], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [c, [d, x.str, T.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [c, d], [/(navigator|netscape)\/([\w\.-]+)/i], [[c, "Netscape"], d], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [c, d]], cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[v, "amd64"]], [/(ia32(?=;))/i], [[v, S.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[v, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[v, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[v, /ower/, "", S.lowerize]], [/(sun4\w)[;\)]/i], [[v, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[v, S.lowerize]]], device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [l, p, [h, y]], [/applecoremedia\/[\w\.]+ \((ipad)/], [l, [p, "Apple"], [h, y]], [/(apple\s{0,1}tv)/i], [[l, "Apple TV"], [p, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [p, l, [h, y]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [l, [p, "Amazon"], [h, y]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[l, x.str, T.device.amazon.model], [p, "Amazon"], [h, g]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [l, p, [h, g]], [/\((ip[honed|\s\w*]+);/i], [l, [p, "Apple"], [h, g]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [p, l, [h, g]], [/\(bb10;\s(\w+)/i], [l, [p, "BlackBerry"], [h, g]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [l, [p, "Asus"], [h, y]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[p, "Sony"], [l, "Xperia Tablet"], [h, y]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[p, "Sony"], [l, "Xperia Phone"], [h, g]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [p, l, [h, m]], [/android.+;\s(shield)\sbuild/i], [l, [p, "Nvidia"], [h, m]], [/(playstation\s[34portablevi]+)/i], [l, [p, "Sony"], [h, m]], [/(sprint\s(\w+))/i], [[p, x.str, T.device.sprint.vendor], [l, x.str, T.device.sprint.model], [h, g]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [p, l, [h, y]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [p, [l, /_/g, " "], [h, g]], [/(nexus\s9)/i], [l, [p, "HTC"], [h, y]], [/(nexus\s6p)/i], [l, [p, "Huawei"], [h, g]], [/(microsoft);\s(lumia[\s\w]+)/i], [p, l, [h, g]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [l, [p, "Microsoft"], [h, m]], [/(kin\.[onetw]{3})/i], [[l, /\./g, " "], [p, "Microsoft"], [h, g]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [l, [p, "Motorola"], [h, g]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [l, [p, "Motorola"], [h, y]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[p, S.trim], [l, S.trim], [h, b]], [/hbbtv.+maple;(\d+)/i], [[l, /^/, "SmartTV"], [p, "Samsung"], [h, b]], [/\(dtv[\);].+(aquos)/i], [l, [p, "Sharp"], [h, b]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[p, "Samsung"], l, [h, y]], [/smart-tv.+(samsung)/i], [p, [h, b], l], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[p, "Samsung"], l, [h, g]], [/sie-(\w+)*/i], [l, [p, "Siemens"], [h, g]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[p, "Nokia"], l, [h, g]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [l, [p, "Acer"], [h, y]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[p, "LG"], l, [h, y]], [/(lg) netcast\.tv/i], [p, l, [h, b]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [l, [p, "LG"], [h, g]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [l, [p, "Lenovo"], [h, y]], [/linux;.+((jolla));/i], [p, l, [h, g]], [/((pebble))app\/[\d\.]+\s/i], [p, l, [h, w]], [/android.+;\s(glass)\s\d/i], [l, [p, "Google"], [h, w]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i], [[l, /_/g, " "], [p, "Xiaomi"], [h, g]], [/android.+a000(1)\s+build/i], [l, [p, "OnePlus"], [h, g]], [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[h, S.lowerize], p, l]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [d, [c, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [c, d], [/rv\:([\w\.]+).*(gecko)/i], [d, c]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [c, d], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [c, [d, x.str, T.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[c, "Windows"], [d, x.str, T.os.windows.version]], [/\((bb)(10);/i], [[c, "BlackBerry"], d], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [c, d], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[c, "Symbian"], d], [/\((series40);/i], [c], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[c, "Firefox OS"], d], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [c, d], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[c, "Chromium OS"], d], [/(sunos)\s?([\w\.]+\d)*/i], [[c, "Solaris"], d], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [c, d], [/(haiku)\s(\w+)/i], [c, d], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[c, "iOS"], [d, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[c, "Mac OS"], [d, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [c, d]] },
      C = function (t, n) {
    if (this instanceof C) {
      var i = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : r),
          s = n ? S.extend(N, n) : N;return this.getBrowser = function () {
        var e = x.rgx.apply(this, s.browser);return e.major = S.major(e.version), e;
      }, this.getCPU = function () {
        return x.rgx.apply(this, s.cpu);
      }, this.getDevice = function () {
        return x.rgx.apply(this, s.device);
      }, this.getEngine = function () {
        return x.rgx.apply(this, s.engine);
      }, this.getOS = function () {
        return x.rgx.apply(this, s.os);
      }, this.getResult = function () {
        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
      }, this.getUA = function () {
        return i;
      }, this.setUA = function (e) {
        return i = e, this;
      }, this;
    }return new C(t, n).getResult();
  };C.VERSION = n, C.BROWSER = { NAME: c, MAJOR: f, VERSION: d }, C.CPU = { ARCHITECTURE: v }, C.DEVICE = { MODEL: l, VENDOR: p, TYPE: h, CONSOLE: m, MOBILE: g, SMARTTV: b, TABLET: y, WEARABLE: w, EMBEDDED: E }, C.ENGINE = { NAME: c, VERSION: d }, C.OS = { NAME: c, VERSION: d }, typeof exports !== o ? (typeof module !== o && module.exports && (exports = module.exports = C), exports.UAParser = C) : "function" === s && __webpack_require__(11) ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return C;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.UAParser = C;var k = e.jQuery || e.Zepto;if (typeof k !== o) {
    var L = new C();k.ua = L.getResult(), k.ua.get = function () {
      return L.getUA();
    }, k.ua.set = function (e) {
      L.setUA(e);var t = L.getResult();for (var n in t) k.ua[n] = t[n];
    };
  }
})(typeof window == "object" ? window : this);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * preloadImg
 * @param imgPath
 * @returns {Promise}
 */
/* unused harmony default export */ var _unused_webpack_default_export = (imgPath => {
  return new Promise(function (resolve) {
    var img;
    img = new Image();
    img.addEventListener('load', function (e) {
      img.removeEventListener('load', arguments.callee);
      return resolve();
    });
    return img.src = imgPath;
  });
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * setUpBtnTwitter
 * @param $btn
 * @param text
 * @param shareURL
 */
/* unused harmony default export */ var _unused_webpack_default_export = (($btn, text, shareURL) => {
  var url;
  if (shareURL == null) {
    shareURL = '';
  }
  url = 'https://twitter.com/intent/tweet?';
  if (shareURL === '') {
    url += "text=" + encodeURIComponent(text);
  } else {
    url += "url=" + encodeURIComponent(shareURL) + "&text=" + encodeURIComponent(text);
  }
  return $btn.on('click', function (e) {
    window.open(url, 'twitterShare', 'width=670,height=400');
    return false;
  });
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * setUpBtnLine
 * @param $btn
 * @param text
 * @param shareURL
 */
/* unused harmony default export */ var _unused_webpack_default_export = (($btn, text, shareURL = '') => {
  var url;
  if (shareURL == null) {
    shareURL = '';
  }
  url = 'http://line.me/msg/text/?';
  if (shareURL === '') {
    url += "" + encodeURIComponent(text);
  } else {
    url += encodeURIComponent(text) + "\n" + encodeURIComponent(shareURL);
  }
  return $btn.on('click', function (e) {
    window.open(url, 'lineShare');
    return false;
  });
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * setUpBtnFacebook
 * @param $btn
 * @param shareURL
 * @param description
 */
/* unused harmony default export */ var _unused_webpack_default_export = (($btn, shareURL, description = '') => {
  var url;
  if (description == null) {
    description = '';
  }
  url = 'https://www.facebook.com/sharer/sharer.php?&display=popup&u=';
  url += "" + encodeURIComponent(shareURL);
  if (description) {
    url += "&description=" + encodeURIComponent(description);
  }
  return $btn.on('click', function (e) {
    window.open(url, "facebookShare" + new Date().getTime(), 'width=670,height=400');
    return false;
  });
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * fileOverview:
 * Project:
 * File: Func
 * Date:
 * Author:
 */

class Func {

  constructor() {

    this.blank();
    this.debugger();
    this.requestAnimationFrame();
    this.expandjQuery();
  }

  blank() {

    $(() => {
      $('.blank').attr('target', '_blank');
    });
  }

  debugger() {

    // デバッグモード切替
    var RELEASE = gb.in.conf.RELEASE;

    // 置換対象のメソッドを配列として保持する
    var methods = ['log', 'debug', 'info', 'warn', 'error', 'dir', 'trace', 'assert', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'profile', 'profileEnd'];

    // consoleが使えない場合は空のオブジェクトを設定しておく
    if (typeof window.console === "undefined") {
      window.console = {};
    }

    // 各メソッドをwindowへ直接追加して行く
    for (var i in methods) {
      (function (m) {

        // consoleにある？デバッグモードは有効？consoleのものは関数？
        if (console[m] && !RELEASE && typeof console[m] === "function") {
          window[m] = console[m].bind(console);
        } else {
          // debugModeがfalse,もしくは該当メソッドが存在しない場合は、空のメソッドを用意する
          window[m] = function () {};
        }
      })(methods[i]);
    }
  }

  prepend(param) {

    $('body').prepend(param);
  }

  requestAnimationFrame() {

    var FPS = 1000 / 60;

    window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
    window.mozRequestAnimationFrame || // 古いfirefox用
    window.webkitRequestAnimationFrame || // safari6以前、iOS6 safari用
    function (callback) {
      window.setTimeout(callback, FPS);
    };

    window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function (timer) {
      window.clearTimeout(timer);
    };
  }

  expandjQuery() {

    jQuery.fn.extend({
      w: 0,
      h: 0,
      adjust: function () {
        var w = $(this).innerWidth();
        var h = $(this).innerHeight();
        $(this).css({
          'position': 'absolute',
          'left': '50%',
          'top': '50%',
          'margin-left': '-' + w / 2 + 'px',
          'margin-top': '-' + h / 2 + 'px'
        });
      },
      adjustW: function () {
        var w = $(this).innerWidth();
        var h = $(this).innerHeight();
        $(this).css({
          'position': 'absolute',
          'left': '50%',
          'margin-left': '-' + w / 2 + 'px'
        });
      },
      adjustH: function () {
        var w = $(this).innerWidth();
        var h = $(this).innerHeight();
        $(this).css({
          'position': 'absolute',
          'top': '50%',
          'margin-top': '-' + h / 2 + 'px'
        });
      }
    });
  }

  checkCssBlend() {

    if ('CSS' in window && 'supports' in window.CSS) {
      if (!window.CSS.supports('mix-blend-mode', 'soft-light')) {
        document.documentElement.classList.add('not-mix-blend-mode');
      }
    }

    log(gb.in.u.isIE);

    if (gb.in.u.isIE) {

      document.documentElement.classList.add('not-mix-blend-mode');
    };
  }

  notSaveImg() {

    // ------------------------------------------------------------
    //
    //  pc
    //
    // ------------------------------------------------------------

    if (gb.in.u.isPC) {

      $(() => {
        $("img").on("contextmenu", () => {
          return false;
        });
      });
    }

    // ------------------------------------------------------------
    //
    //  sp android
    //
    // ------------------------------------------------------------
    var v = gb.in.u.isAndroidVersion();

    if (v == undefined) return;
    if (v < 5) {

      var timer;
      $("img").on("touchstart", () => {
        timer = setTimeout(() => {
          alert("画像は保存できません");
        }, 500);
        return false;
      });
      $("img").on("touchend", () => {
        clearTimeout(timer);
        return false;
      });
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Func;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Display_DisplayTop__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display_DisplayTextureBg__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Display_DisplayTextureMovie__ = __webpack_require__(25);
/**
 * fileOverview:
 * Project:
 * File: Main
 * Date:
 * Author:
 */





'use strict';

class Main {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {}

  onReady() {

    //pageページ別のIDを取得
    var page = $('body').data('id');

    window.console.log('現在のページIDは ', page);

    //pageのIDごとに発火するクラスの振り分け
    switch (page) {

      case 'top':

        new __WEBPACK_IMPORTED_MODULE_0__Display_DisplayTop__["a" /* default */]();

        break;

      case 'textureBg':

        new __WEBPACK_IMPORTED_MODULE_1__Display_DisplayTextureBg__["a" /* default */]();

        break;

      case 'textureMovie':

        new __WEBPACK_IMPORTED_MODULE_2__Display_DisplayTextureMovie__["a" /* default */]();

        break;

    }
  }

  onLoad() {}

  onRender() {}

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Main;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * fileOverview:
 * Project:
 * File: DisplayTop
 * Date: 17/9/23
 * Author: Teraguchi
 */



class DisplayTop {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {}

  onLoad() {}

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayTop;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visual_TextureBg__ = __webpack_require__(20);
/**
 * fileOverview:
 * Project:
 * File: Display
 * Date:
 * Author: Teraguchi
 */



'use strict';

class DisplayTop {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {

    // アニメーションループスタート
    // gb.in.up.loop();

  }

  onLoad() {

    gb.in.textureBg = new __WEBPACK_IMPORTED_MODULE_0__visual_TextureBg__["a" /* default */]();

    gb.in.textureBg.init();
  }

  static run() {

    // window.console.log('static_Run');

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayTop;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_Entry__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Plane__ = __webpack_require__(22);
/**
 * fileOverview:
 * Project:
 * File: TextureBg
 * Date:
 * Author: Teraguchi
 */




'use strict';

class TextureBg extends __WEBPACK_IMPORTED_MODULE_0__Core_Entry__["a" /* default */] {

  constructor() {

    super();

    this.canvas = document.getElementById('webgl-output');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;

    this.camera = null;
    this.renderer = null;
    this.scene = null;

    this.createCamera = this._createCamera.bind(this);
    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);

    this.onResize = this._onResize.bind(this);
    this.Update = this._Update.bind(this);
    this.loadTexture = this._loadTexture.bind(this);

    this.plane = new __WEBPACK_IMPORTED_MODULE_1__Plane__["a" /* default */]();
  }

  /**
   * 初期化
   */
  init() {

    this.createCamera();
    this.createScene();
    this.createRenderer();

    this.Update();

    this.loadTexture();
  }

  /**
   * カメラ作成
   */
  _createCamera() {

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 100;

    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  /**
   * レンダラー作成
   */
  _createRenderer() {

    this.renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: false,
      stencil: false,
      depth: true,
      premultipliedAlpha: false,
      canvas: this.canvas
    });

    this.renderer.setClearColor(0xffffff, 0.0);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize(this.width, this.height);
  }

  /**
   *　シーン作成
   */
  _createScene() {

    this.scene = new THREE.Scene();
  }

  /**
   * 画像をロード
   * @private
   */
  _loadTexture() {

    this.plane.loadTexture('../../../../assets/resource/img/shibuya01.jpg', () => {
      this.scene.add(this.plane.mesh);
      window.addEventListener('resize', () => {
        this.onResize();
      }, false);
      this.onResize();
      this.Update();
    });
  }

  /**
   * 更新
   * @private
   */
  _Update() {

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => {
      this.Update();
    });
  }

  /**
   *　画面リサイズイベント
   */
  _onResize() {
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
    this.plane.mesh.material.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextureBg;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe

THREE.OrbitControls = function (object, domElement) {

	this.object = object;

	this.domElement = domElement !== undefined ? domElement : document;

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the object orbits around
	this.target = new THREE.Vector3();

	// How far you can dolly in and out ( PerspectiveCamera only )
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// How far you can zoom in and out ( OrthographicCamera only )
	this.minZoom = 0;
	this.maxZoom = Infinity;

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// How far you can orbit horizontally, upper and lower limits.
	// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	this.minAzimuthAngle = -Infinity; // radians
	this.maxAzimuthAngle = Infinity; // radians

	// Set to true to enable damping (inertia)
	// If damping is enabled, you must call controls.update() in your animation loop
	this.enableDamping = false;
	this.dampingFactor = 0.25;

	// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
	// Set to false to disable zooming
	this.enableZoom = true;
	this.zoomSpeed = 1.0;

	// Set to false to disable rotating
	this.enableRotate = true;
	this.rotateSpeed = 1.0;

	// Set to false to disable panning
	this.enablePan = true;
	this.keyPanSpeed = 7.0; // pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	// If auto-rotate is enabled, you must call controls.update() in your animation loop
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// Set to false to disable use of the keys
	this.enableKeys = true;

	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	// Mouse buttons
	this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

	// for reset
	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.zoom0 = this.object.zoom;

	//
	// public methods
	//

	this.getPolarAngle = function () {

		return spherical.phi;
	};

	this.getAzimuthalAngle = function () {

		return spherical.theta;
	};

	this.reset = function () {

		scope.target.copy(scope.target0);
		scope.object.position.copy(scope.position0);
		scope.object.zoom = scope.zoom0;

		scope.object.updateProjectionMatrix();
		scope.dispatchEvent(changeEvent);

		scope.update();

		state = STATE.NONE;
	};

	// this method is exposed, but perhaps it would be better if we can make it private...
	this.update = function () {

		var offset = new THREE.Vector3();

		// so camera.up is the orbit axis
		var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
		var quatInverse = quat.clone().inverse();

		var lastPosition = new THREE.Vector3();
		var lastQuaternion = new THREE.Quaternion();

		return function update() {

			var position = scope.object.position;

			offset.copy(position).sub(scope.target);

			// rotate offset to "y-axis-is-up" space
			offset.applyQuaternion(quat);

			// angle from z-axis around y-axis
			spherical.setFromVector3(offset);

			if (scope.autoRotate && state === STATE.NONE) {

				rotateLeft(getAutoRotationAngle());
			}

			spherical.theta += sphericalDelta.theta;
			spherical.phi += sphericalDelta.phi;

			// restrict theta to be between desired limits
			spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

			// restrict phi to be between desired limits
			spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

			spherical.makeSafe();

			spherical.radius *= scale;

			// restrict radius to be between desired limits
			spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

			// move target to panned location
			scope.target.add(panOffset);

			offset.setFromSpherical(spherical);

			// rotate offset back to "camera-up-vector-is-up" space
			offset.applyQuaternion(quatInverse);

			position.copy(scope.target).add(offset);

			scope.object.lookAt(scope.target);

			if (scope.enableDamping === true) {

				sphericalDelta.theta *= 1 - scope.dampingFactor;
				sphericalDelta.phi *= 1 - scope.dampingFactor;
			} else {

				sphericalDelta.set(0, 0, 0);
			}

			scale = 1;
			panOffset.set(0, 0, 0);

			// update condition is:
			// min(camera displacement, camera rotation in radians)^2 > EPS
			// using small-angle approximation cos(x/2) = 1 - x^2 / 8

			if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

				scope.dispatchEvent(changeEvent);

				lastPosition.copy(scope.object.position);
				lastQuaternion.copy(scope.object.quaternion);
				zoomChanged = false;

				return true;
			}

			return false;
		};
	}();

	this.dispose = function () {

		scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
		scope.domElement.removeEventListener('mousedown', onMouseDown, false);
		scope.domElement.removeEventListener('wheel', onMouseWheel, false);

		scope.domElement.removeEventListener('touchstart', onTouchStart, false);
		scope.domElement.removeEventListener('touchend', onTouchEnd, false);
		scope.domElement.removeEventListener('touchmove', onTouchMove, false);

		document.removeEventListener('mousemove', onMouseMove, false);
		document.removeEventListener('mouseup', onMouseUp, false);

		window.removeEventListener('keydown', onKeyDown, false);

		//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
	};

	//
	// internals
	//

	var scope = this;

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };

	var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

	var state = STATE.NONE;

	var EPS = 0.000001;

	// current position in spherical coordinates
	var spherical = new THREE.Spherical();
	var sphericalDelta = new THREE.Spherical();

	var scale = 1;
	var panOffset = new THREE.Vector3();
	var zoomChanged = false;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
	}

	function getZoomScale() {

		return Math.pow(0.95, scope.zoomSpeed);
	}

	function rotateLeft(angle) {

		sphericalDelta.theta -= angle;
	}

	function rotateUp(angle) {

		sphericalDelta.phi -= angle;
	}

	var panLeft = function () {

		var v = new THREE.Vector3();

		return function panLeft(distance, objectMatrix) {

			v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
			v.multiplyScalar(-distance);

			panOffset.add(v);
		};
	}();

	var panUp = function () {

		var v = new THREE.Vector3();

		return function panUp(distance, objectMatrix) {

			v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
			v.multiplyScalar(distance);

			panOffset.add(v);
		};
	}();

	// deltaX and deltaY are in pixels; right and down are positive
	var pan = function () {

		var offset = new THREE.Vector3();

		return function pan(deltaX, deltaY) {

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			if (scope.object instanceof THREE.PerspectiveCamera) {

				// perspective
				var position = scope.object.position;
				offset.copy(position).sub(scope.target);
				var targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);

				// we actually don't use screenWidth, since perspective camera is fixed to screen height
				panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
				panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
			} else if (scope.object instanceof THREE.OrthographicCamera) {

				// orthographic
				panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
				panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
			} else {

				// camera neither orthographic nor perspective
				console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
				scope.enablePan = false;
			}
		};
	}();

	function dollyIn(dollyScale) {

		if (scope.object instanceof THREE.PerspectiveCamera) {

			scale /= dollyScale;
		} else if (scope.object instanceof THREE.OrthographicCamera) {

			scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
			scope.object.updateProjectionMatrix();
			zoomChanged = true;
		} else {

			console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
			scope.enableZoom = false;
		}
	}

	function dollyOut(dollyScale) {

		if (scope.object instanceof THREE.PerspectiveCamera) {

			scale *= dollyScale;
		} else if (scope.object instanceof THREE.OrthographicCamera) {

			scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
			scope.object.updateProjectionMatrix();
			zoomChanged = true;
		} else {

			console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
			scope.enableZoom = false;
		}
	}

	//
	// event callbacks - update the object state
	//

	function handleMouseDownRotate(event) {

		//console.log( 'handleMouseDownRotate' );

		rotateStart.set(event.clientX, event.clientY);
	}

	function handleMouseDownDolly(event) {

		//console.log( 'handleMouseDownDolly' );

		dollyStart.set(event.clientX, event.clientY);
	}

	function handleMouseDownPan(event) {

		//console.log( 'handleMouseDownPan' );

		panStart.set(event.clientX, event.clientY);
	}

	function handleMouseMoveRotate(event) {

		//console.log( 'handleMouseMoveRotate' );

		rotateEnd.set(event.clientX, event.clientY);
		rotateDelta.subVectors(rotateEnd, rotateStart);

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

		rotateStart.copy(rotateEnd);

		scope.update();
	}

	function handleMouseMoveDolly(event) {

		//console.log( 'handleMouseMoveDolly' );

		dollyEnd.set(event.clientX, event.clientY);

		dollyDelta.subVectors(dollyEnd, dollyStart);

		if (dollyDelta.y > 0) {

			dollyIn(getZoomScale());
		} else if (dollyDelta.y < 0) {

			dollyOut(getZoomScale());
		}

		dollyStart.copy(dollyEnd);

		scope.update();
	}

	function handleMouseMovePan(event) {

		//console.log( 'handleMouseMovePan' );

		panEnd.set(event.clientX, event.clientY);

		panDelta.subVectors(panEnd, panStart);

		pan(panDelta.x, panDelta.y);

		panStart.copy(panEnd);

		scope.update();
	}

	function handleMouseUp(event) {

		//console.log( 'handleMouseUp' );

	}

	function handleMouseWheel(event) {

		//console.log( 'handleMouseWheel' );

		if (event.deltaY < 0) {

			dollyOut(getZoomScale());
		} else if (event.deltaY > 0) {

			dollyIn(getZoomScale());
		}

		scope.update();
	}

	function handleKeyDown(event) {

		//console.log( 'handleKeyDown' );

		switch (event.keyCode) {

			case scope.keys.UP:
				pan(0, scope.keyPanSpeed);
				scope.update();
				break;

			case scope.keys.BOTTOM:
				pan(0, -scope.keyPanSpeed);
				scope.update();
				break;

			case scope.keys.LEFT:
				pan(scope.keyPanSpeed, 0);
				scope.update();
				break;

			case scope.keys.RIGHT:
				pan(-scope.keyPanSpeed, 0);
				scope.update();
				break;

		}
	}

	function handleTouchStartRotate(event) {

		//console.log( 'handleTouchStartRotate' );

		rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
	}

	function handleTouchStartDolly(event) {

		//console.log( 'handleTouchStartDolly' );

		var dx = event.touches[0].pageX - event.touches[1].pageX;
		var dy = event.touches[0].pageY - event.touches[1].pageY;

		var distance = Math.sqrt(dx * dx + dy * dy);

		dollyStart.set(0, distance);
	}

	function handleTouchStartPan(event) {

		//console.log( 'handleTouchStartPan' );

		panStart.set(event.touches[0].pageX, event.touches[0].pageY);
	}

	function handleTouchMoveRotate(event) {

		//console.log( 'handleTouchMoveRotate' );

		rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
		rotateDelta.subVectors(rotateEnd, rotateStart);

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

		rotateStart.copy(rotateEnd);

		scope.update();
	}

	function handleTouchMoveDolly(event) {

		//console.log( 'handleTouchMoveDolly' );

		var dx = event.touches[0].pageX - event.touches[1].pageX;
		var dy = event.touches[0].pageY - event.touches[1].pageY;

		var distance = Math.sqrt(dx * dx + dy * dy);

		dollyEnd.set(0, distance);

		dollyDelta.subVectors(dollyEnd, dollyStart);

		if (dollyDelta.y > 0) {

			dollyOut(getZoomScale());
		} else if (dollyDelta.y < 0) {

			dollyIn(getZoomScale());
		}

		dollyStart.copy(dollyEnd);

		scope.update();
	}

	function handleTouchMovePan(event) {

		//console.log( 'handleTouchMovePan' );

		panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

		panDelta.subVectors(panEnd, panStart);

		pan(panDelta.x, panDelta.y);

		panStart.copy(panEnd);

		scope.update();
	}

	function handleTouchEnd(event) {}

	//console.log( 'handleTouchEnd' );

	//
	// event handlers - FSM: listen for events and reset state
	//

	function onMouseDown(event) {

		if (scope.enabled === false) return;

		event.preventDefault();

		if (event.button === scope.mouseButtons.ORBIT) {

			if (scope.enableRotate === false) return;

			handleMouseDownRotate(event);

			state = STATE.ROTATE;
		} else if (event.button === scope.mouseButtons.ZOOM) {

			if (scope.enableZoom === false) return;

			handleMouseDownDolly(event);

			state = STATE.DOLLY;
		} else if (event.button === scope.mouseButtons.PAN) {

			if (scope.enablePan === false) return;

			handleMouseDownPan(event);

			state = STATE.PAN;
		}

		if (state !== STATE.NONE) {

			document.addEventListener('mousemove', onMouseMove, false);
			document.addEventListener('mouseup', onMouseUp, false);

			scope.dispatchEvent(startEvent);
		}
	}

	function onMouseMove(event) {

		if (scope.enabled === false) return;

		event.preventDefault();

		if (state === STATE.ROTATE) {

			if (scope.enableRotate === false) return;

			handleMouseMoveRotate(event);
		} else if (state === STATE.DOLLY) {

			if (scope.enableZoom === false) return;

			handleMouseMoveDolly(event);
		} else if (state === STATE.PAN) {

			if (scope.enablePan === false) return;

			handleMouseMovePan(event);
		}
	}

	function onMouseUp(event) {

		if (scope.enabled === false) return;

		handleMouseUp(event);

		document.removeEventListener('mousemove', onMouseMove, false);
		document.removeEventListener('mouseup', onMouseUp, false);

		scope.dispatchEvent(endEvent);

		state = STATE.NONE;
	}

	function onMouseWheel(event) {

		if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;

		event.preventDefault();
		event.stopPropagation();

		handleMouseWheel(event);

		scope.dispatchEvent(startEvent); // not sure why these are here...
		scope.dispatchEvent(endEvent);
	}

	function onKeyDown(event) {

		if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

		handleKeyDown(event);
	}

	function onTouchStart(event) {

		if (scope.enabled === false) return;

		switch (event.touches.length) {

			case 1:
				// one-fingered touch: rotate

				if (scope.enableRotate === false) return;

				handleTouchStartRotate(event);

				state = STATE.TOUCH_ROTATE;

				break;

			case 2:
				// two-fingered touch: dolly

				if (scope.enableZoom === false) return;

				handleTouchStartDolly(event);

				state = STATE.TOUCH_DOLLY;

				break;

			case 3:
				// three-fingered touch: pan

				if (scope.enablePan === false) return;

				handleTouchStartPan(event);

				state = STATE.TOUCH_PAN;

				break;

			default:

				state = STATE.NONE;

		}

		if (state !== STATE.NONE) {

			scope.dispatchEvent(startEvent);
		}
	}

	function onTouchMove(event) {

		if (scope.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		switch (event.touches.length) {

			case 1:
				// one-fingered touch: rotate

				if (scope.enableRotate === false) return;
				if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

				handleTouchMoveRotate(event);

				break;

			case 2:
				// two-fingered touch: dolly

				if (scope.enableZoom === false) return;
				if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

				handleTouchMoveDolly(event);

				break;

			case 3:
				// three-fingered touch: pan

				if (scope.enablePan === false) return;
				if (state !== STATE.TOUCH_PAN) return; // is this needed?...

				handleTouchMovePan(event);

				break;

			default:

				state = STATE.NONE;

		}
	}

	function onTouchEnd(event) {

		if (scope.enabled === false) return;

		handleTouchEnd(event);

		scope.dispatchEvent(endEvent);

		state = STATE.NONE;
	}

	function onContextMenu(event) {

		event.preventDefault();
	}

	//

	scope.domElement.addEventListener('contextmenu', onContextMenu, false);

	scope.domElement.addEventListener('mousedown', onMouseDown, false);
	scope.domElement.addEventListener('wheel', onMouseWheel, false);

	scope.domElement.addEventListener('touchstart', onTouchStart, false);
	scope.domElement.addEventListener('touchend', onTouchEnd, false);
	scope.domElement.addEventListener('touchmove', onTouchMove, false);

	window.addEventListener('keydown', onKeyDown, false);

	// force an update at start

	this.update();
};

THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

Object.defineProperties(THREE.OrbitControls.prototype, {

	center: {

		get: function () {

			console.warn('THREE.OrbitControls: .center has been renamed to .target');
			return this.target;
		}

	},

	// backward compatibility

	noZoom: {

		get: function () {

			console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
			return !this.enableZoom;
		},

		set: function (value) {

			console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
			this.enableZoom = !value;
		}

	},

	noRotate: {

		get: function () {

			console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
			return !this.enableRotate;
		},

		set: function (value) {

			console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
			this.enableRotate = !value;
		}

	},

	noPan: {

		get: function () {

			console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
			return !this.enablePan;
		},

		set: function (value) {

			console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
			this.enablePan = !value;
		}

	},

	noKeys: {

		get: function () {

			console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
			return !this.enableKeys;
		},

		set: function (value) {

			console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
			this.enableKeys = !value;
		}

	},

	staticMoving: {

		get: function () {

			console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
			return !this.enableDamping;
		},

		set: function (value) {

			console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
			this.enableDamping = !value;
		}

	},

	dynamicDampingFactor: {

		get: function () {

			console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
			return this.dampingFactor;
		},

		set: function (value) {

			console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
			this.dampingFactor = value;
		}

	}

});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_Entry__ = __webpack_require__(0);
/**
 * fileOverview:
 * Project:
 * File: Plane
 * Date:
 * Author: Teraguchi
 */



'use strict';

class Plane extends __WEBPACK_IMPORTED_MODULE_0__Core_Entry__["a" /* default */] {

	constructor() {

		super();

		this.uniforms = {};
		this.texture = null;
		this.mesh = null;

		this.loadTexture = this._loadTexture.bind(this);
		this.createMesh = this._createMesh.bind(this);
		this.render = this._render.bind(this);
		this.resize = this._resize.bind(this);
	}

	_loadTexture(image, callback) {
		const loader = new THREE.TextureLoader();
		loader.load(image, texture => {
			texture.magFilter = THREE.NearestFilter;
			texture.minFilter = THREE.NearestFilter;
			this.texture = texture;
			this.mesh = this.createMesh();
			callback();
		});
	}

	_createMesh() {
		this.uniforms = {
			resolution: {
				type: 'v2',
				value: new THREE.Vector2(document.body.clientWidth, document.body.clientHeight)
			},
			imageResolution: {
				type: 'v2',
				value: new THREE.Vector2(2048, 1356)
			},
			texture: {
				type: 't',
				value: this.texture
			}
		};
		return new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), new THREE.RawShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: __webpack_require__(23),
			fragmentShader: __webpack_require__(24)
		}));
	}

	/**
  * レンダラー
  * @private
  */
	_render(time) {

		if (this.stop) return;
		this.uniforms.time.value += time / this.interval;
		if (this.uniforms.time.value > 1) {
			this.uniforms.time.value = 0;
			this.prev_num = this.next_num;
			this.uniforms.texPrev.value = this.textures[this.next_num];
			while (this.next_num == this.prev_num) {
				this.next_num = Math.floor(Math.random() * this.textures.length);
			}
			this.uniforms.texNext.value = this.textures[this.next_num];
		}
	}

	_resize() {
		this.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Plane;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform sampler2D texture;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vec2 ratio = vec2(\n        min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),\n        min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)\n    );\n\n    vec2 uv = vec2(\n        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n    );\n    gl_FragColor = texture2D(texture, uv);\n}"

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visual_Canvas__ = __webpack_require__(26);
/**
 * fileOverview:
 * Project:
 * File: Display
 * Date:
 * Author: Teraguchi
 */

// import WebGLinit from './WebGLinit.js';



'use strict';

class DisplayTop {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {

    // アニメーションループスタート
    // gb.in.up.loop();

  }

  onLoad() {

    gb.in.canvas = new __WEBPACK_IMPORTED_MODULE_0__visual_Canvas__["a" /* default */]();

    gb.in.canvas.init();
  }

  static run() {

    // window.console.log('static_Run');

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayTop;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_Entry__ = __webpack_require__(0);
/**
 * fileOverview:
 * Project:
 * File: Canvas
 * Date: 17/9/23
 * Author: Teraguchi
 */



'use strict';

class Canvas extends __WEBPACK_IMPORTED_MODULE_0__Core_Entry__["a" /* default */] {

  constructor() {

    super();

    this.uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_resolution: { type: "v2", value: new THREE.Vector2() },
      u_mouse: { type: "v2", value: new THREE.Vector2() }
    };
    this.canvas = document.getElementById('webgl-output');

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    // this.output = opts.output || document.createElement('div');

    this.camera = null;
    this.renderer = null;
    this.scene = null;
    this.cube = null;

    this.createCamera = this._createCamera.bind(this);
    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);
    this.createObject = this._createObject.bind(this);
    this.orbitControls = this._orbitControls.bind(this);

    this.planeObject = this._planeObject.bind(this);

    this.render = this._render.bind(this);

    this.onResize = this._onResize.bind(this);

    this.Update = this._Update.bind(this);
  }

  /**
   * 初期化
   */
  init() {

    this.createCamera();
    this.createScene();
    this.createRenderer();

    this.orbitControls();
    // this.createObject();

    this.planeObject();

    this.Update();

    // this.titleObject.loadTexture(() => {
    //   this.scene.add(this.titleObject.obj);
    // });

    //リサイズイベント発火
    window.addEventListener('resize', () => {
      this.onResize();
    }, false);
  }

  /**
   * カメラ作成
   */
  _createCamera() {

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 100;

    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  /**
   * レンダラー作成
   */
  _createRenderer() {

    this.renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: false,
      stencil: false,
      depth: true,
      premultipliedAlpha: false,
      canvas: this.canvas
    });

    // this.renderer.setClearColor(0xffffff);
    this.renderer.setClearColor(0x000000);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize(this.width, this.height);
    // this.output.appendChild(this.renderer.domElement);
  }

  /**
   *　シーン作成
   */
  _createScene() {

    this.scene = new THREE.Scene();
  }

  /**
   * Object作成
   * @private
   */
  _createObject() {

    let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    let cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true
    });

    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.cube.position.x = 3;
    this.cube.position.y = 3;
    this.cube.position.z = 3;

    this.scene.add(this.cube);
  }

  _planeObject() {
    this.plane = new THREE.Mesh(
    // new THREE.PlaneBufferGeometry(256, 64, 40, 10),
    new THREE.PlaneBufferGeometry(5, 20, 32), new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: __webpack_require__(27),
      fragmentShader: __webpack_require__(28)
    }));
    this.scene.add(this.plane);
  }

  /**
   * レンダラー
   * @private
   */
  _render() {
    let clock = new THREE.Clock();
    let time = clock.getDelta();

    // this.titleObject.titrender(time);
  }

  /**
   * 更新
   * @private
   */
  _Update() {
    this.render();
    requestAnimationFrame(() => {
      this.Update();
    });
    // this.controls.update();
    this.uniforms.u_time.value += 0.05;
    this.renderer.render(this.scene, this.camera);
  }

  /**
   *　画面リサイズ
   */
  _onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  /**
    * カメラコントロール
   */
  _orbitControls() {
    this.controls = new THREE.OrbitControls(this.camera);
    this.controls.autoRotate = true;
    let clock = new THREE.Clock();

    let delta = clock.getDelta();
    this.controls.update(delta);
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Canvas;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n//attribute vec3 position;\n\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform float u_time;\n\nvoid main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    gl_FragColor=vec4(st.x,st.y,0.0,1.0);\n}"

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmZhN2Y1ZmI1NDY1OGViZDNmMGQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0NvbmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FycmF5L0FycmF5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvdWEvY2hlY2tDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvdWEtcGFyc2VyLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9pbWcvcHJlbG9hZEltZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0blR3aXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5MaW5lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuRmFjZUJvb2suanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9UZXh0dXJlQmcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvT3JiaXRDb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLnZlcnQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci5mcmFnIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZU1vdmllLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL0NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QudmVydCIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QuZnJhZyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRW50cnkiLCJjb25zdHJ1Y3RvciIsImluaXQiLCJ3aW5kb3ciLCJnYiIsInVuZGVmaW5lZCIsImluIiwiY29tbW9uIiwibWFpbiIsIkNvbW1vbiIsInNldHVwIiwic2V0RXZlbnRzIiwiY29uZiIsInUiLCJmIiwidXQiLCJvblJlYWR5Iiwib25Mb2FkIiwiJCIsImRvY3VtZW50Iiwib24iLCJiaW5kIiwiQ29uZiIsIlJFTEVBU0UiLCJGTEciLCJMT0ciLCJQQVJBTSIsIlNUQVRTIiwiZGVmVyIsImRlZkgiLCJXIiwiSCIsInNwVyIsInNwSCIsImJwIiwibW9kZSIsImtleXMiLCJzd2l0Y2hNb2RlIiwic2VjMDJJbWdOdW0iLCJ5b3V0dWJlSUQwMSIsInlvdXR1YmVJRDAyIiwid2ViRm9udExvYWRlZCIsImkiLCJrZXkiLCJsZW4iLCJwYXJhbSIsInJlZiIsInJlZjEiLCJ2YWx1ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNwbGl0IiwibGVuZ3RoIiwiaiIsIm9iaiIsImsiLCJ2YWwiLCJVdGlsIiwiaXNTZXRTUFNpemUiLCJzdGFydFRpbWUiLCJlbGFwc2VkVGltZSIsIm5vdyIsIkRhdGUiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20yIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImhpdCIsInJhbmdlIiwibWFwIiwibnVtIiwicmVzTWluIiwicmVzTWF4IiwiYmFzZU1pbiIsImJhc2VNYXgiLCJwIiwiZGVjaW1hbCIsIm4iLCJwb3MiLCJTdHJpbmciLCJpbmRleE9mIiwic3Vic3RyIiwiY2xhbXAiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsImRlZ3JlZSIsInJhZGlhbnMiLCJQSSIsInJhZGlhbiIsImFuZ2xlIiwiZGlzdCIsInAxIiwicDIiLCJzcXJ0IiwicG93IiwieCIsInkiLCJhc2NlbmQiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJkZXNjZW5kIiwiY29uc3RyYWluIiwidW5pcXVlIiwiZ2V0VGltZSIsImJ1dHRvbk1vZGUiLCJmbGciLCJjc3MiLCJpc0RpcmVjdGlvbiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJpc1Jlc3BvbnNpdmUiLCJpc1Jlc1NQIiwiaXNSZXNQQyIsImdldFBhcmFtIiwidXJsIiwiaHJlZiIsInBhcmFtSXRlbXMiLCJsaXN0IiwicGFyYW1JdGVtIiwiaGFzaCIsImdldENvb2tpZSIsImwiLCJsZW4xIiwiY29va2llIiwic2V0Q29va2llIiwiZ2V0SGV4Q29sb3IiLCJyIiwiZyIsInN0ciIsInRvU3RyaW5nIiwiQXJyYXkiLCJqb2luIiwiaXNDb250YWluIiwiY29udGFpbiIsImFkZDAiLCJmbG9hdEZvcm1hdCIsIm51bWJlciIsIl9wb3ciLCJyb3VuZCIsInByaWNlIiwic3RyUmV2ZXJzZSIsInJlcyIsInJlcGxhY2VBbGwiLCJvcmciLCJkZXN0Iiwic3RyUmVwbGFjZSIsImJlZm9yZSIsImFmdGVyIiwiUmVnRXhwIiwiZ2V0Tm93Iiwic3RhcnQiLCJlbGFwc2VkIiwibSIsInMiLCJtcyIsInRpbWUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsIm1pbGxTZWNvbmQiLCJnZXRNaWxsaXNlY29uZHMiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRocyIsIm1vbnRoZGF5cyIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZGF5Iiwid2Vla0RheUpQIiwid0RKIiwiZ2V0RGF5Iiwid2Vla0RheUVOIiwid0RFIiwiYWZ0ZXJEYXkiLCJOdW1iZXIiLCJpc09iamVjdCIsImlnbm9yZUFycmF5IiwiaXNOdW1iZXIiLCJpc1N0cmluZyIsImlzRnVuY3Rpb24iLCJpc0FycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsImlzTnVsbCIsImlzVW5kZWZpbmVkIiwic2V0SW1nU1BTaXplIiwiJHRhcmdldCIsIiRpbWciLCJlYWNoIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImF0dHIiLCJ0cmlnZ2VyIiwic2V0UHJldmVudCIsInNlbGYiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVQcmV2ZW50Iiwib2ZmIiwicHJvdG9jb2wiLCJob3N0IiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aCIsInBhdGhuYW1lIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsInByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyIsImtleUNvZGUiLCJkaXNhYmxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ud2hlZWwiLCJvbm1vdXNld2hlZWwiLCJvbnRvdWNobW92ZSIsIm9ua2V5ZG93biIsImVuYWJsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJVdGlscyIsIl9zZXR1cCIsImNoZWNrQ2xpZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXMiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpZCIsImNsZWFyVGltZW91dCIsImFyclJhbmQiLCJzaHVmZmxlIiwiQXJyIiwic2xpY2UiLCJ0IiwicGFyc2VyIiwidWEiLCJpc0lFIiwiYnJvd3NlciIsImdldEJyb3dzZXIiLCJuYW1lIiwiaXNGaXJlZm94IiwiaXNDaHJvbWUiLCJpc1NhZmFyaSIsImlzTW9iaWxlIiwiZGV2aWNlIiwiZ2V0RGV2aWNlIiwidHlwZSIsImlzVGFibGV0Iiwib3MiLCJnZXRPUyIsImRldmljZV9uYW1lIiwidmVuZG9yIiwiYnJvd3Nlcl9uYW1lIiwiYWxsIiwiZ2V0VUEiLCJvIiwiYyIsImQiLCJ2IiwiRSIsIlMiLCJleHRlbmQiLCJjb25jYXQiLCJoYXMiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyaXplIiwibWFqb3IiLCJ0cmltIiwicmd4IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJleGVjIiwidGVzdCIsIlQiLCJvbGRzYWZhcmkiLCJ2ZXJzaW9uIiwiYW1hem9uIiwibW9kZWwiLCJzcHJpbnQiLCJIVEMiLCJTcHJpbnQiLCJ3aW5kb3dzIiwiTUUiLCJYUCIsIlZpc3RhIiwiUlQiLCJOIiwiY3B1IiwiZW5naW5lIiwiQyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImFwcGx5IiwiZ2V0Q1BVIiwiZ2V0RW5naW5lIiwiZ2V0UmVzdWx0Iiwic2V0VUEiLCJWRVJTSU9OIiwiQlJPV1NFUiIsIk5BTUUiLCJNQUpPUiIsIkNQVSIsIkFSQ0hJVEVDVFVSRSIsIkRFVklDRSIsIk1PREVMIiwiVkVORE9SIiwiVFlQRSIsIkNPTlNPTEUiLCJNT0JJTEUiLCJTTUFSVFRWIiwiVEFCTEVUIiwiV0VBUkFCTEUiLCJFTUJFRERFRCIsIkVOR0lORSIsIk9TIiwiZXhwb3J0cyIsIm1vZHVsZSIsIlVBUGFyc2VyIiwialF1ZXJ5IiwiWmVwdG8iLCJMIiwiZ2V0Iiwic2V0IiwiaW1nUGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW1nIiwiSW1hZ2UiLCJjYWxsZWUiLCJzcmMiLCIkYnRuIiwidGV4dCIsInNoYXJlVVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3BlbiIsImRlc2NyaXB0aW9uIiwiRnVuYyIsImJsYW5rIiwiZGVidWdnZXIiLCJleHBhbmRqUXVlcnkiLCJtZXRob2RzIiwiY29uc29sZSIsInByZXBlbmQiLCJGUFMiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiZm4iLCJhZGp1c3QiLCJhZGp1c3RXIiwiYWRqdXN0SCIsImNoZWNrQ3NzQmxlbmQiLCJDU1MiLCJzdXBwb3J0cyIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxvZyIsIm5vdFNhdmVJbWciLCJpc1BDIiwiaXNBbmRyb2lkVmVyc2lvbiIsImFsZXJ0IiwiTWFpbiIsInBhZ2UiLCJkYXRhIiwib25SZW5kZXIiLCJEaXNwbGF5VG9wIiwidGV4dHVyZUJnIiwicnVuIiwiVGV4dHVyZUJnIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJjYW1lcmEiLCJyZW5kZXJlciIsInNjZW5lIiwiY3JlYXRlQ2FtZXJhIiwiX2NyZWF0ZUNhbWVyYSIsImNyZWF0ZVJlbmRlcmVyIiwiX2NyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlU2NlbmUiLCJfY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsIl9vblJlc2l6ZSIsIlVwZGF0ZSIsIl9VcGRhdGUiLCJsb2FkVGV4dHVyZSIsIl9sb2FkVGV4dHVyZSIsInBsYW5lIiwiVEhSRUUiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwieiIsImxvb2tBdCIsIlZlY3RvcjMiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJzdGVuY2lsIiwiZGVwdGgiLCJwcmVtdWx0aXBsaWVkQWxwaGEiLCJzZXRDbGVhckNvbG9yIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwiU2NlbmUiLCJtZXNoIiwicmVuZGVyIiwibWF0ZXJpYWwiLCJ1bmlmb3JtcyIsInJlc29sdXRpb24iLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiT3JiaXRDb250cm9scyIsIm9iamVjdCIsImRvbUVsZW1lbnQiLCJlbmFibGVkIiwidGFyZ2V0IiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsIkluZmluaXR5IiwibWluWm9vbSIsIm1heFpvb20iLCJtaW5Qb2xhckFuZ2xlIiwibWF4UG9sYXJBbmdsZSIsIm1pbkF6aW11dGhBbmdsZSIsIm1heEF6aW11dGhBbmdsZSIsImVuYWJsZURhbXBpbmciLCJkYW1waW5nRmFjdG9yIiwiZW5hYmxlWm9vbSIsInpvb21TcGVlZCIsImVuYWJsZVJvdGF0ZSIsInJvdGF0ZVNwZWVkIiwiZW5hYmxlUGFuIiwia2V5UGFuU3BlZWQiLCJhdXRvUm90YXRlIiwiYXV0b1JvdGF0ZVNwZWVkIiwiZW5hYmxlS2V5cyIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiQk9UVE9NIiwibW91c2VCdXR0b25zIiwiT1JCSVQiLCJNT1VTRSIsIlpPT00iLCJNSURETEUiLCJQQU4iLCJ0YXJnZXQwIiwiY2xvbmUiLCJwb3NpdGlvbjAiLCJ6b29tMCIsInpvb20iLCJnZXRQb2xhckFuZ2xlIiwic3BoZXJpY2FsIiwicGhpIiwiZ2V0QXppbXV0aGFsQW5nbGUiLCJ0aGV0YSIsInJlc2V0Iiwic2NvcGUiLCJjb3B5IiwiZGlzcGF0Y2hFdmVudCIsImNoYW5nZUV2ZW50IiwidXBkYXRlIiwic3RhdGUiLCJTVEFURSIsIk5PTkUiLCJvZmZzZXQiLCJxdWF0IiwiUXVhdGVybmlvbiIsInNldEZyb21Vbml0VmVjdG9ycyIsInVwIiwicXVhdEludmVyc2UiLCJpbnZlcnNlIiwibGFzdFBvc2l0aW9uIiwibGFzdFF1YXRlcm5pb24iLCJzdWIiLCJhcHBseVF1YXRlcm5pb24iLCJzZXRGcm9tVmVjdG9yMyIsInJvdGF0ZUxlZnQiLCJnZXRBdXRvUm90YXRpb25BbmdsZSIsInNwaGVyaWNhbERlbHRhIiwibWFrZVNhZmUiLCJyYWRpdXMiLCJzY2FsZSIsInBhbk9mZnNldCIsInNldEZyb21TcGhlcmljYWwiLCJ6b29tQ2hhbmdlZCIsImRpc3RhbmNlVG9TcXVhcmVkIiwiRVBTIiwiZG90IiwicXVhdGVybmlvbiIsImRpc3Bvc2UiLCJvbkNvbnRleHRNZW51Iiwib25Nb3VzZURvd24iLCJvbk1vdXNlV2hlZWwiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoRW5kIiwib25Ub3VjaE1vdmUiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm9uS2V5RG93biIsInN0YXJ0RXZlbnQiLCJlbmRFdmVudCIsIlJPVEFURSIsIkRPTExZIiwiVE9VQ0hfUk9UQVRFIiwiVE9VQ0hfRE9MTFkiLCJUT1VDSF9QQU4iLCJTcGhlcmljYWwiLCJyb3RhdGVTdGFydCIsIlZlY3RvcjIiLCJyb3RhdGVFbmQiLCJyb3RhdGVEZWx0YSIsInBhblN0YXJ0IiwicGFuRW5kIiwicGFuRGVsdGEiLCJkb2xseVN0YXJ0IiwiZG9sbHlFbmQiLCJkb2xseURlbHRhIiwiZ2V0Wm9vbVNjYWxlIiwicm90YXRlVXAiLCJwYW5MZWZ0IiwiZGlzdGFuY2UiLCJvYmplY3RNYXRyaXgiLCJzZXRGcm9tTWF0cml4Q29sdW1uIiwibXVsdGlwbHlTY2FsYXIiLCJwYW5VcCIsInBhbiIsImRlbHRhWCIsImRlbHRhWSIsImVsZW1lbnQiLCJ0YXJnZXREaXN0YW5jZSIsInRhbiIsImZvdiIsIm1hdHJpeCIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInJpZ2h0IiwibGVmdCIsInRvcCIsImJvdHRvbSIsIndhcm4iLCJkb2xseUluIiwiZG9sbHlTY2FsZSIsImRvbGx5T3V0IiwiaGFuZGxlTW91c2VEb3duUm90YXRlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZURvd25Eb2xseSIsImhhbmRsZU1vdXNlRG93blBhbiIsImhhbmRsZU1vdXNlTW92ZVJvdGF0ZSIsInN1YlZlY3RvcnMiLCJoYW5kbGVNb3VzZU1vdmVEb2xseSIsImhhbmRsZU1vdXNlTW92ZVBhbiIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZVdoZWVsIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZVRvdWNoU3RhcnRSb3RhdGUiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRvdWNoU3RhcnREb2xseSIsImR4IiwiZHkiLCJoYW5kbGVUb3VjaFN0YXJ0UGFuIiwiaGFuZGxlVG91Y2hNb3ZlUm90YXRlIiwiaGFuZGxlVG91Y2hNb3ZlRG9sbHkiLCJoYW5kbGVUb3VjaE1vdmVQYW4iLCJoYW5kbGVUb3VjaEVuZCIsImJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsImNyZWF0ZSIsIkV2ZW50RGlzcGF0Y2hlciIsImRlZmluZVByb3BlcnRpZXMiLCJjZW50ZXIiLCJub1pvb20iLCJub1JvdGF0ZSIsIm5vUGFuIiwibm9LZXlzIiwic3RhdGljTW92aW5nIiwiZHluYW1pY0RhbXBpbmdGYWN0b3IiLCJQbGFuZSIsInRleHR1cmUiLCJjcmVhdGVNZXNoIiwiX2NyZWF0ZU1lc2giLCJfcmVuZGVyIiwicmVzaXplIiwiX3Jlc2l6ZSIsImltYWdlIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJtYWdGaWx0ZXIiLCJOZWFyZXN0RmlsdGVyIiwibWluRmlsdGVyIiwiaW1hZ2VSZXNvbHV0aW9uIiwiTWVzaCIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJSYXdTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwic3RvcCIsImludGVydmFsIiwicHJldl9udW0iLCJuZXh0X251bSIsInRleFByZXYiLCJ0ZXh0dXJlcyIsInRleE5leHQiLCJDYW52YXMiLCJ1X3RpbWUiLCJ1X3Jlc29sdXRpb24iLCJ1X21vdXNlIiwiY3ViZSIsImNyZWF0ZU9iamVjdCIsIl9jcmVhdGVPYmplY3QiLCJvcmJpdENvbnRyb2xzIiwiX29yYml0Q29udHJvbHMiLCJwbGFuZU9iamVjdCIsIl9wbGFuZU9iamVjdCIsImN1YmVHZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwiY3ViZU1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsIndpcmVmcmFtZSIsIlNoYWRlck1hdGVyaWFsIiwiY2xvY2siLCJDbG9jayIsImdldERlbHRhIiwiY29udHJvbHMiLCJkZWx0YSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7Ozs7QUFRQSxtQkFBQUEsQ0FBUSxFQUFSOztBQUVBOztBQUVlLE1BQU1DLEtBQU4sQ0FBWTs7QUFFMUJDLGVBQWMsQ0FFYjs7QUFFRDs7O0FBR0FDLFFBQU0sQ0FFTDs7QUFYeUIsQzs7Ozs7Ozs7Ozs7QUNaM0I7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBOztBQUVBLENBQUMsTUFBSTs7QUFFSDtBQUNBLE1BQUlDLE9BQU9DLEVBQVAsS0FBWUMsU0FBaEIsRUFBMkJGLE9BQU9DLEVBQVAsR0FBWSxFQUFaO0FBQzNCRCxTQUFPQyxFQUFQLENBQVVFLEVBQVYsR0FBZSxFQUFmLENBSkcsQ0FJZ0I7O0FBRW5CRixLQUFHRSxFQUFILENBQU1DLE1BQU4sR0FBZSxJQUFJLDZEQUFKLEVBQWY7QUFDQUgsS0FBR0UsRUFBSCxDQUFNRSxJQUFOLEdBQWEsSUFBSSwyREFBSixFQUFiO0FBRUQsQ0FURCxJOzs7Ozs7Ozs7O0FDWEE7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxNQUFNQyxNQUFOLENBQWE7O0FBRTFCUixnQkFBYzs7QUFFWixTQUFLUyxLQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUVEOztBQUVGRCxVQUFROztBQUVQOzs7OztBQUtFTixPQUFHRSxFQUFILENBQU1NLElBQU4sR0FBYSxJQUFJLDJEQUFKLEVBQWI7QUFDQVIsT0FBR0UsRUFBSCxDQUFNTyxDQUFOLEdBQVUsSUFBSSw2REFBSixFQUFWO0FBQ0FULE9BQUdFLEVBQUgsQ0FBTVEsQ0FBTixHQUFVLElBQUksNkRBQUosRUFBVjs7QUFFQVYsT0FBR0UsRUFBSCxDQUFNUyxFQUFOLEdBQVcsSUFBSSw2REFBSixFQUFYO0FBRUQ7O0FBRURDLFlBQVUsQ0FHVDs7QUFFREMsV0FBUyxDQUdSOztBQUVETixjQUFZOztBQUVWTyxNQUFFQyxRQUFGLEVBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLEtBQUtKLE9BQUwsQ0FBYUssSUFBYixDQUFrQixJQUFsQixDQUF4QjtBQUNBSCxNQUFFZixNQUFGLEVBQVVpQixFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7QUF2Q3lCLEM7Ozs7Ozs7OztBQ2Y1Qjs7Ozs7Ozs7QUFRQTs7QUFFZSxNQUFNQyxJQUFOLENBQVc7O0FBRXhCckIsZ0JBQWM7O0FBRVo7QUFDQTtBQUNBO0FBQ0EsU0FBS3NCLE9BQUwsR0FBZSxJQUFmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsR0FBTCxHQUFXO0FBQ1RDLFdBQUksSUFESyxFQUNFO0FBQ1hDLGFBQU0sSUFGRyxFQUVHO0FBQ1pDLGFBQU0sSUFIRyxDQUdHO0FBSEgsS0FBWDtBQUtBLFFBQUksQ0FBQyxLQUFLSixPQUFWLEVBQW1CO0FBQ2pCLFdBQUtDLEdBQUwsR0FBVztBQUNUQyxhQUFJLEtBREs7QUFFVEMsZUFBTSxLQUZHO0FBR1RDLGVBQU07QUFIRyxPQUFYO0FBS0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksR0FBWjs7QUFFQSxTQUFLQyxDQUFMLEdBQVMsSUFBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxHQUFUOztBQUVBLFNBQUtDLEdBQUwsR0FBVyxHQUFYO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEdBQVg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsRUFBTCxHQUFVLEdBQVY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FDVjtBQUNJLGFBQU8sT0FEWDtBQUVJLGVBQVMsQ0FBQyxTQUFELEVBQVcsV0FBWCxFQUF1QixPQUF2QjtBQUZiLEtBRFUsRUFLVjtBQUNJLGFBQU8sTUFEWDtBQUVJLGVBQVMsQ0FBQyxRQUFELEVBQVUsUUFBVixFQUFtQixRQUFuQjtBQUZiLEtBTFUsRUFTVjtBQUNJLGFBQU8sU0FEWDtBQUVJLGVBQVMsQ0FBQyxJQUFEO0FBRmIsS0FUVSxDQUFaO0FBY0EsU0FBS0MsVUFBTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEdBQW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsYUFBbkI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLGFBQW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsS0FBckI7QUFFRDs7QUFHREosZUFBWTs7QUFFVixRQUFJSyxDQUFKLEVBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsS0FBakIsRUFBd0JDLEdBQXhCLEVBQTZCQyxJQUE3QixFQUFtQ0MsS0FBbkM7O0FBRUFGLFVBQU1HLFNBQVNDLE1BQVQsQ0FBZ0JDLE9BQWhCLENBQXdCLEdBQXhCLEVBQTZCLEVBQTdCLEVBQWlDQyxLQUFqQyxDQUF1QyxHQUF2QyxDQUFOOztBQUVBLFNBQUtWLElBQUksQ0FBSixFQUFPRSxNQUFNRSxJQUFJTyxNQUF0QixFQUE4QlgsSUFBSUUsR0FBbEMsRUFBdUNGLEdBQXZDLEVBQTRDO0FBQzFDRyxjQUFRQyxJQUFJSixDQUFKLENBQVI7QUFDQUssYUFBT0YsTUFBTU8sS0FBTixDQUFZLEdBQVosQ0FBUCxFQUF5QlQsTUFBTUksS0FBSyxDQUFMLENBQS9CLEVBQXdDQyxRQUFRRCxLQUFLLENBQUwsQ0FBaEQ7O0FBRUEsV0FBSyxJQUFJTyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2xCLElBQUwsQ0FBVWlCLE1BQTlCLEVBQXNDQyxHQUF0QyxFQUEyQzs7QUFFekMsWUFBSUMsTUFBTSxLQUFLbkIsSUFBTCxDQUFVa0IsQ0FBVixDQUFWOztBQUVBO0FBQ0EsWUFBSUMsSUFBSVosR0FBSixLQUFZQSxHQUFoQixFQUFxQjs7QUFFbkI7QUFDQSxlQUFLLElBQUlhLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsSUFBSVAsS0FBSixDQUFVSyxNQUE5QixFQUFzQ0csR0FBdEMsRUFBMkM7O0FBRXpDLGdCQUFJQyxNQUFNRixJQUFJUCxLQUFKLENBQVVRLENBQVYsQ0FBVjs7QUFFQTtBQUNBLGdCQUFJQyxRQUFRVCxLQUFaLEVBQW1CLEtBQUtPLElBQUlaLEdBQVQsSUFBZ0JjLEdBQWhCO0FBRXBCO0FBR0Y7QUFHRjtBQUVGO0FBRUY7O0FBMUh1QixDOzs7Ozs7Ozs7QUNWMUI7Ozs7Ozs7O0FBUWUsTUFBTUMsSUFBTixDQUFXOztBQUV4QnpELGdCQUFjOztBQUVaLFNBQUswRCxXQUFMLEdBQW1CLEtBQW5COztBQUVBLFNBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLElBQUlDLElBQUosRUFBWDtBQUVEOztBQUVEOzs7O0FBS0E7Ozs7OztBQU1BQyxTQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUI7O0FBRWYsV0FBT0MsS0FBS0MsS0FBTCxDQUFZRCxLQUFLSCxNQUFMLE1BQWtCRSxNQUFNLENBQVAsR0FBWUQsR0FBN0IsSUFBb0NBLEdBQWhELENBQVA7QUFFRDs7QUFFRDs7Ozs7Ozs7QUFRQUksVUFBUUMsSUFBUixFQUFjQyxJQUFkLEVBQW9CQyxJQUFwQixFQUEwQkMsSUFBMUIsRUFBZ0M7O0FBRTlCLFFBQUksS0FBS0MsR0FBTCxDQUFTLENBQVQsQ0FBSixFQUFpQjtBQUNmLGFBQU8sS0FBS1YsTUFBTCxDQUFZTSxJQUFaLEVBQWtCQyxJQUFsQixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxLQUFLUCxNQUFMLENBQVlRLElBQVosRUFBa0JDLElBQWxCLENBQVA7QUFDRDtBQUVGOztBQUVEOzs7OztBQUtBQyxNQUFJQyxLQUFKLEVBQVc7O0FBRVQsV0FBTyxLQUFLWCxNQUFMLENBQVksQ0FBWixFQUFlVyxRQUFRLENBQXZCLE1BQThCLENBQXJDO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxRQUFNbEIsR0FBTixFQUFXOztBQUVULFdBQU8sS0FBS08sTUFBTCxDQUFZLENBQUNQLEdBQWIsRUFBa0JBLEdBQWxCLENBQVA7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQW1CLE1BQUlDLEdBQUosRUFBU0MsTUFBVCxFQUFpQkMsTUFBakIsRUFBeUJDLE9BQXpCLEVBQWtDQyxPQUFsQyxFQUEyQzs7QUFFekMsUUFBSUMsQ0FBSjtBQUNBLFFBQUlMLE1BQU1HLE9BQVYsRUFBbUI7QUFDakIsYUFBT0YsTUFBUDtBQUNEO0FBQ0QsUUFBSUQsTUFBTUksT0FBVixFQUFtQjtBQUNqQixhQUFPRixNQUFQO0FBQ0Q7QUFDREcsUUFBSSxDQUFDSCxTQUFTRCxNQUFWLEtBQXFCRyxVQUFVRCxPQUEvQixDQUFKOztBQUVBLFdBQVEsQ0FBQ0gsTUFBTUcsT0FBUCxJQUFrQkUsQ0FBbkIsR0FBd0JKLE1BQS9CO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FLLFVBQVFOLEdBQVIsRUFBYU8sQ0FBYixFQUFnQjtBQUNkLFFBQUkxQyxDQUFKLEVBQU8yQyxHQUFQO0FBQ0FSLFVBQU1TLE9BQU9ULEdBQVAsQ0FBTjtBQUNBUSxVQUFNUixJQUFJVSxPQUFKLENBQVksR0FBWixDQUFOO0FBQ0EsUUFBSUgsTUFBTSxDQUFWLEVBQWE7QUFDWCxhQUFPUCxJQUFJekIsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBQVA7QUFDRDtBQUNELFFBQUlpQyxRQUFRLENBQUMsQ0FBYixFQUFnQjtBQUNkUixhQUFPLEdBQVA7QUFDQW5DLFVBQUksQ0FBSjtBQUNBLGFBQU9BLElBQUkwQyxDQUFYLEVBQWM7QUFDWlAsZUFBTyxHQUFQO0FBQ0FuQztBQUNEO0FBQ0QsYUFBT21DLEdBQVA7QUFDRDtBQUNEQSxVQUFNQSxJQUFJVyxNQUFKLENBQVcsQ0FBWCxFQUFjSCxHQUFkLElBQXFCUixJQUFJVyxNQUFKLENBQVdILEdBQVgsRUFBZ0JELElBQUksQ0FBcEIsQ0FBM0I7QUFDQSxXQUFPUCxHQUFQO0FBQ0Q7O0FBRURZLFFBQU1DLFNBQU4sRUFBZ0JDLFdBQWhCLEVBQTRCbEMsR0FBNUIsRUFBaUM7O0FBRS9CLFdBQU9BLE9BQU9pQyxZQUFZQyxXQUFuQixDQUFQO0FBRUQ7O0FBRUY7Ozs7O0FBS0NDLFNBQU9DLE9BQVAsRUFBZ0I7O0FBRWQsV0FBT0EsVUFBVSxHQUFWLEdBQWdCMUIsS0FBSzJCLEVBQTVCO0FBRUQ7O0FBRUQ7QUFDQUMsU0FBT0MsS0FBUCxFQUFjOztBQUVaLFdBQU9BLFFBQVE3QixLQUFLMkIsRUFBYixHQUFrQixHQUF6QixDQUZZLENBRWtCO0FBRS9COztBQUVERyxPQUFLQyxFQUFMLEVBQVNDLEVBQVQsRUFBYTs7QUFFWCxXQUFPaEMsS0FBS2lDLElBQUwsQ0FBVWpDLEtBQUtrQyxHQUFMLENBQVNGLEdBQUdHLENBQUgsR0FBT0osR0FBR0ksQ0FBbkIsRUFBc0IsQ0FBdEIsSUFBMkJuQyxLQUFLa0MsR0FBTCxDQUFTRixHQUFHSSxDQUFILEdBQU9MLEdBQUdLLENBQW5CLEVBQXNCLENBQXRCLENBQXJDLENBQVA7QUFFRDs7QUFFREMsU0FBT0MsR0FBUCxFQUFZOztBQUVWQSxRQUFJQyxJQUFKLENBQVMsVUFBU0MsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFDcEIsVUFBSUQsSUFBSUMsQ0FBUixFQUFZLE9BQU8sQ0FBQyxDQUFSO0FBQ1osVUFBSUQsSUFBSUMsQ0FBUixFQUFZLE9BQU8sQ0FBUDtBQUNaLGFBQU8sQ0FBUDtBQUNELEtBSkQ7QUFLQTtBQUNBO0FBRUQ7O0FBRURDLFVBQVFKLEdBQVIsRUFBYTs7QUFFWEEsUUFBSUMsSUFBSixDQUFTLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQ3BCLFVBQUlELElBQUlDLENBQVIsRUFBWSxPQUFPLENBQUMsQ0FBUjtBQUNaLFVBQUlELElBQUlDLENBQVIsRUFBWSxPQUFPLENBQVA7QUFDWixhQUFPLENBQVA7QUFDRCxLQUpEOztBQU1BO0FBQ0E7QUFFRDs7QUFFRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUFFLFlBQVU5RCxLQUFWLEVBQWlCaUIsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCOztBQUV6QixXQUFPQyxLQUFLRixHQUFMLENBQVNDLEdBQVQsRUFBY0MsS0FBS0QsR0FBTCxDQUFTbEIsS0FBVCxFQUFnQmlCLEdBQWhCLENBQWQsQ0FBUDs7QUFFQTtBQUNBO0FBQ0E7QUFFRDs7QUFFRDtBQUNBO0FBQ0E4QyxXQUFTOztBQUVQLFdBQU8sSUFBSWhELElBQUosR0FBV2lELE9BQVgsRUFBUDtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGFBQVdDLEdBQVgsRUFBZ0I7O0FBRWQsUUFBSUEsR0FBSixFQUFTO0FBQ1AsYUFBT2hHLEVBQUUsTUFBRixFQUFVaUcsR0FBVixDQUFjLFFBQWQsRUFBd0IsU0FBeEIsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9qRyxFQUFFLE1BQUYsRUFBVWlHLEdBQVYsQ0FBYyxRQUFkLEVBQXdCLFNBQXhCLENBQVA7QUFDRDtBQUVGOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsZ0JBQWU7O0FBRWIsUUFBSXRGLElBQUkzQixPQUFPa0gsVUFBZjtBQUFBLFFBQ0l0RixJQUFJNUIsT0FBT21ILFdBRGY7O0FBR0EsUUFBSXZGLElBQUlELENBQVIsRUFBVztBQUNUWixRQUFFLE1BQUYsRUFBVXFHLFFBQVYsQ0FBbUIsVUFBbkI7QUFDQXJHLFFBQUUsTUFBRixFQUFVc0csV0FBVixDQUFzQixXQUF0QjtBQUNELEtBSEQsTUFHSztBQUNIdEcsUUFBRSxNQUFGLEVBQVVxRyxRQUFWLENBQW1CLFdBQW5CO0FBQ0FyRyxRQUFFLE1BQUYsRUFBVXNHLFdBQVYsQ0FBc0IsVUFBdEI7QUFDRDtBQUVGOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsZUFBY3ZGLEVBQWQsRUFBa0I7O0FBRWhCLFFBQUlBLE1BQUk3QixTQUFSLEVBQW1CNkIsS0FBRyxHQUFIOztBQUVuQixRQUFJSixJQUFJM0IsT0FBT2tILFVBQWY7QUFBQSxRQUNJdEYsSUFBSTVCLE9BQU9tSCxXQURmOztBQUdBLFFBQUl4RixJQUFJSSxFQUFSLEVBQVk7QUFDVixXQUFLd0YsT0FBTCxHQUFlLEtBQWY7QUFDQSxXQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBekcsUUFBRSxNQUFGLEVBQVVzRyxXQUFWLENBQXNCLGdCQUF0QjtBQUNBdEcsUUFBRSxNQUFGLEVBQVVxRyxRQUFWLENBQW1CLGdCQUFuQjtBQUNELEtBTEQsTUFLTztBQUNMLFdBQUtHLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQXpHLFFBQUUsTUFBRixFQUFVcUcsUUFBVixDQUFtQixnQkFBbkI7QUFDQXJHLFFBQUUsTUFBRixFQUFVc0csV0FBVixDQUFzQixnQkFBdEI7QUFDRDtBQUVGOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQUksYUFBVzs7QUFFVCxRQUFJQyxNQUFNNUUsU0FBUzZFLElBQW5CO0FBQ0EsUUFBSWpGLFFBQVFnRixJQUFJekUsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBQVo7QUFDQSxRQUFJUCxTQUFPeEMsU0FBWCxFQUFzQixPQUFPQSxTQUFQO0FBQ3RCLFFBQUkwSCxhQUFhbEYsTUFBTU8sS0FBTixDQUFZLEdBQVosQ0FBakI7QUFDQSxRQUFJNEUsT0FBTyxFQUFYOztBQUVBLFNBQUssSUFBSXRGLElBQUksQ0FBYixFQUFnQkEsSUFBRXFGLFdBQVcxRSxNQUE3QixFQUFxQ1gsR0FBckMsRUFBMEM7O0FBRXRDdUYsa0JBQVlGLFdBQVdyRixDQUFYLEVBQWNVLEtBQWQsQ0FBb0IsR0FBcEIsQ0FBWjtBQUNBNEUsV0FBS0MsVUFBVSxDQUFWLENBQUwsSUFBcUJBLFVBQVUsQ0FBVixDQUFyQjtBQUVIOztBQUVELFdBQU9ELElBQVA7QUFFRDs7QUFFRDs7OztBQUlBRSxTQUFPOztBQUVMLFdBQU9qRixTQUFTaUYsSUFBVCxDQUFjL0UsT0FBZCxDQUFzQixHQUF0QixFQUEyQixFQUEzQixDQUFQO0FBRUQ7O0FBRUQ7Ozs7O0FBS0FnRixZQUFVeEYsR0FBVixFQUFlOztBQUViLFFBQUlnRSxDQUFKLEVBQU9GLEdBQVAsRUFBWS9ELENBQVosRUFBZTBGLENBQWYsRUFBa0JDLElBQWxCLEVBQXdCNUUsR0FBeEI7QUFDQSxRQUFJdEMsU0FBU21ILE1BQVQsS0FBb0IsS0FBSyxDQUF6QixJQUE4Qm5ILFNBQVNtSCxNQUFULEtBQW9CLElBQXRELEVBQTREO0FBQzFELGFBQU8sSUFBUDtBQUNEO0FBQ0Q3QixVQUFNdEYsU0FBU21ILE1BQVQsQ0FBZ0JsRixLQUFoQixDQUFzQixJQUF0QixDQUFOO0FBQ0EsU0FBS1YsSUFBSTBGLElBQUksQ0FBUixFQUFXQyxPQUFPNUIsSUFBSXBELE1BQTNCLEVBQW1DK0UsSUFBSUMsSUFBdkMsRUFBNkMzRixJQUFJLEVBQUUwRixDQUFuRCxFQUFzRDtBQUNwRDNFLFlBQU1nRCxJQUFJL0QsQ0FBSixDQUFOO0FBQ0FpRSxVQUFJbEQsSUFBSUwsS0FBSixDQUFVLEdBQVYsQ0FBSjtBQUNBLFVBQUl1RCxFQUFFLENBQUYsTUFBU2hFLEdBQWIsRUFBa0I7QUFDaEIsZUFBT2dFLEVBQUUsQ0FBRixDQUFQO0FBQ0Q7QUFDRjtBQUNELFdBQU8sSUFBUDtBQUVEOztBQUVEOzs7Ozs7QUFNQTRCLFlBQVU1RixHQUFWLEVBQWVjLEdBQWYsRUFBb0I7O0FBRWxCLFdBQU90QyxTQUFTbUgsTUFBVCxHQUFrQjNGLE1BQU0sR0FBTixHQUFZYyxHQUFyQztBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQStFLGNBQVlDLENBQVosRUFBY0MsQ0FBZCxFQUFnQjlCLENBQWhCLEVBQW1CO0FBQ2YsUUFBSStCLEdBQUo7QUFDQUEsVUFBTSxDQUFDRixLQUFLLEVBQUwsR0FBVUMsS0FBSyxDQUFmLEdBQW1COUIsQ0FBcEIsRUFBdUJnQyxRQUF2QixDQUFnQyxFQUFoQyxDQUFOO0FBQ0EsV0FBTyxNQUFNLElBQUlDLEtBQUosQ0FBVSxJQUFJRixJQUFJdEYsTUFBbEIsRUFBMEJ5RixJQUExQixDQUErQixHQUEvQixDQUFOLEdBQTRDSCxHQUFuRDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFJLFlBQVVKLEdBQVYsRUFBY0ssT0FBZCxFQUF1Qjs7QUFFckI7QUFDQSxRQUFLTCxJQUFJcEQsT0FBSixDQUFZeUQsT0FBWixLQUF3QixDQUFDLENBQTlCLEVBQWtDO0FBQ2hDLGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU8sS0FBUDtBQUVEOztBQUVEO0FBQ0FDLE9BQUtOLEdBQUwsRUFBUzlELE1BQUksQ0FBQyxDQUFkLEVBQWdCOztBQUVkLFdBQU8sQ0FBRSxpQkFBaUI4RCxHQUFuQixFQUF5Qm5ELE1BQXpCLENBQWlDWCxHQUFqQyxDQUFQO0FBRUQ7O0FBRURxRSxjQUFhQyxNQUFiLEVBQXFCL0QsQ0FBckIsRUFBeUI7O0FBRXZCLFFBQUlnRSxPQUFPakYsS0FBS2tDLEdBQUwsQ0FBVSxFQUFWLEVBQWVqQixDQUFmLENBQVg7QUFDQSxXQUFPakIsS0FBS2tGLEtBQUwsQ0FBWUYsU0FBU0MsSUFBckIsSUFBOEJBLElBQXJDO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBRSxRQUFNekUsR0FBTixFQUFXOztBQUVULFdBQU9TLE9BQU9ULEdBQVAsRUFBWTFCLE9BQVosQ0FBb0IsMEJBQXBCLEVBQWdELEtBQWhELENBQVA7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FvRyxhQUFXWixHQUFYLEVBQWdCOztBQUVkLFFBQUlqRyxDQUFKLEVBQU9FLEdBQVAsRUFBWTRHLEdBQVo7QUFDQUEsVUFBTSxFQUFOO0FBQ0E1RyxVQUFNK0YsSUFBSXRGLE1BQVY7QUFDQVgsUUFBSSxDQUFKO0FBQ0EsV0FBT0EsS0FBS0UsR0FBWixFQUFpQjtBQUNmNEcsYUFBT2IsSUFBSW5ELE1BQUosQ0FBVyxDQUFDOUMsQ0FBWixFQUFlLENBQWYsQ0FBUDtBQUNBQTtBQUNEO0FBQ0QsV0FBTzhHLEdBQVA7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsYUFBV2hHLEdBQVgsRUFBZ0JpRyxHQUFoQixFQUFxQkMsSUFBckIsRUFBMkI7O0FBRXpCLFdBQU9sRyxJQUFJTCxLQUFKLENBQVVzRyxHQUFWLEVBQWVaLElBQWYsQ0FBb0JhLElBQXBCLENBQVA7QUFFRDs7QUFFREMsYUFBV2pCLEdBQVgsRUFBZ0JrQixNQUFoQixFQUF3QkMsS0FBeEIsRUFBK0I7O0FBRTdCLFFBQUlyQixJQUFJLElBQUlzQixNQUFKLENBQVlGLE1BQVosRUFBb0IsR0FBcEIsQ0FBUjs7QUFFQSxXQUFPbEIsSUFBSXhGLE9BQUosQ0FBYXNGLENBQWIsRUFBaUJxQixLQUFqQixDQUFQO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUUsV0FBUzs7QUFFUCxTQUFLbEcsR0FBTCxHQUFXLElBQUlDLElBQUosRUFBWDtBQUVEOztBQUVEa0csVUFBUTs7QUFFTixTQUFLckcsU0FBTCxHQUFpQixLQUFLRSxHQUFMLENBQVNrRCxPQUFULEVBQWpCO0FBRUQ7O0FBRURrRCxZQUFVOztBQUVSLFNBQUtyRyxXQUFMLEdBQW1CLEtBQUtDLEdBQUwsQ0FBU2tELE9BQVQsS0FBcUIsS0FBS3BELFNBQTdDO0FBRUQ7O0FBRUR1RyxNQUFJOztBQUVGLFdBQU9oRyxLQUFLQyxLQUFMLENBQVksS0FBS1AsV0FBTCxHQUFtQixNQUFNLEVBQXJDLENBQVA7QUFFRDs7QUFFRHVHLE1BQUk7O0FBRUYsV0FBT2pHLEtBQUtDLEtBQUwsQ0FBVyxLQUFLUCxXQUFMLEdBQW1CLElBQTlCLENBQVA7QUFFRDs7QUFFRHdHLE9BQUs7O0FBRUgsV0FBTyxLQUFLeEcsV0FBWjtBQUVEOztBQUVEeUcsU0FBTzs7QUFFTCxTQUFLTixNQUFMOztBQUVBLFNBQUtPLElBQUwsR0FBWSxLQUFLekcsR0FBTCxDQUFTMEcsUUFBVCxFQUFaLENBSkssQ0FJcUM7QUFDMUMsU0FBS0MsTUFBTCxHQUFjLEtBQUszRyxHQUFMLENBQVM0RyxVQUFULEVBQWQsQ0FMSyxDQUtxQztBQUMxQyxTQUFLQyxNQUFMLEdBQWMsS0FBSzdHLEdBQUwsQ0FBUzhHLFVBQVQsRUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBSy9HLEdBQUwsQ0FBU2dILGVBQVQsRUFBbEI7QUFFRDs7QUFFREMsU0FBTzs7QUFFTCxXQUFPLEtBQUtqSCxHQUFMLENBQVNrSCxPQUFULEVBQVA7QUFFRDs7QUFFREMsV0FBUzs7QUFFUCxRQUFJQyxZQUFZLElBQUlyQyxLQUFKLENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsRUFBa0MsRUFBbEMsRUFBc0MsRUFBdEMsRUFBMEMsRUFBMUMsRUFBOEMsRUFBOUMsRUFBa0QsRUFBbEQsRUFBc0QsRUFBdEQsQ0FBaEI7O0FBRUEsV0FBTyxLQUFLL0UsR0FBTCxDQUFTcUgsUUFBVCxLQUFzQixDQUE3QjtBQUVEOztBQUVEQyxTQUFPOztBQUVMLFdBQU8sS0FBS3RILEdBQUwsQ0FBU3VILFdBQVQsRUFBUDtBQUVEOztBQUVEQyxRQUFNOztBQUVKO0FBQ0EsUUFBSUMsWUFBWSxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsQ0FBaEI7QUFDQSxRQUFJQyxNQUFNRCxVQUFVLEtBQUt6SCxHQUFMLENBQVMySCxNQUFULEVBQVYsQ0FBVjs7QUFFQTtBQUNBLFFBQUlDLFlBQVksQ0FBQyxLQUFELEVBQU8sS0FBUCxFQUFhLEtBQWIsRUFBbUIsS0FBbkIsRUFBeUIsS0FBekIsRUFBK0IsS0FBL0IsRUFBcUMsS0FBckMsQ0FBaEI7QUFDQSxRQUFJQyxNQUFNRCxVQUFVLEtBQUs1SCxHQUFMLENBQVMySCxNQUFULEVBQVYsQ0FBVjtBQUVEOztBQUVEO0FBQ0E7QUFDQUcsV0FBU2IsSUFBVCxFQUFlbEcsR0FBZixFQUFvQjs7QUFFbEIsV0FBTyxJQUFJZCxJQUFKLENBQVNnSCxLQUFLL0QsT0FBTCxLQUFpQjZFLE9BQU9oSCxHQUFQLElBQWMsRUFBZCxHQUFtQixFQUFuQixHQUF3QixFQUF4QixHQUE2QixJQUF2RCxDQUFQO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWlILFdBQVM5SSxLQUFULEVBQWdCK0ksV0FBaEIsRUFBNkI7QUFDekIsV0FBTyxPQUFPL0ksS0FBUCxLQUFpQixRQUFqQixJQUE2QkEsVUFBVSxJQUE5QztBQUNIOztBQUVEZ0osV0FBU2hKLEtBQVQsRUFBZ0I7QUFDWixXQUFPLE9BQU9BLEtBQVAsS0FBaUIsUUFBeEI7QUFDSDs7QUFFRGlKLFdBQVNqSixLQUFULEVBQWdCO0FBQ1osV0FBTyxPQUFPQSxLQUFQLEtBQWlCLFFBQXhCO0FBQ0g7O0FBRURrSixhQUFXbEosS0FBWCxFQUFrQjtBQUNkLFdBQU8sT0FBT0EsS0FBUCxLQUFpQixVQUF4QjtBQUNIOztBQUVEbUosVUFBUW5KLEtBQVIsRUFBZTtBQUNYLFdBQU9vSixPQUFPQyxTQUFQLENBQWlCekQsUUFBakIsQ0FBMEIwRCxJQUExQixDQUErQnRKLEtBQS9CLE1BQTBDLGdCQUFqRDtBQUNIOztBQUVEdUosU0FBT3ZKLEtBQVAsRUFBYztBQUNWLFdBQU9BLFVBQVUsSUFBakI7QUFDSDs7QUFFRHdKLGNBQVl4SixLQUFaLEVBQW1CO0FBQ2YsV0FBTyxPQUFPQSxLQUFQLEtBQWlCLFdBQXhCO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBeUosZUFBY0MsT0FBZCxFQUFzQjs7QUFFcEI7QUFDQSxRQUFJLENBQUMsS0FBS2hGLE9BQVYsRUFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBLFFBQUlpRixPQUFPRCxPQUFYO0FBQUEsUUFDSTlKLE1BQU0rSixLQUFLdEosTUFEZjs7QUFHQXNKLFNBQUtDLElBQUwsQ0FBVSxVQUFTbEssQ0FBVCxFQUFZOztBQUVsQixVQUFJbUssSUFBSTFJLEtBQUtDLEtBQUwsQ0FBV2xELEVBQUUsSUFBRixFQUFRNEwsS0FBUixLQUFrQixDQUE3QixDQUFSO0FBQUEsVUFDSUMsSUFBSTVJLEtBQUtDLEtBQUwsQ0FBV2xELEVBQUUsSUFBRixFQUFROEwsTUFBUixLQUFtQixDQUE5QixDQURSOztBQUdBOUwsUUFBRSxJQUFGLEVBQVErTCxJQUFSLENBQWE7QUFDVCxpQkFBU0osQ0FEQTtBQUVULGtCQUFVRTtBQUZELE9BQWI7O0FBS0EsVUFBSW5LLE9BQU9GLElBQUksQ0FBZixFQUFrQnhCLEVBQUVmLE1BQUYsRUFBVStNLE9BQVYsQ0FBa0IsYUFBbEI7QUFFckIsS0FaRDtBQWNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBQyxlQUFhOztBQUVYLFFBQUlDLE9BQU8sSUFBWDs7QUFFQWxNLE1BQUVmLE1BQUYsRUFBVWlCLEVBQVYsQ0FBYSxxQkFBYixFQUFvQyxVQUFTaU0sQ0FBVCxFQUFXO0FBQUNBLFFBQUVDLGNBQUY7QUFBb0IsS0FBcEU7QUFFRDs7QUFFREMsa0JBQWdCOztBQUVkck0sTUFBRWYsTUFBRixFQUFVcU4sR0FBVixDQUFjLHFCQUFkO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0FDLGFBQVc7O0FBRVQsV0FBT3hLLFNBQVN3SyxRQUFoQjtBQUVEOztBQUVEQyxTQUFPOztBQUVMLFdBQU96SyxTQUFTMEssUUFBaEI7QUFDQTtBQUVEOztBQUVEQyxTQUFPOztBQUVMLFdBQU8zSyxTQUFTMkssSUFBaEI7QUFFRDs7QUFFREMsU0FBTzs7QUFFTCxXQUFPNUssU0FBUzZLLFFBQWhCO0FBRUQ7O0FBRURSLGlCQUFlRCxDQUFmLEVBQWtCOztBQUVoQkEsUUFBSUEsS0FBS2xOLE9BQU80TixLQUFoQjtBQUNBLFFBQUlWLEVBQUVDLGNBQU4sRUFDSUQsRUFBRUMsY0FBRjtBQUNKRCxNQUFFVyxXQUFGLEdBQWdCLEtBQWhCO0FBRUQ7O0FBRURDLDhCQUE0QlosQ0FBNUIsRUFBK0I7O0FBRTdCLFFBQUlqTCxLQUFLaUwsRUFBRWEsT0FBUCxDQUFKLEVBQXFCO0FBQ2pCWixxQkFBZUQsQ0FBZjtBQUNBLGFBQU8sS0FBUDtBQUNIO0FBRUY7O0FBRURjLGtCQUFnQjs7QUFFZCxRQUFJaE8sT0FBT2lPLGdCQUFYLEVBQTZCO0FBQ3pCak8sYUFBT2lPLGdCQUFQLENBQXdCLGdCQUF4QixFQUEwQyxLQUFLZCxjQUEvQyxFQUErRCxLQUEvRDtBQUNKbk4sV0FBT2tPLE9BQVAsR0FBaUIsS0FBS2YsY0FBdEIsQ0FKYyxDQUl3QjtBQUN0Q25OLFdBQU9tTyxZQUFQLEdBQXNCbk4sU0FBU21OLFlBQVQsR0FBd0IsS0FBS2hCLGNBQW5ELENBTGMsQ0FLcUQ7QUFDbkVuTixXQUFPb08sV0FBUCxHQUFzQixLQUFLakIsY0FBM0IsQ0FOYyxDQU02QjtBQUMzQ25NLGFBQVNxTixTQUFULEdBQXNCLEtBQUtQLDJCQUEzQjtBQUVEOztBQUVEUSxpQkFBZTs7QUFFYixRQUFJdE8sT0FBT3VPLG1CQUFYLEVBQ0l2TyxPQUFPdU8sbUJBQVAsQ0FBMkIsZ0JBQTNCLEVBQTZDLEtBQUtwQixjQUFsRCxFQUFrRSxLQUFsRTtBQUNKbk4sV0FBT21PLFlBQVAsR0FBc0JuTixTQUFTbU4sWUFBVCxHQUF3QixJQUE5QztBQUNBbk8sV0FBT2tPLE9BQVAsR0FBaUIsSUFBakI7QUFDQWxPLFdBQU9vTyxXQUFQLEdBQXFCLElBQXJCO0FBQ0FwTixhQUFTcU4sU0FBVCxHQUFxQixJQUFyQjtBQUVEOztBQXhxQnVCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1IxQjtBQUFBOzs7Ozs7OztBQVFBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsTUFBTUcsS0FBTixDQUFZOztBQUV6QjFPLGdCQUFjOztBQUVaLFNBQUsyTyxNQUFMO0FBRUQ7O0FBRURBLFdBQVM7QUFDUDs7QUFFQTs7O0FBR0EsU0FBSy9GLEtBQUwsR0FBYSxJQUFJLDZEQUFKLEVBQWI7O0FBR0E7OztBQUdBLFNBQUtnRyxXQUFMLEdBQW1CLElBQUksZ0VBQUosRUFBbkI7O0FBR0E7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDRDs7QUFsQ3dCLEM7Ozs7Ozs7O0FDdkIzQjs7O0FBR0ExTyxPQUFPMk8scUJBQVAsR0FBaUMsVUFBU0MsS0FBVCxFQUFnQjtBQUMvQyxTQUFPLFlBQVc7QUFDaEIsV0FBTzVPLE9BQU8yTyxxQkFBUCxJQUFnQzNPLE9BQU82Tyx3QkFBdkMsSUFBbUU3TyxPQUFPOE8sMkJBQTFFLElBQXlHOU8sT0FBTytPLHVCQUFoSCxJQUEySSxVQUFTQyxRQUFULEVBQW1CO0FBQy9KLGFBQU9DLFdBQVdELFFBQVgsRUFBcUIsT0FBTyxFQUE1QixDQUFQO0FBQ0QsS0FGTDtBQUdELEdBSkQ7QUFLRCxDQU4rQixDQU03QixJQU42QixDQUFELEVBQS9CLEM7Ozs7OztBQ0hBOzs7QUFHQWhQLE9BQU9rUCxvQkFBUCxHQUFnQyxVQUFTTixLQUFULEVBQWdCO0FBQzlDLFNBQU8sWUFBVztBQUNoQixXQUFPNU8sT0FBT2tQLG9CQUFQLElBQStCbFAsT0FBT21QLHVCQUF0QyxJQUFpRSxVQUFTQyxFQUFULEVBQWE7QUFDL0UsYUFBT0MsYUFBYUQsRUFBYixDQUFQO0FBQ0QsS0FGTDtBQUdELEdBSkQ7QUFLRCxDQU44QixDQU01QixJQU40QixDQUFELEVBQTlCLEM7Ozs7Ozs7QUNIQTs7Ozs7OztBQU9lLE1BQU0xRyxLQUFOLENBQVk7O0FBRXpCNUksZ0JBQWMsQ0FHYjs7QUFFRjs7Ozs7QUFLQ3dQLFVBQVFoSixHQUFSLEVBQWE7O0FBRVgsV0FBT0EsSUFBSSxLQUFLekMsTUFBTCxDQUFZLENBQVosRUFBZXlDLElBQUlwRCxNQUFKLEdBQWEsQ0FBNUIsQ0FBSixDQUFQO0FBRUQ7O0FBRUY7Ozs7O0FBS0NxTSxVQUFRakosR0FBUixFQUFhOztBQUVYLFFBQUlrSixNQUFNLEVBQVY7QUFDQUEsVUFBTWxKLElBQUltSixLQUFKLEVBQU47QUFDQSxRQUFJbE4sSUFBSStELElBQUlwRCxNQUFaO0FBQ0EsV0FBTVgsQ0FBTixFQUFRO0FBQ04sVUFBSVksSUFBSWEsS0FBS0MsS0FBTCxDQUFXRCxLQUFLSCxNQUFMLEtBQWN0QixDQUF6QixDQUFSO0FBQ0EsVUFBSW1OLElBQUlGLElBQUksRUFBRWpOLENBQU4sQ0FBUjtBQUNBaU4sVUFBSWpOLENBQUosSUFBU2lOLElBQUlyTSxDQUFKLENBQVQ7QUFDQXFNLFVBQUlyTSxDQUFKLElBQVN1TSxDQUFUO0FBQ0Q7QUFDRCxXQUFPRixHQUFQO0FBRUQ7O0FBcEN3QixDOzs7Ozs7Ozs7QUNQM0I7Ozs7Ozs7O0FBUUEsTUFBTUcsU0FBUyxtQkFBQS9QLENBQVEsRUFBUixDQUFmOztBQUVBOztBQUVlLE1BQU04TyxXQUFOLENBQWtCOztBQUUvQjVPLGdCQUFjOztBQUVaLFNBQUs4UCxFQUFMLEdBQVUsSUFBSUQsTUFBSixFQUFWO0FBRUQ7O0FBRUQ7Ozs7QUFJQUUsU0FBTztBQUNMLFFBQUlDLFVBQVUsS0FBS0YsRUFBTCxDQUFRRyxVQUFSLEdBQXFCQyxJQUFuQztBQUNBLFdBQU9GLFlBQVksSUFBWixHQUFtQixJQUFuQixHQUEwQixLQUFqQztBQUNEOztBQUVEOzs7O0FBSUFHLGNBQVk7QUFDVixRQUFJSCxVQUFVLEtBQUtGLEVBQUwsQ0FBUUcsVUFBUixHQUFxQkMsSUFBbkM7QUFDQSxXQUFPRixZQUFZLFNBQVosR0FBd0IsSUFBeEIsR0FBK0IsS0FBdEM7QUFDRDs7QUFFRDs7OztBQUlBSSxhQUFXO0FBQ1QsUUFBSUosVUFBVSxLQUFLRixFQUFMLENBQVFHLFVBQVIsR0FBcUJDLElBQW5DO0FBQ0EsV0FBT0YsWUFBWSxRQUFaLEdBQXVCLElBQXZCLEdBQThCLEtBQXJDO0FBQ0Q7O0FBRUQ7Ozs7QUFJQUssYUFBVztBQUNULFFBQUlMLFVBQVUsS0FBS0YsRUFBTCxDQUFRRyxVQUFSLEdBQXFCQyxJQUFuQztBQUNBLFdBQU9GLFlBQVksUUFBWixHQUF1QixJQUF2QixHQUE4QixLQUFyQztBQUNEOztBQUVEOzs7O0FBSUFNLGFBQVc7QUFDVCxRQUFJQyxTQUFTLEtBQUtULEVBQUwsQ0FBUVUsU0FBUixHQUFvQkMsSUFBakM7QUFDQSxXQUFPRixXQUFXLFFBQVgsR0FBc0IsSUFBdEIsR0FBNkIsSUFBcEM7QUFDRDs7QUFFRDs7OztBQUlBRyxhQUFXO0FBQ1QsUUFBSUgsU0FBUyxLQUFLVCxFQUFMLENBQVFVLFNBQVIsR0FBb0JDLElBQWpDO0FBQ0EsV0FBT0YsV0FBVyxRQUFYLEdBQXNCLElBQXRCLEdBQTZCLElBQXBDO0FBQ0Q7O0FBRUQ7Ozs7QUFJQUksT0FBSztBQUNILFdBQU8sS0FBS2IsRUFBTCxDQUFRYyxLQUFSLEdBQWdCVixJQUF2QjtBQUNEOztBQUVEOzs7O0FBSUFXLGdCQUFjO0FBQ1osUUFBSUEsY0FBYyxLQUFLZixFQUFMLENBQVFVLFNBQVIsR0FBb0JNLE1BQXRDO0FBQ0EsV0FBT0QsV0FBUDtBQUNEOztBQUVEOzs7QUFHQUUsaUJBQWU7QUFDYixXQUFPLEtBQUtqQixFQUFMLENBQVFHLFVBQVIsR0FBcUJDLElBQTVCO0FBQ0Q7O0FBRUQ7OztBQUdBYyxRQUFNO0FBQ0osV0FBTyxLQUFLbEIsRUFBTCxDQUFRbUIsS0FBUixFQUFQO0FBQ0Q7O0FBM0Y4QixDOzs7Ozs7OztBQ1pqQzs7Ozs7OztHQU9HLENBQUMsVUFBUzdELENBQVQsRUFBV3dDLENBQVgsRUFBYTtBQUFDO0FBQWEsTUFBSXpLLElBQUUsUUFBTjtBQUFBLE1BQWVxRCxJQUFFLEVBQWpCO0FBQUEsTUFBb0IvRixJQUFFLEdBQXRCO0FBQUEsTUFBMEIwSCxJQUFFLFVBQTVCO0FBQUEsTUFBdUMrRyxJQUFFLFdBQXpDO0FBQUEsTUFBcUR0USxJQUFFLFFBQXZEO0FBQUEsTUFBZ0U4RixJQUFFLFFBQWxFO0FBQUEsTUFBMkU3RixJQUFFLE9BQTdFO0FBQUEsTUFBcUZzSCxJQUFFLE9BQXZGO0FBQUEsTUFBK0ZnSixJQUFFLE1BQWpHO0FBQUEsTUFBd0dyRSxJQUFFLE1BQTFHO0FBQUEsTUFBaUg3SCxJQUFFLFFBQW5IO0FBQUEsTUFBNEhtTSxJQUFFLFNBQTlIO0FBQUEsTUFBd0lDLElBQUUsY0FBMUk7QUFBQSxNQUF5Sm5ILElBQUUsU0FBM0o7QUFBQSxNQUFxS3pCLElBQUUsUUFBdks7QUFBQSxNQUFnTG5DLElBQUUsUUFBbEw7QUFBQSxNQUEyTEssSUFBRSxTQUE3TDtBQUFBLE1BQXVNaUcsSUFBRSxVQUF6TTtBQUFBLE1BQW9OMEUsSUFBRSxVQUF0TjtBQUFBLE1BQWlPQyxJQUFFLEVBQUNDLFFBQU8sVUFBU3BFLENBQVQsRUFBV3dDLENBQVgsRUFBYTtBQUFDLFVBQUl6SyxJQUFFLEVBQU4sQ0FBUyxLQUFJLElBQUlxRCxDQUFSLElBQWE0RSxDQUFiLEVBQWV3QyxFQUFFcEgsQ0FBRixLQUFNb0gsRUFBRXBILENBQUYsRUFBS3BGLE1BQUwsR0FBWSxDQUFaLEtBQWdCLENBQXRCLEdBQXdCK0IsRUFBRXFELENBQUYsSUFBS29ILEVBQUVwSCxDQUFGLEVBQUtpSixNQUFMLENBQVlyRSxFQUFFNUUsQ0FBRixDQUFaLENBQTdCLEdBQStDckQsRUFBRXFELENBQUYsSUFBSzRFLEVBQUU1RSxDQUFGLENBQXBELENBQXlELE9BQU9yRCxDQUFQO0FBQVMsS0FBaEgsRUFBaUh1TSxLQUFJLFVBQVN0RSxDQUFULEVBQVd3QyxDQUFYLEVBQWE7QUFBQyxhQUFPLE9BQU94QyxDQUFQLElBQVUsUUFBVixHQUFtQndDLEVBQUUrQixXQUFGLEdBQWdCck0sT0FBaEIsQ0FBd0I4SCxFQUFFdUUsV0FBRixFQUF4QixNQUEyQyxDQUFDLENBQS9ELEdBQWlFLENBQUMsQ0FBekU7QUFBMkUsS0FBOU0sRUFBK01DLFVBQVMsVUFBU3hFLENBQVQsRUFBVztBQUFDLGFBQU9BLEVBQUV1RSxXQUFGLEVBQVA7QUFBdUIsS0FBM1AsRUFBNFBFLE9BQU0sVUFBU3pFLENBQVQsRUFBVztBQUFDLGFBQU8sT0FBT0EsQ0FBUCxLQUFXMUcsQ0FBWCxHQUFhMEcsRUFBRWxLLE9BQUYsQ0FBVSxVQUFWLEVBQXFCLEVBQXJCLEVBQXlCQyxLQUF6QixDQUErQixHQUEvQixFQUFvQyxDQUFwQyxDQUFiLEdBQW9EeU0sQ0FBM0Q7QUFBNkQsS0FBM1UsRUFBNFVrQyxNQUFLLFVBQVMxRSxDQUFULEVBQVc7QUFBQyxhQUFPQSxFQUFFbEssT0FBRixDQUFVLG9DQUFWLEVBQStDLEVBQS9DLENBQVA7QUFBMEQsS0FBdlosRUFBbk87QUFBQSxNQUE0bkJtRCxJQUFFLEVBQUMwTCxLQUFJLFlBQVU7QUFBQyxVQUFJM0UsQ0FBSjtBQUFBLFVBQU1qSSxJQUFFLENBQVI7QUFBQSxVQUFVcUQsQ0FBVjtBQUFBLFVBQVkvRixDQUFaO0FBQUEsVUFBY2lFLENBQWQ7QUFBQSxVQUFnQjdGLENBQWhCO0FBQUEsVUFBa0JzSCxDQUFsQjtBQUFBLFVBQW9CZ0osQ0FBcEI7QUFBQSxVQUFzQnJFLElBQUVrRixTQUF4QixDQUFrQyxPQUFNN00sSUFBRTJILEVBQUUxSixNQUFKLElBQVksQ0FBQytFLENBQW5CLEVBQXFCO0FBQUMsWUFBSWxELElBQUU2SCxFQUFFM0gsQ0FBRixDQUFOO0FBQUEsWUFBV2lNLElBQUV0RSxFQUFFM0gsSUFBRSxDQUFKLENBQWIsQ0FBb0IsSUFBRyxPQUFPaUksQ0FBUCxLQUFXOEQsQ0FBZCxFQUFnQjtBQUFDOUQsY0FBRSxFQUFGLENBQUssS0FBSTFHLENBQUosSUFBUzBLLENBQVQsRUFBV0EsRUFBRWEsY0FBRixDQUFpQnZMLENBQWpCLE1BQXNCN0YsSUFBRXVRLEVBQUUxSyxDQUFGLENBQUYsRUFBTyxPQUFPN0YsQ0FBUCxLQUFXRCxDQUFYLEdBQWF3TSxFQUFFdk0sRUFBRSxDQUFGLENBQUYsSUFBUStPLENBQXJCLEdBQXVCeEMsRUFBRXZNLENBQUYsSUFBSytPLENBQXpEO0FBQTRELGFBQUVuTixJQUFFLENBQUosQ0FBTSxPQUFNK0YsSUFBRXZELEVBQUU3QixNQUFKLElBQVksQ0FBQytFLENBQW5CLEVBQXFCO0FBQUNBLGNBQUVsRCxFQUFFdUQsR0FBRixFQUFPMEosSUFBUCxDQUFZLEtBQUtqQixLQUFMLEVBQVosQ0FBRixDQUE0QixJQUFHLENBQUMsQ0FBQzlJLENBQUwsRUFBTyxLQUFJekIsSUFBRSxDQUFOLEVBQVFBLElBQUUwSyxFQUFFaE8sTUFBWixFQUFtQnNELEdBQW5CLEVBQXVCeUssSUFBRWhKLEVBQUUsRUFBRTFGLENBQUosQ0FBRixFQUFTNUIsSUFBRXVRLEVBQUUxSyxDQUFGLENBQVgsRUFBZ0IsT0FBTzdGLENBQVAsS0FBV0QsQ0FBWCxJQUFjQyxFQUFFdUMsTUFBRixHQUFTLENBQXZCLEdBQXlCdkMsRUFBRXVDLE1BQUYsSUFBVSxDQUFWLEdBQVksT0FBT3ZDLEVBQUUsQ0FBRixDQUFQLElBQWFzSixDQUFiLEdBQWVpRCxFQUFFdk0sRUFBRSxDQUFGLENBQUYsSUFBUUEsRUFBRSxDQUFGLEVBQUt3TCxJQUFMLENBQVUsSUFBVixFQUFlOEUsQ0FBZixDQUF2QixHQUF5Qy9ELEVBQUV2TSxFQUFFLENBQUYsQ0FBRixJQUFRQSxFQUFFLENBQUYsQ0FBN0QsR0FBa0VBLEVBQUV1QyxNQUFGLElBQVUsQ0FBVixHQUFZLE9BQU92QyxFQUFFLENBQUYsQ0FBUCxLQUFjc0osQ0FBZCxLQUFrQixDQUFDdEosRUFBRSxDQUFGLEVBQUtxUixJQUFOLElBQVksQ0FBQ3JSLEVBQUUsQ0FBRixFQUFLc1IsSUFBcEMsSUFBMEMvRSxFQUFFdk0sRUFBRSxDQUFGLENBQUYsSUFBUXNRLElBQUV0USxFQUFFLENBQUYsRUFBS3dMLElBQUwsQ0FBVSxJQUFWLEVBQWU4RSxDQUFmLEVBQWlCdFEsRUFBRSxDQUFGLENBQWpCLENBQUYsR0FBeUIrTyxDQUEzRSxHQUE2RXhDLEVBQUV2TSxFQUFFLENBQUYsQ0FBRixJQUFRc1EsSUFBRUEsRUFBRWpPLE9BQUYsQ0FBVXJDLEVBQUUsQ0FBRixDQUFWLEVBQWVBLEVBQUUsQ0FBRixDQUFmLENBQUYsR0FBdUIrTyxDQUF4SCxHQUEwSC9PLEVBQUV1QyxNQUFGLElBQVUsQ0FBVixLQUFjZ0ssRUFBRXZNLEVBQUUsQ0FBRixDQUFGLElBQVFzUSxJQUFFdFEsRUFBRSxDQUFGLEVBQUt3TCxJQUFMLENBQVUsSUFBVixFQUFlOEUsRUFBRWpPLE9BQUYsQ0FBVXJDLEVBQUUsQ0FBRixDQUFWLEVBQWVBLEVBQUUsQ0FBRixDQUFmLENBQWYsQ0FBRixHQUF1QytPLENBQTdELENBQXJOLEdBQXFSeEMsRUFBRXZNLENBQUYsSUFBS3NRLElBQUVBLENBQUYsR0FBSXZCLENBQTlTO0FBQWdULGNBQUcsQ0FBSDtBQUFLLGNBQU94QyxDQUFQO0FBQVMsS0FBN2tCLEVBQThrQjFFLEtBQUksVUFBUzBFLENBQVQsRUFBV2pJLENBQVgsRUFBYTtBQUFDLFdBQUksSUFBSXFELENBQVIsSUFBYXJELENBQWIsRUFBZSxJQUFHLE9BQU9BLEVBQUVxRCxDQUFGLENBQVAsS0FBYzVILENBQWQsSUFBaUJ1RSxFQUFFcUQsQ0FBRixFQUFLcEYsTUFBTCxHQUFZLENBQWhDLEVBQWtDO0FBQUMsYUFBSSxJQUFJK0csSUFBRSxDQUFWLEVBQVlBLElBQUVoRixFQUFFcUQsQ0FBRixFQUFLcEYsTUFBbkIsRUFBMEIrRyxHQUExQixFQUE4QixJQUFHb0gsRUFBRUcsR0FBRixDQUFNdk0sRUFBRXFELENBQUYsRUFBSzJCLENBQUwsQ0FBTixFQUFjaUQsQ0FBZCxDQUFILEVBQW9CLE9BQU81RSxNQUFJL0YsQ0FBSixHQUFNbU4sQ0FBTixHQUFRcEgsQ0FBZjtBQUFpQixPQUF0RyxNQUEyRyxJQUFHK0ksRUFBRUcsR0FBRixDQUFNdk0sRUFBRXFELENBQUYsQ0FBTixFQUFXNEUsQ0FBWCxDQUFILEVBQWlCLE9BQU81RSxNQUFJL0YsQ0FBSixHQUFNbU4sQ0FBTixHQUFRcEgsQ0FBZixDQUFpQixPQUFPNEUsQ0FBUDtBQUFTLEtBQXJ3QixFQUE5bkI7QUFBQSxNQUFxNENnRixJQUFFLEVBQUNwQyxTQUFRLEVBQUNxQyxXQUFVLEVBQUNDLFNBQVEsRUFBQyxPQUFNLElBQVAsRUFBWSxLQUFJLElBQWhCLEVBQXFCLEtBQUksSUFBekIsRUFBOEIsT0FBTSxNQUFwQyxFQUEyQyxTQUFRLE1BQW5ELEVBQTBELFNBQVEsTUFBbEUsRUFBeUUsU0FBUSxNQUFqRixFQUF3RixLQUFJLEdBQTVGLEVBQVQsRUFBWCxFQUFULEVBQWdJL0IsUUFBTyxFQUFDZ0MsUUFBTyxFQUFDQyxPQUFNLEVBQUMsY0FBYSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQWQsRUFBUCxFQUFSLEVBQTJDQyxRQUFPLEVBQUNELE9BQU0sRUFBQyxnQkFBZSxRQUFoQixFQUFQLEVBQWlDMUIsUUFBTyxFQUFDNEIsS0FBSSxLQUFMLEVBQVdDLFFBQU8sUUFBbEIsRUFBeEMsRUFBbEQsRUFBdkksRUFBK1BoQyxJQUFHLEVBQUNpQyxTQUFRLEVBQUNOLFNBQVEsRUFBQ08sSUFBRyxNQUFKLEVBQVcsV0FBVSxRQUFyQixFQUE4QixVQUFTLE9BQXZDLEVBQStDLEtBQUksUUFBbkQsRUFBNERDLElBQUcsQ0FBQyxRQUFELEVBQVUsUUFBVixDQUEvRCxFQUFtRkMsT0FBTSxRQUF6RixFQUFrRyxHQUFFLFFBQXBHLEVBQTZHLEdBQUUsUUFBL0csRUFBd0gsS0FBSSxRQUE1SCxFQUFxSSxJQUFHLENBQUMsUUFBRCxFQUFVLFNBQVYsQ0FBeEksRUFBNkpDLElBQUcsS0FBaEssRUFBVCxFQUFULEVBQWxRLEVBQXY0QztBQUFBLE1BQXEwREMsSUFBRSxFQUFDakQsU0FBUSxDQUFDLENBQUMsNEJBQUQsRUFBOEIsNkNBQTlCLEVBQTRFLDhCQUE1RSxFQUEyRywwQkFBM0csQ0FBRCxFQUF3SSxDQUFDbUIsQ0FBRCxFQUFHQyxDQUFILENBQXhJLEVBQThJLENBQUMsMEJBQUQsQ0FBOUksRUFBMkssQ0FBQyxDQUFDRCxDQUFELEVBQUcsWUFBSCxDQUFELEVBQWtCQyxDQUFsQixDQUEzSyxFQUFnTSxDQUFDLHFCQUFELENBQWhNLEVBQXdOLENBQUMsQ0FBQ0QsQ0FBRCxFQUFHLE9BQUgsQ0FBRCxFQUFhQyxDQUFiLENBQXhOLEVBQXdPLENBQUMsc0JBQUQsRUFBd0IsK0RBQXhCLEVBQXdGLDREQUF4RixFQUFxSiwyQkFBckosRUFBaUwsdUJBQWpMLEVBQXlNLG9IQUF6TSxDQUF4TyxFQUF1aUIsQ0FBQ0QsQ0FBRCxFQUFHQyxDQUFILENBQXZpQixFQUE2aUIsQ0FBQywyQ0FBRCxDQUE3aUIsRUFBMmxCLENBQUMsQ0FBQ0QsQ0FBRCxFQUFHLElBQUgsQ0FBRCxFQUFVQyxDQUFWLENBQTNsQixFQUF3bUIsQ0FBQywwQkFBRCxDQUF4bUIsRUFBcW9CLENBQUNELENBQUQsRUFBR0MsQ0FBSCxDQUFyb0IsRUFBMm9CLENBQUMseUJBQUQsQ0FBM29CLEVBQXVxQixDQUFDLENBQUNELENBQUQsRUFBRyxRQUFILENBQUQsRUFBY0MsQ0FBZCxDQUF2cUIsRUFBd3JCLENBQUMsNkJBQUQsQ0FBeHJCLEVBQXd0QixDQUFDLENBQUNELENBQUQsRUFBRyxJQUFILEVBQVEsR0FBUixDQUFELEVBQWNDLENBQWQsQ0FBeHRCLEVBQXl1QixDQUFDLDhCQUFELENBQXp1QixFQUEwd0IsQ0FBQyxDQUFDRCxDQUFELEVBQUcsUUFBSCxDQUFELEVBQWNDLENBQWQsQ0FBMXdCLEVBQTJ4QixDQUFDLGlDQUFELENBQTN4QixFQUErekIsQ0FBQ0EsQ0FBRCxFQUFHLENBQUNELENBQUQsRUFBRyxjQUFILENBQUgsQ0FBL3pCLEVBQXMxQixDQUFDLDhCQUFELENBQXQxQixFQUF1M0IsQ0FBQyxDQUFDQSxDQUFELEVBQUcsTUFBSCxFQUFVLFlBQVYsQ0FBRCxFQUF5QkMsQ0FBekIsQ0FBdjNCLEVBQW01QixDQUFDLHFDQUFELEVBQXVDLDREQUF2QyxDQUFuNUIsRUFBdy9CLENBQUNBLENBQUQsRUFBRyxDQUFDRCxDQUFELEVBQUcsaUJBQUgsQ0FBSCxDQUF4L0IsRUFBa2hDLENBQUMsOERBQUQsRUFBZ0UsOEJBQWhFLENBQWxoQyxFQUFrbkMsQ0FBQ0EsQ0FBRCxFQUFHQyxDQUFILENBQWxuQyxFQUF3bkMsQ0FBQyxpQ0FBRCxFQUFtQyxxQ0FBbkMsRUFBeUUsK0JBQXpFLENBQXhuQyxFQUFrdUMsQ0FBQyxDQUFDRCxDQUFELEVBQUcsV0FBSCxDQUFELEVBQWlCQyxDQUFqQixDQUFsdUMsRUFBc3ZDLENBQUMsc0JBQUQsQ0FBdHZDLEVBQSt3QyxDQUFDLENBQUNELENBQUQsRUFBRyxTQUFILENBQUQsRUFBZUMsQ0FBZixDQUEvd0MsRUFBaXlDLENBQUMsdUNBQUQsQ0FBanlDLEVBQTIwQyxDQUFDLENBQUNELENBQUQsRUFBRyxRQUFILENBQUQsRUFBY0MsQ0FBZCxDQUEzMEMsRUFBNDFDLENBQUMsb0JBQUQsQ0FBNTFDLEVBQW0zQyxDQUFDQSxDQUFELEVBQUcsQ0FBQ0QsQ0FBRCxFQUFHLFVBQUgsQ0FBSCxDQUFuM0MsRUFBczRDLENBQUMsb0JBQUQsQ0FBdDRDLEVBQTY1QyxDQUFDQyxDQUFELEVBQUcsQ0FBQ0QsQ0FBRCxFQUFHLFNBQUgsQ0FBSCxDQUE3NUMsRUFBKzZDLENBQUMsNkNBQUQsQ0FBLzZDLEVBQSs5QyxDQUFDQyxDQUFELEVBQUcsQ0FBQ0QsQ0FBRCxFQUFHLGVBQUgsQ0FBSCxDQUEvOUMsRUFBdS9DLENBQUMsZ0RBQUQsQ0FBdi9DLEVBQTBpRCxDQUFDQyxDQUFELEVBQUdELENBQUgsQ0FBMWlELEVBQWdqRCxDQUFDLCtDQUFELENBQWhqRCxFQUFrbUQsQ0FBQ0EsQ0FBRCxFQUFHLENBQUNDLENBQUQsRUFBRy9LLEVBQUVxQyxHQUFMLEVBQVMwSixFQUFFcEMsT0FBRixDQUFVcUMsU0FBVixDQUFvQkMsT0FBN0IsQ0FBSCxDQUFsbUQsRUFBNG9ELENBQUMseUJBQUQsRUFBMkIsNEJBQTNCLENBQTVvRCxFQUFxc0QsQ0FBQ25CLENBQUQsRUFBR0MsQ0FBSCxDQUFyc0QsRUFBMnNELENBQUMsbUNBQUQsQ0FBM3NELEVBQWl2RCxDQUFDLENBQUNELENBQUQsRUFBRyxVQUFILENBQUQsRUFBZ0JDLENBQWhCLENBQWp2RCxFQUFvd0QsQ0FBQyxhQUFELEVBQWUsK0ZBQWYsRUFBK0csMEVBQS9HLEVBQTBMLHlDQUExTCxFQUFvTyw2RUFBcE8sRUFBa1QsdUJBQWxULEVBQTBVLDJCQUExVSxFQUFzVyxnQ0FBdFcsRUFBdVksMEJBQXZZLENBQXB3RCxFQUF1cUUsQ0FBQ0QsQ0FBRCxFQUFHQyxDQUFILENBQXZxRSxDQUFULEVBQXVyRThCLEtBQUksQ0FBQyxDQUFDLCtDQUFELENBQUQsRUFBbUQsQ0FBQyxDQUFDN0IsQ0FBRCxFQUFHLE9BQUgsQ0FBRCxDQUFuRCxFQUFpRSxDQUFDLGNBQUQsQ0FBakUsRUFBa0YsQ0FBQyxDQUFDQSxDQUFELEVBQUdFLEVBQUVLLFFBQUwsQ0FBRCxDQUFsRixFQUFtRyxDQUFDLHdCQUFELENBQW5HLEVBQThILENBQUMsQ0FBQ1AsQ0FBRCxFQUFHLE1BQUgsQ0FBRCxDQUE5SCxFQUEySSxDQUFDLDhCQUFELENBQTNJLEVBQTRLLENBQUMsQ0FBQ0EsQ0FBRCxFQUFHLEtBQUgsQ0FBRCxDQUE1SyxFQUF3TCxDQUFDLHlDQUFELENBQXhMLEVBQW9PLENBQUMsQ0FBQ0EsQ0FBRCxFQUFHLE1BQUgsRUFBVSxFQUFWLEVBQWFFLEVBQUVLLFFBQWYsQ0FBRCxDQUFwTyxFQUErUCxDQUFDLGdCQUFELENBQS9QLEVBQWtSLENBQUMsQ0FBQ1AsQ0FBRCxFQUFHLE9BQUgsQ0FBRCxDQUFsUixFQUFnUyxDQUFDLDZHQUFELENBQWhTLEVBQWdaLENBQUMsQ0FBQ0EsQ0FBRCxFQUFHRSxFQUFFSyxRQUFMLENBQUQsQ0FBaFosQ0FBM3JFLEVBQTZsRnJCLFFBQU8sQ0FBQyxDQUFDLDJDQUFELENBQUQsRUFBK0MsQ0FBQ3BJLENBQUQsRUFBR2xELENBQUgsRUFBSyxDQUFDNkgsQ0FBRCxFQUFHeEcsQ0FBSCxDQUFMLENBQS9DLEVBQTJELENBQUMsa0NBQUQsQ0FBM0QsRUFBZ0csQ0FBQzZCLENBQUQsRUFBRyxDQUFDbEQsQ0FBRCxFQUFHLE9BQUgsQ0FBSCxFQUFlLENBQUM2SCxDQUFELEVBQUd4RyxDQUFILENBQWYsQ0FBaEcsRUFBc0gsQ0FBQyxtQkFBRCxDQUF0SCxFQUE0SSxDQUFDLENBQUM2QixDQUFELEVBQUcsVUFBSCxDQUFELEVBQWdCLENBQUNsRCxDQUFELEVBQUcsT0FBSCxDQUFoQixDQUE1SSxFQUF5SyxDQUFDLHdCQUFELEVBQTBCLG1CQUExQixFQUE4QyxpQkFBOUMsRUFBZ0Usc0JBQWhFLEVBQXVGLDhCQUF2RixFQUFzSCxrQ0FBdEgsQ0FBekssRUFBbVUsQ0FBQ0EsQ0FBRCxFQUFHa0QsQ0FBSCxFQUFLLENBQUMyRSxDQUFELEVBQUd4RyxDQUFILENBQUwsQ0FBblUsRUFBK1UsQ0FBQyxxQ0FBRCxDQUEvVSxFQUF1WCxDQUFDNkIsQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsUUFBSCxDQUFILEVBQWdCLENBQUM2SCxDQUFELEVBQUd4RyxDQUFILENBQWhCLENBQXZYLEVBQThZLENBQUMsa0RBQUQsQ0FBOVksRUFBbWMsQ0FBQyxDQUFDNkIsQ0FBRCxFQUFHOUIsRUFBRXFDLEdBQUwsRUFBUzBKLEVBQUU3QixNQUFGLENBQVNnQyxNQUFULENBQWdCQyxLQUF6QixDQUFELEVBQWlDLENBQUN2TixDQUFELEVBQUcsUUFBSCxDQUFqQyxFQUE4QyxDQUFDNkgsQ0FBRCxFQUFHckUsQ0FBSCxDQUE5QyxDQUFuYyxFQUF3ZixDQUFDLGlDQUFELENBQXhmLEVBQTRoQixDQUFDTixDQUFELEVBQUdsRCxDQUFILEVBQUssQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBTCxDQUE1aEIsRUFBd2lCLENBQUMsd0JBQUQsQ0FBeGlCLEVBQW1rQixDQUFDTixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxPQUFILENBQUgsRUFBZSxDQUFDNkgsQ0FBRCxFQUFHckUsQ0FBSCxDQUFmLENBQW5rQixFQUF5bEIsQ0FBQywwQkFBRCxFQUE0QiwwR0FBNUIsRUFBdUksb0JBQXZJLEVBQTRKLGdCQUE1SixDQUF6bEIsRUFBdXdCLENBQUN4RCxDQUFELEVBQUdrRCxDQUFILEVBQUssQ0FBQzJFLENBQUQsRUFBR3JFLENBQUgsQ0FBTCxDQUF2d0IsRUFBbXhCLENBQUMsaUJBQUQsQ0FBbnhCLEVBQXV5QixDQUFDTixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxZQUFILENBQUgsRUFBb0IsQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBcEIsQ0FBdnlCLEVBQWswQixDQUFDLDJFQUFELENBQWwwQixFQUFnNUIsQ0FBQ04sQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsTUFBSCxDQUFILEVBQWMsQ0FBQzZILENBQUQsRUFBR3hHLENBQUgsQ0FBZCxDQUFoNUIsRUFBcTZCLENBQUMsa0NBQUQsRUFBb0MsNEJBQXBDLENBQXI2QixFQUF1K0IsQ0FBQyxDQUFDckIsQ0FBRCxFQUFHLE1BQUgsQ0FBRCxFQUFZLENBQUNrRCxDQUFELEVBQUcsZUFBSCxDQUFaLEVBQWdDLENBQUMyRSxDQUFELEVBQUd4RyxDQUFILENBQWhDLENBQXYrQixFQUE4Z0MsQ0FBQyxzREFBRCxDQUE5Z0MsRUFBdWtDLENBQUMsQ0FBQ3JCLENBQUQsRUFBRyxNQUFILENBQUQsRUFBWSxDQUFDa0QsQ0FBRCxFQUFHLGNBQUgsQ0FBWixFQUErQixDQUFDMkUsQ0FBRCxFQUFHckUsQ0FBSCxDQUEvQixDQUF2a0MsRUFBNm1DLENBQUMsYUFBRCxFQUFlLDBCQUFmLENBQTdtQyxFQUF3cEMsQ0FBQ3hELENBQUQsRUFBR2tELENBQUgsRUFBSyxDQUFDMkUsQ0FBRCxFQUFHNUMsQ0FBSCxDQUFMLENBQXhwQyxFQUFvcUMsQ0FBQyw4QkFBRCxDQUFwcUMsRUFBcXNDLENBQUMvQixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxRQUFILENBQUgsRUFBZ0IsQ0FBQzZILENBQUQsRUFBRzVDLENBQUgsQ0FBaEIsQ0FBcnNDLEVBQTR0QyxDQUFDLGlDQUFELENBQTV0QyxFQUFnd0MsQ0FBQy9CLENBQUQsRUFBRyxDQUFDbEQsQ0FBRCxFQUFHLE1BQUgsQ0FBSCxFQUFjLENBQUM2SCxDQUFELEVBQUc1QyxDQUFILENBQWQsQ0FBaHdDLEVBQXF4QyxDQUFDLGtCQUFELENBQXJ4QyxFQUEweUMsQ0FBQyxDQUFDakYsQ0FBRCxFQUFHb0IsRUFBRXFDLEdBQUwsRUFBUzBKLEVBQUU3QixNQUFGLENBQVNrQyxNQUFULENBQWdCM0IsTUFBekIsQ0FBRCxFQUFrQyxDQUFDM0ksQ0FBRCxFQUFHOUIsRUFBRXFDLEdBQUwsRUFBUzBKLEVBQUU3QixNQUFGLENBQVNrQyxNQUFULENBQWdCRCxLQUF6QixDQUFsQyxFQUFrRSxDQUFDMUYsQ0FBRCxFQUFHckUsQ0FBSCxDQUFsRSxDQUExeUMsRUFBbTNDLENBQUMsMkNBQUQsQ0FBbjNDLEVBQWk2QyxDQUFDeEQsQ0FBRCxFQUFHa0QsQ0FBSCxFQUFLLENBQUMyRSxDQUFELEVBQUd4RyxDQUFILENBQUwsQ0FBajZDLEVBQTY2QyxDQUFDLG9DQUFELEVBQXNDLGVBQXRDLEVBQXNELGtGQUF0RCxDQUE3NkMsRUFBdWpELENBQUNyQixDQUFELEVBQUcsQ0FBQ2tELENBQUQsRUFBRyxJQUFILEVBQVEsR0FBUixDQUFILEVBQWdCLENBQUMyRSxDQUFELEVBQUdyRSxDQUFILENBQWhCLENBQXZqRCxFQUE4a0QsQ0FBQyxhQUFELENBQTlrRCxFQUE4bEQsQ0FBQ04sQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsS0FBSCxDQUFILEVBQWEsQ0FBQzZILENBQUQsRUFBR3hHLENBQUgsQ0FBYixDQUE5bEQsRUFBa25ELENBQUMsY0FBRCxDQUFsbkQsRUFBbW9ELENBQUM2QixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxRQUFILENBQUgsRUFBZ0IsQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBaEIsQ0FBbm9ELEVBQTBwRCxDQUFDLCtCQUFELENBQTFwRCxFQUE0ckQsQ0FBQ3hELENBQUQsRUFBR2tELENBQUgsRUFBSyxDQUFDMkUsQ0FBRCxFQUFHckUsQ0FBSCxDQUFMLENBQTVyRCxFQUF3c0QsQ0FBQyxpQ0FBRCxDQUF4c0QsRUFBNHVELENBQUNOLENBQUQsRUFBRyxDQUFDbEQsQ0FBRCxFQUFHLFdBQUgsQ0FBSCxFQUFtQixDQUFDNkgsQ0FBRCxFQUFHNUMsQ0FBSCxDQUFuQixDQUE1dUQsRUFBc3dELENBQUMsb0JBQUQsQ0FBdHdELEVBQTZ4RCxDQUFDLENBQUMvQixDQUFELEVBQUcsS0FBSCxFQUFTLEdBQVQsQ0FBRCxFQUFlLENBQUNsRCxDQUFELEVBQUcsV0FBSCxDQUFmLEVBQStCLENBQUM2SCxDQUFELEVBQUdyRSxDQUFILENBQS9CLENBQTd4RCxFQUFtMEQsQ0FBQyxpRkFBRCxFQUFtRixrQkFBbkYsRUFBc0csc0JBQXRHLEVBQTZILGFBQTdILENBQW4wRCxFQUErOEQsQ0FBQ04sQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsVUFBSCxDQUFILEVBQWtCLENBQUM2SCxDQUFELEVBQUdyRSxDQUFILENBQWxCLENBQS84RCxFQUF3K0QsQ0FBQyw4Q0FBRCxDQUF4K0QsRUFBeWhFLENBQUNOLENBQUQsRUFBRyxDQUFDbEQsQ0FBRCxFQUFHLFVBQUgsQ0FBSCxFQUFrQixDQUFDNkgsQ0FBRCxFQUFHeEcsQ0FBSCxDQUFsQixDQUF6aEUsRUFBa2pFLENBQUMsd0RBQUQsQ0FBbGpFLEVBQTZtRSxDQUFDLENBQUNyQixDQUFELEVBQUdzTSxFQUFFTyxJQUFMLENBQUQsRUFBWSxDQUFDM0osQ0FBRCxFQUFHb0osRUFBRU8sSUFBTCxDQUFaLEVBQXVCLENBQUNoRixDQUFELEVBQUduRyxDQUFILENBQXZCLENBQTdtRSxFQUEyb0UsQ0FBQyxxQkFBRCxDQUEzb0UsRUFBbXFFLENBQUMsQ0FBQ3dCLENBQUQsRUFBRyxHQUFILEVBQU8sU0FBUCxDQUFELEVBQW1CLENBQUNsRCxDQUFELEVBQUcsU0FBSCxDQUFuQixFQUFpQyxDQUFDNkgsQ0FBRCxFQUFHbkcsQ0FBSCxDQUFqQyxDQUFucUUsRUFBMnNFLENBQUMsc0JBQUQsQ0FBM3NFLEVBQW91RSxDQUFDd0IsQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsT0FBSCxDQUFILEVBQWUsQ0FBQzZILENBQUQsRUFBR25HLENBQUgsQ0FBZixDQUFwdUUsRUFBMHZFLENBQUMsNkVBQUQsRUFBK0UsY0FBL0UsQ0FBMXZFLEVBQXkxRSxDQUFDLENBQUMxQixDQUFELEVBQUcsU0FBSCxDQUFELEVBQWVrRCxDQUFmLEVBQWlCLENBQUMyRSxDQUFELEVBQUd4RyxDQUFILENBQWpCLENBQXoxRSxFQUFpM0UsQ0FBQyxzQkFBRCxDQUFqM0UsRUFBMDRFLENBQUNyQixDQUFELEVBQUcsQ0FBQzZILENBQUQsRUFBR25HLENBQUgsQ0FBSCxFQUFTd0IsQ0FBVCxDQUExNEUsRUFBczVFLENBQUMsb0RBQUQsRUFBc0QsbUNBQXRELEVBQTBGLGlCQUExRixDQUF0NUUsRUFBbWdGLENBQUMsQ0FBQ2xELENBQUQsRUFBRyxTQUFILENBQUQsRUFBZWtELENBQWYsRUFBaUIsQ0FBQzJFLENBQUQsRUFBR3JFLENBQUgsQ0FBakIsQ0FBbmdGLEVBQTJoRixDQUFDLGFBQUQsQ0FBM2hGLEVBQTJpRixDQUFDTixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxTQUFILENBQUgsRUFBaUIsQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBakIsQ0FBM2lGLEVBQW1rRixDQUFDLG1DQUFELEVBQXFDLDBCQUFyQyxDQUFua0YsRUFBb29GLENBQUMsQ0FBQ3hELENBQUQsRUFBRyxPQUFILENBQUQsRUFBYWtELENBQWIsRUFBZSxDQUFDMkUsQ0FBRCxFQUFHckUsQ0FBSCxDQUFmLENBQXBvRixFQUEwcEYsQ0FBQyxtQ0FBRCxDQUExcEYsRUFBZ3NGLENBQUNOLENBQUQsRUFBRyxDQUFDbEQsQ0FBRCxFQUFHLE1BQUgsQ0FBSCxFQUFjLENBQUM2SCxDQUFELEVBQUd4RyxDQUFILENBQWQsQ0FBaHNGLEVBQXF0RixDQUFDLCtDQUFELENBQXJ0RixFQUF1d0YsQ0FBQyxDQUFDckIsQ0FBRCxFQUFHLElBQUgsQ0FBRCxFQUFVa0QsQ0FBVixFQUFZLENBQUMyRSxDQUFELEVBQUd4RyxDQUFILENBQVosQ0FBdndGLEVBQTB4RixDQUFDLG1CQUFELENBQTF4RixFQUFnekYsQ0FBQ3JCLENBQUQsRUFBR2tELENBQUgsRUFBSyxDQUFDMkUsQ0FBRCxFQUFHbkcsQ0FBSCxDQUFMLENBQWh6RixFQUE0ekYsQ0FBQyxnQkFBRCxFQUFrQixxQkFBbEIsQ0FBNXpGLEVBQXEyRixDQUFDd0IsQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsSUFBSCxDQUFILEVBQVksQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBWixDQUFyMkYsRUFBdzNGLENBQUMsa0NBQUQsQ0FBeDNGLEVBQTY1RixDQUFDTixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxRQUFILENBQUgsRUFBZ0IsQ0FBQzZILENBQUQsRUFBR3hHLENBQUgsQ0FBaEIsQ0FBNzVGLEVBQW83RixDQUFDLHFCQUFELENBQXA3RixFQUE0OEYsQ0FBQ3JCLENBQUQsRUFBR2tELENBQUgsRUFBSyxDQUFDMkUsQ0FBRCxFQUFHckUsQ0FBSCxDQUFMLENBQTU4RixFQUF3OUYsQ0FBQywyQkFBRCxDQUF4OUYsRUFBcy9GLENBQUN4RCxDQUFELEVBQUdrRCxDQUFILEVBQUssQ0FBQzJFLENBQUQsRUFBR0YsQ0FBSCxDQUFMLENBQXQvRixFQUFrZ0csQ0FBQywwQkFBRCxDQUFsZ0csRUFBK2hHLENBQUN6RSxDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxRQUFILENBQUgsRUFBZ0IsQ0FBQzZILENBQUQsRUFBR0YsQ0FBSCxDQUFoQixDQUEvaEcsRUFBc2pHLENBQUMsK0JBQUQsRUFBaUMsb0RBQWpDLEVBQXNGLDZFQUF0RixDQUF0akcsRUFBMnRHLENBQUMsQ0FBQ3pFLENBQUQsRUFBRyxJQUFILEVBQVEsR0FBUixDQUFELEVBQWMsQ0FBQ2xELENBQUQsRUFBRyxRQUFILENBQWQsRUFBMkIsQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBM0IsQ0FBM3RHLEVBQTZ2RyxDQUFDLDJCQUFELENBQTd2RyxFQUEyeEcsQ0FBQ04sQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsU0FBSCxDQUFILEVBQWlCLENBQUM2SCxDQUFELEVBQUdyRSxDQUFILENBQWpCLENBQTN4RyxFQUFtekcsQ0FBQyxrQkFBRCxFQUFvQiwrQkFBcEIsQ0FBbnpHLEVBQXcyRyxDQUFDLENBQUNxRSxDQUFELEVBQUd5RSxFQUFFSyxRQUFMLENBQUQsRUFBZ0IzTSxDQUFoQixFQUFrQmtELENBQWxCLENBQXgyRyxDQUFwbUYsRUFBaytMZ0wsUUFBTyxDQUFDLENBQUMsNkJBQUQsQ0FBRCxFQUFpQyxDQUFDL0IsQ0FBRCxFQUFHLENBQUNELENBQUQsRUFBRyxVQUFILENBQUgsQ0FBakMsRUFBb0QsQ0FBQyxzQkFBRCxFQUF3Qiw4REFBeEIsRUFBdUYseUNBQXZGLEVBQWlJLDhCQUFqSSxDQUFwRCxFQUFxTixDQUFDQSxDQUFELEVBQUdDLENBQUgsQ0FBck4sRUFBMk4sQ0FBQyx5QkFBRCxDQUEzTixFQUF1UCxDQUFDQSxDQUFELEVBQUdELENBQUgsQ0FBdlAsQ0FBeitMLEVBQXV1TVIsSUFBRyxDQUFDLENBQUMsbUNBQUQsQ0FBRCxFQUF1QyxDQUFDUSxDQUFELEVBQUdDLENBQUgsQ0FBdkMsRUFBNkMsQ0FBQyw4QkFBRCxFQUFnQyxpREFBaEMsRUFBa0Ysb0RBQWxGLENBQTdDLEVBQXFMLENBQUNELENBQUQsRUFBRyxDQUFDQyxDQUFELEVBQUcvSyxFQUFFcUMsR0FBTCxFQUFTMEosRUFBRXpCLEVBQUYsQ0FBS2lDLE9BQUwsQ0FBYU4sT0FBdEIsQ0FBSCxDQUFyTCxFQUF3TixDQUFDLHNDQUFELENBQXhOLEVBQWlRLENBQUMsQ0FBQ25CLENBQUQsRUFBRyxTQUFILENBQUQsRUFBZSxDQUFDQyxDQUFELEVBQUcvSyxFQUFFcUMsR0FBTCxFQUFTMEosRUFBRXpCLEVBQUYsQ0FBS2lDLE9BQUwsQ0FBYU4sT0FBdEIsQ0FBZixDQUFqUSxFQUFnVCxDQUFDLGNBQUQsQ0FBaFQsRUFBaVUsQ0FBQyxDQUFDbkIsQ0FBRCxFQUFHLFlBQUgsQ0FBRCxFQUFrQkMsQ0FBbEIsQ0FBalUsRUFBc1YsQ0FBQywrQkFBRCxFQUFpQyx5QkFBakMsRUFBMkQsb0ZBQTNELEVBQWdKLHNCQUFoSixDQUF0VixFQUE4ZixDQUFDRCxDQUFELEVBQUdDLENBQUgsQ0FBOWYsRUFBb2dCLENBQUMsbURBQUQsQ0FBcGdCLEVBQTBqQixDQUFDLENBQUNELENBQUQsRUFBRyxTQUFILENBQUQsRUFBZUMsQ0FBZixDQUExakIsRUFBNGtCLENBQUMsZ0JBQUQsQ0FBNWtCLEVBQStsQixDQUFDRCxDQUFELENBQS9sQixFQUFtbUIsQ0FBQyxxQ0FBRCxDQUFubUIsRUFBMm9CLENBQUMsQ0FBQ0EsQ0FBRCxFQUFHLFlBQUgsQ0FBRCxFQUFrQkMsQ0FBbEIsQ0FBM29CLEVBQWdxQixDQUFDLGdEQUFELEVBQWtELHdCQUFsRCxFQUEyRSw0QkFBM0UsRUFBd0cseUpBQXhHLEVBQWtRLDRCQUFsUSxFQUErUixxQkFBL1IsQ0FBaHFCLEVBQXM5QixDQUFDRCxDQUFELEVBQUdDLENBQUgsQ0FBdDlCLEVBQTQ5QixDQUFDLDZCQUFELENBQTU5QixFQUE0L0IsQ0FBQyxDQUFDRCxDQUFELEVBQUcsYUFBSCxDQUFELEVBQW1CQyxDQUFuQixDQUE1L0IsRUFBa2hDLENBQUMseUJBQUQsQ0FBbGhDLEVBQThpQyxDQUFDLENBQUNELENBQUQsRUFBRyxTQUFILENBQUQsRUFBZUMsQ0FBZixDQUE5aUMsRUFBZ2tDLENBQUMsaURBQUQsQ0FBaGtDLEVBQW9uQyxDQUFDRCxDQUFELEVBQUdDLENBQUgsQ0FBcG5DLEVBQTBuQyxDQUFDLGlCQUFELENBQTFuQyxFQUE4b0MsQ0FBQ0QsQ0FBRCxFQUFHQyxDQUFILENBQTlvQyxFQUFvcEMsQ0FBQyxzREFBRCxDQUFwcEMsRUFBNnNDLENBQUMsQ0FBQ0QsQ0FBRCxFQUFHLEtBQUgsQ0FBRCxFQUFXLENBQUNDLENBQUQsRUFBRyxJQUFILEVBQVEsR0FBUixDQUFYLENBQTdzQyxFQUFzdUMsQ0FBQyxnQ0FBRCxFQUFrQyxnQ0FBbEMsQ0FBdHVDLEVBQTB5QyxDQUFDLENBQUNELENBQUQsRUFBRyxRQUFILENBQUQsRUFBYyxDQUFDQyxDQUFELEVBQUcsSUFBSCxFQUFRLEdBQVIsQ0FBZCxDQUExeUMsRUFBczBDLENBQUMsdUNBQUQsRUFBeUMsb0NBQXpDLEVBQThFLDhEQUE5RSxFQUE2SSxzQkFBN0ksQ0FBdDBDLEVBQTIrQyxDQUFDRCxDQUFELEVBQUdDLENBQUgsQ0FBMytDLENBQTF1TSxFQUF2MEQ7QUFBQSxNQUFvaVRnQyxJQUFFLFVBQVN4RCxDQUFULEVBQVd6SyxDQUFYLEVBQWE7QUFBQyxRQUFHLGdCQUFnQmlPLENBQW5CLEVBQXFCO0FBQUMsVUFBSTNRLElBQUVtTixNQUFJeEMsS0FBR0EsRUFBRWlHLFNBQUwsSUFBZ0JqRyxFQUFFaUcsU0FBRixDQUFZQyxTQUE1QixHQUFzQ2xHLEVBQUVpRyxTQUFGLENBQVlDLFNBQWxELEdBQTREOUssQ0FBaEUsQ0FBTjtBQUFBLFVBQXlFMkIsSUFBRWhGLElBQUVvTSxFQUFFQyxNQUFGLENBQVN5QixDQUFULEVBQVc5TixDQUFYLENBQUYsR0FBZ0I4TixDQUEzRixDQUE2RixPQUFPLEtBQUtoRCxVQUFMLEdBQWdCLFlBQVU7QUFBQyxZQUFJN0MsSUFBRS9HLEVBQUUwTCxHQUFGLENBQU13QixLQUFOLENBQVksSUFBWixFQUFpQnBKLEVBQUU2RixPQUFuQixDQUFOLENBQWtDLE9BQU81QyxFQUFFeUUsS0FBRixHQUFRTixFQUFFTSxLQUFGLENBQVF6RSxFQUFFa0YsT0FBVixDQUFSLEVBQTJCbEYsQ0FBbEM7QUFBb0MsT0FBakcsRUFBa0csS0FBS29HLE1BQUwsR0FBWSxZQUFVO0FBQUMsZUFBT25OLEVBQUUwTCxHQUFGLENBQU13QixLQUFOLENBQVksSUFBWixFQUFpQnBKLEVBQUUrSSxHQUFuQixDQUFQO0FBQStCLE9BQXhKLEVBQXlKLEtBQUsxQyxTQUFMLEdBQWUsWUFBVTtBQUFDLGVBQU9uSyxFQUFFMEwsR0FBRixDQUFNd0IsS0FBTixDQUFZLElBQVosRUFBaUJwSixFQUFFb0csTUFBbkIsQ0FBUDtBQUFrQyxPQUFyTixFQUFzTixLQUFLa0QsU0FBTCxHQUFlLFlBQVU7QUFBQyxlQUFPcE4sRUFBRTBMLEdBQUYsQ0FBTXdCLEtBQU4sQ0FBWSxJQUFaLEVBQWlCcEosRUFBRWdKLE1BQW5CLENBQVA7QUFBa0MsT0FBbFIsRUFBbVIsS0FBS3ZDLEtBQUwsR0FBVyxZQUFVO0FBQUMsZUFBT3ZLLEVBQUUwTCxHQUFGLENBQU13QixLQUFOLENBQVksSUFBWixFQUFpQnBKLEVBQUV3RyxFQUFuQixDQUFQO0FBQThCLE9BQXZVLEVBQXdVLEtBQUsrQyxTQUFMLEdBQWUsWUFBVTtBQUFDLGVBQU0sRUFBQzVELElBQUcsS0FBS21CLEtBQUwsRUFBSixFQUFpQmpCLFNBQVEsS0FBS0MsVUFBTCxFQUF6QixFQUEyQ2tELFFBQU8sS0FBS00sU0FBTCxFQUFsRCxFQUFtRTlDLElBQUcsS0FBS0MsS0FBTCxFQUF0RSxFQUFtRkwsUUFBTyxLQUFLQyxTQUFMLEVBQTFGLEVBQTJHMEMsS0FBSSxLQUFLTSxNQUFMLEVBQS9HLEVBQU47QUFBb0ksT0FBdGUsRUFBdWUsS0FBS3ZDLEtBQUwsR0FBVyxZQUFVO0FBQUMsZUFBT3hPLENBQVA7QUFBUyxPQUF0Z0IsRUFBdWdCLEtBQUtrUixLQUFMLEdBQVcsVUFBU3ZHLENBQVQsRUFBVztBQUFDLGVBQU8zSyxJQUFFMkssQ0FBRixFQUFJLElBQVg7QUFBZ0IsT0FBOWlCLEVBQStpQixJQUF0akI7QUFBMmpCLFlBQU8sSUFBSWdHLENBQUosQ0FBTXhELENBQU4sRUFBUXpLLENBQVIsQ0FBRCxDQUFhdU8sU0FBYixFQUFOO0FBQStCLEdBQWp3VSxDQUFrd1VOLEVBQUVRLE9BQUYsR0FBVXpPLENBQVYsRUFBWWlPLEVBQUVTLE9BQUYsR0FBVSxFQUFDQyxNQUFLM0MsQ0FBTixFQUFRNEMsT0FBTWxULENBQWQsRUFBZ0IrUyxTQUFReEMsQ0FBeEIsRUFBdEIsRUFBaURnQyxFQUFFWSxHQUFGLEdBQU0sRUFBQ0MsY0FBYTVDLENBQWQsRUFBdkQsRUFBd0UrQixFQUFFYyxNQUFGLEdBQVMsRUFBQ0MsT0FBTWhNLENBQVAsRUFBU2lNLFFBQU9uUCxDQUFoQixFQUFrQm9QLE1BQUt2SCxDQUF2QixFQUF5QndILFNBQVFwSyxDQUFqQyxFQUFtQ3FLLFFBQU85TCxDQUExQyxFQUE0QytMLFNBQVE3TixDQUFwRCxFQUFzRDhOLFFBQU9uTyxDQUE3RCxFQUErRG9PLFVBQVM5SCxDQUF4RSxFQUEwRStILFVBQVNyRCxDQUFuRixFQUFqRixFQUF1SzhCLEVBQUV3QixNQUFGLEdBQVMsRUFBQ2QsTUFBSzNDLENBQU4sRUFBUXlDLFNBQVF4QyxDQUFoQixFQUFoTCxFQUFtTWdDLEVBQUV5QixFQUFGLEdBQUssRUFBQ2YsTUFBSzNDLENBQU4sRUFBUXlDLFNBQVF4QyxDQUFoQixFQUF4TSxFQUEyTixPQUFPMEQsT0FBUCxLQUFpQjVELENBQWpCLElBQW9CLE9BQU82RCxNQUFQLEtBQWdCN0QsQ0FBaEIsSUFBbUI2RCxPQUFPRCxPQUExQixLQUFvQ0EsVUFBUUMsT0FBT0QsT0FBUCxHQUFlMUIsQ0FBM0QsR0FBOEQwQixRQUFRRSxRQUFSLEdBQWlCNUIsQ0FBbkcsSUFBc0csZUFBZ0JqSixDQUFoQixJQUFtQix1QkFBbkIsR0FBOEIsa0NBQU8sWUFBVTtBQUFDLFdBQU9pSixDQUFQO0FBQVMsR0FBM0I7QUFBQSxvR0FBOUIsR0FBMkRoRyxFQUFFNEgsUUFBRixHQUFXNUIsQ0FBdlksQ0FBeVksSUFBSTdQLElBQUU2SixFQUFFNkgsTUFBRixJQUFVN0gsRUFBRThILEtBQWxCLENBQXdCLElBQUcsT0FBTzNSLENBQVAsS0FBVzJOLENBQWQsRUFBZ0I7QUFBQyxRQUFJaUUsSUFBRSxJQUFJL0IsQ0FBSixFQUFOLENBQVk3UCxFQUFFdU0sRUFBRixHQUFLcUYsRUFBRXpCLFNBQUYsRUFBTCxFQUFtQm5RLEVBQUV1TSxFQUFGLENBQUtzRixHQUFMLEdBQVMsWUFBVTtBQUFDLGFBQU9ELEVBQUVsRSxLQUFGLEVBQVA7QUFBaUIsS0FBeEQsRUFBeUQxTixFQUFFdU0sRUFBRixDQUFLdUYsR0FBTCxHQUFTLFVBQVNqSSxDQUFULEVBQVc7QUFBQytILFFBQUV4QixLQUFGLENBQVF2RyxDQUFSLEVBQVcsSUFBSXdDLElBQUV1RixFQUFFekIsU0FBRixFQUFOLENBQW9CLEtBQUksSUFBSXZPLENBQVIsSUFBYXlLLENBQWIsRUFBZXJNLEVBQUV1TSxFQUFGLENBQUszSyxDQUFMLElBQVF5SyxFQUFFekssQ0FBRixDQUFSO0FBQWEsS0FBekk7QUFBMEk7QUFBQyxDQUF2MlYsRUFBeTJWLE9BQU9qRixNQUFQLElBQWUsUUFBZixHQUF3QkEsTUFBeEIsR0FBK0IsSUFBeDRWLEU7Ozs7OztBQ1BIO0FBQ0E7Ozs7Ozs7OztBQ0RBOzs7OztBQUtBLDBFQUFnQm9WLE9BQUQsSUFBYTtBQUMxQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCO0FBQ25DLFFBQUlDLEdBQUo7QUFDQUEsVUFBTSxJQUFJQyxLQUFKLEVBQU47QUFDQUQsUUFBSXRILGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFVBQVNmLENBQVQsRUFBWTtBQUN2Q3FJLFVBQUloSCxtQkFBSixDQUF3QixNQUF4QixFQUFnQ3VELFVBQVUyRCxNQUExQztBQUNBLGFBQU9ILFNBQVA7QUFDRCxLQUhEO0FBSUEsV0FBT0MsSUFBSUcsR0FBSixHQUFVTixPQUFqQjtBQUNELEdBUk0sQ0FBUDtBQVNELENBVkQsRTs7Ozs7OztBQ0xBOzs7Ozs7QUFNQSwwRUFBZSxDQUFDTyxJQUFELEVBQU9DLElBQVAsRUFBYUMsUUFBYixLQUEwQjtBQUN2QyxNQUFJbk8sR0FBSjtBQUNBLE1BQUltTyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCQSxlQUFXLEVBQVg7QUFDRDtBQUNEbk8sUUFBTSxtQ0FBTjtBQUNBLE1BQUltTyxhQUFhLEVBQWpCLEVBQXFCO0FBQ25Cbk8sV0FBTyxVQUFXb08sbUJBQW1CRixJQUFuQixDQUFsQjtBQUNELEdBRkQsTUFFTztBQUNMbE8sV0FBTyxTQUFVb08sbUJBQW1CRCxRQUFuQixDQUFWLEdBQTBDLFFBQTFDLEdBQXNEQyxtQkFBbUJGLElBQW5CLENBQTdEO0FBQ0Q7QUFDRCxTQUFPRCxLQUFLMVUsRUFBTCxDQUFRLE9BQVIsRUFBaUIsVUFBU2lNLENBQVQsRUFBWTtBQUNsQ2xOLFdBQU8rVixJQUFQLENBQVlyTyxHQUFaLEVBQWlCLGNBQWpCLEVBQWlDLHNCQUFqQztBQUNBLFdBQU8sS0FBUDtBQUNELEdBSE0sQ0FBUDtBQUlELENBZkQsRTs7Ozs7OztBQ05BOzs7Ozs7QUFNQSwwRUFBZSxDQUFDaU8sSUFBRCxFQUFPQyxJQUFQLEVBQWFDLFdBQVcsRUFBeEIsS0FBK0I7QUFDNUMsTUFBSW5PLEdBQUo7QUFDQSxNQUFJbU8sWUFBWSxJQUFoQixFQUFzQjtBQUNwQkEsZUFBVyxFQUFYO0FBQ0Q7QUFDRG5PLFFBQU0sMkJBQU47QUFDQSxNQUFJbU8sYUFBYSxFQUFqQixFQUFxQjtBQUNuQm5PLFdBQU8sS0FBTW9PLG1CQUFtQkYsSUFBbkIsQ0FBYjtBQUNELEdBRkQsTUFFTztBQUNMbE8sV0FBUW9PLG1CQUFtQkYsSUFBbkIsQ0FBRCxHQUE2QixJQUE3QixHQUFxQ0UsbUJBQW1CRCxRQUFuQixDQUE1QztBQUNEO0FBQ0QsU0FBT0YsS0FBSzFVLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQVNpTSxDQUFULEVBQVk7QUFDbENsTixXQUFPK1YsSUFBUCxDQUFZck8sR0FBWixFQUFpQixXQUFqQjtBQUNBLFdBQU8sS0FBUDtBQUNELEdBSE0sQ0FBUDtBQUlELENBZkQsRTs7Ozs7OztBQ05BOzs7Ozs7QUFNQSwwRUFBZSxDQUFDaU8sSUFBRCxFQUFPRSxRQUFQLEVBQWlCRyxjQUFjLEVBQS9CLEtBQXNDO0FBQ25ELE1BQUl0TyxHQUFKO0FBQ0EsTUFBSXNPLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJBLGtCQUFjLEVBQWQ7QUFDRDtBQUNEdE8sUUFBTSw4REFBTjtBQUNBQSxTQUFPLEtBQU1vTyxtQkFBbUJELFFBQW5CLENBQWI7QUFDQSxNQUFJRyxXQUFKLEVBQWlCO0FBQ2Z0TyxXQUFPLGtCQUFtQm9PLG1CQUFtQkUsV0FBbkIsQ0FBMUI7QUFDRDtBQUNELFNBQU9MLEtBQUsxVSxFQUFMLENBQVEsT0FBUixFQUFpQixVQUFTaU0sQ0FBVCxFQUFZO0FBQ2xDbE4sV0FBTytWLElBQVAsQ0FBWXJPLEdBQVosRUFBaUIsa0JBQW1CLElBQUk5RCxJQUFKLEdBQVdpRCxPQUFYLEVBQXBDLEVBQTJELHNCQUEzRDtBQUNBLFdBQU8sS0FBUDtBQUNELEdBSE0sQ0FBUDtBQUlELENBZEQsRTs7Ozs7OztBQ05BOzs7Ozs7OztBQVFlLE1BQU1vUCxJQUFOLENBQVc7O0FBRXhCblcsZ0JBQWM7O0FBRVosU0FBS29XLEtBQUw7QUFDQSxTQUFLQyxRQUFMO0FBQ0EsU0FBS3hILHFCQUFMO0FBQ0EsU0FBS3lILFlBQUw7QUFFRDs7QUFFREYsVUFBUTs7QUFFTm5WLE1BQUUsTUFBSTtBQUFDQSxRQUFFLFFBQUYsRUFBWStMLElBQVosQ0FBaUIsUUFBakIsRUFBMkIsUUFBM0I7QUFBc0MsS0FBN0M7QUFFRDs7QUFFRHFKLGFBQVc7O0FBRVQ7QUFDQSxRQUFJL1UsVUFBVW5CLEdBQUdFLEVBQUgsQ0FBTU0sSUFBTixDQUFXVyxPQUF6Qjs7QUFFQTtBQUNBLFFBQUlpVixVQUFVLENBQ1osS0FEWSxFQUVaLE9BRlksRUFHWixNQUhZLEVBSVosTUFKWSxFQUtaLE9BTFksRUFNWixLQU5ZLEVBT1osT0FQWSxFQVFaLFFBUlksRUFTWixRQVRZLEVBVVosT0FWWSxFQVdaLFVBWFksRUFZWixNQVpZLEVBYVosU0FiWSxFQWNaLE9BZFksRUFlWixTQWZZLEVBZ0JaLFlBaEJZLENBQWQ7O0FBbUJBO0FBQ0EsUUFBSSxPQUFPclcsT0FBT3NXLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekN0VyxhQUFPc1csT0FBUCxHQUFpQixFQUFqQjtBQUNEOztBQUVEO0FBQ0EsU0FBSyxJQUFJL1QsQ0FBVCxJQUFjOFQsT0FBZCxFQUF1QjtBQUNyQixPQUFDLFVBQVVyTSxDQUFWLEVBQWE7O0FBRWI7QUFDQSxZQUFJc00sUUFBUXRNLENBQVIsS0FBYyxDQUFDNUksT0FBZixJQUEwQixPQUFPa1YsUUFBUXRNLENBQVIsQ0FBUCxLQUFzQixVQUFwRCxFQUFnRTtBQUMvRGhLLGlCQUFPZ0ssQ0FBUCxJQUFZc00sUUFBUXRNLENBQVIsRUFBVzlJLElBQVgsQ0FBZ0JvVixPQUFoQixDQUFaO0FBQ0EsU0FGRCxNQUVPO0FBQUU7QUFDUnRXLGlCQUFPZ0ssQ0FBUCxJQUFZLFlBQVUsQ0FBRSxDQUF4QjtBQUNBO0FBRUQsT0FURCxFQVNJcU0sUUFBUTlULENBQVIsQ0FUSjtBQVVEO0FBRUY7O0FBRURnVSxVQUFRN1QsS0FBUixFQUFlOztBQUViM0IsTUFBRSxNQUFGLEVBQVV3VixPQUFWLENBQWtCN1QsS0FBbEI7QUFFRDs7QUFFRGlNLDBCQUF3Qjs7QUFFdEIsUUFBSTZILE1BQU0sT0FBSyxFQUFmOztBQUVBeFcsV0FBTzJPLHFCQUFQLEdBQStCM08sT0FBTzJPLHFCQUFQLElBQWdDO0FBQ2hDM08sV0FBTzZPLHdCQURQLElBQ21DO0FBQ25DN08sV0FBTzhPLDJCQUZQLElBRXVDO0FBQ3ZDLGNBQVVFLFFBQVYsRUFBcUI7QUFDbkJoUCxhQUFPaVAsVUFBUCxDQUFrQkQsUUFBbEIsRUFBNEJ3SCxHQUE1QjtBQUNELEtBTGhDOztBQU9BeFcsV0FBT2tQLG9CQUFQLEdBQThCbFAsT0FBT2tQLG9CQUFQLElBQ0FsUCxPQUFPbVAsdUJBRFAsSUFFQW5QLE9BQU95VywwQkFGUCxJQUdBLFVBQVVDLEtBQVYsRUFBa0I7QUFDaEIxVyxhQUFPcVAsWUFBUCxDQUFvQnFILEtBQXBCO0FBQ0QsS0FML0I7QUFPRDs7QUFFRE4saUJBQWU7O0FBRWJyQixXQUFPNEIsRUFBUCxDQUFVckYsTUFBVixDQUFpQjtBQUNmNUUsU0FBRSxDQURhO0FBRWZFLFNBQUUsQ0FGYTtBQUdmZ0ssY0FBUSxZQUFXO0FBQ2YsWUFBSWxLLElBQUkzTCxFQUFFLElBQUYsRUFBUW1HLFVBQVIsRUFBUjtBQUNBLFlBQUkwRixJQUFJN0wsRUFBRSxJQUFGLEVBQVFvRyxXQUFSLEVBQVI7QUFDQXBHLFVBQUUsSUFBRixFQUFRaUcsR0FBUixDQUFZO0FBQ1Ysc0JBQVcsVUFERDtBQUVWLGtCQUFPLEtBRkc7QUFHVixpQkFBTSxLQUhJO0FBSVYseUJBQWMsTUFBTzBGLElBQUksQ0FBWCxHQUFnQixJQUpwQjtBQUtWLHdCQUFhLE1BQU9FLElBQUksQ0FBWCxHQUFnQjtBQUxuQixTQUFaO0FBT0gsT0FiYztBQWNmaUssZUFBUyxZQUFXO0FBQ2hCLFlBQUluSyxJQUFJM0wsRUFBRSxJQUFGLEVBQVFtRyxVQUFSLEVBQVI7QUFDQSxZQUFJMEYsSUFBSTdMLEVBQUUsSUFBRixFQUFRb0csV0FBUixFQUFSO0FBQ0FwRyxVQUFFLElBQUYsRUFBUWlHLEdBQVIsQ0FBWTtBQUNWLHNCQUFXLFVBREQ7QUFFVixrQkFBTyxLQUZHO0FBR1YseUJBQWMsTUFBTzBGLElBQUksQ0FBWCxHQUFnQjtBQUhwQixTQUFaO0FBS0gsT0F0QmM7QUF1QmZvSyxlQUFTLFlBQVc7QUFDaEIsWUFBSXBLLElBQUkzTCxFQUFFLElBQUYsRUFBUW1HLFVBQVIsRUFBUjtBQUNBLFlBQUkwRixJQUFJN0wsRUFBRSxJQUFGLEVBQVFvRyxXQUFSLEVBQVI7QUFDQXBHLFVBQUUsSUFBRixFQUFRaUcsR0FBUixDQUFZO0FBQ1Ysc0JBQVcsVUFERDtBQUVWLGlCQUFNLEtBRkk7QUFHVix3QkFBYSxNQUFPNEYsSUFBSSxDQUFYLEdBQWdCO0FBSG5CLFNBQVo7QUFLSDtBQS9CYyxLQUFqQjtBQWtDRDs7QUFFRG1LLGtCQUFnQjs7QUFFZCxRQUFJLFNBQVMvVyxNQUFULElBQW1CLGNBQWNBLE9BQU9nWCxHQUE1QyxFQUFpRDtBQUMvQyxVQUFJLENBQUNoWCxPQUFPZ1gsR0FBUCxDQUFXQyxRQUFYLENBQW9CLGdCQUFwQixFQUFzQyxZQUF0QyxDQUFMLEVBQTBEO0FBQ3hEalcsaUJBQVNrVyxlQUFULENBQXlCQyxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FBdUMsb0JBQXZDO0FBQ0Q7QUFDRjs7QUFFREMsUUFBSXBYLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRbVAsSUFBWjs7QUFFQSxRQUFJNVAsR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVFtUCxJQUFaLEVBQWtCOztBQUVoQjdPLGVBQVNrVyxlQUFULENBQXlCQyxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FBdUMsb0JBQXZDO0FBRUQ7QUFFRjs7QUFFREUsZUFBYTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQUlyWCxHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUTZXLElBQVosRUFBa0I7O0FBRWhCeFcsUUFBRSxNQUFJO0FBQ0pBLFVBQUUsS0FBRixFQUFTRSxFQUFULENBQVksYUFBWixFQUEwQixNQUFJO0FBQzVCLGlCQUFPLEtBQVA7QUFDRCxTQUZEO0FBR0QsT0FKRDtBQU1EOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJa1EsSUFBSWxSLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFROFcsZ0JBQVIsRUFBUjs7QUFFQSxRQUFJckcsS0FBR2pSLFNBQVAsRUFBa0I7QUFDbEIsUUFBSWlSLElBQUUsQ0FBTixFQUFTOztBQUVQLFVBQUl1RixLQUFKO0FBQ0EzVixRQUFFLEtBQUYsRUFBU0UsRUFBVCxDQUFZLFlBQVosRUFBeUIsTUFBSTtBQUMzQnlWLGdCQUFRekgsV0FBVyxNQUFJO0FBQ3JCd0ksZ0JBQU0sWUFBTjtBQUNELFNBRk8sRUFFTixHQUZNLENBQVI7QUFHQSxlQUFPLEtBQVA7QUFDRCxPQUxEO0FBTUExVyxRQUFFLEtBQUYsRUFBU0UsRUFBVCxDQUFZLFVBQVosRUFBdUIsTUFBSTtBQUN6Qm9PLHFCQUFhcUgsS0FBYjtBQUNBLGVBQU8sS0FBUDtBQUNELE9BSEQ7QUFLRDtBQUVGOztBQTVMdUIsQzs7Ozs7Ozs7Ozs7QUNSMUI7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsTUFBTWdCLElBQU4sQ0FBVzs7QUFFeEI1WCxnQkFBYzs7QUFFWixTQUFLUyxLQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUVEOztBQUVERCxVQUFRLENBRVA7O0FBRURNLFlBQVU7O0FBRVI7QUFDQSxRQUFJOFcsT0FBTzVXLEVBQUUsTUFBRixFQUFVNlcsSUFBVixDQUFlLElBQWYsQ0FBWDs7QUFFQTVYLFdBQU9zVyxPQUFQLENBQWVlLEdBQWYsQ0FBbUIsWUFBbkIsRUFBaUNNLElBQWpDOztBQUVGO0FBQ0UsWUFBUUEsSUFBUjs7QUFFRSxXQUFLLEtBQUw7O0FBRUUsWUFBSSxvRUFBSjs7QUFFQTs7QUFFTCxXQUFLLFdBQUw7O0FBRUMsWUFBSSwwRUFBSjs7QUFFQTs7QUFFRCxXQUFLLGNBQUw7O0FBRUMsWUFBSSw2RUFBSjs7QUFFQTs7QUFsQkE7QUFzQkQ7O0FBRUQ3VyxXQUFTLENBR1I7O0FBRUQrVyxhQUFXLENBR1Y7O0FBRURyWCxjQUFZOztBQUVWTyxNQUFFQyxRQUFGLEVBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLEtBQUtKLE9BQUwsQ0FBYUssSUFBYixDQUFrQixJQUFsQixDQUF4QjtBQUNBSCxNQUFFZixNQUFGLEVBQVVpQixFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7QUE1RHVCLEM7Ozs7Ozs7OztBQ2QxQjs7Ozs7Ozs7QUFVQTs7QUFFZSxNQUFNNFcsVUFBTixDQUFpQjs7QUFFOUJoWSxnQkFBYTs7QUFFWCxTQUFLUyxLQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUVEOztBQUVERCxVQUFRLENBRVA7O0FBRURPLFdBQVMsQ0FHUjs7QUFFRE4sY0FBWTs7QUFFVk8sTUFBRWYsTUFBRixFQUFVaUIsRUFBVixDQUFhLE1BQWIsRUFBcUIsS0FBS0gsTUFBTCxDQUFZSSxJQUFaLENBQWlCLElBQWpCLENBQXJCO0FBRUQ7O0FBdEI2QixDOzs7Ozs7Ozs7QUNaaEM7QUFBQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFZSxNQUFNNFcsVUFBTixDQUFpQjs7QUFFOUJoWSxnQkFBYTs7QUFFWCxTQUFLUyxLQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUVEOztBQUVERCxVQUFROztBQUVOO0FBQ0E7O0FBRUQ7O0FBRURPLFdBQVM7O0FBRVBiLE9BQUdFLEVBQUgsQ0FBTTRYLFNBQU4sR0FBa0IsSUFBSSxrRUFBSixFQUFsQjs7QUFFQTlYLE9BQUdFLEVBQUgsQ0FBTTRYLFNBQU4sQ0FBZ0JoWSxJQUFoQjtBQUdEOztBQUVELFNBQU9pWSxHQUFQLEdBQWE7O0FBRWI7O0FBRUM7O0FBRUR4WCxjQUFZOztBQUVWTyxNQUFFZixNQUFGLEVBQVVpQixFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7QUFuQzZCLEM7Ozs7Ozs7Ozs7QUNaaEM7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBOztBQUVBOztBQUVlLE1BQU0rVyxTQUFOLFNBQXdCLDREQUF4QixDQUE2Qjs7QUFFMUNuWSxnQkFBYzs7QUFFWjs7QUFFQSxTQUFLb1ksTUFBTCxHQUFjbFgsU0FBU21YLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBZDs7QUFFQSxTQUFLeEwsS0FBTCxHQUFhM0wsU0FBU29YLElBQVQsQ0FBY0MsV0FBM0I7QUFDQSxTQUFLeEwsTUFBTCxHQUFjN0wsU0FBU29YLElBQVQsQ0FBY0UsWUFBNUI7O0FBRUEsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLElBQWI7O0FBRUEsU0FBS0MsWUFBTCxHQUFvQixLQUFLQyxhQUFMLENBQW1CelgsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBcEI7QUFDQSxTQUFLMFgsY0FBTCxHQUFzQixLQUFLQyxlQUFMLENBQXFCM1gsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdEI7QUFDQSxTQUFLNFgsV0FBTCxHQUFtQixLQUFLQyxZQUFMLENBQWtCN1gsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbkI7O0FBRUEsU0FBSzhYLFFBQUwsR0FBZ0IsS0FBS0MsU0FBTCxDQUFlL1gsSUFBZixDQUFvQixJQUFwQixDQUFoQjtBQUNGLFNBQUtnWSxNQUFMLEdBQWMsS0FBS0MsT0FBTCxDQUFhalksSUFBYixDQUFrQixJQUFsQixDQUFkO0FBQ0EsU0FBS2tZLFdBQUwsR0FBbUIsS0FBS0MsWUFBTCxDQUFrQm5ZLElBQWxCLENBQXVCLElBQXZCLENBQW5COztBQUVBLFNBQUtvWSxLQUFMLEdBQWEsSUFBSSx1REFBSixFQUFiO0FBRUM7O0FBRUQ7OztBQUdBdlosU0FBTTs7QUFFSixTQUFLMlksWUFBTDtBQUNGLFNBQUtJLFdBQUw7QUFDRSxTQUFLRixjQUFMOztBQUVGLFNBQUtNLE1BQUw7O0FBRUEsU0FBS0UsV0FBTDtBQUNDOztBQUdEOzs7QUFHQVQsa0JBQWU7O0FBRWIsU0FBS0osTUFBTCxHQUFjLElBQUlnQixNQUFNQyxpQkFBVixDQUE0QixFQUE1QixFQUFnQyxLQUFLN00sS0FBTCxHQUFhLEtBQUtFLE1BQWxELEVBQTBELEdBQTFELEVBQStELElBQS9ELENBQWQ7QUFDQSxTQUFLMEwsTUFBTCxDQUFZa0IsUUFBWixDQUFxQnRULENBQXJCLEdBQXlCLENBQXpCO0FBQ0EsU0FBS29TLE1BQUwsQ0FBWWtCLFFBQVosQ0FBcUJyVCxDQUFyQixHQUF5QixDQUF6QjtBQUNBLFNBQUttUyxNQUFMLENBQVlrQixRQUFaLENBQXFCQyxDQUFyQixHQUF5QixHQUF6Qjs7QUFFQSxTQUFLbkIsTUFBTCxDQUFZb0IsTUFBWixDQUFtQixJQUFJSixNQUFNSyxPQUFWLENBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCLENBQXRCLENBQW5CO0FBRUQ7O0FBRUQ7OztBQUdBZixvQkFBaUI7O0FBRWpCLFNBQUtMLFFBQUwsR0FBZ0IsSUFBSWUsTUFBTU0sYUFBVixDQUF3QjtBQUNwQ0MsYUFBcUIsS0FEZTtBQUVwQ0MsaUJBQXFCLEtBRmU7QUFHcENDLGVBQXFCLEtBSGU7QUFJcENDLGFBQXFCLElBSmU7QUFLcENDLDBCQUFxQixLQUxlO0FBTXBDaEMsY0FBUSxLQUFLQTtBQU51QixLQUF4QixDQUFoQjs7QUFTRSxTQUFLTSxRQUFMLENBQWMyQixhQUFkLENBQTRCLFFBQTVCLEVBQXNDLEdBQXRDO0FBQ0EsU0FBSzNCLFFBQUwsQ0FBYzRCLGFBQWQsQ0FBNEJwYSxPQUFPcWEsZ0JBQVAsSUFBMkIsQ0FBdkQ7QUFDQSxTQUFLN0IsUUFBTCxDQUFjOEIsT0FBZCxDQUFzQixLQUFLM04sS0FBM0IsRUFBa0MsS0FBS0UsTUFBdkM7QUFFRDs7QUFFRDs7O0FBR0FrTSxpQkFBYzs7QUFFZCxTQUFLTixLQUFMLEdBQWEsSUFBSWMsTUFBTWdCLEtBQVYsRUFBYjtBQUVDOztBQUVEOzs7O0FBSURsQixpQkFBYzs7QUFFYixTQUFLQyxLQUFMLENBQVdGLFdBQVgsQ0FBdUIsK0NBQXZCLEVBQXdFLE1BQU07QUFDN0UsV0FBS1gsS0FBTCxDQUFXckIsR0FBWCxDQUFlLEtBQUtrQyxLQUFMLENBQVdrQixJQUExQjtBQUNBeGEsYUFBT2lPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLE1BQU07QUFDdkMsYUFBSytLLFFBQUw7QUFDQSxPQUZELEVBRUcsS0FGSDtBQUdBLFdBQUtBLFFBQUw7QUFDQSxXQUFLRSxNQUFMO0FBQ0EsS0FQRDtBQVNBOztBQUVBOzs7O0FBSUFDLFlBQVU7O0FBRVYsU0FBS1gsUUFBTCxDQUFjaUMsTUFBZCxDQUFxQixLQUFLaEMsS0FBMUIsRUFBaUMsS0FBS0YsTUFBdEM7O0FBRUU1SiwwQkFBdUIsTUFBTTtBQUMzQixXQUFLdUssTUFBTDtBQUNELEtBRkQ7QUFJRDs7QUFFRDs7O0FBR0FELGNBQVk7QUFDWixTQUFLZixNQUFMLENBQVl2TCxLQUFaLEdBQW9CM0wsU0FBU29YLElBQVQsQ0FBY0MsV0FBbEM7QUFDRSxTQUFLSCxNQUFMLENBQVlyTCxNQUFaLEdBQXFCN0wsU0FBU29YLElBQVQsQ0FBY0UsWUFBbkM7QUFDRixTQUFLZ0IsS0FBTCxDQUFXa0IsSUFBWCxDQUFnQkUsUUFBaEIsQ0FBeUJDLFFBQXpCLENBQWtDQyxVQUFsQyxDQUE2Qy9YLEtBQTdDLENBQW1Ec1MsR0FBbkQsQ0FBdURuVSxTQUFTb1gsSUFBVCxDQUFjQyxXQUFyRSxFQUFrRnJYLFNBQVNvWCxJQUFULENBQWNFLFlBQWhHOztBQUVFLFNBQUtDLE1BQUwsQ0FBWXNDLE1BQVosR0FBcUI3YSxPQUFPa0gsVUFBUCxHQUFvQmxILE9BQU9tSCxXQUFoRDtBQUNBLFNBQUtvUixNQUFMLENBQVl1QyxzQkFBWjtBQUNBLFNBQUt0QyxRQUFMLENBQWM4QixPQUFkLENBQXNCdGEsT0FBT2tILFVBQTdCLEVBQXlDbEgsT0FBT21ILFdBQWhEO0FBQ0Q7O0FBR0YzRyxjQUFZOztBQUVUTyxNQUFFZixNQUFGLEVBQVVpQixFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7QUF0SXlDLEM7Ozs7Ozs7O0FDYjVDOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXFZLE1BQU13QixhQUFOLEdBQXNCLFVBQVdDLE1BQVgsRUFBbUJDLFVBQW5CLEVBQWdDOztBQUVyRCxNQUFLRCxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsTUFBS0MsVUFBTCxHQUFvQkEsZUFBZS9hLFNBQWpCLEdBQStCK2EsVUFBL0IsR0FBNENqYSxRQUE5RDs7QUFFQTtBQUNBLE1BQUtrYSxPQUFMLEdBQWUsSUFBZjs7QUFFQTtBQUNBLE1BQUtDLE1BQUwsR0FBYyxJQUFJNUIsTUFBTUssT0FBVixFQUFkOztBQUVBO0FBQ0EsTUFBS3dCLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxNQUFLQyxXQUFMLEdBQW1CQyxRQUFuQjs7QUFFQTtBQUNBLE1BQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsTUFBS0MsT0FBTCxHQUFlRixRQUFmOztBQUVBO0FBQ0E7QUFDQSxNQUFLRyxhQUFMLEdBQXFCLENBQXJCLENBdEJxRCxDQXNCN0I7QUFDeEIsTUFBS0MsYUFBTCxHQUFxQjFYLEtBQUsyQixFQUExQixDQXZCcUQsQ0F1QnZCOztBQUU5QjtBQUNBO0FBQ0EsTUFBS2dXLGVBQUwsR0FBdUIsQ0FBRUwsUUFBekIsQ0EzQnFELENBMkJsQjtBQUNuQyxNQUFLTSxlQUFMLEdBQXVCTixRQUF2QixDQTVCcUQsQ0E0QnBCOztBQUVqQztBQUNBO0FBQ0EsTUFBS08sYUFBTCxHQUFxQixLQUFyQjtBQUNBLE1BQUtDLGFBQUwsR0FBcUIsSUFBckI7O0FBRUE7QUFDQTtBQUNBLE1BQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxNQUFLQyxTQUFMLEdBQWlCLEdBQWpCOztBQUVBO0FBQ0EsTUFBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLE1BQUtDLFdBQUwsR0FBbUIsR0FBbkI7O0FBRUE7QUFDQSxNQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsTUFBS0MsV0FBTCxHQUFtQixHQUFuQixDQTlDcUQsQ0E4QzdCOztBQUV4QjtBQUNBO0FBQ0EsTUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLE1BQUtDLGVBQUwsR0FBdUIsR0FBdkIsQ0FuRHFELENBbUR6Qjs7QUFFNUI7QUFDQSxNQUFLQyxVQUFMLEdBQWtCLElBQWxCOztBQUVBO0FBQ0EsTUFBS3RhLElBQUwsR0FBWSxFQUFFdWEsTUFBTSxFQUFSLEVBQVlDLElBQUksRUFBaEIsRUFBb0JDLE9BQU8sRUFBM0IsRUFBK0JDLFFBQVEsRUFBdkMsRUFBWjs7QUFFQTtBQUNBLE1BQUtDLFlBQUwsR0FBb0IsRUFBRUMsT0FBT3RELE1BQU11RCxLQUFOLENBQVlOLElBQXJCLEVBQTJCTyxNQUFNeEQsTUFBTXVELEtBQU4sQ0FBWUUsTUFBN0MsRUFBcURDLEtBQUsxRCxNQUFNdUQsS0FBTixDQUFZSixLQUF0RSxFQUFwQjs7QUFFQTtBQUNBLE1BQUtRLE9BQUwsR0FBZSxLQUFLL0IsTUFBTCxDQUFZZ0MsS0FBWixFQUFmO0FBQ0EsTUFBS0MsU0FBTCxHQUFpQixLQUFLcEMsTUFBTCxDQUFZdkIsUUFBWixDQUFxQjBELEtBQXJCLEVBQWpCO0FBQ0EsTUFBS0UsS0FBTCxHQUFhLEtBQUtyQyxNQUFMLENBQVlzQyxJQUF6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBS0MsYUFBTCxHQUFxQixZQUFZOztBQUVoQyxTQUFPQyxVQUFVQyxHQUFqQjtBQUVBLEVBSkQ7O0FBTUEsTUFBS0MsaUJBQUwsR0FBeUIsWUFBWTs7QUFFcEMsU0FBT0YsVUFBVUcsS0FBakI7QUFFQSxFQUpEOztBQU1BLE1BQUtDLEtBQUwsR0FBYSxZQUFZOztBQUV4QkMsUUFBTTFDLE1BQU4sQ0FBYTJDLElBQWIsQ0FBbUJELE1BQU1YLE9BQXpCO0FBQ0FXLFFBQU03QyxNQUFOLENBQWF2QixRQUFiLENBQXNCcUUsSUFBdEIsQ0FBNEJELE1BQU1ULFNBQWxDO0FBQ0FTLFFBQU03QyxNQUFOLENBQWFzQyxJQUFiLEdBQW9CTyxNQUFNUixLQUExQjs7QUFFQVEsUUFBTTdDLE1BQU4sQ0FBYUYsc0JBQWI7QUFDQStDLFFBQU1FLGFBQU4sQ0FBcUJDLFdBQXJCOztBQUVBSCxRQUFNSSxNQUFOOztBQUVBQyxVQUFRQyxNQUFNQyxJQUFkO0FBRUEsRUFiRDs7QUFlQTtBQUNBLE1BQUtILE1BQUwsR0FBYyxZQUFXOztBQUV4QixNQUFJSSxTQUFTLElBQUk5RSxNQUFNSyxPQUFWLEVBQWI7O0FBRUE7QUFDQSxNQUFJMEUsT0FBTyxJQUFJL0UsTUFBTWdGLFVBQVYsR0FBdUJDLGtCQUF2QixDQUEyQ3hELE9BQU95RCxFQUFsRCxFQUFzRCxJQUFJbEYsTUFBTUssT0FBVixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUF0RCxDQUFYO0FBQ0EsTUFBSThFLGNBQWNKLEtBQUtuQixLQUFMLEdBQWF3QixPQUFiLEVBQWxCOztBQUVBLE1BQUlDLGVBQWUsSUFBSXJGLE1BQU1LLE9BQVYsRUFBbkI7QUFDQSxNQUFJaUYsaUJBQWlCLElBQUl0RixNQUFNZ0YsVUFBVixFQUFyQjs7QUFFQSxTQUFPLFNBQVNOLE1BQVQsR0FBbUI7O0FBRXpCLE9BQUl4RSxXQUFXb0UsTUFBTTdDLE1BQU4sQ0FBYXZCLFFBQTVCOztBQUVBNEUsVUFBT1AsSUFBUCxDQUFhckUsUUFBYixFQUF3QnFGLEdBQXhCLENBQTZCakIsTUFBTTFDLE1BQW5DOztBQUVBO0FBQ0FrRCxVQUFPVSxlQUFQLENBQXdCVCxJQUF4Qjs7QUFFQTtBQUNBZCxhQUFVd0IsY0FBVixDQUEwQlgsTUFBMUI7O0FBRUEsT0FBS1IsTUFBTXhCLFVBQU4sSUFBb0I2QixVQUFVQyxNQUFNQyxJQUF6QyxFQUFnRDs7QUFFL0NhLGVBQVlDLHNCQUFaO0FBRUE7O0FBRUQxQixhQUFVRyxLQUFWLElBQW1Cd0IsZUFBZXhCLEtBQWxDO0FBQ0FILGFBQVVDLEdBQVYsSUFBaUIwQixlQUFlMUIsR0FBaEM7O0FBRUE7QUFDQUQsYUFBVUcsS0FBVixHQUFrQjNaLEtBQUtELEdBQUwsQ0FBVThaLE1BQU1sQyxlQUFoQixFQUFpQzNYLEtBQUtGLEdBQUwsQ0FBVStaLE1BQU1qQyxlQUFoQixFQUFpQzRCLFVBQVVHLEtBQTNDLENBQWpDLENBQWxCOztBQUVBO0FBQ0FILGFBQVVDLEdBQVYsR0FBZ0J6WixLQUFLRCxHQUFMLENBQVU4WixNQUFNcEMsYUFBaEIsRUFBK0J6WCxLQUFLRixHQUFMLENBQVUrWixNQUFNbkMsYUFBaEIsRUFBK0I4QixVQUFVQyxHQUF6QyxDQUEvQixDQUFoQjs7QUFFQUQsYUFBVTRCLFFBQVY7O0FBR0E1QixhQUFVNkIsTUFBVixJQUFvQkMsS0FBcEI7O0FBRUE7QUFDQTlCLGFBQVU2QixNQUFWLEdBQW1CcmIsS0FBS0QsR0FBTCxDQUFVOFosTUFBTXpDLFdBQWhCLEVBQTZCcFgsS0FBS0YsR0FBTCxDQUFVK1osTUFBTXhDLFdBQWhCLEVBQTZCbUMsVUFBVTZCLE1BQXZDLENBQTdCLENBQW5COztBQUVBO0FBQ0F4QixTQUFNMUMsTUFBTixDQUFhL0QsR0FBYixDQUFrQm1JLFNBQWxCOztBQUVBbEIsVUFBT21CLGdCQUFQLENBQXlCaEMsU0FBekI7O0FBRUE7QUFDQWEsVUFBT1UsZUFBUCxDQUF3QkwsV0FBeEI7O0FBRUFqRixZQUFTcUUsSUFBVCxDQUFlRCxNQUFNMUMsTUFBckIsRUFBOEIvRCxHQUE5QixDQUFtQ2lILE1BQW5DOztBQUVBUixTQUFNN0MsTUFBTixDQUFhckIsTUFBYixDQUFxQmtFLE1BQU0xQyxNQUEzQjs7QUFFQSxPQUFLMEMsTUFBTWhDLGFBQU4sS0FBd0IsSUFBN0IsRUFBb0M7O0FBRW5Dc0QsbUJBQWV4QixLQUFmLElBQTBCLElBQUlFLE1BQU0vQixhQUFwQztBQUNBcUQsbUJBQWUxQixHQUFmLElBQXdCLElBQUlJLE1BQU0vQixhQUFsQztBQUVBLElBTEQsTUFLTzs7QUFFTnFELG1CQUFlaEssR0FBZixDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQixDQUExQjtBQUVBOztBQUVEbUssV0FBUSxDQUFSO0FBQ0FDLGFBQVVwSyxHQUFWLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBS3NLLGVBQ0piLGFBQWFjLGlCQUFiLENBQWdDN0IsTUFBTTdDLE1BQU4sQ0FBYXZCLFFBQTdDLElBQTBEa0csR0FEdEQsSUFFSixLQUFNLElBQUlkLGVBQWVlLEdBQWYsQ0FBb0IvQixNQUFNN0MsTUFBTixDQUFhNkUsVUFBakMsQ0FBVixJQUE0REYsR0FGN0QsRUFFbUU7O0FBRWxFOUIsVUFBTUUsYUFBTixDQUFxQkMsV0FBckI7O0FBRUFZLGlCQUFhZCxJQUFiLENBQW1CRCxNQUFNN0MsTUFBTixDQUFhdkIsUUFBaEM7QUFDQW9GLG1CQUFlZixJQUFmLENBQXFCRCxNQUFNN0MsTUFBTixDQUFhNkUsVUFBbEM7QUFDQUosa0JBQWMsS0FBZDs7QUFFQSxXQUFPLElBQVA7QUFFQTs7QUFFRCxVQUFPLEtBQVA7QUFFQSxHQWpGRDtBQW1GQSxFQTlGYSxFQUFkOztBQWdHQSxNQUFLSyxPQUFMLEdBQWUsWUFBVzs7QUFFekJqQyxRQUFNNUMsVUFBTixDQUFpQjFNLG1CQUFqQixDQUFzQyxhQUF0QyxFQUFxRHdSLGFBQXJELEVBQW9FLEtBQXBFO0FBQ0FsQyxRQUFNNUMsVUFBTixDQUFpQjFNLG1CQUFqQixDQUFzQyxXQUF0QyxFQUFtRHlSLFdBQW5ELEVBQWdFLEtBQWhFO0FBQ0FuQyxRQUFNNUMsVUFBTixDQUFpQjFNLG1CQUFqQixDQUFzQyxPQUF0QyxFQUErQzBSLFlBQS9DLEVBQTZELEtBQTdEOztBQUVBcEMsUUFBTTVDLFVBQU4sQ0FBaUIxTSxtQkFBakIsQ0FBc0MsWUFBdEMsRUFBb0QyUixZQUFwRCxFQUFrRSxLQUFsRTtBQUNBckMsUUFBTTVDLFVBQU4sQ0FBaUIxTSxtQkFBakIsQ0FBc0MsVUFBdEMsRUFBa0Q0UixVQUFsRCxFQUE4RCxLQUE5RDtBQUNBdEMsUUFBTTVDLFVBQU4sQ0FBaUIxTSxtQkFBakIsQ0FBc0MsV0FBdEMsRUFBbUQ2UixXQUFuRCxFQUFnRSxLQUFoRTs7QUFFQXBmLFdBQVN1TixtQkFBVCxDQUE4QixXQUE5QixFQUEyQzhSLFdBQTNDLEVBQXdELEtBQXhEO0FBQ0FyZixXQUFTdU4sbUJBQVQsQ0FBOEIsU0FBOUIsRUFBeUMrUixTQUF6QyxFQUFvRCxLQUFwRDs7QUFFQXRnQixTQUFPdU8sbUJBQVAsQ0FBNEIsU0FBNUIsRUFBdUNnUyxTQUF2QyxFQUFrRCxLQUFsRDs7QUFFQTtBQUVBLEVBakJEOztBQW1CQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSTFDLFFBQVEsSUFBWjs7QUFFQSxLQUFJRyxjQUFjLEVBQUV6TixNQUFNLFFBQVIsRUFBbEI7QUFDQSxLQUFJaVEsYUFBYSxFQUFFalEsTUFBTSxPQUFSLEVBQWpCO0FBQ0EsS0FBSWtRLFdBQVcsRUFBRWxRLE1BQU0sS0FBUixFQUFmOztBQUVBLEtBQUk0TixRQUFRLEVBQUVDLE1BQU8sQ0FBRSxDQUFYLEVBQWNzQyxRQUFTLENBQXZCLEVBQTBCQyxPQUFRLENBQWxDLEVBQXFDMUQsS0FBTSxDQUEzQyxFQUE4QzJELGNBQWUsQ0FBN0QsRUFBZ0VDLGFBQWMsQ0FBOUUsRUFBaUZDLFdBQVksQ0FBN0YsRUFBWjs7QUFFQSxLQUFJNUMsUUFBUUMsTUFBTUMsSUFBbEI7O0FBRUEsS0FBSXVCLE1BQU0sUUFBVjs7QUFFQTtBQUNBLEtBQUluQyxZQUFZLElBQUlqRSxNQUFNd0gsU0FBVixFQUFoQjtBQUNBLEtBQUk1QixpQkFBaUIsSUFBSTVGLE1BQU13SCxTQUFWLEVBQXJCOztBQUVBLEtBQUl6QixRQUFRLENBQVo7QUFDQSxLQUFJQyxZQUFZLElBQUloRyxNQUFNSyxPQUFWLEVBQWhCO0FBQ0EsS0FBSTZGLGNBQWMsS0FBbEI7O0FBRUEsS0FBSXVCLGNBQWMsSUFBSXpILE1BQU0wSCxPQUFWLEVBQWxCO0FBQ0EsS0FBSUMsWUFBWSxJQUFJM0gsTUFBTTBILE9BQVYsRUFBaEI7QUFDQSxLQUFJRSxjQUFjLElBQUk1SCxNQUFNMEgsT0FBVixFQUFsQjs7QUFFQSxLQUFJRyxXQUFXLElBQUk3SCxNQUFNMEgsT0FBVixFQUFmO0FBQ0EsS0FBSUksU0FBUyxJQUFJOUgsTUFBTTBILE9BQVYsRUFBYjtBQUNBLEtBQUlLLFdBQVcsSUFBSS9ILE1BQU0wSCxPQUFWLEVBQWY7O0FBRUEsS0FBSU0sYUFBYSxJQUFJaEksTUFBTTBILE9BQVYsRUFBakI7QUFDQSxLQUFJTyxXQUFXLElBQUlqSSxNQUFNMEgsT0FBVixFQUFmO0FBQ0EsS0FBSVEsYUFBYSxJQUFJbEksTUFBTTBILE9BQVYsRUFBakI7O0FBRUEsVUFBUy9CLG9CQUFULEdBQWdDOztBQUUvQixTQUFPLElBQUlsYixLQUFLMkIsRUFBVCxHQUFjLEVBQWQsR0FBbUIsRUFBbkIsR0FBd0JrWSxNQUFNdkIsZUFBckM7QUFFQTs7QUFFRCxVQUFTb0YsWUFBVCxHQUF3Qjs7QUFFdkIsU0FBTzFkLEtBQUtrQyxHQUFMLENBQVUsSUFBVixFQUFnQjJYLE1BQU03QixTQUF0QixDQUFQO0FBRUE7O0FBRUQsVUFBU2lELFVBQVQsQ0FBcUJwWixLQUFyQixFQUE2Qjs7QUFFNUJzWixpQkFBZXhCLEtBQWYsSUFBd0I5WCxLQUF4QjtBQUVBOztBQUVELFVBQVM4YixRQUFULENBQW1COWIsS0FBbkIsRUFBMkI7O0FBRTFCc1osaUJBQWUxQixHQUFmLElBQXNCNVgsS0FBdEI7QUFFQTs7QUFFRCxLQUFJK2IsVUFBVSxZQUFXOztBQUV4QixNQUFJelEsSUFBSSxJQUFJb0ksTUFBTUssT0FBVixFQUFSOztBQUVBLFNBQU8sU0FBU2dJLE9BQVQsQ0FBa0JDLFFBQWxCLEVBQTRCQyxZQUE1QixFQUEyQzs7QUFFakQzUSxLQUFFNFEsbUJBQUYsQ0FBdUJELFlBQXZCLEVBQXFDLENBQXJDLEVBRmlELENBRVA7QUFDMUMzUSxLQUFFNlEsY0FBRixDQUFrQixDQUFFSCxRQUFwQjs7QUFFQXRDLGFBQVVuSSxHQUFWLENBQWVqRyxDQUFmO0FBRUEsR0FQRDtBQVNBLEVBYmEsRUFBZDs7QUFlQSxLQUFJOFEsUUFBUSxZQUFXOztBQUV0QixNQUFJOVEsSUFBSSxJQUFJb0ksTUFBTUssT0FBVixFQUFSOztBQUVBLFNBQU8sU0FBU3FJLEtBQVQsQ0FBZ0JKLFFBQWhCLEVBQTBCQyxZQUExQixFQUF5Qzs7QUFFL0MzUSxLQUFFNFEsbUJBQUYsQ0FBdUJELFlBQXZCLEVBQXFDLENBQXJDLEVBRitDLENBRUw7QUFDMUMzUSxLQUFFNlEsY0FBRixDQUFrQkgsUUFBbEI7O0FBRUF0QyxhQUFVbkksR0FBVixDQUFlakcsQ0FBZjtBQUVBLEdBUEQ7QUFTQSxFQWJXLEVBQVo7O0FBZUE7QUFDQSxLQUFJK1EsTUFBTSxZQUFXOztBQUVwQixNQUFJN0QsU0FBUyxJQUFJOUUsTUFBTUssT0FBVixFQUFiOztBQUVBLFNBQU8sU0FBU3NJLEdBQVQsQ0FBZUMsTUFBZixFQUF1QkMsTUFBdkIsRUFBZ0M7O0FBRXRDLE9BQUlDLFVBQVV4RSxNQUFNNUMsVUFBTixLQUFxQmphLFFBQXJCLEdBQWdDNmMsTUFBTTVDLFVBQU4sQ0FBaUI3QyxJQUFqRCxHQUF3RHlGLE1BQU01QyxVQUE1RTs7QUFFQSxPQUFLNEMsTUFBTTdDLE1BQU4sWUFBd0J6QixNQUFNQyxpQkFBbkMsRUFBdUQ7O0FBRXREO0FBQ0EsUUFBSUMsV0FBV29FLE1BQU03QyxNQUFOLENBQWF2QixRQUE1QjtBQUNBNEUsV0FBT1AsSUFBUCxDQUFhckUsUUFBYixFQUF3QnFGLEdBQXhCLENBQTZCakIsTUFBTTFDLE1BQW5DO0FBQ0EsUUFBSW1ILGlCQUFpQmpFLE9BQU9uYixNQUFQLEVBQXJCOztBQUVBO0FBQ0FvZixzQkFBa0J0ZSxLQUFLdWUsR0FBTCxDQUFZMUUsTUFBTTdDLE1BQU4sQ0FBYXdILEdBQWIsR0FBbUIsQ0FBckIsR0FBMkJ4ZSxLQUFLMkIsRUFBaEMsR0FBcUMsS0FBL0MsQ0FBbEI7O0FBRUE7QUFDQWljLFlBQVMsSUFBSU8sTUFBSixHQUFhRyxjQUFiLEdBQThCRCxRQUFRL0osWUFBL0MsRUFBNkR1RixNQUFNN0MsTUFBTixDQUFheUgsTUFBMUU7QUFDQVIsVUFBTyxJQUFJRyxNQUFKLEdBQWFFLGNBQWIsR0FBOEJELFFBQVEvSixZQUE3QyxFQUEyRHVGLE1BQU03QyxNQUFOLENBQWF5SCxNQUF4RTtBQUVBLElBZEQsTUFjTyxJQUFLNUUsTUFBTTdDLE1BQU4sWUFBd0J6QixNQUFNbUosa0JBQW5DLEVBQXdEOztBQUU5RDtBQUNBZCxZQUFTTyxVQUFXdEUsTUFBTTdDLE1BQU4sQ0FBYTJILEtBQWIsR0FBcUI5RSxNQUFNN0MsTUFBTixDQUFhNEgsSUFBN0MsSUFBc0QvRSxNQUFNN0MsTUFBTixDQUFhc0MsSUFBbkUsR0FBMEUrRSxRQUFRaEssV0FBM0YsRUFBd0d3RixNQUFNN0MsTUFBTixDQUFheUgsTUFBckg7QUFDQVIsVUFBT0csVUFBV3ZFLE1BQU03QyxNQUFOLENBQWE2SCxHQUFiLEdBQW1CaEYsTUFBTTdDLE1BQU4sQ0FBYThILE1BQTNDLElBQXNEakYsTUFBTTdDLE1BQU4sQ0FBYXNDLElBQW5FLEdBQTBFK0UsUUFBUS9KLFlBQXpGLEVBQXVHdUYsTUFBTTdDLE1BQU4sQ0FBYXlILE1BQXBIO0FBRUEsSUFOTSxNQU1BOztBQUVOO0FBQ0FuTSxZQUFReU0sSUFBUixDQUFjLDhFQUFkO0FBQ0FsRixVQUFNMUIsU0FBTixHQUFrQixLQUFsQjtBQUVBO0FBRUQsR0FoQ0Q7QUFrQ0EsRUF0Q1MsRUFBVjs7QUF3Q0EsVUFBUzZHLE9BQVQsQ0FBa0JDLFVBQWxCLEVBQStCOztBQUU5QixNQUFLcEYsTUFBTTdDLE1BQU4sWUFBd0J6QixNQUFNQyxpQkFBbkMsRUFBdUQ7O0FBRXREOEYsWUFBUzJELFVBQVQ7QUFFQSxHQUpELE1BSU8sSUFBS3BGLE1BQU03QyxNQUFOLFlBQXdCekIsTUFBTW1KLGtCQUFuQyxFQUF3RDs7QUFFOUQ3RSxTQUFNN0MsTUFBTixDQUFhc0MsSUFBYixHQUFvQnRaLEtBQUtELEdBQUwsQ0FBVThaLE1BQU10QyxPQUFoQixFQUF5QnZYLEtBQUtGLEdBQUwsQ0FBVStaLE1BQU1yQyxPQUFoQixFQUF5QnFDLE1BQU03QyxNQUFOLENBQWFzQyxJQUFiLEdBQW9CMkYsVUFBN0MsQ0FBekIsQ0FBcEI7QUFDQXBGLFNBQU03QyxNQUFOLENBQWFGLHNCQUFiO0FBQ0EyRSxpQkFBYyxJQUFkO0FBRUEsR0FOTSxNQU1BOztBQUVObkosV0FBUXlNLElBQVIsQ0FBYyxxRkFBZDtBQUNBbEYsU0FBTTlCLFVBQU4sR0FBbUIsS0FBbkI7QUFFQTtBQUVEOztBQUVELFVBQVNtSCxRQUFULENBQW1CRCxVQUFuQixFQUFnQzs7QUFFL0IsTUFBS3BGLE1BQU03QyxNQUFOLFlBQXdCekIsTUFBTUMsaUJBQW5DLEVBQXVEOztBQUV0RDhGLFlBQVMyRCxVQUFUO0FBRUEsR0FKRCxNQUlPLElBQUtwRixNQUFNN0MsTUFBTixZQUF3QnpCLE1BQU1tSixrQkFBbkMsRUFBd0Q7O0FBRTlEN0UsU0FBTTdDLE1BQU4sQ0FBYXNDLElBQWIsR0FBb0J0WixLQUFLRCxHQUFMLENBQVU4WixNQUFNdEMsT0FBaEIsRUFBeUJ2WCxLQUFLRixHQUFMLENBQVUrWixNQUFNckMsT0FBaEIsRUFBeUJxQyxNQUFNN0MsTUFBTixDQUFhc0MsSUFBYixHQUFvQjJGLFVBQTdDLENBQXpCLENBQXBCO0FBQ0FwRixTQUFNN0MsTUFBTixDQUFhRixzQkFBYjtBQUNBMkUsaUJBQWMsSUFBZDtBQUVBLEdBTk0sTUFNQTs7QUFFTm5KLFdBQVF5TSxJQUFSLENBQWMscUZBQWQ7QUFDQWxGLFNBQU05QixVQUFOLEdBQW1CLEtBQW5CO0FBRUE7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsVUFBU29ILHFCQUFULENBQWdDdlYsS0FBaEMsRUFBd0M7O0FBRXZDOztBQUVBb1QsY0FBWTdMLEdBQVosQ0FBaUJ2SCxNQUFNd1YsT0FBdkIsRUFBZ0N4VixNQUFNeVYsT0FBdEM7QUFFQTs7QUFFRCxVQUFTQyxvQkFBVCxDQUErQjFWLEtBQS9CLEVBQXVDOztBQUV0Qzs7QUFFQTJULGFBQVdwTSxHQUFYLENBQWdCdkgsTUFBTXdWLE9BQXRCLEVBQStCeFYsTUFBTXlWLE9BQXJDO0FBRUE7O0FBRUQsVUFBU0Usa0JBQVQsQ0FBNkIzVixLQUE3QixFQUFxQzs7QUFFcEM7O0FBRUF3VCxXQUFTak0sR0FBVCxDQUFjdkgsTUFBTXdWLE9BQXBCLEVBQTZCeFYsTUFBTXlWLE9BQW5DO0FBRUE7O0FBRUQsVUFBU0cscUJBQVQsQ0FBZ0M1VixLQUFoQyxFQUF3Qzs7QUFFdkM7O0FBRUFzVCxZQUFVL0wsR0FBVixDQUFldkgsTUFBTXdWLE9BQXJCLEVBQThCeFYsTUFBTXlWLE9BQXBDO0FBQ0FsQyxjQUFZc0MsVUFBWixDQUF3QnZDLFNBQXhCLEVBQW1DRixXQUFuQzs7QUFFQSxNQUFJcUIsVUFBVXhFLE1BQU01QyxVQUFOLEtBQXFCamEsUUFBckIsR0FBZ0M2YyxNQUFNNUMsVUFBTixDQUFpQjdDLElBQWpELEdBQXdEeUYsTUFBTTVDLFVBQTVFOztBQUVBO0FBQ0FnRSxhQUFZLElBQUlqYixLQUFLMkIsRUFBVCxHQUFjd2IsWUFBWWhiLENBQTFCLEdBQThCa2MsUUFBUWhLLFdBQXRDLEdBQW9Ed0YsTUFBTTNCLFdBQXRFOztBQUVBO0FBQ0F5RixXQUFVLElBQUkzZCxLQUFLMkIsRUFBVCxHQUFjd2IsWUFBWS9hLENBQTFCLEdBQThCaWMsUUFBUS9KLFlBQXRDLEdBQXFEdUYsTUFBTTNCLFdBQXJFOztBQUVBOEUsY0FBWWxELElBQVosQ0FBa0JvRCxTQUFsQjs7QUFFQXJELFFBQU1JLE1BQU47QUFFQTs7QUFFRCxVQUFTeUYsb0JBQVQsQ0FBK0I5VixLQUEvQixFQUF1Qzs7QUFFdEM7O0FBRUE0VCxXQUFTck0sR0FBVCxDQUFjdkgsTUFBTXdWLE9BQXBCLEVBQTZCeFYsTUFBTXlWLE9BQW5DOztBQUVBNUIsYUFBV2dDLFVBQVgsQ0FBdUJqQyxRQUF2QixFQUFpQ0QsVUFBakM7O0FBRUEsTUFBS0UsV0FBV3JiLENBQVgsR0FBZSxDQUFwQixFQUF3Qjs7QUFFdkI0YyxXQUFTdEIsY0FBVDtBQUVBLEdBSkQsTUFJTyxJQUFLRCxXQUFXcmIsQ0FBWCxHQUFlLENBQXBCLEVBQXdCOztBQUU5QjhjLFlBQVV4QixjQUFWO0FBRUE7O0FBRURILGFBQVd6RCxJQUFYLENBQWlCMEQsUUFBakI7O0FBRUEzRCxRQUFNSSxNQUFOO0FBRUE7O0FBRUQsVUFBUzBGLGtCQUFULENBQTZCL1YsS0FBN0IsRUFBcUM7O0FBRXBDOztBQUVBeVQsU0FBT2xNLEdBQVAsQ0FBWXZILE1BQU13VixPQUFsQixFQUEyQnhWLE1BQU15VixPQUFqQzs7QUFFQS9CLFdBQVNtQyxVQUFULENBQXFCcEMsTUFBckIsRUFBNkJELFFBQTdCOztBQUVBYyxNQUFLWixTQUFTbmIsQ0FBZCxFQUFpQm1iLFNBQVNsYixDQUExQjs7QUFFQWdiLFdBQVN0RCxJQUFULENBQWV1RCxNQUFmOztBQUVBeEQsUUFBTUksTUFBTjtBQUVBOztBQUVELFVBQVMyRixhQUFULENBQXdCaFcsS0FBeEIsRUFBZ0M7O0FBRS9COztBQUVBOztBQUVELFVBQVNpVyxnQkFBVCxDQUEyQmpXLEtBQTNCLEVBQW1DOztBQUVsQzs7QUFFQSxNQUFLQSxNQUFNd1UsTUFBTixHQUFlLENBQXBCLEVBQXdCOztBQUV2QmMsWUFBVXhCLGNBQVY7QUFFQSxHQUpELE1BSU8sSUFBSzlULE1BQU13VSxNQUFOLEdBQWUsQ0FBcEIsRUFBd0I7O0FBRTlCWSxXQUFTdEIsY0FBVDtBQUVBOztBQUVEN0QsUUFBTUksTUFBTjtBQUVBOztBQUVELFVBQVM2RixhQUFULENBQXdCbFcsS0FBeEIsRUFBZ0M7O0FBRS9COztBQUVBLFVBQVNBLE1BQU1HLE9BQWY7O0FBRUMsUUFBSzhQLE1BQU01YixJQUFOLENBQVd3YSxFQUFoQjtBQUNDeUYsUUFBSyxDQUFMLEVBQVFyRSxNQUFNekIsV0FBZDtBQUNBeUIsVUFBTUksTUFBTjtBQUNBOztBQUVELFFBQUtKLE1BQU01YixJQUFOLENBQVcwYSxNQUFoQjtBQUNDdUYsUUFBSyxDQUFMLEVBQVEsQ0FBRXJFLE1BQU16QixXQUFoQjtBQUNBeUIsVUFBTUksTUFBTjtBQUNBOztBQUVELFFBQUtKLE1BQU01YixJQUFOLENBQVd1YSxJQUFoQjtBQUNDMEYsUUFBS3JFLE1BQU16QixXQUFYLEVBQXdCLENBQXhCO0FBQ0F5QixVQUFNSSxNQUFOO0FBQ0E7O0FBRUQsUUFBS0osTUFBTTViLElBQU4sQ0FBV3lhLEtBQWhCO0FBQ0N3RixRQUFLLENBQUVyRSxNQUFNekIsV0FBYixFQUEwQixDQUExQjtBQUNBeUIsVUFBTUksTUFBTjtBQUNBOztBQXBCRjtBQXdCQTs7QUFFRCxVQUFTOEYsc0JBQVQsQ0FBaUNuVyxLQUFqQyxFQUF5Qzs7QUFFeEM7O0FBRUFvVCxjQUFZN0wsR0FBWixDQUFpQnZILE1BQU1vVyxPQUFOLENBQWUsQ0FBZixFQUFtQkMsS0FBcEMsRUFBMkNyVyxNQUFNb1csT0FBTixDQUFlLENBQWYsRUFBbUJFLEtBQTlEO0FBRUE7O0FBRUQsVUFBU0MscUJBQVQsQ0FBZ0N2VyxLQUFoQyxFQUF3Qzs7QUFFdkM7O0FBRUEsTUFBSXdXLEtBQUt4VyxNQUFNb1csT0FBTixDQUFlLENBQWYsRUFBbUJDLEtBQW5CLEdBQTJCclcsTUFBTW9XLE9BQU4sQ0FBZSxDQUFmLEVBQW1CQyxLQUF2RDtBQUNBLE1BQUlJLEtBQUt6VyxNQUFNb1csT0FBTixDQUFlLENBQWYsRUFBbUJFLEtBQW5CLEdBQTJCdFcsTUFBTW9XLE9BQU4sQ0FBZSxDQUFmLEVBQW1CRSxLQUF2RDs7QUFFQSxNQUFJckMsV0FBVzdkLEtBQUtpQyxJQUFMLENBQVdtZSxLQUFLQSxFQUFMLEdBQVVDLEtBQUtBLEVBQTFCLENBQWY7O0FBRUE5QyxhQUFXcE0sR0FBWCxDQUFnQixDQUFoQixFQUFtQjBNLFFBQW5CO0FBRUE7O0FBRUQsVUFBU3lDLG1CQUFULENBQThCMVcsS0FBOUIsRUFBc0M7O0FBRXJDOztBQUVBd1QsV0FBU2pNLEdBQVQsQ0FBY3ZILE1BQU1vVyxPQUFOLENBQWUsQ0FBZixFQUFtQkMsS0FBakMsRUFBd0NyVyxNQUFNb1csT0FBTixDQUFlLENBQWYsRUFBbUJFLEtBQTNEO0FBRUE7O0FBRUQsVUFBU0sscUJBQVQsQ0FBZ0MzVyxLQUFoQyxFQUF3Qzs7QUFFdkM7O0FBRUFzVCxZQUFVL0wsR0FBVixDQUFldkgsTUFBTW9XLE9BQU4sQ0FBZSxDQUFmLEVBQW1CQyxLQUFsQyxFQUF5Q3JXLE1BQU1vVyxPQUFOLENBQWUsQ0FBZixFQUFtQkUsS0FBNUQ7QUFDQS9DLGNBQVlzQyxVQUFaLENBQXdCdkMsU0FBeEIsRUFBbUNGLFdBQW5DOztBQUVBLE1BQUlxQixVQUFVeEUsTUFBTTVDLFVBQU4sS0FBcUJqYSxRQUFyQixHQUFnQzZjLE1BQU01QyxVQUFOLENBQWlCN0MsSUFBakQsR0FBd0R5RixNQUFNNUMsVUFBNUU7O0FBRUE7QUFDQWdFLGFBQVksSUFBSWpiLEtBQUsyQixFQUFULEdBQWN3YixZQUFZaGIsQ0FBMUIsR0FBOEJrYyxRQUFRaEssV0FBdEMsR0FBb0R3RixNQUFNM0IsV0FBdEU7O0FBRUE7QUFDQXlGLFdBQVUsSUFBSTNkLEtBQUsyQixFQUFULEdBQWN3YixZQUFZL2EsQ0FBMUIsR0FBOEJpYyxRQUFRL0osWUFBdEMsR0FBcUR1RixNQUFNM0IsV0FBckU7O0FBRUE4RSxjQUFZbEQsSUFBWixDQUFrQm9ELFNBQWxCOztBQUVBckQsUUFBTUksTUFBTjtBQUVBOztBQUVELFVBQVN1RyxvQkFBVCxDQUErQjVXLEtBQS9CLEVBQXVDOztBQUV0Qzs7QUFFQSxNQUFJd1csS0FBS3hXLE1BQU1vVyxPQUFOLENBQWUsQ0FBZixFQUFtQkMsS0FBbkIsR0FBMkJyVyxNQUFNb1csT0FBTixDQUFlLENBQWYsRUFBbUJDLEtBQXZEO0FBQ0EsTUFBSUksS0FBS3pXLE1BQU1vVyxPQUFOLENBQWUsQ0FBZixFQUFtQkUsS0FBbkIsR0FBMkJ0VyxNQUFNb1csT0FBTixDQUFlLENBQWYsRUFBbUJFLEtBQXZEOztBQUVBLE1BQUlyQyxXQUFXN2QsS0FBS2lDLElBQUwsQ0FBV21lLEtBQUtBLEVBQUwsR0FBVUMsS0FBS0EsRUFBMUIsQ0FBZjs7QUFFQTdDLFdBQVNyTSxHQUFULENBQWMsQ0FBZCxFQUFpQjBNLFFBQWpCOztBQUVBSixhQUFXZ0MsVUFBWCxDQUF1QmpDLFFBQXZCLEVBQWlDRCxVQUFqQzs7QUFFQSxNQUFLRSxXQUFXcmIsQ0FBWCxHQUFlLENBQXBCLEVBQXdCOztBQUV2QjhjLFlBQVV4QixjQUFWO0FBRUEsR0FKRCxNQUlPLElBQUtELFdBQVdyYixDQUFYLEdBQWUsQ0FBcEIsRUFBd0I7O0FBRTlCNGMsV0FBU3RCLGNBQVQ7QUFFQTs7QUFFREgsYUFBV3pELElBQVgsQ0FBaUIwRCxRQUFqQjs7QUFFQTNELFFBQU1JLE1BQU47QUFFQTs7QUFFRCxVQUFTd0csa0JBQVQsQ0FBNkI3VyxLQUE3QixFQUFxQzs7QUFFcEM7O0FBRUF5VCxTQUFPbE0sR0FBUCxDQUFZdkgsTUFBTW9XLE9BQU4sQ0FBZSxDQUFmLEVBQW1CQyxLQUEvQixFQUFzQ3JXLE1BQU1vVyxPQUFOLENBQWUsQ0FBZixFQUFtQkUsS0FBekQ7O0FBRUE1QyxXQUFTbUMsVUFBVCxDQUFxQnBDLE1BQXJCLEVBQTZCRCxRQUE3Qjs7QUFFQWMsTUFBS1osU0FBU25iLENBQWQsRUFBaUJtYixTQUFTbGIsQ0FBMUI7O0FBRUFnYixXQUFTdEQsSUFBVCxDQUFldUQsTUFBZjs7QUFFQXhELFFBQU1JLE1BQU47QUFFQTs7QUFFRCxVQUFTeUcsY0FBVCxDQUF5QjlXLEtBQXpCLEVBQWlDLENBSWhDOztBQUZBOztBQUlEO0FBQ0E7QUFDQTs7QUFFQSxVQUFTb1MsV0FBVCxDQUFzQnBTLEtBQXRCLEVBQThCOztBQUU3QixNQUFLaVEsTUFBTTNDLE9BQU4sS0FBa0IsS0FBdkIsRUFBK0I7O0FBRS9CdE4sUUFBTVQsY0FBTjs7QUFFQSxNQUFLUyxNQUFNK1csTUFBTixLQUFpQjlHLE1BQU1qQixZQUFOLENBQW1CQyxLQUF6QyxFQUFpRDs7QUFFaEQsT0FBS2dCLE1BQU01QixZQUFOLEtBQXVCLEtBQTVCLEVBQW9DOztBQUVwQ2tILHlCQUF1QnZWLEtBQXZCOztBQUVBc1EsV0FBUUMsTUFBTXVDLE1BQWQ7QUFFQSxHQVJELE1BUU8sSUFBSzlTLE1BQU0rVyxNQUFOLEtBQWlCOUcsTUFBTWpCLFlBQU4sQ0FBbUJHLElBQXpDLEVBQWdEOztBQUV0RCxPQUFLYyxNQUFNOUIsVUFBTixLQUFxQixLQUExQixFQUFrQzs7QUFFbEN1SCx3QkFBc0IxVixLQUF0Qjs7QUFFQXNRLFdBQVFDLE1BQU13QyxLQUFkO0FBRUEsR0FSTSxNQVFBLElBQUsvUyxNQUFNK1csTUFBTixLQUFpQjlHLE1BQU1qQixZQUFOLENBQW1CSyxHQUF6QyxFQUErQzs7QUFFckQsT0FBS1ksTUFBTTFCLFNBQU4sS0FBb0IsS0FBekIsRUFBaUM7O0FBRWpDb0gsc0JBQW9CM1YsS0FBcEI7O0FBRUFzUSxXQUFRQyxNQUFNbEIsR0FBZDtBQUVBOztBQUVELE1BQUtpQixVQUFVQyxNQUFNQyxJQUFyQixFQUE0Qjs7QUFFM0JwZCxZQUFTaU4sZ0JBQVQsQ0FBMkIsV0FBM0IsRUFBd0NvUyxXQUF4QyxFQUFxRCxLQUFyRDtBQUNBcmYsWUFBU2lOLGdCQUFULENBQTJCLFNBQTNCLEVBQXNDcVMsU0FBdEMsRUFBaUQsS0FBakQ7O0FBRUF6QyxTQUFNRSxhQUFOLENBQXFCeUMsVUFBckI7QUFFQTtBQUVEOztBQUVELFVBQVNILFdBQVQsQ0FBc0J6UyxLQUF0QixFQUE4Qjs7QUFFN0IsTUFBS2lRLE1BQU0zQyxPQUFOLEtBQWtCLEtBQXZCLEVBQStCOztBQUUvQnROLFFBQU1ULGNBQU47O0FBRUEsTUFBSytRLFVBQVVDLE1BQU11QyxNQUFyQixFQUE4Qjs7QUFFN0IsT0FBSzdDLE1BQU01QixZQUFOLEtBQXVCLEtBQTVCLEVBQW9DOztBQUVwQ3VILHlCQUF1QjVWLEtBQXZCO0FBRUEsR0FORCxNQU1PLElBQUtzUSxVQUFVQyxNQUFNd0MsS0FBckIsRUFBNkI7O0FBRW5DLE9BQUs5QyxNQUFNOUIsVUFBTixLQUFxQixLQUExQixFQUFrQzs7QUFFbEMySCx3QkFBc0I5VixLQUF0QjtBQUVBLEdBTk0sTUFNQSxJQUFLc1EsVUFBVUMsTUFBTWxCLEdBQXJCLEVBQTJCOztBQUVqQyxPQUFLWSxNQUFNMUIsU0FBTixLQUFvQixLQUF6QixFQUFpQzs7QUFFakN3SCxzQkFBb0IvVixLQUFwQjtBQUVBO0FBRUQ7O0FBRUQsVUFBUzBTLFNBQVQsQ0FBb0IxUyxLQUFwQixFQUE0Qjs7QUFFM0IsTUFBS2lRLE1BQU0zQyxPQUFOLEtBQWtCLEtBQXZCLEVBQStCOztBQUUvQjBJLGdCQUFlaFcsS0FBZjs7QUFFQTVNLFdBQVN1TixtQkFBVCxDQUE4QixXQUE5QixFQUEyQzhSLFdBQTNDLEVBQXdELEtBQXhEO0FBQ0FyZixXQUFTdU4sbUJBQVQsQ0FBOEIsU0FBOUIsRUFBeUMrUixTQUF6QyxFQUFvRCxLQUFwRDs7QUFFQXpDLFFBQU1FLGFBQU4sQ0FBcUIwQyxRQUFyQjs7QUFFQXZDLFVBQVFDLE1BQU1DLElBQWQ7QUFFQTs7QUFFRCxVQUFTNkIsWUFBVCxDQUF1QnJTLEtBQXZCLEVBQStCOztBQUU5QixNQUFLaVEsTUFBTTNDLE9BQU4sS0FBa0IsS0FBbEIsSUFBMkIyQyxNQUFNOUIsVUFBTixLQUFxQixLQUFoRCxJQUEyRG1DLFVBQVVDLE1BQU1DLElBQWhCLElBQXdCRixVQUFVQyxNQUFNdUMsTUFBeEcsRUFBbUg7O0FBRW5IOVMsUUFBTVQsY0FBTjtBQUNBUyxRQUFNZ1gsZUFBTjs7QUFFQWYsbUJBQWtCalcsS0FBbEI7O0FBRUFpUSxRQUFNRSxhQUFOLENBQXFCeUMsVUFBckIsRUFUOEIsQ0FTSztBQUNuQzNDLFFBQU1FLGFBQU4sQ0FBcUIwQyxRQUFyQjtBQUVBOztBQUVELFVBQVNGLFNBQVQsQ0FBb0IzUyxLQUFwQixFQUE0Qjs7QUFFM0IsTUFBS2lRLE1BQU0zQyxPQUFOLEtBQWtCLEtBQWxCLElBQTJCMkMsTUFBTXRCLFVBQU4sS0FBcUIsS0FBaEQsSUFBeURzQixNQUFNMUIsU0FBTixLQUFvQixLQUFsRixFQUEwRjs7QUFFMUYySCxnQkFBZWxXLEtBQWY7QUFFQTs7QUFFRCxVQUFTc1MsWUFBVCxDQUF1QnRTLEtBQXZCLEVBQStCOztBQUU5QixNQUFLaVEsTUFBTTNDLE9BQU4sS0FBa0IsS0FBdkIsRUFBK0I7O0FBRS9CLFVBQVN0TixNQUFNb1csT0FBTixDQUFjOWdCLE1BQXZCOztBQUVDLFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUsyYSxNQUFNNUIsWUFBTixLQUF1QixLQUE1QixFQUFvQzs7QUFFcEM4SCwyQkFBd0JuVyxLQUF4Qjs7QUFFQXNRLFlBQVFDLE1BQU15QyxZQUFkOztBQUVBOztBQUVELFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUsvQyxNQUFNOUIsVUFBTixLQUFxQixLQUExQixFQUFrQzs7QUFFbENvSSwwQkFBdUJ2VyxLQUF2Qjs7QUFFQXNRLFlBQVFDLE1BQU0wQyxXQUFkOztBQUVBOztBQUVELFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUtoRCxNQUFNMUIsU0FBTixLQUFvQixLQUF6QixFQUFpQzs7QUFFakNtSSx3QkFBcUIxVyxLQUFyQjs7QUFFQXNRLFlBQVFDLE1BQU0yQyxTQUFkOztBQUVBOztBQUVEOztBQUVDNUMsWUFBUUMsTUFBTUMsSUFBZDs7QUFsQ0Y7O0FBc0NBLE1BQUtGLFVBQVVDLE1BQU1DLElBQXJCLEVBQTRCOztBQUUzQlAsU0FBTUUsYUFBTixDQUFxQnlDLFVBQXJCO0FBRUE7QUFFRDs7QUFFRCxVQUFTSixXQUFULENBQXNCeFMsS0FBdEIsRUFBOEI7O0FBRTdCLE1BQUtpUSxNQUFNM0MsT0FBTixLQUFrQixLQUF2QixFQUErQjs7QUFFL0J0TixRQUFNVCxjQUFOO0FBQ0FTLFFBQU1nWCxlQUFOOztBQUVBLFVBQVNoWCxNQUFNb1csT0FBTixDQUFjOWdCLE1BQXZCOztBQUVDLFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUsyYSxNQUFNNUIsWUFBTixLQUF1QixLQUE1QixFQUFvQztBQUNwQyxRQUFLaUMsVUFBVUMsTUFBTXlDLFlBQXJCLEVBQW9DLE9BSHJDLENBRzZDOztBQUU1QzJELDBCQUF1QjNXLEtBQXZCOztBQUVBOztBQUVELFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUtpUSxNQUFNOUIsVUFBTixLQUFxQixLQUExQixFQUFrQztBQUNsQyxRQUFLbUMsVUFBVUMsTUFBTTBDLFdBQXJCLEVBQW1DLE9BSHBDLENBRzRDOztBQUUzQzJELHlCQUFzQjVXLEtBQXRCOztBQUVBOztBQUVELFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUtpUSxNQUFNMUIsU0FBTixLQUFvQixLQUF6QixFQUFpQztBQUNqQyxRQUFLK0IsVUFBVUMsTUFBTTJDLFNBQXJCLEVBQWlDLE9BSGxDLENBRzBDOztBQUV6QzJELHVCQUFvQjdXLEtBQXBCOztBQUVBOztBQUVEOztBQUVDc1EsWUFBUUMsTUFBTUMsSUFBZDs7QUEvQkY7QUFtQ0E7O0FBRUQsVUFBUytCLFVBQVQsQ0FBcUJ2UyxLQUFyQixFQUE2Qjs7QUFFNUIsTUFBS2lRLE1BQU0zQyxPQUFOLEtBQWtCLEtBQXZCLEVBQStCOztBQUUvQndKLGlCQUFnQjlXLEtBQWhCOztBQUVBaVEsUUFBTUUsYUFBTixDQUFxQjBDLFFBQXJCOztBQUVBdkMsVUFBUUMsTUFBTUMsSUFBZDtBQUVBOztBQUVELFVBQVMyQixhQUFULENBQXdCblMsS0FBeEIsRUFBZ0M7O0FBRS9CQSxRQUFNVCxjQUFOO0FBRUE7O0FBRUQ7O0FBRUEwUSxPQUFNNUMsVUFBTixDQUFpQmhOLGdCQUFqQixDQUFtQyxhQUFuQyxFQUFrRDhSLGFBQWxELEVBQWlFLEtBQWpFOztBQUVBbEMsT0FBTTVDLFVBQU4sQ0FBaUJoTixnQkFBakIsQ0FBbUMsV0FBbkMsRUFBZ0QrUixXQUFoRCxFQUE2RCxLQUE3RDtBQUNBbkMsT0FBTTVDLFVBQU4sQ0FBaUJoTixnQkFBakIsQ0FBbUMsT0FBbkMsRUFBNENnUyxZQUE1QyxFQUEwRCxLQUExRDs7QUFFQXBDLE9BQU01QyxVQUFOLENBQWlCaE4sZ0JBQWpCLENBQW1DLFlBQW5DLEVBQWlEaVMsWUFBakQsRUFBK0QsS0FBL0Q7QUFDQXJDLE9BQU01QyxVQUFOLENBQWlCaE4sZ0JBQWpCLENBQW1DLFVBQW5DLEVBQStDa1MsVUFBL0MsRUFBMkQsS0FBM0Q7QUFDQXRDLE9BQU01QyxVQUFOLENBQWlCaE4sZ0JBQWpCLENBQW1DLFdBQW5DLEVBQWdEbVMsV0FBaEQsRUFBNkQsS0FBN0Q7O0FBRUFwZ0IsUUFBT2lPLGdCQUFQLENBQXlCLFNBQXpCLEVBQW9Dc1MsU0FBcEMsRUFBK0MsS0FBL0M7O0FBRUE7O0FBRUEsTUFBS3RDLE1BQUw7QUFFQSxDQXgyQkQ7O0FBMDJCQTFFLE1BQU13QixhQUFOLENBQW9CN08sU0FBcEIsR0FBZ0NELE9BQU80WSxNQUFQLENBQWV0TCxNQUFNdUwsZUFBTixDQUFzQjVZLFNBQXJDLENBQWhDO0FBQ0FxTixNQUFNd0IsYUFBTixDQUFvQjdPLFNBQXBCLENBQThCcE0sV0FBOUIsR0FBNEN5WixNQUFNd0IsYUFBbEQ7O0FBRUE5TyxPQUFPOFksZ0JBQVAsQ0FBeUJ4TCxNQUFNd0IsYUFBTixDQUFvQjdPLFNBQTdDLEVBQXdEOztBQUV2RDhZLFNBQVE7O0FBRVA5UCxPQUFLLFlBQVk7O0FBRWhCb0IsV0FBUXlNLElBQVIsQ0FBYywwREFBZDtBQUNBLFVBQU8sS0FBSzVILE1BQVo7QUFFQTs7QUFQTSxFQUYrQzs7QUFhdkQ7O0FBRUE4SixTQUFROztBQUVQL1AsT0FBSyxZQUFZOztBQUVoQm9CLFdBQVF5TSxJQUFSLENBQWMsNEVBQWQ7QUFDQSxVQUFPLENBQUUsS0FBS2hILFVBQWQ7QUFFQSxHQVBNOztBQVNQNUcsT0FBSyxVQUFXdFMsS0FBWCxFQUFtQjs7QUFFdkJ5VCxXQUFReU0sSUFBUixDQUFjLDRFQUFkO0FBQ0EsUUFBS2hILFVBQUwsR0FBa0IsQ0FBRWxaLEtBQXBCO0FBRUE7O0FBZE0sRUFmK0M7O0FBaUN2RHFpQixXQUFVOztBQUVUaFEsT0FBSyxZQUFZOztBQUVoQm9CLFdBQVF5TSxJQUFSLENBQWMsZ0ZBQWQ7QUFDQSxVQUFPLENBQUUsS0FBSzlHLFlBQWQ7QUFFQSxHQVBROztBQVNUOUcsT0FBSyxVQUFXdFMsS0FBWCxFQUFtQjs7QUFFdkJ5VCxXQUFReU0sSUFBUixDQUFjLGdGQUFkO0FBQ0EsUUFBSzlHLFlBQUwsR0FBb0IsQ0FBRXBaLEtBQXRCO0FBRUE7O0FBZFEsRUFqQzZDOztBQW1EdkRzaUIsUUFBTzs7QUFFTmpRLE9BQUssWUFBWTs7QUFFaEJvQixXQUFReU0sSUFBUixDQUFjLDBFQUFkO0FBQ0EsVUFBTyxDQUFFLEtBQUs1RyxTQUFkO0FBRUEsR0FQSzs7QUFTTmhILE9BQUssVUFBV3RTLEtBQVgsRUFBbUI7O0FBRXZCeVQsV0FBUXlNLElBQVIsQ0FBYywwRUFBZDtBQUNBLFFBQUs1RyxTQUFMLEdBQWlCLENBQUV0WixLQUFuQjtBQUVBOztBQWRLLEVBbkRnRDs7QUFxRXZEdWlCLFNBQVE7O0FBRVBsUSxPQUFLLFlBQVk7O0FBRWhCb0IsV0FBUXlNLElBQVIsQ0FBYyw0RUFBZDtBQUNBLFVBQU8sQ0FBRSxLQUFLeEcsVUFBZDtBQUVBLEdBUE07O0FBU1BwSCxPQUFLLFVBQVd0UyxLQUFYLEVBQW1COztBQUV2QnlULFdBQVF5TSxJQUFSLENBQWMsNEVBQWQ7QUFDQSxRQUFLeEcsVUFBTCxHQUFrQixDQUFFMVosS0FBcEI7QUFFQTs7QUFkTSxFQXJFK0M7O0FBdUZ2RHdpQixlQUFlOztBQUVkblEsT0FBSyxZQUFZOztBQUVoQm9CLFdBQVF5TSxJQUFSLENBQWMscUZBQWQ7QUFDQSxVQUFPLENBQUUsS0FBS2xILGFBQWQ7QUFFQSxHQVBhOztBQVNkMUcsT0FBSyxVQUFXdFMsS0FBWCxFQUFtQjs7QUFFdkJ5VCxXQUFReU0sSUFBUixDQUFjLHFGQUFkO0FBQ0EsUUFBS2xILGFBQUwsR0FBcUIsQ0FBRWhaLEtBQXZCO0FBRUE7O0FBZGEsRUF2RndDOztBQXlHdkR5aUIsdUJBQXVCOztBQUV0QnBRLE9BQUssWUFBWTs7QUFFaEJvQixXQUFReU0sSUFBUixDQUFjLDBGQUFkO0FBQ0EsVUFBTyxLQUFLakgsYUFBWjtBQUVBLEdBUHFCOztBQVN0QjNHLE9BQUssVUFBV3RTLEtBQVgsRUFBbUI7O0FBRXZCeVQsV0FBUXlNLElBQVIsQ0FBYywwRkFBZDtBQUNBLFFBQUtqSCxhQUFMLEdBQXFCalosS0FBckI7QUFFQTs7QUFkcUI7O0FBekdnQyxDQUF4RCxFOzs7Ozs7O0FDNTNCQTtBQUFBOzs7Ozs7OztBQVFBOztBQUVBOztBQUVlLE1BQU0waUIsS0FBTixTQUFvQiw0REFBcEIsQ0FBeUI7O0FBRXRDemxCLGVBQWM7O0FBRVo7O0FBRUYsT0FBSzZhLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxPQUFLNkssT0FBTCxHQUFlLElBQWY7QUFDQSxPQUFLaEwsSUFBTCxHQUFZLElBQVo7O0FBRUEsT0FBS3BCLFdBQUwsR0FBbUIsS0FBS0MsWUFBTCxDQUFrQm5ZLElBQWxCLENBQXVCLElBQXZCLENBQW5CO0FBQ0EsT0FBS3VrQixVQUFMLEdBQWtCLEtBQUtDLFdBQUwsQ0FBaUJ4a0IsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbEI7QUFDQSxPQUFLdVosTUFBTCxHQUFjLEtBQUtrTCxPQUFMLENBQWF6a0IsSUFBYixDQUFrQixJQUFsQixDQUFkO0FBQ0EsT0FBSzBrQixNQUFMLEdBQWMsS0FBS0MsT0FBTCxDQUFhM2tCLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZDtBQUVDOztBQUVGbVksY0FBYXlNLEtBQWIsRUFBb0I5VyxRQUFwQixFQUE4QjtBQUM3QixRQUFNK1csU0FBUyxJQUFJeE0sTUFBTXlNLGFBQVYsRUFBZjtBQUNBRCxTQUFPRSxJQUFQLENBQVlILEtBQVosRUFBb0JOLE9BQUQsSUFBYTtBQUMvQkEsV0FBUVUsU0FBUixHQUFvQjNNLE1BQU00TSxhQUExQjtBQUNHWCxXQUFRWSxTQUFSLEdBQW9CN00sTUFBTTRNLGFBQTFCO0FBQ0EsUUFBS1gsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBS2hMLElBQUwsR0FBWSxLQUFLaUwsVUFBTCxFQUFaO0FBQ0F6VztBQUNELEdBTkg7QUFPQTs7QUFFRDBXLGVBQWM7QUFDYixPQUFLL0ssUUFBTCxHQUFnQjtBQUNmQyxlQUFZO0FBQ1hySyxVQUFNLElBREs7QUFFWDFOLFdBQU8sSUFBSTBXLE1BQU0wSCxPQUFWLENBQWtCamdCLFNBQVNvWCxJQUFULENBQWNDLFdBQWhDLEVBQTZDclgsU0FBU29YLElBQVQsQ0FBY0UsWUFBM0Q7QUFGSSxJQURHO0FBS2YrTixvQkFBaUI7QUFDaEI5VixVQUFNLElBRFU7QUFFaEIxTixXQUFPLElBQUkwVyxNQUFNMEgsT0FBVixDQUFrQixJQUFsQixFQUF3QixJQUF4QjtBQUZTLElBTEY7QUFTZnVFLFlBQVM7QUFDUmpWLFVBQU0sR0FERTtBQUVSMU4sV0FBTyxLQUFLMmlCO0FBRko7QUFUTSxHQUFoQjtBQWNBLFNBQU8sSUFBSWpNLE1BQU0rTSxJQUFWLENBQ04sSUFBSS9NLE1BQU1nTixtQkFBVixDQUE4QixDQUE5QixFQUFpQyxDQUFqQyxDQURNLEVBRU4sSUFBSWhOLE1BQU1pTixpQkFBVixDQUE0QjtBQUMzQjdMLGFBQVUsS0FBS0EsUUFEWTtBQUUzQjhMLGlCQUFjLG1CQUFBN21CLENBQVEsRUFBUixDQUZhO0FBRzNCOG1CLG1CQUFnQixtQkFBQTltQixDQUFRLEVBQVI7QUFIVyxHQUE1QixDQUZNLENBQVA7QUFRQTs7QUFHQTs7OztBQUlEK2xCLFNBQVF4YixJQUFSLEVBQWM7O0FBRWIsTUFBSSxLQUFLd2MsSUFBVCxFQUFlO0FBQ2YsT0FBS2hNLFFBQUwsQ0FBY3hRLElBQWQsQ0FBbUJ0SCxLQUFuQixJQUE0QnNILE9BQU8sS0FBS3ljLFFBQXhDO0FBQ0EsTUFBSSxLQUFLak0sUUFBTCxDQUFjeFEsSUFBZCxDQUFtQnRILEtBQW5CLEdBQTJCLENBQS9CLEVBQWtDO0FBQ2pDLFFBQUs4WCxRQUFMLENBQWN4USxJQUFkLENBQW1CdEgsS0FBbkIsR0FBMkIsQ0FBM0I7QUFDQSxRQUFLZ2tCLFFBQUwsR0FBZ0IsS0FBS0MsUUFBckI7QUFDQSxRQUFLbk0sUUFBTCxDQUFjb00sT0FBZCxDQUFzQmxrQixLQUF0QixHQUE4QixLQUFLbWtCLFFBQUwsQ0FBYyxLQUFLRixRQUFuQixDQUE5QjtBQUNBLFVBQU8sS0FBS0EsUUFBTCxJQUFpQixLQUFLRCxRQUE3QixFQUF1QztBQUN0QyxTQUFLQyxRQUFMLEdBQWdCOWlCLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0gsTUFBTCxLQUFnQixLQUFLbWpCLFFBQUwsQ0FBYzlqQixNQUF6QyxDQUFoQjtBQUNBO0FBQ0QsUUFBS3lYLFFBQUwsQ0FBY3NNLE9BQWQsQ0FBc0Jwa0IsS0FBdEIsR0FBOEIsS0FBS21rQixRQUFMLENBQWMsS0FBS0YsUUFBbkIsQ0FBOUI7QUFDQTtBQUNBOztBQUVGakIsV0FBUztBQUNSLE9BQUtsTCxRQUFMLENBQWNDLFVBQWQsQ0FBeUIvWCxLQUF6QixDQUErQnNTLEdBQS9CLENBQW1DblUsU0FBU29YLElBQVQsQ0FBY0MsV0FBakQsRUFBOERyWCxTQUFTb1gsSUFBVCxDQUFjRSxZQUE1RTtBQUNBOztBQTNFc0MsQzs7Ozs7Ozs7QUNaeEMsNkRBQTZELG9CQUFvQixxQkFBcUIscUJBQXFCLGVBQWUsd0NBQXdDLEdBQUcsQzs7Ozs7O0FDQXJMLHdDQUF3QywrQ0FBK0MsK0JBQStCLDRCQUE0QixxQkFBcUIscUJBQXFCLHVOQUF1TixrSUFBa0ksNENBQTRDLEdBQUcsQzs7Ozs7OztBQ0Fwa0I7QUFBQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFQTs7QUFFZSxNQUFNUixVQUFOLENBQWlCOztBQUU5QmhZLGdCQUFhOztBQUVYLFNBQUtTLEtBQUw7QUFDQSxTQUFLQyxTQUFMO0FBRUQ7O0FBRURELFVBQVE7O0FBRU47QUFDQTs7QUFFRDs7QUFFRE8sV0FBUzs7QUFFUGIsT0FBR0UsRUFBSCxDQUFNK1gsTUFBTixHQUFlLElBQUksK0RBQUosRUFBZjs7QUFFQWpZLE9BQUdFLEVBQUgsQ0FBTStYLE1BQU4sQ0FBYW5ZLElBQWI7QUFHRDs7QUFFRCxTQUFPaVksR0FBUCxHQUFhOztBQUViOztBQUVDOztBQUVEeFgsY0FBWTs7QUFFVk8sTUFBRWYsTUFBRixFQUFVaUIsRUFBVixDQUFhLE1BQWIsRUFBcUIsS0FBS0gsTUFBTCxDQUFZSSxJQUFaLENBQWlCLElBQWpCLENBQXJCO0FBRUQ7O0FBbkM2QixDOzs7Ozs7Ozs7QUNkaEM7QUFBQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFZSxNQUFNZ21CLE1BQU4sU0FBcUIsNERBQXJCLENBQTBCOztBQUV2Q3BuQixnQkFBYzs7QUFFWjs7QUFFQSxTQUFLNmEsUUFBTCxHQUFnQjtBQUNkd00sY0FBUSxFQUFFNVcsTUFBTSxHQUFSLEVBQWExTixPQUFPLEdBQXBCLEVBRE07QUFFZHVrQixvQkFBYyxFQUFFN1csTUFBTSxJQUFSLEVBQWMxTixPQUFPLElBQUkwVyxNQUFNMEgsT0FBVixFQUFyQixFQUZBO0FBR2RvRyxlQUFTLEVBQUU5VyxNQUFNLElBQVIsRUFBYzFOLE9BQU8sSUFBSTBXLE1BQU0wSCxPQUFWLEVBQXJCO0FBSEssS0FBaEI7QUFLQSxTQUFLL0ksTUFBTCxHQUFjbFgsU0FBU21YLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBZDs7QUFFQSxTQUFLeEwsS0FBTCxHQUFhM00sT0FBT2tILFVBQXBCO0FBQ0EsU0FBSzJGLE1BQUwsR0FBYzdNLE9BQU9tSCxXQUFyQjtBQUNBOztBQUVBLFNBQUtvUixNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNGLFNBQUs2TyxJQUFMLEdBQVksSUFBWjs7QUFFRSxTQUFLNU8sWUFBTCxHQUFvQixLQUFLQyxhQUFMLENBQW1CelgsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBcEI7QUFDQSxTQUFLMFgsY0FBTCxHQUFzQixLQUFLQyxlQUFMLENBQXFCM1gsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdEI7QUFDQSxTQUFLNFgsV0FBTCxHQUFtQixLQUFLQyxZQUFMLENBQWtCN1gsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbkI7QUFDQSxTQUFLcW1CLFlBQUwsR0FBb0IsS0FBS0MsYUFBTCxDQUFtQnRtQixJQUFuQixDQUF3QixJQUF4QixDQUFwQjtBQUNBLFNBQUt1bUIsYUFBTCxHQUFxQixLQUFLQyxjQUFMLENBQW9CeG1CLElBQXBCLENBQXlCLElBQXpCLENBQXJCOztBQUVBLFNBQUt5bUIsV0FBTCxHQUFtQixLQUFLQyxZQUFMLENBQWtCMW1CLElBQWxCLENBQXVCLElBQXZCLENBQW5COztBQUVBLFNBQUt1WixNQUFMLEdBQWMsS0FBS2tMLE9BQUwsQ0FBYXprQixJQUFiLENBQWtCLElBQWxCLENBQWQ7O0FBRUEsU0FBSzhYLFFBQUwsR0FBZ0IsS0FBS0MsU0FBTCxDQUFlL1gsSUFBZixDQUFvQixJQUFwQixDQUFoQjs7QUFFQSxTQUFLZ1ksTUFBTCxHQUFjLEtBQUtDLE9BQUwsQ0FBYWpZLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZDtBQUVEOztBQUVEOzs7QUFHQW5CLFNBQU07O0FBRUosU0FBSzJZLFlBQUw7QUFDRixTQUFLSSxXQUFMO0FBQ0UsU0FBS0YsY0FBTDs7QUFFRixTQUFLNk8sYUFBTDtBQUNBOztBQUVFLFNBQUtFLFdBQUw7O0FBRUEsU0FBS3pPLE1BQUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0FsWixXQUFPaU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsTUFBTTtBQUN0QyxXQUFLK0ssUUFBTDtBQUNELEtBRkQsRUFFRyxLQUZIO0FBSUQ7O0FBRUQ7OztBQUdBTCxrQkFBZTs7QUFFYixTQUFLSixNQUFMLEdBQWMsSUFBSWdCLE1BQU1DLGlCQUFWLENBQTRCLEVBQTVCLEVBQWdDLEtBQUs3TSxLQUFMLEdBQWEsS0FBS0UsTUFBbEQsRUFBMEQsR0FBMUQsRUFBK0QsSUFBL0QsQ0FBZDtBQUNBLFNBQUswTCxNQUFMLENBQVlrQixRQUFaLENBQXFCdFQsQ0FBckIsR0FBeUIsQ0FBekI7QUFDQSxTQUFLb1MsTUFBTCxDQUFZa0IsUUFBWixDQUFxQnJULENBQXJCLEdBQXlCLENBQXpCO0FBQ0EsU0FBS21TLE1BQUwsQ0FBWWtCLFFBQVosQ0FBcUJDLENBQXJCLEdBQXlCLEdBQXpCOztBQUVBLFNBQUtuQixNQUFMLENBQVlvQixNQUFaLENBQW1CLElBQUlKLE1BQU1LLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsQ0FBbkI7QUFFRDs7QUFFRDs7O0FBR0FmLG9CQUFpQjs7QUFFakIsU0FBS0wsUUFBTCxHQUFnQixJQUFJZSxNQUFNTSxhQUFWLENBQXdCO0FBQ3BDQyxhQUFxQixLQURlO0FBRXBDQyxpQkFBcUIsS0FGZTtBQUdwQ0MsZUFBcUIsS0FIZTtBQUlwQ0MsYUFBcUIsSUFKZTtBQUtwQ0MsMEJBQXFCLEtBTGU7QUFNcENoQyxjQUFRLEtBQUtBO0FBTnVCLEtBQXhCLENBQWhCOztBQVNFO0FBQ0EsU0FBS00sUUFBTCxDQUFjMkIsYUFBZCxDQUE0QixRQUE1QjtBQUNBLFNBQUszQixRQUFMLENBQWM0QixhQUFkLENBQTRCcGEsT0FBT3FhLGdCQUFQLElBQTJCLENBQXZEO0FBQ0EsU0FBSzdCLFFBQUwsQ0FBYzhCLE9BQWQsQ0FBc0IsS0FBSzNOLEtBQTNCLEVBQWtDLEtBQUtFLE1BQXZDO0FBQ0E7QUFFRDs7QUFFRDs7O0FBR0FrTSxpQkFBYzs7QUFFZCxTQUFLTixLQUFMLEdBQWEsSUFBSWMsTUFBTWdCLEtBQVYsRUFBYjtBQUVDOztBQUVEOzs7O0FBSURpTixrQkFBZTs7QUFFWixRQUFJSyxlQUFlLElBQUl0TyxNQUFNdU8sV0FBVixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFuQjtBQUNBLFFBQUlDLGVBQWUsSUFBSXhPLE1BQU15TyxpQkFBVixDQUE0QjtBQUM3Q0MsYUFBTyxRQURzQztBQUU3Q0MsaUJBQVc7QUFGa0MsS0FBNUIsQ0FBbkI7O0FBS0EsU0FBS1osSUFBTCxHQUFZLElBQUkvTixNQUFNK00sSUFBVixDQUFldUIsWUFBZixFQUE2QkUsWUFBN0IsQ0FBWjtBQUNBLFNBQUtULElBQUwsQ0FBVTdOLFFBQVYsQ0FBbUJ0VCxDQUFuQixHQUF1QixDQUF2QjtBQUNBLFNBQUttaEIsSUFBTCxDQUFVN04sUUFBVixDQUFtQnJULENBQW5CLEdBQXVCLENBQXZCO0FBQ0EsU0FBS2toQixJQUFMLENBQVU3TixRQUFWLENBQW1CQyxDQUFuQixHQUF1QixDQUF2Qjs7QUFFQSxTQUFLakIsS0FBTCxDQUFXckIsR0FBWCxDQUFlLEtBQUtrUSxJQUFwQjtBQUVGOztBQUVETSxpQkFBYztBQUNYLFNBQUt0TyxLQUFMLEdBQWEsSUFBSUMsTUFBTStNLElBQVY7QUFDVDtBQUNBLFFBQUkvTSxNQUFNZ04sbUJBQVYsQ0FBOEIsQ0FBOUIsRUFBaUMsRUFBakMsRUFBcUMsRUFBckMsQ0FGUyxFQUdULElBQUloTixNQUFNNE8sY0FBVixDQUF5QjtBQUN2QnhOLGdCQUFVLEtBQUtBLFFBRFE7QUFFdkI4TCxvQkFBYyxtQkFBQTdtQixDQUFRLEVBQVIsQ0FGUztBQUd2QjhtQixzQkFBZ0IsbUJBQUE5bUIsQ0FBUSxFQUFSO0FBSE8sS0FBekIsQ0FIUyxDQUFiO0FBU0EsU0FBSzZZLEtBQUwsQ0FBV3JCLEdBQVgsQ0FBZSxLQUFLa0MsS0FBcEI7QUFDRDs7QUFFRDs7OztBQUlEcU0sWUFBVTtBQUNQLFFBQUl5QyxRQUFRLElBQUk3TyxNQUFNOE8sS0FBVixFQUFaO0FBQ0EsUUFBSWxlLE9BQU9pZSxNQUFNRSxRQUFOLEVBQVg7O0FBRUE7QUFDRDs7QUFFRDs7OztBQUlBblAsWUFBVTtBQUNSLFNBQUtzQixNQUFMO0FBQ0E5TCwwQkFBdUIsTUFBTTtBQUMzQixXQUFLdUssTUFBTDtBQUNELEtBRkQ7QUFHQTtBQUNBLFNBQUt5QixRQUFMLENBQWN3TSxNQUFkLENBQXFCdGtCLEtBQXJCLElBQThCLElBQTlCO0FBQ0EsU0FBSzJWLFFBQUwsQ0FBY2lDLE1BQWQsQ0FBcUIsS0FBS2hDLEtBQTFCLEVBQWlDLEtBQUtGLE1BQXRDO0FBQ0Q7O0FBRUQ7OztBQUdBVSxjQUFZO0FBQ1YsU0FBS1YsTUFBTCxDQUFZc0MsTUFBWixHQUFxQjdhLE9BQU9rSCxVQUFQLEdBQW9CbEgsT0FBT21ILFdBQWhEO0FBQ0EsU0FBS29SLE1BQUwsQ0FBWXVDLHNCQUFaO0FBQ0EsU0FBS3RDLFFBQUwsQ0FBYzhCLE9BQWQsQ0FBc0J0YSxPQUFPa0gsVUFBN0IsRUFBeUNsSCxPQUFPbUgsV0FBaEQ7QUFDRDs7QUFFRjs7O0FBR0F1Z0IsbUJBQWdCO0FBQ2YsU0FBS2EsUUFBTCxHQUFnQixJQUFJaFAsTUFBTXdCLGFBQVYsQ0FBd0IsS0FBS3hDLE1BQTdCLENBQWhCO0FBQ0EsU0FBS2dRLFFBQUwsQ0FBY2xNLFVBQWQsR0FBMkIsSUFBM0I7QUFDQSxRQUFJK0wsUUFBUSxJQUFJN08sTUFBTThPLEtBQVYsRUFBWjs7QUFFQSxRQUFJRyxRQUFRSixNQUFNRSxRQUFOLEVBQVo7QUFDQSxTQUFLQyxRQUFMLENBQWN0SyxNQUFkLENBQXFCdUssS0FBckI7QUFDQzs7QUFFRmhvQixjQUFZOztBQUVUTyxNQUFFZixNQUFGLEVBQVVpQixFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7QUFsTXNDLEM7Ozs7Ozs7O0FDWnpDLCtEQUErRCxpQkFBaUIsMENBQTBDLEdBQUcsRzs7Ozs7O0FDQTdILCtEQUErRCx1QkFBdUIsaUJBQWlCLGdEQUFnRCwyQ0FBMkMsR0FBRyxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZmE3ZjVmYjU0NjU4ZWJkM2YwZCIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEVudHJ5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbnJlcXVpcmUoJy4uLy4uL2xpYnMvT3JiaXRDb250cm9scy5qcycpO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0LyoqXG5cdCAqIOWIneacn+WMllxuXHQgKi9cblx0aW5pdCgpe1xuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9FbnRyeS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRvcFxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IENvbW1vbiBmcm9tICcuL3BhZ2UvQ29tbW9uJztcbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZS9NYWluJztcblxuKCgpPT57XG5cbiAgLy8gZ2xvYmFs44Kq44OW44K444Kn44Kv44OIXG4gIGlmICh3aW5kb3cuZ2I9PT11bmRlZmluZWQpIHdpbmRvdy5nYiA9IHt9O1xuICB3aW5kb3cuZ2IuaW4gPSB7fTsgLy9pbnN0YW5jZVxuXG4gIGdiLmluLmNvbW1vbiA9IG5ldyBDb21tb24oKTtcbiAgZ2IuaW4ubWFpbiA9IG5ldyBNYWluKCk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb21tb25cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IENvbmYgZnJvbSAnLi4vQ29yZS9Db25mJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL215bGlicy9VdGlsJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XG5pbXBvcnQgRnVuYyBmcm9tICcuLi9teWxpYnMvRnVuYyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuXHRzZXR1cCgpIHtcblxuXHRcdC8qKlxuICAgICAqIEB0eXBlIHtDb25mfSA6IOWIneacn+WApOOBruioreWumuODu+ODh+ODvOOCv+OBrumFjee9rlxuXHRcdCAqIEB0eXBlIHtVdGlsfSA6IFV0aWzplqLmlbDjga7liJ3mnJ/ljJZcblx0XHQgKiBAdHlwZSB7RnVuY30gOiDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cblx0XHQgKi9cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcblxuICAgIGdiLmluLnV0ID0gbmV3IFV0aWxzKCk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvQ29tbW9uLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29uZlxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG4vLyBpbXBvcnQgU291bmREYXRhIGZyb20gJy4vRGF0YS9Tb3VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmYge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOacrOeVquODleODqeOCsFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgICB0aGlzLlJFTEVBU0UgPSB0cnVlO1xuICAgIC8vIHRoaXMuUkVMRUFTRSA9IGZhbHNlO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODleODqeOCsOmWoumAo1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuRkxHID0ge1xuICAgICAgTE9HOnRydWUsICAvLyDjg63jgrDlh7rliptcbiAgICAgIFBBUkFNOnRydWUsIC8vIOODkeODqeODoeODvOOCv+ODgeOCp+ODg+OCr1xuICAgICAgU1RBVFM6dHJ1ZSAgLy8gU3RhdHPooajnpLpcbiAgICB9O1xuICAgIGlmICghdGhpcy5SRUxFQVNFKSB7XG4gICAgICB0aGlzLkZMRyA9IHtcbiAgICAgICAgTE9HOmZhbHNlLFxuICAgICAgICBQQVJBTTpmYWxzZSxcbiAgICAgICAgU1RBVFM6ZmFsc2UgXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDln7rmnKwgd2lkdGggaGVpZ2h0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5kZWZXID0gMTMwMDtcbiAgICB0aGlzLmRlZkggPSA4NTA7XG5cbiAgICB0aGlzLlcgPSAxMjAwO1xuICAgIHRoaXMuSCA9IDc1MDtcblxuICAgIHRoaXMuc3BXID0gMzc1O1xuICAgIHRoaXMuc3BIID0gNjY3O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODluODrOOCpOOCr+ODneOCpOODs+ODiFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuYnAgPSA3Njg7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgbW9kZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5rZXlzID0gW1xuICAgICAge1xuICAgICAgICAgICdrZXknOiAnbW92aWUnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnbW9ybmluZycsJ2FmdGVybm9vbicsJ25pZ2h0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAnZGF0YScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydkYXRhMDEnLCdkYXRhMDInLCdkYXRhMDMnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdwcm9kdWN0JyxcbiAgICAgICAgICAndmFsdWUnOiBbJzAxJ10sXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnN3aXRjaE1vZGUoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzb3VuZCBkYXRhXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdGhpcy5zb3VuZERhdGEgPSBuZXcgU291bmREYXRhKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc2VjMDIgYmcgSW1nIE51bVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc2VjMDJJbWdOdW0gPSAzOTY7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgeW91dHViZSBJRFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMueW91dHViZUlEMDEgPSAneFcyb05wTnJLZDAnO1xuICAgIHRoaXMueW91dHViZUlEMDIgPSAndDJXZVJSZEFGZUknO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHdlYiBmb250IGxvYWRlZFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMud2ViRm9udExvYWRlZCA9IGZhbHNlO1xuXG4gIH1cblxuXG4gIHN3aXRjaE1vZGUoKXtcblxuICAgIHZhciBpLCBrZXksIGxlbiwgcGFyYW0sIHJlZiwgcmVmMSwgdmFsdWU7XG5cbiAgICByZWYgPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKS5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBwYXJhbSA9IHJlZltpXTtcbiAgICAgIHJlZjEgPSBwYXJhbS5zcGxpdCgnPScpLCBrZXkgPSByZWYxWzBdLCB2YWx1ZSA9IHJlZjFbMV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5rZXlzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgdmFyIG9iaiA9IHRoaXMua2V5c1tqXTtcblxuICAgICAgICAvLyDjg5Hjg6njg6Hjg7zjgr/jgYzjgq3jg7zjgajkuIDnt5LjgaDjgaPjgZ/jgolcbiAgICAgICAgaWYgKG9iai5rZXkgPT09IGtleSkge1xuXG4gICAgICAgICAgLy8g5ZCE5YCk44Go5q+U6LyDXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBvYmoudmFsdWUubGVuZ3RoOyBrKyspIHtcblxuICAgICAgICAgICAgdmFyIHZhbCA9IG9iai52YWx1ZVtrXTtcblxuICAgICAgICAgICAgLy8g44Kt44O844KSdGhpcy5rZXlz44Gua2V544Gr44CBdmFsdWXjgpLmr5TovIPjgZfjgablkIzlgKTjgaDjgaPjgZ/jgoLjga7jgatcbiAgICAgICAgICAgIGlmICh2YWwgPT09IHZhbHVlKSB0aGlzW29iai5rZXldID0gdmFsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfTtcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gICAgICB9O1xuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9Db25mLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOS+v+WIqemWouaVsOOCr+ODqeOCuVxuICogUHJvamVjdDpcbiAqIEZpbGU6IFV0aWxcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmlzU2V0U1BTaXplID0gZmFsc2U7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IG51bGw7XG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICogTWF0aFxuICAgKi9cblxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgarlgKTjgpLov5TjgZlcbiAgICogQHBhcmFtIG1pbiA6IOacgOWwj+WApChpbnQpXG4gICAqIEBwYXJhbSBtYXggOiDmnIDlpKflgKQoaW50KVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gICAqL1xuICByYW5kb20obWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKChtYXggKyAxKSAtIG1pbikgKyBtaW4pKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBquaVtOaVsOOCkjLjgaTjga7nr4Tlm7LjgYvjgonlj5blvpdcbiAgICogQHBhcmFtIG1pbjEgOiDmnIDlsI/lgKQxKGludClcbiAgICogQHBhcmFtIG1heDEgOiDmnIDlpKflgKQxKGludClcbiAgICogQHBhcmFtIG1pbjIgOiDmnIDlsI/lgKQyKGludClcbiAgICogQHBhcmFtIG1heDIgOiDmnIDlpKflgKQyKGludClcbiAgICogQHJldHVybnMge251bWJlcn0gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAgKi9cbiAgcmFuZG9tMihtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gICAgXG4gICAgaWYgKHRoaXMuaGl0KDIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMSwgbWF4MSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4yLCBtYXgyKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAxL0ByYW5nZeOBrueiuueOh+OBp3RydWXjgpLlj5blvpdcbiAgICogQHBhcmFtIHJhbmdlIDog5q+N5pWwKGludClcbiAgICogQHJldHVybnMge2Jvb2xlYW59IDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAgKi9cbiAgaGl0KHJhbmdlKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oMCwgcmFuZ2UgLSAxKSA9PT0gMDtcblxuICB9XG4gIFxuICAvLyAw44GL44KJ56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pW05pWw44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgOiDnr4Tlm7IoaW50KVxuICAvLyByZXR1cm4gOiDjg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByYW5nZSh2YWwpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgtdmFsLCB2YWwpO1xuXG4gIH1cbiAgXG4gIC8vIOWApOOCkuODnuODg+ODlOODs+OCsFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog44Oe44OD44OU44Oz44Kw44GZ44KL5YCkKE51bWJlcilcbiAgLy8gQHJlc01pbiA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEByZXNNYXggOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1pbiA6IOWFg+OBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWF4IDog5YWD44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gcmV0dXJuIDog44Oe44OD44OU44Oz44Kw44GV44KM44Gf5YCkKE51bWJlcilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbWFwKG51bSwgcmVzTWluLCByZXNNYXgsIGJhc2VNaW4sIGJhc2VNYXgpIHtcblxuICAgIHZhciBwO1xuICAgIGlmIChudW0gPCBiYXNlTWluKSB7XG4gICAgICByZXR1cm4gcmVzTWluO1xuICAgIH1cbiAgICBpZiAobnVtID4gYmFzZU1heCkge1xuICAgICAgcmV0dXJuIHJlc01heDtcbiAgICB9XG4gICAgcCA9IChyZXNNYXggLSByZXNNaW4pIC8gKGJhc2VNYXggLSBiYXNlTWluKTtcblxuICAgIHJldHVybiAoKG51bSAtIGJhc2VNaW4pICogcCkgKyByZXNNaW47XG5cbiAgfSAgICBcbiAgXG4gIC8vIOaVsOWApOOBq+Wwj+aVsOeCueesrEBu5L2N44G+44Gn44KS44Gk44GR44Gf5paH5a2X5YiX44KS6L+U44GZXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDlgKQoTnVtYmVyKVxuICAvLyBAbiA6IOWwj+aVsOeCueOBruS9jShpbnQpXG4gIC8vIHJldHVybiA6IOWkieaPm+OBleOCjOOBn+WApChTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRlY2ltYWwobnVtLCBuKSB7XG4gICAgdmFyIGksIHBvcztcbiAgICBudW0gPSBTdHJpbmcobnVtKTtcbiAgICBwb3MgPSBudW0uaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBudW0uc3BsaXQoXCIuXCIpWzBdO1xuICAgIH1cbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgbnVtICs9IFwiLlwiO1xuICAgICAgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgbnVtICs9IFwiMFwiO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH1cbiAgICBudW0gPSBudW0uc3Vic3RyKDAsIHBvcykgKyBudW0uc3Vic3RyKHBvcywgbiArIDEpO1xuICAgIHJldHVybiBudW07XG4gIH1cblxuICBjbGFtcChudW1lcmF0b3IsZGVub21pbmF0b3IsdmFsKSB7XG5cbiAgICByZXR1cm4gdmFsICogKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKTtcblxuICB9XG5cblx0LyoqXG4gICAqIOODqeOCuOOCouODs+OCkuinkuW6puOBq+WkieaPm1xuXHQgKiBAcGFyYW0gcmFkaWFuc1xuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cbiAgZGVncmVlKHJhZGlhbnMpIHtcblxuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuICB9XG5cbiAgLy8gdG8gcmFkaWFuc1xuICByYWRpYW4oYW5nbGUpIHsgXG5cbiAgICByZXR1cm4gYW5nbGUgKiBNYXRoLlBJIC8gMTgwOyAvLzHluqbkvZXjg6njgrjjgqLjg7PjgYtcblxuICB9XG5cbiAgZGlzdChwMSwgcDIpIHtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcblxuICB9XG5cbiAgYXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MTAsOSw1LDMsMVxuXG4gIH1cblxuICBkZXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxLDMsNSw5LDEwXG5cbiAgfVxuXG4gIC8vIG1hcCh2YWx1ZSwgbWluMDEsIG1heDAxLCBtaW4wMiwgbWF4MDIpIHtcblxuICAvLyAgIHZhciBkaXMwMSA9IG1heDAxIC0gbWluMDE7XG4gIC8vICAgdmFyIGRpczAyID0gbWF4MDIgLSBtaW4wMlxuXG4gIC8vICAgdmFyIHJhdGUgPSBkaXMwMiAvIGRpczAxO1xuXG4gIC8vICAgdmFsdWUgPSB2YWx1ZSAqIHJhdGU7XG5cbiAgLy8gICByZXR1cm4gdmFsdWU7XG4gIC8vIH1cblxuICBjb25zdHJhaW4odmFsdWUsIG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heCh2YWx1ZSwgbWluKSk7XG5cbiAgICAvLyBpZiAodmFsdWUgPD0gbG93KSB2YWx1ZSA9IGxvdztcbiAgICAvLyBpZiAodmFsdWUgPj0gaGlnaCkgdmFsdWUgPSBoaWdoOyAgICAgXG4gICAgLy8gcmV0dXJuIHZhbHVlO1xuXG4gIH1cblxuICAvLyDjg6bjg4vjg7zjgq9JROOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1bmlxdWUoKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgfVxuICBcbiAgLy8gKipqcXVhcnnkvb/nlKhcbiAgLy8g44Oc44K/44Oz44Oi44O844OJ5aSJ5pu0XG4gIC8vIHRydWXjgarjgonjgqvjg7zjgr3jg6vjgYzjg53jgqTjg7Pjgr/jg7zjga7lvaLjgatcbiAgLy8gZmFsc2Xjgarjgonjg4fjg5Xjgqnjg6vjg4jjga7jgqvjg7zjgr3jg6vjgatcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGZsZyA6IOmBqeeUqOOBmeOCi+OBi+OBqeOBhuOBiyhib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBidXR0b25Nb2RlKGZsZykge1xuXG4gICAgaWYgKGZsZykge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBwb3J0cmFpdCAvIGxhbmRzY2FwZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNEaXJlY3Rpb24gKCkge1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChIID4gVykge1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgIH1lbHNle1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICByZXNwb25zaXZlIOaoquW5heOCkuimi+OCi1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNSZXNwb25zaXZlIChicCkge1xuXG4gICAgaWYgKGJwPT11bmRlZmluZWQpIGJwPTM3NTtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoVyA+IGJwKSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IHRydWU7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IHRydWU7XG4gICAgICB0aGlzLmlzUmVzUEMgPSBmYWxzZTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgVVJMXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAqL1xuICBnZXRQYXJhbSgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuICAgIHZhciBwYXJhbSA9IHVybC5zcGxpdCgnPycpWzFdO1xuICAgIGlmIChwYXJhbT09dW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJhbUl0ZW1zID0gcGFyYW0uc3BsaXQoJyYnKTtcbiAgICB2YXIgbGlzdCA9IHt9O1xuICBcbiAgICBmb3IoIHZhciBpID0gMDsgaTxwYXJhbUl0ZW1zLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgcGFyYW1JdGVtID0gcGFyYW1JdGVtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICBsaXN0W3BhcmFtSXRlbVswXV0gPSBwYXJhbUl0ZW1bMV07XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODj+ODg+OCt+ODpeWPluW+lyA6IGxvY2F0aW9uLmhhc2jjga4j44KS5YmK6Zmk44GX44Gf44KE44GkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBoYXNoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBjb29raWXlj5blvpdcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGdldENvb2tpZShrZXkpIHtcblxuICAgIHZhciBhLCBhcnIsIGksIGwsIGxlbjEsIHZhbDtcbiAgICBpZiAoZG9jdW1lbnQuY29va2llID09PSB2b2lkIDAgfHwgZG9jdW1lbnQuY29va2llID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XG4gICAgZm9yIChpID0gbCA9IDAsIGxlbjEgPSBhcnIubGVuZ3RoOyBsIDwgbGVuMTsgaSA9ICsrbCkge1xuICAgICAgdmFsID0gYXJyW2ldO1xuICAgICAgYSA9IHZhbC5zcGxpdChcIj1cIik7XG4gICAgICBpZiAoYVswXSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBhWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxuICB9ICAgICAgXG5cbiAgLyoqXG4gICAqIGNvb2tpZeioreWumlxuICAgKiBAcGFyYW0ga2V5IDog44OR44Op44Oh44O844K/5ZCNXG4gICAqIEBwYXJhbSB2YWwgOiDlgKRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHNldENvb2tpZShrZXksIHZhbCkge1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgdmFsO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIENvbG9yXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIHJnYuOBi+OCiUhFWOOCq+ODqeODvOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAciA6IDB+MjU1XG4gIC8vIEBnIDogMH4yNTVcbiAgLy8gQGIgOiAwfjI1NVxuICAvLyByZXR1cm4gOiBleCBcIiNGRkZGRkZcIlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRIZXhDb2xvcihyLGcsYikge1xuICAgICAgdmFyIHN0cjtcbiAgICAgIHN0ciA9IChyIDw8IDE2IHwgZyA8PCA4IHwgYikudG9TdHJpbmcoMTYpO1xuICAgICAgcmV0dXJuIFwiI1wiICsgbmV3IEFycmF5KDcgLSBzdHIubGVuZ3RoKS5qb2luKFwiMFwiKSArIHN0cjtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgU3RyaW5nXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzQ29udGFpbihzdHIsY29udGFpbikge1xuXG4gICAgLy8gc3Ry44Gu5Lit44GrLGNvbnRhaW7jgYzlrZjlnKjjgZfjgZ/jgolcbiAgICBpZiAoIHN0ci5pbmRleE9mKGNvbnRhaW4pICE9IC0xICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICAvLyAw5Z+L44KB44GnMuahgeOBq+OBmeOCi+mWouaVsFxuICBhZGQwKHN0cixudW09LTIpe1xuICAgIFxuICAgIHJldHVybiAoIFwiMDAwMDAwMDAwMDAwXCIgKyBzdHIgKS5zdWJzdHIoIG51bSApO1xuXG4gIH1cblxuICBmbG9hdEZvcm1hdCggbnVtYmVyLCBuICkge1xuXG4gICAgdmFyIF9wb3cgPSBNYXRoLnBvdyggMTAgLCBuICkgO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCBudW1iZXIgKiBfcG93ICkgLyBfcG93IDtcblxuICB9XG4gICAgXG4gIC8vIOWApOauteihqOiomFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcmljZShudW0pIHtcblxuICAgIHJldHVybiBTdHJpbmcobnVtKS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csICckMSwnKTtcblxuICB9XG5cbiAgLy8g5paH5a2X5YiX44KS5Y+N6LuiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBzdHIgOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyByZXR1cm4gOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdHJSZXZlcnNlKHN0cikge1xuXG4gICAgdmFyIGksIGxlbiwgcmVzO1xuICAgIHJlcyA9IFwiXCI7XG4gICAgbGVuID0gc3RyLmxlbmd0aDtcbiAgICBpID0gMTtcbiAgICB3aGlsZSAoaSA8PSBsZW4pIHtcbiAgICAgIHJlcyArPSBzdHIuc3Vic3RyKC1pLCAxKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcblxuICB9XG4gIFxuICAvLyDmloflrZfliJfjga7lhajnva7mj5tcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCAgOiDmloflrZfliJdcbiAgLy8gQG9lZyAgOiDnva7mj5vliY3jga7mloflrZfliJdcbiAgLy8gQGRlc3QgOiDnva7mj5vlvozjga7mloflrZfliJdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVwbGFjZUFsbCh2YWwsIG9yZywgZGVzdCkge1xuXG4gICAgcmV0dXJuIHZhbC5zcGxpdChvcmcpLmpvaW4oZGVzdCk7XG5cbiAgfSAgICBcbiAgXG4gIHN0clJlcGxhY2Uoc3RyLCBiZWZvcmUsIGFmdGVyKSB7XG5cbiAgICB2YXIgciA9IG5ldyBSZWdFeHAoIGJlZm9yZSwgJ2cnKTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZSggciAsIGFmdGVyICk7XG5cbiAgfSAgICBcbiAgXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0ZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXROb3coKSB7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCk7XG5cbiAgfVxuXG4gIGVsYXBzZWQoKSB7XG5cbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWU7XG5cbiAgfVxuXG4gIG0oKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vciggdGhpcy5lbGFwc2VkVGltZSArIDEwMCAvIDYwICk7XG5cbiAgfVxuXG4gIHMoKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmVsYXBzZWRUaW1lIC8gMTAwMCk7XG5cbiAgfVxuXG4gIG1zKCkge1xuXG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZFRpbWU7XG4gICAgXG4gIH1cblxuICB0aW1lKCkge1xuXG4gICAgdGhpcy5nZXROb3coKTtcblxuICAgIHRoaXMuaG91ciA9IHRoaXMubm93LmdldEhvdXJzKCk7ICAgICAgICAgIC8vIOaZglxuICAgIHRoaXMubWludXRlID0gdGhpcy5ub3cuZ2V0TWludXRlcygpOyAgICAgIC8vIOWIhlxuICAgIHRoaXMuc2Vjb25kID0gdGhpcy5ub3cuZ2V0U2Vjb25kcygpO1xuICAgIHRoaXMubWlsbFNlY29uZCA9IHRoaXMubm93LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIH1cblxuICBkYXRlKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldERhdGUoKTtcblxuICB9XG5cbiAgbW9udGhzKCkge1xuXG4gICAgdmFyIG1vbnRoZGF5cyA9IG5ldyBBcnJheSgzMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxKTtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRNb250aCgpICsgMTtcblxuICB9XG5cbiAgeWVhcigpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRGdWxsWWVhcigpO1xuXG4gIH1cblxuICBkYXkoKSB7XG5cbiAgICAvLyDmm5zml6UgKOaXpeacrOiqnilcbiAgICB2YXIgd2Vla0RheUpQID0gW1wi5pelXCIsXCLmnIhcIixcIueBq1wiLFwi5rC0XCIsXCLmnKhcIixcIumHkVwiLFwi5ZyfXCJdIDtcbiAgICB2YXIgd0RKID0gd2Vla0RheUpQW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgICAvLyDmm5zml6UgKOiLseiqnilcbiAgICB2YXIgd2Vla0RheUVOID0gW1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdIDtcbiAgICB2YXIgd0RFID0gd2Vla0RheUVOW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgfVxuICBcbiAgLy8g5pWw5pel5b6M44GuRGF0ZeOCquODluOCuOOCp+OCr+ODiOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhZnRlckRheShkYXRlLCBudW0pIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIE51bWJlcihudW0pICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0YSB0eXBlIGNoZWNrXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzT2JqZWN0KHZhbHVlLCBpZ25vcmVBcnJheSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cblxuICBpc051bWJlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH1cblxuICBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBpc051bGwodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbiAgfVxuXG4gIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgb3RoZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldEltZ1NQU2l6ZSAoJHRhcmdldCl7XG5cbiAgICAvLyByZXNwb25zaXZlIHNw44Gu44Go44GN5Yem55CGXG4gICAgaWYgKCF0aGlzLmlzUmVzU1ApIHJldHVybjtcbiAgICAvLyDkuIDluqbjgaDjgZHlh6bnkIZcbiAgICAvLyBpZiAodGhpcy5pc1NldFNQU2l6ZSkgcmV0dXJuO1xuICAgIC8vIHRoaXMuaXNTZXRTUFNpemUgPSB0cnVlO1xuXG4gICAgdmFyICRpbWcgPSAkdGFyZ2V0LFxuICAgICAgICBsZW4gPSAkaW1nLmxlbmd0aDtcblxuICAgICRpbWcuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgdmFyIHcgPSBNYXRoLmZsb29yKCQodGhpcykud2lkdGgoKSAvIDIpLFxuICAgICAgICAgICAgaCA9IE1hdGguZmxvb3IoJCh0aGlzKS5oZWlnaHQoKSAvIDIpO1xuXG4gICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAnd2lkdGgnOiB3LFxuICAgICAgICAgICAgJ2hlaWdodCc6IGgsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsZW4gPT0gaSArIDEpICQod2luZG93KS50cmlnZ2VyKCdzZXRTcFppZUVuZCcpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAg44K544Oe44Ob5pON5L2c54Sh5Yq5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRQcmV2ZW50KCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCd0b3VjaG1vdmUubm9Db250cm9sJywgZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO30pO1xuXG4gIH1cblxuICByZW1vdmVQcmV2ZW50KCkge1xuXG4gICAgJCh3aW5kb3cpLm9mZigndG91Y2htb3ZlLm5vQ29udHJvbCcpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIGhvc3QscHJvdGNvbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJvdG9jb2woKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgfVxuICAgIFxuICBob3N0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIC8vIHJldHVybiBsb2NhdGlvbi5ob3N0XG5cbiAgfVxuXG4gIHBvcnQoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucG9ydDtcblxuICB9XG4gICAgICAgIFxuICBwYXRoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdChlKSB7XG5cbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG5cbiAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBkaXNhYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ud2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2Rlcm4gc3RhbmRhcmRcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXG4gICAgd2luZG93Lm9udG91Y2htb3ZlICA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vYmlsZVxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biAgPSB0aGlzLnByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cztcblxuICB9XG5cbiAgZW5hYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL1V0aWwuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsc1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuLyoqXG4gKiBhbmltYXRpb25cbiAqL1xuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tICcuL2FuaW1hdGlvbi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUnO1xuaW1wb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGZyb20gJy4vYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lJztcblxuaW1wb3J0IEFycmF5IGZyb20gJy4vYXJyYXkvQXJyYXknO1xuaW1wb3J0IGNoZWNrQ2xpZW50IGZyb20gXCIuL3VhL2NoZWNrQ2xpZW50XCI7XG5cbmltcG9ydCBwcmVsb2FkSW1nIGZyb20gJy4vaW1nL3ByZWxvYWRJbWcnO1xuaW1wb3J0IHNldFVwQnRuVHdpdHRlciBmcm9tICcuL3Nucy9zZXRVcEJ0blR3aXR0ZXInO1xuaW1wb3J0IHNldFVwQnRuTGluZSBmcm9tICcuL3Nucy9zZXRVcEJ0bkxpbmUnO1xuaW1wb3J0IHNldFVwQnRuRmFjZUJvb2sgZnJvbSAnLi9zbnMvc2V0VXBCdG5GYWNlQm9vayc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5fc2V0dXAoKTtcbiAgICBcbiAgfVxuXG4gIF9zZXR1cCgpIHtcbiAgICAvLyB3aW5kb3cuY29uc29sZS5sb2coJ1V0aWxzX1NldHVwISEnKTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBhcnJheVxuICAgICAqL1xuICAgIHRoaXMuQXJyYXkgPSBuZXcgQXJyYXkoKTtcblxuXG4gICAgLyoqXG4gICAgICogdWFcbiAgICAgKi9cbiAgICB0aGlzLmNoZWNrQ2xpZW50ID0gbmV3IGNoZWNrQ2xpZW50KCk7XG5cblxuICAgIC8qKlxuICAgICAqIGltZ1xuICAgICAqL1xuICAgIC8vIHRoaXMucHJlbG9hZEltZyA9IG5ldyBwcmVsb2FkSW1nKCk7XG5cbiAgICAvKipcbiAgICAgKiBzbnNcbiAgICAgKi9cbiAgICAvLyB0aGlzLnNldFVwQnRuVHdpdHRlciA9IG5ldyBzZXRVcEJ0blR3aXR0ZXI7XG4gICAgLy8gdGhpcy5zZXRVcEJ0bkxpbmUgPSBuZXcgc2V0VXBCdG5MaW5lO1xuICAgIC8vIHRoaXMuc2V0VXBCdG5GYWNlQm9vayA9IG5ldyBzZXRVcEJ0bkZhY2VCb29rO1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL1V0aWxzLmpzIiwiLyoqXG4gKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqL1xud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDMwKTtcbiAgICAgICAgfTtcbiAgfTtcbn0pKHRoaXMpKSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIi8qKlxuICogY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAqL1xud2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKChmdW5jdGlvbihfdGhpcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbiAgfTtcbn0pKHRoaXMpKSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOmFjeWIl+OBruaTjeS9nOezu1xuICogUHJvamVjdDpcbiAqIEZpbGU6IEFycmF5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cblxuICB9XG5cblx0LyoqXG5cdCAqIOmFjeWIl+WGheOBruODqeODs+ODgOODoOOBquWApOOCkuOBsuOBqOOBpOWPluW+l1xuXHQgKiBAcGFyYW0gYXJyIDog6YWN5YiXXG5cdCAqIEByZXR1cm5zIHsqfSA6IOmFjeWIl+WGheOBruWApFxuXHQgKi9cbiAgYXJyUmFuZChhcnIpIHtcblxuICAgIHJldHVybiBhcnJbdGhpcy5yYW5kb20oMCwgYXJyLmxlbmd0aCAtIDEpXTtcblxuICB9XG5cblx0LyoqXG4gICAqIOmFjeWIl+OCkuODqeODs+ODgOODoOOBq+S4puOBueabv+OBiFxuXHQgKiBAcGFyYW0gYXJyIDog6YWN5YiXKEFycmF5KVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuICBzaHVmZmxlKGFycikge1xuXG4gICAgbGV0IEFyciA9IFtdO1xuICAgIEFyciA9IGFyci5zbGljZSgpO1xuICAgIHZhciBpID0gYXJyLmxlbmd0aDtcbiAgICB3aGlsZShpKXtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmkpO1xuICAgICAgdmFyIHQgPSBBcnJbLS1pXTtcbiAgICAgIEFycltpXSA9IEFycltqXTtcbiAgICAgIEFycltqXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBBcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hcnJheS9BcnJheS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiBVYeWIpOWIpVxuICogUHJvamVjdDpcbiAqIEZpbGU6IGNoZWNrQ2xpZW50XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vbGlicy91YS1wYXJzZXIubWluLmpzXCIpO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoZWNrQ2xpZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMudWEgPSBuZXcgcGFyc2VyKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBJReOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzSUUoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnSUUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVmb3jjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0ZpcmVmb3goKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnRmlyZWZveCcgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hyb21l44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNDaHJvbWUoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnQ2hyb21lJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYWZhcmnjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1NhZmFyaSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdTYWZhcmknID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODkOOCpOODq+OBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGlzTW9iaWxlKCkge1xuICAgIGxldCBkZXZpY2UgPSB0aGlzLnVhLmdldERldmljZSgpLnR5cGU7XG4gICAgcmV0dXJuIGRldmljZSA9PT0gJ21vYmlsZScgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgr/jg5bjg6zjg4Pjg4jjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBpc1RhYmxldCgpIHtcbiAgICBsZXQgZGV2aWNlID0gdGhpcy51YS5nZXREZXZpY2UoKS50eXBlO1xuICAgIHJldHVybiBkZXZpY2UgPT09ICd0YWJsZXQnID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogT1PlkI3jgpLlj5blvpdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIG9zKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldE9TKCkubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4fjg5DjgqTjgrnlkI3jgpLlj5blvpdcbiAgICogQHJldHVybnMge3ZlbmRvcnx7SFRDLCBTcHJpbnR9fVxuICAgKi9cbiAgZGV2aWNlX25hbWUoKSB7XG4gICAgbGV0IGRldmljZV9uYW1lID0gdGhpcy51YS5nZXREZXZpY2UoKS52ZW5kb3I7XG4gICAgcmV0dXJuIGRldmljZV9uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODluODqeOCpuOCtuWQjeOCkuWPluW+l1xuICAgKi9cbiAgYnJvd3Nlcl9uYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODpuODvOOCtuODvOOCqOODvOOCuOOCp+ODs+ODiOaDheWgse+8muWFqOOBpuOCkuWPluW+l1xuICAgKi9cbiAgYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldFVBKCk7XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvdWEvY2hlY2tDbGllbnQuanMiLCIvKipcbiAqIFVBUGFyc2VyLmpzIHYwLjcuMTJcbiAqIExpZ2h0d2VpZ2h0IEphdmFTY3JpcHQtYmFzZWQgVXNlci1BZ2VudCBzdHJpbmcgcGFyc2VyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFpc2FsbWFuL3VhLXBhcnNlci1qc1xuICpcbiAqIENvcHlyaWdodCDCqSAyMDEyLTIwMTYgRmFpc2FsIFNhbG1hbiA8Znl6bG1hbkBnbWFpbC5jb20+XG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIEdQTHYyICYgTUlUXG4gKi8oZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cIjAuNy4xMlwiLHI9XCJcIixpPVwiP1wiLHM9XCJmdW5jdGlvblwiLG89XCJ1bmRlZmluZWRcIix1PVwib2JqZWN0XCIsYT1cInN0cmluZ1wiLGY9XCJtYWpvclwiLGw9XCJtb2RlbFwiLGM9XCJuYW1lXCIsaD1cInR5cGVcIixwPVwidmVuZG9yXCIsZD1cInZlcnNpb25cIix2PVwiYXJjaGl0ZWN0dXJlXCIsbT1cImNvbnNvbGVcIixnPVwibW9iaWxlXCIseT1cInRhYmxldFwiLGI9XCJzbWFydHR2XCIsdz1cIndlYXJhYmxlXCIsRT1cImVtYmVkZGVkXCIsUz17ZXh0ZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG49e307Zm9yKHZhciByIGluIGUpdFtyXSYmdFtyXS5sZW5ndGglMj09PTA/bltyXT10W3JdLmNvbmNhdChlW3JdKTpuW3JdPWVbcl07cmV0dXJuIG59LGhhczpmdW5jdGlvbihlLHQpe3JldHVybiB0eXBlb2YgZT09XCJzdHJpbmdcIj90LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlLnRvTG93ZXJDYXNlKCkpIT09LTE6ITF9LGxvd2VyaXplOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKCl9LG1ham9yOmZ1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZT09PWE/ZS5yZXBsYWNlKC9bXlxcZFxcLl0vZyxcIlwiKS5zcGxpdChcIi5cIilbMF06dH0sdHJpbTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxcIlwiKX19LHg9e3JneDpmdW5jdGlvbigpe3ZhciBlLG49MCxyLGksYSxmLGwsYyxoPWFyZ3VtZW50czt3aGlsZShuPGgubGVuZ3RoJiYhbCl7dmFyIHA9aFtuXSxkPWhbbisxXTtpZih0eXBlb2YgZT09PW8pe2U9e307Zm9yKGEgaW4gZClkLmhhc093blByb3BlcnR5KGEpJiYoZj1kW2FdLHR5cGVvZiBmPT09dT9lW2ZbMF1dPXQ6ZVtmXT10KX1yPWk9MDt3aGlsZShyPHAubGVuZ3RoJiYhbCl7bD1wW3IrK10uZXhlYyh0aGlzLmdldFVBKCkpO2lmKCEhbClmb3IoYT0wO2E8ZC5sZW5ndGg7YSsrKWM9bFsrK2ldLGY9ZFthXSx0eXBlb2YgZj09PXUmJmYubGVuZ3RoPjA/Zi5sZW5ndGg9PTI/dHlwZW9mIGZbMV09PXM/ZVtmWzBdXT1mWzFdLmNhbGwodGhpcyxjKTplW2ZbMF1dPWZbMV06Zi5sZW5ndGg9PTM/dHlwZW9mIGZbMV09PT1zJiYoIWZbMV0uZXhlY3x8IWZbMV0udGVzdCk/ZVtmWzBdXT1jP2ZbMV0uY2FsbCh0aGlzLGMsZlsyXSk6dDplW2ZbMF1dPWM/Yy5yZXBsYWNlKGZbMV0sZlsyXSk6dDpmLmxlbmd0aD09NCYmKGVbZlswXV09Yz9mWzNdLmNhbGwodGhpcyxjLnJlcGxhY2UoZlsxXSxmWzJdKSk6dCk6ZVtmXT1jP2M6dH1uKz0yfXJldHVybiBlfSxzdHI6ZnVuY3Rpb24oZSxuKXtmb3IodmFyIHIgaW4gbilpZih0eXBlb2YgbltyXT09PXUmJm5bcl0ubGVuZ3RoPjApe2Zvcih2YXIgcz0wO3M8bltyXS5sZW5ndGg7cysrKWlmKFMuaGFzKG5bcl1bc10sZSkpcmV0dXJuIHI9PT1pP3Q6cn1lbHNlIGlmKFMuaGFzKG5bcl0sZSkpcmV0dXJuIHI9PT1pP3Q6cjtyZXR1cm4gZX19LFQ9e2Jyb3dzZXI6e29sZHNhZmFyaTp7dmVyc2lvbjp7XCIxLjBcIjpcIi84XCIsMS4yOlwiLzFcIiwxLjM6XCIvM1wiLFwiMi4wXCI6XCIvNDEyXCIsXCIyLjAuMlwiOlwiLzQxNlwiLFwiMi4wLjNcIjpcIi80MTdcIixcIjIuMC40XCI6XCIvNDE5XCIsXCI/XCI6XCIvXCJ9fX0sZGV2aWNlOnthbWF6b246e21vZGVsOntcIkZpcmUgUGhvbmVcIjpbXCJTRFwiLFwiS0ZcIl19fSxzcHJpbnQ6e21vZGVsOntcIkV2byBTaGlmdCA0R1wiOlwiNzM3M0tUXCJ9LHZlbmRvcjp7SFRDOlwiQVBBXCIsU3ByaW50OlwiU3ByaW50XCJ9fX0sb3M6e3dpbmRvd3M6e3ZlcnNpb246e01FOlwiNC45MFwiLFwiTlQgMy4xMVwiOlwiTlQzLjUxXCIsXCJOVCA0LjBcIjpcIk5UNC4wXCIsMmUzOlwiTlQgNS4wXCIsWFA6W1wiTlQgNS4xXCIsXCJOVCA1LjJcIl0sVmlzdGE6XCJOVCA2LjBcIiw3OlwiTlQgNi4xXCIsODpcIk5UIDYuMlwiLDguMTpcIk5UIDYuM1wiLDEwOltcIk5UIDYuNFwiLFwiTlQgMTAuMFwiXSxSVDpcIkFSTVwifX19fSxOPXticm93c2VyOltbLyhvcGVyYVxcc21pbmkpXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYVxcc1ttb2JpbGV0YWJdKykuK3ZlcnNpb25cXC8oW1xcd1xcLi1dKykvaSwvKG9wZXJhKS4rdmVyc2lvblxcLyhbXFx3XFwuXSspL2ksLyhvcGVyYSlbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyhvcGlvcylbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbW2MsXCJPcGVyYSBNaW5pXCJdLGRdLFsvXFxzKG9wcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJPcGVyYVwiXSxkXSxbLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvKGx1bmFzY2FwZXxtYXh0aG9ufG5ldGZyb250fGphc21pbmV8YmxhemVyKVtcXC9cXHNdPyhbXFx3XFwuXSspKi9pLC8oYXZhbnRcXHN8aWVtb2JpbGV8c2xpbXxiYWlkdSkoPzpicm93c2VyKT9bXFwvXFxzXT8oW1xcd1xcLl0qKS9pLC8oPzptc3xcXCgpKGllKVxccyhbXFx3XFwuXSspL2ksLyhyZWtvbnEpXFwvKFtcXHdcXC5dKykqL2ksLyhjaHJvbWl1bXxmbG9ja3xyb2NrbWVsdHxtaWRvcml8ZXBpcGhhbnl8c2lsa3xza3lmaXJlfG92aWJyb3dzZXJ8Ym9sdHxpcm9ufHZpdmFsZGl8aXJpZGl1bXxwaGFudG9tanMpXFwvKFtcXHdcXC4tXSspL2ldLFtjLGRdLFsvKHRyaWRlbnQpLitydls6XFxzXShbXFx3XFwuXSspLitsaWtlXFxzZ2Vja28vaV0sW1tjLFwiSUVcIl0sZF0sWy8oZWRnZSlcXC8oKFxcZCspP1tcXHdcXC5dKykvaV0sW2MsZF0sWy8oeWFicm93c2VyKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIllhbmRleFwiXSxkXSxbLyhjb21vZG9fZHJhZ29uKVxcLyhbXFx3XFwuXSspL2ldLFtbYywvXy9nLFwiIFwiXSxkXSxbLyhtaWNyb21lc3NlbmdlcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJXZUNoYXRcIl0sZF0sWy94aWFvbWlcXC9taXVpYnJvd3NlclxcLyhbXFx3XFwuXSspL2ldLFtkLFtjLFwiTUlVSSBCcm93c2VyXCJdXSxbL1xcc3d2XFwpLisoY2hyb21lKVxcLyhbXFx3XFwuXSspL2ldLFtbYywvKC4rKS8sXCIkMSBXZWJWaWV3XCJdLGRdLFsvYW5kcm9pZC4rc2Ftc3VuZ2Jyb3dzZXJcXC8oW1xcd1xcLl0rKS9pLC9hbmRyb2lkLit2ZXJzaW9uXFwvKFtcXHdcXC5dKylcXHMrKD86bW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKi9pXSxbZCxbYyxcIkFuZHJvaWQgQnJvd3NlclwiXV0sWy8oY2hyb21lfG9tbml3ZWJ8YXJvcmF8W3RpemVub2thXXs1fVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5dKykvaSwvKHFxYnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyh1Y1xccz9icm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksL3Vjd2ViLisodWNicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksL2p1Yy4rKHVjd2ViKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ldLFtbYyxcIlVDQnJvd3NlclwiXSxkXSxbLyhkb2xmaW4pXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiRG9scGhpblwiXSxkXSxbLygoPzphbmRyb2lkLispY3Jtb3xjcmlvcylcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJDaHJvbWVcIl0sZF0sWy87ZmJhdlxcLyhbXFx3XFwuXSspOy9pXSxbZCxbYyxcIkZhY2Vib29rXCJdXSxbL2Z4aW9zXFwvKFtcXHdcXC4tXSspL2ldLFtkLFtjLFwiRmlyZWZveFwiXV0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz9tb2JpbGVcXC9cXHcrXFxzKHNhZmFyaSkvaV0sW2QsW2MsXCJNb2JpbGUgU2FmYXJpXCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkvaV0sW2QsY10sWy93ZWJraXQuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKFxcL1tcXHdcXC5dKykvaV0sW2MsW2QseC5zdHIsVC5icm93c2VyLm9sZHNhZmFyaS52ZXJzaW9uXV0sWy8oa29ucXVlcm9yKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8a2h0bWwpXFwvKFtcXHdcXC5dKykvaV0sW2MsZF0sWy8obmF2aWdhdG9yfG5ldHNjYXBlKVxcLyhbXFx3XFwuLV0rKS9pXSxbW2MsXCJOZXRzY2FwZVwiXSxkXSxbLyhzd2lmdGZveCkvaSwvKGljZWRyYWdvbnxpY2V3ZWFzZWx8Y2FtaW5vfGNoaW1lcmF8ZmVubmVjfG1hZW1vXFxzYnJvd3NlcnxtaW5pbW98Y29ua2Vyb3IpW1xcL1xcc10/KFtcXHdcXC5cXCtdKykvaSwvKGZpcmVmb3h8c2VhbW9ua2V5fGstbWVsZW9ufGljZWNhdHxpY2VhcGV8ZmlyZWJpcmR8cGhvZW5peClcXC8oW1xcd1xcLi1dKykvaSwvKG1vemlsbGEpXFwvKFtcXHdcXC5dKykuK3J2XFw6LitnZWNrb1xcL1xcZCsvaSwvKHBvbGFyaXN8bHlueHxkaWxsb3xpY2FifGRvcmlzfGFtYXlhfHczbXxuZXRzdXJmfHNsZWlwbmlyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksLyhsaW5rcylcXHNcXCgoW1xcd1xcLl0rKS9pLC8oZ29icm93c2VyKVxcLz8oW1xcd1xcLl0rKSovaSwvKGljZVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5fXSspL2ksLyhtb3NhaWMpW1xcL1xcc10oW1xcd1xcLl0rKS9pXSxbYyxkXV0sY3B1OltbLyg/OihhbWR8eCg/Oig/Ojg2fDY0KVtfLV0pP3x3b3d8d2luKTY0KVs7XFwpXS9pXSxbW3YsXCJhbWQ2NFwiXV0sWy8oaWEzMig/PTspKS9pXSxbW3YsUy5sb3dlcml6ZV1dLFsvKCg/OmlbMzQ2XXx4KTg2KVs7XFwpXS9pXSxbW3YsXCJpYTMyXCJdXSxbL3dpbmRvd3NcXHMoY2V8bW9iaWxlKTtcXHNwcGM7L2ldLFtbdixcImFybVwiXV0sWy8oKD86cHBjfHBvd2VycGMpKD86NjQpPykoPzpcXHNtYWN8O3xcXCkpL2ldLFtbdiwvb3dlci8sXCJcIixTLmxvd2VyaXplXV0sWy8oc3VuNFxcdylbO1xcKV0vaV0sW1t2LFwic3BhcmNcIl1dLFsvKCg/OmF2cjMyfGlhNjQoPz07KSl8NjhrKD89XFwpKXxhcm0oPzo2NHwoPz12XFxkKzspKXwoPz1hdG1lbFxccylhdnJ8KD86aXJpeHxtaXBzfHNwYXJjKSg/OjY0KT8oPz07KXxwYS1yaXNjKS9pXSxbW3YsUy5sb3dlcml6ZV1dXSxkZXZpY2U6W1svXFwoKGlwYWR8cGxheWJvb2spO1tcXHdcXHNcXCk7LV0rKHJpbXxhcHBsZSkvaV0sW2wscCxbaCx5XV0sWy9hcHBsZWNvcmVtZWRpYVxcL1tcXHdcXC5dKyBcXCgoaXBhZCkvXSxbbCxbcCxcIkFwcGxlXCJdLFtoLHldXSxbLyhhcHBsZVxcc3swLDF9dHYpL2ldLFtbbCxcIkFwcGxlIFRWXCJdLFtwLFwiQXBwbGVcIl1dLFsvKGFyY2hvcylcXHMoZ2FtZXBhZDI/KS9pLC8oaHApLisodG91Y2hwYWQpL2ksLyhocCkuKyh0YWJsZXQpL2ksLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvXFxzKG5vb2spW1xcd1xcc10rYnVpbGRcXC8oXFx3KykvaSwvKGRlbGwpXFxzKHN0cmVhW2twclxcc1xcZF0qW1xcZGtvXSkvaV0sW3AsbCxbaCx5XV0sWy8oa2ZbQS16XSspXFxzYnVpbGRcXC9bXFx3XFwuXSsuKnNpbGtcXC8vaV0sW2wsW3AsXCJBbWF6b25cIl0sW2gseV1dLFsvKHNkfGtmKVswMzQ5aGlqb3JzdHV3XStcXHNidWlsZFxcL1tcXHdcXC5dKy4qc2lsa1xcLy9pXSxbW2wseC5zdHIsVC5kZXZpY2UuYW1hem9uLm1vZGVsXSxbcCxcIkFtYXpvblwiXSxbaCxnXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsuKyhhcHBsZSkvaV0sW2wscCxbaCxnXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsvaV0sW2wsW3AsXCJBcHBsZVwiXSxbaCxnXV0sWy8oYmxhY2tiZXJyeSlbXFxzLV0/KFxcdyspL2ksLyhibGFja2JlcnJ5fGJlbnF8cGFsbSg/PVxcLSl8c29ueWVyaWNzc29ufGFjZXJ8YXN1c3xkZWxsfGh1YXdlaXxtZWl6dXxtb3Rvcm9sYXxwb2x5dHJvbilbXFxzXy1dPyhbXFx3LV0rKSovaSwvKGhwKVxccyhbXFx3XFxzXStcXHcpL2ksLyhhc3VzKS0/KFxcdyspL2ldLFtwLGwsW2gsZ11dLFsvXFwoYmIxMDtcXHMoXFx3KykvaV0sW2wsW3AsXCJCbGFja0JlcnJ5XCJdLFtoLGddXSxbL2FuZHJvaWQuKyh0cmFuc2ZvW3ByaW1lXFxzXXs0LDEwfVxcc1xcdyt8ZWVlcGN8c2xpZGVyXFxzXFx3K3xuZXh1cyA3fHBhZGZvbmUpL2ldLFtsLFtwLFwiQXN1c1wiXSxbaCx5XV0sWy8oc29ueSlcXHModGFibGV0XFxzW3BzXSlcXHNidWlsZFxcLy9pLC8oc29ueSk/KD86c2dwLispXFxzYnVpbGRcXC8vaV0sW1twLFwiU29ueVwiXSxbbCxcIlhwZXJpYSBUYWJsZXRcIl0sW2gseV1dLFsvKD86c29ueSk/KD86KD86KD86Y3xkKVxcZHs0fSl8KD86c29bLWxdLispKVxcc2J1aWxkXFwvL2ldLFtbcCxcIlNvbnlcIl0sW2wsXCJYcGVyaWEgUGhvbmVcIl0sW2gsZ11dLFsvXFxzKG91eWEpXFxzL2ksLyhuaW50ZW5kbylcXHMoW3dpZHMzdV0rKS9pXSxbcCxsLFtoLG1dXSxbL2FuZHJvaWQuKztcXHMoc2hpZWxkKVxcc2J1aWxkL2ldLFtsLFtwLFwiTnZpZGlhXCJdLFtoLG1dXSxbLyhwbGF5c3RhdGlvblxcc1szNHBvcnRhYmxldmldKykvaV0sW2wsW3AsXCJTb255XCJdLFtoLG1dXSxbLyhzcHJpbnRcXHMoXFx3KykpL2ldLFtbcCx4LnN0cixULmRldmljZS5zcHJpbnQudmVuZG9yXSxbbCx4LnN0cixULmRldmljZS5zcHJpbnQubW9kZWxdLFtoLGddXSxbLyhsZW5vdm8pXFxzPyhTKD86NTAwMHw2MDAwKSsoPzpbLV1bXFx3K10pKS9pXSxbcCxsLFtoLHldXSxbLyhodGMpWztfXFxzLV0rKFtcXHdcXHNdKyg/PVxcKSl8XFx3KykqL2ksLyh6dGUpLShcXHcrKSovaSwvKGFsY2F0ZWx8Z2Vla3NwaG9uZXxodWF3ZWl8bGVub3ZvfG5leGlhbnxwYW5hc29uaWN8KD89O1xccylzb255KVtfXFxzLV0/KFtcXHctXSspKi9pXSxbcCxbbCwvXy9nLFwiIFwiXSxbaCxnXV0sWy8obmV4dXNcXHM5KS9pXSxbbCxbcCxcIkhUQ1wiXSxbaCx5XV0sWy8obmV4dXNcXHM2cCkvaV0sW2wsW3AsXCJIdWF3ZWlcIl0sW2gsZ11dLFsvKG1pY3Jvc29mdCk7XFxzKGx1bWlhW1xcc1xcd10rKS9pXSxbcCxsLFtoLGddXSxbL1tcXHNcXCg7XSh4Ym94KD86XFxzb25lKT8pW1xcc1xcKTtdL2ldLFtsLFtwLFwiTWljcm9zb2Z0XCJdLFtoLG1dXSxbLyhraW5cXC5bb25ldHddezN9KS9pXSxbW2wsL1xcLi9nLFwiIFwiXSxbcCxcIk1pY3Jvc29mdFwiXSxbaCxnXV0sWy9cXHMobWlsZXN0b25lfGRyb2lkKD86WzItNHhdfFxccyg/OmJpb25pY3x4Mnxwcm98cmF6cikpPyg6P1xcczRnKT8pW1xcd1xcc10rYnVpbGRcXC8vaSwvbW90W1xccy1dPyhcXHcrKSovaSwvKFhUXFxkezMsNH0pIGJ1aWxkXFwvL2ksLyhuZXh1c1xcczYpL2ldLFtsLFtwLFwiTW90b3JvbGFcIl0sW2gsZ11dLFsvYW5kcm9pZC4rXFxzKG16NjBcXGR8eG9vbVtcXHMyXXswLDJ9KVxcc2J1aWxkXFwvL2ldLFtsLFtwLFwiTW90b3JvbGFcIl0sW2gseV1dLFsvaGJidHZcXC9cXGQrXFwuXFxkK1xcLlxcZCtcXHMrXFwoW1xcd1xcc10qO1xccyooXFx3W147XSopOyhbXjtdKikvaV0sW1twLFMudHJpbV0sW2wsUy50cmltXSxbaCxiXV0sWy9oYmJ0di4rbWFwbGU7KFxcZCspL2ldLFtbbCwvXi8sXCJTbWFydFRWXCJdLFtwLFwiU2Ftc3VuZ1wiXSxbaCxiXV0sWy9cXChkdHZbXFwpO10uKyhhcXVvcykvaV0sW2wsW3AsXCJTaGFycFwiXSxbaCxiXV0sWy9hbmRyb2lkLisoKHNjaC1pWzg5XTBcXGR8c2h3LW0zODBzfGd0LXBcXGR7NH18Z3QtblxcZCt8c2doLXQ4WzU2XTl8bmV4dXMgMTApKS9pLC8oKFNNLVRcXHcrKSkvaV0sW1twLFwiU2Ftc3VuZ1wiXSxsLFtoLHldXSxbL3NtYXJ0LXR2Lisoc2Ftc3VuZykvaV0sW3AsW2gsYl0sbF0sWy8oKHNbY2dwXWgtXFx3K3xndC1cXHcrfGdhbGF4eVxcc25leHVzfHNtLVxcd1tcXHdcXGRdKykpL2ksLyhzYW1bc3VuZ10qKVtcXHMtXSooXFx3Ky0/W1xcdy1dKikqL2ksL3NlYy0oKHNnaFxcdyspKS9pXSxbW3AsXCJTYW1zdW5nXCJdLGwsW2gsZ11dLFsvc2llLShcXHcrKSovaV0sW2wsW3AsXCJTaWVtZW5zXCJdLFtoLGddXSxbLyhtYWVtb3xub2tpYSkuKihuOTAwfGx1bWlhXFxzXFxkKykvaSwvKG5va2lhKVtcXHNfLV0/KFtcXHctXSspKi9pXSxbW3AsXCJOb2tpYVwiXSxsLFtoLGddXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0oYVxcZHszfSkvaV0sW2wsW3AsXCJBY2VyXCJdLFtoLHldXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0obGc/KS0oWzA2Y3Y5XXszLDR9KS9pXSxbW3AsXCJMR1wiXSxsLFtoLHldXSxbLyhsZykgbmV0Y2FzdFxcLnR2L2ldLFtwLGwsW2gsYl1dLFsvKG5leHVzXFxzWzQ1XSkvaSwvbGdbZTtcXHNcXC8tXSsoXFx3KykqL2ldLFtsLFtwLFwiTEdcIl0sW2gsZ11dLFsvYW5kcm9pZC4rKGlkZWF0YWJbYS16MC05XFwtXFxzXSspL2ldLFtsLFtwLFwiTGVub3ZvXCJdLFtoLHldXSxbL2xpbnV4Oy4rKChqb2xsYSkpOy9pXSxbcCxsLFtoLGddXSxbLygocGViYmxlKSlhcHBcXC9bXFxkXFwuXStcXHMvaV0sW3AsbCxbaCx3XV0sWy9hbmRyb2lkLis7XFxzKGdsYXNzKVxcc1xcZC9pXSxbbCxbcCxcIkdvb2dsZVwiXSxbaCx3XV0sWy9hbmRyb2lkLisoXFx3KylcXHMrYnVpbGRcXC9obVxcMS9pLC9hbmRyb2lkLisoaG1bXFxzXFwtX10qbm90ZT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ksL2FuZHJvaWQuKyhtaVtcXHNcXC1fXSooPzpvbmV8b25lW1xcc19dcGx1c3xub3RlIGx0ZSk/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pXSxbW2wsL18vZyxcIiBcIl0sW3AsXCJYaWFvbWlcIl0sW2gsZ11dLFsvYW5kcm9pZC4rYTAwMCgxKVxccytidWlsZC9pXSxbbCxbcCxcIk9uZVBsdXNcIl0sW2gsZ11dLFsvXFxzKHRhYmxldClbO1xcL10vaSwvXFxzKG1vYmlsZSkoPzpbO1xcL118XFxzc2FmYXJpKS9pXSxbW2gsUy5sb3dlcml6ZV0scCxsXV0sZW5naW5lOltbL3dpbmRvd3MuK1xcc2VkZ2VcXC8oW1xcd1xcLl0rKS9pXSxbZCxbYyxcIkVkZ2VIVE1MXCJdXSxbLyhwcmVzdG8pXFwvKFtcXHdcXC5dKykvaSwvKHdlYmtpdHx0cmlkZW50fG5ldGZyb250fG5ldHN1cmZ8YW1heWF8bHlueHx3M20pXFwvKFtcXHdcXC5dKykvaSwvKGtodG1sfHRhc21hbnxsaW5rcylbXFwvXFxzXVxcKD8oW1xcd1xcLl0rKS9pLC8oaWNhYilbXFwvXFxzXShbMjNdXFwuW1xcZFxcLl0rKS9pXSxbYyxkXSxbL3J2XFw6KFtcXHdcXC5dKykuKihnZWNrbykvaV0sW2QsY11dLG9zOltbL21pY3Jvc29mdFxccyh3aW5kb3dzKVxccyh2aXN0YXx4cCkvaV0sW2MsZF0sWy8od2luZG93cylcXHNudFxcczZcXC4yO1xccyhhcm0pL2ksLyh3aW5kb3dzXFxzcGhvbmUoPzpcXHNvcykqKVtcXHNcXC9dPyhbXFxkXFwuXFxzXStcXHcpKi9pLC8od2luZG93c1xcc21vYmlsZXx3aW5kb3dzKVtcXHNcXC9dPyhbbnRjZVxcZFxcLlxcc10rXFx3KS9pXSxbYyxbZCx4LnN0cixULm9zLndpbmRvd3MudmVyc2lvbl1dLFsvKHdpbig/PTN8OXxuKXx3aW5cXHM5eFxccykoW250XFxkXFwuXSspL2ldLFtbYyxcIldpbmRvd3NcIl0sW2QseC5zdHIsVC5vcy53aW5kb3dzLnZlcnNpb25dXSxbL1xcKChiYikoMTApOy9pXSxbW2MsXCJCbGFja0JlcnJ5XCJdLGRdLFsvKGJsYWNrYmVycnkpXFx3KlxcLz8oW1xcd1xcLl0rKSovaSwvKHRpemVuKVtcXC9cXHNdKFtcXHdcXC5dKykvaSwvKGFuZHJvaWR8d2Vib3N8cGFsbVxcc29zfHFueHxiYWRhfHJpbVxcc3RhYmxldFxcc29zfG1lZWdvfGNvbnRpa2kpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC9saW51eDsuKyhzYWlsZmlzaCk7L2ldLFtjLGRdLFsvKHN5bWJpYW5cXHM/b3N8c3ltYm9zfHM2MCg/PTspKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaV0sW1tjLFwiU3ltYmlhblwiXSxkXSxbL1xcKChzZXJpZXM0MCk7L2ldLFtjXSxbL21vemlsbGEuK1xcKG1vYmlsZTsuK2dlY2tvLitmaXJlZm94L2ldLFtbYyxcIkZpcmVmb3ggT1NcIl0sZF0sWy8obmludGVuZG98cGxheXN0YXRpb24pXFxzKFt3aWRzMzRwb3J0YWJsZXZ1XSspL2ksLyhtaW50KVtcXC9cXHNcXChdPyhcXHcrKSovaSwvKG1hZ2VpYXx2ZWN0b3JsaW51eClbO1xcc10vaSwvKGpvbGl8W2t4bG5dP3VidW50dXxkZWJpYW58W29wZW5dKnN1c2V8Z2VudG9vfCg/PVxccylhcmNofHNsYWNrd2FyZXxmZWRvcmF8bWFuZHJpdmF8Y2VudG9zfHBjbGludXhvc3xyZWRoYXR8emVud2Fsa3xsaW5wdXMpW1xcL1xccy1dPyg/IWNocm9tKShbXFx3XFwuLV0rKSovaSwvKGh1cmR8bGludXgpXFxzPyhbXFx3XFwuXSspKi9pLC8oZ251KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF0sWy8oY3JvcylcXHNbXFx3XStcXHMoW1xcd1xcLl0rXFx3KS9pXSxbW2MsXCJDaHJvbWl1bSBPU1wiXSxkXSxbLyhzdW5vcylcXHM/KFtcXHdcXC5dK1xcZCkqL2ldLFtbYyxcIlNvbGFyaXNcIl0sZF0sWy9cXHMoW2ZyZW50b3BjLV17MCw0fWJzZHxkcmFnb25mbHkpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXSxbLyhoYWlrdSlcXHMoXFx3KykvaV0sW2MsZF0sWy8oaXBbaG9uZWFkXSspKD86Lipvc1xccyhbXFx3XSspKlxcc2xpa2VcXHNtYWN8O1xcc29wZXJhKS9pXSxbW2MsXCJpT1NcIl0sW2QsL18vZyxcIi5cIl1dLFsvKG1hY1xcc29zXFxzeClcXHM/KFtcXHdcXHNcXC5dK1xcdykqL2ksLyhtYWNpbnRvc2h8bWFjKD89X3Bvd2VycGMpXFxzKS9pXSxbW2MsXCJNYWMgT1NcIl0sW2QsL18vZyxcIi5cIl1dLFsvKCg/Om9wZW4pP3NvbGFyaXMpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC8oYWl4KVxccygoXFxkKSg/PVxcLnxcXCl8XFxzKVtcXHdcXC5dKikqL2ksLyhwbGFuXFxzOXxtaW5peHxiZW9zfG9zXFwvMnxhbWlnYW9zfG1vcnBob3N8cmlzY1xcc29zfG9wZW52bXMpL2ksLyh1bml4KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF1dfSxDPWZ1bmN0aW9uKHQsbil7aWYodGhpcyBpbnN0YW5jZW9mIEMpe3ZhciBpPXR8fChlJiZlLm5hdmlnYXRvciYmZS5uYXZpZ2F0b3IudXNlckFnZW50P2UubmF2aWdhdG9yLnVzZXJBZ2VudDpyKSxzPW4/Uy5leHRlbmQoTixuKTpOO3JldHVybiB0aGlzLmdldEJyb3dzZXI9ZnVuY3Rpb24oKXt2YXIgZT14LnJneC5hcHBseSh0aGlzLHMuYnJvd3Nlcik7cmV0dXJuIGUubWFqb3I9Uy5tYWpvcihlLnZlcnNpb24pLGV9LHRoaXMuZ2V0Q1BVPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5jcHUpfSx0aGlzLmdldERldmljZT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuZGV2aWNlKX0sdGhpcy5nZXRFbmdpbmU9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmVuZ2luZSl9LHRoaXMuZ2V0T1M9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLm9zKX0sdGhpcy5nZXRSZXN1bHQ9ZnVuY3Rpb24oKXtyZXR1cm57dWE6dGhpcy5nZXRVQSgpLGJyb3dzZXI6dGhpcy5nZXRCcm93c2VyKCksZW5naW5lOnRoaXMuZ2V0RW5naW5lKCksb3M6dGhpcy5nZXRPUygpLGRldmljZTp0aGlzLmdldERldmljZSgpLGNwdTp0aGlzLmdldENQVSgpfX0sdGhpcy5nZXRVQT1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNldFVBPWZ1bmN0aW9uKGUpe3JldHVybiBpPWUsdGhpc30sdGhpc31yZXR1cm4obmV3IEModCxuKSkuZ2V0UmVzdWx0KCl9O0MuVkVSU0lPTj1uLEMuQlJPV1NFUj17TkFNRTpjLE1BSk9SOmYsVkVSU0lPTjpkfSxDLkNQVT17QVJDSElURUNUVVJFOnZ9LEMuREVWSUNFPXtNT0RFTDpsLFZFTkRPUjpwLFRZUEU6aCxDT05TT0xFOm0sTU9CSUxFOmcsU01BUlRUVjpiLFRBQkxFVDp5LFdFQVJBQkxFOncsRU1CRURERUQ6RX0sQy5FTkdJTkU9e05BTUU6YyxWRVJTSU9OOmR9LEMuT1M9e05BTUU6YyxWRVJTSU9OOmR9LHR5cGVvZiBleHBvcnRzIT09bz8odHlwZW9mIG1vZHVsZSE9PW8mJm1vZHVsZS5leHBvcnRzJiYoZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1DKSxleHBvcnRzLlVBUGFyc2VyPUMpOnR5cGVvZiBkZWZpbmU9PT1zJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBDfSk6ZS5VQVBhcnNlcj1DO3ZhciBrPWUualF1ZXJ5fHxlLlplcHRvO2lmKHR5cGVvZiBrIT09byl7dmFyIEw9bmV3IEM7ay51YT1MLmdldFJlc3VsdCgpLGsudWEuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIEwuZ2V0VUEoKX0say51YS5zZXQ9ZnVuY3Rpb24oZSl7TC5zZXRVQShlKTt2YXIgdD1MLmdldFJlc3VsdCgpO2Zvcih2YXIgbiBpbiB0KWsudWFbbl09dFtuXX19fSkodHlwZW9mIHdpbmRvdz09XCJvYmplY3RcIj93aW5kb3c6dGhpcyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvdWEtcGFyc2VyLm1pbi5qcyIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogcHJlbG9hZEltZ1xuICogQHBhcmFtIGltZ1BhdGhcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5leHBvcnQgZGVmYXVsdCAoaW1nUGF0aCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBpbWc7XG4gICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFyZ3VtZW50cy5jYWxsZWUpO1xuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW1nLnNyYyA9IGltZ1BhdGg7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCIvKipcbiAqIHNldFVwQnRuVHdpdHRlclxuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHRleHQsIHNoYXJlVVJMKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChzaGFyZVVSTCA9PSBudWxsKSB7XG4gICAgc2hhcmVVUkwgPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JztcbiAgaWYgKHNoYXJlVVJMID09PSAnJykge1xuICAgIHVybCArPSBcInRleHQ9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgKz0gXCJ1cmw9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSkgKyBcIiZ0ZXh0PVwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH1cbiAgcmV0dXJuICRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ3R3aXR0ZXJTaGFyZScsICd3aWR0aD02NzAsaGVpZ2h0PTQwMCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwiLyoqXG4gKiBzZXRVcEJ0bkxpbmVcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gdGV4dFxuICogQHBhcmFtIHNoYXJlVVJMXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgkYnRuLCB0ZXh0LCBzaGFyZVVSTCA9ICcnKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChzaGFyZVVSTCA9PSBudWxsKSB7XG4gICAgc2hhcmVVUkwgPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cDovL2xpbmUubWUvbXNnL3RleHQvPyc7XG4gIGlmIChzaGFyZVVSTCA9PT0gJycpIHtcbiAgICB1cmwgKz0gXCJcIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9IGVsc2Uge1xuICAgIHVybCArPSAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKSArIFwiXFxuXCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSk7XG4gIH1cbiAgcmV0dXJuICRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ2xpbmVTaGFyZScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5MaW5lLmpzIiwiLyoqXG4gKiBzZXRVcEJ0bkZhY2Vib29rXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHNoYXJlVVJMXG4gKiBAcGFyYW0gZGVzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHNoYXJlVVJMLCBkZXNjcmlwdGlvbiA9ICcnKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChkZXNjcmlwdGlvbiA9PSBudWxsKSB7XG4gICAgZGVzY3JpcHRpb24gPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwPyZkaXNwbGF5PXBvcHVwJnU9JztcbiAgdXJsICs9IFwiXCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSk7XG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIHVybCArPSBcIiZkZXNjcmlwdGlvbj1cIiArIChlbmNvZGVVUklDb21wb25lbnQoZGVzY3JpcHRpb24pKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCBcImZhY2Vib29rU2hhcmVcIiArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSksICd3aWR0aD02NzAsaGVpZ2h0PTQwMCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5GYWNlQm9vay5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEZ1bmNcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuYyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmJsYW5rKCk7XG4gICAgdGhpcy5kZWJ1Z2dlcigpO1xuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgdGhpcy5leHBhbmRqUXVlcnkoKTtcblxuICB9XG5cbiAgYmxhbmsoKSB7XG5cbiAgICAkKCgpPT57JCgnLmJsYW5rJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpO30pO1xuXG4gIH1cblxuICBkZWJ1Z2dlcigpIHtcblxuICAgIC8vIOODh+ODkOODg+OCsOODouODvOODieWIh+abv1xuICAgIHZhciBSRUxFQVNFID0gZ2IuaW4uY29uZi5SRUxFQVNFO1xuXG4gICAgLy8g572u5o+b5a++6LGh44Gu44Oh44K944OD44OJ44KS6YWN5YiX44Go44GX44Gm5L+d5oyB44GZ44KLXG4gICAgdmFyIG1ldGhvZHMgPSBbXG4gICAgICAnbG9nJyxcbiAgICAgICdkZWJ1ZycsXG4gICAgICAnaW5mbycsXG4gICAgICAnd2FybicsXG4gICAgICAnZXJyb3InLFxuICAgICAgJ2RpcicsXG4gICAgICAndHJhY2UnLFxuICAgICAgJ2Fzc2VydCcsXG4gICAgICAnZGlyeG1sJyxcbiAgICAgICdncm91cCcsXG4gICAgICAnZ3JvdXBFbmQnLFxuICAgICAgJ3RpbWUnLFxuICAgICAgJ3RpbWVFbmQnLFxuICAgICAgJ2NvdW50JyxcbiAgICAgICdwcm9maWxlJyxcbiAgICAgICdwcm9maWxlRW5kJ1xuICAgIF07XG5cbiAgICAvLyBjb25zb2xl44GM5L2/44GI44Gq44GE5aC05ZCI44Gv56m644Gu44Kq44OW44K444Kn44Kv44OI44KS6Kit5a6a44GX44Gm44GK44GPXG4gICAgaWYoIHR5cGVvZiB3aW5kb3cuY29uc29sZSA9PT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgd2luZG93LmNvbnNvbGUgPSB7fTtcbiAgICB9XG5cbiAgICAvLyDlkITjg6Hjgr3jg4Pjg4njgpJ3aW5kb3fjgbjnm7TmjqXov73liqDjgZfjgabooYzjgY9cbiAgICBmb3IoIHZhciBpIGluIG1ldGhvZHMgKXtcbiAgICAgIChmdW5jdGlvbiggbSApe1xuXG4gICAgICAgLy8gY29uc29sZeOBq+OBguOCi++8n+ODh+ODkOODg+OCsOODouODvOODieOBr+acieWKue+8n2NvbnNvbGXjga7jgoLjga7jga/plqLmlbDvvJ9cbiAgICAgICBpZiggY29uc29sZVttXSAmJiAhUkVMRUFTRSAmJiB0eXBlb2YgY29uc29sZVttXSA9PT0gXCJmdW5jdGlvblwiICl7XG4gICAgICAgIHdpbmRvd1ttXSA9IGNvbnNvbGVbbV0uYmluZChjb25zb2xlKTtcbiAgICAgICB9IGVsc2Uge+OAgC8vIGRlYnVnTW9kZeOBjGZhbHNlLOOCguOBl+OBj+OBr+ipsuW9k+ODoeOCveODg+ODieOBjOWtmOWcqOOBl+OBquOBhOWgtOWQiOOBr+OAgeepuuOBruODoeOCveODg+ODieOCkueUqOaEj+OBmeOCi1xuICAgICAgICB3aW5kb3dbbV0gPSBmdW5jdGlvbigpe307XG4gICAgICAgfVxuXG4gICAgICB9KSggbWV0aG9kc1tpXSApO1xuICAgIH1cblxuICB9XG5cbiAgcHJlcGVuZChwYXJhbSkge1xuXG4gICAgJCgnYm9keScpLnByZXBlbmQocGFyYW0pO1xuXG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XG5cbiAgICB2YXIgRlBTID0gMTAwMC82MDtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIGNocm9tZeOChOacgOaWsOOBrlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIOWPpOOBhGZpcmVmb3jnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAgLy8gc2FmYXJpNuS7peWJjeOAgWlPUzYgc2FmYXJp55SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgRlBTKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCB0aW1lciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07ICAgICAgXG5cbiAgfVxuXG4gIGV4cGFuZGpRdWVyeSgpIHtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgdzowLCBcbiAgICAgIGg6MCwgXG4gICAgICBhZGp1c3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0VzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0SDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBjaGVja0Nzc0JsZW5kKCkge1xuXG4gICAgaWYgKCdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1MpIHtcbiAgICAgIGlmICghd2luZG93LkNTUy5zdXBwb3J0cygnbWl4LWJsZW5kLW1vZGUnLCAnc29mdC1saWdodCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvZyhnYi5pbi51LmlzSUUpO1xuXG4gICAgaWYgKGdiLmluLnUuaXNJRSkge1xuICAgICAgXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIFxuICAgIH07XG5cbiAgfVxuXG4gIG5vdFNhdmVJbWcoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBwY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG5cbiAgICAgICQoKCk9PntcbiAgICAgICAgJChcImltZ1wiKS5vbihcImNvbnRleHRtZW51XCIsKCk9PntcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBzcCBhbmRyb2lkXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgdiA9IGdiLmluLnUuaXNBbmRyb2lkVmVyc2lvbigpO1xuXG4gICAgaWYgKHY9PXVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGlmICh2PDUpIHtcblxuICAgICAgdmFyIHRpbWVyO1xuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoc3RhcnRcIiwoKT0+e1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBhbGVydChcIueUu+WDj+OBr+S/neWtmOOBp+OBjeOBvuOBm+OCk1wiKVxuICAgICAgICB9LDUwMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaGVuZFwiLCgpPT57XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pICAgICAgXG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvRnVuYy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IE1haW5cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IERpc3BsYXlUb3AgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VG9wJztcbmltcG9ydCBEaXNwbGF5VGV4dHVyZUJnIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZyc7XG5pbXBvcnQgRGlzcGxheVRleHR1cmVNb3ZpZSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlTW92aWUnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgLy9wYWdl44Oa44O844K45Yil44GuSUTjgpLlj5blvpdcbiAgICB2YXIgcGFnZSA9ICQoJ2JvZHknKS5kYXRhKCdpZCcpO1xuXG4gICAgd2luZG93LmNvbnNvbGUubG9nKCfnj77lnKjjga7jg5rjg7zjgrhJROOBryAnLCBwYWdlKTtcblxuXHRcdC8vcGFnZeOBrklE44GU44Go44Gr55m654Gr44GZ44KL44Kv44Op44K544Gu5oyv44KK5YiG44GRXG4gICAgc3dpdGNoIChwYWdlKSB7XG5cbiAgICAgIGNhc2UgJ3RvcCc6XG5cbiAgICAgICAgbmV3IERpc3BsYXlUb3AoKTtcblxuICAgICAgICBicmVhaztcblxuXHRcdFx0Y2FzZSAndGV4dHVyZUJnJzpcblxuXHRcdFx0XHRuZXcgRGlzcGxheVRleHR1cmVCZygpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXh0dXJlTW92aWUnOlxuXG5cdFx0XHRcdG5ldyBEaXNwbGF5VGV4dHVyZU1vdmllKCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuICB9XG5cbiAgb25SZW5kZXIoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5VG9wXG4gKiBEYXRlOiAxNy85LzIzXG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cblxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IERpc3BsYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBUZXh0dXJlQmcgZnJvbSBcIi4uL3Zpc3VhbC9UZXh0dXJlQmdcIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44Ki44OL44Oh44O844K344On44Oz44Or44O844OX44K544K/44O844OIXG4gICAgLy8gZ2IuaW4udXAubG9vcCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgZ2IuaW4udGV4dHVyZUJnID0gbmV3IFRleHR1cmVCZygpO1xuXG4gICAgZ2IuaW4udGV4dHVyZUJnLmluaXQoKTtcblxuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG5cdFx0Ly8gd2luZG93LmNvbnNvbGUubG9nKCdzdGF0aWNfUnVuJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlQmcuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBUZXh0dXJlQmdcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcbmltcG9ydCBQbGFuZSBmcm9tICcuL1BsYW5lJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlQmcgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJnbC1vdXRwdXQnKTtcblxuICAgIHRoaXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSA9IHRoaXMuX2NyZWF0ZUNhbWVyYS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIgPSB0aGlzLl9jcmVhdGVSZW5kZXJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmxvYWRUZXh0dXJlID0gdGhpcy5fbG9hZFRleHR1cmUuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMucGxhbmUgPSBuZXcgUGxhbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5VcGRhdGUoKTtcblxuXHRcdHRoaXMubG9hZFRleHR1cmUoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIOOCq+ODoeODqeS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZUNhbWVyYSgpe1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7zkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVSZW5kZXJlcigpe1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzICAgICAgICAgIDogZmFsc2UsXG4gICAgICBzdGVuY2lsICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlcHRoICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBmYWxzZSxcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXNcblx0XHR9KTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweGZmZmZmZiwgMC4wKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA44K344O844Oz5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OCkuODreODvOODiVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2xvYWRUZXh0dXJlKCl7XG5cblx0XHR0aGlzLnBsYW5lLmxvYWRUZXh0dXJlKCcuLi8uLi8uLi8uLi9hc3NldHMvcmVzb3VyY2UvaW1nL3NoaWJ1eWEwMS5qcGcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYW5lLm1lc2gpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcblx0XHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0dGhpcy5VcGRhdGUoKTtcblx0XHR9KTtcblxuXHR9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX1VwZGF0ZSgpIHtcblxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgICAgdGhpcy5VcGRhdGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K644Kk44OZ44Oz44OIXG4gICAqL1xuICBfb25SZXNpemUoKSB7XG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXHRcdHRoaXMucGxhbmUubWVzaC5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cblxuXHRzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9UZXh0dXJlQmcuanMiLCIvKipcbiAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG4gKi9cblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcblxuVEhSRUUuT3JiaXRDb250cm9scyA9IGZ1bmN0aW9uICggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXG5cdHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXG5cdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdHRoaXMubWluWm9vbSA9IDA7XG5cdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cblx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gSWYgc2V0LCBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIHRoZSBpbnRlcnZhbCBbIC0gTWF0aC5QSSwgTWF0aC5QSSBdLlxuXHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG5cdC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuXHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcblx0dGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcblxuXHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB6b29taW5nXG5cdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG5cdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHJvdGF0aW5nXG5cdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcblx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXG5cdHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcblx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuXHQvLyBJZiBhdXRvLXJvdGF0ZSBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuXHR0aGlzLmVuYWJsZUtleXMgPSB0cnVlO1xuXG5cdC8vIFRoZSBmb3VyIGFycm93IGtleXNcblx0dGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcblxuXHQvLyBNb3VzZSBidXR0b25zXG5cdHRoaXMubW91c2VCdXR0b25zID0geyBPUkJJVDogVEhSRUUuTU9VU0UuTEVGVCwgWk9PTTogVEhSRUUuTU9VU0UuTUlERExFLCBQQU46IFRIUkVFLk1PVVNFLlJJR0hUIH07XG5cblx0Ly8gZm9yIHJlc2V0XG5cdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblx0dGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cblx0Ly9cblx0Ly8gcHVibGljIG1ldGhvZHNcblx0Ly9cblxuXHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnBoaTtcblxuXHR9O1xuXG5cdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xuXG5cdH07XG5cblx0dGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHNjb3BlLnRhcmdldC5jb3B5KCBzY29wZS50YXJnZXQwICk7XG5cdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHNjb3BlLnBvc2l0aW9uMCApO1xuXHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cblx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9O1xuXG5cdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuXHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cblx0XHR2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG5cblx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblxuXHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cblx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblx0XHRcdHNwaGVyaWNhbC5zZXRGcm9tVmVjdG9yMyggb2Zmc2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRyb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuXHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KCBzY29wZS5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSApICk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucGhpID0gTWF0aC5tYXgoIHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpICkgKTtcblxuXHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heCggc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKCBzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cyApICk7XG5cblx0XHRcdC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuXHRcdFx0c2NvcGUudGFyZ2V0LmFkZCggcGFuT2Zmc2V0ICk7XG5cblx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKCBzcGhlcmljYWwgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG5cdFx0XHRwb3NpdGlvbi5jb3B5KCBzY29wZS50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG5cdFx0XHRzY29wZS5vYmplY3QubG9va0F0KCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY2FsZSA9IDE7XG5cdFx0XHRwYW5PZmZzZXQuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdC8vIHVwZGF0ZSBjb25kaXRpb24gaXM6XG5cdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcblx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuXG5cdFx0XHRpZiAoIHpvb21DaGFuZ2VkIHx8XG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggc2NvcGUub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgfHxcblx0XHRcdFx0OCAqICggMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApO1xuXHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cblxuXHR9O1xuXG5cdC8vXG5cdC8vIGludGVybmFsc1xuXHQvL1xuXG5cdHZhciBzY29wZSA9IHRoaXM7XG5cblx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXHR2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuXHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cblx0dmFyIFNUQVRFID0geyBOT05FIDogLSAxLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xuXG5cdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0dmFyIEVQUyA9IDAuMDAwMDAxO1xuXG5cdC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG5cdHZhciBzcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cdHZhciBzcGhlcmljYWxEZWx0YSA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblxuXHR2YXIgc2NhbGUgPSAxO1xuXHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0dmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVMZWZ0KCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVVcCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG5cblx0fVxuXG5cdHZhciBwYW5MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDAgKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR2YXIgcGFuVXAgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDEgKTsgLy8gZ2V0IFkgY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG5cdHZhciBwYW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuXHRcdFx0XHQvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cblx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG5cdFx0XHRcdC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcblx0XHRcdFx0cGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcblx0XHRcdFx0cGFuTGVmdCggZGVsdGFYICogKCBzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudFdpZHRoLCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCBkZWx0YVkgKiAoIHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0ZnVuY3Rpb24gZG9sbHlJbiggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkb2xseU91dCggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUm90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Eb2xseScgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVEb2xseScgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlV2hlZWwnICk7XG5cblx0XHRpZiAoIGV2ZW50LmRlbHRhWSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuZGVsdGFZID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xuXG5cdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRwYW4oIDAsIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcblx0XHRcdFx0cGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdHBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG5cdFx0XHRcdHBhbiggLSBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0UGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZURvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBoYW5kbGVycyAtIEZTTTogbGlzdGVuIGZvciBldmVudHMgYW5kIHJlc2V0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZU1vdXNlVXAoIGV2ZW50ICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSB8fCAoIHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUgKSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApOyAvLyBub3Qgc3VyZSB3aHkgdGhlc2UgYXJlIGhlcmUuLi5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVLZXlzID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlS2V5RG93biggZXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOlx0Ly8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZVRvdWNoRW5kKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Db250ZXh0TWVudSggZXZlbnQgKSB7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdH1cblxuXHQvL1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG5cblx0dGhpcy51cGRhdGUoKTtcblxufTtcblxuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRIUkVFLk9yYml0Q29udHJvbHM7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBUSFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xuXG5cdGNlbnRlcjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5jZW50ZXIgaGFzIGJlZW4gcmVuYW1lZCB0byAudGFyZ2V0JyApO1xuXHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0O1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdG5vWm9vbToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVab29tO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9Sb3RhdGU6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVJvdGF0ZTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUm90YXRlID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUGFuOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVQYW47XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVBhbiA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub0tleXM6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlS2V5cztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVLZXlzID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdHN0YXRpY01vdmluZyA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlRGFtcGluZztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVEYW1waW5nID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdGR5bmFtaWNEYW1waW5nRmFjdG9yIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYW1waW5nRmFjdG9yO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuXG5cdFx0fVxuXG5cdH1cblxufSApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvT3JiaXRDb250cm9scy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFBsYW5lXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmUgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLnVuaWZvcm1zID0ge307XG5cdFx0dGhpcy50ZXh0dXJlID0gbnVsbDtcblx0XHR0aGlzLm1lc2ggPSBudWxsO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSA9IHRoaXMuX2xvYWRUZXh0dXJlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jcmVhdGVNZXNoID0gdGhpcy5fY3JlYXRlTWVzaC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLl9yZXNpemUuYmluZCh0aGlzKTtcblxuICB9XG5cblx0X2xvYWRUZXh0dXJlKGltYWdlLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG5cdFx0bG9hZGVyLmxvYWQoaW1hZ2UsICh0ZXh0dXJlKSA9PiB7XG5cdFx0XHR0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgdGhpcy5tZXNoID0gdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuXHR9XG5cblx0X2NyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy51bmlmb3JtcyA9IHtcblx0XHRcdHJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZVJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKDIwNDgsIDEzNTYpLFxuXHRcdFx0fSxcblx0XHRcdHRleHR1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3QnLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy50ZXh0dXJlLFxuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIG5ldyBUSFJFRS5NZXNoKFxuXHRcdFx0bmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiksXG5cdFx0XHRuZXcgVEhSRUUuUmF3U2hhZGVyTWF0ZXJpYWwoe1xuXHRcdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3Jtcyxcblx0XHRcdFx0dmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2NvdmVyLnZlcnQnKSxcblx0XHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvY292ZXIuZnJhZycpLFxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfcmVuZGVyKHRpbWUpIHtcblxuXHRcdGlmICh0aGlzLnN0b3ApIHJldHVybjtcblx0XHR0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgKz0gdGltZSAvIHRoaXMuaW50ZXJ2YWw7XG5cdFx0aWYgKHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA+IDEpIHtcblx0XHRcdHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA9IDA7XG5cdFx0XHR0aGlzLnByZXZfbnVtID0gdGhpcy5uZXh0X251bTtcblx0XHRcdHRoaXMudW5pZm9ybXMudGV4UHJldi52YWx1ZSA9IHRoaXMudGV4dHVyZXNbdGhpcy5uZXh0X251bV07XG5cdFx0XHR3aGlsZSAodGhpcy5uZXh0X251bSA9PSB0aGlzLnByZXZfbnVtKSB7XG5cdFx0XHRcdHRoaXMubmV4dF9udW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRleHR1cmVzLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVuaWZvcm1zLnRleE5leHQudmFsdWUgPSB0aGlzLnRleHR1cmVzW3RoaXMubmV4dF9udW1dO1xuXHRcdH1cbiAgfVxuXG5cdF9yZXNpemUoKXtcblx0XHR0aGlzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuICAgIHZVdiA9IHV2O1xcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLnZlcnRcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG51bmlmb3JtIHZlYzIgaW1hZ2VSZXNvbHV0aW9uO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcbiAgICB2ZWMyIHJhdGlvID0gdmVjMihcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi54IC8gcmVzb2x1dGlvbi55KSAvIChpbWFnZVJlc29sdXRpb24ueCAvIGltYWdlUmVzb2x1dGlvbi55KSwgMS4wKSxcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi55IC8gcmVzb2x1dGlvbi54KSAvIChpbWFnZVJlc29sdXRpb24ueSAvIGltYWdlUmVzb2x1dGlvbi54KSwgMS4wKVxcbiAgICApO1xcblxcbiAgICB2ZWMyIHV2ID0gdmVjMihcXG4gICAgICAgIHZVdi54ICogcmF0aW8ueCArICgxLjAgLSByYXRpby54KSAqIDAuNSxcXG4gICAgICAgIHZVdi55ICogcmF0aW8ueSArICgxLjAgLSByYXRpby55KSAqIDAuNVxcbiAgICApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdXYpO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci5mcmFnXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG4vLyBpbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vdmlzdWFsL0NhbnZhc1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENhbnZhc1xuICogRGF0ZTogMTcvOS8yM1xuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy51bmlmb3JtcyA9IHtcbiAgICAgIHVfdGltZTogeyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxuICAgICAgdV9yZXNvbHV0aW9uOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfSxcbiAgICAgIHVfbW91c2U6IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9XG4gICAgfTtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJnbC1vdXRwdXQnKTtcblxuICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAvLyB0aGlzLm91dHB1dCA9IG9wdHMub3V0cHV0IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuXHRcdHRoaXMuY3ViZSA9IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSA9IHRoaXMuX2NyZWF0ZUNhbWVyYS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIgPSB0aGlzLl9jcmVhdGVSZW5kZXJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlT2JqZWN0ID0gdGhpcy5fY3JlYXRlT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcmJpdENvbnRyb2xzID0gdGhpcy5fb3JiaXRDb250cm9scy5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wbGFuZU9iamVjdCA9IHRoaXMuX3BsYW5lT2JqZWN0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLlVwZGF0ZSA9IHRoaXMuX1VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLm9yYml0Q29udHJvbHMoKTtcblx0XHQvLyB0aGlzLmNyZWF0ZU9iamVjdCgpO1xuXG4gICAgdGhpcy5wbGFuZU9iamVjdCgpO1xuXG4gICAgdGhpcy5VcGRhdGUoKTtcblxuICAgIC8vIHRoaXMudGl0bGVPYmplY3QubG9hZFRleHR1cmUoKCkgPT4ge1xuICAgIC8vICAgdGhpcy5zY2VuZS5hZGQodGhpcy50aXRsZU9iamVjdC5vYmopO1xuICAgIC8vIH0pO1xuXG4gICAgLy/jg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4jnmbrngatcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0sIGZhbHNlKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOOCq+ODoeODqeS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZUNhbWVyYSgpe1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7zkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVSZW5kZXJlcigpe1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzICAgICAgICAgIDogZmFsc2UsXG4gICAgICBzdGVuY2lsICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlcHRoICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBmYWxzZSxcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXNcblx0XHR9KTtcblxuICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweGZmZmZmZik7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4MDAwMDAwKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAvLyB0aGlzLm91dHB1dC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICogT2JqZWN05L2c5oiQXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfY3JlYXRlT2JqZWN0KCl7XG5cbiAgICBsZXQgY3ViZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDQsIDQpO1xuICAgIGxldCBjdWJlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgICAgd2lyZWZyYW1lOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmN1YmUgPSBuZXcgVEhSRUUuTWVzaChjdWJlR2VvbWV0cnksIGN1YmVNYXRlcmlhbCk7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnggPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi55ID0gMztcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueiA9IDM7XG5cbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmN1YmUpO1xuXG5cdH1cblxuXHRfcGxhbmVPYmplY3QoKXtcbiAgICB0aGlzLnBsYW5lID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgIC8vIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDI1NiwgNjQsIDQwLCAxMCksXG4gICAgICAgIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDUsIDIwLCAzMiksXG4gICAgICAgIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAgICAgdW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG4gICAgICAgICAgdmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2luZGV4L3Rlc3QudmVydCcpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2luZGV4L3Rlc3QuZnJhZycpLFxuICAgICAgICB9KVxuICAgIClcbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYW5lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7xcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9yZW5kZXIoKSB7XG4gICAgbGV0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG4gICAgbGV0IHRpbWUgPSBjbG9jay5nZXREZWx0YSgpO1xuXG4gICAgLy8gdGhpcy50aXRsZU9iamVjdC50aXRyZW5kZXIodGltZSk7XG4gIH1cblxuICAvKipcbiAgICog5pu05pawXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfVXBkYXRlKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICB0aGlzLlVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIC8vIHRoaXMuY29udHJvbHMudXBkYXRlKCk7XG4gICAgdGhpcy51bmlmb3Jtcy51X3RpbWUudmFsdWUgKz0gMC4wNTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrpcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cblx0LyoqXG4gICAqIOOCq+ODoeODqeOCs+ODs+ODiOODreODvOODq1xuXHQgKi9cblx0X29yYml0Q29udHJvbHMoKXtcblx0XHR0aGlzLmNvbnRyb2xzID0gbmV3IFRIUkVFLk9yYml0Q29udHJvbHModGhpcy5jYW1lcmEpO1xuXHRcdHRoaXMuY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XG5cdFx0bGV0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG5cblx0XHRsZXQgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xuXHRcdHRoaXMuY29udHJvbHMudXBkYXRlKGRlbHRhKTtcbiAgfVxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL0NhbnZhcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbi8vYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvaW5kZXgvdGVzdC52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdmVjMiBzdCA9IGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb24ueHk7XFxuICAgIGdsX0ZyYWdDb2xvcj12ZWM0KHN0Lngsc3QueSwwLjAsMS4wKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvaW5kZXgvdGVzdC5mcmFnXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9