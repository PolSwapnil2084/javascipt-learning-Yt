const myObject ={
    js : 'javaScipt',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}
for(const key in myObject){ // for in 
    // console.log(myObject); 
 /* { js: 'javaScipt',cpp:'c++',rb:'ruby', swift: 'swift by apple' } */
    //console.log(myObject[key]);
}

const programming = ["js" ,"cpp", "py" ,"java"]
for(const key in programming){
    //console.log(programming[key]);
}

//=====================for each loop ===========
const coding = ["js" ,"cpp", "py" ,"java"]
//usong fucntion
coding.forEach( function (val){
    console.log(val);
})


