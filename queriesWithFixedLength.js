
/*
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY queries
 */

function solve(arr, queries) {
    // Write your code here
    const result = [];
  for (let i = 0; i < queries.length; i++) {
    const windowSize = queries[i];
    const tempArr = [];
    let isMaxAtBeginning = false;
    let max = 0;
    for (let j = 0; j < arr.length; j++) {
      let window;
      if (windowSize + j <= arr.length) {
        if (j === 0 || isMaxAtBeginning) {
          window = arr.slice(j, j + windowSize);
          max = window.reduce((a, b) => (a >= b ? a : b));
        }
        else {
          max = Math.max(max, arr[j + windowSize - 1]);
        }
        tempArr.push(max);
        isMaxAtBeginning = max === arr[j];
      }
    }
    result.push(tempArr.reduce((a, b) => (a <= b ? a : b)));
  }
  return result;
}
