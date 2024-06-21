// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// let magicians = ['David' , 'Shane' , 'Jack']
// function show_magicians(magicians){
//     magicians.forEach(x => {
//         console.log(x)
//     });
// }
// function make_great(magicians){
//     let greatMagicians = [];
//     magicians.forEach(x => {
//        greatMagicians.push(`${x} the Great`)
//     });
//     return greatMagicians
// }
// make_great(magicians);
// show_magicians(magicians);
var magicians = ['David', 'Shane', 'Jack'];
function show_magicians(magicians) {
    magicians.forEach(function (x) {
        console.log(x);
    });
}
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (x) {
        greatMagicians.push("".concat(x, " the Great"));
    });
    return greatMagicians; // Return the modified array
}
magicians = make_great(magicians); // Assign the modified array back to magicians
show_magicians(magicians);
// let magicians = ['David', 'Shane', 'Jack'];
// function show_magicians(magicians: string[]) {
//     magicians.forEach(x => {
//         console.log(x);
//     });
// }
// function make_great(magicians: string[]): string[] {
//     let greatMagicians = [];
//     magicians.forEach(x => {
//         greatMagicians.push(`${x} the Great`);
//     });
//     return greatMagicians;
// }
// magicians = make_great(magicians);
// show_magicians(magicians);
