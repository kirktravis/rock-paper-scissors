
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

compChoice = getComputerChoice();

playerChoice = getPlayerChoice();

console.log(playRound(playerChoice, compChoice));

function getComputerChoice()
{
    const MAX = 3;

    let choice = Math.random() * MAX;

    return Math.floor(choice);
}

function getPlayerChoice()
{
    const P_ROCK = "ROCK";
    const P_PAPER = "PAPER";
    const P_SCISSORS = "SCISSORS";

    let choice = window.prompt("Input Rock, Paper, or Scissors");

    choice = choice.toUpperCase();

    if (choice === P_ROCK)
    {
        choice = ROCK;
    }
    else if (choice === P_PAPER)
    {
        choice = PAPER;
    }
    else if (choice === P_SCISSORS)
    {
        choice = SCISSORS;
    }
    else
    {
        console.log("ERROR: INVALID INPUT");
    }

    return choice;
}

function playRound(playerChoice, compChoice)
    {
        if (playerChoice == ROCK)
    {
        console.log("The player chose Rock");
    }
    else if(playerChoice == PAPER)
    {
        console.log("The player chose Paper");
    }
    else
    {
        console.log("The player chose Scissors");
    }

    if (compChoice == ROCK)
    {
        console.log("The computer chose Rock");
    }
    else if(compChoice == PAPER)
    {
        console.log("The computer chose Paper");
    }
    else
    {
        console.log("The computer chose Scissors");
    }
    
    if (playerChoice === compChoice)
    {
        msg = "Draw Game!";
    }
    else if (playerChoice === ROCK && compChoice === PAPER)
    {
        msg = "Computer wins! Paper beats rock!";
    }
    else if (playerChoice === PAPER && compChoice === SCISSORS)
    {
        msg = "Computer wins! Scissors beats paper!";
    }
    else if (playerChoice === SCISSORS && compChoice === ROCK)
    {
        msg = "Computer wins! Rock beats scissors!";
    }
    else if (compChoice === ROCK && playerChoice === PAPER)
    {
        msg = "You win! Paper beats rock!";
    }
    else if (compChoice === PAPER && playerChoice === SCISSORS)
    {
        msg = "You win! Scissors beats paper!";
    }
    else if (compChoice === SCISSORS && playerChoice === ROCK)
    {
        msg = "You win! Rock beats scissors!";
    }

    return msg;
}
