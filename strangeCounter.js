/*
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */

function strangeCounter(t) {
    // Write your code here
    let temp = 3;

    while (2 * temp - 2 <= t) {
        temp *= 2;
    }

    return temp - (t - (temp - 2));
}

let t = 1000000000000;
console.log(strangeCounter(t));