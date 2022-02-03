/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary: #6167f2;\n  --primary-txt: #1f2937;\n  --secondary-txt: #1f2937;\n  --pri-bd: #bc6ce9;\n\n  /* --tertiary: #; */\n\n  /* --background: #; */\n\n  /* --dark-text: ; */\n  --bg-white: #fff;\n  --color-white: #fff;\n  --color-black: #000;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n* {\n  font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n  position: relative;\n  line-height: 1.5rem;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 1rem;\n  background-image: linear-gradient(rgb(255 255 255), rgb(209 213 219));\n}\n\n.bg-white {\n  background: var(--bg-white);\n}\n\n.color-white {\n  color: var(--color-white);\n}\n\n.flex {\n  display: flex;\n}\n\n.mr-1 {\n  margin: 24px;\n}\n\n.pd0 {\n  padding: 24px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.color-sec-text {\n  color: var(--secondary-txt);\n}\n\n.d-flex-2 {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.ff-1 {\n  font-family: 'Montserrat', sans-serif;\n}\n\n.fwb {\n  font-weight: bold;\n}\n\n.mb-sm {\n  margin-bottom: 1rem;\n}\n\n.ff-2 {\n  font-family: 'Poiret One', cursive;\n}\n\n.ff-3 {\n  font-family: 'Shadows Into Light', cursive;\n}\n\n.ff-4 {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    \"Roboto\",\n    \"Oxygen\",\n    \"Ubuntu\",\n    \"Cantarell\",\n    \"Fira Sans\",\n    \"Droid Sans\",\n    \"Helvetica Neue\",\n    sans-serif;\n  font-weight: normal;\n}\n\n.li-images {\n  width: 100%;\n  height: 300px;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n  border-top-right-radius: 12%;\n  border-bottom-left-radius: 12%;\n}\n\n.img-icon {\n  width: 100%;\n  height: 100%;\n}\n\n.jos-ziee {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  align-self: flex-end;\n  cursor: pointer;\n}\n\n.jos-ziee:hover {\n  border: 3px solid hsla(259 94% 51%);\n}\n\n.color-pri-text {\n  color: var(--primary);\n}\n\n.vis {\n  font-weight: bold;\n  font-size: 1.8754rem;\n}\n\n.tech {\n  font-weight: bold;\n  font-size: 2.25rem;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4rem;\n  align-items: center;\n  z-index: 3;\n}\n\nheader .container {\n  padding-left: 1rem;\n}\n\nmain {\n  margin-top: 4rem;\n}\n\nsection.intro {\n  background: linear-gradient(hsl(259 94% 51%), hsl(314 100% 47.1%));\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 3.5rem;\n}\n\nsection.intro .intro-div {\n  padding-top: 3.125rem;\n  padding-bottom: 10.1254rem;\n}\n\nsection.intro h2 span {\n  font-weight: bold;\n  font-size: 3.25rem;\n}\n\nsection.intro .vission {\n  padding: 0.5rem;\n  border: 2px solid var(--pri-bd);\n  border-radius: 3px;\n}\n\n.btn {\n  line-height: 1rem;\n  text-align: center;\n  border-color: transparent;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.6rem 1rem;\n  border-radius: 8px;\n  text-transform: uppercase;\n}\n\n.btn:hover {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views {\n  margin-top: -11rem;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .contents {\n  margin-right: auto;\n  margin-left: auto;\n  border-radius: 8px;\n  border: 1px solid #d2d5d8;\n  padding-bottom: 80px;\n}\n\nsection.tech-views .container {\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 0.75rem;\n}\n\nsection.tech-views .tham h3 {\n  line-height: 2rem;\n  font-size: 1.5rem;\n  width: 89%;\n}\n\nsection.tech-views .components {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.bb-2 {\n  background: rgb(229, 151, 231);\n}\n\nsection.tech-views .tham {\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.hide {\n  display: none;\n}\n\nsection.tech-views ul {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-auto-rows: auto;\n  grid-row-gap: 8px;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .techs ul li {\n  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 60%);\n  margin: 0 auto;\n  border-radius: 8px;\n  padding: 0.75rem;\n  background: white;\n  cursor: pointer;\n  width: 17rem;\n}\n\n.body > p {\n  height: 8rem;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\nsection.tech-views .techs ul li h3 {\n  font-size: 18px;\n  line-height: 28px;\n  color: var(--secondary-txt);\n  font-weight: bold;\n}\n\n.mr-ii {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.gap {\n  gap: 1rem;\n}\n\nsection.tech-views .techs .like {\n  align-items: center;\n}\n\n/* comment button */\n\nsection.tech-views .techs .comments {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views .techs {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* popup styling  */\n.pop--container {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  z-index: 40;\n  width: 1000px;\n  height: 650px;\n  padding: 10px;\n  color: #000;\n  text-align: center;\n  border: 1px solid rgb(90, 89, 89);\n  border-radius: 7px;\n  background-color: #fff;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  box-shadow:\n    -2px -2px 10px 0 rgba(243, 243, 242, 0.6),\n    -2px -2px 5px 0 #706f7299,\n    7px 7px 10px 0 rgba(77, 161, 77, 0.133),\n    4px 4px 5px 0 rgba(179, 69, 69, 0.801);\n}\n\n.pop--container.active {\n  transform: translate(-50%, -50%) scale(1);\n  margin: 0;\n  overflow-y: scroll;\n}\n\n.over--lay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  background-color: rgba(212, 212, 212, 0.904);\n}\n\n.over--lay.active {\n  opacity: 1;\n  pointer-events: none;\n}\n\n#close {\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  color: rgb(129, 127, 127);\n}\n\n.pop--img {\n  border: 1px solid rgb(143, 140, 140);\n  border-radius: 8px;\n  width: 850px;\n  height: 400px;\n  margin: 10px auto;\n}\n\n.pop--img img {\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n}\n\n.pop--tit {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  padding: 5px 14px;\n}\n\n.pop--des {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 16px;\n  padding: 14px;\n}\n\n.see--comment {\n  padding: 10px 20px;\n}\n\n.see--comment div {\n  display: flex;\n  gap: 10px;\n  font-size: 18px;\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.date,\n.name {\n  color: rgb(198, 96, 212);\n  font-weight: bold;\n  padding: 0 10px;\n  border: 0.1px solid lightgray;\n  border-radius: 0 50px 50px 0;\n}\n\n.comemt {\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.count--com {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  font-weight: bold;\n}\n\n.pop--put {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.pop--put .error {\n  width: 30%;\n  padding: 6px;\n  margin-bottom: -19px;\n  color: green;\n  padding-left: 10px;\n  border: 1px solid rgb(11, 238, 11);\n  background-color: rgba(201, 241, 201, 0.925);\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.pop--put h3 {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 20px;\n  padding: 14px;\n}\n\n.pop--put input {\n  width: 30%;\n  font-size: 16px;\n  color: #000;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n}\n\n.pop--put .insight {\n  height: 90px;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.space-between {\n  justify-content: space-between;\n}\n\n.pop--put button {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 15px;\n  background-color: #fff;\n  border: 1px solid lightgray;\n  border-radius: 0  50px 50px 0;\n  width: 13%;\n  padding: 8px;\n  transform: translateX(-5rem);\n}\n\n.pop--put button:hover {\n  background-color: rgba(178, 84, 190, 0.719);\n}\n\n@media screen and (min-width: 992px) {\n  section.tech-views ul {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    grid-template-rows: repeat(3, minmax(0, 1fr));\n    max-width: 1200px;\n  }\n\n  section.tech-views .techs ul li {\n    width: 19rem;\n  }\n\n  .show {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .gap-bg {\n    gap: 18px;\n  }\n\n  section.intro .vission {\n    max-width: 700px;\n  }\n\n  section.intro h2 span {\n    font-weight: bold;\n    font-size: 6.25rem;\n  }\n\n  section.intro .intro-div {\n    padding-top: 5.125rem;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  section.tech-views .techs ul li {\n    width: 24rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary: #6167f2;\n  --primary-txt: #1f2937;\n  --secondary-txt: #1f2937;\n  --pri-bd: #bc6ce9;\n\n  /* --tertiary: #; */\n\n  /* --background: #; */\n\n  /* --dark-text: ; */\n  --bg-white: #fff;\n  --color-white: #fff;\n  --color-black: #000;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n* {\n  font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n  position: relative;\n  line-height: 1.5rem;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 1rem;\n  background-image: linear-gradient(rgb(255 255 255), rgb(209 213 219));\n}\n\n.bg-white {\n  background: var(--bg-white);\n}\n\n.color-white {\n  color: var(--color-white);\n}\n\n.flex {\n  display: flex;\n}\n\n.mr-1 {\n  margin: 24px;\n}\n\n.pd0 {\n  padding: 24px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.color-sec-text {\n  color: var(--secondary-txt);\n}\n\n.d-flex-2 {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.ff-1 {\n  font-family: 'Montserrat', sans-serif;\n}\n\n.fwb {\n  font-weight: bold;\n}\n\n.mb-sm {\n  margin-bottom: 1rem;\n}\n\n.ff-2 {\n  font-family: 'Poiret One', cursive;\n}\n\n.ff-3 {\n  font-family: 'Shadows Into Light', cursive;\n}\n\n.ff-4 {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    \"Roboto\",\n    \"Oxygen\",\n    \"Ubuntu\",\n    \"Cantarell\",\n    \"Fira Sans\",\n    \"Droid Sans\",\n    \"Helvetica Neue\",\n    sans-serif;\n  font-weight: normal;\n}\n\n.li-images {\n  width: 100%;\n  height: 300px;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n  border-top-right-radius: 12%;\n  border-bottom-left-radius: 12%;\n}\n\n.img-icon {\n  width: 100%;\n  height: 100%;\n}\n\n.jos-ziee {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  align-self: flex-end;\n  cursor: pointer;\n}\n\n.jos-ziee:hover {\n  border: 3px solid hsla(259 94% 51%);\n}\n\n.color-pri-text {\n  color: var(--primary);\n}\n\n.vis {\n  font-weight: bold;\n  font-size: 1.8754rem;\n}\n\n.tech {\n  font-weight: bold;\n  font-size: 2.25rem;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4rem;\n  align-items: center;\n  z-index: 3;\n}\n\nheader .container {\n  padding-left: 1rem;\n}\n\nmain {\n  margin-top: 4rem;\n}\n\nsection.intro {\n  background: linear-gradient(hsl(259 94% 51%), hsl(314 100% 47.1%));\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 3.5rem;\n}\n\nsection.intro .intro-div {\n  padding-top: 3.125rem;\n  padding-bottom: 10.1254rem;\n}\n\nsection.intro h2 span {\n  font-weight: bold;\n  font-size: 3.25rem;\n}\n\nsection.intro .vission {\n  padding: 0.5rem;\n  border: 2px solid var(--pri-bd);\n  border-radius: 3px;\n}\n\n.btn {\n  line-height: 1rem;\n  text-align: center;\n  border-color: transparent;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.6rem 1rem;\n  border-radius: 8px;\n  text-transform: uppercase;\n}\n\n.btn:hover {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views {\n  margin-top: -11rem;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .contents {\n  margin-right: auto;\n  margin-left: auto;\n  border-radius: 8px;\n  border: 1px solid #d2d5d8;\n  padding-bottom: 80px;\n}\n\nsection.tech-views .container {\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 0.75rem;\n}\n\nsection.tech-views .tham h3 {\n  line-height: 2rem;\n  font-size: 1.5rem;\n  width: 89%;\n}\n\nsection.tech-views .components {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.bb-2 {\n  background: rgb(229, 151, 231);\n}\n\nsection.tech-views .tham {\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.hide {\n  display: none;\n}\n\nsection.tech-views ul {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-auto-rows: auto;\n  grid-row-gap: 8px;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .techs ul li {\n  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 60%);\n  margin: 0 auto;\n  border-radius: 8px;\n  padding: 0.75rem;\n  background: white;\n  cursor: pointer;\n  width: 17rem;\n}\n\n.body > p {\n  height: 8rem;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\nsection.tech-views .techs ul li h3 {\n  font-size: 18px;\n  line-height: 28px;\n  color: var(--secondary-txt);\n  font-weight: bold;\n}\n\n.mr-ii {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.gap {\n  gap: 1rem;\n}\n\nsection.tech-views .techs .like {\n  align-items: center;\n}\n\n/* comment button */\n\nsection.tech-views .techs .comments {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views .techs {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* popup styling  */\n.pop--container {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  z-index: 40;\n  width: 1000px;\n  height: 650px;\n  padding: 10px;\n  color: #000;\n  text-align: center;\n  border: 1px solid rgb(90, 89, 89);\n  border-radius: 7px;\n  background-color: #fff;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  box-shadow:\n    -2px -2px 10px 0 rgba(243, 243, 242, 0.6),\n    -2px -2px 5px 0 #706f7299,\n    7px 7px 10px 0 rgba(77, 161, 77, 0.133),\n    4px 4px 5px 0 rgba(179, 69, 69, 0.801);\n}\n\n.pop--container.active {\n  transform: translate(-50%, -50%) scale(1);\n  margin: 0;\n  overflow-y: scroll;\n}\n\n.over--lay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  background-color: rgba(212, 212, 212, 0.904);\n}\n\n.over--lay.active {\n  opacity: 1;\n  pointer-events: none;\n}\n\n#close {\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  color: rgb(129, 127, 127);\n}\n\n.pop--img {\n  border: 1px solid rgb(143, 140, 140);\n  border-radius: 8px;\n  width: 850px;\n  height: 400px;\n  margin: 10px auto;\n}\n\n.pop--img img {\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n}\n\n.pop--tit {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  padding: 5px 14px;\n}\n\n.pop--des {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 16px;\n  padding: 14px;\n}\n\n.see--comment {\n  padding: 10px 20px;\n}\n\n.see--comment div {\n  display: flex;\n  gap: 10px;\n  font-size: 18px;\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.date,\n.name {\n  color: rgb(198, 96, 212);\n  font-weight: bold;\n  padding: 0 10px;\n  border: 0.1px solid lightgray;\n  border-radius: 0 50px 50px 0;\n}\n\n.comemt {\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.count--com {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  font-weight: bold;\n}\n\n.pop--put {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.pop--put .error {\n  width: 30%;\n  padding: 6px;\n  margin-bottom: -19px;\n  color: green;\n  padding-left: 10px;\n  border: 1px solid rgb(11, 238, 11);\n  background-color: rgba(201, 241, 201, 0.925);\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.pop--put h3 {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 20px;\n  padding: 14px;\n}\n\n.pop--put input {\n  width: 30%;\n  font-size: 16px;\n  color: #000;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n}\n\n.pop--put .insight {\n  height: 90px;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.space-between {\n  justify-content: space-between;\n}\n\n.pop--put button {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 15px;\n  background-color: #fff;\n  border: 1px solid lightgray;\n  border-radius: 0  50px 50px 0;\n  width: 13%;\n  padding: 8px;\n  transform: translateX(-5rem);\n}\n\n.pop--put button:hover {\n  background-color: rgba(178, 84, 190, 0.719);\n}\n\n@media screen and (min-width: 992px) {\n  section.tech-views ul {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    grid-template-rows: repeat(3, minmax(0, 1fr));\n    max-width: 1200px;\n  }\n\n  section.tech-views .techs ul li {\n    width: 19rem;\n  }\n\n  .show {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .gap-bg {\n    gap: 18px;\n  }\n\n  section.intro .vission {\n    max-width: 700px;\n  }\n\n  section.intro h2 span {\n    font-weight: bold;\n    font-size: 6.25rem;\n  }\n\n  section.intro .intro-div {\n    padding-top: 5.125rem;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  section.tech-views .techs ul li {\n    width: 24rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/homeRender.js":
/*!***************************!*\
  !*** ./src/homeRender.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popup_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup_comment.js */ "./src/popup_comment.js");


