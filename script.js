function add(a, b) {
    let res = a + b;
    return ifLongFloat(res);
}
function substract(a, b) {
    let res = a - b;
    return ifLongFloat(res);
}
function multiply(a, b) {
    let res = a * b;
    return ifLongFloat(res);
}
function divide(a, b) {
    if (b === 0) {
        clearAll();
        alert('"Were you trying to divide by 0???"');
        return null;
    } else {let res = a / b;
    return ifLongFloat(res);
    }
}
function ifLongFloat(number) {
    if (!Number.isInteger(number)) {
        const str = number.toString();
        const parts = str.split(".");
        const decimals = parts[1] ? parts[1].length : 0;
        if (decimals > 5) {
            return Number(number.toFixed(5));
        } else {
            return number;
        }
    } else {
        return number;
    }
}
function operate(num1, operator, num2) {

    if (operator == "+") {
        return add(num1, num2)
    }
        else if (operator == "-") {
        return substract(num1, num2)
    }

        else if (operator == "*") {
        return multiply(num1, num2)
    }

        else if (operator == "/") {
        return divide(num1, num2)
    }

    
}
function updateDisplay(input) {
    return output.textContent = input;
}
function isNumber(value) {
    return typeof value === 'number';
}
function clearAll() {
    num1 = null;
    num2 = null;
    operator = "";
    currentInput = "";
    waitForSecondOperand = false;
    return;
}

const buttons = document.querySelectorAll(".button");
const output = document.querySelector('.output');
let num1 = null;
let num2 = null;
let operator = "";
let currentInput = "";
let waitForSecondOperand = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent.includes("C")) {
            clearAll()
            return updateDisplay();
        }
        else if (button.textContent.includes("=")) {

            if ((num1 === null) || (num1 !== null && operator !== "" && currentInput === "")) {
                return;
            } else if (currentInput !== "" && operator !== "") {
                num2 = Number(currentInput);       
                currentInput = "";
                num1 = output.textContent = operate(num1, operator, num2);
                return clearAll();
            }  
        } else if (["+", "-", "*", "/"].includes(button.textContent)) {
            if (num1 === null && currentInput !== "") {
                num1 = Number(currentInput);
                operator = button.textContent;
                waitForSecondOperand = true
                currentInput = '';
                return;
            } else if (num1 === null && currentInput === "") {
                operator = button.textContent;
                return; 
        }  else if (num1 !== null && operator !== "" && currentInput === "") {
                return operator = button.textContent;
            } else if (waitForSecondOperand && currentInput === "") {
                operator = button.textContent;
                return;
            } else {
                if ((operator === "/") && (Number(currentInput) === 0)) {
                    console.log('1')
                    clearAll();
                    updateDisplay();
                    return alert('"Were you trying to divide by 0???"');
                } else {
                    console.log('2')
                    num2 = Number(currentInput);
                    let result = operate(num1, operator, num2);
                    updateDisplay(result);
                    num1 = result;
                    operator = button.textContent;
                    currentInput = '';
                    waitForSecondOperand = true;
                    return;
                }
            }
        } else { 
            if (waitForSecondOperand) {
                currentInput = "";
                waitForSecondOperand = false;
            }
            currentInput += button.textContent;
            updateDisplay(currentInput);
        }
    })
    
});