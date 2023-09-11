/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let sortedNums = nums.sort((a, b) => a-b);
    let resArr = [];
    for(let i=0; i<sortedNums.length; i++){
        if(!resArr.includes(sortedNums[i])){
            resArr.push(sortedNums[i]);
        }
    }
    let n = resArr.length-3; 
    console.log(resArr);
    if(resArr.length < 3){
        return resArr[resArr.length-1];
    }else if(resArr.length == 3){
        return resArr[0]; 
    }else{
        return resArr[n];
    }
};

let nums = [1,2,2,5,3,5];
console.log(thirdMax(nums));