var c =300  //Globale scope 
if(true){
    let a = 10 ;  // Block scope
    const b =20 ;
}
// console.log(a); 
//console.log(b); 
//console.log(c); 

/* Scope : Ham globle scope variables ko block scope ke under define nahi kar sakte 
but ham block scope variables ko bahar print kar sakte hai ,
but "var" ko ham print kar sakte hai .
Scope means "{}"  */

//=============================================================================================

function one (){
    //const username = "swapnil"

    function two(){
        //const website = "youtube"
        //console.log(username);
    }
    //console.log(website);

    //two()
}
//one()

//===========================================================================================
if(true){
    // username ==="Swapnil" // error , only use "=", same define as if(username).
    if(username ="Swapnil"){
        const website ="  youtube"
        //console.log(username + website)
    }
    //console.log(website);

}
//console.log(username)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//console.log(addone(10)) // agar ham isko fuction ke pehele bhi call kar sakte hai 
function addone(num){
    return num + 1;
}
//addTwo(5)// but ham storage ko fuction ke pehel call nahikar sakte 
const addTwo = function (num){
    return num +2;
}


