//console.log("if else condition")
// today we learn if else , && , || 
// =======shift + alt + down arrow --->duplicate / copy past

//==================Truthy value================
const userEmail = []
if(userEmail){
    console.log("got user email");
} else {
    console.log("Don't have user Email");
}

// falsy value --> false , 0 , -0 , BigInt 0n , "", null , undefined , NaN

//Truthy value -> "0" , 'false' , " ", [], {}, function(){}

// array define in condition 
if(userEmail.length===0){
    console.log("Array is empty");
}


// object define in condition 
const emptyObj ={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//  false ==0 --> true 
// false == ''  --> true
// 0=='' ---> true

//  ====== Nllish coalescing Operator (??) : null undefined
let val1 ;
// val1 = 5 ?? 10 //5
// val1 =null ?? 20  // 20 
// val1 = undefined ?? 15 // 15 
// val1 = null ?? 22 ?? 13  //  22
console.log(val1);

// Terniary Opretor     condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("price grater than 80") : console.log("Price is less than 80 ");

// timeLine  7:14 complete  


