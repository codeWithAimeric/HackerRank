/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    /**
     * solution brute force
     */
    // let temp1 = [];
    // let temp2 = [];
    // let val = nums.reduce((a, b) => a+b, 0);
    // let tempRes = 0;
    // for(let i=0; i<nums.length; i++){
    //     for(let j=0; j<=i; j++){
    //         temp1 = nums.slice(j, i+1);
    //         tempRes = temp1.reduce((a, b) => a+b, 0);
    //         if(tempRes > val){
    //             val = tempRes;
    //         }
    //         temp1 = [];

    //     }
    //     for(let j=i+1; j<=nums.length; j++){
    //         temp2 = nums.slice(i, j+1);
    //         tempRes = temp2.reduce((a, b) => a+b, 0);
    //         if(tempRes > val){
    //             val = tempRes;
    //         }
    //         temp2 = [];
    //     }
    // }
    // return val; 
    if (nums.length === 0) return 0;
    
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        console.log('nums[i] =  ==', nums[i]);
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        console.log('currentSum = = = = =', currentSum);
        maxSum = Math.max(maxSum, currentSum);
        console.log('maxSum = = = = = =', maxSum);
    }
    
    return maxSum;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4]; 
// let nums = [-1, -2];
// let nums = [-2, 1]; 
// let nums = [1]
console.log(maxSubArray(nums));