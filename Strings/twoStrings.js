/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
    // Write your code here
    let myString1 = s1.split('');
    let myString2 = s2.split('');
    let tab1 = [];
    for(let i=O; i<myString1.length; i++){
        if(!tab1.includes(myString1[i])){
            tab1.push(myString1[i]);
        }
    }
    for(let i=0; i<myString2.length; i++){
        if(tab1.includes(myString2[i])){
            return 'YES';
        }
    }
    return 'NO'; 
}

let s1 = 'hello';
let s2 = 'world';
console.log(twoStrings(s1, s2));