/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }
            
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return closestSum;
};


// let nums = [-1, 2, 1, -4];
// let target = 1; 
// let nums = [0, 1, 2]; 
// let target = 0; 
let nums = [4,0,5,-5,3,3,0,-4,-5]; 
let target = -2; 
console.log(threeSumClosest(nums, target)); 