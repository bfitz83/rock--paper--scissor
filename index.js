// import {badGuyTaunts} from ("data.js")
// import {badGuyLoosing} from ("data.js")


// const chooseEl = document.getElementById("choose-el")  ------ currently not used

// Animation elements (ids of sections in html) used in DOMContentLoaded event listener below

    const mainGame = document.getElementById("main-game")
    const houseAnimationImg = document.getElementById("house-animation-img")
    const storyElOne = document.getElementById("story-el-one")
    const storyElTwo = document.getElementById("story-el-two")


// Change the dom load to only controle the animation **********************************************

document.addEventListener("DOMContentLoaded", function(){
    winnerEl.innerText = `Let's Go!`
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
    makeComputersChoice()

})

// Const's and var's below are used in the game play below

    // HTML elements

        const winnerEl = document.getElementById("winner-el") // tells who won
        const buttonSection = document.getElementById("button-section")  // rock, paper, scissor img section div
        const playerProgressBar = document.getElementById("player-progress-bar") // health bar for player
        const vilanProgressBar = document.getElementById("vilan-progress-bar") // health bar for computer

    // Consts
        
        // This object of objects is used to compair and find winner

            const winOrLoseArray = {
                rock: {win: "scissors"},
                paper: {win: "rock"},
                scissors: {win: "paper"}
            }
        
        // This is the computers choices

            const choices = ["rock", "paper", "scissors"]

    // Variables

        let computerChoice = ""
        let playerChoice = ""

        let playerWins = 0
        let computerWins = 0
        let playerHealth = 100
        let computerHeatlth = 100


// Game Play

    // Makes random number for the computer's initial choice
       
        function makeRandomNumber(x){
            // This could be used for something else, but nothing else right now
            return Math.floor(Math.random() * x)
        }

        function makeComputersChoice(){
            computerChoice = choices[makeRandomNumber(3)]
        }

    // This finds which choice the player has made

        buttonSection.addEventListener("click", function(e){
            playerChoice = e.target.alt
            checkWinner()
        })
    
    // This compairs the player's and computer's choice with the winOrLoseArray above to find who won
        function checkWinner(){
        
            if (computerChoice == playerChoice){
                displayWinner("tie")
            } else if (computerChoice == winOrLoseArray[playerChoice].win){
                displayWinner("player wins")
                playerWins += 1
                computerHeatlth -= 20
                vilanProgressBar.value = computerHeatlth
                } else {
                displayWinner("computer wins")
                computerWins += 1
                playerHealth -= 20
                playerProgressBar.value = playerHealth
                // change class to show animation
            }
            gameOver()
        }

    // This changes the DOM to show winner

        function displayWinner(x){
            winnerEl.innerText = x
        }

    // This checks to see if the player or computer have won 5 times to end the game

        function gameOver(){
            if (playerWins == 5) {
                winnerEl.innerText = "Player defeted bad guy"
            } else if (computerWins == 5) {
                winnerEl.innerText = "Bad guy defeated player"
            } else {
                makeComputersChoice()
            }

            // add an ending animation ************************************************************
        }

// Now go through and make the winnerEl.innertext cycle through the bad guy speaches *******************************