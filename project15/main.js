// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
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
