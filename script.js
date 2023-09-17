let display = document.getElementById('display');
let currentInput = '';
let result = 0;

function appendToDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    result = 0;
    display.textContent = '0';
}

function calculateResult() {
    try {
        result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}
