/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

const arrayManipulation = (n: number, queries: number[][]): number => {
    // Write your code here
    const arr: Array<number> = new Array(n + 2).fill(0), qn = queries.length;
    let sum: number = 0, maxValue: number = 0;

    for (let i = 0; i < qn; i++) {
        const [min, max, sum]: Array<number> = queries[i];
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

let n: number = 5;
let queries: number[][] = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
console.log(arrayManipulation(n, queries));