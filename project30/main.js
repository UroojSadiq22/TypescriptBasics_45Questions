// Question 30: Hello Admin: Greet users differently, especially 'admin'.
var users = ['user1', 'user2', 'admin', 'user3', 'user4'];
for (var i = 0; i < users.length; i++) {
    if (users[i] === 'admin') {
        console.log('Hello Sir, may i come in?');
    }
    else {
        console.log("Hello ".concat(users[i], ", Thank you for reaching out us"));
    }
}
