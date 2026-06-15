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

/***/ "./Samples/pdf/bullets-and-lists/main.js"
/*!***********************************************!*\
  !*** ./Samples/pdf/bullets-and-lists/main.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pdf/bullets-and-lists/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/bullets-and-lists/main.js?\n}");

/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/bullets-and-lists/App.vue?vue&type=script&lang=ts"
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/bullets-and-lists/App.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"./node_modules/@syncfusion/ej2-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-pdf */ \"./node_modules/@syncfusion/ej2-pdf/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n    name: 'BulletsAndListsPdf',\n    setup: function () {\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {\n            var button = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__.Button();\n            button.appendTo('#successbtn');\n            button.element.onclick = function () {\n                createPdf();\n            };\n        });\n        function createPdf() {\n            var pdf = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfDocument();\n            var page = pdf.addPage();\n            var font1 = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.helvetica, 14, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.bold);\n            var font2 = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.helvetica, 12, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n            var font3 = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.timesRoman, 10, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.bold);\n            var font4 = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.timesRoman, 10, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.italic);\n            var font5 = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.timesRoman, 10, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n            page.graphics.drawString('List Features', font1, { x: 225, y: 10, width: 300, height: 100 }, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 139 }));\n            page.graphics.drawString('This sample demonstrates letious features of bullets and lists. A list can be ordered and Unordered. Essential PDF provides support for creating and formatting ordered and unordered lists.', font2, { x: 0, y: 50, width: page.graphics.clientSize.width, height: page.graphics.clientSize.height - 50 }, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 0 }));\n            var format = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfStringFormat();\n            format.lineSpacing = 10;\n            var collection = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListItemCollection(['List of Essential Studio products', 'IO products']);\n            var list = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfUnorderedList(collection, { format: format, font: font3, style: _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfUnorderedListStyle.disk, indent: 10, textIndent: 10 });\n            var subList = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfOrderedList(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListItemCollection(), { brush: new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 0 }), indent: 20, font: font4, format: format });\n            var products = ['Tools', 'Grid', 'Chart', 'Edit', 'Diagram', 'XlsIO', 'Grouping', 'Calculate', 'PDF', 'HTMLUI', 'DocIO'];\n            products.forEach(function (s) {\n                subList.items.add(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListItem('Essential ' + s));\n            });\n            list.items.at(0).subList = subList;\n            var subSubListCollection = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListItemCollection([\n                'Essential PDF: It is a .NET library with the capability to produce Adobe PDF files. It features a full-fledged object model for the easy creation of PDF files from any .NET language. It does not use any external libraries and is built from scratch in C#. It can be used on the server side (ASP.NET or any other environment) or with Windows Forms applications. Essential PDF supports many features for creating a PDF document. Drawing Text, Images, Shapes, etc can be drawn easily in the PDF document.',\n                'Essential DocIO: It is a .NET library that can read and write Microsoft Word files. It features a full-fledged object model similar to the Microsoft Office COM libraries. It does not use COM interop and is built from scratch in C#. It can be used on systems that do not have Microsoft Word installed. Here are some of the most common questions that arise regarding the usage and functionality of Essential DocIO.',\n                'Essential XlsIO: It is a .NET library that can read and write Microsoft Excel files (BIFF 8 format). It features a full-fledged object model similar to the Microsoft Office COM libraries. It does not use COM interop and is built from scratch in C#. It can be used on systems that do not have Microsoft Excel installed, making it an excellent reporting engine for tabular data.'\n            ]);\n            var SubsubList = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfUnorderedList(subSubListCollection, { brush: new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 0 }), indent: 20, font: font5, format: format, style: _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfUnorderedListStyle.square });\n            list.items.at(1).subList = SubsubList;\n            list.draw(page, { x: 0, y: 130, width: page.graphics.clientSize.width, height: page.graphics.clientSize.height - 130 });\n            pdf.save('BulletsAndLists.pdf');\n            pdf.destroy();\n        }\n        return {};\n    }\n}));\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/bullets-and-lists/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D\n}");

/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/bullets-and-lists/App.vue?vue&type=template&id=2b2d8b58&ts=true"
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/bullets-and-lists/App.vue?vue&type=template&id=2b2d8b58&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, _cache[0] || (_cache[0] = [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div class=\\\"control-section\\\"><div class=\\\"tablediv\\\" style=\\\"font-size:14px;\\\"><div class=\\\"rowdiv\\\"><div class=\\\"celldiv\\\"><table width=\\\"100%\\\"><tbody><tr><td> Click the button to view a PDF document generated by JavaScript PDF Library. Please note that Adobe Reader or its equivalent is required to view the resultant document. </td></tr><tr><td align=\\\"left\\\"><br><input type=\\\"submit\\\" id=\\\"successbtn\\\" class=\\\"e-btn\\\" value=\\\"Generate PDF\\\" style=\\\"width:150px;text-transform:capitalize;\\\"></td></tr></tbody></table></div></div></div></div><div id=\\\"action-description\\\"><p> This sample demonstrates how to list the content in <a href=\\\"https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/lists\\\">ordered and unordered list</a>. The ordered list can be number or alphabets and the unordered list can be bullets, circles, and disks. </p></div><div id=\\\"description\\\"><p> You can also create and format ordered and unordered lists in a PDF document, including custom markers, fonts, and nested structures. More information about bullets and lists can be found in this documentation <a href=\\\"https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/lists\\\">section</a>. </p></div>\", 3)\n    ])));\n}\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/bullets-and-lists/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D\n}");

/***/ },

/***/ "./Samples/pdf/bullets-and-lists/App.vue"
/*!***********************************************!*\
  !*** ./Samples/pdf/bullets-and-lists/App.vue ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_2b2d8b58_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2b2d8b58&ts=true */ \"./Samples/pdf/bullets-and-lists/App.vue?vue&type=template&id=2b2d8b58&ts=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts */ \"./Samples/pdf/bullets-and-lists/App.vue?vue&type=script&lang=ts\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_2b2d8b58_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/pdf/bullets-and-lists/App.vue\"]])\n/* hot reload */\nif (false) // removed by dead control flow\n{}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/bullets-and-lists/App.vue?\n}");

/***/ },

/***/ "./Samples/pdf/bullets-and-lists/App.vue?vue&type=script&lang=ts"
/*!***********************************************************************!*\
  !*** ./Samples/pdf/bullets-and-lists/App.vue?vue&type=script&lang=ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=ts */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/bullets-and-lists/App.vue?vue&type=script&lang=ts\");\n \n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/bullets-and-lists/App.vue?\n}");

/***/ },

/***/ "./Samples/pdf/bullets-and-lists/App.vue?vue&type=template&id=2b2d8b58&ts=true"
/*!*************************************************************************************!*\
  !*** ./Samples/pdf/bullets-and-lists/App.vue?vue&type=template&id=2b2d8b58&ts=true ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_2b2d8b58_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_2b2d8b58_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=2b2d8b58&ts=true */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/bullets-and-lists/App.vue?vue&type=template&id=2b2d8b58&ts=true\");\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/bullets-and-lists/App.vue?\n}");

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
/******/ 			"pdf/bullets-and-lists/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/pdf/bullets-and-lists/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;