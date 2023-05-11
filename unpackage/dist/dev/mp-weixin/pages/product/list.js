(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/product/list"],{

/***/ 240:
/*!****************************************************************************************!*\
  !*** D:/my_system/workspace/TinyShop-UniApp/main.js?{"page":"pages%2Fproduct%2Flist"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-stat.es.js */ 27);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 33);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _list = _interopRequireDefault(__webpack_require__(/*! ./pages/product/list.vue */ 241));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 241:
/*!*********************************************************************!*\
  !*** D:/my_system/workspace/TinyShop-UniApp/pages/product/list.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=4906f7b7& */ 242);
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ 244);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=scss& */ 246);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 48);

var renderjs





/* normalize component */

var component = Object(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/product/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 242:
/*!****************************************************************************************************!*\
  !*** D:/my_system/workspace/TinyShop-UniApp/pages/product/list.vue?vue&type=template&id=4906f7b7& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=template&id=4906f7b7& */ 243);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 243:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/my_system/workspace/TinyShop-UniApp/pages/product/list.vue?vue&type=template&id=4906f7b7& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    rfLoadMore: function () {
      return __webpack_require__.e(/*! import() | components/rf-load-more/rf-load-more */ "components/rf-load-more/rf-load-more").then(__webpack_require__.bind(null, /*! @/components/rf-load-more/rf-load-more.vue */ 563))
    },
    uniDrawer: function () {
      return __webpack_require__.e(/*! import() | components/uni-drawer/uni-drawer */ "components/uni-drawer/uni-drawer").then(__webpack_require__.bind(null, /*! @/components/uni-drawer/uni-drawer.vue */ 658))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.attrArr, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g0 = item.list.length
    return {
      $orig: $orig,
      g0: g0,
    }
  })
  var g1 = _vm.productList.length
  var g2 = _vm.productList.length === 0 && !_vm.loading
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g1: g1,
        g2: g2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 244:
/*!**********************************************************************************************!*\
  !*** D:/my_system/workspace/TinyShop-UniApp/pages/product/list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=script&lang=js& */ 245);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 245:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/my_system/workspace/TinyShop-UniApp/pages/product/list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 34));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 36));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _product = __webpack_require__(/*! @/api/product */ 65);
