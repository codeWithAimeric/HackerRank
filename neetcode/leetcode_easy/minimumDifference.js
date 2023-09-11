/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (k === 1) {
        return 0;
    }
    
    nums.sort((a, b) => a - b);
    
    let minDiff = Infinity;
    
    for (let i = 0; i <= nums.length - k; i++) {
        const currentDiff = nums[i + k - 1] - nums[i];
        minDiff = Math.min(minDiff, currentDiff);
    }
    
    return minDiff;
};

let nums = [9,4,1,7];
let k=2;
console.log(minimumDifference(nums, k));