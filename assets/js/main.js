/* 
const computerChoice = document.getElementsByClassName('computerChoice')
const chooseIcon = document.getElementsByClassName('chooseBlock')
const button = document.querySelector('button')  
const userChoice = document.getElementsByClassName('userChoice')
const restart = document.getElementsByClassName('restart')
*/


// const roundChoice = document.querySelector('radio')
const resultDisplay = document.getElementById('resultDisplay')

const choices = ['rock', 'paper', 'scissors']
let round = 0
let userPoint = 0
let computerPoint = 0
let userChosen

let moin = 'Hallo!'

const check = (uChoice) => {

    let roundChoice = Number(document.querySelector('input[type=radio]:checked').value)
    console.log(roundChoice)

    if(round < roundChoice){
        console.log(round, 'of', roundChoice)

        let computerChoice = Math.floor(Math.random() * 3)
        console.log(computerChoice)

        let choice = `${choices[uChoice]} ${choices[computerChoice]}`

        console.log(choice)

        switch (choice) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                userPoint++
                break
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                computerPoint++
                //resultDisplay.innerHTML = "YOU LOSE!"
                break
            case 'paperpaper':
            case 'scissorsscissors':
            case 'rockrock':
                //resultDisplay.innerHTML = "ITS A DRAW!"
                break
    }
        round++

    if (round === roundChoice){
        check()
    }

    }else{
    console.log('The Game is Over')
    console.log('UserPoints', userPoint,' computerPoint', computerPoint)
    whosTheWinner(userPoint,computerPoint)
    }

    
}

const whosTheWinner = (user, pc) =>{
    
    if(user >= pc){
    console.log('You WIN')
    resultDisplay.innerHTML = "YOU WIN!"
}else if(user <= pc){
    console.log('You LOOSE')
    resultDisplay.innerHTML = "YOU LOSE!"
}else if(user === pc){
    console.log('Its a DRAW')
    resultDisplay.innerHTML = "IT'S A DRAW!"
}
}



let choiceRock = () => {
    userChosen = '0'
    check(userChosen)
}

let choiceScissors = () => {
    userChosen = '1'
    check(userChosen)
}

let choicePaper = () => {
    userChosen = '2'
    check(userChosen)
}

let restart = () =>{
    round = 0
    userPoint = 0
    kiPoint = 0
}

