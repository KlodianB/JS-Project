// import Example from "./scripts/example";

async function fetchQuestions(num, difficulty, cat) {
    let url = `https://opentdb.com/api.php?`
    if (cat) {
        url += `amount=${num}&category=${cat}&difficulty=${difficulty}&type=multiple`
    } else {
        url += `amount=${num}&difficulty=${difficulty}&type=multiple`
    }
    const res = await fetch(url);
    const questions = await res.json();
    console.log(questions.results[0].question);
    const main = document.getElementById("main");
    main.innerText = questions.results[0].question;
    // fetch(url).then(res => { res.json() }).then(questions => console.log(questions))
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello World!");
    const startButton = document.getElementById("startButton");
    startButton.document.addEventListener("click", )

    // const main = document.getElementById("main");
    // new Example(main);
    // fetchQuestions(4, "easy")
});


// fetchQuestions(4, "easy")




