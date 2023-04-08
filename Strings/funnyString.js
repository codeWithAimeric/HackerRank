/*
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
    // Write your code here
    let tab = [];
    let reverseTab = [];
    let resTab1 = [];
    let resTab2 = [];
    let temp = 0;
    let temp2 = 0;
    let isNotEqual = false; 
    for(let i=0; i<s.length; i++){
        tab.push(s[i].charCodeAt(0));
    }
    for(let i=tab.length-1; i>=0; i--){
        reverseTab.push(tab[i]);
    }
    for(let i=0; i<tab.length-1; i++){
        temp = Math.abs(tab[i+1]-tab[i]);
        temp2 = Math.abs(reverseTab[i+1]-reverseTab[i]);
        resTab1.push(temp);
        resTab2.push(temp2);
    }
    for(let i=0; i<resTab1.length; i++){
        if(resTab1[i] != resTab2[i]){
            isNotEqual = true; 
            break;
        }
    }
    if(isNotEqual){
        return 'Not Funny';
    }else{
        return 'Funny';
    }
}

let s = 'bcxz';
console.log(funnyString(s));