// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwich(...items){
    console.log(`Making a sandwich with: ${items.join(', ')}.`)
}

make_sandwich('cheese' , 'tomato');
make_sandwich('ketchup' , 'Bbq chicken' , 'lettuce'); 
make_sandwich('cucumber' , 'onion' , 'mayo' , 'mustard');