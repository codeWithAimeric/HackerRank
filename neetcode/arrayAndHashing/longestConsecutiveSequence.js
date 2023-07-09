/**
 * @param {number[]} nums
 * @return {number}
 */
function qSort(arr){
    if(arr.length == 0){
        return [];
    }
    let left = [];
    let right = [];
    let pivot = arr[0];
    for(let i=1; i<arr.length; i++){
        if(pivot > arr[i]){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}

var longestConsecutive = function(nums) {
    let count = 1; 
    let resArray = [];
    let mySet = new Set(nums);
    let nums2 = Array.from(mySet);
    let sortedArray = qSort(nums2); 
    if(nums.length == 0){
        return 0;
    }
    for(let i=0; i<sortedArray.length; i++){
        if(sortedArray[i+1] == sortedArray[i]){
            continue; 
        }
        if(sortedArray[i+1] == sortedArray[i]+1){
            count++;
        }else{
            resArray.push(count);
            count = 1; 
        }
    }
    return Math.max(...resArray);
};


// let nums = [200, 4, 100, 1, 2, 3];
let nums = [0,3,7,2,5,8,4,6,0,1];
// let nums = [1,2,0,1];
console.log(longestConsecutive(nums));