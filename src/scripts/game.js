import { QuestionSet } from "./questionSet"
import { fetchQuestions } from "../index.js"

export class Game {
    constructor(dataset){
        this.dataset = dataset;
        this.currentQuestionSet = null
        this.incorrectQuestions = [];
        this.correctAnswers = [];
        this.score = 0;
        this.counter = 0;
        this.nextQuestion();
    }


    nextQuestion() {
        if (this.dataset.length > 0) {
            this.currentQuestionSet = new QuestionSet(this.dataset.shift())
            this.renderQuestion();
        } else {
            this.renderEndScreen();
        }
    }

    renderQuestion(){
        const main = document.getElementById("main");
        main.innerHTML = "";

        const questionContainer = document.createElement("div");
        questionContainer.setAttribute("id", "questionContainer");
        questionContainer.innerText = this.currentQuestionSet.decodedQuestion();
        main.appendChild(questionContainer);

        const answersContainer = document.createElement("div");
        answersContainer.setAttribute("id", "answersContainer");
        const answers = this.currentQuestionSet.shuffledAnswers();

        for (let i = 0; i < answers.length; i++) {
            const answer = answers[i];
            let answerButton = document.createElement("button");
            answerButton.setAttribute("id", `answer${i}`)
            answerButton.innerText = this.currentQuestionSet.decodedAnswer(answer);
            answerButton.addEventListener("click", () => this.answerResult(answerButton.innerText));
            answersContainer.appendChild(answerButton);
        }

        main.appendChild(answersContainer);
    }

    renderEndScreen() {
        const main = document.getElementById("main");
            const gameOver = document.createElement("div");
            const wrongQuestions = document.createElement("div");
            wrongQuestions.setAttribute("id", "wrongQuestions")
            gameOver.setAttribute("id", "gameOver")
            main.innerHTML = "";
            gameOver.innerText = `Game over! You got ${this.score} out of ${this.counter} questions correct!`;
            const wrongAnswers = document.createElement("strong");
            wrongAnswers.innerText = "These are the questions you answered incorrectly:"
            wrongQuestions.appendChild(wrongAnswers);
            for (let i = 0; i < this.incorrectQuestions.length; i++) {
                const question = document.createElement("div");
                question.innerText = `${this.incorrectQuestions[i]} (${this.correctAnswers[i]})`
                wrongQuestions.appendChild(question)
            }
            const playAgain = document.createElement("button");
            playAgain.setAttribute("id", "playAgain");
            playAgain.innerText = "Play Again";
            playAgain.addEventListener("click", () => {
                fetchQuestions(5, "easy");
            })

            const mainMenu = document.createElement("button");
            mainMenu.setAttribute("id", "mainMenu")
            mainMenu.innerText = "Main Menu"
            mainMenu.addEventListener("click", function() {
                const main = document.getElementById("main");
                main.innerHTML = `<div id="gameTitle">Brain Stew</div> 
                <div id="gameMenu">
                  <button id="startButton">Start Game</button>
                  <button id="customGame">Custom Game</button>
                  <button id="settingsButton">Settings</button>
                </div>
                <div id="customModal">
                  <div id="customMenu">
                    <select name="category" id="category">
                      <option value="9">General Knowledge</option>
                      <option value="10">Entertainment: Books</option>
                      <option value="11">Entertainment: Film</option>
                      <option value="12">Entertainment: Music</option>
                      <option value="13">Entertainment: Musicals & Theaters</option>
                      <option value="14">Entertainment: Television</option>
                      <option value="15">Entertainment: Video Games</option>
                      <option value="16">Entertainment: Board Games</option>
                      <option value="17">Science & Nature</option>
                      <option value="18">Science: Computers</option>
                      <option value="19">Science: Mathematics</option>
                      <option value="20">Mythology</option>
                      <option value="21">Sports</option>
                      <option value="22">Geography</option>
                      <option value="23">History</option>
                      <option value="24">Politics</option>
                      <option value="25">Art</option>
                      <option value="26">Celebrities</option>
                      <option value="27">Animals</option>
                      <option value="28">Vehicles</option>
                      <option value="29">Entertainment: Comics</option>
                      <option value="30">Science: Gadgets</option>
                      <option value="31">Entertainment: Japanese Anime & Manga</option>
                      <option value="32">Entertainment: Cartoon & Animation</option>
                    </select>
                    <br>
                    <select name="difficulty" id="difficulty">
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                    <br>
                    <select name="amtQuestions" id="amtQuestions">
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                    </select>
                    <br>
                    <button id="customStart">Start</button>
                    <button id="back">Main Menu</button>
                  </div>
                </div>
                <div id="randomFact">BLAHBLALHBLAHBLHABHLABH</div>`;
                    const startButton = document.getElementById("startButton");
                    startButton.addEventListener("click", function() {
                        fetchQuestions(5, "easy", 9)
                    });
                
                    const settingsButton = document.getElementById("settingsButton");
                    settingsButton.addEventListener("click", function(){
                        const main = document.getElementById("main");
                        main.innerText = "I hate my life"
                    });
                
                    const customGame = document.getElementById("customGame");
                    customGame.addEventListener("click", function (){
                        const customModal = document.getElementById("customModal")
                        const gameMenu = document.getElementById("gameMenu")
                        gameMenu.style.display = "none";
                        customModal.style.display = "flex";
                    });
                
                    const backButton = document.getElementById("back");
                    backButton.addEventListener("click", function() {
                        gameMenu.style.display = "flex";
                        customModal.style.display = "none";
                    });
                
                    const startCustom = document.getElementById("customStart");
                    startCustom.addEventListener("click", function() {
                        const numQuestions = document.getElementById("amtQuestions").value || 5;
                        const difficulty = document.getElementById("difficulty").value || "easy";
                        const cat = document.getElementById("category").value || 9;
                        fetchQuestions(numQuestions, difficulty, cat);
                        console.log(cat);
                        console.log(numQuestions);
                        console.log(difficulty);
                    });
                
            });
            main.appendChild(gameOver);
            main.appendChild(playAgain);
            main.appendChild(mainMenu);
            main.appendChild(wrongQuestions);
    }

    answerResult(answer){
        if (answer === this.currentQuestionSet.decodedRightAnswer()) {
            this.score += 1;
            this.counter += 1;
        }else {
            this.incorrectQuestions.push(this.currentQuestionSet.decodedQuestion())
            this.counter += 1;
            this.correctAnswers.push(this.currentQuestionSet.decodedAnswer(this.currentQuestionSet.rightAnswer));
        }
        this.nextQuestion();
    }


}



