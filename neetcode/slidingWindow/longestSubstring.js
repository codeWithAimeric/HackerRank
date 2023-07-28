/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s == " "){
        return 1;
    }
    let myArr = s.split('');
    let tempArr = [];
    let resArr = [];
    for(let i=0; i<myArr.length; i++){
        for(let j=i; j<myArr.length; j++){
            if(!tempArr.includes(myArr[j])){
                tempArr.push(myArr[j]);
            }else{
                break;
            }
        }
        resArr.push(tempArr.length);
        tempArr = [];
        tempArr.push(myArr[i]);
    }
    return resArr.length == 0 ? 0 : Math.max(...resArr);
};

// let s = "abcabcbb"; // 3
let s = "bbbbb"; //1
// let s = "aab";
console.log(lengthOfLongestSubstring(s));