const prompt=require("prompt-sync")({sigint:true});
let number = prompt("Enter the number: ")
if (number % 2 === 0)
  console.log("The number is even")
else
  console.log("The number is odd")