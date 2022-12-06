/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
    let p=0;
    let ng=0;
    let z=0;
    for(let i=0; i<=n; i++){
        if(arr[i] > 0){
            p++;
        }else if(arr[i] < 0){
            ng++;
        }else if(arr[i] == 0){
            z++;
        }
    }
    
    let r1 = (p/n).toFixed(6);
    let r2 = (ng/n).toFixed(6);
    let r3 = (z/n).toFixed(6);
    console.log(r1 + "\n" + r2 +"\n" + r3);

}