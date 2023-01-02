/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here
    let resTab = [];
    let tempIndex = 0;
    for(let i=0; i<arr.length; i++){
        if(i == 0){
            tempIndex = arr.length - d;
            resTab[arr.length -d] = arr[i];
            continue;
        }
        if(i-d >= 0){
            tempIndex = i-d;
            resTab[i-d] = arr[i];
        }else{
            tempIndex = arr.length -d + i;
            resTab[arr.length-d+i] = arr[i];
        }
    }
    return resTab;
}