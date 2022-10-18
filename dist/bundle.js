/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://use.typekit.net/mry2cbf.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\nheader .logo {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.7vw);\n  font-weight: 500;\n  line-height: 32px;\n  text-decoration: none;\n  color: rgb(253, 173, 0);\n}\nheader .navbar li {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n}\n.container .item {\n  min-width: 250px;\n  max-width: 280px;\n}\n.container .item .img-container .img {\n  width: 100%;\n  max-height: 389px;\n}\n.container .item .like-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n.container .item .like-container .title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  flex-basis: 75%;\n}\n.container .item .like-container .icon-heart {\n  font-size: calc(1rem + 0.2vw);\n  color: red;\n  cursor: pointer;\n}\n.container .item .like-container .likes {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n.container .item .button {\n  margin-top: 0.5rem;\n  padding: 0.3rem 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  background: rgb(253, 173, 0);\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n}\nfooter .text-footer {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n}\n.modal .fa-times {\n  float: right;\n  font-size: calc(2rem + 0.5vw);\n  cursor: pointer;\n}\n.modal .image-container {\n  margin-inline: auto;\n  min-width: 180px;\n  max-width: 250px;\n}\n.modal .image-container .image {\n  width: 100%;\n}\n.modal .modal-title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-align: center;\n  margin: 1rem 0;\n}\n.modal .dsc-container {\n  padding: 0 1rem;\n}\n.modal .dsc-container .dsc {\n  text-align: center;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n.modal .comments {\n  text-align: center;\n}\n.modal .comments h3 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .comments .comment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.5rem 0;\n}\n.modal .form {\n  text-align: center;\n}\n.modal .form h4 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .form .list-input .form-item input {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.8rem 0;\n  padding: 0.4rem;\n  border-radius: 8px;\n}\n.modal .form .list-input .form-item button {\n  margin-top: 0.5rem;\n  padding: 0.3rem 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  background: blue;\n  color: #fff;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba(140, 145, 151, 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n\n.container .button:hover {\n  background: rgb(247, 60, 60);\n  color: #fff;\n}\n\n.overlay .form .list-input .modal-button:hover {\n  background: rgb(253, 173, 0);\n  color: #000;\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_reset.scss","webpack://./src/style.scss","webpack://./src/scss/layout/_home.scss","webpack://./src/scss/utilities/_mixins.scss","webpack://./src/scss/layout/_popup.scss","webpack://./src/scss/layout/_transitions.scss"],"names":[],"mappings":"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","sourcesContent":["*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n","@import url(\"https://use.typekit.net/mry2cbf.css\");\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\nheader .logo {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.7vw);\n  font-weight: 500;\n  line-height: 32px;\n  text-decoration: none;\n  color: rgb(253, 173, 0);\n}\nheader .navbar li {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n}\n.container .item {\n  min-width: 250px;\n  max-width: 280px;\n}\n.container .item .img-container .img {\n  width: 100%;\n  max-height: 389px;\n}\n.container .item .like-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n.container .item .like-container .title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  flex-basis: 75%;\n}\n.container .item .like-container .icon-heart {\n  font-size: calc(1rem + 0.2vw);\n  color: red;\n  cursor: pointer;\n}\n.container .item .like-container .likes {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n.container .item .button {\n  margin-top: 0.5rem;\n  padding: 0.3rem 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  background: rgb(253, 173, 0);\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n}\nfooter .text-footer {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n}\n.modal .fa-times {\n  float: right;\n  font-size: calc(2rem + 0.5vw);\n  cursor: pointer;\n}\n.modal .image-container {\n  margin-inline: auto;\n  min-width: 180px;\n  max-width: 250px;\n}\n.modal .image-container .image {\n  width: 100%;\n}\n.modal .modal-title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-align: center;\n  margin: 1rem 0;\n}\n.modal .dsc-container {\n  padding: 0 1rem;\n}\n.modal .dsc-container .dsc {\n  text-align: center;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n.modal .comments {\n  text-align: center;\n}\n.modal .comments h3 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .comments .comment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.5rem 0;\n}\n.modal .form {\n  text-align: center;\n}\n.modal .form h4 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .form .list-input .form-item input {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.8rem 0;\n  padding: 0.4rem;\n  border-radius: 8px;\n}\n.modal .form .list-input .form-item button {\n  margin-top: 0.5rem;\n  padding: 0.3rem 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  background: blue;\n  color: #fff;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba(140, 145, 151, 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n\n.container .button:hover {\n  background: rgb(247, 60, 60);\n  color: #fff;\n}\n\n.overlay .form .list-input .modal-button:hover {\n  background: rgb(253, 173, 0);\n  color: #000;\n}","@use '../utilities' as *;\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n\n  @include flex(row, center, space-between);\n\n  .logo {\n    @include muli-text(24px, 500, 32px, 0.7);\n\n    text-decoration: none;\n    color: rgb(253, 173, 0);\n  }\n\n  .navbar {\n    li {\n      @include muli-text(14px, 500, 24px);\n    }\n  }\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n\n  @include flex(row, center, center);\n\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n\n  .item {\n    min-width: 250px;\n    max-width: 280px;\n\n    .img-container {\n      .img {\n        width: 100%;\n        max-height: 389px;\n      }\n    }\n\n    .like-container {\n      @include flex(row, center, space-between);\n\n      padding: 0.5rem;\n\n      .title {\n        @include muli-text(14px, 500, 24px);\n\n        flex-basis: 75%;\n      }\n\n      .icon-heart {\n        font-size: calc(1rem + 0.2vw);\n        color: red;\n        cursor: pointer;\n      }\n\n      .likes {\n        @include muli-text(14px, 500, 32px);\n      }\n    }\n\n    .button {\n      margin-top: 0.5rem;\n      padding: 0.3rem 0.8rem;\n      text-align: center;\n      cursor: pointer;\n\n      @include muli-text(12px, 500, 24px);\n\n      background: rgb(253, 173, 0);\n      border-radius: 8px;\n      transition: background 0.5s, color 0.5s;\n    }\n  }\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n\n  .text-footer {\n    @include muli-text(12px, 500, 32px);\n  }\n}\n","@mixin muli-text($size, $weight, $height, $increase: 0.3) {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(#{$size} + #{$increase}vw);\n  font-weight: $weight;\n  line-height: $height;\n}\n\n@mixin flex($direction, $align: false, $justify: false) {\n  display: flex;\n  flex-direction: $direction;\n\n  @if $align {\n    align-items: $align;\n  }\n\n  @if $justify {\n    justify-content: $justify;\n  }\n}\n","@use '../utilities' as *;\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n\n  .fa-times {\n    float: right;\n    font-size: calc(2rem + 0.5vw);\n    cursor: pointer;\n  }\n\n  .image-container {\n    margin-inline: auto;\n    min-width: 180px;\n    max-width: 250px;\n\n    .image {\n      width: 100%;\n    }\n  }\n\n  .modal-title {\n    @include muli-text(24px, 700, 24px);\n\n    text-align: center;\n    margin: 1rem 0;\n  }\n\n  .dsc-container {\n    padding: 0 1rem;\n\n    .dsc {\n      text-align: center;\n\n      @include muli-text(16px, 500, 24px);\n    }\n  }\n\n  .comments {\n    text-align: center;\n\n    h3 {\n      @include muli-text(16px, 700, 24px);\n\n      margin: 1rem 0;\n    }\n\n    .comment {\n      @include muli-text(14px, 500, 24px);\n\n      margin: 0.5rem 0;\n    }\n  }\n\n  .form {\n    text-align: center;\n\n    h4 {\n      @include muli-text(16px, 700, 24px);\n\n      margin: 1rem 0;\n    }\n\n    .list-input {\n      .form-item {\n        input {\n          @include muli-text(14px, 500, 24px);\n\n          margin: 0.8rem 0;\n          padding: 0.4rem;\n          border-radius: 8px;\n        }\n\n        button {\n          margin-top: 0.5rem;\n          padding: 0.3rem 0.8rem;\n          text-align: center;\n          cursor: pointer;\n\n          @include muli-text(12px, 700, 24px);\n\n          background: blue;\n          color: #fff;\n          border-radius: 8px;\n          transition: background 0.5s, color 0.5s;\n        }\n      }\n    }\n  }\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n\n  @include flex(row, center, center);\n\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba($color: #8c9197, $alpha: 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n","@use '../utilities' as *;\n\n.container {\n  .button:hover {\n    background: rgb(247, 60, 60);\n    color: #fff;\n  }\n}\n\n.overlay {\n  .form {\n    .list-input {\n      .modal-button:hover {\n        background: rgb(253, 173, 0);\n        color: #000;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/createGride.js":
/*!************************************!*\
  !*** ./src/modules/createGride.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGrid": () => (/* binding */ createGrid)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
