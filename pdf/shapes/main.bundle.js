/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Samples/pdf/shapes/main.js"
/*!************************************!*\
  !*** ./Samples/pdf/shapes/main.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pdf/shapes/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/shapes/main.js?\n}");

/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/shapes/App.vue?vue&type=script&lang=ts"
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/shapes/App.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"./node_modules/@syncfusion/ej2-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-pdf */ \"./node_modules/@syncfusion/ej2-pdf/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n    name: 'ShapesPdf',\n    setup: function () {\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {\n            var button = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__.Button({}, '#shapebtn');\n            button.element.onclick = createPdf;\n        });\n        function createPdf() {\n            var doc = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfDocument();\n            var page = doc.addPage();\n            var g = page.graphics;\n            var headerFont = doc.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.helvetica, 14, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.bold);\n            var pointNum = 16;\n            var radius = 100;\n            var center = { x: 140, y: 140 };\n            // Build polygon points\n            var polygonPoints = makeRegularPolygon(center.x, center.y, radius, pointNum);\n            // Pens and brushes\n            var brownPen = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 165, g: 42, b: 42 }, 10);\n            try {\n                brownPen._lineJoin = _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfLineJoin.round;\n            }\n            catch (e) { /* fallback if private */ }\n            var greenBrush = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 128, b: 0 });\n            g.drawString('Polygon', headerFont, { x: 50, y: 0, width: 100, height: 100 }, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 139 }));\n            g.drawPolygon(polygonPoints, brownPen, greenBrush);\n            var rect = { x: 20, y: 280, width: 200, height: 200 };\n            g.drawString('Pie shape', headerFont, { x: 50, y: 250, width: 100, height: 100 }, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 139 }));\n            g.drawPie(rect, 180, 60, brownPen, greenBrush);\n            g.drawPie(rect, 300, 60, brownPen, greenBrush);\n            g.drawPie(rect, 60, 60, brownPen, greenBrush);\n            g.drawString('Arcs', headerFont, { x: 330, y: 0, width: 100, height: 100 }, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 139 }));\n            rect = { x: 310, y: 40, width: 200, height: 200 };\n            g.drawArc(rect, 0, 90, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 165, g: 42, b: 42 }, 11));\n            g.drawArc({ x: rect.x - 10, y: rect.y, width: rect.width, height: rect.height }, 90, 90, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 0, g: 100, b: 0 }, 11));\n            g.drawArc({ x: rect.x - 10, y: rect.y - 10, width: rect.width, height: rect.height }, 180, 90, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 165, g: 42, b: 42 }, 11));\n            g.drawArc({ x: rect.x, y: rect.y - 10, width: rect.width, height: rect.height }, 270, 90, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 0, g: 100, b: 0 }, 11));\n            rect = { x: 310, y: 280, width: 200, height: 100 };\n            g.drawString('Simple Rectangle', headerFont, { x: 310, y: 255, width: 150, height: 100 }, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 139 }));\n            g.drawRectangle(rect, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 165, g: 42, b: 42 }, 11), new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 128, b: 0 }));\n            g.drawString('Shape with pagination', headerFont, { x: 300, y: 390, width: 200, height: 100 }, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 139 }));\n            var brownBrush = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 165, g: 42, b: 42 });\n            var green = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 128, b: 0 });\n            // Large ellipse on first page\n            g.drawEllipse({ x: 300, y: 450, width: 160, height: 1100 }, brownBrush);\n            g.drawEllipse({ x: 320, y: 480, width: 160, height: 1100 }, green);\n            var page2 = doc.addPage();\n            var g2 = page2.graphics;\n            g2.drawEllipse({ x: 300, y: -480, width: 160, height: 1100 }, brownBrush);\n            g2.drawEllipse({ x: 320, y: -450, width: 160, height: 1100 }, green);\n            g2.drawString('Transparent Rectangles', headerFont, { x: 50, y: 80, width: 200, height: 100 }, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 139 }));\n            var r = { x: 10, y: 150, width: 100, height: 100 };\n            var p = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 0, g: 0, b: 0 }, 1);\n            var b = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 100, b: 0 });\n            g2.drawRectangle(r, p, b);\n            r = { x: r.x + 20, y: r.y + 20, width: r.width, height: r.height };\n            p = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 165, g: 42, b: 42 }, 1);\n            b = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 165, g: 42, b: 42 });\n            g2.setTransparency(0.7);\n            g2.drawRectangle(r, p, b);\n            r = { x: r.x + 20, y: r.y + 20, width: r.width, height: r.height };\n            g2.setTransparency(0.5);\n            g2.drawRectangle(r, p, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 100, b: 0 }));\n            r = { x: r.x + 20, y: r.y + 20, width: r.width, height: r.height };\n            p = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 0, g: 0, b: 255 }, 1);\n            b = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 128, g: 128, b: 128 });\n            g2.setTransparency(0.25);\n            g2.drawRectangle(r, p, b);\n            r = { x: r.x + 20, y: r.y + 20, width: r.width, height: r.height };\n            p = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 0, g: 0, b: 0 }, 1);\n            b = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 128, b: 0 });\n            g2.setTransparency(0.1);\n            g2.drawRectangle(r, p, b);\n            // Save and download\n            doc.save('Shapes.pdf');\n            doc.destroy();\n        }\n        function makeRegularPolygon(cx, cy, r, pointNum) {\n            var pts = [];\n            var f = (360.0 / pointNum) * Math.PI / 180.0;\n            for (var i = 0; i < pointNum; i++) {\n                var theta = i * f;\n                pts.push({ x: Math.cos(theta) * r + cx, y: Math.sin(theta) * r + cy });\n            }\n            return pts;\n        }\n        return {};\n    }\n}));\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/shapes/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D\n}");

