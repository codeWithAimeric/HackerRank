/*
 * Complete the 'absolutePermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 */

const absolutePermutation = (n: number, k: number): Array<number> => {
    // Write your code here
    let numbers: Array<number> = [];
    for(let i=1; i<=n; i++){
        numbers.push(i);
    }
    if (k === 0) {
        return numbers;
    }
    for (let i = 0; i < n; i += k * 2) {
        for (let j = 0; j < k; j++) {
        if (numbers[i + j + k] == null) {
            return [-1];
        }

        let temp = numbers[i + j];

        numbers[i + j] = numbers[i + j + k];
        numbers[i + j + k] = temp;
        }
    }

    return numbers;
}

let n = 100000;
let k= 40;
console.log(absolutePermutation(n, k));

// module.exports = absolutePermutation;