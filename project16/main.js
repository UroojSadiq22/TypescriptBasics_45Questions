// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var guests = ['Tame', 'William', 'Herry', 'Tresa'];
console.log("I found more space for new guests");
guests.unshift('Kilane');
guests.splice(3, 0, "Rsyndyll");
guests.push('Fuena');
guests.forEach(function (i) {
    console.log("Hi ".concat(i, ", would you like to join me for dinner tomorrow?"));
});
