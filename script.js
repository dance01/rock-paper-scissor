let humanScore = 0;
let computerScore = 0;
let counter = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound('rock'));
paper.addEventListener("click", () => playRound('paper'));
scissors.addEventListener("click", () => playRound('scissors'));

let divHuman = document.querySelector('#divHuman');
const paraHuman = document.createElement('img');
let divComputer = document.querySelector('#divComputer');
const paraComputer = document.createElement('img');
let divResult = document.querySelector('#results');
const paraResult = document.createElement('p');
let humanPoint = document.querySelector('#humanPoint');
let computerPoint = document.querySelector('#computerPoint');

humanPoint.textContent = `YOUR POINTS: ${humanScore}`;
computerPoint.textContent = `COMPUTER POINTS: ${computerScore}`;

function playRound(hSelection){
    if (counter > 0){
    divHuman.removeChild(paraHuman);
    divComputer.removeChild(paraComputer);
    divResult.removeChild(paraResult);
    };
    
    let result = '';
    let cSelection = "";
    let humanSelection = hSelection;
    let computerSelection = getRandomInt(3);

    switch (humanSelection){
        case "rock":
            humanSelection = 0;
            break;
        case "paper":
            humanSelection = 1;
            break;
        case "scissors":
            humanSelection = 2;
            break;
    };
    
    if (computerSelection === 0)
        cSelection = 'rock'
    else if (computerSelection === 1)
        cSelection = 'paper'
    else if (computerSelection === 2)
        cSelection = 'scissors'

    if (humanSelection === computerSelection){
        result = 'PAIR!'
        paraResult.setAttribute("style", "color:grey");
    }
    else if (humanSelection === 0 && computerSelection === 2
            || humanSelection === 1 && computerSelection === 0
            || humanSelection === 2 && computerSelection === 1){
        result = 'WON!'
        paraResult.setAttribute("style", "color:green");
        humanScore ++;
    }
    else {
        result = 'LOST!'
        paraResult.setAttribute("style", "color:red");
        computerScore ++;
    }
    
    paraHuman.src = `./images/${hSelection}.svg`
    divHuman.appendChild(paraHuman);
    paraComputer.src = `./images/${cSelection}.svg`
    divComputer.appendChild(paraComputer);
    paraResult.textContent = `${result}`
    divResult.appendChild(paraResult);

    humanPoint.textContent = `YOUR POINTS: ${humanScore}`;
    computerPoint.textContent = `COMPUTER POINTS: ${computerScore}`;

    counter ++;

if (humanScore > computerScore && humanScore === 5){
    alert(`YOU WON! ${humanScore} to ${computerScore}`)
    computerScore = 0;
    humanScore = 0;
}
else if (humanScore < computerScore && computerScore === 5){
    alert(`YOU LOST! ${humanScore} to ${computerScore}`)
    computerScore = 0;
    humanScore = 0;
}
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

