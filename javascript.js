const add = (a, b) => a + b
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operation, a, b) {
    return operation(a, b);
};

function addToDisplay(num) {
    if (calculated) {
        clearDisplay()
        calculated = false
    }
    displayValue += num
    displayCurrent.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '';
    displayCurrent.textContent = displayValue;
}

function addButton() {
    numbers.push(parseInt(displayValue));
    operators.push(add);
    displayStored.textContent = numbers.join(''); // this needs to zip numbers and operators together with .map
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
    while (operators.length) {
        displayValue = `${operators[0](numbers[0], numbers[1])}`;
        numbers.splice(0, 2);
        operators.splice(0,1);
        numbers.unshift(parseInt(displayValue));
    }
    displayCurrent.textContent = displayValue;
    numbers = [];
    operators = [];
    calculated = true;
}

const displayCurrent = document.querySelector('#current-value');
const displayStored = document.querySelector('#stored-values');
const clearBtn = document.querySelector('.clear')
const divideBtn = document.querySelector('.divide')
const multiplyBtn = document.querySelector('.multiply')
const subtractBtn = document.querySelector('.subtract')
const addBtn = document.querySelector('.add')
const equalsBtn = document.querySelector('.equals')
const digitBtns = Array.from(document.querySelectorAll('.digit'));

let calculated = false;
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

