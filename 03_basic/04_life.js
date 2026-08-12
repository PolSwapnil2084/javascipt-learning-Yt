// Immediate Invoked Fuction Expression (IIFE)
//========If we want our system immediately start database after creation
(function chai(){ // named IIFE 
    console.log(`DB CONNECTED`);
})();
/* ===#interview - Globle scope ke variables ke polution 
ko hatanae ke liye hamane IIFE ka use kiya hai . semicolon imp last me , usi se error atta hai  */

((name)=>{ // simple IIFE
    console.log(`DB CONNECTED TOO ${name}`) // usong arrow fuction
})('Swapnil');


