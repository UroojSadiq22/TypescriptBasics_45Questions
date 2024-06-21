// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.

let names = [ 'Aliyah' , 'Maryam' , 'Amber' , 'Saira' , 'Adina'];
// let message = "Thank You for everything you do for me!"

for(let i=0 ; i<names.length ; i++ ){
    console.log(`Hello ${names[i]}, Thank You for everything you do for me!`)
}