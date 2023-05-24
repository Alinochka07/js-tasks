function highestFrequency(array) {
    const map = {};
    let maxFreq = 0;
    let maxFreqStr = array[0];

    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        if (map[current]) {
            map[current]++
        } else {
            map[current] = 1
        }

        if (map[current] > maxFreq) {
            maxFreq = map[current]
            maxFreqStr = current
            console.log(maxFreq) // 1, 2
            console.log(current)
        }
    }
    // console.log(current)
    console.log(maxFreq, maxFreqStr)

    return maxFreqStr;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // > c
