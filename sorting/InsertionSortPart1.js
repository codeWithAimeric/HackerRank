/*
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
    // Write your code here
    let temp = arr[arr.length - 1];
    for(let j=arr.length -2; j>=0; j--){
        if(j == 0 && arr[j]>temp){
            arr[j+1] = arr[j];
            console.log(...arr);
            arr[j] = temp;
            console.log(...arr);
            break; 
        }
        if(arr[j] > temp){
            arr[j+1] = arr[j];
        }else{
            arr[j+1] = temp; 
            console.log(...arr);
            break;
        }
        console.log(...arr);
    }
}

// let tab = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
// let tab = [2, 4, 6, 8, 3];
let tab = [1, 3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23];
let n = 10;
insertionSort1(n, tab);
