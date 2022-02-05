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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary: #6167f2;\n  --primary-txt: #1f2937;\n  --secondary-txt: #1f2937;\n  --pri-bd: #bc6ce9;\n\n  /* --tertiary: #; */\n\n  /* --background: #; */\n\n  /* --dark-text: ; */\n  --bg-white: #fff;\n  --color-white: #fff;\n  --color-black: #000;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n* {\n  font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n  position: relative;\n  line-height: 1.5rem;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 1rem;\n  background-image: linear-gradient(rgb(255 255 255), rgb(209 213 219));\n}\n\n.bg-white {\n  background: var(--bg-white);\n}\n\n.color-white {\n  color: var(--color-white);\n}\n\n.flex {\n  display: flex;\n}\n\n.mr-1 {\n  margin: 24px;\n}\n\n.pd0 {\n  padding: 24px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.color-sec-text {\n  color: var(--secondary-txt);\n}\n\n.d-flex-2 {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.ff-1 {\n  font-family: 'Montserrat', sans-serif;\n}\n\n.fwb {\n  font-weight: bold;\n}\n\n.mb-sm {\n  margin-bottom: 1rem;\n}\n\n.ff-2 {\n  font-family: 'Poiret One', cursive;\n}\n\n.ff-3 {\n  font-family: 'Shadows Into Light', cursive;\n}\n\n.ff-4 {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    \"Roboto\",\n    \"Oxygen\",\n    \"Ubuntu\",\n    \"Cantarell\",\n    \"Fira Sans\",\n    \"Droid Sans\",\n    \"Helvetica Neue\",\n    sans-serif;\n  font-weight: normal;\n}\n\n.li-images {\n  width: 100%;\n  height: 300px;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n  border-top-right-radius: 12%;\n  border-bottom-left-radius: 12%;\n}\n\n.img-icon {\n  width: 100%;\n  height: 100%;\n}\n\n.jos-ziee {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  align-self: flex-end;\n  cursor: pointer;\n}\n\n.jos-ziee:hover {\n  border: 3px solid hsla(259 94% 51%);\n}\n\n.color-pri-text {\n  color: var(--primary);\n}\n\n.vis {\n  font-weight: bold;\n  font-size: 1.8754rem;\n}\n\n.tech {\n  font-weight: bold;\n  font-size: 2.25rem;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4rem;\n  align-items: center;\n  z-index: 3;\n}\n\nheader .container {\n  padding-left: 1rem;\n}\n\nmain {\n  margin-top: 4rem;\n}\n\nsection.intro {\n  background: linear-gradient(hsl(259 94% 51%), hsl(314 100% 47.1%));\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 3.5rem;\n}\n\nsection.intro .intro-div {\n  padding-top: 3.125rem;\n  padding-bottom: 10.1254rem;\n}\n\nsection.intro h2 span {\n  font-weight: bold;\n  font-size: 3.25rem;\n}\n\nsection.intro .vission {\n  padding: 0.5rem;\n  border: 2px solid var(--pri-bd);\n  border-radius: 3px;\n}\n\n.btn {\n  line-height: 1rem;\n  text-align: center;\n  border-color: transparent;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.6rem 1rem;\n  border-radius: 8px;\n  text-transform: uppercase;\n}\n\n.btn:hover {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views {\n  margin-top: -11rem;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .contents {\n  margin-right: auto;\n  margin-left: auto;\n  border-radius: 8px;\n  border: 1px solid #d2d5d8;\n  padding-bottom: 80px;\n}\n\nsection.tech-views .container {\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 0.75rem;\n}\n\nsection.tech-views .tham h3 {\n  line-height: 2rem;\n  font-size: 1.5rem;\n  width: 89%;\n}\n\nsection.tech-views .components {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.bb-2 {\n  background: rgb(229, 151, 231);\n}\n\nsection.tech-views .tham {\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.hide {\n  display: none;\n}\n\nsection.tech-views ul {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-auto-rows: auto;\n  grid-row-gap: 8px;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .techs ul li {\n  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 60%);\n  margin: 0 auto;\n  border-radius: 8px;\n  padding: 0.75rem;\n  background: white;\n  cursor: pointer;\n  width: 17rem;\n}\n\n.body > p {\n  height: 8rem;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\nsection.tech-views .techs ul li h3 {\n  font-size: 18px;\n  line-height: 28px;\n  color: var(--secondary-txt);\n  font-weight: bold;\n}\n\n.mr-ii {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.gap {\n  gap: 1rem;\n}\n\nsection.tech-views .techs .like {\n  align-items: center;\n}\n\n/* comment button */\n\nsection.tech-views .techs .comments {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views .techs {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* popup styling  */\n.pop--container {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  z-index: 40;\n  width: 1000px;\n  height: 650px;\n  padding: 10px;\n  color: #000;\n  text-align: center;\n  border: 1px solid rgb(90, 89, 89);\n  border-radius: 7px;\n  background-color: #fff;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  box-shadow:\n    -2px -2px 10px 0 rgba(243, 243, 242, 0.6),\n    -2px -2px 5px 0 #706f7299,\n    7px 7px 10px 0 rgba(77, 161, 77, 0.133),\n    4px 4px 5px 0 rgba(179, 69, 69, 0.801);\n}\n\n.pop--container.active {\n  transform: translate(-50%, -50%) scale(1);\n  margin: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.over--lay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  background-color: rgba(212, 212, 212, 0.904);\n}\n\n.over--lay.active {\n  opacity: 1;\n  pointer-events: none;\n}\n\n#close {\n  padding: 0;\n  position: absolute;\n  top: -4px;\n  right: -150px;\n  width: 40%;\n  font-weight: bold;\n  cursor: pointer;\n  color: rgb(129, 127, 127);\n  margin-bottom: 40px;\n}\n\n#close i {\n  padding: 14px;\n  font-weight: bolder;\n  font-size: 29px;\n}\n\n#close i:hover {\n  color: red;\n}\n\n.pop--img {\n  border: 1px solid rgb(143, 140, 140);\n  border-radius: 8px;\n  width: 850px;\n  height: 400px;\n  margin: 25px auto;\n}\n\n.pop--img img {\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n}\n\n.pop--tit {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  padding: 5px 14px;\n}\n\n.pop--des {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 16px;\n  padding: 14px;\n}\n\n.see--comment {\n  padding: 10px 20px;\n}\n\n.see--comment div {\n  display: flex;\n  gap: 10px;\n  font-size: 18px;\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.date,\n.name {\n  color: rgb(198, 96, 212);\n  font-weight: bold;\n  padding: 0 10px;\n  border: 0.1px solid lightgray;\n  border-radius: 0 50px 50px 0;\n}\n\n.comemt {\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.count--com {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  font-weight: bold;\n}\n\n.pop--put {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.pop--put .error {\n  width: 30%;\n  padding: 6px;\n  margin-bottom: -19px;\n  color: green;\n  padding-left: 10px;\n  border: 1px solid rgb(11, 238, 11);\n  background-color: rgba(201, 241, 201, 0.925);\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.pop--put h3 {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 20px;\n  padding: 14px;\n}\n\n.pop--put input {\n  width: 30%;\n  font-size: 16px;\n  color: #000;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n}\n\n.pop--put .insight {\n  height: 90px;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.space-between {\n  justify-content: space-between;\n}\n\n.pop--put button {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 15px;\n  background-color: #fff;\n  border: 1px solid lightgray;\n  border-radius: 0  50px 50px 0;\n  width: 13%;\n  padding: 8px;\n  transform: translateX(-5rem);\n}\n\n.pop--put button:hover {\n  background-color: rgba(178, 84, 190, 0.719);\n}\n\n@media screen and (min-width: 992px) {\n  section.tech-views ul {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    grid-template-rows: repeat(3, minmax(0, 1fr));\n    max-width: 1200px;\n  }\n\n  section.tech-views .techs ul li {\n    width: 19rem;\n  }\n\n  .show {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .gap-bg {\n    gap: 18px;\n  }\n\n  section.intro .vission {\n    max-width: 700px;\n  }\n\n  section.intro h2 span {\n    font-weight: bold;\n    font-size: 6.25rem;\n  }\n\n  section.intro .intro-div {\n    padding-top: 5.125rem;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  section.tech-views .techs ul li {\n    width: 24rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary: #6167f2;\n  --primary-txt: #1f2937;\n  --secondary-txt: #1f2937;\n  --pri-bd: #bc6ce9;\n\n  /* --tertiary: #; */\n\n  /* --background: #; */\n\n  /* --dark-text: ; */\n  --bg-white: #fff;\n  --color-white: #fff;\n  --color-black: #000;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n* {\n  font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n  position: relative;\n  line-height: 1.5rem;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 1rem;\n  background-image: linear-gradient(rgb(255 255 255), rgb(209 213 219));\n}\n\n.bg-white {\n  background: var(--bg-white);\n}\n\n.color-white {\n  color: var(--color-white);\n}\n\n.flex {\n  display: flex;\n}\n\n.mr-1 {\n  margin: 24px;\n}\n\n.pd0 {\n  padding: 24px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.color-sec-text {\n  color: var(--secondary-txt);\n}\n\n.d-flex-2 {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.ff-1 {\n  font-family: 'Montserrat', sans-serif;\n}\n\n.fwb {\n  font-weight: bold;\n}\n\n.mb-sm {\n  margin-bottom: 1rem;\n}\n\n.ff-2 {\n  font-family: 'Poiret One', cursive;\n}\n\n.ff-3 {\n  font-family: 'Shadows Into Light', cursive;\n}\n\n.ff-4 {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    \"Roboto\",\n    \"Oxygen\",\n    \"Ubuntu\",\n    \"Cantarell\",\n    \"Fira Sans\",\n    \"Droid Sans\",\n    \"Helvetica Neue\",\n    sans-serif;\n  font-weight: normal;\n}\n\n.li-images {\n  width: 100%;\n  height: 300px;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n  border-top-right-radius: 12%;\n  border-bottom-left-radius: 12%;\n}\n\n.img-icon {\n  width: 100%;\n  height: 100%;\n}\n\n.jos-ziee {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  align-self: flex-end;\n  cursor: pointer;\n}\n\n.jos-ziee:hover {\n  border: 3px solid hsla(259 94% 51%);\n}\n\n.color-pri-text {\n  color: var(--primary);\n}\n\n.vis {\n  font-weight: bold;\n  font-size: 1.8754rem;\n}\n\n.tech {\n  font-weight: bold;\n  font-size: 2.25rem;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4rem;\n  align-items: center;\n  z-index: 3;\n}\n\nheader .container {\n  padding-left: 1rem;\n}\n\nmain {\n  margin-top: 4rem;\n}\n\nsection.intro {\n  background: linear-gradient(hsl(259 94% 51%), hsl(314 100% 47.1%));\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 3.5rem;\n}\n\nsection.intro .intro-div {\n  padding-top: 3.125rem;\n  padding-bottom: 10.1254rem;\n}\n\nsection.intro h2 span {\n  font-weight: bold;\n  font-size: 3.25rem;\n}\n\nsection.intro .vission {\n  padding: 0.5rem;\n  border: 2px solid var(--pri-bd);\n  border-radius: 3px;\n}\n\n.btn {\n  line-height: 1rem;\n  text-align: center;\n  border-color: transparent;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.6rem 1rem;\n  border-radius: 8px;\n  text-transform: uppercase;\n}\n\n.btn:hover {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views {\n  margin-top: -11rem;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .contents {\n  margin-right: auto;\n  margin-left: auto;\n  border-radius: 8px;\n  border: 1px solid #d2d5d8;\n  padding-bottom: 80px;\n}\n\nsection.tech-views .container {\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 0.75rem;\n}\n\nsection.tech-views .tham h3 {\n  line-height: 2rem;\n  font-size: 1.5rem;\n  width: 89%;\n}\n\nsection.tech-views .components {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.bb-2 {\n  background: rgb(229, 151, 231);\n}\n\nsection.tech-views .tham {\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.hide {\n  display: none;\n}\n\nsection.tech-views ul {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-auto-rows: auto;\n  grid-row-gap: 8px;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nsection.tech-views .techs ul li {\n  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 60%);\n  margin: 0 auto;\n  border-radius: 8px;\n  padding: 0.75rem;\n  background: white;\n  cursor: pointer;\n  width: 17rem;\n}\n\n.body > p {\n  height: 8rem;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\nsection.tech-views .techs ul li h3 {\n  font-size: 18px;\n  line-height: 28px;\n  color: var(--secondary-txt);\n  font-weight: bold;\n}\n\n.mr-ii {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.gap {\n  gap: 1rem;\n}\n\nsection.tech-views .techs .like {\n  align-items: center;\n}\n\n/* comment button */\n\nsection.tech-views .techs .comments {\n  background: hsla(259 94% 51%);\n}\n\nsection.tech-views .techs {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* popup styling  */\n.pop--container {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  z-index: 40;\n  width: 1000px;\n  height: 650px;\n  padding: 10px;\n  color: #000;\n  text-align: center;\n  border: 1px solid rgb(90, 89, 89);\n  border-radius: 7px;\n  background-color: #fff;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  box-shadow:\n    -2px -2px 10px 0 rgba(243, 243, 242, 0.6),\n    -2px -2px 5px 0 #706f7299,\n    7px 7px 10px 0 rgba(77, 161, 77, 0.133),\n    4px 4px 5px 0 rgba(179, 69, 69, 0.801);\n}\n\n.pop--container.active {\n  transform: translate(-50%, -50%) scale(1);\n  margin: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.over--lay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  background-color: rgba(212, 212, 212, 0.904);\n}\n\n.over--lay.active {\n  opacity: 1;\n  pointer-events: none;\n}\n\n#close {\n  padding: 0;\n  position: absolute;\n  top: -4px;\n  right: -150px;\n  width: 40%;\n  font-weight: bold;\n  cursor: pointer;\n  color: rgb(129, 127, 127);\n  margin-bottom: 40px;\n}\n\n#close i {\n  padding: 14px;\n  font-weight: bolder;\n  font-size: 29px;\n}\n\n#close i:hover {\n  color: red;\n}\n\n.pop--img {\n  border: 1px solid rgb(143, 140, 140);\n  border-radius: 8px;\n  width: 850px;\n  height: 400px;\n  margin: 25px auto;\n}\n\n.pop--img img {\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n}\n\n.pop--tit {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  padding: 5px 14px;\n}\n\n.pop--des {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 16px;\n  padding: 14px;\n}\n\n.see--comment {\n  padding: 10px 20px;\n}\n\n.see--comment div {\n  display: flex;\n  gap: 10px;\n  font-size: 18px;\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.date,\n.name {\n  color: rgb(198, 96, 212);\n  font-weight: bold;\n  padding: 0 10px;\n  border: 0.1px solid lightgray;\n  border-radius: 0 50px 50px 0;\n}\n\n.comemt {\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.count--com {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  font-weight: bold;\n}\n\n.pop--put {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.pop--put .error {\n  width: 30%;\n  padding: 6px;\n  margin-bottom: -19px;\n  color: green;\n  padding-left: 10px;\n  border: 1px solid rgb(11, 238, 11);\n  background-color: rgba(201, 241, 201, 0.925);\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.pop--put h3 {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 20px;\n  padding: 14px;\n}\n\n.pop--put input {\n  width: 30%;\n  font-size: 16px;\n  color: #000;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n}\n\n.pop--put .insight {\n  height: 90px;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.space-between {\n  justify-content: space-between;\n}\n\n.pop--put button {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 15px;\n  background-color: #fff;\n  border: 1px solid lightgray;\n  border-radius: 0  50px 50px 0;\n  width: 13%;\n  padding: 8px;\n  transform: translateX(-5rem);\n}\n\n.pop--put button:hover {\n  background-color: rgba(178, 84, 190, 0.719);\n}\n\n@media screen and (min-width: 992px) {\n  section.tech-views ul {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    grid-template-rows: repeat(3, minmax(0, 1fr));\n    max-width: 1200px;\n  }\n\n  section.tech-views .techs ul li {\n    width: 19rem;\n  }\n\n  .show {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .gap-bg {\n    gap: 18px;\n  }\n\n  section.intro .vission {\n    max-width: 700px;\n  }\n\n  section.intro h2 span {\n    font-weight: bold;\n    font-size: 6.25rem;\n  }\n\n  section.intro .intro-div {\n    padding-top: 5.125rem;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  section.tech-views .techs ul li {\n    width: 24rem;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.pop--container {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  z-index: 40;\n  width: 1000px;\n  height: 650px;\n  padding: 10px;\n  color: #000;\n  text-align: center;\n  border: 1px solid rgb(90, 89, 89);\n  border-radius: 7px;\n  background-color: #fff;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  box-shadow:\n    -2px -2px 10px 0 rgba(243, 243, 242, 0.6),\n    -2px -2px 5px 0 #706f7299,\n    7px 7px 10px 0 rgba(77, 161, 77, 0.133),\n    4px 4px 5px 0 rgba(179, 69, 69, 0.801);\n}\n\n.pop--container.active {\n  transform: translate(-50%, -50%) scale(1);\n  margin: 0;\n  overflow-y: scroll;\n}\n\n.over--lay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  background-color: rgba(212, 212, 212, 0.904);\n}\n\n.over--lay.active {\n  opacity: 1;\n  pointer-events: none;\n}\n\n#close {\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  color: rgb(129, 127, 127);\n}\n\n.pop--img {\n  border: 1px solid red;\n  border-radius: 8px;\n  width: 850px;\n  height: 400px;\n  margin: 10px auto;\n}\n\n.pop--tit {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  padding: 5px 14px;\n}\n\n.pop--des {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 16px;\n  padding: 14px;\n}\n\n.see--comment {\n  padding: 10px 20px;\n}\n\n.see--comment div {\n  display: flex;\n  transform: translateX(-22rem);\n  flex-direction: column;\n  gap: 10px;\n  font-size: 18px;\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.date,\n.name {\n  color: rgb(198, 96, 212);\n  font-weight: bold;\n  padding: 10px;\n  border: 0.1px solid lightgray;\n  border-radius: 0 50px 50px 0;\n}\n\n.comemt {\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.count--com {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  font-weight: bold;\n}\n\n.pop--put {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.pop--put .error {\n  width: 30%;\n  padding: 6px;\n  margin-bottom: -19px;\n  color: green;\n  padding-left: 10px;\n  border: 1px solid rgb(11, 238, 11);\n  background-color: rgba(201, 241, 201, 0.925);\n}\n\n.pop--put h3 {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 20px;\n  padding: 14px;\n}\n\n.pop--put input {\n  width: 30%;\n  font-size: 16px;\n  color: #000;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n}\n\n.pop--put .insight {\n  height: 90px;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.pop--put button {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 15px;\n  background-color: #fff;\n  border: 1px solid lightgray;\n  border-radius: 0  50px 50px 0;\n  width: 13%;\n  padding: 8px;\n  transform: translateX(-5rem);\n}\n\n.pop--put button:hover {\n  background-color: rgba(178, 84, 190, 0.719);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,QAAQ;EACR,SAAS;EACT,SAAS;EACT,WAAW;EACX,aAAa;EACb,aAAa;EACb,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,iCAAiC;EACjC,kBAAkB;EAClB,sBAAsB;EACtB,yCAAyC;EACzC,6BAA6B;EAC7B;;;;0CAIwC;AAC1C;;AAEA;EACE,yCAAyC;EACzC,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,oBAAoB;EACpB,6BAA6B;EAC7B,4CAA4C;AAC9C;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf,8BAA8B;AAChC;;AAEA;;EAEE,wBAAwB;EACxB,iBAAiB;EACjB,aAAa;EACb,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,kCAAkC;EAClC,4CAA4C;AAC9C;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,aAAa;AACf;;AAEA;EACE,UAAU;EACV,eAAe;EACf,WAAW;EACX,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,sBAAsB;EACtB,2BAA2B;EAC3B,6BAA6B;EAC7B,UAAU;EACV,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,2CAA2C;AAC7C","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.pop--container {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  z-index: 40;\n  width: 1000px;\n  height: 650px;\n  padding: 10px;\n  color: #000;\n  text-align: center;\n  border: 1px solid rgb(90, 89, 89);\n  border-radius: 7px;\n  background-color: #fff;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  box-shadow:\n    -2px -2px 10px 0 rgba(243, 243, 242, 0.6),\n    -2px -2px 5px 0 #706f7299,\n    7px 7px 10px 0 rgba(77, 161, 77, 0.133),\n    4px 4px 5px 0 rgba(179, 69, 69, 0.801);\n}\n\n.pop--container.active {\n  transform: translate(-50%, -50%) scale(1);\n  margin: 0;\n  overflow-y: scroll;\n}\n\n.over--lay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  background-color: rgba(212, 212, 212, 0.904);\n}\n\n.over--lay.active {\n  opacity: 1;\n  pointer-events: none;\n}\n\n#close {\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  color: rgb(129, 127, 127);\n}\n\n.pop--img {\n  border: 1px solid red;\n  border-radius: 8px;\n  width: 850px;\n  height: 400px;\n  margin: 10px auto;\n}\n\n.pop--tit {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  padding: 5px 14px;\n}\n\n.pop--des {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 16px;\n  padding: 14px;\n}\n\n.see--comment {\n  padding: 10px 20px;\n}\n\n.see--comment div {\n  display: flex;\n  transform: translateX(-22rem);\n  flex-direction: column;\n  gap: 10px;\n  font-size: 18px;\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.date,\n.name {\n  color: rgb(198, 96, 212);\n  font-weight: bold;\n  padding: 10px;\n  border: 0.1px solid lightgray;\n  border-radius: 0 50px 50px 0;\n}\n\n.comemt {\n  color: rgba(48, 46, 46, 0.733);\n}\n\n.count--com {\n  font-size: 20px;\n  color: rgba(48, 46, 46, 0.733);\n  font-weight: bold;\n}\n\n.pop--put {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.pop--put .error {\n  width: 30%;\n  padding: 6px;\n  margin-bottom: -19px;\n  color: green;\n  padding-left: 10px;\n  border: 1px solid rgb(11, 238, 11);\n  background-color: rgba(201, 241, 201, 0.925);\n}\n\n.pop--put h3 {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 20px;\n  padding: 14px;\n}\n\n.pop--put input {\n  width: 30%;\n  font-size: 16px;\n  color: #000;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n}\n\n.pop--put .insight {\n  height: 90px;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.pop--put button {\n  color: rgba(48, 46, 46, 0.733);\n  font-size: 15px;\n  background-color: #fff;\n  border: 1px solid lightgray;\n  border-radius: 0  50px 50px 0;\n  width: 13%;\n  padding: 8px;\n  transform: translateX(-5rem);\n}\n\n.pop--put button:hover {\n  background-color: rgba(178, 84, 190, 0.719);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/card_like.js":
/*!**************************!*\
  !*** ./src/card_like.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "postLike": () => (/* binding */ postLike),
