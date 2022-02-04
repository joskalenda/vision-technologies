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
/* harmony import */ var _set_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_api.js */ "./src/set_api.js");




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
    <button data-id="${tech.id}" type="button" class="ff-4 card-btn btn comments color-white">comments</button>
    </div>
    </div>
    </div>
    </li>`;
  });

  document.querySelectorAll('.card-btn').forEach((cardBtn, i) => {
    cardBtn.addEventListener('click', () => {
      const popupContainer = document.querySelector('.pop--container');
      popupContainer.classList.add('active');
      (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(technologies[i]);
      (0,_set_api_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(cardBtn.getAttribute('data-id'));
    });
  // });
  // const DATABtn = document.querySelectorAll('.card-btn');
  // DATABtn.forEach((item) => {

  // item.addEventListener('click', () => {
  //     console.log(item.getAttribute('data-id'));
  //     const popupContainer = document.querySelector('.pop--container');
  //     popupContainer.classList.add('active');
      
  //     // cardBtn.addEventListener('click', () => {
  //       createPopup(item.getAttribute('data-id'));
  //     // });
      // getComments(item.getAttribute('data-id'));
    // });
  });












  (0,_set_api_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(technologies.id);
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
/* harmony import */ var _set_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_api */ "./src/set_api.js");


const counter_com = document.querySelector('.count--com');
// const date_par = document.querySelector('.date');
// const name_par = document.querySelector('.name');
// const comment_par = document.querySelector('.comment');

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
      <p class="count--com">Comment</p>
      <div>
        <p class="date"></p>
        <p class="name"></p>
        <p class="comment"></p>
      </div>
    </div><hr>
    <div class="pop--put">
      <h3>Leave a Comment !</h3>
      <p class="error" >display error</p>
      <input id ="usernameInput" type="text" placeholder="Inter your name" maxlength="15">
      <input id = "commentInput" class="insight" type="text" placeholder="Enter your insigths">
      <button id= "btn" type="button">Comment</button> 
    </div>
    `;
  container.appendChild(popupCard);

  const closeButtons = document.querySelector('#close');
  closeButtons.addEventListener('click', () => {
    document.querySelector('.pop--container.active').classList.remove('active');
  });
  const SubmitButton = document.getElementById('btn');
  console.log(SubmitButton);

  SubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('CLIKED');
    const date_par = document.querySelector('.date');
    const name_par = document.querySelector('.name');
    (0,_set_api__WEBPACK_IMPORTED_MODULE_0__.addComment)(object.id, usernameInput.value, commentInput.value);
    const comment_par = document.querySelector('.comment');
    if (comment_par.innerHTML === 'No comment found !') {
      comment_par.innerHTML = '';
    }
    date_par.innerHTML += `<div>${newDate()}</div>`;
    name_par.innerHTML +=`<div>${usernameInput.value.trim()}</div>`;
    comment_par.innerHTML +=`<div>${commentInput.value}</div>`;
    // form.reset();
    // form.focus();
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
/* harmony export */   "CommentCounter": () => (/* binding */ CommentCounter),
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
/* harmony import */ var _homeRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeRender.js */ "./src/homeRender.js");
/* harmony import */ var _popup_comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup_comment.js */ "./src/popup_comment.js");



const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/articles';
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const commentsUrl = '/apps/Tl04OrbFyu6fxKeYxZ5Q/comments';
// const likesUrl = '/apps/Uinv3HFYXneji5y5pk1g/likes';
// Tl04OrbFyu6fxKeYxZ5Q
const getTechs = async () => {
  const response = await fetch(`${BASE_URL}`);
  response.json().then((json) => {
    (0,_homeRender_js__WEBPACK_IMPORTED_MODULE_0__["default"])(json);
    (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(json);
  });
};



const addComment = async (id, user, comment) => {
  fetch(`${involvementApi}${commentsUrl}`,
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
  },
  );
};

const ShowComment = (data) => {
  const comment_par = document.querySelector('.comment');
  const date_par = document.querySelector('.date');
  const name_par = document.querySelector('.name');
  if (!data.length) {
    comment_par.innerHTML = 'No comment found !';
  } else {
    data.forEach((data) => {
      date_par.innerHTML += `${data.creation_date}`;
      name_par.innerHTML +=`${data.username} :`;
      comment_par.innerHTML +=`${data.comment}`;
    });
  }
};

const CommentCounter = (data) => {
  const counter_com = document.querySelector('.count--com');
  if (data.length) {
    counter_com.innerHTML += `Comments (${data.length})`;
    // console.log(data.length);
  }
};

const getComments = async (incomingItemId) => {
  const request = await fetch(`${involvementApi}${commentsUrl}?item_id=${incomingItemId}`);
  const data = await request.json();
  ShowComment(data);
  CommentCounter(data);
};

// export default createPopup;


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

