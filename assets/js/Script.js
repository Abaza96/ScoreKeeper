//The Variables
let p1Score = document.querySelector(".p1Score");
let p1ScoreButton = document.querySelector(".score1");

let scoreForP1 = 0;
let scoreForP2 = 0;
let maxScore = 0;
let Score = document.getElementById("limit");

let winningScore = document.querySelector(".detector span");
let p2Score = document.querySelector(".p2Score");
let p2ScoreButton = document.querySelector(".score2");

let reset = document.querySelector(".again");
let gameOver = false;

//The Process


p1ScoreButton.addEventListener("click", player1ScoredOne);
p2ScoreButton.addEventListener("click", player2ScoredOne);
reset.addEventListener("click", startOver);
Score.addEventListener("change", function() {
    winningScore.textContent = Score.value;
    maxScore = Number(Score.value);
});

//functions Section
function player1ScoredOne() {
    console.log(scoreForP1, maxScore);
    if (!gameOver) {
        scoreForP1++;
        if (scoreForP1 === maxScore) {
            gameOver = true;
        }
        p1Score.textContent = scoreForP1;
    }

    if (scoreForP1 === maxScore) {
        p1Score.classList.add("winner");
        p2Score.classList.add("loser");
    }
}

function player2ScoredOne() {
    if (!gameOver) {
        scoreForP2++;
        if (scoreForP2 === maxScore) {
            gameOver = true;
        }
        p2Score.textContent = scoreForP2;
    }

    if (scoreForP2 === maxScore) {
        p2Score.classList.add("winner");
        p1Score.classList.add("loser");
    }

}

function startOver() {
    let tempArray = ["winner", "loser"];
    gameOver = false;
    scoreForP1 = 0;
    scoreForP2 = 0;
    p1Score.textContent = scoreForP1;
    p2Score.textContent = scoreForP2;
    for (let i = 0; i < tempArray.length; i++) {
        p1Score.classList.remove(tempArray[i]);
        p2Score.classList.remove(tempArray[i]);
    }
}