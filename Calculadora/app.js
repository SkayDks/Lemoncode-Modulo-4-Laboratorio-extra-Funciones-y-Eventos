let sum = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multi = (a, b) => a * b;
let division = (a, b) => a / b;
let result = NaN;
let lastOperator;

function calculate(num, result, operator) {
  let filter = isNaN(num) ? "error" : operator;

  switch (filter) {
    case "sum":
      return sum(result, num);
    case "subtrac":
      return subtract(result, num);
    case "mult":
      return multi(result, num);
    case "division":
      return division(result, num);
    default:
      return filter;
  }
}

function handleCalculate(e) {
  let inputNum = document.querySelector(".numUser");
  let operator = e.target.id;
  let num = isNaN(parseInt(inputNum.value)) ? "error" : parseInt(inputNum.value);

  lastOperator = operator === "equals" ? lastOperator : operator;

  if (isNaN(result)) result = num;
  else result = calculate(num, result, lastOperator);

  document.querySelector(".result>span").innerHTML = result;
  result = operator === "equals" || result === "error" ? NaN : result;
  inputNum.focus();
  inputNum.select();
}

document.querySelector("#sum").addEventListener("click", handleCalculate);
document.querySelector("#subtrac").addEventListener("click", handleCalculate);
document.querySelector("#mult").addEventListener("click", handleCalculate);
document.querySelector("#division").addEventListener("click", handleCalculate);
document.querySelector("#equals").addEventListener("click", handleCalculate);
