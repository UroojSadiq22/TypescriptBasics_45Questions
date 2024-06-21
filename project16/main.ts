// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guests = ['Tame' , 'William' , 'Herry' , 'Tresa'];
console.log("I found more space for new guests");

guests.unshift('Kilane');
guests.splice(3, 0, "Rsyndyll");
guests.push('Fuena');

guests.forEach((i) => {
    console.log(`Hi ${i}, would you like to join me for dinner tomorrow?`);
})