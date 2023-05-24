function isUnique(string) {
    // #1 
    // for (let i = 0; i < string.length; i++) {
    //     const char = string[i];

    //     if (string.lastIndexOf(char) !== i)
    //     return false
    // }
    // return true


// #2
    // const set = new Set();
    // for (let i = 0; i < string.length; i++) {
    //     const char = string[i]

    //     if (set.has(char)) {
    //         return false
    //     }
    //     set.add(char)
    // }
    // return true

// #3
    return new Set(string).size === string.length
}

console.log(isUnique('abcdef')); // true
console.log(isUnique('1234567')); // true
console.log(isUnique('abcABC')); // true
console.log(isUnique('abcadef')); // false