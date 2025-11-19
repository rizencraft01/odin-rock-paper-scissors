function getComputerChoice(choice = Math.floor(Math.random()) * 3) {

    if (choice === 0) {
        //console.log(choice)
        return console.log('Rock')
    }
    else if (choice === 1) {
        //console.log(choice)
        return console.log('Paper')
    }
    else if (choice === 2) {
        //console.log(choice)
        return console.log('Scissors')
    }
    else 
        console.log("Doesn't work")
}

getComputerChoice()