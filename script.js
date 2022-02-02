let currentOperator = null;
let currentOperand = null;
let prevOperand = null;
function operate(a, b, operator) {
  let result = "ERROR";
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result =  a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result =  a / b;
      break;
  }
  if(result === Infinity || result === -Infinity || isNaN(result)) return "ERROR";
  return Number(result.toFixed(3));
}
//function to clear the displays
function clearAll() {
  currentDisplay.textContent = "";
  prevDisplay.textContent = "";
  operDisplay.textContent = "";
  currentOperand = null;
  prevOperand = null;
  currentOperator = null;
}

//function for backspace
function clearOne() {
  currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
}

//function to display numbers
function updateDisplay() {
  // can't enter more than 1 decimal
  if (this.textContent === "." && currentDisplay.textContent.includes(".")) {
    return;
  }
  currentDisplay.textContent += this.textContent.toString();
}

//function to run when any operator is clicked
function clickOperator() {
  // don't accept an operaot if both displays are empty
  if(prevDisplay.textContent === "" && currentDisplay.textContent === "") return;
  prevOperand = parseFloat(prevDisplay.textContent);
  currentOperand = parseFloat(currentDisplay.textContent);
  if (currentDisplay.textContent === "") {
    operDisplay.textContent = this.textContent;
    currentOperator = this.textContent;
    console.log(currentOperator);
    return;
  }
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
    operDisplay.textContent = this.textContent;
  currentDisplay.textContent = "";
}

const currentDisplay = document.querySelector("#currentDisplay");
const prevDisplay = document.querySelector("#prevDisplay");
const operDisplay = document.querySelector("#operDisplay");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector(".equal");
const decimalBtn = document.querySelector("#decimal");
const deleteBtn = document.querySelector("#delete");

clearBtn.addEventListener("click", clearAll);
digits.forEach((digit) => digit.addEventListener("click", updateDisplay));
operators.forEach((operator) =>
  operator.addEventListener("click", clickOperator)
);
equalBtn.addEventListener("click", () => {
  if (
    prevDisplay.textContent !== "" &&
    currentDisplay.textContent !== "" &&
    currentOperator !== null
  ) {
    prevOperand = parseFloat(prevDisplay.textContent);
    currentOperand = parseFloat(currentDisplay.textContent);
    prevDisplay.textContent = "";
    operDisplay.textContent = "";
    currentDisplay.textContent = operate(
      prevOperand,
      currentOperand,
      currentOperator
    );
  }
});
decimalBtn.addEventListener("click", updateDisplay);
deleteBtn.addEventListener("click", clearOne);
