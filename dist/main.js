/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import Example from \"./scripts/example\";\n\nasync function fetchQuestions(num, difficulty, cat) {\n  let url = `https://opentdb.com/api.php?`;\n  if (cat) {\n    url += `amount=${num}&category=${cat}&difficulty=${difficulty}&type=multiple`;\n  } else {\n    url += `amount=${num}&difficulty=${difficulty}&type=multiple`;\n  }\n  const res = await fetch(url);\n  const questions = await res.json();\n  console.log(questions.results[0].question);\n  const main = document.getElementById(\"main\");\n  main.innerText = questions.results[0].question;\n  // fetch(url).then(res => { res.json() }).then(questions => console.log(questions))\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Hello World!\");\n  const startButton = document.getElementById(\"startButton\");\n  startButton.document.addEventListener(\"click\");\n\n  // const main = document.getElementById(\"main\");\n  // new Example(main);\n  // fetchQuestions(4, \"easy\")\n});\n\n// fetchQuestions(4, \"easy\")//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJmZXRjaFF1ZXN0aW9ucyIsIm51bSIsImRpZmZpY3VsdHkiLCJjYXQiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsInF1ZXN0aW9ucyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0cyIsInF1ZXN0aW9uIiwibWFpbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRCdXR0b24iXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hRdWVzdGlvbnMobnVtLCBkaWZmaWN1bHR5LCBjYXQpIHtcbiAgICBsZXQgdXJsID0gYGh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9gXG4gICAgaWYgKGNhdCkge1xuICAgICAgICB1cmwgKz0gYGFtb3VudD0ke251bX0mY2F0ZWdvcnk9JHtjYXR9JmRpZmZpY3VsdHk9JHtkaWZmaWN1bHR5fSZ0eXBlPW11bHRpcGxlYFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCArPSBgYW1vdW50PSR7bnVtfSZkaWZmaWN1bHR5PSR7ZGlmZmljdWx0eX0mdHlwZT1tdWx0aXBsZWBcbiAgICB9XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBxdWVzdGlvbnMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9ucy5yZXN1bHRzWzBdLnF1ZXN0aW9uKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4uaW5uZXJUZXh0ID0gcXVlc3Rpb25zLnJlc3VsdHNbMF0ucXVlc3Rpb247XG4gICAgLy8gZmV0Y2godXJsKS50aGVuKHJlcyA9PiB7IHJlcy5qc29uKCkgfSkudGhlbihxdWVzdGlvbnMgPT4gY29uc29sZS5sb2cocXVlc3Rpb25zKSlcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZCFcIik7XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0QnV0dG9uXCIpO1xuICAgIHN0YXJ0QnV0dG9uLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCApXG5cbiAgICAvLyBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIC8vIG5ldyBFeGFtcGxlKG1haW4pO1xuICAgIC8vIGZldGNoUXVlc3Rpb25zKDQsIFwiZWFzeVwiKVxufSk7XG5cblxuLy8gZmV0Y2hRdWVzdGlvbnMoNCwgXCJlYXN5XCIpXG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsZUFBZUEsY0FBY0EsQ0FBQ0MsR0FBRyxFQUFFQyxVQUFVLEVBQUVDLEdBQUcsRUFBRTtFQUNoRCxJQUFJQyxHQUFHLEdBQUksOEJBQTZCO0VBQ3hDLElBQUlELEdBQUcsRUFBRTtJQUNMQyxHQUFHLElBQUssVUFBU0gsR0FBSSxhQUFZRSxHQUFJLGVBQWNELFVBQVcsZ0JBQWU7RUFDakYsQ0FBQyxNQUFNO0lBQ0hFLEdBQUcsSUFBSyxVQUFTSCxHQUFJLGVBQWNDLFVBQVcsZ0JBQWU7RUFDakU7RUFDQSxNQUFNRyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLENBQUM7RUFDNUIsTUFBTUcsU0FBUyxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxTQUFTLENBQUNJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDO0VBQzFDLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDRixJQUFJLENBQUNHLFNBQVMsR0FBR1QsU0FBUyxDQUFDSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLFFBQVE7RUFDOUM7QUFDSjs7QUFFQUUsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3JEUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDM0IsTUFBTVEsV0FBVyxHQUFHSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFDMURHLFdBQVcsQ0FBQ0osUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFTLENBQUM7O0VBRWhEO0VBQ0E7RUFDQTtBQUNKLENBQUMsQ0FBQzs7QUFHRiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;