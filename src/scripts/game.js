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
            main.innerText = `Game over! You got ${this.score} out of 10 questions correct!`
        }
    }

    renderQuestion(){
        const main = document.getElementById("main");
        main.innerHTML = "";

        const questionContainer = document.createElement("div");
        questionContainer.innerText = this.currentQuestionSet.question;
        main.appendChild(questionContainer);

        const answersContainer = document.createElement("div");
        const answers = this.currentQuestionSet.shuffledAnswers();

        for (let i = 0; i < answers.length; i++) {
            const answer = answers[i];
            let answerButton = document.createElement("button");
            answerButton.innerText = answer;
            answerButton.addEventListener("click", () => this.answerResult(answer))
            // answersContainer.appendChild(answerButton);
        }

        main.appendChild(answersContainer);
    }

    answerResult(answer){
        if (answer === this.currentQuestionSet.rightAnswer) {
            this.score += 1
        }
        this.nextQuestion();
    }

}













// questionSet.forEach(element => {
//     this.questions.push(element[question])
//     this.answers.push(element[incorrect_answers])
//     this.correct_answers.push[element[this.correct_answer]]
// });