/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - k;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return arr.slice(left, left + k);
};

let arr = [1,2,3,4,5];
let k = 4;
let x = 3;
console.log(findClosestElements(arr, k, x));