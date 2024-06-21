// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
var guests = ['Tame', 'William', 'Herry', 'Tresa'];
guests.forEach(function (i) {
    console.log("Hi ".concat(i, ", would you like to join me for dinner tomorrow?"));
});
console.log("Oops! Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removeGuest = guests.pop();
    console.log("Sorry! ".concat(removeGuest, ", I'm not able to invite you to dinner."));
}
guests.forEach(function (i) {
    console.log("Hi ".concat(i, ", you can still join me for dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
