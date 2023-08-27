import { QuestionSet } from "./questionSet"

export class Game {
    constructor(dataset){
        this.dataset = dataset;
        this.currentQuestionSet = null
        this.score = 0;
        this.nextQuestion();
    }


    nextQuestion() {
        if (this.dataset.length > 0) {
            this.currentQuestionSet = new QuestionSet(this.dataset.shift())
            this.renderQuestion();
        } else {
            const main = document.getElementById("main");
            const gameOver = document.createElement("div");
            gameOver.setAttribute("id", "gameOver")
            main.innerHTML = "";
            gameOver.innerText = `Game over! You got ${this.score} out of 5 questions correct!`;
            main.appendChild(gameOver);
        }
    }

    renderQuestion(){
        const main = document.getElementById("main");
        main.innerHTML = "";

        const questionContainer = document.createElement("div");
        questionContainer.setAttribute("id", "questionContainer");
        questionContainer.innerText = JSON.stringify(this.currentQuestionSet.question);
        main.appendChild(questionContainer);

        const answersContainer = document.createElement("div");
        answersContainer.setAttribute("id", "answersContainer");
        const answers = this.currentQuestionSet.shuffledAnswers();

        for (let i = 0; i < answers.length; i++) {
            const answer = answers[i];
            let answerButton = document.createElement("button");
            answerButton.setAttribute("id", `answer${i}`)
            answerButton.innerText = answer;
            answerButton.addEventListener("click", () => this.answerResult(answer))
            answersContainer.appendChild(answerButton);
        }

        main.appendChild(answersContainer);
    }

    answerResult(answer){
        if (answer === this.currentQuestionSet.rightAnswer) {
            this.score += 1
            console.log("Correct!")
        }else {
            console.log("incorrect!")
        }
        this.nextQuestion();
    }

}



