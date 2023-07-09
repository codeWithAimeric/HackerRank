/**
 * @param {number[]} nums
 * @return {number[]}
 */
function multiplyValInTab(tab){
    return tab.reduce((a, b) => a*b, 1);
}
var productExceptSelf = function(nums) {
    let tempTab1 = [];
    let tempTab2 = [];
    let tempTab = [];
    let tempRes = 0; 
    let resTab = [];
    for(let i=0; i<nums.length; i++){
        if(i == 0){
            tempTab = nums.slice(1, nums.length);
            tempRes = multiplyValInTab(tempTab);
            resTab.push(tempRes);
        }else if(i == nums.length-1){
            tempTab = nums.slice(0, nums.length-1);
            tempRes = multiplyValInTab(tempTab);
            resTab.push(tempRes);
        }else{
            tempTab1 = nums.slice(0, i);
            tempTab2 = nums.slice(i+1, nums.length);
            tempTab = tempTab1.concat(tempTab2);
            tempRes = multiplyValInTab(tempTab);
            resTab.push(tempRes);
        }
    }
    return resTab;
};


let nums = [1,2,3,4];
console.log(productExceptSelf(nums));