
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let compWins = 0;
let playWins = 0;
let choice;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function (e) {
    choice = ROCK;
    game();
});
paper.addEventListener('click', function (e) {
    choice = PAPER;
    game();
});
scissors.addEventListener('click', function (e) {
    choice = SCISSORS;
    game();
});



function getComputerChoice()
{
    const MAX = 3;

    let choice = Math.random() * MAX;

    return Math.floor(choice);
}

function getPlayerChoice()
{
    let choice;

    
    function rockFunction()
    {
    }
    rock.addEventListener('click', rockFunction);

    paper.addEventListener('click', () => 
    {
        choice = PAPER;
    });

    scissors.addEventListener('click', () => 
    {
        choice = SCISSORS;
    });

    
}

function playRound(playerChoice, compChoice)
{   
    let msg;

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
        compWins++;
    }
    else if (playerChoice === PAPER && compChoice === SCISSORS)
    {
        msg = "Computer wins! Scissors beats paper!";
        compWins++;
    }
    else if (playerChoice === SCISSORS && compChoice === ROCK)
    {
        msg = "Computer wins! Rock beats scissors!";
        compWins++
    }
    else if (compChoice === ROCK && playerChoice === PAPER)
    {
        msg = "You win! Paper beats rock!";
        playWins++;
    }
    else if (compChoice === PAPER && playerChoice === SCISSORS)
    {
        msg = "You win! Scissors beats paper!";
        playWins++;
    }
    else if (compChoice === SCISSORS && playerChoice === ROCK)
    {
        msg = "You win! Rock beats scissors!";
        playWins++;
    }

    return msg;
}

function game()
{

        compChoice = getComputerChoice();

        playerChoice = choice;
        
        console.log(playRound(playerChoice, compChoice));

}