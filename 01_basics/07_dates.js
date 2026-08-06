let myDate = new Date()

// console.log(myDate.toString())//Thu Aug 06 2026 13:38:12 GMT+0000 
// console.log(myDate.toDateString()) // =>Thu Aug 06 2026
// console.log(myDate.toLocaleDateString()) //=> 8/6/2026
// console.log(myDate.toLocaleTimeString())//1:41:11 PM but not valid
// console.log(myDate.toUTCString()) //Thu, 06 Aug 2026 13:42:47 GMT
// console.log(typeof myDate) // ImP interview ==> object

let myCreatedDate = new Date(2026, 0, 23,5,3,56)
// console.log(myCreatedDate.toDateString())//Fri Jan 23 2026
// console.log(myCreatedDate.toLocaleDateString()) // 1/23/2026
// console.log(myCreatedDate.toLocaleString())//1/23/2026, 5:03:56 AM

let newCreatedDate = new Date("11-28-2026")
//console.log(newCreatedDate.toLocaleString())//11/28/2026, 12:00:00 AM

let myTimeStamp = Date.now()
//console.log(myTimeStamp) // time in ms =1786024917075
//console.log(newCreatedDate.getTime()) // time in ms = 1795824000000
/* using both these valuse we compare both and from which date how much time is happening . use in Hotel room , live google form */

//console.log(Math.floor(Date.now()/1000)); // conver in sec 

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"Date"
})
/* we get suggetion about which type of fuction you want 
for that use "ctrl + space" */ 
