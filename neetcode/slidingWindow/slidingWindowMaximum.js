/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // let tempArr = [];
    // let resArr = [];
    // while(nums.length > 0){
    //     let copyArr = Array.from(nums);
    //     if(nums.length < k){
    //         break; 
    //     }
    //     for(let i=0; i<k; i++){
    //         tempArr.push(copyArr[copyArr.length-1]);
    //         copyArr.pop();
    //     }
    //     nums.pop();
    //     resArr.push(Math.max(...tempArr));
    //     tempArr = [];
    // }
    // return resArr.reverse();

    const result = [];
    const deque = []; 

    for (let i = 0; i < nums.length; i++) {
        if (deque.length > 0 && deque[0] < i - k + 1) {
            console.log('deque in before shift = = = =', deque);
            deque.shift(); 
        }

        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            console.log('deque in while before pop  = = = ==', deque);
            deque.pop(); 
        }

        deque.push(i); 

        if (i >= k - 1) {
            result.push(nums[deque[0]]);
            console.log("result after push if i>=k-1 = =  =", result);
        }
    }

    return result;
};

let nums = [1,3,-1,-3,5,3,6,7];
let k = 3;
// let nums = [1,-1];
// let k= 1;
console.log(maxSlidingWindow(nums, k));
