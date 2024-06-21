// Question 18: Seeing the World: Think of at least five places you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['Japan', 'Maldive', 'Srilanka', 'China', 'Turkey'];
console.log('Original Order: ', places);
console.log('Alphabetical Order: ', __spreadArray([], places, true).sort());
console.log('Reverse Order: ', __spreadArray([], places, true).reverse());
console.log('Reverse Alphabetical Order: ', __spreadArray([], places, true).sort().reverse());
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
