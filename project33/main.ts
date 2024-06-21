// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let number = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

number.forEach(i => {
    let suffix = 'th';
    if(i === 1){
        suffix = 'st'
    }
    else if(i === 2){
        suffix = 'nd'
    }
    else if(i === 3){
        suffix = 'rd'
    }
    console.log(`${i}${suffix}`)
});