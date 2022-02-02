/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n  border-radius: 0;\n}\n\nbutton:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\nbutton:active {\n  opacity: 0.5;\n}\n\nul,\nli,\na {\n\tlist-style: none;\n  text-decoration: none;\n  color: inherit;\n}\n", "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;;;;;;;;;;;CAWC,cAAc;AACf;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;;;CAGC,gBAAgB;EACf,qBAAqB;EACrB,cAAc;AAChB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n  border-radius: 0;\n}\n\nbutton:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\nbutton:active {\n  opacity: 0.5;\n}\n\nul,\nli,\na {\n\tlist-style: none;\n  text-decoration: none;\n  color: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary: #6167f2;\n  --primary-txt: #1f2937;\n  --secondary-txt: #1f2937;\n  --pri-bd: #bc6ce9;\n\n  /* --tertiary: #; */\n\n  /* --background: #; */\n\n  /* --dark-text: ; */\n  --bg-white: #fff;\n  --color-white: #fff;\n  --color-black: #000;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n* {\n  font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n  position: relative;\n  line-height: 1.5rem;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 1rem;\n  background-image: linear-gradient(rgb(255 255 255), rgb(209 213 219));\n}\n\n.bg-white {\n  background: var(--bg-white);\n}\n\n.color-white {\n  color: var(--color-white);\n}\n\n.flex {\n  display: flex;\n}\n\n.mr-1 {\n  margin: 24px;\n}\n\n.pd0 {\n  padding: 24px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.color-sec-text {\n  color: var(--secondary-txt);\n}\n\n.d-flex-2 {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.ff-1 {\n  font-family: 'Montserrat', sans-serif;\n}\n\n.fwb {\n  font-weight: bold;\n}\n\n.mb-sm {\n  margin-bottom: 1rem;\n}\n\n.ff-2 {\n  font-family: 'Poiret One', cursive;\n}\n\n.ff-3 {\n  font-family: 'Shadows Into Light', cursive;\n}\n\n.ff-4 {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    \"Roboto\",\n    \"Oxygen\",\n    \"Ubuntu\",\n    \"Cantarell\",\n    \"Fira Sans\",\n    \"Droid Sans\",\n    \"Helvetica Neue\",\n    sans-serif;\n  font-weight: normal;\n}\n\n.li-images {\n  width: 100%;\n  height: 300px;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n  border-top-right-radius: 12%;\n  border-bottom-left-radius: 12%;\n}\n\n.img-icon {\n  width: 100%;\n  height: 100%;\n}\n\n.jos-ziee {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  align-self: flex-end;\n  cursor: pointer;\n}\n\n.jos-ziee:hover {\n  border: 3px solid hsla(259 94% 51%);\n}\n\n.color-pri-text {\n  color: var(--primary);\n}\n\n.vis {\n  font-weight: bold;\n  font-size: 1.8754rem;\n}\n\n.tech {\n  font-weight: bold;\n  font-size: 2.25rem;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4rem;\n  align-items: center;\n  z-index: 3;\n}\n\nheader .container {\n  padding-left: 1rem;\n}\n\nmain {\n  margin-top: 4rem;\n}\n\nsection.intro {\n  background: linear-gradient(hsl(259 94% 51%), hsl(314 100% 47.1%));\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 3.5rem;\n}\n\nsection.intro .intro-div {\n  padding-top: 3.125rem;\n  padding-bottom: 10.1254rem;\n}\n\nsection.intro h2 span {\n  font-weight: bold;\n  font-size: 3.25rem;\n}\n\nsection.intro .vission {\n  padding: 0.5rem;\n  border: 2px solid var(--pri-bd);\n  border-radius: 3px;\n}\n\n.btn {\n  line-height: 1rem;\n  text-align: center;\n  border-color: transparent;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.6rem 1rem;\n  border-radius: 8px;\n  text-transform: uppercase;\n}\n\n.btn:hover {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views {\n  margin-top: -11rem;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .contents {\n  margin-right: auto;\n  margin-left: auto;\n  border-radius: 8px;\n  border: 1px solid #d2d5d8;\n  padding-bottom: 80px;\n}\n\nsection.tech-views .container {\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 0.75rem;\n}\n\nsection.tech-views .tham h3 {\n  line-height: 2rem;\n  font-size: 1.5rem;\n  width: 89%;\n}\n\nsection.tech-views .components {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.bb-2 {\n  background: rgb(229, 151, 231);\n}\n\nsection.tech-views .tham {\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.hide {\n  display: none;\n}\n\nsection.tech-views ul {\n  display: grid;\n  grid-template-columns: auto;\n  grid-auto-rows: auto;\n  grid-row-gap: 8px;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .techs ul li {\n  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 60%);\n  margin: 0 auto;\n  border-radius: 8px;\n  padding: 0.75rem;\n  background: white;\n  cursor: pointer;\n  width: 17rem;\n}\n\nsection.tech-views .techs ul li h3 {\n  font-size: 18px;\n  line-height: 28px;\n  color: var(--secondary-txt);\n  font-weight: bold;\n}\n\n.mr-ii {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.gap {\n  gap: 1rem;\n}\n\nsection.tech-views .techs .like {\n  align-items: center;\n}\n\n/* comment button */\n\nsection.tech-views .techs .comments {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views .techs {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* popup styling  */\n.pop--container {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  z-index: 40;\n  width: 1000px;\n  height: 650px;\n  padding: 10px;\n  color: #000;\n  text-align: center;\n  border: 1px solid rgb(90, 89, 89);\n  border-radius: 7px;\n  background-color: #fff;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  box-shadow:\n    -2px -2px 10px 0 rgba(243, 243, 242, 0.6),\n    -2px -2px 5px 0 #706f7299,\n    7px 7px 10px 0 rgba(77, 161, 77, 0.133),\n    4px 4px 5px 0 rgba(179, 69, 69, 0.801);\n}\n\n.pop--container.active {\n  transform: translate(-50%, -50%) scale(1);\n  margin: 0;\n  overflow-y: scroll;\n}\n\n.over--lay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  background-color: rgba(212, 212, 212, 0.904);\n}\n\n.over--lay.active {\n  opacity: 1;\n  pointer-events: none;\n}\n\n#close {\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  color: rgb(129, 127, 127);\n}\n\n.pop--img {\n  border: 1px solid red;\n  border-radius: 8px;\n  width: 850px;\n  height: 400px;\n  margin: 10px auto;\n}\n\n.pop--tit {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  padding: 5px 14px;\n}\n\n.pop--des {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 16px;\n  padding: 14px;\n}\n\n.see--comment {\n  padding: 10px 20px;\n}\n\n.see--comment div {\n  display: flex;\n  gap: 10px;\n  font-size: 18px;\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.date,\n.name {\n  color: rgb(198, 96, 212);\n  font-weight: bold;\n  padding: 0 10px;\n  border: 0.1px solid lightgray;\n  border-radius: 0 50px 50px 0;\n}\n\n.comemt {\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.count--com {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  font-weight: bold;\n}\n\n.pop--put {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.pop--put .error {\n  width: 30%;\n  padding: 6px;\n  margin-bottom: -19px;\n  color: green;\n  padding-left: 10px;\n  border: 1px solid rgb(11, 238, 11);\n  background-color: rgba(201, 241, 201, 0.925);\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.pop--put h3 {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 20px;\n  padding: 14px;\n}\n\n.pop--put input {\n  width: 30%;\n  font-size: 16px;\n  color: #000;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n}\n\n.pop--put .insight {\n  height: 90px;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.pop--put button {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 15px;\n  background-color: #fff;\n  border: 1px solid lightgray;\n  border-radius: 0  50px 50px 0;\n  width: 13%;\n  padding: 8px;\n  transform: translateX(-5rem);\n}\n\n.pop--put button:hover {\n  background-color: rgba(178, 84, 190, 0.719);\n}\n\n@media screen and (min-width: 992px) {\n  section.tech-views ul {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    max-width: 1200px;\n  }\n\n  section.tech-views .techs ul li {\n    width: 19rem;\n  }\n\n  .show {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .gap-bg {\n    gap: 18px;\n  }\n\n  section.intro .vission {\n    max-width: 700px;\n  }\n\n  section.intro h2 span {\n    font-weight: bold;\n    font-size: 6.25rem;\n  }\n\n  section.intro .intro-div {\n    padding-top: 5.125rem;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  section.tech-views .techs ul li {\n    width: 24rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary: #6167f2;\n  --primary-txt: #1f2937;\n  --secondary-txt: #1f2937;\n  --pri-bd: #bc6ce9;\n\n  /* --tertiary: #; */\n\n  /* --background: #; */\n\n  /* --dark-text: ; */\n  --bg-white: #fff;\n  --color-white: #fff;\n  --color-black: #000;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n* {\n  font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n  position: relative;\n  line-height: 1.5rem;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 1rem;\n  background-image: linear-gradient(rgb(255 255 255), rgb(209 213 219));\n}\n\n.bg-white {\n  background: var(--bg-white);\n}\n\n.color-white {\n  color: var(--color-white);\n}\n\n.flex {\n  display: flex;\n}\n\n.mr-1 {\n  margin: 24px;\n}\n\n.pd0 {\n  padding: 24px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.color-sec-text {\n  color: var(--secondary-txt);\n}\n\n.d-flex-2 {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.ff-1 {\n  font-family: 'Montserrat', sans-serif;\n}\n\n.fwb {\n  font-weight: bold;\n}\n\n.mb-sm {\n  margin-bottom: 1rem;\n}\n\n.ff-2 {\n  font-family: 'Poiret One', cursive;\n}\n\n.ff-3 {\n  font-family: 'Shadows Into Light', cursive;\n}\n\n.ff-4 {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    \"Roboto\",\n    \"Oxygen\",\n    \"Ubuntu\",\n    \"Cantarell\",\n    \"Fira Sans\",\n    \"Droid Sans\",\n    \"Helvetica Neue\",\n    sans-serif;\n  font-weight: normal;\n}\n\n.li-images {\n  width: 100%;\n  height: 300px;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n  border-top-right-radius: 12%;\n  border-bottom-left-radius: 12%;\n}\n\n.img-icon {\n  width: 100%;\n  height: 100%;\n}\n\n.jos-ziee {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  align-self: flex-end;\n  cursor: pointer;\n}\n\n.jos-ziee:hover {\n  border: 3px solid hsla(259 94% 51%);\n}\n\n.color-pri-text {\n  color: var(--primary);\n}\n\n.vis {\n  font-weight: bold;\n  font-size: 1.8754rem;\n}\n\n.tech {\n  font-weight: bold;\n  font-size: 2.25rem;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4rem;\n  align-items: center;\n  z-index: 3;\n}\n\nheader .container {\n  padding-left: 1rem;\n}\n\nmain {\n  margin-top: 4rem;\n}\n\nsection.intro {\n  background: linear-gradient(hsl(259 94% 51%), hsl(314 100% 47.1%));\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 3.5rem;\n}\n\nsection.intro .intro-div {\n  padding-top: 3.125rem;\n  padding-bottom: 10.1254rem;\n}\n\nsection.intro h2 span {\n  font-weight: bold;\n  font-size: 3.25rem;\n}\n\nsection.intro .vission {\n  padding: 0.5rem;\n  border: 2px solid var(--pri-bd);\n  border-radius: 3px;\n}\n\n.btn {\n  line-height: 1rem;\n  text-align: center;\n  border-color: transparent;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.6rem 1rem;\n  border-radius: 8px;\n  text-transform: uppercase;\n}\n\n.btn:hover {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views {\n  margin-top: -11rem;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .contents {\n  margin-right: auto;\n  margin-left: auto;\n  border-radius: 8px;\n  border: 1px solid #d2d5d8;\n  padding-bottom: 80px;\n}\n\nsection.tech-views .container {\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 0.75rem;\n}\n\nsection.tech-views .tham h3 {\n  line-height: 2rem;\n  font-size: 1.5rem;\n  width: 89%;\n}\n\nsection.tech-views .components {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.bb-2 {\n  background: rgb(229, 151, 231);\n}\n\nsection.tech-views .tham {\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.hide {\n  display: none;\n}\n\nsection.tech-views ul {\n  display: grid;\n  grid-template-columns: auto;\n  grid-auto-rows: auto;\n  grid-row-gap: 8px;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .techs ul li {\n  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 60%);\n  margin: 0 auto;\n  border-radius: 8px;\n  padding: 0.75rem;\n  background: white;\n  cursor: pointer;\n  width: 17rem;\n}\n\nsection.tech-views .techs ul li h3 {\n  font-size: 18px;\n  line-height: 28px;\n  color: var(--secondary-txt);\n  font-weight: bold;\n}\n\n.mr-ii {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.gap {\n  gap: 1rem;\n}\n\nsection.tech-views .techs .like {\n  align-items: center;\n}\n\n/* comment button */\n\nsection.tech-views .techs .comments {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views .techs {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* popup styling  */\n.pop--container {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  z-index: 40;\n  width: 1000px;\n  height: 650px;\n  padding: 10px;\n  color: #000;\n  text-align: center;\n  border: 1px solid rgb(90, 89, 89);\n  border-radius: 7px;\n  background-color: #fff;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  box-shadow:\n    -2px -2px 10px 0 rgba(243, 243, 242, 0.6),\n    -2px -2px 5px 0 #706f7299,\n    7px 7px 10px 0 rgba(77, 161, 77, 0.133),\n    4px 4px 5px 0 rgba(179, 69, 69, 0.801);\n}\n\n.pop--container.active {\n  transform: translate(-50%, -50%) scale(1);\n  margin: 0;\n  overflow-y: scroll;\n}\n\n.over--lay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  background-color: rgba(212, 212, 212, 0.904);\n}\n\n.over--lay.active {\n  opacity: 1;\n  pointer-events: none;\n}\n\n#close {\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  color: rgb(129, 127, 127);\n}\n\n.pop--img {\n  border: 1px solid red;\n  border-radius: 8px;\n  width: 850px;\n  height: 400px;\n  margin: 10px auto;\n}\n\n.pop--tit {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  padding: 5px 14px;\n}\n\n.pop--des {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 16px;\n  padding: 14px;\n}\n\n.see--comment {\n  padding: 10px 20px;\n}\n\n.see--comment div {\n  display: flex;\n  gap: 10px;\n  font-size: 18px;\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.date,\n.name {\n  color: rgb(198, 96, 212);\n  font-weight: bold;\n  padding: 0 10px;\n  border: 0.1px solid lightgray;\n  border-radius: 0 50px 50px 0;\n}\n\n.comemt {\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.count--com {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  font-weight: bold;\n}\n\n.pop--put {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.pop--put .error {\n  width: 30%;\n  padding: 6px;\n  margin-bottom: -19px;\n  color: green;\n  padding-left: 10px;\n  border: 1px solid rgb(11, 238, 11);\n  background-color: rgba(201, 241, 201, 0.925);\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.pop--put h3 {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 20px;\n  padding: 14px;\n}\n\n.pop--put input {\n  width: 30%;\n  font-size: 16px;\n  color: #000;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n}\n\n.pop--put .insight {\n  height: 90px;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.pop--put button {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 15px;\n  background-color: #fff;\n  border: 1px solid lightgray;\n  border-radius: 0  50px 50px 0;\n  width: 13%;\n  padding: 8px;\n  transform: translateX(-5rem);\n}\n\n.pop--put button:hover {\n  background-color: rgba(178, 84, 190, 0.719);\n}\n\n@media screen and (min-width: 992px) {\n  section.tech-views ul {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    max-width: 1200px;\n  }\n\n  section.tech-views .techs ul li {\n    width: 19rem;\n  }\n\n  .show {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .gap-bg {\n    gap: 18px;\n  }\n\n  section.intro .vission {\n    max-width: 700px;\n  }\n\n  section.intro h2 span {\n    font-weight: bold;\n    font-size: 6.25rem;\n  }\n\n  section.intro .intro-div {\n    padding-top: 5.125rem;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  section.tech-views .techs ul li {\n    width: 24rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.pop--container {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  z-index: 40;\n  width: 1000px;\n  height: 650px;\n  padding: 10px;\n  color: #000;\n  text-align: center;\n  border: 1px solid rgb(90, 89, 89);\n  border-radius: 7px;\n  background-color: #fff;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  box-shadow:\n    -2px -2px 10px 0 rgba(243, 243, 242, 0.6),\n    -2px -2px 5px 0 #706f7299,\n    7px 7px 10px 0 rgba(77, 161, 77, 0.133),\n    4px 4px 5px 0 rgba(179, 69, 69, 0.801);\n}\n\n.pop--container.active {\n  transform: translate(-50%, -50%) scale(1);\n  margin: 0;\n  overflow-y: scroll;\n}\n\n.over--lay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  background-color: rgba(212, 212, 212, 0.904);\n}\n\n.over--lay.active {\n  opacity: 1;\n  pointer-events: none;\n}\n\n#close {\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  color: rgb(129, 127, 127);\n}\n\n.pop--img {\n  border: 1px solid red;\n  border-radius: 8px;\n  width: 850px;\n  height: 400px;\n  margin: 10px auto;\n}\n\n.pop--tit {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  padding: 5px 14px;\n}\n\n.pop--des {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 16px;\n  padding: 14px;\n}\n\n.see--comment {\n  padding: 10px 20px;\n}\n\n.see--comment div {\n  display: flex;\n  gap: 10px;\n  font-size: 18px;\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.date,\n.name {\n  color: rgb(198, 96, 212);\n  font-weight: bold;\n  padding: 0 10px;\n  border: 0.1px solid lightgray;\n  border-radius: 0 50px 50px 0;\n}\n\n.comemt {\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.count--com {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  font-weight: bold;\n}\n\n.pop--put {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.pop--put .error {\n  width: 30%;\n  padding: 6px;\n  margin-bottom: -19px;\n  color: green;\n  padding-left: 10px;\n  border: 1px solid rgb(11, 238, 11);\n  background-color: rgba(201, 241, 201, 0.925);\n}\n\n.pop--put h3 {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 20px;\n  padding: 14px;\n}\n\n.pop--put input {\n  width: 30%;\n  font-size: 16px;\n  color: #000;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n}\n\n.pop--put .insight {\n  height: 90px;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.pop--put button {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 15px;\n  background-color: #fff;\n  border: 1px solid lightgray;\n  border-radius: 0  50px 50px 0;\n  width: 13%;\n  padding: 8px;\n  transform: translateX(-5rem);\n}\n\n.pop--put button:hover {\n  background-color: rgba(178, 84, 190, 0.719);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,QAAQ;EACR,SAAS;EACT,SAAS;EACT,WAAW;EACX,aAAa;EACb,aAAa;EACb,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,iCAAiC;EACjC,kBAAkB;EAClB,sBAAsB;EACtB,yCAAyC;EACzC,6BAA6B;EAC7B;;;;0CAIwC;AAC1C;;AAEA;EACE,yCAAyC;EACzC,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,oBAAoB;EACpB,6BAA6B;EAC7B,4CAA4C;AAC9C;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,8BAA8B;AAChC;;AAEA;;EAEE,wBAAwB;EACxB,iBAAiB;EACjB,eAAe;EACf,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,kCAAkC;EAClC,4CAA4C;AAC9C;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,aAAa;AACf;;AAEA;EACE,UAAU;EACV,eAAe;EACf,WAAW;EACX,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,sBAAsB;EACtB,2BAA2B;EAC3B,6BAA6B;EAC7B,UAAU;EACV,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,2CAA2C;AAC7C","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.pop--container {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  z-index: 40;\n  width: 1000px;\n  height: 650px;\n  padding: 10px;\n  color: #000;\n  text-align: center;\n  border: 1px solid rgb(90, 89, 89);\n  border-radius: 7px;\n  background-color: #fff;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  box-shadow:\n    -2px -2px 10px 0 rgba(243, 243, 242, 0.6),\n    -2px -2px 5px 0 #706f7299,\n    7px 7px 10px 0 rgba(77, 161, 77, 0.133),\n    4px 4px 5px 0 rgba(179, 69, 69, 0.801);\n}\n\n.pop--container.active {\n  transform: translate(-50%, -50%) scale(1);\n  margin: 0;\n  overflow-y: scroll;\n}\n\n.over--lay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  background-color: rgba(212, 212, 212, 0.904);\n}\n\n.over--lay.active {\n  opacity: 1;\n  pointer-events: none;\n}\n\n#close {\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  color: rgb(129, 127, 127);\n}\n\n.pop--img {\n  border: 1px solid red;\n  border-radius: 8px;\n  width: 850px;\n  height: 400px;\n  margin: 10px auto;\n}\n\n.pop--tit {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  padding: 5px 14px;\n}\n\n.pop--des {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 16px;\n  padding: 14px;\n}\n\n.see--comment {\n  padding: 10px 20px;\n}\n\n.see--comment div {\n  display: flex;\n  gap: 10px;\n  font-size: 18px;\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.date,\n.name {\n  color: rgb(198, 96, 212);\n  font-weight: bold;\n  padding: 0 10px;\n  border: 0.1px solid lightgray;\n  border-radius: 0 50px 50px 0;\n}\n\n.comemt {\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.count--com {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  font-weight: bold;\n}\n\n.pop--put {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.pop--put .error {\n  width: 30%;\n  padding: 6px;\n  margin-bottom: -19px;\n  color: green;\n  padding-left: 10px;\n  border: 1px solid rgb(11, 238, 11);\n  background-color: rgba(201, 241, 201, 0.925);\n}\n\n.pop--put h3 {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 20px;\n  padding: 14px;\n}\n\n.pop--put input {\n  width: 30%;\n  font-size: 16px;\n  color: #000;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n}\n\n.pop--put .insight {\n  height: 90px;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.pop--put button {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 15px;\n  background-color: #fff;\n  border: 1px solid lightgray;\n  border-radius: 0  50px 50px 0;\n  width: 13%;\n  padding: 8px;\n  transform: translateX(-5rem);\n}\n\n.pop--put button:hover {\n  background-color: rgba(178, 84, 190, 0.719);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/homeRender.js":
/*!***************************!*\
  !*** ./src/homeRender.js ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/popup_comment.js":
/*!******************************!*\
  !*** ./src/popup_comment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "createPopup": () => (/* binding */ createPopup)
