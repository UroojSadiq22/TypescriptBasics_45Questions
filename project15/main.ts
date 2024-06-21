// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

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
