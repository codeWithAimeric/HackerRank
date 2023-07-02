/*
 * Complete the 'commonChild' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function commonChild(s1, s2) {
    // Write your code here
    let char1='';
    let char2='';
    let res1 = [];
    let res2 = [];
    for(let i=0; i<s1.length; i++){
        if(s2.includes(s1[i])){
            res1.push(s1[i]);
        }
    }
    for(let i=0; i<s2.length; i++){
        if(s1.includes(s2[i])){
            res2.push(s2[i]);
        }
    }
    console.log(res1);
    console.log(res2);
    char1 = res1.join('');
    char2 = res2.join('');
    let commonSubstring = '';

    for (let i = 0; i < char1.length; i++) {
        for (let j = 0; j < char2.length; j++) {
        let k = i;
        let l = j;
        let substring = '';

        while (k < char1.length && l < char2.length && char1[k] === char2[l]) {
            substring += char1[k];
            k++;
            l++;
        }

        if (substring.length > commonSubstring.length) {
            commonSubstring = substring;
        }
        }
    }

    return commonSubstring.length;
}


// let s1 = 'SHINCHAN';
// let s2 = 'NOHARAAA';
let s1 = 'WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS';
let s2 = 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC'; //15
console.log(commonChild(s1, s2));