// Array
const myArr = [0,11,21,5,9,8]
//console.log(myArr[3])
const name = ["ram","shyam"]
//console.log(name[0])

// Array Method 
myArr.push(6) //=> add at end
myArr.pop() // => remove frome end 
myArr.unshift(9)//=> add at begining 
myArr.shift() //=> remove from end 

// we ask Q to arr 
// console.log(myArr.includes(5)) // => true
// console.log(myArr.indexOf(4)) // nahi hai -1

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr) 
// console.log(typeof newArr) // join convert arr into String 

// slice and splice 
//console.log(myArr) // A [ 0, 1, 2, 5, 9, 8 ]
const myn1 = myArr.slice(0,3)
// console.log(myn1)
// console.log(myArr) // not  in original arr 
const myn2 = myArr.splice(0,3)
// console.log(myn2)
// console.log(myArr) // Permanat change in the original arr