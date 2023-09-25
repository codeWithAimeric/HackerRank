/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if(s.length < k){
        return 0;
    }

    let myMap = new Map();
    for (let i=0; i < s.length; i++) {
        if(!myMap.has(s[i])){
            myMap.set(s[i], 1);
        }else{
            myMap.set(s[i], myMap.get(s[i])+1);
        }
    }    
    for(let[char, count] of myMap){
        if(count < k){
            let maxSubString = 0;
            const substrings = s.split(char);
            for(let substring of substrings){
                maxSubString = Math.max(maxSubString, longestSubstring(substring, k));
            }
            return maxSubString;
        }
    }
    return s.length;
};

let s = "aaabb";
let k = 3;
console.log(longestSubstring(s, k));