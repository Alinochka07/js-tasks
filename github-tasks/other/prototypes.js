var str = "fgfggg";
console.log(str[0]);


Number.prototype.plus = function (value) {
    return 2 + value;
}

let numb = 2;
let result = numb.plus();
console.log(result)


Number.prototype.minus = function (value) {
    return this - value;
}



Array.prototype.sort = function () {}
var t = [2, 1, 22];
t.sort()