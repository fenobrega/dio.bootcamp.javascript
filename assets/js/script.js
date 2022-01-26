var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;
var testando = document.getElementById("adicionar");
testando.addEventListener("mouseleave", mensagem);
var testando1 = document.getElementById("subtrair");
testando1.addEventListener("mouseleave", mensagem);

function mensagem() {
    if (currentNumber === 0 || currentNumber === 10)
        alert("Contador somente de 0 até 10!");
}

function increment() {
    if (currentNumber < 10)
        currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    if (currentNumber > 0)
        currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}