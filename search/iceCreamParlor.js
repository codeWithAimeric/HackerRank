/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

function icecreamParlor(m, arr) {
    // Write your code here
    let resTab = [];
    let tab = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] +  arr[j] == m){
                resTab.push(i+1);
                resTab.push(j+1);
            }
        }
    }
    return resTab.sort((a, b) => a-b);
}

let m = 4;
let arr = [1, 4, 5, 3, 2];
console.log(icecreamParlor(m, arr));