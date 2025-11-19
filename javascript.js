function getComputerChoice(choice = Math.floor(Math.random()) * 3) {

    if (choice === 0) {
        return console.log('Rock')
    }
    else if (choice === 1) {
        return console.log('Scissors')
    }
    else if (choice === 2) {
        return console.log('Paper')
    }
    else {
        console.log("Doesn't work")
    } 
}

function getHumanChoice(humanChoice = prompt('Choose rock, paper, or scissors:')) {
    if (humanChoice == 'rock'  && 
        humanChoice == humanChoice.toLowerCase() ||
        humanChoice ==  humanChoice.toUpperCase()) {
        return console.log('Rock')
    }
   else if (humanChoice == 'paper'  && 
        humanChoice == humanChoice.toLowerCase() || 
        humanChoice == humanChoice.toUpperCase()) {
        return console.log('Paper')
    }
    else if (humanChoice == 'scissors'  && 
        humanChoice == humanChoice.toLowercase() ||
        humanChoice == humanChoice.toUpperCase()) {
        return console.log('Scissors')
    }
    else {
        console.log("Doesn't work")
    }
}

function playGame() {

    let humanScore = 0

    let computerScore = 0

     playRound()
 
    function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
        while(true) {
            if (humanChoice == 'Rock' && computerChoice == 1) {
                console.log(`The computer loses! ${humanChoice} beaats ${computerChoice}`)
                humanScore++
            }
            else {
                console.log(`The player loses! ${humanChoice} beats ${computerChoice}`)
                computerScore++;
            }
            if (humanChoice == 'Paper' && computerChoice == 0) {
                console.log(`The computer loses! ${humanChoice} beaats ${computerChoice}`)
                humanScore++
            }
            else {
                console.log(`The player loses! ${humanChoice} beats ${computerChoice}`)
                computerScore++;
            }
            if (humanChoice == 'Scissors' && computerChoice == 2) {
                console.log(`The computer loses! ${humanChoice} beaats ${computerChoice}`)
                humanScore++
            }
            else {
                console.log(`The player loses! ${humanChoice} beats ${computerChoice}`)
                computerScore++;
            }
            if (humanScore > 5) {
                console.log('THe player wins!')
                break
            }
            else if (computerScore > 5) {
                console.log('The computer wins!')
            }
            continue
        }
    }
}

playGame()