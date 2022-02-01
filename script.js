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

function clearAll() {
  currentDisplay.textContent = '';
  prevDisplay.textContent = '';
}

const currentDisplay = document.querySelector('#currentDisplay');
const prevDisplay = document.querySelector('#prevDisplay');
const digits  = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', clearAll);

