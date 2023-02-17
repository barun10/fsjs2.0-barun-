const prompt=require("prompt-sync")({sigint:true});
let month = prompt("Enter name of the month: ").toLowerCase()
let Autumn = ["september", "october", "november"]
let Winter = ["december", "january", "february"]
let Spring = ["march", "april", "may"]
if (Autumn.includes(month))
  console.log("The season is Autumn")
else if (Winter.includes(month))
  console.log("The season is Winter")
else if (Spring.includes(month))
  console.log("The season is Spring")
else
  console.log("The season is Summer")


