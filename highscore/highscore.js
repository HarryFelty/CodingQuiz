let initials = document.querySelector("#initials");
let saveForm = document.querySelector("form");
let h2 = document.querySelector("h2");
let scoresList = document.querySelector("ol");
let saveBtn = document.querySelector("#saveBtn");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let score = JSON.parse(localStorage.getItem("Score")) || 0;

saveBtn.disabled = false;
h2.textContent = `Your score is: ${score}`;

saveForm.addEventListener("submit", submitForm);

printScores();

//displays scores to screen
function printScores() {
    //sorts array based on score highest to lowest
    highScores.sort((a, b) => {
        return b.playerScore - a.playerScore;
    });

    //loops through array, creating new list elements and appending to ol
    for (let i = 0; i < 10; i++) {
        let newLi = document.createElement("li");
        newLi.textContent = highScores[i].userName + ": " + highScores[i].playerScore;
        scoresList.appendChild(newLi);
    }
}

//manages form submission, adds user info to highscores array and stores to lcoal storage
function submitForm(event) {
    event.preventDefault();

    let newScore = {
        userName: initials.value,
        playerScore: score
    };

    highScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    saveBtn.disabled = true;
}
