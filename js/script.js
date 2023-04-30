let a = "";
let b = "";
let operator = "";

const btnNumbers = document.querySelectorAll(".btn-number");
const btnOperators = document.querySelectorAll(".btn-operator");
const btnEquals = document.querySelector("#btn-equals");
const btnAllClear = document.querySelector("#btn-all-clear");
let outResult = document.querySelector("#out-result");

btnNumbers.forEach((btnNumber) => {
  btnNumber.addEventListener("click", () => {
    if (operator === "") {
      a += btnNumber.innerText;
      updateDisplay();
    } else {
      b += btnNumber.innerText;
      updateDisplay();
    }
  });
});

btnOperators.forEach((btnOperator) => {
  btnOperator.addEventListener("click", () => {
    if (a !== "") {
      operator = btnOperator.value;
      updateDisplay();
    }
  });
});

btnEquals.addEventListener("click", () => {
  if (a !== "" && b !== "" && operator !== "") {
    const total = calculate(a, b, operator);
    outResult.innerText = total;
    a = total;
    b = "";
  }
});

btnAllClear.addEventListener("click", () => {
  allClear();
});

// update display
function updateDisplay() {
  outResult.innerText = `${a} ${operator} ${b}`;
}

// ac
function allClear() {
  a = "";
  b = "";
  operator = "";
  outResult.innerText = "";
}

// calculate
function calculate(a, b, operator) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}

// add
function add(a, b) {
  return a + b;
}

// subtract
function subtract(a, b) {
  return a - b;
}

// multiply
function multiply(a, b) {
  return a * b;
}

// divide
function divide(a, b) {
  return a / b;
}
