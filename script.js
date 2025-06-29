function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
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

const buttons = document.querySelectorAll(".button");
const output = document.querySelector('.output');

let currentInput = "";

const operators = ["+", "-", "*", "/"];
    
let num1 = null;
let operator = "";
let num2 = null;


buttons.forEach(button => {



    button.addEventListener("click", () => {
            

        if (button.textContent.includes("=")) {
            num2 = Number(currentInput);       
      
            return console.log(operate(num1, operator, num2)); 
            
        }

        if (operators.includes(button.textContent)) {
            num1 = Number(currentInput);
            operator = button.textContent;
            currentInput = ""

        } else { 
            currentInput += button.textContent;
            output.textContent = currentInput;
        }
    })
    
});