let userScr = 0;
let compScr = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice = () => {
    const opts = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * opts.length);
    return opts[randIdx];
};

const playGame = (userChoice) => {
    console.log("user Choice: " + userChoice);
    const compChoice = generateCompChoice();
    console.log("comp Choice: " + compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        const userWin = (userChoice === "rock" && compChoice === "scissor") ||
                        (userChoice === "paper" && compChoice === "rock") ||
                        (userChoice === "scissor" && compChoice === "paper");

        showWinner(userWin, userChoice, compChoice);
    }
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "DRAW! Play Again 🔁";
    msg.style.backgroundColor = "#081b31";
    animateMessage();
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScr++;
        updateScore(userScorePara, userScr);
        console.log("YOU WON!");
        msg.innerText = "YOU WON 💖! Your " + userChoice + " beats " + compChoice;
        msg.style.backgroundColor = "green";
    } else {
        compScr++;
        updateScore(compScorePara, compScr);
        console.log("YOU LOST!");
        msg.style.backgroundColor = "red";
        msg.innerText = "YOU LOST 😭! " + compChoice + " beats your " + userChoice;
    }
    animateMessage();
};

const updateScore = (scoreElement, score) => {
    scoreElement.innerText = score;
    scoreElement.classList.add("score-change");
    setTimeout(() => {
        scoreElement.classList.remove("score-change");
    }, 300);
};

const animateMessage = () => {
    msg.classList.add("score-change");
    setTimeout(() => {
        msg.classList.remove("score-change");
    }, 300);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
