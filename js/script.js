"use strict";

// test 5 + 0 = (expected result 5)
// test 5 + 5 = (expected result 10)
// test 7 + 5 + 1 + 3 = (expected result 16)
// test 5 + -5 + -3 = (expected result -8)
// test 3.05 + .008 = (expected result 3.058)

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

let currentMainNum = 0;
let currentTotal = 0;
let currentOperator;
let operatorText;

zeroBtn.addEventListener("click", function () {
  if (currentMainNum === "0" && currentMainNum.indexOf(".") === -1) {
    return;
  } else {
    mainText.innerText += "0";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += "0";
  }
});

oneBtn.addEventListener("click", function () {
  if (mainText.innerText === "0") {
    mainText.innerText = "1";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum = "1";
  } else {
    mainText.innerText += "1";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += "1";
  }
});

twoBtn.addEventListener("click", function () {
  if (mainText.innerText === "0") {
    mainText.innerText = "2";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum = "2";
  } else {
    mainText.innerText += "2";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += "2";
  }
});

threeBtn.addEventListener("click", function () {
  if (mainText.innerText === "0") {
    mainText.innerText = "3";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum = "3";
  } else {
    mainText.innerText += "3";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += "3";
  }
});

fourBtn.addEventListener("click", function () {
  if (mainText.innerText === "0") {
    mainText.innerText = "4";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum = "4";
  } else {
    mainText.innerText += "4";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += "4";
  }
});

fiveBtn.addEventListener("click", function () {
  if (mainText.innerText === "0") {
    mainText.innerText = "5";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum = "5";
  } else {
    mainText.innerText += "5";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += "5";
  }
});

sixBtn.addEventListener("click", function () {
  if (mainText.innerText === "0") {
    mainText.innerText = "6";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum = "6";
  } else {
    mainText.innerText += "6";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += "6";
  }
});

sevenBtn.addEventListener("click", function () {
  if (mainText.innerText === "0") {
    mainText.innerText = "7";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum = "7";
  } else {
    mainText.innerText += "7";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += "7";
  }
});

eightBtn.addEventListener("click", function () {
  if (mainText.innerText === "0") {
    mainText.innerText = "8";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum = "8";
  } else {
    mainText.innerText += "8";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += "8";
  }
});

nineBtn.addEventListener("click", function () {
  if (mainText.innerText === "0") {
    mainText.innerText = "9";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum = "9";
  } else {
    mainText.innerText += "9";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += "9";
  }
});

//clear both lines and reset equations
clearBtn.addEventListener("click", function () {
  mainText.innerText = "0";
  smallText.innerText = "0";
  currentMainNum = "0";
});

decimalBtn.addEventListener("click", function () {
  if (mainText.innerText.indexOf(".") === -1) {
    mainText.innerText += ".";
    mainText.innerText = addCommas(mainText.innerText);
    currentMainNum += ".";
  }
});

posNegBtn.addEventListener("click", function () {
  mainText.innerText = togglePosNeg(mainText.innerText);
  currentMainNum = togglePosNeg(currentMainNum);
});

percentageBtn.addEventListener("click", percentage);

function addCommas(nStr) {
  nStr += "";
  nStr = nStr.replace(/[^\d.]/g, "");
  let x = nStr.split(".");
  let x1 = x[0];
  let x2 = x.length > 1 ? "." + x[1] : "";
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}

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

// test 100 + 50%    should equal 150
//curTot + %    >>  curTot += curTot * %
//(100) + (50%) >> (100+= 100 * .50)

function percentage() {
  let percentNum = Number(mainText.innerText);
  percentNum = Number((percentNum / 100).toFixed(2));
  // currentTotal
  if (currentTotal !== 0) {
    let percentTot = currentTotal * percentNum;
    let total = currentOperator(currentTotal, percentTot);
    operatorText = "%";
    percentNum += "";
    smallText.innerText += " " + percentNum + operatorText;
    mainText.innerText = total;
    currentTotal += total;
  } else {
    operatorText = "%";
    percentNum += "";
    smallText.innerText = percentNum + operatorText;
    mainText.innerText = 0;
    currentOperator = multiply;
    operatorText = "*";
    currentTotal = percentNum + operatorText;
  }
  // x += x * (str decimal moved over 2)
}

addBtn.addEventListener("click", function () {
  const add = (a, b) => a + b;
  currentOperator = add;
  operatorText = "+";
  if (smallText.innerText === "0") {
    currentTotal = currentMainNum;
    smallText.innerText = mainText.innerText + " " + operatorText;
  } else {
    currentTotal += Number(currentMainNum);
    smallText.innerText += " " + mainText.innerText + " " + operatorText + " ";
  }
  mainText.innerText = 0;
  currentMainNum = '0';
});

subtractBtn.addEventListener("click", function () {
  const subtract = (a, b) => a - b;
  currentOperator = subtract;
  operatorText = "-";
  if (smallText.innerText === "0") {
    currentTotal = currentMainNum;
    smallText.innerText = mainText.innerText + " " + operatorText;
  } else {
    smallText.innerText += " " + mainText.innerText + " " + operatorText + " ";
    currentTotal -= Number(currentMainNum);
  }
  mainText.innerText = 0;
  currentMainNum = '0';
});

multiplyBtn.addEventListener("click", function () {
  const multiply = (a, b) => a * b;
  currentOperator = multiply;
  operatorText = "*";
  if (smallText.innerText === "0") {
    currentTotal = currentMainNum;
    smallText.innerText = mainText.innerText + " " + operatorText;
  } else {
    smallText.innerText += " " + mainText.innerText + " " + operatorText + " ";
    currentTotal = multiply(Number(currentTotal), Number(currentMainNum));
  }
  mainText.innerText = 0;
  currentMainNum = '0';
});

divideBtn.addEventListener("click", function () {
  const divide = (a, b) => a / b;
  currentOperator = divide;
  operatorText = "/";
  if (smallText.innerText === "0") {
    currentTotal = currentMainNum;
    smallText.innerText = mainText.innerText + " " + operatorText;
  } else {
    smallText.innerText += " " + mainText.innerText + " " + operatorText + " ";
    currentTotal = divide(Number(currentTotal), Number(currentMainNum));
  }
  mainText.innerText = 0;
  currentMainNum = '0';
});

equalsBtn.addEventListener("click", function () {
  smallText.innerText += " " + mainText.innerText;
  currentTotal = currentOperator(
    Number(currentTotal),
    Number(mainText.innerText)
  );
  mainText.innerText = currentTotal;
  currentOperator = undefined;
  currentTotal = 0;
});
