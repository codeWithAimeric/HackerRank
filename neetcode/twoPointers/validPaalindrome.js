/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s == " "){
        return true;
    }
    let arrayString = s.split('');
    for(let i=arrayString.length-1; i>=0; i--){
        const value = arrayString[i];
        if (typeof value === 'string') {
            if (/^[a-zA-Z]+$/.test(value)) {
              continue; 
            } else if (/^\d+$/.test(value)) {
              continue; 
            } else {
              arrayString.splice(i, 1);
            }
        } else {
            arrayString.splice(i, 1);
        }
    }
    let stringLowerCase = arrayString.join('').toLowerCase();
    let reverseString = arrayString.reverse().join('').toLowerCase();
    if(stringLowerCase == reverseString){
        return true;
    }else{
        return false; 
    }
};

let s = "A man, a plan, a canal: Panama";
// let s = " ";

console.log(isPalindrome(s));