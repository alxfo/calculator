function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operation, a, b) {
    return operation(a, b);
};

function addToDisplay(num) {
    displayValue += num
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = ''
    display.textContent = displayValue;
}

const display = document.querySelector('#calc-display');
const clearBtn = document.querySelector('.clear')
const digitBtns = Array.from(document.querySelectorAll('.digit'));

let displayValue = ''

for (let i = 0; i < digitBtns.length; i++) {
    array = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    digitBtns[i].addEventListener('click', () => addToDisplay(array[i]))
}

clearBtn.addEventListener('click', clearDisplay)

