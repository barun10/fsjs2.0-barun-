const prompt = require("prompt-sync")({sigint:true});
let height = prompt("enter your height in m")
let weight = prompt("enter the weight in kg")

let bmi = weight / Math.pow(height,2)

if (bmi < 18.5)
  console.log("you are underwright")
else if (bmi >= 18.5 && bmi <= 24.9)
  console.log("you are of normal weight")
else if (bmi >= 25 && bmi <= 29.9)
  console.log("you are overweight")
else console.log("you are obese")

