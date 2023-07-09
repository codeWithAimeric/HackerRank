/*
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

function countSort(arr) {
    // Write your code here
    let count = Array(arr.length).fill().map(() => []),
        result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length / 2) {
            count[arr[i][0]].push('-');
        } else {
            count[arr[i][0]].push(arr[i][1]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i][0]].length > 0) {
            result.push(...count[i]);
        }
    }

    console.log(result.join(' '));

}