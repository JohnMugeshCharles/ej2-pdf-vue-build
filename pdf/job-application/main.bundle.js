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

/***/ "./Samples/pdf/job-application/main.js"
/*!*********************************************!*\
  !*** ./Samples/pdf/job-application/main.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pdf/job-application/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/job-application/main.js?\n}");

/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/job-application/App.vue?vue&type=script&lang=ts"
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/job-application/App.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"./node_modules/@syncfusion/ej2-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-pdf */ \"./node_modules/@syncfusion/ej2-pdf/index.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n    name: 'JobApplication',\n    setup: function () {\n        var _this = this;\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {\n            var generateBtn = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__.Button();\n            generateBtn.appendTo('#generatebtn');\n            generateBtn.element.onclick = function () { return __awaiter(_this, void 0, void 0, function () {\n                var document_1, page_1, form_1, normalFont_1, boldFont, titleFont, subTitleFont, tealBrush, blackBrush_1, blackPen, grayPen, whiteBrush, navyBrush, navyPen, graphics_1, y_1, titleY, pageWidth, leftMargin, rightMargin, innerWidth_1, fieldWidth, firstNameField, lastNameField, emailField, phoneField, positionField, eduOptions, eduOptions2, currentlyEmployedCheckbox, jobTitleField, employerField, salaryField, reasonField, dutiesField, page2, graphics2, y2, empTypeField, signatureField, dateField, termsCheckbox1, termsCheckbox2, termsCheckbox3, button;\n                return __generator(this, function (_a) {\n                    try {\n                        document_1 = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfDocument();\n                        page_1 = document_1.addPage();\n                        form_1 = document_1.form;\n                        normalFont_1 = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfStandardFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.helvetica, 10, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n                        boldFont = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfStandardFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.helvetica, 10, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n                        titleFont = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfStandardFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.helvetica, 17, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n                        subTitleFont = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfStandardFont(_syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontFamily.helvetica, 9, _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfFontStyle.regular);\n                        tealBrush = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 128, b: 128 });\n                        blackBrush_1 = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 0, g: 0, b: 0 });\n                        blackPen = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 0, g: 0, b: 0 }, 1);\n                        grayPen = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 102, g: 106, b: 109 }, 1);\n                        whiteBrush = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 255, g: 255, b: 255 });\n                        navyBrush = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 19, g: 43, b: 66 });\n                        navyPen = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfPen({ r: 19, g: 43, b: 66 }, 1);\n                        graphics_1 = page_1.graphics;\n                        y_1 = 20;\n                        // Title Section\n                        graphics_1.drawRoundedRectangle({ x: 20, y: y_1, width: page_1.graphics.clientSize.width - 40, height: 55 }, 5, navyPen, navyBrush);\n                        y_1 += 10;\n                        titleY = y_1;\n                        graphics_1.drawString('Job Application', titleFont, { x: 30, y: titleY, width: 300, height: 30 }, whiteBrush);\n                        y_1 += 25;\n                        graphics_1.drawString(\"We look forward to receiving your application. please fill in all required fields.\", subTitleFont, { x: 30, y: y_1, width: 400, height: 30 }, tealBrush);\n                        y_1 += 35;\n                        // --- PERSONAL INFORMATION SECTION ---\n                        // Section Header\n                        graphics_1.drawRectangle({ x: 20, y: y_1, width: page_1.graphics.clientSize.width - 40, height: 20 }, tealBrush);\n                        graphics_1.drawString('Personal Information', boldFont, { x: 25, y: y_1 + 3, width: 500, height: 20 }, whiteBrush);\n                        y_1 += 35;\n                        pageWidth = page_1.graphics.clientSize.width;\n                        leftMargin = 20;\n                        rightMargin = 20;\n                        innerWidth_1 = pageWidth - leftMargin - rightMargin;\n                        fieldWidth = innerWidth_1 / 2 - 5;\n                        // First Name\n                        graphics_1.drawString('First Name *', normalFont_1, { x: leftMargin, y: y_1, width: fieldWidth, height: 15 }, blackBrush_1);\n                        firstNameField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextBoxField(page_1, 'FirstName', { x: leftMargin, y: y_1 + 15, width: fieldWidth, height: 20 });\n                        firstNameField.setAppearance(true);\n                        form_1.add(firstNameField);\n                        // Last Name\n                        graphics_1.drawString('Last Name *', normalFont_1, { x: leftMargin + fieldWidth + 10, y: y_1, width: fieldWidth, height: 15 }, blackBrush_1);\n                        lastNameField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextBoxField(page_1, 'LastName', { x: leftMargin + fieldWidth + 10, y: y_1 + 15, width: fieldWidth, height: 20 });\n                        lastNameField.setAppearance(true);\n                        form_1.add(lastNameField);\n                        y_1 += 50;\n                        // Email Address\n                        graphics_1.drawString('Email Address *', normalFont_1, { x: leftMargin, y: y_1, width: fieldWidth, height: 15 }, blackBrush_1);\n                        emailField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextBoxField(page_1, 'Email', { x: leftMargin, y: y_1 + 15, width: fieldWidth, height: 20 });\n                        emailField.setAppearance(true);\n                        form_1.add(emailField);\n                        // Business Phone\n                        graphics_1.drawString('Business Phone', normalFont_1, { x: leftMargin + fieldWidth + 10, y: y_1, width: fieldWidth, height: 15 }, blackBrush_1);\n                        phoneField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextBoxField(page_1, 'Phone', { x: leftMargin + fieldWidth + 10, y: y_1 + 15, width: fieldWidth, height: 20 });\n                        phoneField.setAppearance(true);\n                        form_1.add(phoneField);\n                        y_1 += 50;\n                        // Position Applied For\n                        graphics_1.drawString('Position Applied For *', normalFont_1, { x: 20, y: y_1, width: 430, height: 15 }, blackBrush_1);\n                        positionField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfComboBoxField(page_1, 'Position', { x: 20, y: y_1 + 15, width: fieldWidth, height: 20 });\n                        positionField.addItem(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListFieldItem('-- Select a role --', 'SR'));\n                        positionField.addItem(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListFieldItem('Software Engineer', 'SE'));\n                        positionField.addItem(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListFieldItem('Senior Developer', 'SD'));\n                        positionField.addItem(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListFieldItem('Project Manager', 'PM'));\n                        positionField.addItem(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListFieldItem('QA Engineer', 'QA'));\n                        positionField.selectedIndex = 0;\n                        positionField.editable = true;\n                        positionField.setAppearance(true);\n                        form_1.add(positionField);\n                        y_1 += 55;\n                        // --- EDUCATION SECTION ---\n                        graphics_1.drawLine(grayPen, { x: 20, y: y_1 }, { x: page_1.graphics.clientSize.width - 20, y: y_1 });\n                        y_1 += 20;\n                        graphics_1.drawRectangle({ x: 20, y: y_1, width: page_1.graphics.clientSize.width - 40, height: 20 }, tealBrush);\n                        graphics_1.drawString('Education', boldFont, { x: 25, y: y_1 + 3, width: 500, height: 20 }, whiteBrush);\n                        y_1 += 35;\n                        graphics_1.drawString('Please select the highest level of education you have completed.', normalFont_1, { x: 20, y: y_1, width: 520, height: 15 }, blackBrush_1);\n                        y_1 += 30;\n                        eduOptions = [\n                            { name: 'AssociateDegree', label: 'Associate Degree', x: 20 },\n                            { name: 'BachelorDegree', label: 'Bachelor\\'s Degree', x: 210 },\n                            { name: 'CollegeDiploma', label: 'College / Diploma', x: 390 }\n                        ];\n                        eduOptions.forEach(function (option) {\n                            var checkBox = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfCheckBoxField(option.name, { x: option.x, y: y_1, width: 15, height: 15 }, page_1);\n                            checkBox.setAppearance(true);\n                            form_1.add(checkBox);\n                            graphics_1.drawString(option.label, normalFont_1, { x: option.x + 20, y: y_1, width: 150, height: 15 }, blackBrush_1);\n                        });\n                        y_1 += 35;\n                        eduOptions2 = [\n                            { name: 'Postgraduate', label: 'Postgraduate (PG)', x: 20 },\n                            { name: 'MBA', label: 'MBA', x: 210 }\n                        ];\n                        eduOptions2.forEach(function (option) {\n                            var checkBox = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfCheckBoxField(option.name, { x: option.x, y: y_1, width: 15, height: 15 }, page_1);\n                            checkBox.checked = false;\n                            checkBox.setAppearance(true);\n                            form_1.add(checkBox);\n                            graphics_1.drawString(option.label, normalFont_1, { x: option.x + 20, y: y_1, width: 150, height: 15 }, blackBrush_1);\n                        });\n                        y_1 += 35;\n                        // --- EMPLOYMENT HISTORY SECTION ---\n                        graphics_1.drawLine(grayPen, { x: 20, y: y_1 }, { x: page_1.graphics.clientSize.width - 20, y: y_1 });\n                        y_1 += 20;\n                        graphics_1.drawRectangle({ x: 20, y: y_1, width: page_1.graphics.clientSize.width - 40, height: 20 }, tealBrush);\n                        graphics_1.drawString('Employment History', boldFont, { x: 25, y: y_1 + 3, width: 500, height: 20 }, whiteBrush);\n                        y_1 += 35;\n                        graphics_1.drawString('List your most recent position first.', normalFont_1, { x: 20, y: y_1, width: 520, height: 15 }, blackBrush_1);\n                        y_1 += 25;\n                        currentlyEmployedCheckbox = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfCheckBoxField('CurrentlyEmployed', { x: 20, y: y_1, width: 15, height: 15 }, page_1);\n                        currentlyEmployedCheckbox.setAppearance(true);\n                        form_1.add(currentlyEmployedCheckbox);\n                        graphics_1.drawString('I am currently employed at this company', normalFont_1, { x: 40, y: y_1, width: 440, height: 15 }, blackBrush_1);\n                        y_1 += 35;\n                        // Job Title\n                        graphics_1.drawString('Job Title *', normalFont_1, { x: leftMargin, y: y_1, width: fieldWidth, height: 15 }, blackBrush_1);\n                        jobTitleField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextBoxField(page_1, 'JobTitle', { x: leftMargin, y: y_1 + 15, width: fieldWidth, height: 20 });\n                        jobTitleField.setAppearance(true);\n                        form_1.add(jobTitleField);\n                        // Employer\n                        graphics_1.drawString('Employer *', normalFont_1, { x: leftMargin + fieldWidth + 10, y: y_1, width: fieldWidth, height: 15 }, blackBrush_1);\n                        employerField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextBoxField(page_1, 'Employer', { x: leftMargin + fieldWidth + 10, y: y_1 + 15, width: fieldWidth, height: 20 });\n                        employerField.setAppearance(true);\n                        form_1.add(employerField);\n                        y_1 += 50;\n                        // Annual Salary\n                        graphics_1.drawString('Annual Salary', normalFont_1, { x: leftMargin, y: y_1, width: fieldWidth, height: 15 }, blackBrush_1);\n                        salaryField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextBoxField(page_1, 'Salary', { x: leftMargin, y: y_1 + 15, width: fieldWidth, height: 20 });\n                        salaryField.setAppearance(true);\n                        form_1.add(salaryField);\n                        // Reason for Leaving\n                        graphics_1.drawString('Reason for Leaving', normalFont_1, { x: leftMargin + fieldWidth + 10, y: y_1, width: fieldWidth, height: 15 }, blackBrush_1);\n                        reasonField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextBoxField(page_1, 'ReasonForLeaving', { x: leftMargin + fieldWidth + 10, y: y_1 + 15, width: fieldWidth, height: 20 });\n                        reasonField.setAppearance(true);\n                        form_1.add(reasonField);\n                        y_1 += 50;\n                        // Key Duties and Responsibilities\n                        graphics_1.drawString('Key Duties & Responsibilities *', normalFont_1, { x: 20, y: y_1, width: innerWidth_1, height: 15 }, blackBrush_1);\n                        dutiesField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextBoxField(page_1, 'Duties', { x: 20, y: y_1 + 15, width: innerWidth_1, height: 60 });\n                        dutiesField.multiLine = true;\n                        dutiesField.setAppearance(true);\n                        form_1.add(dutiesField);\n                        y_1 += 85;\n                        page2 = document_1.addPage();\n                        graphics2 = page2.graphics;\n                        y2 = 20;\n                        // Employment Type\n                        graphics2.drawString('Employment Type', normalFont_1, { x: 20, y: y2, width: fieldWidth, height: 15 }, blackBrush_1);\n                        y2 += 25;\n                        empTypeField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfComboBoxField(page2, 'EmploymentType', { x: 20, y: y2, width: fieldWidth, height: 20 });\n                        empTypeField.addItem(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListFieldItem('-- Select --', 'Select'));\n                        empTypeField.addItem(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListFieldItem('Full-Time', 'FT'));\n                        empTypeField.addItem(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListFieldItem('Part-Time', 'PT'));\n                        empTypeField.addItem(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListFieldItem('Contract', 'C'));\n                        empTypeField.addItem(new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfListFieldItem('Temporary', 'T'));\n                        empTypeField.selectedIndex = 0;\n                        empTypeField.editable = true;\n                        empTypeField.setAppearance(true);\n                        form_1.add(empTypeField);\n                        y2 += 40;\n                        // --- DECLARATION & SIGNATURE SECTION ---\n                        graphics2.drawLine(grayPen, { x: 20, y: y2 }, { x: page_1.graphics.clientSize.width - 20, y: y2 });\n                        y2 += 20;\n                        graphics2.drawRectangle({ x: 20, y: y2, width: page2.graphics.clientSize.width - 40, height: 20 }, tealBrush);\n                        graphics2.drawString('Declaration & Signature', boldFont, { x: 25, y: y2 + 3, width: 500, height: 20 }, whiteBrush);\n                        y2 += 35;\n                        // Declaration box\n                        graphics2.drawRectangle({ x: 20, y: y2, width: page_1.graphics.clientSize.width - 40, height: 55 }, new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfBrush({ r: 220, g: 240, b: 255 }));\n                        graphics2.drawString('I declare that all information provided in this application is true, accurate, and complete. I understand that any misrepresentation or omission of information may result in disqualification from consideration or, if employed, dismissal. I consent to the collection and processing of my personal data for recruitment purposes.', normalFont_1, { x: 25, y: y2 + 5, width: innerWidth_1, height: 70 }, blackBrush_1);\n                        y2 += 75;\n                        // Applicant Signature Section\n                        graphics2.drawString('Applicant Signature *', boldFont, { x: leftMargin, y: y2, width: fieldWidth, height: 15 }, blackBrush_1);\n                        signatureField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfSignatureField(page2, 'ApplicantSignature', { x: leftMargin, y: y2 + 15, width: fieldWidth, height: 40 });\n                        signatureField.setAppearance(true);\n                        form_1.add(signatureField);\n                        // Date Section\n                        graphics2.drawString('Date *', boldFont, { x: leftMargin + fieldWidth + 10, y: y2, width: fieldWidth, height: 15 }, blackBrush_1);\n                        dateField = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfTextBoxField(page2, 'SignatureDate', { x: leftMargin + fieldWidth + 10, y: y2 + 15, width: fieldWidth, height: 40 });\n                        dateField.setAppearance(true);\n                        form_1.add(dateField);\n                        y2 += 75;\n                        // Line separator\n                        graphics2.drawLine(grayPen, { x: 20, y: y2 }, { x: page_1.graphics.clientSize.width - 20, y: y2 });\n                        y2 += 20;\n                        // Additional Terms Section\n                        graphics2.drawRectangle({ x: 20, y: y2, width: innerWidth_1, height: 20 }, tealBrush);\n                        graphics2.drawString('Additional Terms & Conditions', boldFont, { x: 25, y: y2 + 3, width: innerWidth_1, height: 20 }, whiteBrush);\n                        y2 += 40;\n                        termsCheckbox1 = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfCheckBoxField('TermsAgree', { x: 20, y: y2, width: 15, height: 15 }, page2);\n                        termsCheckbox1.setAppearance(true);\n                        form_1.add(termsCheckbox1);\n                        graphics2.drawString('I agree to the terms and conditions of employment', normalFont_1, { x: 40, y: y2, width: 460, height: 15 }, blackBrush_1);\n                        y2 += 35;\n                        termsCheckbox2 = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfCheckBoxField('BackgroundCheck', { x: 20, y: y2, width: 15, height: 15 }, page2);\n                        termsCheckbox2.setAppearance(true);\n                        form_1.add(termsCheckbox2);\n                        graphics2.drawString('I authorize background check and reference verification', normalFont_1, { x: 40, y: y2, width: 460, height: 15 }, blackBrush_1);\n                        y2 += 35;\n                        termsCheckbox3 = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfCheckBoxField('PrivacyPolicy', { x: 20, y: y2, width: 15, height: 15 }, page2);\n                        termsCheckbox3.setAppearance(true);\n                        form_1.add(termsCheckbox3);\n                        graphics2.drawString('I have read and accepted the Privacy Policy', normalFont_1, { x: 40, y: y2, width: 460, height: 15 }, blackBrush_1);\n                        y2 += 35;\n                        // Submission information\n                        graphics2.drawLine(grayPen, { x: 20, y: y2 }, { x: page_1.graphics.clientSize.width - 20, y: y2 });\n                        y2 += 20;\n                        graphics2.drawString('* Required field', normalFont_1, { x: 20, y: y2, width: 200, height: 15 }, blackBrush_1);\n                        y2 += 35;\n                        button = new _syncfusion_ej2_pdf__WEBPACK_IMPORTED_MODULE_2__.PdfButtonField(page2, 'Submit', { x: 350, y: y2 + 6, width: 130, height: 30 });\n                        button.font = boldFont;\n                        button.text = 'Submit Application';\n                        button.color = { r: 255, g: 255, b: 255 };\n                        button.borderColor = { r: 34, g: 139, b: 34 };\n                        button.backColor = { r: 34, g: 139, b: 34 };\n                        button.setAppearance(true);\n                        form_1.add(button);\n                        document_1.save('JobApplication.pdf');\n                        document_1.destroy();\n                    }\n                    catch (err) {\n                        // eslint-disable-next-line no-console\n                        console.error('Generate PDF failed:', err);\n                    }\n                    return [2 /*return*/];\n                });\n            }); };\n        });\n        return {};\n    }\n}));\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/job-application/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D\n}");

