/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let myArr = nums1.concat(nums2);
    myArr.sort((a, b) => a-b);
    let minVal = 0;
    let maxVal = 0;
    if(myArr.length % 2 == 0){
        minVal = (myArr.length / 2)-1;
        maxVal = myArr.length / 2;
        return (myArr[minVal]+myArr[maxVal])/2;
    }else{
        minVal = Math.floor(myArr.length/2);
        return myArr[minVal];
    }
};

let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));