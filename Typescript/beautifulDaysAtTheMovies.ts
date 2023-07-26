/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

const beautifulDays = (i: number, j: number, k: number): number => {
    // Write your code here
    let reverseVal: number;
    let tempResult: number;
    let count: number = 0;
    for(let l=i; l<=j; l++){
        reverseVal = Number(l.toString().split("").reverse().join(""));
        tempResult = l - reverseVal;
        if(tempResult%k == 0){
            count++;
        }else{
            continue;
        }
    }
    return count; 
}

let i: number = 20;
let j: number = 23;
let k: number = 6;
console.log(beautifulDays(i, j, k)); //2
