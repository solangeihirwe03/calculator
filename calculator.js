 
function calculate(operation) {
    const firstNumber = Number(document.getElementById("firstNumber").value);
    const secondNumber = Number(document.getElementById("secondNumber").value);
    let result;
  
    if (operation === "+") {
      result = firstNumber + secondNumber;
    } 
    else if (operation === "-") {
      result = firstNumber - secondNumber;
    } 
    else if (operation === "*") {
      result = firstNumber * secondNumber;
    } 
    else if (operation === "/") {
      if (secondNumber === 0) {
        result = "Division by zero is not allowed.";
      } 
      else {
        result = firstNumber / secondNumber;
      }
    } 
    else {
      result = "Invalid operation";
    }
  
    document.getElementById("answer").innerHTML ="the answeris:"+ result;
}