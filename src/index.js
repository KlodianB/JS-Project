import Example from "./scripts/example";


document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello World!");

    const main = document.getElementById("main");
    new Example(main);
});