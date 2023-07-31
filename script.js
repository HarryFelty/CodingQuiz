let h1 = document.querySelector("h1");
let buttons = document.querySelectorAll("button");
let quizDiv = document.querySelector("#quiz");

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let timer = 60;
let index = 0;
let score = 0;

// let timerId = setInterval(() => {
//     timer--;

// }, 1000)


let questions = [{ question1: "", answers: [], correctAnswer: "" },
{ question2: "", answers: [], correctAnswer: "" },
{ question3: "", answers: [], correctAnswer: "" },
{ question4: "", answers: [], correctAnswer: "" },
{ question5: "", answers: [], correctAnswer: "" }];

function renderQuestion() {
    h1.textContent = questions[index];
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questions[index].answers[i];
    }
}

quizDiv.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        if (event.target.innerText === questions[index].correctAnswer) {
            score++;
        } else {
            timer -= 5;
        }
        index++;
        renderQuestion();
    }
})