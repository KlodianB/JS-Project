/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// import Example from \"./scripts/example\";\n\nasync function fetchQuestions(num, difficulty, cat) {\n  let url = `https://opentdb.com/api.php?`;\n  if (cat) {\n    url += `amount=${num}&category=${cat}&difficulty=${difficulty}&type=multiple`;\n  } else {\n    url += `amount=${num}&difficulty=${difficulty}&type=multiple`;\n  }\n  const res = await fetch(url);\n  const questions = await res.json();\n  new _scripts_game__WEBPACK_IMPORTED_MODULE_0__.Game(questions.results);\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const startButton = document.getElementById(\"startButton\");\n  startButton.addEventListener(\"click\", function () {\n    fetchQuestions(5, \"easy\");\n  });\n  const settingsButton = document.getElementById(\"settingsButton\");\n  settingsButton.addEventListener(\"click\", function () {\n    const main = document.getElementById(\"main\");\n    main.innerText = \"I hate my life\";\n  });\n  const leaderboard = document.getElementById(\"leaderboard\");\n  leaderboard.addEventListener(\"click\", function () {\n    const main = document.getElementById(\"main\");\n    main.innerText = \"you're a moron if you thought this would work\";\n  });\n});\n\n// console.log(print())\n\n// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple\n\n// async function fetchQuestions(num, difficulty, cat) {\n//     let url = `https://opentdb.com/api.php?`\n//     if (cat) {\n//         url += `amount=${num}&category=${cat}&difficulty=${difficulty}&type=multiple`\n//     } else {\n//         url += `amount=${num}&difficulty=${difficulty}&type=multiple`\n//     }\n//     const res = await fetch(url);\n//     const questions = await res.json();\n//     return questions.results;\n// };\n\n// fetchQuestions(4, \"easy\").then(results => console.log(results))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUN5QztBQUV6QyxlQUFlQyxjQUFjQSxDQUFDQyxHQUFHLEVBQUVDLFVBQVUsRUFBRUMsR0FBRyxFQUFFO0VBQ2hELElBQUlDLEdBQUcsR0FBSSw4QkFBNkI7RUFDeEMsSUFBSUQsR0FBRyxFQUFFO0lBQ0xDLEdBQUcsSUFBSyxVQUFTSCxHQUFJLGFBQVlFLEdBQUksZUFBY0QsVUFBVyxnQkFBZTtFQUNqRixDQUFDLE1BQU07SUFDSEUsR0FBRyxJQUFLLFVBQVNILEdBQUksZUFBY0MsVUFBVyxnQkFBZTtFQUNqRTtFQUNBLE1BQU1HLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztFQUM1QixNQUFNRyxTQUFTLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUNsQyxJQUFJVCwrQ0FBSSxDQUFDUSxTQUFTLENBQUNFLE9BQU8sQ0FBQztBQUMvQjtBQUtBQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckQsTUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFDMURELFdBQVcsQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDN0NYLGNBQWMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0VBQzdCLENBQUMsQ0FBQztFQUNGLE1BQU1jLGNBQWMsR0FBR0osUUFBUSxDQUFDRyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7RUFDaEVDLGNBQWMsQ0FBQ0gsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVU7SUFDL0MsTUFBTUksSUFBSSxHQUFHTCxRQUFRLENBQUNHLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDNUNFLElBQUksQ0FBQ0MsU0FBUyxHQUFHLGdCQUFnQjtFQUNyQyxDQUFDLENBQUM7RUFDRixNQUFNQyxXQUFXLEdBQUdQLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUMxREksV0FBVyxDQUFDTixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVTtJQUM1QyxNQUFNSSxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUM1Q0UsSUFBSSxDQUFDQyxTQUFTLEdBQUcsK0NBQStDO0VBQ3BFLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7QUFPRjs7QUFFQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuICAgIGltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIlxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFF1ZXN0aW9ucyhudW0sIGRpZmZpY3VsdHksIGNhdCkge1xuICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2BcbiAgICBpZiAoY2F0KSB7XG4gICAgICAgIHVybCArPSBgYW1vdW50PSR7bnVtfSZjYXRlZ29yeT0ke2NhdH0mZGlmZmljdWx0eT0ke2RpZmZpY3VsdHl9JnR5cGU9bXVsdGlwbGVgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdXJsICs9IGBhbW91bnQ9JHtudW19JmRpZmZpY3VsdHk9JHtkaWZmaWN1bHR5fSZ0eXBlPW11bHRpcGxlYFxuICAgIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgbmV3IEdhbWUocXVlc3Rpb25zLnJlc3VsdHMpO1xufVxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRCdXR0b25cIik7XG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBmZXRjaFF1ZXN0aW9ucyg1LCBcImVhc3lcIilcbiAgICB9KVxuICAgIGNvbnN0IHNldHRpbmdzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5nc0J1dHRvblwiKVxuICAgIHNldHRpbmdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgICAgICBtYWluLmlubmVyVGV4dCA9IFwiSSBoYXRlIG15IGxpZmVcIlxuICAgIH0pXG4gICAgY29uc3QgbGVhZGVyYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWRlcmJvYXJkXCIpXG4gICAgbGVhZGVyYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcbiAgICAgICAgbWFpbi5pbm5lclRleHQgPSBcInlvdSdyZSBhIG1vcm9uIGlmIHlvdSB0aG91Z2h0IHRoaXMgd291bGQgd29ya1wiXG4gICAgfSlcbn0pO1xuXG5cblxuXG5cblxuLy8gY29uc29sZS5sb2cocHJpbnQoKSlcblxuLy8gaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD0xMCZjYXRlZ29yeT05JmRpZmZpY3VsdHk9ZWFzeSZ0eXBlPW11bHRpcGxlXG5cblxuXG5cblxuXG5cblxuLy8gYXN5bmMgZnVuY3Rpb24gZmV0Y2hRdWVzdGlvbnMobnVtLCBkaWZmaWN1bHR5LCBjYXQpIHtcbi8vICAgICBsZXQgdXJsID0gYGh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9gXG4vLyAgICAgaWYgKGNhdCkge1xuLy8gICAgICAgICB1cmwgKz0gYGFtb3VudD0ke251bX0mY2F0ZWdvcnk9JHtjYXR9JmRpZmZpY3VsdHk9JHtkaWZmaWN1bHR5fSZ0eXBlPW11bHRpcGxlYFxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHVybCArPSBgYW1vdW50PSR7bnVtfSZkaWZmaWN1bHR5PSR7ZGlmZmljdWx0eX0mdHlwZT1tdWx0aXBsZWBcbi8vICAgICB9XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbi8vICAgICBjb25zdCBxdWVzdGlvbnMgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICAgIHJldHVybiBxdWVzdGlvbnMucmVzdWx0cztcbi8vIH07XG5cbi8vIGZldGNoUXVlc3Rpb25zKDQsIFwiZWFzeVwiKS50aGVuKHJlc3VsdHMgPT4gY29uc29sZS5sb2cocmVzdWx0cykpXG5cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsImZldGNoUXVlc3Rpb25zIiwibnVtIiwiZGlmZmljdWx0eSIsImNhdCIsInVybCIsInJlcyIsImZldGNoIiwicXVlc3Rpb25zIiwianNvbiIsInJlc3VsdHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwic2V0dGluZ3NCdXR0b24iLCJtYWluIiwiaW5uZXJUZXh0IiwibGVhZGVyYm9hcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _questionSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionSet */ \"./src/scripts/questionSet.js\");\n\nclass Game {\n  constructor(dataset) {\n    this.dataset = dataset;\n    this.currentQuestionSet = null;\n    this.score = 0;\n    this.nextQuestion();\n  }\n  nextQuestion() {\n    if (this.dataset.length > 0) {\n      this.currentQuestionSet = new _questionSet__WEBPACK_IMPORTED_MODULE_0__.QuestionSet(this.dataset.shift());\n      this.renderQuestion();\n    } else {\n      const main = document.getElementById(\"main\");\n      main.innerText = `Game over! You got ${this.score} out of 5 questions correct!`;\n    }\n  }\n  renderQuestion() {\n    const main = document.getElementById(\"main\");\n    main.innerHTML = \"\";\n    const questionContainer = document.createElement(\"div\");\n    questionContainer.setAttribute(\"id\", \"questionContainer\");\n    questionContainer.innerText = JSON.stringify(this.currentQuestionSet.question);\n    main.appendChild(questionContainer);\n    const answersContainer = document.createElement(\"div\");\n    answersContainer.setAttribute(\"id\", \"answersContainer\");\n    const answers = this.currentQuestionSet.shuffledAnswers();\n    for (let i = 0; i < answers.length; i++) {\n      const answer = answers[i];\n      let answerButton = document.createElement(\"button\");\n      answerButton.setAttribute(\"id\", `answer${i}`);\n      answerButton.innerText = answer;\n      answerButton.addEventListener(\"click\", () => this.answerResult(answer));\n      answersContainer.appendChild(answerButton);\n    }\n    main.appendChild(answersContainer);\n  }\n  answerResult(answer) {\n    if (answer === this.currentQuestionSet.rightAnswer) {\n      this.score += 1;\n      console.log(\"Correct!\");\n    } else {\n      console.log(\"incorrect!\");\n    }\n    this.nextQuestion();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0VBQ3ZCO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXN0aW9uU2V0IH0gZnJvbSBcIi4vcXVlc3Rpb25TZXRcIlxuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YXNldCl7XG4gICAgICAgIHRoaXMuZGF0YXNldCA9IGRhdGFzZXQ7XG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uU2V0ID0gbnVsbFxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oKTtcbiAgICB9XG5cblxuICAgIG5leHRRdWVzdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YXNldC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvblNldCA9IG5ldyBRdWVzdGlvblNldCh0aGlzLmRhdGFzZXQuc2hpZnQoKSlcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUXVlc3Rpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgICAgICAgICBtYWluLmlubmVyVGV4dCA9IGBHYW1lIG92ZXIhIFlvdSBnb3QgJHt0aGlzLnNjb3JlfSBvdXQgb2YgNSBxdWVzdGlvbnMgY29ycmVjdCFgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJRdWVzdGlvbigpe1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgICAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWVzdGlvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInF1ZXN0aW9uQ29udGFpbmVyXCIpO1xuICAgICAgICBxdWVzdGlvbkNvbnRhaW5lci5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRRdWVzdGlvblNldC5xdWVzdGlvbik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocXVlc3Rpb25Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGFuc3dlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhbnN3ZXJzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYW5zd2Vyc0NvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYW5zd2VycyA9IHRoaXMuY3VycmVudFF1ZXN0aW9uU2V0LnNodWZmbGVkQW5zd2VycygpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyID0gYW5zd2Vyc1tpXTtcbiAgICAgICAgICAgIGxldCBhbnN3ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgYW5zd2VyQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBhbnN3ZXIke2l9YClcbiAgICAgICAgICAgIGFuc3dlckJ1dHRvbi5pbm5lclRleHQgPSBhbnN3ZXI7XG4gICAgICAgICAgICBhbnN3ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYW5zd2VyUmVzdWx0KGFuc3dlcikpXG4gICAgICAgICAgICBhbnN3ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFuc3dlckJ1dHRvbik7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGFuc3dlcnNDb250YWluZXIpO1xuICAgIH1cblxuICAgIGFuc3dlclJlc3VsdChhbnN3ZXIpe1xuICAgICAgICBpZiAoYW5zd2VyID09PSB0aGlzLmN1cnJlbnRRdWVzdGlvblNldC5yaWdodEFuc3dlcikge1xuICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvcnJlY3QhXCIpXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5jb3JyZWN0IVwiKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV4dFF1ZXN0aW9uKCk7XG4gICAgfVxuXG59XG5cblxuXG4iXSwibmFtZXMiOlsiUXVlc3Rpb25TZXQiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJkYXRhc2V0IiwiY3VycmVudFF1ZXN0aW9uU2V0Iiwic2NvcmUiLCJuZXh0UXVlc3Rpb24iLCJsZW5ndGgiLCJzaGlmdCIsInJlbmRlclF1ZXN0aW9uIiwibWFpbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJxdWVzdGlvbkNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlc3Rpb24iLCJhcHBlbmRDaGlsZCIsImFuc3dlcnNDb250YWluZXIiLCJhbnN3ZXJzIiwic2h1ZmZsZWRBbnN3ZXJzIiwiaSIsImFuc3dlciIsImFuc3dlckJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbnN3ZXJSZXN1bHQiLCJyaWdodEFuc3dlciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/questionSet.js":
/*!************************************!*\
  !*** ./src/scripts/questionSet.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuestionSet: function() { return /* binding */ QuestionSet; }\n/* harmony export */ });\nclass QuestionSet {\n  constructor(questionSet) {\n    this.question = questionSet.question;\n    this.wrongAnswers = questionSet.incorrect_answers;\n    this.rightAnswer = questionSet.correct_answer;\n  }\n  shuffledAnswers() {\n    let allAnswers = this.wrongAnswers.concat(this.rightAnswer);\n    for (let i = allAnswers.length - 1; i > 0; i--) {\n      const r = Math.floor(Math.random() * (i + 1));\n      [allAnswers[i], allAnswers[r]] = [allAnswers[r], allAnswers[i]];\n    }\n    return allAnswers;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9xdWVzdGlvblNldC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsV0FBVztFQUNwQkMsV0FBV0EsQ0FBQ0MsV0FBVyxFQUFDO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHRCxXQUFXLENBQUNDLFFBQVE7SUFDcEMsSUFBSSxDQUFDQyxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0csaUJBQWlCO0lBQ2pELElBQUksQ0FBQ0MsV0FBVyxHQUFHSixXQUFXLENBQUNLLGNBQWM7RUFDakQ7RUFFQUMsZUFBZUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSUMsVUFBVSxHQUFHLElBQUksQ0FBQ0wsWUFBWSxDQUFDTSxNQUFNLENBQUMsSUFBSSxDQUFDSixXQUFXLENBQUM7SUFDM0QsS0FBSyxJQUFJSyxDQUFDLEdBQUdGLFVBQVUsQ0FBQ0csTUFBTSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDNUMsTUFBTUUsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJTCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDN0MsQ0FBQ0YsVUFBVSxDQUFDRSxDQUFDLENBQUMsRUFBRUYsVUFBVSxDQUFDSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNKLFVBQVUsQ0FBQ0ksQ0FBQyxDQUFDLEVBQUVKLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDLENBQUM7SUFDbkU7SUFDQSxPQUFPRixVQUFVO0VBQ3JCO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvcXVlc3Rpb25TZXQuanM/NTg0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUXVlc3Rpb25TZXR7XG4gICAgY29uc3RydWN0b3IocXVlc3Rpb25TZXQpe1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gcXVlc3Rpb25TZXQucXVlc3Rpb247XG4gICAgICAgIHRoaXMud3JvbmdBbnN3ZXJzID0gcXVlc3Rpb25TZXQuaW5jb3JyZWN0X2Fuc3dlcnM7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSBxdWVzdGlvblNldC5jb3JyZWN0X2Fuc3dlcjtcbiAgICB9XG5cbiAgICBzaHVmZmxlZEFuc3dlcnMoKSB7XG4gICAgICAgIGxldCBhbGxBbnN3ZXJzID0gdGhpcy53cm9uZ0Fuc3dlcnMuY29uY2F0KHRoaXMucmlnaHRBbnN3ZXIpXG4gICAgICAgIGZvciAobGV0IGkgPSBhbGxBbnN3ZXJzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFthbGxBbnN3ZXJzW2ldLCBhbGxBbnN3ZXJzW3JdXSA9IFthbGxBbnN3ZXJzW3JdLCBhbGxBbnN3ZXJzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxsQW5zd2VycztcbiAgICB9XG5cbn1cbiBcblxuIl0sIm5hbWVzIjpbIlF1ZXN0aW9uU2V0IiwiY29uc3RydWN0b3IiLCJxdWVzdGlvblNldCIsInF1ZXN0aW9uIiwid3JvbmdBbnN3ZXJzIiwiaW5jb3JyZWN0X2Fuc3dlcnMiLCJyaWdodEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwic2h1ZmZsZWRBbnN3ZXJzIiwiYWxsQW5zd2VycyIsImNvbmNhdCIsImkiLCJsZW5ndGgiLCJyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/questionSet.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;