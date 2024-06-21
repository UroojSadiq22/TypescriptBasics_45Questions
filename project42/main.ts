// Question 42: Great Magicians: Add "the Great" to magician names.

let magicians = ['David' , 'Shane' , 'Jack']

function show_magicians(magicians){
    magicians.forEach(x => {
        console.log(x)
    });
}
function make_great(magicians){
    for(let i=0 ; i<magicians.length ; i++){
        magicians[i] = 'The Great ' + magicians[i]
    }
}

make_great(magicians);
show_magicians(magicians);