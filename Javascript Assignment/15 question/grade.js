const prompt=require("prompt-sync")({sigint:true});
let marks = prompt("Enter your marks: ")

if (marks > 100 )
  console.log("Enter valid marks")
else if (marks >= 80 && marks <= 100)
  console.log("A")
else if (marks >= 70 && marks <= 79)
  console.log("B")
else if (marks >= 60 && marks <= 69)
  console.log("C")
else if (marks >= 50 && marks <= 59)
  console.log("D")
else 
  console.log("F")