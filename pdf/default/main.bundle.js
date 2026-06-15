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

/***/ "./Samples/pdf/default/main.js"
/*!*************************************!*\
  !*** ./Samples/pdf/default/main.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pdf/default/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/default/main.js?\n}");

/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/default/App.vue?vue&type=script&lang=ts"
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/default/App.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"./node_modules/@syncfusion/ej2-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-pdf */ \"./node_modules/@syncfusion/ej2-pdf/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n    name: 'DefaultPdfViewer',\n    setup: function () {\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {\n            var button = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__.Button();\n            button.appendTo('#successbtn');\n            button.element.onclick = function () {\n                createPdf();\n            };\n        });\n        function createPdf() {\n            var pdf = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfDocument();\n            var settings = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPageSettings({ margins: new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfMargins(0) });\n            var page = pdf.addPage(settings);\n            var g = page.graphics;\n            var gray = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 64, g: 64, b: 64 });\n            var black = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 0 });\n            var white = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 255, g: 255, b: 255 });\n            var violet = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 255, g: 153, b: 255 });\n            var redPen = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 255, g: 0, b: 0 }, 2);\n            var violetPen = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 148, g: 0, b: 211 }, 2);\n            var greenPen = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 0, g: 128, b: 0 }, 2);\n            var bluePen = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 0, g: 0, b: 255 }, 2);\n            g.drawRectangle({ x: 0, y: 0, width: g.clientSize.width, height: g.clientSize.height }, gray);\n            g.drawRectangle({ x: 0, y: 0, width: g.clientSize.width, height: 130 }, black);\n            g.drawRectangle({ x: 0, y: 400, width: g.clientSize.width, height: g.clientSize.height - 450 }, white);\n            var headerFont = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.timesRoman, 35, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n            g.drawString('Enterprise', headerFont, { x: 10, y: 20, width: 150, height: 200 }, violet);\n            g.drawRectangle({ x: 10, y: 63, width: 140, height: 35 }, violet);\n            var subHeadingFont = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.timesRoman, 16, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n            g.drawString('Reporting Solutions', subHeadingFont, { x: 15, y: 70, width: 130, height: 200 }, black);\n            var yPos = 30;\n            var bodyFont = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.timesRoman, 11, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n            var bulletHeaderFont = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.zapfDingbats, 10, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n            yPos = drawHeaderPoint(g, 'Develop cloud-ready reporting applications in as little as 20% of the time.', yPos, bulletHeaderFont, bodyFont, white, violet);\n            yPos = drawHeaderPoint(g, 'Proven, reliable platform thousands of users over the past 10 years.', yPos, bulletHeaderFont, bodyFont, white, violet);\n            yPos = drawHeaderPoint(g, 'Microsoft Excel, Word, Adobe PDF, RDL display and editing.', yPos, bulletHeaderFont, bodyFont, white, violet);\n            yPos = drawHeaderPoint(g, 'Why start from scratch? Rely on our dependable solution frameworks', yPos, bulletHeaderFont, bodyFont, white, violet);\n            yPos += 105;\n            var bulletBodyFont = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.zapfDingbats, 16, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n            var bodyContentFont = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.timesRoman, 17, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n            yPos = drawBodyContent(g, 'Deployment-ready framework tailored to your needs.', yPos, bulletBodyFont, bodyContentFont, white, violet);\n            yPos = drawBodyContent(g, 'Our architects and developers have years of reporting experience.', yPos, bulletBodyFont, bodyContentFont, white, violet);\n            yPos = drawBodyContent(g, 'Solutions available for web, desktop, and mobile applications.', yPos, bulletBodyFont, bodyContentFont, white, violet);\n            yPos = drawBodyContent(g, 'Backed by our end-to-end product maintenance infrastructure.', yPos, bulletBodyFont, bodyContentFont, white, violet);\n            yPos = drawBodyContent(g, 'The quickest path from concept to delivery.', yPos, bulletBodyFont, bodyContentFont, white, violet);\n            var headerBulletsXposition = 45;\n            yPos = 350;\n            var titleFont = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.timesRoman, 20, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n            g.drawLine(redPen, { x: headerBulletsXposition, y: yPos + 92 }, { x: headerBulletsXposition, y: yPos + 145 });\n            g.drawString('The Experts', titleFont, { x: headerBulletsXposition + 10, y: yPos + 90, width: 150, height: 200 }, black);\n            g.drawLine(violetPen, { x: headerBulletsXposition + 280, y: yPos + 92 }, { x: headerBulletsXposition + 280, y: yPos + 145 });\n            g.drawString('Accurate Estimates', titleFont, { x: headerBulletsXposition + 290, y: yPos + 90, width: 300, height: 200 }, black);\n            g.drawString('A substantial number of .NET reporting applications use our frameworks', bodyFont, { x: headerBulletsXposition + 10, y: yPos + 115, width: 250, height: 200 }, black);\n            g.drawString('Given our expertise, you can expect estimates to be accurate.', bodyFont, { x: headerBulletsXposition + 290, y: yPos + 115, width: 250, height: 200 }, black);\n            yPos += 200;\n            g.drawLine(greenPen, { x: headerBulletsXposition, y: yPos + 32 }, { x: headerBulletsXposition, y: yPos + 85 });\n            g.drawString('Product Licensing', titleFont, { x: headerBulletsXposition + 10, y: yPos + 30, width: 250, height: 200 }, black);\n            g.drawLine(bluePen, { x: headerBulletsXposition + 280, y: yPos + 32 }, { x: headerBulletsXposition + 280, y: yPos + 85 });\n            g.drawString('About Syncfusion', titleFont, { x: headerBulletsXposition + 290, y: yPos + 30, width: 250, height: 200 }, black);\n            g.drawString('Solution packages can be combined with product licensing for great cost savings.', bodyFont, { x: headerBulletsXposition + 10, y: yPos + 55, width: 250, height: 200 }, black);\n            g.drawString('Syncfusion has more than 7,000 customers including large financial institutions and Fortune 100 companies.', bodyFont, { x: headerBulletsXposition + 290, y: yPos + 55, width: 250, height: 200 }, black);\n            var footerFont = pdf.embedFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.timesRoman, 8, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.italic);\n            g.drawString('All trademarks mentioned belong to their owners.', footerFont, { x: 10, y: g.clientSize.height - 30, width: 250, height: 200 }, white);\n            var annot = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextWebLinkAnnotation({ x: g.clientSize.width - 100, y: g.clientSize.height - 30, width: 70, height: 10 }, { r: 255, g: 255, b: 255 }, null, 0, { text: 'www.syncfusion.com', font: footerFont, url: 'http://www.syncfusion.com' });\n            page.annotations.add(annot);\n            pdf.save('Sample.pdf');\n            pdf.destroy();\n        }\n        function drawHeaderPoint(g, text, y, bulletFont, bodyFont, white, violet) {\n            g.drawString('l', bulletFont, { x: 220, y: y, width: 100, height: 100 }, violet);\n            g.drawString(text, bodyFont, { x: 240, y: y, width: 400, height: 100 }, white);\n            return y + 15;\n        }\n        function drawBodyContent(g, text, y, bulletBodyFont, bodyContentFont, white, violet) {\n            g.drawString('3', bulletBodyFont, { x: 35, y: y, width: 100, height: 100 }, violet);\n            g.drawString(text, bodyContentFont, { x: 60, y: y, width: 500, height: 100 }, white);\n            return y + 25;\n        }\n        return {};\n    }\n}));\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/default/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D\n}");

