/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let minVal = 0;
    let maxVal = nums.length-1;
    while(minVal <= maxVal){
        let mid = Math.floor((minVal+maxVal) / 2);
        if(target > nums[mid]){
            minVal = mid+1;
        }else if(target < nums[mid]){
            maxVal = mid-1;
        }else{
            return mid
        }
    }
    return -1; 
};
var searchMatrix = function(matrix, target) {
    let flatArray = matrix.flat();
    return search(flatArray, target) == -1 ? false : true; 
};