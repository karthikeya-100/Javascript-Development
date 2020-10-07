const startGameBtn = document.getElementById("start-game-btn") // getElementById() is also a method
const playerChoiceDiv = document.getElementById("PlayerChoice")
const computerChoiceDiv = document.getElementById("computerChoice")
const winnerDiv=document.getElementById("winner")

// // Normal function declaration

// function greet(name) {
//     function bar() {
//         alert(3)
//     }
//     return bar()

//     function bar() {
//         alert(8)
//     }
// }

// greet("karthike") // in function declaration, function name is available in the scope where it was defined

// //Hoisting--> whole function declaration is hoisted at the top of code by javascript


// // unnamed function expression(Anonymous function)

// let fn2 = function (name) {
//     alert(name)
//     console.log(fn2.arguments)
// }

// fn2("karthikeya")
// console.log(fn2.name)


// let fn3 = function anotherFunc() {
//     alert("function3")
//     console.log(anotherFunc.arguments)
// }
// fn3()
// console.log(fn3.name)
// console.log(anotherFunc)

// Function declarations are hoisted to the top and initialized, so that we can call a function before initialization
// But function expressions are hoisted but not initialized

// We can use anonymous functions in a scenario where we have a function but we need to run that function only once in our whole script(say when a button is clicked)


const ROCK_SELECTION = 'ROCK'
const SCISSOR_SELECTION = 'SCISSOR'
const PAPER_SELECTION = 'PAPER'
const DEFAULT_USER_CHOICE = ROCK_SELECTION
let gameIsRunning = false;
const GAME_DRAW = "DRAW"
const PLAYER_WIN = "PLAYER_WIN"
const COMPUTER_WIN = "COMPUTER_WIN"


function decideWinner(cChoice, pChoice = DEFAULT_USER_CHOICE) {
    if (cChoice === pChoice) {
        return GAME_DRAW
    } else if ((cChoice === SCISSOR_SELECTION && pChoice === ROCK_SELECTION) || (cChoice === ROCK_SELECTION && pChoice === PAPER_SELECTION) || (cChoice === PAPER_SELECTION && pChoice === SCISSOR_SELECTION)) {
        return PLAYER_WIN
    } else {
        return COMPUTER_WIN
    }
}


function GenerateRandomInt(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min))
}
const getUserSelection = function () {
    const selection = prompt("Rock, Scissor or Paper?", '').toUpperCase()
    if (selection !== ROCK_SELECTION && selection !== SCISSOR_SELECTION && selection !== PAPER_SELECTION) {
        alert("Chosen Invalid selection")
        return;
    }
    return selection;
}

const getComputerSelection = function () {
    const choiceArray = [ROCK_SELECTION, PAPER_SELECTION, SCISSOR_SELECTION]
    const cSelection = choiceArray[GenerateRandomInt(0, 2)]
    return cSelection
}
startGameBtn.addEventListener("click", function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting....")
    let userSelection = getUserSelection()
    let computerSelection = getComputerSelection()
    console.log(`User selected ${userSelection}`)
    console.log(`Computer selected ${computerSelection}`)
    const winner = decideWinner(computerSelection, userSelection)
    let message = `You picked ${userSelection || DEFAULT_USER_CHOICE} and Computer Picked ${computerSelection} therefore you have `
    if (winner === GAME_DRAW) {
        message += 'draw'
    } else if (winner === PLAYER_WIN) {
        message += 'Won'
    } else {
        message += 'lost'
    }
    alert(message)
    displayResults(userSelection,computerSelection,winner)
    gameIsRunning = false
})

const displayResults = (userChoice, computerChoice, winnerOfThePlay) => {
    if(gameIsRunning){
        playerChoiceDiv.style.display = "block"
        playerChoiceDiv.innerHTML = `You Choose ${userChoice || DEFAULT_USER_CHOICE}`
        computerChoiceDiv.style.display = "block"
        computerChoiceDiv.innerHTML = `Computer Choose ${computerChoice}`;
        winnerDiv.style.display = "block"
        winnerDiv.innerHTML = `Winner of this game is ${winnerOfThePlay}`;
    }
}
// If we pass undefined to default value in a function , it will accept
// But it will keep the other falsy values



const sumUp = (age, ...numbers) => {
    console.log(age, numbers)
    let sum = 0;
    for (const i of numbers) {
        sum += i
    }
    return sum;
}

console.log(sumUp(12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


// Spread operator(...) used to retrieve the values from an object or array and pulls to another variable
// REST operator(...) takes all the remaining values into an array-- It always have to be last argument in the parameter list