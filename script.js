console.log("Hello World");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    
    if (num <= 0.33) {
        console.log("Computer choice: rock");
        return "rock"
        
    } else if (num <=0.66) {
        console.log("Computer choice: paper");
        return "paper"
        
    } else {
        console.log("Computer choice: scissor");
        return "scissor"
        
    }
    
}

function getHumanChoice() {
        let userInput = prompt("Type One: Rock | Paper | Scissor");
        let str = userInput.toLowerCase();
        console.log("Human choice: " + str);
        return str;

}

getHumanChoice()
getComputerChoice()