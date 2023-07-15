/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    console.log('brackets  = = = = =', brackets);
    console.log('s = = = = = =', s);
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (brackets[char]) {
            stack.push(char);
            console.log('stack = = = = =', stack);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const lastOpenBracket = stack.pop();
            console.log('lastOpenBracket = = = = ==', lastOpenBracket);
            if (brackets[lastOpenBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
 
// let s = "()[]}";  //false
let s = "()[]{}"; //true
console.log(isValid(s));