const createGrid = (arrayComics) => {
  const containerJS = document.createDocumentFragment();
  const mainContainer = document.querySelector('.container');

  arrayComics.forEach((comic, index) => {
    const container = document.createElement('li');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const likeBox = document.createElement('div');
    const name = document.createElement('p');
    const likeIcon = document.createElement('i');
    const likeAmount = document.createElement('p');
    const button = document.createElement('button');

    container.classList.add('item');
    imgContainer.classList.add('img-container');
    image.classList.add('img');
    image.setAttribute('src', `${comic.show.image.original}`);
    likeBox.classList.add('like-container');
    name.classList.add('title');
    name.textContent = `${comic.show.name} ${index}`;
    likeIcon.classList.add('far', 'fa-heart', 'icon-heart');
    likeIcon.dataset.id = `${index}`;
    likeAmount.classList.add('likes');
    likeAmount.textContent = 0;
    likeAmount.dataset.id = `${index}`;
    button.textContent = 'Comments';
    button.dataset.id = `${index}`;
    button.classList.add('button');
    imgContainer.appendChild(image);
    likeBox.appendChild(name);
    likeBox.appendChild(likeIcon);
    likeBox.appendChild(likeAmount);
    container.appendChild(imgContainer);
    container.appendChild(likeBox);
    container.appendChild(button);
    containerJS.appendChild(container);
  });
  mainContainer.appendChild(containerJS);
};

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _createGride_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGride.js */ "./src/modules/createGride.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ "./src/modules/store.js");




