const rockEl = document.getElementById("rock-el")
const paperEl = document.getElementById("paper-el")
const scissorEl = document.getElementById("scissor-el")
const choiceEl = document.getElementById("choice-el")
const winnerEl = document.getElementById("winner-el")
const chooseEl = document.getElementById("choose-el")
const scoreEl = document.getElementById("score-el")

let choiceArray = ["Rock", "Paper", "Scissors"]
let playerWins = 0
let computerWins = 0



let computerChoice = ""
let playerChoice = ""

document.addEventListener("DOMContentLoaded", function(){
    startGame()
    chooseEl.innerText = `Player:  | Computer:`
    winnerEl.innerText = `Choose above`
})

function startGame(){
    computerChoice = choiceArray[makeRandomNumber(3)]
    
}

function makeRandomNumber(x){
    return Math.floor(Math.random() * x)
}

rockEl.addEventListener("click", function(){
    playerChoice = "Rock"
    checkWinner()
})

paperEl.addEventListener("click", function(){
    playerChoice = "Paper"
    checkWinner()
})

scissorEl.addEventListener("click", function(){
    playerChoice = "Scissors"
    checkWinner()
})



function checkWinner(){
    chooseEl.innerText = `Player: ${playerChoice} | Computer: ${computerChoice}`
    if (playerChoice === computerChoice){
        
        winnerEl.innerText = "Tie"
    } else if(playerChoice === choiceArray[0] && computerChoice === choiceArray[2]) {
        
        winnerEl.innerText = "Player wins"
        playerWins += 1
    } else if(playerChoice === choiceArray[1] && computerChoice === choiceArray[0]){
        
        winnerEl.innerText = "Player wins"
        playerWins += 1
    } else if (playerChoice === choiceArray[2] && computerChoice === choiceArray[1]){
        
        winnerEl.innerText = "Player wins"
        playerWins += 1
    } else {
        
        winnerEl.innerText = "Computer wins"
        computerWins += 1
    }
    setTimeout(function(){
        startGame()
        chooseEl.innerText = `Player:  | Computer:`
        winnerEl.innerText = `Choose above`
        
        scoreEl.innerText = `Player score: ${playerWins} Computer score: ${computerWins}`
    }, 3000)

}

// compair playerChoice and computerChoice
// figure out how to compair the choices






