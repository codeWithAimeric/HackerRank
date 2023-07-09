/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
    let tab = [];
    for(let i=0; i<100; i++){
        tab.push(0);
    }
    for(let i=0; i<arr.length; i++){
        tab[arr[i]]++;
    }
    return tab; 
}

