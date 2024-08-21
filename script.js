let humanScore = 0;
let computerScore = 0;
let numOfGames = 0;
const humanScoreEle = document.querySelector(".human_score");
const computerScoreEle = document.querySelector(".computer_score");
const humanChoiceEle = document.querySelectorAll(".image_box");
const choicesEle = document.querySelector(".choices");

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

let computerSelection;
let humanSelection;

humanChoiceEle.forEach((ele, idx)=> ele.addEventListener("click", ()=>{
  humanSelection = getHumanChoice(idx);
  computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
  
  
}))




function getHumanChoice(idx) {
  let humanChoice;
  if (idx == 0) {
    console.log("paper");
    humanChoice = "paper"
  }
  
   else if (idx == 1) {
    console.log("rock");    
    humanChoice = "rock"
  } else if (idx == 2) {
    console.log("scissor");
    humanChoice = "scissor"
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  // your code here!
numOfGames++;    
console.log(humanChoice);
choicesEle.textContent = "Human Choice: "+ humanChoice + " | " + "Computer Choice:  "+ computerChoice 

  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
    computerScoreEle.textContent = "Computer Score: " + computerScore;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

  } else if (humanChoice == "paper" && computerChoice == "scissor") {
    console.log("You lose! Scissor beats Paper");
    computerScore++;
    computerScoreEle.textContent = "Computer Score: " + computerScore;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

} else if (humanChoice == "scissor" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissor");
    computerScore++;
    computerScoreEle.textContent = "Computer Score: " + computerScore;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);


} else if (humanChoice == computerChoice) {
    console.log("Match draw! Both selected the same");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You Won! Paper beats Rock");
    humanScore++;
    humanScoreEle.textContent = "Human Score: " + humanScore;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

  } else if (humanChoice == "rock" && computerChoice == "scissor") {
    console.log("You Won! Rock beats Scissor");
    humanScore++;
    humanScoreEle.textContent = "Human Score: " + humanScore;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

  }else if (humanChoice == "scissor" && computerChoice == "paper") {
    console.log("You Won! Scissor beats Paper");
    humanScore++;
    humanScoreEle.textContent = "Human Score: " + humanScore;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

  }
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore) {
      choicesEle.textContent = "The winner of this game is Human";
      choicesEle.classList.add("winner");
    } else {
      choicesEle.textContent = "The winner of this game is Computer";
      choicesEle.classList.add("loser");
      
    }
    humanChoiceEle.forEach((ele)=> ele.classList.add("disappear"))
  }

}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// for (let i = 0; i < 5; i++) {
    
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
    
//     playRound(humanSelection, computerSelection);
    
// }

    