// console.log("hello")
const gameName = new String('Swapnil')
// console.log(gameName.toUpperCase())
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,5)
console.log(newString)

const anatherString = gameName.slice(-8,3)
//console.log(anatherString)
/* slice (start , end+1), if we pass -ve value then he convert 
it into length-value and print pice of string */

const newstringone = "     Swapnil      "
//onsole.log(newstringone)
//console.log(newstringone.trim())
/* trim is white spaces from the string , but he don't remove 
inside string like "swa  pnil" . */

const url = "https://refactored-Swapnil-pj4745-q74465346r.github.dev/"
console.log(url.replace('-','ABC'))
/* THe replace fuction the string's some part with anathe string . when we replace time pls use '' else he sho error */

//console.log(url.includes('Swapnil')) // ye string mai hai kya ? 

// console.log(url.split('-')) // he slipt the str on the basis of '-'
