// Question 39: City Names: Formatting city-country pairs.
function city_country(city, country) {
    return "\"".concat(city, " , ").concat(country, "\"");
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Melbourne', 'Australia'));
console.log(city_country('Tokyo', 'Japan'));
