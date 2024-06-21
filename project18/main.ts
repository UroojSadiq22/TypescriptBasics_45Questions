// Question 18: Seeing the World: Think of at least five places you’d like to visit.

let places = ['Japan' , 'Maldive' , 'Srilanka' , 'China' , 'Turkey'];

console.log('Original Order: ' , places)

console.log('Alphabetical Order: ' , [...places].sort())

console.log('Reverse Order: ' , [...places].reverse())

console.log('Reverse Alphabetical Order: ' , [...places].sort().reverse())


places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);