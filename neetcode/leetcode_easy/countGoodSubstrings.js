/**
 * @param {string} s
 * @return {number}
 */
const isGood = (s) => {
    let myArr = s.split('');
    for(let i=0; i<myArr.length; i++){
        if(myArr.indexOf(myArr[i]) != myArr.lastIndexOf(myArr[i])){
            return false; 
        }
    }
    return true; 
}
var countGoodSubstrings = function(s) {
    let tempString = "";
    let count = 0;
    for(let i=0; i<=s.length-3; i++){
        tempString = s.slice(i, i+3);
        if(isGood(tempString)){
            count++;
        }
    }
    return count; 
};

let s = "xyzzaz";
console.log(countGoodSubstrings(s));