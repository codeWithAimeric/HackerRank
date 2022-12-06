/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
   let res = 0;
    let i = 1;
    let cloneA = a.splice(1, a.length); 
    while(a[0] * i <= b[0]) {
        if(
         cloneA.every(item => (a[0] * i) % item === 0)
          &&
          b.every(item => item % (a[0] * i) === 0)
         ) {
            res++;
        }i++;
    }
    return res;
}