
const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

let compWins = 0;
let playWins = 0;
let choice;

const header = document.querySelector('body');
const score = document.createElement('h1');
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
        
        playRound(choice, compChoice);

        if (playWins >= 5)
        {
            score.textContent = "You win!";
        }
        else if (compWins >= 5)
        {
            score.textContent = "You lose."
        }
        else
        {
            score.textContent =`Player Score: ${playWins} \nComputer Score: ${compWins}`;
        }        
        
        header.insertBefore(score, header.firstChild);

}