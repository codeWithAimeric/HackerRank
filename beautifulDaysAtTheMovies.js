/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
    // Write your code here
    let reverseVal;
    let tempResult;
    let count = 0;
    for(let l=i; l<=j; l++){
        reverseVal = Number(l.toString().split("").reverse().join(""));
        tempResult = l - reverseVal;
        if(tempResult%k == 0){
            count++;
        }else{
            continue;
        }
    }
    return count; 
}