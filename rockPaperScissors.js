function rockPaperScissors(playerTurn, computerTurn) {
    // let computerTurn = 0;
    // let playerTurn = 0;

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    if (playerTurn === "r" || playerTurn === "rock") {
        playerTurn = rock;
        console.log(`You chose ${playerTurn}`);
    } else if (playerTurn === "p" || playerTurn === "paper") {
        playerTurn = paper;
        console.log(`You chose ${playerTurn}`);
    } else if (playerTurn === "s" || playerTurn === "scissors") {
        playerTurn = scissors;
        console.log(`You chose ${playerTurn}`);
    } else {
        console.log("Invalid Input. Try Again...");
    }


    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            //randomNumber = rock;  
            computerTurn = rock;
            break;
        case 2:
            //randomNumber = paper;
            computerTurn = paper;
            break;
        case 3:
            // randomNumber = scissors;
            computerTurn = scissors;
            break;
    }

    console.log(`The computer choses ${computerTurn}`);

    if ((playerTurn === rock && computerTurn === scissors) || (playerTurn === paper && computerTurn === rock) || (playerTurn === scissors && computerTurn === paper)) {
        console.log("You win!");
    } else if ((playerTurn === rock && computerTurn === paper) || (playerTurn === paper && computerTurn === scissors) || (playerTurn === scissors && computerTurn === rock)) {
        console.log("You lose!");
    } else {
        console.log("This game was a draw!");
    }

}

rockPaperScissors();

