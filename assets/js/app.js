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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@glidejs/glide/dist/glide.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\OpenServer\\domains\\levelUp\\node_modules\\@glidejs\\glide\\dist\\glide.esm.js'");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\OpenServer\\domains\\levelUp\\node_modules\\axios\\index.js'");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener('DOMContentLoaded', function (event) {
  __webpack_require__(/*! ./scrollByLink */ "./src/js/scrollByLink.js");

  __webpack_require__(/*! ./sendForm */ "./src/js/sendForm.js");

  __webpack_require__(/*! ./slickSlider */ "./src/js/slickSlider.js");

  __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");
});

/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scrollTo(el) {
  window.scroll({
    left: 0,
    top: el.offsetTop,
    behavior: "smooth"
  });
}

var buttonScrollToForm = document.getElementById('buttonScrollToForm');
var buttonScroll = document.getElementById('buttonScroll');
var form = document.getElementById('feedBack');
buttonScrollToForm.addEventListener('click', function () {
  scrollTo(form);
});
buttonScroll.addEventListener('click', function () {
  scrollTo(form);
});

/***/ }),

/***/ "./src/js/scrollByLink.js":
/*!********************************!*\
  !*** ./src/js/scrollByLink.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var links = _toConsumableArray(document.querySelectorAll('a[href^="#"]'));

links.map(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var section = document.querySelector(link.hash);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

/***/ }),

/***/ "./src/js/sendForm.js":
/*!****************************!*\
  !*** ./src/js/sendForm.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _volodec_utm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./volodec_utm */ "./src/js/volodec_utm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




_toConsumableArray(document.querySelectorAll('form[action]')).map(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formElements = e.target.elements;
    var formData = new FormData(form);
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'post',
      url: form.getAttribute('action'),
      data: formData
    }).then(function (response) {
      console.log(form.getAttribute('data-metrika'));
      metriks(form.getAttribute('data-metrika'));
      showThanks();
      clearValue(form.querySelectorAll('input:not([type=hidden]), textarea'));
    })["catch"](function (error) {
      return console.log(error);
    });
    return false;
  });
});

function clearValue(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].value = '';
  }
}

Object(_volodec_utm__WEBPACK_IMPORTED_MODULE_1__["default"])();

window.metriks = function (id) {
  console.log('metriks entry');
  ym(44878075, 'reachGoal', id);
  console.log('yandex');
  gtag('event', id, {
    'event_category': 'wingsLanding'
  });
  console.log('google');
  return true;
};

/***/ }),

/***/ "./src/js/slickSlider.js":
/*!*******************************!*\
  !*** ./src/js/slickSlider.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");

new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  gap: 100,
  breakpoints: {
    1356: {
      gap: 20
    },
    900: {
      perView: 2,
      gap: 20
    },
    650: {
      perView: 1
    }
  }
}).mount();

/***/ }),

