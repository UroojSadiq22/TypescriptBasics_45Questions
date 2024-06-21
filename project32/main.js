// Question 32: Checking Usernames: Ensure uniqueness in usernames.
var currentUsers = ['Tame', 'shane', 'tresa', 'rodulf', 'milake'];
var newUsers = ['flavia', 'tame', 'hong', 'rodulf', 'janny'];
newUsers.forEach(function (i) {
    if (currentUsers.some(function (x) { return x.toLowerCase() === i.toLowerCase(); })) {
        console.log("".concat(i, " will need to enter a new username"));
    }
    else {
        console.log("".concat(i, " is available"));
    }
});