/* harmony export */   "likesFunction": () => (/* binding */ likesFunction)
/* harmony export */ });
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const likesUrl = '/apps/Tl04OrbFyu6fxKeYxZ5Q/likes';

const getLikes = async () => {
  const response = await fetch(`${involvementApi}${likesUrl}`);
  const likes = await response.json();
  return likes;
};

const postLike = async (id, number) => {
  const response = await fetch(`${involvementApi}${likesUrl}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
        likes: number,
      }),
    });

  const result = await response.text();
  return result;
};

const likesFunction = (like) => like + 1;


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
/* harmony import */ var _set_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_api.js */ "./src/set_api.js");
/* harmony import */ var _card_like_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card_like.js */ "./src/card_like.js");





const renderTech = async (technologies) => {
  const ul = document.querySelector('.vission-tech');
  ul.innerHTML = '';
  const totalTechnologies = document.querySelector('.total');
  const slicedTechnologies = technologies.slice(0, 9);
  totalTechnologies.innerHTML += `[ ${slicedTechnologies.length} ]`;
  const listOfLikes = await (0,_card_like_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();
  slicedTechnologies.forEach((tech) => {
    const cardDiv = document.createElement('div');
    const clickedItem = listOfLikes.find((e) => tech.id === +e.item_id);
    let count = clickedItem?.likes || 0;
    cardDiv.innerHTML = `<li id="${tech.id}" class="bg-white w100 d-flex-2">
    <div class="w100 d-flex-2">
    <div class="li-images"><img class="img" src="${tech.imageUrl}"></div>
    <div class="body space-between w100 d-flex-2">
    <h3 class="ff-4 mr-ii">${tech.title.length < 50 ? tech.title : `${tech.title.substring(0, 50)}....`}</h3>
    <p class="des ff-4 mr-ii">${tech.summary.length < 100 ? tech.summary : `${tech.summary.substring(0, 100)}...`}</p>
    <div class="like ff-4 flex gap">
    <i id="${tech.id}" class="far fa-heart like-heart"></i>
    <span id="${tech.id}" class="likes-counter">${count} Likes</span>
    </div>
    <div class="btn-container mr-ii">
    <button data-id="${tech.id}" type="button" class="ff-4 card-btn btn comments color-white">comments</button>
    </div>
    </div>
    </div>
    </li>`;

    const heartIcon = cardDiv.querySelector('.like-heart');
    heartIcon.addEventListener('click', async () => {
      const likeCounter = cardDiv.querySelector('.likes-counter');
      // add likes fucntion here
      count = (0,_card_like_js__WEBPACK_IMPORTED_MODULE_2__.likesFunction)(count);
      await (0,_card_like_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(heartIcon.id, count);
      likeCounter.innerHTML = `${count} Likes`;
    });
    ul.appendChild(cardDiv);
  });

  document.querySelectorAll('.card-btn').forEach((cardBtn, i) => {
    cardBtn.addEventListener('click', async () => {
      const popupContainer = document.querySelector('.pop--container');
      popupContainer.classList.add('active');
      (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(technologies[i]);

      const tech = await (0,_set_api_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(technologies[i].id);
      (0,_set_api_js__WEBPACK_IMPORTED_MODULE_1__.ShowComment)(tech);
      (0,_set_api_js__WEBPACK_IMPORTED_MODULE_1__.CommentCounter)(tech);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTech);


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
/* harmony import */ var _set_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_api.js */ "./src/set_api.js");


const newDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

const createPopup = (object) => {
  const popupCard = document.createElement('li');
  const container = document.querySelector('.pop--container');
  container.innerHTML = '';
  popupCard.classList.add('popup--card');
  popupCard.id = object.id;
  popupCard.innerHTML = `
    <p id="close"><i class="fas fa-times assets-color"></i></p>
    <div class="pop--img">
      <img src="${object.imageUrl}" alt="image_1">
    </div>
    <h3 class="pop--tit">${object.title}</h3>
    <p class="pop--des">${object.summary}</p><hr>
    <div class="see--comment">
      <p class="count--com"></p>
      <div id="comm-div">
        <p class="no_comment"></p>
      </div>
    </div><hr>
    <div class="pop--put">
      <h3>Leave a Comment !</h3>
      <p class="error" >display error</p>
      <input id="usernameInput" type="text" placeholder="Inter your name" maxlength="15">
      <input id="commentInput" class="insight" type="text" placeholder="Enter your insigths">
      <button id="btn" type="button">Comment</button>
    </div>
    `;
  container.appendChild(popupCard);

  const closeButtons = document.querySelector('#close');
  closeButtons.addEventListener('click', () => {
    document.querySelector('.pop--container.active').classList.remove('active');
  });

  const SubmitButton = document.getElementById('btn');
  const usernameInput = document.getElementById('usernameInput');
  const commentInput = document.getElementById('commentInput');
  const divComPar = document.getElementById('comm-div');
  const commentPar = document.querySelector('.no_comment');

  SubmitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    await (0,_set_api_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(object.id, usernameInput.value, commentInput.value);
    const result = await (0,_set_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(object.id);

    const CounterCom = document.querySelector('.count--com');
    CounterCom.innerHTML = `Comments (${result.length})`;

    if (commentPar.innerHTML === 'No comment found !') {
      commentPar.innerHTML = '';
    }
    divComPar.innerHTML += `<p> <span class="date"> ${newDate()} </span> <span class="name"> ${usernameInput.value.trim()} </span> <span class="comment"> ${commentInput.value} </span></p> `;
  });
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
/* harmony export */   "getTechs": () => (/* binding */ getTechs),
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "ShowComment": () => (/* binding */ ShowComment),
/* harmony export */   "CommentCounter": () => (/* binding */ CommentCounter),
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/articles';
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const commentsUrl = '/apps/Tl04OrbFyu6fxKeYxZ5Q/comments';

const getTechs = async () => {
  const response = await fetch(`${BASE_URL}`);
  return response.json();
};

const addComment = async (id, user, comment) => {
  await fetch(`${involvementApi}${commentsUrl}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username: user,
        comment,
      }),
    });
};

