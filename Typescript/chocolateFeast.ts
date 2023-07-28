/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */

const chocolateFeast = (n: number, c: number, m: number): number => {
    // Write your code here
    let res: number = 0;
    let div: number = 0;
    let mod: number = 0;
    let temp: number = 0;
    let result: number = 0;
    res = Math.floor(n/c);
    div = Math.floor(res/m);
    mod = res%m;
    result = res + div;
    temp = div + mod; 
    while (temp >= m) {
        res = temp; 
        div = Math.floor(res/m);
        mod = res %m;
        result += div;
        temp = div +mod;
    }
    return result; 
}

let n: number = 15;
let c: number = 3; 
let m: number = 2;
console.log(chocolateFeast(n, c, m)); //9