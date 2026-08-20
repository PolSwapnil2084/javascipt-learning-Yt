for(let i =0; i<2; i++){
   for(let j =0;j<=2; j++){
   //console.log(`${j}`);
   }
}
// selecting same word in the code and chage it "ctrl+D"

//==============Keyword=============
//1.break and 2. continue 
for(let i =0; i<20; i++){
    if(i==5){
        // console.log(`Detected`)
        continue;
    }
    // console.log(`${i}`)
} 
// time line 7:49 
//====================================
const arr =[1,2,3,4,5]
for(const num of arr){
    // console.log(num);
}

const greeting = "hello world"
for(const greet of greeting){
    // console.log(`${greet}`)
}

// Maps  - Unique Ley-value Pair , arranged in user given order 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
map.set('Fr',"France")
// console.log(map);    //'IN' => 'India',.......

for(const key of map){
    // console.log(key);  //[ 'IN', 'India' ].....
}

for(const [key,value] of map){
    // console.log(key , ':-',value) //IN :- India ,....
}

const myObject = {
    'game1' : 'NFS',
    'game2'  : 'spiderman'
}
for(const [key,value]of myObject){
    // console.log(key , ':-', value)  // myObject is not iterable
}