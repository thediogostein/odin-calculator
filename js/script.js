let a = "";
let b = "";
let operator = "";
let divisionByZero = false;
let decimalA = false;
let decimalB = false;

const btnNumbers = document.querySelectorAll(".btn-number");
const btnOperators = document.querySelectorAll(".btn-operator");
const btnEquals = document.querySelector("#btn-equals");
const btnAllClear = document.querySelector("#btn-all-clear");
const btnDecimal = document.querySelector("#btn-decimal");
const btnBackspace = document.querySelector("#btn-backspace");
let outResult = document.querySelector("#out-result");

btnNumbers.forEach((btnNumber) => {
  btnNumber.addEventListener("click", () => {
    if (divisionByZero === false) {
      if (operator === "") {
        a += btnNumber.innerText;
        updateDisplay();
      } else {
        b += btnNumber.innerText;
        updateDisplay();
      }
    }
  });
});

btnOperators.forEach((btnOperator) => {
  btnOperator.addEventListener("click", () => {
    if (divisionByZero === false) {
      if (a !== "" && b !== "" && operator !== "") {
        const total = calculate(a, b, operator);
        outResult.innerText = total;
        a = total;
        b = "";
        decimalB = false;
      }
      if (a !== "") {
        operator = btnOperator.value;
        updateDisplay();
      }
    }
  });
});

btnEquals.addEventListener("click", () => {
  if (a !== "" && b !== "" && operator !== "") {
    const total = calculate(a, b, operator);
    outResult.innerText = total;
    a = total;
    b = "";
    decimalB = false;
  }
});

btnAllClear.addEventListener("click", () => {
  allClear();
});

btnDecimal.addEventListener("click", () => {
  if (operator === "" && decimalA === false && divisionByZero === false) {
    a += btnDecimal.innerText;
    decimalA = true;
    updateDisplay();
  }
  if (operator !== "" && decimalB === false && divisionByZero === false) {
    b += btnDecimal.innerText;
    decimalB = true;
    updateDisplay();
  }
});

// update display
function updateDisplay() {
  outResult.innerText = `${a} ${operator} ${b}`;
}

// ac
function allClear() {
  a = "";
  b = "";
  decimalA = false;
  decimalB = false;
  operator = "";
  outResult.innerText = "";
  divisionByZero = false;
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
  return (a + b) % 1 !== 0 ? (a + b).toFixed(2) : a + b;
}

// subtract
function subtract(a, b) {
  return (a - b) % 1 !== 0 ? (a - b).toFixed(2) : a - b;
}

// multiply
function multiply(a, b) {
  return (a * b) % 1 !== 0 ? (a * b).toFixed(2) : a * b;
}

// divide
function divide(a, b) {
  if (b === 0) {
    divisionByZero = true;
    return "Can't divide by 0";
  } else {
    return (a / b) % 1 !== 0 ? (a / b).toFixed(4) : a / b;
  }
}
