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
