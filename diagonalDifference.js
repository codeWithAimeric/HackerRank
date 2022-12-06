/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let s1=0;
    let s2=0;
    let n=arr.length;
    for(let i=0; i<n; i++){
       for(let j=0; j<n; j++) {
           
           if(i === j){
               s1 += arr[i][j];
           }
           if(i+j == n-1){
               s2 += arr[i][j];
           }
       }
    }

    
    return Math.abs(s1 - s2);
}