/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/job-application/App.vue?vue&type=template&id=3e9be951&ts=true"
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/job-application/App.vue?vue&type=template&id=3e9be951&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, _cache[0] || (_cache[0] = [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div class=\\\"control-section\\\"><div class=\\\"tablediv\\\" style=\\\"font-size:14px;\\\"><div class=\\\"rowdiv\\\"><div class=\\\"celldiv\\\"><table width=\\\"100%\\\"><tbody><tr><td> Click the button to view a PDF document generated by JavaScript PDF Library. Please note that Adobe Reader or its equivalent is required to view the resultant document. </td></tr><tr><td align=\\\"left\\\"><br><input type=\\\"submit\\\" id=\\\"generatebtn\\\" class=\\\"e-btn\\\" value=\\\"Generate PDF\\\" style=\\\"width:150px;text-transform:capitalize;\\\"></td></tr></tbody></table></div></div></div></div><div id=\\\"action-description\\\" style=\\\"margin-top:10px;\\\"> This sample demonstrates the creation of a job application form using <a href=\\\"https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/formfields\\\">form fields.</a> The user can fill the form and download it as a PDF. </div><div id=\\\"description\\\" style=\\\"margin-top:10px;\\\"><p> This illustrates how to use the JavaScript PDF Library for requirements like invoices, job applications, pay slips, and more. More information can be found in this documentation <a href=\\\"https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview\\\">section</a>. </p></div>\", 3)\n    ])));\n}\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/job-application/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D\n}");

/***/ },

