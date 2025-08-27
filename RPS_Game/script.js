let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const winningMsg = document.querySelector("#info");
const result = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"]
    const compIdx = Math.floor(Math.random() * 3);
    return options[compIdx];
}

const gameDraw = (userChoice,compChoice) => {
    winningMsg.innerText = "Game was Drawn. Play Again.";
    winningMsg.style.backgroundColor = "gold";
    winningMsg.style.color = "black";
    result.innerText = `Your Choice is "${userChoice}" & Computer's Choice is "${compChoice}"`;
    result.style.backgroundColor = "gold";
    result.style.color = "black";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        winningMsg.innerText = `Congratulations. You have Won the Game`;
        winningMsg.style.backgroundColor = "green";
        winningMsg.style.color = "black"
        result.innerText = `Your ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        result.style.color = "black";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        winningMsg.innerText = "Good Try. You lost the game.";
        winningMsg.style.backgroundColor = "red";
        winningMsg.style.color = "black"
        result.innerText = `${compChoice} beats Your ${userChoice}`;
        result.style.backgroundColor = "red";
        result.style.color = "black";
    }
}

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        gameDraw(userChoice,compChoice);
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
            userWin = compChoice === "scissors" ? true : false;
        }
        else if(userChoice === "paper"){
            //rock , scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            //rock , paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});