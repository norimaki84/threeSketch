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
 * Date:
 * Author: Teraguchi
 */


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjYxOGFkOThjMmU1MDQ1ZTkzODEiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0NvbmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FycmF5L0FycmF5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvdWEvY2hlY2tDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvdWEtcGFyc2VyLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9pbWcvcHJlbG9hZEltZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0blR3aXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5MaW5lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuRmFjZUJvb2suanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9UZXh0dXJlQmcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvT3JiaXRDb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLnZlcnQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci5mcmFnIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZU1vdmllLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL0NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QudmVydCIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QuZnJhZyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRW50cnkiLCJjb25zdHJ1Y3RvciIsImluaXQiLCJ3aW5kb3ciLCJnYiIsInVuZGVmaW5lZCIsImluIiwiY29tbW9uIiwibWFpbiIsIkNvbW1vbiIsInNldHVwIiwic2V0RXZlbnRzIiwiY29uZiIsInUiLCJmIiwidXQiLCJvblJlYWR5Iiwib25Mb2FkIiwiJCIsImRvY3VtZW50Iiwib24iLCJiaW5kIiwiQ29uZiIsIlJFTEVBU0UiLCJGTEciLCJMT0ciLCJQQVJBTSIsIlNUQVRTIiwiZGVmVyIsImRlZkgiLCJXIiwiSCIsInNwVyIsInNwSCIsImJwIiwibW9kZSIsImtleXMiLCJzd2l0Y2hNb2RlIiwic2VjMDJJbWdOdW0iLCJ5b3V0dWJlSUQwMSIsInlvdXR1YmVJRDAyIiwid2ViRm9udExvYWRlZCIsImkiLCJrZXkiLCJsZW4iLCJwYXJhbSIsInJlZiIsInJlZjEiLCJ2YWx1ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNwbGl0IiwibGVuZ3RoIiwiaiIsIm9iaiIsImsiLCJ2YWwiLCJVdGlsIiwiaXNTZXRTUFNpemUiLCJzdGFydFRpbWUiLCJlbGFwc2VkVGltZSIsIm5vdyIsIkRhdGUiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20yIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImhpdCIsInJhbmdlIiwibWFwIiwibnVtIiwicmVzTWluIiwicmVzTWF4IiwiYmFzZU1pbiIsImJhc2VNYXgiLCJwIiwiZGVjaW1hbCIsIm4iLCJwb3MiLCJTdHJpbmciLCJpbmRleE9mIiwic3Vic3RyIiwiY2xhbXAiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsImRlZ3JlZSIsInJhZGlhbnMiLCJQSSIsInJhZGlhbiIsImFuZ2xlIiwiZGlzdCIsInAxIiwicDIiLCJzcXJ0IiwicG93IiwieCIsInkiLCJhc2NlbmQiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJkZXNjZW5kIiwiY29uc3RyYWluIiwidW5pcXVlIiwiZ2V0VGltZSIsImJ1dHRvbk1vZGUiLCJmbGciLCJjc3MiLCJpc0RpcmVjdGlvbiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJpc1Jlc3BvbnNpdmUiLCJpc1Jlc1NQIiwiaXNSZXNQQyIsImdldFBhcmFtIiwidXJsIiwiaHJlZiIsInBhcmFtSXRlbXMiLCJsaXN0IiwicGFyYW1JdGVtIiwiaGFzaCIsImdldENvb2tpZSIsImwiLCJsZW4xIiwiY29va2llIiwic2V0Q29va2llIiwiZ2V0SGV4Q29sb3IiLCJyIiwiZyIsInN0ciIsInRvU3RyaW5nIiwiQXJyYXkiLCJqb2luIiwiaXNDb250YWluIiwiY29udGFpbiIsImFkZDAiLCJmbG9hdEZvcm1hdCIsIm51bWJlciIsIl9wb3ciLCJyb3VuZCIsInByaWNlIiwic3RyUmV2ZXJzZSIsInJlcyIsInJlcGxhY2VBbGwiLCJvcmciLCJkZXN0Iiwic3RyUmVwbGFjZSIsImJlZm9yZSIsImFmdGVyIiwiUmVnRXhwIiwiZ2V0Tm93Iiwic3RhcnQiLCJlbGFwc2VkIiwibSIsInMiLCJtcyIsInRpbWUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsIm1pbGxTZWNvbmQiLCJnZXRNaWxsaXNlY29uZHMiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRocyIsIm1vbnRoZGF5cyIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZGF5Iiwid2Vla0RheUpQIiwid0RKIiwiZ2V0RGF5Iiwid2Vla0RheUVOIiwid0RFIiwiYWZ0ZXJEYXkiLCJOdW1iZXIiLCJpc09iamVjdCIsImlnbm9yZUFycmF5IiwiaXNOdW1iZXIiLCJpc1N0cmluZyIsImlzRnVuY3Rpb24iLCJpc0FycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsImlzTnVsbCIsImlzVW5kZWZpbmVkIiwic2V0SW1nU1BTaXplIiwiJHRhcmdldCIsIiRpbWciLCJlYWNoIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImF0dHIiLCJ0cmlnZ2VyIiwic2V0UHJldmVudCIsInNlbGYiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVQcmV2ZW50Iiwib2ZmIiwicHJvdG9jb2wiLCJob3N0IiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aCIsInBhdGhuYW1lIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsInByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyIsImtleUNvZGUiLCJkaXNhYmxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ud2hlZWwiLCJvbm1vdXNld2hlZWwiLCJvbnRvdWNobW92ZSIsIm9ua2V5ZG93biIsImVuYWJsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJVdGlscyIsIl9zZXR1cCIsImNoZWNrQ2xpZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXMiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpZCIsImNsZWFyVGltZW91dCIsImFyclJhbmQiLCJzaHVmZmxlIiwiQXJyIiwic2xpY2UiLCJ0IiwicGFyc2VyIiwidWEiLCJpc0lFIiwiYnJvd3NlciIsImdldEJyb3dzZXIiLCJuYW1lIiwiaXNGaXJlZm94IiwiaXNDaHJvbWUiLCJpc1NhZmFyaSIsImlzTW9iaWxlIiwiZGV2aWNlIiwiZ2V0RGV2aWNlIiwidHlwZSIsImlzVGFibGV0Iiwib3MiLCJnZXRPUyIsImRldmljZV9uYW1lIiwidmVuZG9yIiwiYnJvd3Nlcl9uYW1lIiwiYWxsIiwiZ2V0VUEiLCJvIiwiYyIsImQiLCJ2IiwiRSIsIlMiLCJleHRlbmQiLCJjb25jYXQiLCJoYXMiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyaXplIiwibWFqb3IiLCJ0cmltIiwicmd4IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJleGVjIiwidGVzdCIsIlQiLCJvbGRzYWZhcmkiLCJ2ZXJzaW9uIiwiYW1hem9uIiwibW9kZWwiLCJzcHJpbnQiLCJIVEMiLCJTcHJpbnQiLCJ3aW5kb3dzIiwiTUUiLCJYUCIsIlZpc3RhIiwiUlQiLCJOIiwiY3B1IiwiZW5naW5lIiwiQyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImFwcGx5IiwiZ2V0Q1BVIiwiZ2V0RW5naW5lIiwiZ2V0UmVzdWx0Iiwic2V0VUEiLCJWRVJTSU9OIiwiQlJPV1NFUiIsIk5BTUUiLCJNQUpPUiIsIkNQVSIsIkFSQ0hJVEVDVFVSRSIsIkRFVklDRSIsIk1PREVMIiwiVkVORE9SIiwiVFlQRSIsIkNPTlNPTEUiLCJNT0JJTEUiLCJTTUFSVFRWIiwiVEFCTEVUIiwiV0VBUkFCTEUiLCJFTUJFRERFRCIsIkVOR0lORSIsIk9TIiwiZXhwb3J0cyIsIm1vZHVsZSIsIlVBUGFyc2VyIiwialF1ZXJ5IiwiWmVwdG8iLCJMIiwiZ2V0Iiwic2V0IiwiaW1nUGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW1nIiwiSW1hZ2UiLCJjYWxsZWUiLCJzcmMiLCIkYnRuIiwidGV4dCIsInNoYXJlVVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3BlbiIsImRlc2NyaXB0aW9uIiwiRnVuYyIsImJsYW5rIiwiZGVidWdnZXIiLCJleHBhbmRqUXVlcnkiLCJtZXRob2RzIiwiY29uc29sZSIsInByZXBlbmQiLCJGUFMiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiZm4iLCJhZGp1c3QiLCJhZGp1c3RXIiwiYWRqdXN0SCIsImNoZWNrQ3NzQmxlbmQiLCJDU1MiLCJzdXBwb3J0cyIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxvZyIsIm5vdFNhdmVJbWciLCJpc1BDIiwiaXNBbmRyb2lkVmVyc2lvbiIsImFsZXJ0IiwiTWFpbiIsInBhZ2UiLCJkYXRhIiwib25SZW5kZXIiLCJEaXNwbGF5VG9wIiwidGV4dHVyZUJnIiwicnVuIiwiVGV4dHVyZUJnIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJjYW1lcmEiLCJyZW5kZXJlciIsInNjZW5lIiwiY3JlYXRlQ2FtZXJhIiwiX2NyZWF0ZUNhbWVyYSIsImNyZWF0ZVJlbmRlcmVyIiwiX2NyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlU2NlbmUiLCJfY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsIl9vblJlc2l6ZSIsIlVwZGF0ZSIsIl9VcGRhdGUiLCJsb2FkVGV4dHVyZSIsIl9sb2FkVGV4dHVyZSIsInBsYW5lIiwiVEhSRUUiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwieiIsImxvb2tBdCIsIlZlY3RvcjMiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJzdGVuY2lsIiwiZGVwdGgiLCJwcmVtdWx0aXBsaWVkQWxwaGEiLCJzZXRDbGVhckNvbG9yIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwiU2NlbmUiLCJtZXNoIiwicmVuZGVyIiwibWF0ZXJpYWwiLCJ1bmlmb3JtcyIsInJlc29sdXRpb24iLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiT3JiaXRDb250cm9scyIsIm9iamVjdCIsImRvbUVsZW1lbnQiLCJlbmFibGVkIiwidGFyZ2V0IiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsIkluZmluaXR5IiwibWluWm9vbSIsIm1heFpvb20iLCJtaW5Qb2xhckFuZ2xlIiwibWF4UG9sYXJBbmdsZSIsIm1pbkF6aW11dGhBbmdsZSIsIm1heEF6aW11dGhBbmdsZSIsImVuYWJsZURhbXBpbmciLCJkYW1waW5nRmFjdG9yIiwiZW5hYmxlWm9vbSIsInpvb21TcGVlZCIsImVuYWJsZVJvdGF0ZSIsInJvdGF0ZVNwZWVkIiwiZW5hYmxlUGFuIiwia2V5UGFuU3BlZWQiLCJhdXRvUm90YXRlIiwiYXV0b1JvdGF0ZVNwZWVkIiwiZW5hYmxlS2V5cyIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiQk9UVE9NIiwibW91c2VCdXR0b25zIiwiT1JCSVQiLCJNT1VTRSIsIlpPT00iLCJNSURETEUiLCJQQU4iLCJ0YXJnZXQwIiwiY2xvbmUiLCJwb3NpdGlvbjAiLCJ6b29tMCIsInpvb20iLCJnZXRQb2xhckFuZ2xlIiwic3BoZXJpY2FsIiwicGhpIiwiZ2V0QXppbXV0aGFsQW5nbGUiLCJ0aGV0YSIsInJlc2V0Iiwic2NvcGUiLCJjb3B5IiwiZGlzcGF0Y2hFdmVudCIsImNoYW5nZUV2ZW50IiwidXBkYXRlIiwic3RhdGUiLCJTVEFURSIsIk5PTkUiLCJvZmZzZXQiLCJxdWF0IiwiUXVhdGVybmlvbiIsInNldEZyb21Vbml0VmVjdG9ycyIsInVwIiwicXVhdEludmVyc2UiLCJpbnZlcnNlIiwibGFzdFBvc2l0aW9uIiwibGFzdFF1YXRlcm5pb24iLCJzdWIiLCJhcHBseVF1YXRlcm5pb24iLCJzZXRGcm9tVmVjdG9yMyIsInJvdGF0ZUxlZnQiLCJnZXRBdXRvUm90YXRpb25BbmdsZSIsInNwaGVyaWNhbERlbHRhIiwibWFrZVNhZmUiLCJyYWRpdXMiLCJzY2FsZSIsInBhbk9mZnNldCIsInNldEZyb21TcGhlcmljYWwiLCJ6b29tQ2hhbmdlZCIsImRpc3RhbmNlVG9TcXVhcmVkIiwiRVBTIiwiZG90IiwicXVhdGVybmlvbiIsImRpc3Bvc2UiLCJvbkNvbnRleHRNZW51Iiwib25Nb3VzZURvd24iLCJvbk1vdXNlV2hlZWwiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoRW5kIiwib25Ub3VjaE1vdmUiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm9uS2V5RG93biIsInN0YXJ0RXZlbnQiLCJlbmRFdmVudCIsIlJPVEFURSIsIkRPTExZIiwiVE9VQ0hfUk9UQVRFIiwiVE9VQ0hfRE9MTFkiLCJUT1VDSF9QQU4iLCJTcGhlcmljYWwiLCJyb3RhdGVTdGFydCIsIlZlY3RvcjIiLCJyb3RhdGVFbmQiLCJyb3RhdGVEZWx0YSIsInBhblN0YXJ0IiwicGFuRW5kIiwicGFuRGVsdGEiLCJkb2xseVN0YXJ0IiwiZG9sbHlFbmQiLCJkb2xseURlbHRhIiwiZ2V0Wm9vbVNjYWxlIiwicm90YXRlVXAiLCJwYW5MZWZ0IiwiZGlzdGFuY2UiLCJvYmplY3RNYXRyaXgiLCJzZXRGcm9tTWF0cml4Q29sdW1uIiwibXVsdGlwbHlTY2FsYXIiLCJwYW5VcCIsInBhbiIsImRlbHRhWCIsImRlbHRhWSIsImVsZW1lbnQiLCJ0YXJnZXREaXN0YW5jZSIsInRhbiIsImZvdiIsIm1hdHJpeCIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInJpZ2h0IiwibGVmdCIsInRvcCIsImJvdHRvbSIsIndhcm4iLCJkb2xseUluIiwiZG9sbHlTY2FsZSIsImRvbGx5T3V0IiwiaGFuZGxlTW91c2VEb3duUm90YXRlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZURvd25Eb2xseSIsImhhbmRsZU1vdXNlRG93blBhbiIsImhhbmRsZU1vdXNlTW92ZVJvdGF0ZSIsInN1YlZlY3RvcnMiLCJoYW5kbGVNb3VzZU1vdmVEb2xseSIsImhhbmRsZU1vdXNlTW92ZVBhbiIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZVdoZWVsIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZVRvdWNoU3RhcnRSb3RhdGUiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRvdWNoU3RhcnREb2xseSIsImR4IiwiZHkiLCJoYW5kbGVUb3VjaFN0YXJ0UGFuIiwiaGFuZGxlVG91Y2hNb3ZlUm90YXRlIiwiaGFuZGxlVG91Y2hNb3ZlRG9sbHkiLCJoYW5kbGVUb3VjaE1vdmVQYW4iLCJoYW5kbGVUb3VjaEVuZCIsImJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsImNyZWF0ZSIsIkV2ZW50RGlzcGF0Y2hlciIsImRlZmluZVByb3BlcnRpZXMiLCJjZW50ZXIiLCJub1pvb20iLCJub1JvdGF0ZSIsIm5vUGFuIiwibm9LZXlzIiwic3RhdGljTW92aW5nIiwiZHluYW1pY0RhbXBpbmdGYWN0b3IiLCJQbGFuZSIsInRleHR1cmUiLCJjcmVhdGVNZXNoIiwiX2NyZWF0ZU1lc2giLCJfcmVuZGVyIiwicmVzaXplIiwiX3Jlc2l6ZSIsImltYWdlIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJtYWdGaWx0ZXIiLCJOZWFyZXN0RmlsdGVyIiwibWluRmlsdGVyIiwiaW1hZ2VSZXNvbHV0aW9uIiwiTWVzaCIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJSYXdTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwic3RvcCIsImludGVydmFsIiwicHJldl9udW0iLCJuZXh0X251bSIsInRleFByZXYiLCJ0ZXh0dXJlcyIsInRleE5leHQiLCJDYW52YXMiLCJ1X3RpbWUiLCJ1X3Jlc29sdXRpb24iLCJ1X21vdXNlIiwiY3ViZSIsImNyZWF0ZU9iamVjdCIsIl9jcmVhdGVPYmplY3QiLCJvcmJpdENvbnRyb2xzIiwiX29yYml0Q29udHJvbHMiLCJwbGFuZU9iamVjdCIsIl9wbGFuZU9iamVjdCIsImN1YmVHZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwiY3ViZU1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsIndpcmVmcmFtZSIsIlNoYWRlck1hdGVyaWFsIiwiY2xvY2siLCJDbG9jayIsImdldERlbHRhIiwiY29udHJvbHMiLCJkZWx0YSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7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Y2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI2MThhZDk4YzJlNTA0NWU5MzgxIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRW50cnlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxucmVxdWlyZSgnLi4vLi4vbGlicy9PcmJpdENvbnRyb2xzLmpzJyk7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdH1cblxuXHQvKipcblx0ICog5Yid5pyf5YyWXG5cdCAqL1xuXHRpbml0KCl7XG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVG9wXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgQ29tbW9uIGZyb20gJy4vcGFnZS9Db21tb24nO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlL01haW4nO1xuXG4oKCk9PntcblxuICAvLyBnbG9iYWzjgqrjg5bjgrjjgqfjgq/jg4hcbiAgaWYgKHdpbmRvdy5nYj09PXVuZGVmaW5lZCkgd2luZG93LmdiID0ge307XG4gIHdpbmRvdy5nYi5pbiA9IHt9OyAvL2luc3RhbmNlXG5cbiAgZ2IuaW4uY29tbW9uID0gbmV3IENvbW1vbigpO1xuICBnYi5pbi5tYWluID0gbmV3IE1haW4oKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1RvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbW1vblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29uZiBmcm9tICcuLi9Db3JlL0NvbmYnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vbXlsaWJzL1V0aWwnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcbmltcG9ydCBGdW5jIGZyb20gJy4uL215bGlicy9GdW5jJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG5cdHNldHVwKCkge1xuXG5cdFx0LyoqXG4gICAgICogQHR5cGUge0NvbmZ9IDog5Yid5pyf5YCk44Gu6Kit5a6a44O744OH44O844K/44Gu6YWN572uXG5cdFx0ICogQHR5cGUge1V0aWx9IDogVXRpbOmWouaVsOOBruWIneacn+WMllxuXHRcdCAqIEB0eXBlIHtGdW5jfSA6IOOCpOODmeODs+ODiOODnuODjeODvOOCuOODo+ODvOOBruioree9rlxuXHRcdCAqL1xuICAgIGdiLmluLmNvbmYgPSBuZXcgQ29uZigpO1xuICAgIGdiLmluLnUgPSBuZXcgVXRpbCgpO1xuICAgIGdiLmluLmYgPSBuZXcgRnVuYygpO1xuXG4gICAgZ2IuaW4udXQgPSBuZXcgVXRpbHMoKTtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9Db21tb24uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb25mXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbi8vIGltcG9ydCBTb3VuZERhdGEgZnJvbSAnLi9EYXRhL1NvdW5kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5pys55Wq44OV44Op44KwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICAgIHRoaXMuUkVMRUFTRSA9IHRydWU7XG4gICAgLy8gdGhpcy5SRUxFQVNFID0gZmFsc2U7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OV44Op44Kw6Zai6YCjXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5GTEcgPSB7XG4gICAgICBMT0c6dHJ1ZSwgIC8vIOODreOCsOWHuuWKm1xuICAgICAgUEFSQU06dHJ1ZSwgLy8g44OR44Op44Oh44O844K/44OB44Kn44OD44KvXG4gICAgICBTVEFUUzp0cnVlICAvLyBTdGF0c+ihqOekulxuICAgIH07XG4gICAgaWYgKCF0aGlzLlJFTEVBU0UpIHtcbiAgICAgIHRoaXMuRkxHID0ge1xuICAgICAgICBMT0c6ZmFsc2UsXG4gICAgICAgIFBBUkFNOmZhbHNlLFxuICAgICAgICBTVEFUUzpmYWxzZSBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOWfuuacrCB3aWR0aCBoZWlnaHRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmRlZlcgPSAxMzAwO1xuICAgIHRoaXMuZGVmSCA9IDg1MDtcblxuICAgIHRoaXMuVyA9IDEyMDA7XG4gICAgdGhpcy5IID0gNzUwO1xuXG4gICAgdGhpcy5zcFcgPSAzNzU7XG4gICAgdGhpcy5zcEggPSA2Njc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OW44Os44Kk44Kv44Od44Kk44Oz44OIXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5icCA9IDc2ODtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBtb2RlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLmtleXMgPSBbXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdtb3ZpZScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydtb3JuaW5nJywnYWZ0ZXJub29uJywnbmlnaHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdkYXRhJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ2RhdGEwMScsJ2RhdGEwMicsJ2RhdGEwMyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ3Byb2R1Y3QnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnMDEnXSxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMuc3dpdGNoTW9kZSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNvdW5kIGRhdGFcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB0aGlzLnNvdW5kRGF0YSA9IG5ldyBTb3VuZERhdGEoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzZWMwMiBiZyBJbWcgTnVtXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZWMwMkltZ051bSA9IDM5NjtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB5b3V0dWJlIElEXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy55b3V0dWJlSUQwMSA9ICd4VzJvTnBOcktkMCc7XG4gICAgdGhpcy55b3V0dWJlSUQwMiA9ICd0MldlUlJkQUZlSSc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgd2ViIGZvbnQgbG9hZGVkXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy53ZWJGb250TG9hZGVkID0gZmFsc2U7XG5cbiAgfVxuXG5cbiAgc3dpdGNoTW9kZSgpe1xuXG4gICAgdmFyIGksIGtleSwgbGVuLCBwYXJhbSwgcmVmLCByZWYxLCB2YWx1ZTtcblxuICAgIHJlZiA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHBhcmFtID0gcmVmW2ldO1xuICAgICAgcmVmMSA9IHBhcmFtLnNwbGl0KCc9JyksIGtleSA9IHJlZjFbMF0sIHZhbHVlID0gcmVmMVsxXTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmtleXMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICB2YXIgb2JqID0gdGhpcy5rZXlzW2pdO1xuXG4gICAgICAgIC8vIOODkeODqeODoeODvOOCv+OBjOOCreODvOOBqOS4gOe3kuOBoOOBo+OBn+OCiVxuICAgICAgICBpZiAob2JqLmtleSA9PT0ga2V5KSB7XG5cbiAgICAgICAgICAvLyDlkITlgKTjgajmr5TovINcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IG9iai52YWx1ZS5sZW5ndGg7IGsrKykge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqLnZhbHVlW2tdO1xuXG4gICAgICAgICAgICAvLyDjgq3jg7zjgpJ0aGlzLmtleXPjga5rZXnjgavjgIF2YWx1ZeOCkuavlOi8g+OBl+OBpuWQjOWApOOBoOOBo+OBn+OCguOBruOBq1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gdmFsdWUpIHRoaXNbb2JqLmtleV0gPSB2YWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9O1xuXG5cbiAgICAgICAgfTtcblxuICAgICAgICBcbiAgICAgIH07XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0NvbmYuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog5L6/5Yip6Zai5pWw44Kv44Op44K5XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVXRpbFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuaXNTZXRTUFNpemUgPSBmYWxzZTtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbnVsbDtcbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRoXG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBquWApOOCkui/lOOBmVxuICAgKiBAcGFyYW0gbWluIDog5pyA5bCP5YCkKGludClcbiAgICogQHBhcmFtIG1heCA6IOacgOWkp+WApChpbnQpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgICovXG4gIHJhbmRvbShtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoKG1heCArIDEpIC0gbWluKSArIG1pbikpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gq5pW05pWw44KSMuOBpOOBruevhOWbsuOBi+OCieWPluW+l1xuICAgKiBAcGFyYW0gbWluMSA6IOacgOWwj+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWF4MSA6IOacgOWkp+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWluMiA6IOacgOWwj+WApDIoaW50KVxuICAgKiBAcGFyYW0gbWF4MiA6IOacgOWkp+WApDIoaW50KVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gICAqL1xuICByYW5kb20yKG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgICBcbiAgICBpZiAodGhpcy5oaXQoMikpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4xLCBtYXgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjIsIG1heDIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIDEvQHJhbmdl44Gu56K6546H44GndHJ1ZeOCkuWPluW+l1xuICAgKiBAcGFyYW0gcmFuZ2UgOiDmr43mlbAoaW50KVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gICAqL1xuICBoaXQocmFuZ2UpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgwLCByYW5nZSAtIDEpID09PSAwO1xuXG4gIH1cbiAgXG4gIC8vIDDjgYvjgonnr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCA6IOevhOWbsihpbnQpXG4gIC8vIHJldHVybiA6IOODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmdlKHZhbCkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKC12YWwsIHZhbCk7XG5cbiAgfVxuICBcbiAgLy8g5YCk44KS44Oe44OD44OU44Oz44KwXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDjg57jg4Pjg5Tjg7PjgrDjgZnjgovlgKQoTnVtYmVyKVxuICAvLyBAcmVzTWluIDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQHJlc01heCA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWluIDog5YWD44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNYXggOiDlhYPjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyByZXR1cm4gOiDjg57jg4Pjg5Tjg7PjgrDjgZXjgozjgZ/lgKQoTnVtYmVyKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBtYXAobnVtLCByZXNNaW4sIHJlc01heCwgYmFzZU1pbiwgYmFzZU1heCkge1xuXG4gICAgdmFyIHA7XG4gICAgaWYgKG51bSA8IGJhc2VNaW4pIHtcbiAgICAgIHJldHVybiByZXNNaW47XG4gICAgfVxuICAgIGlmIChudW0gPiBiYXNlTWF4KSB7XG4gICAgICByZXR1cm4gcmVzTWF4O1xuICAgIH1cbiAgICBwID0gKHJlc01heCAtIHJlc01pbikgLyAoYmFzZU1heCAtIGJhc2VNaW4pO1xuXG4gICAgcmV0dXJuICgobnVtIC0gYmFzZU1pbikgKiBwKSArIHJlc01pbjtcblxuICB9ICAgIFxuICBcbiAgLy8g5pWw5YCk44Gr5bCP5pWw54K556ysQG7kvY3jgb7jgafjgpLjgaTjgZHjgZ/mloflrZfliJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOWApChOdW1iZXIpXG4gIC8vIEBuIDog5bCP5pWw54K544Gu5L2NKGludClcbiAgLy8gcmV0dXJuIDog5aSJ5o+b44GV44KM44Gf5YCkKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGVjaW1hbChudW0sIG4pIHtcbiAgICB2YXIgaSwgcG9zO1xuICAgIG51bSA9IFN0cmluZyhudW0pO1xuICAgIHBvcyA9IG51bS5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bS5zcGxpdChcIi5cIilbMF07XG4gICAgfVxuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBudW0gKz0gXCIuXCI7XG4gICAgICBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgICBudW0gKz0gXCIwXCI7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuICAgIG51bSA9IG51bS5zdWJzdHIoMCwgcG9zKSArIG51bS5zdWJzdHIocG9zLCBuICsgMSk7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIGNsYW1wKG51bWVyYXRvcixkZW5vbWluYXRvcix2YWwpIHtcblxuICAgIHJldHVybiB2YWwgKiAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuXG4gIH1cblxuXHQvKipcbiAgICog44Op44K444Ki44Oz44KS6KeS5bqm44Gr5aSJ5o+bXG5cdCAqIEBwYXJhbSByYWRpYW5zXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuICBkZWdyZWUocmFkaWFucykge1xuXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4gIH1cblxuICAvLyB0byByYWRpYW5zXG4gIHJhZGlhbihhbmdsZSkgeyBcblxuICAgIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7IC8vMeW6puS9leODqeOCuOOCouODs+OBi1xuXG4gIH1cblxuICBkaXN0KHAxLCBwMikge1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xuXG4gIH1cblxuICBhc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxMCw5LDUsMywxXG5cbiAgfVxuXG4gIGRlc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEsMyw1LDksMTBcblxuICB9XG5cbiAgLy8gbWFwKHZhbHVlLCBtaW4wMSwgbWF4MDEsIG1pbjAyLCBtYXgwMikge1xuXG4gIC8vICAgdmFyIGRpczAxID0gbWF4MDEgLSBtaW4wMTtcbiAgLy8gICB2YXIgZGlzMDIgPSBtYXgwMiAtIG1pbjAyXG5cbiAgLy8gICB2YXIgcmF0ZSA9IGRpczAyIC8gZGlzMDE7XG5cbiAgLy8gICB2YWx1ZSA9IHZhbHVlICogcmF0ZTtcblxuICAvLyAgIHJldHVybiB2YWx1ZTtcbiAgLy8gfVxuXG4gIGNvbnN0cmFpbih2YWx1ZSwgbWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KHZhbHVlLCBtaW4pKTtcblxuICAgIC8vIGlmICh2YWx1ZSA8PSBsb3cpIHZhbHVlID0gbG93O1xuICAgIC8vIGlmICh2YWx1ZSA+PSBoaWdoKSB2YWx1ZSA9IGhpZ2g7ICAgICBcbiAgICAvLyByZXR1cm4gdmFsdWU7XG5cbiAgfVxuXG4gIC8vIOODpuODi+ODvOOCr0lE44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVuaXF1ZSgpIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB9XG4gIFxuICAvLyAqKmpxdWFyeeS9v+eUqFxuICAvLyDjg5zjgr/jg7Pjg6Ljg7zjg4nlpInmm7RcbiAgLy8gdHJ1ZeOBquOCieOCq+ODvOOCveODq+OBjOODneOCpOODs+OCv+ODvOOBruW9ouOBq1xuICAvLyBmYWxzZeOBquOCieODh+ODleOCqeODq+ODiOOBruOCq+ODvOOCveODq+OBq1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAZmxnIDog6YGp55So44GZ44KL44GL44Gp44GG44GLKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJ1dHRvbk1vZGUoZmxnKSB7XG5cbiAgICBpZiAoZmxnKSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcImRlZmF1bHRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHBvcnRyYWl0IC8gbGFuZHNjYXBlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0RpcmVjdGlvbiAoKSB7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKEggPiBXKSB7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgfWVsc2V7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHJlc3BvbnNpdmUg5qiq5bmF44KS6KaL44KLXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1Jlc3BvbnNpdmUgKGJwKSB7XG5cbiAgICBpZiAoYnA9PXVuZGVmaW5lZCkgYnA9Mzc1O1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChXID4gYnApIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gdHJ1ZTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IGZhbHNlO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBVUkxcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICovXG4gIGdldFBhcmFtKCkge1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIHBhcmFtID0gdXJsLnNwbGl0KCc/JylbMV07XG4gICAgaWYgKHBhcmFtPT11bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcmFtSXRlbXMgPSBwYXJhbS5zcGxpdCgnJicpO1xuICAgIHZhciBsaXN0ID0ge307XG4gIFxuICAgIGZvciggdmFyIGkgPSAwOyBpPHBhcmFtSXRlbXMubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICBwYXJhbUl0ZW0gPSBwYXJhbUl0ZW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIGxpc3RbcGFyYW1JdGVtWzBdXSA9IHBhcmFtSXRlbVsxXTtcblxuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuXG4gIH1cblxuICAvKipcbiAgICog44OP44OD44K344Ol5Y+W5b6XIDogbG9jYXRpb24uaGFzaOOBriPjgpLliYrpmaTjgZfjgZ/jgoTjgaRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGhhc2goKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIGNvb2tpZeWPluW+l1xuICAgKiBAcGFyYW0ga2V5XG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZ2V0Q29va2llKGtleSkge1xuXG4gICAgdmFyIGEsIGFyciwgaSwgbCwgbGVuMSwgdmFsO1xuICAgIGlmIChkb2N1bWVudC5jb29raWUgPT09IHZvaWQgMCB8fCBkb2N1bWVudC5jb29raWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcbiAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGFyci5sZW5ndGg7IGwgPCBsZW4xOyBpID0gKytsKSB7XG4gICAgICB2YWwgPSBhcnJbaV07XG4gICAgICBhID0gdmFsLnNwbGl0KFwiPVwiKTtcbiAgICAgIGlmIChhWzBdID09PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGFbMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG4gIH0gICAgICBcblxuICAvKipcbiAgICogY29va2ll6Kit5a6aXG4gICAqIEBwYXJhbSBrZXkgOiDjg5Hjg6njg6Hjg7zjgr/lkI1cbiAgICogQHBhcmFtIHZhbCA6IOWApFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgc2V0Q29va2llKGtleSwgdmFsKSB7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWw7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgQ29sb3JcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gcmdi44GL44KJSEVY44Kr44Op44O85Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEByIDogMH4yNTVcbiAgLy8gQGcgOiAwfjI1NVxuICAvLyBAYiA6IDB+MjU1XG4gIC8vIHJldHVybiA6IGV4IFwiI0ZGRkZGRlwiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldEhleENvbG9yKHIsZyxiKSB7XG4gICAgICB2YXIgc3RyO1xuICAgICAgc3RyID0gKHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNik7XG4gICAgICByZXR1cm4gXCIjXCIgKyBuZXcgQXJyYXkoNyAtIHN0ci5sZW5ndGgpLmpvaW4oXCIwXCIpICsgc3RyO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBTdHJpbmdcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNDb250YWluKHN0cixjb250YWluKSB7XG5cbiAgICAvLyBzdHLjga7kuK3jgassY29udGFpbuOBjOWtmOWcqOOBl+OBn+OCiVxuICAgIGlmICggc3RyLmluZGV4T2YoY29udGFpbikgIT0gLTEgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIC8vIDDln4vjgoHjgacy5qGB44Gr44GZ44KL6Zai5pWwXG4gIGFkZDAoc3RyLG51bT0tMil7XG4gICAgXG4gICAgcmV0dXJuICggXCIwMDAwMDAwMDAwMDBcIiArIHN0ciApLnN1YnN0ciggbnVtICk7XG5cbiAgfVxuXG4gIGZsb2F0Rm9ybWF0KCBudW1iZXIsIG4gKSB7XG5cbiAgICB2YXIgX3BvdyA9IE1hdGgucG93KCAxMCAsIG4gKSA7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoIG51bWJlciAqIF9wb3cgKSAvIF9wb3cgO1xuXG4gIH1cbiAgICBcbiAgLy8g5YCk5q616KGo6KiYXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByaWNlKG51bSkge1xuXG4gICAgcmV0dXJuIFN0cmluZyhudW0pLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgJyQxLCcpO1xuXG4gIH1cblxuICAvLyDmloflrZfliJfjgpLlj43ou6JcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHN0ciA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIHJldHVybiA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0clJldmVyc2Uoc3RyKSB7XG5cbiAgICB2YXIgaSwgbGVuLCByZXM7XG4gICAgcmVzID0gXCJcIjtcbiAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgIGkgPSAxO1xuICAgIHdoaWxlIChpIDw9IGxlbikge1xuICAgICAgcmVzICs9IHN0ci5zdWJzdHIoLWksIDEpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuXG4gIH1cbiAgXG4gIC8vIOaWh+Wtl+WIl+OBruWFqOe9ruaPm1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsICA6IOaWh+Wtl+WIl1xuICAvLyBAb2VnICA6IOe9ruaPm+WJjeOBruaWh+Wtl+WIl1xuICAvLyBAZGVzdCA6IOe9ruaPm+W+jOOBruaWh+Wtl+WIl1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXBsYWNlQWxsKHZhbCwgb3JnLCBkZXN0KSB7XG5cbiAgICByZXR1cm4gdmFsLnNwbGl0KG9yZykuam9pbihkZXN0KTtcblxuICB9ICAgIFxuICBcbiAgc3RyUmVwbGFjZShzdHIsIGJlZm9yZSwgYWZ0ZXIpIHtcblxuICAgIHZhciByID0gbmV3IFJlZ0V4cCggYmVmb3JlLCAnZycpO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCByICwgYWZ0ZXIgKTtcblxuICB9ICAgIFxuICBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldE5vdygpIHtcblxuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMubm93LmdldFRpbWUoKTtcblxuICB9XG5cbiAgZWxhcHNlZCgpIHtcblxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZTtcblxuICB9XG5cbiAgbSgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKCB0aGlzLmVsYXBzZWRUaW1lICsgMTAwIC8gNjAgKTtcblxuICB9XG5cbiAgcygpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZWxhcHNlZFRpbWUgLyAxMDAwKTtcblxuICB9XG5cbiAgbXMoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkVGltZTtcbiAgICBcbiAgfVxuXG4gIHRpbWUoKSB7XG5cbiAgICB0aGlzLmdldE5vdygpO1xuXG4gICAgdGhpcy5ob3VyID0gdGhpcy5ub3cuZ2V0SG91cnMoKTsgICAgICAgICAgLy8g5pmCXG4gICAgdGhpcy5taW51dGUgPSB0aGlzLm5vdy5nZXRNaW51dGVzKCk7ICAgICAgLy8g5YiGXG4gICAgdGhpcy5zZWNvbmQgPSB0aGlzLm5vdy5nZXRTZWNvbmRzKCk7XG4gICAgdGhpcy5taWxsU2Vjb25kID0gdGhpcy5ub3cuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgfVxuXG4gIGRhdGUoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RGF0ZSgpO1xuXG4gIH1cblxuICBtb250aHMoKSB7XG5cbiAgICB2YXIgbW9udGhkYXlzID0gbmV3IEFycmF5KDMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEpO1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldE1vbnRoKCkgKyAxO1xuXG4gIH1cblxuICB5ZWFyKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgfVxuXG4gIGRheSgpIHtcblxuICAgIC8vIOabnOaXpSAo5pel5pys6KqeKVxuICAgIHZhciB3ZWVrRGF5SlAgPSBbXCLml6VcIixcIuaciFwiLFwi54GrXCIsXCLmsLRcIixcIuacqFwiLFwi6YeRXCIsXCLlnJ9cIl0gO1xuICAgIHZhciB3REogPSB3ZWVrRGF5SlBbdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICAgIC8vIOabnOaXpSAo6Iux6KqeKVxuICAgIHZhciB3ZWVrRGF5RU4gPSBbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0gO1xuICAgIHZhciB3REUgPSB3ZWVrRGF5RU5bdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICB9XG4gIFxuICAvLyDmlbDml6Xlvozjga5EYXRl44Kq44OW44K444Kn44Kv44OI5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFmdGVyRGF5KGRhdGUsIG51bSkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgTnVtYmVyKG51bSkgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRhIHR5cGUgY2hlY2tcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNPYmplY3QodmFsdWUsIGlnbm9yZUFycmF5KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgfVxuXG4gIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgfVxuXG4gIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBpc0FycmF5KHZhbHVlKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGlzTnVsbCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xuICB9XG5cbiAgaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBvdGhlclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0SW1nU1BTaXplICgkdGFyZ2V0KXtcblxuICAgIC8vIHJlc3BvbnNpdmUgc3Djga7jgajjgY3lh6bnkIZcbiAgICBpZiAoIXRoaXMuaXNSZXNTUCkgcmV0dXJuO1xuICAgIC8vIOS4gOW6puOBoOOBkeWHpueQhlxuICAgIC8vIGlmICh0aGlzLmlzU2V0U1BTaXplKSByZXR1cm47XG4gICAgLy8gdGhpcy5pc1NldFNQU2l6ZSA9IHRydWU7XG5cbiAgICB2YXIgJGltZyA9ICR0YXJnZXQsXG4gICAgICAgIGxlbiA9ICRpbWcubGVuZ3RoO1xuXG4gICAgJGltZy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICB2YXIgdyA9IE1hdGguZmxvb3IoJCh0aGlzKS53aWR0aCgpIC8gMiksXG4gICAgICAgICAgICBoID0gTWF0aC5mbG9vcigkKHRoaXMpLmhlaWdodCgpIC8gMik7XG5cbiAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICd3aWR0aCc6IHcsXG4gICAgICAgICAgICAnaGVpZ2h0JzogaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxlbiA9PSBpICsgMSkgJCh3aW5kb3cpLnRyaWdnZXIoJ3NldFNwWmllRW5kJyk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICDjgrnjg57jg5vmk43kvZznhKHlirlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldFByZXZlbnQoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ3RvdWNobW92ZS5ub0NvbnRyb2wnLCBmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7fSk7XG5cbiAgfVxuXG4gIHJlbW92ZVByZXZlbnQoKSB7XG5cbiAgICAkKHdpbmRvdykub2ZmKCd0b3VjaG1vdmUubm9Db250cm9sJyk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAgaG9zdCxwcm90Y29sXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcm90b2NvbCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbDtcblxuICB9XG4gICAgXG4gIGhvc3QoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgLy8gcmV0dXJuIGxvY2F0aW9uLmhvc3RcblxuICB9XG5cbiAgcG9ydCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wb3J0O1xuXG4gIH1cbiAgICAgICAgXG4gIHBhdGgoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcblxuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzKGUpIHtcblxuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIGRpc2FibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIC8vIG9sZGVyIEZGXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub253aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vZGVybiBzdGFuZGFyZFxuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBvbGRlciBicm93c2VycywgSUVcbiAgICB3aW5kb3cub250b3VjaG1vdmUgID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9iaWxlXG4gICAgZG9jdW1lbnQub25rZXlkb3duICA9IHRoaXMucHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzO1xuXG4gIH1cblxuICBlbmFibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9ud2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvVXRpbC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFV0aWxzXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG4vKipcbiAqIGFuaW1hdGlvblxuICovXG5pbXBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gJy4vYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZSc7XG5pbXBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgZnJvbSAnLi9hbmltYXRpb24vY2FuY2VsQW5pbWF0aW9uRnJhbWUnO1xuXG5pbXBvcnQgQXJyYXkgZnJvbSAnLi9hcnJheS9BcnJheSc7XG5pbXBvcnQgY2hlY2tDbGllbnQgZnJvbSBcIi4vdWEvY2hlY2tDbGllbnRcIjtcblxuaW1wb3J0IHByZWxvYWRJbWcgZnJvbSAnLi9pbWcvcHJlbG9hZEltZyc7XG5pbXBvcnQgc2V0VXBCdG5Ud2l0dGVyIGZyb20gJy4vc25zL3NldFVwQnRuVHdpdHRlcic7XG5pbXBvcnQgc2V0VXBCdG5MaW5lIGZyb20gJy4vc25zL3NldFVwQnRuTGluZSc7XG5pbXBvcnQgc2V0VXBCdG5GYWNlQm9vayBmcm9tICcuL3Nucy9zZXRVcEJ0bkZhY2VCb29rJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLl9zZXR1cCgpO1xuICAgIFxuICB9XG5cbiAgX3NldHVwKCkge1xuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygnVXRpbHNfU2V0dXAhIScpO1xuICAgIFxuICAgIC8qKlxuICAgICAqIGFycmF5XG4gICAgICovXG4gICAgdGhpcy5BcnJheSA9IG5ldyBBcnJheSgpO1xuXG5cbiAgICAvKipcbiAgICAgKiB1YVxuICAgICAqL1xuICAgIHRoaXMuY2hlY2tDbGllbnQgPSBuZXcgY2hlY2tDbGllbnQoKTtcblxuXG4gICAgLyoqXG4gICAgICogaW1nXG4gICAgICovXG4gICAgLy8gdGhpcy5wcmVsb2FkSW1nID0gbmV3IHByZWxvYWRJbWcoKTtcblxuICAgIC8qKlxuICAgICAqIHNuc1xuICAgICAqL1xuICAgIC8vIHRoaXMuc2V0VXBCdG5Ud2l0dGVyID0gbmV3IHNldFVwQnRuVHdpdHRlcjtcbiAgICAvLyB0aGlzLnNldFVwQnRuTGluZSA9IG5ldyBzZXRVcEJ0bkxpbmU7XG4gICAgLy8gdGhpcy5zZXRVcEJ0bkZhY2VCb29rID0gbmV3IHNldFVwQnRuRmFjZUJvb2s7XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCIvKipcbiAqIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICovXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKChmdW5jdGlvbihfdGhpcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gMzApO1xuICAgICAgICB9O1xuICB9O1xufSkodGhpcykpKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwiLyoqXG4gKiBjYW5jZWxBbmltYXRpb25GcmFtZVxuICovXG53aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoKGZ1bmN0aW9uKF90aGlzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihpZCkge1xuICAgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xuICB9O1xufSkodGhpcykpKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vY2FuY2VsQW5pbWF0aW9uRnJhbWUuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog6YWN5YiX44Gu5pON5L2c57O7XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQXJyYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuXG4gIH1cblxuXHQvKipcblx0ICog6YWN5YiX5YaF44Gu44Op44Oz44OA44Og44Gq5YCk44KS44Gy44Go44Gk5Y+W5b6XXG5cdCAqIEBwYXJhbSBhcnIgOiDphY3liJdcblx0ICogQHJldHVybnMgeyp9IDog6YWN5YiX5YaF44Gu5YCkXG5cdCAqL1xuICBhcnJSYW5kKGFycikge1xuXG4gICAgcmV0dXJuIGFyclt0aGlzLnJhbmRvbSgwLCBhcnIubGVuZ3RoIC0gMSldO1xuXG4gIH1cblxuXHQvKipcbiAgICog6YWN5YiX44KS44Op44Oz44OA44Og44Gr5Lim44G55pu/44GIXG5cdCAqIEBwYXJhbSBhcnIgOiDphY3liJcoQXJyYXkpXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG4gIHNodWZmbGUoYXJyKSB7XG5cbiAgICBsZXQgQXJyID0gW107XG4gICAgQXJyID0gYXJyLnNsaWNlKCk7XG4gICAgdmFyIGkgPSBhcnIubGVuZ3RoO1xuICAgIHdoaWxlKGkpe1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaSk7XG4gICAgICB2YXIgdCA9IEFyclstLWldO1xuICAgICAgQXJyW2ldID0gQXJyW2pdO1xuICAgICAgQXJyW2pdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIEFycjtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FycmF5L0FycmF5LmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IFVh5Yik5YilXG4gKiBQcm9qZWN0OlxuICogRmlsZTogY2hlY2tDbGllbnRcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWJzL3VhLXBhcnNlci5taW4uanNcIik7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hlY2tDbGllbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy51YSA9IG5ldyBwYXJzZXIoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIElF44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNJRSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdJRScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRmlyZWZveOOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRmlyZWZveCgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdGaXJlZm94JyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaHJvbWXjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0Nocm9tZSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdDaHJvbWUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhZmFyaeOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzU2FmYXJpKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ1NhZmFyaScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog44Oi44OQ44Kk44Or44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgaXNNb2JpbGUoKSB7XG4gICAgbGV0IGRldmljZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudHlwZTtcbiAgICByZXR1cm4gZGV2aWNlID09PSAnbW9iaWxlJyA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODluODrOODg+ODiOOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGlzVGFibGV0KCkge1xuICAgIGxldCBkZXZpY2UgPSB0aGlzLnVhLmdldERldmljZSgpLnR5cGU7XG4gICAgcmV0dXJuIGRldmljZSA9PT0gJ3RhYmxldCcgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPU+WQjeOCkuWPluW+l1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0T1MoKS5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODh+ODkOOCpOOCueWQjeOCkuWPluW+l1xuICAgKiBAcmV0dXJucyB7dmVuZG9yfHtIVEMsIFNwcmludH19XG4gICAqL1xuICBkZXZpY2VfbmFtZSgpIHtcbiAgICBsZXQgZGV2aWNlX25hbWUgPSB0aGlzLnVhLmdldERldmljZSgpLnZlbmRvcjtcbiAgICByZXR1cm4gZGV2aWNlX25hbWU7XG4gIH1cblxuICAvKipcbiAgICog44OW44Op44Km44K25ZCN44KS5Y+W5b6XXG4gICAqL1xuICBicm93c2VyX25hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICog44Om44O844K244O844Ko44O844K444Kn44Oz44OI5oOF5aCx77ya5YWo44Gm44KS5Y+W5b6XXG4gICAqL1xuICBhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0VUEoKTtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIi8qKlxuICogVUFQYXJzZXIuanMgdjAuNy4xMlxuICogTGlnaHR3ZWlnaHQgSmF2YVNjcmlwdC1iYXNlZCBVc2VyLUFnZW50IHN0cmluZyBwYXJzZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWlzYWxtYW4vdWEtcGFyc2VyLWpzXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTItMjAxNiBGYWlzYWwgU2FsbWFuIDxmeXpsbWFuQGdtYWlsLmNvbT5cbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgR1BMdjIgJiBNSVRcbiAqLyhmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO3ZhciBuPVwiMC43LjEyXCIscj1cIlwiLGk9XCI/XCIscz1cImZ1bmN0aW9uXCIsbz1cInVuZGVmaW5lZFwiLHU9XCJvYmplY3RcIixhPVwic3RyaW5nXCIsZj1cIm1ham9yXCIsbD1cIm1vZGVsXCIsYz1cIm5hbWVcIixoPVwidHlwZVwiLHA9XCJ2ZW5kb3JcIixkPVwidmVyc2lvblwiLHY9XCJhcmNoaXRlY3R1cmVcIixtPVwiY29uc29sZVwiLGc9XCJtb2JpbGVcIix5PVwidGFibGV0XCIsYj1cInNtYXJ0dHZcIix3PVwid2VhcmFibGVcIixFPVwiZW1iZWRkZWRcIixTPXtleHRlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj17fTtmb3IodmFyIHIgaW4gZSl0W3JdJiZ0W3JdLmxlbmd0aCUyPT09MD9uW3JdPXRbcl0uY29uY2F0KGVbcl0pOm5bcl09ZVtyXTtyZXR1cm4gbn0saGFzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHR5cGVvZiBlPT1cInN0cmluZ1wiP3QudG9Mb3dlckNhc2UoKS5pbmRleE9mKGUudG9Mb3dlckNhc2UoKSkhPT0tMTohMX0sbG93ZXJpemU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKX0sbWFqb3I6ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlPT09YT9lLnJlcGxhY2UoL1teXFxkXFwuXS9nLFwiXCIpLnNwbGl0KFwiLlwiKVswXTp0fSx0cmltOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLFwiXCIpfX0seD17cmd4OmZ1bmN0aW9uKCl7dmFyIGUsbj0wLHIsaSxhLGYsbCxjLGg9YXJndW1lbnRzO3doaWxlKG48aC5sZW5ndGgmJiFsKXt2YXIgcD1oW25dLGQ9aFtuKzFdO2lmKHR5cGVvZiBlPT09byl7ZT17fTtmb3IoYSBpbiBkKWQuaGFzT3duUHJvcGVydHkoYSkmJihmPWRbYV0sdHlwZW9mIGY9PT11P2VbZlswXV09dDplW2ZdPXQpfXI9aT0wO3doaWxlKHI8cC5sZW5ndGgmJiFsKXtsPXBbcisrXS5leGVjKHRoaXMuZ2V0VUEoKSk7aWYoISFsKWZvcihhPTA7YTxkLmxlbmd0aDthKyspYz1sWysraV0sZj1kW2FdLHR5cGVvZiBmPT09dSYmZi5sZW5ndGg+MD9mLmxlbmd0aD09Mj90eXBlb2YgZlsxXT09cz9lW2ZbMF1dPWZbMV0uY2FsbCh0aGlzLGMpOmVbZlswXV09ZlsxXTpmLmxlbmd0aD09Mz90eXBlb2YgZlsxXT09PXMmJighZlsxXS5leGVjfHwhZlsxXS50ZXN0KT9lW2ZbMF1dPWM/ZlsxXS5jYWxsKHRoaXMsYyxmWzJdKTp0OmVbZlswXV09Yz9jLnJlcGxhY2UoZlsxXSxmWzJdKTp0OmYubGVuZ3RoPT00JiYoZVtmWzBdXT1jP2ZbM10uY2FsbCh0aGlzLGMucmVwbGFjZShmWzFdLGZbMl0pKTp0KTplW2ZdPWM/Yzp0fW4rPTJ9cmV0dXJuIGV9LHN0cjpmdW5jdGlvbihlLG4pe2Zvcih2YXIgciBpbiBuKWlmKHR5cGVvZiBuW3JdPT09dSYmbltyXS5sZW5ndGg+MCl7Zm9yKHZhciBzPTA7czxuW3JdLmxlbmd0aDtzKyspaWYoUy5oYXMobltyXVtzXSxlKSlyZXR1cm4gcj09PWk/dDpyfWVsc2UgaWYoUy5oYXMobltyXSxlKSlyZXR1cm4gcj09PWk/dDpyO3JldHVybiBlfX0sVD17YnJvd3Nlcjp7b2xkc2FmYXJpOnt2ZXJzaW9uOntcIjEuMFwiOlwiLzhcIiwxLjI6XCIvMVwiLDEuMzpcIi8zXCIsXCIyLjBcIjpcIi80MTJcIixcIjIuMC4yXCI6XCIvNDE2XCIsXCIyLjAuM1wiOlwiLzQxN1wiLFwiMi4wLjRcIjpcIi80MTlcIixcIj9cIjpcIi9cIn19fSxkZXZpY2U6e2FtYXpvbjp7bW9kZWw6e1wiRmlyZSBQaG9uZVwiOltcIlNEXCIsXCJLRlwiXX19LHNwcmludDp7bW9kZWw6e1wiRXZvIFNoaWZ0IDRHXCI6XCI3MzczS1RcIn0sdmVuZG9yOntIVEM6XCJBUEFcIixTcHJpbnQ6XCJTcHJpbnRcIn19fSxvczp7d2luZG93czp7dmVyc2lvbjp7TUU6XCI0LjkwXCIsXCJOVCAzLjExXCI6XCJOVDMuNTFcIixcIk5UIDQuMFwiOlwiTlQ0LjBcIiwyZTM6XCJOVCA1LjBcIixYUDpbXCJOVCA1LjFcIixcIk5UIDUuMlwiXSxWaXN0YTpcIk5UIDYuMFwiLDc6XCJOVCA2LjFcIiw4OlwiTlQgNi4yXCIsOC4xOlwiTlQgNi4zXCIsMTA6W1wiTlQgNi40XCIsXCJOVCAxMC4wXCJdLFJUOlwiQVJNXCJ9fX19LE49e2Jyb3dzZXI6W1svKG9wZXJhXFxzbWluaSlcXC8oW1xcd1xcLi1dKykvaSwvKG9wZXJhXFxzW21vYmlsZXRhYl0rKS4rdmVyc2lvblxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmEpLit2ZXJzaW9uXFwvKFtcXHdcXC5dKykvaSwvKG9wZXJhKVtcXC9cXHNdKyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKG9waW9zKVtcXC9cXHNdKyhbXFx3XFwuXSspL2ldLFtbYyxcIk9wZXJhIE1pbmlcIl0sZF0sWy9cXHMob3ByKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIk9wZXJhXCJdLGRdLFsvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC8obHVuYXNjYXBlfG1heHRob258bmV0ZnJvbnR8amFzbWluZXxibGF6ZXIpW1xcL1xcc10/KFtcXHdcXC5dKykqL2ksLyhhdmFudFxcc3xpZW1vYmlsZXxzbGltfGJhaWR1KSg/OmJyb3dzZXIpP1tcXC9cXHNdPyhbXFx3XFwuXSopL2ksLyg/Om1zfFxcKCkoaWUpXFxzKFtcXHdcXC5dKykvaSwvKHJla29ucSlcXC8oW1xcd1xcLl0rKSovaSwvKGNocm9taXVtfGZsb2NrfHJvY2ttZWx0fG1pZG9yaXxlcGlwaGFueXxzaWxrfHNreWZpcmV8b3ZpYnJvd3Nlcnxib2x0fGlyb258dml2YWxkaXxpcmlkaXVtfHBoYW50b21qcylcXC8oW1xcd1xcLi1dKykvaV0sW2MsZF0sWy8odHJpZGVudCkuK3J2WzpcXHNdKFtcXHdcXC5dKykuK2xpa2VcXHNnZWNrby9pXSxbW2MsXCJJRVwiXSxkXSxbLyhlZGdlKVxcLygoXFxkKyk/W1xcd1xcLl0rKS9pXSxbYyxkXSxbLyh5YWJyb3dzZXIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiWWFuZGV4XCJdLGRdLFsvKGNvbW9kb19kcmFnb24pXFwvKFtcXHdcXC5dKykvaV0sW1tjLC9fL2csXCIgXCJdLGRdLFsvKG1pY3JvbWVzc2VuZ2VyKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIldlQ2hhdFwiXSxkXSxbL3hpYW9taVxcL21pdWlicm93c2VyXFwvKFtcXHdcXC5dKykvaV0sW2QsW2MsXCJNSVVJIEJyb3dzZXJcIl1dLFsvXFxzd3ZcXCkuKyhjaHJvbWUpXFwvKFtcXHdcXC5dKykvaV0sW1tjLC8oLispLyxcIiQxIFdlYlZpZXdcIl0sZF0sWy9hbmRyb2lkLitzYW1zdW5nYnJvd3NlclxcLyhbXFx3XFwuXSspL2ksL2FuZHJvaWQuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKVxccysoPzptb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkqL2ldLFtkLFtjLFwiQW5kcm9pZCBCcm93c2VyXCJdXSxbLyhjaHJvbWV8b21uaXdlYnxhcm9yYXxbdGl6ZW5va2FdezV9XFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl0rKS9pLC8ocXFicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKHVjXFxzP2Jyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvdWN3ZWIuKyh1Y2Jyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvanVjLisodWN3ZWIpW1xcL1xcc10/KFtcXHdcXC5dKykvaV0sW1tjLFwiVUNCcm93c2VyXCJdLGRdLFsvKGRvbGZpbilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJEb2xwaGluXCJdLGRdLFsvKCg/OmFuZHJvaWQuKyljcm1vfGNyaW9zKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIkNocm9tZVwiXSxkXSxbLztmYmF2XFwvKFtcXHdcXC5dKyk7L2ldLFtkLFtjLFwiRmFjZWJvb2tcIl1dLFsvZnhpb3NcXC8oW1xcd1xcLi1dKykvaV0sW2QsW2MsXCJGaXJlZm94XCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rP21vYmlsZVxcL1xcdytcXHMoc2FmYXJpKS9pXSxbZCxbYyxcIk1vYmlsZSBTYWZhcmlcIl1dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspLis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKS9pXSxbZCxjXSxbL3dlYmtpdC4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkoXFwvW1xcd1xcLl0rKS9pXSxbYyxbZCx4LnN0cixULmJyb3dzZXIub2xkc2FmYXJpLnZlcnNpb25dXSxbLyhrb25xdWVyb3IpXFwvKFtcXHdcXC5dKykvaSwvKHdlYmtpdHxraHRtbClcXC8oW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyhuYXZpZ2F0b3J8bmV0c2NhcGUpXFwvKFtcXHdcXC4tXSspL2ldLFtbYyxcIk5ldHNjYXBlXCJdLGRdLFsvKHN3aWZ0Zm94KS9pLC8oaWNlZHJhZ29ufGljZXdlYXNlbHxjYW1pbm98Y2hpbWVyYXxmZW5uZWN8bWFlbW9cXHNicm93c2VyfG1pbmltb3xjb25rZXJvcilbXFwvXFxzXT8oW1xcd1xcLlxcK10rKS9pLC8oZmlyZWZveHxzZWFtb25rZXl8ay1tZWxlb258aWNlY2F0fGljZWFwZXxmaXJlYmlyZHxwaG9lbml4KVxcLyhbXFx3XFwuLV0rKS9pLC8obW96aWxsYSlcXC8oW1xcd1xcLl0rKS4rcnZcXDouK2dlY2tvXFwvXFxkKy9pLC8ocG9sYXJpc3xseW54fGRpbGxvfGljYWJ8ZG9yaXN8YW1heWF8dzNtfG5ldHN1cmZ8c2xlaXBuaXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvKGxpbmtzKVxcc1xcKChbXFx3XFwuXSspL2ksLyhnb2Jyb3dzZXIpXFwvPyhbXFx3XFwuXSspKi9pLC8oaWNlXFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl9dKykvaSwvKG1vc2FpYylbXFwvXFxzXShbXFx3XFwuXSspL2ldLFtjLGRdXSxjcHU6W1svKD86KGFtZHx4KD86KD86ODZ8NjQpW18tXSk/fHdvd3x3aW4pNjQpWztcXCldL2ldLFtbdixcImFtZDY0XCJdXSxbLyhpYTMyKD89OykpL2ldLFtbdixTLmxvd2VyaXplXV0sWy8oKD86aVszNDZdfHgpODYpWztcXCldL2ldLFtbdixcImlhMzJcIl1dLFsvd2luZG93c1xccyhjZXxtb2JpbGUpO1xcc3BwYzsvaV0sW1t2LFwiYXJtXCJdXSxbLygoPzpwcGN8cG93ZXJwYykoPzo2NCk/KSg/Olxcc21hY3w7fFxcKSkvaV0sW1t2LC9vd2VyLyxcIlwiLFMubG93ZXJpemVdXSxbLyhzdW40XFx3KVs7XFwpXS9pXSxbW3YsXCJzcGFyY1wiXV0sWy8oKD86YXZyMzJ8aWE2NCg/PTspKXw2OGsoPz1cXCkpfGFybSg/OjY0fCg/PXZcXGQrOykpfCg/PWF0bWVsXFxzKWF2cnwoPzppcml4fG1pcHN8c3BhcmMpKD86NjQpPyg/PTspfHBhLXJpc2MpL2ldLFtbdixTLmxvd2VyaXplXV1dLGRldmljZTpbWy9cXCgoaXBhZHxwbGF5Ym9vayk7W1xcd1xcc1xcKTstXSsocmltfGFwcGxlKS9pXSxbbCxwLFtoLHldXSxbL2FwcGxlY29yZW1lZGlhXFwvW1xcd1xcLl0rIFxcKChpcGFkKS9dLFtsLFtwLFwiQXBwbGVcIl0sW2gseV1dLFsvKGFwcGxlXFxzezAsMX10dikvaV0sW1tsLFwiQXBwbGUgVFZcIl0sW3AsXCJBcHBsZVwiXV0sWy8oYXJjaG9zKVxccyhnYW1lcGFkMj8pL2ksLyhocCkuKyh0b3VjaHBhZCkvaSwvKGhwKS4rKHRhYmxldCkvaSwvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC9cXHMobm9vaylbXFx3XFxzXStidWlsZFxcLyhcXHcrKS9pLC8oZGVsbClcXHMoc3RyZWFba3ByXFxzXFxkXSpbXFxka29dKS9pXSxbcCxsLFtoLHldXSxbLyhrZltBLXpdKylcXHNidWlsZFxcL1tcXHdcXC5dKy4qc2lsa1xcLy9pXSxbbCxbcCxcIkFtYXpvblwiXSxbaCx5XV0sWy8oc2R8a2YpWzAzNDloaWpvcnN0dXddK1xcc2J1aWxkXFwvW1xcd1xcLl0rLipzaWxrXFwvL2ldLFtbbCx4LnN0cixULmRldmljZS5hbWF6b24ubW9kZWxdLFtwLFwiQW1hem9uXCJdLFtoLGddXSxbL1xcKChpcFtob25lZHxcXHNcXHcqXSspOy4rKGFwcGxlKS9pXSxbbCxwLFtoLGddXSxbL1xcKChpcFtob25lZHxcXHNcXHcqXSspOy9pXSxbbCxbcCxcIkFwcGxlXCJdLFtoLGddXSxbLyhibGFja2JlcnJ5KVtcXHMtXT8oXFx3KykvaSwvKGJsYWNrYmVycnl8YmVucXxwYWxtKD89XFwtKXxzb255ZXJpY3Nzb258YWNlcnxhc3VzfGRlbGx8aHVhd2VpfG1laXp1fG1vdG9yb2xhfHBvbHl0cm9uKVtcXHNfLV0/KFtcXHctXSspKi9pLC8oaHApXFxzKFtcXHdcXHNdK1xcdykvaSwvKGFzdXMpLT8oXFx3KykvaV0sW3AsbCxbaCxnXV0sWy9cXChiYjEwO1xccyhcXHcrKS9pXSxbbCxbcCxcIkJsYWNrQmVycnlcIl0sW2gsZ11dLFsvYW5kcm9pZC4rKHRyYW5zZm9bcHJpbWVcXHNdezQsMTB9XFxzXFx3K3xlZWVwY3xzbGlkZXJcXHNcXHcrfG5leHVzIDd8cGFkZm9uZSkvaV0sW2wsW3AsXCJBc3VzXCJdLFtoLHldXSxbLyhzb255KVxccyh0YWJsZXRcXHNbcHNdKVxcc2J1aWxkXFwvL2ksLyhzb255KT8oPzpzZ3AuKylcXHNidWlsZFxcLy9pXSxbW3AsXCJTb255XCJdLFtsLFwiWHBlcmlhIFRhYmxldFwiXSxbaCx5XV0sWy8oPzpzb255KT8oPzooPzooPzpjfGQpXFxkezR9KXwoPzpzb1stbF0uKykpXFxzYnVpbGRcXC8vaV0sW1twLFwiU29ueVwiXSxbbCxcIlhwZXJpYSBQaG9uZVwiXSxbaCxnXV0sWy9cXHMob3V5YSlcXHMvaSwvKG5pbnRlbmRvKVxccyhbd2lkczN1XSspL2ldLFtwLGwsW2gsbV1dLFsvYW5kcm9pZC4rO1xccyhzaGllbGQpXFxzYnVpbGQvaV0sW2wsW3AsXCJOdmlkaWFcIl0sW2gsbV1dLFsvKHBsYXlzdGF0aW9uXFxzWzM0cG9ydGFibGV2aV0rKS9pXSxbbCxbcCxcIlNvbnlcIl0sW2gsbV1dLFsvKHNwcmludFxccyhcXHcrKSkvaV0sW1twLHguc3RyLFQuZGV2aWNlLnNwcmludC52ZW5kb3JdLFtsLHguc3RyLFQuZGV2aWNlLnNwcmludC5tb2RlbF0sW2gsZ11dLFsvKGxlbm92bylcXHM/KFMoPzo1MDAwfDYwMDApKyg/OlstXVtcXHcrXSkpL2ldLFtwLGwsW2gseV1dLFsvKGh0YylbO19cXHMtXSsoW1xcd1xcc10rKD89XFwpKXxcXHcrKSovaSwvKHp0ZSktKFxcdyspKi9pLC8oYWxjYXRlbHxnZWVrc3Bob25lfGh1YXdlaXxsZW5vdm98bmV4aWFufHBhbmFzb25pY3woPz07XFxzKXNvbnkpW19cXHMtXT8oW1xcdy1dKykqL2ldLFtwLFtsLC9fL2csXCIgXCJdLFtoLGddXSxbLyhuZXh1c1xcczkpL2ldLFtsLFtwLFwiSFRDXCJdLFtoLHldXSxbLyhuZXh1c1xcczZwKS9pXSxbbCxbcCxcIkh1YXdlaVwiXSxbaCxnXV0sWy8obWljcm9zb2Z0KTtcXHMobHVtaWFbXFxzXFx3XSspL2ldLFtwLGwsW2gsZ11dLFsvW1xcc1xcKDtdKHhib3goPzpcXHNvbmUpPylbXFxzXFwpO10vaV0sW2wsW3AsXCJNaWNyb3NvZnRcIl0sW2gsbV1dLFsvKGtpblxcLltvbmV0d117M30pL2ldLFtbbCwvXFwuL2csXCIgXCJdLFtwLFwiTWljcm9zb2Z0XCJdLFtoLGddXSxbL1xccyhtaWxlc3RvbmV8ZHJvaWQoPzpbMi00eF18XFxzKD86YmlvbmljfHgyfHByb3xyYXpyKSk/KDo/XFxzNGcpPylbXFx3XFxzXStidWlsZFxcLy9pLC9tb3RbXFxzLV0/KFxcdyspKi9pLC8oWFRcXGR7Myw0fSkgYnVpbGRcXC8vaSwvKG5leHVzXFxzNikvaV0sW2wsW3AsXCJNb3Rvcm9sYVwiXSxbaCxnXV0sWy9hbmRyb2lkLitcXHMobXo2MFxcZHx4b29tW1xcczJdezAsMn0pXFxzYnVpbGRcXC8vaV0sW2wsW3AsXCJNb3Rvcm9sYVwiXSxbaCx5XV0sWy9oYmJ0dlxcL1xcZCtcXC5cXGQrXFwuXFxkK1xccytcXChbXFx3XFxzXSo7XFxzKihcXHdbXjtdKik7KFteO10qKS9pXSxbW3AsUy50cmltXSxbbCxTLnRyaW1dLFtoLGJdXSxbL2hiYnR2LittYXBsZTsoXFxkKykvaV0sW1tsLC9eLyxcIlNtYXJ0VFZcIl0sW3AsXCJTYW1zdW5nXCJdLFtoLGJdXSxbL1xcKGR0dltcXCk7XS4rKGFxdW9zKS9pXSxbbCxbcCxcIlNoYXJwXCJdLFtoLGJdXSxbL2FuZHJvaWQuKygoc2NoLWlbODldMFxcZHxzaHctbTM4MHN8Z3QtcFxcZHs0fXxndC1uXFxkK3xzZ2gtdDhbNTZdOXxuZXh1cyAxMCkpL2ksLygoU00tVFxcdyspKS9pXSxbW3AsXCJTYW1zdW5nXCJdLGwsW2gseV1dLFsvc21hcnQtdHYuKyhzYW1zdW5nKS9pXSxbcCxbaCxiXSxsXSxbLygoc1tjZ3BdaC1cXHcrfGd0LVxcdyt8Z2FsYXh5XFxzbmV4dXN8c20tXFx3W1xcd1xcZF0rKSkvaSwvKHNhbVtzdW5nXSopW1xccy1dKihcXHcrLT9bXFx3LV0qKSovaSwvc2VjLSgoc2doXFx3KykpL2ldLFtbcCxcIlNhbXN1bmdcIl0sbCxbaCxnXV0sWy9zaWUtKFxcdyspKi9pXSxbbCxbcCxcIlNpZW1lbnNcIl0sW2gsZ11dLFsvKG1hZW1vfG5va2lhKS4qKG45MDB8bHVtaWFcXHNcXGQrKS9pLC8obm9raWEpW1xcc18tXT8oW1xcdy1dKykqL2ldLFtbcCxcIk5va2lhXCJdLGwsW2gsZ11dLFsvYW5kcm9pZFxcczNcXC5bXFxzXFx3Oy1dezEwfShhXFxkezN9KS9pXSxbbCxbcCxcIkFjZXJcIl0sW2gseV1dLFsvYW5kcm9pZFxcczNcXC5bXFxzXFx3Oy1dezEwfShsZz8pLShbMDZjdjldezMsNH0pL2ldLFtbcCxcIkxHXCJdLGwsW2gseV1dLFsvKGxnKSBuZXRjYXN0XFwudHYvaV0sW3AsbCxbaCxiXV0sWy8obmV4dXNcXHNbNDVdKS9pLC9sZ1tlO1xcc1xcLy1dKyhcXHcrKSovaV0sW2wsW3AsXCJMR1wiXSxbaCxnXV0sWy9hbmRyb2lkLisoaWRlYXRhYlthLXowLTlcXC1cXHNdKykvaV0sW2wsW3AsXCJMZW5vdm9cIl0sW2gseV1dLFsvbGludXg7LisoKGpvbGxhKSk7L2ldLFtwLGwsW2gsZ11dLFsvKChwZWJibGUpKWFwcFxcL1tcXGRcXC5dK1xccy9pXSxbcCxsLFtoLHddXSxbL2FuZHJvaWQuKztcXHMoZ2xhc3MpXFxzXFxkL2ldLFtsLFtwLFwiR29vZ2xlXCJdLFtoLHddXSxbL2FuZHJvaWQuKyhcXHcrKVxccytidWlsZFxcL2htXFwxL2ksL2FuZHJvaWQuKyhobVtcXHNcXC1fXSpub3RlP1tcXHNfXSooPzpcXGRcXHcpPylcXHMrYnVpbGQvaSwvYW5kcm9pZC4rKG1pW1xcc1xcLV9dKig/Om9uZXxvbmVbXFxzX11wbHVzfG5vdGUgbHRlKT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ldLFtbbCwvXy9nLFwiIFwiXSxbcCxcIlhpYW9taVwiXSxbaCxnXV0sWy9hbmRyb2lkLithMDAwKDEpXFxzK2J1aWxkL2ldLFtsLFtwLFwiT25lUGx1c1wiXSxbaCxnXV0sWy9cXHModGFibGV0KVs7XFwvXS9pLC9cXHMobW9iaWxlKSg/Ols7XFwvXXxcXHNzYWZhcmkpL2ldLFtbaCxTLmxvd2VyaXplXSxwLGxdXSxlbmdpbmU6W1svd2luZG93cy4rXFxzZWRnZVxcLyhbXFx3XFwuXSspL2ldLFtkLFtjLFwiRWRnZUhUTUxcIl1dLFsvKHByZXN0bylcXC8oW1xcd1xcLl0rKS9pLC8od2Via2l0fHRyaWRlbnR8bmV0ZnJvbnR8bmV0c3VyZnxhbWF5YXxseW54fHczbSlcXC8oW1xcd1xcLl0rKS9pLC8oa2h0bWx8dGFzbWFufGxpbmtzKVtcXC9cXHNdXFwoPyhbXFx3XFwuXSspL2ksLyhpY2FiKVtcXC9cXHNdKFsyM11cXC5bXFxkXFwuXSspL2ldLFtjLGRdLFsvcnZcXDooW1xcd1xcLl0rKS4qKGdlY2tvKS9pXSxbZCxjXV0sb3M6W1svbWljcm9zb2Z0XFxzKHdpbmRvd3MpXFxzKHZpc3RhfHhwKS9pXSxbYyxkXSxbLyh3aW5kb3dzKVxcc250XFxzNlxcLjI7XFxzKGFybSkvaSwvKHdpbmRvd3NcXHNwaG9uZSg/Olxcc29zKSopW1xcc1xcL10/KFtcXGRcXC5cXHNdK1xcdykqL2ksLyh3aW5kb3dzXFxzbW9iaWxlfHdpbmRvd3MpW1xcc1xcL10/KFtudGNlXFxkXFwuXFxzXStcXHcpL2ldLFtjLFtkLHguc3RyLFQub3Mud2luZG93cy52ZXJzaW9uXV0sWy8od2luKD89M3w5fG4pfHdpblxcczl4XFxzKShbbnRcXGRcXC5dKykvaV0sW1tjLFwiV2luZG93c1wiXSxbZCx4LnN0cixULm9zLndpbmRvd3MudmVyc2lvbl1dLFsvXFwoKGJiKSgxMCk7L2ldLFtbYyxcIkJsYWNrQmVycnlcIl0sZF0sWy8oYmxhY2tiZXJyeSlcXHcqXFwvPyhbXFx3XFwuXSspKi9pLC8odGl6ZW4pW1xcL1xcc10oW1xcd1xcLl0rKS9pLC8oYW5kcm9pZHx3ZWJvc3xwYWxtXFxzb3N8cW54fGJhZGF8cmltXFxzdGFibGV0XFxzb3N8bWVlZ298Y29udGlraSlbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ksL2xpbnV4Oy4rKHNhaWxmaXNoKTsvaV0sW2MsZF0sWy8oc3ltYmlhblxccz9vc3xzeW1ib3N8czYwKD89OykpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pXSxbW2MsXCJTeW1iaWFuXCJdLGRdLFsvXFwoKHNlcmllczQwKTsvaV0sW2NdLFsvbW96aWxsYS4rXFwobW9iaWxlOy4rZ2Vja28uK2ZpcmVmb3gvaV0sW1tjLFwiRmlyZWZveCBPU1wiXSxkXSxbLyhuaW50ZW5kb3xwbGF5c3RhdGlvbilcXHMoW3dpZHMzNHBvcnRhYmxldnVdKykvaSwvKG1pbnQpW1xcL1xcc1xcKF0/KFxcdyspKi9pLC8obWFnZWlhfHZlY3RvcmxpbnV4KVs7XFxzXS9pLC8oam9saXxba3hsbl0/dWJ1bnR1fGRlYmlhbnxbb3Blbl0qc3VzZXxnZW50b298KD89XFxzKWFyY2h8c2xhY2t3YXJlfGZlZG9yYXxtYW5kcml2YXxjZW50b3N8cGNsaW51eG9zfHJlZGhhdHx6ZW53YWxrfGxpbnB1cylbXFwvXFxzLV0/KD8hY2hyb20pKFtcXHdcXC4tXSspKi9pLC8oaHVyZHxsaW51eClcXHM/KFtcXHdcXC5dKykqL2ksLyhnbnUpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXSxbLyhjcm9zKVxcc1tcXHddK1xccyhbXFx3XFwuXStcXHcpL2ldLFtbYyxcIkNocm9taXVtIE9TXCJdLGRdLFsvKHN1bm9zKVxccz8oW1xcd1xcLl0rXFxkKSovaV0sW1tjLFwiU29sYXJpc1wiXSxkXSxbL1xccyhbZnJlbnRvcGMtXXswLDR9YnNkfGRyYWdvbmZseSlcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdLFsvKGhhaWt1KVxccyhcXHcrKS9pXSxbYyxkXSxbLyhpcFtob25lYWRdKykoPzouKm9zXFxzKFtcXHddKykqXFxzbGlrZVxcc21hY3w7XFxzb3BlcmEpL2ldLFtbYyxcImlPU1wiXSxbZCwvXy9nLFwiLlwiXV0sWy8obWFjXFxzb3NcXHN4KVxccz8oW1xcd1xcc1xcLl0rXFx3KSovaSwvKG1hY2ludG9zaHxtYWMoPz1fcG93ZXJwYylcXHMpL2ldLFtbYyxcIk1hYyBPU1wiXSxbZCwvXy9nLFwiLlwiXV0sWy8oKD86b3Blbik/c29sYXJpcylbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ksLyhhaXgpXFxzKChcXGQpKD89XFwufFxcKXxcXHMpW1xcd1xcLl0qKSovaSwvKHBsYW5cXHM5fG1pbml4fGJlb3N8b3NcXC8yfGFtaWdhb3N8bW9ycGhvc3xyaXNjXFxzb3N8b3BlbnZtcykvaSwvKHVuaXgpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXV19LEM9ZnVuY3Rpb24odCxuKXtpZih0aGlzIGluc3RhbmNlb2YgQyl7dmFyIGk9dHx8KGUmJmUubmF2aWdhdG9yJiZlLm5hdmlnYXRvci51c2VyQWdlbnQ/ZS5uYXZpZ2F0b3IudXNlckFnZW50OnIpLHM9bj9TLmV4dGVuZChOLG4pOk47cmV0dXJuIHRoaXMuZ2V0QnJvd3Nlcj1mdW5jdGlvbigpe3ZhciBlPXgucmd4LmFwcGx5KHRoaXMscy5icm93c2VyKTtyZXR1cm4gZS5tYWpvcj1TLm1ham9yKGUudmVyc2lvbiksZX0sdGhpcy5nZXRDUFU9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmNwdSl9LHRoaXMuZ2V0RGV2aWNlPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5kZXZpY2UpfSx0aGlzLmdldEVuZ2luZT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuZW5naW5lKX0sdGhpcy5nZXRPUz1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMub3MpfSx0aGlzLmdldFJlc3VsdD1mdW5jdGlvbigpe3JldHVybnt1YTp0aGlzLmdldFVBKCksYnJvd3Nlcjp0aGlzLmdldEJyb3dzZXIoKSxlbmdpbmU6dGhpcy5nZXRFbmdpbmUoKSxvczp0aGlzLmdldE9TKCksZGV2aWNlOnRoaXMuZ2V0RGV2aWNlKCksY3B1OnRoaXMuZ2V0Q1BVKCl9fSx0aGlzLmdldFVBPWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2V0VUE9ZnVuY3Rpb24oZSl7cmV0dXJuIGk9ZSx0aGlzfSx0aGlzfXJldHVybihuZXcgQyh0LG4pKS5nZXRSZXN1bHQoKX07Qy5WRVJTSU9OPW4sQy5CUk9XU0VSPXtOQU1FOmMsTUFKT1I6ZixWRVJTSU9OOmR9LEMuQ1BVPXtBUkNISVRFQ1RVUkU6dn0sQy5ERVZJQ0U9e01PREVMOmwsVkVORE9SOnAsVFlQRTpoLENPTlNPTEU6bSxNT0JJTEU6ZyxTTUFSVFRWOmIsVEFCTEVUOnksV0VBUkFCTEU6dyxFTUJFRERFRDpFfSxDLkVOR0lORT17TkFNRTpjLFZFUlNJT046ZH0sQy5PUz17TkFNRTpjLFZFUlNJT046ZH0sdHlwZW9mIGV4cG9ydHMhPT1vPyh0eXBlb2YgbW9kdWxlIT09byYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPUMpLGV4cG9ydHMuVUFQYXJzZXI9Qyk6dHlwZW9mIGRlZmluZT09PXMmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIEN9KTplLlVBUGFyc2VyPUM7dmFyIGs9ZS5qUXVlcnl8fGUuWmVwdG87aWYodHlwZW9mIGshPT1vKXt2YXIgTD1uZXcgQztrLnVhPUwuZ2V0UmVzdWx0KCksay51YS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gTC5nZXRVQSgpfSxrLnVhLnNldD1mdW5jdGlvbihlKXtMLnNldFVBKGUpO3ZhciB0PUwuZ2V0UmVzdWx0KCk7Zm9yKHZhciBuIGluIHQpay51YVtuXT10W25dfX19KSh0eXBlb2Ygd2luZG93PT1cIm9iamVjdFwiP3dpbmRvdzp0aGlzKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBwcmVsb2FkSW1nXG4gKiBAcGFyYW0gaW1nUGF0aFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbWdQYXRoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGltZztcbiAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgYXJndW1lbnRzLmNhbGxlZSk7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbWcuc3JjID0gaW1nUGF0aDtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9pbWcvcHJlbG9hZEltZy5qcyIsIi8qKlxuICogc2V0VXBCdG5Ud2l0dGVyXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBzaGFyZVVSTFxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgdGV4dCwgc2hhcmVVUkwpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD8nO1xuICBpZiAoc2hhcmVVUkwgPT09ICcnKSB7XG4gICAgdXJsICs9IFwidGV4dD1cIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9IGVsc2Uge1xuICAgIHVybCArPSBcInVybD1cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKSArIFwiJnRleHQ9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAndHdpdHRlclNoYXJlJywgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0blR3aXR0ZXIuanMiLCIvKipcbiAqIHNldFVwQnRuTGluZVxuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHRleHQsIHNoYXJlVVJMID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwOi8vbGluZS5tZS9tc2cvdGV4dC8/JztcbiAgaWYgKHNoYXJlVVJMID09PSAnJykge1xuICAgIHVybCArPSBcIlwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsICs9IChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpICsgXCJcXG5cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAnbGluZVNoYXJlJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkxpbmUuanMiLCIvKipcbiAqIHNldFVwQnRuRmFjZWJvb2tcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgc2hhcmVVUkwsIGRlc2NyaXB0aW9uID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICBkZXNjcmlwdGlvbiA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/JmRpc3BsYXk9cG9wdXAmdT0nO1xuICB1cmwgKz0gXCJcIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgdXJsICs9IFwiJmRlc2NyaXB0aW9uPVwiICsgKGVuY29kZVVSSUNvbXBvbmVudChkZXNjcmlwdGlvbikpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsIFwiZmFjZWJvb2tTaGFyZVwiICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRnVuY1xuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuYmxhbmsoKTtcbiAgICB0aGlzLmRlYnVnZ2VyKCk7XG4gICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgICB0aGlzLmV4cGFuZGpRdWVyeSgpO1xuXG4gIH1cblxuICBibGFuaygpIHtcblxuICAgICQoKCk9PnskKCcuYmxhbmsnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJyk7fSk7XG5cbiAgfVxuXG4gIGRlYnVnZ2VyKCkge1xuXG4gICAgLy8g44OH44OQ44OD44Kw44Oi44O844OJ5YiH5pu/XG4gICAgdmFyIFJFTEVBU0UgPSBnYi5pbi5jb25mLlJFTEVBU0U7XG5cbiAgICAvLyDnva7mj5vlr77osaHjga7jg6Hjgr3jg4Pjg4njgpLphY3liJfjgajjgZfjgabkv53mjIHjgZnjgotcbiAgICB2YXIgbWV0aG9kcyA9IFtcbiAgICAgICdsb2cnLFxuICAgICAgJ2RlYnVnJyxcbiAgICAgICdpbmZvJyxcbiAgICAgICd3YXJuJyxcbiAgICAgICdlcnJvcicsXG4gICAgICAnZGlyJyxcbiAgICAgICd0cmFjZScsXG4gICAgICAnYXNzZXJ0JyxcbiAgICAgICdkaXJ4bWwnLFxuICAgICAgJ2dyb3VwJyxcbiAgICAgICdncm91cEVuZCcsXG4gICAgICAndGltZScsXG4gICAgICAndGltZUVuZCcsXG4gICAgICAnY291bnQnLFxuICAgICAgJ3Byb2ZpbGUnLFxuICAgICAgJ3Byb2ZpbGVFbmQnXG4gICAgXTtcblxuICAgIC8vIGNvbnNvbGXjgYzkvb/jgYjjgarjgYTloLTlkIjjga/nqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgpLoqK3lrprjgZfjgabjgYrjgY9cbiAgICBpZiggdHlwZW9mIHdpbmRvdy5jb25zb2xlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xuICAgIH1cblxuICAgIC8vIOWQhOODoeOCveODg+ODieOCkndpbmRvd+OBuOebtOaOpei/veWKoOOBl+OBpuihjOOBj1xuICAgIGZvciggdmFyIGkgaW4gbWV0aG9kcyApe1xuICAgICAgKGZ1bmN0aW9uKCBtICl7XG5cbiAgICAgICAvLyBjb25zb2xl44Gr44GC44KL77yf44OH44OQ44OD44Kw44Oi44O844OJ44Gv5pyJ5Yq577yfY29uc29sZeOBruOCguOBruOBr+mWouaVsO+8n1xuICAgICAgIGlmKCBjb25zb2xlW21dICYmICFSRUxFQVNFICYmIHR5cGVvZiBjb25zb2xlW21dID09PSBcImZ1bmN0aW9uXCIgKXtcbiAgICAgICAgd2luZG93W21dID0gY29uc29sZVttXS5iaW5kKGNvbnNvbGUpO1xuICAgICAgIH0gZWxzZSB744CALy8gZGVidWdNb2Rl44GMZmFsc2Us44KC44GX44GP44Gv6Kmy5b2T44Oh44K944OD44OJ44GM5a2Y5Zyo44GX44Gq44GE5aC05ZCI44Gv44CB56m644Gu44Oh44K944OD44OJ44KS55So5oSP44GZ44KLXG4gICAgICAgIHdpbmRvd1ttXSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICB9XG5cbiAgICAgIH0pKCBtZXRob2RzW2ldICk7XG4gICAgfVxuXG4gIH1cblxuICBwcmVwZW5kKHBhcmFtKSB7XG5cbiAgICAkKCdib2R5JykucHJlcGVuZChwYXJhbSk7XG5cbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcblxuICAgIHZhciBGUFMgPSAxMDAwLzYwO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8gY2hyb21l44KE5pyA5paw44GuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8g5Y+k44GEZmlyZWZveOeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICAvLyBzYWZhcmk25Lul5YmN44CBaU9TNiBzYWZhcmnnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCBGUFMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIHRpbWVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTsgICAgICBcblxuICB9XG5cbiAgZXhwYW5kalF1ZXJ5KCkge1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICB3OjAsIFxuICAgICAgaDowLCBcbiAgICAgIGFkanVzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCcsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RXOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RIOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNoZWNrQ3NzQmxlbmQoKSB7XG5cbiAgICBpZiAoJ0NTUycgaW4gd2luZG93ICYmICdzdXBwb3J0cycgaW4gd2luZG93LkNTUykge1xuICAgICAgaWYgKCF3aW5kb3cuQ1NTLnN1cHBvcnRzKCdtaXgtYmxlbmQtbW9kZScsICdzb2Z0LWxpZ2h0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nKGdiLmluLnUuaXNJRSk7XG5cbiAgICBpZiAoZ2IuaW4udS5pc0lFKSB7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgbm90U2F2ZUltZygpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHBjXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcblxuICAgICAgJCgoKT0+e1xuICAgICAgICAkKFwiaW1nXCIpLm9uKFwiY29udGV4dG1lbnVcIiwoKT0+e1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHNwIGFuZHJvaWRcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciB2ID0gZ2IuaW4udS5pc0FuZHJvaWRWZXJzaW9uKCk7XG5cbiAgICBpZiAodj09dW5kZWZpbmVkKSByZXR1cm47XG4gICAgaWYgKHY8NSkge1xuXG4gICAgICB2YXIgdGltZXI7XG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hzdGFydFwiLCgpPT57XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIGFsZXJ0KFwi55S75YOP44Gv5L+d5a2Y44Gn44GN44G+44Gb44KTXCIpXG4gICAgICAgIH0sNTAwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoZW5kXCIsKCk9PntcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkgICAgICBcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9GdW5jLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTWFpblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRGlzcGxheVRvcCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUb3AnO1xuaW1wb3J0IERpc3BsYXlUZXh0dXJlQmcgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnJztcbmltcG9ydCBEaXNwbGF5VGV4dHVyZU1vdmllIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIHZhciBwYWdlID0gJCgnYm9keScpLmRhdGEoJ2lkJyk7XG5cbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ+ePvuWcqOOBruODmuODvOOCuElE44GvICcsIHBhZ2UpO1xuXG5cdFx0Ly9wYWdl44GuSUTjgZTjgajjgavnmbrngavjgZnjgovjgq/jg6njgrnjga7mjK/jgorliIbjgZFcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICBuZXcgRGlzcGxheVRvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXh0dXJlQmcnOlxuXG5cdFx0XHRcdG5ldyBEaXNwbGF5VGV4dHVyZUJnKCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3RleHR1cmVNb3ZpZSc6XG5cblx0XHRcdFx0bmV3IERpc3BsYXlUZXh0dXJlTW92aWUoKTtcblxuXHRcdFx0XHRicmVhaztcblxuICAgIH1cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgXG4gIH1cblxuICBvblJlbmRlcigpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IERpc3BsYXlUb3BcbiAqIERhdGU6IDE3LzkvMjNcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IFRleHR1cmVCZyBmcm9tIFwiLi4vdmlzdWFsL1RleHR1cmVCZ1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcgPSBuZXcgVGV4dHVyZUJnKCk7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRleHR1cmVCZ1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVCZyBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpO1xuXG4gICAgdGhpcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhID0gdGhpcy5fY3JlYXRlQ2FtZXJhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlciA9IHRoaXMuX2NyZWF0ZVJlbmRlcmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblx0XHR0aGlzLlVwZGF0ZSA9IHRoaXMuX1VwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubG9hZFRleHR1cmUgPSB0aGlzLl9sb2FkVGV4dHVyZS5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5wbGFuZSA9IG5ldyBQbGFuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLlVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSgpO1xuICB9XG5cblxuICAvKipcbiAgICog44Kr44Oh44Op5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlQ2FtZXJhKCl7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlLFxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xuXHRcdH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwLjApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICog55S75YOP44KS44Ot44O844OJXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfbG9hZFRleHR1cmUoKXtcblxuXHRcdHRoaXMucGxhbmUubG9hZFRleHR1cmUoJy4uLy4uLy4uLy4uL2Fzc2V0cy9yZXNvdXJjZS9pbWcvc2hpYnV5YTAxLmpwZycsICgpID0+IHtcblx0XHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUubWVzaCk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR0aGlzLlVwZGF0ZSgpO1xuXHRcdH0pO1xuXG5cdH1cblxuICAvKipcbiAgICog5pu05pawXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfVXBkYXRlKCkge1xuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICB0aGlzLlVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4hcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cdFx0dGhpcy5wbGFuZS5tZXNoLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblxuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1RleHR1cmVCZy5qcyIsIi8qKlxuICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb21cbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcbiAqIEBhdXRob3IgZXJpY2g2NjYgLyBodHRwOi8vZXJpY2hhaW5lcy5jb21cbiAqL1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5USFJFRS5PcmJpdENvbnRyb2xzID0gZnVuY3Rpb24gKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cblx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cblx0dGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcblx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcblx0dGhpcy5taW5ab29tID0gMDtcblx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG5cdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIGRhbXBpbmcgKGluZXJ0aWEpXG5cdC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAwLjI1O1xuXG5cdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0dGhpcy5lbmFibGVab29tID0gdHJ1ZTtcblx0dGhpcy56b29tU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xuXHR0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xuXHR0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG5cdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcblx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXG5cdHRoaXMuZW5hYmxlS2V5cyA9IHRydWU7XG5cblx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHR0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG5cdC8vIE1vdXNlIGJ1dHRvbnNcblx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuXHQvLyBmb3IgcmVzZXRcblx0dGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcblx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuXHQvL1xuXHQvLyBwdWJsaWMgbWV0aG9kc1xuXHQvL1xuXG5cdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xuXG5cdH07XG5cblx0dGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwudGhldGE7XG5cblx0fTtcblxuXHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0c2NvcGUudGFyZ2V0LmNvcHkoIHNjb3BlLnRhcmdldDAgKTtcblx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weSggc2NvcGUucG9zaXRpb24wICk7XG5cdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcblxuXHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH07XG5cblx0Ly8gdGhpcyBtZXRob2QgaXMgZXhwb3NlZCwgYnV0IHBlcmhhcHMgaXQgd291bGQgYmUgYmV0dGVyIGlmIHdlIGNhbiBtYWtlIGl0IHByaXZhdGUuLi5cblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0Ly8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cdFx0dmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG5cdFx0dmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuXHRcdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlICgpIHtcblxuXHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuXHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKCBvZmZzZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XG5cdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoIHNjb3BlLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heEF6aW11dGhBbmdsZSwgc3BoZXJpY2FsLnRoZXRhICkgKTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heCggc2NvcGUubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkgKSApO1xuXG5cdFx0XHRzcGhlcmljYWwubWFrZVNhZmUoKTtcblxuXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xuXG5cdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyA9IE1hdGgubWF4KCBzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHNjb3BlLm1heERpc3RhbmNlLCBzcGhlcmljYWwucmFkaXVzICkgKTtcblxuXHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0XHRzY29wZS50YXJnZXQuYWRkKCBwYW5PZmZzZXQgKTtcblxuXHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoIHNwaGVyaWNhbCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cblx0XHRcdHBvc2l0aW9uLmNvcHkoIHNjb3BlLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cblx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjYWxlID0gMTtcblx0XHRcdHBhbk9mZnNldC5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcblx0XHRcdC8vIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xuXHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cblx0XHRcdGlmICggem9vbUNoYW5nZWQgfHxcblx0XHRcdFx0bGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCBzY29wZS5vYmplY3QucG9zaXRpb24gKSA+IEVQUyB8fFxuXHRcdFx0XHQ4ICogKCAxIC0gbGFzdFF1YXRlcm5pb24uZG90KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApICkgPiBFUFMgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRsYXN0UG9zaXRpb24uY29weSggc2NvcGUub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRcdGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdC8vc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzcG9zZScgfSApOyAvLyBzaG91bGQgdGhpcyBiZSBhZGRlZCBoZXJlP1xuXG5cdH07XG5cblx0Ly9cblx0Ly8gaW50ZXJuYWxzXG5cdC8vXG5cblx0dmFyIHNjb3BlID0gdGhpcztcblxuXHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5cdHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG5cdHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuXHR2YXIgU1RBVEUgPSB7IE5PTkUgOiAtIDEsIFJPVEFURSA6IDAsIERPTExZIDogMSwgUEFOIDogMiwgVE9VQ0hfUk9UQVRFIDogMywgVE9VQ0hfRE9MTFkgOiA0LCBUT1VDSF9QQU4gOiA1IH07XG5cblx0dmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcblx0dmFyIHNwaGVyaWNhbCA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblx0dmFyIHNwaGVyaWNhbERlbHRhID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXG5cdHZhciBzY2FsZSA9IDE7XG5cdHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHR2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuXHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuXHRcdHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgLT0gYW5nbGU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZVVwKCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcblxuXHR9XG5cblx0dmFyIHBhbkxlZnQgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMCApOyAvLyBnZXQgWCBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHZhciBwYW5VcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwKCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMSApOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHQvLyBkZWx0YVggYW5kIGRlbHRhWSBhcmUgaW4gcGl4ZWxzOyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0dmFyIHBhbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIHBlcnNwZWN0aXZlXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblx0XHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG5cdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cblx0XHRcdFx0Ly8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuXHRcdFx0XHRwYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xuXHRcdFx0XHRwYW5MZWZ0KCBkZWx0YVggKiAoIHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0ICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIGRlbHRhWSAqICggc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20gKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgbm9yIHBlcnNwZWN0aXZlXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHRmdW5jdGlvbiBkb2xseUluKCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRvbGx5T3V0KCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGNhbGxiYWNrcyAtIHVwZGF0ZSB0aGUgb2JqZWN0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Sb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93bkRvbGx5JyApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25QYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VVcCcgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VXaGVlbCcgKTtcblxuXHRcdGlmICggZXZlbnQuZGVsdGFZIDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5kZWx0YVkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZUtleURvd24nICk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdHBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuXHRcdFx0XHRwYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuTEVGVDpcblx0XHRcdFx0cGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0cGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0RG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlRG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hFbmQnICk7XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlTW91c2VVcCggZXZlbnQgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8ICggc3RhdGUgIT09IFNUQVRFLk5PTkUgJiYgc3RhdGUgIT09IFNUQVRFLlJPVEFURSApICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7IC8vIG5vdCBzdXJlIHdoeSB0aGVzZSBhcmUgaGVyZS4uLlxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVLZXlEb3duKCBldmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlVG91Y2hFbmQoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KCBldmVudCApIHtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0fVxuXG5cdC8vXG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHQvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcblxuXHR0aGlzLnVwZGF0ZSgpO1xuXG59O1xuXG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKTtcblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVEhSRUUuT3JiaXRDb250cm9scztcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XG5cblx0Y2VudGVyOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnICk7XG5cdFx0XHRyZXR1cm4gdGhpcy50YXJnZXQ7XG5cblx0XHR9XG5cblx0fSxcblxuXHQvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0bm9ab29tOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVpvb207XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlWm9vbSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1JvdGF0ZToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUm90YXRlO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVSb3RhdGUgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9QYW46IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVBhbjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUGFuID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vS2V5czoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVLZXlzO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZUtleXMgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0c3RhdGljTW92aW5nIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVEYW1waW5nO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0ZHluYW1pY0RhbXBpbmdGYWN0b3IgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiB0aGlzLmRhbXBpbmdGYWN0b3I7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gdmFsdWU7XG5cblx0XHR9XG5cblx0fVxuXG59ICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogUGxhbmVcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZSBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuXHRcdHRoaXMudW5pZm9ybXMgPSB7fTtcblx0XHR0aGlzLnRleHR1cmUgPSBudWxsO1xuXHRcdHRoaXMubWVzaCA9IG51bGw7XG5cblx0XHR0aGlzLmxvYWRUZXh0dXJlID0gdGhpcy5fbG9hZFRleHR1cmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNyZWF0ZU1lc2ggPSB0aGlzLl9jcmVhdGVNZXNoLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZW5kZXIgPSB0aGlzLl9yZW5kZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlc2l6ZSA9IHRoaXMuX3Jlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuXHRfbG9hZFRleHR1cmUoaW1hZ2UsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcblx0XHRsb2FkZXIubG9hZChpbWFnZSwgKHRleHR1cmUpID0+IHtcblx0XHRcdHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTmVhcmVzdEZpbHRlcjtcbiAgICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTmVhcmVzdEZpbHRlcjtcbiAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XG4gICAgICB0aGlzLm1lc2ggPSB0aGlzLmNyZWF0ZU1lc2goKTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG5cdH1cblxuXHRfY3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLnVuaWZvcm1zID0ge1xuXHRcdFx0cmVzb2x1dGlvbjoge1xuXHRcdFx0XHR0eXBlOiAndjInLFxuXHRcdFx0XHR2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpLFxuXHRcdFx0fSxcblx0XHRcdGltYWdlUmVzb2x1dGlvbjoge1xuXHRcdFx0XHR0eXBlOiAndjInLFxuXHRcdFx0XHR2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoMjA0OCwgMTM1NiksXG5cdFx0XHR9LFxuXHRcdFx0dGV4dHVyZToge1xuXHRcdFx0XHR0eXBlOiAndCcsXG5cdFx0XHRcdHZhbHVlOiB0aGlzLnRleHR1cmUsXG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gbmV3IFRIUkVFLk1lc2goXG5cdFx0XHRuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgyLCAyKSxcblx0XHRcdG5ldyBUSFJFRS5SYXdTaGFkZXJNYXRlcmlhbCh7XG5cdFx0XHRcdHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuXHRcdFx0XHR2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvY292ZXIudmVydCcpLFxuXHRcdFx0XHRmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9jb3Zlci5mcmFnJyksXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7xcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9yZW5kZXIodGltZSkge1xuXG5cdFx0aWYgKHRoaXMuc3RvcCkgcmV0dXJuO1xuXHRcdHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSArPSB0aW1lIC8gdGhpcy5pbnRlcnZhbDtcblx0XHRpZiAodGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlID4gMSkge1xuXHRcdFx0dGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlID0gMDtcblx0XHRcdHRoaXMucHJldl9udW0gPSB0aGlzLm5leHRfbnVtO1xuXHRcdFx0dGhpcy51bmlmb3Jtcy50ZXhQcmV2LnZhbHVlID0gdGhpcy50ZXh0dXJlc1t0aGlzLm5leHRfbnVtXTtcblx0XHRcdHdoaWxlICh0aGlzLm5leHRfbnVtID09IHRoaXMucHJldl9udW0pIHtcblx0XHRcdFx0dGhpcy5uZXh0X251bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV4dHVyZXMubGVuZ3RoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudW5pZm9ybXMudGV4TmV4dC52YWx1ZSA9IHRoaXMudGV4dHVyZXNbdGhpcy5uZXh0X251bV07XG5cdFx0fVxuICB9XG5cblx0X3Jlc2l6ZSgpe1xuXHRcdHRoaXMudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9QbGFuZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG4gICAgdlV2ID0gdXY7XFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvY292ZXIudmVydFxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xcbnVuaWZvcm0gdmVjMiBpbWFnZVJlc29sdXRpb247XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuICAgIHZlYzIgcmF0aW8gPSB2ZWMyKFxcbiAgICAgICAgbWluKChyZXNvbHV0aW9uLnggLyByZXNvbHV0aW9uLnkpIC8gKGltYWdlUmVzb2x1dGlvbi54IC8gaW1hZ2VSZXNvbHV0aW9uLnkpLCAxLjApLFxcbiAgICAgICAgbWluKChyZXNvbHV0aW9uLnkgLyByZXNvbHV0aW9uLngpIC8gKGltYWdlUmVzb2x1dGlvbi55IC8gaW1hZ2VSZXNvbHV0aW9uLngpLCAxLjApXFxuICAgICk7XFxuXFxuICAgIHZlYzIgdXYgPSB2ZWMyKFxcbiAgICAgICAgdlV2LnggKiByYXRpby54ICsgKDEuMCAtIHJhdGlvLngpICogMC41LFxcbiAgICAgICAgdlV2LnkgKiByYXRpby55ICsgKDEuMCAtIHJhdGlvLnkpICogMC41XFxuICAgICk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh0ZXh0dXJlLCB1dik7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLmZyYWdcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IERpc3BsYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbi8vIGltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi92aXN1YWwvQ2FudmFzXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+OCueOCv+ODvOODiFxuICAgIC8vIGdiLmluLnVwLmxvb3AoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIGdiLmluLmNhbnZhcy5pbml0KCk7XG5cblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXHRcdC8vIHdpbmRvdy5jb25zb2xlLmxvZygnc3RhdGljX1J1bicpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZU1vdmllLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ2FudmFzXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG4vLyBpbXBvcnQgQ2FtZXJhIGZyb20gJy4vVXRpbHMvQ2FtZXJhJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnVuaWZvcm1zID0ge1xuICAgICAgdV90aW1lOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXG4gICAgICB1X3Jlc29sdXRpb246IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9LFxuICAgICAgdV9tb3VzZTogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigpIH1cbiAgICB9O1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpO1xuXG4gICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIC8vIHRoaXMub3V0cHV0ID0gb3B0cy5vdXRwdXQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG5cdFx0dGhpcy5jdWJlID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhID0gdGhpcy5fY3JlYXRlQ2FtZXJhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlciA9IHRoaXMuX2NyZWF0ZVJlbmRlcmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVPYmplY3QgPSB0aGlzLl9jcmVhdGVPYmplY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9yYml0Q29udHJvbHMgPSB0aGlzLl9vcmJpdENvbnRyb2xzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnBsYW5lT2JqZWN0ID0gdGhpcy5fcGxhbmVPYmplY3QuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuVXBkYXRlID0gdGhpcy5fVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGluaXQoKXtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKCk7XG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKTtcblxuXHRcdHRoaXMub3JiaXRDb250cm9scygpO1xuXHRcdC8vIHRoaXMuY3JlYXRlT2JqZWN0KCk7XG5cbiAgICB0aGlzLnBsYW5lT2JqZWN0KCk7XG5cbiAgICB0aGlzLlVwZGF0ZSgpO1xuXG4gICAgLy8gdGhpcy50aXRsZU9iamVjdC5sb2FkVGV4dHVyZSgoKSA9PiB7XG4gICAgLy8gICB0aGlzLnNjZW5lLmFkZCh0aGlzLnRpdGxlT2JqZWN0Lm9iaik7XG4gICAgLy8gfSk7XG5cbiAgICAvL+ODquOCteOCpOOCuuOCpOODmeODs+ODiOeZuueBq1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfSwgZmFsc2UpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Kr44Oh44Op5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlQ2FtZXJhKCl7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlLFxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xuXHRcdH0pO1xuXG4gICAgLy8gdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHgwMDAwMDApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIC8vIHRoaXMub3V0cHV0LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOOCt+ODvOODs+S9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBPYmplY3TkvZzmiJBcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9jcmVhdGVPYmplY3QoKXtcblxuICAgIGxldCBjdWJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgNCwgNCk7XG4gICAgbGV0IGN1YmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgICB3aXJlZnJhbWU6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGN1YmVHZW9tZXRyeSwgY3ViZU1hdGVyaWFsKTtcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueCA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnkgPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi56ID0gMztcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY3ViZSk7XG5cblx0fVxuXG5cdF9wbGFuZU9iamVjdCgpe1xuICAgIHRoaXMucGxhbmUgPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgLy8gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMjU2LCA2NCwgNDAsIDEwKSxcbiAgICAgICAgbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoNSwgMjAsIDMyKSxcbiAgICAgICAgbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgICB1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvaW5kZXgvdGVzdC52ZXJ0JyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvaW5kZXgvdGVzdC5mcmFnJyksXG4gICAgICAgIH0pXG4gICAgKVxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X3JlbmRlcigpIHtcbiAgICBsZXQgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcbiAgICBsZXQgdGltZSA9IGNsb2NrLmdldERlbHRhKCk7XG5cbiAgICAvLyB0aGlzLnRpdGxlT2JqZWN0LnRpdHJlbmRlcih0aW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmm7TmlrBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9VcGRhdGUoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcbiAgICAgIHRoaXMuVXBkYXRlKCk7XG4gICAgfSk7XG4gICAgLy8gdGhpcy5jb250cm9scy51cGRhdGUoKTtcbiAgICB0aGlzLnVuaWZvcm1zLnVfdGltZS52YWx1ZSArPSAwLjA1O1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfVxuXG4gIC8qKlxuICAgKuOAgOeUu+mdouODquOCteOCpOOCulxuICAgKi9cbiAgX29uUmVzaXplKCkge1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXHQvKipcbiAgICog44Kr44Oh44Op44Kz44Oz44OI44Ot44O844OrXG5cdCAqL1xuXHRfb3JiaXRDb250cm9scygpe1xuXHRcdHRoaXMuY29udHJvbHMgPSBuZXcgVEhSRUUuT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSk7XG5cdFx0dGhpcy5jb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZTtcblx0XHRsZXQgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcblxuXHRcdGxldCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XG5cdFx0dGhpcy5jb250cm9scy51cGRhdGUoZGVsdGEpO1xuICB9XG5cblx0c2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvQ2FudmFzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuLy9hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCggcG9zaXRpb24sIDEuMCApO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LnZlcnRcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XFxudW5pZm9ybSBmbG9hdCB1X3RpbWU7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWMyIHN0ID0gZ2xfRnJhZ0Nvb3JkLnh5L3VfcmVzb2x1dGlvbi54eTtcXG4gICAgZ2xfRnJhZ0NvbG9yPXZlYzQoc3QueCxzdC55LDAuMCwxLjApO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LmZyYWdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=