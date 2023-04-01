/*
 * Complete the 'quickSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quickSort(arr) {
    // Write your code here
    let p = arr[0];
    let left = [];
    let equal = [];
    let right = [];
    let resTab = [];
    equal.push(p);
    for(let i=1; i<arr.length; i++){
        if(arr[i] > p){
            right.push(arr[i]);
        }else if(arr[i] < p){
            left.push(arr[i]);
        }else{
            equal.push(arr[i]);
        }
    }
    return resTab.concat(left, equal, right);
}

arr =[4, 5, 3, 7, 2];
console.log(quickSort(arr));