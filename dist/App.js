/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var InputText = function () {
    var LOCAL_STORAGE_TITLE_KEY = "localTitle";
    var LOCAL_STORAGE_DESCRIPTION_KEY = "localDescription";
    var title = document.getElementById("title__textarea");
    var description = document.getElementById("description__textarea");
    var previewButton = document.getElementById("preview_load__button");
    var preTitle = document.getElementsByClassName("preview_title")[0];
    var preDescription = document.getElementsByClassName("preview_description")[0];
    var sort = function () {
        var alignButtonList = document.getElementsByClassName("preview_content_align__radio_button");
        for (var i = 0; i < alignButtonList.length; i++) {
            var alignButton = alignButtonList[i];
            if (alignButton.checked === true) {
                preTitle.style.textAlign = alignButton.value;
                preDescription.style.textAlign = alignButton.value;
            }
        }
    };
    var load = function () {
        var localTitle = localStorage.getItem(LOCAL_STORAGE_TITLE_KEY);
        var localDescription = localStorage.getItem(LOCAL_STORAGE_DESCRIPTION_KEY);
        if (localTitle !== null) {
            title.innerText = localTitle;
            preTitle.innerText = localTitle;
        }
        if (localDescription !== null) {
            description.innerText = localDescription;
            preDescription.innerText = localDescription;
        }
    };
    var paint = function () {
        localStorage.setItem(LOCAL_STORAGE_TITLE_KEY, title.value);
        localStorage.setItem(LOCAL_STORAGE_DESCRIPTION_KEY, description.value);
        sort();
        preTitle.innerText = title.value;
        preDescription.innerText = description.value;
    };
    load();
    previewButton.addEventListener("click", paint);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputText);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ColorHandler = function () {
    var LOCAL_STORAGE_BACKGROUND_COLOR_KEY = "backgroundColor";
    var LOCAL_STORAGE_FONT_COLOR_KEY = "fontColor";
    var colorPicker = document.getElementsByClassName("colorPicker");
    var previewButton = document.getElementById("preview_load__button");
    var previewContentWrapper = (document.getElementsByClassName("preview_content_wrapper")[0]);
    var changeBackgroundColor = function () {
        var newBackgroundColor = colorPicker[0].value;
        previewContentWrapper.style.backgroundColor = newBackgroundColor;
        localStorage.setItem(LOCAL_STORAGE_BACKGROUND_COLOR_KEY, newBackgroundColor);
    };
    var changeFontColor = function () {
        var newFontColor = colorPicker[1].value;
        previewContentWrapper.style.color = newFontColor;
        localStorage.setItem(LOCAL_STORAGE_FONT_COLOR_KEY, newFontColor);
    };
    var init = function () {
        var prevBackgroundColor = localStorage.getItem(LOCAL_STORAGE_BACKGROUND_COLOR_KEY);
        var prevFontColor = localStorage.getItem(LOCAL_STORAGE_FONT_COLOR_KEY);
        if (prevBackgroundColor !== null) {
            previewContentWrapper.style.backgroundColor = prevBackgroundColor;
            colorPicker[0].nodeValue = prevBackgroundColor;
        }
        if (prevFontColor !== null) {
            previewContentWrapper.style.color = prevFontColor;
            colorPicker[1].nodeValue = prevFontColor;
        }
    };
    var handleShowPreview = function () {
        changeBackgroundColor();
        changeFontColor();
    };
    previewButton.addEventListener('click', handleShowPreview);
    init();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorHandler);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var FruitIcon = function () {
    var fruitIconList = document.getElementsByClassName("taste_file_selector__input");
    var imageList = document.getElementsByClassName("preview_icon");
    var attachFileSelectListener = function () {
        var _loop_1 = function (i) {
            fruitIconList[i].addEventListener('change', function (event) {
                var target = event.target;
                var fileList = target.files;
                var reader = new FileReader();
                var image = imageList[i];
                reader.addEventListener('load', function () {
                    image.src = reader.result;
                });
                if (fileList !== null) {
                    reader.readAsDataURL(fileList[0]);
                }
            });
        };
        for (var i = 0; i < fruitIconList.length; i++) {
            _loop_1(i);
        }
    };
    attachFileSelectListener();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FruitIcon);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _ColorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _FruitIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



var App = function () {
    (0,_InputText__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_ColorHandler__WEBPACK_IMPORTED_MODULE_1__.default)();
    (0,_FruitIcon__WEBPACK_IMPORTED_MODULE_2__.default)();
};
window.addEventListener('load', App);

})();

/******/ })()
;