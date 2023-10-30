function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(a,operator,b) {
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return 'Operator does not exist!';
    }
}

let firstNumber = 0;
let secondNumber = 0;
let operator = '';


const main = document.querySelector('.main');

// add screen
const screenContent = document.createElement('div');
screenContent.classList.add('screen');
screenContent.textContent = '12345678';
main.prepend(screenContent);


// add clear button separately
const clear = document.querySelector(".clear");
const clearButton = document.createElement('button');
clearButton.textContent = 'C';
clear.appendChild(clearButton);

// fill up calc with buttons
const buttons = document.querySelector('.buttons');
const allSymbols = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

for (let i = 0; i < allSymbols.length; i++) {
    let currentButton = document.createElement('button');
    currentButton.textContent = allSymbols[i];
    buttons.appendChild(currentButton);
}

const allButtons = document.querySelectorAll('button');
allButtons.forEach((button) => { 
    button.addEventListener('click', (e) => screenFillUp(e));
});


function screenFillUp(e) {
    
    firstNumber = parseInt(e.target.textContent);
    // secondNumber 
    screenContent.textContent = e.target.textContent;
    if (e.target.textContent == '=') {
        screenContent.textContent = operate(firstNumber, operator, secondNumber);
    }

}