const dataURL = 'https://api.tvmaze.com/search/shows?q=spiderman';
const getComics = async () => {
  const response = await fetch(dataURL);
  const comics = await response.json();
  return comics;
};

// eslint-disable-next-line import/prefer-default-export
const getData = () => {
  getComics().then((result) => {
    result.splice(7, 1);
    (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.setDataLocalStorage)(result);
    (0,_createGride_js__WEBPACK_IMPORTED_MODULE_0__.createGrid)(result);
  });
};


/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "sendLikes": () => (/* binding */ sendLikes)
/* harmony export */ });
const createURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const likeURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1skhHeMuaX5lQlDsoElJ/likes/';

const createApp = async () => {
  const response = await fetch(createURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'newAppArthur',
    }),
  });
  const status = await response.text();
  return status;
};

//   1skhHeMuaX5lQlDsoElJ
const createLikes = async (id) => {
  const response = await fetch(likeURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${id}`,
    }),
  });
  const status = await response;
  return status;
};

const sendLikes = (event) => {
  const isLikeBtn = event.target.classList.contains('icon-heart');
  if (isLikeBtn) {
    const { id } = event.target.dataset;
    createLikes(id);
  }
};

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closePopUp": () => (/* binding */ closePopUp),
/* harmony export */   "fillPopUp": () => (/* binding */ fillPopUp)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/modules/store.js");


const image = document.querySelector('.image');
const title = document.querySelector('.modal-title');
const paragraph = document.querySelector('.dsc');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const main = document.querySelector('body');

const openPopUp = () => {
  overlay.classList.add('active');
  modal.classList.add('active');
  main.style.overflow = 'hidden';
};

const fillPopUp = (event) => {
  const isButton = event.target.classList.contains('button');
  if (isButton) {
    openPopUp();
    const { id } = event.target.dataset;
    const mainGrid = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.getDataLocalStorage)();
    const element = mainGrid[id];
    image.setAttribute('src', `${element.show.image.original}`);
    title.textContent = `${element.show.name}`;
    paragraph.innerHTML = `${element.show.summary}`;
  }
};

const closePopUp = () => {
  overlay.classList.remove('active');
  modal.classList.remove('active');
  main.style.overflow = '';
};

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDataLocalStorage": () => (/* binding */ getDataLocalStorage),
/* harmony export */   "setDataLocalStorage": () => (/* binding */ setDataLocalStorage)
/* harmony export */ });
const getDataLocalStorage = () => JSON.parse(localStorage.getItem('APIData'));

const setDataLocalStorage = (data) => {
  localStorage.setItem('APIData', JSON.stringify(data));
};

/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getData.js */ "./src/modules/getData.js");
/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/like.js */ "./src/modules/like.js");
/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popUp.js */ "./src/modules/popUp.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");





const container = document.querySelector('.container');
const close = document.querySelector('.close');

window.addEventListener('load', () => {
  (0,_modules_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData)();
});

container.addEventListener('click', (e) => {
  (0,_modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__.fillPopUp)(e);
  (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_1__.sendLikes)(e);
});

close.addEventListener('click', _modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__.closePopUp);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksYUFBYSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksYUFBYSxRQUFRLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLGFBQWEsZUFBZSxlQUFlLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLGFBQWEsZUFBZSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLGFBQWEsZUFBZSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLGFBQWEsZUFBZSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLGFBQWEsZUFBZSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFlBQVksVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLGFBQWEs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QztBQUNBLGlDQUFpQyw0QkFBNEI7QUFDN0QsMkJBQTJCLGtCQUFrQjtBQUM3Qyw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENPOztBQUVBO0FBQ1A7QUFDQTs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUNEO0FBQ2E7QUFDckM7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDREQUFPO0FBQ1QsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsNERBQVM7QUFDWCxFQUFFLDJEQUFTO0FBQ1gsQ0FBQzs7QUFFRCxnQ0FBZ0MseURBQVUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLW1vZHVsZS10d28vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb2R1bGUtdHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb2R1bGUtdHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW9kdWxlLXR3by8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW9kdWxlLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb2R1bGUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb2R1bGUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLW1vZHVsZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW9kdWxlLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLW1vZHVsZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb2R1bGUtdHdvLy4vc3JjL21vZHVsZXMvY3JlYXRlR3JpZGUuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW9kdWxlLXR3by8uL3NyYy9tb2R1bGVzL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW9kdWxlLXR3by8uL3NyYy9tb2R1bGVzL2xpa2UuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW9kdWxlLXR3by8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2NhcHN0b25lLW1vZHVsZS10d28vLi9zcmMvbW9kdWxlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb2R1bGUtdHdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcHN0b25lLW1vZHVsZS10d28vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW9kdWxlLXR3by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW9kdWxlLXR3by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcHN0b25lLW1vZHVsZS10d28vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb2R1bGUtdHdvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb2R1bGUtdHdvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vdXNlLnR5cGVraXQubmV0L21yeTJjYmYuY3NzKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgNC41dncpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5oZWFkZXIgLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMjRweCArIDAuN3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjUzLCAxNzMsIDApO1xcbn1cXG5oZWFkZXIgLm5hdmJhciBsaSB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IGNhbGMoMXJlbSArIDAuOHZ3KSBjYWxjKDEuNXJlbSArIDJ2dyk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogY2FsYygxcmVtICsgM3Z3KTtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSB7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgbWF4LXdpZHRoOiAyODBweDtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAuaW1nLWNvbnRhaW5lciAuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMzg5cHg7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmxpa2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIgLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmbGV4LWJhc2lzOiA3NSU7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmxpa2UtY29udGFpbmVyIC5pY29uLWhlYXJ0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC4ydncpO1xcbiAgY29sb3I6IHJlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIgLmxpa2VzIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjNyZW0gMC44cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTMsIDE3MywgMCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMsIGNvbG9yIDAuNXM7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiBjYWxjKDFyZW0gKyAwLjh2dykgY2FsYygxLjVyZW0gKyA0LjV2dyk7XFxufVxcbmZvb3RlciAudGV4dC1mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiBjYWxjKDEuNXJlbSArIDAuM3Z3KTtcXG4gIG1heC13aWR0aDogY2FsYygyMDBweCArIDMwdncpO1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIG9wYWNpdHkgMXMsIHZpc2liaWxpdHkgMHM7XFxuICB6LWluZGV4OiAzMDA7XFxufVxcbi5tb2RhbCAuZmEtdGltZXMge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAwLjV2dyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2RhbCAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG59XFxuLm1vZGFsIC5pbWFnZS1jb250YWluZXIgLmltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwgLm1vZGFsLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuLm1vZGFsIC5kc2MtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuLm1vZGFsIC5kc2MtY29udGFpbmVyIC5kc2Mge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuLm1vZGFsIC5jb21tZW50cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY29tbWVudHMgaDMge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ubW9kYWwgLmNvbW1lbnRzIC5jb21tZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG4ubW9kYWwgLmZvcm0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmZvcm0gaDQge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ubW9kYWwgLmZvcm0gLmxpc3QtaW5wdXQgLmZvcm0taXRlbSBpbnB1dCB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAwLjhyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLm1vZGFsIC5mb3JtIC5saXN0LWlucHV0IC5mb3JtLWl0ZW0gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgYmFja2dyb3VuZDogYmx1ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzLCBjb2xvciAwLjVzO1xcbn1cXG5cXG4ubW9kYWwuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzLCB0cmFuc2Zvcm0gMXMsIHZpc2liaWxpdHkgMHM7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE0MCwgMTQ1LCAxNTEsIDAuNSk7XFxuICB6LWluZGV4OiAyMDA7XFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uY29udGFpbmVyIC5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDI0NywgNjAsIDYwKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3ZlcmxheSAuZm9ybSAubGlzdC1pbnB1dCAubW9kYWwtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTMsIDE3MywgMCk7XFxuICBjb2xvcjogIzAwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9faG9tZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy91dGlsaXRpZXMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX3BvcHVwLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9fdHJhbnNpdGlvbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QUNiQTtFQUNFLGdEQUFBO0VDTUEsYUFBQTtFQUNBLG1CRExjO0VDUVosbUJEUmlCO0VDWWpCLDhCRFp5QjtBRGtCN0I7QUNoQkU7RUNOQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkRJMkI7RUNIM0IsaUJER2dDO0VBRTlCLHFCQUFBO0VBQ0EsdUJBQUE7QURxQko7QUNqQkk7RUNkRiw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkRZNkI7RUNYN0IsaUJEV2tDO0FEdUJwQzs7QUNsQkE7RUFDRSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUNmQSxhQUFBO0VBQ0EsbUJEZ0JjO0VDYlosbUJEYWlCO0VDVGpCLHVCRFN5QjtFQUUzQixlQUFBO0VBQ0EscUJBQUE7QURzQkY7QUNwQkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FEc0JKO0FDbkJNO0VBQ0UsV0FBQTtFQUNB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RUFDQSxtQkFBQTtBSG9IRjs7QUkvT0U7RUFDRSw0QkFBQTtFQUNBLFdBQUE7QUprUEo7O0FJM09NO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0FKOE9SXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvbXJ5MmNiZi5jc3NcXFwiKTtcXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiBjYWxjKDFyZW0gKyAwLjh2dykgY2FsYygxLjVyZW0gKyA0LjV2dyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmhlYWRlciAubG9nbyB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC43dncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHJnYigyNTMsIDE3MywgMCk7XFxufVxcbmhlYWRlciAubmF2YmFyIGxpIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgMnZ3KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiBjYWxjKDFyZW0gKyAzdncpO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIHtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBtYXgtd2lkdGg6IDI4MHB4O1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5pbWctY29udGFpbmVyIC5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAzODlweDtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5saWtlLWNvbnRhaW5lciAudGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZsZXgtYmFzaXM6IDc1JTtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIgLmljb24taGVhcnQge1xcbiAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAwLjJ2dyk7XFxuICBjb2xvcjogcmVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5saWtlLWNvbnRhaW5lciAubGlrZXMge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAuYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDI1MywgMTczLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cywgY29sb3IgMC41cztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IGNhbGMoMXJlbSArIDAuOHZ3KSBjYWxjKDEuNXJlbSArIDQuNXZ3KTtcXG59XFxuZm9vdGVyIC50ZXh0LWZvb3RlciB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IGNhbGMoMS41cmVtICsgMC4zdncpO1xcbiAgbWF4LXdpZHRoOiBjYWxjKDIwMHB4ICsgMzB2dyk7XFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcywgb3BhY2l0eSAxcywgdmlzaWJpbGl0eSAwcztcXG4gIHotaW5kZXg6IDMwMDtcXG59XFxuLm1vZGFsIC5mYS10aW1lcyB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IGNhbGMoMnJlbSArIDAuNXZ3KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vZGFsIC5pbWFnZS1jb250YWluZXIge1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1pbi13aWR0aDogMTgwcHg7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbn1cXG4ubW9kYWwgLmltYWdlLWNvbnRhaW5lciAuaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tb2RhbCAubW9kYWwtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMjRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ubW9kYWwgLmRzYy1jb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG4ubW9kYWwgLmRzYy1jb250YWluZXIgLmRzYyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG4ubW9kYWwgLmNvbW1lbnRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jb21tZW50cyBoMyB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcbi5tb2RhbCAuY29tbWVudHMgLmNvbW1lbnQge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxufVxcbi5tb2RhbCAuZm9ybSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuZm9ybSBoNCB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcbi5tb2RhbCAuZm9ybSAubGlzdC1pbnB1dCAuZm9ybS1pdGVtIGlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW46IDAuOHJlbSAwO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4ubW9kYWwgLmZvcm0gLmxpc3QtaW5wdXQgLmZvcm0taXRlbSBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuOHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBiYWNrZ3JvdW5kOiBibHVlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMsIGNvbG9yIDAuNXM7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMsIHRyYW5zZm9ybSAxcywgdmlzaWJpbGl0eSAwcztcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTQwLCAxNDUsIDE1MSwgMC41KTtcXG4gIHotaW5kZXg6IDIwMDtcXG59XFxuXFxuLm92ZXJsYXkuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5jb250YWluZXIgLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCA2MCwgNjApO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5IC5mb3JtIC5saXN0LWlucHV0IC5tb2RhbC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDI1MywgMTczLCAwKTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cIixcIkB1c2UgJy4uL3V0aWxpdGllcycgYXMgKjtcXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgNC41dncpO1xcblxcbiAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgc3BhY2UtYmV0d2Vlbik7XFxuXFxuICAubG9nbyB7XFxuICAgIEBpbmNsdWRlIG11bGktdGV4dCgyNHB4LCA1MDAsIDMycHgsIDAuNyk7XFxuXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHJnYigyNTMsIDE3MywgMCk7XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgbGkge1xcbiAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNHB4LCA1MDAsIDI0cHgpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgMnZ3KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG5cXG4gIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIGNlbnRlcik7XFxuXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IGNhbGMoMXJlbSArIDN2dyk7XFxuXFxuICAuaXRlbSB7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIG1heC13aWR0aDogMjgwcHg7XFxuXFxuICAgIC5pbWctY29udGFpbmVyIHtcXG4gICAgICAuaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogMzg5cHg7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5saWtlLWNvbnRhaW5lciB7XFxuICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgc3BhY2UtYmV0d2Vlbik7XFxuXFxuICAgICAgcGFkZGluZzogMC41cmVtO1xcblxcbiAgICAgIC50aXRsZSB7XFxuICAgICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTRweCwgNTAwLCAyNHB4KTtcXG5cXG4gICAgICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgICB9XFxuXFxuICAgICAgLmljb24taGVhcnQge1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAwLjJ2dyk7XFxuICAgICAgICBjb2xvcjogcmVkO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAubGlrZXMge1xcbiAgICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDE0cHgsIDUwMCwgMzJweCk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5idXR0b24ge1xcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgICBwYWRkaW5nOiAwLjNyZW0gMC44cmVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDEycHgsIDUwMCwgMjRweCk7XFxuXFxuICAgICAgYmFja2dyb3VuZDogcmdiKDI1MywgMTczLCAwKTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzLCBjb2xvciAwLjVzO1xcbiAgICB9XFxuICB9XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiBjYWxjKDFyZW0gKyAwLjh2dykgY2FsYygxLjVyZW0gKyA0LjV2dyk7XFxuXFxuICAudGV4dC1mb290ZXIge1xcbiAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTJweCwgNTAwLCAzMnB4KTtcXG4gIH1cXG59XFxuXCIsXCJAbWl4aW4gbXVsaS10ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkaW5jcmVhc2U6IDAuMykge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoI3skc2l6ZX0gKyAjeyRpbmNyZWFzZX12dyk7XFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcbn1cXG5cXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uLCAkYWxpZ246IGZhbHNlLCAkanVzdGlmeTogZmFsc2UpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXG5cXG4gIEBpZiAkYWxpZ24ge1xcbiAgICBhbGlnbi1pdGVtczogJGFsaWduO1xcbiAgfVxcblxcbiAgQGlmICRqdXN0aWZ5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcXG4gIH1cXG59XFxuXCIsXCJAdXNlICcuLi91dGlsaXRpZXMnIGFzICo7XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiBjYWxjKDEuNXJlbSArIDAuM3Z3KTtcXG4gIG1heC13aWR0aDogY2FsYygyMDBweCArIDMwdncpO1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIG9wYWNpdHkgMXMsIHZpc2liaWxpdHkgMHM7XFxuICB6LWluZGV4OiAzMDA7XFxuXFxuICAuZmEtdGltZXMge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygycmVtICsgMC41dncpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG5cXG4gICAgLmltYWdlIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vZGFsLXRpdGxlIHtcXG4gICAgQGluY2x1ZGUgbXVsaS10ZXh0KDI0cHgsIDcwMCwgMjRweCk7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICB9XFxuXFxuICAuZHNjLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG5cXG4gICAgLmRzYyB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNnB4LCA1MDAsIDI0cHgpO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY29tbWVudHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGgzIHtcXG4gICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTZweCwgNzAwLCAyNHB4KTtcXG5cXG4gICAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgfVxcblxcbiAgICAuY29tbWVudCB7XFxuICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDE0cHgsIDUwMCwgMjRweCk7XFxuXFxuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmZvcm0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGg0IHtcXG4gICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTZweCwgNzAwLCAyNHB4KTtcXG5cXG4gICAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgfVxcblxcbiAgICAubGlzdC1pbnB1dCB7XFxuICAgICAgLmZvcm0taXRlbSB7XFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNHB4LCA1MDAsIDI0cHgpO1xcblxcbiAgICAgICAgICBtYXJnaW46IDAuOHJlbSAwO1xcbiAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgICAgICAgcGFkZGluZzogMC4zcmVtIDAuOHJlbTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxMnB4LCA3MDAsIDI0cHgpO1xcblxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMsIGNvbG9yIDAuNXM7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuXFxuICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xcblxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcywgdHJhbnNmb3JtIDFzLCB2aXNpYmlsaXR5IDBzO1xcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICM4YzkxOTcsICRhbHBoYTogMC41KTtcXG4gIHotaW5kZXg6IDIwMDtcXG59XFxuXFxuLm92ZXJsYXkuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblwiLFwiQHVzZSAnLi4vdXRpbGl0aWVzJyBhcyAqO1xcblxcbi5jb250YWluZXIge1xcbiAgLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDcsIDYwLCA2MCk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAuZm9ybSB7XFxuICAgIC5saXN0LWlucHV0IHtcXG4gICAgICAubW9kYWwtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTMsIDE3MywgMCk7XFxuICAgICAgICBjb2xvcjogIzAwMDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBjcmVhdGVHcmlkID0gKGFycmF5Q29taWNzKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lckpTID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gIGFycmF5Q29taWNzLmZvckVhY2goKGNvbWljLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBsaWtlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBsaWtlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBsaWtlQW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1nLWNvbnRhaW5lcicpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltZycpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7Y29taWMuc2hvdy5pbWFnZS5vcmlnaW5hbH1gKTtcbiAgICBsaWtlQm94LmNsYXNzTGlzdC5hZGQoJ2xpa2UtY29udGFpbmVyJyk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBgJHtjb21pYy5zaG93Lm5hbWV9ICR7aW5kZXh9YDtcbiAgICBsaWtlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYXInLCAnZmEtaGVhcnQnLCAnaWNvbi1oZWFydCcpO1xuICAgIGxpa2VJY29uLmRhdGFzZXQuaWQgPSBgJHtpbmRleH1gO1xuICAgIGxpa2VBbW91bnQuY2xhc3NMaXN0LmFkZCgnbGlrZXMnKTtcbiAgICBsaWtlQW1vdW50LnRleHRDb250ZW50ID0gMDtcbiAgICBsaWtlQW1vdW50LmRhdGFzZXQuaWQgPSBgJHtpbmRleH1gO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb21tZW50cyc7XG4gICAgYnV0dG9uLmRhdGFzZXQuaWQgPSBgJHtpbmRleH1gO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGxpa2VCb3guYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgbGlrZUJveC5hcHBlbmRDaGlsZChsaWtlSWNvbik7XG4gICAgbGlrZUJveC5hcHBlbmRDaGlsZChsaWtlQW1vdW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlrZUJveCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgY29udGFpbmVySlMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfSk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVySlMpO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVHcmlkIH0gZnJvbSAnLi9jcmVhdGVHcmlkZS5qcyc7XG5cbmltcG9ydCB7IHNldERhdGFMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JlLmpzJztcblxuY29uc3QgZGF0YVVSTCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPXNwaWRlcm1hbic7XG5jb25zdCBnZXRDb21pY3MgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVVSTCk7XG4gIGNvbnN0IGNvbWljcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGNvbWljcztcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgZ2V0Q29taWNzKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgcmVzdWx0LnNwbGljZSg3LCAxKTtcbiAgICBzZXREYXRhTG9jYWxTdG9yYWdlKHJlc3VsdCk7XG4gICAgY3JlYXRlR3JpZChyZXN1bHQpO1xuICB9KTtcbn07XG4iLCJjb25zdCBjcmVhdGVVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGxpa2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMXNraEhlTXVhWDVsUWxEc29FbEovbGlrZXMvJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwcCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjcmVhdGVVUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogJ25ld0FwcEFydGh1cicsXG4gICAgfSksXG4gIH0pO1xuICBjb25zdCBzdGF0dXMgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIHJldHVybiBzdGF0dXM7XG59O1xuXG4vLyAgIDFza2hIZU11YVg1bFFsRHNvRWxKXG5jb25zdCBjcmVhdGVMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpa2VVUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYCR7aWR9YCxcbiAgICB9KSxcbiAgfSk7XG4gIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHJlc3BvbnNlO1xuICByZXR1cm4gc3RhdHVzO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRMaWtlcyA9IChldmVudCkgPT4ge1xuICBjb25zdCBpc0xpa2VCdG4gPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLWhlYXJ0Jyk7XG4gIGlmIChpc0xpa2VCdG4pIHtcbiAgICBjb25zdCB7IGlkIH0gPSBldmVudC50YXJnZXQuZGF0YXNldDtcbiAgICBjcmVhdGVMaWtlcyhpZCk7XG4gIH1cbn07IiwiaW1wb3J0IHsgZ2V0RGF0YUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vc3RvcmUuanMnO1xuXG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZScpO1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGl0bGUnKTtcbmNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kc2MnKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IG9wZW5Qb3BVcCA9ICgpID0+IHtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIG1haW4uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbn07XG5cbmV4cG9ydCBjb25zdCBmaWxsUG9wVXAgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgaXNCdXR0b24gPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24nKTtcbiAgaWYgKGlzQnV0dG9uKSB7XG4gICAgb3BlblBvcFVwKCk7XG4gICAgY29uc3QgeyBpZCB9ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc3QgbWFpbkdyaWQgPSBnZXREYXRhTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgZWxlbWVudCA9IG1haW5HcmlkW2lkXTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke2VsZW1lbnQuc2hvdy5pbWFnZS5vcmlnaW5hbH1gKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQuc2hvdy5uYW1lfWA7XG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IGAke2VsZW1lbnQuc2hvdy5zdW1tYXJ5fWA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjbG9zZVBvcFVwID0gKCkgPT4ge1xuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgbWFpbi5zdHlsZS5vdmVyZmxvdyA9ICcnO1xufTsiLCJleHBvcnQgY29uc3QgZ2V0RGF0YUxvY2FsU3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FQSURhdGEnKSk7XG5cbmV4cG9ydCBjb25zdCBzZXREYXRhTG9jYWxTdG9yYWdlID0gKGRhdGEpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FQSURhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL21vZHVsZXMvZ2V0RGF0YS5qcyc7XG5pbXBvcnQgeyBzZW5kTGlrZXMgfSBmcm9tICcuL21vZHVsZXMvbGlrZS5qcyc7XG5pbXBvcnQgeyBmaWxsUG9wVXAsIGNsb3NlUG9wVXAgfSBmcm9tICcuL21vZHVsZXMvcG9wVXAuanMnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgZ2V0RGF0YSgpO1xufSk7XG5cbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGZpbGxQb3BVcChlKTtcbiAgc2VuZExpa2VzKGUpO1xufSk7XG5cbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3BVcCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9