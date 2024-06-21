// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

// equality with strings
let fruit = 'mango'
console.log("Testing equality with strings:");
console.log(fruit == "mango"); // True
console.log(fruit == "Mango"); // False

// using the lower case function
console.log("Testing with lower case:");
console.log(fruit.toUpperCase() == "MANGO"); // True

// numerical tests
console.log("Numerical tests:");
console.log(5 > 1); // True
console.log(14 < 9); // False

// tests by using AND and OR operators
console.log("Tests with AND and OR:");
console.log(true && false); // False
console.log(true || false); // True

// Test an item in a array
let fruits = ['apple', 'banana', 'mango' , 'pineapple'];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes('apple')); // True
console.log(fruits.includes('guave')); // False

console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True