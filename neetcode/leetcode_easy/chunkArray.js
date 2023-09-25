/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let tempArr = [];
    let resArr = [];
    for(let i=0; i<arr.length; i+=size){
        if(i+size >= arr.length){
            tempArr = arr.slice(i, arr.length);
            resArr.push(tempArr);
            tempArr = [];
        }else{
            tempArr = arr.slice(i, i+size);
            resArr.push(tempArr);
            tempArr = [];
        }
    }
    return resArr; 
};

let arr = [1, 2, 3, 4, 5];
let size = 1; 

console.log(chunk(arr, size));