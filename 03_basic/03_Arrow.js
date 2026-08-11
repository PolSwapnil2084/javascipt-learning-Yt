const user = {
    username:"swapnil",
    price: 199,

    welcomeMessage : function(){
        // console.log(`${this.username} welcome to website`);
        
    }
}
// user.welcomeMessage()  //swapnil welcome to website
// user.username = "sam"
// user.welcomeMessage()//swapnil welcome to website   sam welcome to website

// ===================Arrow fuction===========================

// const chai = function (){
//     let username = "swapnil"
//     console.log(this.username);
// }
// chai();

//         =====//\\====(Arrow fuction)
const chai = () =>{
    let username = "swapnil"
    // console.log(this);
}
chai()

//===============================================================

// const addTwo = (num1, num2) => {
//     return num1 + num2
//}
//console.log(addTwo(3,5))
 

// ===========Implicite fuction ============
// const addTwo = (num1 ,num2) => num1 + num2    
// console.log(addTwo(3,3))


// const addTwo = (num1 ,num2) => (num1 + num2)  // with carlibasis no return word 
// const addTwo = (num1 ,num2) => ({username:"swapnil"}) // using object 


//console.log(addTwo(3,3))

// 5:48 Completed   