const renderTech = (technologies) => {
  const ul = document.querySelector('.vission-tech');
  ul.innerHTML = '';
  technologies.slice(0, 9).forEach((tech) => {
    ul.innerHTML += `<li id="${tech.id}" class="bg-white w100 d-flex-2">
    <div class="w100 d-flex-2">
    <div class="li-images"><img class="img" src="${tech.imageUrl}"></div>
    <div class="body space-between w100 d-flex-2">
    <h3 class="ff-4 mr-ii">${tech.title.length < 50 ? tech.title : `${tech.title.substring(0, 50)}....`}</h3>
    <p class="des ff-4 mr-ii">${tech.summary.length < 100 ? tech.summary : `${tech.summary.substring(0, 100)}...`}</p>
    <div class="like ff-4 flex gap">
    <i class="far fa-heart"></i>
    <span class="counter">0 Likes</span>
    </div>
    <div class="btn-container mr-ii">
    <button id="id_comment" type="button" class="ff-4 btn comments color-white">comments</button>
    </div>
    </div>
    </div>
    </li>`;
  });

  technologies.slice(0, 9).forEach((project) => {
    const popupContainer = document.querySelector('.pop--container');
    // popupContainer.id = project.id;
    const popupCard = (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(project);
    popupContainer.appendChild(popupCard);
  });
  document.querySelectorAll('#id_comment').forEach((e) => {
    const modal = document.getElementById(e.classList[1])
    console.log('All_btns:', modal);
    modal.addEventListener('click', () => {
      // console.log('card_id_here_:', e.id);
      // if(project.id === e.id){
        console.log('CLICKED:', modal);
      // };
        // const popupContainer = document.querySelector('.pop--container');
        // popupContainer.id = e.id;
        // if(popupContainer.id === e.id){
        // console.log('MATCH ID OF BOTH');
        // console.log('IMG_ID :', popupContainer.id);
        // popupContainer.style.display = 'flex';
        // popupContainer.classList.add('active');
      // };

        // htmls.style.overflow = 'hidden';
    });

  });
  


};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTech);

