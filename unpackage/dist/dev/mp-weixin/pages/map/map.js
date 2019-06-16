(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/map/map"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\pages\\map\\map.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/lhht/Documents/HBuilderProjects/hello/pages/map/map.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




















var markersize = 30;

function range(start, edge, step) {
  for (var ret = []; (edge - start) * step > 0; start += step) {
    ret.push(start);
  }
  return ret;
}

function markers(northeast, southwest, scale, width, height) {
  var markerslng = (northeast.longitude - southwest.longitude) * markersize / width;
  var markerslat = (northeast.latitude - southwest.latitude) * markersize / height;

  var maxlon = northeast.longitude;
  var minlon = southwest.longitude;
  var maxlat = northeast.latitude;
  var minlat = southwest.latitude;

  var lons = range(minlon, maxlon, markerslng);
  var lats = range(minlat, maxlat, markerslat);

  var _markers = [];
  lons.forEach(function (lon, i) {
    lats.forEach(function (lat, j) {
      _markers.push({
        id: lon + ',' + lat,
        latitude: lat,
        longitude: lon,
        iconPath: '../../static/1.png',
        alpha: 0.1, //将图片设置为透明,通过开发者工具看不出效果,但真机是有效果的
        width: markersize,
        height: markersize });

    });
  });
  return _markers;
}var _default =

{
  data: function data() {
    return {
      polygons: [],
      controls: [
      {
        id: 1,
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50 },

        clickable: true }],


      markers: [] };

  },
  onReady: function onReady(e) {
    this.createMarkers();
  },
  methods: {
    tapa: function tapa() {
      console.log(2222222);
    },
    regionchange: function regionchange(e) {
      this.createMarkers();
    },
    markertap: function markertap(e) {
      console.log(111111111111);
      console.log(e.markerId);
    },
    controltap: function controltap(e) {
      console.log(222222222222);
      console.log(e.controlId);
    },

    createMarkers: function createMarkers() {
      this.mapCtx = uni.createMapContext('map');
      var query = uni.createSelectorQuery();
      var map = query.select('#map').boundingClientRect();

      /* var query = uni.createSelectorQuery();
                                                           var nodesRef = query.selectAll(".item");
                                                           nodesRef.fields({
                                                           	dataset: true,
                                                           	rect:true
                                                           		
                                                           	},(result)=>{
                                                           		_this.elements=result
                                                           	}).exec()
                                                           */



      var that = this;

      that.mapCtx.getRegion({
        success: function success(res1) {
          that.mapCtx.getScale({
            success: function success(res2) {
              query.exec(function (res) {

                console.log(res);

                var width = res[0].width;
                var height = res[0].height;
                var _markers = markers(res1.northeast, res1.southwest, res2.scale, width, height);
                that.markers = _markers;

              });
            } });

        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\pages\\map\\map.vue?vue&type=template&id=7b00c2cc&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/lhht/Documents/HBuilderProjects/hello/pages/map/map.vue?vue&type=template&id=7b00c2cc& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("map", {
        staticStyle: { width: "100%", height: "700px" },
        attrs: {
          id: "map",
          longitude: "102.324520",
          latitude: "40.099994",
          scale: "4",
          polygons: _vm.polygons,
          "show-location": "",
          eventid: "9ba8213a-0"
        },
        on: {
          controltap: _vm.controltap,
          regionchange: _vm.regionchange,
          markers: _vm.markers,
          markertap: _vm.markertap,
          tap: _vm.tapa
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\main.js?{\"page\":\"pages%2Fmap%2Fmap\"}":
/*!*******************************************************************************************!*\
  !*** C:/Users/lhht/Documents/HBuilderProjects/hello/main.js?{"page":"pages%2Fmap%2Fmap"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _map = _interopRequireDefault(__webpack_require__(/*! ./pages/map/map.vue */ "C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\pages\\map\\map.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_map.default));

/***/ }),

/***/ "C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\pages\\map\\map.vue":
/*!************************************************************************!*\
  !*** C:/Users/lhht/Documents/HBuilderProjects/hello/pages/map/map.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_vue_vue_type_template_id_7b00c2cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.vue?vue&type=template&id=7b00c2cc& */ "C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\pages\\map\\map.vue?vue&type=template&id=7b00c2cc&");
/* harmony import */ var _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.vue?vue&type=script&lang=js& */ "C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\pages\\map\\map.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _map_vue_vue_type_template_id_7b00c2cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _map_vue_vue_type_template_id_7b00c2cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/lhht/Documents/HBuilderProjects/hello/pages/map/map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\pages\\map\\map.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** C:/Users/lhht/Documents/HBuilderProjects/hello/pages/map/map.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./map.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\pages\\map\\map.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\pages\\map\\map.vue?vue&type=template&id=7b00c2cc&":
/*!*******************************************************************************************************!*\
  !*** C:/Users/lhht/Documents/HBuilderProjects/hello/pages/map/map.vue?vue&type=template&id=7b00c2cc& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_7b00c2cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./map.vue?vue&type=template&id=7b00c2cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\pages\\map\\map.vue?vue&type=template&id=7b00c2cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_7b00c2cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_test_demo_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_7b00c2cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\lhht\\Documents\\HBuilderProjects\\hello\\main.js?{\"page\":\"pages%2Fmap%2Fmap\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/map/map.js.map