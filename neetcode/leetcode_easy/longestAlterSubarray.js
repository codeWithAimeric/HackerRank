/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
function longestAlternatingSubarray(nums, threshold) {
    let ans = 0;
    let dp = 0;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > threshold)
            dp = 0;
        else if (i > 0 && dp > 0 && isOddEven(nums[i - 1], nums[i]))
            ++dp;
        else
            dp = nums[i] % 2 === 0 ? 1 : 0;
        ans = Math.max(ans, dp);
    }

    return ans;
}

function isOddEven(a, b) {
    return a % 2 !== b % 2;
}


let nums = [3,2,5,4]; 
let threshold = 5;
console.log(longestAlternatingSubarray(nums, threshold));