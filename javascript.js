function getComputerChoice(choice = Math.floor(Math.random() * 3)) {
    if (choice == 0) {
        let message = document.createElement('p')

        message.textContent = 'Computer Choice: Rock'

        results.appendChild(message)
        
        return 'Rock'
    }
    else if (choice == 1) {
        message = document.createElement('p')

        message.textContent = 'Computer Choice: Scissors'

        results.appendChild(message)

        return 'Scissors'
    }
    else if (choice == 2) {
        message = document.createElement('p')

        message.textContent = 'Computer Choice: Paper'

        results.appendChild(message)

        return 'Paper'
    }
}

function getHumanChoice(humanChoice = prompt('Choose rock, paper, or scissors:')) {

    humanChoice = humanChoice.toLowerCase()

    if (humanChoice == 'rock') {
        console.log('-----------------------------------------')
        console.log('Player Choice: Rock')
        return 'Rock'
    }
    else if (humanChoice == 'paper') {
        console.log('-----------------------------------------')
        console.log('Player Choice: Paper')
        return 'Paper'
    }
    else if (humanChoice == 'scissors') {
        console.log('-----------------------------------------')
        console.log('Player  Choice: Scissors')
        return 'Scissors'
    }
}

function playGame() {
    let humanScore = 0

    let computerScore = 0

    let message;

    let message2;

    let displayHumanScore;

    let displayComputerScore;

    const selectRockButton = document.querySelector('#rock-button')

    const selectScissorsButton = document.querySelector('#scissors-button')

    const selectPaperButton = document.querySelector('#paper-button')

    const results = document.querySelector("#results")
    
    selectRockButton.addEventListener('click', () => {
        if (humanScore == 5 || computerScore == 5) return false

        message = document.createElement('p')

        message.textContent = '-----------------------------------------'

        message2 = document.createElement('p')

        message2.textContent = 'Player Choice: Rock'

        results.appendChild(message)

        results.appendChild(message2)
        
        return playRound('Rock')
    })

    selectPaperButton.addEventListener('click', () => {
        if (humanScore == 5 || computerScore == 5) return false

        message = document.createElement('p')

        message.textContent = '-----------------------------------------'

        message2 = document.createElement('p')

        message2.textContent = 'Player Choice: Paper'

        results.appendChild(message)

        results.appendChild(message2)

        return playRound('Paper')
    })

    selectScissorsButton.addEventListener('click', () => {
        if (humanScore == 5 || computerScore == 5) return false

        message = document.createElement('p')

        message.textContent = '-----------------------------------------'

        message2 = document.createElement('p')

        message2.textContent = 'Player Choice: Scissors'

        results.appendChild(message)
        
        results.appendChild(message2)

        return playRound('Scissors')
    })

    function playRound(humanChoice, computerChoice = getComputerChoice()) {
        if (humanChoice == 'Rock' && computerChoice == 'Paper' || humanChoice == 'Paper' && computerChoice == 'Scissors' || humanChoice == 'Scissors' && computerChoice == 'Rock') {   
            computerScore++
            
            displayHumanScore = document.createElement('p')

            displayComputerScore = document.createElement('p')

            displayHumanScore.textContent = `Player Score: ${humanScore}`

            displayComputerScore.textContent = `Computer Score: ${computerScore}`
            
            message = document.createElement('p')

            humanChoice = humanChoice.toLowerCase()

            if (computerScore == 5) message.textContent = `The computer wins the game! ${computerChoice} beats ${humanChoice}!`
            else message.textContent =`The computer scores! ${computerChoice} beats ${humanChoice}!`

            message2 = document.createElement('p')

            message2.textContent = '-----------------------------------------'

            results.appendChild(message)

            results.appendChild(displayHumanScore)

            results.appendChild(displayComputerScore)

            results.appendChild(message2)

        }
        else if (humanChoice == 'Rock' && computerChoice == 'Scissors' || humanChoice == 'Paper' && computerChoice == 'Rock' || humanChoice == 'Scissors' && computerChoice == 'Paper') {
            humanScore++

            displayHumanScore = document.createElement('p')

            displayComputerScore = document.createElement('p')

            displayHumanScore.textContent = `Player Score: ${humanScore}`

            displayComputerScore.textContent = `Computer Score: ${computerScore}`
            
            message = document.createElement('p')

            computerChoice = computerChoice.toLowerCase()

            if (humanScore == 5) message.textContent = `The player wins the game! ${humanChoice} beats ${computerChoice}!`
            else message.textContent =`The player scores! ${humanChoice} beats ${computerChoice}!`

            message2 = document.createElement('p')

            message2.textContent = '-----------------------------------------'

            results.appendChild(message)

            results.appendChild(displayHumanScore)

            results.appendChild(displayComputerScore)

            results.appendChild(message2)

        }
        else if (humanChoice == computerChoice) {
            displayHumanScore = document.createElement('p')

            displayComputerScore = document.createElement('p')

            displayHumanScore.textContent = `Player Score: ${humanScore}`

            displayComputerScore.textContent = `Computer Score: ${computerScore}`

            message = document.createElement('p')

            message.textContent =`It's a tie!`

            message2 = document.createElement('p')

            message2.textContent = '-----------------------------------------'

            results.appendChild(message)

            results.appendChild(displayHumanScore)

            results.appendChild(displayComputerScore)

            results.appendChild(message2)
        }
    }
    
}

playGame()

