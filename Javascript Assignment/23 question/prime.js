const prompt=require("prompt-sync")({sigint:true});
let num = prompt("enter the number")
let flag = 0

for(let i = 2; i < num/2; i++)
  if(num % i == 0){
    console.log("This is not a prime number")
    flag = 1
    break
  }

if(flag == 0)
  console.log("This is a prime number")

