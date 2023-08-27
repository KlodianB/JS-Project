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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _questionSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionSet */ \"./src/scripts/questionSet.js\");\n\nclass Game {\n  constructor(dataset) {\n    this.dataset = dataset;\n    this.currentQuestionSet = null;\n    this.score = 0;\n    this.nextQuestion();\n  }\n  nextQuestion() {\n    if (this.dataset.length > 0) {\n      this.currentQuestionSet = new _questionSet__WEBPACK_IMPORTED_MODULE_0__.QuestionSet(this.dataset.shift());\n      this.renderQuestion();\n    } else {\n      const main = document.getElementById(\"main\");\n      const gameOver = document.createElement(\"div\");\n      gameOver.setAttribute(\"id\", \"gameOver\");\n      main.innerHTML = \"\";\n      gameOver.innerText = `Game over! You got ${this.score} out of 5 questions correct!`;\n      main.appendChild(gameOver);\n    }\n  }\n  renderQuestion() {\n    const main = document.getElementById(\"main\");\n    main.innerHTML = \"\";\n    const questionContainer = document.createElement(\"div\");\n    questionContainer.setAttribute(\"id\", \"questionContainer\");\n    questionContainer.innerText = JSON.stringify(this.currentQuestionSet.question);\n    main.appendChild(questionContainer);\n    const answersContainer = document.createElement(\"div\");\n    answersContainer.setAttribute(\"id\", \"answersContainer\");\n    const answers = this.currentQuestionSet.shuffledAnswers();\n    for (let i = 0; i < answers.length; i++) {\n      const answer = answers[i];\n      let answerButton = document.createElement(\"button\");\n      answerButton.setAttribute(\"id\", `answer${i}`);\n      answerButton.innerText = answer;\n      answerButton.addEventListener(\"click\", () => this.answerResult(answer));\n      answersContainer.appendChild(answerButton);\n    }\n    main.appendChild(answersContainer);\n  }\n  answerResult(answer) {\n    if (answer === this.currentQuestionSet.rightAnswer) {\n      this.score += 1;\n      console.log(\"Correct!\");\n    } else {\n      console.log(\"incorrect!\");\n    }\n    this.nextQuestion();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzJCLFdBQVcsRUFBRTtNQUNoRCxJQUFJLENBQUMxQixLQUFLLElBQUksQ0FBQztNQUNmMkIsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUMsTUFBSztNQUNGRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDN0I7SUFDQSxJQUFJLENBQUMzQixZQUFZLENBQUMsQ0FBQztFQUN2QjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVzdGlvblNldCB9IGZyb20gXCIuL3F1ZXN0aW9uU2V0XCJcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXQpe1xuICAgICAgICB0aGlzLmRhdGFzZXQgPSBkYXRhc2V0O1xuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvblNldCA9IG51bGxcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMubmV4dFF1ZXN0aW9uKCk7XG4gICAgfVxuXG5cbiAgICBuZXh0UXVlc3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFzZXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25TZXQgPSBuZXcgUXVlc3Rpb25TZXQodGhpcy5kYXRhc2V0LnNoaWZ0KCkpXG4gICAgICAgICAgICB0aGlzLnJlbmRlclF1ZXN0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgICAgICAgICAgY29uc3QgZ2FtZU92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZ2FtZU92ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lT3ZlclwiKVxuICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZ2FtZU92ZXIuaW5uZXJUZXh0ID0gYEdhbWUgb3ZlciEgWW91IGdvdCAke3RoaXMuc2NvcmV9IG91dCBvZiA1IHF1ZXN0aW9ucyBjb3JyZWN0IWA7XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGdhbWVPdmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclF1ZXN0aW9uKCl7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXN0aW9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicXVlc3Rpb25Db250YWluZXJcIik7XG4gICAgICAgIHF1ZXN0aW9uQ29udGFpbmVyLmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY3VycmVudFF1ZXN0aW9uU2V0LnF1ZXN0aW9uKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChxdWVzdGlvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgYW5zd2Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFuc3dlcnNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhbnN3ZXJzQ29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBhbnN3ZXJzID0gdGhpcy5jdXJyZW50UXVlc3Rpb25TZXQuc2h1ZmZsZWRBbnN3ZXJzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhbnN3ZXIgPSBhbnN3ZXJzW2ldO1xuICAgICAgICAgICAgbGV0IGFuc3dlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBhbnN3ZXJCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGFuc3dlciR7aX1gKVxuICAgICAgICAgICAgYW5zd2VyQnV0dG9uLmlubmVyVGV4dCA9IGFuc3dlcjtcbiAgICAgICAgICAgIGFuc3dlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hbnN3ZXJSZXN1bHQoYW5zd2VyKSlcbiAgICAgICAgICAgIGFuc3dlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYW5zd2VyQnV0dG9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYW5zd2Vyc0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgYW5zd2VyUmVzdWx0KGFuc3dlcil7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IHRoaXMuY3VycmVudFF1ZXN0aW9uU2V0LnJpZ2h0QW5zd2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IDFcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ycmVjdCFcIilcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmNvcnJlY3QhXCIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oKTtcbiAgICB9XG5cbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJRdWVzdGlvblNldCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImRhdGFzZXQiLCJjdXJyZW50UXVlc3Rpb25TZXQiLCJzY29yZSIsIm5leHRRdWVzdGlvbiIsImxlbmd0aCIsInNoaWZ0IiwicmVuZGVyUXVlc3Rpb24iLCJtYWluIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdhbWVPdmVyIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwicXVlc3Rpb25Db250YWluZXIiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlc3Rpb24iLCJhbnN3ZXJzQ29udGFpbmVyIiwiYW5zd2VycyIsInNodWZmbGVkQW5zd2VycyIsImkiLCJhbnN3ZXIiLCJhbnN3ZXJCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYW5zd2VyUmVzdWx0IiwicmlnaHRBbnN3ZXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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