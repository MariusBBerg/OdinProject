function getComputerChoice() {
    let alternatives = ["rock", "paper", "scissors"];
    return alternatives[Math.floor(Math.random() * alternatives.length)];
}

function playRound(playerSelec, computerSelec) {
    // Convert playerSelec and computerSelec to lowercase for case-insensitivity
    playerSelec = playerSelec.toLowerCase();
    computerSelec = computerSelec.toLowerCase();

    if (playerSelec === computerSelec) {
        return NaN
    } else if (
        (playerSelec === "rock" && computerSelec === "scissors") ||
        (playerSelec === "paper" && computerSelec === "rock") ||
        (playerSelec === "scissors" && computerSelec === "paper")
    ) {
        return true;
    } else {
        return false;
    }
}






function game(){
    let playerscore = 0
    let computerScore = 0
    for (let i = 0; i<5; i++){
        let playerSelec = prompt("Rock, paper or scissor?");
        let computerSelec = getComputerChoice();
        if (playRound(playerSelec, computerSelec)){
            console.log(`You win! ${playerSelec} beats ${computerSelec}`);
            playerscore++
        }
        else if (!playRound(playerSelec, computerSelec)) {
            console.log(`Computer wins! ${computerSelec} beats ${playerSelec}`)
            computerScore++
        }
        else{
            console.log("It's a tie! No points.")
        }
        console.log(`The score is PlayerScore:${playerscore} ComputerScore ${computerScore}`)
    }

    
}

game()