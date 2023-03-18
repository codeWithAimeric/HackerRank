/*
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n, arr) {
    // Write your code here
    let temp1 = 0;
    let temp2 = 0;
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] <= arr[i+1]){
            console.log(...arr);
        }else{
            temp1 = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp1;
            if(arr[i] >= arr[i-1]){
                console.log(...arr);
            }else{
                for(let j=i-1; j>=0; j--){
                    if(arr[j] <= arr[j+1]){
                        break;
                    }else{
                        temp2 = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp2;
                    }
                }
                console.log(...arr);
            }
        }
    }
}

let tab = [3, 4, 7, 5, 6, 2, 1];
let n = 7;
insertionSort2(n, tab);