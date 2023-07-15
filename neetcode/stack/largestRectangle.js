/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let width = 1;
    let temp = 0;
    let val = 0;
    const stack = [];
    if(heights.length == 1){
        return heights[0];
    }
    stack.push(heights[0]);
    for(let i=0; i<heights.length-1; i++){
        temp = heights[i];
        width = 1;
        for(let j=i+1; j<heights.length; j++){
            if(heights[j] <= heights[i]){
                width = (j-i);
                val = temp * width;
                stack.push(val);
                break;
            }else{
                console.log('dans else == = = ===');
                stack.push(heights[j]);
            }
        }
    }
    console.log(stack);
    return Math.max(...stack);
};

// let heights = [2,1,5,6,2,3];
// let heights = [2, 4];
// let heights = [1, 1];
let heights = [4, 2];
console.log(largestRectangleArea(heights));