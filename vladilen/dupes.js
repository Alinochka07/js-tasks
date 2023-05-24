function removeDupes(str) {
    return Array.from(new Set(str)).join('')
}

console.log(removeDupes('abcd')) // abcd