let userScr = 0;
let compScr = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice = () => {
    const opts = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return opts[randIdx];
}

const playGame = (userChoice) => {
    console.log("user Choice : "+userChoice);
    // generate comp choice
    const compChoice = generateCompChoice();
    console.log("comp Choice : "+compChoice);

    if(userChoice === compChoice){
        // Draw game
        drawGame();
    } else {
        let userWin = true; 
        if(userChoice === "rock") {
            // scissor , paper
            userWin = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper") {
            //rock , scissor
            userWin = compChoice === "rock" ? true : false;
        } else if (userChoice === "scissor"){
            // rock , paper
            userWin = compChoice ==="rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "DRAW ! Play Again 🔁"
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScr++;
        userScorePara.innerText = userScr;
        console.log("YOU WON!");
        msg.innerText = "YOU WON 💖 ! Your " + userChoice + " beats " + compChoice ;
        msg.style.backgroundColor = "green";
        } else {
            compScr++;
            compScorePara.innerText = compScr;
            console.log("YOU LOST!");
            msg.style.backgroundColor = "red";
        msg.innerText = "YOU LOST 😭 ! " + compChoice + " beats your " + userChoice ;
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
    
});