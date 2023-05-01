/*
 * Complete the 'shortPalindrome' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function shortPalindrome(s){
    let count = 0; 
    let tab = [];
    let resTab = [];
    for(let i=0; i<s.length; i++){
        for(let j=s.length-1; j>=0; j--){
            if(i==j){
                break;
            }
            if(s[i] == s[j] && j-i>=3){
                tab.push(i);
                tab.push(j);
                resTab.push(tab);
                tab = [];
            }
        }
    }
    for(let i=0; i<resTab.length; i++){
        for(let j=resTab[i][0]+1; j<=resTab[i][1]-1; j++){
            for(let k=resTab[i][1]-1; k>=resTab[i][0]+1; k--){
                if(j==k){
                    break;
                }
                if(s[j] == s[k]){
                    count++;
                }
            }
        }
    }
    return count%(Math.pow(10, 9) + 7);
}

// let s = 'ghhggh';
let s = 'kkkkkkz';
console.log(shortPalindrome(s));

// let count = 0; 
//     let mod = 1000000007;
//     let freq1 = new Array(26).fill(0);
//     let freq2 = new Array(26).fill(0).map(() => new Array(26).fill(0));
//     let freq3 = new Array(26).fill(0);
    
//     for (let i = 0; i < s.length; i++) {
//         let idx = s.charCodeAt(i) - 'a'.charCodeAt(0);
//         count = (count + freq3[idx]) % mod;
//         for (let j = 0; j < 26; j++) {
//             freq3[j] = (freq3[j] + freq2[j][idx]) % mod;
//             freq2[j][idx] = (freq2[j][idx] + freq1[j]) % mod;
//         }
//         freq1[idx]++;
//     }
//     return count;