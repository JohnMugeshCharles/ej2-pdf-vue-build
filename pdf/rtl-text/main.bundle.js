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

/***/ "./Samples/pdf/rtl-text/main.js"
/*!**************************************!*\
  !*** ./Samples/pdf/rtl-text/main.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pdf/rtl-text/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/rtl-text/main.js?\n}");

/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/rtl-text/App.vue?vue&type=script&lang=ts"
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/rtl-text/App.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"./node_modules/@syncfusion/ej2-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-pdf */ \"./node_modules/@syncfusion/ej2-pdf/index.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n    name: 'RtlTextPdf',\n    setup: function () {\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {\n            // Initialize the actual button in your HTML (use #normalbtn)\n            var btn = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__.Button({}, '#normalbtn');\n            btn.element.onclick = createPdf;\n            // Also expose for inline onclick if needed\n            window.createPdf = createPdf;\n        });\n        function createPdf() {\n            return __awaiter(this, void 0, void 0, function () {\n                var pdf, pageSettings, page, g, _a, arabicBytes, hebrewBytes, brush, clientBounds, rect, rect1, format, arabicFont, hebrewFont;\n                return __generator(this, function (_b) {\n                    switch (_b.label) {\n                        case 0:\n                            pdf = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfDocument();\n                            pageSettings = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPageSettings({ margins: new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfMargins(40) });\n                            page = pdf.addPage(pageSettings);\n                            g = page.graphics;\n                            return [4 /*yield*/, Promise.all([\n                                    fetchAsUint8Array(input1),\n                                    fetchAsUint8Array(input2)\n                                ])];\n                        case 1:\n                            _a = _b.sent(), arabicBytes = _a[0], hebrewBytes = _a[1];\n                            brush = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 0 });\n                            clientBounds = g.clientSize;\n                            rect = { x: 0, y: 0, width: clientBounds.width, height: clientBounds.height };\n                            rect1 = { x: 0, y: 200, width: clientBounds.width, height: clientBounds.height - 200 };\n                            format = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfStringFormat();\n                            format.textDirection = _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextDirection.rightToLeft;\n                            format.alignment = _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextAlignment.right;\n                            arabicFont = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTrueTypeFont(arabicBytes, 13);\n                            g.drawString(\"\\u0633\\u0646\\u0628\\u062F\\u0623 \\u0628\\u0646\\u0638\\u0631\\u0629 \\u0639\\u0627\\u0645\\u0629 \\u0645\\u0641\\u0627\\u0647\\u064A\\u0645\\u064A\\u0629 \\u0639\\u0644\\u0649 \\u0645\\u0633\\u062A\\u0646\\u062F PDF \\u0628\\u0633\\u064A\\u0637. \\u062A\\u0645 \\u062A\\u0635\\u0645\\u064A\\u0645 \\u0647\\u0630\\u0627 \\u0627\\u0644\\u0641\\u0635\\u0644 \\u0644\\u064A\\u0643\\u0648\\u0646 \\u062A\\u0648\\u062C\\u064A\\u0647\\u064B\\u0627 \\u0645\\u062E\\u062A\\u0635\\u0631\\u064B\\u0627 \\u0642\\u0628\\u0644 \\u0627\\u0644\\u063A\\u0648\\u0635 \\u0641\\u064A \\u0645\\u0633\\u062A\\u0646\\u062F \\u062D\\u0642\\u064A\\u0642\\u064A \\u0648\\u0625\\u0646\\u0634\\u0627\\u0621\\u0647 \\u0645\\u0646 \\u0627\\u0644\\u0628\\u062F\\u0627\\u064A\\u0629.\\n\\u064A\\u0645\\u0643\\u0646 \\u062A\\u0642\\u0633\\u064A\\u0645 \\u0645\\u0644\\u0641 PDF \\u0625\\u0644\\u0649 \\u0623\\u0631\\u0628\\u0639\\u0629 \\u0623\\u062C\\u0632\\u0627\\u0621: \\u0627\\u0644\\u0631\\u0623\\u0633 \\u0648\\u0627\\u0644\\u062C\\u0633\\u0645 \\u0648\\u0627\\u0644\\u062C\\u062F\\u0648\\u0644 \\u0627\\u0644\\u0625\\u0633\\u0646\\u0627\\u062F \\u0627\\u0644\\u062A\\u0631\\u0627\\u0641\\u0642\\u064A \\u0648\\u0627\\u0644\\u0645\\u0642\\u0637\\u0648\\u0631\\u0629. \\u064A\\u0636\\u0639 \\u0627\\u0644\\u0631\\u0623\\u0633 \\u0627\\u0644\\u0645\\u0644\\u0641 \\u0643\\u0645\\u0644\\u0641 PDF \\u060C \\u062D\\u064A\\u062B \\u064A\\u062D\\u062F\\u062F \\u0627\\u0644\\u0646\\u0635 \\u0627\\u0644\\u0645\\u0633\\u062A\\u0646\\u062F \\u0627\\u0644\\u0645\\u0631\\u0626\\u064A \\u060C \\u0648\\u064A\\u0633\\u0631\\u062F \\u062C\\u062F\\u0648\\u0644 \\u0627\\u0644\\u0625\\u0633\\u0646\\u0627\\u062F \\u0627\\u0644\\u062A\\u0631\\u0627\\u0641\\u0642\\u064A \\u0645\\u0648\\u0642\\u0639 \\u0643\\u0644 \\u0634\\u064A\\u0621 \\u0641\\u064A \\u0627\\u0644\\u0645\\u0644\\u0641 \\u060C \\u0648\\u064A\\u0648\\u0641\\u0631 \\u0627\\u0644\\u0645\\u0642\\u0637\\u0639 \\u0627\\u0644\\u062F\\u0639\\u0627\\u0626\\u064A \\u062A\\u0639\\u0644\\u064A\\u0645\\u0627\\u062A \\u062D\\u0648\\u0644 \\u0643\\u064A\\u0641\\u064A\\u0629 \\u0628\\u062F\\u0621 \\u0642\\u0631\\u0627\\u0621\\u0629 \\u0627\\u0644\\u0645\\u0644\\u0641.\\n\\u0631\\u0623\\u0633 \\u0627\\u0644\\u0635\\u0641\\u062D\\u0629 \\u0647\\u0648 \\u0628\\u0628\\u0633\\u0627\\u0637\\u0629 \\u0631\\u0642\\u0645 \\u0625\\u0635\\u062F\\u0627\\u0631 PDF \\u0648\\u062A\\u0633\\u0644\\u0633\\u0644 \\u0639\\u0634\\u0648\\u0627\\u0626\\u064A \\u0644\\u0644\\u0628\\u064A\\u0627\\u0646\\u0627\\u062A \\u0627\\u0644\\u062B\\u0646\\u0627\\u0626\\u064A\\u0629. \\u0627\\u0644\\u0628\\u064A\\u0627\\u0646\\u0627\\u062A \\u0627\\u0644\\u062B\\u0646\\u0627\\u0626\\u064A\\u0629 \\u062A\\u0645\\u0646\\u0639 \\u0627\\u0644\\u062A\\u0637\\u0628\\u064A\\u0642\\u0627\\u062A \\u0627\\u0644\\u0633\\u0627\\u0630\\u062C\\u0629 \\u0645\\u0646 \\u0645\\u0639\\u0627\\u0644\\u062C\\u0629 \\u0645\\u0644\\u0641 PDF \\u0643\\u0645\\u0644\\u0641 \\u0646\\u0635\\u064A. \\u0633\\u064A\\u0624\\u062F\\u064A \\u0630\\u0644\\u0643 \\u0625\\u0644\\u0649 \\u0645\\u0644\\u0641 \\u062A\\u0627\\u0644\\u0641 \\u060C \\u0644\\u0623\\u0646 \\u0645\\u0644\\u0641 PDF \\u064A\\u062A\\u0643\\u0648\\u0646 \\u0639\\u0627\\u062F\\u0629\\u064B \\u0645\\u0646 \\u0646\\u0635 \\u0639\\u0627\\u062F\\u064A \\u0648\\u0628\\u064A\\u0627\\u0646\\u0627\\u062A \\u062B\\u0646\\u0627\\u0626\\u064A\\u0629 (\\u0639\\u0644\\u0649 \\u0633\\u0628\\u064A\\u0644 \\u0627\\u0644\\u0645\\u062B\\u0627\\u0644 \\u060C \\u064A\\u0645\\u0643\\u0646 \\u062A\\u0636\\u0645\\u064A\\u0646 \\u0645\\u0644\\u0641 \\u062E\\u0637 \\u062B\\u0646\\u0627\\u0626\\u064A \\u0628\\u0634\\u0643\\u0644 \\u0645\\u0628\\u0627\\u0634\\u0631 \\u0641\\u064A \\u0645\\u0644\\u0641 PDF).\", arabicFont, rect, brush, format);\n                            hebrewFont = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTrueTypeFont(hebrewBytes, 13);\n                            g.drawString(\"\\u05DC\\u05D0\\u05D7\\u05E8 \\u05D4\\u05DB\\u05D5\\u05EA\\u05E8\\u05EA \\u05D5\\u05D4\\u05D2\\u05D5\\u05E3 \\u05DE\\u05D2\\u05D9\\u05E2 \\u05D8\\u05D1\\u05DC\\u05EA \\u05D4\\u05E4\\u05E0\\u05D9\\u05D4 \\u05D4\\u05DE\\u05E7\\u05D5\\u05E9\\u05E8\\u05EA. \\u05D4\\u05D5\\u05D0 \\u05DE\\u05EA\\u05E2\\u05D3\\u05EA \\u05D0\\u05EA \\u05DE\\u05D9\\u05E7\\u05D5\\u05DD \\u05D4\\u05D1\\u05D9\\u05EA \\u05E9\\u05DC \\u05DB\\u05DC \\u05D0\\u05D5\\u05D1\\u05D9\\u05D9\\u05E7\\u05D8 \\u05D1\\u05D2\\u05D5\\u05E3 \\u05D4\\u05E7\\u05D5\\u05D1\\u05E5. \\u05D6\\u05D4 \\u05DE\\u05D0\\u05E4\\u05E9\\u05E8 \\u05D2\\u05D9\\u05E9\\u05D4 \\u05D0\\u05E7\\u05E8\\u05D0\\u05D9\\u05EA \\u05E9\\u05DC \\u05D4\\u05DE\\u05E1\\u05DE\\u05DA, \\u05D5\\u05DC\\u05DB\\u05DF \\u05D1\\u05E2\\u05EA \\u05E2\\u05D9\\u05D1\\u05D5\\u05D3 \\u05D3\\u05E3, \\u05E8\\u05E7 \\u05D0\\u05EA \\u05D4\\u05D0\\u05D5\\u05D1\\u05D9\\u05D9\\u05E7\\u05D8\\u05D9\\u05DD \\u05D4\\u05E0\\u05D3\\u05E8\\u05E9\\u05D9\\u05DD \\u05E2\\u05D1\\u05D5\\u05E8 \\u05D3\\u05E3 \\u05D6\\u05D4 \\u05E0\\u05E7\\u05E8\\u05D0\\u05D9\\u05DD \\u05DE\\u05EA\\u05D5\\u05DA \\u05D4\\u05E7\\u05D5\\u05D1\\u05E5. \\u05D6\\u05D4 \\u05E2\\u05D5\\u05E9\\u05D4 \\u05DE\\u05E1\\u05DE\\u05DB\\u05D9 PDF \\u05D4\\u05E8\\u05D1\\u05D4 \\u05D9\\u05D5\\u05EA\\u05E8 \\u05DE\\u05D4\\u05E8 \\u05DE\\u05D0\\u05E9\\u05E8 \\u05E7\\u05D5\\u05D3\\u05DE\\u05D9\\u05D5 PostScript, \\u05D0\\u05E9\\u05E8 \\u05D4\\u05D9\\u05D4 \\u05E6\\u05E8\\u05D9\\u05DA \\u05DC\\u05E7\\u05E8\\u05D5\\u05D0 \\u05D0\\u05EA \\u05DB\\u05DC \\u05D4\\u05E7\\u05D5\\u05D1\\u05E5 \\u05DC\\u05E4\\u05E0\\u05D9 \\u05E2\\u05D9\\u05D1\\u05D5\\u05D3 \\u05D6\\u05D4.\", hebrewFont, rect1, brush, format);\n                            // Save and clean up\n                            pdf.save('RTLText.pdf');\n                            pdf.destroy();\n                            return [2 /*return*/];\n                    }\n                });\n            });\n        }\n        return {};\n    }\n}));\nvar input1 = 'https://cdn.syncfusion.com/content/pdf-resources/noto-naskh-arabic-regular.ttf';\nvar input2 = 'https://cdn.syncfusion.com/content/pdf-resources/noto-sans-hebrew-medium.ttf';\nfunction fetchAsUint8Array(url) {\n    return __awaiter(this, void 0, void 0, function () {\n        var res, buf;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, fetch(url, { cache: 'no-cache' })];\n                case 1:\n                    res = _a.sent();\n                    if (!res.ok)\n                        throw new Error(\"Failed to fetch \".concat(url, \": \").concat(res.status, \" \").concat(res.statusText));\n                    return [4 /*yield*/, res.arrayBuffer()];\n                case 2:\n                    buf = _a.sent();\n                    return [2 /*return*/, new Uint8Array(buf)];\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/rtl-text/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D\n}");

