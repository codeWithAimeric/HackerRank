/*
 * Complete the 'serviceLane' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY cases
 */

function serviceLane(n, t, width, cases) {
    // Write your code here
    let tempTab = [];
    let resMin = 0;
    let resTab = [];
    for(let i=0; i<cases.length; i++){
        tempTab = width.slice(cases[i][0], cases[i][1]+1);
        resMin = Math.min(...tempTab);
        resTab.push(resMin);
    }
    return resTab;
}


let n = 8;
let t = 5;
let width = [2, 3, 1, 2, 3, 2, 3, 3];
let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];
console.log(serviceLane(n, t, width, cases));