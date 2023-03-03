const prompt = require("prompt-sync")({sigint:true});
let num = prompt("enter the number")

for (let i = 1; i <=10; i++)
  console.log(num + " * " + i + " = " + num * i)