/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lengthDigits = digits.length; 
    for(let i=digits.length-1; i>=0; i--){
        if(digits[i] != 9){
            let partOne = digits.slice(0, i);
            let partOneString = partOne.join('');
            let partSecond = digits.slice(i);
            let partSecondString = partSecond.join('');
            let myVal = Number(partSecondString);
            myVal++;
            let myString = partOneString + String(myVal);
            return myString.split('');
        }
        if(i == 0){
            let newArray = new Array(lengthDigits).fill(0);
            newArray.unshift(1);
            return newArray;
        }
    }
};

// let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
let digits = [9, 9, 9];
console.log(plusOne(digits));