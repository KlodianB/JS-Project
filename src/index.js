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

    async function fetchRandomFact() {
        const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random'

        const res = await fetch(url);
        const fact = await res.json();
        const randomFactContainer = document.getElementById("randomFact");
        randomFactContainer.style.opacity = 0;


        await new Promise(resolve => setTimeout(resolve, 1000)); 
        randomFactContainer.innerText = fact.text;
        randomFactContainer.style.opacity = 1;
        randomFactContainer.innerText = fact.text;
    }

document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function() {
        window.numQuestions = 5;
        window.difficulty = "easy";
        window.cat = 9;
        fetchQuestions(5, "easy", 9)
    });

    const instructions = document.getElementById("instructions");
    instructions.addEventListener("click", function(){
        const modalContainer = document.getElementById("modalContainer");
        const modal = document.getElementById("modal");
        modal.style.animation = "fadeIn 0.5s ease-in forwards";
        modal.style.display = "flex";
        setTimeout(() => {
            modalContainer.style.display = "flex" 
        }, 250);
        modalContainer.style.animation = "fadeIn 0.7s";
    });

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", function(){
        const modalContainer = document.getElementById("modalContainer");
        const modal = document.getElementById("modal");
        modal.style.animation = "fadeOut 0.5s ease-out forwards";
        modal.style.display = "none";
        setTimeout(() => {
            modalContainer.style.display = "none" 
        }, 500);
        modalContainer.style.animation = "fadeOut 0.7s";
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
        hoverAudio.src = "./audio/click-for-game-menu-131903.mp3"
        hoverAudio.playbackRate=1.5;
        const clickAudio = new Audio();
        clickAudio.src = "./audio/ping-82822.mp3"
        clickAudio.playbackRate=2.5;
        const button = buttons[i];
        button.addEventListener("mouseover", function() {
            hoverAudio.play();
        });
        button.addEventListener("click", function() {
            clickAudio.play();
        });
    };

    // function mute(el) {
    //     el.muted = !el.muted;
    // };


    // function muteMe(elem) {
    //     elem.muted = true;
    //     elem.pause();
    // }
    
    // function mutePage() {
    //     document.querySelectorAll("video, audio").forEach((elem) => muteMe(elem));
    // }

    // const muteButton = document.getElementById("mute");
    // muteButton.addEventListener("click", function() {
    //     mutePage();
    // });

});








