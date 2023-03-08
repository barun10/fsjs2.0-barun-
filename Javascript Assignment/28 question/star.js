const prompt = require("prompt-sync")({sigint:true});
let num = prompt("enter the number")

// for (let i = 0; i < num; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*")
//   }
//   console.log("")
// }

// for (let i = 0; i < num; i++) {
//   for (let j = 0; j < num; j++) {
//     process.stdout.write("*")
//   }
//   console.log("")
// }

// for (let i = 0; i < num; i++) {
//   for (let j = num; j >= i; j++) {
//     process.stdout.write(" ")
//   }
//   console.log("")
// }

for (let i = 0; i < num; i++) {
  for (let j = num; j > i+1 ; j--) {
    process.stdout.write(" ")
  }
  for (let j = 0; j <= 2 * i; j++) {
    process.stdout.write("*")
  }
  console.log("")
}
