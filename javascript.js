const add = (a, b) => a + b
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operation, a, b) {
    return operation(a, b);
};

function addToDisplay(num) {
    displayValue += num
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '';
    display.textContent = displayValue;
}

function selectOperand() {
    numbers.push(parseInt(displayValue));
    currentOperand = this;
    clearDisplay();
}

// change calculate to a loop to go through all stored values and operands when equals is pressed

function calculate() {
    numbers.push(parseInt(displayValue));
    displayValue = `${currentOperand(numbers[0], numbers[1])}`;
    numbers.splice(0, 2);
    display.textContent = displayValue;
    totalValue = 0;
}

const display = document.querySelector('#calc-display');
const clearBtn = document.querySelector('.clear')
const divideBtn = document.querySelector('.divide')
const multiplyBtn = document.querySelector('.multiply')
const subtractBtn = document.querySelector('.subtract')
const addBtn = document.querySelector('.add')
const equalsBtn = document.querySelector('.equals')
const digitBtns = Array.from(document.querySelectorAll('.digit'));

let totalValue = 0;
let displayValue = '';
let numbers = [];
let currentOperand = 0; // use an array to store the operands

for (let i = 0; i < digitBtns.length; i++) {
    array = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    digitBtns[i].addEventListener('click', () => addToDisplay(array[i]))
}

clearBtn.addEventListener('click', clearDisplay)
divideBtn.addEventListener('click', selectOperand.bind(divide))
multiplyBtn.addEventListener('click', selectOperand.bind(multiply))
subtractBtn.addEventListener('click', selectOperand.bind(subtract))
addBtn.addEventListener('click', selectOperand.bind(add))
equalsBtn.addEventListener('click', calculate)