window.addEventListener('load', _set_api_js__WEBPACK_IMPORTED_MODULE_5__.getTechs);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGVBQWUsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUss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S0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBOztBQUVPO0FBQ1AsaUNBQWlDLGVBQWUsRUFBRSxZQUFZLFdBQVcsZUFBZTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNJO0FBQ0E7QUFDUztBQUNHO0FBQ0c7O0FBRXhDO0FBQ0E7O0FBRUEsaURBQWlELDZDQUFDLENBQUM7QUFDbkQsaURBQWlELGdEQUFDLENBQUM7O0FBRW5ELGdDQUFnQyxpREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL2hvbWVSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy8uL3NyYy9wb3B1cF9jb21tZW50LmpzIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvLi9zcmMvc2V0X2FwaS5qcyIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Zpc2lvbi10ZWNobm9sb2dpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlzaW9uLXRlY2hub2xvZ2llcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly92aXNpb24tdGVjaG5vbG9naWVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG51bCxcXG5saSxcXG5hIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTs7Ozs7Ozs7Ozs7Q0FXQyxjQUFjO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7OztDQUdDLGdCQUFnQjtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxudWwsXFxubGksXFxuYSB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnk6ICM2MTY3ZjI7XFxuICAtLXByaW1hcnktdHh0OiAjMWYyOTM3O1xcbiAgLS1zZWNvbmRhcnktdHh0OiAjMWYyOTM3O1xcbiAgLS1wcmktYmQ6ICNiYzZjZTk7XFxuXFxuICAvKiAtLXRlcnRpYXJ5OiAjOyAqL1xcblxcbiAgLyogLS1iYWNrZ3JvdW5kOiAjOyAqL1xcblxcbiAgLyogLS1kYXJrLXRleHQ6IDsgKi9cXG4gIC0tYmctd2hpdGU6ICNmZmY7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmO1xcbiAgLS1jb2xvci1ibGFjazogIzAwMDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1IDI1NSAyNTUpLCByZ2IoMjA5IDIxMyAyMTkpKTtcXG59XFxuXFxuLmJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlKTtcXG59XFxuXFxuLmNvbG9yLXdoaXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tci0xIHtcXG4gIG1hcmdpbjogMjRweDtcXG59XFxuXFxuLnBkMCB7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGV4dC1qdXN0aWZ5IHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi53MTAwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29sb3Itc2VjLXRleHQge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQpO1xcbn1cXG5cXG4uZC1mbGV4LTIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmYtMSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZndiIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWItc20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmZmLTIge1xcbiAgZm9udC1mYW1pbHk6ICdQb2lyZXQgT25lJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmZmLTMge1xcbiAgZm9udC1mYW1pbHk6ICdTaGFkb3dzIEludG8gTGlnaHQnLCBjdXJzaXZlO1xcbn1cXG5cXG4uZmYtNCB7XFxuICBmb250LWZhbWlseTpcXG4gICAgLWFwcGxlLXN5c3RlbSxcXG4gICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICBcXFwiUm9ib3RvXFxcIixcXG4gICAgXFxcIk94eWdlblxcXCIsXFxuICAgIFxcXCJVYnVudHVcXFwiLFxcbiAgICBcXFwiQ2FudGFyZWxsXFxcIixcXG4gICAgXFxcIkZpcmEgU2Fuc1xcXCIsXFxuICAgIFxcXCJEcm9pZCBTYW5zXFxcIixcXG4gICAgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5saS1pbWFnZXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4uaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEyJTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEyJTtcXG59XFxuXFxuLmltZy1pY29uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uam9zLXppZWUge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmpvcy16aWVlOmhvdmVyIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGhzbGEoMjU5IDk0JSA1MSUpO1xcbn1cXG5cXG4uY29sb3ItcHJpLXRleHQge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4udmlzIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjg3NTRyZW07XFxufVxcblxcbi50ZWNoIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbmhlYWRlciAuY29udGFpbmVyIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmludHJvIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChoc2woMjU5IDk0JSA1MSUpLCBoc2woMzE0IDEwMCUgNDcuMSUpKTtcXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcXG59XFxuXFxuc2VjdGlvbi5pbnRybyAuaW50cm8tZGl2IHtcXG4gIHBhZGRpbmctdG9wOiAzLjEyNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMC4xMjU0cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmludHJvIGgyIHNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDMuMjVyZW07XFxufVxcblxcbnNlY3Rpb24uaW50cm8gLnZpc3Npb24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpLWJkKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmJ0biB7XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgcGFkZGluZzogMC42cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMjU5IDk0JSA1MSUpO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3Mge1xcbiAgbWFyZ2luLXRvcDogLTExcmVtO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLmNvbnRlbnRzIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDVkODtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLmNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbSAwLjc1cmVtO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRoYW0gaDMge1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiA4OSU7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAuY29tcG9uZW50cyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYmItMiB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjI5LCAxNTEsIDIzMSk7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGhhbSB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgZ3JpZC1yb3ctZ2FwOiA4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxN3JlbTtcXG59XFxuXFxuLmJvZHkgPiBwIHtcXG4gIGhlaWdodDogOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIGgzIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tci1paSB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5nYXAge1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIC5saWtlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIGNvbW1lbnQgYnV0dG9uICovXFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyAuY29tbWVudHMge1xcbiAgYmFja2dyb3VuZDogaHNsYSgyNTkgOTQlIDUxJSk7XFxufVxcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi8qIHBvcHVwIHN0eWxpbmcgICovXFxuLnBvcC0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW46IDA7XFxuICB6LWluZGV4OiA0MDtcXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBoZWlnaHQ6IDY1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDkwLCA4OSwgODkpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OlxcbiAgICAtMnB4IC0ycHggMTBweCAwIHJnYmEoMjQzLCAyNDMsIDI0MiwgMC42KSxcXG4gICAgLTJweCAtMnB4IDVweCAwICM3MDZmNzI5OSxcXG4gICAgN3B4IDdweCAxMHB4IDAgcmdiYSg3NywgMTYxLCA3NywgMC4xMzMpLFxcbiAgICA0cHggNHB4IDVweCAwIHJnYmEoMTc5LCA2OSwgNjksIDAuODAxKTtcXG59XFxuXFxuLnBvcC0tY29udGFpbmVyLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm92ZXItLWxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45MDQpO1xcbn1cXG5cXG4ub3Zlci0tbGF5LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNjbG9zZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNHB4O1xcbiAgcmlnaHQ6IC0xNTBweDtcXG4gIHdpZHRoOiA0MCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTI5LCAxMjcsIDEyNyk7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4jY2xvc2UgaSB7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtc2l6ZTogMjlweDtcXG59XFxuXFxuI2Nsb3NlIGk6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnBvcC0taW1nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNDMsIDE0MCwgMTQwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiA4NTBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBtYXJnaW46IDI1cHggYXV0bztcXG59XFxuXFxuLnBvcC0taW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnBvcC0tdGl0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIHBhZGRpbmc6IDVweCAxNHB4O1xcbn1cXG5cXG4ucG9wLS1kZXMge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTRweDtcXG59XFxuXFxuLnNlZS0tY29tbWVudCB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5zZWUtLWNvbW1lbnQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxufVxcblxcbi5kYXRlLFxcbi5uYW1lIHtcXG4gIGNvbG9yOiByZ2IoMTk4LCA5NiwgMjEyKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xcbn1cXG5cXG4uY29tZW10IHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG59XFxuXFxuLmNvdW50LS1jb20ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wb3AtLXB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC0tcHV0IC5lcnJvciB7XFxuICB3aWR0aDogMzAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE5cHg7XFxuICBjb2xvcjogZ3JlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEsIDIzOCwgMTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDI0MSwgMjAxLCAwLjkyNSk7XFxufVxcblxcbi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1kZXNjZW5kaW5nLXNwZWNpZmljaXR5ICovXFxuLnBvcC0tcHV0IGgzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5wb3AtLXB1dCBpbnB1dCB7XFxuICB3aWR0aDogMzAlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucG9wLS1wdXQgLmluc2lnaHQge1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uc3BhY2UtYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wb3AtLXB1dCBidXR0b24ge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgIDUwcHggNTBweCAwO1xcbiAgd2lkdGg6IDEzJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXJlbSk7XFxufVxcblxcbi5wb3AtLXB1dCBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzgsIDg0LCAxOTAsIDAuNzE5KTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIHNlY3Rpb24udGVjaC12aWV3cyB1bCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgdWwgbGkge1xcbiAgICB3aWR0aDogMTlyZW07XFxuICB9XFxuXFxuICAuc2hvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZ2FwLWJnIHtcXG4gICAgZ2FwOiAxOHB4O1xcbiAgfVxcblxcbiAgc2VjdGlvbi5pbnRybyAudmlzc2lvbiB7XFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxuICB9XFxuXFxuICBzZWN0aW9uLmludHJvIGgyIHNwYW4ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgfVxcblxcbiAgc2VjdGlvbi5pbnRybyAuaW50cm8tZGl2IHtcXG4gICAgcGFkZGluZy10b3A6IDUuMTI1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIHNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgdWwgbGkge1xcbiAgICB3aWR0aDogMjRyZW07XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixtQkFBbUI7O0VBRW5CLHFCQUFxQjs7RUFFckIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNF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MkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFO0lBQ0UsZ0RBQWdEO0lBQ2hELDZDQUE2QztJQUM3QyxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjNjE2N2YyO1xcbiAgLS1wcmltYXJ5LXR4dDogIzFmMjkzNztcXG4gIC0tc2Vjb25kYXJ5LXR4dDogIzFmMjkzNztcXG4gIC0tcHJpLWJkOiAjYmM2Y2U5O1xcblxcbiAgLyogLS10ZXJ0aWFyeTogIzsgKi9cXG5cXG4gIC8qIC0tYmFja2dyb3VuZDogIzsgKi9cXG5cXG4gIC8qIC0tZGFyay10ZXh0OiA7ICovXFxuICAtLWJnLXdoaXRlOiAjZmZmO1xcbiAgLS1jb2xvci13aGl0ZTogI2ZmZjtcXG4gIC0tY29sb3ItYmxhY2s6ICMwMDA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSAyNTUgMjU1KSwgcmdiKDIwOSAyMTMgMjE5KSk7XFxufVxcblxcbi5iZy13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSk7XFxufVxcblxcbi5jb2xvci13aGl0ZSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubXItMSB7XFxuICBtYXJnaW46IDI0cHg7XFxufVxcblxcbi5wZDAge1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRleHQtanVzdGlmeSB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4udzEwMCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbG9yLXNlYy10ZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0KTtcXG59XFxuXFxuLmQtZmxleC0yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZmLTEge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZ3YiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1iLXNtIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5mZi0yIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9pcmV0IE9uZScsIGN1cnNpdmU7XFxufVxcblxcbi5mZi0zIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcXG59XFxuXFxuLmZmLTQge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIC1hcHBsZS1zeXN0ZW0sXFxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgXFxcIlJvYm90b1xcXCIsXFxuICAgIFxcXCJPeHlnZW5cXFwiLFxcbiAgICBcXFwiVWJ1bnR1XFxcIixcXG4gICAgXFxcIkNhbnRhcmVsbFxcXCIsXFxuICAgIFxcXCJGaXJhIFNhbnNcXFwiLFxcbiAgICBcXFwiRHJvaWQgU2Fuc1xcXCIsXFxuICAgIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ubGktaW1hZ2VzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMiU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMiU7XFxufVxcblxcbi5pbWctaWNvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmpvcy16aWVlIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5qb3MtemllZTpob3ZlciB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBoc2xhKDI1OSA5NCUgNTElKTtcXG59XFxuXFxuLmNvbG9yLXByaS10ZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnZpcyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS44NzU0cmVtO1xcbn1cXG5cXG4udGVjaCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG5oZWFkZXIgLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbm1haW4ge1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuXFxuc2VjdGlvbi5pbnRybyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsKDI1OSA5NCUgNTElKSwgaHNsKDMxNCAxMDAlIDQ3LjElKSk7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XFxufVxcblxcbnNlY3Rpb24uaW50cm8gLmludHJvLWRpdiB7XFxuICBwYWRkaW5nLXRvcDogMy4xMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTAuMTI1NHJlbTtcXG59XFxuXFxuc2VjdGlvbi5pbnRybyBoMiBzcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzLjI1cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmludHJvIC52aXNzaW9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaS1iZCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5idG4ge1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDI1OSA5NCUgNTElKTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIHtcXG4gIG1hcmdpbi10b3A6IC0xMXJlbTtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC5jb250ZW50cyB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ1ZDg7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC5jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW0gMC43NXJlbTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50aGFtIGgzIHtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogODklO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLmNvbXBvbmVudHMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJiLTIge1xcbiAgYmFja2dyb3VuZDogcmdiKDIyOSwgMTUxLCAyMzEpO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRoYW0ge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gIGdyaWQtcm93LWdhcDogOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyB1bCBsaSB7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2IoMCAwIDAgLyA2MCUpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTdyZW07XFxufVxcblxcbi5ib2R5ID4gcCB7XFxuICBoZWlnaHQ6IDhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyB1bCBsaSBoMyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubXItaWkge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZ2FwIHtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuc2VjdGlvbi50ZWNoLXZpZXdzIC50ZWNocyAubGlrZSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBjb21tZW50IGJ1dHRvbiAqL1xcblxcbnNlY3Rpb24udGVjaC12aWV3cyAudGVjaHMgLmNvbW1lbnRzIHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMjU5IDk0JSA1MSUpO1xcbn1cXG5cXG5zZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBwb3B1cCBzdHlsaW5nICAqL1xcbi5wb3AtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgei1pbmRleDogNDA7XFxuICB3aWR0aDogMTAwMHB4O1xcbiAgaGVpZ2h0OiA2NTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MCwgODksIDg5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgLTJweCAtMnB4IDEwcHggMCByZ2JhKDI0MywgMjQzLCAyNDIsIDAuNiksXFxuICAgIC0ycHggLTJweCA1cHggMCAjNzA2ZjcyOTksXFxuICAgIDdweCA3cHggMTBweCAwIHJnYmEoNzcsIDE2MSwgNzcsIDAuMTMzKSxcXG4gICAgNHB4IDRweCA1cHggMCByZ2JhKDE3OSwgNjksIDY5LCAwLjgwMSk7XFxufVxcblxcbi5wb3AtLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5vdmVyLS1sYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTA0KTtcXG59XFxuXFxuLm92ZXItLWxheS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTRweDtcXG4gIHJpZ2h0OiAtMTUwcHg7XFxuICB3aWR0aDogNDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDEyOSwgMTI3LCAxMjcpO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuI2Nsb3NlIGkge1xcbiAgcGFkZGluZzogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDI5cHg7XFxufVxcblxcbiNjbG9zZSBpOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5wb3AtLWltZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQzLCAxNDAsIDE0MCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogODUwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgbWFyZ2luOiAyNXB4IGF1dG87XFxufVxcblxcbi5wb3AtLWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wb3AtLXRpdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBwYWRkaW5nOiA1cHggMTRweDtcXG59XFxuXFxuLnBvcC0tZGVzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5zZWUtLWNvbW1lbnQge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uc2VlLS1jb21tZW50IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uZGF0ZSxcXG4ubmFtZSB7XFxuICBjb2xvcjogcmdiKDE5OCwgOTYsIDIxMik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGJvcmRlcjogMC4xcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcXG59XFxuXFxuLmNvbWVtdCB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxufVxcblxcbi5jb3VudC0tY29tIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9wLS1wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtLXB1dCAuZXJyb3Ige1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xOXB4O1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExLCAyMzgsIDExKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAyNDEsIDIwMSwgMC45MjUpO1xcbn1cXG5cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcbi5wb3AtLXB1dCBoMyB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4ucG9wLS1wdXQgaW5wdXQge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnBvcC0tcHV0IC5pbnNpZ2h0IHtcXG4gIGhlaWdodDogOTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnNwYWNlLWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAwICA1MHB4IDUwcHggMDtcXG4gIHdpZHRoOiAxMyU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVyZW0pO1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LCA4NCwgMTkwLCAwLjcxOSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICBzZWN0aW9uLnRlY2gtdmlld3MgdWwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB9XFxuXFxuICBzZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIHtcXG4gICAgd2lkdGg6IDE5cmVtO1xcbiAgfVxcblxcbiAgLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmdhcC1iZyB7XFxuICAgIGdhcDogMThweDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uaW50cm8gLnZpc3Npb24ge1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgfVxcblxcbiAgc2VjdGlvbi5pbnRybyBoMiBzcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uaW50cm8gLmludHJvLWRpdiB7XFxuICAgIHBhZGRpbmctdG9wOiA1LjEyNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICBzZWN0aW9uLnRlY2gtdmlld3MgLnRlY2hzIHVsIGxpIHtcXG4gICAgd2lkdGg6IDI0cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucG9wLS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHotaW5kZXg6IDQwO1xcbiAgd2lkdGg6IDEwMDBweDtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTAsIDg5LCA4OSk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6XFxuICAgIC0ycHggLTJweCAxMHB4IDAgcmdiYSgyNDMsIDI0MywgMjQyLCAwLjYpLFxcbiAgICAtMnB4IC0ycHggNXB4IDAgIzcwNmY3Mjk5LFxcbiAgICA3cHggN3B4IDEwcHggMCByZ2JhKDc3LCAxNjEsIDc3LCAwLjEzMyksXFxuICAgIDRweCA0cHggNXB4IDAgcmdiYSgxNzksIDY5LCA2OSwgMC44MDEpO1xcbn1cXG5cXG4ucG9wLS1jb250YWluZXIuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ub3Zlci0tbGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkwNCk7XFxufVxcblxcbi5vdmVyLS1sYXkuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2Nsb3NlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYigxMjksIDEyNywgMTI3KTtcXG59XFxuXFxuLnBvcC0taW1nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiA4NTBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuXFxuLnBvcC0tdGl0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIHBhZGRpbmc6IDVweCAxNHB4O1xcbn1cXG5cXG4ucG9wLS1kZXMge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTRweDtcXG59XFxuXFxuLnNlZS0tY29tbWVudCB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5zZWUtLWNvbW1lbnQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxufVxcblxcbi5kYXRlLFxcbi5uYW1lIHtcXG4gIGNvbG9yOiByZ2IoMTk4LCA5NiwgMjEyKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xcbn1cXG5cXG4uY29tZW10IHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG59XFxuXFxuLmNvdW50LS1jb20ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wb3AtLXB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC0tcHV0IC5lcnJvciB7XFxuICB3aWR0aDogMzAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE5cHg7XFxuICBjb2xvcjogZ3JlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEsIDIzOCwgMTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDI0MSwgMjAxLCAwLjkyNSk7XFxufVxcblxcbi5wb3AtLXB1dCBoMyB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4ucG9wLS1wdXQgaW5wdXQge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnBvcC0tcHV0IC5pbnNpZ2h0IHtcXG4gIGhlaWdodDogOTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnBvcC0tcHV0IGJ1dHRvbiB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMCAgNTBweCA1MHB4IDA7XFxuICB3aWR0aDogMTMlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cmVtKTtcXG59XFxuXFxuLnBvcC0tcHV0IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OCwgODQsIDE5MCwgMC43MTkpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsNkJBQTZCO0VBQzdCOzs7OzBDQUl3QztBQUMxQzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wb3AtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgei1pbmRleDogNDA7XFxuICB3aWR0aDogMTAwMHB4O1xcbiAgaGVpZ2h0OiA2NTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MCwgODksIDg5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgLTJweCAtMnB4IDEwcHggMCByZ2JhKDI0MywgMjQzLCAyNDIsIDAuNiksXFxuICAgIC0ycHggLTJweCA1cHggMCAjNzA2ZjcyOTksXFxuICAgIDdweCA3cHggMTBweCAwIHJnYmEoNzcsIDE2MSwgNzcsIDAuMTMzKSxcXG4gICAgNHB4IDRweCA1cHggMCByZ2JhKDE3OSwgNjksIDY5LCAwLjgwMSk7XFxufVxcblxcbi5wb3AtLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5vdmVyLS1sYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTA0KTtcXG59XFxuXFxuLm92ZXItLWxheS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDEyOSwgMTI3LCAxMjcpO1xcbn1cXG5cXG4ucG9wLS1pbWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDg1MHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5cXG4ucG9wLS10aXQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbiAgcGFkZGluZzogNXB4IDE0cHg7XFxufVxcblxcbi5wb3AtLWRlcyB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4uc2VlLS1jb21tZW50IHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLnNlZS0tY29tbWVudCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG59XFxuXFxuLmRhdGUsXFxuLm5hbWUge1xcbiAgY29sb3I6IHJnYigxOTgsIDk2LCAyMTIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXI6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XFxufVxcblxcbi5jb21lbXQge1xcbiAgY29sb3I6IHJnYmEoNDgsIDQ2LCA0NiwgMC43MzMpO1xcbn1cXG5cXG4uY291bnQtLWNvbSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjczMyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBvcC0tcHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLS1wdXQgLmVycm9yIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMSwgMjM4LCAxMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMjQxLCAyMDEsIDAuOTI1KTtcXG59XFxuXFxuLnBvcC0tcHV0IGgzIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5wb3AtLXB1dCBpbnB1dCB7XFxuICB3aWR0aDogMzAlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucG9wLS1wdXQgLmluc2lnaHQge1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuNzMzKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAwICA1MHB4IDUwcHggMDtcXG4gIHdpZHRoOiAxMyU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVyZW0pO1xcbn1cXG5cXG4ucG9wLS1wdXQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LCA4NCwgMTkwLCAwLjcxOSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNyZWF0ZVBvcHVwIGZyb20gJy4vcG9wdXBfY29tbWVudC5qcyc7XG5cbmltcG9ydCB7IGdldENvbW1lbnRzIH0gZnJvbSAnLi9zZXRfYXBpLmpzJztcblxuY29uc3QgcmVuZGVyVGVjaCA9ICh0ZWNobm9sb2dpZXMpID0+IHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlzc2lvbi10ZWNoJyk7XG4gIHVsLmlubmVySFRNTCA9ICcnO1xuICB0ZWNobm9sb2dpZXMuc2xpY2UoMCwgOSkuZm9yRWFjaCgodGVjaCkgPT4ge1xuICAgIHVsLmlubmVySFRNTCArPSBgPGxpIGlkPVwiJHt0ZWNoLmlkfVwiIGNsYXNzPVwiYmctd2hpdGUgdzEwMCBkLWZsZXgtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJ3MTAwIGQtZmxleC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cImxpLWltYWdlc1wiPjxpbWcgY2xhc3M9XCJpbWdcIiBzcmM9XCIke3RlY2guaW1hZ2VVcmx9XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJvZHkgc3BhY2UtYmV0d2VlbiB3MTAwIGQtZmxleC0yXCI+XG4gICAgPGgzIGNsYXNzPVwiZmYtNCBtci1paVwiPiR7dGVjaC50aXRsZS5sZW5ndGggPCA1MCA/IHRlY2gudGl0bGUgOiBgJHt0ZWNoLnRpdGxlLnN1YnN0cmluZygwLCA1MCl9Li4uLmB9PC9oMz5cbiAgICA8cCBjbGFzcz1cImRlcyBmZi00IG1yLWlpXCI+JHt0ZWNoLnN1bW1hcnkubGVuZ3RoIDwgMTAwID8gdGVjaC5zdW1tYXJ5IDogYCR7dGVjaC5zdW1tYXJ5LnN1YnN0cmluZygwLCAxMDApfS4uLmB9PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJsaWtlIGZmLTQgZmxleCBnYXBcIj5cbiAgICA8aSBjbGFzcz1cImZhciBmYS1oZWFydFwiPjwvaT5cbiAgICA8c3BhbiBjbGFzcz1cImNvdW50ZXJcIj4wIExpa2VzPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyIG1yLWlpXCI+XG4gICAgPGJ1dHRvbiBkYXRhLWlkPVwiJHt0ZWNoLmlkfVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZmLTQgY2FyZC1idG4gYnRuIGNvbW1lbnRzIGNvbG9yLXdoaXRlXCI+Y29tbWVudHM8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2xpPmA7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWJ0bicpLmZvckVhY2goKGNhcmRCdG4sIGkpID0+IHtcbiAgICBjYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLS1jb250YWluZXInKTtcbiAgICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgY3JlYXRlUG9wdXAodGVjaG5vbG9naWVzW2ldKTtcbiAgICAgIGdldENvbW1lbnRzKGNhcmRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgIH0pO1xuICAvLyB9KTtcbiAgLy8gY29uc3QgREFUQUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWJ0bicpO1xuICAvLyBEQVRBQnRuLmZvckVhY2goKGl0ZW0pID0+IHtcblxuICAvLyBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gIC8vICAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtLWNvbnRhaW5lcicpO1xuICAvLyAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBcbiAgLy8gICAgIC8vIGNhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgICAgIGNyZWF0ZVBvcHVwKGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAvLyAgICAgLy8gfSk7XG4gICAgICAvLyBnZXRDb21tZW50cyhpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICAvLyB9KTtcbiAgfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGdldENvbW1lbnRzKHRlY2hub2xvZ2llcy5pZCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUZWNoO1xuIiwiaW1wb3J0IHsgYWRkQ29tbWVudCB9IGZyb20gXCIuL3NldF9hcGlcIjtcblxuY29uc3QgY291bnRlcl9jb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQtLWNvbScpO1xuLy8gY29uc3QgZGF0ZV9wYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuLy8gY29uc3QgbmFtZV9wYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuLy8gY29uc3QgY29tbWVudF9wYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpO1xuXG5jb25zdCBuZXdEYXRlID0gKCkgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xufTtcblxuY29uc3QgY3JlYXRlUG9wdXAgPSAob2JqZWN0KSA9PiB7XG4gIGNvbnN0IHBvcHVwQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHBvcHVwQ2FyZC5jbGFzc0xpc3QuYWRkKCdwb3B1cC0tY2FyZCcpO1xuICBwb3B1cENhcmQuaWQgPSBvYmplY3QuaWQ7XG4gIHBvcHVwQ2FyZC5pbm5lckhUTUwgPSBgXG4gICAgPHAgaWQ9XCJjbG9zZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzIGFzc2V0cy1jb2xvclwiPjwvaT48L3A+XG4gICAgPGRpdiBjbGFzcz1cInBvcC0taW1nXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7b2JqZWN0LmltYWdlVXJsfVwiIGFsdD1cImltYWdlXzFcIj5cbiAgICA8L2Rpdj5cbiAgICA8aDMgY2xhc3M9XCJwb3AtLXRpdFwiPiR7b2JqZWN0LnRpdGxlfTwvaDM+XG4gICAgPHAgY2xhc3M9XCJwb3AtLWRlc1wiPiR7b2JqZWN0LnN1bW1hcnl9PC9wPjxocj5cbiAgICA8ZGl2IGNsYXNzPVwic2VlLS1jb21tZW50XCI+XG4gICAgICA8cCBjbGFzcz1cImNvdW50LS1jb21cIj5Db21tZW50PC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+PC9wPlxuICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj48L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiY29tbWVudFwiPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pjxocj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLS1wdXRcIj5cbiAgICAgIDxoMz5MZWF2ZSBhIENvbW1lbnQgITwvaDM+XG4gICAgICA8cCBjbGFzcz1cImVycm9yXCIgPmRpc3BsYXkgZXJyb3I8L3A+XG4gICAgICA8aW5wdXQgaWQgPVwidXNlcm5hbWVJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbnRlciB5b3VyIG5hbWVcIiBtYXhsZW5ndGg9XCIxNVwiPlxuICAgICAgPGlucHV0IGlkID0gXCJjb21tZW50SW5wdXRcIiBjbGFzcz1cImluc2lnaHRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBpbnNpZ3Roc1wiPlxuICAgICAgPGJ1dHRvbiBpZD0gXCJidG5cIiB0eXBlPVwiYnV0dG9uXCI+Q29tbWVudDwvYnV0dG9uPiBcbiAgICA8L2Rpdj5cbiAgICBgO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXBDYXJkKTtcblxuICBjb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKTtcbiAgY2xvc2VCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtLWNvbnRhaW5lci5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG4gIGNvbnN0IFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKTtcbiAgY29uc29sZS5sb2coU3VibWl0QnV0dG9uKTtcblxuICBTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdDTElLRUQnKTtcbiAgICBjb25zdCBkYXRlX3BhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG4gICAgY29uc3QgbmFtZV9wYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuICAgIGFkZENvbW1lbnQob2JqZWN0LmlkLCB1c2VybmFtZUlucHV0LnZhbHVlLCBjb21tZW50SW5wdXQudmFsdWUpO1xuICAgIGNvbnN0IGNvbW1lbnRfcGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKTtcbiAgICBpZiAoY29tbWVudF9wYXIuaW5uZXJIVE1MID09PSAnTm8gY29tbWVudCBmb3VuZCAhJykge1xuICAgICAgY29tbWVudF9wYXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuICAgIGRhdGVfcGFyLmlubmVySFRNTCArPSBgPGRpdj4ke25ld0RhdGUoKX08L2Rpdj5gO1xuICAgIG5hbWVfcGFyLmlubmVySFRNTCArPWA8ZGl2PiR7dXNlcm5hbWVJbnB1dC52YWx1ZS50cmltKCl9PC9kaXY+YDtcbiAgICBjb21tZW50X3Bhci5pbm5lckhUTUwgKz1gPGRpdj4ke2NvbW1lbnRJbnB1dC52YWx1ZX08L2Rpdj5gO1xuICAgIC8vIGZvcm0ucmVzZXQoKTtcbiAgICAvLyBmb3JtLmZvY3VzKCk7XG4gIH0pO1xuXG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUG9wdXA7IiwiaW1wb3J0IHJlbmRlclRlY2ggZnJvbSAnLi9ob21lUmVuZGVyLmpzJztcbmltcG9ydCBjcmVhdGVQb3B1cCBmcm9tICcuL3BvcHVwX2NvbW1lbnQuanMnO1xuXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwczovL2FwaS5zcGFjZWZsaWdodG5ld3NhcGkubmV0L3YzL2FydGljbGVzJztcbmNvbnN0IGludm9sdmVtZW50QXBpID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7XG5jb25zdCBjb21tZW50c1VybCA9ICcvYXBwcy9UbDA0T3JiRnl1NmZ4S2VZeFo1US9jb21tZW50cyc7XG4vLyBjb25zdCBsaWtlc1VybCA9ICcvYXBwcy9VaW52M0hGWVhuZWppNXk1cGsxZy9saWtlcyc7XG4vLyBUbDA0T3JiRnl1NmZ4S2VZeFo1UVxuZXhwb3J0IGNvbnN0IGdldFRlY2hzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfWApO1xuICByZXNwb25zZS5qc29uKCkudGhlbigoanNvbikgPT4ge1xuICAgIHJlbmRlclRlY2goanNvbik7XG4gICAgY3JlYXRlUG9wdXAoanNvbik7XG4gIH0pO1xufTtcblxuXG5cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGlkLCB1c2VyLCBjb21tZW50KSA9PiB7XG4gIGZldGNoKGAke2ludm9sdmVtZW50QXBpfSR7Y29tbWVudHNVcmx9YCxcbiAge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIHVzZXJuYW1lOiB1c2VyLFxuICAgICAgY29tbWVudCxcbiAgICB9KSxcbiAgfSxcbiAgKTtcbn07XG5cbmNvbnN0IFNob3dDb21tZW50ID0gKGRhdGEpID0+IHtcbiAgY29uc3QgY29tbWVudF9wYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpO1xuICBjb25zdCBkYXRlX3BhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG4gIGNvbnN0IG5hbWVfcGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbiAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgIGNvbW1lbnRfcGFyLmlubmVySFRNTCA9ICdObyBjb21tZW50IGZvdW5kICEnO1xuICB9IGVsc2Uge1xuICAgIGRhdGEuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgZGF0ZV9wYXIuaW5uZXJIVE1MICs9IGAke2RhdGEuY3JlYXRpb25fZGF0ZX1gO1xuICAgICAgbmFtZV9wYXIuaW5uZXJIVE1MICs9YCR7ZGF0YS51c2VybmFtZX0gOmA7XG4gICAgICBjb21tZW50X3Bhci5pbm5lckhUTUwgKz1gJHtkYXRhLmNvbW1lbnR9YDtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IENvbW1lbnRDb3VudGVyID0gKGRhdGEpID0+IHtcbiAgY29uc3QgY291bnRlcl9jb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQtLWNvbScpO1xuICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICBjb3VudGVyX2NvbS5pbm5lckhUTUwgKz0gYENvbW1lbnRzICgke2RhdGEubGVuZ3RofSlgO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEubGVuZ3RoKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGluY29taW5nSXRlbUlkKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEFwaX0ke2NvbW1lbnRzVXJsfT9pdGVtX2lkPSR7aW5jb21pbmdJdGVtSWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgU2hvd0NvbW1lbnQoZGF0YSk7XG4gIENvbW1lbnRDb3VudGVyKGRhdGEpO1xufTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY3JlYXRlUG9wdXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IGogZnJvbSAnLi9hc3NldHMvam9zLmpwZWcnO1xuaW1wb3J0IHogZnJvbSAnLi9hc3NldHMvemllZWNvLmpwZWcnO1xuaW1wb3J0IHsgZ2V0VGVjaHMgfSBmcm9tICcuL3NldF9hcGkuanMnO1xuXG5jb25zdCBpY29uMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctaWNvbjEnKTtcbmNvbnN0IGljb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1pY29uMicpO1xuXG5pY29uMS5pbm5lckhUTUwgKz0gYDxpbWcgY2xhc3M9XCJqb3MtemllZVwiIHNyYz1cIiR7an1cIiBhbHQ9XCJ6aWVlY29cIj5gO1xuaWNvbjIuaW5uZXJIVE1MICs9IGA8aW1nIGNsYXNzPVwiam9zLXppZWVcIiBzcmM9XCIke3p9XCIgYWx0PVwiam9zXCI+YDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBnZXRUZWNocyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=