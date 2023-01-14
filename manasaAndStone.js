/*
 * Complete the 'stones' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER a
 *  3. INTEGER b
 */

function stones(n, a, b) {
    // Write your code here
      return new Array(n)
    .fill(0)
    .map((item, index) => a * (n - index - 1) + b * index)
    .sort((a, b) => a - b)
    .reduce((target, item) => {
      !target.includes(item) && target.push(item);

      return target;
    }, []);
}

let n = 3;
let a = 1;
let b = 2;
console.log(stones(n, a, b)); //2, 3, 4