/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numsSorted = nums.sort((a, b) => a-b);
    let n = numsSorted.length;
    let lastVal = numsSorted[n-1];
    if(numsSorted.length == 1){
        if(numsSorted[0] == 1){
            return 0;
        }else{
            return numsSorted[0]+1;
        }
    }
    if(lastVal < n){
        return numsSorted[n-1]+1;
    }else if(lastVal == n && numsSorted[0] != 0){
        return numsSorted[0]-1; 
    }else{
        for(let i=0; i<numsSorted.length; i++){
            if(numsSorted[i]+1 != numsSorted[i+1]){
                return numsSorted[i+1]-1;
            }
        }
    }
};

// let nums = [9,6,4,2,3,5,7,0,1];
let nums = [0, 1];
console.log(missingNumber(nums));