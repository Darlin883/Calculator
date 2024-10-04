

const numbers = document.querySelectorAll("numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innertext === 'NaN') {
            inputValue.innerText = "";

        }
        if (inputValue.innerText === '0') {
            inputValue.innerText = ""
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

const calculate = document
.querySelectorAll(".operations")
.forEach(function (item){ 
    item.addEventListener("click", function (e){
        console.log(e.target.innerHTML);
    })
})

let lastValue = inputValue.innerText.substring(inputValue,innerText.length, inputValue,innerText.length - 1)
if (isNaN(lastValue) && e.target.innerHTML === "=") {
    inputValue.innerText = eval(inputvalue.innerText)
}

function Calculator(button){

let value = button.value;
let display = document.getElementById("changingNum");
let isOperator = ["addition","subtraction","multiplication","division","%"].includes(value);

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
