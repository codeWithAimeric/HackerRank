/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    // Write your code here
    const ans = [];
    
    while (arr.length > 0) {
        ans.push(arr.length);
        const minVal = Math.min(...arr);
        arr = arr.filter(stick => stick > minVal).map(stick => stick - minVal);
    }
    
    return ans;
}
module.exports = cutTheSticks;

let arr = [5, 4, 4, 2, 2, 8]; //[ 6, 4, 2, 1 ]
//let arr = [1, 2, 3, 4, 3, 3, 2, 1]; //[ 8, 6, 4, 1 ]
console.log(cutTheSticks(arr));