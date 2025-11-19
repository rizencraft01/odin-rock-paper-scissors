function getComputerChoice(choice = Math.floor(Math.random() * 3)) {
    if (choice == 0) {
        console.log('Computer: Rock')
        return 'Rock'
    }
    else if (choice == 1) {
        console.log('Computer: Scissors')
        return 'Scissors'
    }
    else if (choice == 2) {
        console.log('Computer: Paper')
        return 'Paper'
    }
}

function getHumanChoice(humanChoice = prompt('Choose rock, paper, or scissors:')) {

    humanChoice = humanChoice.toLowerCase()

    if (humanChoice == 'rock') {
        console.log('-----------------------------------------')
        console.log('Player: Rock')
        return 'Rock'
    }
    else if (humanChoice == 'paper') {
        console.log('-----------------------------------------')
        console.log('Player: Paper')
        return 'Paper'
    }
    else if (humanChoice == 'scissors') {
        console.log('-----------------------------------------')
        console.log('Player: Scissors')
        return 'Scissors'
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    while (humanScore < 5 && computerScore < 5) {
        function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
            if (humanScore < 5 && computerScore < 5) {
                if (humanChoice == 'Rock' && computerChoice == 'Paper' || humanChoice == 'Paper' && computerChoice == 'Scissors' || humanChoice == 'Scissors' && computerChoice == 'Rock') {
                    console.log(`The computer scores! ${computerChoice} beats ${humanChoice}!`)
                    console.log('-----------------------------------------')
                    computerScore++
                }
                else if (humanChoice == 'Rock' && computerChoice == 'Scissors' || humanChoice == 'Paper' && computerChoice == 'Rock' || humanChoice == 'Scissors' && computerChoice == 'Paper') {
                    console.log(`The player scores! ${humanChoice} beats ${computerChoice}!`)
                    console.log('-----------------------------------------')
                    humanScore++
                }
                else if (humanChoice == computerChoice) {
                    console.log(`It's a tie!`)
                    console.log('-----------------------------------------')
                }
            }
            if (computerScore == 5) {
                console.log('-----------------------------------------')
                console.log(`The computer wins the game! ${computerChoice} beats ${humanChoice}!`)
                console.log('-----------------------------------------')
            }
            else if (humanScore == 5) {
                console.log('-----------------------------------------')
                console.log(`The player wins the game! ${humanChoice} beats ${computerChoice}!`)
                console.log('-----------------------------------------')
            }
        }

        playRound()

    }
}

playGame()
