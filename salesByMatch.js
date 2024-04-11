/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    let count = 0;
    let myMap = new Map();
    for(let i=0; i<ar.length; i++){
        if(myMap.get(ar[i])){
            myMap.set(ar[i], myMap.get(ar[i])+1);
        }else{
            myMap.set(ar[i], 1);
        }
    }
    for(const[key, value] of myMap.entries()){
        count += Math.floor(value/2);
    }
    return count; 
}