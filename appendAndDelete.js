/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    // Write your code here
    let sArr = s.split("");
    let tArr = t.split("");
    let count = 0;
    for (let i = 0; i === count && i < s.length; i++) {
        if (sArr[i] === tArr[i]) {
            count++;
        }
    }

    let tMinusCount = t.length - count;
    let sMinusCount = s.length - count;

    let STK = k - (tMinusCount + sMinusCount);

    if (tMinusCount + sMinusCount < k && t.length + s.length > k && STK % 2 !== 0) {
        return "No";
    } else if (tMinusCount + sMinusCount <= k) {
        return "Yes";
    } else {
        return "No";
    }
}
