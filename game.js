function getComputerChoice() {
    i = Math.random() * 10
    console.log(i)
    if (0 <= i && i < 10/3) {
        return 'rock'
    } 
    else if (10/3 <=  i && i < 20/3){
        return 'paper'
    }
    else {
        return 'scisors'
    }
}

function game_logic(playerSelection,computerSelection) {
    
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == 'scisors') {
            return 'You win! rock beats scisors'
        }
        else if (computerSelection == 'paper') {
            return 'You lose! paper beats rock'
        }
        else {
            return 'Draw'
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == 'scisors') {
            return 'You lose! scisors beat paper '
        }
        else if (computerSelection == 'paper') {
            return 'Draw'
        }
        else {
            return 'You win! paper beats rock'
        }
    }
    else if (playerSelection.toLowerCase() == "scisors"){
        if (computerSelection == 'rock') {
            return 'You lose! rock beats scisors'
        }
        else if (computerSelection == 'paper') {
            return 'You win! scisors beat paper'
        }
        else {
            return 'Draw'
        }
    }
    else {
        return 'select a correct option rock,paper or scisors'
    }
}

function game() {
    for (let i=0; i<5 ;i++){
        let player_choice = prompt('select an option rock,paper or scisors')
        let computer_choice = getComputerChoice()
        console.log('Your choice is : ' + player_choice.toLowerCase() + " and computer's choice is : " + computer_choice)
        console.log(game_logic(player_choice,computer_choice))
    }
}

game()


