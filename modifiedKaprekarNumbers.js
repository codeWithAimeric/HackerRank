
/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
    // Write your code here
    let square = 0;
    let tempSquare = '';
    let tempSquare2 = '';
    let res1 = 0;
    let res2 = 0;
    let resTab = [];
    if(p == 1 || p == 0){
        resTab.push(1);
    }
    for(let i=p; i<=q; i++){
        square = (Math.pow(i, 2)).toString();
        for(let j=1; j<square.length; j++){
            tempSquare= square.slice(0, square.length/2);
            tempSquare2 = square.slice(square.length/2, square.length); 
            res1 = Number(tempSquare);
            res2 = Number(tempSquare2);
            if(res1 + res2 == i && (res1 > 0 && res2 > 0)){
                    resTab.push(i);
                    break;
            }
        }
    }
    if(resTab.length == 0){
        console.log('INVALID RANGE');
    }else{
        console.log(...resTab);
    }
}

let p=1;
let q=10000;
kaprekarNumbers(p, q);
// 1 9 45 55 99 297 703 999 2223 2728 4950 5050 7272 7777 9999