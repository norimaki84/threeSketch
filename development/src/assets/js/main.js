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

__webpack_require__(20);

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
 * Author:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display_DisplayTextureBg__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Display_DisplayTextureMovie__ = __webpack_require__(36);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visual_SceneManger__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visual_Scene01__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visual_Scene02__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visual_Scene03__ = __webpack_require__(27);
/**
 * fileOverview:
 * Project:
 * File: Display
 * Date: 17/6/23
 * Author: Teraguchi
 */





// import OverScene from "../visual/overScene";

// import WebGLinit from './WebGLinit.js';

// import Canvas from "../visual/Canvas";

'use strict';

class DisplayTop {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {}

  onLoad() {

    gb.in.sceneManger = new __WEBPACK_IMPORTED_MODULE_0__visual_SceneManger__["a" /* default */]();

    gb.in.sceneBoxA = new __WEBPACK_IMPORTED_MODULE_1__visual_Scene01__["a" /* default */]();
    gb.in.sceneBoxB = new __WEBPACK_IMPORTED_MODULE_2__visual_Scene02__["a" /* default */]();
    gb.in.sceneBoxC = new __WEBPACK_IMPORTED_MODULE_3__visual_Scene03__["a" /* default */]();

    gb.in.sceneManger.addScene(gb.in.sceneBoxA);
    gb.in.sceneManger.addScene(gb.in.sceneBoxB);
    gb.in.sceneManger.addScene(gb.in.sceneBoxC);

    gb.in.sceneManger.draw();
  }

  static run() {}

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayTop;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_Entry__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visual_overScene02__ = __webpack_require__(21);
/**
 * fileOverview:
 * Project:
 * File: SceneManger
 * Date: 17/05/29
 * Author: Teraguchi
 */


// import OverScene from "../visual/overScene";


'use strict';

class SceneManger extends __WEBPACK_IMPORTED_MODULE_0__Core_Entry__["a" /* default */] {

  constructor() {

    super();

    this.NUM = 0; // 現在のシーンの番号
    this.scenes = []; // シーンを格納する配列
    this.fadeInOutTimer = -1; //
    this.op = 0;

    this.canvas = null;
    this.renderer = null; // Renderer
    this.renderer02 = null; // Renderer02

    this.overscene = []; // overscene


    this.overAlpha = 0;

    this.addScene = this._addScene.bind(this);

    this.onResize = this._onResize.bind(this);
    this.checkNum = this._checkNum.bind(this);
    this.onKeyDown = this._onKeyDown.bind(this);
    this.fadeInOut = this._fadeInOut.bind(this);
    this.draw = this._draw.bind(this);

    this.alphaReset = this._alphaReset.bind(this);

    this.keyname = null;

    this.init(); // 初期化処理後、イベント登録

    window.addEventListener('resize', this.onResize, false);
    document.addEventListener("keydown", this.onKeyDown, true);
  }

  /**
   * 初期化
   */
  init() {

    this.overscene.push(new __WEBPACK_IMPORTED_MODULE_1__visual_overScene02__["a" /* default */]());

    // Renderer作成
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(new THREE.Color(0x000000, 0.0));
    this.renderer.sortObjects = false;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.domElement.id = "main";
    this.canvas = this.renderer.domElement;
    document.body.appendChild(this.canvas);

    // Renderer02作成
    this.renderer02 = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer02.setPixelRatio(window.devicePixelRatio);
    this.renderer02.setSize(window.innerWidth, window.innerHeight);
    this.renderer02.sortObjects = false;
    this.renderer02.shadowMap.enabled = true;
    this.renderer02.shadowMap.type = THREE.PCFShadowMap;
    this.renderer02.domElement.id = "sub";
    this.renderer02.setClearColor(0x000000, 0.5);
    this.canvas02 = this.renderer02.domElement;
    document.body.appendChild(this.canvas02);
  }

  /**
    * 管理したいシーンを格納する関数
   * @param scene
   */
  _addScene(scene) {

    this.scenes.push(scene);
  }

