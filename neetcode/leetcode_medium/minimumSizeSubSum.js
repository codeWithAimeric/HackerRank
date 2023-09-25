/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {  
    let left = 0;
    let minLength = Infinity;
    let currentSum = 0;
    
    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];
        console.log('currentSum = = = = ', currentSum);

        while (currentSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            console.log('minLength = = = =', minLength);
            currentSum -= nums[left];
            console.log('currentSum in while -----', currentSum); 
            left++;
        }
    }
    
    return minLength !== Infinity ? minLength : 0;
};

let target = 7;
let nums = [2,3,1,2,4,3];
// let target = 11; 
// let nums = [1,1,1,1,1,1,1,1];
console.log(minSubArrayLen(target, nums));