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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n(0,_ui__WEBPACK_IMPORTED_MODULE_0__.loadUI)();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadUI\": () => (/* binding */ loadUI)\n/* harmony export */ });\nfunction loadUI() {\n    const header = createHeader();\n    const mainContent = createMainContent();\n    const footer = createFooter();\n\n    document.body.append(header, mainContent, footer);\n}\n\nfunction createShipPlacementForm() {\n\n}\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    const heading = document.createElement(\"h1\");\n\n    heading.textContent = \"Battleship\";\n    header.appendChild(heading);\n    return header;\n}\n\nfunction createMainContent() {\n    const mainContent = document.createElement(\"section\");\n    mainContent.classList.add(\"main\");\n    let userBoard = createInitialBoard();\n    let enemyBoard = createInitialBoard();\n    mainContent.append(userBoard, enemyBoard);\n\n    return mainContent;\n}\n\nfunction createInitialBoard() {\n    let board = document.createElement(\"div\");\n    board.classList.add(\"board\");\n    \n    for (let x = 0; x < 10; ++x) {\n        let boardRow = document.createElement(\"div\");\n        boardRow.classList.add(\"board-row\");\n\n        for (let y = 0; y < 10; ++y) {\n            let square = document.createElement(\"div\");\n            square.classList.add(\"board-square\");\n            //TODO Make it so that clicking the enemy board's square attacks it\n            boardRow.appendChild(square);\n        }\n        board.appendChild(boardRow);\n    }\n    return board;\n}\n\nfunction renderBoard(boardToRender) {\n    \n}\n\nfunction createFooter() {\n    const footer = document.createElement(\"footer\");\n    const authorNote = document.createElement(\"p\");\n\n    authorNote.textContent = \"Copyright © 2022 Peepachu\";\n    footer.appendChild(authorNote);\n    return footer;\n}\n\n//# sourceURL=webpack:///./src/ui.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;