var _vuex = __webpack_require__(/*! vuex */ 45);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var uniDrawer = function uniDrawer() {
  __webpack_require__.e(/*! require.ensure | components/uni-drawer/drawer */ "components/uni-drawer/drawer").then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-drawer/drawer */ 665));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var rfTopDrawer = function rfTopDrawer() {
  __webpack_require__.e(/*! require.ensure | components/rf-top-drawer/index */ "components/rf-top-drawer/index").then((function () {
    return resolve(__webpack_require__(/*! @/components/rf-top-drawer */ 672));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var rfAttrContent = function rfAttrContent() {
  __webpack_require__.e(/*! require.ensure | components/rf-attr-content/index */ "components/rf-attr-content/index").then((function () {
    return resolve(__webpack_require__(/*! @/components/rf-attr-content */ 624));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var rfProductList = function rfProductList() {
  Promise.all(/*! require.ensure | components/rf-product-list/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/rf-product-list/index")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/rf-product-list */ 598));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var rfLoadMore = function rfLoadMore() {
  __webpack_require__.e(/*! require.ensure | components/rf-load-more/rf-load-more */ "components/rf-load-more/rf-load-more").then((function () {
    return resolve(__webpack_require__(/*! @/components/rf-load-more/rf-load-more */ 563));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
/* eslint-disable */
var _default = {
  components: {
    uniDrawer: uniDrawer,
    rfProductList: rfProductList,
    rfAttrContent: rfAttrContent,
    rfLoadMore: rfLoadMore,
    rfTopDrawer: rfTopDrawer
  },
  filters: {
    filterTotalSales: function filterTotalSales(val) {
      if (val > 10000) {
        val = "".concat((val / 10000).toFixed(2), "w");
      }
      return val;
    }
  },
  data: function data() {
    return {
      keyword: '',
      errorInfo: '',
      loadingType: 'more',
      page: 1,
      loading: true,
      specClass: 'none',
      productDetail: {},
      searchKey: "",
      //搜索关键词
      width: 200,
      //header宽度
      height: 64,
      //header高度
      inputTop: 0,
      //搜索框距离顶部距离
      arrowTop: 0,
      //箭头距离顶部距离
      dropScreenH: 0,
      //下拉筛选框距顶部距离
      attrData: [],
      attrIndex: -1,
      dropScreenShow: false,
      scrollTop: 0,
      tabIndex: 0,
      //顶部筛选索引
      isList: false,
      //是否以列表展示  | 列表或大图
      drawer: false,
      drawerH: 0,
      //抽屉内部scrollview高度
      selectedName: "综合",
      selectH: 0,
      dropdownList: [{
        name: "综合",
        selected: true,
        param: {}
      }, {
        name: "价格升序",
        selected: false,
        param: {
          price: 'asc'
        }
      }, {
        name: "价格降序",
        selected: false,
        param: {
          price: 'desc'
        }
      }],
      attrArr: [{
        name: "全部",
        selectedName: "全部",
        isActive: false,
        params: {},
        list: []
      }, {
        name: "新品",
        selectedName: "新品",
        isActive: false,
        params: {
          is_new: 1
        },
        list: []
      }, {
        name: "推荐",
        selectedName: "推荐",
        isActive: false,
        params: {
          is_recommend: 1
        },
        list: []
      }, {
        name: "热门",
        selectedName: "热门",
        isActive: false,
        params: {
          is_hot: 1
        },
        list: []
      }
      // 	{
      // 	name: "品牌",
      // 	selectedName: "品牌",
      // 	isActive: false,
      // 	list: [{
      // 		name: "trendsetter",
      // 		selected: false
      // 	}, {
      // 		name: "维肯（Viken）",
      // 		selected: false
      // 	}, {
      // 		name: "AORO",
      // 		selected: false
      // 	}, {
      // 		name: "苏发",
      // 		selected: false
      // 	}, {
      // 		name: "飞花令（FHL）",
      // 		selected: false
      // 	}, {
      // 		name: "叶梦丝",
      // 		selected: false
      // 	}, {
      // 		name: "ITZOOM",
      // 		selected: false
      // 	}, {
      // 		name: "亿魅",
      // 		selected: false
      // 	}, {
      // 		name: "LEIKS",
      // 		selected: false
      // 	}, {
      // 		name: "雷克士",
      // 		selected: false
      // 	}, {
      // 		name: "蕊芬妮",
      // 		selected: false
      // 	}, {
      // 		name: "辉宏达",
      // 		selected: false
      // 	}, {
      // 		name: "英西达",
      // 		selected: false
      // 	}, {
      // 		name: "戴为",
      // 		selected: false
      // 	}, {
      // 		name: "魔风者",
      // 		selected: false
      // 	}, {
      // 		name: "即满",
      // 		selected: false
      // 	}, {
      // 		name: "北比",
      // 		selected: false
      // 	}, {
      // 		name: "娱浪",
      // 		selected: false
      // 	}, {
      // 		name: "搞怪猪",
      // 		selected: false
      // 	}]
      // }
      // {
      // name: "类型",
      // selectedName: "类型",
      // isActive: false,
      // list: [{
      // 	name: "线充套装",
      // 	selected: false
      // }, {
      // 	name: "单条装",
      // 	selected: false
      // }, {
      // 	name: "车载充电器",
      // 	selected: false
      // }, {
      // 	name: "PD快充",
      // 	selected: false
      // }, {
      // 	name: "数据线转换器",
      // 	selected: false
      // }, {
      // 	name: "多条装",
      // 	selected: false
      // }, {
      // 	name: "充电插头",
      // 	selected: false
      // }, {
      // 	name: "无线充电器",
      // 	selected: false
      // }, {
      // 	name: "座式充电器",
      // 	selected: false
      // }, {
      // 	name: "万能充",
      // 	selected: false
      // }, {
      // 	name: "转换器/转接线",
      // 	selected: false
      // }, {
      // 	name: "MFI苹果认证",
      // 	selected: false
      // }, {
      // 	name: "转换器",
      // 	selected: false
      // }, {
      // 	name: "苹果认证",
      // 	selected: false
      // }
      // 	]
      // },
      // 	{
      // 	name: "适用手机",
      // 	selectedName: "适用手机",
      // 	isActive: false,
      // 	list: [{
      // 		name: "通用",
      // 		selected: false
      // 	}, {
      // 		name: "vivo",
      // 		selected: false
      // 	}, {
      // 		name: "OPPO",
      // 		selected: false
      // 	}, {
      // 		name: "魅族",
      // 		selected: false
      // 	}, {
      // 		name: "苹果",
      // 		selected: false
      // 	}, {
      // 		name: "华为",
      // 		selected: false
      // 	}, {
      // 		name: "三星",
      // 		selected: false
      // 	}, {
      // 		name: "荣耀",
      // 		selected: false
      // 	}, {
      // 		name: "诺基亚5",
      // 		selected: false
      // 	}, {
      // 		name: "荣耀4",
      // 		selected: false
      // 	}, {
      // 		name: "诺基",
      // 		selected: false
      // 	}, {
      // 		name: "荣耀",
      // 		selected: false
      // 	}, {
      // 		name: "诺基亚2",
      // 		selected: false
      // 	}, {
      // 		name: "荣耀2",
      // 		selected: false
      // 	}, {
      // 		name: "诺基",
      // 		selected: false
      // 	}]
      // }
      ],

      productList: [],
      pageIndex: 1,
      pullUpOn: true,
      productCateList: [],
      brandList: [],
      currentCateStr: '',
      currentBrandStr: '',
      minPrice: '',
      maxPrice: '',
      productParams: {}
    };
  },
  onLoad: function onLoad(options) {
    var _this = this;
    var obj = {};
    obj = wx.getMenuButtonBoundingClientRect();
    uni.getSystemInfo({
      success: function success(res) {
        _this.width = obj.left || res.windowWidth;
        _this.height = obj.top ? obj.top + obj.height + 8 : res.statusBarHeight + 44;
        _this.inputTop = obj.top ? obj.top + (obj.height - 30) / 2 : res.statusBarHeight + 7;
        _this.arrowTop = obj.top ? obj.top + (obj.height - 32) / 2 : res.statusBarHeight + 6;
        _this.searchKey = options.searchKey || "";
        //略小，避免误差带来的影响
        _this.dropScreenH = _this.height * 750 / res.windowWidth + 186;
        _this.drawerH = res.windowHeight - uni.upx2px(100) - _this.height;
      }
    });
    this.initData(options);
  },
  // 下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    this.page = 1;
    this.productList.length = 0;
    this.getProductList('refresh', {});
  },
  // 加载更多
  onReachBottom: function onReachBottom() {
    if (this.loadingType === 'nomore') return;
    this.page++;
    this.getProductList();
  },
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)(['setCartNum'])), {}, {
    // 初始化数据
    initData: function initData(options) {
      var params = {};
      if (options.cate_id) {
        params.cate_id = options.cate_id;
      }
      if (options.param) {
        params = _objectSpread(_objectSpread({}, params), JSON.parse(options.param));
      }
      if (options.keyword) {
        this.keyword = options.keyword;
        params.keyword = options.keyword;
      }
      this.productParams = params;
      this.getProductList();
    },
    stopPrevent: function stopPrevent() {},
    // 规格弹窗开关
    toggleSpec: function toggleSpec(row) {
      var _this2 = this;
      if (parseInt(row.status, 10) === 0) return;
      if (this.specClass === 'show') {
        this.specClass = 'hide';
        if (row.stock === 0) {
          this.$mHelper.toast('库存不足');
          return;
        }
        if (row.type.toString() === '1') {
          // 加入购物车
          this.handleCartItemCreate(row.skuId, row.cartCount);
        } else if (row.type.toString() === '2') {
          // 立即购买
          var list = {};
          var data = {};
          data.sku_id = row.skuId;
          data.num = row.cartCount;
          if (this.productDetail.point_exchange_type.toString() === '2' || this.productDetail.point_exchange_type.toString() === '4' || this.productDetail.point_exchange_type.toString() === '3' && this.isPointExchange) {
            list.type = 'point_exchange';
          } else {
            list.type = 'buy_now';
          }
          list.data = JSON.stringify(data);
          this.navTo("/pages/order/create/order?data=".concat(JSON.stringify(list)));
        }
        setTimeout(function () {
          _this2.specClass = 'none';
        }, 250);
      } else if (this.specClass === 'none') {
        this.getProductDetail(row);
      }
    },
    hideSpec: function hideSpec() {
      var _this3 = this;
      this.specClass = 'hide';
      setTimeout(function () {
        _this3.specClass = 'none';
      }, 250);
    },
    // 添加商品至购物车
    handleCartItemCreate: function handleCartItemCreate(skuId, cartCount) {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.$http.post("".concat(_product.cartItemCreate), {
                  sku_id: skuId,
                  num: cartCount
                }).then( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
                  return _regenerator.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _this4.$http.get("".concat(_product.cartItemCount)).then( /*#__PURE__*/function () {
                            var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(r) {
                              return _regenerator.default.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      _this4.cartNum = r.data;
                                      _this4.setCartNum(r.data);
                                    case 2:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            }));
                            return function (_x) {
                              return _ref2.apply(this, arguments);
                            };
                          }());
                        case 2:
                          _this4.$mHelper.toast('添加购物车成功');
                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                })));
              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    // 获取产品详情
    getProductDetail: function getProductDetail(row) {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.$http.get("".concat(_product.productDetail), {
                  id: row.id
                }).then( /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(r) {
                    return _regenerator.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _this5.productDetail = r.data;
                            _this5.productDetail.sku_name = row.sku_name;
                            _this5.specClass = 'show';
                          case 3:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));
                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    px: function px(num) {
      return uni.upx2px(num) + "px";
    },
    btnDropChange: function btnDropChange(e) {
      var _this6 = this;
      var index = parseInt(e.currentTarget.dataset.index, 10);
      var arr = JSON.parse(JSON.stringify(this.attrArr[index].list));
      if (arr.length === 0) {
        this.$set(this.attrArr[index], "isActive", !this.attrArr[index].isActive);
        if (this.attrArr[index].isActive && index === 0) {
          this.attrArr[1].isActive = false;
          this.attrArr[2].isActive = false;
          this.attrArr[3].isActive = false;
        }
        if (this.attrArr[1].isActive || this.attrArr[2].isActive || this.attrArr[3].isActive) {
          this.attrArr[0].isActive = false;
        }
      } else {
        this.attrData = arr;
        this.attrIndex = index;
        this.dropScreenShow = true;
        this.$set(this.attrArr[index], "isActive", false);
        this.scrollTop = 1;
        this.$nextTick(function () {
          _this6.scrollTop = 0;
        });
      }
      var params = {};
      if (this.attrArr[0].isActive) {
        params = {};
      } else {
        params.keyword = this.keyword;
      }
      this.attrArr.forEach(function (item) {
        if (item.isActive) {
          params = _objectSpread(_objectSpread({}, params), item.params);
        }
      });
      this.page = 1;
      this.productList = [];
      this.loading = true;
      this.productParams = params;
      this.getProductList();
    },
    btnSelected: function btnSelected(e) {
      var index = e.currentTarget.dataset.index;
      this.$set(this.attrData[index], "selected", !this.attrData[index].selected);
    },
    reset: function reset() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this7.currentBrandStr = '';
                _this7.currentCateStr = '';
                _this7.minPrice = '';
                _this7.maxPrice = '';
                _context6.next = 6;
                return _this7.getBrandList();
              case 6:
                _context6.next = 8;
                return _this7.getProductCate();
              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    btnCloseDrop: function btnCloseDrop() {
      var _this8 = this;
      this.scrollTop = 1;
      this.$nextTick(function () {
        _this8.scrollTop = 0;
      });
      this.dropScreenShow = false;
      this.attrIndex = -1;
    },
    btnSure: function btnSure() {
      var index = this.attrIndex;
      var arr = this.attrData;
      var active = false;
      var attrName = "";
      //这里只是为了展示选中效果,并非实际场景
      var _iterator = _createForOfIteratorHelper(arr),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (item.selected) {
            active = true;
            attrName += attrName ? ";" + item.name : item.name;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var obj = this.attrArr[index];
      this.btnCloseDrop();
      this.$set(obj, "isActive", active);
      this.$set(obj, "selectedName", attrName);
    },
    showDropdownList: function showDropdownList() {
      this.selectH = 246;
      this.tabIndex = 0;
    },
    hideDropdownList: function hideDropdownList() {
      this.selectH = 0;
    },
    dropdownItem: function dropdownItem(e) {
      var index = parseInt(e.currentTarget.dataset.index, 10);
      var arr = this.dropdownList;
      for (var i = 0; i < arr.length; i++) {
        if (i === index) {
          arr[i].selected = true;
        } else {
          arr[i].selected = false;
        }
      }
      this.dropdownList = arr;
      this.selectedName = index === 0 ? '综合' : index === 1 ? '价格升序' : '价格降序';
      this.selectH = 0;
      this.page = 1;
      this.productList = [];
      this.loading = true;
      this.productParams = this.dropdownList[index].param;
      this.getProductList();
    },
    screen: function screen(e) {
      var index = parseInt(e.currentTarget.dataset.index, 10);
      if (index === 0) {
        this.showDropdownList();
      } else if (index === 1) {
        var params = {};
        if (this.tabIndex === 1) {
          this.tabIndex = null;
          params.total_sales = 'asc';
        } else {
          this.tabIndex = 1;
          params.total_sales = 'desc';
        }
        this.page = 1;
        this.productList = [];
        this.loading = true;
        this.productParams = params;
        this.getProductList();
      } else if (index === 2) {
        this.isList = !this.isList;
      } else if (index === 3) {
        if (this.productCateList.length === 0) {
          this.getProductCate();
        }
        if (this.brandList.length === 0) {
          this.getBrandList();
        }
        this.drawer = true;
      }
    },
    closeDrawer: function closeDrawer() {
      this.drawer = false;
      var params = {};
      if (this.maxPrice) {
        params.max_price = this.maxPrice;
      }
      if (this.minPrice) {
        params.min_price = this.minPrice;
      }
      var brandArr = [];
      this.brandList.forEach(function (item) {
        if (item.isActive) {
          brandArr.push(item.id);
        }
      });
      if (brandArr.join(',')) {
        params.brand_id = brandArr.join(',');
      }
      var cateArr = [];
      this.productCateList.forEach(function (item) {
        if (item.isActive) {
          cateArr.push(item.id);
        }
      });
      if (cateArr.join(',')) {
        params.cate_id = cateArr.join(',');
      }
      this.page = 1;
      this.productList = [];
      this.loading = true;
      this.productParams = params;
      this.getProductList();
    },
    cateBtnSelected: function cateBtnSelected(index) {
      this.currentCateStr = '';
      this.$set(this.productCateList[index], "isActive", !this.productCateList[index].isActive);
      var productCateArr = [];
      this.productCateList.forEach(function (item) {
        if (item.isActive) {
          productCateArr.push(item.title);
        }
      });
      this.currentCateStr = productCateArr.join(',');
    },
    brandBtnSelected: function brandBtnSelected(index) {
      this.currentBrandStr = '';
      this.$set(this.brandList[index], "isActive", !this.brandList[index].isActive);
      var brandArr = [];
      this.brandList.forEach(function (item) {
        if (item.isActive) {
          brandArr.push(item.title);
        }
      });
      this.currentBrandStr = brandArr.join(',');
    },
    // 获取商品分类列表
    getProductCate: function getProductCate() {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this9.$http.get("".concat(_product.productCate)).then(function (r) {
                  _this9.productCateList = r.data;
                });
              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    // 获取商品品牌列表
    getBrandList: function getBrandList() {
      var _this10 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this10.$http.get("".concat(_product.brandIndex)).then(function (r) {
                  _this10.brandList = r.data;
                });
              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    back: function back() {
      if (this.drawer) {
        this.closeDrawer();
      } else {
        this.$mRouter.back();
      }
    },
    search: function search() {
      this.page = 1;
      this.productList = [];
      this.loading = true;
      this.productParams = {
        keyword: this.keyword
      };
      this.getProductList();
    },
    // 获取商品列表
    getProductList: function getProductList(type) {
      var _this11 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _this11.$http.get("".concat(_product.productList), _objectSpread(_objectSpread({}, _this11.productParams), {}, {
                  page: _this11.page
                })).then( /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(r) {
                    return _regenerator.default.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _this11.loading = false;
                            if (type === 'refresh') {
                              uni.stopPullDownRefresh();
                            }
                            _this11.loadingType = r.data.length === 10 ? 'more' : 'nomore';
                            _this11.productList = [].concat((0, _toConsumableArray2.default)(_this11.productList), (0, _toConsumableArray2.default)(r.data));
                          case 4:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));
                  return function (_x3) {
                    return _ref4.apply(this, arguments);
                  };
                }()).catch(function (err) {
                  _this11.errorInfo = err;
                  _this11.loading = false;
                  if (type === 'refresh') {
                    uni.stopPullDownRefresh();
                  }
                });
              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    // 跳转详情
    navTo: function navTo(route) {
      this.$mRouter.push({
        route: route
      });
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 246:
/*!*******************************************************************************************************!*\
  !*** D:/my_system/workspace/TinyShop-UniApp/pages/product/list.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../开发软件/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=style&index=0&lang=scss& */ 247);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 247:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/my_system/workspace/TinyShop-UniApp/pages/product/list.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[240,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/product/list.js.map