let currentOperator = null;
let currentOperand = null;
let prevOperand = null;
function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
//function to clear the displays
function clearAll() {
  currentDisplay.textContent = "";
  prevDisplay.textContent = "";
  currentOperand = null;
  prevOperand = null;
  currentOperator = null;
}
//function to display numbers
function updateDisplay() {
  if(this.textContent === '.' && currentDisplay.textContent.includes('.')) {
    return;
  }
  currentDisplay.textContent += this.textContent.toString();
}
//function to run when any operator is clicked
function clickOperator() {
  prevOperand = parseFloat(prevDisplay.textContent);
  currentOperand = parseFloat(currentDisplay.textContent);
  if (prevDisplay.textContent !== "") {
    prevDisplay.textContent = operate(
      prevOperand,
      currentOperand,
      currentOperator
    ).toString();
  } else {
    prevDisplay.textContent = currentDisplay.textContent;
  }
  currentOperator = this.textContent;
  currentDisplay.textContent = "";
}

const currentDisplay = document.querySelector("#currentDisplay");
const prevDisplay = document.querySelector("#prevDisplay");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector('.equal');
const decimalBtn = document.querySelector('#decimal');

clearBtn.addEventListener("click", clearAll);
digits.forEach((digit) => digit.addEventListener("click", updateDisplay));
operators.forEach((operator) =>
  operator.addEventListener("click", clickOperator)
);
equalBtn.addEventListener('click', () => {
  if(prevDisplay.textContent !== '' && currentDisplay.textContent !== '' && currentOperator!== null ) {
    prevOperand = parseFloat(prevDisplay.textContent);
    currentOperand = parseFloat(currentDisplay.textContent);
    prevDisplay.textContent = "";
    currentDisplay.textContent = operate(prevOperand, currentOperand, currentOperator);
  }
});
decimalBtn.addEventListener('click', updateDisplay);
