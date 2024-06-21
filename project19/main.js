// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
var guests = ['Tame', 'William', 'Herry', 'Tresa'];
guests.forEach(function (i) {
    console.log("Hi ".concat(i, ", would you like to join me for dinner tomorrow?"));
});
var unableToAttend = 'William';
console.log("".concat(unableToAttend, " not available to attend the dinner"));
var newGuest = 'Maxwell';
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(function (i) {
    console.log("Hi ".concat(i, ", would you like to join me for dinner tomorrow?"));
});
console.log("There will be ".concat(guests.length, " guests in the party"));