  /**
   *　ウィンドウの幅が変わったときの処理
   * @private
   */
  _onResize() {

    // 表示しているシーンごとにカメラのリサイズを走らせる
    this.scenes[this.NUM].camera.aspect = window.innerWidth / window.innerHeight;
    this.scenes[this.NUM].camera.updateProjectionMatrix();
    // rendererは全てのシーンで共通
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // this.overscene[0].camera.aspect = window.innerWidth / window.innerHeight;
    // this.overscene[0].camera.updateProjectionMatrix();
    // this.renderer02.setSize(window.innerWidth, window.innerHeight);
  }

  /**
    * 現在のシーン番号が、不適切な値にならないようにチェック
   * @private
   */
  _checkNum() {

    if (this.NUM < 0) {
      this.NUM = this.scenes.length - 1;
    }

    if (this.NUM >= this.scenes.length) {
      this.NUM = 0;
    }
  }

  /**
    * ←→キーでシーン番号を足し引き
   * @private
   */
  _onKeyDown() {
    window.onkeydown = e => {
      // console.log(e);
      this.keyname = e.key;

      if (this.keyname == "ArrowRight") {
        // this.alphaReset();
        this.NUM++;
        this.checkNum();
      }

      if (this.keyname == "ArrowLeft") {
        // this.alphaReset();
        this.NUM--;
        this.checkNum();
      }

      if (this.keyname == "ArrowRight" || this.keyname == "ArrowLeft") {

        this.fadeInOutTimer = 0;
      }

      if (this.keyname == "ArrowUp") {
        // window.console.log('Up');

        this.overAlpha += 0.05;
        if (this.overAlpha > 1) {
          this.overAlpha = 1.0;
        }
      }

      if (this.keyname == "ArrowDown") {
        // window.console.log('Down');

        this.overAlpha -= 0.05;
        if (this.overAlpha < 0) {
          this.overAlpha = 0.0;
        }
      }

      $("#sub").css({ opacity: this.overAlpha });
      window.console.log('現在のシーン番号は', this.NUM);
    };
  }

  /**
  * シーンチェンジ時のレイヤー
   * @private
   */
  _fadeInOut() {

    if (this.fadeInOutTimer <= Math.PI * 2) {

      this.fadeInOutTimer += 0.07;
      this.op = Math.sin(this.fadeInOutTimer);

      $("#fadeInOut").css({ opacity: this.op });
    } else {

      this.fadeInOutTimer = -1;
      this.op = 0.0;
    }

    if (this.op > 0.95 && this.op <= 1.0) {
      switch (this.keyname) {
        case 'ArrowRight':

          // this.NUM++;
          // this.checkNum();
          this.alphaReset();
          break;

        case 'ArrowLeft':

          // this.NUM--;
          // this.checkNum();
          this.alphaReset();
          break;
      }
    }
  }

  _alphaReset() {
    this.overAlpha = 0.0;

    $("#sub").css({ opacity: this.overAlpha });
  }

