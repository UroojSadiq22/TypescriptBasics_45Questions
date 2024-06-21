// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let currentUsers = ['Tame' , 'shane' , 'tresa' , 'rodulf' , 'milake'];

let newUsers = ['flavia' , 'tame' , 'hong' , 'rodulf' , 'janny']

newUsers.forEach((i)=>{
    if(currentUsers.some(x=>  x.toLowerCase() === i.toLowerCase())){
        console.log(`${i} will need to enter a new username`)
    }
    else{
        console.log(`${i} is available`)
    }
})