"use strict";

const screen = document.querySelector("#screen");
const smallText = document.querySelector("#small-text");
const mainText = document.querySelector("#main-text");

const clearBtn = document.querySelector("#clear");
const posNegBtn = document.querySelector("#pos-neg");
const percentageBtn = document.querySelector("#percentage");
const divideBtn = document.querySelector("#divide");
const multiplyBtn = document.querySelector("#multiply");
const subtractBtn = document.querySelector("#subtract");
const addBtn = document.querySelector("#add");
const equalsBtn = document.querySelector("#equals");

const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const decimalBtn = document.querySelector("#decimal");

const allBtn = document.querySelectorAll("button");

percentageBtn.addEventListener("click", percentage);

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

let currentMainNum = "0";
let currentTotal = 0;
let currentOperator;
let operatorText;

zeroBtn.addEventListener("click", function () {
  if (
    (currentMainNum !== "0" && currentMainNum !== "-0") ||
    currentMainNum.indexOf(".") !== -1
  ) {
    mainText.innerText += "0";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += "0";
  }
});

function numberBtnPress(btnText) {
  if (mainText.innerText === "0") {
    mainText.innerText = btnText;
    currentMainNum = btnText;
  } else if (mainText.innerText === "-0") {
    mainText.innerText = "-" + btnText;
    mainText.innerText = "-" + btnText;
    currentMainNum = "-" + btnText;
  } else {
    mainText.innerText += btnText;
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += btnText;
  }
}

oneBtn.addEventListener("click", function () {
  const btnText = document.querySelector("#one").innerText.trim();
  numberBtnPress(btnText);
});

twoBtn.addEventListener("click", function () {
  const btnText = document.querySelector("#two").innerText.trim();
  numberBtnPress(btnText);
});

threeBtn.addEventListener("click", function () {
  const btnText = document.querySelector("#three").innerText.trim();
  numberBtnPress(btnText);
});

fourBtn.addEventListener("click", function () {
  const btnText = document.querySelector("#four").innerText.trim();
  numberBtnPress(btnText);
});

fiveBtn.addEventListener("click", function () {
  const btnText = document.querySelector("#five").innerText.trim();
  numberBtnPress(btnText);
});

sixBtn.addEventListener("click", function () {
  const btnText = document.querySelector("#six").innerText.trim();
  numberBtnPress(btnText);
});

sevenBtn.addEventListener("click", function () {
  const btnText = document.querySelector("#seven").innerText.trim();
  numberBtnPress(btnText);
});

eightBtn.addEventListener("click", function () {
  const btnText = document.querySelector("#eight").innerText.trim();
  numberBtnPress(btnText);
});

nineBtn.addEventListener("click", function () {
  const btnText = document.querySelector("#nine").innerText.trim();
  numberBtnPress(btnText);
});

decimalBtn.addEventListener("click", function () {
  if (mainText.innerText.indexOf(".") === -1) {
    mainText.innerText += ".";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += ".";
  }
});

clearBtn.addEventListener("click", function () {
  mainText.innerText = "0";
  smallText.innerText = "0";
  currentMainNum = "0";
  currentTotal = 0;
});

posNegBtn.addEventListener("click", function () {
  mainText.innerText = togglePosNeg(mainText.innerText);
  currentMainNum = togglePosNeg(currentMainNum);
});

function togglePosNeg(str) {
  if (str.length === 0) {
    return str;
  }
  const firstChar = str.charAt(0);
  const secondChar = str.charAt(1);
  const restOfString = str.slice(1);
  const secondRestOfString = str.slice(2);
  const toggledChar = firstChar === "-" ? "" : "-";
  if (firstChar === "-") {
    return secondChar + secondRestOfString;
  } else {
    return toggledChar + firstChar + restOfString;
  }
}

//format numbers by adding commas
//!need to reduce numbers here

function addCommas(nStr) {
  nStr += "";
  nStr = nStr.replace(/[^-?\d.]/g, "");
  let x = nStr.split(".");
  let x1 = x[0];
  let x2 = x.length > 1 ? "." + x[1] : "";
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}

//percentage
function percentage() {
  let percentNum = Number(mainText.innerText);
  percentNum = Number((percentNum / 100).toFixed(2));
  if (
    smallText.innerText === "0" &&
    mainText.innerText !== "0" &&
    mainText.innerText !== "-0"
  ) {
    currentTotal = percentNum;
    smallText.innerText = currentTotal + "";
    mainText.innerText = "0";
    currentMainNum = "0";
  } else if (mainText.innerText !== "0" && mainText.innerText !== "-0") {
    currentTotal = currentOperator(Number(currentTotal), Number(percentNum));
    smallText.innerText += " " + percentNum;
    mainText.innerText = currentTotal + "";
    currentMainNum = "0";
  }
}

