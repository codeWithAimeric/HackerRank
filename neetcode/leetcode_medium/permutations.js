/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    const backtrack = (tempArr) => {
        if(tempArr.length == nums.length){
            result.push(tempArr.slice());
            return;
        }

        for(let i=0; i<nums.length; i++){
            if(tempArr.includes(nums[i])){
                continue; 
            }
            tempArr.push(nums[i]);
            backtrack(tempArr);
            tempArr.pop();
        }
    }
    
    backtrack([]);
    return result;
};

let nums = [1, 2, 3];
console.log(permute(nums));