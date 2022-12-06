/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let k = 0;
    let j = 0;
    let i;

    for (i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            ++k;
        }
    }
    for (i = 0; i < oranges.length; i++) {
        if (b + oranges[i] >= s && b + oranges[i] <= t) {
            ++j;
        }
    }
    console.log(k); 
    console.log(j); 
}
