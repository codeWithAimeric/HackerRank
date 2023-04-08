/*
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function theLoveLetterMystery(s) {
    // Write your code here
    let tab = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let n = Math.round(s.length/2);
    let count = 0;
    let valSup = 0;
    let m = 0;
    if(s.length % 2 == 0){
        m = n-1;
    }else{
        m = n-2;
    }
    for(let i=n, j=m; i<s.length && j>=0; i++, j--){
        if(s[i] != s[j]){
            if(tab.indexOf(s[i]) > tab.indexOf(s[j])){
                valSup = tab.indexOf(s[i]);
                while(valSup > tab.indexOf(s[j])){
                    if(valSup == tab.indexOf(s[j])){
                        break;
                    }
                    count++;
                    valSup--;
                }
            }else if(tab.indexOf(s[i]) < tab.indexOf(s[j])){
                valSup = tab.indexOf(s[j]);
                while(valSup > tab.indexOf(s[i])){
                    if(valSup == tab.indexOf(s[i])){
                        break;
                    }
                    count++;
                    valSup--;
                }
            }
        }
    }
    return count; 
}

let s='abba';
console.log(theLoveLetterMystery(s));