
const resultDisplay = document.getElementById('resultDisplay')

const choices = ['rock', 'paper', 'scissors']
let round = 0
let userPoint = 0
let computerPoint = 0
let userChosen
let userOutput = document.getElementById('user')
let computerOutput = document.getElementById('computer')


const check = (uChoice) => {

    let roundChoice = Number(document.querySelector('input[type=radio]:checked').value)
    console.log(roundChoice)

    if(round < roundChoice){
        console.log(round, 'of', roundChoice)

        let computerChoice = Math.floor(Math.random() * 3)
        console.log(computerChoice)

        let choice = `${choices[uChoice]}${choices[computerChoice]}`

        console.log(choice)

        switch (choice) {
            case 'scissorspaper':
                resultDisplay.innerHTML = `SCISSORS beats PAPER`
            case 'rockscissors':
                resultDisplay.innerHTML = `ROCK beats SCISSORS`
            case 'paperrock':
                resultDisplay.innerHTML = `PAPER beats ROCK`
                userPoint++
                userOutput.innerHTML = userPoint
                computerOutput.innerHTML = computerPoint
                //console.log('userPoints', userPoint, 'computerPoints', computerPoint)
                break
            case 'paperscissors':
                resultDisplay.innerHTML = `PAPER looses against SCISSORS`
            case 'scissorsrock':
                resultDisplay.innerHTML = `SCISSORS looses against ROCK `
            case 'rockpaper':
                resultDisplay.innerHTML = `ROCK looses against PAPER`
                computerPoint++
                userOutput.innerHTML = userPoint
                computerOutput.innerHTML = computerPoint
                //console.log('userPoints', userPoint, 'computerPoints', computerPoint)
                break
            case 'paperpaper':
                resultDisplay.innerHTML = `❌DARN IT TRY AGAIN!❌`
            case 'scissorsscissors':
                resultDisplay.innerHTML = `❌DARN IT TRY AGAIN!❌`
            case 'rockrock':
                resultDisplay.innerHTML = `❌DARN IT TRY AGAIN!❌`
                userOutput.innerHTML = userPoint
                computerOutput.innerHTML = computerPoint
                //console.log('userPoints', userPoint, 'computerPoints', computerPoint)
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
    
    if(user > pc){
    console.log('YOU WIN')
    resultDisplay.innerHTML = "YOU WIN!"
}else if(user < pc){
    console.log('YOU LOOSE')
    resultDisplay.innerHTML = "YOU LOSE!"
}else if(user === pc){
    console.log('Its a DRAW')
    resultDisplay.innerHTML = "IT'S A DRAW"
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

