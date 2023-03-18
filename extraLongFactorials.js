/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here 
    let res = BigInt(1);
    for(let i=n; i>=1; i--){
        res *= BigInt(i);
    }
    console.log(res.toString());
}


let n = 25;
console.log(extraLongFactorials(n));