/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/default/App.vue?vue&type=template&id=7fdb2652&ts=true"
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/default/App.vue?vue&type=template&id=7fdb2652&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, _cache[0] || (_cache[0] = [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div class=\\\"control-section\\\"><div class=\\\"tablediv\\\" style=\\\"font-size:14px;\\\"><div class=\\\"rowdiv\\\"><div class=\\\"celldiv\\\"><table width=\\\"100%\\\"><tbody><tr><td> Click the button to view a PDF document generated by JavaScript PDF Library. Please note that Adobe Reader or its equivalent is required to view the resultant document. </td></tr><tr><td align=\\\"left\\\"><br><input type=\\\"submit\\\" id=\\\"successbtn\\\" class=\\\"e-btn\\\" value=\\\"Generate PDF\\\" style=\\\"width:150px;text-transform:capitalize;\\\"></td></tr></tbody></table></div></div></div></div><div id=\\\"action-description\\\"><p>This sample demonstrates how to create a simple PDF document with text and images.</p></div><div id=\\\"description\\\"><p>Likewise, we can create conference registration forms, feedback forms, and more. More information can be found in this documentation <a href=\\\"https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview\\\">section</a>. </p></div>\", 3)\n    ])));\n}\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/default/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D\n}");

/***/ },

/***/ "./Samples/pdf/default/App.vue"
/*!*************************************!*\
  !*** ./Samples/pdf/default/App.vue ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_7fdb2652_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7fdb2652&ts=true */ \"./Samples/pdf/default/App.vue?vue&type=template&id=7fdb2652&ts=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts */ \"./Samples/pdf/default/App.vue?vue&type=script&lang=ts\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7fdb2652_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/pdf/default/App.vue\"]])\n/* hot reload */\nif (false) // removed by dead control flow\n{}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/default/App.vue?\n}");

/***/ },

/***/ "./Samples/pdf/default/App.vue?vue&type=script&lang=ts"
/*!*************************************************************!*\
  !*** ./Samples/pdf/default/App.vue?vue&type=script&lang=ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=ts */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/default/App.vue?vue&type=script&lang=ts\");\n \n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/default/App.vue?\n}");

/***/ },

/***/ "./Samples/pdf/default/App.vue?vue&type=template&id=7fdb2652&ts=true"
/*!***************************************************************************!*\
  !*** ./Samples/pdf/default/App.vue?vue&type=template&id=7fdb2652&ts=true ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_7fdb2652_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_7fdb2652_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=7fdb2652&ts=true */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/default/App.vue?vue&type=template&id=7fdb2652&ts=true\");\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/default/App.vue?\n}");

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
/******/ 			"pdf/default/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/pdf/default/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;