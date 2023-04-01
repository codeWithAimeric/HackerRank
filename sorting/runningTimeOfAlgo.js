/*
 * Complete the 'runningTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function runningTime(arr) {
    // Write your code here
    let temp1 = 0;
    let temp2 = 0;
    let count = 0;
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] <= arr[i+1]){
            continue; 
        }else{
            temp1 = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp1;
            count++;
            if(arr[i] >= arr[i-1]){
                continue;
            }else{
                for(let j=i-1; j>=0; j--){
                    if(arr[j] <= arr[j+1]){
                        break;
                    }else{
                        temp2 = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp2;
                    }
                    count++;
                }
            }
        }
    }
    return count; 
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(runningTime(arr));