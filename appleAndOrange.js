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
    let resApples = apples.map(element => element+a);
    let resOranges = oranges.map(element => element+b);
    const countApple = resApples.filter(apple => apple >= s && apple <= t).length;
    const countOrange = resOranges.filter(orange => orange >= s && orange <= t).length;

    console.log(countApple);
    console.log(countOrange);
}
