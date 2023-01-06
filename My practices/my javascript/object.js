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
