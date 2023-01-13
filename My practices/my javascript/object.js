//assign method
// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const obj2 = {
//   a: "A",
//   b: "B",
//   c: "C"
// };

// const rt = Object.assign(obj1, obj2);
// console.log(obj1)
// // console.log(obj2)
// console.log(rt === obj1)
//assign method cloning

// const alpha = {
//   wolf: '🐺',
//   lion: '🦁'
// };

// const animal = Object.assign({}, alpha);
// console.log(animal)
// console.log(animal === alpha)

// const o1 = {a:1}
// const o2 = {b:2}
// const o3 = {c:3}

// const obj = Object.assign(o1, o2, o3);
// console.log(obj)
// console.log(o1) 

// const alpha = {
//   wolf: '🐺',
//   lion: '🦁',
//   pig: '🐖'
// }

// const beta = {
//   wolf: '🐄',
//   lion: '🐯',
// }
// const gama = {
//   pig: "🐍"
// }

// const animal = Object.assign({}, alpha, beta, gama);
// console.log(animal) 
// const obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
//   bar: {value: 2},
//   baz: {value: 3,enumerable: true}
// });
// const copy = Object.assign({}, obj);
// console.log(copy)

//create method
// const fish = {
//   whale: "🐋",
//   snail: "🐌",
//   rock: "🪨"
// }
// const newobj = Object.create(fish, {cock: {value: 1}});
// // newobj.catfish = "catfish"
// // newobj.snail = "⚠️"

// console.log(newobj.cock);

//defineProperties method
// const object1 = {}

// Object.defineProperties(object1, {
//   property: {
//     value: 1,
//     writable: true,
//     enumerable: true,
//   },
//   property2: {}
// });

// console.log(object1.property)

// const myobj = {};
// Object.defineProperty(myobj, "property", {
//   value: 22,
//   configurable: true
// });

// myobj.property = 32;

// Object.defineProperty(myobj, {property: {value: 1, writable: true}});

// console.log(myobj.property);

//entries method(static)
// const numbers = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for(const [key, value] of Object.entries(numbers)) {
//   console.log(`${key}: ${value}`);
// }
// console.log(Object.entries(numbers))

// console.log(Object.entries(numbers).length)

// console.log(Object.entries("foo"))

//writable, configurable, enumerable

//freeze method
// const animal ={
//   dog: "🐕",
//   cat: "🐚",
//   newanimal : {
//     cuckoo: "🐦",
//     crow: "👑"
//   }
// }

// Object.freeze(animal);

// animal.cat = "😺"
// console.log(animal.cat)
// animal.newanimal.crow = "🐖"
// console.log(animal.newanimal.crow);

// const entries = new Map(
//   [
//     ['foo', 'bar'],
//     ['baz', 31]
//   ]
// );

// const obj = Object.fromEntries(entries)
// console.log(obj)

// const animal = [
//   ["0", "a"],
//   ["1", "b"],
//   ["2", "c"]
// ]

// const obj = Object.fromEntries(animal)
// console.log(obj)

// const main_object = {
//   tm: "This method is used to",
//   wi: "What is",
//   ht: "How to"
// }

// const main_object2 = Object.fromEntries(
//   Object.entries(main_object).map(([key, value]) => [key, value + " no"])
// )
// console.log(main_object2)

//getOwnPropertyDescription
// const object1 = {
//   property1: 42
// };

// const descriptors1 = Object.getOwnPropertyDescriptors(object1);

// console.log(descriptors1.property1.writable);
// // expected output: true
// console.log(descriptors1.property1.configurable);
// console.log(descriptors1.property1.enumerable);
// console.log(descriptors1.property1.value);
// // expected output: 42

// getOwnpropertyNames()
// const food = {
//   pizza: "🍕",
//   avocado: "🥑",
//   noodles: "🍜"
// }

// console.log(Object.getOwnPropertyNames(food))
// console.log(Object.getOwnPropertyNames("bazz"))
//getOwnPropertySymbols
// const prototype1 = {}
// const object1 = Object.create(prototype1)
// console.log(Object.getPrototypeOf(object1) == prototype1)

//hasOwn method
// const occupation = {
//   doctor: "👩‍⚕",
//   lawyer: "🧑‍⚖️"
// }

// console.log(Object.hasOwn(occupation, 'doctor'))
// console.log(Object.hasOwn(occupation, 'toString'))

// hasOwnproperty method
// const animal = {
//   lion: "🦁",
//   tiger: "🐯",
//   whale: "🐳"
// }
// console.log(animal.hasOwnProperty("whale"))

//is method

// console.log(Object.is(NaN,undefined))
// console.log(Object.is("foo", "foo"))

//isExtensible method

// const animal = {
//   lion: "🦁",
//   tiger: "🐯",
//   whale: "🐳"
// }
// console.log(Object.isExtensible(animal))
// Object.preventExtensions(animal)
// animal.hole = "🕳"
// animal.tiger = "🥑"
// console.log(animal)

//isFrozen method

// const animal = {
//   lion: "🦁",
//   tiger: "🐯",
//   whale: "🐳"
// }
// // console.log(Object.isFrozen(animal))
// // Object.freeze(animal)
// Object.preventExtensions(animal)
// animal.lion = "🐬"
// animal.pig = "🐷"
// console.log(Object.isFrozen(animal))
// console.log(animal)

//isPrototypeOf method
// function Bar() {}
// function Foo() {}

// Bar.prototype = Object.create(Foo.prototype);

// const bar = new Bar();

// console.log(Foo.prototype.isPrototypeOf(bar));
// console.log(bar.isPrototypeOf(bar));


//isSealed method
// const bird = {
//   eagle: "🦅",
//   sparrow: "🐦",
//   chicken: "🐔"
// }

// console.log(Object.isSealed(bird))

// Object.seal(bird)

// bird.eagle = "🦁"

// delete bird.sparrow

// bird.fish = "🐟"

// console.log(bird)
// console.log(Object.isSealed(bird))


//keys method

// const bird = {
//   eagle: "🦅",
//   sparrow: "🐦",
//   chicken: "🐔"
// }

// console.log(Object.keys(bird))


//preventExtensions

// const family = {
//   father: "👨",
//   dracula: 1,
//   brother: "my name is barun"
// }

// Object.preventExtensions(family)

// family.dracula = "👻",
// family.elderBrother = "hello my name is tom"
// console.log(family)

// console.log(Object.isExtensible(family))

//propertyEnumerable method

// const everything = {
//   array: [1,2,3,4,5,6],
//   char: 'c',
//   fish: "🐬"
// }

// console.log(everything.propertyIsEnumerable('array'))
// console.log(everything.propertyIsEnumerable('char'))
// console.log(everything.propertyIsEnumerable('length'))


//values

// const family = {
//   father: "👨",
//   dracula: 1,
//   brother: "my name is barun"
// }

// console.log(Object.values(family))
