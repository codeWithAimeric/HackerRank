/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let resArr = [];
    let isEnd = false; 
    for(let i=0; i<nums.length; i++){
        let incr = 1; 
        if(isEnd){
            break; 
        }
        if(i==nums.length-1){
            resArr.push(`${nums[i]}`);
        }
        for(let j=i+1; j<nums.length; j++){
            if(j == nums.length-1 && nums[i]+incr == nums[j]){
                resArr.push(`${nums[i]}->${nums[j]}`);
                isEnd = true; 
                break;
            }
            if(nums[i]+incr != nums[j]){
                if(j-i-1 == 0){
                    resArr.push(`${nums[i]}`);
                }else{
                    let tempRange = `${nums[i]}->${nums[j-1]}`;
                    resArr.push(tempRange);
                }
                i = j-1; 
                break;
            }else{
                incr++;
                continue; 
            }
        }
    }
    return resArr;
};

let nums = [0, 1, 2, 4, 5, 7];
// let nums = [0,2,3,4,6,8,9]; 
console.log(summaryRanges(nums));
