let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

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
digits.forEach((digit) => digit.addEventListener("click", displayToScreen));

const display = document.querySelector("#display");

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  firstOperand = null;
  clearDisplay();
});

// function runs when an operator is pressed
// function clickOperator() {
//   if (firstOperand === null) {
//     firstOperand = Number(display.textContent);
//   } else if (secondOperand === null) {
//     secondOperand = Number(display.textContent);
//   } else {
//     // firstOperand = secondOperand;
//     secondOperand = Number(display.textContent);
//   }
//   if (this.textContent !== "=") currentOperator = this.textContent;
//   clearDisplay();
// }

function clickOperator() {
  firstOperand = Number(display.textContent);

  currentOperator = this.textContent;
  
  clearDisplay();
}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) =>
  operator.addEventListener("click", clickOperator)
);
// function to display result
function displayResult() {
  display.textContent = `${operate(firstOperand, Number(display.textContent), currentOperator)}`;
  firstOperand = Number(display.textContent);
}
const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", displayResult);
