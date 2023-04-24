const btnOne = document.querySelector("#btn-1");
const btnTwo = document.querySelector("#btn-2");
const btnThree = document.querySelector("#btn-3");
const btnFour = document.querySelector("#btn-4");
const btnFive = document.querySelector("#btn-5");
const btnSix = document.querySelector("#btn-6");
const btnSeven = document.querySelector("#btn-7");
const btnEight = document.querySelector("#btn-8");
const btnNine = document.querySelector("#btn-9");
const btnZero = document.querySelector("#btn-0");
const outPrevious = document.querySelector("#out-previous");
const outCurrent = document.querySelector("#out-current");


let num1 = 0;
let num2 = 0;
let operator;

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
