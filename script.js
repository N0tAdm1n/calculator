let currentOperand = null;
let prevOperand = null;
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
  display.textContent += this.textContent.toString(); 
}


const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => digit.addEventListener("click", displayToScreen));

const display = document.querySelector("#display");

const clear = document.querySelector("#clear");
// function to clear the screen
function clearDisplay() {
  display.textContent = "";
}

clear.addEventListener("click", () => {
  currentOperand = null;
  currentOperator = null;
  clearDisplay();
});

// function runs when an operator is pressed
function clickOperator() {
  currentOperator = this.textContent;
  currentOperand = Number(display.textContent);

  clearDisplay();

}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => operator.addEventListener("click", clickOperator));
// function to display result
function displayResult() {
  display.textContent = `${operate(
    currentOperand,
    Number(display.textContent),
    currentOperator
  )}`;
  currentOperand = Number(display.textContent);
}

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", displayResult);
