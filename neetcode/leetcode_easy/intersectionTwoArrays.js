/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let resArr = [];
    for(let i=0; i<nums1.length; i++){
        if(nums2.includes(nums1[i])){
            if(!resArr.includes(nums1[i])){
                resArr.push(nums1[i]);
            }
        }
    }
    
    return resArr; 
};

let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
console.log(intersection(nums1, nums2));