/* harmony export */ });
const projects = [
  {
    id: 'project_1',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
  {
    id: 'project_2',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
  {
    id: 'project_3',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
  {
    id: 'project_4',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
  {
    id: 'project_5',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
  {
    id: 'project_6',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
];

const createPopup = (object) => {
  const popupCard = document.createElement('li');
  popupCard.classList.add('popup--card');
  popupCard.id = object.id;
  popupCard.innerHTML = `
    <p id="close">Xlose</p>
    <div class="pop--img">
      <img src="${object.images.img}" alt="${object.images.altText}">
    </div>
    <h3 class="pop--tit">${object.name}</h3>
    <p class="pop--des">${object.description}</p><hr>
    <div class="see--comment" >
      <p class="count--com">Commment {0}</p>
      <div>
        <p class="date">date</p>
        <p class="name">name</p>
        <p class="comment">comment</p>
      </div>
    </div><hr>
    
    <div class="pop--put">
      <h3>Leave a Comment !</h3>
      <p class="error" >display error</p>
      <input type="text" placeholder="Inter your name" maxlength="15">
      <input class="insight" type="text" placeholder="Enter your insigths">
      <button type="button">Comment</button>
    </div>`;

    return popupCard;
};

/***/ }),

/***/ "./src/assets/jos.jpeg":
/*!*****************************!*\
  !*** ./src/assets/jos.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0ac2d199325c6a149763.jpeg";

/***/ }),

/***/ "./src/assets/zieeco.jpeg":
/*!********************************!*\
  !*** ./src/assets/zieeco.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "429f30923884ac7b8b4d.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _assets_jos_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/jos.jpeg */ "./src/assets/jos.jpeg");
/* harmony import */ var _assets_zieeco_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/zieeco.jpeg */ "./src/assets/zieeco.jpeg");
/* harmony import */ var _homeRender_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeRender.js */ "./src/homeRender.js");
/* harmony import */ var _homeRender_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_homeRender_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _popup_comment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup_comment.js */ "./src/popup_comment.js");







