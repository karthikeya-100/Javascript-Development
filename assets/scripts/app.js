const defaultResult = 0
let currentResult = defaultResult
let logEntries = [];

// Gets input from the input field

function getUserNumberInput() {
    return parseInt(userInput.value)
}

function writeToLog(operation, prevResult, currentNumber, result) {

    return logEntries.push({
        operation: operation,
        prevResult: prevResult,
        number: currentNumber,
        result: result
    })
}

function writeCalcDescription(mathOperator, currentResult, enteredNumber) {
    return `${currentResult} ${mathOperator} ${enteredNumber}`
}

function calculateResult(calculationType) {

    const enteredNumber = getUserNumberInput()

    if (calculationType !== "ADD" && calculationType !== "SUB" && calculationType !== "MUL" && calculationType !== "DIV" || !enteredNumber) {
        return;
    }


    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === "ADD") {
        currentResult += enteredNumber
        mathOperator = '+'
    } else if (calculationType == "SUB") {
        currentResult -= enteredNumber
        mathOperator = '-'
    } else if (calculationType == "MUL") {
        currentResult = currentResult * enteredNumber
        mathOperator = '*'
    } else {
        currentResult = currentResult / enteredNumber
        mathOperator = '/'
    }
    outputResult(currentResult, writeCalcDescription(mathOperator, initialResult, enteredNumber))
    writeToLog(calculationType, initialResult, enteredNumber, currentResult)
    console.log(logEntries)
}

function add() {
    calculateResult("ADD")
}

function subtract() {
    calculateResult("SUB")
}


function multiply() {
    // const enteredNumber = getUserNumberInput()
    // const initialResult=currentResult
    // const calculationDescription = `${currentResult} * ${enteredNumber}` 
    // currentResult *= enteredNumber
    // outputResult(currentResult,calculationDescription)
    // writeToLog("MUL", initialResult, enteredNumber, currentResult)
    // console.log(logEntries)
    calculateResult("MUL")
}

function divide() {
    // const enteredNumber = getUserNumberInput()
    // const calculationDescription = `${currentResult} / ${enteredNumber}` 
    // const initialResult=currentResult
    // currentResult /= enteredNumber
    // outputResult(currentResult,calculationDescription)
    // writeToLog("DIV",initialResult,enteredNumber,currentResult)
    // console.log(logEntries)
    calculateResult("DIV")
}


addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", subtract)
multiplyBtn.addEventListener("click", multiply)
divideBtn.addEventListener("click", divide)
// let userName="max"

// function greetUser(name){
//     let userName=name  //This is called shadowing the variables(A local variable declared inside a function, That also exists in the global scope is called shadowed variable)
//     alert(userName)
// }
// userName="karthik"
// greetUser("ravi")

/*
2==2--->True
2=='2'-->True "==" double equal sign only checks if values are same
but
2===2 --->True
2==='2'-->False == triple equal sign checks value as well as datatype

{name:"max"}=={name:"max"} or {name:"max"}==={name:"max"} are not equal and same thing holds for arrays also(since arrays are also type of Objects)

If we assign a object to another variable. Then these two objects will be equal
AND operator==&&
OR operator==||


empty objects and arrays are considered as Truthy values
Null,Undefined,NAN are falsy values
0,empty strings are falsy values
*/