/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    // Write your code here
    let maxValue = Math.max(...height);
    if(k > maxValue){
        return 0;
    }else{
        let res = maxValue - k;
        return res;
    }

}