/***/ "./src/js/volodec_utm.js":
/*!*******************************!*\
  !*** ./src/js/volodec_utm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setUTMtoInput; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
* Парсим урл на наличие утм метки
* */
function getParameterByName($name) {
  var name = $name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
      regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
/*
* Установка значений UTM-меток в соответствующие скрытые поля
* */


function setUTMtoInput() {
  var forms = _toConsumableArray(document.querySelectorAll('form'));

  forms.map(function ($form) {
    setValueInput('utm_source', getOrSetCookie('utm_source'), $form);
    setValueInput('utm_medium', getOrSetCookie('utm_medium'), $form);
    setValueInput('utm_campaign', getOrSetCookie('utm_campaign'), $form);
    setValueInput('utm_content', getOrSetCookie('utm_content'), $form);
    setValueInput('utm_term', getOrSetCookie('utm_term'), $form);
  });
}
/**
 * Присвоение значения скрытому полю, а также его создание в случае его отсутствия
 * */

function setValueInput(name, value, form) {
  var input = form.querySelector('[name=' + name + ']');

  if (input === null) {
    input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', name);
    form.appendChild(input);
  }

  input.value = value;
}
/*
* Получаем из cookies значения утм меток, коли нет, заебашим в куки
* */


function getOrSetCookie(name) {
  var $cookie = getCookie(name);

  if (getCookie(name) === undefined) {
    var date = new Date(new Date().getTime() + 60 * 60 * 24 * 30 * 1000); //месяц

    $cookie = encodeURIComponent(getParameterByName(name));
    if ($cookie.length !== 0) document.cookie = "".concat(name, "=").concat($cookie, "; path=/; expires=").concat(date.toUTCString());
  } else {
    $cookie = decodeURIComponent($cookie);
  }

  return $cookie;
}
/*
* Получаем кука
* */


function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

setUTMtoInput();

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\r\n@import \"~css-reset-and-normalize/scss/reset-and-normalize\";\r\n       ^\r\n      Can't find stylesheet to import.\n  ╷\n1 │ @import \"~css-reset-and-normalize/scss/reset-and-normalize\";\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  src\\scss\\libs\\libs.scss 1:9  @import\n  stdin 1:9                    root stylesheet\r\n      in E:\\OpenServer\\domains\\levelUp\\src\\scss\\libs\\libs.scss (line 1, column 9)\n    at E:\\OpenServer\\domains\\levelUp\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at E:\\OpenServer\\domains\\levelUp\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at E:\\OpenServer\\domains\\levelUp\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (E:\\OpenServer\\domains\\levelUp\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at E:\\OpenServer\\domains\\levelUp\\node_modules\\sass-loader\\dist\\index.js:89:7\n    at Function.call$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:99012:16)\n    at render_closure1.call$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:84527:12)\n    at _RootZone.runBinary$3$3 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:29558:18)\n    at _FutureListener.handleError$1 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:28080:21)\n    at _Future__propagateToListeners_handleError.call$0 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:28387:49)\n    at Object._Future__propagateToListeners (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:3901:77)\n    at _Future._completeError$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:28233:9)\n    at _AsyncAwaitCompleter.completeError$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:27881:12)\n    at Object._asyncRethrow (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:3704:17)\n    at E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:19778:20\n    at _wrapJsFunctionForAsync_closure.$protected (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:3729:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:27900:12)\n    at _awaitOnObject_closure0.call$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:27894:25)\n    at _RootZone.runBinary$3$3 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:29558:18)\n    at _FutureListener.handleError$1 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:28080:21)\n    at _Future__propagateToListeners_handleError.call$0 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:28387:49)\n    at Object._Future__propagateToListeners (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:3901:77)\n    at _Future._completeError$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:28233:9)\n    at _AsyncAwaitCompleter.completeError$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:27881:12)\n    at Object._asyncRethrow (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:3704:17)\n    at E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:15279:20\n    at _wrapJsFunctionForAsync_closure.$protected (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:3729:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:27900:12)\n    at _awaitOnObject_closure0.call$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:27894:25)\n    at _RootZone.runBinary$3$3 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:29558:18)\n    at _FutureListener.handleError$1 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:28080:21)\n    at _Future__propagateToListeners_handleError.call$0 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:28387:49)\n    at Object._Future__propagateToListeners (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:3901:77)\n    at _Future._completeError$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:28233:9)\n    at _AsyncAwaitCompleter.completeError$2 (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:27881:12)\n    at Object._asyncRethrow (E:\\OpenServer\\domains\\levelUp\\node_modules\\sass\\sass.dart.js:3704:17)");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./src/js/app ./src/scss/main.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\OpenServer\domains\levelUp\src\js\app */"./src/js/app.js");
module.exports = __webpack_require__(/*! E:\OpenServer\domains\levelUp\src\scss\main.scss */"./src/scss/main.scss");


/***/ })

/******/ });