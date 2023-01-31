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

function decimalButton() {
    if (displayValue.includes('.') == false) {
        displayValue += '.'
        displayCurrent.textContent = displayValue;
    }
}

function removeFromDisplay() {
    displayValue = displayValue.slice(0, -1);
    displayCurrent.textContent = displayValue;
}

function resetCalculator() {
    operators = [];
    numbers = [];
    displayOperators = [];
    displayStored.textContent = '';
    clearDisplay();
}

function clearDisplay() {
    displayValue = '';
    displayCurrent.textContent = displayValue;
}

function addToStoredDisplay() {
    combined = []
    for (i = 0; i < numbers.length; i++) {
        combined.push(numbers[i])
        combined.push(displayOperators[i])
    }
    displayStored.textContent = combined.join(' ');
}

function addButton() {
    numbers.push(parseFloat(displayValue));
    operators.push(add);
    displayOperators.push('+');
    addToStoredDisplay();
    clearDisplay();
}

function divideButton() {
    numbers.push(parseFloat(displayValue));
    operators.push(divide);
    displayOperators.push('/');
    addToStoredDisplay();
    clearDisplay();
}

function multiplyButton() {
    numbers.push(parseFloat(displayValue));
    operators.push(multiply);
    displayOperators.push('x');
    addToStoredDisplay();
    clearDisplay();
}

function subtractButton() {
    numbers.push(parseFloat(displayValue));
    operators.push(subtract);
    displayOperators.push('-');
    addToStoredDisplay();
    clearDisplay();
}

function calculate() {
    numbers.push(parseFloat(displayValue));
    addToStoredDisplay();
    displayStored.textContent += ' =';
    while (operators.length) {
        displayValue = `${operators[0](numbers[0], numbers[1])}`;
        numbers.splice(0, 2);
        operators.splice(0,1);
        numbers.unshift(parseFloat(displayValue));
    }
    displayCurrent.textContent = displayValue;
    numbers = [];
    operators = [];
    displayOperators = [];
    calculated = true;
}

const displayCurrent = document.querySelector('#current-value');
const displayStored = document.querySelector('#stored-values');
const clearBtn = document.querySelector('.clear')
const backBtn = document.querySelector('.backspace')
const divideBtn = document.querySelector('.divide')
const multiplyBtn = document.querySelector('.multiply')
const subtractBtn = document.querySelector('.subtract')
const addBtn = document.querySelector('.add')
const decimalBtn = document.querySelector('.decimal')
const equalsBtn = document.querySelector('.equals')
const digitBtns = Array.from(document.querySelectorAll('.digit'));

let calculated = false;
let displayValue = '';
let numbers = [];
let operators = [];
let displayOperators = [];

for (let i = 0; i < digitBtns.length; i++) {
    array = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    digitBtns[i].addEventListener('click', () => addToDisplay(array[i]))
}

clearBtn.addEventListener('click', resetCalculator)
backBtn.addEventListener('click', removeFromDisplay)
divideBtn.addEventListener('click', divideButton)
multiplyBtn.addEventListener('click', multiplyButton)
subtractBtn.addEventListener('click', subtractButton)
addBtn.addEventListener('click', addButton)
decimalBtn.addEventListener('click', decimalButton)
equalsBtn.addEventListener('click', calculate)

