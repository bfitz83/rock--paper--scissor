// import {badGuyTaunts} from ("data.js")
// import {badGuyLoosing} from ("data.js")

const rockEl = document.getElementById("rock-el")
const paperEl = document.getElementById("paper-el")
const scissorEl = document.getElementById("scissor-el")
const choiceEl = document.getElementById("choice-el")
const winnerEl = document.getElementById("winner-el")
const chooseEl = document.getElementById("choose-el")
const scoreEl = document.getElementById("score-el")

// Animation elements (ids of sections in html)

const mainGame = document.getElementById("main-game")
const houseAnimationImg = document.getElementById("house-animation-img")
const storyElOne = document.getElementById("story-el-one")
const storyElTwo = document.getElementById("story-el-two")
const playerProgressBar = document.getElementById("player-progress-bar")
const vilanProgressBar = document.getElementById("vilan-progress-bar")

let choiceArray = ["Rock", "Paper", "Scissors"]
let playerWins = 0
let computerWins = 0
let playerHealth = 100
let vilanHeatlth = 100




let computerChoice = ""
let playerChoice = ""

document.addEventListener("DOMContentLoaded", function(){
    startGame()
    chooseEl.innerText = `Player:  | Computer:`
    winnerEl.innerText = `Choose above`
    houseAnimationImg.style.display = "flex"
    
    setTimeout(function(){
        storyElOne.style.display = "flex"
        houseAnimationImg.style.display = "none"
    }, 4000)
    setTimeout(function(){
        storyElOne.style.display = "none"
        storyElTwo.style.display = "flex"
    }, 10000)
    setTimeout(function(){
        storyElTwo.style.display = "none"
        mainGame.style.display = "flex"
    }, 14000)


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

// Now go through and make the winnerEl.innertext cycle through the bad guy speaches *******************************

function checkWinner(){
    chooseEl.innerText = `Player: ${playerChoice} | Computer: ${computerChoice}`
    if (playerHealth != 0){
        if (playerChoice === computerChoice){
            
            winnerEl.innerText = "Tie"
        } else if(playerChoice === choiceArray[0] && computerChoice === choiceArray[2]) {
            
            winnerEl.innerText = "Player wins"
            playerWins += 1
            vilanHeatlth -= 25
            vilanProgressBar.value = vilanHeatlth
        } else if(playerChoice === choiceArray[1] && computerChoice === choiceArray[0]){
            
            winnerEl.innerText = "Player wins"
            playerWins += 1
            vilanHeatlth -= 25
            vilanProgressBar.value = vilanHeatlth
        } else if (playerChoice === choiceArray[2] && computerChoice === choiceArray[1]){
            
            winnerEl.innerText = "Player wins"
            playerWins += 1
            vilanHeatlth -= 25
            vilanProgressBar.value = vilanHeatlth
        } else {
            
            winnerEl.innerText = "Computer wins"
            computerWins += 1
            playerHealth -= 25
            playerProgressBar.value = playerHealth
        }
    } else {
        winnerEl.innerText = "you loose"
        // This needs to end game *************************************************************
    }
    setTimeout(function(){
        startGame()
        chooseEl.innerText = `Player:  | Computer:`
        winnerEl.innerText = `Choose above`
        
        scoreEl.innerText = `Player score: ${playerWins} Computer score: ${computerWins}`
    }, 1500)

}

// compair playerChoice and computerChoice
// figure out how to compair the choices






