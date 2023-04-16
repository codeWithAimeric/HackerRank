/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr, brr) {
    // Write your code here
    let resTab = [];
    for(let i=0; i<brr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(brr[i] == arr[j]){
                brr.splice(i, 1);
                arr.splice(j, 1);
                i = -1;
                break;
            }
        }
    }

    resTab = brr.filter((item, index) => brr.indexOf(item) === index);
    return resTab.sort((a, b) => a-b); 
}

let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
let arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
console.log(missingNumbers(arr, brr));