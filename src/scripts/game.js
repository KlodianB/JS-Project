import { QuestionSet } from "./questionSet"
import { fetchQuestions } from "../index.js"

export class Game {
    constructor(dataset){
        this.dataset = dataset;
        this.currentQuestionSet = null
        this.score = 0;
        this.incorrectQuestions = [];
        this.correctAnswers = [];
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
            answerButton.addEventListener("click", () => this.answerResult(answer))
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
            gameOver.innerText = `Game over! You got ${this.score} out of 5 questions correct!`;
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
                nothing;
            })
            main.appendChild(gameOver);
            main.appendChild(playAgain);
            main.appendChild(mainMenu);
            main.appendChild(wrongQuestions);
    }

    answerResult(answer){
        if (answer === this.currentQuestionSet.decodedAnswer(this.currentQuestionSet.rightAnswer)) {
            this.score += 1
            console.log("Correct!")
        }else {
            this.incorrectQuestions.push(this.currentQuestionSet.decodedQuestion())
            console.log("incorrect!")
            this.correctAnswers.push(this.currentQuestionSet.decodedAnswer(this.currentQuestionSet.rightAnswer))
        }
        this.nextQuestion();
    }


}