const ShowComment = (comment) => {
  if (!comment.length) {
    const commentPar = document.querySelector('.no_comment');
    commentPar.innerHTML = 'No comment found !';
  } else {
    const divComPar = document.getElementById('comm-div');
    comment.forEach((comment) => {
      divComPar.innerHTML += `<p> <span class="date">${comment.creation_date}</span> <span class="name">${comment.username}</span> <span class="comment"> ${comment.comment}</span></p>`;
    });
  }
};

const CommentCounter = (comment) => {
  if (comment.length) {
    const CounterCom = document.querySelector('.count--com');
    CounterCom.innerHTML += `Comments (${comment.length})`;
  }
};

const getComments = async (incomingItemId) => {
  const request = await fetch(`${involvementApi}${commentsUrl}?item_id=${incomingItemId}`);
  const tech = await request.json();
  return tech;
};


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
/* harmony import */ var _homeRender_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeRender.js */ "./src/homeRender.js");








const icon1 = document.querySelector('.img-icon1');
const icon2 = document.querySelector('.img-icon2');

icon1.innerHTML += `<img class="jos-ziee" src="${_assets_jos_jpeg__WEBPACK_IMPORTED_MODULE_3__}" alt="zieeco">`;
icon2.innerHTML += `<img class="jos-ziee" src="${_assets_zieeco_jpeg__WEBPACK_IMPORTED_MODULE_4__}" alt="jos">`;

