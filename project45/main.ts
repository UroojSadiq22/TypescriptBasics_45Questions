// Question 45: Cars: Create detailed car objects with flexible properties.

function make_car(menufacturer , model , ...options){
    let car = { menufacturer , model};
    options.forEach(([key , value]) => car[key] = value)
    return car;
}

console.log(make_car('Suzuki' , 'Alto' , ['color', 'red'] , ['year' , '2020']))
console.log(make_car('Toyota' , 'Corolla' , ['color', 'black'] , ['year' , '2017'] , ['sunroof' , true]))
