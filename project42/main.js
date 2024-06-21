// Question 42: Great Magicians: Add "the Great" to magician names.
var magicians = ['David', 'Shane', 'Jack'];
function show_magicians(magicians) {
    magicians.forEach(function (x) {
        console.log(x);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = 'The Great ' + magicians[i];
    }
}
make_great(magicians);
show_magicians(magicians);
