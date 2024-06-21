// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magicians = ['David', 'Shane', 'Jack'];

function show_magicians(magicians) {
    magicians.forEach(x => {
        console.log(x);
    });
}

function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(x => {
        greatMagicians.push(`${x} the Great`);
    });
    return greatMagicians;
}

magicians = make_great(magicians);
show_magicians(magicians);