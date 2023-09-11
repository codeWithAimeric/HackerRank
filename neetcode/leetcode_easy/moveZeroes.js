/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = nums.length; 
    for(let i=n-1; i>=0; i--){
        if(nums[i] == 0){
            nums.push(0);
            nums.splice(i, 1);
        }
    }
    return nums; 
};

let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));