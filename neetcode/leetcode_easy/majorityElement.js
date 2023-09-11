/**
 * @param {number[]} nums
 * @return {number}
 */
function getKeyByValue(obj, value) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === value) {
            return key;
        }
    }
    return null; 
}
var majorityElement = function(nums) {
    let n = Math.floor(nums.length/2);
    let count = 1;
    let myObj = {};
    if(nums.length == 1){
        return nums[0];
    }
    for(let i=0; i<nums.length-1; i++){
        for(let j=0; j<nums.length; j++){
            if(i == j){
                continue; 
            }
            if(nums[i] == nums[j]){
                count++;
            }
        }
        myObj[nums[i]] = count; 
        count = 1;
    }
    let resArr = Array.from(Object.values(myObj));
    let valMax = Math.max(...resArr);
    return getKeyByValue(myObj, valMax);
};

// let nums = [2, 2, 1, 1, 1, 2, 2];
let nums =[4,5,4];
console.log(majorityElement(nums));