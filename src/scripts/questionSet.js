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

}
 