window.addEventListener('load', async () => {
  const techs = await (0,_set_api_js__WEBPACK_IMPORTED_MODULE_5__.getTechs)();
  (0,_homeRender_js__WEBPACK_IMPORTED_MODULE_6__["default"])(techs);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGVBQWUsY0FBYyxHQUFHLHVHQUF1RyxtQkFBbUIsR0FBRyxZQUFZLGlCQUFpQixrQ0FBa0MscUJBQXFCLEdBQUcsa0JBQWtCLG9CQUFvQixpQkFBaUIsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsaUJBQWlCLHFCQUFxQiwwQkFBMEIsbUJBQW1CLEdBQUcsU0FBUyxvRkFBb0YsVUFBVSxVQUFVLE1BQU0sZUFBZSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLFlBQVksV0FBVyw2QkFBNkIsZUFBZSxjQUFjLEdBQUcsdUdBQXVHLG1CQUFtQixHQUFHLFlBQVksaUJBQWlCLGtDQUFrQyxxQkFBcUIsR0FBRyxrQkFBa0Isb0JBQW9CLGlCQUFpQixHQUFHLG1CQUFtQixpQkFBaUIsR0FBRyxpQkFBaUIscUJBQXFCLDBCQUEwQixtQkFBbUIsR0FBRyxxQkFBcUI7QUFDeHRDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCx1QkFBdUIsMkJBQTJCLDZCQUE2QixzQkFBc0Isd0JBQXdCLDRCQUE0QiwwQkFBMEIsdUJBQXVCLHdCQUF3Qix3QkFBd0IsR0FBRyw4QkFBOEIsZUFBZSxjQUFjLDJCQUEyQixHQUFHLE9BQU8sMENBQTBDLEdBQUcsVUFBVSx1QkFBdUIsd0JBQXdCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLDBFQUEwRSxHQUFHLGVBQWUsZ0NBQWdDLEdBQUcsa0JBQWtCLDhCQUE4QixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsV0FBVyxpQkFBaUIsR0FBRyxVQUFVLGtCQUFrQixHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsV0FBVyxnQkFBZ0IsR0FBRyxxQkFBcUIsZ0NBQWdDLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLDJCQUEyQixHQUFHLFdBQVcsMENBQTBDLEdBQUcsVUFBVSxzQkFBc0IsR0FBRyxZQUFZLHdCQUF3QixHQUFHLFdBQVcsdUNBQXVDLEdBQUcsV0FBVywrQ0FBK0MsR0FBRyxXQUFXLDBPQUEwTyx3QkFBd0IsR0FBRyxnQkFBZ0IsZ0JBQWdCLGtCQUFrQixHQUFHLFVBQVUsZ0JBQWdCLGlCQUFpQixpQ0FBaUMsbUNBQW1DLEdBQUcsZUFBZSxnQkFBZ0IsaUJBQWlCLEdBQUcsZUFBZSxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLEdBQUcscUJBQXFCLHdDQUF3QyxHQUFHLHFCQUFxQiwwQkFBMEIsR0FBRyxVQUFVLHNCQUFzQix5QkFBeUIsR0FBRyxXQUFXLHNCQUFzQix1QkFBdUIsR0FBRyxZQUFZLG9CQUFvQixXQUFXLGNBQWMsWUFBWSxhQUFhLGlCQUFpQix3QkFBd0IsZUFBZSxHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLG1CQUFtQix1RUFBdUUseUJBQXlCLDBCQUEwQiwyQkFBMkIsR0FBRyw4QkFBOEIsMEJBQTBCLCtCQUErQixHQUFHLDJCQUEyQixzQkFBc0IsdUJBQXVCLEdBQUcsNEJBQTRCLG9CQUFvQixvQ0FBb0MsdUJBQXVCLEdBQUcsVUFBVSxzQkFBc0IsdUJBQXVCLDhCQUE4Qiw0QkFBNEIscUJBQXFCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLDhCQUE4QixHQUFHLGdCQUFnQixrQ0FBa0MsR0FBRyx3QkFBd0IsdUJBQXVCLGVBQWUsc0JBQXNCLHVCQUF1QixHQUFHLGtDQUFrQyx1QkFBdUIsc0JBQXNCLHVCQUF1Qiw4QkFBOEIseUJBQXlCLEdBQUcsbUNBQW1DLG1DQUFtQyx3QkFBd0IsMEJBQTBCLEdBQUcsaUNBQWlDLHNCQUFzQixzQkFBc0IsZUFBZSxHQUFHLG9DQUFvQyx3QkFBd0IsbUNBQW1DLEdBQUcsV0FBVyxtQ0FBbUMsR0FBRyw4QkFBOEIsb0JBQW9CLHdCQUF3QixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsMkJBQTJCLGtCQUFrQixnQ0FBZ0MsNkJBQTZCLHlCQUF5QixzQkFBc0IsNEJBQTRCLHNCQUFzQix1QkFBdUIsR0FBRyxxQ0FBcUMsNkNBQTZDLG1CQUFtQix1QkFBdUIscUJBQXFCLHNCQUFzQixvQkFBb0IsaUJBQWlCLEdBQUcsZUFBZSxpQkFBaUIsa0JBQWtCLDBCQUEwQix3QkFBd0IsR0FBRyx3Q0FBd0Msb0JBQW9CLHNCQUFzQixnQ0FBZ0Msc0JBQXNCLEdBQUcsWUFBWSx1QkFBdUIsMEJBQTBCLEdBQUcsVUFBVSxjQUFjLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLGlFQUFpRSxrQ0FBa0MsR0FBRywrQkFBK0Isc0JBQXNCLHVCQUF1QixHQUFHLDJDQUEyQyxrQkFBa0Isb0JBQW9CLDJCQUEyQixhQUFhLGNBQWMsY0FBYyxnQkFBZ0Isa0JBQWtCLGtCQUFrQixrQkFBa0IsZ0JBQWdCLHVCQUF1QixzQ0FBc0MsdUJBQXVCLDJCQUEyQiw4Q0FBOEMsa0NBQWtDLDBMQUEwTCxHQUFHLDRCQUE0Qiw4Q0FBOEMsY0FBYyx1QkFBdUIsdUJBQXVCLEdBQUcsZ0JBQWdCLG9CQUFvQixXQUFXLFlBQVksYUFBYSxjQUFjLGVBQWUseUJBQXlCLGtDQUFrQyxpREFBaUQsR0FBRyx1QkFBdUIsZUFBZSx5QkFBeUIsR0FBRyxZQUFZLGVBQWUsdUJBQXVCLGNBQWMsa0JBQWtCLGVBQWUsc0JBQXNCLG9CQUFvQiw4QkFBOEIsd0JBQXdCLEdBQUcsY0FBYyxrQkFBa0Isd0JBQXdCLG9CQUFvQixHQUFHLG9CQUFvQixlQUFlLEdBQUcsZUFBZSx5Q0FBeUMsdUJBQXVCLGlCQUFpQixrQkFBa0Isc0JBQXNCLEdBQUcsbUJBQW1CLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsZUFBZSxvQkFBb0IsbUNBQW1DLHNCQUFzQixHQUFHLGVBQWUsbUNBQW1DLG9CQUFvQixrQkFBa0IsR0FBRyxtQkFBbUIsdUJBQXVCLEdBQUcsdUJBQXVCLGtCQUFrQixjQUFjLG9CQUFvQixtQ0FBbUMsR0FBRyxtQkFBbUIsNkJBQTZCLHNCQUFzQixvQkFBb0Isa0NBQWtDLGlDQUFpQyxHQUFHLGFBQWEsbUNBQW1DLEdBQUcsaUJBQWlCLG9CQUFvQixtQ0FBbUMsc0JBQXNCLEdBQUcsZUFBZSxrQkFBa0IsY0FBYywyQkFBMkIsNEJBQTRCLHVCQUF1Qix3QkFBd0IsR0FBRyxzQkFBc0IsZUFBZSxpQkFBaUIseUJBQXlCLGlCQUFpQix1QkFBdUIsdUNBQXVDLGlEQUFpRCxHQUFHLCtFQUErRSxtQ0FBbUMsb0JBQW9CLGtCQUFrQixHQUFHLHFCQUFxQixlQUFlLG9CQUFvQixnQkFBZ0Isa0JBQWtCLGdDQUFnQyx1QkFBdUIsR0FBRyx3QkFBd0IsaUJBQWlCLGdDQUFnQyx1QkFBdUIsR0FBRyxvQkFBb0IsbUNBQW1DLEdBQUcsc0JBQXNCLG1DQUFtQyxvQkFBb0IsMkJBQTJCLGdDQUFnQyxrQ0FBa0MsZUFBZSxpQkFBaUIsaUNBQWlDLEdBQUcsNEJBQTRCLGdEQUFnRCxHQUFHLDBDQUEwQywyQkFBMkIsdURBQXVELG9EQUFvRCx3QkFBd0IsS0FBSyx1Q0FBdUMsbUJBQW1CLEtBQUssYUFBYSxvQkFBb0IsZ0NBQWdDLDBCQUEwQixLQUFLLGVBQWUsZ0JBQWdCLEtBQUssOEJBQThCLHVCQUF1QixLQUFLLDZCQUE2Qix3QkFBd0IseUJBQXlCLEtBQUssZ0NBQWdDLDRCQUE0QixLQUFLLEdBQUcsMkNBQTJDLHFDQUFxQyxtQkFBbUIsS0FBSyxHQUFHLFNBQVMsb0ZBQW9GLFlBQVksYUFBYSxhQUFhLGNBQWMsY0FBYyxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGVBQWUsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUss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Qzs7QUFFekM7QUFDQTs7QUFFQSxpREFBaUQsNkNBQUMsQ0FBQztBQUNuRCxpREFBaUQsZ0RBQUMsQ0FBQzs7QUFFbkQ7QUFDQSxzQkFBc0IscURBQVE7QUFDOUIsRUFBRSwwREFBVTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL2Nzcy9yZXNldC5jc3M/MTUyYiIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9jYXJkX2xpa2UuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9ob21lUmVuZGVyLmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvcG9wdXBfY29tbWVudC5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL3NldF9hcGkuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxudWwsXFxubGksXFxuYSB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7Ozs7Ozs7Ozs7O0NBV0MsY0FBYztBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7Q0FHQyxnQkFBZ0I7RUFDZixxQkFBcUI7RUFDckIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbnVsLFxcbmxpLFxcbmEge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjNjE2N2YyO1xcbiAgLS1wcmltYXJ5LXR4dDogIzFmMjkzNztcXG4gIC0tc2Vjb25kYXJ5LXR4dDogIzFmMjkzNztcXG4gIC0tcHJpLWJkOiAjYmM2Y2U5O1xcblxcbiAgLyogLS10ZXJ0aWFyeTogIzsgKi9cXG5cXG4gIC8qIC0tYmFja2dyb3VuZDogIzsgKi9cXG5cXG4gIC8qIC0tZGFyay10ZXh0OiA7ICovXFxuICAtLWJnLXdoaXRlOiAjZmZmO1xcbiAgLS1jb2xvci13aGl0ZTogI2ZmZjtcXG4gIC0tY29sb3ItYmxhY2s6ICMwMDA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSAyNTUgMjU1KSwgcmdiKDIwOSAyMTMgMjE5KSk7XFxufVxcblxcbi5iZy13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSk7XFxufVxcblxcbi5jb2xvci13aGl0ZSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubXItMSB7XFxuICBtYXJnaW46IDI0cHg7XFxufVxcblxcbi5wZDAge1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRleHQtanVzdGlmeSB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4udzEwMCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbG9yLXNlYy10ZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0KTtcXG59XFxuXFxuLmQtZmxleC0yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZmLTEge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZ3YiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1iLXNtIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5mZi0yIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9pcmV0IE9uZScsIGN1cnNpdmU7XFxufVxcblxcbi5mZi0zIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcXG59XFxuXFxuLmZmLTQge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIC1hcHBsZS1zeXN0ZW0sXFxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgXFxcIlJvYm90b1xcXCIsXFxuICAgIFxcXCJPeHlnZW5cXFwiLFxcbiAgICBcXFwiVWJ1bnR1XFxcIixcXG4gICAgXFxcIkNhbnRhcmVsbFxcXCIsXFxuICAgIFxcXCJGaXJhIFNhbnNcXFwiLFxcbiAgICBcXFwiRHJvaWQgU2Fuc1xcXCIsXFxuICAgIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ubGktaW1hZ2VzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMiU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMiU7XFxufVxcblxcbi5pbWctaWNvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmpvcy16aWVlIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5qb3MtemllZTpob3ZlciB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBoc2xhKDI1OSA5NCUgNTElKTtcXG59XFxuXFxuLmNvbG9yLXByaS10ZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnZpcyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS44NzU0cmVtO1xcbn1cXG5cXG4udGVjaCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG5oZWFkZXIgLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbm1haW4ge1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuXFxuc2VjdGlvbi5pbnRybyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsKDI1OSA5NCUgNTElKSwgaHNsKDMxNCAxMDAlIDQ3LjElKSk7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XFxufVxcblxcbnNlY3Rpb24uaW50cm8gLmludHJvLWRpdiB7XFxuICBwYWRkaW5nLXRvcDogMy4xMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTAuMTI1NHJlbTtcXG59XFxuXFxuc2VjdGlvbi5pbnRybyBoMiBzcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzLjI1cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmludHJvIC52aXNzaW9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaS1iZCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5idG4ge1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDI1OSA5NCUgNTElKTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIHtcXG4gIG1hcmdpbi10b3A6IC0xMXJlbTtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC5jb250ZW50cyB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ1ZDg7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC5jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW0gMC43NXJlbTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50aGFtIGgzIHtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogODklO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLmNvbXBvbmVudHMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJiLTIge1xcbiAgYmFja2dyb3VuZDogcmdiKDIyOSwgMTUxLCAyMzEpO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRoYW0ge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gIGdyaWQtcm93LWdhcDogOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyB1bCBsaSB7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2IoMCAwIDAgLyA2MCUpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTdyZW07XFxufVxcblxcbi5ib2R5ID4gcCB7XFxuICBoZWlnaHQ6IDhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyB1bCBsaSBoMyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubXItaWkge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZ2FwIHtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyAubGlrZSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBjb21tZW50IGJ1dHRvbiAqL1xcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgLmNvbW1lbnRzIHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMjU5IDk0JSA1MSUpO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBwb3B1cCBzdHlsaW5nICAqL1xcbi5wb3AtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgei1pbmRleDogNDA7XFxuICB3aWR0aDogMTAwMHB4O1xcbiAgaGVpZ2h0OiA2NTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MCwgODksIDg5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgLTJweCAtMnB4IDEwcHggMCByZ2JhKDI0MywgMjQzLCAyNDIsIDAuNiksXFxuICAgIC0ycHggLTJweCA1cHggMCAjNzA2ZjcyOTksXFxuICAgIDdweCA3cHggMTBweCAwIHJnYmEoNzcsIDE2MSwgNzcsIDAuMTMzKSxcXG4gICAgNHB4IDRweCA1cHggMCByZ2JhKDE3OSwgNjksIDY5LCAwLjgwMSk7XFxufVxcblxcbi5wb3AtLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5vdmVyLS1sYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTA0KTtcXG59XFxuXFxuLm92ZXItLWxheS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTRweDtcXG4gIHJpZ2h0OiAtMTUwcHg7XFxuICB3aWR0aDogNDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDEyOSwgMTI3LCAxMjcpO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuI2Nsb3NlIGkge1xcbiAgcGFkZGluZzogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDI5cHg7XFxufVxcblxcbiNjbG9zZSBpOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5wb3AtLWltZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQzLCAxNDAsIDE0MCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogODUwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgbWFyZ2luOiAyNXB4IGF1dG87XFxufVxcblxcbi5wb3AtLWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wb3AtLXRpdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBwYWRkaW5nOiA1cHggMTRweDtcXG59XFxuXFxuLnBvcC0tZGVzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5zZWUtLWNvbW1lbnQge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uc2VlLS1jb21tZW50IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uZGF0ZSxcXG4ubmFtZSB7XFxuICBjb2xvcjogcmdiKDE5OCwgOTYsIDIxMik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGJvcmRlcjogMC4xcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcXG59XFxuXFxuLmNvbWVtdCB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxufVxcblxcbi5jb3VudC0tY29tIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9wLS1wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtLXB1dCAuZXJyb3Ige1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xOXB4O1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExLCAyMzgsIDExKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAyNDEsIDIwMSwgMC45MjUpO1xcbn1cXG5cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcbi5wb3AtLXB1dCBoMyB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4ucG9wLS1wdXQgaW5wdXQge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnBvcC0tcHV0IC5pbnNpZ2h0IHtcXG4gIGhlaWdodDogOTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnNwYWNlLWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAwICA1MHB4IDUwcHggMDtcXG4gIHdpZHRoOiAxMyU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVyZW0pO1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LCA4NCwgMTkwLCAwLjcxOSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICBzZWN0aW9uLnRlY2gtdmlld3MgdWwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB9XFxuXFxuICBzZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIHtcXG4gICAgd2lkdGg6IDE5cmVtO1xcbiAgfVxcblxcbiAgLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmdhcC1iZyB7XFxuICAgIGdhcDogMThweDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uaW50cm8gLnZpc3Npb24ge1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgfVxcblxcbiAgc2VjdGlvbi5pbnRybyBoMiBzcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uaW50cm8gLmludHJvLWRpdiB7XFxuICAgIHBhZGRpbmctdG9wOiA1LjEyNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICBzZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIHtcXG4gICAgd2lkdGg6IDI0cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjs7RUFFakIsbUJBQW1COztFQUVuQixxQkFBcUI7O0VBRXJCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFFQUFxRTtBQUN2RTs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7Ozs7Ozs7Ozs7O2NBV1k7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Us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QUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsNENBQTRDO0FBQzlDOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRTtJQUNFLGdEQUFnRDtJQUNoRCw2Q0FBNkM7SUFDN0MsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeTogIzYxNjdmMjtcXG4gIC0tcHJpbWFyeS10eHQ6ICMxZjI5Mzc7XFxuICAtLXNlY29uZGFyeS10eHQ6ICMxZjI5Mzc7XFxuICAtLXByaS1iZDogI2JjNmNlOTtcXG5cXG4gIC8qIC0tdGVydGlhcnk6ICM7ICovXFxuXFxuICAvKiAtLWJhY2tncm91bmQ6ICM7ICovXFxuXFxuICAvKiAtLWRhcmstdGV4dDogOyAqL1xcbiAgLS1iZy13aGl0ZTogI2ZmZjtcXG4gIC0tY29sb3Itd2hpdGU6ICNmZmY7XFxuICAtLWNvbG9yLWJsYWNrOiAjMDAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyNTUgMjU1IDI1NSksIHJnYigyMDkgMjEzIDIxOSkpO1xcbn1cXG5cXG4uYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUpO1xcbn1cXG5cXG4uY29sb3Itd2hpdGUge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1yLTEge1xcbiAgbWFyZ2luOiAyNHB4O1xcbn1cXG5cXG4ucGQwIHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LWp1c3RpZnkge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLncxMDAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2xvci1zZWMtdGV4dCB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dCk7XFxufVxcblxcbi5kLWZsZXgtMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mZi0xIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5md2Ige1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYi1zbSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZmYtMiB7XFxuICBmb250LWZhbWlseTogJ1BvaXJldCBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG4uZmYtMyB7XFxuICBmb250LWZhbWlseTogJ1NoYWRvd3MgSW50byBMaWdodCcsIGN1cnNpdmU7XFxufVxcblxcbi5mZi00IHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICAtYXBwbGUtc3lzdGVtLFxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFxcXCJSb2JvdG9cXFwiLFxcbiAgICBcXFwiT3h5Z2VuXFxcIixcXG4gICAgXFxcIlVidW50dVxcXCIsXFxuICAgIFxcXCJDYW50YXJlbGxcXFwiLFxcbiAgICBcXFwiRmlyYSBTYW5zXFxcIixcXG4gICAgXFxcIkRyb2lkIFNhbnNcXFwiLFxcbiAgICBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmxpLWltYWdlcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTIlO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTIlO1xcbn1cXG5cXG4uaW1nLWljb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5qb3MtemllZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uam9zLXppZWU6aG92ZXIge1xcbiAgYm9yZGVyOiAzcHggc29saWQgaHNsYSgyNTkgOTQlIDUxJSk7XFxufVxcblxcbi5jb2xvci1wcmktdGV4dCB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi52aXMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuODc1NHJlbTtcXG59XFxuXFxuLnRlY2gge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuaGVhZGVyIC5jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxufVxcblxcbnNlY3Rpb24uaW50cm8ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgyNTkgOTQlIDUxJSksIGhzbCgzMTQgMTAwJSA0Ny4xJSkpO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmludHJvIC5pbnRyby1kaXYge1xcbiAgcGFkZGluZy10b3A6IDMuMTI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEwLjEyNTRyZW07XFxufVxcblxcbnNlY3Rpb24uaW50cm8gaDIgc3BhbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMy4yNXJlbTtcXG59XFxuXFxuc2VjdGlvbi5pbnRybyAudmlzc2lvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmktYmQpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogaHNsYSgyNTkgOTQlIDUxJSk7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyB7XFxuICBtYXJnaW4tdG9wOiAtMTFyZW07XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAuY29udGVudHMge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkNWQ4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAuY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtIDAuNzVyZW07XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGhhbSBoMyB7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDg5JTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC5jb21wb25lbnRzIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5iYi0yIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMjksIDE1MSwgMjMxKTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50aGFtIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBncmlkLXJvdy1nYXA6IDhweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgdWwgbGkge1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiKDAgMCAwIC8gNjAlKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDE3cmVtO1xcbn1cXG5cXG4uYm9keSA+IHAge1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgdWwgbGkgaDMge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1yLWlpIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmdhcCB7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgLmxpa2Uge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogY29tbWVudCBidXR0b24gKi9cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIC5jb21tZW50cyB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDI1OSA5NCUgNTElKTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLyogcG9wdXAgc3R5bGluZyAgKi9cXG4ucG9wLS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHotaW5kZXg6IDQwO1xcbiAgd2lkdGg6IDEwMDBweDtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTAsIDg5LCA4OSk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6XFxuICAgIC0ycHggLTJweCAxMHB4IDAgcmdiYSgyNDMsIDI0MywgMjQyLCAwLjYpLFxcbiAgICAtMnB4IC0ycHggNXB4IDAgIzcwNmY3Mjk5LFxcbiAgICA3cHggN3B4IDEwcHggMCByZ2JhKDc3LCAxNjEsIDc3LCAwLjEzMyksXFxuICAgIDRweCA0cHggNXB4IDAgcmdiYSgxNzksIDY5LCA2OSwgMC44MDEpO1xcbn1cXG5cXG4ucG9wLS1jb250YWluZXIuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4ub3Zlci0tbGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkwNCk7XFxufVxcblxcbi5vdmVyLS1sYXkuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2Nsb3NlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC00cHg7XFxuICByaWdodDogLTE1MHB4O1xcbiAgd2lkdGg6IDQwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYigxMjksIDEyNywgMTI3KTtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbiNjbG9zZSBpIHtcXG4gIHBhZGRpbmc6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAyOXB4O1xcbn1cXG5cXG4jY2xvc2UgaTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ucG9wLS1pbWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0MywgMTQwLCAxNDApO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDg1MHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG1hcmdpbjogMjVweCBhdXRvO1xcbn1cXG5cXG4ucG9wLS1pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucG9wLS10aXQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgcGFkZGluZzogNXB4IDE0cHg7XFxufVxcblxcbi5wb3AtLWRlcyB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4uc2VlLS1jb21tZW50IHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLnNlZS0tY29tbWVudCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG59XFxuXFxuLmRhdGUsXFxuLm5hbWUge1xcbiAgY29sb3I6IHJnYigxOTgsIDk2LCAyMTIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXI6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XFxufVxcblxcbi5jb21lbXQge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uY291bnQtLWNvbSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBvcC0tcHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLS1wdXQgLmVycm9yIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMSwgMjM4LCAxMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMjQxLCAyMDEsIDAuOTI1KTtcXG59XFxuXFxuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXG4ucG9wLS1wdXQgaDMge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMTRweDtcXG59XFxuXFxuLnBvcC0tcHV0IGlucHV0IHtcXG4gIHdpZHRoOiAzMCU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5wb3AtLXB1dCAuaW5zaWdodCB7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5zcGFjZS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBvcC0tcHV0IGJ1dHRvbiB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMCAgNTBweCA1MHB4IDA7XFxuICB3aWR0aDogMTMlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cmVtKTtcXG59XFxuXFxuLnBvcC0tcHV0IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OCwgODQsIDE5MCwgMC43MTkpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgc2VjdGlvbi50ZWNoLXZpZXdzIHVsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgfVxcblxcbiAgc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyB1bCBsaSB7XFxuICAgIHdpZHRoOiAxOXJlbTtcXG4gIH1cXG5cXG4gIC5zaG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5nYXAtYmcge1xcbiAgICBnYXA6IDE4cHg7XFxuICB9XFxuXFxuICBzZWN0aW9uLmludHJvIC52aXNzaW9uIHtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uaW50cm8gaDIgc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDYuMjVyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uLmludHJvIC5pbnRyby1kaXYge1xcbiAgICBwYWRkaW5nLXRvcDogNS4xMjVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyB1bCBsaSB7XFxuICAgIHdpZHRoOiAyNHJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnBvcC0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW46IDA7XFxuICB6LWluZGV4OiA0MDtcXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBoZWlnaHQ6IDY1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDkwLCA4OSwgODkpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OlxcbiAgICAtMnB4IC0ycHggMTBweCAwIHJnYmEoMjQzLCAyNDMsIDI0MiwgMC42KSxcXG4gICAgLTJweCAtMnB4IDVweCAwICM3MDZmNzI5OSxcXG4gICAgN3B4IDdweCAxMHB4IDAgcmdiYSg3NywgMTYxLCA3NywgMC4xMzMpLFxcbiAgICA0cHggNHB4IDVweCAwIHJnYmEoMTc5LCA2OSwgNjksIDAuODAxKTtcXG59XFxuXFxuLnBvcC0tY29udGFpbmVyLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLm92ZXItLWxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45MDQpO1xcbn1cXG5cXG4ub3Zlci0tbGF5LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNjbG9zZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTI5LCAxMjcsIDEyNyk7XFxufVxcblxcbi5wb3AtLWltZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogODUwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbi5wb3AtLXRpdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBwYWRkaW5nOiA1cHggMTRweDtcXG59XFxuXFxuLnBvcC0tZGVzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5zZWUtLWNvbW1lbnQge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uc2VlLS1jb21tZW50IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMnJlbSk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uZGF0ZSxcXG4ubmFtZSB7XFxuICBjb2xvcjogcmdiKDE5OCwgOTYsIDIxMik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XFxufVxcblxcbi5jb21lbXQge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uY291bnQtLWNvbSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBvcC0tcHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLS1wdXQgLmVycm9yIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMSwgMjM4LCAxMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMjQxLCAyMDEsIDAuOTI1KTtcXG59XFxuXFxuLnBvcC0tcHV0IGgzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5wb3AtLXB1dCBpbnB1dCB7XFxuICB3aWR0aDogMzAlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucG9wLS1wdXQgLmluc2lnaHQge1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAwICA1MHB4IDUwcHggMDtcXG4gIHdpZHRoOiAxMyU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVyZW0pO1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LCA4NCwgMTkwLCAwLjcxOSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6Qyw2QkFBNkI7RUFDN0I7Ozs7MENBSXdDO0FBQzFDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucG9wLS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHotaW5kZXg6IDQwO1xcbiAgd2lkdGg6IDEwMDBweDtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTAsIDg5LCA4OSk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6XFxuICAgIC0ycHggLTJweCAxMHB4IDAgcmdiYSgyNDMsIDI0MywgMjQyLCAwLjYpLFxcbiAgICAtMnB4IC0ycHggNXB4IDAgIzcwNmY3Mjk5LFxcbiAgICA3cHggN3B4IDEwcHggMCByZ2JhKDc3LCAxNjEsIDc3LCAwLjEzMyksXFxuICAgIDRweCA0cHggNXB4IDAgcmdiYSgxNzksIDY5LCA2OSwgMC44MDEpO1xcbn1cXG5cXG4ucG9wLS1jb250YWluZXIuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ub3Zlci0tbGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkwNCk7XFxufVxcblxcbi5vdmVyLS1sYXkuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2Nsb3NlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYigxMjksIDEyNywgMTI3KTtcXG59XFxuXFxuLnBvcC0taW1nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiA4NTBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuXFxuLnBvcC0tdGl0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIHBhZGRpbmc6IDVweCAxNHB4O1xcbn1cXG5cXG4ucG9wLS1kZXMge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTRweDtcXG59XFxuXFxuLnNlZS0tY29tbWVudCB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5zZWUtLWNvbW1lbnQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIycmVtKTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxufVxcblxcbi5kYXRlLFxcbi5uYW1lIHtcXG4gIGNvbG9yOiByZ2IoMTk4LCA5NiwgMjEyKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMC4xcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcXG59XFxuXFxuLmNvbWVtdCB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxufVxcblxcbi5jb3VudC0tY29tIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9wLS1wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtLXB1dCAuZXJyb3Ige1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xOXB4O1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExLCAyMzgsIDExKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAyNDEsIDIwMSwgMC45MjUpO1xcbn1cXG5cXG4ucG9wLS1wdXQgaDMge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMTRweDtcXG59XFxuXFxuLnBvcC0tcHV0IGlucHV0IHtcXG4gIHdpZHRoOiAzMCU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5wb3AtLXB1dCAuaW5zaWdodCB7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5wb3AtLXB1dCBidXR0b24ge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgIDUwcHggNTBweCAwO1xcbiAgd2lkdGg6IDEzJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXJlbSk7XFxufVxcblxcbi5wb3AtLXB1dCBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzgsIDg0LCAxOTAsIDAuNzE5KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBpbnZvbHZlbWVudEFwaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xuY29uc3QgbGlrZXNVcmwgPSAnL2FwcHMvVGwwNE9yYkZ5dTZmeEtlWXhaNVEvbGlrZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7aW52b2x2ZW1lbnRBcGl9JHtsaWtlc1VybH1gKTtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBsaWtlcztcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0TGlrZSA9IGFzeW5jIChpZCwgbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7aW52b2x2ZW1lbnRBcGl9JHtsaWtlc1VybH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgICBsaWtlczogbnVtYmVyLFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpa2VzRnVuY3Rpb24gPSAobGlrZSkgPT4gbGlrZSArIDE7XG4iLCJpbXBvcnQgY3JlYXRlUG9wdXAgZnJvbSAnLi9wb3B1cF9jb21tZW50LmpzJztcbmltcG9ydCB7XG4gIGdldENvbW1lbnRzLFxuICBDb21tZW50Q291bnRlcixcbiAgU2hvd0NvbW1lbnQsXG59IGZyb20gJy4vc2V0X2FwaS5qcyc7XG5cbmltcG9ydCB7IGdldExpa2VzLCBwb3N0TGlrZSwgbGlrZXNGdW5jdGlvbiB9IGZyb20gJy4vY2FyZF9saWtlLmpzJztcblxuY29uc3QgcmVuZGVyVGVjaCA9IGFzeW5jICh0ZWNobm9sb2dpZXMpID0+IHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlzc2lvbi10ZWNoJyk7XG4gIHVsLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCB0b3RhbFRlY2hub2xvZ2llcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbCcpO1xuICBjb25zdCBzbGljZWRUZWNobm9sb2dpZXMgPSB0ZWNobm9sb2dpZXMuc2xpY2UoMCwgOSk7XG4gIHRvdGFsVGVjaG5vbG9naWVzLmlubmVySFRNTCArPSBgWyAke3NsaWNlZFRlY2hub2xvZ2llcy5sZW5ndGh9IF1gO1xuICBjb25zdCBsaXN0T2ZMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gIHNsaWNlZFRlY2hub2xvZ2llcy5mb3JFYWNoKCh0ZWNoKSA9PiB7XG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNsaWNrZWRJdGVtID0gbGlzdE9mTGlrZXMuZmluZCgoZSkgPT4gdGVjaC5pZCA9PT0gK2UuaXRlbV9pZCk7XG4gICAgbGV0IGNvdW50ID0gY2xpY2tlZEl0ZW0/Lmxpa2VzIHx8IDA7XG4gICAgY2FyZERpdi5pbm5lckhUTUwgPSBgPGxpIGlkPVwiJHt0ZWNoLmlkfVwiIGNsYXNzPVwiYmctd2hpdGUgdzEwMCBkLWZsZXgtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJ3MTAwIGQtZmxleC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cImxpLWltYWdlc1wiPjxpbWcgY2xhc3M9XCJpbWdcIiBzcmM9XCIke3RlY2guaW1hZ2VVcmx9XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJvZHkgc3BhY2UtYmV0d2VlbiB3MTAwIGQtZmxleC0yXCI+XG4gICAgPGgzIGNsYXNzPVwiZmYtNCBtci1paVwiPiR7dGVjaC50aXRsZS5sZW5ndGggPCA1MCA/IHRlY2gudGl0bGUgOiBgJHt0ZWNoLnRpdGxlLnN1YnN0cmluZygwLCA1MCl9Li4uLmB9PC9oMz5cbiAgICA8cCBjbGFzcz1cImRlcyBmZi00IG1yLWlpXCI+JHt0ZWNoLnN1bW1hcnkubGVuZ3RoIDwgMTAwID8gdGVjaC5zdW1tYXJ5IDogYCR7dGVjaC5zdW1tYXJ5LnN1YnN0cmluZygwLCAxMDApfS4uLmB9PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJsaWtlIGZmLTQgZmxleCBnYXBcIj5cbiAgICA8aSBpZD1cIiR7dGVjaC5pZH1cIiBjbGFzcz1cImZhciBmYS1oZWFydCBsaWtlLWhlYXJ0XCI+PC9pPlxuICAgIDxzcGFuIGlkPVwiJHt0ZWNoLmlkfVwiIGNsYXNzPVwibGlrZXMtY291bnRlclwiPiR7Y291bnR9IExpa2VzPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyIG1yLWlpXCI+XG4gICAgPGJ1dHRvbiBkYXRhLWlkPVwiJHt0ZWNoLmlkfVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZmLTQgY2FyZC1idG4gYnRuIGNvbW1lbnRzIGNvbG9yLXdoaXRlXCI+Y29tbWVudHM8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2xpPmA7XG5cbiAgICBjb25zdCBoZWFydEljb24gPSBjYXJkRGl2LnF1ZXJ5U2VsZWN0b3IoJy5saWtlLWhlYXJ0Jyk7XG4gICAgaGVhcnRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbGlrZUNvdW50ZXIgPSBjYXJkRGl2LnF1ZXJ5U2VsZWN0b3IoJy5saWtlcy1jb3VudGVyJyk7XG4gICAgICAvLyBhZGQgbGlrZXMgZnVjbnRpb24gaGVyZVxuICAgICAgY291bnQgPSBsaWtlc0Z1bmN0aW9uKGNvdW50KTtcbiAgICAgIGF3YWl0IHBvc3RMaWtlKGhlYXJ0SWNvbi5pZCwgY291bnQpO1xuICAgICAgbGlrZUNvdW50ZXIuaW5uZXJIVE1MID0gYCR7Y291bnR9IExpa2VzYDtcbiAgICB9KTtcbiAgICB1bC5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtYnRuJykuZm9yRWFjaCgoY2FyZEJ0biwgaSkgPT4ge1xuICAgIGNhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtLWNvbnRhaW5lcicpO1xuICAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBjcmVhdGVQb3B1cCh0ZWNobm9sb2dpZXNbaV0pO1xuXG4gICAgICBjb25zdCB0ZWNoID0gYXdhaXQgZ2V0Q29tbWVudHModGVjaG5vbG9naWVzW2ldLmlkKTtcbiAgICAgIFNob3dDb21tZW50KHRlY2gpO1xuICAgICAgQ29tbWVudENvdW50ZXIodGVjaCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVGVjaDtcbiIsImltcG9ydCB7IGFkZENvbW1lbnQsIGdldENvbW1lbnRzIH0gZnJvbSAnLi9zZXRfYXBpLmpzJztcblxuY29uc3QgbmV3RGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbn07XG5cbmNvbnN0IGNyZWF0ZVBvcHVwID0gKG9iamVjdCkgPT4ge1xuICBjb25zdCBwb3B1cENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLS1jb250YWluZXInKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBwb3B1cENhcmQuY2xhc3NMaXN0LmFkZCgncG9wdXAtLWNhcmQnKTtcbiAgcG9wdXBDYXJkLmlkID0gb2JqZWN0LmlkO1xuICBwb3B1cENhcmQuaW5uZXJIVE1MID0gYFxuICAgIDxwIGlkPVwiY2xvc2VcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lcyBhc3NldHMtY29sb3JcIj48L2k+PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJwb3AtLWltZ1wiPlxuICAgICAgPGltZyBzcmM9XCIke29iamVjdC5pbWFnZVVybH1cIiBhbHQ9XCJpbWFnZV8xXCI+XG4gICAgPC9kaXY+XG4gICAgPGgzIGNsYXNzPVwicG9wLS10aXRcIj4ke29iamVjdC50aXRsZX08L2gzPlxuICAgIDxwIGNsYXNzPVwicG9wLS1kZXNcIj4ke29iamVjdC5zdW1tYXJ5fTwvcD48aHI+XG4gICAgPGRpdiBjbGFzcz1cInNlZS0tY29tbWVudFwiPlxuICAgICAgPHAgY2xhc3M9XCJjb3VudC0tY29tXCI+PC9wPlxuICAgICAgPGRpdiBpZD1cImNvbW0tZGl2XCI+XG4gICAgICAgIDxwIGNsYXNzPVwibm9fY29tbWVudFwiPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pjxocj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLS1wdXRcIj5cbiAgICAgIDxoMz5MZWF2ZSBhIENvbW1lbnQgITwvaDM+XG4gICAgICA8cCBjbGFzcz1cImVycm9yXCIgPmRpc3BsYXkgZXJyb3I8L3A+XG4gICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZUlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkludGVyIHlvdXIgbmFtZVwiIG1heGxlbmd0aD1cIjE1XCI+XG4gICAgICA8aW5wdXQgaWQ9XCJjb21tZW50SW5wdXRcIiBjbGFzcz1cImluc2lnaHRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBpbnNpZ3Roc1wiPlxuICAgICAgPGJ1dHRvbiBpZD1cImJ0blwiIHR5cGU9XCJidXR0b25cIj5Db21tZW50PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwQ2FyZCk7XG5cbiAgY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XG4gIGNsb3NlQnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLS1jb250YWluZXIuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xuXG4gIGNvbnN0IFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKTtcbiAgY29uc3QgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZUlucHV0Jyk7XG4gIGNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50SW5wdXQnKTtcbiAgY29uc3QgZGl2Q29tUGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW0tZGl2Jyk7XG4gIGNvbnN0IGNvbW1lbnRQYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm9fY29tbWVudCcpO1xuXG4gIFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXdhaXQgYWRkQ29tbWVudChvYmplY3QuaWQsIHVzZXJuYW1lSW5wdXQudmFsdWUsIGNvbW1lbnRJbnB1dC52YWx1ZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0Q29tbWVudHMob2JqZWN0LmlkKTtcblxuICAgIGNvbnN0IENvdW50ZXJDb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQtLWNvbScpO1xuICAgIENvdW50ZXJDb20uaW5uZXJIVE1MID0gYENvbW1lbnRzICgke3Jlc3VsdC5sZW5ndGh9KWA7XG5cbiAgICBpZiAoY29tbWVudFBhci5pbm5lckhUTUwgPT09ICdObyBjb21tZW50IGZvdW5kICEnKSB7XG4gICAgICBjb21tZW50UGFyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgICBkaXZDb21QYXIuaW5uZXJIVE1MICs9IGA8cD4gPHNwYW4gY2xhc3M9XCJkYXRlXCI+ICR7bmV3RGF0ZSgpfSA8L3NwYW4+IDxzcGFuIGNsYXNzPVwibmFtZVwiPiAke3VzZXJuYW1lSW5wdXQudmFsdWUudHJpbSgpfSA8L3NwYW4+IDxzcGFuIGNsYXNzPVwiY29tbWVudFwiPiAke2NvbW1lbnRJbnB1dC52YWx1ZX0gPC9zcGFuPjwvcD4gYDtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQb3B1cDtcbiIsImNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLnNwYWNlZmxpZ2h0bmV3c2FwaS5uZXQvdjMvYXJ0aWNsZXMnO1xuY29uc3QgaW52b2x2ZW1lbnRBcGkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcbmNvbnN0IGNvbW1lbnRzVXJsID0gJy9hcHBzL1RsMDRPcmJGeXU2ZnhLZVl4WjVRL2NvbW1lbnRzJztcblxuZXhwb3J0IGNvbnN0IGdldFRlY2hzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfWApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoaWQsIHVzZXIsIGNvbW1lbnQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7aW52b2x2ZW1lbnRBcGl9JHtjb21tZW50c1VybH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLFxuICAgICAgICBjb21tZW50LFxuICAgICAgfSksXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgU2hvd0NvbW1lbnQgPSAoY29tbWVudCkgPT4ge1xuICBpZiAoIWNvbW1lbnQubGVuZ3RoKSB7XG4gICAgY29uc3QgY29tbWVudFBhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub19jb21tZW50Jyk7XG4gICAgY29tbWVudFBhci5pbm5lckhUTUwgPSAnTm8gY29tbWVudCBmb3VuZCAhJztcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkaXZDb21QYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbS1kaXYnKTtcbiAgICBjb21tZW50LmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgIGRpdkNvbVBhci5pbm5lckhUTUwgKz0gYDxwPiA8c3BhbiBjbGFzcz1cImRhdGVcIj4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX08L3NwYW4+IDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7Y29tbWVudC51c2VybmFtZX08L3NwYW4+IDxzcGFuIGNsYXNzPVwiY29tbWVudFwiPiAke2NvbW1lbnQuY29tbWVudH08L3NwYW4+PC9wPmA7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBDb21tZW50Q291bnRlciA9IChjb21tZW50KSA9PiB7XG4gIGlmIChjb21tZW50Lmxlbmd0aCkge1xuICAgIGNvbnN0IENvdW50ZXJDb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQtLWNvbScpO1xuICAgIENvdW50ZXJDb20uaW5uZXJIVE1MICs9IGBDb21tZW50cyAoJHtjb21tZW50Lmxlbmd0aH0pYDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGluY29taW5nSXRlbUlkKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEFwaX0ke2NvbW1lbnRzVXJsfT9pdGVtX2lkPSR7aW5jb21pbmdJdGVtSWR9YCk7XG4gIGNvbnN0IHRlY2ggPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgcmV0dXJuIHRlY2g7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jc3MvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBqIGZyb20gJy4vYXNzZXRzL2pvcy5qcGVnJztcbmltcG9ydCB6IGZyb20gJy4vYXNzZXRzL3ppZWVjby5qcGVnJztcbmltcG9ydCB7IGdldFRlY2hzIH0gZnJvbSAnLi9zZXRfYXBpLmpzJztcbmltcG9ydCByZW5kZXJUZWNoIGZyb20gJy4vaG9tZVJlbmRlci5qcyc7XG5cbmNvbnN0IGljb24xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1pY29uMScpO1xuY29uc3QgaWNvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLWljb24yJyk7XG5cbmljb24xLmlubmVySFRNTCArPSBgPGltZyBjbGFzcz1cImpvcy16aWVlXCIgc3JjPVwiJHtqfVwiIGFsdD1cInppZWVjb1wiPmA7XG5pY29uMi5pbm5lckhUTUwgKz0gYDxpbWcgY2xhc3M9XCJqb3MtemllZVwiIHNyYz1cIiR7en1cIiBhbHQ9XCJqb3NcIj5gO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGVjaHMgPSBhd2FpdCBnZXRUZWNocygpO1xuICByZW5kZXJUZWNoKHRlY2hzKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9