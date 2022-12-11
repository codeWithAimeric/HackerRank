/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
     let maxVal=0;
    let objectArr=arr.reduce((obj, b)=> {
        obj[b] = ++obj[b] || 1;
        return obj;
      }, {});
      
    maxVal = Math.max(...Object.values(objectArr));
    let res = Object.keys(objectArr).find(key => objectArr[key] === maxVal);
    return parseInt(res);
}