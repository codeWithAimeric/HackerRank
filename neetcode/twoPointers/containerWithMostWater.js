/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length-1;
    let resArray = [];
    while(i != j){
        let minVal = Math.min(height[i], height[j]);
        let diffVal = j-i;
        let tempVal = minVal * diffVal;
        resArray.push(tempVal);
        if(height[i] > height[j]){
            j--;
        }else{
            i++;
        }
    }
    return Math.max(...resArray);
};

let  height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));