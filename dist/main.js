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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchQuestions: function() { return /* binding */ fetchQuestions; }\n/* harmony export */ });\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// import Example from \"./scripts/example\";\n\nasync function fetchQuestions(num, difficulty, cat) {\n  let url = `https://opentdb.com/api.php?`;\n  if (cat) {\n    url += `amount=${num}&category=${cat}&difficulty=${difficulty}&type=multiple`;\n  } else {\n    url += `amount=${num}&difficulty=${difficulty}&type=multiple`;\n  }\n  const res = await fetch(url);\n  const questions = await res.json();\n  new _scripts_game__WEBPACK_IMPORTED_MODULE_0__.Game(questions.results);\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const startButton = document.getElementById(\"startButton\");\n  startButton.addEventListener(\"click\", function () {\n    fetchQuestions(5, \"easy\", 9);\n  });\n  const settingsButton = document.getElementById(\"settingsButton\");\n  settingsButton.addEventListener(\"click\", function () {\n    const main = document.getElementById(\"main\");\n    main.innerText = \"I hate my life\";\n  });\n  const closeModal = document.getElementById(\"closeModal\");\n  closeModal.addEventListener(\"click\", function () {\n    const modalContainer = document.getElementById(\"modalContainer\");\n    // const modal = document.getElementById(\"modal\")\n    // modal.style.animation = \"fadeOut 0.5s ease-out forwards\";\n    // modal.style.display = \"none\";\n    modalContainer.style.display = \"none\";\n    // modalContainer.style.animation = \"fadeOut 0.5s\";\n  });\n\n  const customGame = document.getElementById(\"customGame\");\n  customGame.addEventListener(\"click\", function () {\n    const customModal = document.getElementById(\"customModal\");\n    const gameMenu = document.getElementById(\"gameMenu\");\n    gameMenu.style.display = \"none\";\n    customModal.style.display = \"flex\";\n  });\n  const backButton = document.getElementById(\"back\");\n  backButton.addEventListener(\"click\", function () {\n    gameMenu.style.display = \"flex\";\n    customModal.style.display = \"none\";\n  });\n  const startCusom = document.getElementById(\"customStart\");\n  startCusom.addEventListener(\"click\", function () {\n    const numQuestions = document.getElementById(\"amtQuestions\").value || 5;\n    const difficulty = document.getElementById(\"difficulty\").value || \"easy\";\n    const cat = document.getElementById(\"category\").value || 9;\n    fetchQuestions(numQuestions, difficulty, cat);\n    console.log(cat);\n    console.log(numQuestions);\n    console.log(difficulty);\n  });\n});\n\n// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple\n\n// async function fetchQuestions(num, difficulty, cat) {\n//     let url = `https://opentdb.com/api.php?`\n//     if (cat) {\n//         url += `amount=${num}&category=${cat}&difficulty=${difficulty}&type=multiple`\n//     } else {\n//         url += `amount=${num}&difficulty=${difficulty}&type=multiple`\n//     }\n//     const res = await fetch(url);\n//     const questions = await res.json();\n//     return questions.results;\n// };\n\n// fetchQuestions(4, \"easy\").then(results => console.log(results))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdRLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDYyxLQUFLLElBQUksTUFBTTtJQUN4RSxNQUFNeEIsR0FBRyxHQUFHTyxRQUFRLENBQUNHLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQ2MsS0FBSyxJQUFJLENBQUM7SUFDMUQzQixjQUFjLENBQUMwQixZQUFZLEVBQUV4QixVQUFVLEVBQUVDLEdBQUcsQ0FBQztJQUM3Q3lCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMUIsR0FBRyxDQUFDO0lBQ2hCeUIsT0FBTyxDQUFDQyxHQUFHLENBQUNILFlBQVksQ0FBQztJQUN6QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMzQixVQUFVLENBQUM7RUFDM0IsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDOztBQU9GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG4gICAgaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFF1ZXN0aW9ucyhudW0sIGRpZmZpY3VsdHksIGNhdCkge1xuICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2BcbiAgICBpZiAoY2F0KSB7XG4gICAgICAgIHVybCArPSBgYW1vdW50PSR7bnVtfSZjYXRlZ29yeT0ke2NhdH0mZGlmZmljdWx0eT0ke2RpZmZpY3VsdHl9JnR5cGU9bXVsdGlwbGVgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdXJsICs9IGBhbW91bnQ9JHtudW19JmRpZmZpY3VsdHk9JHtkaWZmaWN1bHR5fSZ0eXBlPW11bHRpcGxlYFxuICAgIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgbmV3IEdhbWUocXVlc3Rpb25zLnJlc3VsdHMpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRCdXR0b25cIik7XG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBmZXRjaFF1ZXN0aW9ucyg1LCBcImVhc3lcIiwgOSlcbiAgICB9KTtcblxuICAgIGNvbnN0IHNldHRpbmdzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5nc0J1dHRvblwiKTtcbiAgICBzZXR0aW5nc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICAgICAgbWFpbi5pbm5lclRleHQgPSBcIkkgaGF0ZSBteSBsaWZlXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxcIik7XG4gICAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ29udGFpbmVyXCIpXG4gICAgICAgIC8vIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKVxuICAgICAgICAvLyBtb2RhbC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGVPdXQgMC41cyBlYXNlLW91dCBmb3J3YXJkc1wiO1xuICAgICAgICAvLyBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgLy8gbW9kYWxDb250YWluZXIuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlT3V0IDAuNXNcIjtcbiAgICB9KVxuXG4gICAgY29uc3QgY3VzdG9tR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tR2FtZVwiKTtcbiAgICBjdXN0b21HYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgY3VzdG9tTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1c3RvbU1vZGFsXCIpXG4gICAgICAgIGNvbnN0IGdhbWVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lTWVudVwiKVxuICAgICAgICBnYW1lTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGN1c3RvbU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KVxuXG4gICAgY29uc3QgYmFja0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja1wiKTtcbiAgICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZ2FtZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBjdXN0b21Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcblxuICAgIGNvbnN0IHN0YXJ0Q3Vzb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1c3RvbVN0YXJ0XCIpO1xuICAgIHN0YXJ0Q3Vzb20uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBudW1RdWVzdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtdFF1ZXN0aW9uc1wiKS52YWx1ZSB8fCA1O1xuICAgICAgICBjb25zdCBkaWZmaWN1bHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWZmaWN1bHR5XCIpLnZhbHVlIHx8IFwiZWFzeVwiO1xuICAgICAgICBjb25zdCBjYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5XCIpLnZhbHVlIHx8IDk7XG4gICAgICAgIGZldGNoUXVlc3Rpb25zKG51bVF1ZXN0aW9ucywgZGlmZmljdWx0eSwgY2F0KTtcbiAgICAgICAgY29uc29sZS5sb2coY2F0KTtcbiAgICAgICAgY29uc29sZS5sb2cobnVtUXVlc3Rpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coZGlmZmljdWx0eSk7XG4gICAgfSlcblxufSk7XG5cblxuXG5cblxuXG4vLyBodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PTEwJmNhdGVnb3J5PTkmZGlmZmljdWx0eT1lYXN5JnR5cGU9bXVsdGlwbGVcblxuLy8gYXN5bmMgZnVuY3Rpb24gZmV0Y2hRdWVzdGlvbnMobnVtLCBkaWZmaWN1bHR5LCBjYXQpIHtcbi8vICAgICBsZXQgdXJsID0gYGh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9gXG4vLyAgICAgaWYgKGNhdCkge1xuLy8gICAgICAgICB1cmwgKz0gYGFtb3VudD0ke251bX0mY2F0ZWdvcnk9JHtjYXR9JmRpZmZpY3VsdHk9JHtkaWZmaWN1bHR5fSZ0eXBlPW11bHRpcGxlYFxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHVybCArPSBgYW1vdW50PSR7bnVtfSZkaWZmaWN1bHR5PSR7ZGlmZmljdWx0eX0mdHlwZT1tdWx0aXBsZWBcbi8vICAgICB9XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbi8vICAgICBjb25zdCBxdWVzdGlvbnMgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICAgIHJldHVybiBxdWVzdGlvbnMucmVzdWx0cztcbi8vIH07XG5cbi8vIGZldGNoUXVlc3Rpb25zKDQsIFwiZWFzeVwiKS50aGVuKHJlc3VsdHMgPT4gY29uc29sZS5sb2cocmVzdWx0cykpXG5cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsImZldGNoUXVlc3Rpb25zIiwibnVtIiwiZGlmZmljdWx0eSIsImNhdCIsInVybCIsInJlcyIsImZldGNoIiwicXVlc3Rpb25zIiwianNvbiIsInJlc3VsdHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwic2V0dGluZ3NCdXR0b24iLCJtYWluIiwiaW5uZXJUZXh0IiwiY2xvc2VNb2RhbCIsIm1vZGFsQ29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiY3VzdG9tR2FtZSIsImN1c3RvbU1vZGFsIiwiZ2FtZU1lbnUiLCJiYWNrQnV0dG9uIiwic3RhcnRDdXNvbSIsIm51bVF1ZXN0aW9ucyIsInZhbHVlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _questionSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionSet */ \"./src/scripts/questionSet.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\nclass Game {\n  constructor(dataset) {\n    this.dataset = dataset;\n    this.currentQuestionSet = null;\n    this.incorrectQuestions = [];\n    this.correctAnswers = [];\n    this.score = 0;\n    this.counter = 0;\n    this.nextQuestion();\n  }\n  nextQuestion() {\n    if (this.dataset.length > 0) {\n      this.currentQuestionSet = new _questionSet__WEBPACK_IMPORTED_MODULE_0__.QuestionSet(this.dataset.shift());\n      this.renderQuestion();\n    } else {\n      this.renderEndScreen();\n    }\n  }\n  renderQuestion() {\n    const main = document.getElementById(\"main\");\n    main.innerHTML = \"\";\n    const questionContainer = document.createElement(\"div\");\n    questionContainer.setAttribute(\"id\", \"questionContainer\");\n    questionContainer.innerText = this.currentQuestionSet.decodedQuestion();\n    main.appendChild(questionContainer);\n    const answersContainer = document.createElement(\"div\");\n    answersContainer.setAttribute(\"id\", \"answersContainer\");\n    const answers = this.currentQuestionSet.shuffledAnswers();\n    for (let i = 0; i < answers.length; i++) {\n      const answer = answers[i];\n      let answerButton = document.createElement(\"button\");\n      answerButton.setAttribute(\"id\", `answer${i}`);\n      answerButton.innerText = this.currentQuestionSet.decodedAnswer(answer);\n      answerButton.addEventListener(\"click\", () => this.answerResult(answer));\n      answersContainer.appendChild(answerButton);\n    }\n    main.appendChild(answersContainer);\n  }\n  renderEndScreen() {\n    const main = document.getElementById(\"main\");\n    const gameOver = document.createElement(\"div\");\n    const wrongQuestions = document.createElement(\"div\");\n    wrongQuestions.setAttribute(\"id\", \"wrongQuestions\");\n    gameOver.setAttribute(\"id\", \"gameOver\");\n    main.innerHTML = \"\";\n    gameOver.innerText = `Game over! You got ${this.score} out of ${this.counter} questions correct!`;\n    const wrongAnswers = document.createElement(\"strong\");\n    wrongAnswers.innerText = \"These are the questions you answered incorrectly:\";\n    wrongQuestions.appendChild(wrongAnswers);\n    for (let i = 0; i < this.incorrectQuestions.length; i++) {\n      const question = document.createElement(\"div\");\n      question.innerText = `${this.incorrectQuestions[i]} (${this.correctAnswers[i]})`;\n      wrongQuestions.appendChild(question);\n    }\n    const playAgain = document.createElement(\"button\");\n    playAgain.setAttribute(\"id\", \"playAgain\");\n    playAgain.innerText = \"Play Again\";\n    playAgain.addEventListener(\"click\", () => {\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.fetchQuestions)(5, \"easy\");\n    });\n    const mainMenu = document.createElement(\"button\");\n    mainMenu.setAttribute(\"id\", \"mainMenu\");\n    mainMenu.innerText = \"Main Menu\";\n    mainMenu.addEventListener(\"click\", function () {\n      location.reload();\n    });\n    main.appendChild(gameOver);\n    main.appendChild(playAgain);\n    main.appendChild(mainMenu);\n    main.appendChild(wrongQuestions);\n  }\n  answerResult(answer) {\n    if (answer === this.currentQuestionSet.decodedAnswer(this.currentQuestionSet.rightAnswer)) {\n      this.score += 1;\n      this.counter += 1;\n    } else {\n      this.incorrectQuestions.push(this.currentQuestionSet.decodedQuestion());\n      this.counter += 1;\n      this.correctAnswers.push(this.currentQuestionSet.decodedAnswer(this.currentQuestionSet.rightAnswer));\n    }\n    this.nextQuestion();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVzdGlvblNldCB9IGZyb20gXCIuL3F1ZXN0aW9uU2V0XCJcbmltcG9ydCB7IGZldGNoUXVlc3Rpb25zIH0gZnJvbSBcIi4uL2luZGV4LmpzXCJcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXQpe1xuICAgICAgICB0aGlzLmRhdGFzZXQgPSBkYXRhc2V0O1xuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvblNldCA9IG51bGxcbiAgICAgICAgdGhpcy5pbmNvcnJlY3RRdWVzdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VycyA9IFtdO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oKTtcbiAgICB9XG5cblxuICAgIG5leHRRdWVzdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YXNldC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvblNldCA9IG5ldyBRdWVzdGlvblNldCh0aGlzLmRhdGFzZXQuc2hpZnQoKSlcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUXVlc3Rpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRW5kU2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJRdWVzdGlvbigpe1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgICAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWVzdGlvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInF1ZXN0aW9uQ29udGFpbmVyXCIpO1xuICAgICAgICBxdWVzdGlvbkNvbnRhaW5lci5pbm5lclRleHQgPSB0aGlzLmN1cnJlbnRRdWVzdGlvblNldC5kZWNvZGVkUXVlc3Rpb24oKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChxdWVzdGlvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgYW5zd2Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFuc3dlcnNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhbnN3ZXJzQ29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBhbnN3ZXJzID0gdGhpcy5jdXJyZW50UXVlc3Rpb25TZXQuc2h1ZmZsZWRBbnN3ZXJzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhbnN3ZXIgPSBhbnN3ZXJzW2ldO1xuICAgICAgICAgICAgbGV0IGFuc3dlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBhbnN3ZXJCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGFuc3dlciR7aX1gKVxuICAgICAgICAgICAgYW5zd2VyQnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuY3VycmVudFF1ZXN0aW9uU2V0LmRlY29kZWRBbnN3ZXIoYW5zd2VyKTtcbiAgICAgICAgICAgIGFuc3dlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hbnN3ZXJSZXN1bHQoYW5zd2VyKSlcbiAgICAgICAgICAgIGFuc3dlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYW5zd2VyQnV0dG9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYW5zd2Vyc0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmVuZGVyRW5kU2NyZWVuKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgICAgICAgICAgY29uc3QgZ2FtZU92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3Qgd3JvbmdRdWVzdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgd3JvbmdRdWVzdGlvbnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3cm9uZ1F1ZXN0aW9uc1wiKVxuICAgICAgICAgICAgZ2FtZU92ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lT3ZlclwiKVxuICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZ2FtZU92ZXIuaW5uZXJUZXh0ID0gYEdhbWUgb3ZlciEgWW91IGdvdCAke3RoaXMuc2NvcmV9IG91dCBvZiAke3RoaXMuY291bnRlcn0gcXVlc3Rpb25zIGNvcnJlY3QhYDtcbiAgICAgICAgICAgIGNvbnN0IHdyb25nQW5zd2VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7XG4gICAgICAgICAgICB3cm9uZ0Fuc3dlcnMuaW5uZXJUZXh0ID0gXCJUaGVzZSBhcmUgdGhlIHF1ZXN0aW9ucyB5b3UgYW5zd2VyZWQgaW5jb3JyZWN0bHk6XCJcbiAgICAgICAgICAgIHdyb25nUXVlc3Rpb25zLmFwcGVuZENoaWxkKHdyb25nQW5zd2Vycyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5jb3JyZWN0UXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9IGAke3RoaXMuaW5jb3JyZWN0UXVlc3Rpb25zW2ldfSAoJHt0aGlzLmNvcnJlY3RBbnN3ZXJzW2ldfSlgXG4gICAgICAgICAgICAgICAgd3JvbmdRdWVzdGlvbnMuYXBwZW5kQ2hpbGQocXVlc3Rpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwbGF5QWdhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgcGxheUFnYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheUFnYWluXCIpO1xuICAgICAgICAgICAgcGxheUFnYWluLmlubmVyVGV4dCA9IFwiUGxheSBBZ2FpblwiO1xuICAgICAgICAgICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmV0Y2hRdWVzdGlvbnMoNSwgXCJlYXN5XCIpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgbWFpbk1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluTWVudVwiKVxuICAgICAgICAgICAgbWFpbk1lbnUuaW5uZXJUZXh0ID0gXCJNYWluIE1lbnVcIlxuICAgICAgICAgICAgbWFpbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZ2FtZU92ZXIpO1xuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtYWluTWVudSk7XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHdyb25nUXVlc3Rpb25zKTtcbiAgICB9XG5cbiAgICBhbnN3ZXJSZXN1bHQoYW5zd2VyKXtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gdGhpcy5jdXJyZW50UXVlc3Rpb25TZXQuZGVjb2RlZEFuc3dlcih0aGlzLmN1cnJlbnRRdWVzdGlvblNldC5yaWdodEFuc3dlcikpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciArPSAxO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdFF1ZXN0aW9ucy5wdXNoKHRoaXMuY3VycmVudFF1ZXN0aW9uU2V0LmRlY29kZWRRdWVzdGlvbigpKVxuICAgICAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXJzLnB1c2godGhpcy5jdXJyZW50UXVlc3Rpb25TZXQuZGVjb2RlZEFuc3dlcih0aGlzLmN1cnJlbnRRdWVzdGlvblNldC5yaWdodEFuc3dlcikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV4dFF1ZXN0aW9uKCk7XG4gICAgfVxuXG5cbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJRdWVzdGlvblNldCIsImZldGNoUXVlc3Rpb25zIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiZGF0YXNldCIsImN1cnJlbnRRdWVzdGlvblNldCIsImluY29ycmVjdFF1ZXN0aW9ucyIsImNvcnJlY3RBbnN3ZXJzIiwic2NvcmUiLCJjb3VudGVyIiwibmV4dFF1ZXN0aW9uIiwibGVuZ3RoIiwic2hpZnQiLCJyZW5kZXJRdWVzdGlvbiIsInJlbmRlckVuZFNjcmVlbiIsIm1haW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwicXVlc3Rpb25Db250YWluZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwiZGVjb2RlZFF1ZXN0aW9uIiwiYXBwZW5kQ2hpbGQiLCJhbnN3ZXJzQ29udGFpbmVyIiwiYW5zd2VycyIsInNodWZmbGVkQW5zd2VycyIsImkiLCJhbnN3ZXIiLCJhbnN3ZXJCdXR0b24iLCJkZWNvZGVkQW5zd2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuc3dlclJlc3VsdCIsImdhbWVPdmVyIiwid3JvbmdRdWVzdGlvbnMiLCJ3cm9uZ0Fuc3dlcnMiLCJxdWVzdGlvbiIsInBsYXlBZ2FpbiIsIm1haW5NZW51IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyaWdodEFuc3dlciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/questionSet.js":
/*!************************************!*\
  !*** ./src/scripts/questionSet.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuestionSet: function() { return /* binding */ QuestionSet; }\n/* harmony export */ });\nclass QuestionSet {\n  constructor(questionSet) {\n    this.question = questionSet.question;\n    this.wrongAnswers = questionSet.incorrect_answers;\n    this.rightAnswer = questionSet.correct_answer;\n  }\n  shuffledAnswers() {\n    let allAnswers = this.wrongAnswers.concat(this.rightAnswer);\n    for (let i = allAnswers.length - 1; i > 0; i--) {\n      const r = Math.floor(Math.random() * (i + 1));\n      [allAnswers[i], allAnswers[r]] = [allAnswers[r], allAnswers[i]];\n    }\n    return allAnswers;\n  }\n  decodedQuestion() {\n    let txt = document.createElement(\"textarea\");\n    txt.innerHTML = this.question;\n    return txt.value;\n  }\n  decodedAnswer(answer) {\n    let txt = document.createElement(\"textarea\");\n    txt.innerHTML = answer;\n    return txt.value;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9xdWVzdGlvblNldC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsV0FBVztFQUNwQkMsV0FBV0EsQ0FBQ0MsV0FBVyxFQUFDO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHRCxXQUFXLENBQUNDLFFBQVE7SUFDcEMsSUFBSSxDQUFDQyxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0csaUJBQWlCO0lBQ2pELElBQUksQ0FBQ0MsV0FBVyxHQUFHSixXQUFXLENBQUNLLGNBQWM7RUFDakQ7RUFFQUMsZUFBZUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSUMsVUFBVSxHQUFHLElBQUksQ0FBQ0wsWUFBWSxDQUFDTSxNQUFNLENBQUMsSUFBSSxDQUFDSixXQUFXLENBQUM7SUFDM0QsS0FBSyxJQUFJSyxDQUFDLEdBQUdGLFVBQVUsQ0FBQ0csTUFBTSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDNUMsTUFBTUUsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJTCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDN0MsQ0FBQ0YsVUFBVSxDQUFDRSxDQUFDLENBQUMsRUFBRUYsVUFBVSxDQUFDSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNKLFVBQVUsQ0FBQ0ksQ0FBQyxDQUFDLEVBQUVKLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDLENBQUM7SUFDbkU7SUFDQSxPQUFPRixVQUFVO0VBQ3JCO0VBRUFRLGVBQWVBLENBQUEsRUFBRztJQUNkLElBQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQzVDRixHQUFHLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNsQixRQUFRO0lBQzdCLE9BQU9lLEdBQUcsQ0FBQ0ksS0FBSztFQUNwQjtFQUVBQyxhQUFhQSxDQUFDQyxNQUFNLEVBQUU7SUFDbEIsSUFBSU4sR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDNUNGLEdBQUcsQ0FBQ0csU0FBUyxHQUFHRyxNQUFNO0lBQ3RCLE9BQU9OLEdBQUcsQ0FBQ0ksS0FBSztFQUNwQjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL3F1ZXN0aW9uU2V0LmpzPzU4NDAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFF1ZXN0aW9uU2V0e1xuICAgIGNvbnN0cnVjdG9yKHF1ZXN0aW9uU2V0KXtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHF1ZXN0aW9uU2V0LnF1ZXN0aW9uO1xuICAgICAgICB0aGlzLndyb25nQW5zd2VycyA9IHF1ZXN0aW9uU2V0LmluY29ycmVjdF9hbnN3ZXJzO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gcXVlc3Rpb25TZXQuY29ycmVjdF9hbnN3ZXI7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWRBbnN3ZXJzKCkge1xuICAgICAgICBsZXQgYWxsQW5zd2VycyA9IHRoaXMud3JvbmdBbnN3ZXJzLmNvbmNhdCh0aGlzLnJpZ2h0QW5zd2VyKVxuICAgICAgICBmb3IgKGxldCBpID0gYWxsQW5zd2Vycy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCByID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICBbYWxsQW5zd2Vyc1tpXSwgYWxsQW5zd2Vyc1tyXV0gPSBbYWxsQW5zd2Vyc1tyXSwgYWxsQW5zd2Vyc1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbEFuc3dlcnM7XG4gICAgfVxuXG4gICAgZGVjb2RlZFF1ZXN0aW9uKCkge1xuICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB0eHQuaW5uZXJIVE1MID0gdGhpcy5xdWVzdGlvbjtcbiAgICAgICAgcmV0dXJuIHR4dC52YWx1ZTtcbiAgICB9XG5cbiAgICBkZWNvZGVkQW5zd2VyKGFuc3dlcikge1xuICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB0eHQuaW5uZXJIVE1MID0gYW5zd2VyO1xuICAgICAgICByZXR1cm4gdHh0LnZhbHVlXG4gICAgfVxuXG59XG4gXG5cbiJdLCJuYW1lcyI6WyJRdWVzdGlvblNldCIsImNvbnN0cnVjdG9yIiwicXVlc3Rpb25TZXQiLCJxdWVzdGlvbiIsIndyb25nQW5zd2VycyIsImluY29ycmVjdF9hbnN3ZXJzIiwicmlnaHRBbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsInNodWZmbGVkQW5zd2VycyIsImFsbEFuc3dlcnMiLCJjb25jYXQiLCJpIiwibGVuZ3RoIiwiciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRlY29kZWRRdWVzdGlvbiIsInR4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInZhbHVlIiwiZGVjb2RlZEFuc3dlciIsImFuc3dlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/questionSet.js\n");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;