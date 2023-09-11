/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        if (s.length % i === 0) {
            let subStr = s.substring(0, i);
            let repeatedStr = subStr.repeat(s.length / i);
            if (repeatedStr === s) {
                return true;
            }
        }
    }
    return false;
};

let s = "ababbb";
console.log(repeatedSubstringPattern(s));