const prompt=require("prompt-sync")({sigint:true});
let month = prompt("Enter name of the month: ").toLowerCase()
let thirties = ["april", "june", "september", "november"]
let thirty_ones = ["january", "march", "may", "july", "august", "october", "december"]

if (thirties.includes(month))
  console.log("This month has 30 days")
else if (thirty_ones.includes(month))
  console.log("This month has 31 days")
else 
  console.log("This month includes 28 days in non-leap years and 29 days in a leap year")