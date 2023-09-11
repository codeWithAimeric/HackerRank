/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.includes(target)){
        return [-1, -1];
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i] == target){
            return [nums.indexOf(nums[i]), nums.lastIndexOf(nums[i])];
        }
    }
};

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target)); 