/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
    // Write your code here
    let k=1;
        for(let i=1; i<=n; i++){
            if(i%2 == 0){
            k+=1;
        }else{
            k*=2;
        }
    }
    return k;
}
