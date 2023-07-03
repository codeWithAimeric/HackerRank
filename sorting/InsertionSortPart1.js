/*
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
    // Write your code here
    const key = arr[n - 1];

    let i;
    for (i = n - 2; i >= 0 && arr[i] > key; i--) {
        arr[i + 1] = arr[i];
        console.log(arr.join(' '));
    }

    console.log('arr before = = =', ...arr);
    arr[i + 1] = key;
    console.log(arr.join(' '));
}

// let tab = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
// let tab = [2, 4, 6, 8, 3];
let tab = [1, 3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23];
let n = 10;
insertionSort1(n, tab);
