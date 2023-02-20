const prompt=require("prompt-sync")({sigint:true});
let month = prompt("Enter name of the month: ").toLowerCase()
let year = Number(prompt("Enter the year: "))
let thirties = ["april", "june", "september", "november"]
let thirty_ones = ["january", "march", "may", "july", "august", "october", "december"]

if (thirties.includes(month))
  console.log("This month has 30 days")
else if (thirty_ones.includes(month))
  console.log("This month has 31 days")
else if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0) ))
  console.log("This month has 29 days")
else 
  console.log("This month has 28 days")