/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/shapes/App.vue?vue&type=template&id=78b5e715&ts=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/shapes/App.vue?vue&type=template&id=78b5e715&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, _cache[0] || (_cache[0] = [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div class=\\\"control-section\\\"><div class=\\\"tablediv\\\" style=\\\"font-size:14px;\\\"> Click the button to view a PDF document generated by JavaScript PDF Library. Please note that Adobe Reader or its equivalent is required to view the resultant document. </div><div class=\\\"button-section\\\" style=\\\"margin-left:15px;margin-top:20px;\\\"><div id=\\\"button-control\\\"><div class=\\\"row\\\"><input type=\\\"submit\\\" id=\\\"shapebtn\\\" class=\\\"e-btn\\\" value=\\\"Generate PDF\\\" style=\\\"width:150px;text-transform:capitalize;\\\"></div></div></div></div><div id=\\\"action-description\\\"> This sample demonstrates drawing of <a href=\\\"https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/shapes\\\">shapes</a> such as Ellipse, Arcs, Polygon, Pie, and Rectangle in the PDF document. </div><div id=\\\"description\\\"><p>This feature allows you to render and customize shapes within specified bounds. More information about shapes drawing can be found in this documentation <a href=\\\"https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/shapes\\\">section</a>. </p></div>\", 3)\n    ])));\n}\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/shapes/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D\n}");

/***/ },

/***/ "./Samples/pdf/shapes/App.vue"
/*!************************************!*\
  !*** ./Samples/pdf/shapes/App.vue ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_78b5e715_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=78b5e715&ts=true */ \"./Samples/pdf/shapes/App.vue?vue&type=template&id=78b5e715&ts=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts */ \"./Samples/pdf/shapes/App.vue?vue&type=script&lang=ts\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_78b5e715_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/pdf/shapes/App.vue\"]])\n/* hot reload */\nif (false) // removed by dead control flow\n{}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/shapes/App.vue?\n}");

/***/ },

/***/ "./Samples/pdf/shapes/App.vue?vue&type=script&lang=ts"
/*!************************************************************!*\
  !*** ./Samples/pdf/shapes/App.vue?vue&type=script&lang=ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=ts */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/shapes/App.vue?vue&type=script&lang=ts\");\n \n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/shapes/App.vue?\n}");

/***/ },

/***/ "./Samples/pdf/shapes/App.vue?vue&type=template&id=78b5e715&ts=true"
/*!**************************************************************************!*\
  !*** ./Samples/pdf/shapes/App.vue?vue&type=template&id=78b5e715&ts=true ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_78b5e715_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_78b5e715_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=78b5e715&ts=true */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/shapes/App.vue?vue&type=template&id=78b5e715&ts=true\");\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/shapes/App.vue?\n}");

/***/ }

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"pdf/shapes/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_document_processing_vue_samples"] = self["webpackChunkej2_document_processing_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/pdf/shapes/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;