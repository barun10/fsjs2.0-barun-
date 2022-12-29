// console.log("hello world");

//creating an array
// let arr = new Array()
// let arr2 = []

// let fruits = ["apple", "banana", "cherry"];

// console.log(fruits); 
// ["apple", "banana", "cherry"]
// console.log(fruits[0]); 
// "apple"
// console.log(fruits[1]); 
// "banana"
// console.log(fruits[2]); 
// "cherry"

//Replacing array elements
// fruits[2] = "pear";
// 
// console.log(fruits);
// 
// adding new element
// fruits[3] = "mango";
// 
// 
// console.log(fruits);

//storing different types of elements

// let diff = ["apple", 1, "🥑", "banana", true, "cherry"];

// console.log(diff);

// console.log(diff[4]);

//checking the type of element
// console.log(typeof diff[4]);

//determine the length of the array
// console.log(diff.length);
// console.log(diff[diff.length - 1]);

//checking the at method

// console.log(diff.at(2));
// console.log(diff.at(-1));

//concatenating arrays
// let arr = ["apple", "banana", "cherry"]
// let arr2 = ["mango", "plum"]
// console.log(arr.concat(arr2))
// let arr3 = ["pineapple", "grapes"]
// console.log(arr.concat(arr2).concat(arr3))
// console.log(arr.concat(arr2, arr3))

//copywithin method

// let arr = ["apple", "banana", "cherry"]
// console.log(arr.copyWithin(2,0))
// let fruits = ["apple", "banana", "cherry", "Peach", "pineapple", "grapes", "kiwi", "mango"]
// console.log(fruits.copyWithin(6,4,5))

//entries method

// let fruits = ["apple", "banana", "cherry", "Peach", "pineapple", "grapes", "kiwi", "mango"]
// let it = fruits.entries();
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)

// every method

// let num = [1,2,3,4,5,6,7,8,9,10]
// console.log(num.every((a)=> (a % 2 == 0)));

//fill and filter method

// let num = [1,2,3,4,5,6,7,8,9,10]
// console.log(num.fill(2, 3, 5))

// let num = [1,2,3,4,5,6,7,8,9,10]
// console.log(num.filter(num => num % 2 == 1))

//find and findlast method

// let num = [1,2,3,4,6,7,8,9]
// console.log(num.find(num => num > 4))
// console.log(num.findLast(num => num > 4))

//findindex and findlastindex method

// let num = [1,2,3,4,5,6,7,8,9]
// console.log(num.findIndex(num => num > 4))
// console.log(num.findLastIndex(num => num > 5))

//flat method

// let num = [1,2,3,[4,5],[6,7,[[8,9]]]]

// console.log(num.flat());

//forEach method

// let num = [1,2,3,4,5,6,7,8,9]
// num.forEach(num => console.log(num*2))

//includes method

// let num = [1,2,3,4,5,6,7,8,9]
// console.log(num.includes(10))

//indexOf method

// let num = [1,2,3,4,5,6,7,8,9]
// console.log(num.indexOf(7))

//lastIndexOf method
// let num = [1,2,3,4,5,6,1,8,9]
// console.log(num.lastIndexOf(1))

//isArray method

// let num = [1,2,3,4,5,6,7,8,9]
// console.log(Array.isArray(num))

 //join method
// let array = ["fire", "water", "sand", "grass"]
// // console.log(array.join("🔥"))
// console.log(array.join())

//keys method
// let array = ["fire", "water", "sand", "grass"]
// let keys = array.keys()
// for (const key of keys) {
//   console.log(key)
//   console.log(array[key])
// }
//map method

// let words = ["fire", "water", "sand", "grass"]
// let pics = ["🔥", "💧", "⏳", "🍏"]

// let map1 = words.map(word => word + pics[words.indexOf(word)])
// console.log(map1)

//of method
// let num = Array.of(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(num)

//push and pop method
// let num = [1, 2, 3, 4, 5, 6, 7, 8]
// num.push(9,10,11)
// console.log(num)
// num.pop()
// console.log(num)

//reduce method
// let num = [1,2,3,4,5,6,7,8]
// console.log(num.reduce((a, b) => a * b ))

//reduceRight method
// let num = [1,2,3,4]
// console.log(num.reduceRight((a, b) => a + (b/2)))

//reverse method

// let num = [1,2,3,4,5,6,7,8]
// console.log(num.reverse())

//shift method
// let array = ["fire", "water", "sand", "grass"]
// console.log(array.shift())
// console.log(array)

//slice method
// let array = ["fire", "water", "sand", "grass"]
// console.log(array.slice(1,4))


//some method
// const num = [1, 3, 7]
// console.log(num.some(n => n % 2 === 0))

//sort method
// const array = ["fire", "water", "sand", "grass"]
// const num = [1,2,4,5,6,7,8,9,10,17,11,12,13,14,15,16,18,3]
// console.log(num.sort((a, b) => a - b))

//splice method
// const num = [1,2,3,4,5,6,7,8]
// num.splice(1, 5 ,4, 5)
// console.log(num)

//tosrting method
// let num = [1,2,3,4,"5",6,7,8]
// const hello = num.toString()
// console.log(typeof hello)

//unshift method
// let one = [1,2,3,4,5,6,7,8]
// console.log(one.unshift(8,5))
// console.log(one)

//values method
// let ones = [1,2,3,4,5,6,7,8]
// for (const one of ones) {
//   console.log(one)
// }