  /**
    * 最終的な描写処理と、アニメーション関数をワンフレームごとに実行
   * @private
   */
  _draw() {

    // window.console.log(this.fadeInOutTimer);

    this.scenes[this.NUM].update();
    // this.overscene[this.NUM].update();
    // this.overscene[0].update();
    this.renderer.render(this.scenes[this.NUM].scene, this.scenes[this.NUM].camera);
    // this.renderer02.render(this.overscene[0].scene, this.overscene[0].camera);
    requestAnimationFrame(this.draw.bind(this));

    if (this.fadeInOutTimer >= 0) {
      this.fadeInOut();
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SceneManger;


/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_Entry__ = __webpack_require__(0);
/**
 * fileOverview:
 * Project:
 * File: overScene02
 * Date: 17/06/21
 * Author: Teraguchi
 */



'use strict';

class overScene02 extends __WEBPACK_IMPORTED_MODULE_0__Core_Entry__["a" /* default */] {

  constructor() {

    super();

    this.timer = 0;
    this.UPDATE = true;
    this.END = false;
    this.scene = null;
    this.camera = null;

    this.createScene = this._createScene.bind(this);
    this.remove = this._remove.bind(this);
    this.endEnabled = this._endEnabled.bind(this);
    this.update = this._update.bind(this);

    this.createScene();
  }

  /**
   * シーンを作成。オブジェクトを格納
   * @private
   */
  _createScene() {

    this.scene = new THREE.Scene(); //シーン作成

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 1400;
    this.camera.lookAt(new THREE.Vector3(10, 0, 0));

    this.geometry = new THREE.InstancedBufferGeometry();
    this.geometry.copy(new THREE.CircleBufferGeometry(1, 6));

    let particleCount = 10000;
    let translateArray = new Float32Array(particleCount * 3);
    for (let i = 0, i3 = 0, l = particleCount; i < l; i++, i3 += 3) {
      translateArray[i3 + 0] = Math.random() * 2 - 1;
      translateArray[i3 + 1] = Math.random() * 2 - 1;
      translateArray[i3 + 2] = Math.random() * 2 - 1;
    }
    this.geometry.addAttribute("translate", new THREE.InstancedBufferAttribute(translateArray, 3, 1));
    this.material = new THREE.RawShaderMaterial({
      uniforms: {
        map: { value: new THREE.TextureLoader().load("../../../../assets/resource/img/circle.png") },
        time: { value: 0.0 }
      },
      vertexShader: __webpack_require__(22),
      fragmentShader: __webpack_require__(23),
      depthTest: true,
      depthWrite: true
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.scale.set(400, 400, 400);
    this.scene.add(this.mesh);
  }

  /**
  *
   * @private
   */
  _remove() {
    while (this.scene.children.length != 0) {
      this.scene.remove(this.scene.children[0]);
      if (this.scene.children[0] == THREE.Mesh) {
        this.scene.children[0].geometry.dispose();
        this.scene.children[0].material.dispose();
      }
    };
  }

  /**
  *
   * @private
   */
  _endEnabled() {
    this.UPDATE = false;
  }

  /**
   * update関数
   * @private
   */
  _update() {
    this.timer += 0.01;
    //console.log(this.END);
    if (this.UPDATE == false) {
      //this.scene.remove(this.scene.children[0]);
      this.remove();
      if (this.scene.children.length == 0) {
        this.END = true;
      }
    }
    let time = performance.now() * 0.0005;
    this.material.uniforms.time.value = time;
    this.mesh.rotation.x = time * 0.2;
    this.mesh.rotation.y = time * 0.4;
    // this.camera.position.y = 100*Math.sin(this.timer);
    // this.camera.position.x = 100* Math.cos(this.timer);
    let rad = 600 + Math.sin(this.timer) * 200;
    this.camera.position.x = Math.sin(this.timer * 0.4) * Math.cos(this.timer * 0.3) * rad;
    this.camera.position.y = Math.cos(this.timer * 0.4) * rad;
    this.camera.position.z = Math.sin(this.timer * 0.4) * Math.sin(this.timer * 0.3) * rad; //+Math.sin(this.timer*0.5)*200;
    this.camera.lookAt(new THREE.Vector3(0, 0, 100 * Math.cos(this.timer * 0.005)));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = overScene02;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/TeraMac/Documents/01_Work_pr/threeSketch/development/src/assets/glsl/over.vert Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type.\n| precision highp float;\n| uniform mat4 modelViewMatrix;\n| uniform mat4 projectionMatrix;");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/TeraMac/Documents/01_Work_pr/threeSketch/development/src/assets/glsl/over.frag Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type.\n| precision highp float;\n| uniform sampler2D map;\n| varying vec2 vUv;");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_Entry__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_audio__ = __webpack_require__(25);
/**
 * fileOverview:
 * Project:
 * File: Scene01
 * Date: 17/05/31
 * Author: Teraguchi
 */





'use strict';

class Scene01 extends __WEBPACK_IMPORTED_MODULE_0__Core_Entry__["a" /* default */] {

  constructor() {

    super();

    this.scene = null;
    this.camera = null;
    this.cube = null;

    this.loader = new THREE.TextureLoader();
    this.mapTexture = this.loader.load('./../../../assets/resource/img/stone.jpg');

    this.timer = 0;

    this.elVolume = null;
    this.elVolumeVal = null;

    this.group = null;

    this.render = this._render.bind(this);

    this.createScene = this._createScene.bind(this);
    this.update = this._update.bind(this);

    this.cube_update = this._cube_update.bind(this);

    this.createScene();

    // this.audioInit = new audio();

    this.audioInit();
  }

  audioInit() {

    let ctx, analyser, frequencies, getByteFrequencyDataAverage, execute;

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    ctx = new AudioContext();

    analyser = ctx.createAnalyser();
    frequencies = new Uint8Array(analyser.frequencyBinCount);

    getByteFrequencyDataAverage = function () {
      analyser.getByteFrequencyData(frequencies);
      return frequencies.reduce(function (previous, current) {
        return previous + current;
      }) / analyser.frequencyBinCount;
    };

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      window.hackForMozzila = stream;
      ctx.createMediaStreamSource(stream)
      // AnalyserNodeに接続
      .connect(analyser);
    }).catch(err => {
      window.console.log(err.message);
    });

    // 音量を表示する要素
    this.elVolume = document.getElementById('volume');

    //可能な限り高いフレームレートで音量を取得し、表示を更新する
    execute = function () {
      // this.elVolume.innerHTML = Math.floor(getByteFrequencyDataAverage());
      this.elVolumeVal = Math.floor(getByteFrequencyDataAverage());

      requestAnimationFrame(execute);
    }.bind(this);

    execute();
  }

  /**
   * シーンを作成。オブジェクトを格納
   * @private
   */
  _createScene() {

    this.scene = new THREE.Scene(); //シーン作成

    this.group = new THREE.Group();
    const step = 30;
    const num = 10;
    for (let x = 1; x <= num; x++) {
      for (let y = 1; y <= num; y++) {
        for (let z = 1; z <= num; z++) {
          this.cube = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshLambertMaterial({
            color: 0xffffff,
            map: this.mapTexture,
            bumpMap: this.mapTexture,
            bumpScale: 0.05,
            specular: 0xcccccc,
            shininess: 50,
            ambient: 0xffffff
          }));
          this.cube.position.set((x - num / 2) * step, (y - num / 2) * step, (z - num / 2) * step);

          this.group.add(this.cube);
        }
      }
    }
    this.scene.add(this.group);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(200, 200, 200);
    this.scene.add(pointLight);

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 200;
  }

  _cube_update(waveData) {

    this.group.scale.x = 1 + waveData / 200;
    this.group.scale.y = 1 + waveData / 200;
    this.group.scale.z = 1 + waveData / 200;
  }

  _render() {
    this.group.rotation.x += 0.01;
    this.group.rotation.y += 0.01;
    this.group.rotation.z += 0.01;
    this.group.traverse(function (obj) {
      if (obj != this.group) {
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01;
        obj.rotation.z += 0.01;
      }
    }.bind(this));
  }

  /**
   *
   * @private
   */
  _update() {

    this.cube_update(this.elVolumeVal);

    this.render();
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene01;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * fileOverview:
 * Project:
 * File: audio
 * Date:
 * Author: Teraguchi
 */



class audio {

  constructor() {

    this.elVolume = null;
    this.elVolumeVal = null;

    this.getByteFrequencyDataAverage = null;

    this.execute = this._execute.bind(this);

    this.getVal = this._getVal.bind(this);

    this.audioInit();
  }

  /**
   * 初期化
   */
  audioInit() {

    let ctx, analyser, frequencies;

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    ctx = new AudioContext();

    analyser = ctx.createAnalyser();
    frequencies = new Uint8Array(analyser.frequencyBinCount);

    this.getByteFrequencyDataAverage = function () {
      analyser.getByteFrequencyData(frequencies);
      return frequencies.reduce(function (previous, current) {
        return previous + current;
      }) / analyser.frequencyBinCount;
    };

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      window.hackForMozzila = stream;
      ctx.createMediaStreamSource(stream)
      // AnalyserNodeに接続
      .connect(analyser);
    }).catch(err => {
      window.console.log(err.message);
    });

    this.execute();
  }

  /**
   *
   * @private
   */
  _execute() {
    // 音量を表示する要素
    this.elVolume = document.getElementById('volume');

    // 可能な限り高いフレームレートで音量を取得し、表示を更新する
    this.elVolume.innerHTML = Math.floor(this.getByteFrequencyDataAverage());
    this.elVolumeVal = Math.floor(this.getByteFrequencyDataAverage());

    requestAnimationFrame(this.execute);

    return this.elVolumeVal;
  }

  _getVal() {

    return this.elVolumeVal;
  }

}
/* unused harmony export default */


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_Entry__ = __webpack_require__(0);
/**
 * fileOverview:
 * Project:
 * File: Scene02
 * Date: 17/05/31
 * Author: Teraguchi
 */


// import audio from "./Utils/audio";

'use strict';

class Scene02 extends __WEBPACK_IMPORTED_MODULE_0__Core_Entry__["a" /* default */] {

  constructor() {

    super();

    this.scene = null;
    this.camera = null;
    this.step = 0;
    this.knot = null; // 結び目

    this.elVolume = null;
    this.elVolumeVal = null;

    //トーラス生成で必要なパラメータ
    this.radius = 20;
    this.tube = 28.2;
    this.radialSegments = 600;
    this.tubularSegments = 12;
    this.p = 5;
    this.q = 4;
    this.heightScale = 4;
    this.asParticles = true;
    this.rotate = true;

    this.perMat = null;

    this.canvas = null;

    this.timer = 0;

    this.generateSprite = this._generateSprite.bind(this);
    this.createParticleSystem = this._createParticleSystem.bind(this);
    this.createMesh = this._createMesh.bind(this);

    this.circle_update = this._circle_update.bind(this);

    this.createScene = this._createScene.bind(this);
    this.update = this._update.bind(this);

    this.createScene();

    this.audioInit();
  }

  audioInit() {

    let ctx, analyser, frequencies, getByteFrequencyDataAverage, execute;

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    ctx = new AudioContext();

    analyser = ctx.createAnalyser();
    frequencies = new Uint8Array(analyser.frequencyBinCount);

    getByteFrequencyDataAverage = function () {
      analyser.getByteFrequencyData(frequencies);
      return frequencies.reduce(function (previous, current) {
        return previous + current;
      }) / analyser.frequencyBinCount;
    };

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      window.hackForMozzila = stream;
      ctx.createMediaStreamSource(stream)
      // AnalyserNodeに接続
      .connect(analyser);
    }).catch(err => {
      window.console.log(err.message);
    });

    // 音量を表示する要素
    this.elVolume = document.getElementById('volume');

    // 可能な限り高いフレームレートで音量を取得し、表示を更新する
    execute = function () {
      // this.elVolume.innerHTML = Math.floor(getByteFrequencyDataAverage());
      this.elVolumeVal = Math.floor(getByteFrequencyDataAverage());

      requestAnimationFrame(execute);
    }.bind(this);

    //
    execute();
  }

  // from THREE.js examples
  _generateSprite() {

    this.canvas = document.createElement('canvas');
    this.canvas.width = 16;
    this.canvas.height = 16;

    const context = this.canvas.getContext('2d');
    const gradient = context.createRadialGradient(this.canvas.width / 2, this.canvas.height / 2, 0, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
    gradient.addColorStop(1, 'rgba(0,0,0,1)');

    context.fillStyle = gradient;
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const texture = new THREE.Texture(this.canvas);
    texture.needsUpdate = true;
    return texture;
  }

  _createParticleSystem(geom) {
    this.perMat = new THREE.ParticleBasicMaterial({
      color: 0xffffff,
      size: 2,
      transparent: true,
      blending: THREE.AdditiveBlending,
      map: this.generateSprite()
    });

    const system = new THREE.ParticleSystem(geom, this.perMat);
    system.sortParticles = true;
    return system;
  }

  _createMesh(geom) {

    // assign two materials
    const meshMaterial = new THREE.MeshNormalMaterial({});
    meshMaterial.side = THREE.DoubleSide;

    // create a multimaterial
    const mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

    return mesh;
  }

  /**
   * シーンを作成。オブジェクトを格納
   * @private
   */
  _createScene() {

    this.scene = new THREE.Scene(); //シーン作成

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
    this.camera.position.x = -30;
    this.camera.position.y = 40;
    this.camera.position.z = 50;
    this.camera.lookAt(new THREE.Vector3(10, 0, 0));

    if (this.knot) this.scene.remove(this.knot);
    // create a new one
    let geom = new THREE.TorusKnotGeometry(this.radius, this.tube, Math.round(this.radialSegments), Math.round(this.tubularSegments), Math.round(this.p), Math.round(this.q), this.heightScale);

    if (this.asParticles) {
      this.knot = this.createParticleSystem(geom);
    } else {
      this.knot = this.createMesh(geom);
    }

    this.scene.add(this.knot);
  }

  /**
   *　画面リサイズイベント
   */
  _onResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  _circle_update(waveData) {

    this.knot.scale.x = 1 + waveData / 30;
    this.knot.scale.y = 1 + waveData / 30;
    this.knot.scale.z = 1 + waveData / 30;
  }

  /**
   * update関数
   * @private
   */
  _update() {

    this.circle_update(this.elVolumeVal);

    if (this.rotate) {
      this.knot.rotation.x = this.step += 0.001;
      this.knot.rotation.y = this.step += 0.001;
      this.knot.rotation.z = this.step += 0.001;

      this.timer += 0.01;
      let rad = 10 + Math.sin(this.timer) * 10;
      this.camera.position.x = Math.sin(this.timer * 0.4) * Math.cos(this.timer * 0.3) * rad;
      this.camera.position.y = Math.cos(this.timer * 0.4) * rad;
      this.camera.position.z = Math.sin(this.timer * 0.4) * Math.sin(this.timer * 0.3) * rad;
      this.camera.lookAt(new THREE.Vector3(0, 0, 100 * Math.cos(this.timer * 0.005)));
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene02;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_Entry__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PlaneScene03__ = __webpack_require__(28);
/**
 * fileOverview:
 * Project:
 * File: Scene03
 * Date: 17/06/19
 * Author: Teraguchi
 */




'use strict';

class Scene03 extends __WEBPACK_IMPORTED_MODULE_0__Core_Entry__["a" /* default */] {

  constructor() {

    super();

    this.canvas = document.getElementById('main');

    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;

    this.camera = null;
    this.renderer = null;
    this.scene = null;

    this.createScene = this._createScene.bind(this);

    this.onResize = this._onResize.bind(this);
    this.update = this._update.bind(this);
    this.loadTexture = this._loadTexture.bind(this);

    this.plane = new __WEBPACK_IMPORTED_MODULE_1__PlaneScene03__["a" /* default */](); // plane

    this.init(); // 初期化実行
  }

  /**
   * 初期化
   */
  init() {

    this.createScene();

    this.loadTexture();
  }

  /**
   *　シーン作成
   */
  _createScene() {

    this.scene = new THREE.Scene(); //シーン作成

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 100;

    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
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
      this.update();
    });
  }

  /**
   * 更新
   * @private
   */
  _update() {

    this.plane.uniforms.time.value += 0.05;

    // window.console.log('03');
  }

  /**
   *　画面リサイズイベント
   */
  _onResize() {
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
    this.plane.mesh.material.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene03;


/***/ }),
/* 28 */
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

class PlaneScene03 extends __WEBPACK_IMPORTED_MODULE_0__Core_Entry__["a" /* default */] {

	constructor() {

		super();

		this.uniforms = {};
		this.texture = null;
		this.mesh = null;

		this.loadTexture = this._loadTexture.bind(this);
		this.createMesh = this._createMesh.bind(this);
		// this.render = this._render.bind(this);
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
			time: { type: "f", value: 1.0 },
			resolution: { type: "v2", value: new THREE.Vector2() },
			mouse: { type: "v2", value: new THREE.Vector2() }
		};
		return new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), new THREE.RawShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: __webpack_require__(29),
			fragmentShader: __webpack_require__(30)
		}));
	}

	/**
  * レンダラー
  * @private
  */
	// _render(time) {
	//
	// if (this.stop) return;
	// this.uniforms.time.value += time / this.interval;
	// if (this.uniforms.time.value > 1) {
	// 	this.uniforms.time.value = 0;
	// 	this.prev_num = this.next_num;
	// 	this.uniforms.texPrev.value = this.textures[this.next_num];
	// 	while (this.next_num == this.prev_num) {
	// 		this.next_num = Math.floor(Math.random() * this.textures.length);
	// 	}
	// 	this.uniforms.texNext.value = this.textures[this.next_num];
	// }
	// }

	/**
  *
  * @private
  */
	_resize() {
		this.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlaneScene03;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/TeraMac/Documents/01_Work_pr/threeSketch/development/src/assets/glsl/scene03.vert Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type.\n| attribute vec3 position;\n| attribute vec2 uv;\n| ");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/TeraMac/Documents/01_Work_pr/threeSketch/development/src/assets/glsl/scene03.frag Unexpected token (2:10)\nYou may need an appropriate loader to handle this file type.\n| /* 精度修飾子の宣言 */\n| precision mediump float;\n| \n| /* WebGLで受け渡された変数 */");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visual_TextureBg__ = __webpack_require__(32);
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_Entry__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Plane__ = __webpack_require__(33);
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
/* 33 */
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
			vertexShader: __webpack_require__(34),
			fragmentShader: __webpack_require__(35)
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
/* 34 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/TeraMac/Documents/01_Work_pr/threeSketch/development/src/assets/glsl/cover.vert Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type.\n| attribute vec3 position;\n| attribute vec2 uv;\n| ");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/TeraMac/Documents/01_Work_pr/threeSketch/development/src/assets/glsl/cover.frag Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type.\n| precision highp float;\n| \n| uniform vec2 resolution;");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visual_Canvas__ = __webpack_require__(37);
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_Entry__ = __webpack_require__(0);
/**
 * fileOverview:
 * Project:
 * File: Canvas
 * Date:
 * Author: Teraguchi
 */


// import TitleObject from "./TitleObject";
// import Camera from './Utils/Camera';

'use strict';

class Canvas extends __WEBPACK_IMPORTED_MODULE_0__Core_Entry__["a" /* default */] {

  constructor() {

    super();

    this.uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_resolution: { type: "v2", value: new THREE.Vector2() },
      u_mouse: { type: "v2", value: new THREE.Vector2() }
    };

    // this.titleObject = new TitleObject();

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
      vertexShader: __webpack_require__(38),
      fragmentShader: __webpack_require__(39)
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
/* 38 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/TeraMac/Documents/01_Work_pr/threeSketch/development/src/assets/glsl/index/test.vert Unexpected token (3:12)\nYou may need an appropriate loader to handle this file type.\n| //attribute vec3 position;\n| \n| void main() {\n|     gl_Position = vec4( position, 1.0 );\n| }");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/TeraMac/Documents/01_Work_pr/threeSketch/development/src/assets/glsl/index/test.frag Unexpected token (1:8)\nYou may need an appropriate loader to handle this file type.\n| uniform vec2 u_resolution;\n| uniform float u_time;\n| ");

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map