export class QuestionSet{
    constructor(questionSet){
        this.question = questionSet.question;
        this.wrongAnswers = questionSet.incorrect_answers;
        this.rightAnswer = questionSet.correct_answer;
    }

    shuffledAnswers() {
        let allAnswers = this.wrongAnswers.concat(this.rightAnswer)
        for (let i = allAnswers.length - 1; i > 0; i--) {
            const r = Math.floor(Math.random() * (i + 1));
            [allAnswers[i], allAnswers[r]] = [allAnswers[r], allAnswers[i]];
        }
        return allAnswers;
    }

    decodedQuestion() {
        let txt = document.createElement("textarea");
        txt.innerHTML = this.question;
        return txt.value;
    }

    decodedAnswer(answer) {
        let txt = document.createElement("textarea");
        txt.innerHTML = answer;
        return txt.value
    }

    decodedRightAnswer() {
        let txt = document.createElement("textarea");
        txt.innerHTML = this.rightAnswer;
        return txt.value
    }

}
 

