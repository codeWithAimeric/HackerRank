/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    const n = nums.length;
    const prefixSum = Array(n).fill(0);
    const suffixSum = Array(n).fill(0);

    prefixSum[0] = nums[0];
    suffixSum[n - 1] = nums[n - 1];

    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
        suffixSum[n - i - 1] = suffixSum[n - i] + nums[n - i - 1];
    }

    console.log(prefixSum);
    console.log(suffixSum);

    const result = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const leftSum = i * nums[i] - prefixSum[i];
        const rightSum = suffixSum[i] - (n - i - 1) * nums[i];
        result[i] = leftSum + rightSum;
    }

    return result;
};

let nums =[1,4,6,8,10];
console.log(getSumAbsoluteDifferences(nums));