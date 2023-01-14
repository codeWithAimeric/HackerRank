/*
 * Complete the 'fairRations' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

function fairRations(B) {
    // Write your code here
    let count = new Array(B.length - 1).fill(0).reduce((target, item, index) => {
        !!(B[index] % 2) && (B[index + 1]++, (target += 2));
    
        return target;
    }, 0);
    
    return !(B[B.length - 1] % 2) ? count : "NO";
}

B = [2, 3, 4, 5, 6]   
console.log(fairRations(B));