// check for operator needs to change operator of
// smallText if doesn't match current operator
function checkForOperator() {
  const x = smallText.innerText.trim();
  const y = x.length;
  const lastLetterOpCheck = x[y - 1];
  let operatorLast = false;

  // direct match of last operator typed to keep from putting multiple inputs
  if (lastLetterOpCheck === operatorText) {
    operatorLast = true;
  }
  return operatorLast;
}

function calculate(opTxt) {
  const operatorLast = checkForOperator();
  operatorText = opTxt;
  if (
    smallText.innerText === "0" &&
    (mainText.innerText === "0" || mainText.innerText === "-0")
  ) {
    return;
  } else if (
    smallText.innerTest !== "0" &&
    (mainText.innerText === "0" || mainText.innerText === "-0")
  ) {
    switch (operatorLast) {
      case true:
        break;
      case false:
        smallText.innerText =
          smallText.innerText.trimEnd() + " " + operatorText;

        break;
    }
  } else if (
    smallText.innerText !== "0" &&
    mainText.innerText !== "0" &&
    mainText.innerText !== "-0"
  ) {
    switch (operatorLast) {
      case true:
        smallText.innerText =
          smallText.innerText.trim() +
          " " +
          mainText.innerText +
          " " +
          operatorText;
        currentTotal = currentOperator(
          Number(currentTotal),
          Number(currentMainNum)
        );

        break;
      case false:
        smallText.innerText =
          smallText.innerText.trim() +
          " " +
          operatorText +
          " " +
          mainText.innerText;
        currentTotal = currentOperator(
          Number(currentTotal),
          Number(currentMainNum)
        );

        break;
    }
  } else if (
    smallText.innerText === "0" &&
    mainText.innerText !== "0" &&
    mainText.innerText !== "-0"
  ) {
    currentTotal = Number(currentMainNum);
    smallText.innerText = mainText.innerText + " " + operatorText;
  }
  changeValues();
}

function changeValues() {
  mainText.innerText = "0";
  currentMainNum = "0";

  const x = smallText.innerText.trim();
  const y = x.length;
  const lastLetterOpCheck = x[y - 1];

  switch (lastLetterOpCheck) {
    case "+":
      currentOperator = add;
      operatorText = "+";
      break;
    case "-":
      currentOperator = subtract;
      operatorText = "-";
      break;
    case "*":
      currentOperator = multiply;
      operatorText = "*";
      break;
    case "/":
      currentOperator = divide;
      operatorText = "/";
  }
}

//addition
addBtn.addEventListener("click", function () {
  let x = "+";
  calculate(x);
});

//subtract
subtractBtn.addEventListener("click", function () {
  let x = "-";
  calculate(x);
});

//multiply
multiplyBtn.addEventListener("click", function () {
  let x = "*";
  calculate(x);
});

//divide
divideBtn.addEventListener("click", function () {
  let x = "/";
  calculate(x);
});

// equals
equalsBtn.addEventListener("click", function () {
  const operatorLast = checkForOperator();
  if (
    smallText.innerText === "0" &&
    (mainText.innerText === "0" || mainText.innerText === "-0")
  ) {
    return;
  } else if (
    smallText.innerTest !== "0" &&
    (mainText.innerText === "0" || mainText.innerText === "-0")
  ) {
    mainText.innerText = addCommas(currentTotal) + '';
  } else if (
    smallText.innerText !== "0" &&
    mainText.innerText !== "0" &&
    mainText.innerText !== "-0"
  ) {
    switch (operatorLast) {
      case true:
        smallText.innerText =
          smallText.innerText.trim() + " " + mainText.innerText;
        currentTotal = currentOperator(
          Number(currentTotal),
          Number(currentMainNum)
        );
        mainText.innerText = addCommas(currentTotal) + '';
        break;
      case false:
        smallText.innerText =
          smallText.innerText.trim() +
          " " +
          operatorText +
          " " +
          mainText.innerText;
        currentTotal = currentOperator(
          Number(currentTotal),
          Number(currentMainNum)
        );
        mainText.innerText = addCommas(currentTotal) + '';
        break;
    }
  } else if (
    smallText.innerText === "0" &&
    mainText.innerText !== "0" &&
    mainText.innerText !== "-0"
  ) {
    mainText.innerText = addCommas(currentTotal) + '';
  }
  allBtn.forEach((btn) => btn.addEventListener("click", nextBtnClickClear));
});

//clear after equals
function nextBtnClickClear() {
  mainText.innerText = "0";
  smallText.innerText = "0";
  currentMainNum = "0";
  currentTotal = 0;
  currentOperator = undefined;
  operatorText = undefined;
  allBtn.forEach((btn) => btn.removeEventListener("click", nextBtnClickClear));
}
