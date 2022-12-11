/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    for(let i=0; i<ar.length; i++){
        for(let j=i+1; j<ar.length; j++){
            (ar[i] + ar[j])% k == 0 && count++;
        }
    }
    return count; 
}