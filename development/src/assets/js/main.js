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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * fileOverview:
 * Project:
 * File: Entry
 * Date:
 * Author:
 */

__webpack_require__(23);

'use strict';

var Entry = function () {
	function Entry() {
		_classCallCheck(this, Entry);
	}

	/**
  * 初期化
  */


	_createClass(Entry, [{
		key: 'init',
		value: function init() {}
	}]);

	return Entry;
}();

exports.default = Entry;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Common = __webpack_require__(2);

var _Common2 = _interopRequireDefault(_Common);

var _Main = __webpack_require__(19);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * fileOverview:
 * Project:
 * File: Top
 * Date:
 * Author: Teraguchi
 */

(function () {

  // globalオブジェクト
  if (window.gb === undefined) window.gb = {};
  window.gb.in = {}; //instance

  gb.in.common = new _Common2.default();
  gb.in.main = new _Main2.default();
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Common
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Conf = __webpack_require__(3);

var _Conf2 = _interopRequireDefault(_Conf);

var _Util = __webpack_require__(4);

var _Util2 = _interopRequireDefault(_Util);

var _Utils = __webpack_require__(5);

var _Utils2 = _interopRequireDefault(_Utils);

var _Func = __webpack_require__(18);

var _Func2 = _interopRequireDefault(_Func);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var Common = function () {
  function Common() {
    _classCallCheck(this, Common);

    this.setup();
    this.setEvents();
  }

  _createClass(Common, [{
    key: 'setup',
    value: function setup() {

      /**
         * @type {Conf} : 初期値の設定・データの配置
       * @type {Util} : Util関数の初期化
       * @type {Func} : イベントマネージャーの設置
       */
      gb.in.conf = new _Conf2.default();
      gb.in.u = new _Util2.default();
      gb.in.f = new _Func2.default();

      gb.in.ut = new _Utils2.default();
    }
  }, {
    key: 'onReady',
    value: function onReady() {}
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(document).on('ready', this.onReady.bind(this));
      $(window).on('load', this.onLoad.bind(this));
    }
  }]);

  return Common;
}();

exports.default = Common;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * fileOverview:
 * Project:
 * File: Conf
 * Date:
 * Author:
 */

// import SoundData from './Data/Sound.js';

var Conf = function () {
  function Conf() {
    _classCallCheck(this, Conf);

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

  _createClass(Conf, [{
    key: 'switchMode',
    value: function switchMode() {

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
  }]);

  return Conf;
}();

exports.default = Conf;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * fileOverview: 便利関数クラス
 * Project:
 * File: Util
 * Date:
 * Author:
 */

var Util = function () {
  function Util() {
    _classCallCheck(this, Util);

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


  _createClass(Util, [{
    key: "random",
    value: function random(min, max) {

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

  }, {
    key: "random2",
    value: function random2(min1, max1, min2, max2) {

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

  }, {
    key: "hit",
    value: function hit(range) {

      return this.random(0, range - 1) === 0;
    }

    // 0から範囲内でランダムな整数を取得
    // -----------------------------------
    // @val : 範囲(int)
    // return : ランダムな整数(int)
    // -----------------------------------

  }, {
    key: "range",
    value: function range(val) {

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

  }, {
    key: "map",
    value: function map(num, resMin, resMax, baseMin, baseMax) {

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

  }, {
    key: "decimal",
    value: function decimal(num, n) {
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
  }, {
    key: "clamp",
    value: function clamp(numerator, denominator, val) {

      return val * (numerator / denominator);
    }

    /**
      * ラジアンを角度に変換
     * @param radians
     * @returns {number}
     */

  }, {
    key: "degree",
    value: function degree(radians) {

      return radians * 180 / Math.PI;
    }

    // to radians

  }, {
    key: "radian",
    value: function radian(angle) {

      return angle * Math.PI / 180; //1度何ラジアンか
    }
  }, {
    key: "dist",
    value: function dist(p1, p2) {

      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }
  }, {
    key: "ascend",
    value: function ascend(arr) {

      arr.sort(function (a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
      });
      // var a = [5,3,9,1,10]
      // 結果:10,9,5,3,1
    }
  }, {
    key: "descend",
    value: function descend(arr) {

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

  }, {
    key: "constrain",
    value: function constrain(value, min, max) {

      return Math.min(max, Math.max(value, min));

      // if (value <= low) value = low;
      // if (value >= high) value = high;     
      // return value;
    }

    // ユニークIDを取得
    // -----------------------------------

  }, {
    key: "unique",
    value: function unique() {

      return new Date().getTime();
    }

    // **jquary使用
    // ボタンモード変更
    // trueならカーソルがポインターの形に
    // falseならデフォルトのカーソルに
    // -----------------------------------
    // @flg : 適用するかどうか(boolean)
    // -----------------------------------

  }, {
    key: "buttonMode",
    value: function buttonMode(flg) {

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

  }, {
    key: "isDirection",
    value: function isDirection() {

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

  }, {
    key: "isResponsive",
    value: function isResponsive(bp) {

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

  }, {
    key: "getParam",
    value: function getParam() {

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

  }, {
    key: "hash",
    value: function hash() {

      return location.hash.replace("#", "");
    }

    /**
     * cookie取得
     * @param key
     * @returns {*}
     */

  }, {
    key: "getCookie",
    value: function getCookie(key) {

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

  }, {
    key: "setCookie",
    value: function setCookie(key, val) {

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

  }, {
    key: "getHexColor",
    value: function getHexColor(r, g, b) {
      var str;
      str = (r << 16 | g << 8 | b).toString(16);
      return "#" + new Array(7 - str.length).join("0") + str;
    }

    // ------------------------------------------------------------
    //
    //  String
    //
    // ------------------------------------------------------------

  }, {
    key: "isContain",
    value: function isContain(str, contain) {

      // strの中に,containが存在したら
      if (str.indexOf(contain) != -1) {
        return true;
      }

      return false;
    }

    // 0埋めで2桁にする関数

  }, {
    key: "add0",
    value: function add0(str) {
      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -2;


      return ("000000000000" + str).substr(num);
    }
  }, {
    key: "floatFormat",
    value: function floatFormat(number, n) {

      var _pow = Math.pow(10, n);
      return Math.round(number * _pow) / _pow;
    }

    // 値段表記
    // -----------------------------------

  }, {
    key: "price",
    value: function price(num) {

      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    }

    // 文字列を反転
    // -----------------------------------
    // @str : 文字列(String)
    // return : 文字列(String)
    // -----------------------------------

  }, {
    key: "strReverse",
    value: function strReverse(str) {

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

  }, {
    key: "replaceAll",
    value: function replaceAll(val, org, dest) {

      return val.split(org).join(dest);
    }
  }, {
    key: "strReplace",
    value: function strReplace(str, before, after) {

      var r = new RegExp(before, 'g');

      return str.replace(r, after);
    }

    // ------------------------------------------------------------
    //
    //  Date
    //
    // ------------------------------------------------------------

  }, {
    key: "getNow",
    value: function getNow() {

      this.now = new Date();
    }
  }, {
    key: "start",
    value: function start() {

      this.startTime = this.now.getTime();
    }
  }, {
    key: "elapsed",
    value: function elapsed() {

      this.elapsedTime = this.now.getTime() - this.startTime;
    }
  }, {
    key: "m",
    value: function m() {

      return Math.floor(this.elapsedTime + 100 / 60);
    }
  }, {
    key: "s",
    value: function s() {

      return Math.floor(this.elapsedTime / 1000);
    }
  }, {
    key: "ms",
    value: function ms() {

      return this.elapsedTime;
    }
  }, {
    key: "time",
    value: function time() {

      this.getNow();

      this.hour = this.now.getHours(); // 時
      this.minute = this.now.getMinutes(); // 分
      this.second = this.now.getSeconds();
      this.millSecond = this.now.getMilliseconds();
    }
  }, {
    key: "date",
    value: function date() {

      return this.now.getDate();
    }
  }, {
    key: "months",
    value: function months() {

      var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

      return this.now.getMonth() + 1;
    }
  }, {
    key: "year",
    value: function year() {

      return this.now.getFullYear();
    }
  }, {
    key: "day",
    value: function day() {

      // 曜日 (日本語)
      var weekDayJP = ["日", "月", "火", "水", "木", "金", "土"];
      var wDJ = weekDayJP[this.now.getDay()];

      // 曜日 (英語)
      var weekDayEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var wDE = weekDayEN[this.now.getDay()];
    }

    // 数日後のDateオブジェクト取得
    // -----------------------------------

  }, {
    key: "afterDay",
    value: function afterDay(date, num) {

      return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);
    }

    // ------------------------------------------------------------
    //
    //  Data type check
    //
    // ------------------------------------------------------------

  }, {
    key: "isObject",
    value: function isObject(value, ignoreArray) {
      return (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && value !== null;
    }
  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return typeof value === 'number';
    }
  }, {
    key: "isString",
    value: function isString(value) {
      return typeof value === 'string';
    }
  }, {
    key: "isFunction",
    value: function isFunction(value) {
      return typeof value === 'function';
    }
  }, {
    key: "isArray",
    value: function isArray(value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    }
  }, {
    key: "isNull",
    value: function isNull(value) {
      return value === null;
    }
  }, {
    key: "isUndefined",
    value: function isUndefined(value) {
      return typeof value === 'undefined';
    }

    // ------------------------------------------------------------
    //
    //  other
    //
    // ------------------------------------------------------------

  }, {
    key: "setImgSPSize",
    value: function setImgSPSize($target) {

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

  }, {
    key: "setPrevent",
    value: function setPrevent() {

      var self = this;

      $(window).on('touchmove.noControl', function (e) {
        e.preventDefault();
      });
    }
  }, {
    key: "removePrevent",
    value: function removePrevent() {

      $(window).off('touchmove.noControl');
    }

    // ------------------------------------------------------------
    //  host,protcol
    // ------------------------------------------------------------

  }, {
    key: "protocol",
    value: function protocol() {

      return location.protocol;
    }
  }, {
    key: "host",
    value: function host() {

      return location.hostname;
      // return location.host
    }
  }, {
    key: "port",
    value: function port() {

      return location.port;
    }
  }, {
    key: "path",
    value: function path() {

      return location.pathname;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault(e) {

      e = e || window.event;
      if (e.preventDefault) e.preventDefault();
      e.returnValue = false;
    }
  }, {
    key: "preventDefaultForScrollKeys",
    value: function preventDefaultForScrollKeys(e) {

      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    }
  }, {
    key: "disableScroll",
    value: function disableScroll() {

      if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', this.preventDefault, false);
      window.onwheel = this.preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
      window.ontouchmove = this.preventDefault; // mobile
      document.onkeydown = this.preventDefaultForScrollKeys;
    }
  }, {
    key: "enableScroll",
    value: function enableScroll() {

      if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
    }
  }]);

  return Util;
}();

exports.default = Util;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Utils
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: Teraguchi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/**
 * animation
 */


var _requestAnimationFrame = __webpack_require__(6);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _cancelAnimationFrame = __webpack_require__(7);

var _cancelAnimationFrame2 = _interopRequireDefault(_cancelAnimationFrame);

var _Array = __webpack_require__(8);

var _Array2 = _interopRequireDefault(_Array);

var _checkClient = __webpack_require__(9);

var _checkClient2 = _interopRequireDefault(_checkClient);

var _preloadImg = __webpack_require__(14);

var _preloadImg2 = _interopRequireDefault(_preloadImg);

var _setUpBtnTwitter = __webpack_require__(15);

var _setUpBtnTwitter2 = _interopRequireDefault(_setUpBtnTwitter);

var _setUpBtnLine = __webpack_require__(16);

var _setUpBtnLine2 = _interopRequireDefault(_setUpBtnLine);

var _setUpBtnFaceBook = __webpack_require__(17);

var _setUpBtnFaceBook2 = _interopRequireDefault(_setUpBtnFaceBook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);

    this._setup();
  }

  _createClass(Utils, [{
    key: '_setup',
    value: function _setup() {
      // window.console.log('Utils_Setup!!');

      /**
       * array
       */
      this.Array = new _Array2.default();

      /**
       * ua
       */
      this.checkClient = new _checkClient2.default();

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
  }]);

  return Utils;
}();

exports.default = Utils;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * requestAnimationFrame
 */
window.requestAnimationFrame = function (_this) {
  return function () {
    return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return setTimeout(callback, 1000 / 30);
    };
  };
}(undefined)();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * cancelAnimationFrame
 */
window.cancelAnimationFrame = function (_this) {
  return function () {
    return window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
      return clearTimeout(id);
    };
  };
}(undefined)();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * fileOverview: 配列の操作系
 * Project:
 * File: Array
 * Date:
 * Author:
 */
var Array = function () {
  function Array() {
    _classCallCheck(this, Array);
  }

  /**
   * 配列内のランダムな値をひとつ取得
   * @param arr : 配列
   * @returns {*} : 配列内の値
   */


  _createClass(Array, [{
    key: "arrRand",
    value: function arrRand(arr) {

      return arr[this.random(0, arr.length - 1)];
    }

    /**
      * 配列をランダムに並べ替え
     * @param arr : 配列(Array)
     * @returns {Array}
     */

  }, {
    key: "shuffle",
    value: function shuffle(arr) {

      var Arr = [];
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
  }]);

  return Array;
}();

exports.default = Array;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * fileOverview: Ua判別
 * Project:
 * File: checkClient
 * Date:
 * Author: Teraguchi
 */

var parser = __webpack_require__(10);

'use strict';

var checkClient = function () {
  function checkClient() {
    _classCallCheck(this, checkClient);

    this.ua = new parser();
  }

  /**
   * IEかどうか判定
   * @returns {boolean}
   */


  _createClass(checkClient, [{
    key: 'isIE',
    value: function isIE() {
      var browser = this.ua.getBrowser().name;
      return browser === 'IE' ? true : false;
    }

    /**
     * Firefoxかどうか判定
     * @returns {boolean}
     */

  }, {
    key: 'isFirefox',
    value: function isFirefox() {
      var browser = this.ua.getBrowser().name;
      return browser === 'Firefox' ? true : false;
    }

    /**
     * Chromeかどうか判定
     * @returns {boolean}
     */

  }, {
    key: 'isChrome',
    value: function isChrome() {
      var browser = this.ua.getBrowser().name;
      return browser === 'Chrome' ? true : false;
    }

    /**
     * Safariかどうか判定
     * @returns {boolean}
     */

  }, {
    key: 'isSafari',
    value: function isSafari() {
      var browser = this.ua.getBrowser().name;
      return browser === 'Safari' ? true : false;
    }

    /**
     * モバイルかどうか判定
     * @returns {*}
     */

  }, {
    key: 'isMobile',
    value: function isMobile() {
      var device = this.ua.getDevice().type;
      return device === 'mobile' ? true : null;
    }

    /**
     * タブレットかどうか判定
     * @returns {*}
     */

  }, {
    key: 'isTablet',
    value: function isTablet() {
      var device = this.ua.getDevice().type;
      return device === 'tablet' ? true : null;
    }

    /**
     * OS名を取得
     * @returns {string}
     */

  }, {
    key: 'os',
    value: function os() {
      return this.ua.getOS().name;
    }

    /**
     * デバイス名を取得
     * @returns {vendor|{HTC, Sprint}}
     */

  }, {
    key: 'device_name',
    value: function device_name() {
      var device_name = this.ua.getDevice().vendor;
      return device_name;
    }

    /**
     * ブラウザ名を取得
     */

  }, {
    key: 'browser_name',
    value: function browser_name() {
      return this.ua.getBrowser().name;
    }

    /**
     * ユーザーエージェント情報：全てを取得
     */

  }, {
    key: 'all',
    value: function all() {
      return this.ua.getUA();
    }
  }]);

  return checkClient;
}();

exports.default = checkClient;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
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
      S = { extend: function extend(e, t) {
      var n = {};for (var r in e) {
        t[r] && t[r].length % 2 === 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
      }return n;
    }, has: function has(e, t) {
      return typeof e == "string" ? t.toLowerCase().indexOf(e.toLowerCase()) !== -1 : !1;
    }, lowerize: function lowerize(e) {
      return e.toLowerCase();
    }, major: function major(e) {
      return (typeof e === "undefined" ? "undefined" : _typeof(e)) === a ? e.replace(/[^\d\.]/g, "").split(".")[0] : t;
    }, trim: function trim(e) {
      return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    } },
      x = { rgx: function rgx() {
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
            d = h[n + 1];if ((typeof e === "undefined" ? "undefined" : _typeof(e)) === o) {
          e = {};for (a in d) {
            d.hasOwnProperty(a) && (f = d[a], (typeof f === "undefined" ? "undefined" : _typeof(f)) === u ? e[f[0]] = t : e[f] = t);
          }
        }r = i = 0;while (r < p.length && !l) {
          l = p[r++].exec(this.getUA());if (!!l) for (a = 0; a < d.length; a++) {
            c = l[++i], f = d[a], (typeof f === "undefined" ? "undefined" : _typeof(f)) === u && f.length > 0 ? f.length == 2 ? _typeof(f[1]) == s ? e[f[0]] = f[1].call(this, c) : e[f[0]] = f[1] : f.length == 3 ? _typeof(f[1]) === s && (!f[1].exec || !f[1].test) ? e[f[0]] = c ? f[1].call(this, c, f[2]) : t : e[f[0]] = c ? c.replace(f[1], f[2]) : t : f.length == 4 && (e[f[0]] = c ? f[3].call(this, c.replace(f[1], f[2])) : t) : e[f] = c ? c : t;
          }
        }n += 2;
      }return e;
    }, str: function str(e, n) {
      for (var r in n) {
        if (_typeof(n[r]) === u && n[r].length > 0) {
          for (var s = 0; s < n[r].length; s++) {
            if (S.has(n[r][s], e)) return r === i ? t : r;
          }
        } else if (S.has(n[r], e)) return r === i ? t : r;
      }return e;
    } },
      T = { browser: { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } }, device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } },
      N = { browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [c, d], [/(opios)[\/\s]+([\w\.]+)/i], [[c, "Opera Mini"], d], [/\s(opr)\/([\w\.]+)/i], [[c, "Opera"], d], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [c, d], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[c, "IE"], d], [/(edge)\/((\d+)?[\w\.]+)/i], [c, d], [/(yabrowser)\/([\w\.]+)/i], [[c, "Yandex"], d], [/(comodo_dragon)\/([\w\.]+)/i], [[c, /_/g, " "], d], [/(micromessenger)\/([\w\.]+)/i], [[c, "WeChat"], d], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [d, [c, "MIUI Browser"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[c, /(.+)/, "$1 WebView"], d], [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [d, [c, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [c, d], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i], [[c, "UCBrowser"], d], [/(dolfin)\/([\w\.]+)/i], [[c, "Dolphin"], d], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[c, "Chrome"], d], [/;fbav\/([\w\.]+);/i], [d, [c, "Facebook"]], [/fxios\/([\w\.-]+)/i], [d, [c, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [d, [c, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [d, c], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [c, [d, x.str, T.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [c, d], [/(navigator|netscape)\/([\w\.-]+)/i], [[c, "Netscape"], d], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [c, d]], cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[v, "amd64"]], [/(ia32(?=;))/i], [[v, S.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[v, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[v, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[v, /ower/, "", S.lowerize]], [/(sun4\w)[;\)]/i], [[v, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[v, S.lowerize]]], device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [l, p, [h, y]], [/applecoremedia\/[\w\.]+ \((ipad)/], [l, [p, "Apple"], [h, y]], [/(apple\s{0,1}tv)/i], [[l, "Apple TV"], [p, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [p, l, [h, y]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [l, [p, "Amazon"], [h, y]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[l, x.str, T.device.amazon.model], [p, "Amazon"], [h, g]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [l, p, [h, g]], [/\((ip[honed|\s\w*]+);/i], [l, [p, "Apple"], [h, g]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [p, l, [h, g]], [/\(bb10;\s(\w+)/i], [l, [p, "BlackBerry"], [h, g]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [l, [p, "Asus"], [h, y]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[p, "Sony"], [l, "Xperia Tablet"], [h, y]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[p, "Sony"], [l, "Xperia Phone"], [h, g]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [p, l, [h, m]], [/android.+;\s(shield)\sbuild/i], [l, [p, "Nvidia"], [h, m]], [/(playstation\s[34portablevi]+)/i], [l, [p, "Sony"], [h, m]], [/(sprint\s(\w+))/i], [[p, x.str, T.device.sprint.vendor], [l, x.str, T.device.sprint.model], [h, g]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [p, l, [h, y]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [p, [l, /_/g, " "], [h, g]], [/(nexus\s9)/i], [l, [p, "HTC"], [h, y]], [/(nexus\s6p)/i], [l, [p, "Huawei"], [h, g]], [/(microsoft);\s(lumia[\s\w]+)/i], [p, l, [h, g]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [l, [p, "Microsoft"], [h, m]], [/(kin\.[onetw]{3})/i], [[l, /\./g, " "], [p, "Microsoft"], [h, g]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [l, [p, "Motorola"], [h, g]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [l, [p, "Motorola"], [h, y]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[p, S.trim], [l, S.trim], [h, b]], [/hbbtv.+maple;(\d+)/i], [[l, /^/, "SmartTV"], [p, "Samsung"], [h, b]], [/\(dtv[\);].+(aquos)/i], [l, [p, "Sharp"], [h, b]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[p, "Samsung"], l, [h, y]], [/smart-tv.+(samsung)/i], [p, [h, b], l], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[p, "Samsung"], l, [h, g]], [/sie-(\w+)*/i], [l, [p, "Siemens"], [h, g]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[p, "Nokia"], l, [h, g]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [l, [p, "Acer"], [h, y]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[p, "LG"], l, [h, y]], [/(lg) netcast\.tv/i], [p, l, [h, b]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [l, [p, "LG"], [h, g]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [l, [p, "Lenovo"], [h, y]], [/linux;.+((jolla));/i], [p, l, [h, g]], [/((pebble))app\/[\d\.]+\s/i], [p, l, [h, w]], [/android.+;\s(glass)\s\d/i], [l, [p, "Google"], [h, w]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i], [[l, /_/g, " "], [p, "Xiaomi"], [h, g]], [/android.+a000(1)\s+build/i], [l, [p, "OnePlus"], [h, g]], [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[h, S.lowerize], p, l]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [d, [c, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [c, d], [/rv\:([\w\.]+).*(gecko)/i], [d, c]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [c, d], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [c, [d, x.str, T.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[c, "Windows"], [d, x.str, T.os.windows.version]], [/\((bb)(10);/i], [[c, "BlackBerry"], d], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [c, d], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[c, "Symbian"], d], [/\((series40);/i], [c], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[c, "Firefox OS"], d], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [c, d], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[c, "Chromium OS"], d], [/(sunos)\s?([\w\.]+\d)*/i], [[c, "Solaris"], d], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [c, d], [/(haiku)\s(\w+)/i], [c, d], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[c, "iOS"], [d, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[c, "Mac OS"], [d, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [c, d]] },
      C = function C(t, n) {
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
  };C.VERSION = n, C.BROWSER = { NAME: c, MAJOR: f, VERSION: d }, C.CPU = { ARCHITECTURE: v }, C.DEVICE = { MODEL: l, VENDOR: p, TYPE: h, CONSOLE: m, MOBILE: g, SMARTTV: b, TABLET: y, WEARABLE: w, EMBEDDED: E }, C.ENGINE = { NAME: c, VERSION: d }, C.OS = { NAME: c, VERSION: d }, ( false ? "undefined" : _typeof(exports)) !== o ? (( false ? "undefined" : _typeof(module)) !== o && module.exports && (exports = module.exports = C), exports.UAParser = C) : ( false ? "undefined" : _typeof(__webpack_require__(12))) === s && __webpack_require__(13) ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return C;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.UAParser = C;var k = e.jQuery || e.Zepto;if ((typeof k === "undefined" ? "undefined" : _typeof(k)) !== o) {
    var L = new C();k.ua = L.getResult(), k.ua.get = function () {
      return L.getUA();
    }, k.ua.set = function (e) {
      L.setUA(e);var t = L.getResult();for (var n in t) {
        k.ua[n] = t[n];
      }
    };
  }
})((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" ? window : undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * preloadImg
 * @param imgPath
 * @returns {Promise}
 */
exports.default = function (imgPath) {
  return new Promise(function (resolve) {
    var img;
    img = new Image();
    img.addEventListener('load', function (e) {
      img.removeEventListener('load', arguments.callee);
      return resolve();
    });
    return img.src = imgPath;
  });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * setUpBtnTwitter
 * @param $btn
 * @param text
 * @param shareURL
 */
exports.default = function ($btn, text, shareURL) {
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
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * setUpBtnLine
 * @param $btn
 * @param text
 * @param shareURL
 */
exports.default = function ($btn, text) {
  var shareURL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

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
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * setUpBtnFacebook
 * @param $btn
 * @param shareURL
 * @param description
 */
exports.default = function ($btn, shareURL) {
  var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

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
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * fileOverview:
 * Project:
 * File: Func
 * Date:
 * Author:
 */

var Func = function () {
  function Func() {
    _classCallCheck(this, Func);

    this.blank();
    this.debugger();
    this.requestAnimationFrame();
    this.expandjQuery();
  }

  _createClass(Func, [{
    key: 'blank',
    value: function blank() {

      $(function () {
        $('.blank').attr('target', '_blank');
      });
    }
  }, {
    key: 'debugger',
    value: function _debugger() {

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
  }, {
    key: 'prepend',
    value: function prepend(param) {

      $('body').prepend(param);
    }
  }, {
    key: 'requestAnimationFrame',
    value: function requestAnimationFrame() {

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
  }, {
    key: 'expandjQuery',
    value: function expandjQuery() {

      jQuery.fn.extend({
        w: 0,
        h: 0,
        adjust: function adjust() {
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
        adjustW: function adjustW() {
          var w = $(this).innerWidth();
          var h = $(this).innerHeight();
          $(this).css({
            'position': 'absolute',
            'left': '50%',
            'margin-left': '-' + w / 2 + 'px'
          });
        },
        adjustH: function adjustH() {
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
  }, {
    key: 'checkCssBlend',
    value: function checkCssBlend() {

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
  }, {
    key: 'notSaveImg',
    value: function notSaveImg() {

      // ------------------------------------------------------------
      //
      //  pc
      //
      // ------------------------------------------------------------

      if (gb.in.u.isPC) {

        $(function () {
          $("img").on("contextmenu", function () {
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
        $("img").on("touchstart", function () {
          timer = setTimeout(function () {
            alert("画像は保存できません");
          }, 500);
          return false;
        });
        $("img").on("touchend", function () {
          clearTimeout(timer);
          return false;
        });
      }
    }
  }]);

  return Func;
}();

exports.default = Func;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Main
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _DisplayTop = __webpack_require__(20);

var _DisplayTop2 = _interopRequireDefault(_DisplayTop);

var _DisplayTextureBg = __webpack_require__(21);

var _DisplayTextureBg2 = _interopRequireDefault(_DisplayTextureBg);

var _DisplayTextureMovie = __webpack_require__(27);

var _DisplayTextureMovie2 = _interopRequireDefault(_DisplayTextureMovie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this.setup();
    this.setEvents();
  }

  _createClass(Main, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onReady',
    value: function onReady() {

      //pageページ別のIDを取得
      var page = $('body').data('id');

      window.console.log('現在のページIDは ', page);

      //pageのIDごとに発火するクラスの振り分け
      switch (page) {

        case 'top':

          new _DisplayTop2.default();

          break;

        case 'textureBg':

          new _DisplayTextureBg2.default();

          break;

        case 'textureMovie':

          new _DisplayTextureMovie2.default();

          break;

      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onRender',
    value: function onRender() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(document).on('ready', this.onReady.bind(this));
      $(window).on('load', this.onLoad.bind(this));
    }
  }]);

  return Main;
}();

exports.default = Main;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * fileOverview:
 * Project:
 * File: DisplayTop
 * Date: 17/9/23
 * Author: Teraguchi
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayTop = function () {
  function DisplayTop() {
    _classCallCheck(this, DisplayTop);

    this.setup();
    this.setEvents();
  }

  _createClass(DisplayTop, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(window).on('load', this.onLoad.bind(this));
    }
  }]);

  return DisplayTop;
}();

exports.default = DisplayTop;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Display
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: Teraguchi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _TextureBg = __webpack_require__(22);

var _TextureBg2 = _interopRequireDefault(_TextureBg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var DisplayTop = function () {
  function DisplayTop() {
    _classCallCheck(this, DisplayTop);

    this.setup();
    this.setEvents();
  }

  _createClass(DisplayTop, [{
    key: 'setup',
    value: function setup() {

      // アニメーションループスタート
      // gb.in.up.loop();

    }
  }, {
    key: 'onLoad',
    value: function onLoad() {

      gb.in.textureBg = new _TextureBg2.default();

      gb.in.textureBg.init();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(window).on('load', this.onLoad.bind(this));
    }
  }], [{
    key: 'run',
    value: function run() {}
  }]);

  return DisplayTop;
}();

exports.default = DisplayTop;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entry2 = __webpack_require__(0);

var _Entry3 = _interopRequireDefault(_Entry2);

var _Plane = __webpack_require__(24);

var _Plane2 = _interopRequireDefault(_Plane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * fileOverview:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Project:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: TextureBg
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

'use strict';

var TextureBg = function (_Entry) {
  _inherits(TextureBg, _Entry);

  function TextureBg() {
    _classCallCheck(this, TextureBg);

    var _this = _possibleConstructorReturn(this, (TextureBg.__proto__ || Object.getPrototypeOf(TextureBg)).call(this));

    _this.canvas = document.getElementById('webgl-output');

    _this.width = document.body.clientWidth;
    _this.height = document.body.clientHeight;

    _this.camera = null;
    _this.renderer = null;
    _this.scene = null;

    _this.createCamera = _this._createCamera.bind(_this);
    _this.createRenderer = _this._createRenderer.bind(_this);
    _this.createScene = _this._createScene.bind(_this);

    _this.onResize = _this._onResize.bind(_this);
    _this.Update = _this._Update.bind(_this);
    _this.loadTexture = _this._loadTexture.bind(_this);

    _this.plane = new _Plane2.default();

    return _this;
  }

  /**
   * 初期化
   */


  _createClass(TextureBg, [{
    key: 'init',
    value: function init() {

      this.createCamera();
      this.createScene();
      this.createRenderer();

      this.Update();

      this.loadTexture();
    }

    /**
     * カメラ作成
     */

  }, {
    key: '_createCamera',
    value: function _createCamera() {

      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
      this.camera.position.x = 0;
      this.camera.position.y = 0;
      this.camera.position.z = 100;

      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    }

    /**
     * レンダラー作成
     */

  }, {
    key: '_createRenderer',
    value: function _createRenderer() {

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

  }, {
    key: '_createScene',
    value: function _createScene() {

      this.scene = new THREE.Scene();
    }

    /**
     * 画像をロード
     * @private
     */

  }, {
    key: '_loadTexture',
    value: function _loadTexture() {
      var _this2 = this;

      this.plane.loadTexture('../../../../assets/resource/img/shibuya01.jpg', function () {
        _this2.scene.add(_this2.plane.mesh);
        window.addEventListener('resize', function () {
          _this2.onResize();
        }, false);
        _this2.onResize();
        _this2.Update();
      });
    }

    /**
     * 更新
     * @private
     */

  }, {
    key: '_Update',
    value: function _Update() {
      var _this3 = this;

      this.renderer.render(this.scene, this.camera);

      requestAnimationFrame(function () {
        _this3.Update();
      });
    }

    /**
     *　画面リサイズイベント
     */

  }, {
    key: '_onResize',
    value: function _onResize() {
      this.canvas.width = document.body.clientWidth;
      this.canvas.height = document.body.clientHeight;
      this.plane.mesh.material.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);

      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(window).on('load', this.onLoad.bind(this));
    }
  }]);

  return TextureBg;
}(_Entry3.default);

exports.default = TextureBg;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

		get: function get() {

			console.warn('THREE.OrbitControls: .center has been renamed to .target');
			return this.target;
		}

	},

	// backward compatibility

	noZoom: {

		get: function get() {

			console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
			return !this.enableZoom;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
			this.enableZoom = !value;
		}

	},

	noRotate: {

		get: function get() {

			console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
			return !this.enableRotate;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
			this.enableRotate = !value;
		}

	},

	noPan: {

		get: function get() {

			console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
			return !this.enablePan;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
			this.enablePan = !value;
		}

	},

	noKeys: {

		get: function get() {

			console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
			return !this.enableKeys;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
			this.enableKeys = !value;
		}

	},

	staticMoving: {

		get: function get() {

			console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
			return !this.enableDamping;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
			this.enableDamping = !value;
		}

	},

	dynamicDampingFactor: {

		get: function get() {

			console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
			return this.dampingFactor;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
			this.dampingFactor = value;
		}

	}

});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entry2 = __webpack_require__(0);

var _Entry3 = _interopRequireDefault(_Entry2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * fileOverview:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Project:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: Plane
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

'use strict';

var Plane = function (_Entry) {
	_inherits(Plane, _Entry);

	function Plane() {
		_classCallCheck(this, Plane);

		var _this = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this));

		_this.uniforms = {};
		_this.texture = null;
		_this.mesh = null;

		_this.loadTexture = _this._loadTexture.bind(_this);
		_this.createMesh = _this._createMesh.bind(_this);
		_this.render = _this._render.bind(_this);
		_this.resize = _this._resize.bind(_this);

		return _this;
	}

	_createClass(Plane, [{
		key: '_loadTexture',
		value: function _loadTexture(image, callback) {
			var _this2 = this;

			var loader = new THREE.TextureLoader();
			loader.load(image, function (texture) {
				texture.magFilter = THREE.NearestFilter;
				texture.minFilter = THREE.NearestFilter;
				_this2.texture = texture;
				_this2.mesh = _this2.createMesh();
				callback();
			});
		}
	}, {
		key: '_createMesh',
		value: function _createMesh() {
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
				vertexShader: __webpack_require__(25),
				fragmentShader: __webpack_require__(26)
			}));
		}

		/**
   * レンダラー
   * @private
   */

	}, {
		key: '_render',
		value: function _render(time) {

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
	}, {
		key: '_resize',
		value: function _resize() {
			this.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);
		}
	}]);

	return Plane;
}(_Entry3.default);

exports.default = Plane;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform sampler2D texture;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vec2 ratio = vec2(\n        min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),\n        min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)\n    );\n\n    vec2 uv = vec2(\n        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n    );\n    gl_FragColor = texture2D(texture, uv);\n}"

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Display
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: Teraguchi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

// import WebGLinit from './WebGLinit.js';

var _Canvas = __webpack_require__(28);

var _Canvas2 = _interopRequireDefault(_Canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var DisplayTop = function () {
  function DisplayTop() {
    _classCallCheck(this, DisplayTop);

    this.setup();
    this.setEvents();
  }

  _createClass(DisplayTop, [{
    key: 'setup',
    value: function setup() {

      // アニメーションループスタート
      // gb.in.up.loop();

    }
  }, {
    key: 'onLoad',
    value: function onLoad() {

      gb.in.canvas = new _Canvas2.default();

      gb.in.canvas.init();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(window).on('load', this.onLoad.bind(this));
    }
  }], [{
    key: 'run',
    value: function run() {

      // window.console.log('static_Run');

    }
  }]);

  return DisplayTop;
}();

exports.default = DisplayTop;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entry2 = __webpack_require__(0);

var _Entry3 = _interopRequireDefault(_Entry2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * fileOverview:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Project:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: Canvas
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 17/9/23
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

'use strict';

var Canvas = function (_Entry) {
  _inherits(Canvas, _Entry);

  function Canvas() {
    _classCallCheck(this, Canvas);

    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this));

    _this.uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_resolution: { type: "v2", value: new THREE.Vector2() },
      u_mouse: { type: "v2", value: new THREE.Vector2() }
    };
    _this.canvas = document.getElementById('webgl-output');

    _this.width = window.innerWidth;
    _this.height = window.innerHeight;
    // this.output = opts.output || document.createElement('div');

    _this.camera = null;
    _this.renderer = null;
    _this.scene = null;
    _this.cube = null;

    _this.createCamera = _this._createCamera.bind(_this);
    _this.createRenderer = _this._createRenderer.bind(_this);
    _this.createScene = _this._createScene.bind(_this);
    _this.createObject = _this._createObject.bind(_this);
    _this.orbitControls = _this._orbitControls.bind(_this);

    _this.planeObject = _this._planeObject.bind(_this);

    _this.render = _this._render.bind(_this);

    _this.onResize = _this._onResize.bind(_this);

    _this.Update = _this._Update.bind(_this);

    return _this;
  }

  /**
   * 初期化
   */


  _createClass(Canvas, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

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
      window.addEventListener('resize', function () {
        _this2.onResize();
      }, false);
    }

    /**
     * カメラ作成
     */

  }, {
    key: '_createCamera',
    value: function _createCamera() {

      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
      this.camera.position.x = 0;
      this.camera.position.y = 0;
      this.camera.position.z = 100;

      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    }

    /**
     * レンダラー作成
     */

  }, {
    key: '_createRenderer',
    value: function _createRenderer() {

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

  }, {
    key: '_createScene',
    value: function _createScene() {

      this.scene = new THREE.Scene();
    }

    /**
     * Object作成
     * @private
     */

  }, {
    key: '_createObject',
    value: function _createObject() {

      var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
      var cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
      });

      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      this.cube.position.x = 3;
      this.cube.position.y = 3;
      this.cube.position.z = 3;

      this.scene.add(this.cube);
    }
  }, {
    key: '_planeObject',
    value: function _planeObject() {
      this.plane = new THREE.Mesh(
      // new THREE.PlaneBufferGeometry(256, 64, 40, 10),
      new THREE.PlaneBufferGeometry(5, 20, 32), new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: __webpack_require__(29),
        fragmentShader: __webpack_require__(30)
      }));
      this.scene.add(this.plane);
    }

    /**
     * レンダラー
     * @private
     */

  }, {
    key: '_render',
    value: function _render() {
      var clock = new THREE.Clock();
      var time = clock.getDelta();

      // this.titleObject.titrender(time);
    }

    /**
     * 更新
     * @private
     */

  }, {
    key: '_Update',
    value: function _Update() {
      var _this3 = this;

      this.render();
      requestAnimationFrame(function () {
        _this3.Update();
      });
      // this.controls.update();
      this.uniforms.u_time.value += 0.05;
      this.renderer.render(this.scene, this.camera);
    }

    /**
     *　画面リサイズ
     */

  }, {
    key: '_onResize',
    value: function _onResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    /**
      * カメラコントロール
     */

  }, {
    key: '_orbitControls',
    value: function _orbitControls() {
      this.controls = new THREE.OrbitControls(this.camera);
      this.controls.autoRotate = true;
      var clock = new THREE.Clock();

      var delta = clock.getDelta();
      this.controls.update(delta);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(window).on('load', this.onLoad.bind(this));
    }
  }]);

  return Canvas;
}(_Entry3.default);

exports.default = Canvas;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n//attribute vec3 position;\n\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform float u_time;\n\nvoid main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    gl_FragColor=vec4(st.x,st.y,0.0,1.0);\n}"

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWYyZDUxYTM3MTMxY2RjMjk2OTAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0NvbmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FycmF5L0FycmF5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvdWEvY2hlY2tDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvdWEtcGFyc2VyLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2ltZy9wcmVsb2FkSW1nLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuVHdpdHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5GYWNlQm9vay5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9GdW5jLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9NYWluLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1RleHR1cmVCZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1BsYW5lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvY292ZXIudmVydCIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLmZyYWciLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlTW92aWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvQ2FudmFzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvaW5kZXgvdGVzdC52ZXJ0Iiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvaW5kZXgvdGVzdC5mcmFnIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbnRyeSIsIndpbmRvdyIsImdiIiwidW5kZWZpbmVkIiwiaW4iLCJjb21tb24iLCJtYWluIiwiQ29tbW9uIiwic2V0dXAiLCJzZXRFdmVudHMiLCJjb25mIiwidSIsImYiLCJ1dCIsIiQiLCJkb2N1bWVudCIsIm9uIiwib25SZWFkeSIsImJpbmQiLCJvbkxvYWQiLCJDb25mIiwiUkVMRUFTRSIsIkZMRyIsIkxPRyIsIlBBUkFNIiwiU1RBVFMiLCJkZWZXIiwiZGVmSCIsIlciLCJIIiwic3BXIiwic3BIIiwiYnAiLCJtb2RlIiwia2V5cyIsInN3aXRjaE1vZGUiLCJzZWMwMkltZ051bSIsInlvdXR1YmVJRDAxIiwieW91dHViZUlEMDIiLCJ3ZWJGb250TG9hZGVkIiwiaSIsImtleSIsImxlbiIsInBhcmFtIiwicmVmIiwicmVmMSIsInZhbHVlIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJqIiwib2JqIiwiayIsInZhbCIsIlV0aWwiLCJpc1NldFNQU2l6ZSIsInN0YXJ0VGltZSIsImVsYXBzZWRUaW1lIiwibm93IiwiRGF0ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJoaXQiLCJyYW5nZSIsIm51bSIsInJlc01pbiIsInJlc01heCIsImJhc2VNaW4iLCJiYXNlTWF4IiwicCIsIm4iLCJwb3MiLCJTdHJpbmciLCJpbmRleE9mIiwic3Vic3RyIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJyYWRpYW5zIiwiUEkiLCJhbmdsZSIsInAxIiwicDIiLCJzcXJ0IiwicG93IiwieCIsInkiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJnZXRUaW1lIiwiZmxnIiwiY3NzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImlzUmVzU1AiLCJpc1Jlc1BDIiwidXJsIiwiaHJlZiIsInBhcmFtSXRlbXMiLCJsaXN0IiwicGFyYW1JdGVtIiwiaGFzaCIsImwiLCJsZW4xIiwiY29va2llIiwiciIsImciLCJzdHIiLCJ0b1N0cmluZyIsIkFycmF5Iiwiam9pbiIsImNvbnRhaW4iLCJudW1iZXIiLCJfcG93Iiwicm91bmQiLCJyZXMiLCJvcmciLCJkZXN0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJSZWdFeHAiLCJnZXROb3ciLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsIm1pbGxTZWNvbmQiLCJnZXRNaWxsaXNlY29uZHMiLCJnZXREYXRlIiwibW9udGhkYXlzIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIndlZWtEYXlKUCIsIndESiIsImdldERheSIsIndlZWtEYXlFTiIsIndERSIsImRhdGUiLCJOdW1iZXIiLCJpZ25vcmVBcnJheSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCIkdGFyZ2V0IiwiJGltZyIsImVhY2giLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiYXR0ciIsInRyaWdnZXIiLCJzZWxmIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib2ZmIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJwYXRobmFtZSIsImV2ZW50IiwicmV0dXJuVmFsdWUiLCJrZXlDb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ud2hlZWwiLCJvbm1vdXNld2hlZWwiLCJvbnRvdWNobW92ZSIsIm9ua2V5ZG93biIsInByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJVdGlscyIsIl9zZXR1cCIsImNoZWNrQ2xpZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXMiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpZCIsImNsZWFyVGltZW91dCIsIkFyciIsInNsaWNlIiwidCIsInBhcnNlciIsInVhIiwiYnJvd3NlciIsImdldEJyb3dzZXIiLCJuYW1lIiwiZGV2aWNlIiwiZ2V0RGV2aWNlIiwidHlwZSIsImdldE9TIiwiZGV2aWNlX25hbWUiLCJ2ZW5kb3IiLCJnZXRVQSIsInMiLCJvIiwiYyIsImQiLCJ2IiwibSIsIkUiLCJTIiwiZXh0ZW5kIiwiY29uY2F0IiwiaGFzIiwidG9Mb3dlckNhc2UiLCJsb3dlcml6ZSIsIm1ham9yIiwidHJpbSIsInJneCIsImFyZ3VtZW50cyIsImhhc093blByb3BlcnR5IiwiZXhlYyIsInRlc3QiLCJUIiwib2xkc2FmYXJpIiwidmVyc2lvbiIsImFtYXpvbiIsIm1vZGVsIiwic3ByaW50IiwiSFRDIiwiU3ByaW50Iiwib3MiLCJ3aW5kb3dzIiwiTUUiLCJYUCIsIlZpc3RhIiwiUlQiLCJOIiwiY3B1IiwiZW5naW5lIiwiQyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImFwcGx5IiwiZ2V0Q1BVIiwiZ2V0RW5naW5lIiwiZ2V0UmVzdWx0Iiwic2V0VUEiLCJWRVJTSU9OIiwiQlJPV1NFUiIsIk5BTUUiLCJNQUpPUiIsIkNQVSIsIkFSQ0hJVEVDVFVSRSIsIkRFVklDRSIsIk1PREVMIiwiVkVORE9SIiwiVFlQRSIsIkNPTlNPTEUiLCJNT0JJTEUiLCJTTUFSVFRWIiwiVEFCTEVUIiwiV0VBUkFCTEUiLCJFTUJFRERFRCIsIkVOR0lORSIsIk9TIiwiZXhwb3J0cyIsIm1vZHVsZSIsIlVBUGFyc2VyIiwialF1ZXJ5IiwiWmVwdG8iLCJMIiwiZ2V0Iiwic2V0IiwiaW1nUGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW1nIiwiSW1hZ2UiLCJjYWxsZWUiLCJzcmMiLCIkYnRuIiwidGV4dCIsInNoYXJlVVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3BlbiIsImRlc2NyaXB0aW9uIiwiRnVuYyIsImJsYW5rIiwiZGVidWdnZXIiLCJleHBhbmRqUXVlcnkiLCJtZXRob2RzIiwiY29uc29sZSIsInByZXBlbmQiLCJGUFMiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiZm4iLCJhZGp1c3QiLCJhZGp1c3RXIiwiYWRqdXN0SCIsIkNTUyIsInN1cHBvcnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibG9nIiwiaXNJRSIsImlzUEMiLCJpc0FuZHJvaWRWZXJzaW9uIiwiYWxlcnQiLCJNYWluIiwicGFnZSIsImRhdGEiLCJEaXNwbGF5VG9wIiwidGV4dHVyZUJnIiwiaW5pdCIsIlRleHR1cmVCZyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiY2FtZXJhIiwicmVuZGVyZXIiLCJzY2VuZSIsImNyZWF0ZUNhbWVyYSIsIl9jcmVhdGVDYW1lcmEiLCJjcmVhdGVSZW5kZXJlciIsIl9jcmVhdGVSZW5kZXJlciIsImNyZWF0ZVNjZW5lIiwiX2NyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJfb25SZXNpemUiLCJVcGRhdGUiLCJfVXBkYXRlIiwibG9hZFRleHR1cmUiLCJfbG9hZFRleHR1cmUiLCJwbGFuZSIsIlRIUkVFIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJsb29rQXQiLCJWZWN0b3IzIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwic3RlbmNpbCIsImRlcHRoIiwicHJlbXVsdGlwbGllZEFscGhhIiwic2V0Q2xlYXJDb2xvciIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsIlNjZW5lIiwibWVzaCIsInJlbmRlciIsIm1hdGVyaWFsIiwidW5pZm9ybXMiLCJyZXNvbHV0aW9uIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIk9yYml0Q29udHJvbHMiLCJvYmplY3QiLCJkb21FbGVtZW50IiwiZW5hYmxlZCIsInRhcmdldCIsIm1pbkRpc3RhbmNlIiwibWF4RGlzdGFuY2UiLCJJbmZpbml0eSIsIm1pblpvb20iLCJtYXhab29tIiwibWluUG9sYXJBbmdsZSIsIm1heFBvbGFyQW5nbGUiLCJtaW5BemltdXRoQW5nbGUiLCJtYXhBemltdXRoQW5nbGUiLCJlbmFibGVEYW1waW5nIiwiZGFtcGluZ0ZhY3RvciIsImVuYWJsZVpvb20iLCJ6b29tU3BlZWQiLCJlbmFibGVSb3RhdGUiLCJyb3RhdGVTcGVlZCIsImVuYWJsZVBhbiIsImtleVBhblNwZWVkIiwiYXV0b1JvdGF0ZSIsImF1dG9Sb3RhdGVTcGVlZCIsImVuYWJsZUtleXMiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkJPVFRPTSIsIm1vdXNlQnV0dG9ucyIsIk9SQklUIiwiTU9VU0UiLCJaT09NIiwiTUlERExFIiwiUEFOIiwidGFyZ2V0MCIsImNsb25lIiwicG9zaXRpb24wIiwiem9vbTAiLCJ6b29tIiwiZ2V0UG9sYXJBbmdsZSIsInNwaGVyaWNhbCIsInBoaSIsImdldEF6aW11dGhhbEFuZ2xlIiwidGhldGEiLCJyZXNldCIsInNjb3BlIiwiY29weSIsImRpc3BhdGNoRXZlbnQiLCJjaGFuZ2VFdmVudCIsInVwZGF0ZSIsInN0YXRlIiwiU1RBVEUiLCJOT05FIiwib2Zmc2V0IiwicXVhdCIsIlF1YXRlcm5pb24iLCJzZXRGcm9tVW5pdFZlY3RvcnMiLCJ1cCIsInF1YXRJbnZlcnNlIiwiaW52ZXJzZSIsImxhc3RQb3NpdGlvbiIsImxhc3RRdWF0ZXJuaW9uIiwic3ViIiwiYXBwbHlRdWF0ZXJuaW9uIiwic2V0RnJvbVZlY3RvcjMiLCJyb3RhdGVMZWZ0IiwiZ2V0QXV0b1JvdGF0aW9uQW5nbGUiLCJzcGhlcmljYWxEZWx0YSIsIm1ha2VTYWZlIiwicmFkaXVzIiwic2NhbGUiLCJwYW5PZmZzZXQiLCJzZXRGcm9tU3BoZXJpY2FsIiwiem9vbUNoYW5nZWQiLCJkaXN0YW5jZVRvU3F1YXJlZCIsIkVQUyIsImRvdCIsInF1YXRlcm5pb24iLCJkaXNwb3NlIiwib25Db250ZXh0TWVudSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVdoZWVsIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbktleURvd24iLCJzdGFydEV2ZW50IiwiZW5kRXZlbnQiLCJST1RBVEUiLCJET0xMWSIsIlRPVUNIX1JPVEFURSIsIlRPVUNIX0RPTExZIiwiVE9VQ0hfUEFOIiwiU3BoZXJpY2FsIiwicm90YXRlU3RhcnQiLCJWZWN0b3IyIiwicm90YXRlRW5kIiwicm90YXRlRGVsdGEiLCJwYW5TdGFydCIsInBhbkVuZCIsInBhbkRlbHRhIiwiZG9sbHlTdGFydCIsImRvbGx5RW5kIiwiZG9sbHlEZWx0YSIsImdldFpvb21TY2FsZSIsInJvdGF0ZVVwIiwicGFuTGVmdCIsImRpc3RhbmNlIiwib2JqZWN0TWF0cml4Iiwic2V0RnJvbU1hdHJpeENvbHVtbiIsIm11bHRpcGx5U2NhbGFyIiwicGFuVXAiLCJwYW4iLCJkZWx0YVgiLCJkZWx0YVkiLCJlbGVtZW50IiwidGFyZ2V0RGlzdGFuY2UiLCJ0YW4iLCJmb3YiLCJtYXRyaXgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJyaWdodCIsImxlZnQiLCJ0b3AiLCJib3R0b20iLCJ3YXJuIiwiZG9sbHlJbiIsImRvbGx5U2NhbGUiLCJkb2xseU91dCIsImhhbmRsZU1vdXNlRG93blJvdGF0ZSIsImNsaWVudFgiLCJjbGllbnRZIiwiaGFuZGxlTW91c2VEb3duRG9sbHkiLCJoYW5kbGVNb3VzZURvd25QYW4iLCJoYW5kbGVNb3VzZU1vdmVSb3RhdGUiLCJzdWJWZWN0b3JzIiwiaGFuZGxlTW91c2VNb3ZlRG9sbHkiLCJoYW5kbGVNb3VzZU1vdmVQYW4iLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VXaGVlbCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVUb3VjaFN0YXJ0Um90YXRlIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJoYW5kbGVUb3VjaFN0YXJ0RG9sbHkiLCJkeCIsImR5IiwiaGFuZGxlVG91Y2hTdGFydFBhbiIsImhhbmRsZVRvdWNoTW92ZVJvdGF0ZSIsImhhbmRsZVRvdWNoTW92ZURvbGx5IiwiaGFuZGxlVG91Y2hNb3ZlUGFuIiwiaGFuZGxlVG91Y2hFbmQiLCJidXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJjcmVhdGUiLCJFdmVudERpc3BhdGNoZXIiLCJjb25zdHJ1Y3RvciIsImRlZmluZVByb3BlcnRpZXMiLCJjZW50ZXIiLCJub1pvb20iLCJub1JvdGF0ZSIsIm5vUGFuIiwibm9LZXlzIiwic3RhdGljTW92aW5nIiwiZHluYW1pY0RhbXBpbmdGYWN0b3IiLCJQbGFuZSIsInRleHR1cmUiLCJjcmVhdGVNZXNoIiwiX2NyZWF0ZU1lc2giLCJfcmVuZGVyIiwicmVzaXplIiwiX3Jlc2l6ZSIsImltYWdlIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJtYWdGaWx0ZXIiLCJOZWFyZXN0RmlsdGVyIiwibWluRmlsdGVyIiwiaW1hZ2VSZXNvbHV0aW9uIiwiTWVzaCIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJSYXdTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwidGltZSIsInN0b3AiLCJpbnRlcnZhbCIsInByZXZfbnVtIiwibmV4dF9udW0iLCJ0ZXhQcmV2IiwidGV4dHVyZXMiLCJ0ZXhOZXh0IiwiQ2FudmFzIiwidV90aW1lIiwidV9yZXNvbHV0aW9uIiwidV9tb3VzZSIsImN1YmUiLCJjcmVhdGVPYmplY3QiLCJfY3JlYXRlT2JqZWN0Iiwib3JiaXRDb250cm9scyIsIl9vcmJpdENvbnRyb2xzIiwicGxhbmVPYmplY3QiLCJfcGxhbmVPYmplY3QiLCJjdWJlR2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsImN1YmVNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwiY29sb3IiLCJ3aXJlZnJhbWUiLCJTaGFkZXJNYXRlcmlhbCIsImNsb2NrIiwiQ2xvY2siLCJnZXREZWx0YSIsImNvbnRyb2xzIiwiZGVsdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7OztBQVFBLG1CQUFBQSxDQUFRLEVBQVI7O0FBRUE7O0lBRXFCQyxLO0FBRXBCLGtCQUFjO0FBQUE7QUFFYjs7QUFFRDs7Ozs7Ozt5QkFHTSxDQUVMOzs7Ozs7a0JBWG1CQSxLOzs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7O0FBVEE7Ozs7Ozs7O0FBV0EsQ0FBQyxZQUFJOztBQUVIO0FBQ0EsTUFBSUMsT0FBT0MsRUFBUCxLQUFZQyxTQUFoQixFQUEyQkYsT0FBT0MsRUFBUCxHQUFZLEVBQVo7QUFDM0JELFNBQU9DLEVBQVAsQ0FBVUUsRUFBVixHQUFlLEVBQWYsQ0FKRyxDQUlnQjs7QUFFbkJGLEtBQUdFLEVBQUgsQ0FBTUMsTUFBTixHQUFlLHNCQUFmO0FBQ0FILEtBQUdFLEVBQUgsQ0FBTUUsSUFBTixHQUFhLG9CQUFiO0FBRUQsQ0FURCxJOzs7Ozs7Ozs7Ozs7O3FqQkNYQTs7Ozs7Ozs7QUFRQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7SUFFcUJDLE07QUFFbkIsb0JBQWM7QUFBQTs7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QUF5Q3JHLE9BQU9zRyxXQUFoRDtBQUNEOztBQUVGOzs7Ozs7cUNBR2dCO0FBQ2YsV0FBS3dlLFFBQUwsR0FBZ0IsSUFBSWxQLE1BQU13QixhQUFWLENBQXdCLEtBQUt4QyxNQUE3QixDQUFoQjtBQUNBLFdBQUtrUSxRQUFMLENBQWNwTSxVQUFkLEdBQTJCLElBQTNCO0FBQ0EsVUFBSWlNLFFBQVEsSUFBSS9PLE1BQU1nUCxLQUFWLEVBQVo7O0FBRUEsVUFBSUcsUUFBUUosTUFBTUUsUUFBTixFQUFaO0FBQ0EsV0FBS0MsUUFBTCxDQUFjeEssTUFBZCxDQUFxQnlLLEtBQXJCO0FBQ0M7OztnQ0FFVTs7QUFFVGxrQixRQUFFYixNQUFGLEVBQVVlLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLEtBQUtHLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixJQUFqQixDQUFyQjtBQUVEOzs7Ozs7a0JBbE1rQndpQixNOzs7Ozs7QUNackIsK0RBQStELGlCQUFpQiwwQ0FBMEMsR0FBRyxHOzs7Ozs7QUNBN0gsK0RBQStELHVCQUF1QixpQkFBaUIsZ0RBQWdELDJDQUEyQyxHQUFHLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFmMmQ1MWEzNzEzMWNkYzI5NjkwIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRW50cnlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxucmVxdWlyZSgnLi4vLi4vbGlicy9PcmJpdENvbnRyb2xzLmpzJyk7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdH1cblxuXHQvKipcblx0ICog5Yid5pyf5YyWXG5cdCAqL1xuXHRpbml0KCl7XG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVG9wXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgQ29tbW9uIGZyb20gJy4vcGFnZS9Db21tb24nO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlL01haW4nO1xuXG4oKCk9PntcblxuICAvLyBnbG9iYWzjgqrjg5bjgrjjgqfjgq/jg4hcbiAgaWYgKHdpbmRvdy5nYj09PXVuZGVmaW5lZCkgd2luZG93LmdiID0ge307XG4gIHdpbmRvdy5nYi5pbiA9IHt9OyAvL2luc3RhbmNlXG5cbiAgZ2IuaW4uY29tbW9uID0gbmV3IENvbW1vbigpO1xuICBnYi5pbi5tYWluID0gbmV3IE1haW4oKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1RvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbW1vblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29uZiBmcm9tICcuLi9Db3JlL0NvbmYnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vbXlsaWJzL1V0aWwnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcbmltcG9ydCBGdW5jIGZyb20gJy4uL215bGlicy9GdW5jJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG5cdHNldHVwKCkge1xuXG5cdFx0LyoqXG4gICAgICogQHR5cGUge0NvbmZ9IDog5Yid5pyf5YCk44Gu6Kit5a6a44O744OH44O844K/44Gu6YWN572uXG5cdFx0ICogQHR5cGUge1V0aWx9IDogVXRpbOmWouaVsOOBruWIneacn+WMllxuXHRcdCAqIEB0eXBlIHtGdW5jfSA6IOOCpOODmeODs+ODiOODnuODjeODvOOCuOODo+ODvOOBruioree9rlxuXHRcdCAqL1xuICAgIGdiLmluLmNvbmYgPSBuZXcgQ29uZigpO1xuICAgIGdiLmluLnUgPSBuZXcgVXRpbCgpO1xuICAgIGdiLmluLmYgPSBuZXcgRnVuYygpO1xuXG4gICAgZ2IuaW4udXQgPSBuZXcgVXRpbHMoKTtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9Db21tb24uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb25mXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbi8vIGltcG9ydCBTb3VuZERhdGEgZnJvbSAnLi9EYXRhL1NvdW5kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5pys55Wq44OV44Op44KwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICAgIHRoaXMuUkVMRUFTRSA9IHRydWU7XG4gICAgLy8gdGhpcy5SRUxFQVNFID0gZmFsc2U7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OV44Op44Kw6Zai6YCjXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5GTEcgPSB7XG4gICAgICBMT0c6dHJ1ZSwgIC8vIOODreOCsOWHuuWKm1xuICAgICAgUEFSQU06dHJ1ZSwgLy8g44OR44Op44Oh44O844K/44OB44Kn44OD44KvXG4gICAgICBTVEFUUzp0cnVlICAvLyBTdGF0c+ihqOekulxuICAgIH07XG4gICAgaWYgKCF0aGlzLlJFTEVBU0UpIHtcbiAgICAgIHRoaXMuRkxHID0ge1xuICAgICAgICBMT0c6ZmFsc2UsXG4gICAgICAgIFBBUkFNOmZhbHNlLFxuICAgICAgICBTVEFUUzpmYWxzZSBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOWfuuacrCB3aWR0aCBoZWlnaHRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmRlZlcgPSAxMzAwO1xuICAgIHRoaXMuZGVmSCA9IDg1MDtcblxuICAgIHRoaXMuVyA9IDEyMDA7XG4gICAgdGhpcy5IID0gNzUwO1xuXG4gICAgdGhpcy5zcFcgPSAzNzU7XG4gICAgdGhpcy5zcEggPSA2Njc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OW44Os44Kk44Kv44Od44Kk44Oz44OIXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5icCA9IDc2ODtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBtb2RlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLmtleXMgPSBbXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdtb3ZpZScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydtb3JuaW5nJywnYWZ0ZXJub29uJywnbmlnaHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdkYXRhJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ2RhdGEwMScsJ2RhdGEwMicsJ2RhdGEwMyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ3Byb2R1Y3QnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnMDEnXSxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMuc3dpdGNoTW9kZSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNvdW5kIGRhdGFcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB0aGlzLnNvdW5kRGF0YSA9IG5ldyBTb3VuZERhdGEoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzZWMwMiBiZyBJbWcgTnVtXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZWMwMkltZ051bSA9IDM5NjtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB5b3V0dWJlIElEXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy55b3V0dWJlSUQwMSA9ICd4VzJvTnBOcktkMCc7XG4gICAgdGhpcy55b3V0dWJlSUQwMiA9ICd0MldlUlJkQUZlSSc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgd2ViIGZvbnQgbG9hZGVkXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy53ZWJGb250TG9hZGVkID0gZmFsc2U7XG5cbiAgfVxuXG5cbiAgc3dpdGNoTW9kZSgpe1xuXG4gICAgdmFyIGksIGtleSwgbGVuLCBwYXJhbSwgcmVmLCByZWYxLCB2YWx1ZTtcblxuICAgIHJlZiA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHBhcmFtID0gcmVmW2ldO1xuICAgICAgcmVmMSA9IHBhcmFtLnNwbGl0KCc9JyksIGtleSA9IHJlZjFbMF0sIHZhbHVlID0gcmVmMVsxXTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmtleXMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICB2YXIgb2JqID0gdGhpcy5rZXlzW2pdO1xuXG4gICAgICAgIC8vIOODkeODqeODoeODvOOCv+OBjOOCreODvOOBqOS4gOe3kuOBoOOBo+OBn+OCiVxuICAgICAgICBpZiAob2JqLmtleSA9PT0ga2V5KSB7XG5cbiAgICAgICAgICAvLyDlkITlgKTjgajmr5TovINcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IG9iai52YWx1ZS5sZW5ndGg7IGsrKykge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqLnZhbHVlW2tdO1xuXG4gICAgICAgICAgICAvLyDjgq3jg7zjgpJ0aGlzLmtleXPjga5rZXnjgavjgIF2YWx1ZeOCkuavlOi8g+OBl+OBpuWQjOWApOOBoOOBo+OBn+OCguOBruOBq1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gdmFsdWUpIHRoaXNbb2JqLmtleV0gPSB2YWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9O1xuXG5cbiAgICAgICAgfTtcblxuICAgICAgICBcbiAgICAgIH07XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0NvbmYuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog5L6/5Yip6Zai5pWw44Kv44Op44K5XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVXRpbFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuaXNTZXRTUFNpemUgPSBmYWxzZTtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbnVsbDtcbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRoXG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBquWApOOCkui/lOOBmVxuICAgKiBAcGFyYW0gbWluIDog5pyA5bCP5YCkKGludClcbiAgICogQHBhcmFtIG1heCA6IOacgOWkp+WApChpbnQpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgICovXG4gIHJhbmRvbShtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoKG1heCArIDEpIC0gbWluKSArIG1pbikpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gq5pW05pWw44KSMuOBpOOBruevhOWbsuOBi+OCieWPluW+l1xuICAgKiBAcGFyYW0gbWluMSA6IOacgOWwj+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWF4MSA6IOacgOWkp+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWluMiA6IOacgOWwj+WApDIoaW50KVxuICAgKiBAcGFyYW0gbWF4MiA6IOacgOWkp+WApDIoaW50KVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gICAqL1xuICByYW5kb20yKG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgICBcbiAgICBpZiAodGhpcy5oaXQoMikpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4xLCBtYXgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjIsIG1heDIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIDEvQHJhbmdl44Gu56K6546H44GndHJ1ZeOCkuWPluW+l1xuICAgKiBAcGFyYW0gcmFuZ2UgOiDmr43mlbAoaW50KVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gICAqL1xuICBoaXQocmFuZ2UpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgwLCByYW5nZSAtIDEpID09PSAwO1xuXG4gIH1cbiAgXG4gIC8vIDDjgYvjgonnr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCA6IOevhOWbsihpbnQpXG4gIC8vIHJldHVybiA6IOODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmdlKHZhbCkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKC12YWwsIHZhbCk7XG5cbiAgfVxuICBcbiAgLy8g5YCk44KS44Oe44OD44OU44Oz44KwXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDjg57jg4Pjg5Tjg7PjgrDjgZnjgovlgKQoTnVtYmVyKVxuICAvLyBAcmVzTWluIDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQHJlc01heCA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWluIDog5YWD44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNYXggOiDlhYPjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyByZXR1cm4gOiDjg57jg4Pjg5Tjg7PjgrDjgZXjgozjgZ/lgKQoTnVtYmVyKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBtYXAobnVtLCByZXNNaW4sIHJlc01heCwgYmFzZU1pbiwgYmFzZU1heCkge1xuXG4gICAgdmFyIHA7XG4gICAgaWYgKG51bSA8IGJhc2VNaW4pIHtcbiAgICAgIHJldHVybiByZXNNaW47XG4gICAgfVxuICAgIGlmIChudW0gPiBiYXNlTWF4KSB7XG4gICAgICByZXR1cm4gcmVzTWF4O1xuICAgIH1cbiAgICBwID0gKHJlc01heCAtIHJlc01pbikgLyAoYmFzZU1heCAtIGJhc2VNaW4pO1xuXG4gICAgcmV0dXJuICgobnVtIC0gYmFzZU1pbikgKiBwKSArIHJlc01pbjtcblxuICB9ICAgIFxuICBcbiAgLy8g5pWw5YCk44Gr5bCP5pWw54K556ysQG7kvY3jgb7jgafjgpLjgaTjgZHjgZ/mloflrZfliJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOWApChOdW1iZXIpXG4gIC8vIEBuIDog5bCP5pWw54K544Gu5L2NKGludClcbiAgLy8gcmV0dXJuIDog5aSJ5o+b44GV44KM44Gf5YCkKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGVjaW1hbChudW0sIG4pIHtcbiAgICB2YXIgaSwgcG9zO1xuICAgIG51bSA9IFN0cmluZyhudW0pO1xuICAgIHBvcyA9IG51bS5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bS5zcGxpdChcIi5cIilbMF07XG4gICAgfVxuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBudW0gKz0gXCIuXCI7XG4gICAgICBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgICBudW0gKz0gXCIwXCI7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuICAgIG51bSA9IG51bS5zdWJzdHIoMCwgcG9zKSArIG51bS5zdWJzdHIocG9zLCBuICsgMSk7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIGNsYW1wKG51bWVyYXRvcixkZW5vbWluYXRvcix2YWwpIHtcblxuICAgIHJldHVybiB2YWwgKiAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuXG4gIH1cblxuXHQvKipcbiAgICog44Op44K444Ki44Oz44KS6KeS5bqm44Gr5aSJ5o+bXG5cdCAqIEBwYXJhbSByYWRpYW5zXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuICBkZWdyZWUocmFkaWFucykge1xuXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4gIH1cblxuICAvLyB0byByYWRpYW5zXG4gIHJhZGlhbihhbmdsZSkgeyBcblxuICAgIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7IC8vMeW6puS9leODqeOCuOOCouODs+OBi1xuXG4gIH1cblxuICBkaXN0KHAxLCBwMikge1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xuXG4gIH1cblxuICBhc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxMCw5LDUsMywxXG5cbiAgfVxuXG4gIGRlc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEsMyw1LDksMTBcblxuICB9XG5cbiAgLy8gbWFwKHZhbHVlLCBtaW4wMSwgbWF4MDEsIG1pbjAyLCBtYXgwMikge1xuXG4gIC8vICAgdmFyIGRpczAxID0gbWF4MDEgLSBtaW4wMTtcbiAgLy8gICB2YXIgZGlzMDIgPSBtYXgwMiAtIG1pbjAyXG5cbiAgLy8gICB2YXIgcmF0ZSA9IGRpczAyIC8gZGlzMDE7XG5cbiAgLy8gICB2YWx1ZSA9IHZhbHVlICogcmF0ZTtcblxuICAvLyAgIHJldHVybiB2YWx1ZTtcbiAgLy8gfVxuXG4gIGNvbnN0cmFpbih2YWx1ZSwgbWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KHZhbHVlLCBtaW4pKTtcblxuICAgIC8vIGlmICh2YWx1ZSA8PSBsb3cpIHZhbHVlID0gbG93O1xuICAgIC8vIGlmICh2YWx1ZSA+PSBoaWdoKSB2YWx1ZSA9IGhpZ2g7ICAgICBcbiAgICAvLyByZXR1cm4gdmFsdWU7XG5cbiAgfVxuXG4gIC8vIOODpuODi+ODvOOCr0lE44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVuaXF1ZSgpIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB9XG4gIFxuICAvLyAqKmpxdWFyeeS9v+eUqFxuICAvLyDjg5zjgr/jg7Pjg6Ljg7zjg4nlpInmm7RcbiAgLy8gdHJ1ZeOBquOCieOCq+ODvOOCveODq+OBjOODneOCpOODs+OCv+ODvOOBruW9ouOBq1xuICAvLyBmYWxzZeOBquOCieODh+ODleOCqeODq+ODiOOBruOCq+ODvOOCveODq+OBq1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAZmxnIDog6YGp55So44GZ44KL44GL44Gp44GG44GLKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJ1dHRvbk1vZGUoZmxnKSB7XG5cbiAgICBpZiAoZmxnKSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcImRlZmF1bHRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHBvcnRyYWl0IC8gbGFuZHNjYXBlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0RpcmVjdGlvbiAoKSB7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKEggPiBXKSB7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgfWVsc2V7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHJlc3BvbnNpdmUg5qiq5bmF44KS6KaL44KLXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1Jlc3BvbnNpdmUgKGJwKSB7XG5cbiAgICBpZiAoYnA9PXVuZGVmaW5lZCkgYnA9Mzc1O1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChXID4gYnApIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gdHJ1ZTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IGZhbHNlO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBVUkxcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICovXG4gIGdldFBhcmFtKCkge1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIHBhcmFtID0gdXJsLnNwbGl0KCc/JylbMV07XG4gICAgaWYgKHBhcmFtPT11bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcmFtSXRlbXMgPSBwYXJhbS5zcGxpdCgnJicpO1xuICAgIHZhciBsaXN0ID0ge307XG4gIFxuICAgIGZvciggdmFyIGkgPSAwOyBpPHBhcmFtSXRlbXMubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICBwYXJhbUl0ZW0gPSBwYXJhbUl0ZW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIGxpc3RbcGFyYW1JdGVtWzBdXSA9IHBhcmFtSXRlbVsxXTtcblxuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuXG4gIH1cblxuICAvKipcbiAgICog44OP44OD44K344Ol5Y+W5b6XIDogbG9jYXRpb24uaGFzaOOBriPjgpLliYrpmaTjgZfjgZ/jgoTjgaRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGhhc2goKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIGNvb2tpZeWPluW+l1xuICAgKiBAcGFyYW0ga2V5XG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZ2V0Q29va2llKGtleSkge1xuXG4gICAgdmFyIGEsIGFyciwgaSwgbCwgbGVuMSwgdmFsO1xuICAgIGlmIChkb2N1bWVudC5jb29raWUgPT09IHZvaWQgMCB8fCBkb2N1bWVudC5jb29raWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcbiAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGFyci5sZW5ndGg7IGwgPCBsZW4xOyBpID0gKytsKSB7XG4gICAgICB2YWwgPSBhcnJbaV07XG4gICAgICBhID0gdmFsLnNwbGl0KFwiPVwiKTtcbiAgICAgIGlmIChhWzBdID09PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGFbMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG4gIH0gICAgICBcblxuICAvKipcbiAgICogY29va2ll6Kit5a6aXG4gICAqIEBwYXJhbSBrZXkgOiDjg5Hjg6njg6Hjg7zjgr/lkI1cbiAgICogQHBhcmFtIHZhbCA6IOWApFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgc2V0Q29va2llKGtleSwgdmFsKSB7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWw7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgQ29sb3JcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gcmdi44GL44KJSEVY44Kr44Op44O85Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEByIDogMH4yNTVcbiAgLy8gQGcgOiAwfjI1NVxuICAvLyBAYiA6IDB+MjU1XG4gIC8vIHJldHVybiA6IGV4IFwiI0ZGRkZGRlwiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldEhleENvbG9yKHIsZyxiKSB7XG4gICAgICB2YXIgc3RyO1xuICAgICAgc3RyID0gKHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNik7XG4gICAgICByZXR1cm4gXCIjXCIgKyBuZXcgQXJyYXkoNyAtIHN0ci5sZW5ndGgpLmpvaW4oXCIwXCIpICsgc3RyO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBTdHJpbmdcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNDb250YWluKHN0cixjb250YWluKSB7XG5cbiAgICAvLyBzdHLjga7kuK3jgassY29udGFpbuOBjOWtmOWcqOOBl+OBn+OCiVxuICAgIGlmICggc3RyLmluZGV4T2YoY29udGFpbikgIT0gLTEgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIC8vIDDln4vjgoHjgacy5qGB44Gr44GZ44KL6Zai5pWwXG4gIGFkZDAoc3RyLG51bT0tMil7XG4gICAgXG4gICAgcmV0dXJuICggXCIwMDAwMDAwMDAwMDBcIiArIHN0ciApLnN1YnN0ciggbnVtICk7XG5cbiAgfVxuXG4gIGZsb2F0Rm9ybWF0KCBudW1iZXIsIG4gKSB7XG5cbiAgICB2YXIgX3BvdyA9IE1hdGgucG93KCAxMCAsIG4gKSA7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoIG51bWJlciAqIF9wb3cgKSAvIF9wb3cgO1xuXG4gIH1cbiAgICBcbiAgLy8g5YCk5q616KGo6KiYXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByaWNlKG51bSkge1xuXG4gICAgcmV0dXJuIFN0cmluZyhudW0pLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgJyQxLCcpO1xuXG4gIH1cblxuICAvLyDmloflrZfliJfjgpLlj43ou6JcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHN0ciA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIHJldHVybiA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0clJldmVyc2Uoc3RyKSB7XG5cbiAgICB2YXIgaSwgbGVuLCByZXM7XG4gICAgcmVzID0gXCJcIjtcbiAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgIGkgPSAxO1xuICAgIHdoaWxlIChpIDw9IGxlbikge1xuICAgICAgcmVzICs9IHN0ci5zdWJzdHIoLWksIDEpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuXG4gIH1cbiAgXG4gIC8vIOaWh+Wtl+WIl+OBruWFqOe9ruaPm1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsICA6IOaWh+Wtl+WIl1xuICAvLyBAb2VnICA6IOe9ruaPm+WJjeOBruaWh+Wtl+WIl1xuICAvLyBAZGVzdCA6IOe9ruaPm+W+jOOBruaWh+Wtl+WIl1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXBsYWNlQWxsKHZhbCwgb3JnLCBkZXN0KSB7XG5cbiAgICByZXR1cm4gdmFsLnNwbGl0KG9yZykuam9pbihkZXN0KTtcblxuICB9ICAgIFxuICBcbiAgc3RyUmVwbGFjZShzdHIsIGJlZm9yZSwgYWZ0ZXIpIHtcblxuICAgIHZhciByID0gbmV3IFJlZ0V4cCggYmVmb3JlLCAnZycpO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCByICwgYWZ0ZXIgKTtcblxuICB9ICAgIFxuICBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldE5vdygpIHtcblxuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMubm93LmdldFRpbWUoKTtcblxuICB9XG5cbiAgZWxhcHNlZCgpIHtcblxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZTtcblxuICB9XG5cbiAgbSgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKCB0aGlzLmVsYXBzZWRUaW1lICsgMTAwIC8gNjAgKTtcblxuICB9XG5cbiAgcygpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZWxhcHNlZFRpbWUgLyAxMDAwKTtcblxuICB9XG5cbiAgbXMoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkVGltZTtcbiAgICBcbiAgfVxuXG4gIHRpbWUoKSB7XG5cbiAgICB0aGlzLmdldE5vdygpO1xuXG4gICAgdGhpcy5ob3VyID0gdGhpcy5ub3cuZ2V0SG91cnMoKTsgICAgICAgICAgLy8g5pmCXG4gICAgdGhpcy5taW51dGUgPSB0aGlzLm5vdy5nZXRNaW51dGVzKCk7ICAgICAgLy8g5YiGXG4gICAgdGhpcy5zZWNvbmQgPSB0aGlzLm5vdy5nZXRTZWNvbmRzKCk7XG4gICAgdGhpcy5taWxsU2Vjb25kID0gdGhpcy5ub3cuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgfVxuXG4gIGRhdGUoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RGF0ZSgpO1xuXG4gIH1cblxuICBtb250aHMoKSB7XG5cbiAgICB2YXIgbW9udGhkYXlzID0gbmV3IEFycmF5KDMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEpO1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldE1vbnRoKCkgKyAxO1xuXG4gIH1cblxuICB5ZWFyKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgfVxuXG4gIGRheSgpIHtcblxuICAgIC8vIOabnOaXpSAo5pel5pys6KqeKVxuICAgIHZhciB3ZWVrRGF5SlAgPSBbXCLml6VcIixcIuaciFwiLFwi54GrXCIsXCLmsLRcIixcIuacqFwiLFwi6YeRXCIsXCLlnJ9cIl0gO1xuICAgIHZhciB3REogPSB3ZWVrRGF5SlBbdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICAgIC8vIOabnOaXpSAo6Iux6KqeKVxuICAgIHZhciB3ZWVrRGF5RU4gPSBbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0gO1xuICAgIHZhciB3REUgPSB3ZWVrRGF5RU5bdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICB9XG4gIFxuICAvLyDmlbDml6Xlvozjga5EYXRl44Kq44OW44K444Kn44Kv44OI5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFmdGVyRGF5KGRhdGUsIG51bSkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgTnVtYmVyKG51bSkgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRhIHR5cGUgY2hlY2tcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNPYmplY3QodmFsdWUsIGlnbm9yZUFycmF5KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgfVxuXG4gIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgfVxuXG4gIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBpc0FycmF5KHZhbHVlKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGlzTnVsbCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xuICB9XG5cbiAgaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBvdGhlclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0SW1nU1BTaXplICgkdGFyZ2V0KXtcblxuICAgIC8vIHJlc3BvbnNpdmUgc3Djga7jgajjgY3lh6bnkIZcbiAgICBpZiAoIXRoaXMuaXNSZXNTUCkgcmV0dXJuO1xuICAgIC8vIOS4gOW6puOBoOOBkeWHpueQhlxuICAgIC8vIGlmICh0aGlzLmlzU2V0U1BTaXplKSByZXR1cm47XG4gICAgLy8gdGhpcy5pc1NldFNQU2l6ZSA9IHRydWU7XG5cbiAgICB2YXIgJGltZyA9ICR0YXJnZXQsXG4gICAgICAgIGxlbiA9ICRpbWcubGVuZ3RoO1xuXG4gICAgJGltZy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICB2YXIgdyA9IE1hdGguZmxvb3IoJCh0aGlzKS53aWR0aCgpIC8gMiksXG4gICAgICAgICAgICBoID0gTWF0aC5mbG9vcigkKHRoaXMpLmhlaWdodCgpIC8gMik7XG5cbiAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICd3aWR0aCc6IHcsXG4gICAgICAgICAgICAnaGVpZ2h0JzogaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxlbiA9PSBpICsgMSkgJCh3aW5kb3cpLnRyaWdnZXIoJ3NldFNwWmllRW5kJyk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICDjgrnjg57jg5vmk43kvZznhKHlirlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldFByZXZlbnQoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ3RvdWNobW92ZS5ub0NvbnRyb2wnLCBmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7fSk7XG5cbiAgfVxuXG4gIHJlbW92ZVByZXZlbnQoKSB7XG5cbiAgICAkKHdpbmRvdykub2ZmKCd0b3VjaG1vdmUubm9Db250cm9sJyk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAgaG9zdCxwcm90Y29sXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcm90b2NvbCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbDtcblxuICB9XG4gICAgXG4gIGhvc3QoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgLy8gcmV0dXJuIGxvY2F0aW9uLmhvc3RcblxuICB9XG5cbiAgcG9ydCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wb3J0O1xuXG4gIH1cbiAgICAgICAgXG4gIHBhdGgoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcblxuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzKGUpIHtcblxuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIGRpc2FibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIC8vIG9sZGVyIEZGXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub253aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vZGVybiBzdGFuZGFyZFxuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBvbGRlciBicm93c2VycywgSUVcbiAgICB3aW5kb3cub250b3VjaG1vdmUgID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9iaWxlXG4gICAgZG9jdW1lbnQub25rZXlkb3duICA9IHRoaXMucHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzO1xuXG4gIH1cblxuICBlbmFibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9ud2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvVXRpbC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFV0aWxzXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG4vKipcbiAqIGFuaW1hdGlvblxuICovXG5pbXBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gJy4vYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZSc7XG5pbXBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgZnJvbSAnLi9hbmltYXRpb24vY2FuY2VsQW5pbWF0aW9uRnJhbWUnO1xuXG5pbXBvcnQgQXJyYXkgZnJvbSAnLi9hcnJheS9BcnJheSc7XG5pbXBvcnQgY2hlY2tDbGllbnQgZnJvbSBcIi4vdWEvY2hlY2tDbGllbnRcIjtcblxuaW1wb3J0IHByZWxvYWRJbWcgZnJvbSAnLi9pbWcvcHJlbG9hZEltZyc7XG5pbXBvcnQgc2V0VXBCdG5Ud2l0dGVyIGZyb20gJy4vc25zL3NldFVwQnRuVHdpdHRlcic7XG5pbXBvcnQgc2V0VXBCdG5MaW5lIGZyb20gJy4vc25zL3NldFVwQnRuTGluZSc7XG5pbXBvcnQgc2V0VXBCdG5GYWNlQm9vayBmcm9tICcuL3Nucy9zZXRVcEJ0bkZhY2VCb29rJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLl9zZXR1cCgpO1xuICAgIFxuICB9XG5cbiAgX3NldHVwKCkge1xuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygnVXRpbHNfU2V0dXAhIScpO1xuICAgIFxuICAgIC8qKlxuICAgICAqIGFycmF5XG4gICAgICovXG4gICAgdGhpcy5BcnJheSA9IG5ldyBBcnJheSgpO1xuXG5cbiAgICAvKipcbiAgICAgKiB1YVxuICAgICAqL1xuICAgIHRoaXMuY2hlY2tDbGllbnQgPSBuZXcgY2hlY2tDbGllbnQoKTtcblxuXG4gICAgLyoqXG4gICAgICogaW1nXG4gICAgICovXG4gICAgLy8gdGhpcy5wcmVsb2FkSW1nID0gbmV3IHByZWxvYWRJbWcoKTtcblxuICAgIC8qKlxuICAgICAqIHNuc1xuICAgICAqL1xuICAgIC8vIHRoaXMuc2V0VXBCdG5Ud2l0dGVyID0gbmV3IHNldFVwQnRuVHdpdHRlcjtcbiAgICAvLyB0aGlzLnNldFVwQnRuTGluZSA9IG5ldyBzZXRVcEJ0bkxpbmU7XG4gICAgLy8gdGhpcy5zZXRVcEJ0bkZhY2VCb29rID0gbmV3IHNldFVwQnRuRmFjZUJvb2s7XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCIvKipcbiAqIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICovXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKChmdW5jdGlvbihfdGhpcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gMzApO1xuICAgICAgICB9O1xuICB9O1xufSkodGhpcykpKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwiLyoqXG4gKiBjYW5jZWxBbmltYXRpb25GcmFtZVxuICovXG53aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoKGZ1bmN0aW9uKF90aGlzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihpZCkge1xuICAgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xuICB9O1xufSkodGhpcykpKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vY2FuY2VsQW5pbWF0aW9uRnJhbWUuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog6YWN5YiX44Gu5pON5L2c57O7XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQXJyYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuXG4gIH1cblxuXHQvKipcblx0ICog6YWN5YiX5YaF44Gu44Op44Oz44OA44Og44Gq5YCk44KS44Gy44Go44Gk5Y+W5b6XXG5cdCAqIEBwYXJhbSBhcnIgOiDphY3liJdcblx0ICogQHJldHVybnMgeyp9IDog6YWN5YiX5YaF44Gu5YCkXG5cdCAqL1xuICBhcnJSYW5kKGFycikge1xuXG4gICAgcmV0dXJuIGFyclt0aGlzLnJhbmRvbSgwLCBhcnIubGVuZ3RoIC0gMSldO1xuXG4gIH1cblxuXHQvKipcbiAgICog6YWN5YiX44KS44Op44Oz44OA44Og44Gr5Lim44G55pu/44GIXG5cdCAqIEBwYXJhbSBhcnIgOiDphY3liJcoQXJyYXkpXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG4gIHNodWZmbGUoYXJyKSB7XG5cbiAgICBsZXQgQXJyID0gW107XG4gICAgQXJyID0gYXJyLnNsaWNlKCk7XG4gICAgdmFyIGkgPSBhcnIubGVuZ3RoO1xuICAgIHdoaWxlKGkpe1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaSk7XG4gICAgICB2YXIgdCA9IEFyclstLWldO1xuICAgICAgQXJyW2ldID0gQXJyW2pdO1xuICAgICAgQXJyW2pdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIEFycjtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FycmF5L0FycmF5LmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IFVh5Yik5YilXG4gKiBQcm9qZWN0OlxuICogRmlsZTogY2hlY2tDbGllbnRcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWJzL3VhLXBhcnNlci5taW4uanNcIik7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hlY2tDbGllbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy51YSA9IG5ldyBwYXJzZXIoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIElF44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNJRSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdJRScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRmlyZWZveOOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRmlyZWZveCgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdGaXJlZm94JyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaHJvbWXjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0Nocm9tZSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdDaHJvbWUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhZmFyaeOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzU2FmYXJpKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ1NhZmFyaScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog44Oi44OQ44Kk44Or44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgaXNNb2JpbGUoKSB7XG4gICAgbGV0IGRldmljZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudHlwZTtcbiAgICByZXR1cm4gZGV2aWNlID09PSAnbW9iaWxlJyA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODluODrOODg+ODiOOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGlzVGFibGV0KCkge1xuICAgIGxldCBkZXZpY2UgPSB0aGlzLnVhLmdldERldmljZSgpLnR5cGU7XG4gICAgcmV0dXJuIGRldmljZSA9PT0gJ3RhYmxldCcgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPU+WQjeOCkuWPluW+l1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0T1MoKS5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODh+ODkOOCpOOCueWQjeOCkuWPluW+l1xuICAgKiBAcmV0dXJucyB7dmVuZG9yfHtIVEMsIFNwcmludH19XG4gICAqL1xuICBkZXZpY2VfbmFtZSgpIHtcbiAgICBsZXQgZGV2aWNlX25hbWUgPSB0aGlzLnVhLmdldERldmljZSgpLnZlbmRvcjtcbiAgICByZXR1cm4gZGV2aWNlX25hbWU7XG4gIH1cblxuICAvKipcbiAgICog44OW44Op44Km44K25ZCN44KS5Y+W5b6XXG4gICAqL1xuICBicm93c2VyX25hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICog44Om44O844K244O844Ko44O844K444Kn44Oz44OI5oOF5aCx77ya5YWo44Gm44KS5Y+W5b6XXG4gICAqL1xuICBhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0VUEoKTtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIi8qKlxuICogVUFQYXJzZXIuanMgdjAuNy4xMlxuICogTGlnaHR3ZWlnaHQgSmF2YVNjcmlwdC1iYXNlZCBVc2VyLUFnZW50IHN0cmluZyBwYXJzZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWlzYWxtYW4vdWEtcGFyc2VyLWpzXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTItMjAxNiBGYWlzYWwgU2FsbWFuIDxmeXpsbWFuQGdtYWlsLmNvbT5cbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgR1BMdjIgJiBNSVRcbiAqLyhmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO3ZhciBuPVwiMC43LjEyXCIscj1cIlwiLGk9XCI/XCIscz1cImZ1bmN0aW9uXCIsbz1cInVuZGVmaW5lZFwiLHU9XCJvYmplY3RcIixhPVwic3RyaW5nXCIsZj1cIm1ham9yXCIsbD1cIm1vZGVsXCIsYz1cIm5hbWVcIixoPVwidHlwZVwiLHA9XCJ2ZW5kb3JcIixkPVwidmVyc2lvblwiLHY9XCJhcmNoaXRlY3R1cmVcIixtPVwiY29uc29sZVwiLGc9XCJtb2JpbGVcIix5PVwidGFibGV0XCIsYj1cInNtYXJ0dHZcIix3PVwid2VhcmFibGVcIixFPVwiZW1iZWRkZWRcIixTPXtleHRlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj17fTtmb3IodmFyIHIgaW4gZSl0W3JdJiZ0W3JdLmxlbmd0aCUyPT09MD9uW3JdPXRbcl0uY29uY2F0KGVbcl0pOm5bcl09ZVtyXTtyZXR1cm4gbn0saGFzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHR5cGVvZiBlPT1cInN0cmluZ1wiP3QudG9Mb3dlckNhc2UoKS5pbmRleE9mKGUudG9Mb3dlckNhc2UoKSkhPT0tMTohMX0sbG93ZXJpemU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKX0sbWFqb3I6ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlPT09YT9lLnJlcGxhY2UoL1teXFxkXFwuXS9nLFwiXCIpLnNwbGl0KFwiLlwiKVswXTp0fSx0cmltOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLFwiXCIpfX0seD17cmd4OmZ1bmN0aW9uKCl7dmFyIGUsbj0wLHIsaSxhLGYsbCxjLGg9YXJndW1lbnRzO3doaWxlKG48aC5sZW5ndGgmJiFsKXt2YXIgcD1oW25dLGQ9aFtuKzFdO2lmKHR5cGVvZiBlPT09byl7ZT17fTtmb3IoYSBpbiBkKWQuaGFzT3duUHJvcGVydHkoYSkmJihmPWRbYV0sdHlwZW9mIGY9PT11P2VbZlswXV09dDplW2ZdPXQpfXI9aT0wO3doaWxlKHI8cC5sZW5ndGgmJiFsKXtsPXBbcisrXS5leGVjKHRoaXMuZ2V0VUEoKSk7aWYoISFsKWZvcihhPTA7YTxkLmxlbmd0aDthKyspYz1sWysraV0sZj1kW2FdLHR5cGVvZiBmPT09dSYmZi5sZW5ndGg+MD9mLmxlbmd0aD09Mj90eXBlb2YgZlsxXT09cz9lW2ZbMF1dPWZbMV0uY2FsbCh0aGlzLGMpOmVbZlswXV09ZlsxXTpmLmxlbmd0aD09Mz90eXBlb2YgZlsxXT09PXMmJighZlsxXS5leGVjfHwhZlsxXS50ZXN0KT9lW2ZbMF1dPWM/ZlsxXS5jYWxsKHRoaXMsYyxmWzJdKTp0OmVbZlswXV09Yz9jLnJlcGxhY2UoZlsxXSxmWzJdKTp0OmYubGVuZ3RoPT00JiYoZVtmWzBdXT1jP2ZbM10uY2FsbCh0aGlzLGMucmVwbGFjZShmWzFdLGZbMl0pKTp0KTplW2ZdPWM/Yzp0fW4rPTJ9cmV0dXJuIGV9LHN0cjpmdW5jdGlvbihlLG4pe2Zvcih2YXIgciBpbiBuKWlmKHR5cGVvZiBuW3JdPT09dSYmbltyXS5sZW5ndGg+MCl7Zm9yKHZhciBzPTA7czxuW3JdLmxlbmd0aDtzKyspaWYoUy5oYXMobltyXVtzXSxlKSlyZXR1cm4gcj09PWk/dDpyfWVsc2UgaWYoUy5oYXMobltyXSxlKSlyZXR1cm4gcj09PWk/dDpyO3JldHVybiBlfX0sVD17YnJvd3Nlcjp7b2xkc2FmYXJpOnt2ZXJzaW9uOntcIjEuMFwiOlwiLzhcIiwxLjI6XCIvMVwiLDEuMzpcIi8zXCIsXCIyLjBcIjpcIi80MTJcIixcIjIuMC4yXCI6XCIvNDE2XCIsXCIyLjAuM1wiOlwiLzQxN1wiLFwiMi4wLjRcIjpcIi80MTlcIixcIj9cIjpcIi9cIn19fSxkZXZpY2U6e2FtYXpvbjp7bW9kZWw6e1wiRmlyZSBQaG9uZVwiOltcIlNEXCIsXCJLRlwiXX19LHNwcmludDp7bW9kZWw6e1wiRXZvIFNoaWZ0IDRHXCI6XCI3MzczS1RcIn0sdmVuZG9yOntIVEM6XCJBUEFcIixTcHJpbnQ6XCJTcHJpbnRcIn19fSxvczp7d2luZG93czp7dmVyc2lvbjp7TUU6XCI0LjkwXCIsXCJOVCAzLjExXCI6XCJOVDMuNTFcIixcIk5UIDQuMFwiOlwiTlQ0LjBcIiwyZTM6XCJOVCA1LjBcIixYUDpbXCJOVCA1LjFcIixcIk5UIDUuMlwiXSxWaXN0YTpcIk5UIDYuMFwiLDc6XCJOVCA2LjFcIiw4OlwiTlQgNi4yXCIsOC4xOlwiTlQgNi4zXCIsMTA6W1wiTlQgNi40XCIsXCJOVCAxMC4wXCJdLFJUOlwiQVJNXCJ9fX19LE49e2Jyb3dzZXI6W1svKG9wZXJhXFxzbWluaSlcXC8oW1xcd1xcLi1dKykvaSwvKG9wZXJhXFxzW21vYmlsZXRhYl0rKS4rdmVyc2lvblxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmEpLit2ZXJzaW9uXFwvKFtcXHdcXC5dKykvaSwvKG9wZXJhKVtcXC9cXHNdKyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKG9waW9zKVtcXC9cXHNdKyhbXFx3XFwuXSspL2ldLFtbYyxcIk9wZXJhIE1pbmlcIl0sZF0sWy9cXHMob3ByKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIk9wZXJhXCJdLGRdLFsvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC8obHVuYXNjYXBlfG1heHRob258bmV0ZnJvbnR8amFzbWluZXxibGF6ZXIpW1xcL1xcc10/KFtcXHdcXC5dKykqL2ksLyhhdmFudFxcc3xpZW1vYmlsZXxzbGltfGJhaWR1KSg/OmJyb3dzZXIpP1tcXC9cXHNdPyhbXFx3XFwuXSopL2ksLyg/Om1zfFxcKCkoaWUpXFxzKFtcXHdcXC5dKykvaSwvKHJla29ucSlcXC8oW1xcd1xcLl0rKSovaSwvKGNocm9taXVtfGZsb2NrfHJvY2ttZWx0fG1pZG9yaXxlcGlwaGFueXxzaWxrfHNreWZpcmV8b3ZpYnJvd3Nlcnxib2x0fGlyb258dml2YWxkaXxpcmlkaXVtfHBoYW50b21qcylcXC8oW1xcd1xcLi1dKykvaV0sW2MsZF0sWy8odHJpZGVudCkuK3J2WzpcXHNdKFtcXHdcXC5dKykuK2xpa2VcXHNnZWNrby9pXSxbW2MsXCJJRVwiXSxkXSxbLyhlZGdlKVxcLygoXFxkKyk/W1xcd1xcLl0rKS9pXSxbYyxkXSxbLyh5YWJyb3dzZXIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiWWFuZGV4XCJdLGRdLFsvKGNvbW9kb19kcmFnb24pXFwvKFtcXHdcXC5dKykvaV0sW1tjLC9fL2csXCIgXCJdLGRdLFsvKG1pY3JvbWVzc2VuZ2VyKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIldlQ2hhdFwiXSxkXSxbL3hpYW9taVxcL21pdWlicm93c2VyXFwvKFtcXHdcXC5dKykvaV0sW2QsW2MsXCJNSVVJIEJyb3dzZXJcIl1dLFsvXFxzd3ZcXCkuKyhjaHJvbWUpXFwvKFtcXHdcXC5dKykvaV0sW1tjLC8oLispLyxcIiQxIFdlYlZpZXdcIl0sZF0sWy9hbmRyb2lkLitzYW1zdW5nYnJvd3NlclxcLyhbXFx3XFwuXSspL2ksL2FuZHJvaWQuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKVxccysoPzptb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkqL2ldLFtkLFtjLFwiQW5kcm9pZCBCcm93c2VyXCJdXSxbLyhjaHJvbWV8b21uaXdlYnxhcm9yYXxbdGl6ZW5va2FdezV9XFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl0rKS9pLC8ocXFicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKHVjXFxzP2Jyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvdWN3ZWIuKyh1Y2Jyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvanVjLisodWN3ZWIpW1xcL1xcc10/KFtcXHdcXC5dKykvaV0sW1tjLFwiVUNCcm93c2VyXCJdLGRdLFsvKGRvbGZpbilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJEb2xwaGluXCJdLGRdLFsvKCg/OmFuZHJvaWQuKyljcm1vfGNyaW9zKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIkNocm9tZVwiXSxkXSxbLztmYmF2XFwvKFtcXHdcXC5dKyk7L2ldLFtkLFtjLFwiRmFjZWJvb2tcIl1dLFsvZnhpb3NcXC8oW1xcd1xcLi1dKykvaV0sW2QsW2MsXCJGaXJlZm94XCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rP21vYmlsZVxcL1xcdytcXHMoc2FmYXJpKS9pXSxbZCxbYyxcIk1vYmlsZSBTYWZhcmlcIl1dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspLis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKS9pXSxbZCxjXSxbL3dlYmtpdC4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkoXFwvW1xcd1xcLl0rKS9pXSxbYyxbZCx4LnN0cixULmJyb3dzZXIub2xkc2FmYXJpLnZlcnNpb25dXSxbLyhrb25xdWVyb3IpXFwvKFtcXHdcXC5dKykvaSwvKHdlYmtpdHxraHRtbClcXC8oW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyhuYXZpZ2F0b3J8bmV0c2NhcGUpXFwvKFtcXHdcXC4tXSspL2ldLFtbYyxcIk5ldHNjYXBlXCJdLGRdLFsvKHN3aWZ0Zm94KS9pLC8oaWNlZHJhZ29ufGljZXdlYXNlbHxjYW1pbm98Y2hpbWVyYXxmZW5uZWN8bWFlbW9cXHNicm93c2VyfG1pbmltb3xjb25rZXJvcilbXFwvXFxzXT8oW1xcd1xcLlxcK10rKS9pLC8oZmlyZWZveHxzZWFtb25rZXl8ay1tZWxlb258aWNlY2F0fGljZWFwZXxmaXJlYmlyZHxwaG9lbml4KVxcLyhbXFx3XFwuLV0rKS9pLC8obW96aWxsYSlcXC8oW1xcd1xcLl0rKS4rcnZcXDouK2dlY2tvXFwvXFxkKy9pLC8ocG9sYXJpc3xseW54fGRpbGxvfGljYWJ8ZG9yaXN8YW1heWF8dzNtfG5ldHN1cmZ8c2xlaXBuaXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvKGxpbmtzKVxcc1xcKChbXFx3XFwuXSspL2ksLyhnb2Jyb3dzZXIpXFwvPyhbXFx3XFwuXSspKi9pLC8oaWNlXFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl9dKykvaSwvKG1vc2FpYylbXFwvXFxzXShbXFx3XFwuXSspL2ldLFtjLGRdXSxjcHU6W1svKD86KGFtZHx4KD86KD86ODZ8NjQpW18tXSk/fHdvd3x3aW4pNjQpWztcXCldL2ldLFtbdixcImFtZDY0XCJdXSxbLyhpYTMyKD89OykpL2ldLFtbdixTLmxvd2VyaXplXV0sWy8oKD86aVszNDZdfHgpODYpWztcXCldL2ldLFtbdixcImlhMzJcIl1dLFsvd2luZG93c1xccyhjZXxtb2JpbGUpO1xcc3BwYzsvaV0sW1t2LFwiYXJtXCJdXSxbLygoPzpwcGN8cG93ZXJwYykoPzo2NCk/KSg/Olxcc21hY3w7fFxcKSkvaV0sW1t2LC9vd2VyLyxcIlwiLFMubG93ZXJpemVdXSxbLyhzdW40XFx3KVs7XFwpXS9pXSxbW3YsXCJzcGFyY1wiXV0sWy8oKD86YXZyMzJ8aWE2NCg/PTspKXw2OGsoPz1cXCkpfGFybSg/OjY0fCg/PXZcXGQrOykpfCg/PWF0bWVsXFxzKWF2cnwoPzppcml4fG1pcHN8c3BhcmMpKD86NjQpPyg/PTspfHBhLXJpc2MpL2ldLFtbdixTLmxvd2VyaXplXV1dLGRldmljZTpbWy9cXCgoaXBhZHxwbGF5Ym9vayk7W1xcd1xcc1xcKTstXSsocmltfGFwcGxlKS9pXSxbbCxwLFtoLHldXSxbL2FwcGxlY29yZW1lZGlhXFwvW1xcd1xcLl0rIFxcKChpcGFkKS9dLFtsLFtwLFwiQXBwbGVcIl0sW2gseV1dLFsvKGFwcGxlXFxzezAsMX10dikvaV0sW1tsLFwiQXBwbGUgVFZcIl0sW3AsXCJBcHBsZVwiXV0sWy8oYXJjaG9zKVxccyhnYW1lcGFkMj8pL2ksLyhocCkuKyh0b3VjaHBhZCkvaSwvKGhwKS4rKHRhYmxldCkvaSwvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC9cXHMobm9vaylbXFx3XFxzXStidWlsZFxcLyhcXHcrKS9pLC8oZGVsbClcXHMoc3RyZWFba3ByXFxzXFxkXSpbXFxka29dKS9pXSxbcCxsLFtoLHldXSxbLyhrZltBLXpdKylcXHNidWlsZFxcL1tcXHdcXC5dKy4qc2lsa1xcLy9pXSxbbCxbcCxcIkFtYXpvblwiXSxbaCx5XV0sWy8oc2R8a2YpWzAzNDloaWpvcnN0dXddK1xcc2J1aWxkXFwvW1xcd1xcLl0rLipzaWxrXFwvL2ldLFtbbCx4LnN0cixULmRldmljZS5hbWF6b24ubW9kZWxdLFtwLFwiQW1hem9uXCJdLFtoLGddXSxbL1xcKChpcFtob25lZHxcXHNcXHcqXSspOy4rKGFwcGxlKS9pXSxbbCxwLFtoLGddXSxbL1xcKChpcFtob25lZHxcXHNcXHcqXSspOy9pXSxbbCxbcCxcIkFwcGxlXCJdLFtoLGddXSxbLyhibGFja2JlcnJ5KVtcXHMtXT8oXFx3KykvaSwvKGJsYWNrYmVycnl8YmVucXxwYWxtKD89XFwtKXxzb255ZXJpY3Nzb258YWNlcnxhc3VzfGRlbGx8aHVhd2VpfG1laXp1fG1vdG9yb2xhfHBvbHl0cm9uKVtcXHNfLV0/KFtcXHctXSspKi9pLC8oaHApXFxzKFtcXHdcXHNdK1xcdykvaSwvKGFzdXMpLT8oXFx3KykvaV0sW3AsbCxbaCxnXV0sWy9cXChiYjEwO1xccyhcXHcrKS9pXSxbbCxbcCxcIkJsYWNrQmVycnlcIl0sW2gsZ11dLFsvYW5kcm9pZC4rKHRyYW5zZm9bcHJpbWVcXHNdezQsMTB9XFxzXFx3K3xlZWVwY3xzbGlkZXJcXHNcXHcrfG5leHVzIDd8cGFkZm9uZSkvaV0sW2wsW3AsXCJBc3VzXCJdLFtoLHldXSxbLyhzb255KVxccyh0YWJsZXRcXHNbcHNdKVxcc2J1aWxkXFwvL2ksLyhzb255KT8oPzpzZ3AuKylcXHNidWlsZFxcLy9pXSxbW3AsXCJTb255XCJdLFtsLFwiWHBlcmlhIFRhYmxldFwiXSxbaCx5XV0sWy8oPzpzb255KT8oPzooPzooPzpjfGQpXFxkezR9KXwoPzpzb1stbF0uKykpXFxzYnVpbGRcXC8vaV0sW1twLFwiU29ueVwiXSxbbCxcIlhwZXJpYSBQaG9uZVwiXSxbaCxnXV0sWy9cXHMob3V5YSlcXHMvaSwvKG5pbnRlbmRvKVxccyhbd2lkczN1XSspL2ldLFtwLGwsW2gsbV1dLFsvYW5kcm9pZC4rO1xccyhzaGllbGQpXFxzYnVpbGQvaV0sW2wsW3AsXCJOdmlkaWFcIl0sW2gsbV1dLFsvKHBsYXlzdGF0aW9uXFxzWzM0cG9ydGFibGV2aV0rKS9pXSxbbCxbcCxcIlNvbnlcIl0sW2gsbV1dLFsvKHNwcmludFxccyhcXHcrKSkvaV0sW1twLHguc3RyLFQuZGV2aWNlLnNwcmludC52ZW5kb3JdLFtsLHguc3RyLFQuZGV2aWNlLnNwcmludC5tb2RlbF0sW2gsZ11dLFsvKGxlbm92bylcXHM/KFMoPzo1MDAwfDYwMDApKyg/OlstXVtcXHcrXSkpL2ldLFtwLGwsW2gseV1dLFsvKGh0YylbO19cXHMtXSsoW1xcd1xcc10rKD89XFwpKXxcXHcrKSovaSwvKHp0ZSktKFxcdyspKi9pLC8oYWxjYXRlbHxnZWVrc3Bob25lfGh1YXdlaXxsZW5vdm98bmV4aWFufHBhbmFzb25pY3woPz07XFxzKXNvbnkpW19cXHMtXT8oW1xcdy1dKykqL2ldLFtwLFtsLC9fL2csXCIgXCJdLFtoLGddXSxbLyhuZXh1c1xcczkpL2ldLFtsLFtwLFwiSFRDXCJdLFtoLHldXSxbLyhuZXh1c1xcczZwKS9pXSxbbCxbcCxcIkh1YXdlaVwiXSxbaCxnXV0sWy8obWljcm9zb2Z0KTtcXHMobHVtaWFbXFxzXFx3XSspL2ldLFtwLGwsW2gsZ11dLFsvW1xcc1xcKDtdKHhib3goPzpcXHNvbmUpPylbXFxzXFwpO10vaV0sW2wsW3AsXCJNaWNyb3NvZnRcIl0sW2gsbV1dLFsvKGtpblxcLltvbmV0d117M30pL2ldLFtbbCwvXFwuL2csXCIgXCJdLFtwLFwiTWljcm9zb2Z0XCJdLFtoLGddXSxbL1xccyhtaWxlc3RvbmV8ZHJvaWQoPzpbMi00eF18XFxzKD86YmlvbmljfHgyfHByb3xyYXpyKSk/KDo/XFxzNGcpPylbXFx3XFxzXStidWlsZFxcLy9pLC9tb3RbXFxzLV0/KFxcdyspKi9pLC8oWFRcXGR7Myw0fSkgYnVpbGRcXC8vaSwvKG5leHVzXFxzNikvaV0sW2wsW3AsXCJNb3Rvcm9sYVwiXSxbaCxnXV0sWy9hbmRyb2lkLitcXHMobXo2MFxcZHx4b29tW1xcczJdezAsMn0pXFxzYnVpbGRcXC8vaV0sW2wsW3AsXCJNb3Rvcm9sYVwiXSxbaCx5XV0sWy9oYmJ0dlxcL1xcZCtcXC5cXGQrXFwuXFxkK1xccytcXChbXFx3XFxzXSo7XFxzKihcXHdbXjtdKik7KFteO10qKS9pXSxbW3AsUy50cmltXSxbbCxTLnRyaW1dLFtoLGJdXSxbL2hiYnR2LittYXBsZTsoXFxkKykvaV0sW1tsLC9eLyxcIlNtYXJ0VFZcIl0sW3AsXCJTYW1zdW5nXCJdLFtoLGJdXSxbL1xcKGR0dltcXCk7XS4rKGFxdW9zKS9pXSxbbCxbcCxcIlNoYXJwXCJdLFtoLGJdXSxbL2FuZHJvaWQuKygoc2NoLWlbODldMFxcZHxzaHctbTM4MHN8Z3QtcFxcZHs0fXxndC1uXFxkK3xzZ2gtdDhbNTZdOXxuZXh1cyAxMCkpL2ksLygoU00tVFxcdyspKS9pXSxbW3AsXCJTYW1zdW5nXCJdLGwsW2gseV1dLFsvc21hcnQtdHYuKyhzYW1zdW5nKS9pXSxbcCxbaCxiXSxsXSxbLygoc1tjZ3BdaC1cXHcrfGd0LVxcdyt8Z2FsYXh5XFxzbmV4dXN8c20tXFx3W1xcd1xcZF0rKSkvaSwvKHNhbVtzdW5nXSopW1xccy1dKihcXHcrLT9bXFx3LV0qKSovaSwvc2VjLSgoc2doXFx3KykpL2ldLFtbcCxcIlNhbXN1bmdcIl0sbCxbaCxnXV0sWy9zaWUtKFxcdyspKi9pXSxbbCxbcCxcIlNpZW1lbnNcIl0sW2gsZ11dLFsvKG1hZW1vfG5va2lhKS4qKG45MDB8bHVtaWFcXHNcXGQrKS9pLC8obm9raWEpW1xcc18tXT8oW1xcdy1dKykqL2ldLFtbcCxcIk5va2lhXCJdLGwsW2gsZ11dLFsvYW5kcm9pZFxcczNcXC5bXFxzXFx3Oy1dezEwfShhXFxkezN9KS9pXSxbbCxbcCxcIkFjZXJcIl0sW2gseV1dLFsvYW5kcm9pZFxcczNcXC5bXFxzXFx3Oy1dezEwfShsZz8pLShbMDZjdjldezMsNH0pL2ldLFtbcCxcIkxHXCJdLGwsW2gseV1dLFsvKGxnKSBuZXRjYXN0XFwudHYvaV0sW3AsbCxbaCxiXV0sWy8obmV4dXNcXHNbNDVdKS9pLC9sZ1tlO1xcc1xcLy1dKyhcXHcrKSovaV0sW2wsW3AsXCJMR1wiXSxbaCxnXV0sWy9hbmRyb2lkLisoaWRlYXRhYlthLXowLTlcXC1cXHNdKykvaV0sW2wsW3AsXCJMZW5vdm9cIl0sW2gseV1dLFsvbGludXg7LisoKGpvbGxhKSk7L2ldLFtwLGwsW2gsZ11dLFsvKChwZWJibGUpKWFwcFxcL1tcXGRcXC5dK1xccy9pXSxbcCxsLFtoLHddXSxbL2FuZHJvaWQuKztcXHMoZ2xhc3MpXFxzXFxkL2ldLFtsLFtwLFwiR29vZ2xlXCJdLFtoLHddXSxbL2FuZHJvaWQuKyhcXHcrKVxccytidWlsZFxcL2htXFwxL2ksL2FuZHJvaWQuKyhobVtcXHNcXC1fXSpub3RlP1tcXHNfXSooPzpcXGRcXHcpPylcXHMrYnVpbGQvaSwvYW5kcm9pZC4rKG1pW1xcc1xcLV9dKig/Om9uZXxvbmVbXFxzX11wbHVzfG5vdGUgbHRlKT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ldLFtbbCwvXy9nLFwiIFwiXSxbcCxcIlhpYW9taVwiXSxbaCxnXV0sWy9hbmRyb2lkLithMDAwKDEpXFxzK2J1aWxkL2ldLFtsLFtwLFwiT25lUGx1c1wiXSxbaCxnXV0sWy9cXHModGFibGV0KVs7XFwvXS9pLC9cXHMobW9iaWxlKSg/Ols7XFwvXXxcXHNzYWZhcmkpL2ldLFtbaCxTLmxvd2VyaXplXSxwLGxdXSxlbmdpbmU6W1svd2luZG93cy4rXFxzZWRnZVxcLyhbXFx3XFwuXSspL2ldLFtkLFtjLFwiRWRnZUhUTUxcIl1dLFsvKHByZXN0bylcXC8oW1xcd1xcLl0rKS9pLC8od2Via2l0fHRyaWRlbnR8bmV0ZnJvbnR8bmV0c3VyZnxhbWF5YXxseW54fHczbSlcXC8oW1xcd1xcLl0rKS9pLC8oa2h0bWx8dGFzbWFufGxpbmtzKVtcXC9cXHNdXFwoPyhbXFx3XFwuXSspL2ksLyhpY2FiKVtcXC9cXHNdKFsyM11cXC5bXFxkXFwuXSspL2ldLFtjLGRdLFsvcnZcXDooW1xcd1xcLl0rKS4qKGdlY2tvKS9pXSxbZCxjXV0sb3M6W1svbWljcm9zb2Z0XFxzKHdpbmRvd3MpXFxzKHZpc3RhfHhwKS9pXSxbYyxkXSxbLyh3aW5kb3dzKVxcc250XFxzNlxcLjI7XFxzKGFybSkvaSwvKHdpbmRvd3NcXHNwaG9uZSg/Olxcc29zKSopW1xcc1xcL10/KFtcXGRcXC5cXHNdK1xcdykqL2ksLyh3aW5kb3dzXFxzbW9iaWxlfHdpbmRvd3MpW1xcc1xcL10/KFtudGNlXFxkXFwuXFxzXStcXHcpL2ldLFtjLFtkLHguc3RyLFQub3Mud2luZG93cy52ZXJzaW9uXV0sWy8od2luKD89M3w5fG4pfHdpblxcczl4XFxzKShbbnRcXGRcXC5dKykvaV0sW1tjLFwiV2luZG93c1wiXSxbZCx4LnN0cixULm9zLndpbmRvd3MudmVyc2lvbl1dLFsvXFwoKGJiKSgxMCk7L2ldLFtbYyxcIkJsYWNrQmVycnlcIl0sZF0sWy8oYmxhY2tiZXJyeSlcXHcqXFwvPyhbXFx3XFwuXSspKi9pLC8odGl6ZW4pW1xcL1xcc10oW1xcd1xcLl0rKS9pLC8oYW5kcm9pZHx3ZWJvc3xwYWxtXFxzb3N8cW54fGJhZGF8cmltXFxzdGFibGV0XFxzb3N8bWVlZ298Y29udGlraSlbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ksL2xpbnV4Oy4rKHNhaWxmaXNoKTsvaV0sW2MsZF0sWy8oc3ltYmlhblxccz9vc3xzeW1ib3N8czYwKD89OykpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pXSxbW2MsXCJTeW1iaWFuXCJdLGRdLFsvXFwoKHNlcmllczQwKTsvaV0sW2NdLFsvbW96aWxsYS4rXFwobW9iaWxlOy4rZ2Vja28uK2ZpcmVmb3gvaV0sW1tjLFwiRmlyZWZveCBPU1wiXSxkXSxbLyhuaW50ZW5kb3xwbGF5c3RhdGlvbilcXHMoW3dpZHMzNHBvcnRhYmxldnVdKykvaSwvKG1pbnQpW1xcL1xcc1xcKF0/KFxcdyspKi9pLC8obWFnZWlhfHZlY3RvcmxpbnV4KVs7XFxzXS9pLC8oam9saXxba3hsbl0/dWJ1bnR1fGRlYmlhbnxbb3Blbl0qc3VzZXxnZW50b298KD89XFxzKWFyY2h8c2xhY2t3YXJlfGZlZG9yYXxtYW5kcml2YXxjZW50b3N8cGNsaW51eG9zfHJlZGhhdHx6ZW53YWxrfGxpbnB1cylbXFwvXFxzLV0/KD8hY2hyb20pKFtcXHdcXC4tXSspKi9pLC8oaHVyZHxsaW51eClcXHM/KFtcXHdcXC5dKykqL2ksLyhnbnUpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXSxbLyhjcm9zKVxcc1tcXHddK1xccyhbXFx3XFwuXStcXHcpL2ldLFtbYyxcIkNocm9taXVtIE9TXCJdLGRdLFsvKHN1bm9zKVxccz8oW1xcd1xcLl0rXFxkKSovaV0sW1tjLFwiU29sYXJpc1wiXSxkXSxbL1xccyhbZnJlbnRvcGMtXXswLDR9YnNkfGRyYWdvbmZseSlcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdLFsvKGhhaWt1KVxccyhcXHcrKS9pXSxbYyxkXSxbLyhpcFtob25lYWRdKykoPzouKm9zXFxzKFtcXHddKykqXFxzbGlrZVxcc21hY3w7XFxzb3BlcmEpL2ldLFtbYyxcImlPU1wiXSxbZCwvXy9nLFwiLlwiXV0sWy8obWFjXFxzb3NcXHN4KVxccz8oW1xcd1xcc1xcLl0rXFx3KSovaSwvKG1hY2ludG9zaHxtYWMoPz1fcG93ZXJwYylcXHMpL2ldLFtbYyxcIk1hYyBPU1wiXSxbZCwvXy9nLFwiLlwiXV0sWy8oKD86b3Blbik/c29sYXJpcylbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ksLyhhaXgpXFxzKChcXGQpKD89XFwufFxcKXxcXHMpW1xcd1xcLl0qKSovaSwvKHBsYW5cXHM5fG1pbml4fGJlb3N8b3NcXC8yfGFtaWdhb3N8bW9ycGhvc3xyaXNjXFxzb3N8b3BlbnZtcykvaSwvKHVuaXgpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXV19LEM9ZnVuY3Rpb24odCxuKXtpZih0aGlzIGluc3RhbmNlb2YgQyl7dmFyIGk9dHx8KGUmJmUubmF2aWdhdG9yJiZlLm5hdmlnYXRvci51c2VyQWdlbnQ/ZS5uYXZpZ2F0b3IudXNlckFnZW50OnIpLHM9bj9TLmV4dGVuZChOLG4pOk47cmV0dXJuIHRoaXMuZ2V0QnJvd3Nlcj1mdW5jdGlvbigpe3ZhciBlPXgucmd4LmFwcGx5KHRoaXMscy5icm93c2VyKTtyZXR1cm4gZS5tYWpvcj1TLm1ham9yKGUudmVyc2lvbiksZX0sdGhpcy5nZXRDUFU9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmNwdSl9LHRoaXMuZ2V0RGV2aWNlPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5kZXZpY2UpfSx0aGlzLmdldEVuZ2luZT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuZW5naW5lKX0sdGhpcy5nZXRPUz1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMub3MpfSx0aGlzLmdldFJlc3VsdD1mdW5jdGlvbigpe3JldHVybnt1YTp0aGlzLmdldFVBKCksYnJvd3Nlcjp0aGlzLmdldEJyb3dzZXIoKSxlbmdpbmU6dGhpcy5nZXRFbmdpbmUoKSxvczp0aGlzLmdldE9TKCksZGV2aWNlOnRoaXMuZ2V0RGV2aWNlKCksY3B1OnRoaXMuZ2V0Q1BVKCl9fSx0aGlzLmdldFVBPWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2V0VUE9ZnVuY3Rpb24oZSl7cmV0dXJuIGk9ZSx0aGlzfSx0aGlzfXJldHVybihuZXcgQyh0LG4pKS5nZXRSZXN1bHQoKX07Qy5WRVJTSU9OPW4sQy5CUk9XU0VSPXtOQU1FOmMsTUFKT1I6ZixWRVJTSU9OOmR9LEMuQ1BVPXtBUkNISVRFQ1RVUkU6dn0sQy5ERVZJQ0U9e01PREVMOmwsVkVORE9SOnAsVFlQRTpoLENPTlNPTEU6bSxNT0JJTEU6ZyxTTUFSVFRWOmIsVEFCTEVUOnksV0VBUkFCTEU6dyxFTUJFRERFRDpFfSxDLkVOR0lORT17TkFNRTpjLFZFUlNJT046ZH0sQy5PUz17TkFNRTpjLFZFUlNJT046ZH0sdHlwZW9mIGV4cG9ydHMhPT1vPyh0eXBlb2YgbW9kdWxlIT09byYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPUMpLGV4cG9ydHMuVUFQYXJzZXI9Qyk6dHlwZW9mIGRlZmluZT09PXMmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIEN9KTplLlVBUGFyc2VyPUM7dmFyIGs9ZS5qUXVlcnl8fGUuWmVwdG87aWYodHlwZW9mIGshPT1vKXt2YXIgTD1uZXcgQztrLnVhPUwuZ2V0UmVzdWx0KCksay51YS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gTC5nZXRVQSgpfSxrLnVhLnNldD1mdW5jdGlvbihlKXtMLnNldFVBKGUpO3ZhciB0PUwuZ2V0UmVzdWx0KCk7Zm9yKHZhciBuIGluIHQpay51YVtuXT10W25dfX19KSh0eXBlb2Ygd2luZG93PT1cIm9iamVjdFwiP3dpbmRvdzp0aGlzKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBwcmVsb2FkSW1nXG4gKiBAcGFyYW0gaW1nUGF0aFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbWdQYXRoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGltZztcbiAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgYXJndW1lbnRzLmNhbGxlZSk7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbWcuc3JjID0gaW1nUGF0aDtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9pbWcvcHJlbG9hZEltZy5qcyIsIi8qKlxuICogc2V0VXBCdG5Ud2l0dGVyXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBzaGFyZVVSTFxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgdGV4dCwgc2hhcmVVUkwpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD8nO1xuICBpZiAoc2hhcmVVUkwgPT09ICcnKSB7XG4gICAgdXJsICs9IFwidGV4dD1cIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9IGVsc2Uge1xuICAgIHVybCArPSBcInVybD1cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKSArIFwiJnRleHQ9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAndHdpdHRlclNoYXJlJywgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0blR3aXR0ZXIuanMiLCIvKipcbiAqIHNldFVwQnRuTGluZVxuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHRleHQsIHNoYXJlVVJMID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwOi8vbGluZS5tZS9tc2cvdGV4dC8/JztcbiAgaWYgKHNoYXJlVVJMID09PSAnJykge1xuICAgIHVybCArPSBcIlwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsICs9IChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpICsgXCJcXG5cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAnbGluZVNoYXJlJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkxpbmUuanMiLCIvKipcbiAqIHNldFVwQnRuRmFjZWJvb2tcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgc2hhcmVVUkwsIGRlc2NyaXB0aW9uID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICBkZXNjcmlwdGlvbiA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/JmRpc3BsYXk9cG9wdXAmdT0nO1xuICB1cmwgKz0gXCJcIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgdXJsICs9IFwiJmRlc2NyaXB0aW9uPVwiICsgKGVuY29kZVVSSUNvbXBvbmVudChkZXNjcmlwdGlvbikpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsIFwiZmFjZWJvb2tTaGFyZVwiICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRnVuY1xuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuYmxhbmsoKTtcbiAgICB0aGlzLmRlYnVnZ2VyKCk7XG4gICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgICB0aGlzLmV4cGFuZGpRdWVyeSgpO1xuXG4gIH1cblxuICBibGFuaygpIHtcblxuICAgICQoKCk9PnskKCcuYmxhbmsnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJyk7fSk7XG5cbiAgfVxuXG4gIGRlYnVnZ2VyKCkge1xuXG4gICAgLy8g44OH44OQ44OD44Kw44Oi44O844OJ5YiH5pu/XG4gICAgdmFyIFJFTEVBU0UgPSBnYi5pbi5jb25mLlJFTEVBU0U7XG5cbiAgICAvLyDnva7mj5vlr77osaHjga7jg6Hjgr3jg4Pjg4njgpLphY3liJfjgajjgZfjgabkv53mjIHjgZnjgotcbiAgICB2YXIgbWV0aG9kcyA9IFtcbiAgICAgICdsb2cnLFxuICAgICAgJ2RlYnVnJyxcbiAgICAgICdpbmZvJyxcbiAgICAgICd3YXJuJyxcbiAgICAgICdlcnJvcicsXG4gICAgICAnZGlyJyxcbiAgICAgICd0cmFjZScsXG4gICAgICAnYXNzZXJ0JyxcbiAgICAgICdkaXJ4bWwnLFxuICAgICAgJ2dyb3VwJyxcbiAgICAgICdncm91cEVuZCcsXG4gICAgICAndGltZScsXG4gICAgICAndGltZUVuZCcsXG4gICAgICAnY291bnQnLFxuICAgICAgJ3Byb2ZpbGUnLFxuICAgICAgJ3Byb2ZpbGVFbmQnXG4gICAgXTtcblxuICAgIC8vIGNvbnNvbGXjgYzkvb/jgYjjgarjgYTloLTlkIjjga/nqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgpLoqK3lrprjgZfjgabjgYrjgY9cbiAgICBpZiggdHlwZW9mIHdpbmRvdy5jb25zb2xlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xuICAgIH1cblxuICAgIC8vIOWQhOODoeOCveODg+ODieOCkndpbmRvd+OBuOebtOaOpei/veWKoOOBl+OBpuihjOOBj1xuICAgIGZvciggdmFyIGkgaW4gbWV0aG9kcyApe1xuICAgICAgKGZ1bmN0aW9uKCBtICl7XG5cbiAgICAgICAvLyBjb25zb2xl44Gr44GC44KL77yf44OH44OQ44OD44Kw44Oi44O844OJ44Gv5pyJ5Yq577yfY29uc29sZeOBruOCguOBruOBr+mWouaVsO+8n1xuICAgICAgIGlmKCBjb25zb2xlW21dICYmICFSRUxFQVNFICYmIHR5cGVvZiBjb25zb2xlW21dID09PSBcImZ1bmN0aW9uXCIgKXtcbiAgICAgICAgd2luZG93W21dID0gY29uc29sZVttXS5iaW5kKGNvbnNvbGUpO1xuICAgICAgIH0gZWxzZSB744CALy8gZGVidWdNb2Rl44GMZmFsc2Us44KC44GX44GP44Gv6Kmy5b2T44Oh44K944OD44OJ44GM5a2Y5Zyo44GX44Gq44GE5aC05ZCI44Gv44CB56m644Gu44Oh44K944OD44OJ44KS55So5oSP44GZ44KLXG4gICAgICAgIHdpbmRvd1ttXSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICB9XG5cbiAgICAgIH0pKCBtZXRob2RzW2ldICk7XG4gICAgfVxuXG4gIH1cblxuICBwcmVwZW5kKHBhcmFtKSB7XG5cbiAgICAkKCdib2R5JykucHJlcGVuZChwYXJhbSk7XG5cbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcblxuICAgIHZhciBGUFMgPSAxMDAwLzYwO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8gY2hyb21l44KE5pyA5paw44GuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8g5Y+k44GEZmlyZWZveOeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICAvLyBzYWZhcmk25Lul5YmN44CBaU9TNiBzYWZhcmnnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCBGUFMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIHRpbWVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTsgICAgICBcblxuICB9XG5cbiAgZXhwYW5kalF1ZXJ5KCkge1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICB3OjAsIFxuICAgICAgaDowLCBcbiAgICAgIGFkanVzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCcsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RXOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RIOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNoZWNrQ3NzQmxlbmQoKSB7XG5cbiAgICBpZiAoJ0NTUycgaW4gd2luZG93ICYmICdzdXBwb3J0cycgaW4gd2luZG93LkNTUykge1xuICAgICAgaWYgKCF3aW5kb3cuQ1NTLnN1cHBvcnRzKCdtaXgtYmxlbmQtbW9kZScsICdzb2Z0LWxpZ2h0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nKGdiLmluLnUuaXNJRSk7XG5cbiAgICBpZiAoZ2IuaW4udS5pc0lFKSB7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgbm90U2F2ZUltZygpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHBjXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcblxuICAgICAgJCgoKT0+e1xuICAgICAgICAkKFwiaW1nXCIpLm9uKFwiY29udGV4dG1lbnVcIiwoKT0+e1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHNwIGFuZHJvaWRcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciB2ID0gZ2IuaW4udS5pc0FuZHJvaWRWZXJzaW9uKCk7XG5cbiAgICBpZiAodj09dW5kZWZpbmVkKSByZXR1cm47XG4gICAgaWYgKHY8NSkge1xuXG4gICAgICB2YXIgdGltZXI7XG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hzdGFydFwiLCgpPT57XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIGFsZXJ0KFwi55S75YOP44Gv5L+d5a2Y44Gn44GN44G+44Gb44KTXCIpXG4gICAgICAgIH0sNTAwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoZW5kXCIsKCk9PntcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkgICAgICBcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9GdW5jLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTWFpblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRGlzcGxheVRvcCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUb3AnO1xuaW1wb3J0IERpc3BsYXlUZXh0dXJlQmcgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnJztcbmltcG9ydCBEaXNwbGF5VGV4dHVyZU1vdmllIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIHZhciBwYWdlID0gJCgnYm9keScpLmRhdGEoJ2lkJyk7XG5cbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ+ePvuWcqOOBruODmuODvOOCuElE44GvICcsIHBhZ2UpO1xuXG5cdFx0Ly9wYWdl44GuSUTjgZTjgajjgavnmbrngavjgZnjgovjgq/jg6njgrnjga7mjK/jgorliIbjgZFcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICBuZXcgRGlzcGxheVRvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXh0dXJlQmcnOlxuXG5cdFx0XHRcdG5ldyBEaXNwbGF5VGV4dHVyZUJnKCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3RleHR1cmVNb3ZpZSc6XG5cblx0XHRcdFx0bmV3IERpc3BsYXlUZXh0dXJlTW92aWUoKTtcblxuXHRcdFx0XHRicmVhaztcblxuICAgIH1cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgXG4gIH1cblxuICBvblJlbmRlcigpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IERpc3BsYXlUb3BcbiAqIERhdGU6IDE3LzkvMjNcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IFRleHR1cmVCZyBmcm9tIFwiLi4vdmlzdWFsL1RleHR1cmVCZ1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcgPSBuZXcgVGV4dHVyZUJnKCk7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlQmcuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBUZXh0dXJlQmdcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcbmltcG9ydCBQbGFuZSBmcm9tICcuL1BsYW5lJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlQmcgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJnbC1vdXRwdXQnKTtcblxuICAgIHRoaXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSA9IHRoaXMuX2NyZWF0ZUNhbWVyYS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIgPSB0aGlzLl9jcmVhdGVSZW5kZXJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmxvYWRUZXh0dXJlID0gdGhpcy5fbG9hZFRleHR1cmUuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMucGxhbmUgPSBuZXcgUGxhbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5VcGRhdGUoKTtcblxuXHRcdHRoaXMubG9hZFRleHR1cmUoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIOOCq+ODoeODqeS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZUNhbWVyYSgpe1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7zkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVSZW5kZXJlcigpe1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzICAgICAgICAgIDogZmFsc2UsXG4gICAgICBzdGVuY2lsICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlcHRoICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBmYWxzZSxcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXNcblx0XHR9KTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweGZmZmZmZiwgMC4wKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA44K344O844Oz5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OCkuODreODvOODiVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2xvYWRUZXh0dXJlKCl7XG5cblx0XHR0aGlzLnBsYW5lLmxvYWRUZXh0dXJlKCcuLi8uLi8uLi8uLi9hc3NldHMvcmVzb3VyY2UvaW1nL3NoaWJ1eWEwMS5qcGcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYW5lLm1lc2gpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcblx0XHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0dGhpcy5VcGRhdGUoKTtcblx0XHR9KTtcblxuXHR9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX1VwZGF0ZSgpIHtcblxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgICAgdGhpcy5VcGRhdGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K644Kk44OZ44Oz44OIXG4gICAqL1xuICBfb25SZXNpemUoKSB7XG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXHRcdHRoaXMucGxhbmUubWVzaC5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cblxuXHRzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9UZXh0dXJlQmcuanMiLCIvKipcbiAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG4gKi9cblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcblxuVEhSRUUuT3JiaXRDb250cm9scyA9IGZ1bmN0aW9uICggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXG5cdHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXG5cdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdHRoaXMubWluWm9vbSA9IDA7XG5cdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cblx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gSWYgc2V0LCBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIHRoZSBpbnRlcnZhbCBbIC0gTWF0aC5QSSwgTWF0aC5QSSBdLlxuXHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG5cdC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuXHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcblx0dGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcblxuXHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB6b29taW5nXG5cdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG5cdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHJvdGF0aW5nXG5cdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcblx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXG5cdHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcblx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuXHQvLyBJZiBhdXRvLXJvdGF0ZSBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuXHR0aGlzLmVuYWJsZUtleXMgPSB0cnVlO1xuXG5cdC8vIFRoZSBmb3VyIGFycm93IGtleXNcblx0dGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcblxuXHQvLyBNb3VzZSBidXR0b25zXG5cdHRoaXMubW91c2VCdXR0b25zID0geyBPUkJJVDogVEhSRUUuTU9VU0UuTEVGVCwgWk9PTTogVEhSRUUuTU9VU0UuTUlERExFLCBQQU46IFRIUkVFLk1PVVNFLlJJR0hUIH07XG5cblx0Ly8gZm9yIHJlc2V0XG5cdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblx0dGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cblx0Ly9cblx0Ly8gcHVibGljIG1ldGhvZHNcblx0Ly9cblxuXHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnBoaTtcblxuXHR9O1xuXG5cdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xuXG5cdH07XG5cblx0dGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHNjb3BlLnRhcmdldC5jb3B5KCBzY29wZS50YXJnZXQwICk7XG5cdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHNjb3BlLnBvc2l0aW9uMCApO1xuXHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cblx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9O1xuXG5cdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuXHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cblx0XHR2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG5cblx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblxuXHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cblx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblx0XHRcdHNwaGVyaWNhbC5zZXRGcm9tVmVjdG9yMyggb2Zmc2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRyb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuXHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KCBzY29wZS5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSApICk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucGhpID0gTWF0aC5tYXgoIHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpICkgKTtcblxuXHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heCggc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKCBzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cyApICk7XG5cblx0XHRcdC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuXHRcdFx0c2NvcGUudGFyZ2V0LmFkZCggcGFuT2Zmc2V0ICk7XG5cblx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKCBzcGhlcmljYWwgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG5cdFx0XHRwb3NpdGlvbi5jb3B5KCBzY29wZS50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG5cdFx0XHRzY29wZS5vYmplY3QubG9va0F0KCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY2FsZSA9IDE7XG5cdFx0XHRwYW5PZmZzZXQuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdC8vIHVwZGF0ZSBjb25kaXRpb24gaXM6XG5cdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcblx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuXG5cdFx0XHRpZiAoIHpvb21DaGFuZ2VkIHx8XG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggc2NvcGUub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgfHxcblx0XHRcdFx0OCAqICggMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApO1xuXHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cblxuXHR9O1xuXG5cdC8vXG5cdC8vIGludGVybmFsc1xuXHQvL1xuXG5cdHZhciBzY29wZSA9IHRoaXM7XG5cblx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXHR2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuXHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cblx0dmFyIFNUQVRFID0geyBOT05FIDogLSAxLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xuXG5cdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0dmFyIEVQUyA9IDAuMDAwMDAxO1xuXG5cdC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG5cdHZhciBzcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cdHZhciBzcGhlcmljYWxEZWx0YSA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblxuXHR2YXIgc2NhbGUgPSAxO1xuXHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0dmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVMZWZ0KCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVVcCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG5cblx0fVxuXG5cdHZhciBwYW5MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDAgKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR2YXIgcGFuVXAgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDEgKTsgLy8gZ2V0IFkgY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG5cdHZhciBwYW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuXHRcdFx0XHQvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cblx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG5cdFx0XHRcdC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcblx0XHRcdFx0cGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcblx0XHRcdFx0cGFuTGVmdCggZGVsdGFYICogKCBzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudFdpZHRoLCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCBkZWx0YVkgKiAoIHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0ZnVuY3Rpb24gZG9sbHlJbiggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkb2xseU91dCggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUm90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Eb2xseScgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVEb2xseScgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlV2hlZWwnICk7XG5cblx0XHRpZiAoIGV2ZW50LmRlbHRhWSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuZGVsdGFZID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xuXG5cdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRwYW4oIDAsIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcblx0XHRcdFx0cGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdHBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG5cdFx0XHRcdHBhbiggLSBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0UGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZURvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBoYW5kbGVycyAtIEZTTTogbGlzdGVuIGZvciBldmVudHMgYW5kIHJlc2V0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZU1vdXNlVXAoIGV2ZW50ICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSB8fCAoIHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUgKSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApOyAvLyBub3Qgc3VyZSB3aHkgdGhlc2UgYXJlIGhlcmUuLi5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVLZXlzID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlS2V5RG93biggZXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOlx0Ly8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZVRvdWNoRW5kKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Db250ZXh0TWVudSggZXZlbnQgKSB7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdH1cblxuXHQvL1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG5cblx0dGhpcy51cGRhdGUoKTtcblxufTtcblxuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRIUkVFLk9yYml0Q29udHJvbHM7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBUSFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xuXG5cdGNlbnRlcjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5jZW50ZXIgaGFzIGJlZW4gcmVuYW1lZCB0byAudGFyZ2V0JyApO1xuXHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0O1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdG5vWm9vbToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVab29tO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9Sb3RhdGU6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVJvdGF0ZTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUm90YXRlID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUGFuOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVQYW47XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVBhbiA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub0tleXM6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlS2V5cztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVLZXlzID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdHN0YXRpY01vdmluZyA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlRGFtcGluZztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVEYW1waW5nID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdGR5bmFtaWNEYW1waW5nRmFjdG9yIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYW1waW5nRmFjdG9yO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuXG5cdFx0fVxuXG5cdH1cblxufSApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvT3JiaXRDb250cm9scy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFBsYW5lXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmUgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLnVuaWZvcm1zID0ge307XG5cdFx0dGhpcy50ZXh0dXJlID0gbnVsbDtcblx0XHR0aGlzLm1lc2ggPSBudWxsO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSA9IHRoaXMuX2xvYWRUZXh0dXJlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jcmVhdGVNZXNoID0gdGhpcy5fY3JlYXRlTWVzaC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLl9yZXNpemUuYmluZCh0aGlzKTtcblxuICB9XG5cblx0X2xvYWRUZXh0dXJlKGltYWdlLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG5cdFx0bG9hZGVyLmxvYWQoaW1hZ2UsICh0ZXh0dXJlKSA9PiB7XG5cdFx0XHR0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgdGhpcy5tZXNoID0gdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuXHR9XG5cblx0X2NyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy51bmlmb3JtcyA9IHtcblx0XHRcdHJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZVJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKDIwNDgsIDEzNTYpLFxuXHRcdFx0fSxcblx0XHRcdHRleHR1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3QnLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy50ZXh0dXJlLFxuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIG5ldyBUSFJFRS5NZXNoKFxuXHRcdFx0bmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiksXG5cdFx0XHRuZXcgVEhSRUUuUmF3U2hhZGVyTWF0ZXJpYWwoe1xuXHRcdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3Jtcyxcblx0XHRcdFx0dmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2NvdmVyLnZlcnQnKSxcblx0XHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvY292ZXIuZnJhZycpLFxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfcmVuZGVyKHRpbWUpIHtcblxuXHRcdGlmICh0aGlzLnN0b3ApIHJldHVybjtcblx0XHR0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgKz0gdGltZSAvIHRoaXMuaW50ZXJ2YWw7XG5cdFx0aWYgKHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA+IDEpIHtcblx0XHRcdHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA9IDA7XG5cdFx0XHR0aGlzLnByZXZfbnVtID0gdGhpcy5uZXh0X251bTtcblx0XHRcdHRoaXMudW5pZm9ybXMudGV4UHJldi52YWx1ZSA9IHRoaXMudGV4dHVyZXNbdGhpcy5uZXh0X251bV07XG5cdFx0XHR3aGlsZSAodGhpcy5uZXh0X251bSA9PSB0aGlzLnByZXZfbnVtKSB7XG5cdFx0XHRcdHRoaXMubmV4dF9udW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRleHR1cmVzLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVuaWZvcm1zLnRleE5leHQudmFsdWUgPSB0aGlzLnRleHR1cmVzW3RoaXMubmV4dF9udW1dO1xuXHRcdH1cbiAgfVxuXG5cdF9yZXNpemUoKXtcblx0XHR0aGlzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuICAgIHZVdiA9IHV2O1xcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLnZlcnRcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG51bmlmb3JtIHZlYzIgaW1hZ2VSZXNvbHV0aW9uO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcbiAgICB2ZWMyIHJhdGlvID0gdmVjMihcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi54IC8gcmVzb2x1dGlvbi55KSAvIChpbWFnZVJlc29sdXRpb24ueCAvIGltYWdlUmVzb2x1dGlvbi55KSwgMS4wKSxcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi55IC8gcmVzb2x1dGlvbi54KSAvIChpbWFnZVJlc29sdXRpb24ueSAvIGltYWdlUmVzb2x1dGlvbi54KSwgMS4wKVxcbiAgICApO1xcblxcbiAgICB2ZWMyIHV2ID0gdmVjMihcXG4gICAgICAgIHZVdi54ICogcmF0aW8ueCArICgxLjAgLSByYXRpby54KSAqIDAuNSxcXG4gICAgICAgIHZVdi55ICogcmF0aW8ueSArICgxLjAgLSByYXRpby55KSAqIDAuNVxcbiAgICApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdXYpO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci5mcmFnXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG4vLyBpbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vdmlzdWFsL0NhbnZhc1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENhbnZhc1xuICogRGF0ZTogMTcvOS8yM1xuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy51bmlmb3JtcyA9IHtcbiAgICAgIHVfdGltZTogeyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxuICAgICAgdV9yZXNvbHV0aW9uOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfSxcbiAgICAgIHVfbW91c2U6IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9XG4gICAgfTtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJnbC1vdXRwdXQnKTtcblxuICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAvLyB0aGlzLm91dHB1dCA9IG9wdHMub3V0cHV0IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuXHRcdHRoaXMuY3ViZSA9IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSA9IHRoaXMuX2NyZWF0ZUNhbWVyYS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIgPSB0aGlzLl9jcmVhdGVSZW5kZXJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlT2JqZWN0ID0gdGhpcy5fY3JlYXRlT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcmJpdENvbnRyb2xzID0gdGhpcy5fb3JiaXRDb250cm9scy5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wbGFuZU9iamVjdCA9IHRoaXMuX3BsYW5lT2JqZWN0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLlVwZGF0ZSA9IHRoaXMuX1VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLm9yYml0Q29udHJvbHMoKTtcblx0XHQvLyB0aGlzLmNyZWF0ZU9iamVjdCgpO1xuXG4gICAgdGhpcy5wbGFuZU9iamVjdCgpO1xuXG4gICAgdGhpcy5VcGRhdGUoKTtcblxuICAgIC8vIHRoaXMudGl0bGVPYmplY3QubG9hZFRleHR1cmUoKCkgPT4ge1xuICAgIC8vICAgdGhpcy5zY2VuZS5hZGQodGhpcy50aXRsZU9iamVjdC5vYmopO1xuICAgIC8vIH0pO1xuXG4gICAgLy/jg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4jnmbrngatcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0sIGZhbHNlKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOOCq+ODoeODqeS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZUNhbWVyYSgpe1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7zkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVSZW5kZXJlcigpe1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzICAgICAgICAgIDogZmFsc2UsXG4gICAgICBzdGVuY2lsICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlcHRoICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBmYWxzZSxcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXNcblx0XHR9KTtcblxuICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweGZmZmZmZik7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4MDAwMDAwKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAvLyB0aGlzLm91dHB1dC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICogT2JqZWN05L2c5oiQXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfY3JlYXRlT2JqZWN0KCl7XG5cbiAgICBsZXQgY3ViZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDQsIDQpO1xuICAgIGxldCBjdWJlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgICAgd2lyZWZyYW1lOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmN1YmUgPSBuZXcgVEhSRUUuTWVzaChjdWJlR2VvbWV0cnksIGN1YmVNYXRlcmlhbCk7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnggPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi55ID0gMztcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueiA9IDM7XG5cbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmN1YmUpO1xuXG5cdH1cblxuXHRfcGxhbmVPYmplY3QoKXtcbiAgICB0aGlzLnBsYW5lID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgIC8vIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDI1NiwgNjQsIDQwLCAxMCksXG4gICAgICAgIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDUsIDIwLCAzMiksXG4gICAgICAgIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAgICAgdW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG4gICAgICAgICAgdmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2luZGV4L3Rlc3QudmVydCcpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2luZGV4L3Rlc3QuZnJhZycpLFxuICAgICAgICB9KVxuICAgIClcbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYW5lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7xcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9yZW5kZXIoKSB7XG4gICAgbGV0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG4gICAgbGV0IHRpbWUgPSBjbG9jay5nZXREZWx0YSgpO1xuXG4gICAgLy8gdGhpcy50aXRsZU9iamVjdC50aXRyZW5kZXIodGltZSk7XG4gIH1cblxuICAvKipcbiAgICog5pu05pawXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfVXBkYXRlKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICB0aGlzLlVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIC8vIHRoaXMuY29udHJvbHMudXBkYXRlKCk7XG4gICAgdGhpcy51bmlmb3Jtcy51X3RpbWUudmFsdWUgKz0gMC4wNTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrpcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cblx0LyoqXG4gICAqIOOCq+ODoeODqeOCs+ODs+ODiOODreODvOODq1xuXHQgKi9cblx0X29yYml0Q29udHJvbHMoKXtcblx0XHR0aGlzLmNvbnRyb2xzID0gbmV3IFRIUkVFLk9yYml0Q29udHJvbHModGhpcy5jYW1lcmEpO1xuXHRcdHRoaXMuY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XG5cdFx0bGV0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG5cblx0XHRsZXQgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xuXHRcdHRoaXMuY29udHJvbHMudXBkYXRlKGRlbHRhKTtcbiAgfVxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL0NhbnZhcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbi8vYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvaW5kZXgvdGVzdC52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdmVjMiBzdCA9IGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb24ueHk7XFxuICAgIGdsX0ZyYWdDb2xvcj12ZWM0KHN0Lngsc3QueSwwLjAsMS4wKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvaW5kZXgvdGVzdC5mcmFnXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9