// // Display popup
// buttons.forEach((button) => {
//   const currentModal = document.getElementById(button.classList[1]);
//   // console.log(currentModal);
//   button.addEventListener('click', () => {
//     popupContainer.style.display = 'flex';
//     currentModal.classList.add('active');
//     htmls.style.overflow = 'hidden';
//   });
// });

/***/ }),

/***/ "./src/popup_comment.js":
/*!******************************!*\
  !*** ./src/popup_comment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createPopup = (object) => {
  const popupCard = document.createElement('li');
  const container = document.querySelector('.pop--container');
  container.innerHTML = '';
  popupCard.classList.add('popup--card');
  popupCard.id = object.id;
  popupCard.innerHTML += `
    <p id="close">Xlose</p>
    <div class="pop--img">
      <img src="${object.imageUrl}" alt="image_1">
    </div>
    <h3 class="pop--tit">${object.title}</h3>
    <p class="pop--des">${object.summary}</p><hr>
    <div class="see--comment">
    <div>
    <p class="count--com"></p>
      <p class="date"></p>
      <p class="name"></p>
      <p class="comment"></p>
    </div>
    </div><hr>
    <form>
      <div class="pop--put">
        <h3>Leave a Comment !</h3>
        <p class="error" >display error</p>
        <input id ="usernameInput" type="text" placeholder="Inter your name" maxlength="15">
        <input id = "commentInput" class="insight" type="text" placeholder="Enter your insigths">
        <button id= "btn" type="submit">Comment</button>
      </div>
    </form>`;


    // console.log('pop_id :',object.id);
  return popupCard;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopup);



/***/ }),

