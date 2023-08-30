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
            setTimeout(() => {
                this.renderQuestion()
            }, 750);
        } else {
            setTimeout(() => {
                this.renderEndScreen()
            }, 750);;
        };
    };

    renderQuestion(){
        const main = document.getElementById("main");
        main.innerHTML = "";

        const headerContainer = document.createElement("div");
        headerContainer.setAttribute("id", "headerContainer");
        const currentQuestionNum = document.createElement("div");
        currentQuestionNum.setAttribute("id", "currentQuestionNum");
        currentQuestionNum.innerText = `Question: ${this.counter}`

        const score = document.createElement("div");
        score.setAttribute("id", "score");
        score.innerText = `Score: ${this.score}`;
        headerContainer.appendChild(score);
        headerContainer.appendChild(currentQuestionNum);
        main.appendChild(headerContainer);

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
            answerButton.addEventListener("click", () => this.answerResult(answerButton));
            answersContainer.appendChild(answerButton);
            const hoverAudio = new Audio();
            hoverAudio.src = "../audio/click-for-game-menu-131903.mp3"
            hoverAudio.playbackRate=1.5;
            answerButton.addEventListener("mouseover", function() {
            hoverAudio.play();
        });
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
            gameOver.innerText = `Game over!  You got ${this.score} out of ${this.counter} questions correct!`;
            const wrongAnswers = document.createElement("strong");
            wrongAnswers.setAttribute("id", "wrongAnswers")
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
                fetchQuestions(window.numQuestions, window.difficulty, window.cat);
            })

            const mainMenu = document.createElement("button");
            mainMenu.setAttribute("id", "mainMenu")
            mainMenu.innerText = "Main Menu"
            mainMenu.addEventListener("click", function() {
                const main = document.getElementById("main");
                main.innerHTML = `<div id="gameTitle">Brain Stew</div> 
                <div id="gameMenu">
                  <button id="startButton">Demo</button>
                  <button id="customGame">Custom Game</button>
                  <button id="instructions">About</button>
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
                    <select name="difficulty" id="difficulty">
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                    <br>
                    <button id="customStart">Start</button>
                    <button id="back">Main Menu</button>
                  </div>
                </div>
                <div id="randomFact">The Best Trivia Game in the World!
                </div>
                <div id="modalContainer">
                  <div id="modal">
                    <button id="closeModal">X</button>
                    Welcome to Brain Stew! <br>Brain Stew is a fun trivia styled game that offers users the opportunity to engage in an educational and entertaining quiz experience. Players can select their preferred categories, set the level of difficulty, and specify the number of questions they want to answer. <br> To play click the "Demo" button to start a demo game or select "Custom Game" if you want to customize your experience. <a href="https://github.com/KlodianB" id="githubLink"><img src="./icons8-github-50.png" id="github"></a>
                  </div>
                </div>`;
                const modalContainer = document.getElementById("modalContainer");
                modalContainer.style.display = "none";

                    const closeModal = document.getElementById("closeModal");
                    closeModal.addEventListener("click", function(){
                        const modalContainer = document.getElementById("modalContainer")
                        const modal = document.getElementById("modal")
                        modal.style.animation = "fadeOut 0.5s ease-out forwards";
                        modal.style.display = "none";
                        setTimeout(() => {
                            modalContainer.style.display = "none" 
                        }, 500)
                        modalContainer.style.animation = "fadeOut 0.7s";
                    })

                    const startButton = document.getElementById("startButton");
                    startButton.addEventListener("click", function() {
                        window.numQuestions = 5;
                        window.difficulty = "easy";
                        window.cat = 9;
                        fetchQuestions(window.numQuestions, window.difficulty, window.cat)
                    });
                
                    const instructions = document.getElementById("instructions");
                    instructions.addEventListener("click", function(){
                        const modalContainer = document.getElementById("modalContainer")
                        const modal = document.getElementById("modal")
                        modal.style.animation = "fadeIn 0.5s ease-in forwards";
                        modal.style.display = "flex";
                        setTimeout(() => {
                            modalContainer.style.display = "flex" 
                        }, 250)
                        modalContainer.style.animation = "fadeIn 0.7s";
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
                        window.numQuestions = document.getElementById("amtQuestions").value || 5;
                        window.difficulty = document.getElementById("difficulty").value || "easy";
                        window.cat = document.getElementById("category").value || 9;
                        fetchQuestions(window.numQuestions, window.difficulty, window.cat);
                    });

                    setInterval(() => {
                        fetchRandomFact();
                    }, 7500);




                    const buttons = document.getElementsByTagName("button");
                    for (let i = 0; i < buttons.length; i++) {
                        const hoverAudio = new Audio();
                        hoverAudio.src = "../audio/click-for-game-menu-131903.mp3"
                        hoverAudio.playbackRate=1.5;
                        const clickAudio = new Audio();
                        clickAudio.src = "../audio/ping-82822.mp3"
                        clickAudio.playbackRate=2.5;
                        const button = buttons[i];
                        button.addEventListener("mouseover", function() {
                            hoverAudio.play();
                        });
                        button.addEventListener("click", function() {
                            clickAudio.play();
                        });
                    };
                
            });
            main.appendChild(gameOver);
            main.appendChild(playAgain);
            main.appendChild(mainMenu);
            main.appendChild(wrongQuestions);
    };

    answerResult(answer){
        const answerText = answer.innerText
        const selectedButton = document.getElementById(answer.getAttribute("id"));
        if (answerText === this.currentQuestionSet.decodedRightAnswer()) {
            this.score += 1;
            this.counter += 1;
            selectedButton.classList.add("correct");
            const correctAudio = new Audio();
            correctAudio.src = "../audio/ui_correct_button2-103167.mp3"
            correctAudio.play();
        }else {
            this.incorrectQuestions.push(this.currentQuestionSet.decodedQuestion())
            this.counter += 1;
            this.correctAnswers.push(this.currentQuestionSet.decodedAnswer(this.currentQuestionSet.rightAnswer));
            selectedButton.classList.add("incorrect");
            const incorrectAudio = new Audio();
            incorrectAudio.src = "../audio/negative_beeps-6008.mp3"
            incorrectAudio.play();
        };
        this.nextQuestion();
    };

};



