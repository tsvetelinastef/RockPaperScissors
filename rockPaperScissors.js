function rockPaperScissors(playerChoice) {
    const rock = "Rock" ;
    const paper = "Paper";
    const scissors = "Scissors"; 


    if (playerChoice == "r" || playerChoice == "Rock") {
        playerChoice = rock;
    } else if (playerChoice == "p" || playerChoice == "Paper") {
        playerChoice = paper;
    } else if (playerChoice == "s" || playerChoice == "Scissors") {
        playerChoice = scissors;
    } else {
        console.log("Invalid Input. Try Again...");
        return;
    }
    console.log(`\x1b[33mYou choose ${playerChoice} \x1b[0m`);

    //Computer Choice

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = '';

    switch (randomNumber) {
        case 1: computerChoice = "Rock";
            break;
        case 2: computerChoice = "Paper";
            break;
        case 3: computerChoice = "Scissors";
            break;
    }
    console.log(`The computer chose ${computerChoice}.`);

    //Win or Lose

    if ((playerChoice == rock && computerChoice == 'Scissors')
        || (playerChoice == paper && computerChoice == 'Rock')
        || (playerChoice == scissors && computerChoice == 'Paper')) {
        console.log('You Win!');
    } else if ((playerChoice == rock && computerChoice == 'Paper')
        || (playerChoice == paper && computerChoice == 'Scissors')
        || (playerChoice == scissors && computerChoice == 'Rock')) {
        console.log('You Lose!');
    } else {
        console.log('This game was a draw!'); 
    }


}

rockPaperScissors("r");

/*

Source: https://blog.logrocket.com/using-console-colors-node-js/#implementing-console-colors-node-js-apps


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
//-----------------------------------------------------------------
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
//---------------------------------------------------------------------
    if ((playerTurn === rock && computerTurn === scissors) || (playerTurn === paper && computerTurn === rock) || (playerTurn === scissors && computerTurn === paper)) {
        console.log("You win!");
    } else if ((playerTurn === rock && computerTurn === paper) || (playerTurn === paper && computerTurn === scissors) || (playerTurn === scissors && computerTurn === rock)) {
        console.log("You lose!");
    } else {
        console.log("This game was a draw!");
    }
*/
