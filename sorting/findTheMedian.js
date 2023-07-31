/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    // Write your code here
    arr.sort((a, b) => a-b);
    let index = Math.floor(arr.length/2);
    return arr[index];
}

let arr = [0, 1, 2, 4, 6, 5, 3];
console.log(findMedian(arr));