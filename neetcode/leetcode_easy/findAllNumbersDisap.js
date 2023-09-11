/**
 * @param {number[]} nums
 * @return {number[]}
 */
function generateRange(n1, n2){
    let res = [];
    for(let i=n1; i<=n2; i++){
        res.push(i);
    }
    return res; 
}
var findDisappearedNumbers = function(nums) {
    let sortedNums = nums.sort((a, b) => a-b);
    let rangeNumber = generateRange(1, sortedNums.length);
    let resArr = [];
    console.log('rangeNumber = ', rangeNumber);
    for(let i=0; i<rangeNumber.length; i++){
        if(!sortedNums.includes(rangeNumber[i])){
            resArr.push(rangeNumber[i]);
        }
    }
    return resArr; 
};

// let nums = [4, 3, 2, 7, 8, 2, 3, 1];
let nums = [2,2]; 
console.log(findDisappearedNumbers(nums));