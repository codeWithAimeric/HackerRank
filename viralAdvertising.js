/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    // Write your code here
    let init = 5;
    let cumul = 0;
    let liked;
    for(let i=1; i<=n; i++){
        liked = Math.floor(init/2);
        cumul+=liked;
        
        init = liked*3;
    }
    return cumul; 
}
