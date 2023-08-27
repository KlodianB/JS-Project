// import Example from "./scripts/example";
    import { Game } from "./scripts/game"

async function fetchQuestions(num, difficulty, cat) {
    let url = `https://opentdb.com/api.php?`
    if (cat) {
        url += `amount=${num}&category=${cat}&difficulty=${difficulty}&type=multiple`
    } else {
        url += `amount=${num}&difficulty=${difficulty}&type=multiple`
    }
    const res = await fetch(url);
    const questions = await res.json();
    new Game(questions.results);
}

document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function() {
        fetchQuestions(5, "easy")
    })
    const settingsButton = document.getElementById("settingsButton")
    settingsButton.addEventListener("click", function(){
        const main = document.getElementById("main");
        main.innerText = "I hate my life"
    })
    const leaderboard = document.getElementById("leaderboard")
    leaderboard.addEventListener("click", function(){
        const main = document.getElementById("main")
        main.innerText = "you're a moron if you thought this would work"
    })
});













// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple

// async function fetchQuestions(num, difficulty, cat) {
//     let url = `https://opentdb.com/api.php?`
//     if (cat) {
//         url += `amount=${num}&category=${cat}&difficulty=${difficulty}&type=multiple`
//     } else {
//         url += `amount=${num}&difficulty=${difficulty}&type=multiple`
//     }
//     const res = await fetch(url);
//     const questions = await res.json();
//     return questions.results;
// };

// fetchQuestions(4, "easy").then(results => console.log(results))



