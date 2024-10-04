let currentInput = "";
let previousInput = "";
let operator = "";


function Calculator(button){

let value = button.value;
let display = document.getElementById("changingNum");
let isOperator = ["addition","subtraction","multiplication","division","%",
                    "square-root", "square", "reciprocal", "+/-"].includes(value);

if(isOperator){ // all operator handling
    if(previousInput === ""){
        previousInput = currentInput;
        currentInput = "";
    }
    operator = value; //stores the operator
}
//if numbers or decimal point is pressed
if(!isOperator && value !== "=" && value !== "clear" && value !== "back-space"){
    currentInput += value;
    display.innerText = currentInput || "0";
}

if(value === "="){// equals signs
    if(previousInput !== "" && currentInput !== "" && operator !== ""){
        let result = Calculate(previousInput,operator,currentInput);
        display.innerText = result;
        currentInput = result;// will store the result as the most current num/input
        previousInput = "";
        operator = "";
    }
}
if(value === "clear"){
    currentInput = "";
    previousInput = "";
    operator = "";
    display.innerText = "0"; // will rest
}
if(value === "back-space"){
    currentInput = currentInput.slice(0,-1);
    display.innerText = currentInput || "0";
}
if(value === "square" || value === "square-root" || value === "reciprocal" || value === "+/-"){
    let result = otherCalculate(previousInput, operator);
    display.innerText = result;
    previousInput = result;
    operator = "";
}



}

function Calculate(num1, op, num2){
        let x = parseFloat(num1)
        let y = parseFloat(num2)
        let result;
        if(op === "addition"){
            return result = x + y;
        }
        else if(op === "subtraction"){
            return result = x - y;
        }
        else if(op === "multiplication"){
            return result = x * y;
        }
        else if(op === "division"){
            return result = x / y;
        }
        else if(op === "%"){
            return result = x % y;
        } else{
            result = "Error"
        }
        return result;
        
}
function otherCalculate(num, op){
    let x = parseFloat(num);
    let result;

    if(op === "square-root"){
       return result = Math.sqrt(x)
    }else if(op === "square"){
       return result = x * x;
    }else if(op === "reciprocal"){
        return result = 1 / x;
    }else if(op === "+/-"){
        return -x;
    }
}
