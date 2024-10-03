const inputValue = document.getElementById("user-input")

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