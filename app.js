"use strict";
const currentNumber = document.querySelector(".currentNumber");
const previousNumber = document.querySelector(".previousNumber");
const mathSymbol = document.querySelector(".mathSymbol");
const equalsButton = document.querySelector(".equals");
const zeroButton = document.querySelector(".zero");
const zeroZeroButton = document.querySelector(".zero-zero");
const clearButton = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const calculatorHistory = document.querySelector(".calculator-history_entries");
const clearHistoryButton = document.querySelector(".calculator-history_btn");
let result;
// Calculator functions:
function displayNumbers() {
    var _a;
    const textContent = (_a = this.textContent) !== null && _a !== void 0 ? _a : "";
    // console.log("text: ", textContent);
    // Check for decimal points and update the content
    if (textContent === "," && currentNumber.innerHTML.includes(","))
        return; // Prevent multiple decimal points
    if (textContent === "," && currentNumber.innerHTML === "") {
        currentNumber.innerHTML = ",0"; // Start with ,0 if empty
        return;
    }
    if (textContent === "00" && currentNumber.innerHTML === "0") {
        return; // Prevent numbers starting with 00
    }
    // Append the text content of the clicked button to the currentNumber
    currentNumber.innerHTML += textContent;
}
function operate() {
    if (currentNumber.innerHTML === "" && this.textContent === "-") {
        currentNumber.innerHTML = "-";
        return;
    }
    else if (currentNumber.innerHTML === "")
        return;
    if (mathSymbol.innerHTML !== "") {
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSymbol.innerHTML = this.textContent; // Non-null assertion
    currentNumber.innerHTML = "";
}
function showResult() {
    if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "") {
        return;
    }
    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSymbol.innerHTML;
    switch (operator) {
        case "+":
            result = b + a;
            break;
        case "-":
            result = b - a;
            break;
        case "x":
            result = a * b;
            break;
        case ":":
            result = b / a;
            break;
        case "2^":
            result = b ** a;
            break;
        default:
            return; // Exit if no valid operator
    }
    currentNumber.innerHTML = String(result); // Convert back to string
    previousNumber.innerHTML = "";
    mathSymbol.innerHTML = "";
}
function clearResult() { }
function clearHistory() { }
// Button events:
numberButtons.forEach((button) => button.addEventListener("click", displayNumbers));
operatorButtons.forEach((button) => button.addEventListener("click", operate));
equalsButton.addEventListener("click", showResult);
clearButton.addEventListener("click", clearResult);
clearHistoryButton.addEventListener("click", clearHistory);
