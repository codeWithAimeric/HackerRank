/*
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function hackerrankInString(s) {
    // Write your code here
    let tab = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k'];
    let temp = 1;
    let resTab = [];
    let myString = s.split('');
    for(let i=0; i<tab.length; i++){
        for(let j=0; j<myString.length; j++){
            if(tab[i] == myString[j]){
                resTab.push(myString[j]);
                myString.splice(0, j+1);
                console.log(myString);
                break;
            }
        }
    }
    if(resTab.join('') == 'hackerrank'){
        return 'YES';
    }else{
        return 'NO';
    }
}

let s = 'rhackerank';
console.log(hackerrankInString(s));