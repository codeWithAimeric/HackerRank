/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0; 
    let resArr = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 1){
            count++;
        }else{
            resArr.push(count);
            count = 0;
        }
    }
    resArr.push(count);
    return Math.max(...resArr);
};

let nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));