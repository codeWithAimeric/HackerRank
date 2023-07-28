/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const tMap = new Map();
    for (const char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    let left = 0;
    let minWindowLength = Infinity;
    let minWindowStart = 0;
    let remainingCharsToCover = t.length;

    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];

        if (tMap.has(rightChar)) {
        tMap.set(rightChar, tMap.get(rightChar) - 1);
        if (tMap.get(rightChar) >= 0) {
            remainingCharsToCover--;
        }
        }

        while (remainingCharsToCover === 0) {
        const windowLength = right - left + 1;
        if (windowLength < minWindowLength) {
            minWindowLength = windowLength;
            minWindowStart = left;
        }

        const leftChar = s[left];
        if (tMap.has(leftChar)) {
            tMap.set(leftChar, tMap.get(leftChar) + 1);
            if (tMap.get(leftChar) > 0) {
            remainingCharsToCover++;
            }
        }

        left++;
        }
    }

    return minWindowLength === Infinity ? '' : s.substr(minWindowStart, minWindowLength);
};

// let s = "ADOBECODEBANC"; 
// let t = "ABC";
let s = "ab";
let t = "b";
console.log(minWindow(s, t));