const htmls = document.getElementsByTagName('html')[0];


const popupContainer = document.querySelector('.pop--container');
const overLay = document.querySelector('.over--lay');

_popup_comment_js__WEBPACK_IMPORTED_MODULE_6__.projects.forEach((project) => {
  const popupCard = (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_6__.createPopup)(project);
  popupContainer.appendChild(popupCard);
});

const buttons = document.querySelectorAll('.comment');
const closeButtons = document.querySelectorAll('#close');

console.log(closeButtons);

// Display popup
buttons.forEach((button) => {
  const currentModal = document.getElementById(button.classList[1]);
  button.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
    currentModal.classList.add('active');
    htmls.style.overflow = 'hidden';
  });
});

// remove popup
closeButtons.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    document.querySelector('.pop--containter.active').classList.remove('active');
    popupContainer.style.display = 'none';
    overLay.style.display = 'none'
    htmls.style.overflow = 'auto';
  });
});


const icon1 = document.querySelector('.img-icon1');
const icon2 = document.querySelector('.img-icon2');

icon1.innerHTML += `<img class="jos-ziee" src="${_assets_jos_jpeg__WEBPACK_IMPORTED_MODULE_3__}" alt="zieeco">`;
icon2.innerHTML += `<img class="jos-ziee" src="${_assets_zieeco_jpeg__WEBPACK_IMPORTED_MODULE_4__}" alt="jos">`;

