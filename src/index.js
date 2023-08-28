// import Example from "./scripts/example";
    import { Game } from "./scripts/game"

export async function fetchQuestions(num, difficulty, cat) {
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
        fetchQuestions(5, "easy", 9)
    });

    const settingsButton = document.getElementById("settingsButton");
    settingsButton.addEventListener("click", function(){
        const main = document.getElementById("main");
        main.innerText = "I hate my life"
    });

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", function(){
        const modalContainer = document.getElementById("modalContainer")
        const modal = document.getElementById("modal")
        modal.style.animation = "fadeOut 0.5s ease-out forwards";
        modal.style.display = "none";
        modalContainer.style.animation = "fadeOut 0.5s";
    })

    const customGame = document.getElementById("customGame");
    customGame.addEventListener("click", function (){
        const customModal = document.getElementById("customModal")
        const gameMenu = document.getElementById("gameMenu")
        gameMenu.style.display = "none";
        customModal.style.display = "flex";
    })

    const backButton = document.getElementById("back");
    backButton.addEventListener("click", function() {
        gameMenu.style.display = "flex";
        customModal.style.display = "none";
    })

    const startCusom = document.getElementById("customStart");
    startCusom.addEventListener("click", function() {
        fetchQuestions(5, "easy", 9)
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



