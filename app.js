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
    const textContent = this.textContent;
    // Check for decimal points and update the content
    if (textContent === "," && currentNumber.innerHTML.includes(","))
        return; // Prevent multiple decimal points
    // Prevent starting with a decimal point if currentNumber is empty
    if (textContent === "," && currentNumber.innerHTML === "") {
        currentNumber.innerHTML = "0,"; // Start with 0, if empty
        return;
    }
    // Prevent multiple leading zeros
    if (currentNumber.innerHTML === "0" &&
        (textContent === "0" || textContent === "00")) {
        return;
    }
    // Prevent numbers starting with multiple zeros
    if ((currentNumber.innerHTML === "0" || currentNumber.innerHTML === "") &&
        textContent === "00") {
        return;
    }
    // Replace leading zero when another digit is added
    if (currentNumber.innerHTML.startsWith("0") &&
        !currentNumber.innerHTML.startsWith("0,")) {
        currentNumber.innerHTML = currentNumber.innerHTML.replace(/^0+/, "");
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
    // Prevent operation on invalid number 0,
    if (currentNumber.innerHTML === "0," && mathSymbol)
        return;
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
            console.log("typeof result", typeof result);
            break;
        case "-":
            result = b - a;
            console.log("typeof result", typeof result);
            break;
        case "x":
            result = a * b;
            console.log("typeof result", typeof result);
            break;
        case ":":
            result = b / a;
            console.log("typeof result", typeof result);
            break;
        case "2^":
            result = b ** a;
            console.log("typeof result", typeof result);
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