/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/rtl-text/App.vue?vue&type=template&id=c9fe3eda&ts=true"
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/rtl-text/App.vue?vue&type=template&id=c9fe3eda&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, _cache[0] || (_cache[0] = [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div class=\\\"control-section\\\"><div class=\\\"tablediv\\\" style=\\\"font-size:14px;\\\"> Click the button to view a PDF document generated by JavaScript PDF Library. Please note that Adobe Reader or its equivalent is required to view the resultant document. </div><!-- Add spacing before button --><div class=\\\"button-section\\\" style=\\\"margin-left:15px;margin-top:20px;\\\"><div id=\\\"button-control\\\"><div class=\\\"row\\\"><input type=\\\"submit\\\" id=\\\"normalbtn\\\" class=\\\"e-btn\\\" value=\\\"Generate PDF\\\" style=\\\"width:150px;text-transform:capitalize;\\\"></div></div></div></div><div id=\\\"action-description\\\"><p> This sample demonstrates drawing right-to-left language text in the PDF document. It is possible to draw RTL languages such as Arabic, Hebrew, Persian, Urdu and more. </p></div><div id=\\\"description\\\"><p>It is also possible to draw Unicode text. More information about RTL text drawing can be found in this documentation <a href=\\\"https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/text#drawing-right-to-left-text\\\">section</a>. </p></div>\", 3)\n    ])));\n}\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/rtl-text/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D\n}");

/***/ },

