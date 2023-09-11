/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const numIndexMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (numIndexMap.has(nums[i]) && i - numIndexMap.get(nums[i]) <= k) {
            return true;
        }
        numIndexMap.set(nums[i], i);
    }
    
    return false;
};

// let nums = [1, 2, 3, 1]; 
// let k = 3;
let nums  = [1,0,1,1];
let k = 1; 
console.log(containsNearbyDuplicate(nums, k));