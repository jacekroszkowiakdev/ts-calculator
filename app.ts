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
    const textContent = this.textContent ?? "";
    // console.log("text: ", textContent);

    // Check for decimal points and update the content
    if (textContent === "," && currentNumber.innerHTML.includes(",")) return; // Prevent multiple decimal points

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
function operate(this: HTMLElement): void {
    if (currentNumber.innerHTML === "" && this.textContent === "-") {
        currentNumber.innerHTML = "-";
        return;
    } else if (currentNumber.innerHTML === "") return;

    if (mathSymbol.innerHTML !== "") {
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;

    mathSymbol.innerHTML = this.textContent!; // Non-null assertion
    currentNumber.innerHTML = "";
}

function showResult(): void {
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
