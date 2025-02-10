alert("Welcome to my Rock Scissor Paper\nIt's five rounds\nLet's go!")
playGame();

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    function playRound(){
        let humanSelection = prompt("rock, paper or scissor?");
        let computerSelection = getRandomInt(3);

        switch (humanSelection.toLowerCase()){
            case "rock":
                humanSelection = 0;
                console.log("YOU: rock");
                break;
            case "paper":
                humanSelection = 1;
                console.log("YOU: paper");
                break;
            case "scissor":
                console.log("YOU: scissor");
                humanSelection = 2;
                break;
        };

        if (computerSelection === 0)
            console.log("Computer: rock");
        else if (computerSelection === 1)
            console.log("Computer: paper");
        else if (computerSelection === 2)
            console.log("Computer: scissor");

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
if (humanScore > computerScore)
    alert(`YOU WON! ${humanScore} to ${computerScore}`)
else if (humanScore < computerScore)
    alert(`YOU LOST! ${humanScore} to ${computerScore}`)
else alert(`PAIR! ${humanScore} to ${computerScore}`)
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
