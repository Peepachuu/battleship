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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nconst game = function() {\n    let user = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)();\n    let enemy = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)();\n\n    function playRound(userCordChoice) {\n        if (enemy.ownGameboard.hasBeenAttacked(userCordChoice))\n            return ;\n        user.attack(userCordChoice, enemy);\n        enemy.randomAttack(user);\n    }\n\n    function getUser() {\n        return user;\n    }\n\n    function getEnemy() {\n        return enemy;\n    }\n\n    function hasGameFinished() {\n        return (user.ownGameboard.allShipsSunk() || enemy.ownGameboard.allShipsSunk());\n    }\n\n    return {\n        playRound,\n        getEnemy,\n        getUser,\n        hasGameFinished\n    }\n}();\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboard\": () => (/* binding */ gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nconst gameboard = function() {\n\n    let board = [];\n    let ships = [];\n\n    for (let x = 0; x < 10; ++x) {\n        let row = [];\n        for (let y = 0; y < 10; ++y) {\n            row.push({containsShip: -1, beenHit: false});\n        }\n        board.push(row);\n    }\n\n    function placeShip(start, length, isHorizontal) {\n        let shipToPlace = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(length);\n        ships.push(shipToPlace);\n        if (isHorizontal) {\n            for (let i = start[1]; i < start[1] + length; ++i) {\n                board[start[0]][i].containsShip = ships.length - 1;\n            }\n        } else {\n            for (let i = start[0]; i < start[0] + length; ++i) {\n                board[i][start[1]].containsShip = ships.length - 1;\n            }\n        }\n    }\n    \n    function receiveAttack(coordinate) {\n        board[coordinate[0]][coordinate[1]].beenHit = true;\n    }\n\n    function hasBeenAttacked(coordinate) {\n        return (board[coordinate[0]][coordinate[1]].beenHit);\n    }\n\n    function hasShip(coordinate) {\n        return (board[coordinate[0]][coordinate[1]].containsShip);\n    }\n\n    function getBoard() {\n        return board;\n    }\n\n    function isOutOfBounds(start, length, isHorizontal) {\n        if (isHorizontal) {\n            return start[1] + length - 1 > 9;\n        }\n        return start[0] + length - 1> 9;\n    }\n\n    function willCollide(start, length, isHorizontal) {\n        if (isHorizontal) {\n            for (let i = start[1]; i < start[1] + length; ++i) {\n                if (board[start[0]][i].containsShip != -1)\n                    return true;\n            }\n        } else {\n            for (let i = start[0]; i < start[0] + length; ++i) {\n                if (board[i][start[1]].containsShip != -1)\n                    return true;\n            }\n        }\n        return false;\n    }\n\n    function allShipsSunk() {\n        for (const shipToCheck of ships) {\n            if (!shipToCheck.isSunk())\n                return false;\n        }\n        return true;\n    }\n\n    return {\n        placeShip,\n        receiveAttack,\n        hasBeenAttacked,\n        getBoard,\n        isOutOfBounds,\n        willCollide,\n        hasShip,\n        allShipsSunk\n    }\n}\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n(0,_ui__WEBPACK_IMPORTED_MODULE_0__.loadUI)();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst player = function() {\n    const ownGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)();\n\n    function attack(cord, playerToAttack) {\n        playerToAttack.ownGameboard.receiveAttack(cord);\n    }\n\n    function randomAttack(playerToAttack) {\n        let cordX;\n        let cordY;\n        do {\n            cordX = Math.floor(Math.random() * 10);\n            cordY = Math.floor(Math.random() * 10);\n        } while (playerToAttack.ownGameboard.hasBeenAttacked([cordX, cordY]));\n        playerToAttack.ownGameboard.receiveAttack([cordX, cordY]);\n    }\n\n    return {\n        ownGameboard,\n        attack,\n        randomAttack\n    }\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ship\": () => (/* binding */ ship)\n/* harmony export */ });\nconst ship = function(length) {\n\n    let hitCount = 0;\n    function hit() {\n        ++hitCount;\n    }\n\n    function isSunk() {\n        return (hitCount >= length);\n    }\n\n    function getHitCount() {\n        return hitCount;\n    }\n\n    return {\n        hit,\n        isSunk,\n        getHitCount\n    }\n};\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadUI\": () => (/* binding */ loadUI)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nfunction loadUI() {\n    const header = createHeader();\n    const mainContent = createMainContent();\n    const footer = createFooter();\n    const overlay = createShipPlacementPopUp();\n\n    document.body.append(header, mainContent, footer, overlay);\n}\n\nfunction createShipPlacementPopUp() {\n    const background = document.createElement(\"div\");\n    background.classList.add(\"overlay\");\n\n    const popUp = document.createElement(\"div\");\n    popUp.classList.add(\"popUp\");\n\n    const heading = document.createElement(\"h2\");\n    heading.textContent = \"Welcome to the battleship game\";\n\n    const info = document.createElement(\"span\");\n    info.textContent = \"Place your ships\";\n\n    const rotateButton = document.createElement(\"button\");\n    rotateButton.addEventListener('click', () => {\n        isHorizontal = !isHorizontal;\n    });\n    rotateButton.textContent = \"Rotate\";\n\n    const userBoard = createInitialBoard();\n    userBoard.classList.add(\"interactible\");\n    let isHorizontal = true;\n    let length = 5;\n\n    const boardRows = userBoard.childNodes;\n    const board = _game__WEBPACK_IMPORTED_MODULE_0__.game.getUser().ownGameboard;\n    for (let x = 0; x < 10; ++x) {\n        const boardSquares = boardRows[x].childNodes;\n        for (let y = 0; y < 10; ++y) {\n            boardSquares[y].addEventListener('click', () => {\n                if (board.isOutOfBounds([x, y], length, isHorizontal) || board.willCollide([x, y], length, isHorizontal))\n                    return ;\n                board.placeShip([x, y], length--, isHorizontal);\n                renderBoard(board, userBoard);\n\n                if (length == 1) {\n                    const boardOnScreen = document.querySelector(\".user\");\n                    renderBoard(board, boardOnScreen);\n                    background.remove();\n                }\n            });\n        }\n    }\n\n    popUp.append(heading, info, rotateButton, userBoard);\n    background.appendChild(popUp);\n\n    return background;\n}\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    const heading = document.createElement(\"h1\");\n\n    heading.textContent = \"Battleship\";\n    header.appendChild(heading);\n    return header;\n}\n\nfunction createMainContent() {\n    const mainContent = document.createElement(\"section\");\n    mainContent.classList.add(\"main\");\n\n    let userBoard = createInitialBoard();\n    let enemyBoard = createInitialBoard();\n    enemyBoard.classList.add(\"interactible\");\n    userBoard.classList.add(\"user\");\n    makeAttackable(enemyBoard, userBoard);\n\n    mainContent.append(userBoard, enemyBoard);\n    return mainContent;\n}\n\nfunction createInitialBoard() {\n    let board = document.createElement(\"div\");\n    board.classList.add(\"board\");\n    \n    for (let x = 0; x < 10; ++x) {\n        let boardRow = document.createElement(\"div\");\n        boardRow.classList.add(\"board-row\");\n\n        for (let y = 0; y < 10; ++y) {\n            let square = document.createElement(\"div\");\n            square.classList.add(\"board-square\");\n            boardRow.appendChild(square);\n        }\n        board.appendChild(boardRow);\n    }\n    return board;\n}\n\nfunction renderBoard(boardToRender, boardOnScreen) {\n    const rootStyles = getComputedStyle(document.documentElement);\n    const boardOnScreenRows = boardOnScreen.childNodes;\n    for (let x = 0; x < 10; ++x) {\n        const boardSquares = boardOnScreenRows[x].childNodes;\n        for (let y = 0; y < 10; ++y) {\n            if (boardToRender.hasShip([x, y]) != -1) {\n                if (boardToRender.hasBeenAttacked([x, y]))\n                    boardSquares[y].style.backgroundColor = rootStyles.getPropertyValue(\"--hit-ship-square-color\");\n                else\n                    boardSquares[y].style.backgroundColor = rootStyles.getPropertyValue(\"--ship-square-color\");\n            } else {\n                if (boardToRender.hasBeenAttacked([x, y]))\n                    boardSquares[y].style.backgroundColor = rootStyles.getPropertyValue(\"--empty-square-color\");\n            }\n        }\n    }\n}\n\nfunction makeAttackable(enemyBoard, userBoard) {\n    const enemyBoardRows = enemyBoard.childNodes;\n    for (let x = 0; x < 10; ++x) {\n        const boardSquares = enemyBoardRows[x].childNodes;\n        for (let y = 0; y < 10; ++y) {\n            boardSquares[y].addEventListener('click', () => {\n                _game__WEBPACK_IMPORTED_MODULE_0__.game.playRound([x, y]);\n                renderBoard(_game__WEBPACK_IMPORTED_MODULE_0__.game.getEnemy().ownGameboard, enemyBoard);\n                renderBoard(_game__WEBPACK_IMPORTED_MODULE_0__.game.getUser().ownGameboard, userBoard);\n            });\n        }\n    }\n}\n\nfunction createFooter() {\n    const footer = document.createElement(\"footer\");\n    const authorNote = document.createElement(\"p\");\n\n    authorNote.textContent = \"Copyright © 2022 Peepachu\";\n    footer.appendChild(authorNote);\n    return footer;\n}\n\nfunction createGameEndingPopUp() {\n\n}\n//TODO Make the user able to place ships in their board\n//TODO Create a pop up when the game ends\n\n//# sourceURL=webpack:///./src/ui.js?");

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