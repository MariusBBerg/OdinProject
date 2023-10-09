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






function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameEnded = false; // Legg til en variabel for å spore om spillet er avsluttet

    const container = document.querySelector('#container');
    const buttons = document.querySelectorAll('button');
    const scoreLine = document.createElement('p');
    const score = document.createElement('p');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (!gameEnded) { // Sjekk om spillet allerede er avsluttet
                let computerSelec = getComputerChoice();
                let playerSelec = button.id;

                if (playRound(playerSelec, computerSelec)) {
                    scoreLine.textContent = `You win! ${playerSelec} beats ${computerSelec}`;
                    playerScore++;
                } else if (!playRound(playerSelec, computerSelec)) {
                    scoreLine.textContent = `Computer wins! ${computerSelec} beats ${playerSelec}`;
                    computerScore++;
                } else {
                    scoreLine.textContent = "It's a tie! No points.";
                }

                score.textContent = `The score is PlayerScore: ${playerScore} ComputerScore: ${computerScore}`;

                if (playerScore === 5 || computerScore === 5) {
                    gameEnded = true; // Marker spillet som avsluttet
                    buttons.forEach(button => button.disabled = true); // Deaktiver knappene
                }
            }
        });
    });

    container.appendChild(scoreLine);
    container.appendChild(score);
}

game()
