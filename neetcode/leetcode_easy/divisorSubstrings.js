/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let myNumber = num.toString();
    let count = 0;
    for(let i=0; i<=myNumber.length-k; i++){
        let tempArr = myNumber.slice(i, i+k);
        let tempVal = parseInt(tempArr);
        if(myNumber % tempVal == 0){
            count++;
        }
    }
    return count; 
};

let num = 430043;
let k = 2;
console.log(divisorSubstrings(num, k));