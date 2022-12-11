/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    let startCount = Math.floor(p/2);
    let stopCount = Math.floor((n/2)-startCount);

    let result = Math.min(startCount, stopCount);
    return result;


}