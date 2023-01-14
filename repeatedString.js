/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    let multiple =0;
    let nbS = 0;
    let modulo = 0;
    let res1 = 0;
    let res2 = 0;
    let tempS = [];
    if(!s.includes('a')){
        return 0;
    }
    multiple = Math.floor(n/s.length);
    modulo = n%s.length;
    nbS = s.match(new RegExp("a", "g")).length;
    res1 = nbS * multiple;
    if(modulo != 0){
        tempS = s.slice(0, modulo);
        if(tempS.includes('a')){
             res2 = tempS.match(new RegExp("a", "g")).length;
        }
        return res1 + res2;
    }else{
        return res1;
    }
}

let s='gfcaaaecbg';
let n=547602;
console.log(repeatedString(s, n));

// console.log(("abcacabcac".match(new RegExp("a", "g")) || []).length);
