const prompt = require("prompt-sync")({sigint:true});
let filename = prompt("enter the filename")

let parts = filename.split(".")
console.log(parts[1])