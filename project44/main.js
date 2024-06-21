// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(', '), "."));
}
make_sandwich('cheese', 'tomato');
make_sandwich('ketchup', 'Bbq chickin', 'lettuce');
make_sandwich('cucumber', 'onion', 'mayo', 'mustard');
