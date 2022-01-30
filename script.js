let firstOperand;
let secondOperand;
let currentOperator;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}
// function to display to the screen
function displayToScreen() {
    display.textContent += this.textContent;
}

// function to clear the screen 
function clearDisplay() {
    display.textContent = "";
}

const digits = document.querySelectorAll(".digit");
digits.forEach(digit => digit.addEventListener("click", displayToScreen));

const display = document.querySelector("#display");

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearDisplay);

// function runs when an operator is pressed
function clickOperator() {
    firstOperand = Number(display.textContent);
    currentOperator = this.textContent;
    clearDisplay();
}
// function to get second operand
function getSecondOperand() {
    secondOperand = Number(display.textContent);
}
const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener('click', clickOperator));