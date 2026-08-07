//const tinderUser = new Object()
const tinderUser = {}
 
tinderUser.id = "123absc"
tinderUser.name = "Sanny"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userfullName:{
            firstName : "Swapnil",
            lastName : "pol"
        }
    }
}
//console.log(regularUser.fullName) // objects inside object 

//find key and value from the database 
// take example of tinderUser ; 
// console.log(Object.keys(tinderUser)) //=>[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser))//=>[ '123absc', 'Sanny', false ]
// console.log(Object.entries(tinderUser))//[ [ 'id', '123absc' ], [ 'name', 'Sanny' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//4:21 complete
