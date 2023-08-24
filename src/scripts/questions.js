export class Questions {
    constructor(num, category, difficulty) {
        this.num = num;
        this.category = category;
        this.difficulty = difficulty
    }

    async fetchQuestions(num, cat, difficulty) {
        let url = `https://opentdb.com/api.php?`
        if (cat) {
            url += `amount=${num}&category={cat}&difficulty=${difficulty}&type=multiple`
        } else {
            url += `amount=${num}&difficulty=${difficulty}&type=multiple`
        }
        const res = await fetch(url);
        const questions = await res.json();

    }




    // https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
}