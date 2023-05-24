function favoriteSport() {
    console.log(sport);
}

function otherSport() {
    const sport = 'volleyball';
    favoriteSport();
}
const sport = 'basketball';
otherSport();

// output ->> basketball




var foo = 31337;
var bar = function() {
    baz();
    var baz = function() {
        console.log(foo)
    }
}
bar(); // output ->> error, baz is not a function.



let a = x => (x, 1, 2, 3);
let res = a(5);

console.log(res); // 3
console.log(a); // [Function: a]




var x = 5;
for (let i = 0; i < x; i++) {
    console.log(i); // --> 0, 1, 2, 3, 4
}

console.log(i); // ошибочка. i is not defined. 



