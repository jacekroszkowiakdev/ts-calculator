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
    const textContent = this.textContent;

    // Check for decimal points and update the content
    if (textContent === "," && currentNumber.innerHTML.includes(",")) return; // Prevent multiple decimal points

    // Prevent starting with a decimal point if currentNumber is empty
    if (textContent === "," && currentNumber.innerHTML === "") {
        currentNumber.innerHTML = "0,"; // Start with 0, if empty
        return;
    }

    // Prevent multiple leading zeros
    if (
        currentNumber.innerHTML === "0" &&
        (textContent === "0" || textContent === "00")
    ) {
        return;
    }

    // Prevent numbers starting with multiple zeros
    if (
        (currentNumber.innerHTML === "0" || currentNumber.innerHTML === "") &&
        textContent === "00"
    ) {
        return;
    }

    // Replace leading zero when another digit is added, unless it's a decimal number
    if (
        currentNumber.innerHTML === "0" &&
        textContent !== "0" &&
        textContent !== "," &&
        !currentNumber.innerHTML.startsWith("0,")
    ) {
        currentNumber.innerHTML = "";
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

    // Prevent operation on invalid number 0,
    if (currentNumber.innerHTML === "0," && mathSymbol) return;

    previousNumber.innerHTML = currentNumber.innerHTML;

    mathSymbol.innerHTML = this.textContent!; // Non-null assertion
    currentNumber.innerHTML = "";
}

function showResult(): void {
    if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "") {
        return;
    }

    // Convert commas to dots for calculation
    const a = parseFloat(currentNumber.innerHTML.replace(",", "."));
    const b = parseFloat(previousNumber.innerHTML.replace(",", "."));
    const operator = mathSymbol.innerHTML;

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

    // Convert dots back to commas for display
    currentNumber.innerHTML = String(result).replace(".", ",");
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
