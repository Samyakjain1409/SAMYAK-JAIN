function appendNumber(number) {
    document.getElementById("result").value += number;
}

function appendOperator(operator) {
    const resultElement = document.getElementById("result");
    if (resultElement.value === "" && operator !== "-") {
        return;
    }
    resultElement.value += operator;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    const resultElement = document.getElementById("result");
    try {
        resultElement.value = eval(resultElement.value) || "";
    } catch {
        resultElement.value = "Error";
    }
}
