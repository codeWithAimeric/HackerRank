/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
    // Write your code here
    let start = Math.ceil(Math.sqrt(a));
    while (start * start < a) {
        start++;
    }

    let end = Math.floor(Math.sqrt(b));
    while (end * end > b) {
        end--;
    }

    return end - start + 1;
}