/***/ "./Samples/pdf/job-application/App.vue"
/*!*********************************************!*\
  !*** ./Samples/pdf/job-application/App.vue ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_3e9be951_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3e9be951&ts=true */ \"./Samples/pdf/job-application/App.vue?vue&type=template&id=3e9be951&ts=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts */ \"./Samples/pdf/job-application/App.vue?vue&type=script&lang=ts\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_3e9be951_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/pdf/job-application/App.vue\"]])\n/* hot reload */\nif (false) // removed by dead control flow\n{}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/job-application/App.vue?\n}");

/***/ },

/***/ "./Samples/pdf/job-application/App.vue?vue&type=script&lang=ts"
/*!*********************************************************************!*\
  !*** ./Samples/pdf/job-application/App.vue?vue&type=script&lang=ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=ts */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/job-application/App.vue?vue&type=script&lang=ts\");\n \n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/job-application/App.vue?\n}");

/***/ },

/***/ "./Samples/pdf/job-application/App.vue?vue&type=template&id=3e9be951&ts=true"
/*!***********************************************************************************!*\
  !*** ./Samples/pdf/job-application/App.vue?vue&type=template&id=3e9be951&ts=true ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_3e9be951_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_3e9be951_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=3e9be951&ts=true */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdf/job-application/App.vue?vue&type=template&id=3e9be951&ts=true\");\n\n\n//# sourceURL=webpack://ej2-document-processing-vue-samples/./Samples/pdf/job-application/App.vue?\n}");

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
/******/ 			"pdf/job-application/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/pdf/job-application/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;