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

function addButton() {
    numbers.push(parseInt(displayValue));
    operators.push(add);
    clearDisplay();
}

function divideButton() {
    numbers.push(parseInt(displayValue));
    operators.push(divide);
    clearDisplay();
}

function multiplyButton() {
    numbers.push(parseInt(displayValue));
    operators.push(multiply);
    clearDisplay();
}

function subtractButton() {
    numbers.push(parseInt(displayValue));
    operators.push(subtract);
    clearDisplay();
}

// function selectOperator() {
//     numbers.push(parseInt(displayValue));
//     currentOperator = this;
//     clearDisplay();
// }

// change calculate to a loop to go through all stored values and operands when equals is pressed

function calculate() {
    numbers.push(parseInt(displayValue));
    displayValue = `${operators[0](numbers[0], numbers[1])}`;
    numbers.splice(0, 2);
    operators.splice(0,1);
    display.textContent = displayValue;
}

const display = document.querySelector('#calc-display');
const clearBtn = document.querySelector('.clear')
const divideBtn = document.querySelector('.divide')
const multiplyBtn = document.querySelector('.multiply')
const subtractBtn = document.querySelector('.subtract')
const addBtn = document.querySelector('.add')
const equalsBtn = document.querySelector('.equals')
const digitBtns = Array.from(document.querySelectorAll('.digit'));

let displayValue = '';
let numbers = [];
let operators = [];

for (let i = 0; i < digitBtns.length; i++) {
    array = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    digitBtns[i].addEventListener('click', () => addToDisplay(array[i]))
}

clearBtn.addEventListener('click', clearDisplay)
divideBtn.addEventListener('click', divideButton)
multiplyBtn.addEventListener('click', multiplyButton)
subtractBtn.addEventListener('click', subtractButton)
addBtn.addEventListener('click', addButton)
equalsBtn.addEventListener('click', calculate)

