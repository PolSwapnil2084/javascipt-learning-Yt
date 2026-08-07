//singleton

const mySym = Symbol("key1") // intetview =>define symbole under the object and print it

//object literals
const Jsuser ={
    name:"Swapnil",
    [mySym]:"mykey1",
    age : 23,
    location : "pune",
    email : "swapnila@google.com",
    isLoggedIn : false

}
// console.log(Jsuser.email)
// console.log(Jsuser["email"])  // => this is right way to access 
// console.log(Jsuser[mySym])

Jsuser.email = "swapnil@chatGpt.com"
// Object.freeze(Jsuser) // ufter lock the object we does't change the object
Jsuser.email = "swapnil@microsoft.com"
// console.log(Jsuser)

//fuctions
Jsuser.greeting = function(){
    console.log("hello Js users ") // =>hello Js users 
}
Jsuser.greetingTwo = function(){
    console.log(`hello Js users,${this.name} `) //=>hello Js users,Swapnil 
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())

/* jab bhi ham value ko access karate hai to dot (.) ka use karate hai , but some cases mai Squrebracket[] 
use karana important hai */

