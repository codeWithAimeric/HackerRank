/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    let aCount = 0;
    const strLength = s.length;
    const fullRepetitions = Math.floor(n / strLength);
    const remainder = n % strLength;

    for (let i = 0; i < strLength; i++) {
        if (s[i] === 'a') aCount++;
    }

    let totalCount = aCount * fullRepetitions;
    for (let i = 0; i < remainder; i++) {
        if (s[i] === 'a') totalCount++;
    }

    return totalCount;
}

let s='gfcaaaecbg';
let n=547602;
console.log(repeatedString(s, n));

// console.log(("abcacabcac".match(new RegExp("a", "g")) || []).length);
