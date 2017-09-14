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

module.exports = "precision highp float;\n#define GLSLIFY 1\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float time;\nattribute vec3 position;\nattribute vec2 uv;\nattribute vec3 translate;\nvarying vec2 vUv;\nvarying float vScale;\nvoid main() {\n    vec4 mvPosition = modelViewMatrix * vec4( translate, 1.0 );\n    vec3 trTime = vec3(translate.x + time,translate.y + time,translate.z + time);\n    float scale =  sin( trTime.x * 2.1 ) + sin( trTime.y * 2.1 ) + sin( trTime.z * 2.1 );\n    vScale = scale;\n    //scale = scale * 10.0 + 10.0;\n    mvPosition.xyz += position * scale;\n    vUv = uv;\n    gl_Position = projectionMatrix * mvPosition;\n}"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D map;\nvarying vec2 vUv;\nvarying float vScale;\n// HSL to RGB Convertion helpers\n\n\nvec3 HUEtoRGB(float H){\n    H = mod(H,1.0);\n    float R = abs(H * 6.0 - 3.0) - 1.0;\n    float G = 2.0 - abs(H * 6.0 - 2.0);\n    float B = 2.0 - abs(H * 6.0 - 4.0);\n    return clamp(vec3(R,G,B),0.0,1.0);\n}\nvec3 HSLtoRGB(vec3 HSL){\n    vec3 RGB = HUEtoRGB(HSL.x);\n    float C = (1.0 - abs(2.0 * HSL.z - 1.0)) * HSL.y;\n    return (RGB - 0.5) * C + HSL.z;\n}\nvoid main() {\n    vec4 diffuseColor = texture2D( map, vUv );\n    gl_FragColor = vec4( diffuseColor.xyz * HSLtoRGB(vec3(vScale/5.0, 1.0, 0.5)), diffuseColor.w );\n    gl_FragColor = diffuseColor*vec4(1.0,1.0,1.0,1.0);\n    if ( diffuseColor.w < 0.5 ) discard;\n}"

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

module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "/* 精度修飾子の宣言 */\nprecision mediump float;\n#define GLSLIFY 1\n\n/* WebGLで受け渡された変数 */\nuniform float time; // time (1second == 1.0)\nuniform vec2  mouse; // mouse (-1.0 ~ 1.0)\nuniform vec2  resolution; // 解像度 (512.0, 512.0)\n\nconst float PI = 3.14159265;\n\nvec2 squareFrame_3_0(vec2 screenSize) {\n  vec2 position = 2.0 * (gl_FragCoord.xy / screenSize.xy) - 1.0;\n  position.x *= screenSize.x / screenSize.y;\n  return position;\n}\n\nvec2 squareFrame_3_0(vec2 screenSize, vec2 coord) {\n  vec2 position = 2.0 * (coord.xy / screenSize.xy) - 1.0;\n  position.x *= screenSize.x / screenSize.y;\n  return position;\n}\n\n\n\nmat3 calcLookAtMatrix_5_1(vec3 origin, vec3 target, float roll) {\n  vec3 rr = vec3(sin(roll), cos(roll), 0.0);\n  vec3 ww = normalize(target - origin);\n  vec3 uu = normalize(cross(ww, rr));\n  vec3 vv = normalize(cross(uu, ww));\n\n  return mat3(uu, vv, ww);\n}\n\n\n\n\nvec3 getRay_1_2(mat3 camMat, vec2 screenPos, float lensLength) {\n  return normalize(camMat * vec3(screenPos, lensLength));\n}\n\nvec3 getRay_1_2(vec3 origin, vec3 target, vec2 screenPos, float lensLength) {\n  mat3 camMat = calcLookAtMatrix_5_1(origin, target, 0.0);\n  return getRay_1_2(camMat, screenPos, lensLength);\n}\n\n\n\nvec2 map(vec3 p);\n// Originally sourced from https://www.shadertoy.com/view/ldfSWs\n// Thank you Iñigo :)\n\nvec2 calcRayIntersection_2_3(vec3 rayOrigin, vec3 rayDir, float maxd, float precis, float reduction) {\n  float latest = precis * 2.0;\n  float dist   = +0.0;\n  float type   = -1.0;\n  vec2  res    = vec2(-1.0, -1.0);\n\n  for (int i = 0; i < 256; i++) {\n    if (latest < precis || dist > maxd) break;\n\n    vec2 result = map(rayOrigin + rayDir * dist);\n\n    latest = result.x;\n    type   = result.y;\n    dist  += latest * reduction;\n  }\n\n  if (dist < maxd) {\n    res = vec2(dist, type);\n  }\n\n  return res;\n}\n\nvec2 calcRayIntersection_2_3(vec3 rayOrigin, vec3 rayDir) {\n  return calcRayIntersection_2_3(rayOrigin, rayDir, 20.0, 0.001, 1.0);\n}\n\n\n\n// Originally sourced from https://www.shadertoy.com/view/ldfSWs\n// Thank you Iñigo :)\n\nvec3 calcNormal_4_4(vec3 pos, float eps) {\n  const vec3 v1 = vec3( 1.0,-1.0,-1.0);\n  const vec3 v2 = vec3(-1.0,-1.0, 1.0);\n  const vec3 v3 = vec3(-1.0, 1.0,-1.0);\n  const vec3 v4 = vec3( 1.0, 1.0, 1.0);\n\n  return normalize( v1 * map( pos + v1*eps ).x +\n                    v2 * map( pos + v2*eps ).x +\n                    v3 * map( pos + v3*eps ).x +\n                    v4 * map( pos + v4*eps ).x );\n}\n\nvec3 calcNormal_4_4(vec3 pos) {\n  return calcNormal_4_4(pos, 0.002);\n}\n\n\n\n#define NUM 1.\nfloat t() {\n    return time * 3.;\n}\n\nfloat random(in vec2 p) {\n    return fract(sin(dot(p.xy, vec2(12.34, 56.78))) * 90.0);\n}\n\nfloat sdGround(in vec3 p) {\n    return p.y;\n}\n\nfloat sdBuildings(in vec3 p) {\n    vec3 pp = mod(p, 1.) - .5;\n    float height = random(p.xz - mod(p.xz, 1.)) *3.;\n    float nearness = max(floor(p.z) - t() - 2., 0.3);\n    nearness = pow(nearness, .3);\n    pp.y = p.y * 0.4 * nearness - height * 0.1;\n    return length(max(abs(pp) - .25, .0));\n}\n\nvec2 map(vec3 p) {\n    return vec2(min(sdGround(p), sdBuildings(p)), 0.);\n}\n\n//\nvoid main (void) {\n    vec3 rayOrigin = vec3(0, 1.5, 0);\n    rayOrigin.x += (sin(t() * .7) + cos(t() * .67)) * 0.07;\n    rayOrigin.y += (sin(t() * .81) + cos(t() * .8)) * 0.2;\n    vec3 rayTarget = vec3(0, 1, 9999999.);\n    rayOrigin.z = t();\n    vec3 rayDirection = getRay_1_2(rayOrigin, rayTarget, squareFrame_3_0(resolution.xy), 2.);\n\n    vec3 lightDir = normalize(vec3(0.3, 3., 2.));\n    vec3 light = vec3(.4);\n    vec3 ambient = vec3(.4, .3, .5);\n\n    vec2 collision = calcRayIntersection_2_3(rayOrigin, rayDirection);\n    if (collision.x > 0.) {\n        vec3 pos = rayOrigin + rayDirection * collision.x;\n        vec3 normal = calcNormal_4_4(pos);\n        float diff = clamp(dot(lightDir, normal), 0.1, 1.0);\n        gl_FragColor = vec4(diff * light + ambient * 1./pos.y, 1.0);\n    }\n    else {\n        float c = gl_FragCoord.y / resolution.y;\n        gl_FragColor = vec4(c * 0.2, 0, c * 0.3, 1);\n    }\n}"

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

module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform sampler2D texture;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vec2 ratio = vec2(\n        min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),\n        min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)\n    );\n\n    vec2 uv = vec2(\n        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n    );\n    gl_FragColor = texture2D(texture, uv);\n}"

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

module.exports = "#define GLSLIFY 1\n//attribute vec3 position;\n\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform float u_time;\n\nvoid main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    gl_FragColor=vec4(st.x,st.y,0.0,1.0);\n}"

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTM0ZDM5ZDU1NzE3NjBjN2RjY2IiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0NvbmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FycmF5L0FycmF5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvdWEvY2hlY2tDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvdWEtcGFyc2VyLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9pbWcvcHJlbG9hZEltZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0blR3aXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5MaW5lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuRmFjZUJvb2suanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZU1hbmdlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL292ZXJTY2VuZTAyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvb3Zlci52ZXJ0Iiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvb3Zlci5mcmFnIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDEuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvVXRpbHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmUwMi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1BsYW5lU2NlbmUwMy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL3NjZW5lMDMudmVydCIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL3NjZW5lMDMuZnJhZyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9UZXh0dXJlQmcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci52ZXJ0Iiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvY292ZXIuZnJhZyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LnZlcnQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LmZyYWciXSwibmFtZXMiOlsicmVxdWlyZSIsIkVudHJ5IiwiY29uc3RydWN0b3IiLCJpbml0Iiwid2luZG93IiwiZ2IiLCJ1bmRlZmluZWQiLCJpbiIsImNvbW1vbiIsIm1haW4iLCJDb21tb24iLCJzZXR1cCIsInNldEV2ZW50cyIsImNvbmYiLCJ1IiwiZiIsInV0Iiwib25SZWFkeSIsIm9uTG9hZCIsIiQiLCJkb2N1bWVudCIsIm9uIiwiYmluZCIsIkNvbmYiLCJSRUxFQVNFIiwiRkxHIiwiTE9HIiwiUEFSQU0iLCJTVEFUUyIsImRlZlciLCJkZWZIIiwiVyIsIkgiLCJzcFciLCJzcEgiLCJicCIsIm1vZGUiLCJrZXlzIiwic3dpdGNoTW9kZSIsInNlYzAySW1nTnVtIiwieW91dHViZUlEMDEiLCJ5b3V0dWJlSUQwMiIsIndlYkZvbnRMb2FkZWQiLCJpIiwia2V5IiwibGVuIiwicGFyYW0iLCJyZWYiLCJyZWYxIiwidmFsdWUiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJzcGxpdCIsImxlbmd0aCIsImoiLCJvYmoiLCJrIiwidmFsIiwiVXRpbCIsImlzU2V0U1BTaXplIiwic3RhcnRUaW1lIiwiZWxhcHNlZFRpbWUiLCJub3ciLCJEYXRlIiwicmFuZG9tIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tMiIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJoaXQiLCJyYW5nZSIsIm1hcCIsIm51bSIsInJlc01pbiIsInJlc01heCIsImJhc2VNaW4iLCJiYXNlTWF4IiwicCIsImRlY2ltYWwiLCJuIiwicG9zIiwiU3RyaW5nIiwiaW5kZXhPZiIsInN1YnN0ciIsImNsYW1wIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJkZWdyZWUiLCJyYWRpYW5zIiwiUEkiLCJyYWRpYW4iLCJhbmdsZSIsImRpc3QiLCJwMSIsInAyIiwic3FydCIsInBvdyIsIngiLCJ5IiwiYXNjZW5kIiwiYXJyIiwic29ydCIsImEiLCJiIiwiZGVzY2VuZCIsImNvbnN0cmFpbiIsInVuaXF1ZSIsImdldFRpbWUiLCJidXR0b25Nb2RlIiwiZmxnIiwiY3NzIiwiaXNEaXJlY3Rpb24iLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaXNSZXNwb25zaXZlIiwiaXNSZXNTUCIsImlzUmVzUEMiLCJnZXRQYXJhbSIsInVybCIsImhyZWYiLCJwYXJhbUl0ZW1zIiwibGlzdCIsInBhcmFtSXRlbSIsImhhc2giLCJnZXRDb29raWUiLCJsIiwibGVuMSIsImNvb2tpZSIsInNldENvb2tpZSIsImdldEhleENvbG9yIiwiciIsImciLCJzdHIiLCJ0b1N0cmluZyIsIkFycmF5Iiwiam9pbiIsImlzQ29udGFpbiIsImNvbnRhaW4iLCJhZGQwIiwiZmxvYXRGb3JtYXQiLCJudW1iZXIiLCJfcG93Iiwicm91bmQiLCJwcmljZSIsInN0clJldmVyc2UiLCJyZXMiLCJyZXBsYWNlQWxsIiwib3JnIiwiZGVzdCIsInN0clJlcGxhY2UiLCJiZWZvcmUiLCJhZnRlciIsIlJlZ0V4cCIsImdldE5vdyIsInN0YXJ0IiwiZWxhcHNlZCIsIm0iLCJzIiwibXMiLCJ0aW1lIiwiaG91ciIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJtaWxsU2Vjb25kIiwiZ2V0TWlsbGlzZWNvbmRzIiwiZGF0ZSIsImdldERhdGUiLCJtb250aHMiLCJtb250aGRheXMiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImRheSIsIndlZWtEYXlKUCIsIndESiIsImdldERheSIsIndlZWtEYXlFTiIsIndERSIsImFmdGVyRGF5IiwiTnVtYmVyIiwiaXNPYmplY3QiLCJpZ25vcmVBcnJheSIsImlzTnVtYmVyIiwiaXNTdHJpbmciLCJpc0Z1bmN0aW9uIiwiaXNBcnJheSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJpc051bGwiLCJpc1VuZGVmaW5lZCIsInNldEltZ1NQU2l6ZSIsIiR0YXJnZXQiLCIkaW1nIiwiZWFjaCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJhdHRyIiwidHJpZ2dlciIsInNldFByZXZlbnQiLCJzZWxmIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlUHJldmVudCIsIm9mZiIsInByb3RvY29sIiwiaG9zdCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGgiLCJwYXRobmFtZSIsImV2ZW50IiwicmV0dXJuVmFsdWUiLCJwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMiLCJrZXlDb2RlIiwiZGlzYWJsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbndoZWVsIiwib25tb3VzZXdoZWVsIiwib250b3VjaG1vdmUiLCJvbmtleWRvd24iLCJlbmFibGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiVXRpbHMiLCJfc2V0dXAiLCJjaGVja0NsaWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJhcnJSYW5kIiwic2h1ZmZsZSIsIkFyciIsInNsaWNlIiwidCIsInBhcnNlciIsInVhIiwiaXNJRSIsImJyb3dzZXIiLCJnZXRCcm93c2VyIiwibmFtZSIsImlzRmlyZWZveCIsImlzQ2hyb21lIiwiaXNTYWZhcmkiLCJpc01vYmlsZSIsImRldmljZSIsImdldERldmljZSIsInR5cGUiLCJpc1RhYmxldCIsIm9zIiwiZ2V0T1MiLCJkZXZpY2VfbmFtZSIsInZlbmRvciIsImJyb3dzZXJfbmFtZSIsImFsbCIsImdldFVBIiwibyIsImMiLCJkIiwidiIsIkUiLCJTIiwiZXh0ZW5kIiwiY29uY2F0IiwiaGFzIiwidG9Mb3dlckNhc2UiLCJsb3dlcml6ZSIsIm1ham9yIiwidHJpbSIsInJneCIsImFyZ3VtZW50cyIsImhhc093blByb3BlcnR5IiwiZXhlYyIsInRlc3QiLCJUIiwib2xkc2FmYXJpIiwidmVyc2lvbiIsImFtYXpvbiIsIm1vZGVsIiwic3ByaW50IiwiSFRDIiwiU3ByaW50Iiwid2luZG93cyIsIk1FIiwiWFAiLCJWaXN0YSIsIlJUIiwiTiIsImNwdSIsImVuZ2luZSIsIkMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJhcHBseSIsImdldENQVSIsImdldEVuZ2luZSIsImdldFJlc3VsdCIsInNldFVBIiwiVkVSU0lPTiIsIkJST1dTRVIiLCJOQU1FIiwiTUFKT1IiLCJDUFUiLCJBUkNISVRFQ1RVUkUiLCJERVZJQ0UiLCJNT0RFTCIsIlZFTkRPUiIsIlRZUEUiLCJDT05TT0xFIiwiTU9CSUxFIiwiU01BUlRUViIsIlRBQkxFVCIsIldFQVJBQkxFIiwiRU1CRURERUQiLCJFTkdJTkUiLCJPUyIsImV4cG9ydHMiLCJtb2R1bGUiLCJVQVBhcnNlciIsImpRdWVyeSIsIlplcHRvIiwiTCIsImdldCIsInNldCIsImltZ1BhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsImltZyIsIkltYWdlIiwiY2FsbGVlIiwic3JjIiwiJGJ0biIsInRleHQiLCJzaGFyZVVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9wZW4iLCJkZXNjcmlwdGlvbiIsIkZ1bmMiLCJibGFuayIsImRlYnVnZ2VyIiwiZXhwYW5kalF1ZXJ5IiwibWV0aG9kcyIsImNvbnNvbGUiLCJwcmVwZW5kIiwiRlBTIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0aW1lciIsImZuIiwiYWRqdXN0IiwiYWRqdXN0VyIsImFkanVzdEgiLCJjaGVja0Nzc0JsZW5kIiwiQ1NTIiwic3VwcG9ydHMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsb2ciLCJub3RTYXZlSW1nIiwiaXNQQyIsImlzQW5kcm9pZFZlcnNpb24iLCJhbGVydCIsIk1haW4iLCJwYWdlIiwiZGF0YSIsIm9uUmVuZGVyIiwiRGlzcGxheVRvcCIsInNjZW5lTWFuZ2VyIiwic2NlbmVCb3hBIiwic2NlbmVCb3hCIiwic2NlbmVCb3hDIiwiYWRkU2NlbmUiLCJkcmF3IiwicnVuIiwiU2NlbmVNYW5nZXIiLCJOVU0iLCJzY2VuZXMiLCJmYWRlSW5PdXRUaW1lciIsIm9wIiwiY2FudmFzIiwicmVuZGVyZXIiLCJyZW5kZXJlcjAyIiwib3ZlcnNjZW5lIiwib3ZlckFscGhhIiwiX2FkZFNjZW5lIiwib25SZXNpemUiLCJfb25SZXNpemUiLCJjaGVja051bSIsIl9jaGVja051bSIsIm9uS2V5RG93biIsIl9vbktleURvd24iLCJmYWRlSW5PdXQiLCJfZmFkZUluT3V0IiwiX2RyYXciLCJhbHBoYVJlc2V0IiwiX2FscGhhUmVzZXQiLCJrZXluYW1lIiwicHVzaCIsIlRIUkVFIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsIkNvbG9yIiwic29ydE9iamVjdHMiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwiUENGU2hhZG93TWFwIiwiZG9tRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImFudGlhbGlhcyIsImNhbnZhczAyIiwic2NlbmUiLCJjYW1lcmEiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4Iiwib3BhY2l0eSIsInNpbiIsInVwZGF0ZSIsInJlbmRlciIsIk9yYml0Q29udHJvbHMiLCJvYmplY3QiLCJ0YXJnZXQiLCJWZWN0b3IzIiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsIkluZmluaXR5IiwibWluWm9vbSIsIm1heFpvb20iLCJtaW5Qb2xhckFuZ2xlIiwibWF4UG9sYXJBbmdsZSIsIm1pbkF6aW11dGhBbmdsZSIsIm1heEF6aW11dGhBbmdsZSIsImVuYWJsZURhbXBpbmciLCJkYW1waW5nRmFjdG9yIiwiZW5hYmxlWm9vbSIsInpvb21TcGVlZCIsImVuYWJsZVJvdGF0ZSIsInJvdGF0ZVNwZWVkIiwiZW5hYmxlUGFuIiwia2V5UGFuU3BlZWQiLCJhdXRvUm90YXRlIiwiYXV0b1JvdGF0ZVNwZWVkIiwiZW5hYmxlS2V5cyIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiQk9UVE9NIiwibW91c2VCdXR0b25zIiwiT1JCSVQiLCJNT1VTRSIsIlpPT00iLCJNSURETEUiLCJQQU4iLCJ0YXJnZXQwIiwiY2xvbmUiLCJwb3NpdGlvbjAiLCJwb3NpdGlvbiIsInpvb20wIiwiem9vbSIsImdldFBvbGFyQW5nbGUiLCJzcGhlcmljYWwiLCJwaGkiLCJnZXRBemltdXRoYWxBbmdsZSIsInRoZXRhIiwicmVzZXQiLCJzY29wZSIsImNvcHkiLCJkaXNwYXRjaEV2ZW50IiwiY2hhbmdlRXZlbnQiLCJzdGF0ZSIsIlNUQVRFIiwiTk9ORSIsIm9mZnNldCIsInF1YXQiLCJRdWF0ZXJuaW9uIiwic2V0RnJvbVVuaXRWZWN0b3JzIiwidXAiLCJxdWF0SW52ZXJzZSIsImludmVyc2UiLCJsYXN0UG9zaXRpb24iLCJsYXN0UXVhdGVybmlvbiIsInN1YiIsImFwcGx5UXVhdGVybmlvbiIsInNldEZyb21WZWN0b3IzIiwicm90YXRlTGVmdCIsImdldEF1dG9Sb3RhdGlvbkFuZ2xlIiwic3BoZXJpY2FsRGVsdGEiLCJtYWtlU2FmZSIsInJhZGl1cyIsInNjYWxlIiwicGFuT2Zmc2V0Iiwic2V0RnJvbVNwaGVyaWNhbCIsImxvb2tBdCIsInpvb21DaGFuZ2VkIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJFUFMiLCJkb3QiLCJxdWF0ZXJuaW9uIiwiZGlzcG9zZSIsIm9uQ29udGV4dE1lbnUiLCJvbk1vdXNlRG93biIsIm9uTW91c2VXaGVlbCIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJvblRvdWNoTW92ZSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwic3RhcnRFdmVudCIsImVuZEV2ZW50IiwiUk9UQVRFIiwiRE9MTFkiLCJUT1VDSF9ST1RBVEUiLCJUT1VDSF9ET0xMWSIsIlRPVUNIX1BBTiIsIlNwaGVyaWNhbCIsInJvdGF0ZVN0YXJ0IiwiVmVjdG9yMiIsInJvdGF0ZUVuZCIsInJvdGF0ZURlbHRhIiwicGFuU3RhcnQiLCJwYW5FbmQiLCJwYW5EZWx0YSIsImRvbGx5U3RhcnQiLCJkb2xseUVuZCIsImRvbGx5RGVsdGEiLCJnZXRab29tU2NhbGUiLCJyb3RhdGVVcCIsInBhbkxlZnQiLCJkaXN0YW5jZSIsIm9iamVjdE1hdHJpeCIsInNldEZyb21NYXRyaXhDb2x1bW4iLCJtdWx0aXBseVNjYWxhciIsInBhblVwIiwicGFuIiwiZGVsdGFYIiwiZGVsdGFZIiwiZWxlbWVudCIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwidGFyZ2V0RGlzdGFuY2UiLCJ0YW4iLCJmb3YiLCJjbGllbnRIZWlnaHQiLCJtYXRyaXgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJyaWdodCIsImxlZnQiLCJjbGllbnRXaWR0aCIsInRvcCIsImJvdHRvbSIsIndhcm4iLCJkb2xseUluIiwiZG9sbHlTY2FsZSIsImRvbGx5T3V0IiwiaGFuZGxlTW91c2VEb3duUm90YXRlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZURvd25Eb2xseSIsImhhbmRsZU1vdXNlRG93blBhbiIsImhhbmRsZU1vdXNlTW92ZVJvdGF0ZSIsInN1YlZlY3RvcnMiLCJoYW5kbGVNb3VzZU1vdmVEb2xseSIsImhhbmRsZU1vdXNlTW92ZVBhbiIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZVdoZWVsIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZVRvdWNoU3RhcnRSb3RhdGUiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRvdWNoU3RhcnREb2xseSIsImR4IiwiZHkiLCJoYW5kbGVUb3VjaFN0YXJ0UGFuIiwiaGFuZGxlVG91Y2hNb3ZlUm90YXRlIiwiaGFuZGxlVG91Y2hNb3ZlRG9sbHkiLCJoYW5kbGVUb3VjaE1vdmVQYW4iLCJoYW5kbGVUb3VjaEVuZCIsImJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsImNyZWF0ZSIsIkV2ZW50RGlzcGF0Y2hlciIsImRlZmluZVByb3BlcnRpZXMiLCJjZW50ZXIiLCJub1pvb20iLCJub1JvdGF0ZSIsIm5vUGFuIiwibm9LZXlzIiwic3RhdGljTW92aW5nIiwiZHluYW1pY0RhbXBpbmdGYWN0b3IiLCJvdmVyU2NlbmUwMiIsIlVQREFURSIsIkVORCIsImNyZWF0ZVNjZW5lIiwiX2NyZWF0ZVNjZW5lIiwicmVtb3ZlIiwiX3JlbW92ZSIsImVuZEVuYWJsZWQiLCJfZW5kRW5hYmxlZCIsIl91cGRhdGUiLCJTY2VuZSIsInoiLCJnZW9tZXRyeSIsIkluc3RhbmNlZEJ1ZmZlckdlb21ldHJ5IiwiQ2lyY2xlQnVmZmVyR2VvbWV0cnkiLCJwYXJ0aWNsZUNvdW50IiwidHJhbnNsYXRlQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJpMyIsImFkZEF0dHJpYnV0ZSIsIkluc3RhbmNlZEJ1ZmZlckF0dHJpYnV0ZSIsIm1hdGVyaWFsIiwiUmF3U2hhZGVyTWF0ZXJpYWwiLCJ1bmlmb3JtcyIsIlRleHR1cmVMb2FkZXIiLCJsb2FkIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJkZXB0aFRlc3QiLCJkZXB0aFdyaXRlIiwibWVzaCIsIk1lc2giLCJjaGlsZHJlbiIsInBlcmZvcm1hbmNlIiwicm90YXRpb24iLCJyYWQiLCJjb3MiLCJTY2VuZTAxIiwiY3ViZSIsImxvYWRlciIsIm1hcFRleHR1cmUiLCJlbFZvbHVtZSIsImVsVm9sdW1lVmFsIiwiZ3JvdXAiLCJfcmVuZGVyIiwiY3ViZV91cGRhdGUiLCJfY3ViZV91cGRhdGUiLCJhdWRpb0luaXQiLCJjdHgiLCJhbmFseXNlciIsImZyZXF1ZW5jaWVzIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlIiwiZXhlY3V0ZSIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiVWludDhBcnJheSIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJyZWR1Y2UiLCJwcmV2aW91cyIsImN1cnJlbnQiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRoZW4iLCJzdHJlYW0iLCJoYWNrRm9yTW96emlsYSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiY29ubmVjdCIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsImdldEVsZW1lbnRCeUlkIiwiR3JvdXAiLCJzdGVwIiwiQm94R2VvbWV0cnkiLCJNZXNoTGFtYmVydE1hdGVyaWFsIiwiY29sb3IiLCJidW1wTWFwIiwiYnVtcFNjYWxlIiwic3BlY3VsYXIiLCJzaGluaW5lc3MiLCJhbWJpZW50IiwicG9pbnRMaWdodCIsIlBvaW50TGlnaHQiLCJ3YXZlRGF0YSIsInRyYXZlcnNlIiwiX2V4ZWN1dGUiLCJnZXRWYWwiLCJfZ2V0VmFsIiwiaW5uZXJIVE1MIiwiU2NlbmUwMiIsImtub3QiLCJ0dWJlIiwicmFkaWFsU2VnbWVudHMiLCJ0dWJ1bGFyU2VnbWVudHMiLCJxIiwiaGVpZ2h0U2NhbGUiLCJhc1BhcnRpY2xlcyIsInJvdGF0ZSIsInBlck1hdCIsImdlbmVyYXRlU3ByaXRlIiwiX2dlbmVyYXRlU3ByaXRlIiwiY3JlYXRlUGFydGljbGVTeXN0ZW0iLCJfY3JlYXRlUGFydGljbGVTeXN0ZW0iLCJjcmVhdGVNZXNoIiwiX2NyZWF0ZU1lc2giLCJjaXJjbGVfdXBkYXRlIiwiX2NpcmNsZV91cGRhdGUiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsIm5lZWRzVXBkYXRlIiwiZ2VvbSIsIlBhcnRpY2xlQmFzaWNNYXRlcmlhbCIsInNpemUiLCJ0cmFuc3BhcmVudCIsImJsZW5kaW5nIiwiQWRkaXRpdmVCbGVuZGluZyIsInN5c3RlbSIsIlBhcnRpY2xlU3lzdGVtIiwic29ydFBhcnRpY2xlcyIsIm1lc2hNYXRlcmlhbCIsIk1lc2hOb3JtYWxNYXRlcmlhbCIsInNpZGUiLCJEb3VibGVTaWRlIiwiU2NlbmVVdGlscyIsImNyZWF0ZU11bHRpTWF0ZXJpYWxPYmplY3QiLCJUb3J1c0tub3RHZW9tZXRyeSIsIlNjZW5lMDMiLCJsb2FkVGV4dHVyZSIsIl9sb2FkVGV4dHVyZSIsInBsYW5lIiwicmVzb2x1dGlvbiIsIlBsYW5lU2NlbmUwMyIsInJlc2l6ZSIsIl9yZXNpemUiLCJpbWFnZSIsIm1hZ0ZpbHRlciIsIk5lYXJlc3RGaWx0ZXIiLCJtaW5GaWx0ZXIiLCJtb3VzZSIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJ0ZXh0dXJlQmciLCJUZXh0dXJlQmciLCJjcmVhdGVDYW1lcmEiLCJfY3JlYXRlQ2FtZXJhIiwiY3JlYXRlUmVuZGVyZXIiLCJfY3JlYXRlUmVuZGVyZXIiLCJVcGRhdGUiLCJfVXBkYXRlIiwic3RlbmNpbCIsImRlcHRoIiwicHJlbXVsdGlwbGllZEFscGhhIiwiUGxhbmUiLCJpbWFnZVJlc29sdXRpb24iLCJzdG9wIiwiaW50ZXJ2YWwiLCJwcmV2X251bSIsIm5leHRfbnVtIiwidGV4UHJldiIsInRleHR1cmVzIiwidGV4TmV4dCIsIkNhbnZhcyIsInVfdGltZSIsInVfcmVzb2x1dGlvbiIsInVfbW91c2UiLCJjcmVhdGVPYmplY3QiLCJfY3JlYXRlT2JqZWN0Iiwib3JiaXRDb250cm9scyIsIl9vcmJpdENvbnRyb2xzIiwicGxhbmVPYmplY3QiLCJfcGxhbmVPYmplY3QiLCJjdWJlR2VvbWV0cnkiLCJjdWJlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIndpcmVmcmFtZSIsIlNoYWRlck1hdGVyaWFsIiwiY2xvY2siLCJDbG9jayIsImdldERlbHRhIiwiY29udHJvbHMiLCJkZWx0YSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7Ozs7QUFRQSxtQkFBQUEsQ0FBUSxFQUFSOztBQUVBOztBQUVlLE1BQU1DLEtBQU4sQ0FBWTs7QUFFMUJDLGVBQWMsQ0FFYjs7QUFFRDs7O0FBR0FDLFFBQU0sQ0FFTDs7QUFYeUIsQzs7Ozs7Ozs7Ozs7QUNaM0I7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBOztBQUVBLENBQUMsTUFBSTs7QUFFSDtBQUNBLE1BQUlDLE9BQU9DLEVBQVAsS0FBWUMsU0FBaEIsRUFBMkJGLE9BQU9DLEVBQVAsR0FBWSxFQUFaO0FBQzNCRCxTQUFPQyxFQUFQLENBQVVFLEVBQVYsR0FBZSxFQUFmLENBSkcsQ0FJZ0I7O0FBRW5CRixLQUFHRSxFQUFILENBQU1DLE1BQU4sR0FBZSxJQUFJLDZEQUFKLEVBQWY7QUFDQUgsS0FBR0UsRUFBSCxDQUFNRSxJQUFOLEdBQWEsSUFBSSwyREFBSixFQUFiO0FBRUQsQ0FURCxJOzs7Ozs7Ozs7O0FDWEE7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxNQUFNQyxNQUFOLENBQWE7O0FBRTFCUixnQkFBYzs7QUFFWixTQUFLUyxLQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUVEOztBQUVGRCxVQUFROztBQUVQOzs7OztBQUtFTixPQUFHRSxFQUFILENBQU1NLElBQU4sR0FBYSxJQUFJLDJEQUFKLEVBQWI7QUFDQVIsT0FBR0UsRUFBSCxDQUFNTyxDQUFOLEdBQVUsSUFBSSw2REFBSixFQUFWO0FBQ0FULE9BQUdFLEVBQUgsQ0FBTVEsQ0FBTixHQUFVLElBQUksNkRBQUosRUFBVjs7QUFFQVYsT0FBR0UsRUFBSCxDQUFNUyxFQUFOLEdBQVcsSUFBSSw2REFBSixFQUFYO0FBRUQ7O0FBRURDLFlBQVUsQ0FHVDs7QUFFREMsV0FBUyxDQUdSOztBQUVETixjQUFZOztBQUVWTyxNQUFFQyxRQUFGLEVBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLEtBQUtKLE9BQUwsQ0FBYUssSUFBYixDQUFrQixJQUFsQixDQUF4QjtBQUNBSCxNQUFFZixNQUFGLEVBQVVpQixFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7QUF2Q3lCLEM7Ozs7Ozs7OztBQ2Y1Qjs7Ozs7Ozs7QUFRQTs7QUFFZSxNQUFNQyxJQUFOLENBQVc7O0FBRXhCckIsZ0JBQWM7O0FBRVo7QUFDQTtBQUNBO0FBQ0EsU0FBS3NCLE9BQUwsR0FBZSxJQUFmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsR0FBTCxHQUFXO0FBQ1RDLFdBQUksSUFESyxFQUNFO0FBQ1hDLGFBQU0sSUFGRyxFQUVHO0FBQ1pDLGFBQU0sSUFIRyxDQUdHO0FBSEgsS0FBWDtBQUtBLFFBQUksQ0FBQyxLQUFLSixPQUFWLEVBQW1CO0FBQ2pCLFdBQUtDLEdBQUwsR0FBVztBQUNUQyxhQUFJLEtBREs7QUFFVEMsZUFBTSxLQUZHO0FBR1RDLGVBQU07QUFIRyxPQUFYO0FBS0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksR0FBWjs7QUFFQSxTQUFLQyxDQUFMLEdBQVMsSUFBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxHQUFUOztBQUVBLFNBQUtDLEdBQUwsR0FBVyxHQUFYO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEdBQVg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsRUFBTCxHQUFVLEdBQVY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FDVjtBQUNJLGFBQU8sT0FEWDtBQUVJLGVBQVMsQ0FBQyxTQUFELEVBQVcsV0FBWCxFQUF1QixPQUF2QjtBQUZiLEtBRFUsRUFLVjtBQUNJLGFBQU8sTUFEWDtBQUVJLGVBQVMsQ0FBQyxRQUFELEVBQVUsUUFBVixFQUFtQixRQUFuQjtBQUZiLEtBTFUsRUFTVjtBQUNJLGFBQU8sU0FEWDtBQUVJLGVBQVMsQ0FBQyxJQUFEO0FBRmIsS0FUVSxDQUFaO0FBY0EsU0FBS0MsVUFBTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEdBQW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsYUFBbkI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLGFBQW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsS0FBckI7QUFFRDs7QUFHREosZUFBWTs7QUFFVixRQUFJSyxDQUFKLEVBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsS0FBakIsRUFBd0JDLEdBQXhCLEVBQTZCQyxJQUE3QixFQUFtQ0MsS0FBbkM7O0FBRUFGLFVBQU1HLFNBQVNDLE1BQVQsQ0FBZ0JDLE9BQWhCLENBQXdCLEdBQXhCLEVBQTZCLEVBQTdCLEVBQWlDQyxLQUFqQyxDQUF1QyxHQUF2QyxDQUFOOztBQUVBLFNBQUtWLElBQUksQ0FBSixFQUFPRSxNQUFNRSxJQUFJTyxNQUF0QixFQUE4QlgsSUFBSUUsR0FBbEMsRUFBdUNGLEdBQXZDLEVBQTRDO0FBQzFDRyxjQUFRQyxJQUFJSixDQUFKLENBQVI7QUFDQUssYUFBT0YsTUFBTU8sS0FBTixDQUFZLEdBQVosQ0FBUCxFQUF5QlQsTUFBTUksS0FBSyxDQUFMLENBQS9CLEVBQXdDQyxRQUFRRCxLQUFLLENBQUwsQ0FBaEQ7O0FBRUEsV0FBSyxJQUFJTyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2xCLElBQUwsQ0FBVWlCLE1BQTlCLEVBQXNDQyxHQUF0QyxFQUEyQzs7QUFFekMsWUFBSUMsTUFBTSxLQUFLbkIsSUFBTCxDQUFVa0IsQ0FBVixDQUFWOztBQUVBO0FBQ0EsWUFBSUMsSUFBSVosR0FBSixLQUFZQSxHQUFoQixFQUFxQjs7QUFFbkI7QUFDQSxlQUFLLElBQUlhLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsSUFBSVAsS0FBSixDQUFVSyxNQUE5QixFQUFzQ0csR0FBdEMsRUFBMkM7O0FBRXpDLGdCQUFJQyxNQUFNRixJQUFJUCxLQUFKLENBQVVRLENBQVYsQ0FBVjs7QUFFQTtBQUNBLGdCQUFJQyxRQUFRVCxLQUFaLEVBQW1CLEtBQUtPLElBQUlaLEdBQVQsSUFBZ0JjLEdBQWhCO0FBRXBCO0FBR0Y7QUFHRjtBQUVGO0FBRUY7O0FBMUh1QixDOzs7Ozs7Ozs7QUNWMUI7Ozs7Ozs7O0FBUWUsTUFBTUMsSUFBTixDQUFXOztBQUV4QnpELGdCQUFjOztBQUVaLFNBQUswRCxXQUFMLEdBQW1CLEtBQW5COztBQUVBLFNBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLElBQUlDLElBQUosRUFBWDtBQUVEOztBQUVEOzs7O0FBS0E7Ozs7OztBQU1BQyxTQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUI7O0FBRWYsV0FBT0MsS0FBS0MsS0FBTCxDQUFZRCxLQUFLSCxNQUFMLE1BQWtCRSxNQUFNLENBQVAsR0FBWUQsR0FBN0IsSUFBb0NBLEdBQWhELENBQVA7QUFFRDs7QUFFRDs7Ozs7Ozs7QUFRQUksVUFBUUMsSUFBUixFQUFjQyxJQUFkLEVBQW9CQyxJQUFwQixFQUEwQkMsSUFBMUIsRUFBZ0M7O0FBRTlCLFFBQUksS0FBS0MsR0FBTCxDQUFTLENBQVQsQ0FBSixFQUFpQjtBQUNmLGFBQU8sS0FBS1YsTUFBTCxDQUFZTSxJQUFaLEVBQWtCQyxJQUFsQixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxLQUFLUCxNQUFMLENBQVlRLElBQVosRUFBa0JDLElBQWxCLENBQVA7QUFDRDtBQUVGOztBQUVEOzs7OztBQUtBQyxNQUFJQyxLQUFKLEVBQVc7O0FBRVQsV0FBTyxLQUFLWCxNQUFMLENBQVksQ0FBWixFQUFlVyxRQUFRLENBQXZCLE1BQThCLENBQXJDO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxRQUFNbEIsR0FBTixFQUFXOztBQUVULFdBQU8sS0FBS08sTUFBTCxDQUFZLENBQUNQLEdBQWIsRUFBa0JBLEdBQWxCLENBQVA7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQW1CLE1BQUlDLEdBQUosRUFBU0MsTUFBVCxFQUFpQkMsTUFBakIsRUFBeUJDLE9BQXpCLEVBQWtDQyxPQUFsQyxFQUEyQzs7QUFFekMsUUFBSUMsQ0FBSjtBQUNBLFFBQUlMLE1BQU1HLE9BQVYsRUFBbUI7QUFDakIsYUFBT0YsTUFBUDtBQUNEO0FBQ0QsUUFBSUQsTUFBTUksT0FBVixFQUFtQjtBQUNqQixhQUFPRixNQUFQO0FBQ0Q7QUFDREcsUUFBSSxDQUFDSCxTQUFTRCxNQUFWLEtBQXFCRyxVQUFVRCxPQUEvQixDQUFKOztBQUVBLFdBQVEsQ0FBQ0gsTUFBTUcsT0FBUCxJQUFrQkUsQ0FBbkIsR0FBd0JKLE1BQS9CO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FLLFVBQVFOLEdBQVIsRUFBYU8sQ0FBYixFQUFnQjtBQUNkLFFBQUkxQyxDQUFKLEVBQU8yQyxHQUFQO0FBQ0FSLFVBQU1TLE9BQU9ULEdBQVAsQ0FBTjtBQUNBUSxVQUFNUixJQUFJVSxPQUFKLENBQVksR0FBWixDQUFOO0FBQ0EsUUFBSUgsTUFBTSxDQUFWLEVBQWE7QUFDWCxhQUFPUCxJQUFJekIsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBQVA7QUFDRDtBQUNELFFBQUlpQyxRQUFRLENBQUMsQ0FBYixFQUFnQjtBQUNkUixhQUFPLEdBQVA7QUFDQW5DLFVBQUksQ0FBSjtBQUNBLGFBQU9BLElBQUkwQyxDQUFYLEVBQWM7QUFDWlAsZUFBTyxHQUFQO0FBQ0FuQztBQUNEO0FBQ0QsYUFBT21DLEdBQVA7QUFDRDtBQUNEQSxVQUFNQSxJQUFJVyxNQUFKLENBQVcsQ0FBWCxFQUFjSCxHQUFkLElBQXFCUixJQUFJVyxNQUFKLENBQVdILEdBQVgsRUFBZ0JELElBQUksQ0FBcEIsQ0FBM0I7QUFDQSxXQUFPUCxHQUFQO0FBQ0Q7O0FBRURZLFFBQU1DLFNBQU4sRUFBZ0JDLFdBQWhCLEVBQTRCbEMsR0FBNUIsRUFBaUM7O0FBRS9CLFdBQU9BLE9BQU9pQyxZQUFZQyxXQUFuQixDQUFQO0FBRUQ7O0FBRUY7Ozs7O0FBS0NDLFNBQU9DLE9BQVAsRUFBZ0I7O0FBRWQsV0FBT0EsVUFBVSxHQUFWLEdBQWdCMUIsS0FBSzJCLEVBQTVCO0FBRUQ7O0FBRUQ7QUFDQUMsU0FBT0MsS0FBUCxFQUFjOztBQUVaLFdBQU9BLFFBQVE3QixLQUFLMkIsRUFBYixHQUFrQixHQUF6QixDQUZZLENBRWtCO0FBRS9COztBQUVERyxPQUFLQyxFQUFMLEVBQVNDLEVBQVQsRUFBYTs7QUFFWCxXQUFPaEMsS0FBS2lDLElBQUwsQ0FBVWpDLEtBQUtrQyxHQUFMLENBQVNGLEdBQUdHLENBQUgsR0FBT0osR0FBR0ksQ0FBbkIsRUFBc0IsQ0FBdEIsSUFBMkJuQyxLQUFLa0MsR0FBTCxDQUFTRixHQUFHSSxDQUFILEdBQU9MLEdBQUdLLENBQW5CLEVBQXNCLENBQXRCLENBQXJDLENBQVA7QUFFRDs7QUFFREMsU0FBT0MsR0FBUCxFQUFZOztBQUVWQSxRQUFJQyxJQUFKLENBQVMsVUFBU0MsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFDcEIsVUFBSUQsSUFBSUMsQ0FBUixFQUFZLE9BQU8sQ0FBQyxDQUFSO0FBQ1osVUFBSUQsSUFBSUMsQ0FBUixFQUFZLE9BQU8sQ0FBUDtBQUNaLGFBQU8sQ0FBUDtBQUNELEtBSkQ7QUFLQTtBQUNBO0FBRUQ7O0FBRURDLFVBQVFKLEdBQVIsRUFBYTs7QUFFWEEsUUFBSUMsSUFBSixDQUFTLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQ3BCLFVBQUlELElBQUlDLENBQVIsRUFBWSxPQUFPLENBQUMsQ0FBUjtBQUNaLFVBQUlELElBQUlDLENBQVIsRUFBWSxPQUFPLENBQVA7QUFDWixhQUFPLENBQVA7QUFDRCxLQUpEOztBQU1BO0FBQ0E7QUFFRDs7QUFFRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUFFLFlBQVU5RCxLQUFWLEVBQWlCaUIsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCOztBQUV6QixXQUFPQyxLQUFLRixHQUFMLENBQVNDLEdBQVQsRUFBY0MsS0FBS0QsR0FBTCxDQUFTbEIsS0FBVCxFQUFnQmlCLEdBQWhCLENBQWQsQ0FBUDs7QUFFQTtBQUNBO0FBQ0E7QUFFRDs7QUFFRDtBQUNBO0FBQ0E4QyxXQUFTOztBQUVQLFdBQU8sSUFBSWhELElBQUosR0FBV2lELE9BQVgsRUFBUDtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGFBQVdDLEdBQVgsRUFBZ0I7O0FBRWQsUUFBSUEsR0FBSixFQUFTO0FBQ1AsYUFBT2hHLEVBQUUsTUFBRixFQUFVaUcsR0FBVixDQUFjLFFBQWQsRUFBd0IsU0FBeEIsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9qRyxFQUFFLE1BQUYsRUFBVWlHLEdBQVYsQ0FBYyxRQUFkLEVBQXdCLFNBQXhCLENBQVA7QUFDRDtBQUVGOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsZ0JBQWU7O0FBRWIsUUFBSXRGLElBQUkzQixPQUFPa0gsVUFBZjtBQUFBLFFBQ0l0RixJQUFJNUIsT0FBT21ILFdBRGY7O0FBR0EsUUFBSXZGLElBQUlELENBQVIsRUFBVztBQUNUWixRQUFFLE1BQUYsRUFBVXFHLFFBQVYsQ0FBbUIsVUFBbkI7QUFDQXJHLFFBQUUsTUFBRixFQUFVc0csV0FBVixDQUFzQixXQUF0QjtBQUNELEtBSEQsTUFHSztBQUNIdEcsUUFBRSxNQUFGLEVBQVVxRyxRQUFWLENBQW1CLFdBQW5CO0FBQ0FyRyxRQUFFLE1BQUYsRUFBVXNHLFdBQVYsQ0FBc0IsVUFBdEI7QUFDRDtBQUVGOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsZUFBY3ZGLEVBQWQsRUFBa0I7O0FBRWhCLFFBQUlBLE1BQUk3QixTQUFSLEVBQW1CNkIsS0FBRyxHQUFIOztBQUVuQixRQUFJSixJQUFJM0IsT0FBT2tILFVBQWY7QUFBQSxRQUNJdEYsSUFBSTVCLE9BQU9tSCxXQURmOztBQUdBLFFBQUl4RixJQUFJSSxFQUFSLEVBQVk7QUFDVixXQUFLd0YsT0FBTCxHQUFlLEtBQWY7QUFDQSxXQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBekcsUUFBRSxNQUFGLEVBQVVzRyxXQUFWLENBQXNCLGdCQUF0QjtBQUNBdEcsUUFBRSxNQUFGLEVBQVVxRyxRQUFWLENBQW1CLGdCQUFuQjtBQUNELEtBTEQsTUFLTztBQUNMLFdBQUtHLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQXpHLFFBQUUsTUFBRixFQUFVcUcsUUFBVixDQUFtQixnQkFBbkI7QUFDQXJHLFFBQUUsTUFBRixFQUFVc0csV0FBVixDQUFzQixnQkFBdEI7QUFDRDtBQUVGOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQUksYUFBVzs7QUFFVCxRQUFJQyxNQUFNNUUsU0FBUzZFLElBQW5CO0FBQ0EsUUFBSWpGLFFBQVFnRixJQUFJekUsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBQVo7QUFDQSxRQUFJUCxTQUFPeEMsU0FBWCxFQUFzQixPQUFPQSxTQUFQO0FBQ3RCLFFBQUkwSCxhQUFhbEYsTUFBTU8sS0FBTixDQUFZLEdBQVosQ0FBakI7QUFDQSxRQUFJNEUsT0FBTyxFQUFYOztBQUVBLFNBQUssSUFBSXRGLElBQUksQ0FBYixFQUFnQkEsSUFBRXFGLFdBQVcxRSxNQUE3QixFQUFxQ1gsR0FBckMsRUFBMEM7O0FBRXRDdUYsa0JBQVlGLFdBQVdyRixDQUFYLEVBQWNVLEtBQWQsQ0FBb0IsR0FBcEIsQ0FBWjtBQUNBNEUsV0FBS0MsVUFBVSxDQUFWLENBQUwsSUFBcUJBLFVBQVUsQ0FBVixDQUFyQjtBQUVIOztBQUVELFdBQU9ELElBQVA7QUFFRDs7QUFFRDs7OztBQUlBRSxTQUFPOztBQUVMLFdBQU9qRixTQUFTaUYsSUFBVCxDQUFjL0UsT0FBZCxDQUFzQixHQUF0QixFQUEyQixFQUEzQixDQUFQO0FBRUQ7O0FBRUQ7Ozs7O0FBS0FnRixZQUFVeEYsR0FBVixFQUFlOztBQUViLFFBQUlnRSxDQUFKLEVBQU9GLEdBQVAsRUFBWS9ELENBQVosRUFBZTBGLENBQWYsRUFBa0JDLElBQWxCLEVBQXdCNUUsR0FBeEI7QUFDQSxRQUFJdEMsU0FBU21ILE1BQVQsS0FBb0IsS0FBSyxDQUF6QixJQUE4Qm5ILFNBQVNtSCxNQUFULEtBQW9CLElBQXRELEVBQTREO0FBQzFELGFBQU8sSUFBUDtBQUNEO0FBQ0Q3QixVQUFNdEYsU0FBU21ILE1BQVQsQ0FBZ0JsRixLQUFoQixDQUFzQixJQUF0QixDQUFOO0FBQ0EsU0FBS1YsSUFBSTBGLElBQUksQ0FBUixFQUFXQyxPQUFPNUIsSUFBSXBELE1BQTNCLEVBQW1DK0UsSUFBSUMsSUFBdkMsRUFBNkMzRixJQUFJLEVBQUUwRixDQUFuRCxFQUFzRDtBQUNwRDNFLFlBQU1nRCxJQUFJL0QsQ0FBSixDQUFOO0FBQ0FpRSxVQUFJbEQsSUFBSUwsS0FBSixDQUFVLEdBQVYsQ0FBSjtBQUNBLFVBQUl1RCxFQUFFLENBQUYsTUFBU2hFLEdBQWIsRUFBa0I7QUFDaEIsZUFBT2dFLEVBQUUsQ0FBRixDQUFQO0FBQ0Q7QUFDRjtBQUNELFdBQU8sSUFBUDtBQUVEOztBQUVEOzs7Ozs7QUFNQTRCLFlBQVU1RixHQUFWLEVBQWVjLEdBQWYsRUFBb0I7O0FBRWxCLFdBQU90QyxTQUFTbUgsTUFBVCxHQUFrQjNGLE1BQU0sR0FBTixHQUFZYyxHQUFyQztBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQStFLGNBQVlDLENBQVosRUFBY0MsQ0FBZCxFQUFnQjlCLENBQWhCLEVBQW1CO0FBQ2YsUUFBSStCLEdBQUo7QUFDQUEsVUFBTSxDQUFDRixLQUFLLEVBQUwsR0FBVUMsS0FBSyxDQUFmLEdBQW1COUIsQ0FBcEIsRUFBdUJnQyxRQUF2QixDQUFnQyxFQUFoQyxDQUFOO0FBQ0EsV0FBTyxNQUFNLElBQUlDLEtBQUosQ0FBVSxJQUFJRixJQUFJdEYsTUFBbEIsRUFBMEJ5RixJQUExQixDQUErQixHQUEvQixDQUFOLEdBQTRDSCxHQUFuRDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFJLFlBQVVKLEdBQVYsRUFBY0ssT0FBZCxFQUF1Qjs7QUFFckI7QUFDQSxRQUFLTCxJQUFJcEQsT0FBSixDQUFZeUQsT0FBWixLQUF3QixDQUFDLENBQTlCLEVBQWtDO0FBQ2hDLGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU8sS0FBUDtBQUVEOztBQUVEO0FBQ0FDLE9BQUtOLEdBQUwsRUFBUzlELE1BQUksQ0FBQyxDQUFkLEVBQWdCOztBQUVkLFdBQU8sQ0FBRSxpQkFBaUI4RCxHQUFuQixFQUF5Qm5ELE1BQXpCLENBQWlDWCxHQUFqQyxDQUFQO0FBRUQ7O0FBRURxRSxjQUFhQyxNQUFiLEVBQXFCL0QsQ0FBckIsRUFBeUI7O0FBRXZCLFFBQUlnRSxPQUFPakYsS0FBS2tDLEdBQUwsQ0FBVSxFQUFWLEVBQWVqQixDQUFmLENBQVg7QUFDQSxXQUFPakIsS0FBS2tGLEtBQUwsQ0FBWUYsU0FBU0MsSUFBckIsSUFBOEJBLElBQXJDO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBRSxRQUFNekUsR0FBTixFQUFXOztBQUVULFdBQU9TLE9BQU9ULEdBQVAsRUFBWTFCLE9BQVosQ0FBb0IsMEJBQXBCLEVBQWdELEtBQWhELENBQVA7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FvRyxhQUFXWixHQUFYLEVBQWdCOztBQUVkLFFBQUlqRyxDQUFKLEVBQU9FLEdBQVAsRUFBWTRHLEdBQVo7QUFDQUEsVUFBTSxFQUFOO0FBQ0E1RyxVQUFNK0YsSUFBSXRGLE1BQVY7QUFDQVgsUUFBSSxDQUFKO0FBQ0EsV0FBT0EsS0FBS0UsR0FBWixFQUFpQjtBQUNmNEcsYUFBT2IsSUFBSW5ELE1BQUosQ0FBVyxDQUFDOUMsQ0FBWixFQUFlLENBQWYsQ0FBUDtBQUNBQTtBQUNEO0FBQ0QsV0FBTzhHLEdBQVA7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsYUFBV2hHLEdBQVgsRUFBZ0JpRyxHQUFoQixFQUFxQkMsSUFBckIsRUFBMkI7O0FBRXpCLFdBQU9sRyxJQUFJTCxLQUFKLENBQVVzRyxHQUFWLEVBQWVaLElBQWYsQ0FBb0JhLElBQXBCLENBQVA7QUFFRDs7QUFFREMsYUFBV2pCLEdBQVgsRUFBZ0JrQixNQUFoQixFQUF3QkMsS0FBeEIsRUFBK0I7O0FBRTdCLFFBQUlyQixJQUFJLElBQUlzQixNQUFKLENBQVlGLE1BQVosRUFBb0IsR0FBcEIsQ0FBUjs7QUFFQSxXQUFPbEIsSUFBSXhGLE9BQUosQ0FBYXNGLENBQWIsRUFBaUJxQixLQUFqQixDQUFQO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUUsV0FBUzs7QUFFUCxTQUFLbEcsR0FBTCxHQUFXLElBQUlDLElBQUosRUFBWDtBQUVEOztBQUVEa0csVUFBUTs7QUFFTixTQUFLckcsU0FBTCxHQUFpQixLQUFLRSxHQUFMLENBQVNrRCxPQUFULEVBQWpCO0FBRUQ7O0FBRURrRCxZQUFVOztBQUVSLFNBQUtyRyxXQUFMLEdBQW1CLEtBQUtDLEdBQUwsQ0FBU2tELE9BQVQsS0FBcUIsS0FBS3BELFNBQTdDO0FBRUQ7O0FBRUR1RyxNQUFJOztBQUVGLFdBQU9oRyxLQUFLQyxLQUFMLENBQVksS0FBS1AsV0FBTCxHQUFtQixNQUFNLEVBQXJDLENBQVA7QUFFRDs7QUFFRHVHLE1BQUk7O0FBRUYsV0FBT2pHLEtBQUtDLEtBQUwsQ0FBVyxLQUFLUCxXQUFMLEdBQW1CLElBQTlCLENBQVA7QUFFRDs7QUFFRHdHLE9BQUs7O0FBRUgsV0FBTyxLQUFLeEcsV0FBWjtBQUVEOztBQUVEeUcsU0FBTzs7QUFFTCxTQUFLTixNQUFMOztBQUVBLFNBQUtPLElBQUwsR0FBWSxLQUFLekcsR0FBTCxDQUFTMEcsUUFBVCxFQUFaLENBSkssQ0FJcUM7QUFDMUMsU0FBS0MsTUFBTCxHQUFjLEtBQUszRyxHQUFMLENBQVM0RyxVQUFULEVBQWQsQ0FMSyxDQUtxQztBQUMxQyxTQUFLQyxNQUFMLEdBQWMsS0FBSzdHLEdBQUwsQ0FBUzhHLFVBQVQsRUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBSy9HLEdBQUwsQ0FBU2dILGVBQVQsRUFBbEI7QUFFRDs7QUFFREMsU0FBTzs7QUFFTCxXQUFPLEtBQUtqSCxHQUFMLENBQVNrSCxPQUFULEVBQVA7QUFFRDs7QUFFREMsV0FBUzs7QUFFUCxRQUFJQyxZQUFZLElBQUlyQyxLQUFKLENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsRUFBa0MsRUFBbEMsRUFBc0MsRUFBdEMsRUFBMEMsRUFBMUMsRUFBOEMsRUFBOUMsRUFBa0QsRUFBbEQsRUFBc0QsRUFBdEQsQ0FBaEI7O0FBRUEsV0FBTyxLQUFLL0UsR0FBTCxDQUFTcUgsUUFBVCxLQUFzQixDQUE3QjtBQUVEOztBQUVEQyxTQUFPOztBQUVMLFdBQU8sS0FBS3RILEdBQUwsQ0FBU3VILFdBQVQsRUFBUDtBQUVEOztBQUVEQyxRQUFNOztBQUVKO0FBQ0EsUUFBSUMsWUFBWSxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsQ0FBaEI7QUFDQSxRQUFJQyxNQUFNRCxVQUFVLEtBQUt6SCxHQUFMLENBQVMySCxNQUFULEVBQVYsQ0FBVjs7QUFFQTtBQUNBLFFBQUlDLFlBQVksQ0FBQyxLQUFELEVBQU8sS0FBUCxFQUFhLEtBQWIsRUFBbUIsS0FBbkIsRUFBeUIsS0FBekIsRUFBK0IsS0FBL0IsRUFBcUMsS0FBckMsQ0FBaEI7QUFDQSxRQUFJQyxNQUFNRCxVQUFVLEtBQUs1SCxHQUFMLENBQVMySCxNQUFULEVBQVYsQ0FBVjtBQUVEOztBQUVEO0FBQ0E7QUFDQUcsV0FBU2IsSUFBVCxFQUFlbEcsR0FBZixFQUFvQjs7QUFFbEIsV0FBTyxJQUFJZCxJQUFKLENBQVNnSCxLQUFLL0QsT0FBTCxLQUFpQjZFLE9BQU9oSCxHQUFQLElBQWMsRUFBZCxHQUFtQixFQUFuQixHQUF3QixFQUF4QixHQUE2QixJQUF2RCxDQUFQO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWlILFdBQVM5SSxLQUFULEVBQWdCK0ksV0FBaEIsRUFBNkI7QUFDekIsV0FBTyxPQUFPL0ksS0FBUCxLQUFpQixRQUFqQixJQUE2QkEsVUFBVSxJQUE5QztBQUNIOztBQUVEZ0osV0FBU2hKLEtBQVQsRUFBZ0I7QUFDWixXQUFPLE9BQU9BLEtBQVAsS0FBaUIsUUFBeEI7QUFDSDs7QUFFRGlKLFdBQVNqSixLQUFULEVBQWdCO0FBQ1osV0FBTyxPQUFPQSxLQUFQLEtBQWlCLFFBQXhCO0FBQ0g7O0FBRURrSixhQUFXbEosS0FBWCxFQUFrQjtBQUNkLFdBQU8sT0FBT0EsS0FBUCxLQUFpQixVQUF4QjtBQUNIOztBQUVEbUosVUFBUW5KLEtBQVIsRUFBZTtBQUNYLFdBQU9vSixPQUFPQyxTQUFQLENBQWlCekQsUUFBakIsQ0FBMEIwRCxJQUExQixDQUErQnRKLEtBQS9CLE1BQTBDLGdCQUFqRDtBQUNIOztBQUVEdUosU0FBT3ZKLEtBQVAsRUFBYztBQUNWLFdBQU9BLFVBQVUsSUFBakI7QUFDSDs7QUFFRHdKLGNBQVl4SixLQUFaLEVBQW1CO0FBQ2YsV0FBTyxPQUFPQSxLQUFQLEtBQWlCLFdBQXhCO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBeUosZUFBY0MsT0FBZCxFQUFzQjs7QUFFcEI7QUFDQSxRQUFJLENBQUMsS0FBS2hGLE9BQVYsRUFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBLFFBQUlpRixPQUFPRCxPQUFYO0FBQUEsUUFDSTlKLE1BQU0rSixLQUFLdEosTUFEZjs7QUFHQXNKLFNBQUtDLElBQUwsQ0FBVSxVQUFTbEssQ0FBVCxFQUFZOztBQUVsQixVQUFJbUssSUFBSTFJLEtBQUtDLEtBQUwsQ0FBV2xELEVBQUUsSUFBRixFQUFRNEwsS0FBUixLQUFrQixDQUE3QixDQUFSO0FBQUEsVUFDSUMsSUFBSTVJLEtBQUtDLEtBQUwsQ0FBV2xELEVBQUUsSUFBRixFQUFROEwsTUFBUixLQUFtQixDQUE5QixDQURSOztBQUdBOUwsUUFBRSxJQUFGLEVBQVErTCxJQUFSLENBQWE7QUFDVCxpQkFBU0osQ0FEQTtBQUVULGtCQUFVRTtBQUZELE9BQWI7O0FBS0EsVUFBSW5LLE9BQU9GLElBQUksQ0FBZixFQUFrQnhCLEVBQUVmLE1BQUYsRUFBVStNLE9BQVYsQ0FBa0IsYUFBbEI7QUFFckIsS0FaRDtBQWNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBQyxlQUFhOztBQUVYLFFBQUlDLE9BQU8sSUFBWDs7QUFFQWxNLE1BQUVmLE1BQUYsRUFBVWlCLEVBQVYsQ0FBYSxxQkFBYixFQUFvQyxVQUFTaU0sQ0FBVCxFQUFXO0FBQUNBLFFBQUVDLGNBQUY7QUFBb0IsS0FBcEU7QUFFRDs7QUFFREMsa0JBQWdCOztBQUVkck0sTUFBRWYsTUFBRixFQUFVcU4sR0FBVixDQUFjLHFCQUFkO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0FDLGFBQVc7O0FBRVQsV0FBT3hLLFNBQVN3SyxRQUFoQjtBQUVEOztBQUVEQyxTQUFPOztBQUVMLFdBQU96SyxTQUFTMEssUUFBaEI7QUFDQTtBQUVEOztBQUVEQyxTQUFPOztBQUVMLFdBQU8zSyxTQUFTMkssSUFBaEI7QUFFRDs7QUFFREMsU0FBTzs7QUFFTCxXQUFPNUssU0FBUzZLLFFBQWhCO0FBRUQ7O0FBRURSLGlCQUFlRCxDQUFmLEVBQWtCOztBQUVoQkEsUUFBSUEsS0FBS2xOLE9BQU80TixLQUFoQjtBQUNBLFFBQUlWLEVBQUVDLGNBQU4sRUFDSUQsRUFBRUMsY0FBRjtBQUNKRCxNQUFFVyxXQUFGLEdBQWdCLEtBQWhCO0FBRUQ7O0FBRURDLDhCQUE0QlosQ0FBNUIsRUFBK0I7O0FBRTdCLFFBQUlqTCxLQUFLaUwsRUFBRWEsT0FBUCxDQUFKLEVBQXFCO0FBQ2pCWixxQkFBZUQsQ0FBZjtBQUNBLGFBQU8sS0FBUDtBQUNIO0FBRUY7O0FBRURjLGtCQUFnQjs7QUFFZCxRQUFJaE8sT0FBT2lPLGdCQUFYLEVBQTZCO0FBQ3pCak8sYUFBT2lPLGdCQUFQLENBQXdCLGdCQUF4QixFQUEwQyxLQUFLZCxjQUEvQyxFQUErRCxLQUEvRDtBQUNKbk4sV0FBT2tPLE9BQVAsR0FBaUIsS0FBS2YsY0FBdEIsQ0FKYyxDQUl3QjtBQUN0Q25OLFdBQU9tTyxZQUFQLEdBQXNCbk4sU0FBU21OLFlBQVQsR0FBd0IsS0FBS2hCLGNBQW5ELENBTGMsQ0FLcUQ7QUFDbkVuTixXQUFPb08sV0FBUCxHQUFzQixLQUFLakIsY0FBM0IsQ0FOYyxDQU02QjtBQUMzQ25NLGFBQVNxTixTQUFULEdBQXNCLEtBQUtQLDJCQUEzQjtBQUVEOztBQUVEUSxpQkFBZTs7QUFFYixRQUFJdE8sT0FBT3VPLG1CQUFYLEVBQ0l2TyxPQUFPdU8sbUJBQVAsQ0FBMkIsZ0JBQTNCLEVBQTZDLEtBQUtwQixjQUFsRCxFQUFrRSxLQUFsRTtBQUNKbk4sV0FBT21PLFlBQVAsR0FBc0JuTixTQUFTbU4sWUFBVCxHQUF3QixJQUE5QztBQUNBbk8sV0FBT2tPLE9BQVAsR0FBaUIsSUFBakI7QUFDQWxPLFdBQU9vTyxXQUFQLEdBQXFCLElBQXJCO0FBQ0FwTixhQUFTcU4sU0FBVCxHQUFxQixJQUFyQjtBQUVEOztBQXhxQnVCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1IxQjtBQUFBOzs7Ozs7OztBQVFBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsTUFBTUcsS0FBTixDQUFZOztBQUV6QjFPLGdCQUFjOztBQUVaLFNBQUsyTyxNQUFMO0FBRUQ7O0FBRURBLFdBQVM7QUFDUDs7QUFFQTs7O0FBR0EsU0FBSy9GLEtBQUwsR0FBYSxJQUFJLDZEQUFKLEVBQWI7O0FBR0E7OztBQUdBLFNBQUtnRyxXQUFMLEdBQW1CLElBQUksZ0VBQUosRUFBbkI7O0FBR0E7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDRDs7QUFsQ3dCLEM7Ozs7Ozs7O0FDdkIzQjs7O0FBR0ExTyxPQUFPMk8scUJBQVAsR0FBaUMsVUFBU0MsS0FBVCxFQUFnQjtBQUMvQyxTQUFPLFlBQVc7QUFDaEIsV0FBTzVPLE9BQU8yTyxxQkFBUCxJQUFnQzNPLE9BQU82Tyx3QkFBdkMsSUFBbUU3TyxPQUFPOE8sMkJBQTFFLElBQXlHOU8sT0FBTytPLHVCQUFoSCxJQUEySSxVQUFTQyxRQUFULEVBQW1CO0FBQy9KLGFBQU9DLFdBQVdELFFBQVgsRUFBcUIsT0FBTyxFQUE1QixDQUFQO0FBQ0QsS0FGTDtBQUdELEdBSkQ7QUFLRCxDQU4rQixDQU03QixJQU42QixDQUFELEVBQS9CLEM7Ozs7OztBQ0hBOzs7QUFHQWhQLE9BQU9rUCxvQkFBUCxHQUFnQyxVQUFTTixLQUFULEVBQWdCO0FBQzlDLFNBQU8sWUFBVztBQUNoQixXQUFPNU8sT0FBT2tQLG9CQUFQLElBQStCbFAsT0FBT21QLHVCQUF0QyxJQUFpRSxVQUFTQyxFQUFULEVBQWE7QUFDL0UsYUFBT0MsYUFBYUQsRUFBYixDQUFQO0FBQ0QsS0FGTDtBQUdELEdBSkQ7QUFLRCxDQU44QixDQU01QixJQU40QixDQUFELEVBQTlCLEM7Ozs7Ozs7QUNIQTs7Ozs7OztBQU9lLE1BQU0xRyxLQUFOLENBQVk7O0FBRXpCNUksZ0JBQWMsQ0FHYjs7QUFFRjs7Ozs7QUFLQ3dQLFVBQVFoSixHQUFSLEVBQWE7O0FBRVgsV0FBT0EsSUFBSSxLQUFLekMsTUFBTCxDQUFZLENBQVosRUFBZXlDLElBQUlwRCxNQUFKLEdBQWEsQ0FBNUIsQ0FBSixDQUFQO0FBRUQ7O0FBRUY7Ozs7O0FBS0NxTSxVQUFRakosR0FBUixFQUFhOztBQUVYLFFBQUlrSixNQUFNLEVBQVY7QUFDQUEsVUFBTWxKLElBQUltSixLQUFKLEVBQU47QUFDQSxRQUFJbE4sSUFBSStELElBQUlwRCxNQUFaO0FBQ0EsV0FBTVgsQ0FBTixFQUFRO0FBQ04sVUFBSVksSUFBSWEsS0FBS0MsS0FBTCxDQUFXRCxLQUFLSCxNQUFMLEtBQWN0QixDQUF6QixDQUFSO0FBQ0EsVUFBSW1OLElBQUlGLElBQUksRUFBRWpOLENBQU4sQ0FBUjtBQUNBaU4sVUFBSWpOLENBQUosSUFBU2lOLElBQUlyTSxDQUFKLENBQVQ7QUFDQXFNLFVBQUlyTSxDQUFKLElBQVN1TSxDQUFUO0FBQ0Q7QUFDRCxXQUFPRixHQUFQO0FBRUQ7O0FBcEN3QixDOzs7Ozs7Ozs7QUNQM0I7Ozs7Ozs7O0FBUUEsTUFBTUcsU0FBUyxtQkFBQS9QLENBQVEsRUFBUixDQUFmOztBQUVBOztBQUVlLE1BQU04TyxXQUFOLENBQWtCOztBQUUvQjVPLGdCQUFjOztBQUVaLFNBQUs4UCxFQUFMLEdBQVUsSUFBSUQsTUFBSixFQUFWO0FBRUQ7O0FBRUQ7Ozs7QUFJQUUsU0FBTztBQUNMLFFBQUlDLFVBQVUsS0FBS0YsRUFBTCxDQUFRRyxVQUFSLEdBQXFCQyxJQUFuQztBQUNBLFdBQU9GLFlBQVksSUFBWixHQUFtQixJQUFuQixHQUEwQixLQUFqQztBQUNEOztBQUVEOzs7O0FBSUFHLGNBQVk7QUFDVixRQUFJSCxVQUFVLEtBQUtGLEVBQUwsQ0FBUUcsVUFBUixHQUFxQkMsSUFBbkM7QUFDQSxXQUFPRixZQUFZLFNBQVosR0FBd0IsSUFBeEIsR0FBK0IsS0FBdEM7QUFDRDs7QUFFRDs7OztBQUlBSSxhQUFXO0FBQ1QsUUFBSUosVUFBVSxLQUFLRixFQUFMLENBQVFHLFVBQVIsR0FBcUJDLElBQW5DO0FBQ0EsV0FBT0YsWUFBWSxRQUFaLEdBQXVCLElBQXZCLEdBQThCLEtBQXJDO0FBQ0Q7O0FBRUQ7Ozs7QUFJQUssYUFBVztBQUNULFFBQUlMLFVBQVUsS0FBS0YsRUFBTCxDQUFRRyxVQUFSLEdBQXFCQyxJQUFuQztBQUNBLFdBQU9GLFlBQVksUUFBWixHQUF1QixJQUF2QixHQUE4QixLQUFyQztBQUNEOztBQUVEOzs7O0FBSUFNLGFBQVc7QUFDVCxRQUFJQyxTQUFTLEtBQUtULEVBQUwsQ0FBUVUsU0FBUixHQUFvQkMsSUFBakM7QUFDQSxXQUFPRixXQUFXLFFBQVgsR0FBc0IsSUFBdEIsR0FBNkIsSUFBcEM7QUFDRDs7QUFFRDs7OztBQUlBRyxhQUFXO0FBQ1QsUUFBSUgsU0FBUyxLQUFLVCxFQUFMLENBQVFVLFNBQVIsR0FBb0JDLElBQWpDO0FBQ0EsV0FBT0YsV0FBVyxRQUFYLEdBQXNCLElBQXRCLEdBQTZCLElBQXBDO0FBQ0Q7O0FBRUQ7Ozs7QUFJQUksT0FBSztBQUNILFdBQU8sS0FBS2IsRUFBTCxDQUFRYyxLQUFSLEdBQWdCVixJQUF2QjtBQUNEOztBQUVEOzs7O0FBSUFXLGdCQUFjO0FBQ1osUUFBSUEsY0FBYyxLQUFLZixFQUFMLENBQVFVLFNBQVIsR0FBb0JNLE1BQXRDO0FBQ0EsV0FBT0QsV0FBUDtBQUNEOztBQUVEOzs7QUFHQUUsaUJBQWU7QUFDYixXQUFPLEtBQUtqQixFQUFMLENBQVFHLFVBQVIsR0FBcUJDLElBQTVCO0FBQ0Q7O0FBRUQ7OztBQUdBYyxRQUFNO0FBQ0osV0FBTyxLQUFLbEIsRUFBTCxDQUFRbUIsS0FBUixFQUFQO0FBQ0Q7O0FBM0Y4QixDOzs7Ozs7OztBQ1pqQzs7Ozs7OztHQU9HLENBQUMsVUFBUzdELENBQVQsRUFBV3dDLENBQVgsRUFBYTtBQUFDO0FBQWEsTUFBSXpLLElBQUUsUUFBTjtBQUFBLE1BQWVxRCxJQUFFLEVBQWpCO0FBQUEsTUFBb0IvRixJQUFFLEdBQXRCO0FBQUEsTUFBMEIwSCxJQUFFLFVBQTVCO0FBQUEsTUFBdUMrRyxJQUFFLFdBQXpDO0FBQUEsTUFBcUR0USxJQUFFLFFBQXZEO0FBQUEsTUFBZ0U4RixJQUFFLFFBQWxFO0FBQUEsTUFBMkU3RixJQUFFLE9BQTdFO0FBQUEsTUFBcUZzSCxJQUFFLE9BQXZGO0FBQUEsTUFBK0ZnSixJQUFFLE1BQWpHO0FBQUEsTUFBd0dyRSxJQUFFLE1BQTFHO0FBQUEsTUFBaUg3SCxJQUFFLFFBQW5IO0FBQUEsTUFBNEhtTSxJQUFFLFNBQTlIO0FBQUEsTUFBd0lDLElBQUUsY0FBMUk7QUFBQSxNQUF5Sm5ILElBQUUsU0FBM0o7QUFBQSxNQUFxS3pCLElBQUUsUUFBdks7QUFBQSxNQUFnTG5DLElBQUUsUUFBbEw7QUFBQSxNQUEyTEssSUFBRSxTQUE3TDtBQUFBLE1BQXVNaUcsSUFBRSxVQUF6TTtBQUFBLE1BQW9OMEUsSUFBRSxVQUF0TjtBQUFBLE1BQWlPQyxJQUFFLEVBQUNDLFFBQU8sVUFBU3BFLENBQVQsRUFBV3dDLENBQVgsRUFBYTtBQUFDLFVBQUl6SyxJQUFFLEVBQU4sQ0FBUyxLQUFJLElBQUlxRCxDQUFSLElBQWE0RSxDQUFiLEVBQWV3QyxFQUFFcEgsQ0FBRixLQUFNb0gsRUFBRXBILENBQUYsRUFBS3BGLE1BQUwsR0FBWSxDQUFaLEtBQWdCLENBQXRCLEdBQXdCK0IsRUFBRXFELENBQUYsSUFBS29ILEVBQUVwSCxDQUFGLEVBQUtpSixNQUFMLENBQVlyRSxFQUFFNUUsQ0FBRixDQUFaLENBQTdCLEdBQStDckQsRUFBRXFELENBQUYsSUFBSzRFLEVBQUU1RSxDQUFGLENBQXBELENBQXlELE9BQU9yRCxDQUFQO0FBQVMsS0FBaEgsRUFBaUh1TSxLQUFJLFVBQVN0RSxDQUFULEVBQVd3QyxDQUFYLEVBQWE7QUFBQyxhQUFPLE9BQU94QyxDQUFQLElBQVUsUUFBVixHQUFtQndDLEVBQUUrQixXQUFGLEdBQWdCck0sT0FBaEIsQ0FBd0I4SCxFQUFFdUUsV0FBRixFQUF4QixNQUEyQyxDQUFDLENBQS9ELEdBQWlFLENBQUMsQ0FBekU7QUFBMkUsS0FBOU0sRUFBK01DLFVBQVMsVUFBU3hFLENBQVQsRUFBVztBQUFDLGFBQU9BLEVBQUV1RSxXQUFGLEVBQVA7QUFBdUIsS0FBM1AsRUFBNFBFLE9BQU0sVUFBU3pFLENBQVQsRUFBVztBQUFDLGFBQU8sT0FBT0EsQ0FBUCxLQUFXMUcsQ0FBWCxHQUFhMEcsRUFBRWxLLE9BQUYsQ0FBVSxVQUFWLEVBQXFCLEVBQXJCLEVBQXlCQyxLQUF6QixDQUErQixHQUEvQixFQUFvQyxDQUFwQyxDQUFiLEdBQW9EeU0sQ0FBM0Q7QUFBNkQsS0FBM1UsRUFBNFVrQyxNQUFLLFVBQVMxRSxDQUFULEVBQVc7QUFBQyxhQUFPQSxFQUFFbEssT0FBRixDQUFVLG9DQUFWLEVBQStDLEVBQS9DLENBQVA7QUFBMEQsS0FBdlosRUFBbk87QUFBQSxNQUE0bkJtRCxJQUFFLEVBQUMwTCxLQUFJLFlBQVU7QUFBQyxVQUFJM0UsQ0FBSjtBQUFBLFVBQU1qSSxJQUFFLENBQVI7QUFBQSxVQUFVcUQsQ0FBVjtBQUFBLFVBQVkvRixDQUFaO0FBQUEsVUFBY2lFLENBQWQ7QUFBQSxVQUFnQjdGLENBQWhCO0FBQUEsVUFBa0JzSCxDQUFsQjtBQUFBLFVBQW9CZ0osQ0FBcEI7QUFBQSxVQUFzQnJFLElBQUVrRixTQUF4QixDQUFrQyxPQUFNN00sSUFBRTJILEVBQUUxSixNQUFKLElBQVksQ0FBQytFLENBQW5CLEVBQXFCO0FBQUMsWUFBSWxELElBQUU2SCxFQUFFM0gsQ0FBRixDQUFOO0FBQUEsWUFBV2lNLElBQUV0RSxFQUFFM0gsSUFBRSxDQUFKLENBQWIsQ0FBb0IsSUFBRyxPQUFPaUksQ0FBUCxLQUFXOEQsQ0FBZCxFQUFnQjtBQUFDOUQsY0FBRSxFQUFGLENBQUssS0FBSTFHLENBQUosSUFBUzBLLENBQVQsRUFBV0EsRUFBRWEsY0FBRixDQUFpQnZMLENBQWpCLE1BQXNCN0YsSUFBRXVRLEVBQUUxSyxDQUFGLENBQUYsRUFBTyxPQUFPN0YsQ0FBUCxLQUFXRCxDQUFYLEdBQWF3TSxFQUFFdk0sRUFBRSxDQUFGLENBQUYsSUFBUStPLENBQXJCLEdBQXVCeEMsRUFBRXZNLENBQUYsSUFBSytPLENBQXpEO0FBQTRELGFBQUVuTixJQUFFLENBQUosQ0FBTSxPQUFNK0YsSUFBRXZELEVBQUU3QixNQUFKLElBQVksQ0FBQytFLENBQW5CLEVBQXFCO0FBQUNBLGNBQUVsRCxFQUFFdUQsR0FBRixFQUFPMEosSUFBUCxDQUFZLEtBQUtqQixLQUFMLEVBQVosQ0FBRixDQUE0QixJQUFHLENBQUMsQ0FBQzlJLENBQUwsRUFBTyxLQUFJekIsSUFBRSxDQUFOLEVBQVFBLElBQUUwSyxFQUFFaE8sTUFBWixFQUFtQnNELEdBQW5CLEVBQXVCeUssSUFBRWhKLEVBQUUsRUFBRTFGLENBQUosQ0FBRixFQUFTNUIsSUFBRXVRLEVBQUUxSyxDQUFGLENBQVgsRUFBZ0IsT0FBTzdGLENBQVAsS0FBV0QsQ0FBWCxJQUFjQyxFQUFFdUMsTUFBRixHQUFTLENBQXZCLEdBQXlCdkMsRUFBRXVDLE1BQUYsSUFBVSxDQUFWLEdBQVksT0FBT3ZDLEVBQUUsQ0FBRixDQUFQLElBQWFzSixDQUFiLEdBQWVpRCxFQUFFdk0sRUFBRSxDQUFGLENBQUYsSUFBUUEsRUFBRSxDQUFGLEVBQUt3TCxJQUFMLENBQVUsSUFBVixFQUFlOEUsQ0FBZixDQUF2QixHQUF5Qy9ELEVBQUV2TSxFQUFFLENBQUYsQ0FBRixJQUFRQSxFQUFFLENBQUYsQ0FBN0QsR0FBa0VBLEVBQUV1QyxNQUFGLElBQVUsQ0FBVixHQUFZLE9BQU92QyxFQUFFLENBQUYsQ0FBUCxLQUFjc0osQ0FBZCxLQUFrQixDQUFDdEosRUFBRSxDQUFGLEVBQUtxUixJQUFOLElBQVksQ0FBQ3JSLEVBQUUsQ0FBRixFQUFLc1IsSUFBcEMsSUFBMEMvRSxFQUFFdk0sRUFBRSxDQUFGLENBQUYsSUFBUXNRLElBQUV0USxFQUFFLENBQUYsRUFBS3dMLElBQUwsQ0FBVSxJQUFWLEVBQWU4RSxDQUFmLEVBQWlCdFEsRUFBRSxDQUFGLENBQWpCLENBQUYsR0FBeUIrTyxDQUEzRSxHQUE2RXhDLEVBQUV2TSxFQUFFLENBQUYsQ0FBRixJQUFRc1EsSUFBRUEsRUFBRWpPLE9BQUYsQ0FBVXJDLEVBQUUsQ0FBRixDQUFWLEVBQWVBLEVBQUUsQ0FBRixDQUFmLENBQUYsR0FBdUIrTyxDQUF4SCxHQUEwSC9PLEVBQUV1QyxNQUFGLElBQVUsQ0FBVixLQUFjZ0ssRUFBRXZNLEVBQUUsQ0FBRixDQUFGLElBQVFzUSxJQUFFdFEsRUFBRSxDQUFGLEVBQUt3TCxJQUFMLENBQVUsSUFBVixFQUFlOEUsRUFBRWpPLE9BQUYsQ0FBVXJDLEVBQUUsQ0FBRixDQUFWLEVBQWVBLEVBQUUsQ0FBRixDQUFmLENBQWYsQ0FBRixHQUF1QytPLENBQTdELENBQXJOLEdBQXFSeEMsRUFBRXZNLENBQUYsSUFBS3NRLElBQUVBLENBQUYsR0FBSXZCLENBQTlTO0FBQWdULGNBQUcsQ0FBSDtBQUFLLGNBQU94QyxDQUFQO0FBQVMsS0FBN2tCLEVBQThrQjFFLEtBQUksVUFBUzBFLENBQVQsRUFBV2pJLENBQVgsRUFBYTtBQUFDLFdBQUksSUFBSXFELENBQVIsSUFBYXJELENBQWIsRUFBZSxJQUFHLE9BQU9BLEVBQUVxRCxDQUFGLENBQVAsS0FBYzVILENBQWQsSUFBaUJ1RSxFQUFFcUQsQ0FBRixFQUFLcEYsTUFBTCxHQUFZLENBQWhDLEVBQWtDO0FBQUMsYUFBSSxJQUFJK0csSUFBRSxDQUFWLEVBQVlBLElBQUVoRixFQUFFcUQsQ0FBRixFQUFLcEYsTUFBbkIsRUFBMEIrRyxHQUExQixFQUE4QixJQUFHb0gsRUFBRUcsR0FBRixDQUFNdk0sRUFBRXFELENBQUYsRUFBSzJCLENBQUwsQ0FBTixFQUFjaUQsQ0FBZCxDQUFILEVBQW9CLE9BQU81RSxNQUFJL0YsQ0FBSixHQUFNbU4sQ0FBTixHQUFRcEgsQ0FBZjtBQUFpQixPQUF0RyxNQUEyRyxJQUFHK0ksRUFBRUcsR0FBRixDQUFNdk0sRUFBRXFELENBQUYsQ0FBTixFQUFXNEUsQ0FBWCxDQUFILEVBQWlCLE9BQU81RSxNQUFJL0YsQ0FBSixHQUFNbU4sQ0FBTixHQUFRcEgsQ0FBZixDQUFpQixPQUFPNEUsQ0FBUDtBQUFTLEtBQXJ3QixFQUE5bkI7QUFBQSxNQUFxNENnRixJQUFFLEVBQUNwQyxTQUFRLEVBQUNxQyxXQUFVLEVBQUNDLFNBQVEsRUFBQyxPQUFNLElBQVAsRUFBWSxLQUFJLElBQWhCLEVBQXFCLEtBQUksSUFBekIsRUFBOEIsT0FBTSxNQUFwQyxFQUEyQyxTQUFRLE1BQW5ELEVBQTBELFNBQVEsTUFBbEUsRUFBeUUsU0FBUSxNQUFqRixFQUF3RixLQUFJLEdBQTVGLEVBQVQsRUFBWCxFQUFULEVBQWdJL0IsUUFBTyxFQUFDZ0MsUUFBTyxFQUFDQyxPQUFNLEVBQUMsY0FBYSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQWQsRUFBUCxFQUFSLEVBQTJDQyxRQUFPLEVBQUNELE9BQU0sRUFBQyxnQkFBZSxRQUFoQixFQUFQLEVBQWlDMUIsUUFBTyxFQUFDNEIsS0FBSSxLQUFMLEVBQVdDLFFBQU8sUUFBbEIsRUFBeEMsRUFBbEQsRUFBdkksRUFBK1BoQyxJQUFHLEVBQUNpQyxTQUFRLEVBQUNOLFNBQVEsRUFBQ08sSUFBRyxNQUFKLEVBQVcsV0FBVSxRQUFyQixFQUE4QixVQUFTLE9BQXZDLEVBQStDLEtBQUksUUFBbkQsRUFBNERDLElBQUcsQ0FBQyxRQUFELEVBQVUsUUFBVixDQUEvRCxFQUFtRkMsT0FBTSxRQUF6RixFQUFrRyxHQUFFLFFBQXBHLEVBQTZHLEdBQUUsUUFBL0csRUFBd0gsS0FBSSxRQUE1SCxFQUFxSSxJQUFHLENBQUMsUUFBRCxFQUFVLFNBQVYsQ0FBeEksRUFBNkpDLElBQUcsS0FBaEssRUFBVCxFQUFULEVBQWxRLEVBQXY0QztBQUFBLE1BQXEwREMsSUFBRSxFQUFDakQsU0FBUSxDQUFDLENBQUMsNEJBQUQsRUFBOEIsNkNBQTlCLEVBQTRFLDhCQUE1RSxFQUEyRywwQkFBM0csQ0FBRCxFQUF3SSxDQUFDbUIsQ0FBRCxFQUFHQyxDQUFILENBQXhJLEVBQThJLENBQUMsMEJBQUQsQ0FBOUksRUFBMkssQ0FBQyxDQUFDRCxDQUFELEVBQUcsWUFBSCxDQUFELEVBQWtCQyxDQUFsQixDQUEzSyxFQUFnTSxDQUFDLHFCQUFELENBQWhNLEVBQXdOLENBQUMsQ0FBQ0QsQ0FBRCxFQUFHLE9BQUgsQ0FBRCxFQUFhQyxDQUFiLENBQXhOLEVBQXdPLENBQUMsc0JBQUQsRUFBd0IsK0RBQXhCLEVBQXdGLDREQUF4RixFQUFxSiwyQkFBckosRUFBaUwsdUJBQWpMLEVBQXlNLG9IQUF6TSxDQUF4TyxFQUF1aUIsQ0FBQ0QsQ0FBRCxFQUFHQyxDQUFILENBQXZpQixFQUE2aUIsQ0FBQywyQ0FBRCxDQUE3aUIsRUFBMmxCLENBQUMsQ0FBQ0QsQ0FBRCxFQUFHLElBQUgsQ0FBRCxFQUFVQyxDQUFWLENBQTNsQixFQUF3bUIsQ0FBQywwQkFBRCxDQUF4bUIsRUFBcW9CLENBQUNELENBQUQsRUFBR0MsQ0FBSCxDQUFyb0IsRUFBMm9CLENBQUMseUJBQUQsQ0FBM29CLEVBQXVxQixDQUFDLENBQUNELENBQUQsRUFBRyxRQUFILENBQUQsRUFBY0MsQ0FBZCxDQUF2cUIsRUFBd3JCLENBQUMsNkJBQUQsQ0FBeHJCLEVBQXd0QixDQUFDLENBQUNELENBQUQsRUFBRyxJQUFILEVBQVEsR0FBUixDQUFELEVBQWNDLENBQWQsQ0FBeHRCLEVBQXl1QixDQUFDLDhCQUFELENBQXp1QixFQUEwd0IsQ0FBQyxDQUFDRCxDQUFELEVBQUcsUUFBSCxDQUFELEVBQWNDLENBQWQsQ0FBMXdCLEVBQTJ4QixDQUFDLGlDQUFELENBQTN4QixFQUErekIsQ0FBQ0EsQ0FBRCxFQUFHLENBQUNELENBQUQsRUFBRyxjQUFILENBQUgsQ0FBL3pCLEVBQXMxQixDQUFDLDhCQUFELENBQXQxQixFQUF1M0IsQ0FBQyxDQUFDQSxDQUFELEVBQUcsTUFBSCxFQUFVLFlBQVYsQ0FBRCxFQUF5QkMsQ0FBekIsQ0FBdjNCLEVBQW01QixDQUFDLHFDQUFELEVBQXVDLDREQUF2QyxDQUFuNUIsRUFBdy9CLENBQUNBLENBQUQsRUFBRyxDQUFDRCxDQUFELEVBQUcsaUJBQUgsQ0FBSCxDQUF4L0IsRUFBa2hDLENBQUMsOERBQUQsRUFBZ0UsOEJBQWhFLENBQWxoQyxFQUFrbkMsQ0FBQ0EsQ0FBRCxFQUFHQyxDQUFILENBQWxuQyxFQUF3bkMsQ0FBQyxpQ0FBRCxFQUFtQyxxQ0FBbkMsRUFBeUUsK0JBQXpFLENBQXhuQyxFQUFrdUMsQ0FBQyxDQUFDRCxDQUFELEVBQUcsV0FBSCxDQUFELEVBQWlCQyxDQUFqQixDQUFsdUMsRUFBc3ZDLENBQUMsc0JBQUQsQ0FBdHZDLEVBQSt3QyxDQUFDLENBQUNELENBQUQsRUFBRyxTQUFILENBQUQsRUFBZUMsQ0FBZixDQUEvd0MsRUFBaXlDLENBQUMsdUNBQUQsQ0FBanlDLEVBQTIwQyxDQUFDLENBQUNELENBQUQsRUFBRyxRQUFILENBQUQsRUFBY0MsQ0FBZCxDQUEzMEMsRUFBNDFDLENBQUMsb0JBQUQsQ0FBNTFDLEVBQW0zQyxDQUFDQSxDQUFELEVBQUcsQ0FBQ0QsQ0FBRCxFQUFHLFVBQUgsQ0FBSCxDQUFuM0MsRUFBczRDLENBQUMsb0JBQUQsQ0FBdDRDLEVBQTY1QyxDQUFDQyxDQUFELEVBQUcsQ0FBQ0QsQ0FBRCxFQUFHLFNBQUgsQ0FBSCxDQUE3NUMsRUFBKzZDLENBQUMsNkNBQUQsQ0FBLzZDLEVBQSs5QyxDQUFDQyxDQUFELEVBQUcsQ0FBQ0QsQ0FBRCxFQUFHLGVBQUgsQ0FBSCxDQUEvOUMsRUFBdS9DLENBQUMsZ0RBQUQsQ0FBdi9DLEVBQTBpRCxDQUFDQyxDQUFELEVBQUdELENBQUgsQ0FBMWlELEVBQWdqRCxDQUFDLCtDQUFELENBQWhqRCxFQUFrbUQsQ0FBQ0EsQ0FBRCxFQUFHLENBQUNDLENBQUQsRUFBRy9LLEVBQUVxQyxHQUFMLEVBQVMwSixFQUFFcEMsT0FBRixDQUFVcUMsU0FBVixDQUFvQkMsT0FBN0IsQ0FBSCxDQUFsbUQsRUFBNG9ELENBQUMseUJBQUQsRUFBMkIsNEJBQTNCLENBQTVvRCxFQUFxc0QsQ0FBQ25CLENBQUQsRUFBR0MsQ0FBSCxDQUFyc0QsRUFBMnNELENBQUMsbUNBQUQsQ0FBM3NELEVBQWl2RCxDQUFDLENBQUNELENBQUQsRUFBRyxVQUFILENBQUQsRUFBZ0JDLENBQWhCLENBQWp2RCxFQUFvd0QsQ0FBQyxhQUFELEVBQWUsK0ZBQWYsRUFBK0csMEVBQS9HLEVBQTBMLHlDQUExTCxFQUFvTyw2RUFBcE8sRUFBa1QsdUJBQWxULEVBQTBVLDJCQUExVSxFQUFzVyxnQ0FBdFcsRUFBdVksMEJBQXZZLENBQXB3RCxFQUF1cUUsQ0FBQ0QsQ0FBRCxFQUFHQyxDQUFILENBQXZxRSxDQUFULEVBQXVyRThCLEtBQUksQ0FBQyxDQUFDLCtDQUFELENBQUQsRUFBbUQsQ0FBQyxDQUFDN0IsQ0FBRCxFQUFHLE9BQUgsQ0FBRCxDQUFuRCxFQUFpRSxDQUFDLGNBQUQsQ0FBakUsRUFBa0YsQ0FBQyxDQUFDQSxDQUFELEVBQUdFLEVBQUVLLFFBQUwsQ0FBRCxDQUFsRixFQUFtRyxDQUFDLHdCQUFELENBQW5HLEVBQThILENBQUMsQ0FBQ1AsQ0FBRCxFQUFHLE1BQUgsQ0FBRCxDQUE5SCxFQUEySSxDQUFDLDhCQUFELENBQTNJLEVBQTRLLENBQUMsQ0FBQ0EsQ0FBRCxFQUFHLEtBQUgsQ0FBRCxDQUE1SyxFQUF3TCxDQUFDLHlDQUFELENBQXhMLEVBQW9PLENBQUMsQ0FBQ0EsQ0FBRCxFQUFHLE1BQUgsRUFBVSxFQUFWLEVBQWFFLEVBQUVLLFFBQWYsQ0FBRCxDQUFwTyxFQUErUCxDQUFDLGdCQUFELENBQS9QLEVBQWtSLENBQUMsQ0FBQ1AsQ0FBRCxFQUFHLE9BQUgsQ0FBRCxDQUFsUixFQUFnUyxDQUFDLDZHQUFELENBQWhTLEVBQWdaLENBQUMsQ0FBQ0EsQ0FBRCxFQUFHRSxFQUFFSyxRQUFMLENBQUQsQ0FBaFosQ0FBM3JFLEVBQTZsRnJCLFFBQU8sQ0FBQyxDQUFDLDJDQUFELENBQUQsRUFBK0MsQ0FBQ3BJLENBQUQsRUFBR2xELENBQUgsRUFBSyxDQUFDNkgsQ0FBRCxFQUFHeEcsQ0FBSCxDQUFMLENBQS9DLEVBQTJELENBQUMsa0NBQUQsQ0FBM0QsRUFBZ0csQ0FBQzZCLENBQUQsRUFBRyxDQUFDbEQsQ0FBRCxFQUFHLE9BQUgsQ0FBSCxFQUFlLENBQUM2SCxDQUFELEVBQUd4RyxDQUFILENBQWYsQ0FBaEcsRUFBc0gsQ0FBQyxtQkFBRCxDQUF0SCxFQUE0SSxDQUFDLENBQUM2QixDQUFELEVBQUcsVUFBSCxDQUFELEVBQWdCLENBQUNsRCxDQUFELEVBQUcsT0FBSCxDQUFoQixDQUE1SSxFQUF5SyxDQUFDLHdCQUFELEVBQTBCLG1CQUExQixFQUE4QyxpQkFBOUMsRUFBZ0Usc0JBQWhFLEVBQXVGLDhCQUF2RixFQUFzSCxrQ0FBdEgsQ0FBekssRUFBbVUsQ0FBQ0EsQ0FBRCxFQUFHa0QsQ0FBSCxFQUFLLENBQUMyRSxDQUFELEVBQUd4RyxDQUFILENBQUwsQ0FBblUsRUFBK1UsQ0FBQyxxQ0FBRCxDQUEvVSxFQUF1WCxDQUFDNkIsQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsUUFBSCxDQUFILEVBQWdCLENBQUM2SCxDQUFELEVBQUd4RyxDQUFILENBQWhCLENBQXZYLEVBQThZLENBQUMsa0RBQUQsQ0FBOVksRUFBbWMsQ0FBQyxDQUFDNkIsQ0FBRCxFQUFHOUIsRUFBRXFDLEdBQUwsRUFBUzBKLEVBQUU3QixNQUFGLENBQVNnQyxNQUFULENBQWdCQyxLQUF6QixDQUFELEVBQWlDLENBQUN2TixDQUFELEVBQUcsUUFBSCxDQUFqQyxFQUE4QyxDQUFDNkgsQ0FBRCxFQUFHckUsQ0FBSCxDQUE5QyxDQUFuYyxFQUF3ZixDQUFDLGlDQUFELENBQXhmLEVBQTRoQixDQUFDTixDQUFELEVBQUdsRCxDQUFILEVBQUssQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBTCxDQUE1aEIsRUFBd2lCLENBQUMsd0JBQUQsQ0FBeGlCLEVBQW1rQixDQUFDTixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxPQUFILENBQUgsRUFBZSxDQUFDNkgsQ0FBRCxFQUFHckUsQ0FBSCxDQUFmLENBQW5rQixFQUF5bEIsQ0FBQywwQkFBRCxFQUE0QiwwR0FBNUIsRUFBdUksb0JBQXZJLEVBQTRKLGdCQUE1SixDQUF6bEIsRUFBdXdCLENBQUN4RCxDQUFELEVBQUdrRCxDQUFILEVBQUssQ0FBQzJFLENBQUQsRUFBR3JFLENBQUgsQ0FBTCxDQUF2d0IsRUFBbXhCLENBQUMsaUJBQUQsQ0FBbnhCLEVBQXV5QixDQUFDTixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxZQUFILENBQUgsRUFBb0IsQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBcEIsQ0FBdnlCLEVBQWswQixDQUFDLDJFQUFELENBQWwwQixFQUFnNUIsQ0FBQ04sQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsTUFBSCxDQUFILEVBQWMsQ0FBQzZILENBQUQsRUFBR3hHLENBQUgsQ0FBZCxDQUFoNUIsRUFBcTZCLENBQUMsa0NBQUQsRUFBb0MsNEJBQXBDLENBQXI2QixFQUF1K0IsQ0FBQyxDQUFDckIsQ0FBRCxFQUFHLE1BQUgsQ0FBRCxFQUFZLENBQUNrRCxDQUFELEVBQUcsZUFBSCxDQUFaLEVBQWdDLENBQUMyRSxDQUFELEVBQUd4RyxDQUFILENBQWhDLENBQXYrQixFQUE4Z0MsQ0FBQyxzREFBRCxDQUE5Z0MsRUFBdWtDLENBQUMsQ0FBQ3JCLENBQUQsRUFBRyxNQUFILENBQUQsRUFBWSxDQUFDa0QsQ0FBRCxFQUFHLGNBQUgsQ0FBWixFQUErQixDQUFDMkUsQ0FBRCxFQUFHckUsQ0FBSCxDQUEvQixDQUF2a0MsRUFBNm1DLENBQUMsYUFBRCxFQUFlLDBCQUFmLENBQTdtQyxFQUF3cEMsQ0FBQ3hELENBQUQsRUFBR2tELENBQUgsRUFBSyxDQUFDMkUsQ0FBRCxFQUFHNUMsQ0FBSCxDQUFMLENBQXhwQyxFQUFvcUMsQ0FBQyw4QkFBRCxDQUFwcUMsRUFBcXNDLENBQUMvQixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxRQUFILENBQUgsRUFBZ0IsQ0FBQzZILENBQUQsRUFBRzVDLENBQUgsQ0FBaEIsQ0FBcnNDLEVBQTR0QyxDQUFDLGlDQUFELENBQTV0QyxFQUFnd0MsQ0FBQy9CLENBQUQsRUFBRyxDQUFDbEQsQ0FBRCxFQUFHLE1BQUgsQ0FBSCxFQUFjLENBQUM2SCxDQUFELEVBQUc1QyxDQUFILENBQWQsQ0FBaHdDLEVBQXF4QyxDQUFDLGtCQUFELENBQXJ4QyxFQUEweUMsQ0FBQyxDQUFDakYsQ0FBRCxFQUFHb0IsRUFBRXFDLEdBQUwsRUFBUzBKLEVBQUU3QixNQUFGLENBQVNrQyxNQUFULENBQWdCM0IsTUFBekIsQ0FBRCxFQUFrQyxDQUFDM0ksQ0FBRCxFQUFHOUIsRUFBRXFDLEdBQUwsRUFBUzBKLEVBQUU3QixNQUFGLENBQVNrQyxNQUFULENBQWdCRCxLQUF6QixDQUFsQyxFQUFrRSxDQUFDMUYsQ0FBRCxFQUFHckUsQ0FBSCxDQUFsRSxDQUExeUMsRUFBbTNDLENBQUMsMkNBQUQsQ0FBbjNDLEVBQWk2QyxDQUFDeEQsQ0FBRCxFQUFHa0QsQ0FBSCxFQUFLLENBQUMyRSxDQUFELEVBQUd4RyxDQUFILENBQUwsQ0FBajZDLEVBQTY2QyxDQUFDLG9DQUFELEVBQXNDLGVBQXRDLEVBQXNELGtGQUF0RCxDQUE3NkMsRUFBdWpELENBQUNyQixDQUFELEVBQUcsQ0FBQ2tELENBQUQsRUFBRyxJQUFILEVBQVEsR0FBUixDQUFILEVBQWdCLENBQUMyRSxDQUFELEVBQUdyRSxDQUFILENBQWhCLENBQXZqRCxFQUE4a0QsQ0FBQyxhQUFELENBQTlrRCxFQUE4bEQsQ0FBQ04sQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsS0FBSCxDQUFILEVBQWEsQ0FBQzZILENBQUQsRUFBR3hHLENBQUgsQ0FBYixDQUE5bEQsRUFBa25ELENBQUMsY0FBRCxDQUFsbkQsRUFBbW9ELENBQUM2QixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxRQUFILENBQUgsRUFBZ0IsQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBaEIsQ0FBbm9ELEVBQTBwRCxDQUFDLCtCQUFELENBQTFwRCxFQUE0ckQsQ0FBQ3hELENBQUQsRUFBR2tELENBQUgsRUFBSyxDQUFDMkUsQ0FBRCxFQUFHckUsQ0FBSCxDQUFMLENBQTVyRCxFQUF3c0QsQ0FBQyxpQ0FBRCxDQUF4c0QsRUFBNHVELENBQUNOLENBQUQsRUFBRyxDQUFDbEQsQ0FBRCxFQUFHLFdBQUgsQ0FBSCxFQUFtQixDQUFDNkgsQ0FBRCxFQUFHNUMsQ0FBSCxDQUFuQixDQUE1dUQsRUFBc3dELENBQUMsb0JBQUQsQ0FBdHdELEVBQTZ4RCxDQUFDLENBQUMvQixDQUFELEVBQUcsS0FBSCxFQUFTLEdBQVQsQ0FBRCxFQUFlLENBQUNsRCxDQUFELEVBQUcsV0FBSCxDQUFmLEVBQStCLENBQUM2SCxDQUFELEVBQUdyRSxDQUFILENBQS9CLENBQTd4RCxFQUFtMEQsQ0FBQyxpRkFBRCxFQUFtRixrQkFBbkYsRUFBc0csc0JBQXRHLEVBQTZILGFBQTdILENBQW4wRCxFQUErOEQsQ0FBQ04sQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsVUFBSCxDQUFILEVBQWtCLENBQUM2SCxDQUFELEVBQUdyRSxDQUFILENBQWxCLENBQS84RCxFQUF3K0QsQ0FBQyw4Q0FBRCxDQUF4K0QsRUFBeWhFLENBQUNOLENBQUQsRUFBRyxDQUFDbEQsQ0FBRCxFQUFHLFVBQUgsQ0FBSCxFQUFrQixDQUFDNkgsQ0FBRCxFQUFHeEcsQ0FBSCxDQUFsQixDQUF6aEUsRUFBa2pFLENBQUMsd0RBQUQsQ0FBbGpFLEVBQTZtRSxDQUFDLENBQUNyQixDQUFELEVBQUdzTSxFQUFFTyxJQUFMLENBQUQsRUFBWSxDQUFDM0osQ0FBRCxFQUFHb0osRUFBRU8sSUFBTCxDQUFaLEVBQXVCLENBQUNoRixDQUFELEVBQUduRyxDQUFILENBQXZCLENBQTdtRSxFQUEyb0UsQ0FBQyxxQkFBRCxDQUEzb0UsRUFBbXFFLENBQUMsQ0FBQ3dCLENBQUQsRUFBRyxHQUFILEVBQU8sU0FBUCxDQUFELEVBQW1CLENBQUNsRCxDQUFELEVBQUcsU0FBSCxDQUFuQixFQUFpQyxDQUFDNkgsQ0FBRCxFQUFHbkcsQ0FBSCxDQUFqQyxDQUFucUUsRUFBMnNFLENBQUMsc0JBQUQsQ0FBM3NFLEVBQW91RSxDQUFDd0IsQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsT0FBSCxDQUFILEVBQWUsQ0FBQzZILENBQUQsRUFBR25HLENBQUgsQ0FBZixDQUFwdUUsRUFBMHZFLENBQUMsNkVBQUQsRUFBK0UsY0FBL0UsQ0FBMXZFLEVBQXkxRSxDQUFDLENBQUMxQixDQUFELEVBQUcsU0FBSCxDQUFELEVBQWVrRCxDQUFmLEVBQWlCLENBQUMyRSxDQUFELEVBQUd4RyxDQUFILENBQWpCLENBQXoxRSxFQUFpM0UsQ0FBQyxzQkFBRCxDQUFqM0UsRUFBMDRFLENBQUNyQixDQUFELEVBQUcsQ0FBQzZILENBQUQsRUFBR25HLENBQUgsQ0FBSCxFQUFTd0IsQ0FBVCxDQUExNEUsRUFBczVFLENBQUMsb0RBQUQsRUFBc0QsbUNBQXRELEVBQTBGLGlCQUExRixDQUF0NUUsRUFBbWdGLENBQUMsQ0FBQ2xELENBQUQsRUFBRyxTQUFILENBQUQsRUFBZWtELENBQWYsRUFBaUIsQ0FBQzJFLENBQUQsRUFBR3JFLENBQUgsQ0FBakIsQ0FBbmdGLEVBQTJoRixDQUFDLGFBQUQsQ0FBM2hGLEVBQTJpRixDQUFDTixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxTQUFILENBQUgsRUFBaUIsQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBakIsQ0FBM2lGLEVBQW1rRixDQUFDLG1DQUFELEVBQXFDLDBCQUFyQyxDQUFua0YsRUFBb29GLENBQUMsQ0FBQ3hELENBQUQsRUFBRyxPQUFILENBQUQsRUFBYWtELENBQWIsRUFBZSxDQUFDMkUsQ0FBRCxFQUFHckUsQ0FBSCxDQUFmLENBQXBvRixFQUEwcEYsQ0FBQyxtQ0FBRCxDQUExcEYsRUFBZ3NGLENBQUNOLENBQUQsRUFBRyxDQUFDbEQsQ0FBRCxFQUFHLE1BQUgsQ0FBSCxFQUFjLENBQUM2SCxDQUFELEVBQUd4RyxDQUFILENBQWQsQ0FBaHNGLEVBQXF0RixDQUFDLCtDQUFELENBQXJ0RixFQUF1d0YsQ0FBQyxDQUFDckIsQ0FBRCxFQUFHLElBQUgsQ0FBRCxFQUFVa0QsQ0FBVixFQUFZLENBQUMyRSxDQUFELEVBQUd4RyxDQUFILENBQVosQ0FBdndGLEVBQTB4RixDQUFDLG1CQUFELENBQTF4RixFQUFnekYsQ0FBQ3JCLENBQUQsRUFBR2tELENBQUgsRUFBSyxDQUFDMkUsQ0FBRCxFQUFHbkcsQ0FBSCxDQUFMLENBQWh6RixFQUE0ekYsQ0FBQyxnQkFBRCxFQUFrQixxQkFBbEIsQ0FBNXpGLEVBQXEyRixDQUFDd0IsQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsSUFBSCxDQUFILEVBQVksQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBWixDQUFyMkYsRUFBdzNGLENBQUMsa0NBQUQsQ0FBeDNGLEVBQTY1RixDQUFDTixDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxRQUFILENBQUgsRUFBZ0IsQ0FBQzZILENBQUQsRUFBR3hHLENBQUgsQ0FBaEIsQ0FBNzVGLEVBQW83RixDQUFDLHFCQUFELENBQXA3RixFQUE0OEYsQ0FBQ3JCLENBQUQsRUFBR2tELENBQUgsRUFBSyxDQUFDMkUsQ0FBRCxFQUFHckUsQ0FBSCxDQUFMLENBQTU4RixFQUF3OUYsQ0FBQywyQkFBRCxDQUF4OUYsRUFBcy9GLENBQUN4RCxDQUFELEVBQUdrRCxDQUFILEVBQUssQ0FBQzJFLENBQUQsRUFBR0YsQ0FBSCxDQUFMLENBQXQvRixFQUFrZ0csQ0FBQywwQkFBRCxDQUFsZ0csRUFBK2hHLENBQUN6RSxDQUFELEVBQUcsQ0FBQ2xELENBQUQsRUFBRyxRQUFILENBQUgsRUFBZ0IsQ0FBQzZILENBQUQsRUFBR0YsQ0FBSCxDQUFoQixDQUEvaEcsRUFBc2pHLENBQUMsK0JBQUQsRUFBaUMsb0RBQWpDLEVBQXNGLDZFQUF0RixDQUF0akcsRUFBMnRHLENBQUMsQ0FBQ3pFLENBQUQsRUFBRyxJQUFILEVBQVEsR0FBUixDQUFELEVBQWMsQ0FBQ2xELENBQUQsRUFBRyxRQUFILENBQWQsRUFBMkIsQ0FBQzZILENBQUQsRUFBR3JFLENBQUgsQ0FBM0IsQ0FBM3RHLEVBQTZ2RyxDQUFDLDJCQUFELENBQTd2RyxFQUEyeEcsQ0FBQ04sQ0FBRCxFQUFHLENBQUNsRCxDQUFELEVBQUcsU0FBSCxDQUFILEVBQWlCLENBQUM2SCxDQUFELEVBQUdyRSxDQUFILENBQWpCLENBQTN4RyxFQUFtekcsQ0FBQyxrQkFBRCxFQUFvQiwrQkFBcEIsQ0FBbnpHLEVBQXcyRyxDQUFDLENBQUNxRSxDQUFELEVBQUd5RSxFQUFFSyxRQUFMLENBQUQsRUFBZ0IzTSxDQUFoQixFQUFrQmtELENBQWxCLENBQXgyRyxDQUFwbUYsRUFBaytMZ0wsUUFBTyxDQUFDLENBQUMsNkJBQUQsQ0FBRCxFQUFpQyxDQUFDL0IsQ0FBRCxFQUFHLENBQUNELENBQUQsRUFBRyxVQUFILENBQUgsQ0FBakMsRUFBb0QsQ0FBQyxzQkFBRCxFQUF3Qiw4REFBeEIsRUFBdUYseUNBQXZGLEVBQWlJLDhCQUFqSSxDQUFwRCxFQUFxTixDQUFDQSxDQUFELEVBQUdDLENBQUgsQ0FBck4sRUFBMk4sQ0FBQyx5QkFBRCxDQUEzTixFQUF1UCxDQUFDQSxDQUFELEVBQUdELENBQUgsQ0FBdlAsQ0FBeitMLEVBQXV1TVIsSUFBRyxDQUFDLENBQUMsbUNBQUQsQ0FBRCxFQUF1QyxDQUFDUSxDQUFELEVBQUdDLENBQUgsQ0FBdkMsRUFBNkMsQ0FBQyw4QkFBRCxFQUFnQyxpREFBaEMsRUFBa0Ysb0RBQWxGLENBQTdDLEVBQXFMLENBQUNELENBQUQsRUFBRyxDQUFDQyxDQUFELEVBQUcvSyxFQUFFcUMsR0FBTCxFQUFTMEosRUFBRXpCLEVBQUYsQ0FBS2lDLE9BQUwsQ0FBYU4sT0FBdEIsQ0FBSCxDQUFyTCxFQUF3TixDQUFDLHNDQUFELENBQXhOLEVBQWlRLENBQUMsQ0FBQ25CLENBQUQsRUFBRyxTQUFILENBQUQsRUFBZSxDQUFDQyxDQUFELEVBQUcvSyxFQUFFcUMsR0FBTCxFQUFTMEosRUFBRXpCLEVBQUYsQ0FBS2lDLE9BQUwsQ0FBYU4sT0FBdEIsQ0FBZixDQUFqUSxFQUFnVCxDQUFDLGNBQUQsQ0FBaFQsRUFBaVUsQ0FBQyxDQUFDbkIsQ0FBRCxFQUFHLFlBQUgsQ0FBRCxFQUFrQkMsQ0FBbEIsQ0FBalUsRUFBc1YsQ0FBQywrQkFBRCxFQUFpQyx5QkFBakMsRUFBMkQsb0ZBQTNELEVBQWdKLHNCQUFoSixDQUF0VixFQUE4ZixDQUFDRCxDQUFELEVBQUdDLENBQUgsQ0FBOWYsRUFBb2dCLENBQUMsbURBQUQsQ0FBcGdCLEVBQTBqQixDQUFDLENBQUNELENBQUQsRUFBRyxTQUFILENBQUQsRUFBZUMsQ0FBZixDQUExakIsRUFBNGtCLENBQUMsZ0JBQUQsQ0FBNWtCLEVBQStsQixDQUFDRCxDQUFELENBQS9sQixFQUFtbUIsQ0FBQyxxQ0FBRCxDQUFubUIsRUFBMm9CLENBQUMsQ0FBQ0EsQ0FBRCxFQUFHLFlBQUgsQ0FBRCxFQUFrQkMsQ0FBbEIsQ0FBM29CLEVBQWdxQixDQUFDLGdEQUFELEVBQWtELHdCQUFsRCxFQUEyRSw0QkFBM0UsRUFBd0cseUpBQXhHLEVBQWtRLDRCQUFsUSxFQUErUixxQkFBL1IsQ0FBaHFCLEVBQXM5QixDQUFDRCxDQUFELEVBQUdDLENBQUgsQ0FBdDlCLEVBQTQ5QixDQUFDLDZCQUFELENBQTU5QixFQUE0L0IsQ0FBQyxDQUFDRCxDQUFELEVBQUcsYUFBSCxDQUFELEVBQW1CQyxDQUFuQixDQUE1L0IsRUFBa2hDLENBQUMseUJBQUQsQ0FBbGhDLEVBQThpQyxDQUFDLENBQUNELENBQUQsRUFBRyxTQUFILENBQUQsRUFBZUMsQ0FBZixDQUE5aUMsRUFBZ2tDLENBQUMsaURBQUQsQ0FBaGtDLEVBQW9uQyxDQUFDRCxDQUFELEVBQUdDLENBQUgsQ0FBcG5DLEVBQTBuQyxDQUFDLGlCQUFELENBQTFuQyxFQUE4b0MsQ0FBQ0QsQ0FBRCxFQUFHQyxDQUFILENBQTlvQyxFQUFvcEMsQ0FBQyxzREFBRCxDQUFwcEMsRUFBNnNDLENBQUMsQ0FBQ0QsQ0FBRCxFQUFHLEtBQUgsQ0FBRCxFQUFXLENBQUNDLENBQUQsRUFBRyxJQUFILEVBQVEsR0FBUixDQUFYLENBQTdzQyxFQUFzdUMsQ0FBQyxnQ0FBRCxFQUFrQyxnQ0FBbEMsQ0FBdHVDLEVBQTB5QyxDQUFDLENBQUNELENBQUQsRUFBRyxRQUFILENBQUQsRUFBYyxDQUFDQyxDQUFELEVBQUcsSUFBSCxFQUFRLEdBQVIsQ0FBZCxDQUExeUMsRUFBczBDLENBQUMsdUNBQUQsRUFBeUMsb0NBQXpDLEVBQThFLDhEQUE5RSxFQUE2SSxzQkFBN0ksQ0FBdDBDLEVBQTIrQyxDQUFDRCxDQUFELEVBQUdDLENBQUgsQ0FBMytDLENBQTF1TSxFQUF2MEQ7QUFBQSxNQUFvaVRnQyxJQUFFLFVBQVN4RCxDQUFULEVBQVd6SyxDQUFYLEVBQWE7QUFBQyxRQUFHLGdCQUFnQmlPLENBQW5CLEVBQXFCO0FBQUMsVUFBSTNRLElBQUVtTixNQUFJeEMsS0FBR0EsRUFBRWlHLFNBQUwsSUFBZ0JqRyxFQUFFaUcsU0FBRixDQUFZQyxTQUE1QixHQUFzQ2xHLEVBQUVpRyxTQUFGLENBQVlDLFNBQWxELEdBQTREOUssQ0FBaEUsQ0FBTjtBQUFBLFVBQXlFMkIsSUFBRWhGLElBQUVvTSxFQUFFQyxNQUFGLENBQVN5QixDQUFULEVBQVc5TixDQUFYLENBQUYsR0FBZ0I4TixDQUEzRixDQUE2RixPQUFPLEtBQUtoRCxVQUFMLEdBQWdCLFlBQVU7QUFBQyxZQUFJN0MsSUFBRS9HLEVBQUUwTCxHQUFGLENBQU13QixLQUFOLENBQVksSUFBWixFQUFpQnBKLEVBQUU2RixPQUFuQixDQUFOLENBQWtDLE9BQU81QyxFQUFFeUUsS0FBRixHQUFRTixFQUFFTSxLQUFGLENBQVF6RSxFQUFFa0YsT0FBVixDQUFSLEVBQTJCbEYsQ0FBbEM7QUFBb0MsT0FBakcsRUFBa0csS0FBS29HLE1BQUwsR0FBWSxZQUFVO0FBQUMsZUFBT25OLEVBQUUwTCxHQUFGLENBQU13QixLQUFOLENBQVksSUFBWixFQUFpQnBKLEVBQUUrSSxHQUFuQixDQUFQO0FBQStCLE9BQXhKLEVBQXlKLEtBQUsxQyxTQUFMLEdBQWUsWUFBVTtBQUFDLGVBQU9uSyxFQUFFMEwsR0FBRixDQUFNd0IsS0FBTixDQUFZLElBQVosRUFBaUJwSixFQUFFb0csTUFBbkIsQ0FBUDtBQUFrQyxPQUFyTixFQUFzTixLQUFLa0QsU0FBTCxHQUFlLFlBQVU7QUFBQyxlQUFPcE4sRUFBRTBMLEdBQUYsQ0FBTXdCLEtBQU4sQ0FBWSxJQUFaLEVBQWlCcEosRUFBRWdKLE1BQW5CLENBQVA7QUFBa0MsT0FBbFIsRUFBbVIsS0FBS3ZDLEtBQUwsR0FBVyxZQUFVO0FBQUMsZUFBT3ZLLEVBQUUwTCxHQUFGLENBQU13QixLQUFOLENBQVksSUFBWixFQUFpQnBKLEVBQUV3RyxFQUFuQixDQUFQO0FBQThCLE9BQXZVLEVBQXdVLEtBQUsrQyxTQUFMLEdBQWUsWUFBVTtBQUFDLGVBQU0sRUFBQzVELElBQUcsS0FBS21CLEtBQUwsRUFBSixFQUFpQmpCLFNBQVEsS0FBS0MsVUFBTCxFQUF6QixFQUEyQ2tELFFBQU8sS0FBS00sU0FBTCxFQUFsRCxFQUFtRTlDLElBQUcsS0FBS0MsS0FBTCxFQUF0RSxFQUFtRkwsUUFBTyxLQUFLQyxTQUFMLEVBQTFGLEVBQTJHMEMsS0FBSSxLQUFLTSxNQUFMLEVBQS9HLEVBQU47QUFBb0ksT0FBdGUsRUFBdWUsS0FBS3ZDLEtBQUwsR0FBVyxZQUFVO0FBQUMsZUFBT3hPLENBQVA7QUFBUyxPQUF0Z0IsRUFBdWdCLEtBQUtrUixLQUFMLEdBQVcsVUFBU3ZHLENBQVQsRUFBVztBQUFDLGVBQU8zSyxJQUFFMkssQ0FBRixFQUFJLElBQVg7QUFBZ0IsT0FBOWlCLEVBQStpQixJQUF0akI7QUFBMmpCLFlBQU8sSUFBSWdHLENBQUosQ0FBTXhELENBQU4sRUFBUXpLLENBQVIsQ0FBRCxDQUFhdU8sU0FBYixFQUFOO0FBQStCLEdBQWp3VSxDQUFrd1VOLEVBQUVRLE9BQUYsR0FBVXpPLENBQVYsRUFBWWlPLEVBQUVTLE9BQUYsR0FBVSxFQUFDQyxNQUFLM0MsQ0FBTixFQUFRNEMsT0FBTWxULENBQWQsRUFBZ0IrUyxTQUFReEMsQ0FBeEIsRUFBdEIsRUFBaURnQyxFQUFFWSxHQUFGLEdBQU0sRUFBQ0MsY0FBYTVDLENBQWQsRUFBdkQsRUFBd0UrQixFQUFFYyxNQUFGLEdBQVMsRUFBQ0MsT0FBTWhNLENBQVAsRUFBU2lNLFFBQU9uUCxDQUFoQixFQUFrQm9QLE1BQUt2SCxDQUF2QixFQUF5QndILFNBQVFwSyxDQUFqQyxFQUFtQ3FLLFFBQU85TCxDQUExQyxFQUE0QytMLFNBQVE3TixDQUFwRCxFQUFzRDhOLFFBQU9uTyxDQUE3RCxFQUErRG9PLFVBQVM5SCxDQUF4RSxFQUEwRStILFVBQVNyRCxDQUFuRixFQUFqRixFQUF1SzhCLEVBQUV3QixNQUFGLEdBQVMsRUFBQ2QsTUFBSzNDLENBQU4sRUFBUXlDLFNBQVF4QyxDQUFoQixFQUFoTCxFQUFtTWdDLEVBQUV5QixFQUFGLEdBQUssRUFBQ2YsTUFBSzNDLENBQU4sRUFBUXlDLFNBQVF4QyxDQUFoQixFQUF4TSxFQUEyTixPQUFPMEQsT0FBUCxLQUFpQjVELENBQWpCLElBQW9CLE9BQU82RCxNQUFQLEtBQWdCN0QsQ0FBaEIsSUFBbUI2RCxPQUFPRCxPQUExQixLQUFvQ0EsVUFBUUMsT0FBT0QsT0FBUCxHQUFlMUIsQ0FBM0QsR0FBOEQwQixRQUFRRSxRQUFSLEdBQWlCNUIsQ0FBbkcsSUFBc0csZUFBZ0JqSixDQUFoQixJQUFtQix1QkFBbkIsR0FBOEIsa0NBQU8sWUFBVTtBQUFDLFdBQU9pSixDQUFQO0FBQVMsR0FBM0I7QUFBQSxvR0FBOUIsR0FBMkRoRyxFQUFFNEgsUUFBRixHQUFXNUIsQ0FBdlksQ0FBeVksSUFBSTdQLElBQUU2SixFQUFFNkgsTUFBRixJQUFVN0gsRUFBRThILEtBQWxCLENBQXdCLElBQUcsT0FBTzNSLENBQVAsS0FBVzJOLENBQWQsRUFBZ0I7QUFBQyxRQUFJaUUsSUFBRSxJQUFJL0IsQ0FBSixFQUFOLENBQVk3UCxFQUFFdU0sRUFBRixHQUFLcUYsRUFBRXpCLFNBQUYsRUFBTCxFQUFtQm5RLEVBQUV1TSxFQUFGLENBQUtzRixHQUFMLEdBQVMsWUFBVTtBQUFDLGFBQU9ELEVBQUVsRSxLQUFGLEVBQVA7QUFBaUIsS0FBeEQsRUFBeUQxTixFQUFFdU0sRUFBRixDQUFLdUYsR0FBTCxHQUFTLFVBQVNqSSxDQUFULEVBQVc7QUFBQytILFFBQUV4QixLQUFGLENBQVF2RyxDQUFSLEVBQVcsSUFBSXdDLElBQUV1RixFQUFFekIsU0FBRixFQUFOLENBQW9CLEtBQUksSUFBSXZPLENBQVIsSUFBYXlLLENBQWIsRUFBZXJNLEVBQUV1TSxFQUFGLENBQUszSyxDQUFMLElBQVF5SyxFQUFFekssQ0FBRixDQUFSO0FBQWEsS0FBekk7QUFBMEk7QUFBQyxDQUF2MlYsRUFBeTJWLE9BQU9qRixNQUFQLElBQWUsUUFBZixHQUF3QkEsTUFBeEIsR0FBK0IsSUFBeDRWLEU7Ozs7OztBQ1BIO0FBQ0E7Ozs7Ozs7OztBQ0RBOzs7OztBQUtBLDBFQUFnQm9WLE9BQUQsSUFBYTtBQUMxQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCO0FBQ25DLFFBQUlDLEdBQUo7QUFDQUEsVUFBTSxJQUFJQyxLQUFKLEVBQU47QUFDQUQsUUFBSXRILGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFVBQVNmLENBQVQsRUFBWTtBQUN2Q3FJLFVBQUloSCxtQkFBSixDQUF3QixNQUF4QixFQUFnQ3VELFVBQVUyRCxNQUExQztBQUNBLGFBQU9ILFNBQVA7QUFDRCxLQUhEO0FBSUEsV0FBT0MsSUFBSUcsR0FBSixHQUFVTixPQUFqQjtBQUNELEdBUk0sQ0FBUDtBQVNELENBVkQsRTs7Ozs7OztBQ0xBOzs7Ozs7QUFNQSwwRUFBZSxDQUFDTyxJQUFELEVBQU9DLElBQVAsRUFBYUMsUUFBYixLQUEwQjtBQUN2QyxNQUFJbk8sR0FBSjtBQUNBLE1BQUltTyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCQSxlQUFXLEVBQVg7QUFDRDtBQUNEbk8sUUFBTSxtQ0FBTjtBQUNBLE1BQUltTyxhQUFhLEVBQWpCLEVBQXFCO0FBQ25Cbk8sV0FBTyxVQUFXb08sbUJBQW1CRixJQUFuQixDQUFsQjtBQUNELEdBRkQsTUFFTztBQUNMbE8sV0FBTyxTQUFVb08sbUJBQW1CRCxRQUFuQixDQUFWLEdBQTBDLFFBQTFDLEdBQXNEQyxtQkFBbUJGLElBQW5CLENBQTdEO0FBQ0Q7QUFDRCxTQUFPRCxLQUFLMVUsRUFBTCxDQUFRLE9BQVIsRUFBaUIsVUFBU2lNLENBQVQsRUFBWTtBQUNsQ2xOLFdBQU8rVixJQUFQLENBQVlyTyxHQUFaLEVBQWlCLGNBQWpCLEVBQWlDLHNCQUFqQztBQUNBLFdBQU8sS0FBUDtBQUNELEdBSE0sQ0FBUDtBQUlELENBZkQsRTs7Ozs7OztBQ05BOzs7Ozs7QUFNQSwwRUFBZSxDQUFDaU8sSUFBRCxFQUFPQyxJQUFQLEVBQWFDLFdBQVcsRUFBeEIsS0FBK0I7QUFDNUMsTUFBSW5PLEdBQUo7QUFDQSxNQUFJbU8sWUFBWSxJQUFoQixFQUFzQjtBQUNwQkEsZUFBVyxFQUFYO0FBQ0Q7QUFDRG5PLFFBQU0sMkJBQU47QUFDQSxNQUFJbU8sYUFBYSxFQUFqQixFQUFxQjtBQUNuQm5PLFdBQU8sS0FBTW9PLG1CQUFtQkYsSUFBbkIsQ0FBYjtBQUNELEdBRkQsTUFFTztBQUNMbE8sV0FBUW9PLG1CQUFtQkYsSUFBbkIsQ0FBRCxHQUE2QixJQUE3QixHQUFxQ0UsbUJBQW1CRCxRQUFuQixDQUE1QztBQUNEO0FBQ0QsU0FBT0YsS0FBSzFVLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQVNpTSxDQUFULEVBQVk7QUFDbENsTixXQUFPK1YsSUFBUCxDQUFZck8sR0FBWixFQUFpQixXQUFqQjtBQUNBLFdBQU8sS0FBUDtBQUNELEdBSE0sQ0FBUDtBQUlELENBZkQsRTs7Ozs7OztBQ05BOzs7Ozs7QUFNQSwwRUFBZSxDQUFDaU8sSUFBRCxFQUFPRSxRQUFQLEVBQWlCRyxjQUFjLEVBQS9CLEtBQXNDO0FBQ25ELE1BQUl0TyxHQUFKO0FBQ0EsTUFBSXNPLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJBLGtCQUFjLEVBQWQ7QUFDRDtBQUNEdE8sUUFBTSw4REFBTjtBQUNBQSxTQUFPLEtBQU1vTyxtQkFBbUJELFFBQW5CLENBQWI7QUFDQSxNQUFJRyxXQUFKLEVBQWlCO0FBQ2Z0TyxXQUFPLGtCQUFtQm9PLG1CQUFtQkUsV0FBbkIsQ0FBMUI7QUFDRDtBQUNELFNBQU9MLEtBQUsxVSxFQUFMLENBQVEsT0FBUixFQUFpQixVQUFTaU0sQ0FBVCxFQUFZO0FBQ2xDbE4sV0FBTytWLElBQVAsQ0FBWXJPLEdBQVosRUFBaUIsa0JBQW1CLElBQUk5RCxJQUFKLEdBQVdpRCxPQUFYLEVBQXBDLEVBQTJELHNCQUEzRDtBQUNBLFdBQU8sS0FBUDtBQUNELEdBSE0sQ0FBUDtBQUlELENBZEQsRTs7Ozs7OztBQ05BOzs7Ozs7OztBQVFlLE1BQU1vUCxJQUFOLENBQVc7O0FBRXhCblcsZ0JBQWM7O0FBRVosU0FBS29XLEtBQUw7QUFDQSxTQUFLQyxRQUFMO0FBQ0EsU0FBS3hILHFCQUFMO0FBQ0EsU0FBS3lILFlBQUw7QUFFRDs7QUFFREYsVUFBUTs7QUFFTm5WLE1BQUUsTUFBSTtBQUFDQSxRQUFFLFFBQUYsRUFBWStMLElBQVosQ0FBaUIsUUFBakIsRUFBMkIsUUFBM0I7QUFBc0MsS0FBN0M7QUFFRDs7QUFFRHFKLGFBQVc7O0FBRVQ7QUFDQSxRQUFJL1UsVUFBVW5CLEdBQUdFLEVBQUgsQ0FBTU0sSUFBTixDQUFXVyxPQUF6Qjs7QUFFQTtBQUNBLFFBQUlpVixVQUFVLENBQ1osS0FEWSxFQUVaLE9BRlksRUFHWixNQUhZLEVBSVosTUFKWSxFQUtaLE9BTFksRUFNWixLQU5ZLEVBT1osT0FQWSxFQVFaLFFBUlksRUFTWixRQVRZLEVBVVosT0FWWSxFQVdaLFVBWFksRUFZWixNQVpZLEVBYVosU0FiWSxFQWNaLE9BZFksRUFlWixTQWZZLEVBZ0JaLFlBaEJZLENBQWQ7O0FBbUJBO0FBQ0EsUUFBSSxPQUFPclcsT0FBT3NXLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekN0VyxhQUFPc1csT0FBUCxHQUFpQixFQUFqQjtBQUNEOztBQUVEO0FBQ0EsU0FBSyxJQUFJL1QsQ0FBVCxJQUFjOFQsT0FBZCxFQUF1QjtBQUNyQixPQUFDLFVBQVVyTSxDQUFWLEVBQWE7O0FBRWI7QUFDQSxZQUFJc00sUUFBUXRNLENBQVIsS0FBYyxDQUFDNUksT0FBZixJQUEwQixPQUFPa1YsUUFBUXRNLENBQVIsQ0FBUCxLQUFzQixVQUFwRCxFQUFnRTtBQUMvRGhLLGlCQUFPZ0ssQ0FBUCxJQUFZc00sUUFBUXRNLENBQVIsRUFBVzlJLElBQVgsQ0FBZ0JvVixPQUFoQixDQUFaO0FBQ0EsU0FGRCxNQUVPO0FBQUU7QUFDUnRXLGlCQUFPZ0ssQ0FBUCxJQUFZLFlBQVUsQ0FBRSxDQUF4QjtBQUNBO0FBRUQsT0FURCxFQVNJcU0sUUFBUTlULENBQVIsQ0FUSjtBQVVEO0FBRUY7O0FBRURnVSxVQUFRN1QsS0FBUixFQUFlOztBQUViM0IsTUFBRSxNQUFGLEVBQVV3VixPQUFWLENBQWtCN1QsS0FBbEI7QUFFRDs7QUFFRGlNLDBCQUF3Qjs7QUFFdEIsUUFBSTZILE1BQU0sT0FBSyxFQUFmOztBQUVBeFcsV0FBTzJPLHFCQUFQLEdBQStCM08sT0FBTzJPLHFCQUFQLElBQWdDO0FBQ2hDM08sV0FBTzZPLHdCQURQLElBQ21DO0FBQ25DN08sV0FBTzhPLDJCQUZQLElBRXVDO0FBQ3ZDLGNBQVVFLFFBQVYsRUFBcUI7QUFDbkJoUCxhQUFPaVAsVUFBUCxDQUFrQkQsUUFBbEIsRUFBNEJ3SCxHQUE1QjtBQUNELEtBTGhDOztBQU9BeFcsV0FBT2tQLG9CQUFQLEdBQThCbFAsT0FBT2tQLG9CQUFQLElBQ0FsUCxPQUFPbVAsdUJBRFAsSUFFQW5QLE9BQU95VywwQkFGUCxJQUdBLFVBQVVDLEtBQVYsRUFBa0I7QUFDaEIxVyxhQUFPcVAsWUFBUCxDQUFvQnFILEtBQXBCO0FBQ0QsS0FML0I7QUFPRDs7QUFFRE4saUJBQWU7O0FBRWJyQixXQUFPNEIsRUFBUCxDQUFVckYsTUFBVixDQUFpQjtBQUNmNUUsU0FBRSxDQURhO0FBRWZFLFNBQUUsQ0FGYTtBQUdmZ0ssY0FBUSxZQUFXO0FBQ2YsWUFBSWxLLElBQUkzTCxFQUFFLElBQUYsRUFBUW1HLFVBQVIsRUFBUjtBQUNBLFlBQUkwRixJQUFJN0wsRUFBRSxJQUFGLEVBQVFvRyxXQUFSLEVBQVI7QUFDQXBHLFVBQUUsSUFBRixFQUFRaUcsR0FBUixDQUFZO0FBQ1Ysc0JBQVcsVUFERDtBQUVWLGtCQUFPLEtBRkc7QUFHVixpQkFBTSxLQUhJO0FBSVYseUJBQWMsTUFBTzBGLElBQUksQ0FBWCxHQUFnQixJQUpwQjtBQUtWLHdCQUFhLE1BQU9FLElBQUksQ0FBWCxHQUFnQjtBQUxuQixTQUFaO0FBT0gsT0FiYztBQWNmaUssZUFBUyxZQUFXO0FBQ2hCLFlBQUluSyxJQUFJM0wsRUFBRSxJQUFGLEVBQVFtRyxVQUFSLEVBQVI7QUFDQSxZQUFJMEYsSUFBSTdMLEVBQUUsSUFBRixFQUFRb0csV0FBUixFQUFSO0FBQ0FwRyxVQUFFLElBQUYsRUFBUWlHLEdBQVIsQ0FBWTtBQUNWLHNCQUFXLFVBREQ7QUFFVixrQkFBTyxLQUZHO0FBR1YseUJBQWMsTUFBTzBGLElBQUksQ0FBWCxHQUFnQjtBQUhwQixTQUFaO0FBS0gsT0F0QmM7QUF1QmZvSyxlQUFTLFlBQVc7QUFDaEIsWUFBSXBLLElBQUkzTCxFQUFFLElBQUYsRUFBUW1HLFVBQVIsRUFBUjtBQUNBLFlBQUkwRixJQUFJN0wsRUFBRSxJQUFGLEVBQVFvRyxXQUFSLEVBQVI7QUFDQXBHLFVBQUUsSUFBRixFQUFRaUcsR0FBUixDQUFZO0FBQ1Ysc0JBQVcsVUFERDtBQUVWLGlCQUFNLEtBRkk7QUFHVix3QkFBYSxNQUFPNEYsSUFBSSxDQUFYLEdBQWdCO0FBSG5CLFNBQVo7QUFLSDtBQS9CYyxLQUFqQjtBQWtDRDs7QUFFRG1LLGtCQUFnQjs7QUFFZCxRQUFJLFNBQVMvVyxNQUFULElBQW1CLGNBQWNBLE9BQU9nWCxHQUE1QyxFQUFpRDtBQUMvQyxVQUFJLENBQUNoWCxPQUFPZ1gsR0FBUCxDQUFXQyxRQUFYLENBQW9CLGdCQUFwQixFQUFzQyxZQUF0QyxDQUFMLEVBQTBEO0FBQ3hEalcsaUJBQVNrVyxlQUFULENBQXlCQyxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FBdUMsb0JBQXZDO0FBQ0Q7QUFDRjs7QUFFREMsUUFBSXBYLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRbVAsSUFBWjs7QUFFQSxRQUFJNVAsR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVFtUCxJQUFaLEVBQWtCOztBQUVoQjdPLGVBQVNrVyxlQUFULENBQXlCQyxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FBdUMsb0JBQXZDO0FBRUQ7QUFFRjs7QUFFREUsZUFBYTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQUlyWCxHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUTZXLElBQVosRUFBa0I7O0FBRWhCeFcsUUFBRSxNQUFJO0FBQ0pBLFVBQUUsS0FBRixFQUFTRSxFQUFULENBQVksYUFBWixFQUEwQixNQUFJO0FBQzVCLGlCQUFPLEtBQVA7QUFDRCxTQUZEO0FBR0QsT0FKRDtBQU1EOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJa1EsSUFBSWxSLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFROFcsZ0JBQVIsRUFBUjs7QUFFQSxRQUFJckcsS0FBR2pSLFNBQVAsRUFBa0I7QUFDbEIsUUFBSWlSLElBQUUsQ0FBTixFQUFTOztBQUVQLFVBQUl1RixLQUFKO0FBQ0EzVixRQUFFLEtBQUYsRUFBU0UsRUFBVCxDQUFZLFlBQVosRUFBeUIsTUFBSTtBQUMzQnlWLGdCQUFRekgsV0FBVyxNQUFJO0FBQ3JCd0ksZ0JBQU0sWUFBTjtBQUNELFNBRk8sRUFFTixHQUZNLENBQVI7QUFHQSxlQUFPLEtBQVA7QUFDRCxPQUxEO0FBTUExVyxRQUFFLEtBQUYsRUFBU0UsRUFBVCxDQUFZLFVBQVosRUFBdUIsTUFBSTtBQUN6Qm9PLHFCQUFhcUgsS0FBYjtBQUNBLGVBQU8sS0FBUDtBQUNELE9BSEQ7QUFLRDtBQUVGOztBQTVMdUIsQzs7Ozs7Ozs7Ozs7QUNSMUI7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsTUFBTWdCLElBQU4sQ0FBVzs7QUFFeEI1WCxnQkFBYzs7QUFFWixTQUFLUyxLQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUVEOztBQUVERCxVQUFRLENBRVA7O0FBRURNLFlBQVU7O0FBRVI7QUFDQSxRQUFJOFcsT0FBTzVXLEVBQUUsTUFBRixFQUFVNlcsSUFBVixDQUFlLElBQWYsQ0FBWDs7QUFFQTVYLFdBQU9zVyxPQUFQLENBQWVlLEdBQWYsQ0FBbUIsWUFBbkIsRUFBaUNNLElBQWpDOztBQUVGO0FBQ0UsWUFBUUEsSUFBUjs7QUFFRSxXQUFLLEtBQUw7O0FBRUUsWUFBSSxvRUFBSjs7QUFFQTs7QUFFTCxXQUFLLFdBQUw7O0FBRUMsWUFBSSwwRUFBSjs7QUFFQTs7QUFFRCxXQUFLLGNBQUw7O0FBRUMsWUFBSSw2RUFBSjs7QUFFQTs7QUFsQkE7QUFzQkQ7O0FBRUQ3VyxXQUFTLENBR1I7O0FBRUQrVyxhQUFXLENBR1Y7O0FBRURyWCxjQUFZOztBQUVWTyxNQUFFQyxRQUFGLEVBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLEtBQUtKLE9BQUwsQ0FBYUssSUFBYixDQUFrQixJQUFsQixDQUF4QjtBQUNBSCxNQUFFZixNQUFGLEVBQVVpQixFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7QUE1RHVCLEM7Ozs7Ozs7Ozs7OztBQ2QxQjtBQUFBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRWUsTUFBTTRXLFVBQU4sQ0FBaUI7O0FBRTlCaFksZ0JBQWE7O0FBRVgsU0FBS1MsS0FBTDtBQUNBLFNBQUtDLFNBQUw7QUFFRDs7QUFFREQsVUFBUSxDQUVQOztBQUVETyxXQUFTOztBQUVQYixPQUFHRSxFQUFILENBQU00WCxXQUFOLEdBQW9CLElBQUksb0VBQUosRUFBcEI7O0FBRUE5WCxPQUFHRSxFQUFILENBQU02WCxTQUFOLEdBQWtCLElBQUksZ0VBQUosRUFBbEI7QUFDQS9YLE9BQUdFLEVBQUgsQ0FBTThYLFNBQU4sR0FBa0IsSUFBSSxnRUFBSixFQUFsQjtBQUNBaFksT0FBR0UsRUFBSCxDQUFNK1gsU0FBTixHQUFrQixJQUFJLGdFQUFKLEVBQWxCOztBQUVBalksT0FBR0UsRUFBSCxDQUFNNFgsV0FBTixDQUFrQkksUUFBbEIsQ0FBMkJsWSxHQUFHRSxFQUFILENBQU02WCxTQUFqQztBQUNBL1gsT0FBR0UsRUFBSCxDQUFNNFgsV0FBTixDQUFrQkksUUFBbEIsQ0FBMkJsWSxHQUFHRSxFQUFILENBQU04WCxTQUFqQztBQUNBaFksT0FBR0UsRUFBSCxDQUFNNFgsV0FBTixDQUFrQkksUUFBbEIsQ0FBMkJsWSxHQUFHRSxFQUFILENBQU0rWCxTQUFqQzs7QUFFQWpZLE9BQUdFLEVBQUgsQ0FBTTRYLFdBQU4sQ0FBa0JLLElBQWxCO0FBRUQ7O0FBRUQsU0FBT0MsR0FBUCxHQUFhLENBRVo7O0FBRUQ3WCxjQUFZOztBQUVWTyxNQUFFZixNQUFGLEVBQVVpQixFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7QUFyQzZCLEM7Ozs7Ozs7Ozs7QUNwQmhDO0FBQUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBOztBQUVBOztBQUVlLE1BQU1vWCxXQUFOLFNBQTBCLDREQUExQixDQUErQjs7QUFFNUN4WSxnQkFBYzs7QUFFWjs7QUFFRixTQUFLeVksR0FBTCxHQUFXLENBQVgsQ0FKYyxDQUlBO0FBQ2QsU0FBS0MsTUFBTCxHQUFjLEVBQWQsQ0FMYyxDQUtJO0FBQ2hCLFNBQUtDLGNBQUwsR0FBc0IsQ0FBQyxDQUF2QixDQU5ZLENBTWM7QUFDMUIsU0FBS0MsRUFBTCxHQUFVLENBQVY7O0FBRUYsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDRSxTQUFLQyxRQUFMLEdBQWdCLElBQWhCLENBVlksQ0FVVTtBQUN0QixTQUFLQyxVQUFMLEdBQWtCLElBQWxCLENBWFksQ0FXWTs7QUFFeEIsU0FBS0MsU0FBTCxHQUFpQixFQUFqQixDQWJZLENBYVM7OztBQUlyQixTQUFLQyxTQUFMLEdBQWlCLENBQWpCOztBQUVBLFNBQUtaLFFBQUwsR0FBZ0IsS0FBS2EsU0FBTCxDQUFlOVgsSUFBZixDQUFvQixJQUFwQixDQUFoQjs7QUFFRixTQUFLK1gsUUFBTCxHQUFnQixLQUFLQyxTQUFMLENBQWVoWSxJQUFmLENBQW9CLElBQXBCLENBQWhCO0FBQ0EsU0FBS2lZLFFBQUwsR0FBZ0IsS0FBS0MsU0FBTCxDQUFlbFksSUFBZixDQUFvQixJQUFwQixDQUFoQjtBQUNBLFNBQUttWSxTQUFMLEdBQWlCLEtBQUtDLFVBQUwsQ0FBZ0JwWSxJQUFoQixDQUFxQixJQUFyQixDQUFqQjtBQUNBLFNBQUtxWSxTQUFMLEdBQWlCLEtBQUtDLFVBQUwsQ0FBZ0J0WSxJQUFoQixDQUFxQixJQUFyQixDQUFqQjtBQUNBLFNBQUtrWCxJQUFMLEdBQVksS0FBS3FCLEtBQUwsQ0FBV3ZZLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBWjs7QUFHQSxTQUFLd1ksVUFBTCxHQUFrQixLQUFLQyxXQUFMLENBQWlCelksSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbEI7O0FBRUEsU0FBSzBZLE9BQUwsR0FBZSxJQUFmOztBQUdBLFNBQUs3WixJQUFMLEdBakNjLENBaUNEOztBQUVYQyxXQUFPaU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS2dMLFFBQXZDLEVBQWlELEtBQWpEO0FBQ0FqWSxhQUFTaU4sZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS29MLFNBQTFDLEVBQXFELElBQXJEO0FBRUQ7O0FBRUQ7OztBQUdBdFosU0FBTTs7QUFFSixTQUFLK1ksU0FBTCxDQUFlZSxJQUFmLENBQW9CLElBQUksb0VBQUosRUFBcEI7O0FBRUY7QUFDQSxTQUFLakIsUUFBTCxHQUFnQixJQUFJa0IsTUFBTUMsYUFBVixDQUF3QixFQUFDQyxPQUFPLElBQVIsRUFBeEIsQ0FBaEI7QUFDQSxTQUFLcEIsUUFBTCxDQUFjcUIsYUFBZCxDQUE2QmphLE9BQU9rYSxnQkFBcEM7QUFDQSxTQUFLdEIsUUFBTCxDQUFjdUIsT0FBZCxDQUFzQm5hLE9BQU9rSCxVQUE3QixFQUF5Q2xILE9BQU9tSCxXQUFoRDtBQUNFLFNBQUt5UixRQUFMLENBQWN3QixhQUFkLENBQTRCLElBQUlOLE1BQU1PLEtBQVYsQ0FBZ0IsUUFBaEIsRUFBMEIsR0FBMUIsQ0FBNUI7QUFDRixTQUFLekIsUUFBTCxDQUFjMEIsV0FBZCxHQUE0QixLQUE1QjtBQUNBLFNBQUsxQixRQUFMLENBQWMyQixTQUFkLENBQXdCQyxPQUF4QixHQUFrQyxJQUFsQztBQUNBLFNBQUs1QixRQUFMLENBQWMyQixTQUFkLENBQXdCaEssSUFBeEIsR0FBK0J1SixNQUFNVyxZQUFyQztBQUNBLFNBQUs3QixRQUFMLENBQWM4QixVQUFkLENBQXlCdEwsRUFBekIsR0FBOEIsTUFBOUI7QUFDRSxTQUFLdUosTUFBTCxHQUFjLEtBQUtDLFFBQUwsQ0FBYzhCLFVBQTVCO0FBQ0YxWixhQUFTMlosSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtqQyxNQUEvQjs7QUFFRTtBQUNBLFNBQUtFLFVBQUwsR0FBa0IsSUFBSWlCLE1BQU1DLGFBQVYsQ0FBd0IsRUFBQ2MsV0FBVyxJQUFaLEVBQWtCYixPQUFPLElBQXpCLEVBQXhCLENBQWxCO0FBQ0EsU0FBS25CLFVBQUwsQ0FBZ0JvQixhQUFoQixDQUErQmphLE9BQU9rYSxnQkFBdEM7QUFDQSxTQUFLckIsVUFBTCxDQUFnQnNCLE9BQWhCLENBQXlCbmEsT0FBT2tILFVBQWhDLEVBQTRDbEgsT0FBT21ILFdBQW5EO0FBQ0EsU0FBSzBSLFVBQUwsQ0FBZ0J5QixXQUFoQixHQUE4QixLQUE5QjtBQUNBLFNBQUt6QixVQUFMLENBQWdCMEIsU0FBaEIsQ0FBMEJDLE9BQTFCLEdBQW9DLElBQXBDO0FBQ0EsU0FBSzNCLFVBQUwsQ0FBZ0IwQixTQUFoQixDQUEwQmhLLElBQTFCLEdBQWlDdUosTUFBTVcsWUFBdkM7QUFDQSxTQUFLNUIsVUFBTCxDQUFnQjZCLFVBQWhCLENBQTJCdEwsRUFBM0IsR0FBZ0MsS0FBaEM7QUFDQSxTQUFLeUosVUFBTCxDQUFnQnVCLGFBQWhCLENBQThCLFFBQTlCLEVBQXdDLEdBQXhDO0FBQ0EsU0FBS1UsUUFBTCxHQUFnQixLQUFLakMsVUFBTCxDQUFnQjZCLFVBQWhDO0FBQ0ExWixhQUFTMlosSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtFLFFBQS9CO0FBRUQ7O0FBRUY7Ozs7QUFJQTlCLFlBQVUrQixLQUFWLEVBQWlCOztBQUVoQixTQUFLdkMsTUFBTCxDQUFZcUIsSUFBWixDQUFpQmtCLEtBQWpCO0FBRUE7O0FBRUE7Ozs7QUFJQTdCLGNBQVk7O0FBRVg7QUFDQyxTQUFLVixNQUFMLENBQVksS0FBS0QsR0FBakIsRUFBc0J5QyxNQUF0QixDQUE2QkMsTUFBN0IsR0FBc0NqYixPQUFPa0gsVUFBUCxHQUFvQmxILE9BQU9tSCxXQUFqRTtBQUNBLFNBQUtxUixNQUFMLENBQVksS0FBS0QsR0FBakIsRUFBc0J5QyxNQUF0QixDQUE2QkUsc0JBQTdCO0FBQ0E7QUFDQSxTQUFLdEMsUUFBTCxDQUFjdUIsT0FBZCxDQUFzQm5hLE9BQU9rSCxVQUE3QixFQUF5Q2xILE9BQU9tSCxXQUFoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDRDs7QUFFRjs7OztBQUlBaVMsY0FBVzs7QUFFVixRQUFHLEtBQUtiLEdBQUwsR0FBVyxDQUFkLEVBQWlCO0FBQ2hCLFdBQUtBLEdBQUwsR0FBVyxLQUFLQyxNQUFMLENBQVl0VixNQUFaLEdBQW1CLENBQTlCO0FBQ0E7O0FBRUQsUUFBRyxLQUFLcVYsR0FBTCxJQUFZLEtBQUtDLE1BQUwsQ0FBWXRWLE1BQTNCLEVBQW1DO0FBQ2xDLFdBQUtxVixHQUFMLEdBQVcsQ0FBWDtBQUNBO0FBRUE7O0FBRUY7Ozs7QUFJQWUsZUFBWTtBQUNYdFosV0FBT3FPLFNBQVAsR0FBb0JuQixDQUFELElBQU87QUFDekI7QUFDRyxXQUFLME0sT0FBTCxHQUFlMU0sRUFBRTFLLEdBQWpCOztBQUVBLFVBQUcsS0FBS29YLE9BQUwsSUFBZ0IsWUFBbkIsRUFBZ0M7QUFDOUI7QUFDQSxhQUFLckIsR0FBTDtBQUNBLGFBQUtZLFFBQUw7QUFDRDs7QUFFRCxVQUFHLEtBQUtTLE9BQUwsSUFBZ0IsV0FBbkIsRUFBK0I7QUFDN0I7QUFDQSxhQUFLckIsR0FBTDtBQUNBLGFBQUtZLFFBQUw7QUFDRDs7QUFFRCxVQUFHLEtBQUtTLE9BQUwsSUFBZ0IsWUFBaEIsSUFBZ0MsS0FBS0EsT0FBTCxJQUFnQixXQUFuRCxFQUFnRTs7QUFFOUQsYUFBS25CLGNBQUwsR0FBc0IsQ0FBdEI7QUFFRDs7QUFFRCxVQUFHLEtBQUttQixPQUFMLElBQWdCLFNBQW5CLEVBQThCO0FBQzVCOztBQUVBLGFBQUtiLFNBQUwsSUFBZ0IsSUFBaEI7QUFDQSxZQUFHLEtBQUtBLFNBQUwsR0FBaUIsQ0FBcEIsRUFBc0I7QUFDcEIsZUFBS0EsU0FBTCxHQUFpQixHQUFqQjtBQUNEO0FBRUY7O0FBRUQsVUFBRyxLQUFLYSxPQUFMLElBQWdCLFdBQW5CLEVBQWdDO0FBQzlCOztBQUVBLGFBQUtiLFNBQUwsSUFBZ0IsSUFBaEI7QUFDQSxZQUFHLEtBQUtBLFNBQUwsR0FBaUIsQ0FBcEIsRUFBc0I7QUFDcEIsZUFBS0EsU0FBTCxHQUFpQixHQUFqQjtBQUNEO0FBRUY7O0FBRURoWSxRQUFFLE1BQUYsRUFBVWlHLEdBQVYsQ0FBYyxFQUFFbVUsU0FBUyxLQUFLcEMsU0FBaEIsRUFBZDtBQUNIL1ksYUFBT3NXLE9BQVAsQ0FBZWUsR0FBZixDQUFtQixXQUFuQixFQUErQixLQUFLa0IsR0FBcEM7QUFDQSxLQTVDRDtBQTZDQTs7QUFFQTs7OztBQUlEaUIsZUFBWTs7QUFFVCxRQUFHLEtBQUtmLGNBQUwsSUFBdUJ6VSxLQUFLMkIsRUFBTCxHQUFRLENBQWxDLEVBQW9DOztBQUVsQyxXQUFLOFMsY0FBTCxJQUF1QixJQUF2QjtBQUNBLFdBQUtDLEVBQUwsR0FBVTFVLEtBQUtvWCxHQUFMLENBQVMsS0FBSzNDLGNBQWQsQ0FBVjs7QUFFQTFYLFFBQUUsWUFBRixFQUFnQmlHLEdBQWhCLENBQW9CLEVBQUVtVSxTQUFTLEtBQUt6QyxFQUFoQixFQUFwQjtBQUVELEtBUEQsTUFPTzs7QUFFTCxXQUFLRCxjQUFMLEdBQXNCLENBQUMsQ0FBdkI7QUFDQSxXQUFLQyxFQUFMLEdBQVUsR0FBVjtBQUVEOztBQUVELFFBQUcsS0FBS0EsRUFBTCxHQUFVLElBQVYsSUFBa0IsS0FBS0EsRUFBTCxJQUFXLEdBQWhDLEVBQXFDO0FBQ25DLGNBQVEsS0FBS2tCLE9BQWI7QUFDRSxhQUFLLFlBQUw7O0FBRUU7QUFDQTtBQUNBLGVBQUtGLFVBQUw7QUFDQTs7QUFFRixhQUFLLFdBQUw7O0FBRUU7QUFDQTtBQUNBLGVBQUtBLFVBQUw7QUFDQTtBQWJKO0FBZUQ7QUFDSDs7QUFFQUMsZ0JBQWM7QUFDWixTQUFLWixTQUFMLEdBQWlCLEdBQWpCOztBQUVBaFksTUFBRSxNQUFGLEVBQVVpRyxHQUFWLENBQWMsRUFBQ21VLFNBQVMsS0FBS3BDLFNBQWYsRUFBZDtBQUNEOztBQUdGOzs7O0FBSUFVLFVBQVE7O0FBRUw7O0FBRUYsU0FBS2pCLE1BQUwsQ0FBWSxLQUFLRCxHQUFqQixFQUFzQjhDLE1BQXRCO0FBQ0E7QUFDQTtBQUNBLFNBQUt6QyxRQUFMLENBQWMwQyxNQUFkLENBQXFCLEtBQUs5QyxNQUFMLENBQVksS0FBS0QsR0FBakIsRUFBc0J3QyxLQUEzQyxFQUFrRCxLQUFLdkMsTUFBTCxDQUFZLEtBQUtELEdBQWpCLEVBQXNCeUMsTUFBeEU7QUFDQTtBQUNBck0sMEJBQXNCLEtBQUt5SixJQUFMLENBQVVsWCxJQUFWLENBQWUsSUFBZixDQUF0Qjs7QUFFRSxRQUFHLEtBQUt1WCxjQUFMLElBQXVCLENBQTFCLEVBQTZCO0FBQzNCLFdBQUtjLFNBQUw7QUFDRDtBQUVIOztBQTNPNEMsQzs7Ozs7Ozs7QUNkOUM7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBTyxNQUFNeUIsYUFBTixHQUFzQixVQUFXQyxNQUFYLEVBQW1CZCxVQUFuQixFQUFnQzs7QUFFckQsTUFBS2MsTUFBTCxHQUFjQSxNQUFkOztBQUVBLE1BQUtkLFVBQUwsR0FBb0JBLGVBQWV4YSxTQUFqQixHQUErQndhLFVBQS9CLEdBQTRDMVosUUFBOUQ7O0FBRUE7QUFDQSxNQUFLd1osT0FBTCxHQUFlLElBQWY7O0FBRUE7QUFDQSxNQUFLaUIsTUFBTCxHQUFjLElBQUkzQixNQUFNNEIsT0FBVixFQUFkOztBQUVBO0FBQ0EsTUFBS0MsV0FBTCxHQUFtQixDQUFuQjtBQUNBLE1BQUtDLFdBQUwsR0FBbUJDLFFBQW5COztBQUVBO0FBQ0EsTUFBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxNQUFLQyxPQUFMLEdBQWVGLFFBQWY7O0FBRUE7QUFDQTtBQUNBLE1BQUtHLGFBQUwsR0FBcUIsQ0FBckIsQ0F0QnFELENBc0I3QjtBQUN4QixNQUFLQyxhQUFMLEdBQXFCalksS0FBSzJCLEVBQTFCLENBdkJxRCxDQXVCdkI7O0FBRTlCO0FBQ0E7QUFDQSxNQUFLdVcsZUFBTCxHQUF1QixDQUFFTCxRQUF6QixDQTNCcUQsQ0EyQmxCO0FBQ25DLE1BQUtNLGVBQUwsR0FBdUJOLFFBQXZCLENBNUJxRCxDQTRCcEI7O0FBRWpDO0FBQ0E7QUFDQSxNQUFLTyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsTUFBS0MsYUFBTCxHQUFxQixJQUFyQjs7QUFFQTtBQUNBO0FBQ0EsTUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLE1BQUtDLFNBQUwsR0FBaUIsR0FBakI7O0FBRUE7QUFDQSxNQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsTUFBS0MsV0FBTCxHQUFtQixHQUFuQjs7QUFFQTtBQUNBLE1BQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxNQUFLQyxXQUFMLEdBQW1CLEdBQW5CLENBOUNxRCxDQThDN0I7O0FBRXhCO0FBQ0E7QUFDQSxNQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsTUFBS0MsZUFBTCxHQUF1QixHQUF2QixDQW5EcUQsQ0FtRHpCOztBQUU1QjtBQUNBLE1BQUtDLFVBQUwsR0FBa0IsSUFBbEI7O0FBRUE7QUFDQSxNQUFLN2EsSUFBTCxHQUFZLEVBQUU4YSxNQUFNLEVBQVIsRUFBWUMsSUFBSSxFQUFoQixFQUFvQkMsT0FBTyxFQUEzQixFQUErQkMsUUFBUSxFQUF2QyxFQUFaOztBQUVBO0FBQ0EsTUFBS0MsWUFBTCxHQUFvQixFQUFFQyxPQUFPdEQsTUFBTXVELEtBQU4sQ0FBWU4sSUFBckIsRUFBMkJPLE1BQU14RCxNQUFNdUQsS0FBTixDQUFZRSxNQUE3QyxFQUFxREMsS0FBSzFELE1BQU11RCxLQUFOLENBQVlKLEtBQXRFLEVBQXBCOztBQUVBO0FBQ0EsTUFBS1EsT0FBTCxHQUFlLEtBQUtoQyxNQUFMLENBQVlpQyxLQUFaLEVBQWY7QUFDQSxNQUFLQyxTQUFMLEdBQWlCLEtBQUtuQyxNQUFMLENBQVlvQyxRQUFaLENBQXFCRixLQUFyQixFQUFqQjtBQUNBLE1BQUtHLEtBQUwsR0FBYSxLQUFLckMsTUFBTCxDQUFZc0MsSUFBekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQUtDLGFBQUwsR0FBcUIsWUFBWTs7QUFFaEMsU0FBT0MsVUFBVUMsR0FBakI7QUFFQSxFQUpEOztBQU1BLE1BQUtDLGlCQUFMLEdBQXlCLFlBQVk7O0FBRXBDLFNBQU9GLFVBQVVHLEtBQWpCO0FBRUEsRUFKRDs7QUFNQSxNQUFLQyxLQUFMLEdBQWEsWUFBWTs7QUFFeEJDLFFBQU01QyxNQUFOLENBQWE2QyxJQUFiLENBQW1CRCxNQUFNWixPQUF6QjtBQUNBWSxRQUFNN0MsTUFBTixDQUFhb0MsUUFBYixDQUFzQlUsSUFBdEIsQ0FBNEJELE1BQU1WLFNBQWxDO0FBQ0FVLFFBQU03QyxNQUFOLENBQWFzQyxJQUFiLEdBQW9CTyxNQUFNUixLQUExQjs7QUFFQVEsUUFBTTdDLE1BQU4sQ0FBYU4sc0JBQWI7QUFDQW1ELFFBQU1FLGFBQU4sQ0FBcUJDLFdBQXJCOztBQUVBSCxRQUFNaEQsTUFBTjs7QUFFQW9ELFVBQVFDLE1BQU1DLElBQWQ7QUFFQSxFQWJEOztBQWVBO0FBQ0EsTUFBS3RELE1BQUwsR0FBYyxZQUFXOztBQUV4QixNQUFJdUQsU0FBUyxJQUFJOUUsTUFBTTRCLE9BQVYsRUFBYjs7QUFFQTtBQUNBLE1BQUltRCxPQUFPLElBQUkvRSxNQUFNZ0YsVUFBVixHQUF1QkMsa0JBQXZCLENBQTJDdkQsT0FBT3dELEVBQWxELEVBQXNELElBQUlsRixNQUFNNEIsT0FBVixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUF0RCxDQUFYO0FBQ0EsTUFBSXVELGNBQWNKLEtBQUtuQixLQUFMLEdBQWF3QixPQUFiLEVBQWxCOztBQUVBLE1BQUlDLGVBQWUsSUFBSXJGLE1BQU00QixPQUFWLEVBQW5CO0FBQ0EsTUFBSTBELGlCQUFpQixJQUFJdEYsTUFBTWdGLFVBQVYsRUFBckI7O0FBRUEsU0FBTyxTQUFTekQsTUFBVCxHQUFtQjs7QUFFekIsT0FBSXVDLFdBQVdTLE1BQU03QyxNQUFOLENBQWFvQyxRQUE1Qjs7QUFFQWdCLFVBQU9OLElBQVAsQ0FBYVYsUUFBYixFQUF3QnlCLEdBQXhCLENBQTZCaEIsTUFBTTVDLE1BQW5DOztBQUVBO0FBQ0FtRCxVQUFPVSxlQUFQLENBQXdCVCxJQUF4Qjs7QUFFQTtBQUNBYixhQUFVdUIsY0FBVixDQUEwQlgsTUFBMUI7O0FBRUEsT0FBS1AsTUFBTXpCLFVBQU4sSUFBb0I2QixVQUFVQyxNQUFNQyxJQUF6QyxFQUFnRDs7QUFFL0NhLGVBQVlDLHNCQUFaO0FBRUE7O0FBRUR6QixhQUFVRyxLQUFWLElBQW1CdUIsZUFBZXZCLEtBQWxDO0FBQ0FILGFBQVVDLEdBQVYsSUFBaUJ5QixlQUFlekIsR0FBaEM7O0FBRUE7QUFDQUQsYUFBVUcsS0FBVixHQUFrQm5hLEtBQUtELEdBQUwsQ0FBVXNhLE1BQU1uQyxlQUFoQixFQUFpQ2xZLEtBQUtGLEdBQUwsQ0FBVXVhLE1BQU1sQyxlQUFoQixFQUFpQzZCLFVBQVVHLEtBQTNDLENBQWpDLENBQWxCOztBQUVBO0FBQ0FILGFBQVVDLEdBQVYsR0FBZ0JqYSxLQUFLRCxHQUFMLENBQVVzYSxNQUFNckMsYUFBaEIsRUFBK0JoWSxLQUFLRixHQUFMLENBQVV1YSxNQUFNcEMsYUFBaEIsRUFBK0IrQixVQUFVQyxHQUF6QyxDQUEvQixDQUFoQjs7QUFFQUQsYUFBVTJCLFFBQVY7O0FBR0EzQixhQUFVNEIsTUFBVixJQUFvQkMsS0FBcEI7O0FBRUE7QUFDQTdCLGFBQVU0QixNQUFWLEdBQW1CNWIsS0FBS0QsR0FBTCxDQUFVc2EsTUFBTTFDLFdBQWhCLEVBQTZCM1gsS0FBS0YsR0FBTCxDQUFVdWEsTUFBTXpDLFdBQWhCLEVBQTZCb0MsVUFBVTRCLE1BQXZDLENBQTdCLENBQW5COztBQUVBO0FBQ0F2QixTQUFNNUMsTUFBTixDQUFhckUsR0FBYixDQUFrQjBJLFNBQWxCOztBQUVBbEIsVUFBT21CLGdCQUFQLENBQXlCL0IsU0FBekI7O0FBRUE7QUFDQVksVUFBT1UsZUFBUCxDQUF3QkwsV0FBeEI7O0FBRUFyQixZQUFTVSxJQUFULENBQWVELE1BQU01QyxNQUFyQixFQUE4QnJFLEdBQTlCLENBQW1Dd0gsTUFBbkM7O0FBRUFQLFNBQU03QyxNQUFOLENBQWF3RSxNQUFiLENBQXFCM0IsTUFBTTVDLE1BQTNCOztBQUVBLE9BQUs0QyxNQUFNakMsYUFBTixLQUF3QixJQUE3QixFQUFvQzs7QUFFbkNzRCxtQkFBZXZCLEtBQWYsSUFBMEIsSUFBSUUsTUFBTWhDLGFBQXBDO0FBQ0FxRCxtQkFBZXpCLEdBQWYsSUFBd0IsSUFBSUksTUFBTWhDLGFBQWxDO0FBRUEsSUFMRCxNQUtPOztBQUVOcUQsbUJBQWV2SyxHQUFmLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCO0FBRUE7O0FBRUQwSyxXQUFRLENBQVI7QUFDQUMsYUFBVTNLLEdBQVYsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxPQUFLOEssZUFDSmQsYUFBYWUsaUJBQWIsQ0FBZ0M3QixNQUFNN0MsTUFBTixDQUFhb0MsUUFBN0MsSUFBMER1QyxHQUR0RCxJQUVKLEtBQU0sSUFBSWYsZUFBZWdCLEdBQWYsQ0FBb0IvQixNQUFNN0MsTUFBTixDQUFhNkUsVUFBakMsQ0FBVixJQUE0REYsR0FGN0QsRUFFbUU7O0FBRWxFOUIsVUFBTUUsYUFBTixDQUFxQkMsV0FBckI7O0FBRUFXLGlCQUFhYixJQUFiLENBQW1CRCxNQUFNN0MsTUFBTixDQUFhb0MsUUFBaEM7QUFDQXdCLG1CQUFlZCxJQUFmLENBQXFCRCxNQUFNN0MsTUFBTixDQUFhNkUsVUFBbEM7QUFDQUosa0JBQWMsS0FBZDs7QUFFQSxXQUFPLElBQVA7QUFFQTs7QUFFRCxVQUFPLEtBQVA7QUFFQSxHQWpGRDtBQW1GQSxFQTlGYSxFQUFkOztBQWdHQSxNQUFLSyxPQUFMLEdBQWUsWUFBVzs7QUFFekJqQyxRQUFNM0QsVUFBTixDQUFpQm5NLG1CQUFqQixDQUFzQyxhQUF0QyxFQUFxRGdTLGFBQXJELEVBQW9FLEtBQXBFO0FBQ0FsQyxRQUFNM0QsVUFBTixDQUFpQm5NLG1CQUFqQixDQUFzQyxXQUF0QyxFQUFtRGlTLFdBQW5ELEVBQWdFLEtBQWhFO0FBQ0FuQyxRQUFNM0QsVUFBTixDQUFpQm5NLG1CQUFqQixDQUFzQyxPQUF0QyxFQUErQ2tTLFlBQS9DLEVBQTZELEtBQTdEOztBQUVBcEMsUUFBTTNELFVBQU4sQ0FBaUJuTSxtQkFBakIsQ0FBc0MsWUFBdEMsRUFBb0RtUyxZQUFwRCxFQUFrRSxLQUFsRTtBQUNBckMsUUFBTTNELFVBQU4sQ0FBaUJuTSxtQkFBakIsQ0FBc0MsVUFBdEMsRUFBa0RvUyxVQUFsRCxFQUE4RCxLQUE5RDtBQUNBdEMsUUFBTTNELFVBQU4sQ0FBaUJuTSxtQkFBakIsQ0FBc0MsV0FBdEMsRUFBbURxUyxXQUFuRCxFQUFnRSxLQUFoRTs7QUFFQTVmLFdBQVN1TixtQkFBVCxDQUE4QixXQUE5QixFQUEyQ3NTLFdBQTNDLEVBQXdELEtBQXhEO0FBQ0E3ZixXQUFTdU4sbUJBQVQsQ0FBOEIsU0FBOUIsRUFBeUN1UyxTQUF6QyxFQUFvRCxLQUFwRDs7QUFFQTlnQixTQUFPdU8sbUJBQVAsQ0FBNEIsU0FBNUIsRUFBdUM4SyxTQUF2QyxFQUFrRCxLQUFsRDs7QUFFQTtBQUVBLEVBakJEOztBQW1CQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSWdGLFFBQVEsSUFBWjs7QUFFQSxLQUFJRyxjQUFjLEVBQUVqTyxNQUFNLFFBQVIsRUFBbEI7QUFDQSxLQUFJd1EsYUFBYSxFQUFFeFEsTUFBTSxPQUFSLEVBQWpCO0FBQ0EsS0FBSXlRLFdBQVcsRUFBRXpRLE1BQU0sS0FBUixFQUFmOztBQUVBLEtBQUltTyxRQUFRLEVBQUVDLE1BQU8sQ0FBRSxDQUFYLEVBQWNzQyxRQUFTLENBQXZCLEVBQTBCQyxPQUFRLENBQWxDLEVBQXFDMUQsS0FBTSxDQUEzQyxFQUE4QzJELGNBQWUsQ0FBN0QsRUFBZ0VDLGFBQWMsQ0FBOUUsRUFBaUZDLFdBQVksQ0FBN0YsRUFBWjs7QUFFQSxLQUFJNUMsUUFBUUMsTUFBTUMsSUFBbEI7O0FBRUEsS0FBSXdCLE1BQU0sUUFBVjs7QUFFQTtBQUNBLEtBQUluQyxZQUFZLElBQUlsRSxNQUFNd0gsU0FBVixFQUFoQjtBQUNBLEtBQUk1QixpQkFBaUIsSUFBSTVGLE1BQU13SCxTQUFWLEVBQXJCOztBQUVBLEtBQUl6QixRQUFRLENBQVo7QUFDQSxLQUFJQyxZQUFZLElBQUloRyxNQUFNNEIsT0FBVixFQUFoQjtBQUNBLEtBQUl1RSxjQUFjLEtBQWxCOztBQUVBLEtBQUlzQixjQUFjLElBQUl6SCxNQUFNMEgsT0FBVixFQUFsQjtBQUNBLEtBQUlDLFlBQVksSUFBSTNILE1BQU0wSCxPQUFWLEVBQWhCO0FBQ0EsS0FBSUUsY0FBYyxJQUFJNUgsTUFBTTBILE9BQVYsRUFBbEI7O0FBRUEsS0FBSUcsV0FBVyxJQUFJN0gsTUFBTTBILE9BQVYsRUFBZjtBQUNBLEtBQUlJLFNBQVMsSUFBSTlILE1BQU0wSCxPQUFWLEVBQWI7QUFDQSxLQUFJSyxXQUFXLElBQUkvSCxNQUFNMEgsT0FBVixFQUFmOztBQUVBLEtBQUlNLGFBQWEsSUFBSWhJLE1BQU0wSCxPQUFWLEVBQWpCO0FBQ0EsS0FBSU8sV0FBVyxJQUFJakksTUFBTTBILE9BQVYsRUFBZjtBQUNBLEtBQUlRLGFBQWEsSUFBSWxJLE1BQU0wSCxPQUFWLEVBQWpCOztBQUVBLFVBQVMvQixvQkFBVCxHQUFnQzs7QUFFL0IsU0FBTyxJQUFJemIsS0FBSzJCLEVBQVQsR0FBYyxFQUFkLEdBQW1CLEVBQW5CLEdBQXdCMFksTUFBTXhCLGVBQXJDO0FBRUE7O0FBRUQsVUFBU29GLFlBQVQsR0FBd0I7O0FBRXZCLFNBQU9qZSxLQUFLa0MsR0FBTCxDQUFVLElBQVYsRUFBZ0JtWSxNQUFNOUIsU0FBdEIsQ0FBUDtBQUVBOztBQUVELFVBQVNpRCxVQUFULENBQXFCM1osS0FBckIsRUFBNkI7O0FBRTVCNlosaUJBQWV2QixLQUFmLElBQXdCdFksS0FBeEI7QUFFQTs7QUFFRCxVQUFTcWMsUUFBVCxDQUFtQnJjLEtBQW5CLEVBQTJCOztBQUUxQjZaLGlCQUFlekIsR0FBZixJQUFzQnBZLEtBQXRCO0FBRUE7O0FBRUQsS0FBSXNjLFVBQVUsWUFBVzs7QUFFeEIsTUFBSWhSLElBQUksSUFBSTJJLE1BQU00QixPQUFWLEVBQVI7O0FBRUEsU0FBTyxTQUFTeUcsT0FBVCxDQUFrQkMsUUFBbEIsRUFBNEJDLFlBQTVCLEVBQTJDOztBQUVqRGxSLEtBQUVtUixtQkFBRixDQUF1QkQsWUFBdkIsRUFBcUMsQ0FBckMsRUFGaUQsQ0FFUDtBQUMxQ2xSLEtBQUVvUixjQUFGLENBQWtCLENBQUVILFFBQXBCOztBQUVBdEMsYUFBVTFJLEdBQVYsQ0FBZWpHLENBQWY7QUFFQSxHQVBEO0FBU0EsRUFiYSxFQUFkOztBQWVBLEtBQUlxUixRQUFRLFlBQVc7O0FBRXRCLE1BQUlyUixJQUFJLElBQUkySSxNQUFNNEIsT0FBVixFQUFSOztBQUVBLFNBQU8sU0FBUzhHLEtBQVQsQ0FBZ0JKLFFBQWhCLEVBQTBCQyxZQUExQixFQUF5Qzs7QUFFL0NsUixLQUFFbVIsbUJBQUYsQ0FBdUJELFlBQXZCLEVBQXFDLENBQXJDLEVBRitDLENBRUw7QUFDMUNsUixLQUFFb1IsY0FBRixDQUFrQkgsUUFBbEI7O0FBRUF0QyxhQUFVMUksR0FBVixDQUFlakcsQ0FBZjtBQUVBLEdBUEQ7QUFTQSxFQWJXLEVBQVo7O0FBZUE7QUFDQSxLQUFJc1IsTUFBTSxZQUFXOztBQUVwQixNQUFJN0QsU0FBUyxJQUFJOUUsTUFBTTRCLE9BQVYsRUFBYjs7QUFFQSxTQUFPLFNBQVMrRyxHQUFULENBQWVDLE1BQWYsRUFBdUJDLE1BQXZCLEVBQWdDOztBQUV0QyxPQUFJQyxVQUFVdkUsTUFBTTNELFVBQU4sS0FBcUIxWixRQUFyQixHQUFnQ3FkLE1BQU0zRCxVQUFOLENBQWlCQyxJQUFqRCxHQUF3RDBELE1BQU0zRCxVQUE1RTs7QUFFQSxPQUFLMkQsTUFBTTdDLE1BQU4sWUFBd0IxQixNQUFNK0ksaUJBQW5DLEVBQXVEOztBQUV0RDtBQUNBLFFBQUlqRixXQUFXUyxNQUFNN0MsTUFBTixDQUFhb0MsUUFBNUI7QUFDQWdCLFdBQU9OLElBQVAsQ0FBYVYsUUFBYixFQUF3QnlCLEdBQXhCLENBQTZCaEIsTUFBTTVDLE1BQW5DO0FBQ0EsUUFBSXFILGlCQUFpQmxFLE9BQU8xYixNQUFQLEVBQXJCOztBQUVBO0FBQ0E0ZixzQkFBa0I5ZSxLQUFLK2UsR0FBTCxDQUFZMUUsTUFBTTdDLE1BQU4sQ0FBYXdILEdBQWIsR0FBbUIsQ0FBckIsR0FBMkJoZixLQUFLMkIsRUFBaEMsR0FBcUMsS0FBL0MsQ0FBbEI7O0FBRUE7QUFDQXdjLFlBQVMsSUFBSU8sTUFBSixHQUFhSSxjQUFiLEdBQThCRixRQUFRSyxZQUEvQyxFQUE2RDVFLE1BQU03QyxNQUFOLENBQWEwSCxNQUExRTtBQUNBVixVQUFPLElBQUlHLE1BQUosR0FBYUcsY0FBYixHQUE4QkYsUUFBUUssWUFBN0MsRUFBMkQ1RSxNQUFNN0MsTUFBTixDQUFhMEgsTUFBeEU7QUFFQSxJQWRELE1BY08sSUFBSzdFLE1BQU03QyxNQUFOLFlBQXdCMUIsTUFBTXFKLGtCQUFuQyxFQUF3RDs7QUFFOUQ7QUFDQWhCLFlBQVNPLFVBQVdyRSxNQUFNN0MsTUFBTixDQUFhNEgsS0FBYixHQUFxQi9FLE1BQU03QyxNQUFOLENBQWE2SCxJQUE3QyxJQUFzRGhGLE1BQU03QyxNQUFOLENBQWFzQyxJQUFuRSxHQUEwRThFLFFBQVFVLFdBQTNGLEVBQXdHakYsTUFBTTdDLE1BQU4sQ0FBYTBILE1BQXJIO0FBQ0FWLFVBQU9HLFVBQVd0RSxNQUFNN0MsTUFBTixDQUFhK0gsR0FBYixHQUFtQmxGLE1BQU03QyxNQUFOLENBQWFnSSxNQUEzQyxJQUFzRG5GLE1BQU03QyxNQUFOLENBQWFzQyxJQUFuRSxHQUEwRThFLFFBQVFLLFlBQXpGLEVBQXVHNUUsTUFBTTdDLE1BQU4sQ0FBYTBILE1BQXBIO0FBRUEsSUFOTSxNQU1BOztBQUVOO0FBQ0E1TSxZQUFRbU4sSUFBUixDQUFjLDhFQUFkO0FBQ0FwRixVQUFNM0IsU0FBTixHQUFrQixLQUFsQjtBQUVBO0FBRUQsR0FoQ0Q7QUFrQ0EsRUF0Q1MsRUFBVjs7QUF3Q0EsVUFBU2dILE9BQVQsQ0FBa0JDLFVBQWxCLEVBQStCOztBQUU5QixNQUFLdEYsTUFBTTdDLE1BQU4sWUFBd0IxQixNQUFNK0ksaUJBQW5DLEVBQXVEOztBQUV0RGhELFlBQVM4RCxVQUFUO0FBRUEsR0FKRCxNQUlPLElBQUt0RixNQUFNN0MsTUFBTixZQUF3QjFCLE1BQU1xSixrQkFBbkMsRUFBd0Q7O0FBRTlEOUUsU0FBTTdDLE1BQU4sQ0FBYXNDLElBQWIsR0FBb0I5WixLQUFLRCxHQUFMLENBQVVzYSxNQUFNdkMsT0FBaEIsRUFBeUI5WCxLQUFLRixHQUFMLENBQVV1YSxNQUFNdEMsT0FBaEIsRUFBeUJzQyxNQUFNN0MsTUFBTixDQUFhc0MsSUFBYixHQUFvQjZGLFVBQTdDLENBQXpCLENBQXBCO0FBQ0F0RixTQUFNN0MsTUFBTixDQUFhTixzQkFBYjtBQUNBK0UsaUJBQWMsSUFBZDtBQUVBLEdBTk0sTUFNQTs7QUFFTjNKLFdBQVFtTixJQUFSLENBQWMscUZBQWQ7QUFDQXBGLFNBQU0vQixVQUFOLEdBQW1CLEtBQW5CO0FBRUE7QUFFRDs7QUFFRCxVQUFTc0gsUUFBVCxDQUFtQkQsVUFBbkIsRUFBZ0M7O0FBRS9CLE1BQUt0RixNQUFNN0MsTUFBTixZQUF3QjFCLE1BQU0rSSxpQkFBbkMsRUFBdUQ7O0FBRXREaEQsWUFBUzhELFVBQVQ7QUFFQSxHQUpELE1BSU8sSUFBS3RGLE1BQU03QyxNQUFOLFlBQXdCMUIsTUFBTXFKLGtCQUFuQyxFQUF3RDs7QUFFOUQ5RSxTQUFNN0MsTUFBTixDQUFhc0MsSUFBYixHQUFvQjlaLEtBQUtELEdBQUwsQ0FBVXNhLE1BQU12QyxPQUFoQixFQUF5QjlYLEtBQUtGLEdBQUwsQ0FBVXVhLE1BQU10QyxPQUFoQixFQUF5QnNDLE1BQU03QyxNQUFOLENBQWFzQyxJQUFiLEdBQW9CNkYsVUFBN0MsQ0FBekIsQ0FBcEI7QUFDQXRGLFNBQU03QyxNQUFOLENBQWFOLHNCQUFiO0FBQ0ErRSxpQkFBYyxJQUFkO0FBRUEsR0FOTSxNQU1BOztBQUVOM0osV0FBUW1OLElBQVIsQ0FBYyxxRkFBZDtBQUNBcEYsU0FBTS9CLFVBQU4sR0FBbUIsS0FBbkI7QUFFQTtBQUVEOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxVQUFTdUgscUJBQVQsQ0FBZ0NqVyxLQUFoQyxFQUF3Qzs7QUFFdkM7O0FBRUEyVCxjQUFZcE0sR0FBWixDQUFpQnZILE1BQU1rVyxPQUF2QixFQUFnQ2xXLE1BQU1tVyxPQUF0QztBQUVBOztBQUVELFVBQVNDLG9CQUFULENBQStCcFcsS0FBL0IsRUFBdUM7O0FBRXRDOztBQUVBa1UsYUFBVzNNLEdBQVgsQ0FBZ0J2SCxNQUFNa1csT0FBdEIsRUFBK0JsVyxNQUFNbVcsT0FBckM7QUFFQTs7QUFFRCxVQUFTRSxrQkFBVCxDQUE2QnJXLEtBQTdCLEVBQXFDOztBQUVwQzs7QUFFQStULFdBQVN4TSxHQUFULENBQWN2SCxNQUFNa1csT0FBcEIsRUFBNkJsVyxNQUFNbVcsT0FBbkM7QUFFQTs7QUFFRCxVQUFTRyxxQkFBVCxDQUFnQ3RXLEtBQWhDLEVBQXdDOztBQUV2Qzs7QUFFQTZULFlBQVV0TSxHQUFWLENBQWV2SCxNQUFNa1csT0FBckIsRUFBOEJsVyxNQUFNbVcsT0FBcEM7QUFDQXJDLGNBQVl5QyxVQUFaLENBQXdCMUMsU0FBeEIsRUFBbUNGLFdBQW5DOztBQUVBLE1BQUlxQixVQUFVdkUsTUFBTTNELFVBQU4sS0FBcUIxWixRQUFyQixHQUFnQ3FkLE1BQU0zRCxVQUFOLENBQWlCQyxJQUFqRCxHQUF3RDBELE1BQU0zRCxVQUE1RTs7QUFFQTtBQUNBOEUsYUFBWSxJQUFJeGIsS0FBSzJCLEVBQVQsR0FBYytiLFlBQVl2YixDQUExQixHQUE4QnljLFFBQVFVLFdBQXRDLEdBQW9EakYsTUFBTTVCLFdBQXRFOztBQUVBO0FBQ0F5RixXQUFVLElBQUlsZSxLQUFLMkIsRUFBVCxHQUFjK2IsWUFBWXRiLENBQTFCLEdBQThCd2MsUUFBUUssWUFBdEMsR0FBcUQ1RSxNQUFNNUIsV0FBckU7O0FBRUE4RSxjQUFZakQsSUFBWixDQUFrQm1ELFNBQWxCOztBQUVBcEQsUUFBTWhELE1BQU47QUFFQTs7QUFFRCxVQUFTK0ksb0JBQVQsQ0FBK0J4VyxLQUEvQixFQUF1Qzs7QUFFdEM7O0FBRUFtVSxXQUFTNU0sR0FBVCxDQUFjdkgsTUFBTWtXLE9BQXBCLEVBQTZCbFcsTUFBTW1XLE9BQW5DOztBQUVBL0IsYUFBV21DLFVBQVgsQ0FBdUJwQyxRQUF2QixFQUFpQ0QsVUFBakM7O0FBRUEsTUFBS0UsV0FBVzViLENBQVgsR0FBZSxDQUFwQixFQUF3Qjs7QUFFdkJzZCxXQUFTekIsY0FBVDtBQUVBLEdBSkQsTUFJTyxJQUFLRCxXQUFXNWIsQ0FBWCxHQUFlLENBQXBCLEVBQXdCOztBQUU5QndkLFlBQVUzQixjQUFWO0FBRUE7O0FBRURILGFBQVd4RCxJQUFYLENBQWlCeUQsUUFBakI7O0FBRUExRCxRQUFNaEQsTUFBTjtBQUVBOztBQUVELFVBQVNnSixrQkFBVCxDQUE2QnpXLEtBQTdCLEVBQXFDOztBQUVwQzs7QUFFQWdVLFNBQU96TSxHQUFQLENBQVl2SCxNQUFNa1csT0FBbEIsRUFBMkJsVyxNQUFNbVcsT0FBakM7O0FBRUFsQyxXQUFTc0MsVUFBVCxDQUFxQnZDLE1BQXJCLEVBQTZCRCxRQUE3Qjs7QUFFQWMsTUFBS1osU0FBUzFiLENBQWQsRUFBaUIwYixTQUFTemIsQ0FBMUI7O0FBRUF1YixXQUFTckQsSUFBVCxDQUFlc0QsTUFBZjs7QUFFQXZELFFBQU1oRCxNQUFOO0FBRUE7O0FBRUQsVUFBU2lKLGFBQVQsQ0FBd0IxVyxLQUF4QixFQUFnQzs7QUFFL0I7O0FBRUE7O0FBRUQsVUFBUzJXLGdCQUFULENBQTJCM1csS0FBM0IsRUFBbUM7O0FBRWxDOztBQUVBLE1BQUtBLE1BQU0rVSxNQUFOLEdBQWUsQ0FBcEIsRUFBd0I7O0FBRXZCaUIsWUFBVTNCLGNBQVY7QUFFQSxHQUpELE1BSU8sSUFBS3JVLE1BQU0rVSxNQUFOLEdBQWUsQ0FBcEIsRUFBd0I7O0FBRTlCZSxXQUFTekIsY0FBVDtBQUVBOztBQUVENUQsUUFBTWhELE1BQU47QUFFQTs7QUFFRCxVQUFTbUosYUFBVCxDQUF3QjVXLEtBQXhCLEVBQWdDOztBQUUvQjs7QUFFQSxVQUFTQSxNQUFNRyxPQUFmOztBQUVDLFFBQUtzUSxNQUFNcGMsSUFBTixDQUFXK2EsRUFBaEI7QUFDQ3lGLFFBQUssQ0FBTCxFQUFRcEUsTUFBTTFCLFdBQWQ7QUFDQTBCLFVBQU1oRCxNQUFOO0FBQ0E7O0FBRUQsUUFBS2dELE1BQU1wYyxJQUFOLENBQVdpYixNQUFoQjtBQUNDdUYsUUFBSyxDQUFMLEVBQVEsQ0FBRXBFLE1BQU0xQixXQUFoQjtBQUNBMEIsVUFBTWhELE1BQU47QUFDQTs7QUFFRCxRQUFLZ0QsTUFBTXBjLElBQU4sQ0FBVzhhLElBQWhCO0FBQ0MwRixRQUFLcEUsTUFBTTFCLFdBQVgsRUFBd0IsQ0FBeEI7QUFDQTBCLFVBQU1oRCxNQUFOO0FBQ0E7O0FBRUQsUUFBS2dELE1BQU1wYyxJQUFOLENBQVdnYixLQUFoQjtBQUNDd0YsUUFBSyxDQUFFcEUsTUFBTTFCLFdBQWIsRUFBMEIsQ0FBMUI7QUFDQTBCLFVBQU1oRCxNQUFOO0FBQ0E7O0FBcEJGO0FBd0JBOztBQUVELFVBQVNvSixzQkFBVCxDQUFpQzdXLEtBQWpDLEVBQXlDOztBQUV4Qzs7QUFFQTJULGNBQVlwTSxHQUFaLENBQWlCdkgsTUFBTThXLE9BQU4sQ0FBZSxDQUFmLEVBQW1CQyxLQUFwQyxFQUEyQy9XLE1BQU04VyxPQUFOLENBQWUsQ0FBZixFQUFtQkUsS0FBOUQ7QUFFQTs7QUFFRCxVQUFTQyxxQkFBVCxDQUFnQ2pYLEtBQWhDLEVBQXdDOztBQUV2Qzs7QUFFQSxNQUFJa1gsS0FBS2xYLE1BQU04VyxPQUFOLENBQWUsQ0FBZixFQUFtQkMsS0FBbkIsR0FBMkIvVyxNQUFNOFcsT0FBTixDQUFlLENBQWYsRUFBbUJDLEtBQXZEO0FBQ0EsTUFBSUksS0FBS25YLE1BQU04VyxPQUFOLENBQWUsQ0FBZixFQUFtQkUsS0FBbkIsR0FBMkJoWCxNQUFNOFcsT0FBTixDQUFlLENBQWYsRUFBbUJFLEtBQXZEOztBQUVBLE1BQUl4QyxXQUFXcGUsS0FBS2lDLElBQUwsQ0FBVzZlLEtBQUtBLEVBQUwsR0FBVUMsS0FBS0EsRUFBMUIsQ0FBZjs7QUFFQWpELGFBQVczTSxHQUFYLENBQWdCLENBQWhCLEVBQW1CaU4sUUFBbkI7QUFFQTs7QUFFRCxVQUFTNEMsbUJBQVQsQ0FBOEJwWCxLQUE5QixFQUFzQzs7QUFFckM7O0FBRUErVCxXQUFTeE0sR0FBVCxDQUFjdkgsTUFBTThXLE9BQU4sQ0FBZSxDQUFmLEVBQW1CQyxLQUFqQyxFQUF3Qy9XLE1BQU04VyxPQUFOLENBQWUsQ0FBZixFQUFtQkUsS0FBM0Q7QUFFQTs7QUFFRCxVQUFTSyxxQkFBVCxDQUFnQ3JYLEtBQWhDLEVBQXdDOztBQUV2Qzs7QUFFQTZULFlBQVV0TSxHQUFWLENBQWV2SCxNQUFNOFcsT0FBTixDQUFlLENBQWYsRUFBbUJDLEtBQWxDLEVBQXlDL1csTUFBTThXLE9BQU4sQ0FBZSxDQUFmLEVBQW1CRSxLQUE1RDtBQUNBbEQsY0FBWXlDLFVBQVosQ0FBd0IxQyxTQUF4QixFQUFtQ0YsV0FBbkM7O0FBRUEsTUFBSXFCLFVBQVV2RSxNQUFNM0QsVUFBTixLQUFxQjFaLFFBQXJCLEdBQWdDcWQsTUFBTTNELFVBQU4sQ0FBaUJDLElBQWpELEdBQXdEMEQsTUFBTTNELFVBQTVFOztBQUVBO0FBQ0E4RSxhQUFZLElBQUl4YixLQUFLMkIsRUFBVCxHQUFjK2IsWUFBWXZiLENBQTFCLEdBQThCeWMsUUFBUVUsV0FBdEMsR0FBb0RqRixNQUFNNUIsV0FBdEU7O0FBRUE7QUFDQXlGLFdBQVUsSUFBSWxlLEtBQUsyQixFQUFULEdBQWMrYixZQUFZdGIsQ0FBMUIsR0FBOEJ3YyxRQUFRSyxZQUF0QyxHQUFxRDVFLE1BQU01QixXQUFyRTs7QUFFQThFLGNBQVlqRCxJQUFaLENBQWtCbUQsU0FBbEI7O0FBRUFwRCxRQUFNaEQsTUFBTjtBQUVBOztBQUVELFVBQVM2SixvQkFBVCxDQUErQnRYLEtBQS9CLEVBQXVDOztBQUV0Qzs7QUFFQSxNQUFJa1gsS0FBS2xYLE1BQU04VyxPQUFOLENBQWUsQ0FBZixFQUFtQkMsS0FBbkIsR0FBMkIvVyxNQUFNOFcsT0FBTixDQUFlLENBQWYsRUFBbUJDLEtBQXZEO0FBQ0EsTUFBSUksS0FBS25YLE1BQU04VyxPQUFOLENBQWUsQ0FBZixFQUFtQkUsS0FBbkIsR0FBMkJoWCxNQUFNOFcsT0FBTixDQUFlLENBQWYsRUFBbUJFLEtBQXZEOztBQUVBLE1BQUl4QyxXQUFXcGUsS0FBS2lDLElBQUwsQ0FBVzZlLEtBQUtBLEVBQUwsR0FBVUMsS0FBS0EsRUFBMUIsQ0FBZjs7QUFFQWhELFdBQVM1TSxHQUFULENBQWMsQ0FBZCxFQUFpQmlOLFFBQWpCOztBQUVBSixhQUFXbUMsVUFBWCxDQUF1QnBDLFFBQXZCLEVBQWlDRCxVQUFqQzs7QUFFQSxNQUFLRSxXQUFXNWIsQ0FBWCxHQUFlLENBQXBCLEVBQXdCOztBQUV2QndkLFlBQVUzQixjQUFWO0FBRUEsR0FKRCxNQUlPLElBQUtELFdBQVc1YixDQUFYLEdBQWUsQ0FBcEIsRUFBd0I7O0FBRTlCc2QsV0FBU3pCLGNBQVQ7QUFFQTs7QUFFREgsYUFBV3hELElBQVgsQ0FBaUJ5RCxRQUFqQjs7QUFFQTFELFFBQU1oRCxNQUFOO0FBRUE7O0FBRUQsVUFBUzhKLGtCQUFULENBQTZCdlgsS0FBN0IsRUFBcUM7O0FBRXBDOztBQUVBZ1UsU0FBT3pNLEdBQVAsQ0FBWXZILE1BQU04VyxPQUFOLENBQWUsQ0FBZixFQUFtQkMsS0FBL0IsRUFBc0MvVyxNQUFNOFcsT0FBTixDQUFlLENBQWYsRUFBbUJFLEtBQXpEOztBQUVBL0MsV0FBU3NDLFVBQVQsQ0FBcUJ2QyxNQUFyQixFQUE2QkQsUUFBN0I7O0FBRUFjLE1BQUtaLFNBQVMxYixDQUFkLEVBQWlCMGIsU0FBU3piLENBQTFCOztBQUVBdWIsV0FBU3JELElBQVQsQ0FBZXNELE1BQWY7O0FBRUF2RCxRQUFNaEQsTUFBTjtBQUVBOztBQUVELFVBQVMrSixjQUFULENBQXlCeFgsS0FBekIsRUFBaUMsQ0FJaEM7O0FBRkE7O0FBSUQ7QUFDQTtBQUNBOztBQUVBLFVBQVM0UyxXQUFULENBQXNCNVMsS0FBdEIsRUFBOEI7O0FBRTdCLE1BQUt5USxNQUFNN0QsT0FBTixLQUFrQixLQUF2QixFQUErQjs7QUFFL0I1TSxRQUFNVCxjQUFOOztBQUVBLE1BQUtTLE1BQU15WCxNQUFOLEtBQWlCaEgsTUFBTWxCLFlBQU4sQ0FBbUJDLEtBQXpDLEVBQWlEOztBQUVoRCxPQUFLaUIsTUFBTTdCLFlBQU4sS0FBdUIsS0FBNUIsRUFBb0M7O0FBRXBDcUgseUJBQXVCalcsS0FBdkI7O0FBRUE2USxXQUFRQyxNQUFNdUMsTUFBZDtBQUVBLEdBUkQsTUFRTyxJQUFLclQsTUFBTXlYLE1BQU4sS0FBaUJoSCxNQUFNbEIsWUFBTixDQUFtQkcsSUFBekMsRUFBZ0Q7O0FBRXRELE9BQUtlLE1BQU0vQixVQUFOLEtBQXFCLEtBQTFCLEVBQWtDOztBQUVsQzBILHdCQUFzQnBXLEtBQXRCOztBQUVBNlEsV0FBUUMsTUFBTXdDLEtBQWQ7QUFFQSxHQVJNLE1BUUEsSUFBS3RULE1BQU15WCxNQUFOLEtBQWlCaEgsTUFBTWxCLFlBQU4sQ0FBbUJLLEdBQXpDLEVBQStDOztBQUVyRCxPQUFLYSxNQUFNM0IsU0FBTixLQUFvQixLQUF6QixFQUFpQzs7QUFFakN1SCxzQkFBb0JyVyxLQUFwQjs7QUFFQTZRLFdBQVFDLE1BQU1sQixHQUFkO0FBRUE7O0FBRUQsTUFBS2lCLFVBQVVDLE1BQU1DLElBQXJCLEVBQTRCOztBQUUzQjNkLFlBQVNpTixnQkFBVCxDQUEyQixXQUEzQixFQUF3QzRTLFdBQXhDLEVBQXFELEtBQXJEO0FBQ0E3ZixZQUFTaU4sZ0JBQVQsQ0FBMkIsU0FBM0IsRUFBc0M2UyxTQUF0QyxFQUFpRCxLQUFqRDs7QUFFQXpDLFNBQU1FLGFBQU4sQ0FBcUJ3QyxVQUFyQjtBQUVBO0FBRUQ7O0FBRUQsVUFBU0YsV0FBVCxDQUFzQmpULEtBQXRCLEVBQThCOztBQUU3QixNQUFLeVEsTUFBTTdELE9BQU4sS0FBa0IsS0FBdkIsRUFBK0I7O0FBRS9CNU0sUUFBTVQsY0FBTjs7QUFFQSxNQUFLc1IsVUFBVUMsTUFBTXVDLE1BQXJCLEVBQThCOztBQUU3QixPQUFLNUMsTUFBTTdCLFlBQU4sS0FBdUIsS0FBNUIsRUFBb0M7O0FBRXBDMEgseUJBQXVCdFcsS0FBdkI7QUFFQSxHQU5ELE1BTU8sSUFBSzZRLFVBQVVDLE1BQU13QyxLQUFyQixFQUE2Qjs7QUFFbkMsT0FBSzdDLE1BQU0vQixVQUFOLEtBQXFCLEtBQTFCLEVBQWtDOztBQUVsQzhILHdCQUFzQnhXLEtBQXRCO0FBRUEsR0FOTSxNQU1BLElBQUs2USxVQUFVQyxNQUFNbEIsR0FBckIsRUFBMkI7O0FBRWpDLE9BQUthLE1BQU0zQixTQUFOLEtBQW9CLEtBQXpCLEVBQWlDOztBQUVqQzJILHNCQUFvQnpXLEtBQXBCO0FBRUE7QUFFRDs7QUFFRCxVQUFTa1QsU0FBVCxDQUFvQmxULEtBQXBCLEVBQTRCOztBQUUzQixNQUFLeVEsTUFBTTdELE9BQU4sS0FBa0IsS0FBdkIsRUFBK0I7O0FBRS9COEosZ0JBQWUxVyxLQUFmOztBQUVBNU0sV0FBU3VOLG1CQUFULENBQThCLFdBQTlCLEVBQTJDc1MsV0FBM0MsRUFBd0QsS0FBeEQ7QUFDQTdmLFdBQVN1TixtQkFBVCxDQUE4QixTQUE5QixFQUF5Q3VTLFNBQXpDLEVBQW9ELEtBQXBEOztBQUVBekMsUUFBTUUsYUFBTixDQUFxQnlDLFFBQXJCOztBQUVBdkMsVUFBUUMsTUFBTUMsSUFBZDtBQUVBOztBQUVELFVBQVM4QixZQUFULENBQXVCN1MsS0FBdkIsRUFBK0I7O0FBRTlCLE1BQUt5USxNQUFNN0QsT0FBTixLQUFrQixLQUFsQixJQUEyQjZELE1BQU0vQixVQUFOLEtBQXFCLEtBQWhELElBQTJEbUMsVUFBVUMsTUFBTUMsSUFBaEIsSUFBd0JGLFVBQVVDLE1BQU11QyxNQUF4RyxFQUFtSDs7QUFFbkhyVCxRQUFNVCxjQUFOO0FBQ0FTLFFBQU0wWCxlQUFOOztBQUVBZixtQkFBa0IzVyxLQUFsQjs7QUFFQXlRLFFBQU1FLGFBQU4sQ0FBcUJ3QyxVQUFyQixFQVQ4QixDQVNLO0FBQ25DMUMsUUFBTUUsYUFBTixDQUFxQnlDLFFBQXJCO0FBRUE7O0FBRUQsVUFBUzNILFNBQVQsQ0FBb0J6TCxLQUFwQixFQUE0Qjs7QUFFM0IsTUFBS3lRLE1BQU03RCxPQUFOLEtBQWtCLEtBQWxCLElBQTJCNkQsTUFBTXZCLFVBQU4sS0FBcUIsS0FBaEQsSUFBeUR1QixNQUFNM0IsU0FBTixLQUFvQixLQUFsRixFQUEwRjs7QUFFMUY4SCxnQkFBZTVXLEtBQWY7QUFFQTs7QUFFRCxVQUFTOFMsWUFBVCxDQUF1QjlTLEtBQXZCLEVBQStCOztBQUU5QixNQUFLeVEsTUFBTTdELE9BQU4sS0FBa0IsS0FBdkIsRUFBK0I7O0FBRS9CLFVBQVM1TSxNQUFNOFcsT0FBTixDQUFjeGhCLE1BQXZCOztBQUVDLFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUttYixNQUFNN0IsWUFBTixLQUF1QixLQUE1QixFQUFvQzs7QUFFcENpSSwyQkFBd0I3VyxLQUF4Qjs7QUFFQTZRLFlBQVFDLE1BQU15QyxZQUFkOztBQUVBOztBQUVELFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUs5QyxNQUFNL0IsVUFBTixLQUFxQixLQUExQixFQUFrQzs7QUFFbEN1SSwwQkFBdUJqWCxLQUF2Qjs7QUFFQTZRLFlBQVFDLE1BQU0wQyxXQUFkOztBQUVBOztBQUVELFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUsvQyxNQUFNM0IsU0FBTixLQUFvQixLQUF6QixFQUFpQzs7QUFFakNzSSx3QkFBcUJwWCxLQUFyQjs7QUFFQTZRLFlBQVFDLE1BQU0yQyxTQUFkOztBQUVBOztBQUVEOztBQUVDNUMsWUFBUUMsTUFBTUMsSUFBZDs7QUFsQ0Y7O0FBc0NBLE1BQUtGLFVBQVVDLE1BQU1DLElBQXJCLEVBQTRCOztBQUUzQk4sU0FBTUUsYUFBTixDQUFxQndDLFVBQXJCO0FBRUE7QUFFRDs7QUFFRCxVQUFTSCxXQUFULENBQXNCaFQsS0FBdEIsRUFBOEI7O0FBRTdCLE1BQUt5USxNQUFNN0QsT0FBTixLQUFrQixLQUF2QixFQUErQjs7QUFFL0I1TSxRQUFNVCxjQUFOO0FBQ0FTLFFBQU0wWCxlQUFOOztBQUVBLFVBQVMxWCxNQUFNOFcsT0FBTixDQUFjeGhCLE1BQXZCOztBQUVDLFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUttYixNQUFNN0IsWUFBTixLQUF1QixLQUE1QixFQUFvQztBQUNwQyxRQUFLaUMsVUFBVUMsTUFBTXlDLFlBQXJCLEVBQW9DLE9BSHJDLENBRzZDOztBQUU1QzhELDBCQUF1QnJYLEtBQXZCOztBQUVBOztBQUVELFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUt5USxNQUFNL0IsVUFBTixLQUFxQixLQUExQixFQUFrQztBQUNsQyxRQUFLbUMsVUFBVUMsTUFBTTBDLFdBQXJCLEVBQW1DLE9BSHBDLENBRzRDOztBQUUzQzhELHlCQUFzQnRYLEtBQXRCOztBQUVBOztBQUVELFFBQUssQ0FBTDtBQUFROztBQUVQLFFBQUt5USxNQUFNM0IsU0FBTixLQUFvQixLQUF6QixFQUFpQztBQUNqQyxRQUFLK0IsVUFBVUMsTUFBTTJDLFNBQXJCLEVBQWlDLE9BSGxDLENBRzBDOztBQUV6QzhELHVCQUFvQnZYLEtBQXBCOztBQUVBOztBQUVEOztBQUVDNlEsWUFBUUMsTUFBTUMsSUFBZDs7QUEvQkY7QUFtQ0E7O0FBRUQsVUFBU2dDLFVBQVQsQ0FBcUIvUyxLQUFyQixFQUE2Qjs7QUFFNUIsTUFBS3lRLE1BQU03RCxPQUFOLEtBQWtCLEtBQXZCLEVBQStCOztBQUUvQjRLLGlCQUFnQnhYLEtBQWhCOztBQUVBeVEsUUFBTUUsYUFBTixDQUFxQnlDLFFBQXJCOztBQUVBdkMsVUFBUUMsTUFBTUMsSUFBZDtBQUVBOztBQUVELFVBQVM0QixhQUFULENBQXdCM1MsS0FBeEIsRUFBZ0M7O0FBRS9CQSxRQUFNVCxjQUFOO0FBRUE7O0FBRUQ7O0FBRUFrUixPQUFNM0QsVUFBTixDQUFpQnpNLGdCQUFqQixDQUFtQyxhQUFuQyxFQUFrRHNTLGFBQWxELEVBQWlFLEtBQWpFOztBQUVBbEMsT0FBTTNELFVBQU4sQ0FBaUJ6TSxnQkFBakIsQ0FBbUMsV0FBbkMsRUFBZ0R1UyxXQUFoRCxFQUE2RCxLQUE3RDtBQUNBbkMsT0FBTTNELFVBQU4sQ0FBaUJ6TSxnQkFBakIsQ0FBbUMsT0FBbkMsRUFBNEN3UyxZQUE1QyxFQUEwRCxLQUExRDs7QUFFQXBDLE9BQU0zRCxVQUFOLENBQWlCek0sZ0JBQWpCLENBQW1DLFlBQW5DLEVBQWlEeVMsWUFBakQsRUFBK0QsS0FBL0Q7QUFDQXJDLE9BQU0zRCxVQUFOLENBQWlCek0sZ0JBQWpCLENBQW1DLFVBQW5DLEVBQStDMFMsVUFBL0MsRUFBMkQsS0FBM0Q7QUFDQXRDLE9BQU0zRCxVQUFOLENBQWlCek0sZ0JBQWpCLENBQW1DLFdBQW5DLEVBQWdEMlMsV0FBaEQsRUFBNkQsS0FBN0Q7O0FBRUE1Z0IsUUFBT2lPLGdCQUFQLENBQXlCLFNBQXpCLEVBQW9Db0wsU0FBcEMsRUFBK0MsS0FBL0M7O0FBRUE7O0FBRUEsTUFBS2dDLE1BQUw7QUFFQSxDQXgyQkQ7O0FBMDJCQXZCLE1BQU15QixhQUFOLENBQW9CclAsU0FBcEIsR0FBZ0NELE9BQU9zWixNQUFQLENBQWV6TCxNQUFNMEwsZUFBTixDQUFzQnRaLFNBQXJDLENBQWhDO0FBQ0E0TixNQUFNeUIsYUFBTixDQUFvQnJQLFNBQXBCLENBQThCcE0sV0FBOUIsR0FBNENnYSxNQUFNeUIsYUFBbEQ7O0FBRUF0UCxPQUFPd1osZ0JBQVAsQ0FBeUIzTCxNQUFNeUIsYUFBTixDQUFvQnJQLFNBQTdDLEVBQXdEOztBQUV2RHdaLFNBQVE7O0FBRVB4USxPQUFLLFlBQVk7O0FBRWhCb0IsV0FBUW1OLElBQVIsQ0FBYywwREFBZDtBQUNBLFVBQU8sS0FBS2hJLE1BQVo7QUFFQTs7QUFQTSxFQUYrQzs7QUFhdkQ7O0FBRUFrSyxTQUFROztBQUVQelEsT0FBSyxZQUFZOztBQUVoQm9CLFdBQVFtTixJQUFSLENBQWMsNEVBQWQ7QUFDQSxVQUFPLENBQUUsS0FBS25ILFVBQWQ7QUFFQSxHQVBNOztBQVNQbkgsT0FBSyxVQUFXdFMsS0FBWCxFQUFtQjs7QUFFdkJ5VCxXQUFRbU4sSUFBUixDQUFjLDRFQUFkO0FBQ0EsUUFBS25ILFVBQUwsR0FBa0IsQ0FBRXpaLEtBQXBCO0FBRUE7O0FBZE0sRUFmK0M7O0FBaUN2RCtpQixXQUFVOztBQUVUMVEsT0FBSyxZQUFZOztBQUVoQm9CLFdBQVFtTixJQUFSLENBQWMsZ0ZBQWQ7QUFDQSxVQUFPLENBQUUsS0FBS2pILFlBQWQ7QUFFQSxHQVBROztBQVNUckgsT0FBSyxVQUFXdFMsS0FBWCxFQUFtQjs7QUFFdkJ5VCxXQUFRbU4sSUFBUixDQUFjLGdGQUFkO0FBQ0EsUUFBS2pILFlBQUwsR0FBb0IsQ0FBRTNaLEtBQXRCO0FBRUE7O0FBZFEsRUFqQzZDOztBQW1EdkRnakIsUUFBTzs7QUFFTjNRLE9BQUssWUFBWTs7QUFFaEJvQixXQUFRbU4sSUFBUixDQUFjLDBFQUFkO0FBQ0EsVUFBTyxDQUFFLEtBQUsvRyxTQUFkO0FBRUEsR0FQSzs7QUFTTnZILE9BQUssVUFBV3RTLEtBQVgsRUFBbUI7O0FBRXZCeVQsV0FBUW1OLElBQVIsQ0FBYywwRUFBZDtBQUNBLFFBQUsvRyxTQUFMLEdBQWlCLENBQUU3WixLQUFuQjtBQUVBOztBQWRLLEVBbkRnRDs7QUFxRXZEaWpCLFNBQVE7O0FBRVA1USxPQUFLLFlBQVk7O0FBRWhCb0IsV0FBUW1OLElBQVIsQ0FBYyw0RUFBZDtBQUNBLFVBQU8sQ0FBRSxLQUFLM0csVUFBZDtBQUVBLEdBUE07O0FBU1AzSCxPQUFLLFVBQVd0UyxLQUFYLEVBQW1COztBQUV2QnlULFdBQVFtTixJQUFSLENBQWMsNEVBQWQ7QUFDQSxRQUFLM0csVUFBTCxHQUFrQixDQUFFamEsS0FBcEI7QUFFQTs7QUFkTSxFQXJFK0M7O0FBdUZ2RGtqQixlQUFlOztBQUVkN1EsT0FBSyxZQUFZOztBQUVoQm9CLFdBQVFtTixJQUFSLENBQWMscUZBQWQ7QUFDQSxVQUFPLENBQUUsS0FBS3JILGFBQWQ7QUFFQSxHQVBhOztBQVNkakgsT0FBSyxVQUFXdFMsS0FBWCxFQUFtQjs7QUFFdkJ5VCxXQUFRbU4sSUFBUixDQUFjLHFGQUFkO0FBQ0EsUUFBS3JILGFBQUwsR0FBcUIsQ0FBRXZaLEtBQXZCO0FBRUE7O0FBZGEsRUF2RndDOztBQXlHdkRtakIsdUJBQXVCOztBQUV0QjlRLE9BQUssWUFBWTs7QUFFaEJvQixXQUFRbU4sSUFBUixDQUFjLDBGQUFkO0FBQ0EsVUFBTyxLQUFLcEgsYUFBWjtBQUVBLEdBUHFCOztBQVN0QmxILE9BQUssVUFBV3RTLEtBQVgsRUFBbUI7O0FBRXZCeVQsV0FBUW1OLElBQVIsQ0FBYywwRkFBZDtBQUNBLFFBQUtwSCxhQUFMLEdBQXFCeFosS0FBckI7QUFFQTs7QUFkcUI7O0FBekdnQyxDQUF4RCxFOzs7Ozs7O0FDNTNCQTtBQUFBOzs7Ozs7OztBQVFBOztBQUVBOztBQUVlLE1BQU1vakIsV0FBTixTQUEwQiw0REFBMUIsQ0FBK0I7O0FBRTVDbm1CLGdCQUFjOztBQUVaOztBQUVBLFNBQUs0VyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUt3UCxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFYO0FBQ0EsU0FBS3BMLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7O0FBRUEsU0FBS29MLFdBQUwsR0FBbUIsS0FBS0MsWUFBTCxDQUFrQm5sQixJQUFsQixDQUF1QixJQUF2QixDQUFuQjtBQUNBLFNBQUtvbEIsTUFBTCxHQUFjLEtBQUtDLE9BQUwsQ0FBYXJsQixJQUFiLENBQWtCLElBQWxCLENBQWQ7QUFDQSxTQUFLc2xCLFVBQUwsR0FBa0IsS0FBS0MsV0FBTCxDQUFpQnZsQixJQUFqQixDQUFzQixJQUF0QixDQUFsQjtBQUNBLFNBQUttYSxNQUFMLEdBQWMsS0FBS3FMLE9BQUwsQ0FBYXhsQixJQUFiLENBQWtCLElBQWxCLENBQWQ7O0FBRUEsU0FBS2tsQixXQUFMO0FBRUQ7O0FBRUQ7Ozs7QUFJQUMsaUJBQWM7O0FBRVosU0FBS3RMLEtBQUwsR0FBYSxJQUFJakIsTUFBTTZNLEtBQVYsRUFBYixDQUZZLENBRW9COztBQUVoQyxTQUFLM0wsTUFBTCxHQUFjLElBQUlsQixNQUFNK0ksaUJBQVYsQ0FBNEIsRUFBNUIsRUFBZ0M3aUIsT0FBT2tILFVBQVAsR0FBa0JsSCxPQUFPbUgsV0FBekQsRUFBc0UsQ0FBdEUsRUFBeUUsSUFBekUsQ0FBZDtBQUNBLFNBQUs2VCxNQUFMLENBQVk0QyxRQUFaLENBQXFCelgsQ0FBckIsR0FBeUIsQ0FBekI7QUFDQSxTQUFLNlUsTUFBTCxDQUFZNEMsUUFBWixDQUFxQnhYLENBQXJCLEdBQXlCLENBQXpCO0FBQ0EsU0FBSzRVLE1BQUwsQ0FBWTRDLFFBQVosQ0FBcUJnSixDQUFyQixHQUF5QixJQUF6QjtBQUNGLFNBQUs1TCxNQUFMLENBQVlnRixNQUFaLENBQW1CLElBQUlsRyxNQUFNNEIsT0FBVixDQUFrQixFQUFsQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUFuQjs7QUFFRSxTQUFLbUwsUUFBTCxHQUFnQixJQUFJL00sTUFBTWdOLHVCQUFWLEVBQWhCO0FBQ0EsU0FBS0QsUUFBTCxDQUFjdkksSUFBZCxDQUFtQixJQUFJeEUsTUFBTWlOLG9CQUFWLENBQStCLENBQS9CLEVBQWtDLENBQWxDLENBQW5COztBQUdBLFFBQUlDLGdCQUFnQixLQUFwQjtBQUNBLFFBQUlDLGlCQUFpQixJQUFJQyxZQUFKLENBQWlCRixnQkFBZ0IsQ0FBakMsQ0FBckI7QUFDQSxTQUFLLElBQUl6a0IsSUFBSSxDQUFSLEVBQVc0a0IsS0FBSyxDQUFoQixFQUFtQmxmLElBQUkrZSxhQUE1QixFQUEyQ3prQixJQUFJMEYsQ0FBL0MsRUFBa0QxRixLQUFLNGtCLE1BQU0sQ0FBN0QsRUFBZ0U7QUFDOURGLHFCQUFlRSxLQUFLLENBQXBCLElBQXlCbmpCLEtBQUtILE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBN0M7QUFDQW9qQixxQkFBZUUsS0FBSyxDQUFwQixJQUF5Qm5qQixLQUFLSCxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLENBQTdDO0FBQ0FvakIscUJBQWVFLEtBQUssQ0FBcEIsSUFBeUJuakIsS0FBS0gsTUFBTCxLQUFnQixDQUFoQixHQUFvQixDQUE3QztBQUNEO0FBQ0QsU0FBS2dqQixRQUFMLENBQWNPLFlBQWQsQ0FBMkIsV0FBM0IsRUFBd0MsSUFBSXROLE1BQU11Tix3QkFBVixDQUFtQ0osY0FBbkMsRUFBbUQsQ0FBbkQsRUFBc0QsQ0FBdEQsQ0FBeEM7QUFDQSxTQUFLSyxRQUFMLEdBQWdCLElBQUl4TixNQUFNeU4saUJBQVYsQ0FBNEI7QUFDMUNDLGdCQUFVO0FBQ1IvaUIsYUFBSyxFQUFFNUIsT0FBTyxJQUFJaVgsTUFBTTJOLGFBQVYsR0FBMEJDLElBQTFCLENBQStCLDRDQUEvQixDQUFULEVBREc7QUFFUnZkLGNBQU0sRUFBRXRILE9BQU8sR0FBVDtBQUZFLE9BRGdDO0FBSzFDOGtCLG9CQUFjLG1CQUFBL25CLENBQVEsRUFBUixDQUw0QjtBQU0xQ2dvQixzQkFBZ0IsbUJBQUFob0IsQ0FBUSxFQUFSLENBTjBCO0FBTzFDaW9CLGlCQUFXLElBUCtCO0FBUTFDQyxrQkFBWTtBQVI4QixLQUE1QixDQUFoQjtBQVVBLFNBQUtDLElBQUwsR0FBWSxJQUFJak8sTUFBTWtPLElBQVYsQ0FBZSxLQUFLbkIsUUFBcEIsRUFBOEIsS0FBS1MsUUFBbkMsQ0FBWjtBQUNBLFNBQUtTLElBQUwsQ0FBVWxJLEtBQVYsQ0FBZ0IxSyxHQUFoQixDQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUE4QixHQUE5QjtBQUNBLFNBQUs0RixLQUFMLENBQVczRCxHQUFYLENBQWUsS0FBSzJRLElBQXBCO0FBR0Q7O0FBRUQ7Ozs7QUFJQXhCLFlBQVM7QUFDUCxXQUFPLEtBQUt4TCxLQUFMLENBQVdrTixRQUFYLENBQW9CL2tCLE1BQXBCLElBQThCLENBQXJDLEVBQXdDO0FBQ3RDLFdBQUs2WCxLQUFMLENBQVd1TCxNQUFYLENBQWtCLEtBQUt2TCxLQUFMLENBQVdrTixRQUFYLENBQW9CLENBQXBCLENBQWxCO0FBQ0EsVUFBSSxLQUFLbE4sS0FBTCxDQUFXa04sUUFBWCxDQUFvQixDQUFwQixLQUEwQm5PLE1BQU1rTyxJQUFwQyxFQUEwQztBQUN4QyxhQUFLak4sS0FBTCxDQUFXa04sUUFBWCxDQUFvQixDQUFwQixFQUF1QnBCLFFBQXZCLENBQWdDdkcsT0FBaEM7QUFDQSxhQUFLdkYsS0FBTCxDQUFXa04sUUFBWCxDQUFvQixDQUFwQixFQUF1QlgsUUFBdkIsQ0FBZ0NoSCxPQUFoQztBQUNEO0FBQ0Y7QUFDSDs7QUFFQTs7OztBQUlBbUcsZ0JBQWE7QUFDWCxTQUFLUCxNQUFMLEdBQWMsS0FBZDtBQUNGOztBQUdBOzs7O0FBSUFRLFlBQVM7QUFDUCxTQUFLaFEsS0FBTCxJQUFjLElBQWQ7QUFDQTtBQUNBLFFBQUksS0FBS3dQLE1BQUwsSUFBZSxLQUFuQixFQUEwQjtBQUN4QjtBQUNBLFdBQUtJLE1BQUw7QUFDQSxVQUFJLEtBQUt2TCxLQUFMLENBQVdrTixRQUFYLENBQW9CL2tCLE1BQXBCLElBQThCLENBQWxDLEVBQXFDO0FBQ25DLGFBQUtpakIsR0FBTCxHQUFXLElBQVg7QUFDRDtBQUNGO0FBQ0QsUUFBSWhjLE9BQU8rZCxZQUFZdmtCLEdBQVosS0FBb0IsTUFBL0I7QUFDQSxTQUFLMmpCLFFBQUwsQ0FBY0UsUUFBZCxDQUF1QnJkLElBQXZCLENBQTRCdEgsS0FBNUIsR0FBb0NzSCxJQUFwQztBQUNBLFNBQUs0ZCxJQUFMLENBQVVJLFFBQVYsQ0FBbUJoaUIsQ0FBbkIsR0FBdUJnRSxPQUFPLEdBQTlCO0FBQ0EsU0FBSzRkLElBQUwsQ0FBVUksUUFBVixDQUFtQi9oQixDQUFuQixHQUF1QitELE9BQU8sR0FBOUI7QUFDQTtBQUNBO0FBQ0EsUUFBSWllLE1BQU0sTUFBTXBrQixLQUFLb1gsR0FBTCxDQUFTLEtBQUsxRSxLQUFkLElBQXVCLEdBQXZDO0FBQ0EsU0FBS3NFLE1BQUwsQ0FBWTRDLFFBQVosQ0FBcUJ6WCxDQUFyQixHQUF5Qm5DLEtBQUtvWCxHQUFMLENBQVMsS0FBSzFFLEtBQUwsR0FBYSxHQUF0QixJQUE2QjFTLEtBQUtxa0IsR0FBTCxDQUFTLEtBQUszUixLQUFMLEdBQWEsR0FBdEIsQ0FBN0IsR0FBMEQwUixHQUFuRjtBQUNBLFNBQUtwTixNQUFMLENBQVk0QyxRQUFaLENBQXFCeFgsQ0FBckIsR0FBeUJwQyxLQUFLcWtCLEdBQUwsQ0FBUyxLQUFLM1IsS0FBTCxHQUFhLEdBQXRCLElBQTZCMFIsR0FBdEQ7QUFDQSxTQUFLcE4sTUFBTCxDQUFZNEMsUUFBWixDQUFxQmdKLENBQXJCLEdBQXlCNWlCLEtBQUtvWCxHQUFMLENBQVMsS0FBSzFFLEtBQUwsR0FBYSxHQUF0QixJQUE2QjFTLEtBQUtvWCxHQUFMLENBQVMsS0FBSzFFLEtBQUwsR0FBYSxHQUF0QixDQUE3QixHQUEwRDBSLEdBQW5GLENBbkJPLENBbUJpRjtBQUN4RixTQUFLcE4sTUFBTCxDQUFZZ0YsTUFBWixDQUFtQixJQUFJbEcsTUFBTTRCLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsTUFBTTFYLEtBQUtxa0IsR0FBTCxDQUFTLEtBQUszUixLQUFMLEdBQWEsS0FBdEIsQ0FBOUIsQ0FBbkI7QUFHRDs7QUFsSDJDLEM7Ozs7Ozs7O0FDWjlDLHdDQUF3QyxrREFBa0QsZ0NBQWdDLHFCQUFxQiwwQkFBMEIsb0JBQW9CLDJCQUEyQixtQkFBbUIsdUJBQXVCLGVBQWUsaUVBQWlFLG1GQUFtRiwyRkFBMkYscUJBQXFCLG9DQUFvQyx5Q0FBeUMsZUFBZSxrREFBa0QsR0FBRyxDOzs7Ozs7QUNBdHFCLHdDQUF3QywyQ0FBMkMsbUJBQW1CLHVCQUF1QiwrREFBK0QscUJBQXFCLHlDQUF5Qyx5Q0FBeUMseUNBQXlDLHdDQUF3QyxHQUFHLDBCQUEwQixpQ0FBaUMsdURBQXVELHFDQUFxQyxHQUFHLGVBQWUsZ0RBQWdELHFHQUFxRyx3REFBd0QsMENBQTBDLEdBQUcsQzs7Ozs7Ozs7QUNBMXhCO0FBQUE7Ozs7Ozs7O0FBUUE7O0FBR0E7O0FBRUE7O0FBRWUsTUFBTTRSLE9BQU4sU0FBc0IsNERBQXRCLENBQTJCOztBQUV4Q3hvQixnQkFBYzs7QUFFWjs7QUFFQSxTQUFLaWIsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUt1TixJQUFMLEdBQVksSUFBWjs7QUFFQSxTQUFLQyxNQUFMLEdBQWMsSUFBSTFPLE1BQU0yTixhQUFWLEVBQWQ7QUFDQSxTQUFLZ0IsVUFBTCxHQUFrQixLQUFLRCxNQUFMLENBQVlkLElBQVosQ0FBa0IsMENBQWxCLENBQWxCOztBQUVBLFNBQUtoUixLQUFMLEdBQWEsQ0FBYjs7QUFFQSxTQUFLZ1MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7O0FBRUEsU0FBS0MsS0FBTCxHQUFhLElBQWI7O0FBRUEsU0FBS3ROLE1BQUwsR0FBYyxLQUFLdU4sT0FBTCxDQUFhM25CLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZDs7QUFFQSxTQUFLa2xCLFdBQUwsR0FBbUIsS0FBS0MsWUFBTCxDQUFrQm5sQixJQUFsQixDQUF1QixJQUF2QixDQUFuQjtBQUNBLFNBQUttYSxNQUFMLEdBQWMsS0FBS3FMLE9BQUwsQ0FBYXhsQixJQUFiLENBQWtCLElBQWxCLENBQWQ7O0FBRUEsU0FBSzRuQixXQUFMLEdBQW1CLEtBQUtDLFlBQUwsQ0FBa0I3bkIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbkI7O0FBRUEsU0FBS2tsQixXQUFMOztBQUVBOztBQUVBLFNBQUs0QyxTQUFMO0FBRUQ7O0FBRURBLGNBQVc7O0FBRVQsUUFBSUMsR0FBSixFQUFTQyxRQUFULEVBQW1CQyxXQUFuQixFQUFnQ0MsMkJBQWhDLEVBQTZEQyxPQUE3RDs7QUFFQXJwQixXQUFPc3BCLFlBQVAsR0FBc0J0cEIsT0FBT3NwQixZQUFQLElBQXVCdHBCLE9BQU91cEIsa0JBQXBEO0FBQ0FOLFVBQU0sSUFBSUssWUFBSixFQUFOOztBQUVBSixlQUFXRCxJQUFJTyxjQUFKLEVBQVg7QUFDQUwsa0JBQWMsSUFBSU0sVUFBSixDQUFlUCxTQUFTUSxpQkFBeEIsQ0FBZDs7QUFFQU4sa0NBQThCLFlBQVc7QUFDdkNGLGVBQVNTLG9CQUFULENBQThCUixXQUE5QjtBQUNBLGFBQU9BLFlBQVlTLE1BQVosQ0FBbUIsVUFBU0MsUUFBVCxFQUFtQkMsT0FBbkIsRUFBNEI7QUFDaEQsZUFBT0QsV0FBV0MsT0FBbEI7QUFDRCxPQUZFLElBRUVaLFNBQVNRLGlCQUZsQjtBQUdELEtBTEQ7O0FBT0F2VyxjQUFVNFcsWUFBVixDQUF1QkMsWUFBdkIsQ0FBb0MsRUFBQ0MsT0FBTyxJQUFSLEVBQXBDLEVBQ0tDLElBREwsQ0FDV0MsTUFBRCxJQUFZO0FBQ2hCbnFCLGFBQU9vcUIsY0FBUCxHQUF3QkQsTUFBeEI7QUFDQWxCLFVBQUlvQix1QkFBSixDQUE0QkYsTUFBNUI7QUFDQTtBQURBLE9BRUtHLE9BRkwsQ0FFYXBCLFFBRmI7QUFHRCxLQU5MLEVBT0txQixLQVBMLENBT1lDLEdBQUQsSUFBUztBQUNkeHFCLGFBQU9zVyxPQUFQLENBQWVlLEdBQWYsQ0FBbUJtVCxJQUFJQyxPQUF2QjtBQUNELEtBVEw7O0FBV0E7QUFDQSxTQUFLL0IsUUFBTCxHQUFnQjFuQixTQUFTMHBCLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBaEI7O0FBRUE7QUFDQXJCLGNBQVUsWUFBVztBQUNuQjtBQUNBLFdBQUtWLFdBQUwsR0FBbUIza0IsS0FBS0MsS0FBTCxDQUFXbWxCLDZCQUFYLENBQW5COztBQUVBemEsNEJBQXNCMGEsT0FBdEI7QUFDRCxLQUxTLENBS1Jub0IsSUFMUSxDQUtILElBTEcsQ0FBVjs7QUFRQW1vQjtBQUNEOztBQUdEOzs7O0FBSUFoRCxpQkFBYzs7QUFHWixTQUFLdEwsS0FBTCxHQUFhLElBQUlqQixNQUFNNk0sS0FBVixFQUFiLENBSFksQ0FHb0I7O0FBRWhDLFNBQUtpQyxLQUFMLEdBQWEsSUFBSTlPLE1BQU02USxLQUFWLEVBQWI7QUFDQSxVQUFNQyxPQUFNLEVBQVo7QUFDQSxVQUFNbG1CLE1BQU0sRUFBWjtBQUNBLFNBQUssSUFBSXlCLElBQUksQ0FBYixFQUFnQkEsS0FBS3pCLEdBQXJCLEVBQTBCeUIsR0FBMUIsRUFBK0I7QUFDN0IsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLEtBQUsxQixHQUFyQixFQUEwQjBCLEdBQTFCLEVBQStCO0FBQzdCLGFBQUssSUFBSXdnQixJQUFJLENBQWIsRUFBZ0JBLEtBQUtsaUIsR0FBckIsRUFBMEJraUIsR0FBMUIsRUFBZ0M7QUFDOUIsZUFBSzJCLElBQUwsR0FBWSxJQUFJek8sTUFBTWtPLElBQVYsQ0FDUixJQUFJbE8sTUFBTStRLFdBQVYsQ0FBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsQ0FEUSxFQUVSLElBQUkvUSxNQUFNZ1IsbUJBQVYsQ0FBOEI7QUFDNUJDLG1CQUFPLFFBRHFCO0FBRTVCdG1CLGlCQUFLLEtBQUtna0IsVUFGa0I7QUFHNUJ1QyxxQkFBUyxLQUFLdkMsVUFIYztBQUk1QndDLHVCQUFXLElBSmlCO0FBSzVCQyxzQkFBVSxRQUxrQjtBQU01QkMsdUJBQVUsRUFOa0I7QUFPNUJDLHFCQUFTO0FBUG1CLFdBQTlCLENBRlEsQ0FBWjtBQVlBLGVBQUs3QyxJQUFMLENBQVUzSyxRQUFWLENBQW1CekksR0FBbkIsQ0FDSSxDQUFDaFAsSUFBSXpCLE1BQU0sQ0FBWCxJQUFnQmttQixJQURwQixFQUVJLENBQUN4a0IsSUFBSTFCLE1BQU0sQ0FBWCxJQUFnQmttQixJQUZwQixFQUdJLENBQUNoRSxJQUFJbGlCLE1BQU0sQ0FBWCxJQUFnQmttQixJQUhwQjs7QUFNQSxlQUFLaEMsS0FBTCxDQUFXeFIsR0FBWCxDQUFlLEtBQUttUixJQUFwQjtBQUNEO0FBQ0Y7QUFDRjtBQUNELFNBQUt4TixLQUFMLENBQVczRCxHQUFYLENBQWUsS0FBS3dSLEtBQXBCOztBQUVBLFVBQU15QyxhQUFhLElBQUl2UixNQUFNd1IsVUFBVixDQUFxQixRQUFyQixDQUFuQjtBQUNBRCxlQUFXek4sUUFBWCxDQUFvQnpJLEdBQXBCLENBQXdCLEdBQXhCLEVBQTZCLEdBQTdCLEVBQWtDLEdBQWxDO0FBQ0EsU0FBSzRGLEtBQUwsQ0FBVzNELEdBQVgsQ0FBZWlVLFVBQWY7O0FBRUEsU0FBS3JRLE1BQUwsR0FBYyxJQUFJbEIsTUFBTStJLGlCQUFWLENBQTRCLEVBQTVCLEVBQWdDN2lCLE9BQU9rSCxVQUFQLEdBQWtCbEgsT0FBT21ILFdBQXpELEVBQXNFLEdBQXRFLEVBQTJFLElBQTNFLENBQWQ7QUFDQSxTQUFLNlQsTUFBTCxDQUFZNEMsUUFBWixDQUFxQmdKLENBQXJCLEdBQXlCLEdBQXpCO0FBRUQ7O0FBR0RtQyxlQUFhd0MsUUFBYixFQUNBOztBQUVFLFNBQUszQyxLQUFMLENBQVcvSSxLQUFYLENBQWlCMVosQ0FBakIsR0FBcUIsSUFBSW9sQixXQUFTLEdBQWxDO0FBQ0EsU0FBSzNDLEtBQUwsQ0FBVy9JLEtBQVgsQ0FBaUJ6WixDQUFqQixHQUFxQixJQUFJbWxCLFdBQVMsR0FBbEM7QUFDQSxTQUFLM0MsS0FBTCxDQUFXL0ksS0FBWCxDQUFpQitHLENBQWpCLEdBQXFCLElBQUkyRSxXQUFTLEdBQWxDO0FBRUQ7O0FBR0QxQyxZQUFVO0FBQ1IsU0FBS0QsS0FBTCxDQUFXVCxRQUFYLENBQW9CaGlCLENBQXBCLElBQXlCLElBQXpCO0FBQ0EsU0FBS3lpQixLQUFMLENBQVdULFFBQVgsQ0FBb0IvaEIsQ0FBcEIsSUFBeUIsSUFBekI7QUFDQSxTQUFLd2lCLEtBQUwsQ0FBV1QsUUFBWCxDQUFvQnZCLENBQXBCLElBQXlCLElBQXpCO0FBQ0EsU0FBS2dDLEtBQUwsQ0FBVzRDLFFBQVgsQ0FBb0IsVUFBU3BvQixHQUFULEVBQWM7QUFDaEMsVUFBSUEsT0FBTyxLQUFLd2xCLEtBQWhCLEVBQXVCO0FBQ3JCeGxCLFlBQUkra0IsUUFBSixDQUFhaGlCLENBQWIsSUFBa0IsSUFBbEI7QUFDQS9DLFlBQUkra0IsUUFBSixDQUFhL2hCLENBQWIsSUFBa0IsSUFBbEI7QUFDQWhELFlBQUkra0IsUUFBSixDQUFhdkIsQ0FBYixJQUFrQixJQUFsQjtBQUNEO0FBQ0YsS0FObUIsQ0FNbEIxbEIsSUFOa0IsQ0FNYixJQU5hLENBQXBCO0FBUUQ7O0FBR0Q7Ozs7QUFJQXdsQixZQUFTOztBQUVQLFNBQUtvQyxXQUFMLENBQWlCLEtBQUtILFdBQXRCOztBQUVBLFNBQUtyTixNQUFMO0FBRUQ7O0FBbkt1QyxDOzs7Ozs7Ozs7QUNmMUM7Ozs7Ozs7O0FBU0E7O0FBRWUsTUFBTTJPLEtBQU4sQ0FBWTs7QUFFekJucUIsZ0JBQWM7O0FBRVosU0FBSzRvQixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixJQUFuQjs7QUFFQSxTQUFLUywyQkFBTCxHQUFtQyxJQUFuQzs7QUFFQSxTQUFLQyxPQUFMLEdBQWUsS0FBS29DLFFBQUwsQ0FBY3ZxQixJQUFkLENBQW1CLElBQW5CLENBQWY7O0FBRUEsU0FBS3dxQixNQUFMLEdBQWMsS0FBS0MsT0FBTCxDQUFhenFCLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZDs7QUFFQSxTQUFLOG5CLFNBQUw7QUFFRDs7QUFFRDs7O0FBR0FBLGNBQVc7O0FBRVQsUUFBSUMsR0FBSixFQUFTQyxRQUFULEVBQW1CQyxXQUFuQjs7QUFFQW5wQixXQUFPc3BCLFlBQVAsR0FBc0J0cEIsT0FBT3NwQixZQUFQLElBQXVCdHBCLE9BQU91cEIsa0JBQXBEO0FBQ0FOLFVBQU0sSUFBSUssWUFBSixFQUFOOztBQUVBSixlQUFXRCxJQUFJTyxjQUFKLEVBQVg7QUFDQUwsa0JBQWMsSUFBSU0sVUFBSixDQUFlUCxTQUFTUSxpQkFBeEIsQ0FBZDs7QUFFQSxTQUFLTiwyQkFBTCxHQUFtQyxZQUFXO0FBQzVDRixlQUFTUyxvQkFBVCxDQUE4QlIsV0FBOUI7QUFDQSxhQUFPQSxZQUFZUyxNQUFaLENBQW1CLFVBQVNDLFFBQVQsRUFBbUJDLE9BQW5CLEVBQTRCO0FBQ2hELGVBQU9ELFdBQVdDLE9BQWxCO0FBQ0QsT0FGRSxJQUVFWixTQUFTUSxpQkFGbEI7QUFHRCxLQUxEOztBQU9BdlcsY0FBVTRXLFlBQVYsQ0FBdUJDLFlBQXZCLENBQW9DLEVBQUNDLE9BQU8sSUFBUixFQUFwQyxFQUNLQyxJQURMLENBQ1dDLE1BQUQsSUFBWTtBQUNoQm5xQixhQUFPb3FCLGNBQVAsR0FBd0JELE1BQXhCO0FBQ0FsQixVQUFJb0IsdUJBQUosQ0FBNEJGLE1BQTVCO0FBQ0E7QUFEQSxPQUVLRyxPQUZMLENBRWFwQixRQUZiO0FBR0QsS0FOTCxFQU9LcUIsS0FQTCxDQU9ZQyxHQUFELElBQVM7QUFDZHhxQixhQUFPc1csT0FBUCxDQUFlZSxHQUFmLENBQW1CbVQsSUFBSUMsT0FBdkI7QUFDRCxLQVRMOztBQVdBLFNBQUtwQixPQUFMO0FBRUQ7O0FBRUQ7Ozs7QUFJQW9DLGFBQVU7QUFDUjtBQUNBLFNBQUsvQyxRQUFMLEdBQWdCMW5CLFNBQVMwcEIsY0FBVCxDQUF3QixRQUF4QixDQUFoQjs7QUFFQTtBQUNBLFNBQUtoQyxRQUFMLENBQWNrRCxTQUFkLEdBQTBCNW5CLEtBQUtDLEtBQUwsQ0FBVyxLQUFLbWxCLDJCQUFMLEVBQVgsQ0FBMUI7QUFDQSxTQUFLVCxXQUFMLEdBQW1CM2tCLEtBQUtDLEtBQUwsQ0FBVyxLQUFLbWxCLDJCQUFMLEVBQVgsQ0FBbkI7O0FBRUF6YSwwQkFBc0IsS0FBSzBhLE9BQTNCOztBQUVBLFdBQU8sS0FBS1YsV0FBWjtBQUNEOztBQUVEZ0QsWUFBUzs7QUFFUCxXQUFPLEtBQUtoRCxXQUFaO0FBRUQ7O0FBekV3QixDOzs7Ozs7Ozs7QUNYM0I7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBOztBQUVBOztBQUVlLE1BQU1rRCxPQUFOLFNBQXNCLDREQUF0QixDQUEyQjs7QUFFeEMvckIsZ0JBQWM7O0FBRVo7O0FBRUEsU0FBS2liLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLNFAsSUFBTCxHQUFZLENBQVo7QUFDQSxTQUFLa0IsSUFBTCxHQUFZLElBQVosQ0FQWSxDQU9NOztBQUVsQixTQUFLcEQsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7O0FBRUE7QUFDQSxTQUFLL0ksTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLbU0sSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEdBQXRCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QixFQUF2QjtBQUNBLFNBQUtsbkIsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLbW5CLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixDQUFuQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBZDs7QUFFQSxTQUFLQyxNQUFMLEdBQWMsSUFBZDs7QUFFQSxTQUFLM1QsTUFBTCxHQUFjLElBQWQ7O0FBRUEsU0FBS2pDLEtBQUwsR0FBYSxDQUFiOztBQUVBLFNBQUs2VixjQUFMLEdBQXNCLEtBQUtDLGVBQUwsQ0FBcUJ0ckIsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdEI7QUFDQSxTQUFLdXJCLG9CQUFMLEdBQTRCLEtBQUtDLHFCQUFMLENBQTJCeHJCLElBQTNCLENBQWdDLElBQWhDLENBQTVCO0FBQ0EsU0FBS3lyQixVQUFMLEdBQWtCLEtBQUtDLFdBQUwsQ0FBaUIxckIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbEI7O0FBRUEsU0FBSzJyQixhQUFMLEdBQXFCLEtBQUtDLGNBQUwsQ0FBb0I1ckIsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBckI7O0FBR0EsU0FBS2tsQixXQUFMLEdBQW1CLEtBQUtDLFlBQUwsQ0FBa0JubEIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbkI7QUFDQSxTQUFLbWEsTUFBTCxHQUFjLEtBQUtxTCxPQUFMLENBQWF4bEIsSUFBYixDQUFrQixJQUFsQixDQUFkOztBQUVBLFNBQUtrbEIsV0FBTDs7QUFFQSxTQUFLNEMsU0FBTDtBQUVEOztBQUdEQSxjQUFXOztBQUVULFFBQUlDLEdBQUosRUFBU0MsUUFBVCxFQUFtQkMsV0FBbkIsRUFBZ0NDLDJCQUFoQyxFQUE2REMsT0FBN0Q7O0FBRUFycEIsV0FBT3NwQixZQUFQLEdBQXNCdHBCLE9BQU9zcEIsWUFBUCxJQUF1QnRwQixPQUFPdXBCLGtCQUFwRDtBQUNBTixVQUFNLElBQUlLLFlBQUosRUFBTjs7QUFFQUosZUFBV0QsSUFBSU8sY0FBSixFQUFYO0FBQ0FMLGtCQUFjLElBQUlNLFVBQUosQ0FBZVAsU0FBU1EsaUJBQXhCLENBQWQ7O0FBRUFOLGtDQUE4QixZQUFXO0FBQ3ZDRixlQUFTUyxvQkFBVCxDQUE4QlIsV0FBOUI7QUFDQSxhQUFPQSxZQUFZUyxNQUFaLENBQW1CLFVBQVNDLFFBQVQsRUFBbUJDLE9BQW5CLEVBQTRCO0FBQ2hELGVBQU9ELFdBQVdDLE9BQWxCO0FBQ0QsT0FGRSxJQUVFWixTQUFTUSxpQkFGbEI7QUFHRCxLQUxEOztBQU9BdlcsY0FBVTRXLFlBQVYsQ0FBdUJDLFlBQXZCLENBQW9DLEVBQUNDLE9BQU8sSUFBUixFQUFwQyxFQUNLQyxJQURMLENBQ1dDLE1BQUQsSUFBWTtBQUNoQm5xQixhQUFPb3FCLGNBQVAsR0FBd0JELE1BQXhCO0FBQ0FsQixVQUFJb0IsdUJBQUosQ0FBNEJGLE1BQTVCO0FBQ0E7QUFEQSxPQUVLRyxPQUZMLENBRWFwQixRQUZiO0FBR0QsS0FOTCxFQU9LcUIsS0FQTCxDQU9ZQyxHQUFELElBQVM7QUFDZHhxQixhQUFPc1csT0FBUCxDQUFlZSxHQUFmLENBQW1CbVQsSUFBSUMsT0FBdkI7QUFDRCxLQVRMOztBQVdBO0FBQ0EsU0FBSy9CLFFBQUwsR0FBZ0IxbkIsU0FBUzBwQixjQUFULENBQXdCLFFBQXhCLENBQWhCOztBQUVBO0FBQ0FyQixjQUFVLFlBQVc7QUFDbkI7QUFDQSxXQUFLVixXQUFMLEdBQW1CM2tCLEtBQUtDLEtBQUwsQ0FBV21sQiw2QkFBWCxDQUFuQjs7QUFFQXphLDRCQUFzQjBhLE9BQXRCO0FBQ0QsS0FMUyxDQUtSbm9CLElBTFEsQ0FLSCxJQUxHLENBQVY7O0FBT0E7QUFDQW1vQjtBQUNEOztBQUVEO0FBQ0FtRCxvQkFBa0I7O0FBRWhCLFNBQUs3VCxNQUFMLEdBQWMzWCxTQUFTK3JCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLFNBQUtwVSxNQUFMLENBQVloTSxLQUFaLEdBQW9CLEVBQXBCO0FBQ0EsU0FBS2dNLE1BQUwsQ0FBWTlMLE1BQVosR0FBcUIsRUFBckI7O0FBRUEsVUFBTW1nQixVQUFVLEtBQUtyVSxNQUFMLENBQVlzVSxVQUFaLENBQXVCLElBQXZCLENBQWhCO0FBQ0EsVUFBTUMsV0FBV0YsUUFBUUcsb0JBQVIsQ0FBNkIsS0FBS3hVLE1BQUwsQ0FBWWhNLEtBQVosR0FBb0IsQ0FBakQsRUFBb0QsS0FBS2dNLE1BQUwsQ0FBWTlMLE1BQVosR0FBcUIsQ0FBekUsRUFBNEUsQ0FBNUUsRUFBK0UsS0FBSzhMLE1BQUwsQ0FBWWhNLEtBQVosR0FBb0IsQ0FBbkcsRUFBc0csS0FBS2dNLE1BQUwsQ0FBWTlMLE1BQVosR0FBcUIsQ0FBM0gsRUFBOEgsS0FBSzhMLE1BQUwsQ0FBWWhNLEtBQVosR0FBb0IsQ0FBbEosQ0FBakI7QUFDQXVnQixhQUFTRSxZQUFULENBQXNCLENBQXRCLEVBQXlCLHFCQUF6QjtBQUNBRixhQUFTRSxZQUFULENBQXNCLEdBQXRCLEVBQTJCLG1CQUEzQjtBQUNBRixhQUFTRSxZQUFULENBQXNCLEdBQXRCLEVBQTJCLGdCQUEzQjtBQUNBRixhQUFTRSxZQUFULENBQXNCLENBQXRCLEVBQXlCLGVBQXpCOztBQUVBSixZQUFRSyxTQUFSLEdBQW9CSCxRQUFwQjtBQUNBRixZQUFRTSxRQUFSLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLEtBQUszVSxNQUFMLENBQVloTSxLQUFuQyxFQUEwQyxLQUFLZ00sTUFBTCxDQUFZOUwsTUFBdEQ7O0FBRUEsVUFBTTBnQixVQUFVLElBQUl6VCxNQUFNMFQsT0FBVixDQUFrQixLQUFLN1UsTUFBdkIsQ0FBaEI7QUFDQTRVLFlBQVFFLFdBQVIsR0FBc0IsSUFBdEI7QUFDQSxXQUFPRixPQUFQO0FBRUQ7O0FBRURiLHdCQUFzQmdCLElBQXRCLEVBQTRCO0FBQzFCLFNBQUtwQixNQUFMLEdBQWMsSUFBSXhTLE1BQU02VCxxQkFBVixDQUFnQztBQUM1QzVDLGFBQU8sUUFEcUM7QUFFNUM2QyxZQUFNLENBRnNDO0FBRzVDQyxtQkFBYSxJQUgrQjtBQUk1Q0MsZ0JBQVVoVSxNQUFNaVUsZ0JBSjRCO0FBSzVDdHBCLFdBQUssS0FBSzhuQixjQUFMO0FBTHVDLEtBQWhDLENBQWQ7O0FBUUEsVUFBTXlCLFNBQVMsSUFBSWxVLE1BQU1tVSxjQUFWLENBQXlCUCxJQUF6QixFQUErQixLQUFLcEIsTUFBcEMsQ0FBZjtBQUNBMEIsV0FBT0UsYUFBUCxHQUF1QixJQUF2QjtBQUNBLFdBQU9GLE1BQVA7QUFDRDs7QUFFRHBCLGNBQVljLElBQVosRUFBa0I7O0FBRWhCO0FBQ0EsVUFBTVMsZUFBZSxJQUFJclUsTUFBTXNVLGtCQUFWLENBQTZCLEVBQTdCLENBQXJCO0FBQ0FELGlCQUFhRSxJQUFiLEdBQW9CdlUsTUFBTXdVLFVBQTFCOztBQUVBO0FBQ0EsVUFBTXZHLE9BQU9qTyxNQUFNeVUsVUFBTixDQUFpQkMseUJBQWpCLENBQTJDZCxJQUEzQyxFQUFpRCxDQUFDUyxZQUFELENBQWpELENBQWI7O0FBRUEsV0FBT3BHLElBQVA7QUFDRDs7QUFFRDs7OztBQUlBMUIsaUJBQWM7O0FBRVosU0FBS3RMLEtBQUwsR0FBYSxJQUFJakIsTUFBTTZNLEtBQVYsRUFBYixDQUZZLENBRW9COztBQUVoQyxTQUFLM0wsTUFBTCxHQUFjLElBQUlsQixNQUFNK0ksaUJBQVYsQ0FBNEIsRUFBNUIsRUFBZ0M3aUIsT0FBT2tILFVBQVAsR0FBa0JsSCxPQUFPbUgsV0FBekQsRUFBc0UsQ0FBdEUsRUFBeUUsSUFBekUsQ0FBZDtBQUNBLFNBQUs2VCxNQUFMLENBQVk0QyxRQUFaLENBQXFCelgsQ0FBckIsR0FBeUIsQ0FBQyxFQUExQjtBQUNBLFNBQUs2VSxNQUFMLENBQVk0QyxRQUFaLENBQXFCeFgsQ0FBckIsR0FBeUIsRUFBekI7QUFDQSxTQUFLNFUsTUFBTCxDQUFZNEMsUUFBWixDQUFxQmdKLENBQXJCLEdBQXlCLEVBQXpCO0FBQ0EsU0FBSzVMLE1BQUwsQ0FBWWdGLE1BQVosQ0FBbUIsSUFBSWxHLE1BQU00QixPQUFWLENBQWtCLEVBQWxCLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLENBQW5COztBQUVBLFFBQUksS0FBS29RLElBQVQsRUFBZSxLQUFLL1EsS0FBTCxDQUFXdUwsTUFBWCxDQUFrQixLQUFLd0YsSUFBdkI7QUFDZjtBQUNBLFFBQUk0QixPQUFPLElBQUk1VCxNQUFNMlUsaUJBQVYsQ0FBNEIsS0FBSzdPLE1BQWpDLEVBQXlDLEtBQUttTSxJQUE5QyxFQUFvRC9uQixLQUFLa0YsS0FBTCxDQUFXLEtBQUs4aUIsY0FBaEIsQ0FBcEQsRUFBcUZob0IsS0FBS2tGLEtBQUwsQ0FBVyxLQUFLK2lCLGVBQWhCLENBQXJGLEVBQXVIam9CLEtBQUtrRixLQUFMLENBQVcsS0FBS25FLENBQWhCLENBQXZILEVBQTJJZixLQUFLa0YsS0FBTCxDQUFXLEtBQUtnakIsQ0FBaEIsQ0FBM0ksRUFBK0osS0FBS0MsV0FBcEssQ0FBWDs7QUFFQSxRQUFJLEtBQUtDLFdBQVQsRUFBc0I7QUFDcEIsV0FBS04sSUFBTCxHQUFZLEtBQUtXLG9CQUFMLENBQTBCaUIsSUFBMUIsQ0FBWjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUs1QixJQUFMLEdBQVksS0FBS2EsVUFBTCxDQUFnQmUsSUFBaEIsQ0FBWjtBQUNEOztBQUVELFNBQUszUyxLQUFMLENBQVczRCxHQUFYLENBQWUsS0FBSzBVLElBQXBCO0FBR0Q7O0FBRUQ7OztBQUdBNVMsY0FBWTtBQUNWLFNBQUtQLE1BQUwsQ0FBWWhNLEtBQVosR0FBb0IzTSxPQUFPa0gsVUFBM0I7QUFDQSxTQUFLeVIsTUFBTCxDQUFZOUwsTUFBWixHQUFxQjdNLE9BQU9tSCxXQUE1QjtBQUNEOztBQUVEMmxCLGlCQUFldkIsUUFBZixFQUNBOztBQUVFLFNBQUtPLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0IxWixDQUFoQixHQUFvQixJQUFJb2xCLFdBQVMsRUFBakM7QUFDQSxTQUFLTyxJQUFMLENBQVVqTSxLQUFWLENBQWdCelosQ0FBaEIsR0FBb0IsSUFBSW1sQixXQUFTLEVBQWpDO0FBQ0EsU0FBS08sSUFBTCxDQUFVak0sS0FBVixDQUFnQitHLENBQWhCLEdBQW9CLElBQUkyRSxXQUFTLEVBQWpDO0FBRUQ7O0FBR0Q7Ozs7QUFJQTdFLFlBQVM7O0FBRVAsU0FBS21HLGFBQUwsQ0FBbUIsS0FBS2xFLFdBQXhCOztBQUVBLFFBQUksS0FBSzBELE1BQVQsRUFBaUI7QUFDZixXQUFLUCxJQUFMLENBQVUzRCxRQUFWLENBQW1CaGlCLENBQW5CLEdBQXVCLEtBQUt5a0IsSUFBTCxJQUFhLEtBQXBDO0FBQ0EsV0FBS2tCLElBQUwsQ0FBVTNELFFBQVYsQ0FBbUIvaEIsQ0FBbkIsR0FBdUIsS0FBS3drQixJQUFMLElBQWEsS0FBcEM7QUFDQSxXQUFLa0IsSUFBTCxDQUFVM0QsUUFBVixDQUFtQnZCLENBQW5CLEdBQXVCLEtBQUtnRSxJQUFMLElBQWEsS0FBcEM7O0FBRUEsV0FBS2xVLEtBQUwsSUFBYyxJQUFkO0FBQ0EsVUFBSTBSLE1BQU0sS0FBS3BrQixLQUFLb1gsR0FBTCxDQUFTLEtBQUsxRSxLQUFkLElBQXVCLEVBQXRDO0FBQ0EsV0FBS3NFLE1BQUwsQ0FBWTRDLFFBQVosQ0FBcUJ6WCxDQUFyQixHQUF5Qm5DLEtBQUtvWCxHQUFMLENBQVMsS0FBSzFFLEtBQUwsR0FBYSxHQUF0QixJQUE2QjFTLEtBQUtxa0IsR0FBTCxDQUFTLEtBQUszUixLQUFMLEdBQWEsR0FBdEIsQ0FBN0IsR0FBMEQwUixHQUFuRjtBQUNBLFdBQUtwTixNQUFMLENBQVk0QyxRQUFaLENBQXFCeFgsQ0FBckIsR0FBeUJwQyxLQUFLcWtCLEdBQUwsQ0FBUyxLQUFLM1IsS0FBTCxHQUFhLEdBQXRCLElBQTZCMFIsR0FBdEQ7QUFDQSxXQUFLcE4sTUFBTCxDQUFZNEMsUUFBWixDQUFxQmdKLENBQXJCLEdBQXlCNWlCLEtBQUtvWCxHQUFMLENBQVMsS0FBSzFFLEtBQUwsR0FBYSxHQUF0QixJQUE2QjFTLEtBQUtvWCxHQUFMLENBQVMsS0FBSzFFLEtBQUwsR0FBYSxHQUF0QixDQUE3QixHQUEwRDBSLEdBQW5GO0FBQ0EsV0FBS3BOLE1BQUwsQ0FBWWdGLE1BQVosQ0FBbUIsSUFBSWxHLE1BQU00QixPQUFWLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLE1BQU0xWCxLQUFLcWtCLEdBQUwsQ0FBUyxLQUFLM1IsS0FBTCxHQUFhLEtBQXRCLENBQTlCLENBQW5CO0FBRUQ7QUFJRjs7QUFuTnVDLEM7Ozs7Ozs7Ozs7QUNiMUM7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBOztBQUVBOztBQUVlLE1BQU1nWSxPQUFOLFNBQXNCLDREQUF0QixDQUEyQjs7QUFFeEM1dUIsZ0JBQWM7O0FBRVo7O0FBRUEsU0FBSzZZLE1BQUwsR0FBYzNYLFNBQVMwcEIsY0FBVCxDQUF3QixNQUF4QixDQUFkOztBQUVBLFNBQUsvZCxLQUFMLEdBQWEzTCxTQUFTMlosSUFBVCxDQUFjMkksV0FBM0I7QUFDQSxTQUFLelcsTUFBTCxHQUFjN0wsU0FBUzJaLElBQVQsQ0FBY3NJLFlBQTVCOztBQUVBLFNBQUtqSSxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtwQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS21DLEtBQUwsR0FBYSxJQUFiOztBQUVBLFNBQUtxTCxXQUFMLEdBQW1CLEtBQUtDLFlBQUwsQ0FBa0JubEIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbkI7O0FBRUEsU0FBSytYLFFBQUwsR0FBZ0IsS0FBS0MsU0FBTCxDQUFlaFksSUFBZixDQUFvQixJQUFwQixDQUFoQjtBQUNGLFNBQUttYSxNQUFMLEdBQWMsS0FBS3FMLE9BQUwsQ0FBYXhsQixJQUFiLENBQWtCLElBQWxCLENBQWQ7QUFDQSxTQUFLeXRCLFdBQUwsR0FBbUIsS0FBS0MsWUFBTCxDQUFrQjF0QixJQUFsQixDQUF1QixJQUF2QixDQUFuQjs7QUFFQSxTQUFLMnRCLEtBQUwsR0FBYSxJQUFJLDhEQUFKLEVBQWIsQ0FuQmMsQ0FtQm1COztBQUVqQyxTQUFLOXVCLElBQUwsR0FyQmMsQ0FxQkQ7QUFFWjs7QUFFRDs7O0FBR0FBLFNBQU07O0FBRU4sU0FBS3FtQixXQUFMOztBQUVBLFNBQUt1SSxXQUFMO0FBRUM7O0FBSUQ7OztBQUdBdEksaUJBQWM7O0FBRVosU0FBS3RMLEtBQUwsR0FBYSxJQUFJakIsTUFBTTZNLEtBQVYsRUFBYixDQUZZLENBRW9COztBQUVoQyxTQUFLM0wsTUFBTCxHQUFjLElBQUlsQixNQUFNK0ksaUJBQVYsQ0FBNEIsRUFBNUIsRUFBZ0MsS0FBS2xXLEtBQUwsR0FBYSxLQUFLRSxNQUFsRCxFQUEwRCxHQUExRCxFQUErRCxJQUEvRCxDQUFkO0FBQ0EsU0FBS21PLE1BQUwsQ0FBWTRDLFFBQVosQ0FBcUJ6WCxDQUFyQixHQUF5QixDQUF6QjtBQUNBLFNBQUs2VSxNQUFMLENBQVk0QyxRQUFaLENBQXFCeFgsQ0FBckIsR0FBeUIsQ0FBekI7QUFDQSxTQUFLNFUsTUFBTCxDQUFZNEMsUUFBWixDQUFxQmdKLENBQXJCLEdBQXlCLEdBQXpCOztBQUVBLFNBQUs1TCxNQUFMLENBQVlnRixNQUFaLENBQW1CLElBQUlsRyxNQUFNNEIsT0FBVixDQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQixDQUF0QixDQUFuQjtBQUVEOztBQUVEOzs7O0FBSURrVCxpQkFBYzs7QUFFYixTQUFLQyxLQUFMLENBQVdGLFdBQVgsQ0FBdUIsK0NBQXZCLEVBQXdFLE1BQU07QUFDN0UsV0FBSzVULEtBQUwsQ0FBVzNELEdBQVgsQ0FBZSxLQUFLeVgsS0FBTCxDQUFXOUcsSUFBMUI7QUFDQS9uQixhQUFPaU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsTUFBTTtBQUN2QyxhQUFLZ0wsUUFBTDtBQUNBLE9BRkQsRUFFRyxLQUZIO0FBR0EsV0FBS0EsUUFBTDtBQUNBLFdBQUtvQyxNQUFMO0FBQ0EsS0FQRDtBQVNBOztBQUVBOzs7O0FBSUFxTCxZQUFVOztBQUVWLFNBQUttSSxLQUFMLENBQVdySCxRQUFYLENBQW9CcmQsSUFBcEIsQ0FBeUJ0SCxLQUF6QixJQUFrQyxJQUFsQzs7QUFFQTtBQUNDOztBQUVEOzs7QUFHQXFXLGNBQVk7QUFDWixTQUFLUCxNQUFMLENBQVloTSxLQUFaLEdBQW9CM0wsU0FBUzJaLElBQVQsQ0FBYzJJLFdBQWxDO0FBQ0UsU0FBSzNLLE1BQUwsQ0FBWTlMLE1BQVosR0FBcUI3TCxTQUFTMlosSUFBVCxDQUFjc0ksWUFBbkM7QUFDRixTQUFLNEwsS0FBTCxDQUFXOUcsSUFBWCxDQUFnQlQsUUFBaEIsQ0FBeUJFLFFBQXpCLENBQWtDc0gsVUFBbEMsQ0FBNkNqc0IsS0FBN0MsQ0FBbURzUyxHQUFuRCxDQUF1RG5VLFNBQVMyWixJQUFULENBQWMySSxXQUFyRSxFQUFrRnRpQixTQUFTMlosSUFBVCxDQUFjc0ksWUFBaEc7QUFFQzs7QUFHRnppQixjQUFZOztBQUVUTyxNQUFFZixNQUFGLEVBQVVpQixFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7QUFuR3VDLEM7Ozs7Ozs7OztBQ2IxQztBQUFBOzs7Ozs7OztBQVFBOztBQUVBOztBQUVlLE1BQU02dEIsWUFBTixTQUEyQiw0REFBM0IsQ0FBZ0M7O0FBRTdDanZCLGVBQWM7O0FBRVo7O0FBRUYsT0FBSzBuQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsT0FBSytGLE9BQUwsR0FBZSxJQUFmO0FBQ0EsT0FBS3hGLElBQUwsR0FBWSxJQUFaOztBQUVBLE9BQUs0RyxXQUFMLEdBQW1CLEtBQUtDLFlBQUwsQ0FBa0IxdEIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbkI7QUFDQSxPQUFLeXJCLFVBQUwsR0FBa0IsS0FBS0MsV0FBTCxDQUFpQjFyQixJQUFqQixDQUFzQixJQUF0QixDQUFsQjtBQUNBO0FBQ0EsT0FBSzh0QixNQUFMLEdBQWMsS0FBS0MsT0FBTCxDQUFhL3RCLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZDtBQUVDOztBQUVGMHRCLGNBQWFNLEtBQWIsRUFBb0JsZ0IsUUFBcEIsRUFBOEI7QUFDN0IsUUFBTXdaLFNBQVMsSUFBSTFPLE1BQU0yTixhQUFWLEVBQWY7QUFDQWUsU0FBT2QsSUFBUCxDQUFZd0gsS0FBWixFQUFvQjNCLE9BQUQsSUFBYTtBQUMvQkEsV0FBUTRCLFNBQVIsR0FBb0JyVixNQUFNc1YsYUFBMUI7QUFDRzdCLFdBQVE4QixTQUFSLEdBQW9CdlYsTUFBTXNWLGFBQTFCO0FBQ0EsUUFBSzdCLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQUt4RixJQUFMLEdBQVksS0FBSzRFLFVBQUwsRUFBWjtBQUNBM2Q7QUFDRCxHQU5IO0FBT0E7O0FBRUQ0ZCxlQUFjO0FBQ2IsT0FBS3BGLFFBQUwsR0FBZ0I7QUFDZnJkLFNBQU0sRUFBRW9HLE1BQU0sR0FBUixFQUFhMU4sT0FBTyxHQUFwQixFQURTO0FBRWZpc0IsZUFBWSxFQUFFdmUsTUFBTSxJQUFSLEVBQWMxTixPQUFPLElBQUlpWCxNQUFNMEgsT0FBVixFQUFyQixFQUZHO0FBR2Y4TixVQUFPLEVBQUUvZSxNQUFNLElBQVIsRUFBYzFOLE9BQU8sSUFBSWlYLE1BQU0wSCxPQUFWLEVBQXJCO0FBSFEsR0FBaEI7QUFLQSxTQUFPLElBQUkxSCxNQUFNa08sSUFBVixDQUNOLElBQUlsTyxNQUFNeVYsbUJBQVYsQ0FBOEIsQ0FBOUIsRUFBaUMsQ0FBakMsQ0FETSxFQUVOLElBQUl6VixNQUFNeU4saUJBQVYsQ0FBNEI7QUFDM0JDLGFBQVUsS0FBS0EsUUFEWTtBQUUzQkcsaUJBQWMsbUJBQUEvbkIsQ0FBUSxFQUFSLENBRmE7QUFHM0Jnb0IsbUJBQWdCLG1CQUFBaG9CLENBQVEsRUFBUjtBQUhXLEdBQTVCLENBRk0sQ0FBUDtBQVFBOztBQUdBOzs7O0FBSUQ7QUFDQTtBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRDs7OztBQUlBcXZCLFdBQVM7QUFDUixPQUFLekgsUUFBTCxDQUFjc0gsVUFBZCxDQUF5QmpzQixLQUF6QixDQUErQnNTLEdBQS9CLENBQW1DblUsU0FBUzJaLElBQVQsQ0FBYzJJLFdBQWpELEVBQThEdGlCLFNBQVMyWixJQUFULENBQWNzSSxZQUE1RTtBQUNBOztBQXRFNkMsQzs7Ozs7Ozs7QUNaL0MsNkRBQTZELG9CQUFvQixxQkFBcUIscUJBQXFCLGVBQWUsd0NBQXdDLEdBQUcsQzs7Ozs7O0FDQXJMLDBEQUEwRCxnRUFBZ0UsK0NBQStDLGlEQUFpRCxzREFBc0QsMkNBQTJDLGtFQUFrRSw4Q0FBOEMsb0JBQW9CLEdBQUcsdURBQXVELDJEQUEyRCw4Q0FBOEMsb0JBQW9CLEdBQUcseUVBQXlFLDhDQUE4Qyx5Q0FBeUMsdUNBQXVDLHVDQUF1Qyw4QkFBOEIsR0FBRywwRUFBMEUsMkRBQTJELEdBQUcsaUZBQWlGLDREQUE0RCxxREFBcUQsR0FBRyx5QkFBeUIsbU1BQW1NLGdDQUFnQyx3QkFBd0Isd0JBQXdCLG9DQUFvQyxxQkFBcUIsU0FBUyxPQUFPLGdEQUFnRCxxREFBcUQsMEJBQTBCLHdCQUF3QixrQ0FBa0MsS0FBSyx3QkFBd0IsNkJBQTZCLEtBQUssaUJBQWlCLEdBQUcsK0RBQStELHdFQUF3RSxHQUFHLDZJQUE2SSx5Q0FBeUMseUNBQXlDLHlDQUF5Qyx5Q0FBeUMsMk1BQTJNLEdBQUcsbUNBQW1DLHNDQUFzQyxHQUFHLG1DQUFtQyx1QkFBdUIsR0FBRyw2QkFBNkIsOERBQThELEdBQUcsK0JBQStCLGlCQUFpQixHQUFHLGtDQUFrQyxnQ0FBZ0Msc0RBQXNELHVEQUF1RCxtQ0FBbUMsaURBQWlELDRDQUE0QyxHQUFHLHNCQUFzQix3REFBd0QsR0FBRywwQkFBMEIsdUNBQXVDLDZEQUE2RCw0REFBNEQsNENBQTRDLHdCQUF3QiwrRkFBK0YscURBQXFELDRCQUE0QixzQ0FBc0MsMEVBQTBFLDZCQUE2Qiw0REFBNEQsNENBQTRDLDhEQUE4RCxzRUFBc0UsT0FBTyxZQUFZLGtEQUFrRCxzREFBc0QsT0FBTyxHQUFHLEM7Ozs7Ozs7QUNBeGlJO0FBQUE7Ozs7Ozs7O0FBUUE7O0FBRUE7O0FBRWUsTUFBTW5MLFVBQU4sQ0FBaUI7O0FBRTlCaFksZ0JBQWE7O0FBRVgsU0FBS1MsS0FBTDtBQUNBLFNBQUtDLFNBQUw7QUFFRDs7QUFFREQsVUFBUTs7QUFFTjtBQUNBOztBQUVEOztBQUVETyxXQUFTOztBQUVQYixPQUFHRSxFQUFILENBQU1xdkIsU0FBTixHQUFrQixJQUFJLGtFQUFKLEVBQWxCOztBQUVBdnZCLE9BQUdFLEVBQUgsQ0FBTXF2QixTQUFOLENBQWdCenZCLElBQWhCO0FBR0Q7O0FBRUQsU0FBT3NZLEdBQVAsR0FBYTs7QUFFYjs7QUFFQzs7QUFFRDdYLGNBQVk7O0FBRVZPLE1BQUVmLE1BQUYsRUFBVWlCLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLEtBQUtILE1BQUwsQ0FBWUksSUFBWixDQUFpQixJQUFqQixDQUFyQjtBQUVEOztBQW5DNkIsQzs7Ozs7Ozs7OztBQ1poQztBQUFBOzs7Ozs7OztBQVFBO0FBQ0E7O0FBRUE7O0FBRWUsTUFBTXV1QixTQUFOLFNBQXdCLDREQUF4QixDQUE2Qjs7QUFFMUMzdkIsZ0JBQWM7O0FBRVo7O0FBRUEsU0FBSzZZLE1BQUwsR0FBYzNYLFNBQVMwcEIsY0FBVCxDQUF3QixjQUF4QixDQUFkOztBQUVBLFNBQUsvZCxLQUFMLEdBQWEzTCxTQUFTMlosSUFBVCxDQUFjMkksV0FBM0I7QUFDQSxTQUFLelcsTUFBTCxHQUFjN0wsU0FBUzJaLElBQVQsQ0FBY3NJLFlBQTVCOztBQUVBLFNBQUtqSSxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtwQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS21DLEtBQUwsR0FBYSxJQUFiOztBQUVBLFNBQUsyVSxZQUFMLEdBQW9CLEtBQUtDLGFBQUwsQ0FBbUJ6dUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBcEI7QUFDQSxTQUFLMHVCLGNBQUwsR0FBc0IsS0FBS0MsZUFBTCxDQUFxQjN1QixJQUFyQixDQUEwQixJQUExQixDQUF0QjtBQUNBLFNBQUtrbEIsV0FBTCxHQUFtQixLQUFLQyxZQUFMLENBQWtCbmxCLElBQWxCLENBQXVCLElBQXZCLENBQW5COztBQUVBLFNBQUsrWCxRQUFMLEdBQWdCLEtBQUtDLFNBQUwsQ0FBZWhZLElBQWYsQ0FBb0IsSUFBcEIsQ0FBaEI7QUFDRixTQUFLNHVCLE1BQUwsR0FBYyxLQUFLQyxPQUFMLENBQWE3dUIsSUFBYixDQUFrQixJQUFsQixDQUFkO0FBQ0EsU0FBS3l0QixXQUFMLEdBQW1CLEtBQUtDLFlBQUwsQ0FBa0IxdEIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbkI7O0FBRUEsU0FBSzJ0QixLQUFMLEdBQWEsSUFBSSx1REFBSixFQUFiO0FBRUM7O0FBRUQ7OztBQUdBOXVCLFNBQU07O0FBRUosU0FBSzJ2QixZQUFMO0FBQ0YsU0FBS3RKLFdBQUw7QUFDRSxTQUFLd0osY0FBTDs7QUFFRixTQUFLRSxNQUFMOztBQUVBLFNBQUtuQixXQUFMO0FBQ0M7O0FBR0Q7OztBQUdBZ0Isa0JBQWU7O0FBRWIsU0FBSzNVLE1BQUwsR0FBYyxJQUFJbEIsTUFBTStJLGlCQUFWLENBQTRCLEVBQTVCLEVBQWdDLEtBQUtsVyxLQUFMLEdBQWEsS0FBS0UsTUFBbEQsRUFBMEQsR0FBMUQsRUFBK0QsSUFBL0QsQ0FBZDtBQUNBLFNBQUttTyxNQUFMLENBQVk0QyxRQUFaLENBQXFCelgsQ0FBckIsR0FBeUIsQ0FBekI7QUFDQSxTQUFLNlUsTUFBTCxDQUFZNEMsUUFBWixDQUFxQnhYLENBQXJCLEdBQXlCLENBQXpCO0FBQ0EsU0FBSzRVLE1BQUwsQ0FBWTRDLFFBQVosQ0FBcUJnSixDQUFyQixHQUF5QixHQUF6Qjs7QUFFQSxTQUFLNUwsTUFBTCxDQUFZZ0YsTUFBWixDQUFtQixJQUFJbEcsTUFBTTRCLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsQ0FBbkI7QUFFRDs7QUFFRDs7O0FBR0FtVSxvQkFBaUI7O0FBRWpCLFNBQUtqWCxRQUFMLEdBQWdCLElBQUlrQixNQUFNQyxhQUFWLENBQXdCO0FBQ3BDQyxhQUFxQixLQURlO0FBRXBDYSxpQkFBcUIsS0FGZTtBQUdwQ21WLGVBQXFCLEtBSGU7QUFJcENDLGFBQXFCLElBSmU7QUFLcENDLDBCQUFxQixLQUxlO0FBTXBDdlgsY0FBUSxLQUFLQTtBQU51QixLQUF4QixDQUFoQjs7QUFTRSxTQUFLQyxRQUFMLENBQWN3QixhQUFkLENBQTRCLFFBQTVCLEVBQXNDLEdBQXRDO0FBQ0EsU0FBS3hCLFFBQUwsQ0FBY3FCLGFBQWQsQ0FBNEJqYSxPQUFPa2EsZ0JBQVAsSUFBMkIsQ0FBdkQ7QUFDQSxTQUFLdEIsUUFBTCxDQUFjdUIsT0FBZCxDQUFzQixLQUFLeE4sS0FBM0IsRUFBa0MsS0FBS0UsTUFBdkM7QUFFRDs7QUFFRDs7O0FBR0F3WixpQkFBYzs7QUFFZCxTQUFLdEwsS0FBTCxHQUFhLElBQUlqQixNQUFNNk0sS0FBVixFQUFiO0FBRUM7O0FBRUQ7Ozs7QUFJRGlJLGlCQUFjOztBQUViLFNBQUtDLEtBQUwsQ0FBV0YsV0FBWCxDQUF1QiwrQ0FBdkIsRUFBd0UsTUFBTTtBQUM3RSxXQUFLNVQsS0FBTCxDQUFXM0QsR0FBWCxDQUFlLEtBQUt5WCxLQUFMLENBQVc5RyxJQUExQjtBQUNBL25CLGFBQU9pTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxNQUFNO0FBQ3ZDLGFBQUtnTCxRQUFMO0FBQ0EsT0FGRCxFQUVHLEtBRkg7QUFHQSxXQUFLQSxRQUFMO0FBQ0EsV0FBSzZXLE1BQUw7QUFDQSxLQVBEO0FBU0E7O0FBRUE7Ozs7QUFJQUMsWUFBVTs7QUFFVixTQUFLblgsUUFBTCxDQUFjMEMsTUFBZCxDQUFxQixLQUFLUCxLQUExQixFQUFpQyxLQUFLQyxNQUF0Qzs7QUFFRXJNLDBCQUF1QixNQUFNO0FBQzNCLFdBQUttaEIsTUFBTDtBQUNELEtBRkQ7QUFJRDs7QUFFRDs7O0FBR0E1VyxjQUFZO0FBQ1osU0FBS1AsTUFBTCxDQUFZaE0sS0FBWixHQUFvQjNMLFNBQVMyWixJQUFULENBQWMySSxXQUFsQztBQUNFLFNBQUszSyxNQUFMLENBQVk5TCxNQUFaLEdBQXFCN0wsU0FBUzJaLElBQVQsQ0FBY3NJLFlBQW5DO0FBQ0YsU0FBSzRMLEtBQUwsQ0FBVzlHLElBQVgsQ0FBZ0JULFFBQWhCLENBQXlCRSxRQUF6QixDQUFrQ3NILFVBQWxDLENBQTZDanNCLEtBQTdDLENBQW1Ec1MsR0FBbkQsQ0FBdURuVSxTQUFTMlosSUFBVCxDQUFjMkksV0FBckUsRUFBa0Z0aUIsU0FBUzJaLElBQVQsQ0FBY3NJLFlBQWhHOztBQUVFLFNBQUtqSSxNQUFMLENBQVlDLE1BQVosR0FBcUJqYixPQUFPa0gsVUFBUCxHQUFvQmxILE9BQU9tSCxXQUFoRDtBQUNBLFNBQUs2VCxNQUFMLENBQVlFLHNCQUFaO0FBQ0EsU0FBS3RDLFFBQUwsQ0FBY3VCLE9BQWQsQ0FBc0JuYSxPQUFPa0gsVUFBN0IsRUFBeUNsSCxPQUFPbUgsV0FBaEQ7QUFDRDs7QUFHRjNHLGNBQVk7O0FBRVRPLE1BQUVmLE1BQUYsRUFBVWlCLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLEtBQUtILE1BQUwsQ0FBWUksSUFBWixDQUFpQixJQUFqQixDQUFyQjtBQUVEOztBQXRJeUMsQzs7Ozs7Ozs7O0FDYjVDO0FBQUE7Ozs7Ozs7O0FBUUE7O0FBRUE7O0FBRWUsTUFBTWl2QixLQUFOLFNBQW9CLDREQUFwQixDQUF5Qjs7QUFFdENyd0IsZUFBYzs7QUFFWjs7QUFFRixPQUFLMG5CLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxPQUFLK0YsT0FBTCxHQUFlLElBQWY7QUFDQSxPQUFLeEYsSUFBTCxHQUFZLElBQVo7O0FBRUEsT0FBSzRHLFdBQUwsR0FBbUIsS0FBS0MsWUFBTCxDQUFrQjF0QixJQUFsQixDQUF1QixJQUF2QixDQUFuQjtBQUNBLE9BQUt5ckIsVUFBTCxHQUFrQixLQUFLQyxXQUFMLENBQWlCMXJCLElBQWpCLENBQXNCLElBQXRCLENBQWxCO0FBQ0EsT0FBS29hLE1BQUwsR0FBYyxLQUFLdU4sT0FBTCxDQUFhM25CLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZDtBQUNBLE9BQUs4dEIsTUFBTCxHQUFjLEtBQUtDLE9BQUwsQ0FBYS90QixJQUFiLENBQWtCLElBQWxCLENBQWQ7QUFFQzs7QUFFRjB0QixjQUFhTSxLQUFiLEVBQW9CbGdCLFFBQXBCLEVBQThCO0FBQzdCLFFBQU13WixTQUFTLElBQUkxTyxNQUFNMk4sYUFBVixFQUFmO0FBQ0FlLFNBQU9kLElBQVAsQ0FBWXdILEtBQVosRUFBb0IzQixPQUFELElBQWE7QUFDL0JBLFdBQVE0QixTQUFSLEdBQW9CclYsTUFBTXNWLGFBQTFCO0FBQ0c3QixXQUFROEIsU0FBUixHQUFvQnZWLE1BQU1zVixhQUExQjtBQUNBLFFBQUs3QixPQUFMLEdBQWVBLE9BQWY7QUFDQSxRQUFLeEYsSUFBTCxHQUFZLEtBQUs0RSxVQUFMLEVBQVo7QUFDQTNkO0FBQ0QsR0FOSDtBQU9BOztBQUVENGQsZUFBYztBQUNiLE9BQUtwRixRQUFMLEdBQWdCO0FBQ2ZzSCxlQUFZO0FBQ1h2ZSxVQUFNLElBREs7QUFFWDFOLFdBQU8sSUFBSWlYLE1BQU0wSCxPQUFWLENBQWtCeGdCLFNBQVMyWixJQUFULENBQWMySSxXQUFoQyxFQUE2Q3RpQixTQUFTMlosSUFBVCxDQUFjc0ksWUFBM0Q7QUFGSSxJQURHO0FBS2ZtTixvQkFBaUI7QUFDaEI3ZixVQUFNLElBRFU7QUFFaEIxTixXQUFPLElBQUlpWCxNQUFNMEgsT0FBVixDQUFrQixJQUFsQixFQUF3QixJQUF4QjtBQUZTLElBTEY7QUFTZitMLFlBQVM7QUFDUmhkLFVBQU0sR0FERTtBQUVSMU4sV0FBTyxLQUFLMHFCO0FBRko7QUFUTSxHQUFoQjtBQWNBLFNBQU8sSUFBSXpULE1BQU1rTyxJQUFWLENBQ04sSUFBSWxPLE1BQU15VixtQkFBVixDQUE4QixDQUE5QixFQUFpQyxDQUFqQyxDQURNLEVBRU4sSUFBSXpWLE1BQU15TixpQkFBVixDQUE0QjtBQUMzQkMsYUFBVSxLQUFLQSxRQURZO0FBRTNCRyxpQkFBYyxtQkFBQS9uQixDQUFRLEVBQVIsQ0FGYTtBQUczQmdvQixtQkFBZ0IsbUJBQUFob0IsQ0FBUSxFQUFSO0FBSFcsR0FBNUIsQ0FGTSxDQUFQO0FBUUE7O0FBR0E7Ozs7QUFJRGlwQixTQUFRMWUsSUFBUixFQUFjOztBQUViLE1BQUksS0FBS2ttQixJQUFULEVBQWU7QUFDZixPQUFLN0ksUUFBTCxDQUFjcmQsSUFBZCxDQUFtQnRILEtBQW5CLElBQTRCc0gsT0FBTyxLQUFLbW1CLFFBQXhDO0FBQ0EsTUFBSSxLQUFLOUksUUFBTCxDQUFjcmQsSUFBZCxDQUFtQnRILEtBQW5CLEdBQTJCLENBQS9CLEVBQWtDO0FBQ2pDLFFBQUsya0IsUUFBTCxDQUFjcmQsSUFBZCxDQUFtQnRILEtBQW5CLEdBQTJCLENBQTNCO0FBQ0EsUUFBSzB0QixRQUFMLEdBQWdCLEtBQUtDLFFBQXJCO0FBQ0EsUUFBS2hKLFFBQUwsQ0FBY2lKLE9BQWQsQ0FBc0I1dEIsS0FBdEIsR0FBOEIsS0FBSzZ0QixRQUFMLENBQWMsS0FBS0YsUUFBbkIsQ0FBOUI7QUFDQSxVQUFPLEtBQUtBLFFBQUwsSUFBaUIsS0FBS0QsUUFBN0IsRUFBdUM7QUFDdEMsU0FBS0MsUUFBTCxHQUFnQnhzQixLQUFLQyxLQUFMLENBQVdELEtBQUtILE1BQUwsS0FBZ0IsS0FBSzZzQixRQUFMLENBQWN4dEIsTUFBekMsQ0FBaEI7QUFDQTtBQUNELFFBQUtza0IsUUFBTCxDQUFjbUosT0FBZCxDQUFzQjl0QixLQUF0QixHQUE4QixLQUFLNnRCLFFBQUwsQ0FBYyxLQUFLRixRQUFuQixDQUE5QjtBQUNBO0FBQ0E7O0FBRUZ2QixXQUFTO0FBQ1IsT0FBS3pILFFBQUwsQ0FBY3NILFVBQWQsQ0FBeUJqc0IsS0FBekIsQ0FBK0JzUyxHQUEvQixDQUFtQ25VLFNBQVMyWixJQUFULENBQWMySSxXQUFqRCxFQUE4RHRpQixTQUFTMlosSUFBVCxDQUFjc0ksWUFBNUU7QUFDQTs7QUEzRXNDLEM7Ozs7Ozs7O0FDWnhDLDZEQUE2RCxvQkFBb0IscUJBQXFCLHFCQUFxQixlQUFlLHdDQUF3QyxHQUFHLEM7Ozs7OztBQ0FyTCx3Q0FBd0MsK0NBQStDLCtCQUErQiw0QkFBNEIscUJBQXFCLHFCQUFxQix1TkFBdU4sa0lBQWtJLDRDQUE0QyxHQUFHLEM7Ozs7Ozs7QUNBcGtCO0FBQUE7Ozs7Ozs7O0FBUUE7O0FBRUE7O0FBRUE7O0FBRWUsTUFBTW5MLFVBQU4sQ0FBaUI7O0FBRTlCaFksZ0JBQWE7O0FBRVgsU0FBS1MsS0FBTDtBQUNBLFNBQUtDLFNBQUw7QUFFRDs7QUFFREQsVUFBUTs7QUFFTjtBQUNBOztBQUVEOztBQUVETyxXQUFTOztBQUVQYixPQUFHRSxFQUFILENBQU13WSxNQUFOLEdBQWUsSUFBSSwrREFBSixFQUFmOztBQUVBMVksT0FBR0UsRUFBSCxDQUFNd1ksTUFBTixDQUFhNVksSUFBYjtBQUdEOztBQUVELFNBQU9zWSxHQUFQLEdBQWE7O0FBRWI7O0FBRUM7O0FBRUQ3WCxjQUFZOztBQUVWTyxNQUFFZixNQUFGLEVBQVVpQixFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7QUFuQzZCLEM7Ozs7Ozs7OztBQ2RoQztBQUFBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxNQUFNMHZCLE1BQU4sU0FBcUIsNERBQXJCLENBQTBCOztBQUV2Qzl3QixnQkFBYzs7QUFFWjs7QUFFQSxTQUFLMG5CLFFBQUwsR0FBZ0I7QUFDZHFKLGNBQVEsRUFBRXRnQixNQUFNLEdBQVIsRUFBYTFOLE9BQU8sR0FBcEIsRUFETTtBQUVkaXVCLG9CQUFjLEVBQUV2Z0IsTUFBTSxJQUFSLEVBQWMxTixPQUFPLElBQUlpWCxNQUFNMEgsT0FBVixFQUFyQixFQUZBO0FBR2R1UCxlQUFTLEVBQUV4Z0IsTUFBTSxJQUFSLEVBQWMxTixPQUFPLElBQUlpWCxNQUFNMEgsT0FBVixFQUFyQjtBQUhLLEtBQWhCOztBQU1BOztBQUVBLFNBQUs3SSxNQUFMLEdBQWMzWCxTQUFTMHBCLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBZDs7QUFFQSxTQUFLL2QsS0FBTCxHQUFhM00sT0FBT2tILFVBQXBCO0FBQ0EsU0FBSzJGLE1BQUwsR0FBYzdNLE9BQU9tSCxXQUFyQjtBQUNBOztBQUVBLFNBQUs2VCxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtwQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS21DLEtBQUwsR0FBYSxJQUFiO0FBQ0YsU0FBS3dOLElBQUwsR0FBWSxJQUFaOztBQUVFLFNBQUttSCxZQUFMLEdBQW9CLEtBQUtDLGFBQUwsQ0FBbUJ6dUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBcEI7QUFDQSxTQUFLMHVCLGNBQUwsR0FBc0IsS0FBS0MsZUFBTCxDQUFxQjN1QixJQUFyQixDQUEwQixJQUExQixDQUF0QjtBQUNBLFNBQUtrbEIsV0FBTCxHQUFtQixLQUFLQyxZQUFMLENBQWtCbmxCLElBQWxCLENBQXVCLElBQXZCLENBQW5CO0FBQ0EsU0FBSzh2QixZQUFMLEdBQW9CLEtBQUtDLGFBQUwsQ0FBbUIvdkIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBcEI7QUFDQSxTQUFLZ3dCLGFBQUwsR0FBcUIsS0FBS0MsY0FBTCxDQUFvQmp3QixJQUFwQixDQUF5QixJQUF6QixDQUFyQjs7QUFFQSxTQUFLa3dCLFdBQUwsR0FBbUIsS0FBS0MsWUFBTCxDQUFrQm53QixJQUFsQixDQUF1QixJQUF2QixDQUFuQjs7QUFFQSxTQUFLb2EsTUFBTCxHQUFjLEtBQUt1TixPQUFMLENBQWEzbkIsSUFBYixDQUFrQixJQUFsQixDQUFkOztBQUVBLFNBQUsrWCxRQUFMLEdBQWdCLEtBQUtDLFNBQUwsQ0FBZWhZLElBQWYsQ0FBb0IsSUFBcEIsQ0FBaEI7O0FBRUEsU0FBSzR1QixNQUFMLEdBQWMsS0FBS0MsT0FBTCxDQUFhN3VCLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZDtBQUVEOztBQUVEOzs7QUFHQW5CLFNBQU07O0FBRUosU0FBSzJ2QixZQUFMO0FBQ0YsU0FBS3RKLFdBQUw7QUFDRSxTQUFLd0osY0FBTDs7QUFFRixTQUFLc0IsYUFBTDtBQUNBOztBQUVFLFNBQUtFLFdBQUw7O0FBRUEsU0FBS3RCLE1BQUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E5dkIsV0FBT2lPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLE1BQU07QUFDdEMsV0FBS2dMLFFBQUw7QUFDRCxLQUZELEVBRUcsS0FGSDtBQUlEOztBQUVEOzs7QUFHQTBXLGtCQUFlOztBQUViLFNBQUszVSxNQUFMLEdBQWMsSUFBSWxCLE1BQU0rSSxpQkFBVixDQUE0QixFQUE1QixFQUFnQyxLQUFLbFcsS0FBTCxHQUFhLEtBQUtFLE1BQWxELEVBQTBELEdBQTFELEVBQStELElBQS9ELENBQWQ7QUFDQSxTQUFLbU8sTUFBTCxDQUFZNEMsUUFBWixDQUFxQnpYLENBQXJCLEdBQXlCLENBQXpCO0FBQ0EsU0FBSzZVLE1BQUwsQ0FBWTRDLFFBQVosQ0FBcUJ4WCxDQUFyQixHQUF5QixDQUF6QjtBQUNBLFNBQUs0VSxNQUFMLENBQVk0QyxRQUFaLENBQXFCZ0osQ0FBckIsR0FBeUIsR0FBekI7O0FBRUEsU0FBSzVMLE1BQUwsQ0FBWWdGLE1BQVosQ0FBbUIsSUFBSWxHLE1BQU00QixPQUFWLENBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCLENBQXRCLENBQW5CO0FBRUQ7O0FBRUQ7OztBQUdBbVUsb0JBQWlCOztBQUVqQixTQUFLalgsUUFBTCxHQUFnQixJQUFJa0IsTUFBTUMsYUFBVixDQUF3QjtBQUNwQ0MsYUFBcUIsS0FEZTtBQUVwQ2EsaUJBQXFCLEtBRmU7QUFHcENtVixlQUFxQixLQUhlO0FBSXBDQyxhQUFxQixJQUplO0FBS3BDQywwQkFBcUIsS0FMZTtBQU1wQ3ZYLGNBQVEsS0FBS0E7QUFOdUIsS0FBeEIsQ0FBaEI7O0FBU0U7QUFDQSxTQUFLQyxRQUFMLENBQWN3QixhQUFkLENBQTRCLFFBQTVCO0FBQ0EsU0FBS3hCLFFBQUwsQ0FBY3FCLGFBQWQsQ0FBNEJqYSxPQUFPa2EsZ0JBQVAsSUFBMkIsQ0FBdkQ7QUFDQSxTQUFLdEIsUUFBTCxDQUFjdUIsT0FBZCxDQUFzQixLQUFLeE4sS0FBM0IsRUFBa0MsS0FBS0UsTUFBdkM7QUFDQTtBQUVEOztBQUVEOzs7QUFHQXdaLGlCQUFjOztBQUVkLFNBQUt0TCxLQUFMLEdBQWEsSUFBSWpCLE1BQU02TSxLQUFWLEVBQWI7QUFFQzs7QUFFRDs7OztBQUlEc0ssa0JBQWU7O0FBRVosUUFBSUssZUFBZSxJQUFJeFgsTUFBTStRLFdBQVYsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBbkI7QUFDQSxRQUFJMEcsZUFBZSxJQUFJelgsTUFBTTBYLGlCQUFWLENBQTRCO0FBQzdDekcsYUFBTyxRQURzQztBQUU3QzBHLGlCQUFXO0FBRmtDLEtBQTVCLENBQW5COztBQUtBLFNBQUtsSixJQUFMLEdBQVksSUFBSXpPLE1BQU1rTyxJQUFWLENBQWVzSixZQUFmLEVBQTZCQyxZQUE3QixDQUFaO0FBQ0EsU0FBS2hKLElBQUwsQ0FBVTNLLFFBQVYsQ0FBbUJ6WCxDQUFuQixHQUF1QixDQUF2QjtBQUNBLFNBQUtvaUIsSUFBTCxDQUFVM0ssUUFBVixDQUFtQnhYLENBQW5CLEdBQXVCLENBQXZCO0FBQ0EsU0FBS21pQixJQUFMLENBQVUzSyxRQUFWLENBQW1CZ0osQ0FBbkIsR0FBdUIsQ0FBdkI7O0FBRUEsU0FBSzdMLEtBQUwsQ0FBVzNELEdBQVgsQ0FBZSxLQUFLbVIsSUFBcEI7QUFFRjs7QUFFRDhJLGlCQUFjO0FBQ1gsU0FBS3hDLEtBQUwsR0FBYSxJQUFJL1UsTUFBTWtPLElBQVY7QUFDVDtBQUNBLFFBQUlsTyxNQUFNeVYsbUJBQVYsQ0FBOEIsQ0FBOUIsRUFBaUMsRUFBakMsRUFBcUMsRUFBckMsQ0FGUyxFQUdULElBQUl6VixNQUFNNFgsY0FBVixDQUF5QjtBQUN2QmxLLGdCQUFVLEtBQUtBLFFBRFE7QUFFdkJHLG9CQUFjLG1CQUFBL25CLENBQVEsRUFBUixDQUZTO0FBR3ZCZ29CLHNCQUFnQixtQkFBQWhvQixDQUFRLEVBQVI7QUFITyxLQUF6QixDQUhTLENBQWI7QUFTQSxTQUFLbWIsS0FBTCxDQUFXM0QsR0FBWCxDQUFlLEtBQUt5WCxLQUFwQjtBQUNEOztBQUVEOzs7O0FBSURoRyxZQUFVO0FBQ1AsUUFBSThJLFFBQVEsSUFBSTdYLE1BQU04WCxLQUFWLEVBQVo7QUFDQSxRQUFJem5CLE9BQU93bkIsTUFBTUUsUUFBTixFQUFYOztBQUVBO0FBQ0Q7O0FBRUQ7Ozs7QUFJQTlCLFlBQVU7QUFDUixTQUFLelUsTUFBTDtBQUNBM00sMEJBQXVCLE1BQU07QUFDM0IsV0FBS21oQixNQUFMO0FBQ0QsS0FGRDtBQUdBO0FBQ0EsU0FBS3RJLFFBQUwsQ0FBY3FKLE1BQWQsQ0FBcUJodUIsS0FBckIsSUFBOEIsSUFBOUI7QUFDQSxTQUFLK1YsUUFBTCxDQUFjMEMsTUFBZCxDQUFxQixLQUFLUCxLQUExQixFQUFpQyxLQUFLQyxNQUF0QztBQUNEOztBQUVEOzs7QUFHQTlCLGNBQVk7QUFDVixTQUFLOEIsTUFBTCxDQUFZQyxNQUFaLEdBQXFCamIsT0FBT2tILFVBQVAsR0FBb0JsSCxPQUFPbUgsV0FBaEQ7QUFDQSxTQUFLNlQsTUFBTCxDQUFZRSxzQkFBWjtBQUNBLFNBQUt0QyxRQUFMLENBQWN1QixPQUFkLENBQXNCbmEsT0FBT2tILFVBQTdCLEVBQXlDbEgsT0FBT21ILFdBQWhEO0FBQ0Q7O0FBRUY7OztBQUdBZ3FCLG1CQUFnQjtBQUNmLFNBQUtXLFFBQUwsR0FBZ0IsSUFBSWhZLE1BQU15QixhQUFWLENBQXdCLEtBQUtQLE1BQTdCLENBQWhCO0FBQ0EsU0FBSzhXLFFBQUwsQ0FBY2xWLFVBQWQsR0FBMkIsSUFBM0I7QUFDQSxRQUFJK1UsUUFBUSxJQUFJN1gsTUFBTThYLEtBQVYsRUFBWjs7QUFFQSxRQUFJRyxRQUFRSixNQUFNRSxRQUFOLEVBQVo7QUFDQSxTQUFLQyxRQUFMLENBQWN6VyxNQUFkLENBQXFCMFcsS0FBckI7QUFDQzs7QUFFRnZ4QixjQUFZOztBQUVUTyxNQUFFZixNQUFGLEVBQVVpQixFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7QUFyTXNDLEM7Ozs7Ozs7O0FDZHpDLCtEQUErRCxpQkFBaUIsMENBQTBDLEdBQUcsRzs7Ozs7O0FDQTdILCtEQUErRCx1QkFBdUIsaUJBQWlCLGdEQUFnRCwyQ0FBMkMsR0FBRyxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MzRkMzlkNTU3MTc2MGM3ZGNjYiIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEVudHJ5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbnJlcXVpcmUoJy4uLy4uL2xpYnMvT3JiaXRDb250cm9scy5qcycpO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0LyoqXG5cdCAqIOWIneacn+WMllxuXHQgKi9cblx0aW5pdCgpe1xuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9FbnRyeS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRvcFxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IENvbW1vbiBmcm9tICcuL3BhZ2UvQ29tbW9uJztcbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZS9NYWluJztcblxuKCgpPT57XG5cbiAgLy8gZ2xvYmFs44Kq44OW44K444Kn44Kv44OIXG4gIGlmICh3aW5kb3cuZ2I9PT11bmRlZmluZWQpIHdpbmRvdy5nYiA9IHt9O1xuICB3aW5kb3cuZ2IuaW4gPSB7fTsgLy9pbnN0YW5jZVxuXG4gIGdiLmluLmNvbW1vbiA9IG5ldyBDb21tb24oKTtcbiAgZ2IuaW4ubWFpbiA9IG5ldyBNYWluKCk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb21tb25cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IENvbmYgZnJvbSAnLi4vQ29yZS9Db25mJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL215bGlicy9VdGlsJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XG5pbXBvcnQgRnVuYyBmcm9tICcuLi9teWxpYnMvRnVuYyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuXHRzZXR1cCgpIHtcblxuXHRcdC8qKlxuICAgICAqIEB0eXBlIHtDb25mfSA6IOWIneacn+WApOOBruioreWumuODu+ODh+ODvOOCv+OBrumFjee9rlxuXHRcdCAqIEB0eXBlIHtVdGlsfSA6IFV0aWzplqLmlbDjga7liJ3mnJ/ljJZcblx0XHQgKiBAdHlwZSB7RnVuY30gOiDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cblx0XHQgKi9cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcblxuICAgIGdiLmluLnV0ID0gbmV3IFV0aWxzKCk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvQ29tbW9uLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29uZlxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG4vLyBpbXBvcnQgU291bmREYXRhIGZyb20gJy4vRGF0YS9Tb3VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmYge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOacrOeVquODleODqeOCsFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgICB0aGlzLlJFTEVBU0UgPSB0cnVlO1xuICAgIC8vIHRoaXMuUkVMRUFTRSA9IGZhbHNlO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODleODqeOCsOmWoumAo1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuRkxHID0ge1xuICAgICAgTE9HOnRydWUsICAvLyDjg63jgrDlh7rliptcbiAgICAgIFBBUkFNOnRydWUsIC8vIOODkeODqeODoeODvOOCv+ODgeOCp+ODg+OCr1xuICAgICAgU1RBVFM6dHJ1ZSAgLy8gU3RhdHPooajnpLpcbiAgICB9O1xuICAgIGlmICghdGhpcy5SRUxFQVNFKSB7XG4gICAgICB0aGlzLkZMRyA9IHtcbiAgICAgICAgTE9HOmZhbHNlLFxuICAgICAgICBQQVJBTTpmYWxzZSxcbiAgICAgICAgU1RBVFM6ZmFsc2UgXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDln7rmnKwgd2lkdGggaGVpZ2h0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5kZWZXID0gMTMwMDtcbiAgICB0aGlzLmRlZkggPSA4NTA7XG5cbiAgICB0aGlzLlcgPSAxMjAwO1xuICAgIHRoaXMuSCA9IDc1MDtcblxuICAgIHRoaXMuc3BXID0gMzc1O1xuICAgIHRoaXMuc3BIID0gNjY3O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODluODrOOCpOOCr+ODneOCpOODs+ODiFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuYnAgPSA3Njg7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgbW9kZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5rZXlzID0gW1xuICAgICAge1xuICAgICAgICAgICdrZXknOiAnbW92aWUnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnbW9ybmluZycsJ2FmdGVybm9vbicsJ25pZ2h0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAnZGF0YScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydkYXRhMDEnLCdkYXRhMDInLCdkYXRhMDMnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdwcm9kdWN0JyxcbiAgICAgICAgICAndmFsdWUnOiBbJzAxJ10sXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnN3aXRjaE1vZGUoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzb3VuZCBkYXRhXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdGhpcy5zb3VuZERhdGEgPSBuZXcgU291bmREYXRhKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc2VjMDIgYmcgSW1nIE51bVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc2VjMDJJbWdOdW0gPSAzOTY7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgeW91dHViZSBJRFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMueW91dHViZUlEMDEgPSAneFcyb05wTnJLZDAnO1xuICAgIHRoaXMueW91dHViZUlEMDIgPSAndDJXZVJSZEFGZUknO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHdlYiBmb250IGxvYWRlZFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMud2ViRm9udExvYWRlZCA9IGZhbHNlO1xuXG4gIH1cblxuXG4gIHN3aXRjaE1vZGUoKXtcblxuICAgIHZhciBpLCBrZXksIGxlbiwgcGFyYW0sIHJlZiwgcmVmMSwgdmFsdWU7XG5cbiAgICByZWYgPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKS5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBwYXJhbSA9IHJlZltpXTtcbiAgICAgIHJlZjEgPSBwYXJhbS5zcGxpdCgnPScpLCBrZXkgPSByZWYxWzBdLCB2YWx1ZSA9IHJlZjFbMV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5rZXlzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgdmFyIG9iaiA9IHRoaXMua2V5c1tqXTtcblxuICAgICAgICAvLyDjg5Hjg6njg6Hjg7zjgr/jgYzjgq3jg7zjgajkuIDnt5LjgaDjgaPjgZ/jgolcbiAgICAgICAgaWYgKG9iai5rZXkgPT09IGtleSkge1xuXG4gICAgICAgICAgLy8g5ZCE5YCk44Go5q+U6LyDXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBvYmoudmFsdWUubGVuZ3RoOyBrKyspIHtcblxuICAgICAgICAgICAgdmFyIHZhbCA9IG9iai52YWx1ZVtrXTtcblxuICAgICAgICAgICAgLy8g44Kt44O844KSdGhpcy5rZXlz44Gua2V544Gr44CBdmFsdWXjgpLmr5TovIPjgZfjgablkIzlgKTjgaDjgaPjgZ/jgoLjga7jgatcbiAgICAgICAgICAgIGlmICh2YWwgPT09IHZhbHVlKSB0aGlzW29iai5rZXldID0gdmFsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfTtcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gICAgICB9O1xuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9Db25mLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOS+v+WIqemWouaVsOOCr+ODqeOCuVxuICogUHJvamVjdDpcbiAqIEZpbGU6IFV0aWxcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmlzU2V0U1BTaXplID0gZmFsc2U7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IG51bGw7XG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICogTWF0aFxuICAgKi9cblxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgarlgKTjgpLov5TjgZlcbiAgICogQHBhcmFtIG1pbiA6IOacgOWwj+WApChpbnQpXG4gICAqIEBwYXJhbSBtYXggOiDmnIDlpKflgKQoaW50KVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gICAqL1xuICByYW5kb20obWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKChtYXggKyAxKSAtIG1pbikgKyBtaW4pKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBquaVtOaVsOOCkjLjgaTjga7nr4Tlm7LjgYvjgonlj5blvpdcbiAgICogQHBhcmFtIG1pbjEgOiDmnIDlsI/lgKQxKGludClcbiAgICogQHBhcmFtIG1heDEgOiDmnIDlpKflgKQxKGludClcbiAgICogQHBhcmFtIG1pbjIgOiDmnIDlsI/lgKQyKGludClcbiAgICogQHBhcmFtIG1heDIgOiDmnIDlpKflgKQyKGludClcbiAgICogQHJldHVybnMge251bWJlcn0gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAgKi9cbiAgcmFuZG9tMihtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gICAgXG4gICAgaWYgKHRoaXMuaGl0KDIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMSwgbWF4MSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4yLCBtYXgyKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAxL0ByYW5nZeOBrueiuueOh+OBp3RydWXjgpLlj5blvpdcbiAgICogQHBhcmFtIHJhbmdlIDog5q+N5pWwKGludClcbiAgICogQHJldHVybnMge2Jvb2xlYW59IDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAgKi9cbiAgaGl0KHJhbmdlKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oMCwgcmFuZ2UgLSAxKSA9PT0gMDtcblxuICB9XG4gIFxuICAvLyAw44GL44KJ56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pW05pWw44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgOiDnr4Tlm7IoaW50KVxuICAvLyByZXR1cm4gOiDjg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByYW5nZSh2YWwpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgtdmFsLCB2YWwpO1xuXG4gIH1cbiAgXG4gIC8vIOWApOOCkuODnuODg+ODlOODs+OCsFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog44Oe44OD44OU44Oz44Kw44GZ44KL5YCkKE51bWJlcilcbiAgLy8gQHJlc01pbiA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEByZXNNYXggOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1pbiA6IOWFg+OBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWF4IDog5YWD44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gcmV0dXJuIDog44Oe44OD44OU44Oz44Kw44GV44KM44Gf5YCkKE51bWJlcilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbWFwKG51bSwgcmVzTWluLCByZXNNYXgsIGJhc2VNaW4sIGJhc2VNYXgpIHtcblxuICAgIHZhciBwO1xuICAgIGlmIChudW0gPCBiYXNlTWluKSB7XG4gICAgICByZXR1cm4gcmVzTWluO1xuICAgIH1cbiAgICBpZiAobnVtID4gYmFzZU1heCkge1xuICAgICAgcmV0dXJuIHJlc01heDtcbiAgICB9XG4gICAgcCA9IChyZXNNYXggLSByZXNNaW4pIC8gKGJhc2VNYXggLSBiYXNlTWluKTtcblxuICAgIHJldHVybiAoKG51bSAtIGJhc2VNaW4pICogcCkgKyByZXNNaW47XG5cbiAgfSAgICBcbiAgXG4gIC8vIOaVsOWApOOBq+Wwj+aVsOeCueesrEBu5L2N44G+44Gn44KS44Gk44GR44Gf5paH5a2X5YiX44KS6L+U44GZXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDlgKQoTnVtYmVyKVxuICAvLyBAbiA6IOWwj+aVsOeCueOBruS9jShpbnQpXG4gIC8vIHJldHVybiA6IOWkieaPm+OBleOCjOOBn+WApChTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRlY2ltYWwobnVtLCBuKSB7XG4gICAgdmFyIGksIHBvcztcbiAgICBudW0gPSBTdHJpbmcobnVtKTtcbiAgICBwb3MgPSBudW0uaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBudW0uc3BsaXQoXCIuXCIpWzBdO1xuICAgIH1cbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgbnVtICs9IFwiLlwiO1xuICAgICAgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgbnVtICs9IFwiMFwiO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH1cbiAgICBudW0gPSBudW0uc3Vic3RyKDAsIHBvcykgKyBudW0uc3Vic3RyKHBvcywgbiArIDEpO1xuICAgIHJldHVybiBudW07XG4gIH1cblxuICBjbGFtcChudW1lcmF0b3IsZGVub21pbmF0b3IsdmFsKSB7XG5cbiAgICByZXR1cm4gdmFsICogKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKTtcblxuICB9XG5cblx0LyoqXG4gICAqIOODqeOCuOOCouODs+OCkuinkuW6puOBq+WkieaPm1xuXHQgKiBAcGFyYW0gcmFkaWFuc1xuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cbiAgZGVncmVlKHJhZGlhbnMpIHtcblxuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuICB9XG5cbiAgLy8gdG8gcmFkaWFuc1xuICByYWRpYW4oYW5nbGUpIHsgXG5cbiAgICByZXR1cm4gYW5nbGUgKiBNYXRoLlBJIC8gMTgwOyAvLzHluqbkvZXjg6njgrjjgqLjg7PjgYtcblxuICB9XG5cbiAgZGlzdChwMSwgcDIpIHtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcblxuICB9XG5cbiAgYXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MTAsOSw1LDMsMVxuXG4gIH1cblxuICBkZXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxLDMsNSw5LDEwXG5cbiAgfVxuXG4gIC8vIG1hcCh2YWx1ZSwgbWluMDEsIG1heDAxLCBtaW4wMiwgbWF4MDIpIHtcblxuICAvLyAgIHZhciBkaXMwMSA9IG1heDAxIC0gbWluMDE7XG4gIC8vICAgdmFyIGRpczAyID0gbWF4MDIgLSBtaW4wMlxuXG4gIC8vICAgdmFyIHJhdGUgPSBkaXMwMiAvIGRpczAxO1xuXG4gIC8vICAgdmFsdWUgPSB2YWx1ZSAqIHJhdGU7XG5cbiAgLy8gICByZXR1cm4gdmFsdWU7XG4gIC8vIH1cblxuICBjb25zdHJhaW4odmFsdWUsIG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heCh2YWx1ZSwgbWluKSk7XG5cbiAgICAvLyBpZiAodmFsdWUgPD0gbG93KSB2YWx1ZSA9IGxvdztcbiAgICAvLyBpZiAodmFsdWUgPj0gaGlnaCkgdmFsdWUgPSBoaWdoOyAgICAgXG4gICAgLy8gcmV0dXJuIHZhbHVlO1xuXG4gIH1cblxuICAvLyDjg6bjg4vjg7zjgq9JROOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1bmlxdWUoKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgfVxuICBcbiAgLy8gKipqcXVhcnnkvb/nlKhcbiAgLy8g44Oc44K/44Oz44Oi44O844OJ5aSJ5pu0XG4gIC8vIHRydWXjgarjgonjgqvjg7zjgr3jg6vjgYzjg53jgqTjg7Pjgr/jg7zjga7lvaLjgatcbiAgLy8gZmFsc2Xjgarjgonjg4fjg5Xjgqnjg6vjg4jjga7jgqvjg7zjgr3jg6vjgatcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGZsZyA6IOmBqeeUqOOBmeOCi+OBi+OBqeOBhuOBiyhib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBidXR0b25Nb2RlKGZsZykge1xuXG4gICAgaWYgKGZsZykge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBwb3J0cmFpdCAvIGxhbmRzY2FwZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNEaXJlY3Rpb24gKCkge1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChIID4gVykge1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgIH1lbHNle1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICByZXNwb25zaXZlIOaoquW5heOCkuimi+OCi1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNSZXNwb25zaXZlIChicCkge1xuXG4gICAgaWYgKGJwPT11bmRlZmluZWQpIGJwPTM3NTtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoVyA+IGJwKSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IHRydWU7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IHRydWU7XG4gICAgICB0aGlzLmlzUmVzUEMgPSBmYWxzZTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgVVJMXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAqL1xuICBnZXRQYXJhbSgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuICAgIHZhciBwYXJhbSA9IHVybC5zcGxpdCgnPycpWzFdO1xuICAgIGlmIChwYXJhbT09dW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJhbUl0ZW1zID0gcGFyYW0uc3BsaXQoJyYnKTtcbiAgICB2YXIgbGlzdCA9IHt9O1xuICBcbiAgICBmb3IoIHZhciBpID0gMDsgaTxwYXJhbUl0ZW1zLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgcGFyYW1JdGVtID0gcGFyYW1JdGVtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICBsaXN0W3BhcmFtSXRlbVswXV0gPSBwYXJhbUl0ZW1bMV07XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODj+ODg+OCt+ODpeWPluW+lyA6IGxvY2F0aW9uLmhhc2jjga4j44KS5YmK6Zmk44GX44Gf44KE44GkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBoYXNoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBjb29raWXlj5blvpdcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGdldENvb2tpZShrZXkpIHtcblxuICAgIHZhciBhLCBhcnIsIGksIGwsIGxlbjEsIHZhbDtcbiAgICBpZiAoZG9jdW1lbnQuY29va2llID09PSB2b2lkIDAgfHwgZG9jdW1lbnQuY29va2llID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XG4gICAgZm9yIChpID0gbCA9IDAsIGxlbjEgPSBhcnIubGVuZ3RoOyBsIDwgbGVuMTsgaSA9ICsrbCkge1xuICAgICAgdmFsID0gYXJyW2ldO1xuICAgICAgYSA9IHZhbC5zcGxpdChcIj1cIik7XG4gICAgICBpZiAoYVswXSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBhWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxuICB9ICAgICAgXG5cbiAgLyoqXG4gICAqIGNvb2tpZeioreWumlxuICAgKiBAcGFyYW0ga2V5IDog44OR44Op44Oh44O844K/5ZCNXG4gICAqIEBwYXJhbSB2YWwgOiDlgKRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHNldENvb2tpZShrZXksIHZhbCkge1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgdmFsO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIENvbG9yXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIHJnYuOBi+OCiUhFWOOCq+ODqeODvOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAciA6IDB+MjU1XG4gIC8vIEBnIDogMH4yNTVcbiAgLy8gQGIgOiAwfjI1NVxuICAvLyByZXR1cm4gOiBleCBcIiNGRkZGRkZcIlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRIZXhDb2xvcihyLGcsYikge1xuICAgICAgdmFyIHN0cjtcbiAgICAgIHN0ciA9IChyIDw8IDE2IHwgZyA8PCA4IHwgYikudG9TdHJpbmcoMTYpO1xuICAgICAgcmV0dXJuIFwiI1wiICsgbmV3IEFycmF5KDcgLSBzdHIubGVuZ3RoKS5qb2luKFwiMFwiKSArIHN0cjtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgU3RyaW5nXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzQ29udGFpbihzdHIsY29udGFpbikge1xuXG4gICAgLy8gc3Ry44Gu5Lit44GrLGNvbnRhaW7jgYzlrZjlnKjjgZfjgZ/jgolcbiAgICBpZiAoIHN0ci5pbmRleE9mKGNvbnRhaW4pICE9IC0xICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICAvLyAw5Z+L44KB44GnMuahgeOBq+OBmeOCi+mWouaVsFxuICBhZGQwKHN0cixudW09LTIpe1xuICAgIFxuICAgIHJldHVybiAoIFwiMDAwMDAwMDAwMDAwXCIgKyBzdHIgKS5zdWJzdHIoIG51bSApO1xuXG4gIH1cblxuICBmbG9hdEZvcm1hdCggbnVtYmVyLCBuICkge1xuXG4gICAgdmFyIF9wb3cgPSBNYXRoLnBvdyggMTAgLCBuICkgO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCBudW1iZXIgKiBfcG93ICkgLyBfcG93IDtcblxuICB9XG4gICAgXG4gIC8vIOWApOauteihqOiomFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcmljZShudW0pIHtcblxuICAgIHJldHVybiBTdHJpbmcobnVtKS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csICckMSwnKTtcblxuICB9XG5cbiAgLy8g5paH5a2X5YiX44KS5Y+N6LuiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBzdHIgOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyByZXR1cm4gOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdHJSZXZlcnNlKHN0cikge1xuXG4gICAgdmFyIGksIGxlbiwgcmVzO1xuICAgIHJlcyA9IFwiXCI7XG4gICAgbGVuID0gc3RyLmxlbmd0aDtcbiAgICBpID0gMTtcbiAgICB3aGlsZSAoaSA8PSBsZW4pIHtcbiAgICAgIHJlcyArPSBzdHIuc3Vic3RyKC1pLCAxKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcblxuICB9XG4gIFxuICAvLyDmloflrZfliJfjga7lhajnva7mj5tcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCAgOiDmloflrZfliJdcbiAgLy8gQG9lZyAgOiDnva7mj5vliY3jga7mloflrZfliJdcbiAgLy8gQGRlc3QgOiDnva7mj5vlvozjga7mloflrZfliJdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVwbGFjZUFsbCh2YWwsIG9yZywgZGVzdCkge1xuXG4gICAgcmV0dXJuIHZhbC5zcGxpdChvcmcpLmpvaW4oZGVzdCk7XG5cbiAgfSAgICBcbiAgXG4gIHN0clJlcGxhY2Uoc3RyLCBiZWZvcmUsIGFmdGVyKSB7XG5cbiAgICB2YXIgciA9IG5ldyBSZWdFeHAoIGJlZm9yZSwgJ2cnKTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZSggciAsIGFmdGVyICk7XG5cbiAgfSAgICBcbiAgXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0ZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXROb3coKSB7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCk7XG5cbiAgfVxuXG4gIGVsYXBzZWQoKSB7XG5cbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWU7XG5cbiAgfVxuXG4gIG0oKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vciggdGhpcy5lbGFwc2VkVGltZSArIDEwMCAvIDYwICk7XG5cbiAgfVxuXG4gIHMoKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmVsYXBzZWRUaW1lIC8gMTAwMCk7XG5cbiAgfVxuXG4gIG1zKCkge1xuXG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZFRpbWU7XG4gICAgXG4gIH1cblxuICB0aW1lKCkge1xuXG4gICAgdGhpcy5nZXROb3coKTtcblxuICAgIHRoaXMuaG91ciA9IHRoaXMubm93LmdldEhvdXJzKCk7ICAgICAgICAgIC8vIOaZglxuICAgIHRoaXMubWludXRlID0gdGhpcy5ub3cuZ2V0TWludXRlcygpOyAgICAgIC8vIOWIhlxuICAgIHRoaXMuc2Vjb25kID0gdGhpcy5ub3cuZ2V0U2Vjb25kcygpO1xuICAgIHRoaXMubWlsbFNlY29uZCA9IHRoaXMubm93LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIH1cblxuICBkYXRlKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldERhdGUoKTtcblxuICB9XG5cbiAgbW9udGhzKCkge1xuXG4gICAgdmFyIG1vbnRoZGF5cyA9IG5ldyBBcnJheSgzMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxKTtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRNb250aCgpICsgMTtcblxuICB9XG5cbiAgeWVhcigpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRGdWxsWWVhcigpO1xuXG4gIH1cblxuICBkYXkoKSB7XG5cbiAgICAvLyDmm5zml6UgKOaXpeacrOiqnilcbiAgICB2YXIgd2Vla0RheUpQID0gW1wi5pelXCIsXCLmnIhcIixcIueBq1wiLFwi5rC0XCIsXCLmnKhcIixcIumHkVwiLFwi5ZyfXCJdIDtcbiAgICB2YXIgd0RKID0gd2Vla0RheUpQW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgICAvLyDmm5zml6UgKOiLseiqnilcbiAgICB2YXIgd2Vla0RheUVOID0gW1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdIDtcbiAgICB2YXIgd0RFID0gd2Vla0RheUVOW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgfVxuICBcbiAgLy8g5pWw5pel5b6M44GuRGF0ZeOCquODluOCuOOCp+OCr+ODiOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhZnRlckRheShkYXRlLCBudW0pIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIE51bWJlcihudW0pICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0YSB0eXBlIGNoZWNrXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzT2JqZWN0KHZhbHVlLCBpZ25vcmVBcnJheSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cblxuICBpc051bWJlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH1cblxuICBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBpc051bGwodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbiAgfVxuXG4gIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgb3RoZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldEltZ1NQU2l6ZSAoJHRhcmdldCl7XG5cbiAgICAvLyByZXNwb25zaXZlIHNw44Gu44Go44GN5Yem55CGXG4gICAgaWYgKCF0aGlzLmlzUmVzU1ApIHJldHVybjtcbiAgICAvLyDkuIDluqbjgaDjgZHlh6bnkIZcbiAgICAvLyBpZiAodGhpcy5pc1NldFNQU2l6ZSkgcmV0dXJuO1xuICAgIC8vIHRoaXMuaXNTZXRTUFNpemUgPSB0cnVlO1xuXG4gICAgdmFyICRpbWcgPSAkdGFyZ2V0LFxuICAgICAgICBsZW4gPSAkaW1nLmxlbmd0aDtcblxuICAgICRpbWcuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgdmFyIHcgPSBNYXRoLmZsb29yKCQodGhpcykud2lkdGgoKSAvIDIpLFxuICAgICAgICAgICAgaCA9IE1hdGguZmxvb3IoJCh0aGlzKS5oZWlnaHQoKSAvIDIpO1xuXG4gICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAnd2lkdGgnOiB3LFxuICAgICAgICAgICAgJ2hlaWdodCc6IGgsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsZW4gPT0gaSArIDEpICQod2luZG93KS50cmlnZ2VyKCdzZXRTcFppZUVuZCcpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAg44K544Oe44Ob5pON5L2c54Sh5Yq5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRQcmV2ZW50KCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCd0b3VjaG1vdmUubm9Db250cm9sJywgZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO30pO1xuXG4gIH1cblxuICByZW1vdmVQcmV2ZW50KCkge1xuXG4gICAgJCh3aW5kb3cpLm9mZigndG91Y2htb3ZlLm5vQ29udHJvbCcpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIGhvc3QscHJvdGNvbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJvdG9jb2woKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgfVxuICAgIFxuICBob3N0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIC8vIHJldHVybiBsb2NhdGlvbi5ob3N0XG5cbiAgfVxuXG4gIHBvcnQoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucG9ydDtcblxuICB9XG4gICAgICAgIFxuICBwYXRoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdChlKSB7XG5cbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG5cbiAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBkaXNhYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ud2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2Rlcm4gc3RhbmRhcmRcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXG4gICAgd2luZG93Lm9udG91Y2htb3ZlICA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vYmlsZVxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biAgPSB0aGlzLnByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cztcblxuICB9XG5cbiAgZW5hYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL1V0aWwuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsc1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuLyoqXG4gKiBhbmltYXRpb25cbiAqL1xuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tICcuL2FuaW1hdGlvbi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUnO1xuaW1wb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGZyb20gJy4vYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lJztcblxuaW1wb3J0IEFycmF5IGZyb20gJy4vYXJyYXkvQXJyYXknO1xuaW1wb3J0IGNoZWNrQ2xpZW50IGZyb20gXCIuL3VhL2NoZWNrQ2xpZW50XCI7XG5cbmltcG9ydCBwcmVsb2FkSW1nIGZyb20gJy4vaW1nL3ByZWxvYWRJbWcnO1xuaW1wb3J0IHNldFVwQnRuVHdpdHRlciBmcm9tICcuL3Nucy9zZXRVcEJ0blR3aXR0ZXInO1xuaW1wb3J0IHNldFVwQnRuTGluZSBmcm9tICcuL3Nucy9zZXRVcEJ0bkxpbmUnO1xuaW1wb3J0IHNldFVwQnRuRmFjZUJvb2sgZnJvbSAnLi9zbnMvc2V0VXBCdG5GYWNlQm9vayc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5fc2V0dXAoKTtcbiAgICBcbiAgfVxuXG4gIF9zZXR1cCgpIHtcbiAgICAvLyB3aW5kb3cuY29uc29sZS5sb2coJ1V0aWxzX1NldHVwISEnKTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBhcnJheVxuICAgICAqL1xuICAgIHRoaXMuQXJyYXkgPSBuZXcgQXJyYXkoKTtcblxuXG4gICAgLyoqXG4gICAgICogdWFcbiAgICAgKi9cbiAgICB0aGlzLmNoZWNrQ2xpZW50ID0gbmV3IGNoZWNrQ2xpZW50KCk7XG5cblxuICAgIC8qKlxuICAgICAqIGltZ1xuICAgICAqL1xuICAgIC8vIHRoaXMucHJlbG9hZEltZyA9IG5ldyBwcmVsb2FkSW1nKCk7XG5cbiAgICAvKipcbiAgICAgKiBzbnNcbiAgICAgKi9cbiAgICAvLyB0aGlzLnNldFVwQnRuVHdpdHRlciA9IG5ldyBzZXRVcEJ0blR3aXR0ZXI7XG4gICAgLy8gdGhpcy5zZXRVcEJ0bkxpbmUgPSBuZXcgc2V0VXBCdG5MaW5lO1xuICAgIC8vIHRoaXMuc2V0VXBCdG5GYWNlQm9vayA9IG5ldyBzZXRVcEJ0bkZhY2VCb29rO1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL1V0aWxzLmpzIiwiLyoqXG4gKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqL1xud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDMwKTtcbiAgICAgICAgfTtcbiAgfTtcbn0pKHRoaXMpKSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIi8qKlxuICogY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAqL1xud2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKChmdW5jdGlvbihfdGhpcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbiAgfTtcbn0pKHRoaXMpKSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOmFjeWIl+OBruaTjeS9nOezu1xuICogUHJvamVjdDpcbiAqIEZpbGU6IEFycmF5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cblxuICB9XG5cblx0LyoqXG5cdCAqIOmFjeWIl+WGheOBruODqeODs+ODgOODoOOBquWApOOCkuOBsuOBqOOBpOWPluW+l1xuXHQgKiBAcGFyYW0gYXJyIDog6YWN5YiXXG5cdCAqIEByZXR1cm5zIHsqfSA6IOmFjeWIl+WGheOBruWApFxuXHQgKi9cbiAgYXJyUmFuZChhcnIpIHtcblxuICAgIHJldHVybiBhcnJbdGhpcy5yYW5kb20oMCwgYXJyLmxlbmd0aCAtIDEpXTtcblxuICB9XG5cblx0LyoqXG4gICAqIOmFjeWIl+OCkuODqeODs+ODgOODoOOBq+S4puOBueabv+OBiFxuXHQgKiBAcGFyYW0gYXJyIDog6YWN5YiXKEFycmF5KVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuICBzaHVmZmxlKGFycikge1xuXG4gICAgbGV0IEFyciA9IFtdO1xuICAgIEFyciA9IGFyci5zbGljZSgpO1xuICAgIHZhciBpID0gYXJyLmxlbmd0aDtcbiAgICB3aGlsZShpKXtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmkpO1xuICAgICAgdmFyIHQgPSBBcnJbLS1pXTtcbiAgICAgIEFycltpXSA9IEFycltqXTtcbiAgICAgIEFycltqXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBBcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hcnJheS9BcnJheS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiBVYeWIpOWIpVxuICogUHJvamVjdDpcbiAqIEZpbGU6IGNoZWNrQ2xpZW50XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vbGlicy91YS1wYXJzZXIubWluLmpzXCIpO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoZWNrQ2xpZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMudWEgPSBuZXcgcGFyc2VyKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBJReOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzSUUoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnSUUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVmb3jjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0ZpcmVmb3goKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnRmlyZWZveCcgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hyb21l44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNDaHJvbWUoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnQ2hyb21lJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYWZhcmnjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1NhZmFyaSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdTYWZhcmknID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODkOOCpOODq+OBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGlzTW9iaWxlKCkge1xuICAgIGxldCBkZXZpY2UgPSB0aGlzLnVhLmdldERldmljZSgpLnR5cGU7XG4gICAgcmV0dXJuIGRldmljZSA9PT0gJ21vYmlsZScgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgr/jg5bjg6zjg4Pjg4jjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBpc1RhYmxldCgpIHtcbiAgICBsZXQgZGV2aWNlID0gdGhpcy51YS5nZXREZXZpY2UoKS50eXBlO1xuICAgIHJldHVybiBkZXZpY2UgPT09ICd0YWJsZXQnID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogT1PlkI3jgpLlj5blvpdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIG9zKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldE9TKCkubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4fjg5DjgqTjgrnlkI3jgpLlj5blvpdcbiAgICogQHJldHVybnMge3ZlbmRvcnx7SFRDLCBTcHJpbnR9fVxuICAgKi9cbiAgZGV2aWNlX25hbWUoKSB7XG4gICAgbGV0IGRldmljZV9uYW1lID0gdGhpcy51YS5nZXREZXZpY2UoKS52ZW5kb3I7XG4gICAgcmV0dXJuIGRldmljZV9uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODluODqeOCpuOCtuWQjeOCkuWPluW+l1xuICAgKi9cbiAgYnJvd3Nlcl9uYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODpuODvOOCtuODvOOCqOODvOOCuOOCp+ODs+ODiOaDheWgse+8muWFqOOBpuOCkuWPluW+l1xuICAgKi9cbiAgYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldFVBKCk7XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvdWEvY2hlY2tDbGllbnQuanMiLCIvKipcbiAqIFVBUGFyc2VyLmpzIHYwLjcuMTJcbiAqIExpZ2h0d2VpZ2h0IEphdmFTY3JpcHQtYmFzZWQgVXNlci1BZ2VudCBzdHJpbmcgcGFyc2VyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFpc2FsbWFuL3VhLXBhcnNlci1qc1xuICpcbiAqIENvcHlyaWdodCDCqSAyMDEyLTIwMTYgRmFpc2FsIFNhbG1hbiA8Znl6bG1hbkBnbWFpbC5jb20+XG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIEdQTHYyICYgTUlUXG4gKi8oZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cIjAuNy4xMlwiLHI9XCJcIixpPVwiP1wiLHM9XCJmdW5jdGlvblwiLG89XCJ1bmRlZmluZWRcIix1PVwib2JqZWN0XCIsYT1cInN0cmluZ1wiLGY9XCJtYWpvclwiLGw9XCJtb2RlbFwiLGM9XCJuYW1lXCIsaD1cInR5cGVcIixwPVwidmVuZG9yXCIsZD1cInZlcnNpb25cIix2PVwiYXJjaGl0ZWN0dXJlXCIsbT1cImNvbnNvbGVcIixnPVwibW9iaWxlXCIseT1cInRhYmxldFwiLGI9XCJzbWFydHR2XCIsdz1cIndlYXJhYmxlXCIsRT1cImVtYmVkZGVkXCIsUz17ZXh0ZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG49e307Zm9yKHZhciByIGluIGUpdFtyXSYmdFtyXS5sZW5ndGglMj09PTA/bltyXT10W3JdLmNvbmNhdChlW3JdKTpuW3JdPWVbcl07cmV0dXJuIG59LGhhczpmdW5jdGlvbihlLHQpe3JldHVybiB0eXBlb2YgZT09XCJzdHJpbmdcIj90LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlLnRvTG93ZXJDYXNlKCkpIT09LTE6ITF9LGxvd2VyaXplOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKCl9LG1ham9yOmZ1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZT09PWE/ZS5yZXBsYWNlKC9bXlxcZFxcLl0vZyxcIlwiKS5zcGxpdChcIi5cIilbMF06dH0sdHJpbTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxcIlwiKX19LHg9e3JneDpmdW5jdGlvbigpe3ZhciBlLG49MCxyLGksYSxmLGwsYyxoPWFyZ3VtZW50czt3aGlsZShuPGgubGVuZ3RoJiYhbCl7dmFyIHA9aFtuXSxkPWhbbisxXTtpZih0eXBlb2YgZT09PW8pe2U9e307Zm9yKGEgaW4gZClkLmhhc093blByb3BlcnR5KGEpJiYoZj1kW2FdLHR5cGVvZiBmPT09dT9lW2ZbMF1dPXQ6ZVtmXT10KX1yPWk9MDt3aGlsZShyPHAubGVuZ3RoJiYhbCl7bD1wW3IrK10uZXhlYyh0aGlzLmdldFVBKCkpO2lmKCEhbClmb3IoYT0wO2E8ZC5sZW5ndGg7YSsrKWM9bFsrK2ldLGY9ZFthXSx0eXBlb2YgZj09PXUmJmYubGVuZ3RoPjA/Zi5sZW5ndGg9PTI/dHlwZW9mIGZbMV09PXM/ZVtmWzBdXT1mWzFdLmNhbGwodGhpcyxjKTplW2ZbMF1dPWZbMV06Zi5sZW5ndGg9PTM/dHlwZW9mIGZbMV09PT1zJiYoIWZbMV0uZXhlY3x8IWZbMV0udGVzdCk/ZVtmWzBdXT1jP2ZbMV0uY2FsbCh0aGlzLGMsZlsyXSk6dDplW2ZbMF1dPWM/Yy5yZXBsYWNlKGZbMV0sZlsyXSk6dDpmLmxlbmd0aD09NCYmKGVbZlswXV09Yz9mWzNdLmNhbGwodGhpcyxjLnJlcGxhY2UoZlsxXSxmWzJdKSk6dCk6ZVtmXT1jP2M6dH1uKz0yfXJldHVybiBlfSxzdHI6ZnVuY3Rpb24oZSxuKXtmb3IodmFyIHIgaW4gbilpZih0eXBlb2YgbltyXT09PXUmJm5bcl0ubGVuZ3RoPjApe2Zvcih2YXIgcz0wO3M8bltyXS5sZW5ndGg7cysrKWlmKFMuaGFzKG5bcl1bc10sZSkpcmV0dXJuIHI9PT1pP3Q6cn1lbHNlIGlmKFMuaGFzKG5bcl0sZSkpcmV0dXJuIHI9PT1pP3Q6cjtyZXR1cm4gZX19LFQ9e2Jyb3dzZXI6e29sZHNhZmFyaTp7dmVyc2lvbjp7XCIxLjBcIjpcIi84XCIsMS4yOlwiLzFcIiwxLjM6XCIvM1wiLFwiMi4wXCI6XCIvNDEyXCIsXCIyLjAuMlwiOlwiLzQxNlwiLFwiMi4wLjNcIjpcIi80MTdcIixcIjIuMC40XCI6XCIvNDE5XCIsXCI/XCI6XCIvXCJ9fX0sZGV2aWNlOnthbWF6b246e21vZGVsOntcIkZpcmUgUGhvbmVcIjpbXCJTRFwiLFwiS0ZcIl19fSxzcHJpbnQ6e21vZGVsOntcIkV2byBTaGlmdCA0R1wiOlwiNzM3M0tUXCJ9LHZlbmRvcjp7SFRDOlwiQVBBXCIsU3ByaW50OlwiU3ByaW50XCJ9fX0sb3M6e3dpbmRvd3M6e3ZlcnNpb246e01FOlwiNC45MFwiLFwiTlQgMy4xMVwiOlwiTlQzLjUxXCIsXCJOVCA0LjBcIjpcIk5UNC4wXCIsMmUzOlwiTlQgNS4wXCIsWFA6W1wiTlQgNS4xXCIsXCJOVCA1LjJcIl0sVmlzdGE6XCJOVCA2LjBcIiw3OlwiTlQgNi4xXCIsODpcIk5UIDYuMlwiLDguMTpcIk5UIDYuM1wiLDEwOltcIk5UIDYuNFwiLFwiTlQgMTAuMFwiXSxSVDpcIkFSTVwifX19fSxOPXticm93c2VyOltbLyhvcGVyYVxcc21pbmkpXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYVxcc1ttb2JpbGV0YWJdKykuK3ZlcnNpb25cXC8oW1xcd1xcLi1dKykvaSwvKG9wZXJhKS4rdmVyc2lvblxcLyhbXFx3XFwuXSspL2ksLyhvcGVyYSlbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyhvcGlvcylbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbW2MsXCJPcGVyYSBNaW5pXCJdLGRdLFsvXFxzKG9wcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJPcGVyYVwiXSxkXSxbLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvKGx1bmFzY2FwZXxtYXh0aG9ufG5ldGZyb250fGphc21pbmV8YmxhemVyKVtcXC9cXHNdPyhbXFx3XFwuXSspKi9pLC8oYXZhbnRcXHN8aWVtb2JpbGV8c2xpbXxiYWlkdSkoPzpicm93c2VyKT9bXFwvXFxzXT8oW1xcd1xcLl0qKS9pLC8oPzptc3xcXCgpKGllKVxccyhbXFx3XFwuXSspL2ksLyhyZWtvbnEpXFwvKFtcXHdcXC5dKykqL2ksLyhjaHJvbWl1bXxmbG9ja3xyb2NrbWVsdHxtaWRvcml8ZXBpcGhhbnl8c2lsa3xza3lmaXJlfG92aWJyb3dzZXJ8Ym9sdHxpcm9ufHZpdmFsZGl8aXJpZGl1bXxwaGFudG9tanMpXFwvKFtcXHdcXC4tXSspL2ldLFtjLGRdLFsvKHRyaWRlbnQpLitydls6XFxzXShbXFx3XFwuXSspLitsaWtlXFxzZ2Vja28vaV0sW1tjLFwiSUVcIl0sZF0sWy8oZWRnZSlcXC8oKFxcZCspP1tcXHdcXC5dKykvaV0sW2MsZF0sWy8oeWFicm93c2VyKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIllhbmRleFwiXSxkXSxbLyhjb21vZG9fZHJhZ29uKVxcLyhbXFx3XFwuXSspL2ldLFtbYywvXy9nLFwiIFwiXSxkXSxbLyhtaWNyb21lc3NlbmdlcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJXZUNoYXRcIl0sZF0sWy94aWFvbWlcXC9taXVpYnJvd3NlclxcLyhbXFx3XFwuXSspL2ldLFtkLFtjLFwiTUlVSSBCcm93c2VyXCJdXSxbL1xcc3d2XFwpLisoY2hyb21lKVxcLyhbXFx3XFwuXSspL2ldLFtbYywvKC4rKS8sXCIkMSBXZWJWaWV3XCJdLGRdLFsvYW5kcm9pZC4rc2Ftc3VuZ2Jyb3dzZXJcXC8oW1xcd1xcLl0rKS9pLC9hbmRyb2lkLit2ZXJzaW9uXFwvKFtcXHdcXC5dKylcXHMrKD86bW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKi9pXSxbZCxbYyxcIkFuZHJvaWQgQnJvd3NlclwiXV0sWy8oY2hyb21lfG9tbml3ZWJ8YXJvcmF8W3RpemVub2thXXs1fVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5dKykvaSwvKHFxYnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyh1Y1xccz9icm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksL3Vjd2ViLisodWNicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksL2p1Yy4rKHVjd2ViKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ldLFtbYyxcIlVDQnJvd3NlclwiXSxkXSxbLyhkb2xmaW4pXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiRG9scGhpblwiXSxkXSxbLygoPzphbmRyb2lkLispY3Jtb3xjcmlvcylcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJDaHJvbWVcIl0sZF0sWy87ZmJhdlxcLyhbXFx3XFwuXSspOy9pXSxbZCxbYyxcIkZhY2Vib29rXCJdXSxbL2Z4aW9zXFwvKFtcXHdcXC4tXSspL2ldLFtkLFtjLFwiRmlyZWZveFwiXV0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz9tb2JpbGVcXC9cXHcrXFxzKHNhZmFyaSkvaV0sW2QsW2MsXCJNb2JpbGUgU2FmYXJpXCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkvaV0sW2QsY10sWy93ZWJraXQuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKFxcL1tcXHdcXC5dKykvaV0sW2MsW2QseC5zdHIsVC5icm93c2VyLm9sZHNhZmFyaS52ZXJzaW9uXV0sWy8oa29ucXVlcm9yKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8a2h0bWwpXFwvKFtcXHdcXC5dKykvaV0sW2MsZF0sWy8obmF2aWdhdG9yfG5ldHNjYXBlKVxcLyhbXFx3XFwuLV0rKS9pXSxbW2MsXCJOZXRzY2FwZVwiXSxkXSxbLyhzd2lmdGZveCkvaSwvKGljZWRyYWdvbnxpY2V3ZWFzZWx8Y2FtaW5vfGNoaW1lcmF8ZmVubmVjfG1hZW1vXFxzYnJvd3NlcnxtaW5pbW98Y29ua2Vyb3IpW1xcL1xcc10/KFtcXHdcXC5cXCtdKykvaSwvKGZpcmVmb3h8c2VhbW9ua2V5fGstbWVsZW9ufGljZWNhdHxpY2VhcGV8ZmlyZWJpcmR8cGhvZW5peClcXC8oW1xcd1xcLi1dKykvaSwvKG1vemlsbGEpXFwvKFtcXHdcXC5dKykuK3J2XFw6LitnZWNrb1xcL1xcZCsvaSwvKHBvbGFyaXN8bHlueHxkaWxsb3xpY2FifGRvcmlzfGFtYXlhfHczbXxuZXRzdXJmfHNsZWlwbmlyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksLyhsaW5rcylcXHNcXCgoW1xcd1xcLl0rKS9pLC8oZ29icm93c2VyKVxcLz8oW1xcd1xcLl0rKSovaSwvKGljZVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5fXSspL2ksLyhtb3NhaWMpW1xcL1xcc10oW1xcd1xcLl0rKS9pXSxbYyxkXV0sY3B1OltbLyg/OihhbWR8eCg/Oig/Ojg2fDY0KVtfLV0pP3x3b3d8d2luKTY0KVs7XFwpXS9pXSxbW3YsXCJhbWQ2NFwiXV0sWy8oaWEzMig/PTspKS9pXSxbW3YsUy5sb3dlcml6ZV1dLFsvKCg/OmlbMzQ2XXx4KTg2KVs7XFwpXS9pXSxbW3YsXCJpYTMyXCJdXSxbL3dpbmRvd3NcXHMoY2V8bW9iaWxlKTtcXHNwcGM7L2ldLFtbdixcImFybVwiXV0sWy8oKD86cHBjfHBvd2VycGMpKD86NjQpPykoPzpcXHNtYWN8O3xcXCkpL2ldLFtbdiwvb3dlci8sXCJcIixTLmxvd2VyaXplXV0sWy8oc3VuNFxcdylbO1xcKV0vaV0sW1t2LFwic3BhcmNcIl1dLFsvKCg/OmF2cjMyfGlhNjQoPz07KSl8NjhrKD89XFwpKXxhcm0oPzo2NHwoPz12XFxkKzspKXwoPz1hdG1lbFxccylhdnJ8KD86aXJpeHxtaXBzfHNwYXJjKSg/OjY0KT8oPz07KXxwYS1yaXNjKS9pXSxbW3YsUy5sb3dlcml6ZV1dXSxkZXZpY2U6W1svXFwoKGlwYWR8cGxheWJvb2spO1tcXHdcXHNcXCk7LV0rKHJpbXxhcHBsZSkvaV0sW2wscCxbaCx5XV0sWy9hcHBsZWNvcmVtZWRpYVxcL1tcXHdcXC5dKyBcXCgoaXBhZCkvXSxbbCxbcCxcIkFwcGxlXCJdLFtoLHldXSxbLyhhcHBsZVxcc3swLDF9dHYpL2ldLFtbbCxcIkFwcGxlIFRWXCJdLFtwLFwiQXBwbGVcIl1dLFsvKGFyY2hvcylcXHMoZ2FtZXBhZDI/KS9pLC8oaHApLisodG91Y2hwYWQpL2ksLyhocCkuKyh0YWJsZXQpL2ksLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvXFxzKG5vb2spW1xcd1xcc10rYnVpbGRcXC8oXFx3KykvaSwvKGRlbGwpXFxzKHN0cmVhW2twclxcc1xcZF0qW1xcZGtvXSkvaV0sW3AsbCxbaCx5XV0sWy8oa2ZbQS16XSspXFxzYnVpbGRcXC9bXFx3XFwuXSsuKnNpbGtcXC8vaV0sW2wsW3AsXCJBbWF6b25cIl0sW2gseV1dLFsvKHNkfGtmKVswMzQ5aGlqb3JzdHV3XStcXHNidWlsZFxcL1tcXHdcXC5dKy4qc2lsa1xcLy9pXSxbW2wseC5zdHIsVC5kZXZpY2UuYW1hem9uLm1vZGVsXSxbcCxcIkFtYXpvblwiXSxbaCxnXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsuKyhhcHBsZSkvaV0sW2wscCxbaCxnXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsvaV0sW2wsW3AsXCJBcHBsZVwiXSxbaCxnXV0sWy8oYmxhY2tiZXJyeSlbXFxzLV0/KFxcdyspL2ksLyhibGFja2JlcnJ5fGJlbnF8cGFsbSg/PVxcLSl8c29ueWVyaWNzc29ufGFjZXJ8YXN1c3xkZWxsfGh1YXdlaXxtZWl6dXxtb3Rvcm9sYXxwb2x5dHJvbilbXFxzXy1dPyhbXFx3LV0rKSovaSwvKGhwKVxccyhbXFx3XFxzXStcXHcpL2ksLyhhc3VzKS0/KFxcdyspL2ldLFtwLGwsW2gsZ11dLFsvXFwoYmIxMDtcXHMoXFx3KykvaV0sW2wsW3AsXCJCbGFja0JlcnJ5XCJdLFtoLGddXSxbL2FuZHJvaWQuKyh0cmFuc2ZvW3ByaW1lXFxzXXs0LDEwfVxcc1xcdyt8ZWVlcGN8c2xpZGVyXFxzXFx3K3xuZXh1cyA3fHBhZGZvbmUpL2ldLFtsLFtwLFwiQXN1c1wiXSxbaCx5XV0sWy8oc29ueSlcXHModGFibGV0XFxzW3BzXSlcXHNidWlsZFxcLy9pLC8oc29ueSk/KD86c2dwLispXFxzYnVpbGRcXC8vaV0sW1twLFwiU29ueVwiXSxbbCxcIlhwZXJpYSBUYWJsZXRcIl0sW2gseV1dLFsvKD86c29ueSk/KD86KD86KD86Y3xkKVxcZHs0fSl8KD86c29bLWxdLispKVxcc2J1aWxkXFwvL2ldLFtbcCxcIlNvbnlcIl0sW2wsXCJYcGVyaWEgUGhvbmVcIl0sW2gsZ11dLFsvXFxzKG91eWEpXFxzL2ksLyhuaW50ZW5kbylcXHMoW3dpZHMzdV0rKS9pXSxbcCxsLFtoLG1dXSxbL2FuZHJvaWQuKztcXHMoc2hpZWxkKVxcc2J1aWxkL2ldLFtsLFtwLFwiTnZpZGlhXCJdLFtoLG1dXSxbLyhwbGF5c3RhdGlvblxcc1szNHBvcnRhYmxldmldKykvaV0sW2wsW3AsXCJTb255XCJdLFtoLG1dXSxbLyhzcHJpbnRcXHMoXFx3KykpL2ldLFtbcCx4LnN0cixULmRldmljZS5zcHJpbnQudmVuZG9yXSxbbCx4LnN0cixULmRldmljZS5zcHJpbnQubW9kZWxdLFtoLGddXSxbLyhsZW5vdm8pXFxzPyhTKD86NTAwMHw2MDAwKSsoPzpbLV1bXFx3K10pKS9pXSxbcCxsLFtoLHldXSxbLyhodGMpWztfXFxzLV0rKFtcXHdcXHNdKyg/PVxcKSl8XFx3KykqL2ksLyh6dGUpLShcXHcrKSovaSwvKGFsY2F0ZWx8Z2Vla3NwaG9uZXxodWF3ZWl8bGVub3ZvfG5leGlhbnxwYW5hc29uaWN8KD89O1xccylzb255KVtfXFxzLV0/KFtcXHctXSspKi9pXSxbcCxbbCwvXy9nLFwiIFwiXSxbaCxnXV0sWy8obmV4dXNcXHM5KS9pXSxbbCxbcCxcIkhUQ1wiXSxbaCx5XV0sWy8obmV4dXNcXHM2cCkvaV0sW2wsW3AsXCJIdWF3ZWlcIl0sW2gsZ11dLFsvKG1pY3Jvc29mdCk7XFxzKGx1bWlhW1xcc1xcd10rKS9pXSxbcCxsLFtoLGddXSxbL1tcXHNcXCg7XSh4Ym94KD86XFxzb25lKT8pW1xcc1xcKTtdL2ldLFtsLFtwLFwiTWljcm9zb2Z0XCJdLFtoLG1dXSxbLyhraW5cXC5bb25ldHddezN9KS9pXSxbW2wsL1xcLi9nLFwiIFwiXSxbcCxcIk1pY3Jvc29mdFwiXSxbaCxnXV0sWy9cXHMobWlsZXN0b25lfGRyb2lkKD86WzItNHhdfFxccyg/OmJpb25pY3x4Mnxwcm98cmF6cikpPyg6P1xcczRnKT8pW1xcd1xcc10rYnVpbGRcXC8vaSwvbW90W1xccy1dPyhcXHcrKSovaSwvKFhUXFxkezMsNH0pIGJ1aWxkXFwvL2ksLyhuZXh1c1xcczYpL2ldLFtsLFtwLFwiTW90b3JvbGFcIl0sW2gsZ11dLFsvYW5kcm9pZC4rXFxzKG16NjBcXGR8eG9vbVtcXHMyXXswLDJ9KVxcc2J1aWxkXFwvL2ldLFtsLFtwLFwiTW90b3JvbGFcIl0sW2gseV1dLFsvaGJidHZcXC9cXGQrXFwuXFxkK1xcLlxcZCtcXHMrXFwoW1xcd1xcc10qO1xccyooXFx3W147XSopOyhbXjtdKikvaV0sW1twLFMudHJpbV0sW2wsUy50cmltXSxbaCxiXV0sWy9oYmJ0di4rbWFwbGU7KFxcZCspL2ldLFtbbCwvXi8sXCJTbWFydFRWXCJdLFtwLFwiU2Ftc3VuZ1wiXSxbaCxiXV0sWy9cXChkdHZbXFwpO10uKyhhcXVvcykvaV0sW2wsW3AsXCJTaGFycFwiXSxbaCxiXV0sWy9hbmRyb2lkLisoKHNjaC1pWzg5XTBcXGR8c2h3LW0zODBzfGd0LXBcXGR7NH18Z3QtblxcZCt8c2doLXQ4WzU2XTl8bmV4dXMgMTApKS9pLC8oKFNNLVRcXHcrKSkvaV0sW1twLFwiU2Ftc3VuZ1wiXSxsLFtoLHldXSxbL3NtYXJ0LXR2Lisoc2Ftc3VuZykvaV0sW3AsW2gsYl0sbF0sWy8oKHNbY2dwXWgtXFx3K3xndC1cXHcrfGdhbGF4eVxcc25leHVzfHNtLVxcd1tcXHdcXGRdKykpL2ksLyhzYW1bc3VuZ10qKVtcXHMtXSooXFx3Ky0/W1xcdy1dKikqL2ksL3NlYy0oKHNnaFxcdyspKS9pXSxbW3AsXCJTYW1zdW5nXCJdLGwsW2gsZ11dLFsvc2llLShcXHcrKSovaV0sW2wsW3AsXCJTaWVtZW5zXCJdLFtoLGddXSxbLyhtYWVtb3xub2tpYSkuKihuOTAwfGx1bWlhXFxzXFxkKykvaSwvKG5va2lhKVtcXHNfLV0/KFtcXHctXSspKi9pXSxbW3AsXCJOb2tpYVwiXSxsLFtoLGddXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0oYVxcZHszfSkvaV0sW2wsW3AsXCJBY2VyXCJdLFtoLHldXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0obGc/KS0oWzA2Y3Y5XXszLDR9KS9pXSxbW3AsXCJMR1wiXSxsLFtoLHldXSxbLyhsZykgbmV0Y2FzdFxcLnR2L2ldLFtwLGwsW2gsYl1dLFsvKG5leHVzXFxzWzQ1XSkvaSwvbGdbZTtcXHNcXC8tXSsoXFx3KykqL2ldLFtsLFtwLFwiTEdcIl0sW2gsZ11dLFsvYW5kcm9pZC4rKGlkZWF0YWJbYS16MC05XFwtXFxzXSspL2ldLFtsLFtwLFwiTGVub3ZvXCJdLFtoLHldXSxbL2xpbnV4Oy4rKChqb2xsYSkpOy9pXSxbcCxsLFtoLGddXSxbLygocGViYmxlKSlhcHBcXC9bXFxkXFwuXStcXHMvaV0sW3AsbCxbaCx3XV0sWy9hbmRyb2lkLis7XFxzKGdsYXNzKVxcc1xcZC9pXSxbbCxbcCxcIkdvb2dsZVwiXSxbaCx3XV0sWy9hbmRyb2lkLisoXFx3KylcXHMrYnVpbGRcXC9obVxcMS9pLC9hbmRyb2lkLisoaG1bXFxzXFwtX10qbm90ZT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ksL2FuZHJvaWQuKyhtaVtcXHNcXC1fXSooPzpvbmV8b25lW1xcc19dcGx1c3xub3RlIGx0ZSk/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pXSxbW2wsL18vZyxcIiBcIl0sW3AsXCJYaWFvbWlcIl0sW2gsZ11dLFsvYW5kcm9pZC4rYTAwMCgxKVxccytidWlsZC9pXSxbbCxbcCxcIk9uZVBsdXNcIl0sW2gsZ11dLFsvXFxzKHRhYmxldClbO1xcL10vaSwvXFxzKG1vYmlsZSkoPzpbO1xcL118XFxzc2FmYXJpKS9pXSxbW2gsUy5sb3dlcml6ZV0scCxsXV0sZW5naW5lOltbL3dpbmRvd3MuK1xcc2VkZ2VcXC8oW1xcd1xcLl0rKS9pXSxbZCxbYyxcIkVkZ2VIVE1MXCJdXSxbLyhwcmVzdG8pXFwvKFtcXHdcXC5dKykvaSwvKHdlYmtpdHx0cmlkZW50fG5ldGZyb250fG5ldHN1cmZ8YW1heWF8bHlueHx3M20pXFwvKFtcXHdcXC5dKykvaSwvKGtodG1sfHRhc21hbnxsaW5rcylbXFwvXFxzXVxcKD8oW1xcd1xcLl0rKS9pLC8oaWNhYilbXFwvXFxzXShbMjNdXFwuW1xcZFxcLl0rKS9pXSxbYyxkXSxbL3J2XFw6KFtcXHdcXC5dKykuKihnZWNrbykvaV0sW2QsY11dLG9zOltbL21pY3Jvc29mdFxccyh3aW5kb3dzKVxccyh2aXN0YXx4cCkvaV0sW2MsZF0sWy8od2luZG93cylcXHNudFxcczZcXC4yO1xccyhhcm0pL2ksLyh3aW5kb3dzXFxzcGhvbmUoPzpcXHNvcykqKVtcXHNcXC9dPyhbXFxkXFwuXFxzXStcXHcpKi9pLC8od2luZG93c1xcc21vYmlsZXx3aW5kb3dzKVtcXHNcXC9dPyhbbnRjZVxcZFxcLlxcc10rXFx3KS9pXSxbYyxbZCx4LnN0cixULm9zLndpbmRvd3MudmVyc2lvbl1dLFsvKHdpbig/PTN8OXxuKXx3aW5cXHM5eFxccykoW250XFxkXFwuXSspL2ldLFtbYyxcIldpbmRvd3NcIl0sW2QseC5zdHIsVC5vcy53aW5kb3dzLnZlcnNpb25dXSxbL1xcKChiYikoMTApOy9pXSxbW2MsXCJCbGFja0JlcnJ5XCJdLGRdLFsvKGJsYWNrYmVycnkpXFx3KlxcLz8oW1xcd1xcLl0rKSovaSwvKHRpemVuKVtcXC9cXHNdKFtcXHdcXC5dKykvaSwvKGFuZHJvaWR8d2Vib3N8cGFsbVxcc29zfHFueHxiYWRhfHJpbVxcc3RhYmxldFxcc29zfG1lZWdvfGNvbnRpa2kpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC9saW51eDsuKyhzYWlsZmlzaCk7L2ldLFtjLGRdLFsvKHN5bWJpYW5cXHM/b3N8c3ltYm9zfHM2MCg/PTspKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaV0sW1tjLFwiU3ltYmlhblwiXSxkXSxbL1xcKChzZXJpZXM0MCk7L2ldLFtjXSxbL21vemlsbGEuK1xcKG1vYmlsZTsuK2dlY2tvLitmaXJlZm94L2ldLFtbYyxcIkZpcmVmb3ggT1NcIl0sZF0sWy8obmludGVuZG98cGxheXN0YXRpb24pXFxzKFt3aWRzMzRwb3J0YWJsZXZ1XSspL2ksLyhtaW50KVtcXC9cXHNcXChdPyhcXHcrKSovaSwvKG1hZ2VpYXx2ZWN0b3JsaW51eClbO1xcc10vaSwvKGpvbGl8W2t4bG5dP3VidW50dXxkZWJpYW58W29wZW5dKnN1c2V8Z2VudG9vfCg/PVxccylhcmNofHNsYWNrd2FyZXxmZWRvcmF8bWFuZHJpdmF8Y2VudG9zfHBjbGludXhvc3xyZWRoYXR8emVud2Fsa3xsaW5wdXMpW1xcL1xccy1dPyg/IWNocm9tKShbXFx3XFwuLV0rKSovaSwvKGh1cmR8bGludXgpXFxzPyhbXFx3XFwuXSspKi9pLC8oZ251KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF0sWy8oY3JvcylcXHNbXFx3XStcXHMoW1xcd1xcLl0rXFx3KS9pXSxbW2MsXCJDaHJvbWl1bSBPU1wiXSxkXSxbLyhzdW5vcylcXHM/KFtcXHdcXC5dK1xcZCkqL2ldLFtbYyxcIlNvbGFyaXNcIl0sZF0sWy9cXHMoW2ZyZW50b3BjLV17MCw0fWJzZHxkcmFnb25mbHkpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXSxbLyhoYWlrdSlcXHMoXFx3KykvaV0sW2MsZF0sWy8oaXBbaG9uZWFkXSspKD86Lipvc1xccyhbXFx3XSspKlxcc2xpa2VcXHNtYWN8O1xcc29wZXJhKS9pXSxbW2MsXCJpT1NcIl0sW2QsL18vZyxcIi5cIl1dLFsvKG1hY1xcc29zXFxzeClcXHM/KFtcXHdcXHNcXC5dK1xcdykqL2ksLyhtYWNpbnRvc2h8bWFjKD89X3Bvd2VycGMpXFxzKS9pXSxbW2MsXCJNYWMgT1NcIl0sW2QsL18vZyxcIi5cIl1dLFsvKCg/Om9wZW4pP3NvbGFyaXMpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC8oYWl4KVxccygoXFxkKSg/PVxcLnxcXCl8XFxzKVtcXHdcXC5dKikqL2ksLyhwbGFuXFxzOXxtaW5peHxiZW9zfG9zXFwvMnxhbWlnYW9zfG1vcnBob3N8cmlzY1xcc29zfG9wZW52bXMpL2ksLyh1bml4KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF1dfSxDPWZ1bmN0aW9uKHQsbil7aWYodGhpcyBpbnN0YW5jZW9mIEMpe3ZhciBpPXR8fChlJiZlLm5hdmlnYXRvciYmZS5uYXZpZ2F0b3IudXNlckFnZW50P2UubmF2aWdhdG9yLnVzZXJBZ2VudDpyKSxzPW4/Uy5leHRlbmQoTixuKTpOO3JldHVybiB0aGlzLmdldEJyb3dzZXI9ZnVuY3Rpb24oKXt2YXIgZT14LnJneC5hcHBseSh0aGlzLHMuYnJvd3Nlcik7cmV0dXJuIGUubWFqb3I9Uy5tYWpvcihlLnZlcnNpb24pLGV9LHRoaXMuZ2V0Q1BVPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5jcHUpfSx0aGlzLmdldERldmljZT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuZGV2aWNlKX0sdGhpcy5nZXRFbmdpbmU9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmVuZ2luZSl9LHRoaXMuZ2V0T1M9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLm9zKX0sdGhpcy5nZXRSZXN1bHQ9ZnVuY3Rpb24oKXtyZXR1cm57dWE6dGhpcy5nZXRVQSgpLGJyb3dzZXI6dGhpcy5nZXRCcm93c2VyKCksZW5naW5lOnRoaXMuZ2V0RW5naW5lKCksb3M6dGhpcy5nZXRPUygpLGRldmljZTp0aGlzLmdldERldmljZSgpLGNwdTp0aGlzLmdldENQVSgpfX0sdGhpcy5nZXRVQT1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNldFVBPWZ1bmN0aW9uKGUpe3JldHVybiBpPWUsdGhpc30sdGhpc31yZXR1cm4obmV3IEModCxuKSkuZ2V0UmVzdWx0KCl9O0MuVkVSU0lPTj1uLEMuQlJPV1NFUj17TkFNRTpjLE1BSk9SOmYsVkVSU0lPTjpkfSxDLkNQVT17QVJDSElURUNUVVJFOnZ9LEMuREVWSUNFPXtNT0RFTDpsLFZFTkRPUjpwLFRZUEU6aCxDT05TT0xFOm0sTU9CSUxFOmcsU01BUlRUVjpiLFRBQkxFVDp5LFdFQVJBQkxFOncsRU1CRURERUQ6RX0sQy5FTkdJTkU9e05BTUU6YyxWRVJTSU9OOmR9LEMuT1M9e05BTUU6YyxWRVJTSU9OOmR9LHR5cGVvZiBleHBvcnRzIT09bz8odHlwZW9mIG1vZHVsZSE9PW8mJm1vZHVsZS5leHBvcnRzJiYoZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1DKSxleHBvcnRzLlVBUGFyc2VyPUMpOnR5cGVvZiBkZWZpbmU9PT1zJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBDfSk6ZS5VQVBhcnNlcj1DO3ZhciBrPWUualF1ZXJ5fHxlLlplcHRvO2lmKHR5cGVvZiBrIT09byl7dmFyIEw9bmV3IEM7ay51YT1MLmdldFJlc3VsdCgpLGsudWEuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIEwuZ2V0VUEoKX0say51YS5zZXQ9ZnVuY3Rpb24oZSl7TC5zZXRVQShlKTt2YXIgdD1MLmdldFJlc3VsdCgpO2Zvcih2YXIgbiBpbiB0KWsudWFbbl09dFtuXX19fSkodHlwZW9mIHdpbmRvdz09XCJvYmplY3RcIj93aW5kb3c6dGhpcyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvdWEtcGFyc2VyLm1pbi5qcyIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogcHJlbG9hZEltZ1xuICogQHBhcmFtIGltZ1BhdGhcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5leHBvcnQgZGVmYXVsdCAoaW1nUGF0aCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBpbWc7XG4gICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFyZ3VtZW50cy5jYWxsZWUpO1xuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW1nLnNyYyA9IGltZ1BhdGg7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCIvKipcbiAqIHNldFVwQnRuVHdpdHRlclxuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHRleHQsIHNoYXJlVVJMKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChzaGFyZVVSTCA9PSBudWxsKSB7XG4gICAgc2hhcmVVUkwgPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JztcbiAgaWYgKHNoYXJlVVJMID09PSAnJykge1xuICAgIHVybCArPSBcInRleHQ9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgKz0gXCJ1cmw9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSkgKyBcIiZ0ZXh0PVwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH1cbiAgcmV0dXJuICRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ3R3aXR0ZXJTaGFyZScsICd3aWR0aD02NzAsaGVpZ2h0PTQwMCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwiLyoqXG4gKiBzZXRVcEJ0bkxpbmVcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gdGV4dFxuICogQHBhcmFtIHNoYXJlVVJMXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgkYnRuLCB0ZXh0LCBzaGFyZVVSTCA9ICcnKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChzaGFyZVVSTCA9PSBudWxsKSB7XG4gICAgc2hhcmVVUkwgPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cDovL2xpbmUubWUvbXNnL3RleHQvPyc7XG4gIGlmIChzaGFyZVVSTCA9PT0gJycpIHtcbiAgICB1cmwgKz0gXCJcIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9IGVsc2Uge1xuICAgIHVybCArPSAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKSArIFwiXFxuXCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSk7XG4gIH1cbiAgcmV0dXJuICRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ2xpbmVTaGFyZScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5MaW5lLmpzIiwiLyoqXG4gKiBzZXRVcEJ0bkZhY2Vib29rXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHNoYXJlVVJMXG4gKiBAcGFyYW0gZGVzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHNoYXJlVVJMLCBkZXNjcmlwdGlvbiA9ICcnKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChkZXNjcmlwdGlvbiA9PSBudWxsKSB7XG4gICAgZGVzY3JpcHRpb24gPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwPyZkaXNwbGF5PXBvcHVwJnU9JztcbiAgdXJsICs9IFwiXCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSk7XG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIHVybCArPSBcIiZkZXNjcmlwdGlvbj1cIiArIChlbmNvZGVVUklDb21wb25lbnQoZGVzY3JpcHRpb24pKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCBcImZhY2Vib29rU2hhcmVcIiArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSksICd3aWR0aD02NzAsaGVpZ2h0PTQwMCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5GYWNlQm9vay5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEZ1bmNcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuYyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmJsYW5rKCk7XG4gICAgdGhpcy5kZWJ1Z2dlcigpO1xuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgdGhpcy5leHBhbmRqUXVlcnkoKTtcblxuICB9XG5cbiAgYmxhbmsoKSB7XG5cbiAgICAkKCgpPT57JCgnLmJsYW5rJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpO30pO1xuXG4gIH1cblxuICBkZWJ1Z2dlcigpIHtcblxuICAgIC8vIOODh+ODkOODg+OCsOODouODvOODieWIh+abv1xuICAgIHZhciBSRUxFQVNFID0gZ2IuaW4uY29uZi5SRUxFQVNFO1xuXG4gICAgLy8g572u5o+b5a++6LGh44Gu44Oh44K944OD44OJ44KS6YWN5YiX44Go44GX44Gm5L+d5oyB44GZ44KLXG4gICAgdmFyIG1ldGhvZHMgPSBbXG4gICAgICAnbG9nJyxcbiAgICAgICdkZWJ1ZycsXG4gICAgICAnaW5mbycsXG4gICAgICAnd2FybicsXG4gICAgICAnZXJyb3InLFxuICAgICAgJ2RpcicsXG4gICAgICAndHJhY2UnLFxuICAgICAgJ2Fzc2VydCcsXG4gICAgICAnZGlyeG1sJyxcbiAgICAgICdncm91cCcsXG4gICAgICAnZ3JvdXBFbmQnLFxuICAgICAgJ3RpbWUnLFxuICAgICAgJ3RpbWVFbmQnLFxuICAgICAgJ2NvdW50JyxcbiAgICAgICdwcm9maWxlJyxcbiAgICAgICdwcm9maWxlRW5kJ1xuICAgIF07XG5cbiAgICAvLyBjb25zb2xl44GM5L2/44GI44Gq44GE5aC05ZCI44Gv56m644Gu44Kq44OW44K444Kn44Kv44OI44KS6Kit5a6a44GX44Gm44GK44GPXG4gICAgaWYoIHR5cGVvZiB3aW5kb3cuY29uc29sZSA9PT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgd2luZG93LmNvbnNvbGUgPSB7fTtcbiAgICB9XG5cbiAgICAvLyDlkITjg6Hjgr3jg4Pjg4njgpJ3aW5kb3fjgbjnm7TmjqXov73liqDjgZfjgabooYzjgY9cbiAgICBmb3IoIHZhciBpIGluIG1ldGhvZHMgKXtcbiAgICAgIChmdW5jdGlvbiggbSApe1xuXG4gICAgICAgLy8gY29uc29sZeOBq+OBguOCi++8n+ODh+ODkOODg+OCsOODouODvOODieOBr+acieWKue+8n2NvbnNvbGXjga7jgoLjga7jga/plqLmlbDvvJ9cbiAgICAgICBpZiggY29uc29sZVttXSAmJiAhUkVMRUFTRSAmJiB0eXBlb2YgY29uc29sZVttXSA9PT0gXCJmdW5jdGlvblwiICl7XG4gICAgICAgIHdpbmRvd1ttXSA9IGNvbnNvbGVbbV0uYmluZChjb25zb2xlKTtcbiAgICAgICB9IGVsc2Uge+OAgC8vIGRlYnVnTW9kZeOBjGZhbHNlLOOCguOBl+OBj+OBr+ipsuW9k+ODoeOCveODg+ODieOBjOWtmOWcqOOBl+OBquOBhOWgtOWQiOOBr+OAgeepuuOBruODoeOCveODg+ODieOCkueUqOaEj+OBmeOCi1xuICAgICAgICB3aW5kb3dbbV0gPSBmdW5jdGlvbigpe307XG4gICAgICAgfVxuXG4gICAgICB9KSggbWV0aG9kc1tpXSApO1xuICAgIH1cblxuICB9XG5cbiAgcHJlcGVuZChwYXJhbSkge1xuXG4gICAgJCgnYm9keScpLnByZXBlbmQocGFyYW0pO1xuXG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XG5cbiAgICB2YXIgRlBTID0gMTAwMC82MDtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIGNocm9tZeOChOacgOaWsOOBrlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIOWPpOOBhGZpcmVmb3jnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAgLy8gc2FmYXJpNuS7peWJjeOAgWlPUzYgc2FmYXJp55SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgRlBTKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCB0aW1lciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07ICAgICAgXG5cbiAgfVxuXG4gIGV4cGFuZGpRdWVyeSgpIHtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgdzowLCBcbiAgICAgIGg6MCwgXG4gICAgICBhZGp1c3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0VzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0SDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBjaGVja0Nzc0JsZW5kKCkge1xuXG4gICAgaWYgKCdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1MpIHtcbiAgICAgIGlmICghd2luZG93LkNTUy5zdXBwb3J0cygnbWl4LWJsZW5kLW1vZGUnLCAnc29mdC1saWdodCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvZyhnYi5pbi51LmlzSUUpO1xuXG4gICAgaWYgKGdiLmluLnUuaXNJRSkge1xuICAgICAgXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIFxuICAgIH07XG5cbiAgfVxuXG4gIG5vdFNhdmVJbWcoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBwY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG5cbiAgICAgICQoKCk9PntcbiAgICAgICAgJChcImltZ1wiKS5vbihcImNvbnRleHRtZW51XCIsKCk9PntcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBzcCBhbmRyb2lkXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgdiA9IGdiLmluLnUuaXNBbmRyb2lkVmVyc2lvbigpO1xuXG4gICAgaWYgKHY9PXVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGlmICh2PDUpIHtcblxuICAgICAgdmFyIHRpbWVyO1xuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoc3RhcnRcIiwoKT0+e1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBhbGVydChcIueUu+WDj+OBr+S/neWtmOOBp+OBjeOBvuOBm+OCk1wiKVxuICAgICAgICB9LDUwMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaGVuZFwiLCgpPT57XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pICAgICAgXG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvRnVuYy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IE1haW5cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IERpc3BsYXlUb3AgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VG9wJztcbmltcG9ydCBEaXNwbGF5VGV4dHVyZUJnIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZyc7XG5pbXBvcnQgRGlzcGxheVRleHR1cmVNb3ZpZSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlTW92aWUnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgLy9wYWdl44Oa44O844K45Yil44GuSUTjgpLlj5blvpdcbiAgICB2YXIgcGFnZSA9ICQoJ2JvZHknKS5kYXRhKCdpZCcpO1xuXG4gICAgd2luZG93LmNvbnNvbGUubG9nKCfnj77lnKjjga7jg5rjg7zjgrhJROOBryAnLCBwYWdlKTtcblxuXHRcdC8vcGFnZeOBrklE44GU44Go44Gr55m654Gr44GZ44KL44Kv44Op44K544Gu5oyv44KK5YiG44GRXG4gICAgc3dpdGNoIChwYWdlKSB7XG5cbiAgICAgIGNhc2UgJ3RvcCc6XG5cbiAgICAgICAgbmV3IERpc3BsYXlUb3AoKTtcblxuICAgICAgICBicmVhaztcblxuXHRcdFx0Y2FzZSAndGV4dHVyZUJnJzpcblxuXHRcdFx0XHRuZXcgRGlzcGxheVRleHR1cmVCZygpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXh0dXJlTW92aWUnOlxuXG5cdFx0XHRcdG5ldyBEaXNwbGF5VGV4dHVyZU1vdmllKCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuICB9XG5cbiAgb25SZW5kZXIoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOiAxNy82LzIzXG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBTY2VuZU1hbmdlciBmcm9tIFwiLi4vdmlzdWFsL1NjZW5lTWFuZ2VyXCI7XG5pbXBvcnQgU2NlbmUwMSBmcm9tIFwiLi4vdmlzdWFsL1NjZW5lMDFcIjtcbmltcG9ydCBTY2VuZTAyIGZyb20gXCIuLi92aXN1YWwvU2NlbmUwMlwiO1xuaW1wb3J0IFNjZW5lMDMgZnJvbSBcIi4uL3Zpc3VhbC9TY2VuZTAzXCI7XG4vLyBpbXBvcnQgT3ZlclNjZW5lIGZyb20gXCIuLi92aXN1YWwvb3ZlclNjZW5lXCI7XG5cbi8vIGltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuXG4vLyBpbXBvcnQgQ2FudmFzIGZyb20gXCIuLi92aXN1YWwvQ2FudmFzXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyID0gbmV3IFNjZW5lTWFuZ2VyKCk7XG5cbiAgICBnYi5pbi5zY2VuZUJveEEgPSBuZXcgU2NlbmUwMSgpO1xuICAgIGdiLmluLnNjZW5lQm94QiA9IG5ldyBTY2VuZTAyKCk7XG4gICAgZ2IuaW4uc2NlbmVCb3hDID0gbmV3IFNjZW5lMDMoKTtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmFkZFNjZW5lKGdiLmluLnNjZW5lQm94QSk7XG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIuYWRkU2NlbmUoZ2IuaW4uc2NlbmVCb3hCKTtcbiAgICBnYi5pbi5zY2VuZU1hbmdlci5hZGRTY2VuZShnYi5pbi5zY2VuZUJveEMpO1xuXG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIuZHJhdygpO1xuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogU2NlbmVNYW5nZXJcbiAqIERhdGU6IDE3LzA1LzI5XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5Jztcbi8vIGltcG9ydCBPdmVyU2NlbmUgZnJvbSBcIi4uL3Zpc3VhbC9vdmVyU2NlbmVcIjtcbmltcG9ydCBPdmVyU2NlbmUwMiBmcm9tIFwiLi4vdmlzdWFsL292ZXJTY2VuZTAyXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5nZXIgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLk5VTSA9IDA7IC8vIOePvuWcqOOBruOCt+ODvOODs+OBrueVquWPt1xuXHRcdHRoaXMuc2NlbmVzID0gW107IC8vIOOCt+ODvOODs+OCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgIHRoaXMuZmFkZUluT3V0VGltZXIgPSAtMTsgLy9cbiAgICB0aGlzLm9wID0gMDtcblxuXHRcdHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDsgLy8gUmVuZGVyZXJcbiAgICB0aGlzLnJlbmRlcmVyMDIgPSBudWxsOyAvLyBSZW5kZXJlcjAyXG5cbiAgICB0aGlzLm92ZXJzY2VuZSA9IFtdOyAvLyBvdmVyc2NlbmVcblxuXG5cbiAgICB0aGlzLm92ZXJBbHBoYSA9IDA7XG5cbiAgICB0aGlzLmFkZFNjZW5lID0gdGhpcy5fYWRkU2NlbmUuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hlY2tOdW0gPSB0aGlzLl9jaGVja051bS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25LZXlEb3duID0gdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5mYWRlSW5PdXQgPSB0aGlzLl9mYWRlSW5PdXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmRyYXcgPSB0aGlzLl9kcmF3LmJpbmQodGhpcyk7XG5cblxuXHRcdHRoaXMuYWxwaGFSZXNldCA9IHRoaXMuX2FscGhhUmVzZXQuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMua2V5bmFtZSA9IG51bGw7XG5cblxuXHRcdHRoaXMuaW5pdCgpOyAvLyDliJ3mnJ/ljJblh6bnkIblvozjgIHjgqTjg5njg7Pjg4jnmbvpjLJcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLCBmYWxzZSApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duLCB0cnVlKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5vdmVyc2NlbmUucHVzaChuZXcgT3ZlclNjZW5lMDIoKSk7XG5cblx0XHQvLyBSZW5kZXJlcuS9nOaIkFxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YWxwaGE6IHRydWV9KTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8oIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHgwMDAwMDAsIDAuMCkpO1xuXHRcdHRoaXMucmVuZGVyZXIuc29ydE9iamVjdHMgPSBmYWxzZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU2hhZG93TWFwO1xuXHRcdHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9IFwibWFpblwiO1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50O1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgLy8gUmVuZGVyZXIwMuS9nOaIkFxuICAgIHRoaXMucmVuZGVyZXIwMiA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbnRpYWxpYXM6IHRydWUsIGFscGhhOiB0cnVlfSk7XG4gICAgdGhpcy5yZW5kZXJlcjAyLnNldFBpeGVsUmF0aW8oIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICk7XG4gICAgdGhpcy5yZW5kZXJlcjAyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcbiAgICB0aGlzLnJlbmRlcmVyMDIuc29ydE9iamVjdHMgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmVyMDIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMucmVuZGVyZXIwMi5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNoYWRvd01hcDtcbiAgICB0aGlzLnJlbmRlcmVyMDIuZG9tRWxlbWVudC5pZCA9IFwic3ViXCI7XG4gICAgdGhpcy5yZW5kZXJlcjAyLnNldENsZWFyQ29sb3IoMHgwMDAwMDAsIDAuNSk7XG4gICAgdGhpcy5jYW52YXMwMiA9IHRoaXMucmVuZGVyZXIwMi5kb21FbGVtZW50O1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMwMik7XG5cbiAgfVxuXG5cdC8qKlxuICAgKiDnrqHnkIbjgZfjgZ/jgYTjgrfjg7zjg7PjgpLmoLzntI3jgZnjgovplqLmlbBcblx0ICogQHBhcmFtIHNjZW5lXG5cdCAqL1xuXHRfYWRkU2NlbmUoc2NlbmUpIHtcblxuXHRcdHRoaXMuc2NlbmVzLnB1c2goc2NlbmUpO1xuXG5cdH1cblxuICAvKipcbiAgICrjgIDjgqbjgqPjg7Pjg4njgqbjga7luYXjgYzlpInjgo/jgaPjgZ/jgajjgY3jga7lh6bnkIZcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcblxuICBcdC8vIOihqOekuuOBl+OBpuOBhOOCi+OCt+ODvOODs+OBlOOBqOOBq+OCq+ODoeODqeOBruODquOCteOCpOOCuuOCkui1sOOCieOBm+OCi1xuICAgIHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5zY2VuZXNbdGhpcy5OVU1dLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgLy8gcmVuZGVyZXLjga/lhajjgabjga7jgrfjg7zjg7PjgaflhbHpgJpcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICAvLyB0aGlzLm92ZXJzY2VuZVswXS5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgLy8gdGhpcy5vdmVyc2NlbmVbMF0uY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAvLyB0aGlzLnJlbmRlcmVyMDIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG5cdC8qKlxuICAgKiDnj77lnKjjga7jgrfjg7zjg7Pnlarlj7fjgYzjgIHkuI3pganliIfjgarlgKTjgavjgarjgonjgarjgYTjgojjgYbjgavjg4Hjgqfjg4Pjgq9cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9jaGVja051bSgpe1xuXG5cdFx0aWYodGhpcy5OVU0gPCAwKSB7XG5cdFx0XHR0aGlzLk5VTSA9IHRoaXMuc2NlbmVzLmxlbmd0aC0xO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuTlVNID49IHRoaXMuc2NlbmVzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5OVU0gPSAwO1xuXHRcdH1cblx0XHRcbiAgfVxuXG5cdC8qKlxuICAgKiDihpDihpLjgq3jg7zjgafjgrfjg7zjg7Pnlarlj7fjgpLotrPjgZflvJXjgY1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9vbktleURvd24oKXtcblx0XHR3aW5kb3cub25rZXlkb3duID0gKGUpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgdGhpcy5rZXluYW1lID0gZS5rZXk7XG5cbiAgICAgIGlmKHRoaXMua2V5bmFtZSA9PSBcIkFycm93UmlnaHRcIil7XG4gICAgICAgIC8vIHRoaXMuYWxwaGFSZXNldCgpO1xuICAgICAgICB0aGlzLk5VTSsrO1xuICAgICAgICB0aGlzLmNoZWNrTnVtKCk7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMua2V5bmFtZSA9PSBcIkFycm93TGVmdFwiKXtcbiAgICAgICAgLy8gdGhpcy5hbHBoYVJlc2V0KCk7XG4gICAgICAgIHRoaXMuTlVNLS07XG4gICAgICAgIHRoaXMuY2hlY2tOdW0oKTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5rZXluYW1lID09IFwiQXJyb3dSaWdodFwiIHx8IHRoaXMua2V5bmFtZSA9PSBcIkFycm93TGVmdFwiKSB7XG5cbiAgICAgICAgdGhpcy5mYWRlSW5PdXRUaW1lciA9IDA7XG5cbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5rZXluYW1lID09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygnVXAnKTtcblxuICAgICAgICB0aGlzLm92ZXJBbHBoYSs9MC4wNTtcbiAgICAgICAgaWYodGhpcy5vdmVyQWxwaGEgPiAxKXtcbiAgICAgICAgICB0aGlzLm92ZXJBbHBoYSA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMua2V5bmFtZSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygnRG93bicpO1xuXG4gICAgICAgIHRoaXMub3ZlckFscGhhLT0wLjA1O1xuICAgICAgICBpZih0aGlzLm92ZXJBbHBoYSA8IDApe1xuICAgICAgICAgIHRoaXMub3ZlckFscGhhID0gMC4wO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgJChcIiNzdWJcIikuY3NzKHsgb3BhY2l0eTogdGhpcy5vdmVyQWxwaGEgfSk7XG5cdFx0XHR3aW5kb3cuY29uc29sZS5sb2coJ+ePvuWcqOOBruOCt+ODvOODs+eVquWPt+OBrycsdGhpcy5OVU0pO1xuXHRcdH1cblx0fVxuXG4gIC8qKlxuXHQgKiDjgrfjg7zjg7Pjg4Hjgqfjg7PjgrjmmYLjga7jg6zjgqTjg6Tjg7xcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9mYWRlSW5PdXQoKXtcblxuICAgIGlmKHRoaXMuZmFkZUluT3V0VGltZXIgPD0gTWF0aC5QSSoyKXtcblxuICAgICAgdGhpcy5mYWRlSW5PdXRUaW1lciArPSAwLjA3O1xuICAgICAgdGhpcy5vcCA9IE1hdGguc2luKHRoaXMuZmFkZUluT3V0VGltZXIpO1xuXG4gICAgICAkKFwiI2ZhZGVJbk91dFwiKS5jc3MoeyBvcGFjaXR5OiB0aGlzLm9wIH0pO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5mYWRlSW5PdXRUaW1lciA9IC0xO1xuICAgICAgdGhpcy5vcCA9IDAuMDtcbiAgICAgIFxuICAgIH1cblxuICAgIGlmKHRoaXMub3AgPiAwLjk1ICYmIHRoaXMub3AgPD0gMS4wKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMua2V5bmFtZSkge1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcblxuICAgICAgICAgIC8vIHRoaXMuTlVNKys7XG4gICAgICAgICAgLy8gdGhpcy5jaGVja051bSgpO1xuICAgICAgICAgIHRoaXMuYWxwaGFSZXNldCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG5cbiAgICAgICAgICAvLyB0aGlzLk5VTS0tO1xuICAgICAgICAgIC8vIHRoaXMuY2hlY2tOdW0oKTtcbiAgICAgICAgICB0aGlzLmFscGhhUmVzZXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cdH1cblxuICBfYWxwaGFSZXNldCgpIHtcbiAgICB0aGlzLm92ZXJBbHBoYSA9IDAuMDtcblxuICAgICQoXCIjc3ViXCIpLmNzcyh7b3BhY2l0eTogdGhpcy5vdmVyQWxwaGF9KTtcbiAgfVxuXG5cblx0LyoqXG4gICAqIOacgOe1gueahOOBquaPj+WGmeWHpueQhuOBqOOAgeOCouODi+ODoeODvOOCt+ODp+ODs+mWouaVsOOCkuODr+ODs+ODleODrOODvOODoOOBlOOBqOOBq+Wun+ihjFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2RyYXcoKSB7XG4gICAgXG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKHRoaXMuZmFkZUluT3V0VGltZXIpO1xuICAgIFxuXHRcdHRoaXMuc2NlbmVzW3RoaXMuTlVNXS51cGRhdGUoKTtcblx0XHQvLyB0aGlzLm92ZXJzY2VuZVt0aGlzLk5VTV0udXBkYXRlKCk7XG5cdFx0Ly8gdGhpcy5vdmVyc2NlbmVbMF0udXBkYXRlKCk7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZXNbdGhpcy5OVU1dLnNjZW5lLCB0aGlzLnNjZW5lc1t0aGlzLk5VTV0uY2FtZXJhKTtcblx0XHQvLyB0aGlzLnJlbmRlcmVyMDIucmVuZGVyKHRoaXMub3ZlcnNjZW5lWzBdLnNjZW5lLCB0aGlzLm92ZXJzY2VuZVswXS5jYW1lcmEpO1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcuYmluZCh0aGlzKSk7XG5cbiAgICBpZih0aGlzLmZhZGVJbk91dFRpbWVyID49IDApIHtcbiAgICAgIHRoaXMuZmFkZUluT3V0KCk7XG4gICAgfVxuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lTWFuZ2VyLmpzIiwiLyoqXG4gKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuICovXG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxuLy8gVW5saWtlIFRyYWNrYmFsbENvbnRyb2xzLCBpdCBtYWludGFpbnMgdGhlIFwidXBcIiBkaXJlY3Rpb24gb2JqZWN0LnVwICgrWSBieSBkZWZhdWx0KS5cbi8vXG4vLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lIGZpbmdlciBtb3ZlXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3byBmaW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxuLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG5cblRIUkVFLk9yYml0Q29udHJvbHMgPSBmdW5jdGlvbiAoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblxuXHR0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG5cdC8vIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBvYmplY3Qgb3JiaXRzIGFyb3VuZFxuXHR0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcblx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XG5cdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pblpvb20gPSAwO1xuXHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG5cdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cblx0dGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG5cdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG5cdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuXHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuXHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuXHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0dGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuXHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG5cdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0Ly8gTW91c2UgYnV0dG9uc1xuXHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG5cdC8vIGZvciByZXNldFxuXHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuXHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdC8vXG5cdC8vIHB1YmxpYyBtZXRob2RzXG5cdC8vXG5cblx0dGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XG5cblx0fTtcblxuXHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcblxuXHR9O1xuXG5cdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRzY29wZS50YXJnZXQuY29weSggc2NvcGUudGFyZ2V0MCApO1xuXHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KCBzY29wZS5wb3NpdGlvbjAgKTtcblx0XHRzY29wZS5vYmplY3Quem9vbSA9IHNjb3BlLnpvb20wO1xuXG5cdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fTtcblxuXHQvLyB0aGlzIG1ldGhvZCBpcyBleHBvc2VkLCBidXQgcGVyaGFwcyBpdCB3b3VsZCBiZSBiZXR0ZXIgaWYgd2UgY2FuIG1ha2UgaXQgcHJpdmF0ZS4uLlxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHR2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcblx0XHR2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xuXG5cdFx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0dmFyIGxhc3RRdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKCkge1xuXG5cdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cblx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG5cdFx0XHQvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMoIG9mZnNldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0cm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YTtcblx0XHRcdHNwaGVyaWNhbC5waGkgKz0gc3BoZXJpY2FsRGVsdGEucGhpO1xuXG5cdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwudGhldGEgPSBNYXRoLm1heCggc2NvcGUubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4QXppbXV0aEFuZ2xlLCBzcGhlcmljYWwudGhldGEgKSApO1xuXG5cdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KCBzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4UG9sYXJBbmdsZSwgc3BoZXJpY2FsLnBoaSApICk7XG5cblx0XHRcdHNwaGVyaWNhbC5tYWtlU2FmZSgpO1xuXG5cblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgKj0gc2NhbGU7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgoIHNjb3BlLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMgKSApO1xuXG5cdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cblx0XHRcdHNjb3BlLnRhcmdldC5hZGQoIHBhbk9mZnNldCApO1xuXG5cdFx0XHRvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbCggc3BoZXJpY2FsICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0cG9zaXRpb24uY29weSggc2NvcGUudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdCggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NhbGUgPSAxO1xuXHRcdFx0cGFuT2Zmc2V0LnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcblxuXHRcdFx0aWYgKCB6b29tQ2hhbmdlZCB8fFxuXHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApID4gRVBTIHx8XG5cdFx0XHRcdDggKiAoIDEgLSBsYXN0UXVhdGVybmlvbi5kb3QoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICkgKSA+IEVQUyApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weSggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XG5cblx0fTtcblxuXHQvL1xuXHQvLyBpbnRlcm5hbHNcblx0Ly9cblxuXHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblx0dmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcblx0dmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG5cdHZhciBTVEFURSA9IHsgTk9ORSA6IC0gMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuXHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdHZhciBFUFMgPSAwLjAwMDAwMTtcblxuXHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHR2YXIgc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cblx0dmFyIHNjYWxlID0gMTtcblx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0cmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlTGVmdCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlVXAoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xuXG5cdH1cblxuXHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbkxlZnQoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dmFyIHBhblVwID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAxICk7IC8vIGdldCBZIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuXHR2YXIgcGFuID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW4gKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHR2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG5cdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRcdHBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRcdHBhbkxlZnQoIGRlbHRhWCAqICggc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQgKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggZGVsdGFZICogKCBzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlUGFuID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdGZ1bmN0aW9uIGRvbGx5SW4oIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZG9sbHlPdXQoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgY2FsbGJhY2tzIC0gdXBkYXRlIHRoZSBvYmplY3Qgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlRG9sbHknICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVVwJyApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVdoZWVsJyApO1xuXG5cdFx0aWYgKCBldmVudC5kZWx0YVkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRlbHRhWSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcblx0XHRcdFx0cGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdHBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRwYW4oIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuXHRcdFx0XHRwYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnREb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaEVuZCcgKTtcblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgaGFuZGxlcnMgLSBGU006IGxpc3RlbiBmb3IgZXZlbnRzIGFuZCByZXNldCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5PUkJJVCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVVwKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVNb3VzZVVwKCBldmVudCApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSAmJiBzdGF0ZSAhPT0gU1RBVEUuUk9UQVRFICkgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlS2V5cyA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZUtleURvd24oIGV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVUb3VjaEVuZCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoIGV2ZW50ICkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHR9XG5cblx0Ly9cblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG5cdHRoaXMudXBkYXRlKCk7XG5cbn07XG5cblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApO1xuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUSFJFRS5PcmJpdENvbnRyb2xzO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUsIHtcblxuXHRjZW50ZXI6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcgKTtcblx0XHRcdHJldHVybiB0aGlzLnRhcmdldDtcblxuXHRcdH1cblxuXHR9LFxuXG5cdC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRub1pvb206IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlWm9vbTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVab29tID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUm90YXRlOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVSb3RhdGU7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1Bhbjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUGFuO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVQYW4gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9LZXlzOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZUtleXM7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlS2V5cyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRzdGF0aWNNb3ZpbmcgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZURhbXBpbmc7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRkeW5hbWljRGFtcGluZ0ZhY3RvciA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSB2YWx1ZTtcblxuXHRcdH1cblxuXHR9XG5cbn0gKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBvdmVyU2NlbmUwMlxuICogRGF0ZTogMTcvMDYvMjFcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG92ZXJTY2VuZTAyIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50aW1lciA9IDA7XG4gICAgdGhpcy5VUERBVEUgPSB0cnVlO1xuICAgIHRoaXMuRU5EID0gZmFsc2U7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmUgPSB0aGlzLl9yZW1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVuZEVuYWJsZWQgPSB0aGlzLl9lbmRFbmFibGVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLl91cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOOCt+ODvOODs+OCkuS9nOaIkOOAguOCquODluOCuOOCp+OCr+ODiOOCkuagvOe0jVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7IC8v44K344O844Oz5L2c5oiQXG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg1MCwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAxLCA1MDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTQwMDtcblx0XHR0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMTAsIDAsIDApKTtcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuSW5zdGFuY2VkQnVmZmVyR2VvbWV0cnkoKTtcbiAgICB0aGlzLmdlb21ldHJ5LmNvcHkobmV3IFRIUkVFLkNpcmNsZUJ1ZmZlckdlb21ldHJ5KDEsIDYpKTtcblxuXG4gICAgbGV0IHBhcnRpY2xlQ291bnQgPSAxMDAwMDtcbiAgICBsZXQgdHJhbnNsYXRlQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHBhcnRpY2xlQ291bnQgKiAzKTtcbiAgICBmb3IgKGxldCBpID0gMCwgaTMgPSAwLCBsID0gcGFydGljbGVDb3VudDsgaSA8IGw7IGkrKywgaTMgKz0gMykge1xuICAgICAgdHJhbnNsYXRlQXJyYXlbaTMgKyAwXSA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcbiAgICAgIHRyYW5zbGF0ZUFycmF5W2kzICsgMV0gPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7XG4gICAgICB0cmFuc2xhdGVBcnJheVtpMyArIDJdID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgIH1cbiAgICB0aGlzLmdlb21ldHJ5LmFkZEF0dHJpYnV0ZShcInRyYW5zbGF0ZVwiLCBuZXcgVEhSRUUuSW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlKHRyYW5zbGF0ZUFycmF5LCAzLCAxKSk7XG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5SYXdTaGFkZXJNYXRlcmlhbCh7XG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICBtYXA6IHsgdmFsdWU6IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9yZXNvdXJjZS9pbWcvY2lyY2xlLnBuZ1wiKSB9LFxuICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfVxuICAgICAgfSxcbiAgICAgIHZlcnRleFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9vdmVyLnZlcnQnKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL292ZXIuZnJhZycpLFxuICAgICAgZGVwdGhUZXN0OiB0cnVlLFxuICAgICAgZGVwdGhXcml0ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xuICAgIHRoaXMubWVzaC5zY2FsZS5zZXQoNDAwLCA0MDAsIDQwMCk7XG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5tZXNoKTtcblxuXG4gIH1cblxuICAvKipcblx0ICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZW1vdmUoKXtcbiAgICB3aGlsZSAodGhpcy5zY2VuZS5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xuICAgICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5zY2VuZS5jaGlsZHJlblswXSk7XG4gICAgICBpZiAodGhpcy5zY2VuZS5jaGlsZHJlblswXSA9PSBUSFJFRS5NZXNoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW5bMF0uZ2VvbWV0cnkuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuWzBdLm1hdGVyaWFsLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXHR9XG5cbiAgLyoqXG5cdCAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZW5kRW5hYmxlZCgpe1xuICAgIHRoaXMuVVBEQVRFID0gZmFsc2U7XG5cdH1cblxuXG4gIC8qKlxuICAgKiB1cGRhdGXplqLmlbBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGUoKXtcbiAgICB0aGlzLnRpbWVyICs9IDAuMDE7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLkVORCk7XG4gICAgaWYgKHRoaXMuVVBEQVRFID09IGZhbHNlKSB7XG4gICAgICAvL3RoaXMuc2NlbmUucmVtb3ZlKHRoaXMuc2NlbmUuY2hpbGRyZW5bMF0pO1xuICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgIGlmICh0aGlzLnNjZW5lLmNoaWxkcmVuLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHRoaXMuRU5EID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAqIDAuMDAwNTtcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0aW1lO1xuICAgIHRoaXMubWVzaC5yb3RhdGlvbi54ID0gdGltZSAqIDAuMjtcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueSA9IHRpbWUgKiAwLjQ7XG4gICAgLy8gdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDEwMCpNYXRoLnNpbih0aGlzLnRpbWVyKTtcbiAgICAvLyB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMTAwKiBNYXRoLmNvcyh0aGlzLnRpbWVyKTtcbiAgICBsZXQgcmFkID0gNjAwICsgTWF0aC5zaW4odGhpcy50aW1lcikgKiAyMDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IE1hdGguc2luKHRoaXMudGltZXIgKiAwLjQpICogTWF0aC5jb3ModGhpcy50aW1lciAqIDAuMykgKiByYWQ7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IE1hdGguY29zKHRoaXMudGltZXIgKiAwLjQpICogcmFkO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSBNYXRoLnNpbih0aGlzLnRpbWVyICogMC40KSAqIE1hdGguc2luKHRoaXMudGltZXIgKiAwLjMpICogcmFkOyAvLytNYXRoLnNpbih0aGlzLnRpbWVyKjAuNSkqMjAwO1xuICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxMDAgKiBNYXRoLmNvcyh0aGlzLnRpbWVyICogMC4wMDUpKSk7XG5cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9vdmVyU2NlbmUwMi5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xcbnVuaWZvcm0gZmxvYXQgdGltZTtcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5hdHRyaWJ1dGUgdmVjMyB0cmFuc2xhdGU7XFxudmFyeWluZyB2ZWMyIHZVdjtcXG52YXJ5aW5nIGZsb2F0IHZTY2FsZTtcXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHRyYW5zbGF0ZSwgMS4wICk7XFxuICAgIHZlYzMgdHJUaW1lID0gdmVjMyh0cmFuc2xhdGUueCArIHRpbWUsdHJhbnNsYXRlLnkgKyB0aW1lLHRyYW5zbGF0ZS56ICsgdGltZSk7XFxuICAgIGZsb2F0IHNjYWxlID0gIHNpbiggdHJUaW1lLnggKiAyLjEgKSArIHNpbiggdHJUaW1lLnkgKiAyLjEgKSArIHNpbiggdHJUaW1lLnogKiAyLjEgKTtcXG4gICAgdlNjYWxlID0gc2NhbGU7XFxuICAgIC8vc2NhbGUgPSBzY2FsZSAqIDEwLjAgKyAxMC4wO1xcbiAgICBtdlBvc2l0aW9uLnh5eiArPSBwb3NpdGlvbiAqIHNjYWxlO1xcbiAgICB2VXYgPSB1djtcXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvb3Zlci52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBzYW1wbGVyMkQgbWFwO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxudmFyeWluZyBmbG9hdCB2U2NhbGU7XFxuLy8gSFNMIHRvIFJHQiBDb252ZXJ0aW9uIGhlbHBlcnNcXG5cXG5cXG52ZWMzIEhVRXRvUkdCKGZsb2F0IEgpe1xcbiAgICBIID0gbW9kKEgsMS4wKTtcXG4gICAgZmxvYXQgUiA9IGFicyhIICogNi4wIC0gMy4wKSAtIDEuMDtcXG4gICAgZmxvYXQgRyA9IDIuMCAtIGFicyhIICogNi4wIC0gMi4wKTtcXG4gICAgZmxvYXQgQiA9IDIuMCAtIGFicyhIICogNi4wIC0gNC4wKTtcXG4gICAgcmV0dXJuIGNsYW1wKHZlYzMoUixHLEIpLDAuMCwxLjApO1xcbn1cXG52ZWMzIEhTTHRvUkdCKHZlYzMgSFNMKXtcXG4gICAgdmVjMyBSR0IgPSBIVUV0b1JHQihIU0wueCk7XFxuICAgIGZsb2F0IEMgPSAoMS4wIC0gYWJzKDIuMCAqIEhTTC56IC0gMS4wKSkgKiBIU0wueTtcXG4gICAgcmV0dXJuIChSR0IgLSAwLjUpICogQyArIEhTTC56O1xcbn1cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzQgZGlmZnVzZUNvbG9yID0gdGV4dHVyZTJEKCBtYXAsIHZVdiApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCBkaWZmdXNlQ29sb3IueHl6ICogSFNMdG9SR0IodmVjMyh2U2NhbGUvNS4wLCAxLjAsIDAuNSkpLCBkaWZmdXNlQ29sb3IudyApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSBkaWZmdXNlQ29sb3IqdmVjNCgxLjAsMS4wLDEuMCwxLjApO1xcbiAgICBpZiAoIGRpZmZ1c2VDb2xvci53IDwgMC41ICkgZGlzY2FyZDtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvb3Zlci5mcmFnXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBTY2VuZTAxXG4gKiBEYXRlOiAxNy8wNS8zMVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cblxuaW1wb3J0IGF1ZGlvIGZyb20gXCIuL1V0aWxzL2F1ZGlvXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUwMSBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLmN1YmUgPSBudWxsO1xuXG4gICAgdGhpcy5sb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgIHRoaXMubWFwVGV4dHVyZSA9IHRoaXMubG9hZGVyLmxvYWQoICcuLy4uLy4uLy4uL2Fzc2V0cy9yZXNvdXJjZS9pbWcvc3RvbmUuanBnJyk7XG5cbiAgICB0aGlzLnRpbWVyID0gMDtcblxuICAgIHRoaXMuZWxWb2x1bWUgPSBudWxsO1xuICAgIHRoaXMuZWxWb2x1bWVWYWwgPSBudWxsO1xuXG4gICAgdGhpcy5ncm91cCA9IG51bGw7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLl91cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY3ViZV91cGRhdGUgPSB0aGlzLl9jdWJlX3VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuXG4gICAgLy8gdGhpcy5hdWRpb0luaXQgPSBuZXcgYXVkaW8oKTtcblxuICAgIHRoaXMuYXVkaW9Jbml0KCk7XG5cbiAgfVxuXG4gIGF1ZGlvSW5pdCgpe1xuXG4gICAgbGV0IGN0eCwgYW5hbHlzZXIsIGZyZXF1ZW5jaWVzLCBnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UsIGV4ZWN1dGU7XG5cbiAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgIGN0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblxuICAgIGFuYWx5c2VyID0gY3R4LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgZnJlcXVlbmNpZXMgPSBuZXcgVWludDhBcnJheShhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCk7XG5cbiAgICBnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZyZXF1ZW5jaWVzKTtcbiAgICAgIHJldHVybiBmcmVxdWVuY2llcy5yZWR1Y2UoZnVuY3Rpb24ocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIGN1cnJlbnQ7XG4gICAgICAgICAgfSkgLyBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICB9O1xuXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe2F1ZGlvOiB0cnVlfSlcbiAgICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5oYWNrRm9yTW96emlsYSA9IHN0cmVhbTtcbiAgICAgICAgICBjdHguY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKVxuICAgICAgICAgIC8vIEFuYWx5c2VyTm9kZeOBq+aOpee2mlxuICAgICAgICAgICAgICAuY29ubmVjdChhbmFseXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyDpn7Pph4/jgpLooajnpLrjgZnjgovopoHntKBcbiAgICB0aGlzLmVsVm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbHVtZScpO1xuXG4gICAgLy/lj6/og73jgarpmZDjgorpq5jjgYTjg5Xjg6zjg7zjg6Djg6zjg7zjg4jjgafpn7Pph4/jgpLlj5blvpfjgZfjgIHooajnpLrjgpLmm7TmlrDjgZnjgotcbiAgICBleGVjdXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyB0aGlzLmVsVm9sdW1lLmlubmVySFRNTCA9IE1hdGguZmxvb3IoZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlKCkpO1xuICAgICAgdGhpcy5lbFZvbHVtZVZhbCA9IE1hdGguZmxvb3IoZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlKCkpO1xuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZXhlY3V0ZSk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG5cbiAgICBleGVjdXRlKCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiDjgrfjg7zjg7PjgpLkvZzmiJDjgILjgqrjg5bjgrjjgqfjgq/jg4jjgpLmoLzntI1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7IC8v44K344O844Oz5L2c5oiQXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgY29uc3Qgc3RlcCA9MzA7XG4gICAgY29uc3QgbnVtID0gMTA7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gbnVtOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IG51bTsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHogPSAxOyB6IDw9IG51bTsgeiArKykge1xuICAgICAgICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEwLCAxMCksXG4gICAgICAgICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgICAgICAgICAgICAgbWFwOiB0aGlzLm1hcFRleHR1cmUsXG4gICAgICAgICAgICAgICAgYnVtcE1hcDogdGhpcy5tYXBUZXh0dXJlLFxuICAgICAgICAgICAgICAgIGJ1bXBTY2FsZTogMC4wNSxcbiAgICAgICAgICAgICAgICBzcGVjdWxhcjogMHhjY2NjY2MsXG4gICAgICAgICAgICAgICAgc2hpbmluZXNzOjUwLFxuICAgICAgICAgICAgICAgIGFtYmllbnQ6IDB4ZmZmZmZmXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmN1YmUucG9zaXRpb24uc2V0KFxuICAgICAgICAgICAgICAoeCAtIG51bSAvIDIpICogc3RlcCxcbiAgICAgICAgICAgICAgKHkgLSBudW0gLyAyKSAqIHN0ZXAsXG4gICAgICAgICAgICAgICh6IC0gbnVtIC8gMikgKiBzdGVwXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMuY3ViZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5ncm91cCk7XG5cbiAgICBjb25zdCBwb2ludExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYpO1xuICAgIHBvaW50TGlnaHQucG9zaXRpb24uc2V0KDIwMCwgMjAwLCAyMDApO1xuICAgIHRoaXMuc2NlbmUuYWRkKHBvaW50TGlnaHQpO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzAsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMjAwO1xuXG4gIH1cblxuXG4gIF9jdWJlX3VwZGF0ZSh3YXZlRGF0YSlcbiAge1xuXG4gICAgdGhpcy5ncm91cC5zY2FsZS54ID0gMSArIHdhdmVEYXRhLzIwMDtcbiAgICB0aGlzLmdyb3VwLnNjYWxlLnkgPSAxICsgd2F2ZURhdGEvMjAwO1xuICAgIHRoaXMuZ3JvdXAuc2NhbGUueiA9IDEgKyB3YXZlRGF0YS8yMDA7XG5cbiAgfVxuXG5cbiAgX3JlbmRlcigpIHtcbiAgICB0aGlzLmdyb3VwLnJvdGF0aW9uLnggKz0gMC4wMTtcbiAgICB0aGlzLmdyb3VwLnJvdGF0aW9uLnkgKz0gMC4wMTtcbiAgICB0aGlzLmdyb3VwLnJvdGF0aW9uLnogKz0gMC4wMTtcbiAgICB0aGlzLmdyb3VwLnRyYXZlcnNlKGZ1bmN0aW9uKG9iaikge1xuICAgICAgaWYgKG9iaiAhPSB0aGlzLmdyb3VwKSB7XG4gICAgICAgIG9iai5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgICAgIG9iai5yb3RhdGlvbi55ICs9IDAuMDE7XG4gICAgICAgIG9iai5yb3RhdGlvbi56ICs9IDAuMDE7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICB9XG5cblxuICAvKipcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGUoKXtcblxuICAgIHRoaXMuY3ViZV91cGRhdGUodGhpcy5lbFZvbHVtZVZhbCk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDEuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBhdWRpb1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGF1ZGlvIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuZWxWb2x1bWUgPSBudWxsO1xuICAgIHRoaXMuZWxWb2x1bWVWYWwgPSBudWxsO1xuXG4gICAgdGhpcy5nZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UgPSBudWxsO1xuXG4gICAgdGhpcy5leGVjdXRlID0gdGhpcy5fZXhlY3V0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5nZXRWYWwgPSB0aGlzLl9nZXRWYWwuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYXVkaW9Jbml0KCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGF1ZGlvSW5pdCgpe1xuXG4gICAgbGV0IGN0eCwgYW5hbHlzZXIsIGZyZXF1ZW5jaWVzO1xuXG4gICAgd2luZG93LkF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICBjdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICBhbmFseXNlciA9IGN0eC5jcmVhdGVBbmFseXNlcigpO1xuICAgIGZyZXF1ZW5jaWVzID0gbmV3IFVpbnQ4QXJyYXkoYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpO1xuXG4gICAgdGhpcy5nZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZyZXF1ZW5jaWVzKTtcbiAgICAgIHJldHVybiBmcmVxdWVuY2llcy5yZWR1Y2UoZnVuY3Rpb24ocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIGN1cnJlbnQ7XG4gICAgICAgICAgfSkgLyBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICB9O1xuXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe2F1ZGlvOiB0cnVlfSlcbiAgICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5oYWNrRm9yTW96emlsYSA9IHN0cmVhbTtcbiAgICAgICAgICBjdHguY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKVxuICAgICAgICAgIC8vIEFuYWx5c2VyTm9kZeOBq+aOpee2mlxuICAgICAgICAgICAgICAuY29ubmVjdChhbmFseXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICB0aGlzLmV4ZWN1dGUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXhlY3V0ZSgpe1xuICAgIC8vIOmfs+mHj+OCkuihqOekuuOBmeOCi+imgee0oFxuICAgIHRoaXMuZWxWb2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lJyk7XG5cbiAgICAvLyDlj6/og73jgarpmZDjgorpq5jjgYTjg5Xjg6zjg7zjg6Djg6zjg7zjg4jjgafpn7Pph4/jgpLlj5blvpfjgZfjgIHooajnpLrjgpLmm7TmlrDjgZnjgotcbiAgICB0aGlzLmVsVm9sdW1lLmlubmVySFRNTCA9IE1hdGguZmxvb3IodGhpcy5nZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UoKSk7XG4gICAgdGhpcy5lbFZvbHVtZVZhbCA9IE1hdGguZmxvb3IodGhpcy5nZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UoKSk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5leGVjdXRlKTtcblxuICAgIHJldHVybih0aGlzLmVsVm9sdW1lVmFsKTtcbiAgfVxuXG4gIF9nZXRWYWwoKXtcblxuICAgIHJldHVybih0aGlzLmVsVm9sdW1lVmFsKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9VdGlscy9hdWRpby5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFNjZW5lMDJcbiAqIERhdGU6IDE3LzA1LzMxXG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5Jztcbi8vIGltcG9ydCBhdWRpbyBmcm9tIFwiLi9VdGlscy9hdWRpb1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lMDIgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5zdGVwID0gMDtcbiAgICB0aGlzLmtub3QgPSBudWxsOyAvLyDntZDjgbPnm65cblxuICAgIHRoaXMuZWxWb2x1bWUgPSBudWxsO1xuICAgIHRoaXMuZWxWb2x1bWVWYWwgPSBudWxsO1xuXG4gICAgLy/jg4jjg7zjg6njgrnnlJ/miJDjgaflv4XopoHjgarjg5Hjg6njg6Hjg7zjgr9cbiAgICB0aGlzLnJhZGl1cyA9IDIwO1xuICAgIHRoaXMudHViZSA9IDI4LjI7XG4gICAgdGhpcy5yYWRpYWxTZWdtZW50cyA9IDYwMDtcbiAgICB0aGlzLnR1YnVsYXJTZWdtZW50cyA9IDEyO1xuICAgIHRoaXMucCA9IDU7XG4gICAgdGhpcy5xID0gNDtcbiAgICB0aGlzLmhlaWdodFNjYWxlID0gNDtcbiAgICB0aGlzLmFzUGFydGljbGVzID0gdHJ1ZTtcbiAgICB0aGlzLnJvdGF0ZSA9IHRydWU7XG5cbiAgICB0aGlzLnBlck1hdCA9IG51bGw7XG5cbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG5cbiAgICB0aGlzLnRpbWVyID0gMDtcblxuICAgIHRoaXMuZ2VuZXJhdGVTcHJpdGUgPSB0aGlzLl9nZW5lcmF0ZVNwcml0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUGFydGljbGVTeXN0ZW0gPSB0aGlzLl9jcmVhdGVQYXJ0aWNsZVN5c3RlbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlTWVzaCA9IHRoaXMuX2NyZWF0ZU1lc2guYmluZCh0aGlzKTtcbiAgICBcbiAgICB0aGlzLmNpcmNsZV91cGRhdGUgPSB0aGlzLl9jaXJjbGVfdXBkYXRlLmJpbmQodGhpcyk7XG5cblxuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy5fdXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG5cbiAgICB0aGlzLmF1ZGlvSW5pdCgpO1xuXG4gIH1cblxuXG4gIGF1ZGlvSW5pdCgpe1xuXG4gICAgbGV0IGN0eCwgYW5hbHlzZXIsIGZyZXF1ZW5jaWVzLCBnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UsIGV4ZWN1dGU7XG5cbiAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgIGN0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblxuICAgIGFuYWx5c2VyID0gY3R4LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgZnJlcXVlbmNpZXMgPSBuZXcgVWludDhBcnJheShhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCk7XG5cbiAgICBnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZyZXF1ZW5jaWVzKTtcbiAgICAgIHJldHVybiBmcmVxdWVuY2llcy5yZWR1Y2UoZnVuY3Rpb24ocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIGN1cnJlbnQ7XG4gICAgICAgICAgfSkgLyBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICB9O1xuXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe2F1ZGlvOiB0cnVlfSlcbiAgICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5oYWNrRm9yTW96emlsYSA9IHN0cmVhbTtcbiAgICAgICAgICBjdHguY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKVxuICAgICAgICAgIC8vIEFuYWx5c2VyTm9kZeOBq+aOpee2mlxuICAgICAgICAgICAgICAuY29ubmVjdChhbmFseXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyDpn7Pph4/jgpLooajnpLrjgZnjgovopoHntKBcbiAgICB0aGlzLmVsVm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbHVtZScpO1xuXG4gICAgLy8g5Y+v6IO944Gq6ZmQ44KK6auY44GE44OV44Os44O844Og44Os44O844OI44Gn6Z+z6YeP44KS5Y+W5b6X44GX44CB6KGo56S644KS5pu05paw44GZ44KLXG4gICAgZXhlY3V0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gdGhpcy5lbFZvbHVtZS5pbm5lckhUTUwgPSBNYXRoLmZsb29yKGdldEJ5dGVGcmVxdWVuY3lEYXRhQXZlcmFnZSgpKTtcbiAgICAgIHRoaXMuZWxWb2x1bWVWYWwgPSBNYXRoLmZsb29yKGdldEJ5dGVGcmVxdWVuY3lEYXRhQXZlcmFnZSgpKTtcblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGV4ZWN1dGUpO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIC8vXG4gICAgZXhlY3V0ZSgpO1xuICB9XG5cbiAgLy8gZnJvbSBUSFJFRS5qcyBleGFtcGxlc1xuICBfZ2VuZXJhdGVTcHJpdGUoKSB7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTY7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gMTY7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQodGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCAwLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsIHRoaXMuY2FudmFzLndpZHRoIC8gMik7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuMiwgJ3JnYmEoMCwyNTUsMjU1LDEpJyk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNCwgJ3JnYmEoMCwwLDY0LDEpJyk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsMCwwLDEpJyk7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUodGhpcy5jYW52YXMpO1xuICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIHJldHVybiB0ZXh0dXJlO1xuXG4gIH1cblxuICBfY3JlYXRlUGFydGljbGVTeXN0ZW0oZ2VvbSkge1xuICAgIHRoaXMucGVyTWF0ID0gbmV3IFRIUkVFLlBhcnRpY2xlQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgICBzaXplOiAyLFxuICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICBibGVuZGluZzogVEhSRUUuQWRkaXRpdmVCbGVuZGluZyxcbiAgICAgIG1hcDogdGhpcy5nZW5lcmF0ZVNwcml0ZSgpXG4gICAgfSk7XG5cbiAgICBjb25zdCBzeXN0ZW0gPSBuZXcgVEhSRUUuUGFydGljbGVTeXN0ZW0oZ2VvbSwgdGhpcy5wZXJNYXQpO1xuICAgIHN5c3RlbS5zb3J0UGFydGljbGVzID0gdHJ1ZTtcbiAgICByZXR1cm4gc3lzdGVtO1xuICB9XG5cbiAgX2NyZWF0ZU1lc2goZ2VvbSkge1xuXG4gICAgLy8gYXNzaWduIHR3byBtYXRlcmlhbHNcbiAgICBjb25zdCBtZXNoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHt9KTtcbiAgICBtZXNoTWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XG5cbiAgICAvLyBjcmVhdGUgYSBtdWx0aW1hdGVyaWFsXG4gICAgY29uc3QgbWVzaCA9IFRIUkVFLlNjZW5lVXRpbHMuY3JlYXRlTXVsdGlNYXRlcmlhbE9iamVjdChnZW9tLCBbbWVzaE1hdGVyaWFsXSk7XG5cbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrfjg7zjg7PjgpLkvZzmiJDjgILjgqrjg5bjgrjjgqfjgq/jg4jjgpLmoLzntI1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpOyAvL+OCt+ODvOODs+S9nOaIkFxuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNTAsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMSwgNTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IC0zMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gNDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDUwO1xuICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygxMCwgMCwgMCkpO1xuXG4gICAgaWYgKHRoaXMua25vdCkgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5rbm90KTtcbiAgICAvLyBjcmVhdGUgYSBuZXcgb25lXG4gICAgbGV0IGdlb20gPSBuZXcgVEhSRUUuVG9ydXNLbm90R2VvbWV0cnkodGhpcy5yYWRpdXMsIHRoaXMudHViZSwgTWF0aC5yb3VuZCh0aGlzLnJhZGlhbFNlZ21lbnRzKSwgTWF0aC5yb3VuZCh0aGlzLnR1YnVsYXJTZWdtZW50cyksIE1hdGgucm91bmQodGhpcy5wKSwgTWF0aC5yb3VuZCh0aGlzLnEpLCB0aGlzLmhlaWdodFNjYWxlKTtcblxuICAgIGlmICh0aGlzLmFzUGFydGljbGVzKSB7XG4gICAgICB0aGlzLmtub3QgPSB0aGlzLmNyZWF0ZVBhcnRpY2xlU3lzdGVtKGdlb20pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmtub3QgPSB0aGlzLmNyZWF0ZU1lc2goZ2VvbSk7XG4gICAgfVxuXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5rbm90KTtcblxuXG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4hcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIF9jaXJjbGVfdXBkYXRlKHdhdmVEYXRhKVxuICB7XG5cbiAgICB0aGlzLmtub3Quc2NhbGUueCA9IDEgKyB3YXZlRGF0YS8zMDtcbiAgICB0aGlzLmtub3Quc2NhbGUueSA9IDEgKyB3YXZlRGF0YS8zMDtcbiAgICB0aGlzLmtub3Quc2NhbGUueiA9IDEgKyB3YXZlRGF0YS8zMDtcblxuICB9XG5cblxuICAvKipcbiAgICogdXBkYXRl6Zai5pWwXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlKCl7XG5cbiAgICB0aGlzLmNpcmNsZV91cGRhdGUodGhpcy5lbFZvbHVtZVZhbCk7XG5cbiAgICBpZiAodGhpcy5yb3RhdGUpIHtcbiAgICAgIHRoaXMua25vdC5yb3RhdGlvbi54ID0gdGhpcy5zdGVwICs9IDAuMDAxO1xuICAgICAgdGhpcy5rbm90LnJvdGF0aW9uLnkgPSB0aGlzLnN0ZXAgKz0gMC4wMDE7XG4gICAgICB0aGlzLmtub3Qucm90YXRpb24ueiA9IHRoaXMuc3RlcCArPSAwLjAwMTtcblxuICAgICAgdGhpcy50aW1lciArPSAwLjAxO1xuICAgICAgbGV0IHJhZCA9IDEwICsgTWF0aC5zaW4odGhpcy50aW1lcikgKiAxMDtcbiAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSBNYXRoLnNpbih0aGlzLnRpbWVyICogMC40KSAqIE1hdGguY29zKHRoaXMudGltZXIgKiAwLjMpICogcmFkO1xuICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IE1hdGguY29zKHRoaXMudGltZXIgKiAwLjQpICogcmFkO1xuICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IE1hdGguc2luKHRoaXMudGltZXIgKiAwLjQpICogTWF0aC5zaW4odGhpcy50aW1lciAqIDAuMykgKiByYWQ7XG4gICAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMTAwICogTWF0aC5jb3ModGhpcy50aW1lciAqIDAuMDA1KSkpO1xuXG4gICAgfVxuXG5cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAyLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogU2NlbmUwM1xuICogRGF0ZTogMTcvMDYvMTlcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuaW1wb3J0IFBsYW5lU2NlbmUwMyBmcm9tICcuL1BsYW5lU2NlbmUwMyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUwMyBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcblxuICAgIHRoaXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudXBkYXRlID0gdGhpcy5fdXBkYXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5sb2FkVGV4dHVyZSA9IHRoaXMuX2xvYWRUZXh0dXJlLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnBsYW5lID0gbmV3IFBsYW5lU2NlbmUwMygpOyAvLyBwbGFuZVxuXG5cdFx0dGhpcy5pbml0KCk7IC8vIOWIneacn+WMluWun+ihjFxuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG5cblx0XHR0aGlzLmxvYWRUZXh0dXJlKCk7XG5cbiAgfVxuXG5cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpOyAvL+OCt+ODvOODs+S9nOaIkFxuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDnlLvlg4/jgpLjg63jg7zjg4lcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9sb2FkVGV4dHVyZSgpe1xuXG5cdFx0dGhpcy5wbGFuZS5sb2FkVGV4dHVyZSgnLi4vLi4vLi4vLi4vYXNzZXRzL3Jlc291cmNlL2ltZy9zaGlidXlhMDEuanBnJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5wbGFuZS5tZXNoKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMub25SZXNpemUoKTtcblx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdHRoaXMub25SZXNpemUoKTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSk7XG5cblx0fVxuXG4gIC8qKlxuICAgKiDmm7TmlrBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGUoKSB7XG5cblx0XHR0aGlzLnBsYW5lLnVuaWZvcm1zLnRpbWUudmFsdWUgKz0gMC4wNTtcblxuXHRcdC8vIHdpbmRvdy5jb25zb2xlLmxvZygnMDMnKTtcbiAgfVxuXG4gIC8qKlxuICAgKuOAgOeUu+mdouODquOCteOCpOOCuuOCpOODmeODs+ODiFxuICAgKi9cbiAgX29uUmVzaXplKCkge1xuXHRcdHRoaXMuY2FudmFzLndpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblx0XHR0aGlzLnBsYW5lLm1lc2gubWF0ZXJpYWwudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXG4gIH1cblxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDMuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBQbGFuZVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5lU2NlbmUwMyBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuXHRcdHRoaXMudW5pZm9ybXMgPSB7fTtcblx0XHR0aGlzLnRleHR1cmUgPSBudWxsO1xuXHRcdHRoaXMubWVzaCA9IG51bGw7XG5cblx0XHR0aGlzLmxvYWRUZXh0dXJlID0gdGhpcy5fbG9hZFRleHR1cmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNyZWF0ZU1lc2ggPSB0aGlzLl9jcmVhdGVNZXNoLmJpbmQodGhpcyk7XG5cdFx0Ly8gdGhpcy5yZW5kZXIgPSB0aGlzLl9yZW5kZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlc2l6ZSA9IHRoaXMuX3Jlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuXHRfbG9hZFRleHR1cmUoaW1hZ2UsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcblx0XHRsb2FkZXIubG9hZChpbWFnZSwgKHRleHR1cmUpID0+IHtcblx0XHRcdHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTmVhcmVzdEZpbHRlcjtcbiAgICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTmVhcmVzdEZpbHRlcjtcbiAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XG4gICAgICB0aGlzLm1lc2ggPSB0aGlzLmNyZWF0ZU1lc2goKTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG5cdH1cblxuXHRfY3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLnVuaWZvcm1zID0ge1xuXHRcdFx0dGltZTogeyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxuXHRcdFx0cmVzb2x1dGlvbjogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigpIH0sXG5cdFx0XHRtb3VzZTogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigpIH1cblx0XHR9O1xuXHRcdHJldHVybiBuZXcgVEhSRUUuTWVzaChcblx0XHRcdG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDIsIDIpLFxuXHRcdFx0bmV3IFRIUkVFLlJhd1NoYWRlck1hdGVyaWFsKHtcblx0XHRcdFx0dW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG5cdFx0XHRcdHZlcnRleFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9zY2VuZTAzLnZlcnQnKSxcblx0XHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvc2NlbmUwMy5mcmFnJyksXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7xcbiAgICogQHByaXZhdGVcbiAgICovXG5cdC8vIF9yZW5kZXIodGltZSkge1xuXHQvL1xuXHRcdC8vIGlmICh0aGlzLnN0b3ApIHJldHVybjtcblx0XHQvLyB0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgKz0gdGltZSAvIHRoaXMuaW50ZXJ2YWw7XG5cdFx0Ly8gaWYgKHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA+IDEpIHtcblx0XHQvLyBcdHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA9IDA7XG5cdFx0Ly8gXHR0aGlzLnByZXZfbnVtID0gdGhpcy5uZXh0X251bTtcblx0XHQvLyBcdHRoaXMudW5pZm9ybXMudGV4UHJldi52YWx1ZSA9IHRoaXMudGV4dHVyZXNbdGhpcy5uZXh0X251bV07XG5cdFx0Ly8gXHR3aGlsZSAodGhpcy5uZXh0X251bSA9PSB0aGlzLnByZXZfbnVtKSB7XG5cdFx0Ly8gXHRcdHRoaXMubmV4dF9udW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRleHR1cmVzLmxlbmd0aCk7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHR0aGlzLnVuaWZvcm1zLnRleE5leHQudmFsdWUgPSB0aGlzLnRleHR1cmVzW3RoaXMubmV4dF9udW1dO1xuXHRcdC8vIH1cbiAgLy8gfVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3Jlc2l6ZSgpe1xuXHRcdHRoaXMudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9QbGFuZVNjZW5lMDMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuICAgIHZVdiA9IHV2O1xcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL3NjZW5lMDMudmVydFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIOeyvuW6puS/rumjvuWtkOOBruWuo+iogCAqL1xcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxuLyogV2ViR0zjgaflj5fjgZHmuKHjgZXjgozjgZ/lpInmlbAgKi9cXG51bmlmb3JtIGZsb2F0IHRpbWU7IC8vIHRpbWUgKDFzZWNvbmQgPT0gMS4wKVxcbnVuaWZvcm0gdmVjMiAgbW91c2U7IC8vIG1vdXNlICgtMS4wIH4gMS4wKVxcbnVuaWZvcm0gdmVjMiAgcmVzb2x1dGlvbjsgLy8g6Kej5YOP5bqmICg1MTIuMCwgNTEyLjApXFxuXFxuY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1O1xcblxcbnZlYzIgc3F1YXJlRnJhbWVfM18wKHZlYzIgc2NyZWVuU2l6ZSkge1xcbiAgdmVjMiBwb3NpdGlvbiA9IDIuMCAqIChnbF9GcmFnQ29vcmQueHkgLyBzY3JlZW5TaXplLnh5KSAtIDEuMDtcXG4gIHBvc2l0aW9uLnggKj0gc2NyZWVuU2l6ZS54IC8gc2NyZWVuU2l6ZS55O1xcbiAgcmV0dXJuIHBvc2l0aW9uO1xcbn1cXG5cXG52ZWMyIHNxdWFyZUZyYW1lXzNfMCh2ZWMyIHNjcmVlblNpemUsIHZlYzIgY29vcmQpIHtcXG4gIHZlYzIgcG9zaXRpb24gPSAyLjAgKiAoY29vcmQueHkgLyBzY3JlZW5TaXplLnh5KSAtIDEuMDtcXG4gIHBvc2l0aW9uLnggKj0gc2NyZWVuU2l6ZS54IC8gc2NyZWVuU2l6ZS55O1xcbiAgcmV0dXJuIHBvc2l0aW9uO1xcbn1cXG5cXG5cXG5cXG5tYXQzIGNhbGNMb29rQXRNYXRyaXhfNV8xKHZlYzMgb3JpZ2luLCB2ZWMzIHRhcmdldCwgZmxvYXQgcm9sbCkge1xcbiAgdmVjMyByciA9IHZlYzMoc2luKHJvbGwpLCBjb3Mocm9sbCksIDAuMCk7XFxuICB2ZWMzIHd3ID0gbm9ybWFsaXplKHRhcmdldCAtIG9yaWdpbik7XFxuICB2ZWMzIHV1ID0gbm9ybWFsaXplKGNyb3NzKHd3LCBycikpO1xcbiAgdmVjMyB2diA9IG5vcm1hbGl6ZShjcm9zcyh1dSwgd3cpKTtcXG5cXG4gIHJldHVybiBtYXQzKHV1LCB2diwgd3cpO1xcbn1cXG5cXG5cXG5cXG5cXG52ZWMzIGdldFJheV8xXzIobWF0MyBjYW1NYXQsIHZlYzIgc2NyZWVuUG9zLCBmbG9hdCBsZW5zTGVuZ3RoKSB7XFxuICByZXR1cm4gbm9ybWFsaXplKGNhbU1hdCAqIHZlYzMoc2NyZWVuUG9zLCBsZW5zTGVuZ3RoKSk7XFxufVxcblxcbnZlYzMgZ2V0UmF5XzFfMih2ZWMzIG9yaWdpbiwgdmVjMyB0YXJnZXQsIHZlYzIgc2NyZWVuUG9zLCBmbG9hdCBsZW5zTGVuZ3RoKSB7XFxuICBtYXQzIGNhbU1hdCA9IGNhbGNMb29rQXRNYXRyaXhfNV8xKG9yaWdpbiwgdGFyZ2V0LCAwLjApO1xcbiAgcmV0dXJuIGdldFJheV8xXzIoY2FtTWF0LCBzY3JlZW5Qb3MsIGxlbnNMZW5ndGgpO1xcbn1cXG5cXG5cXG5cXG52ZWMyIG1hcCh2ZWMzIHApO1xcbi8vIE9yaWdpbmFsbHkgc291cmNlZCBmcm9tIGh0dHBzOi8vd3d3LnNoYWRlcnRveS5jb20vdmlldy9sZGZTV3NcXG4vLyBUaGFuayB5b3UgScOxaWdvIDopXFxuXFxudmVjMiBjYWxjUmF5SW50ZXJzZWN0aW9uXzJfMyh2ZWMzIHJheU9yaWdpbiwgdmVjMyByYXlEaXIsIGZsb2F0IG1heGQsIGZsb2F0IHByZWNpcywgZmxvYXQgcmVkdWN0aW9uKSB7XFxuICBmbG9hdCBsYXRlc3QgPSBwcmVjaXMgKiAyLjA7XFxuICBmbG9hdCBkaXN0ICAgPSArMC4wO1xcbiAgZmxvYXQgdHlwZSAgID0gLTEuMDtcXG4gIHZlYzIgIHJlcyAgICA9IHZlYzIoLTEuMCwgLTEuMCk7XFxuXFxuICBmb3IgKGludCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XFxuICAgIGlmIChsYXRlc3QgPCBwcmVjaXMgfHwgZGlzdCA+IG1heGQpIGJyZWFrO1xcblxcbiAgICB2ZWMyIHJlc3VsdCA9IG1hcChyYXlPcmlnaW4gKyByYXlEaXIgKiBkaXN0KTtcXG5cXG4gICAgbGF0ZXN0ID0gcmVzdWx0Lng7XFxuICAgIHR5cGUgICA9IHJlc3VsdC55O1xcbiAgICBkaXN0ICArPSBsYXRlc3QgKiByZWR1Y3Rpb247XFxuICB9XFxuXFxuICBpZiAoZGlzdCA8IG1heGQpIHtcXG4gICAgcmVzID0gdmVjMihkaXN0LCB0eXBlKTtcXG4gIH1cXG5cXG4gIHJldHVybiByZXM7XFxufVxcblxcbnZlYzIgY2FsY1JheUludGVyc2VjdGlvbl8yXzModmVjMyByYXlPcmlnaW4sIHZlYzMgcmF5RGlyKSB7XFxuICByZXR1cm4gY2FsY1JheUludGVyc2VjdGlvbl8yXzMocmF5T3JpZ2luLCByYXlEaXIsIDIwLjAsIDAuMDAxLCAxLjApO1xcbn1cXG5cXG5cXG5cXG4vLyBPcmlnaW5hbGx5IHNvdXJjZWQgZnJvbSBodHRwczovL3d3dy5zaGFkZXJ0b3kuY29tL3ZpZXcvbGRmU1dzXFxuLy8gVGhhbmsgeW91IEnDsWlnbyA6KVxcblxcbnZlYzMgY2FsY05vcm1hbF80XzQodmVjMyBwb3MsIGZsb2F0IGVwcykge1xcbiAgY29uc3QgdmVjMyB2MSA9IHZlYzMoIDEuMCwtMS4wLC0xLjApO1xcbiAgY29uc3QgdmVjMyB2MiA9IHZlYzMoLTEuMCwtMS4wLCAxLjApO1xcbiAgY29uc3QgdmVjMyB2MyA9IHZlYzMoLTEuMCwgMS4wLC0xLjApO1xcbiAgY29uc3QgdmVjMyB2NCA9IHZlYzMoIDEuMCwgMS4wLCAxLjApO1xcblxcbiAgcmV0dXJuIG5vcm1hbGl6ZSggdjEgKiBtYXAoIHBvcyArIHYxKmVwcyApLnggK1xcbiAgICAgICAgICAgICAgICAgICAgdjIgKiBtYXAoIHBvcyArIHYyKmVwcyApLnggK1xcbiAgICAgICAgICAgICAgICAgICAgdjMgKiBtYXAoIHBvcyArIHYzKmVwcyApLnggK1xcbiAgICAgICAgICAgICAgICAgICAgdjQgKiBtYXAoIHBvcyArIHY0KmVwcyApLnggKTtcXG59XFxuXFxudmVjMyBjYWxjTm9ybWFsXzRfNCh2ZWMzIHBvcykge1xcbiAgcmV0dXJuIGNhbGNOb3JtYWxfNF80KHBvcywgMC4wMDIpO1xcbn1cXG5cXG5cXG5cXG4jZGVmaW5lIE5VTSAxLlxcbmZsb2F0IHQoKSB7XFxuICAgIHJldHVybiB0aW1lICogMy47XFxufVxcblxcbmZsb2F0IHJhbmRvbShpbiB2ZWMyIHApIHtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbihkb3QocC54eSwgdmVjMigxMi4zNCwgNTYuNzgpKSkgKiA5MC4wKTtcXG59XFxuXFxuZmxvYXQgc2RHcm91bmQoaW4gdmVjMyBwKSB7XFxuICAgIHJldHVybiBwLnk7XFxufVxcblxcbmZsb2F0IHNkQnVpbGRpbmdzKGluIHZlYzMgcCkge1xcbiAgICB2ZWMzIHBwID0gbW9kKHAsIDEuKSAtIC41O1xcbiAgICBmbG9hdCBoZWlnaHQgPSByYW5kb20ocC54eiAtIG1vZChwLnh6LCAxLikpICozLjtcXG4gICAgZmxvYXQgbmVhcm5lc3MgPSBtYXgoZmxvb3IocC56KSAtIHQoKSAtIDIuLCAwLjMpO1xcbiAgICBuZWFybmVzcyA9IHBvdyhuZWFybmVzcywgLjMpO1xcbiAgICBwcC55ID0gcC55ICogMC40ICogbmVhcm5lc3MgLSBoZWlnaHQgKiAwLjE7XFxuICAgIHJldHVybiBsZW5ndGgobWF4KGFicyhwcCkgLSAuMjUsIC4wKSk7XFxufVxcblxcbnZlYzIgbWFwKHZlYzMgcCkge1xcbiAgICByZXR1cm4gdmVjMihtaW4oc2RHcm91bmQocCksIHNkQnVpbGRpbmdzKHApKSwgMC4pO1xcbn1cXG5cXG4vL1xcbnZvaWQgbWFpbiAodm9pZCkge1xcbiAgICB2ZWMzIHJheU9yaWdpbiA9IHZlYzMoMCwgMS41LCAwKTtcXG4gICAgcmF5T3JpZ2luLnggKz0gKHNpbih0KCkgKiAuNykgKyBjb3ModCgpICogLjY3KSkgKiAwLjA3O1xcbiAgICByYXlPcmlnaW4ueSArPSAoc2luKHQoKSAqIC44MSkgKyBjb3ModCgpICogLjgpKSAqIDAuMjtcXG4gICAgdmVjMyByYXlUYXJnZXQgPSB2ZWMzKDAsIDEsIDk5OTk5OTkuKTtcXG4gICAgcmF5T3JpZ2luLnogPSB0KCk7XFxuICAgIHZlYzMgcmF5RGlyZWN0aW9uID0gZ2V0UmF5XzFfMihyYXlPcmlnaW4sIHJheVRhcmdldCwgc3F1YXJlRnJhbWVfM18wKHJlc29sdXRpb24ueHkpLCAyLik7XFxuXFxuICAgIHZlYzMgbGlnaHREaXIgPSBub3JtYWxpemUodmVjMygwLjMsIDMuLCAyLikpO1xcbiAgICB2ZWMzIGxpZ2h0ID0gdmVjMyguNCk7XFxuICAgIHZlYzMgYW1iaWVudCA9IHZlYzMoLjQsIC4zLCAuNSk7XFxuXFxuICAgIHZlYzIgY29sbGlzaW9uID0gY2FsY1JheUludGVyc2VjdGlvbl8yXzMocmF5T3JpZ2luLCByYXlEaXJlY3Rpb24pO1xcbiAgICBpZiAoY29sbGlzaW9uLnggPiAwLikge1xcbiAgICAgICAgdmVjMyBwb3MgPSByYXlPcmlnaW4gKyByYXlEaXJlY3Rpb24gKiBjb2xsaXNpb24ueDtcXG4gICAgICAgIHZlYzMgbm9ybWFsID0gY2FsY05vcm1hbF80XzQocG9zKTtcXG4gICAgICAgIGZsb2F0IGRpZmYgPSBjbGFtcChkb3QobGlnaHREaXIsIG5vcm1hbCksIDAuMSwgMS4wKTtcXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoZGlmZiAqIGxpZ2h0ICsgYW1iaWVudCAqIDEuL3Bvcy55LCAxLjApO1xcbiAgICB9XFxuICAgIGVsc2Uge1xcbiAgICAgICAgZmxvYXQgYyA9IGdsX0ZyYWdDb29yZC55IC8gcmVzb2x1dGlvbi55O1xcbiAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjICogMC4yLCAwLCBjICogMC4zLCAxKTtcXG4gICAgfVxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9zY2VuZTAzLmZyYWdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IERpc3BsYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBUZXh0dXJlQmcgZnJvbSBcIi4uL3Zpc3VhbC9UZXh0dXJlQmdcIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44Ki44OL44Oh44O844K344On44Oz44Or44O844OX44K544K/44O844OIXG4gICAgLy8gZ2IuaW4udXAubG9vcCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgZ2IuaW4udGV4dHVyZUJnID0gbmV3IFRleHR1cmVCZygpO1xuXG4gICAgZ2IuaW4udGV4dHVyZUJnLmluaXQoKTtcblxuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG5cdFx0Ly8gd2luZG93LmNvbnNvbGUubG9nKCdzdGF0aWNfUnVuJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlQmcuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBUZXh0dXJlQmdcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcbmltcG9ydCBQbGFuZSBmcm9tICcuL1BsYW5lJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlQmcgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJnbC1vdXRwdXQnKTtcblxuICAgIHRoaXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSA9IHRoaXMuX2NyZWF0ZUNhbWVyYS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIgPSB0aGlzLl9jcmVhdGVSZW5kZXJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmxvYWRUZXh0dXJlID0gdGhpcy5fbG9hZFRleHR1cmUuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMucGxhbmUgPSBuZXcgUGxhbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5VcGRhdGUoKTtcblxuXHRcdHRoaXMubG9hZFRleHR1cmUoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIOOCq+ODoeODqeS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZUNhbWVyYSgpe1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7zkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVSZW5kZXJlcigpe1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzICAgICAgICAgIDogZmFsc2UsXG4gICAgICBzdGVuY2lsICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlcHRoICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBmYWxzZSxcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXNcblx0XHR9KTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweGZmZmZmZiwgMC4wKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA44K344O844Oz5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OCkuODreODvOODiVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2xvYWRUZXh0dXJlKCl7XG5cblx0XHR0aGlzLnBsYW5lLmxvYWRUZXh0dXJlKCcuLi8uLi8uLi8uLi9hc3NldHMvcmVzb3VyY2UvaW1nL3NoaWJ1eWEwMS5qcGcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYW5lLm1lc2gpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcblx0XHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0dGhpcy5VcGRhdGUoKTtcblx0XHR9KTtcblxuXHR9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX1VwZGF0ZSgpIHtcblxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgICAgdGhpcy5VcGRhdGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K644Kk44OZ44Oz44OIXG4gICAqL1xuICBfb25SZXNpemUoKSB7XG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXHRcdHRoaXMucGxhbmUubWVzaC5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cblxuXHRzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9UZXh0dXJlQmcuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBQbGFuZVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5lIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG5cdFx0dGhpcy51bmlmb3JtcyA9IHt9O1xuXHRcdHRoaXMudGV4dHVyZSA9IG51bGw7XG5cdFx0dGhpcy5tZXNoID0gbnVsbDtcblxuXHRcdHRoaXMubG9hZFRleHR1cmUgPSB0aGlzLl9sb2FkVGV4dHVyZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY3JlYXRlTWVzaCA9IHRoaXMuX2NyZWF0ZU1lc2guYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVzaXplID0gdGhpcy5fcmVzaXplLmJpbmQodGhpcyk7XG5cbiAgfVxuXG5cdF9sb2FkVGV4dHVyZShpbWFnZSwgY2FsbGJhY2spIHtcblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuXHRcdGxvYWRlci5sb2FkKGltYWdlLCAodGV4dHVyZSkgPT4ge1xuXHRcdFx0dGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xuICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xuICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgIHRoaXMubWVzaCA9IHRoaXMuY3JlYXRlTWVzaCgpO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcblx0fVxuXG5cdF9jcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMudW5pZm9ybXMgPSB7XG5cdFx0XHRyZXNvbHV0aW9uOiB7XG5cdFx0XHRcdHR5cGU6ICd2MicsXG5cdFx0XHRcdHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMihkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCksXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2VSZXNvbHV0aW9uOiB7XG5cdFx0XHRcdHR5cGU6ICd2MicsXG5cdFx0XHRcdHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigyMDQ4LCAxMzU2KSxcblx0XHRcdH0sXG5cdFx0XHR0ZXh0dXJlOiB7XG5cdFx0XHRcdHR5cGU6ICd0Jyxcblx0XHRcdFx0dmFsdWU6IHRoaXMudGV4dHVyZSxcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBuZXcgVEhSRUUuTWVzaChcblx0XHRcdG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDIsIDIpLFxuXHRcdFx0bmV3IFRIUkVFLlJhd1NoYWRlck1hdGVyaWFsKHtcblx0XHRcdFx0dW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG5cdFx0XHRcdHZlcnRleFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9jb3Zlci52ZXJ0JyksXG5cdFx0XHRcdGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2NvdmVyLmZyYWcnKSxcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X3JlbmRlcih0aW1lKSB7XG5cblx0XHRpZiAodGhpcy5zdG9wKSByZXR1cm47XG5cdFx0dGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlICs9IHRpbWUgLyB0aGlzLmludGVydmFsO1xuXHRcdGlmICh0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgPiAxKSB7XG5cdFx0XHR0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgPSAwO1xuXHRcdFx0dGhpcy5wcmV2X251bSA9IHRoaXMubmV4dF9udW07XG5cdFx0XHR0aGlzLnVuaWZvcm1zLnRleFByZXYudmFsdWUgPSB0aGlzLnRleHR1cmVzW3RoaXMubmV4dF9udW1dO1xuXHRcdFx0d2hpbGUgKHRoaXMubmV4dF9udW0gPT0gdGhpcy5wcmV2X251bSkge1xuXHRcdFx0XHR0aGlzLm5leHRfbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXh0dXJlcy5sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy51bmlmb3Jtcy50ZXhOZXh0LnZhbHVlID0gdGhpcy50ZXh0dXJlc1t0aGlzLm5leHRfbnVtXTtcblx0XHR9XG4gIH1cblxuXHRfcmVzaXplKCl7XG5cdFx0dGhpcy51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1BsYW5lLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcbiAgICB2VXYgPSB1djtcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XFxudW5pZm9ybSB2ZWMyIGltYWdlUmVzb2x1dGlvbjtcXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG4gICAgdmVjMiByYXRpbyA9IHZlYzIoXFxuICAgICAgICBtaW4oKHJlc29sdXRpb24ueCAvIHJlc29sdXRpb24ueSkgLyAoaW1hZ2VSZXNvbHV0aW9uLnggLyBpbWFnZVJlc29sdXRpb24ueSksIDEuMCksXFxuICAgICAgICBtaW4oKHJlc29sdXRpb24ueSAvIHJlc29sdXRpb24ueCkgLyAoaW1hZ2VSZXNvbHV0aW9uLnkgLyBpbWFnZVJlc29sdXRpb24ueCksIDEuMClcXG4gICAgKTtcXG5cXG4gICAgdmVjMiB1diA9IHZlYzIoXFxuICAgICAgICB2VXYueCAqIHJhdGlvLnggKyAoMS4wIC0gcmF0aW8ueCkgKiAwLjUsXFxuICAgICAgICB2VXYueSAqIHJhdGlvLnkgKyAoMS4wIC0gcmF0aW8ueSkgKiAwLjVcXG4gICAgKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUsIHV2KTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvY292ZXIuZnJhZ1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuLy8gaW1wb3J0IFdlYkdMaW5pdCBmcm9tICcuL1dlYkdMaW5pdC5qcyc7XG5cbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL3Zpc3VhbC9DYW52YXNcIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44Ki44OL44Oh44O844K344On44Oz44Or44O844OX44K544K/44O844OIXG4gICAgLy8gZ2IuaW4udXAubG9vcCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgZ2IuaW4uY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgZ2IuaW4uY2FudmFzLmluaXQoKTtcblxuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG5cdFx0Ly8gd2luZG93LmNvbnNvbGUubG9nKCdzdGF0aWNfUnVuJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlTW92aWUuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDYW52YXNcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5Jztcbi8vIGltcG9ydCBUaXRsZU9iamVjdCBmcm9tIFwiLi9UaXRsZU9iamVjdFwiO1xuLy8gaW1wb3J0IENhbWVyYSBmcm9tICcuL1V0aWxzL0NhbWVyYSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy51bmlmb3JtcyA9IHtcbiAgICAgIHVfdGltZTogeyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxuICAgICAgdV9yZXNvbHV0aW9uOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfSxcbiAgICAgIHVfbW91c2U6IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9XG4gICAgfTtcblxuICAgIC8vIHRoaXMudGl0bGVPYmplY3QgPSBuZXcgVGl0bGVPYmplY3QoKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpO1xuXG4gICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIC8vIHRoaXMub3V0cHV0ID0gb3B0cy5vdXRwdXQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG5cdFx0dGhpcy5jdWJlID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhID0gdGhpcy5fY3JlYXRlQ2FtZXJhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlciA9IHRoaXMuX2NyZWF0ZVJlbmRlcmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVPYmplY3QgPSB0aGlzLl9jcmVhdGVPYmplY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9yYml0Q29udHJvbHMgPSB0aGlzLl9vcmJpdENvbnRyb2xzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnBsYW5lT2JqZWN0ID0gdGhpcy5fcGxhbmVPYmplY3QuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuVXBkYXRlID0gdGhpcy5fVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGluaXQoKXtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKCk7XG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKTtcblxuXHRcdHRoaXMub3JiaXRDb250cm9scygpO1xuXHRcdC8vIHRoaXMuY3JlYXRlT2JqZWN0KCk7XG5cbiAgICB0aGlzLnBsYW5lT2JqZWN0KCk7XG5cbiAgICB0aGlzLlVwZGF0ZSgpO1xuXG4gICAgLy8gdGhpcy50aXRsZU9iamVjdC5sb2FkVGV4dHVyZSgoKSA9PiB7XG4gICAgLy8gICB0aGlzLnNjZW5lLmFkZCh0aGlzLnRpdGxlT2JqZWN0Lm9iaik7XG4gICAgLy8gfSk7XG5cbiAgICAvL+ODquOCteOCpOOCuuOCpOODmeODs+ODiOeZuueBq1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfSwgZmFsc2UpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Kr44Oh44Op5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlQ2FtZXJhKCl7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlLFxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xuXHRcdH0pO1xuXG4gICAgLy8gdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHgwMDAwMDApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIC8vIHRoaXMub3V0cHV0LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOOCt+ODvOODs+S9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBPYmplY3TkvZzmiJBcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9jcmVhdGVPYmplY3QoKXtcblxuICAgIGxldCBjdWJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgNCwgNCk7XG4gICAgbGV0IGN1YmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgICB3aXJlZnJhbWU6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGN1YmVHZW9tZXRyeSwgY3ViZU1hdGVyaWFsKTtcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueCA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnkgPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi56ID0gMztcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY3ViZSk7XG5cblx0fVxuXG5cdF9wbGFuZU9iamVjdCgpe1xuICAgIHRoaXMucGxhbmUgPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgLy8gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMjU2LCA2NCwgNDAsIDEwKSxcbiAgICAgICAgbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoNSwgMjAsIDMyKSxcbiAgICAgICAgbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgICB1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvaW5kZXgvdGVzdC52ZXJ0JyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvaW5kZXgvdGVzdC5mcmFnJyksXG4gICAgICAgIH0pXG4gICAgKVxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X3JlbmRlcigpIHtcbiAgICBsZXQgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcbiAgICBsZXQgdGltZSA9IGNsb2NrLmdldERlbHRhKCk7XG5cbiAgICAvLyB0aGlzLnRpdGxlT2JqZWN0LnRpdHJlbmRlcih0aW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmm7TmlrBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9VcGRhdGUoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcbiAgICAgIHRoaXMuVXBkYXRlKCk7XG4gICAgfSk7XG4gICAgLy8gdGhpcy5jb250cm9scy51cGRhdGUoKTtcbiAgICB0aGlzLnVuaWZvcm1zLnVfdGltZS52YWx1ZSArPSAwLjA1O1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfVxuXG4gIC8qKlxuICAgKuOAgOeUu+mdouODquOCteOCpOOCulxuICAgKi9cbiAgX29uUmVzaXplKCkge1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXHQvKipcbiAgICog44Kr44Oh44Op44Kz44Oz44OI44Ot44O844OrXG5cdCAqL1xuXHRfb3JiaXRDb250cm9scygpe1xuXHRcdHRoaXMuY29udHJvbHMgPSBuZXcgVEhSRUUuT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSk7XG5cdFx0dGhpcy5jb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZTtcblx0XHRsZXQgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcblxuXHRcdGxldCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XG5cdFx0dGhpcy5jb250cm9scy51cGRhdGUoZGVsdGEpO1xuICB9XG5cblx0c2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvQ2FudmFzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuLy9hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCggcG9zaXRpb24sIDEuMCApO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LnZlcnRcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XFxudW5pZm9ybSBmbG9hdCB1X3RpbWU7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWMyIHN0ID0gZ2xfRnJhZ0Nvb3JkLnh5L3VfcmVzb2x1dGlvbi54eTtcXG4gICAgZ2xfRnJhZ0NvbG9yPXZlYzQoc3QueCxzdC55LDAuMCwxLjApO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LmZyYWdcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=