/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    // Write your code here
    const arr = new Array(n + 2).fill(0), qn = queries.length;
    let sum = 0, maxValue = 0;

    for (let i = 0; i < qn; i++) {
        const [min, max, sum] = queries[i];
        arr[min] += sum;
        maxValue = maxValue < sum ? sum : maxValue
        if (max <= n) {
            arr[max + 1] -= sum;
        }

    }
    for (let k = 0; k < n; k++) {
        sum += arr[k];
        if (maxValue < sum) {
            maxValue = sum;
        }
    }
    return maxValue;
}
