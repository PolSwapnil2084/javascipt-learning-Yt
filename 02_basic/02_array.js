const fistName = ["Swapnil","Ram"]
const lastName = ["pol","khare"]
// fistName.push(lastName)
// console.log(fistName);
const newName = fistName.concat(lastName)
// console.log(newName);


// spred oprator 
const newNamefull = [...fistName,...lastName]
// console.log(newNamefull)

// console.log(Array.isArray("Swapnil")) //=> false
// console.log(Array.from("Swapnil"))
console.log(Array.from({name: "Swapnil"})) // => interview

let score1 =100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]
