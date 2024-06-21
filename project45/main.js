// Question 45: Cars: Create detailed car objects with flexible properties.
function make_car(menufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { menufacturer: menufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car('Suzuki', 'Alto', ['color', 'red'], ['year', '2020']));
console.log(make_car('Toyota', 'Corolla', ['color', 'black'], ['year', '2017'], ['sunroof', true]));
