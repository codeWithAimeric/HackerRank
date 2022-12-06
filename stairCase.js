/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let star = "#";
    let space = " ";
    for(let i=(n-1), j=1; i>=0 && j<=n; i--, j++){
        console.log(space.repeat(i) + star.repeat(j));
    }

}