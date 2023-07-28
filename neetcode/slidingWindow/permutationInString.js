/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    
    const s1Map = new Array(26).fill(0);
    const s2Map = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);
    for (let i = 0; i < s1.length; i++) {
    s1Map[s1.charCodeAt(i) - aCharCode]++;
    s2Map[s2.charCodeAt(i) - aCharCode]++;
    }

    for (let i = 0; i <= s2.length - s1.length; i++) {
    if (s1Map.join('') === s2Map.join('')) {
        return true;
    }

    if (i + s1.length < s2.length) {
        s2Map[s2.charCodeAt(i) - aCharCode]--;
        s2Map[s2.charCodeAt(i + s1.length) - aCharCode]++;
    }
    }
    
    return false;
};

  
let s1 = "prosperity"
let s2 = "properties";
console.log(checkInclusion(s1, s2));