/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length < 2) {
        return 0; 
    }

    let jumps = 0;
    let currentJumpEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        
        if (i === currentJumpEnd) {
            jumps++;
            currentJumpEnd = farthest;

            if (currentJumpEnd >= nums.length - 1) {
                break;
            }
        }
    }

    return jumps;
};

let nums = [2,3,1,1,4];
console.log(jump(nums));