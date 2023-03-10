const prompt = require("prompt-sync")({sigint:true});
let a = prompt("enter first operand")
let b = prompt("enter second operand")
let c = prompt("enter operator")
let result = 0
switch (c) {
  case "+":
    result = a + b
    console.log(result)
    break;
  case "-":
    result = a - b
    console.log(result)
    break;
  case "*":
    result = a * b
    console.log(result)
    break;
  case "/":
  result = a / b
  console.log(result)
  break;
  default:
    console.log("wrong input")
}