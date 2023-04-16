/*
 * Complete the 'pairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function pairs(k, arr) {
    // Write your code here
    let count = 0;
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(Math.abs(arr[j] - arr[i]) == k){
                console.log('arr[i]--', arr[i]);
                console.log('arr[j]--', arr[j]);
                count++;
                console.log('count-----', count);
            }
        }
    }
    return count; 
}

let arr = [1, 5, 3, 4, 2];
let k = 2; 
console.log(pairs(k, arr));