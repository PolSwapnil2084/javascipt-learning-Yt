
function sayMyname(){
    console.log("S")
    console.log("w")
    console.log("a")
    console.log("p")
    console.log("n")
    console.log("i")
    console.log("l")

}
// sayMyname()


// function addTwoNum(num1,num2){ 
//     console.log(num1+num2)
// }
// const result = addTwoNum(3,5);
// console.log("result",result)

function addTwoNum(num1,num2){ 
    //  let result = num1 + num2
     return num1 + num2;
 }
 const result=addTwoNum(5,3)
//  console.log("result",result)

//============================================
function loginUser(username){
    return `${username} just logged in`
}
//console.log(loginUser())  // undefined just logged in
//===========================================
function loginUser(username="sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUser("Swapnil")) //Swapnil just logged in
 
//===============shopping card=================

function calcCardprice(val1,val2,...num){//"..." is rest operator
    return num;

}
// console.log(calcCardprice(200,300,5000,400)) //[ 5000, 400 ]  val1 = 200, val2 = 300;

// ======pass object in fuction =========
function handleObject(anyobject){
    let ans=`The course user ${anyobject.userName} price ${anyobject.price} duration ${anyobject.duration} `
    // console.log(ans)
}
handleObject(course={
    userName:"Swapnil",
    price : 199,
    duration : " 6 months" 
})

//============Pass Array in fucion ========

const mynewArr = [200,300,400,500,600]

function returnsecondVal(getArray){
   return getArray[2]
}
// console.log(returnsecondVal(mynewArr))
// console.log(returnsecondVal([200,500,5000,676,545])) // also we direct call like this 

//========================================================================================
//===========================#Scope=========================================
//========================================================================================








