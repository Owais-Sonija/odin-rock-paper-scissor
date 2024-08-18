let humanScore = 0;
let computerScore = 0;
let numOfGames = 0;

function getComputerChoice() {
  let num = Math.random();

  if (num <= 0.33) {
    console.log("Computer choice: rock");
    return "rock";
  } else if (num <= 0.66) {
    console.log("Computer choice: paper");
    return "paper";
  } else {
    console.log("Computer choice: scissor");
    return "scissor";
  }
}

function getHumanChoice() {
  let userInput = prompt("Type One: Rock | Paper | Scissor");
  let str = userInput.toLowerCase();
  console.log("Human choice: " + str);
  return str;
}

function playRound(humanChoice, computerChoice) {
  // your code here!
    numOfGames++;

  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

  } else if (humanChoice == "paper" && computerChoice == "scissor") {
    console.log("You lose! Scissor beats Paper");
    computerScore++;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

} else if (humanChoice == "scissor" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissor");
    computerScore++;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);


} else if (humanChoice == computerChoice) {
    console.log("Match draw! Both selected the same");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You Won! Paper beats Rock");
    humanScore++;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

  } else if (humanChoice == "rock" && computerChoice == "scissor") {
    console.log("You Won! Rock beats Scissor");
    humanScore++;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

  }else if (humanChoice == "scissor" && computerChoice == "paper") {
    console.log("You Won! Scissor beats Paper");
    humanScore++;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

  }


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
