/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let resArr = [];
 if(nums.length == 1){
     return parseFloat(nums[0].toFixed(5)); 
 }
 let tempVal = 0;
 for (let i = 0; i <= nums.length - k; i++) {
     for(let j=i; j<i+k; j++){
       tempVal += nums[j];
     }
     let val = tempVal/k;
     resArr.push(val);
     tempVal = 0;
 }

 let formattedArr = resArr.map(value => parseFloat(value.toFixed(5)));
 return Math.max(...formattedArr);
};

let nums = [1,12,-5,-6,50,3];
let k =4;
console.log(findMaxAverage(nums, k));