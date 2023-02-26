const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort((a,b) => a-b)
console.log(ages)
min = ages[1]
let l = ages.length
max = ages[ages.length - 1]
console.log("The minimum element is " + min)
console.log("The maximum element is " + max)

median_even_length = (ages[l/2 + 1] + ages[l/2]) / 2
median_odd_length = ages[l/2]

if (ages.length % 2 == 0)
  console.log("The median age is " + median_even_length)
else
  console.log("The median age is " + median_odd_length)  

function avg(array) {
  let sum = 0
  array.forEach(element => sum += element );
  return (sum/array.length)
}
console.log(avg(ages))

let range = max - min
console.log("The range is " + range)

let min_diff = Math.abs(min - avg(ages))
let max_diff = Math.abs(max - avg(ages))
console.log("Min - avg " + min_diff)
console.log("Max- avg " + max_diff)