/***/ "./Samples/pdf/rtl-text/App.vue"
/*!**************************************!*\
  !*** ./Samples/pdf/rtl-text/App.vue ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_c9fe3eda_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=c9fe3eda&ts=true */ \"./Samples/pdf/rtl-text/App.vue?vue&type=template&id=c9fe3eda&ts=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts */ \"./Samples/pdf/rtl-text/App.vue?vue&type=script&lang=ts\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_c9fe3eda_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/pdf/rtl-text/App.vue\"]])\n/* hot reload */\nif (false) // removed by dead control flow\n{}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/rtl-text/App.vue?\n}");

/***/ },

/***/ "./Samples/pdf/rtl-text/App.vue?vue&type=script&lang=ts"
/*!**************************************************************!*\
  !*** ./Samples/pdf/rtl-text/App.vue?vue&type=script&lang=ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=ts */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/rtl-text/App.vue?vue&type=script&lang=ts\");\n \n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/rtl-text/App.vue?\n}");

/***/ },

/***/ "./Samples/pdf/rtl-text/App.vue?vue&type=template&id=c9fe3eda&ts=true"
/*!****************************************************************************!*\
  !*** ./Samples/pdf/rtl-text/App.vue?vue&type=template&id=c9fe3eda&ts=true ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_c9fe3eda_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_c9fe3eda_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=c9fe3eda&ts=true */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/rtl-text/App.vue?vue&type=template&id=c9fe3eda&ts=true\");\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/rtl-text/App.vue?\n}");

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
/******/ 			"pdf/rtl-text/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/pdf/rtl-text/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;