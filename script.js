let h1 = document.querySelector("h1");
let buttons = document.querySelectorAll("button");
let quizDiv = document.querySelector("#quiz");
let startBtn = document.querySelector("#startBtn");
let timerDisplay = document.querySelector("#timer");
let answerBtns = document.querySelectorAll(".answer");

let timer = 60;
let index = 0;
let score = 0;
let timerId;

let questions = [{ question: "How are Bilbo and Frodo related?", answers: ["Bilbo is Frodo's uncle.", "Frodo is Bilbo's son.", "They are not related.", "Frodo is Bilbo's second cousin."], correctAnswer: "Frodo is Bilbo's second cousin." },
{ question: "What is the name of Sauron's fortress in Morder?", answers: ["Angmar", "Barad-dur", "Dol Guldur", "Minas Morgul"], correctAnswer: "Barad-dur" },
{ question: "What are the names of Farmer Maggot's dogs?", answers: ["Wolf, Fang, and Grip", "CuSith and Garmr", "Shuck, Barghest, and Argos", "Orthrus and Failinis"], correctAnswer: "Wolf, Fang, and Grip" },
{ question: "Who was Frodo's father?", answers: ["Bungo Baggins", "Drogo Baggins", "Bilbo Baggins", "Fosco Baggins"], correctAnswer: "Drogo Baggins" },
{ question: "Who is the wife of Tom Bombadil?", answers: ["Galadriel", "Rosie", "Goldberry", "Eowyn"], correctAnswer: "Goldberry" }];


//initializes quiz
renderStartMenu();

//adds event listeners
startBtn.addEventListener("click", function () {
    renderQuestion();
    setTimer();
    startBtn.disabled = true;
    answerBtns.forEach(btn => { btn.disabled = false });
});

//event delegation to ensure button is clicked, checks for correct answer, and renders next question
quizDiv.addEventListener("click", event => {
    if (event.target.matches("button")) {
        if (event.target.innerText === questions[index].correctAnswer) {
            score += 10;
        } else {
            timer -= 5;
        }
        index++;

        if (index === questions.length) {
            clearInterval(timerId);
            localStorage.setItem("Score", JSON.stringify(score));
            window.location.href = "highscore/highscore.html";
        }
        renderQuestion();
    }
})

function renderStartMenu() {
    h1.textContent = "The Lord of the Rings Quiz!";
    score = 0;
    timer = 60;
    index = 0;
    answerBtns.forEach(btn => { btn.disabled = true });
}

//displays question and answers on screen
function renderQuestion() {
    h1.textContent = questions[index].question;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questions[index].answers[i];
    }
}

//starts timer
function setTimer() {
    timerId = setInterval(function () {
        timer--;
        if (timer === 0) {
            window.location.href = "highscore/highscore.html";
        }
        timerDisplay.textContent = `Time: ${timer}`;
    }, 1000)
}