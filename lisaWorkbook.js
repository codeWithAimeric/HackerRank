/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

function workbook(n, k, arr) {
    // Write your code here
    let count = 0; 
    let tab = [];
    let val=0;
    let tempTab = [];
    let valSliceTab = k;
    let sliceTab = [];
    let countTab = 0;
    let resTab = [];
    for(let i=0; i<n; i++){
        val = arr[i];
        for(let j=1; j<=val; j++){
            tempTab.push(j);
        }
        tab.push(tempTab);
        tempTab = [];
    }
    for(let i=0; i<tab.length; i++){
        for(let j=0; j<tab[i].length; j+=k){
            resTab.push(tab[i].slice(j, valSliceTab));
            valSliceTab += k;
        }
        valSliceTab = k;
    }
    for(let i=0; i<resTab.length; i++){
        if(resTab[i].includes(i+1)){
            count++;
        }
    }
    return count; 
}
// let n = 5;
// let k = 3;
// let arr = [4, 2, 6, 1, 10]; //4
let n=25;
let k=10;
let arr = [1, 29, 94, 15, 87, 100, 20, 55, 100, 45, 82, 80, 100, 100, 3, 53, 100, 2, 100, 100, 100, 100, 100, 100, 1];//11
console.log(workbook(n, k, arr));
