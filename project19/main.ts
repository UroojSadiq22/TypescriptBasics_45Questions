// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.

let guests = ['Tame' , 'William' , 'Herry' , 'Tresa']

guests.forEach((i) => {
    console.log(`Hi ${i}, would you like to join me for dinner tomorrow?`)
})

let unableToAttend = 'William';
console.log(`${unableToAttend} not available to attend the dinner`);

let newGuest = 'Maxwell';
guests[guests.indexOf(unableToAttend)] = newGuest;

guests.forEach((i) => {
    console.log(`Hi ${i}, would you like to join me for dinner tomorrow?`)
})

console.log(`There will be ${guests.length} guests in the party`)