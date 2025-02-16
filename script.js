const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound('rock'));
paper.addEventListener("click", () => playRound('paper'));
scissors.addEventListener("click", () => playRound('scissors'));

let humanScore = 0;
let computerScore = 0;
function playRound(hSelection){
    
    let humanSelection = hSelection;
    let computerSelection = getRandomInt(3);

    switch (humanSelection){
        case "rock":
            humanSelection = 0;
            console.log("YOU: rock");
            break;
        case "paper":
            humanSelection = 1;
            console.log("YOU: paper");
            break;
        case "scissors":
            console.log("YOU: scissors");
            humanSelection = 2;
            break;
    };

    if (computerSelection === 0)
        console.log("Computer: rock");
    else if (computerSelection === 1)
        console.log("Computer: paper");
    else if (computerSelection === 2)
        console.log("Computer: scissors");

    if (humanSelection === computerSelection){
        console.log("pair!");
    }
    else if (humanSelection === 0 && computerSelection === 2
            || humanSelection === 1 && computerSelection === 0
            || humanSelection === 2 && computerSelection === 1){
        console.log("Win!");
        humanScore ++;
    }
    else {
        console.log("Lose!");
        computerScore ++;
    }

    console.log("Your Point: ", humanScore);
    console.log("Computer Point: ", computerScore);
}
// if (humanScore > computerScore)
//     alert(`YOU WON! ${humanScore} to ${computerScore}`)
// else if (humanScore < computerScore)
//     alert(`YOU LOST! ${humanScore} to ${computerScore}`)
// else alert(`PAIR! ${humanScore} to ${computerScore}`)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

