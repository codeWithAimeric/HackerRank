/*
 * Complete the 'matrixRotation' function below.
 *
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY matrix
 *  2. INTEGER r
 */
function rotateLeft(arr, k) {
    const n = arr.length;
    k = k % n;

    if (k === 0) {
        return arr;
    }

    const rotatedArray = arr.splice(k).concat(arr);
    return rotatedArray;
}

function matrixRotation(matrix, r) {
    // Write your code here
    let n = matrix.length;
    let m = matrix[0].length;
    let minDim = Math.min(n, m);
    let middle = Math.floor(minDim / 2);
    
    for (let k = 0; k < middle; k++) {
        let layer = [];
        
        for (let i = k; i < m - k; i++) {
            layer.push(matrix[k][i]);
        }
        for (let i = k + 1; i < n - k; i++) {
            layer.push(matrix[i][m - k - 1]);
        }
        for (let i = m - k - 2; i >= k; i--) {
            layer.push(matrix[n - k - 1][i]);
        }
        for (let i = n - k - 2; i > k; i--) {
            layer.push(matrix[i][k]);
        }

        let rotatedLayer = rotateLeft(layer, r);

        let index = 0;
        for (let i = k; i < m - k; i++) {
            matrix[k][i] = rotatedLayer[index++];
        }
        for (let i = k + 1; i < n - k; i++) {
            matrix[i][m - k - 1] = rotatedLayer[index++];
        }
        for (let i = m - k - 2; i >= k; i--) {
            matrix[n - k - 1][i] = rotatedLayer[index++];
        }
        for (let i = n - k - 2; i > k; i--) {
            matrix[i][k] = rotatedLayer[index++];
        }
    }

    return matrix;
}

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
let k=2;
// let matrix = [[1, 2, 3, 4], [7, 8, 9, 10], [13, 14, 15, 16], [19, 20, 21, 22], [25, 26, 27, 28]];
// let k=7;
console.log(matrixRotation(matrix, k));