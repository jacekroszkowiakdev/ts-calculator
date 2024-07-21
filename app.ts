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

const currentNumber = document.querySelector(".currentNumber") as HTMLElement;
const previousNumber = document.querySelector(".previousNumber") as HTMLElement;
const mathSymbol = document.querySelector(".mathSymbol") as HTMLElement;
const equalsButton = document.querySelector(".equals") as HTMLElement;
const zeroButton = document.querySelector(".zero") as HTMLElement;
const zeroZeroButton = document.querySelector(".zero-zero") as HTMLElement;
const clearButton = document.querySelector(".clear") as HTMLElement;
const numberButtons = document.querySelectorAll(
    ".number"
) as NodeListOf<HTMLElement>;
const operatorButtons = document.querySelectorAll(
    ".operator"
) as NodeListOf<HTMLElement>;
const calculatorHistory = document.querySelector(
    ".calculator-history_entries"
) as HTMLElement;
const clearHistoryButton = document.querySelector(
    ".calculator-history_btn"
) as HTMLElement;

let result: number;

// Calculator functions:
function displayNumbers(this: HTMLElement): void {
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
    currentNumber.innerHTML += this.textContent ?? "";
}
function operate() {}

function showResult() {}

function clearResult() {}

function clearHistory() {}

// Button events:
numberButtons.forEach((button) =>
    button.addEventListener("click", displayNumbers)
);
operatorButtons.forEach((button) => button.addEventListener("click", operate));
equalsButton.addEventListener("click", showResult);
clearButton.addEventListener("click", clearResult);
clearHistoryButton.addEventListener("click", clearHistory);