/***/ "./src/set_api.js":
/*!************************!*\
  !*** ./src/set_api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homeRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeRender.js */ "./src/homeRender.js");

// import createPopup from './popup_comment.js'
const getTechs = async () => {
  const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
  response.json().then((json) => {
    // createPopup(json);
    (0,_homeRender_js__WEBPACK_IMPORTED_MODULE_0__["default"])(json);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTechs);


/***/ }),

/***/ "./src/assets/jos.jpeg":
/*!*****************************!*\
  !*** ./src/assets/jos.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ac2d199325c6a149763.jpeg";

/***/ }),

/***/ "./src/assets/zieeco.jpeg":
/*!********************************!*\
  !*** ./src/assets/zieeco.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _assets_jos_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/jos.jpeg */ "./src/assets/jos.jpeg");
/* harmony import */ var _assets_zieeco_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/zieeco.jpeg */ "./src/assets/zieeco.jpeg");
/* harmony import */ var _set_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set_api.js */ "./src/set_api.js");







const icon1 = document.querySelector('.img-icon1');
const icon2 = document.querySelector('.img-icon2');

icon1.innerHTML += `<img class="jos-ziee" src="${_assets_jos_jpeg__WEBPACK_IMPORTED_MODULE_3__}" alt="zieeco">`;
icon2.innerHTML += `<img class="jos-ziee" src="${_assets_zieeco_jpeg__WEBPACK_IMPORTED_MODULE_4__}" alt="jos">`;

