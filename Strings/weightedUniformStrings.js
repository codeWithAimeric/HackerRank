/*
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function weightedUniformStrings(s, queries) {
    // Write your code here
    let tab = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let resTab = [];
    let val = 0;
    let resVal = 0;
    let indexFinal = 0;
    let isEnd = false;
    let res = [];
    for(let i=0; i<s.length; i++){
        resTab.push(tab.indexOf(s[i]));
        for(let j=i+1; j<s.length; j++){
            if(s[j] != s[i]){
                i = j-1;
                break; 
            }
            if(j == s.length-1){
                isEnd = true; 
            }
            val = tab.indexOf(s[j]);
            indexFinal = j -i + 1;
            resVal = val * indexFinal;
            resTab.push(resVal);
        }
        if(isEnd){
            break;
        }
    }
    for(let i=0; i<queries.length; i++){
        if(resTab.includes(queries[i])){
            res.push('YES');
        }else{
            res.push('NO');
        }
    }
    return res; 
}

let s = 'abbcccdddd';
let queries = [1, 7, 5, 4, 15];
console.log(weightedUniformStrings(s, queries));

// a       1
// b       2
// bb      4
// c       3
// cc      6
// ccc     9
// d       4
// dd      8
// ddd     12
// dddd    16