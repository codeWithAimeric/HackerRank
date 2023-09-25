/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let resTab = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            resTab.push(arr[i]);
        }
    }
    return resTab; 
};