// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.forEach(function (i) {
    var suffix = 'th';
    if (i === 1) {
        suffix = 'st';
    }
    else if (i === 2) {
        suffix = 'nd';
    }
    else if (i === 3) {
        suffix = 'rd';
    }
    console.log("".concat(i, " ").concat(suffix));
});
