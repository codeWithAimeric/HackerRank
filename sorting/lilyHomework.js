/*
 * Complete the 'lilysHomework' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
const qSort = (arr) => {
    if(arr.length == 0){
        return [];
    }
    let left = [];
    let right = [];
    let pivot = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, right);
}
function lilysHomework(arr) {
    // Write your code here
    let arrSorted = qSort(arr);
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] != arrSorted[i]){
            count++;
        }
    }
    return count % 2 == 0 ? count/2 : (count+1)/2;
}