/*
 * Complete the 'insertionSort' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function mergeSortAndCountInversions(arr) {
    if(arr.length <= 1){
        return [arr, 0];
    }
  
    const middle = Math.floor(arr.length / 2);
    const [left, leftCount] = mergeSortAndCountInversions(arr.slice(0, middle));
    const [right, rightCount] = mergeSortAndCountInversions(arr.slice(middle));
    const [sorted, mergeCount] = mergeAndCountSplitInversions(left, right);
  
    return [sorted, leftCount + rightCount + mergeCount];
}
  
function mergeAndCountSplitInversions(left, right) {
    let i = 0;
    let j = 0;
    let splitCount = 0;
    const sorted = [];
  
    while (i < left.length && j < right.length) {
        if(left[i] <= right[j]){
            sorted.push(left[i]);
            i++;
        }else{
            sorted.push(right[j]);
            j++;
            splitCount += left.length - i;
        }
    }
  
    return [sorted.concat(left.slice(i)).concat(right.slice(j)), splitCount];
}
  
function insertionSort(arr) {
    const [, inversionCount] = mergeSortAndCountInversions(arr);
    return inversionCount;
}


// let arr = [4, 3, 2, 1]; //6
let arr = [2, 1, 3, 1, 2];
console.log(insertionSort(arr));