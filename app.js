// const currentNumber = document.querySelector("currentNumber") as HTMLElement;
// const previousNumber = document.querySelector("previousNumber") as HTMLElement;
// const mathSymbol = document.querySelector("mathSymbol") as HTMLElement;
// const equalsButton = document.querySelector("equals") as HTMLElement;
// const zeroButton = document.querySelector("zero") as HTMLElement;
// const zeroZeroButton = document.querySelector("zero-zero") as HTMLElement;
// const clearButton = document.querySelector("clear") as HTMLElement;
// const numberButtons = document.querySelectorAll(
//     ".number"
// ) as NodeListOf<HTMLElement>;
// const operatorButtons = document.querySelectorAll(
//     ".operator"
// ) as NodeListOf<HTMLElement>;
// const calculatorHistory = document.querySelector(
//     "calculator-history_entires"
// ) as HTMLElement;
// const clearHistoryButton = document.querySelector(
//     "calculator-history_btn"
// ) as HTMLElement;
var currentNumber = document.querySelector(".currentNumber");
var previousNumber = document.querySelector(".previousNumber");
var mathSymbol = document.querySelector(".mathSymbol");
var equalsButton = document.querySelector(".equals");
var zeroButton = document.querySelector(".zero");
var zeroZeroButton = document.querySelector(".zero-zero");
var clearButton = document.querySelector(".clear");
var numberButtons = document.querySelectorAll(".number");
var operatorButtons = document.querySelectorAll(".operator");
var calculatorHistory = document.querySelector(".calculator-history_entries");
var clearHistoryButton = document.querySelector(".calculator-history_btn");
var result;
// Calculator functions:
function displayNumbers() {
    var _a;
    // Check for decimal points and update the content
    if (this.textContent === "." && currentNumber.innerHTML.includes(".")) {
        return;
    }
    if (this.textContent === "." && currentNumber.innerHTML === "") {
        currentNumber.innerHTML = ".0";
        return;
    }
    console.log(this);
    // Append the text content of the clicked button to the currentNumber
    currentNumber.innerHTML += (_a = this.textContent) !== null && _a !== void 0 ? _a : "";
}
function operate() { }
function showResult() { }
function clearResult() { }
function clearHistory() { }
// Button events:
numberButtons.forEach(function (button) {
    return button.addEventListener("click", displayNumbers);
});
operatorButtons.forEach(function (button) { return button.addEventListener("click", operate); });
equalsButton.addEventListener("click", showResult);
clearButton.addEventListener("click", clearResult);
clearHistoryButton.addEventListener("click", clearHistory);