_homeRender_js__WEBPACK_IMPORTED_MODULE_5___default()();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGVBQWUsY0FBYyxHQUFHLHVHQUF1RyxtQkFBbUIsR0FBRyxZQUFZLGlCQUFpQixrQ0FBa0MscUJBQXFCLEdBQUcsa0JBQWtCLG9CQUFvQixpQkFBaUIsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsaUJBQWlCLHFCQUFxQiwwQkFBMEIsbUJBQW1CLEdBQUcsU0FBUyxvRkFBb0YsVUFBVSxVQUFVLE1BQU0sZUFBZSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLFlBQVksV0FBVyw2QkFBNkIsZUFBZSxjQUFjLEdBQUcsdUdBQXVHLG1CQUFtQixHQUFHLFlBQVksaUJBQWlCLGtDQUFrQyxxQkFBcUIsR0FBRyxrQkFBa0Isb0JBQW9CLGlCQUFpQixHQUFHLG1CQUFtQixpQkFBaUIsR0FBRyxpQkFBaUIscUJBQXFCLDBCQUEwQixtQkFBbUIsR0FBRyxxQkFBcUI7QUFDeHRDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsdUJBQXVCLDJCQUEyQiw2QkFBNkIsc0JBQXNCLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLEdBQUcsOEJBQThCLGVBQWUsY0FBYywyQkFBMkIsR0FBRyxPQUFPLDBDQUEwQyxHQUFHLFVBQVUsdUJBQXVCLHdCQUF3Qix3QkFBd0IsdUJBQXVCLG9CQUFvQiwwRUFBMEUsR0FBRyxlQUFlLGdDQUFnQyxHQUFHLGtCQUFrQiw4QkFBOEIsR0FBRyxXQUFXLGtCQUFrQixHQUFHLFdBQVcsaUJBQWlCLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxrQkFBa0IsdUJBQXVCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLFdBQVcsZ0JBQWdCLEdBQUcscUJBQXFCLGdDQUFnQyxHQUFHLGVBQWUsa0JBQWtCLHdCQUF3QiwyQkFBMkIsR0FBRyxXQUFXLDBDQUEwQyxHQUFHLFVBQVUsc0JBQXNCLEdBQUcsWUFBWSx3QkFBd0IsR0FBRyxXQUFXLHVDQUF1QyxHQUFHLFdBQVcsK0NBQStDLEdBQUcsV0FBVywwT0FBME8sd0JBQXdCLEdBQUcsZ0JBQWdCLGdCQUFnQixrQkFBa0IsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsaUNBQWlDLG1DQUFtQyxHQUFHLGVBQWUsZ0JBQWdCLGlCQUFpQixHQUFHLGVBQWUsZ0JBQWdCLGlCQUFpQix1QkFBdUIseUJBQXlCLG9CQUFvQixHQUFHLHFCQUFxQix3Q0FBd0MsR0FBRyxxQkFBcUIsMEJBQTBCLEdBQUcsVUFBVSxzQkFBc0IseUJBQXlCLEdBQUcsV0FBVyxzQkFBc0IsdUJBQXVCLEdBQUcsWUFBWSxvQkFBb0IsV0FBVyxjQUFjLFlBQVksYUFBYSxpQkFBaUIsd0JBQXdCLGVBQWUsR0FBRyx1QkFBdUIsdUJBQXVCLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxtQkFBbUIsdUVBQXVFLHlCQUF5QiwwQkFBMEIsMkJBQTJCLEdBQUcsOEJBQThCLDBCQUEwQiwrQkFBK0IsR0FBRywyQkFBMkIsc0JBQXNCLHVCQUF1QixHQUFHLDRCQUE0QixvQkFBb0Isb0NBQW9DLHVCQUF1QixHQUFHLFVBQVUsc0JBQXNCLHVCQUF1Qiw4QkFBOEIsNEJBQTRCLHFCQUFxQix3QkFBd0IseUJBQXlCLHVCQUF1Qiw4QkFBOEIsR0FBRyxnQkFBZ0Isa0NBQWtDLEdBQUcsd0JBQXdCLHVCQUF1QixlQUFlLHNCQUFzQix1QkFBdUIsR0FBRyxrQ0FBa0MsdUJBQXVCLHNCQUFzQix1QkFBdUIsOEJBQThCLHlCQUF5QixHQUFHLG1DQUFtQyxtQ0FBbUMsd0JBQXdCLDBCQUEwQixHQUFHLGlDQUFpQyxzQkFBc0Isc0JBQXNCLGVBQWUsR0FBRyxvQ0FBb0Msd0JBQXdCLG1DQUFtQyxHQUFHLFdBQVcsbUNBQW1DLEdBQUcsOEJBQThCLG9CQUFvQix3QkFBd0IsR0FBRyxXQUFXLGtCQUFrQixHQUFHLDJCQUEyQixrQkFBa0IsZ0NBQWdDLHlCQUF5QixzQkFBc0Isd0JBQXdCLDBCQUEwQiw0QkFBNEIsc0JBQXNCLHVCQUF1QixHQUFHLHFDQUFxQyw2Q0FBNkMsbUJBQW1CLHVCQUF1QixxQkFBcUIsc0JBQXNCLG9CQUFvQixpQkFBaUIsR0FBRyx3Q0FBd0Msb0JBQW9CLHNCQUFzQixnQ0FBZ0Msc0JBQXNCLEdBQUcsWUFBWSx1QkFBdUIsMEJBQTBCLEdBQUcsVUFBVSxjQUFjLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLGlFQUFpRSxrQ0FBa0MsR0FBRywrQkFBK0Isc0JBQXNCLHVCQUF1QixHQUFHLDJDQUEyQyxrQkFBa0Isb0JBQW9CLDJCQUEyQixhQUFhLGNBQWMsY0FBYyxnQkFBZ0Isa0JBQWtCLGtCQUFrQixrQkFBa0IsZ0JBQWdCLHVCQUF1QixzQ0FBc0MsdUJBQXVCLDJCQUEyQiw4Q0FBOEMsa0NBQWtDLDBMQUEwTCxHQUFHLDRCQUE0Qiw4Q0FBOEMsY0FBYyx1QkFBdUIsR0FBRyxnQkFBZ0Isb0JBQW9CLFdBQVcsWUFBWSxhQUFhLGNBQWMsZUFBZSx5QkFBeUIsa0NBQWtDLGlEQUFpRCxHQUFHLHVCQUF1QixlQUFlLHlCQUF5QixHQUFHLFlBQVksZUFBZSx1QkFBdUIsY0FBYyxnQkFBZ0Isc0JBQXNCLG9CQUFvQiw4QkFBOEIsR0FBRyxlQUFlLDBCQUEwQix1QkFBdUIsaUJBQWlCLGtCQUFrQixzQkFBc0IsR0FBRyxlQUFlLG9CQUFvQixtQ0FBbUMsc0JBQXNCLEdBQUcsZUFBZSxtQ0FBbUMsb0JBQW9CLGtCQUFrQixHQUFHLG1CQUFtQix1QkFBdUIsR0FBRyx1QkFBdUIsa0JBQWtCLGNBQWMsb0JBQW9CLG1DQUFtQyxHQUFHLG1CQUFtQiw2QkFBNkIsc0JBQXNCLG9CQUFvQixrQ0FBa0MsaUNBQWlDLEdBQUcsYUFBYSxtQ0FBbUMsR0FBRyxpQkFBaUIsb0JBQW9CLG1DQUFtQyxzQkFBc0IsR0FBRyxlQUFlLGtCQUFrQixjQUFjLDJCQUEyQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixHQUFHLHNCQUFzQixlQUFlLGlCQUFpQix5QkFBeUIsaUJBQWlCLHVCQUF1Qix1Q0FBdUMsaURBQWlELEdBQUcsK0VBQStFLG1DQUFtQyxvQkFBb0Isa0JBQWtCLEdBQUcscUJBQXFCLGVBQWUsb0JBQW9CLGdCQUFnQixrQkFBa0IsZ0NBQWdDLHVCQUF1QixHQUFHLHdCQUF3QixpQkFBaUIsZ0NBQWdDLHVCQUF1QixHQUFHLHNCQUFzQixtQ0FBbUMsb0JBQW9CLDJCQUEyQixnQ0FBZ0Msa0NBQWtDLGVBQWUsaUJBQWlCLGlDQUFpQyxHQUFHLDRCQUE0QixnREFBZ0QsR0FBRywwQ0FBMEMsMkJBQTJCLHVEQUF1RCx3QkFBd0IsS0FBSyx1Q0FBdUMsbUJBQW1CLEtBQUssYUFBYSxvQkFBb0IsZ0NBQWdDLDBCQUEwQixLQUFLLGVBQWUsZ0JBQWdCLEtBQUssOEJBQThCLHVCQUF1QixLQUFLLDZCQUE2Qix3QkFBd0IseUJBQXlCLEtBQUssZ0NBQWdDLDRCQUE0QixLQUFLLEdBQUcsMkNBQTJDLHFDQUFxQyxtQkFBbUIsS0FBSyxHQUFHLFNBQVMsb0ZBQW9GLFlBQVksYUFBYSxhQUFhLGNBQWMsY0FBYyxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGVBQWUsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxN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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ0k7QUFDQTtBQUNTO0FBQ0c7QUFDQTs7QUFFckM7QUFDMkQ7O0FBRTNEO0FBQ0E7O0FBRUEsK0RBQWdCO0FBQ2hCLG9CQUFvQiw4REFBVztBQUMvQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7OztBQUdEO0FBQ0E7O0FBRUEsaURBQWlELDZDQUFDLENBQUM7QUFDbkQsaURBQWlELGdEQUFDLENBQUM7O0FBRW5ELHFEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9jc3MvcmVzZXQuY3NzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9jc3MvcmVzZXQuY3NzPzE1MmIiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvaG9tZVJlbmRlci5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL3BvcHVwX2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxudWwsXFxubGksXFxuYSB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7Ozs7Ozs7Ozs7O0NBV0MsY0FBYztBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7Q0FHQyxnQkFBZ0I7RUFDZixxQkFBcUI7RUFDckIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbnVsLFxcbmxpLFxcbmEge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjNjE2N2YyO1xcbiAgLS1wcmltYXJ5LXR4dDogIzFmMjkzNztcXG4gIC0tc2Vjb25kYXJ5LXR4dDogIzFmMjkzNztcXG4gIC0tcHJpLWJkOiAjYmM2Y2U5O1xcblxcbiAgLyogLS10ZXJ0aWFyeTogIzsgKi9cXG5cXG4gIC8qIC0tYmFja2dyb3VuZDogIzsgKi9cXG5cXG4gIC8qIC0tZGFyay10ZXh0OiA7ICovXFxuICAtLWJnLXdoaXRlOiAjZmZmO1xcbiAgLS1jb2xvci13aGl0ZTogI2ZmZjtcXG4gIC0tY29sb3ItYmxhY2s6ICMwMDA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSAyNTUgMjU1KSwgcmdiKDIwOSAyMTMgMjE5KSk7XFxufVxcblxcbi5iZy13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSk7XFxufVxcblxcbi5jb2xvci13aGl0ZSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubXItMSB7XFxuICBtYXJnaW46IDI0cHg7XFxufVxcblxcbi5wZDAge1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRleHQtanVzdGlmeSB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4udzEwMCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbG9yLXNlYy10ZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0KTtcXG59XFxuXFxuLmQtZmxleC0yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZmLTEge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZ3YiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1iLXNtIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5mZi0yIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9pcmV0IE9uZScsIGN1cnNpdmU7XFxufVxcblxcbi5mZi0zIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcXG59XFxuXFxuLmZmLTQge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIC1hcHBsZS1zeXN0ZW0sXFxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgXFxcIlJvYm90b1xcXCIsXFxuICAgIFxcXCJPeHlnZW5cXFwiLFxcbiAgICBcXFwiVWJ1bnR1XFxcIixcXG4gICAgXFxcIkNhbnRhcmVsbFxcXCIsXFxuICAgIFxcXCJGaXJhIFNhbnNcXFwiLFxcbiAgICBcXFwiRHJvaWQgU2Fuc1xcXCIsXFxuICAgIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ubGktaW1hZ2VzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMiU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMiU7XFxufVxcblxcbi5pbWctaWNvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmpvcy16aWVlIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5qb3MtemllZTpob3ZlciB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBoc2xhKDI1OSA5NCUgNTElKTtcXG59XFxuXFxuLmNvbG9yLXByaS10ZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnZpcyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS44NzU0cmVtO1xcbn1cXG5cXG4udGVjaCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG5oZWFkZXIgLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbm1haW4ge1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuXFxuc2VjdGlvbi5pbnRybyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsKDI1OSA5NCUgNTElKSwgaHNsKDMxNCAxMDAlIDQ3LjElKSk7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XFxufVxcblxcbnNlY3Rpb24uaW50cm8gLmludHJvLWRpdiB7XFxuICBwYWRkaW5nLXRvcDogMy4xMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTAuMTI1NHJlbTtcXG59XFxuXFxuc2VjdGlvbi5pbnRybyBoMiBzcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzLjI1cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmludHJvIC52aXNzaW9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaS1iZCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5idG4ge1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDI1OSA5NCUgNTElKTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIHtcXG4gIG1hcmdpbi10b3A6IC0xMXJlbTtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC5jb250ZW50cyB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ1ZDg7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC5jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW0gMC43NXJlbTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50aGFtIGgzIHtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogODklO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLmNvbXBvbmVudHMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJiLTIge1xcbiAgYmFja2dyb3VuZDogcmdiKDIyOSwgMTUxLCAyMzEpO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRoYW0ge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gIGdyaWQtcm93LWdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgdWwgbGkge1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiKDAgMCAwIC8gNjAlKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDE3cmVtO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIGgzIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tci1paSB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5nYXAge1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIC5saWtlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIGNvbW1lbnQgYnV0dG9uICovXFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyAuY29tbWVudHMge1xcbiAgYmFja2dyb3VuZDogaHNsYSgyNTkgOTQlIDUxJSk7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi8qIHBvcHVwIHN0eWxpbmcgICovXFxuLnBvcC0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW46IDA7XFxuICB6LWluZGV4OiA0MDtcXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBoZWlnaHQ6IDY1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDkwLCA4OSwgODkpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OlxcbiAgICAtMnB4IC0ycHggMTBweCAwIHJnYmEoMjQzLCAyNDMsIDI0MiwgMC42KSxcXG4gICAgLTJweCAtMnB4IDVweCAwICM3MDZmNzI5OSxcXG4gICAgN3B4IDdweCAxMHB4IDAgcmdiYSg3NywgMTYxLCA3NywgMC4xMzMpLFxcbiAgICA0cHggNHB4IDVweCAwIHJnYmEoMTc5LCA2OSwgNjksIDAuODAxKTtcXG59XFxuXFxuLnBvcC0tY29udGFpbmVyLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLm92ZXItLWxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45MDQpO1xcbn1cXG5cXG4ub3Zlci0tbGF5LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNjbG9zZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTI5LCAxMjcsIDEyNyk7XFxufVxcblxcbi5wb3AtLWltZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogODUwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbi5wb3AtLXRpdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBwYWRkaW5nOiA1cHggMTRweDtcXG59XFxuXFxuLnBvcC0tZGVzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5zZWUtLWNvbW1lbnQge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uc2VlLS1jb21tZW50IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uZGF0ZSxcXG4ubmFtZSB7XFxuICBjb2xvcjogcmdiKDE5OCwgOTYsIDIxMik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGJvcmRlcjogMC4xcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcXG59XFxuXFxuLmNvbWVtdCB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxufVxcblxcbi5jb3VudC0tY29tIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9wLS1wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtLXB1dCAuZXJyb3Ige1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xOXB4O1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExLCAyMzgsIDExKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAyNDEsIDIwMSwgMC45MjUpO1xcbn1cXG5cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcbi5wb3AtLXB1dCBoMyB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4ucG9wLS1wdXQgaW5wdXQge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnBvcC0tcHV0IC5pbnNpZ2h0IHtcXG4gIGhlaWdodDogOTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnBvcC0tcHV0IGJ1dHRvbiB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMCAgNTBweCA1MHB4IDA7XFxuICB3aWR0aDogMTMlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cmVtKTtcXG59XFxuXFxuLnBvcC0tcHV0IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OCwgODQsIDE5MCwgMC43MTkpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgc2VjdGlvbi50ZWNoLXZpZXdzIHVsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgdWwgbGkge1xcbiAgICB3aWR0aDogMTlyZW07XFxuICB9XFxuXFxuICAuc2hvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZ2FwLWJnIHtcXG4gICAgZ2FwOiAxOHB4O1xcbiAgfVxcblxcbiAgc2VjdGlvbi5pbnRybyAudmlzc2lvbiB7XFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxuICB9XFxuXFxuICBzZWN0aW9uLmludHJvIGgyIHNwYW4ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgfVxcblxcbiAgc2VjdGlvbi5pbnRybyAuaW50cm8tZGl2IHtcXG4gICAgcGFkZGluZy10b3A6IDUuMTI1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIHNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgdWwgbGkge1xcbiAgICB3aWR0aDogMjRyZW07XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixtQkFBbUI7O0VBRW5CLHFCQUFxQjs7RUFFckIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUVBQXFFO0FBQ3ZFOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRTs7Ozs7Ozs7Ozs7Y0FXWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6Qyw2QkFBNkI7RUFDN0I7Ozs7MENBSXdDO0FBQzFDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLDRDQUE0QztBQUM5Qzs7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0U7SUFDRSxnREFBZ0Q7SUFDaEQsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeTogIzYxNjdmMjtcXG4gIC0tcHJpbWFyeS10eHQ6ICMxZjI5Mzc7XFxuICAtLXNlY29uZGFyeS10eHQ6ICMxZjI5Mzc7XFxuICAtLXByaS1iZDogI2JjNmNlOTtcXG5cXG4gIC8qIC0tdGVydGlhcnk6ICM7ICovXFxuXFxuICAvKiAtLWJhY2tncm91bmQ6ICM7ICovXFxuXFxuICAvKiAtLWRhcmstdGV4dDogOyAqL1xcbiAgLS1iZy13aGl0ZTogI2ZmZjtcXG4gIC0tY29sb3Itd2hpdGU6ICNmZmY7XFxuICAtLWNvbG9yLWJsYWNrOiAjMDAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyNTUgMjU1IDI1NSksIHJnYigyMDkgMjEzIDIxOSkpO1xcbn1cXG5cXG4uYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUpO1xcbn1cXG5cXG4uY29sb3Itd2hpdGUge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1yLTEge1xcbiAgbWFyZ2luOiAyNHB4O1xcbn1cXG5cXG4ucGQwIHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LWp1c3RpZnkge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLncxMDAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2xvci1zZWMtdGV4dCB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dCk7XFxufVxcblxcbi5kLWZsZXgtMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mZi0xIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5md2Ige1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYi1zbSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZmYtMiB7XFxuICBmb250LWZhbWlseTogJ1BvaXJldCBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG4uZmYtMyB7XFxuICBmb250LWZhbWlseTogJ1NoYWRvd3MgSW50byBMaWdodCcsIGN1cnNpdmU7XFxufVxcblxcbi5mZi00IHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICAtYXBwbGUtc3lzdGVtLFxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFxcXCJSb2JvdG9cXFwiLFxcbiAgICBcXFwiT3h5Z2VuXFxcIixcXG4gICAgXFxcIlVidW50dVxcXCIsXFxuICAgIFxcXCJDYW50YXJlbGxcXFwiLFxcbiAgICBcXFwiRmlyYSBTYW5zXFxcIixcXG4gICAgXFxcIkRyb2lkIFNhbnNcXFwiLFxcbiAgICBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmxpLWltYWdlcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTIlO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTIlO1xcbn1cXG5cXG4uaW1nLWljb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5qb3MtemllZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uam9zLXppZWU6aG92ZXIge1xcbiAgYm9yZGVyOiAzcHggc29saWQgaHNsYSgyNTkgOTQlIDUxJSk7XFxufVxcblxcbi5jb2xvci1wcmktdGV4dCB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi52aXMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuODc1NHJlbTtcXG59XFxuXFxuLnRlY2gge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuaGVhZGVyIC5jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxufVxcblxcbnNlY3Rpb24uaW50cm8ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgyNTkgOTQlIDUxJSksIGhzbCgzMTQgMTAwJSA0Ny4xJSkpO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmludHJvIC5pbnRyby1kaXYge1xcbiAgcGFkZGluZy10b3A6IDMuMTI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEwLjEyNTRyZW07XFxufVxcblxcbnNlY3Rpb24uaW50cm8gaDIgc3BhbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMy4yNXJlbTtcXG59XFxuXFxuc2VjdGlvbi5pbnRybyAudmlzc2lvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmktYmQpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogaHNsYSgyNTkgOTQlIDUxJSk7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyB7XFxuICBtYXJnaW4tdG9wOiAtMTFyZW07XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAuY29udGVudHMge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkNWQ4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAuY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtIDAuNzVyZW07XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGhhbSBoMyB7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDg5JTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC5jb21wb25lbnRzIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5iYi0yIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMjksIDE1MSwgMjMxKTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50aGFtIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBncmlkLXJvdy1nYXA6IDhweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxN3JlbTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyB1bCBsaSBoMyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubXItaWkge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZ2FwIHtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyAubGlrZSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBjb21tZW50IGJ1dHRvbiAqL1xcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgLmNvbW1lbnRzIHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMjU5IDk0JSA1MSUpO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBwb3B1cCBzdHlsaW5nICAqL1xcbi5wb3AtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgei1pbmRleDogNDA7XFxuICB3aWR0aDogMTAwMHB4O1xcbiAgaGVpZ2h0OiA2NTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MCwgODksIDg5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgLTJweCAtMnB4IDEwcHggMCByZ2JhKDI0MywgMjQzLCAyNDIsIDAuNiksXFxuICAgIC0ycHggLTJweCA1cHggMCAjNzA2ZjcyOTksXFxuICAgIDdweCA3cHggMTBweCAwIHJnYmEoNzcsIDE2MSwgNzcsIDAuMTMzKSxcXG4gICAgNHB4IDRweCA1cHggMCByZ2JhKDE3OSwgNjksIDY5LCAwLjgwMSk7XFxufVxcblxcbi5wb3AtLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5vdmVyLS1sYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTA0KTtcXG59XFxuXFxuLm92ZXItLWxheS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDEyOSwgMTI3LCAxMjcpO1xcbn1cXG5cXG4ucG9wLS1pbWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDg1MHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5cXG4ucG9wLS10aXQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgcGFkZGluZzogNXB4IDE0cHg7XFxufVxcblxcbi5wb3AtLWRlcyB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4uc2VlLS1jb21tZW50IHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLnNlZS0tY29tbWVudCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG59XFxuXFxuLmRhdGUsXFxuLm5hbWUge1xcbiAgY29sb3I6IHJnYigxOTgsIDk2LCAyMTIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXI6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XFxufVxcblxcbi5jb21lbXQge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uY291bnQtLWNvbSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBvcC0tcHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLS1wdXQgLmVycm9yIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMSwgMjM4LCAxMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMjQxLCAyMDEsIDAuOTI1KTtcXG59XFxuXFxuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXG4ucG9wLS1wdXQgaDMge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMTRweDtcXG59XFxuXFxuLnBvcC0tcHV0IGlucHV0IHtcXG4gIHdpZHRoOiAzMCU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5wb3AtLXB1dCAuaW5zaWdodCB7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5wb3AtLXB1dCBidXR0b24ge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgIDUwcHggNTBweCAwO1xcbiAgd2lkdGg6IDEzJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXJlbSk7XFxufVxcblxcbi5wb3AtLXB1dCBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzgsIDg0LCAxOTAsIDAuNzE5KTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIHNlY3Rpb24udGVjaC12aWV3cyB1bCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB9XFxuXFxuICBzZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIHtcXG4gICAgd2lkdGg6IDE5cmVtO1xcbiAgfVxcblxcbiAgLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmdhcC1iZyB7XFxuICAgIGdhcDogMThweDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uaW50cm8gLnZpc3Npb24ge1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgfVxcblxcbiAgc2VjdGlvbi5pbnRybyBoMiBzcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uaW50cm8gLmludHJvLWRpdiB7XFxuICAgIHBhZGRpbmctdG9wOiA1LjEyNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICBzZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIHtcXG4gICAgd2lkdGg6IDI0cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucG9wLS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHotaW5kZXg6IDQwO1xcbiAgd2lkdGg6IDEwMDBweDtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTAsIDg5LCA4OSk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6XFxuICAgIC0ycHggLTJweCAxMHB4IDAgcmdiYSgyNDMsIDI0MywgMjQyLCAwLjYpLFxcbiAgICAtMnB4IC0ycHggNXB4IDAgIzcwNmY3Mjk5LFxcbiAgICA3cHggN3B4IDEwcHggMCByZ2JhKDc3LCAxNjEsIDc3LCAwLjEzMyksXFxuICAgIDRweCA0cHggNXB4IDAgcmdiYSgxNzksIDY5LCA2OSwgMC44MDEpO1xcbn1cXG5cXG4ucG9wLS1jb250YWluZXIuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ub3Zlci0tbGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkwNCk7XFxufVxcblxcbi5vdmVyLS1sYXkuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2Nsb3NlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYigxMjksIDEyNywgMTI3KTtcXG59XFxuXFxuLnBvcC0taW1nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiA4NTBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuXFxuLnBvcC0tdGl0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIHBhZGRpbmc6IDVweCAxNHB4O1xcbn1cXG5cXG4ucG9wLS1kZXMge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTRweDtcXG59XFxuXFxuLnNlZS0tY29tbWVudCB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5zZWUtLWNvbW1lbnQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxufVxcblxcbi5kYXRlLFxcbi5uYW1lIHtcXG4gIGNvbG9yOiByZ2IoMTk4LCA5NiwgMjEyKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xcbn1cXG5cXG4uY29tZW10IHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG59XFxuXFxuLmNvdW50LS1jb20ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wb3AtLXB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC0tcHV0IC5lcnJvciB7XFxuICB3aWR0aDogMzAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE5cHg7XFxuICBjb2xvcjogZ3JlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEsIDIzOCwgMTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDI0MSwgMjAxLCAwLjkyNSk7XFxufVxcblxcbi5wb3AtLXB1dCBoMyB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4ucG9wLS1wdXQgaW5wdXQge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnBvcC0tcHV0IC5pbnNpZ2h0IHtcXG4gIGhlaWdodDogOTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnBvcC0tcHV0IGJ1dHRvbiB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMCAgNTBweCA1MHB4IDA7XFxuICB3aWR0aDogMTMlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cmVtKTtcXG59XFxuXFxuLnBvcC0tcHV0IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OCwgODQsIDE5MCwgMC43MTkpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsNkJBQTZCO0VBQzdCOzs7OzBDQUl3QztBQUMxQzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wb3AtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgei1pbmRleDogNDA7XFxuICB3aWR0aDogMTAwMHB4O1xcbiAgaGVpZ2h0OiA2NTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MCwgODksIDg5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgLTJweCAtMnB4IDEwcHggMCByZ2JhKDI0MywgMjQzLCAyNDIsIDAuNiksXFxuICAgIC0ycHggLTJweCA1cHggMCAjNzA2ZjcyOTksXFxuICAgIDdweCA3cHggMTBweCAwIHJnYmEoNzcsIDE2MSwgNzcsIDAuMTMzKSxcXG4gICAgNHB4IDRweCA1cHggMCByZ2JhKDE3OSwgNjksIDY5LCAwLjgwMSk7XFxufVxcblxcbi5wb3AtLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5vdmVyLS1sYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTA0KTtcXG59XFxuXFxuLm92ZXItLWxheS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDEyOSwgMTI3LCAxMjcpO1xcbn1cXG5cXG4ucG9wLS1pbWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDg1MHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5cXG4ucG9wLS10aXQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgcGFkZGluZzogNXB4IDE0cHg7XFxufVxcblxcbi5wb3AtLWRlcyB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4uc2VlLS1jb21tZW50IHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLnNlZS0tY29tbWVudCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG59XFxuXFxuLmRhdGUsXFxuLm5hbWUge1xcbiAgY29sb3I6IHJnYigxOTgsIDk2LCAyMTIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXI6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XFxufVxcblxcbi5jb21lbXQge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uY291bnQtLWNvbSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBvcC0tcHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLS1wdXQgLmVycm9yIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMSwgMjM4LCAxMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMjQxLCAyMDEsIDAuOTI1KTtcXG59XFxuXFxuLnBvcC0tcHV0IGgzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5wb3AtLXB1dCBpbnB1dCB7XFxuICB3aWR0aDogMzAlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucG9wLS1wdXQgLmluc2lnaHQge1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAwICA1MHB4IDUwcHggMDtcXG4gIHdpZHRoOiAxMyU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVyZW0pO1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LCA4NCwgMTkwLCAwLjcxOSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiIiwiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgaWQ6ICdwcm9qZWN0XzEnLFxuICAgIGltYWdlczoge1xuICAgICAgaW1nOiAnLicsXG4gICAgICBhbHRUZXh0OiAncHJvamVjdCAxIHByZXZpZXcgaW1hZ2UnLFxuICAgIH0sXG4gICAgbmFtZTogJ011bHRpLVBvc3QgU3RvcmllcyBHYWluK0dsb3J5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1Byb2plY3RfMSBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IDE5NjBzIHdpdGggdGhlIHJlbGVhTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCAxOTYwcyB3aXRoIHRoZSByZWxlYScsXG4gICAgY29tbWVudDoge1xuICAgICAgdXNlcjogJ3RvcGF6JyxcbiAgICAgIGluc2lnaHQ6ICd0aGlzIHRoZSBjb21tZW50IHlvdXIgY29tbWVudCdcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdwcm9qZWN0XzInLFxuICAgIGltYWdlczoge1xuICAgICAgaW1nOiAnLicsXG4gICAgICBhbHRUZXh0OiAncHJvamVjdCAxIHByZXZpZXcgaW1hZ2UnLFxuICAgIH0sXG4gICAgbmFtZTogJ011bHRpLVBvc3QgU3RvcmllcyBHYWluK0dsb3J5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1Byb2plY3RfMSBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IDE5NjBzIHdpdGggdGhlIHJlbGVhTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCAxOTYwcyB3aXRoIHRoZSByZWxlYScsXG4gICAgY29tbWVudDoge1xuICAgICAgdXNlcjogJ3RvcGF6JyxcbiAgICAgIGluc2lnaHQ6ICd0aGlzIHRoZSBjb21tZW50IHlvdXIgY29tbWVudCdcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdwcm9qZWN0XzMnLFxuICAgIGltYWdlczoge1xuICAgICAgaW1nOiAnLicsXG4gICAgICBhbHRUZXh0OiAncHJvamVjdCAxIHByZXZpZXcgaW1hZ2UnLFxuICAgIH0sXG4gICAgbmFtZTogJ011bHRpLVBvc3QgU3RvcmllcyBHYWluK0dsb3J5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1Byb2plY3RfMSBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IDE5NjBzIHdpdGggdGhlIHJlbGVhTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCAxOTYwcyB3aXRoIHRoZSByZWxlYScsXG4gICAgY29tbWVudDoge1xuICAgICAgdXNlcjogJ3RvcGF6JyxcbiAgICAgIGluc2lnaHQ6ICd0aGlzIHRoZSBjb21tZW50IHlvdXIgY29tbWVudCdcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdwcm9qZWN0XzQnLFxuICAgIGltYWdlczoge1xuICAgICAgaW1nOiAnLicsXG4gICAgICBhbHRUZXh0OiAncHJvamVjdCAxIHByZXZpZXcgaW1hZ2UnLFxuICAgIH0sXG4gICAgbmFtZTogJ011bHRpLVBvc3QgU3RvcmllcyBHYWluK0dsb3J5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1Byb2plY3RfMSBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IDE5NjBzIHdpdGggdGhlIHJlbGVhTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCAxOTYwcyB3aXRoIHRoZSByZWxlYScsXG4gICAgY29tbWVudDoge1xuICAgICAgdXNlcjogJ3RvcGF6JyxcbiAgICAgIGluc2lnaHQ6ICd0aGlzIHRoZSBjb21tZW50IHlvdXIgY29tbWVudCdcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdwcm9qZWN0XzUnLFxuICAgIGltYWdlczoge1xuICAgICAgaW1nOiAnLicsXG4gICAgICBhbHRUZXh0OiAncHJvamVjdCAxIHByZXZpZXcgaW1hZ2UnLFxuICAgIH0sXG4gICAgbmFtZTogJ011bHRpLVBvc3QgU3RvcmllcyBHYWluK0dsb3J5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1Byb2plY3RfMSBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IDE5NjBzIHdpdGggdGhlIHJlbGVhTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCAxOTYwcyB3aXRoIHRoZSByZWxlYScsXG4gICAgY29tbWVudDoge1xuICAgICAgdXNlcjogJ3RvcGF6JyxcbiAgICAgIGluc2lnaHQ6ICd0aGlzIHRoZSBjb21tZW50IHlvdXIgY29tbWVudCdcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdwcm9qZWN0XzYnLFxuICAgIGltYWdlczoge1xuICAgICAgaW1nOiAnLicsXG4gICAgICBhbHRUZXh0OiAncHJvamVjdCAxIHByZXZpZXcgaW1hZ2UnLFxuICAgIH0sXG4gICAgbmFtZTogJ011bHRpLVBvc3QgU3RvcmllcyBHYWluK0dsb3J5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1Byb2plY3RfMSBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IDE5NjBzIHdpdGggdGhlIHJlbGVhTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCAxOTYwcyB3aXRoIHRoZSByZWxlYScsXG4gICAgY29tbWVudDoge1xuICAgICAgdXNlcjogJ3RvcGF6JyxcbiAgICAgIGluc2lnaHQ6ICd0aGlzIHRoZSBjb21tZW50IHlvdXIgY29tbWVudCdcbiAgICB9LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvcHVwID0gKG9iamVjdCkgPT4ge1xuICBjb25zdCBwb3B1cENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBwb3B1cENhcmQuY2xhc3NMaXN0LmFkZCgncG9wdXAtLWNhcmQnKTtcbiAgcG9wdXBDYXJkLmlkID0gb2JqZWN0LmlkO1xuICBwb3B1cENhcmQuaW5uZXJIVE1MID0gYFxuICAgIDxwIGlkPVwiY2xvc2VcIj5YbG9zZTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLS1pbWdcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtvYmplY3QuaW1hZ2VzLmltZ31cIiBhbHQ9XCIke29iamVjdC5pbWFnZXMuYWx0VGV4dH1cIj5cbiAgICA8L2Rpdj5cbiAgICA8aDMgY2xhc3M9XCJwb3AtLXRpdFwiPiR7b2JqZWN0Lm5hbWV9PC9oMz5cbiAgICA8cCBjbGFzcz1cInBvcC0tZGVzXCI+JHtvYmplY3QuZGVzY3JpcHRpb259PC9wPjxocj5cbiAgICA8ZGl2IGNsYXNzPVwic2VlLS1jb21tZW50XCIgPlxuICAgICAgPHAgY2xhc3M9XCJjb3VudC0tY29tXCI+Q29tbW1lbnQgezB9PC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+ZGF0ZTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+bmFtZTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJjb21tZW50XCI+Y29tbWVudDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pjxocj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicG9wLS1wdXRcIj5cbiAgICAgIDxoMz5MZWF2ZSBhIENvbW1lbnQgITwvaDM+XG4gICAgICA8cCBjbGFzcz1cImVycm9yXCIgPmRpc3BsYXkgZXJyb3I8L3A+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkludGVyIHlvdXIgbmFtZVwiIG1heGxlbmd0aD1cIjE1XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJpbnNpZ2h0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgaW5zaWd0aHNcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5gO1xuXG4gICAgcmV0dXJuIHBvcHVwQ2FyZDtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jc3MvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBqIGZyb20gJy4vYXNzZXRzL2pvcy5qcGVnJztcbmltcG9ydCB6IGZyb20gJy4vYXNzZXRzL3ppZWVjby5qcGVnJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9ob21lUmVuZGVyLmpzJztcblxuY29uc3QgaHRtbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xuaW1wb3J0IHsgcHJvamVjdHMsIGNyZWF0ZVBvcHVwIH0gZnJvbSAnLi9wb3B1cF9jb21tZW50LmpzJztcblxuY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLS1jb250YWluZXInKTtcbmNvbnN0IG92ZXJMYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Zlci0tbGF5Jyk7XG5cbnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgY29uc3QgcG9wdXBDYXJkID0gY3JlYXRlUG9wdXAocHJvamVjdCk7XG4gIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwQ2FyZCk7XG59KTtcblxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50Jyk7XG5jb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2xvc2UnKTtcblxuY29uc29sZS5sb2coY2xvc2VCdXR0b25zKTtcblxuLy8gRGlzcGxheSBwb3B1cFxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgY29uc3QgY3VycmVudE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uLmNsYXNzTGlzdFsxXSk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGN1cnJlbnRNb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBodG1scy5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICB9KTtcbn0pO1xuXG4vLyByZW1vdmUgcG9wdXBcbmNsb3NlQnV0dG9ucy5mb3JFYWNoKChjbG9zZUJ0bikgPT4ge1xuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLS1jb250YWludGVyLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgb3ZlckxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgaHRtbHMuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gIH0pO1xufSk7XG5cblxuY29uc3QgaWNvbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLWljb24xJyk7XG5jb25zdCBpY29uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctaWNvbjInKTtcblxuaWNvbjEuaW5uZXJIVE1MICs9IGA8aW1nIGNsYXNzPVwiam9zLXppZWVcIiBzcmM9XCIke2p9XCIgYWx0PVwiemllZWNvXCI+YDtcbmljb24yLmlubmVySFRNTCArPSBgPGltZyBjbGFzcz1cImpvcy16aWVlXCIgc3JjPVwiJHt6fVwiIGFsdD1cImpvc1wiPmA7XG5cbnJlbmRlcigpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=