window.addEventListener('load', _set_api_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssZUFBZSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxTQUFTLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtB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Li9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL2hvbWVSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9wb3B1cF9jb21tZW50LmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvc2V0X2FwaS5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG51bCxcXG5saSxcXG5hIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTs7Ozs7Ozs7Ozs7Q0FXQyxjQUFjO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7OztDQUdDLGdCQUFnQjtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxudWwsXFxubGksXFxuYSB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnk6ICM2MTY3ZjI7XFxuICAtLXByaW1hcnktdHh0OiAjMWYyOTM3O1xcbiAgLS1zZWNvbmRhcnktdHh0OiAjMWYyOTM3O1xcbiAgLS1wcmktYmQ6ICNiYzZjZTk7XFxuXFxuICAvKiAtLXRlcnRpYXJ5OiAjOyAqL1xcblxcbiAgLyogLS1iYWNrZ3JvdW5kOiAjOyAqL1xcblxcbiAgLyogLS1kYXJrLXRleHQ6IDsgKi9cXG4gIC0tYmctd2hpdGU6ICNmZmY7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmO1xcbiAgLS1jb2xvci1ibGFjazogIzAwMDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1IDI1NSAyNTUpLCByZ2IoMjA5IDIxMyAyMTkpKTtcXG59XFxuXFxuLmJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlKTtcXG59XFxuXFxuLmNvbG9yLXdoaXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tci0xIHtcXG4gIG1hcmdpbjogMjRweDtcXG59XFxuXFxuLnBkMCB7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGV4dC1qdXN0aWZ5IHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi53MTAwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29sb3Itc2VjLXRleHQge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQpO1xcbn1cXG5cXG4uZC1mbGV4LTIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmYtMSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZndiIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWItc20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmZmLTIge1xcbiAgZm9udC1mYW1pbHk6ICdQb2lyZXQgT25lJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmZmLTMge1xcbiAgZm9udC1mYW1pbHk6ICdTaGFkb3dzIEludG8gTGlnaHQnLCBjdXJzaXZlO1xcbn1cXG5cXG4uZmYtNCB7XFxuICBmb250LWZhbWlseTpcXG4gICAgLWFwcGxlLXN5c3RlbSxcXG4gICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICBcXFwiUm9ib3RvXFxcIixcXG4gICAgXFxcIk94eWdlblxcXCIsXFxuICAgIFxcXCJVYnVudHVcXFwiLFxcbiAgICBcXFwiQ2FudGFyZWxsXFxcIixcXG4gICAgXFxcIkZpcmEgU2Fuc1xcXCIsXFxuICAgIFxcXCJEcm9pZCBTYW5zXFxcIixcXG4gICAgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5saS1pbWFnZXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4uaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEyJTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEyJTtcXG59XFxuXFxuLmltZy1pY29uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uam9zLXppZWUge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmpvcy16aWVlOmhvdmVyIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGhzbGEoMjU5IDk0JSA1MSUpO1xcbn1cXG5cXG4uY29sb3ItcHJpLXRleHQge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4udmlzIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjg3NTRyZW07XFxufVxcblxcbi50ZWNoIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbmhlYWRlciAuY29udGFpbmVyIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmludHJvIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChoc2woMjU5IDk0JSA1MSUpLCBoc2woMzE0IDEwMCUgNDcuMSUpKTtcXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcXG59XFxuXFxuc2VjdGlvbi5pbnRybyAuaW50cm8tZGl2IHtcXG4gIHBhZGRpbmctdG9wOiAzLjEyNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMC4xMjU0cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmludHJvIGgyIHNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDMuMjVyZW07XFxufVxcblxcbnNlY3Rpb24uaW50cm8gLnZpc3Npb24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpLWJkKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmJ0biB7XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgcGFkZGluZzogMC42cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMjU5IDk0JSA1MSUpO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3Mge1xcbiAgbWFyZ2luLXRvcDogLTExcmVtO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLmNvbnRlbnRzIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDVkODtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLmNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbSAwLjc1cmVtO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRoYW0gaDMge1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiA4OSU7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAuY29tcG9uZW50cyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYmItMiB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjI5LCAxNTEsIDIzMSk7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGhhbSB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgZ3JpZC1yb3ctZ2FwOiA4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxN3JlbTtcXG59XFxuXFxuLmJvZHkgPiBwIHtcXG4gIGhlaWdodDogOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIGgzIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tci1paSB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5nYXAge1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIC5saWtlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIGNvbW1lbnQgYnV0dG9uICovXFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyAuY29tbWVudHMge1xcbiAgYmFja2dyb3VuZDogaHNsYSgyNTkgOTQlIDUxJSk7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi8qIHBvcHVwIHN0eWxpbmcgICovXFxuLnBvcC0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW46IDA7XFxuICB6LWluZGV4OiA0MDtcXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBoZWlnaHQ6IDY1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDkwLCA4OSwgODkpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OlxcbiAgICAtMnB4IC0ycHggMTBweCAwIHJnYmEoMjQzLCAyNDMsIDI0MiwgMC42KSxcXG4gICAgLTJweCAtMnB4IDVweCAwICM3MDZmNzI5OSxcXG4gICAgN3B4IDdweCAxMHB4IDAgcmdiYSg3NywgMTYxLCA3NywgMC4xMzMpLFxcbiAgICA0cHggNHB4IDVweCAwIHJnYmEoMTc5LCA2OSwgNjksIDAuODAxKTtcXG59XFxuXFxuLnBvcC0tY29udGFpbmVyLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLm92ZXItLWxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45MDQpO1xcbn1cXG5cXG4ub3Zlci0tbGF5LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNjbG9zZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTI5LCAxMjcsIDEyNyk7XFxufVxcblxcbi5wb3AtLWltZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQzLCAxNDAsIDE0MCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogODUwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbi5wb3AtLWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wb3AtLXRpdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBwYWRkaW5nOiA1cHggMTRweDtcXG59XFxuXFxuLnBvcC0tZGVzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5zZWUtLWNvbW1lbnQge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uc2VlLS1jb21tZW50IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uZGF0ZSxcXG4ubmFtZSB7XFxuICBjb2xvcjogcmdiKDE5OCwgOTYsIDIxMik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGJvcmRlcjogMC4xcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcXG59XFxuXFxuLmNvbWVtdCB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxufVxcblxcbi5jb3VudC0tY29tIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9wLS1wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtLXB1dCAuZXJyb3Ige1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xOXB4O1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExLCAyMzgsIDExKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAyNDEsIDIwMSwgMC45MjUpO1xcbn1cXG5cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcbi5wb3AtLXB1dCBoMyB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4ucG9wLS1wdXQgaW5wdXQge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnBvcC0tcHV0IC5pbnNpZ2h0IHtcXG4gIGhlaWdodDogOTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnNwYWNlLWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAwICA1MHB4IDUwcHggMDtcXG4gIHdpZHRoOiAxMyU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVyZW0pO1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LCA4NCwgMTkwLCAwLjcxOSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICBzZWN0aW9uLnRlY2gtdmlld3MgdWwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB9XFxuXFxuICBzZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIHtcXG4gICAgd2lkdGg6IDE5cmVtO1xcbiAgfVxcblxcbiAgLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmdhcC1iZyB7XFxuICAgIGdhcDogMThweDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uaW50cm8gLnZpc3Npb24ge1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgfVxcblxcbiAgc2VjdGlvbi5pbnRybyBoMiBzcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uaW50cm8gLmludHJvLWRpdiB7XFxuICAgIHBhZGRpbmctdG9wOiA1LjEyNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICBzZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIHtcXG4gICAgd2lkdGg6IDI0cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjs7RUFFakIsbUJBQW1COztFQUVuQixxQkFBcUI7O0VBRXJCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtF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QUVBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeTogIzYxNjdmMjtcXG4gIC0tcHJpbWFyeS10eHQ6ICMxZjI5Mzc7XFxuICAtLXNlY29uZGFyeS10eHQ6ICMxZjI5Mzc7XFxuICAtLXByaS1iZDogI2JjNmNlOTtcXG5cXG4gIC8qIC0tdGVydGlhcnk6ICM7ICovXFxuXFxuICAvKiAtLWJhY2tncm91bmQ6ICM7ICovXFxuXFxuICAvKiAtLWRhcmstdGV4dDogOyAqL1xcbiAgLS1iZy13aGl0ZTogI2ZmZjtcXG4gIC0tY29sb3Itd2hpdGU6ICNmZmY7XFxuICAtLWNvbG9yLWJsYWNrOiAjMDAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyNTUgMjU1IDI1NSksIHJnYigyMDkgMjEzIDIxOSkpO1xcbn1cXG5cXG4uYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUpO1xcbn1cXG5cXG4uY29sb3Itd2hpdGUge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1yLTEge1xcbiAgbWFyZ2luOiAyNHB4O1xcbn1cXG5cXG4ucGQwIHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LWp1c3RpZnkge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLncxMDAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2xvci1zZWMtdGV4dCB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dCk7XFxufVxcblxcbi5kLWZsZXgtMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mZi0xIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5md2Ige1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYi1zbSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZmYtMiB7XFxuICBmb250LWZhbWlseTogJ1BvaXJldCBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG4uZmYtMyB7XFxuICBmb250LWZhbWlseTogJ1NoYWRvd3MgSW50byBMaWdodCcsIGN1cnNpdmU7XFxufVxcblxcbi5mZi00IHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICAtYXBwbGUtc3lzdGVtLFxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFxcXCJSb2JvdG9cXFwiLFxcbiAgICBcXFwiT3h5Z2VuXFxcIixcXG4gICAgXFxcIlVidW50dVxcXCIsXFxuICAgIFxcXCJDYW50YXJlbGxcXFwiLFxcbiAgICBcXFwiRmlyYSBTYW5zXFxcIixcXG4gICAgXFxcIkRyb2lkIFNhbnNcXFwiLFxcbiAgICBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmxpLWltYWdlcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTIlO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTIlO1xcbn1cXG5cXG4uaW1nLWljb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5qb3MtemllZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uam9zLXppZWU6aG92ZXIge1xcbiAgYm9yZGVyOiAzcHggc29saWQgaHNsYSgyNTkgOTQlIDUxJSk7XFxufVxcblxcbi5jb2xvci1wcmktdGV4dCB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi52aXMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuODc1NHJlbTtcXG59XFxuXFxuLnRlY2gge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuaGVhZGVyIC5jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxufVxcblxcbnNlY3Rpb24uaW50cm8ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgyNTkgOTQlIDUxJSksIGhzbCgzMTQgMTAwJSA0Ny4xJSkpO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmludHJvIC5pbnRyby1kaXYge1xcbiAgcGFkZGluZy10b3A6IDMuMTI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEwLjEyNTRyZW07XFxufVxcblxcbnNlY3Rpb24uaW50cm8gaDIgc3BhbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMy4yNXJlbTtcXG59XFxuXFxuc2VjdGlvbi5pbnRybyAudmlzc2lvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmktYmQpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogaHNsYSgyNTkgOTQlIDUxJSk7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyB7XFxuICBtYXJnaW4tdG9wOiAtMTFyZW07XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAuY29udGVudHMge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkNWQ4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAuY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtIDAuNzVyZW07XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGhhbSBoMyB7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDg5JTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC5jb21wb25lbnRzIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5iYi0yIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMjksIDE1MSwgMjMxKTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50aGFtIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBncmlkLXJvdy1nYXA6IDhweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgdWwgbGkge1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiKDAgMCAwIC8gNjAlKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDE3cmVtO1xcbn1cXG5cXG4uYm9keSA+IHAge1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgdWwgbGkgaDMge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1yLWlpIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmdhcCB7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgLmxpa2Uge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogY29tbWVudCBidXR0b24gKi9cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIC5jb21tZW50cyB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDI1OSA5NCUgNTElKTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLyogcG9wdXAgc3R5bGluZyAgKi9cXG4ucG9wLS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHotaW5kZXg6IDQwO1xcbiAgd2lkdGg6IDEwMDBweDtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTAsIDg5LCA4OSk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6XFxuICAgIC0ycHggLTJweCAxMHB4IDAgcmdiYSgyNDMsIDI0MywgMjQyLCAwLjYpLFxcbiAgICAtMnB4IC0ycHggNXB4IDAgIzcwNmY3Mjk5LFxcbiAgICA3cHggN3B4IDEwcHggMCByZ2JhKDc3LCAxNjEsIDc3LCAwLjEzMyksXFxuICAgIDRweCA0cHggNXB4IDAgcmdiYSgxNzksIDY5LCA2OSwgMC44MDEpO1xcbn1cXG5cXG4ucG9wLS1jb250YWluZXIuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ub3Zlci0tbGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkwNCk7XFxufVxcblxcbi5vdmVyLS1sYXkuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2Nsb3NlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYigxMjksIDEyNywgMTI3KTtcXG59XFxuXFxuLnBvcC0taW1nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNDMsIDE0MCwgMTQwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiA4NTBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuXFxuLnBvcC0taW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnBvcC0tdGl0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIHBhZGRpbmc6IDVweCAxNHB4O1xcbn1cXG5cXG4ucG9wLS1kZXMge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTRweDtcXG59XFxuXFxuLnNlZS0tY29tbWVudCB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5zZWUtLWNvbW1lbnQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxufVxcblxcbi5kYXRlLFxcbi5uYW1lIHtcXG4gIGNvbG9yOiByZ2IoMTk4LCA5NiwgMjEyKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xcbn1cXG5cXG4uY29tZW10IHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG59XFxuXFxuLmNvdW50LS1jb20ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wb3AtLXB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC0tcHV0IC5lcnJvciB7XFxuICB3aWR0aDogMzAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE5cHg7XFxuICBjb2xvcjogZ3JlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEsIDIzOCwgMTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDI0MSwgMjAxLCAwLjkyNSk7XFxufVxcblxcbi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1kZXNjZW5kaW5nLXNwZWNpZmljaXR5ICovXFxuLnBvcC0tcHV0IGgzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5wb3AtLXB1dCBpbnB1dCB7XFxuICB3aWR0aDogMzAlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucG9wLS1wdXQgLmluc2lnaHQge1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uc3BhY2UtYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wb3AtLXB1dCBidXR0b24ge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgIDUwcHggNTBweCAwO1xcbiAgd2lkdGg6IDEzJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXJlbSk7XFxufVxcblxcbi5wb3AtLXB1dCBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzgsIDg0LCAxOTAsIDAuNzE5KTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIHNlY3Rpb24udGVjaC12aWV3cyB1bCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgdWwgbGkge1xcbiAgICB3aWR0aDogMTlyZW07XFxuICB9XFxuXFxuICAuc2hvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZ2FwLWJnIHtcXG4gICAgZ2FwOiAxOHB4O1xcbiAgfVxcblxcbiAgc2VjdGlvbi5pbnRybyAudmlzc2lvbiB7XFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxuICB9XFxuXFxuICBzZWN0aW9uLmludHJvIGgyIHNwYW4ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgfVxcblxcbiAgc2VjdGlvbi5pbnRybyAuaW50cm8tZGl2IHtcXG4gICAgcGFkZGluZy10b3A6IDUuMTI1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIHNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgdWwgbGkge1xcbiAgICB3aWR0aDogMjRyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wb3AtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgei1pbmRleDogNDA7XFxuICB3aWR0aDogMTAwMHB4O1xcbiAgaGVpZ2h0OiA2NTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MCwgODksIDg5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgLTJweCAtMnB4IDEwcHggMCByZ2JhKDI0MywgMjQzLCAyNDIsIDAuNiksXFxuICAgIC0ycHggLTJweCA1cHggMCAjNzA2ZjcyOTksXFxuICAgIDdweCA3cHggMTBweCAwIHJnYmEoNzcsIDE2MSwgNzcsIDAuMTMzKSxcXG4gICAgNHB4IDRweCA1cHggMCByZ2JhKDE3OSwgNjksIDY5LCAwLjgwMSk7XFxufVxcblxcbi5wb3AtLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5vdmVyLS1sYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTA0KTtcXG59XFxuXFxuLm92ZXItLWxheS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDEyOSwgMTI3LCAxMjcpO1xcbn1cXG5cXG4ucG9wLS1pbWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDg1MHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5cXG4ucG9wLS10aXQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgcGFkZGluZzogNXB4IDE0cHg7XFxufVxcblxcbi5wb3AtLWRlcyB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4uc2VlLS1jb21tZW50IHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLnNlZS0tY29tbWVudCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG59XFxuXFxuLmRhdGUsXFxuLm5hbWUge1xcbiAgY29sb3I6IHJnYigxOTgsIDk2LCAyMTIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXI6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XFxufVxcblxcbi5jb21lbXQge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uY291bnQtLWNvbSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBvcC0tcHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLS1wdXQgLmVycm9yIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMSwgMjM4LCAxMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMjQxLCAyMDEsIDAuOTI1KTtcXG59XFxuXFxuLnBvcC0tcHV0IGgzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5wb3AtLXB1dCBpbnB1dCB7XFxuICB3aWR0aDogMzAlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucG9wLS1wdXQgLmluc2lnaHQge1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAwICA1MHB4IDUwcHggMDtcXG4gIHdpZHRoOiAxMyU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVyZW0pO1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LCA4NCwgMTkwLCAwLjcxOSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6Qyw2QkFBNkI7RUFDN0I7Ozs7MENBSXdDO0FBQzFDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnBvcC0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW46IDA7XFxuICB6LWluZGV4OiA0MDtcXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBoZWlnaHQ6IDY1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDkwLCA4OSwgODkpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OlxcbiAgICAtMnB4IC0ycHggMTBweCAwIHJnYmEoMjQzLCAyNDMsIDI0MiwgMC42KSxcXG4gICAgLTJweCAtMnB4IDVweCAwICM3MDZmNzI5OSxcXG4gICAgN3B4IDdweCAxMHB4IDAgcmdiYSg3NywgMTYxLCA3NywgMC4xMzMpLFxcbiAgICA0cHggNHB4IDVweCAwIHJnYmEoMTc5LCA2OSwgNjksIDAuODAxKTtcXG59XFxuXFxuLnBvcC0tY29udGFpbmVyLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLm92ZXItLWxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45MDQpO1xcbn1cXG5cXG4ub3Zlci0tbGF5LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNjbG9zZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTI5LCAxMjcsIDEyNyk7XFxufVxcblxcbi5wb3AtLWltZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogODUwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbi5wb3AtLXRpdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBwYWRkaW5nOiA1cHggMTRweDtcXG59XFxuXFxuLnBvcC0tZGVzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5zZWUtLWNvbW1lbnQge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uc2VlLS1jb21tZW50IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uZGF0ZSxcXG4ubmFtZSB7XFxuICBjb2xvcjogcmdiKDE5OCwgOTYsIDIxMik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGJvcmRlcjogMC4xcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcXG59XFxuXFxuLmNvbWVtdCB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxufVxcblxcbi5jb3VudC0tY29tIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9wLS1wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtLXB1dCAuZXJyb3Ige1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xOXB4O1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExLCAyMzgsIDExKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAyNDEsIDIwMSwgMC45MjUpO1xcbn1cXG5cXG4ucG9wLS1wdXQgaDMge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMTRweDtcXG59XFxuXFxuLnBvcC0tcHV0IGlucHV0IHtcXG4gIHdpZHRoOiAzMCU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5wb3AtLXB1dCAuaW5zaWdodCB7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5wb3AtLXB1dCBidXR0b24ge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgIDUwcHggNTBweCAwO1xcbiAgd2lkdGg6IDEzJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXJlbSk7XFxufVxcblxcbi5wb3AtLXB1dCBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzgsIDg0LCAxOTAsIDAuNzE5KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3JlYXRlUG9wdXAgZnJvbSAnLi9wb3B1cF9jb21tZW50LmpzJ1xuXG5jb25zdCByZW5kZXJUZWNoID0gKHRlY2hub2xvZ2llcykgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aXNzaW9uLXRlY2gnKTtcbiAgdWwuaW5uZXJIVE1MID0gJyc7XG4gIHRlY2hub2xvZ2llcy5zbGljZSgwLCA5KS5mb3JFYWNoKCh0ZWNoKSA9PiB7XG4gICAgdWwuaW5uZXJIVE1MICs9IGA8bGkgaWQ9XCIke3RlY2guaWR9XCIgY2xhc3M9XCJiZy13aGl0ZSB3MTAwIGQtZmxleC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cIncxMDAgZC1mbGV4LTJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGktaW1hZ2VzXCI+PGltZyBjbGFzcz1cImltZ1wiIHNyYz1cIiR7dGVjaC5pbWFnZVVybH1cIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm9keSBzcGFjZS1iZXR3ZWVuIHcxMDAgZC1mbGV4LTJcIj5cbiAgICA8aDMgY2xhc3M9XCJmZi00IG1yLWlpXCI+JHt0ZWNoLnRpdGxlLmxlbmd0aCA8IDUwID8gdGVjaC50aXRsZSA6IGAke3RlY2gudGl0bGUuc3Vic3RyaW5nKDAsIDUwKX0uLi4uYH08L2gzPlxuICAgIDxwIGNsYXNzPVwiZGVzIGZmLTQgbXItaWlcIj4ke3RlY2guc3VtbWFyeS5sZW5ndGggPCAxMDAgPyB0ZWNoLnN1bW1hcnkgOiBgJHt0ZWNoLnN1bW1hcnkuc3Vic3RyaW5nKDAsIDEwMCl9Li4uYH08L3A+XG4gICAgPGRpdiBjbGFzcz1cImxpa2UgZmYtNCBmbGV4IGdhcFwiPlxuICAgIDxpIGNsYXNzPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPlxuICAgIDxzcGFuIGNsYXNzPVwiY291bnRlclwiPjAgTGlrZXM8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJ0bi1jb250YWluZXIgbXItaWlcIj5cbiAgICA8YnV0dG9uIGlkPVwiaWRfY29tbWVudFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZmLTQgYnRuIGNvbW1lbnRzIGNvbG9yLXdoaXRlXCI+Y29tbWVudHM8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2xpPmA7XG4gIH0pO1xuXG4gIHRlY2hub2xvZ2llcy5zbGljZSgwLCA5KS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLS1jb250YWluZXInKTtcbiAgICAvLyBwb3B1cENvbnRhaW5lci5pZCA9IHByb2plY3QuaWQ7XG4gICAgY29uc3QgcG9wdXBDYXJkID0gY3JlYXRlUG9wdXAocHJvamVjdCk7XG4gICAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXBDYXJkKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNpZF9jb21tZW50JykuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5jbGFzc0xpc3RbMV0pXG4gICAgY29uc29sZS5sb2coJ0FsbF9idG5zOicsIG1vZGFsKTtcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXJkX2lkX2hlcmVfOicsIGUuaWQpO1xuICAgICAgLy8gaWYocHJvamVjdC5pZCA9PT0gZS5pZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDTElDS0VEOicsIG1vZGFsKTtcbiAgICAgIC8vIH07XG4gICAgICAgIC8vIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC0tY29udGFpbmVyJyk7XG4gICAgICAgIC8vIHBvcHVwQ29udGFpbmVyLmlkID0gZS5pZDtcbiAgICAgICAgLy8gaWYocG9wdXBDb250YWluZXIuaWQgPT09IGUuaWQpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnTUFUQ0ggSUQgT0YgQk9USCcpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnSU1HX0lEIDonLCBwb3B1cENvbnRhaW5lci5pZCk7XG4gICAgICAgIC8vIHBvcHVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIC8vIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgLy8gfTtcblxuICAgICAgICAvLyBodG1scy5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH0pO1xuXG4gIH0pO1xuICBcblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUZWNoO1xuXG4vLyAvLyBEaXNwbGF5IHBvcHVwXG4vLyBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuLy8gICBjb25zdCBjdXJyZW50TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b24uY2xhc3NMaXN0WzFdKTtcbi8vICAgLy8gY29uc29sZS5sb2coY3VycmVudE1vZGFsKTtcbi8vICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4vLyAgICAgY3VycmVudE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuLy8gICAgIGh0bWxzLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4vLyAgIH0pO1xuLy8gfSk7IiwiY29uc3QgY3JlYXRlUG9wdXAgPSAob2JqZWN0KSA9PiB7XG4gIGNvbnN0IHBvcHVwQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHBvcHVwQ2FyZC5jbGFzc0xpc3QuYWRkKCdwb3B1cC0tY2FyZCcpO1xuICBwb3B1cENhcmQuaWQgPSBvYmplY3QuaWQ7XG4gIHBvcHVwQ2FyZC5pbm5lckhUTUwgKz0gYFxuICAgIDxwIGlkPVwiY2xvc2VcIj5YbG9zZTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLS1pbWdcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtvYmplY3QuaW1hZ2VVcmx9XCIgYWx0PVwiaW1hZ2VfMVwiPlxuICAgIDwvZGl2PlxuICAgIDxoMyBjbGFzcz1cInBvcC0tdGl0XCI+JHtvYmplY3QudGl0bGV9PC9oMz5cbiAgICA8cCBjbGFzcz1cInBvcC0tZGVzXCI+JHtvYmplY3Quc3VtbWFyeX08L3A+PGhyPlxuICAgIDxkaXYgY2xhc3M9XCJzZWUtLWNvbW1lbnRcIj5cbiAgICA8ZGl2PlxuICAgIDxwIGNsYXNzPVwiY291bnQtLWNvbVwiPjwvcD5cbiAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPjwvcD5cbiAgICAgIDxwIGNsYXNzPVwibmFtZVwiPjwvcD5cbiAgICAgIDxwIGNsYXNzPVwiY29tbWVudFwiPjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj48aHI+XG4gICAgPGZvcm0+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9wLS1wdXRcIj5cbiAgICAgICAgPGgzPkxlYXZlIGEgQ29tbWVudCAhPC9oMz5cbiAgICAgICAgPHAgY2xhc3M9XCJlcnJvclwiID5kaXNwbGF5IGVycm9yPC9wPlxuICAgICAgICA8aW5wdXQgaWQgPVwidXNlcm5hbWVJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbnRlciB5b3VyIG5hbWVcIiBtYXhsZW5ndGg9XCIxNVwiPlxuICAgICAgICA8aW5wdXQgaWQgPSBcImNvbW1lbnRJbnB1dFwiIGNsYXNzPVwiaW5zaWdodFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGluc2lndGhzXCI+XG4gICAgICAgIDxidXR0b24gaWQ9IFwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5gO1xuXG5cbiAgICAvLyBjb25zb2xlLmxvZygncG9wX2lkIDonLG9iamVjdC5pZCk7XG4gIHJldHVybiBwb3B1cENhcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQb3B1cDtcblxuIiwiaW1wb3J0IHJlbmRlclRlY2ggZnJvbSAnLi9ob21lUmVuZGVyLmpzJztcbi8vIGltcG9ydCBjcmVhdGVQb3B1cCBmcm9tICcuL3BvcHVwX2NvbW1lbnQuanMnXG5jb25zdCBnZXRUZWNocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BhY2VmbGlnaHRuZXdzYXBpLm5ldC92My9hcnRpY2xlcycpO1xuICByZXNwb25zZS5qc29uKCkudGhlbigoanNvbikgPT4ge1xuICAgIC8vIGNyZWF0ZVBvcHVwKGpzb24pO1xuICAgIHJlbmRlclRlY2goanNvbik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VGVjaHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IGogZnJvbSAnLi9hc3NldHMvam9zLmpwZWcnO1xuaW1wb3J0IHogZnJvbSAnLi9hc3NldHMvemllZWNvLmpwZWcnO1xuaW1wb3J0IGdldFRlY2hzIGZyb20gJy4vc2V0X2FwaS5qcyc7XG5cbmNvbnN0IGljb24xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1pY29uMScpO1xuY29uc3QgaWNvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLWljb24yJyk7XG5cbmljb24xLmlubmVySFRNTCArPSBgPGltZyBjbGFzcz1cImpvcy16aWVlXCIgc3JjPVwiJHtqfVwiIGFsdD1cInppZWVjb1wiPmA7XG5pY29uMi5pbm5lckhUTUwgKz0gYDxpbWcgY2xhc3M9XCJqb3MtemllZVwiIHNyYz1cIiR7en1cIiBhbHQ9XCJqb3NcIj5gO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGdldFRlY2hzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==