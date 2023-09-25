/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val= init; 
    let temp = init;
    if(0 == nums.length){
        return val; 
    }
    for(let i=0; i<nums.length; i++){
        val = fn(temp, nums[i]);
        temp = val;
    }
    return val; 
};

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) { return accum + curr; };
let init = 0;
//expected 10
console.log(reduce(nums, fn, init));