
const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

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

    if (choice == 0)
    {
        choice = ROCK;
    }

    if (choice == 1)
    {
        choice = PAPER;
    }

    else
    {
        choice = SCISSORS;
    }

    return choice;
}


function playRound(playerChoice, compChoice)
{   
    let msg;

    const results = document.querySelector('#results')

    msg = `You chose ${playerChoice} and the computer chose ${compChoice}.`;

    if (playerChoice === compChoice)
    {
        msg = msg + "\nDraw Game!";
    }
    else if (playerChoice === ROCK && compChoice === PAPER)
    {
        msg =  msg + "\n\nComputer wins! Paper beats rock!";
        compWins++;
    }
    else if (playerChoice === PAPER && compChoice === SCISSORS)
    {
        msg = msg + "\nComputer wins! Scissors beats paper!";
        compWins++;
    }
    else if (playerChoice === SCISSORS && compChoice === ROCK)
    {
        msg = msg + "\nComputer wins! Rock beats scissors!";
        compWins++
    }
    else if (compChoice === ROCK && playerChoice === PAPER)
    {
        msg = msg + "\nYou win! Paper beats rock!";
        playWins++;
    }
    else if (compChoice === PAPER && playerChoice === SCISSORS)
    {
        msg = msg + "\nYou win! Scissors beats paper!";
        playWins++;
    }
    else if (compChoice === SCISSORS && playerChoice === ROCK)
    {
        msg = msg + "\nYou win! Rock beats scissors!";
        playWins++;
    }

    results.textContent = msg;
    
}

function game()
{

        compChoice = getComputerChoice();

        playerChoice = choice;
        
        console.log(playRound(playerChoice, compChoice));

}