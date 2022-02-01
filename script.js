let currentOperator = null;

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
  currentDisplay.textContent = '';
  prevDisplay.textContent = '';
}
//function to display numbers
function updateDisplay() {
  currentDisplay.textContent += this.textContent.toString();
}
//function to run when any operator is clicked
function clickOperator() {
  currentOperator = this.textContent;
  prevDisplay.textContent = currentDisplay.textContent;
  currentDisplay.textContent = '';
}

const currentDisplay = document.querySelector('#currentDisplay');
const prevDisplay = document.querySelector('#prevDisplay');
const digits  = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', clearAll);
digits.forEach(digit => digit.addEventListener('click', updateDisplay));
operators.forEach(operator => operator.addEventListener('click', clickOperator));