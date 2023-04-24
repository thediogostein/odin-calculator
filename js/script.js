// -- GLOBAL VARIABLES

// -- Elements
const outPrevious = document.querySelector("#out-previous");
const outCurrent = document.querySelector("#out-current");
const btnAc = document.querySelector("#btn-ac");
const btnBackspace = document.querySelector("#btn-backspace");
const btnAdd = document.querySelector("#btn-add");
const btnSub = document.querySelector("#btn-subtract");
const btnMul = document.querySelector("#btn-multiply");
const btnDiv = document.querySelector("#btn-divide");
const btnEquals = document.querySelector("#btn-equals");

const btn = document.querySelectorAll(".btn-number");

// -- BUTTONS -- event listeners

// -- 0-9
btn.forEach((item) => {
  item.addEventListener("click", (event) => {
    // outCurrent.innerText += +event.target.innerText;
    let num = event.target.innerText;
    outCurrent.innerText += num;
  });
});

// -- AC
btnAc.addEventListener("click", () => {
  outCurrent.innerText = "";
});

// -- Backspace
btnBackspace.addEventListener("click", () => {
  console.log("backspace");
});

// -- Add
btnAdd.addEventListener("click", () => {
  console.log("add");
});

// -- Subtract
btnSub.addEventListener("click", () => {
  console.log("subtract");
});

// -- Multiply
btnMul.addEventListener("click", () => {
  console.log("multiply");
});

// -- Divide
btnDiv.addEventListener("click", () => {
  console.log("divide");
});

// -- Equals
btnEquals.addEventListener("click", () => {
  console.log("equals");
});

function add(num1, num2) {
  console.log(num1 + num2);
}

function subtract(num1, num2) {
  console.log(num1 - num2);
}

function multiply(num1, num2) {
  console.log(num1 * num2);
}

function divide(num1, num2) {
  console.log(num1 / num2);
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "x":
      multiply(num1, num2);
      break;
    case "%":
      divide(num1, num2);
      break;
  }
}
