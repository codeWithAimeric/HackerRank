/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    let tab = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let indexTab = 0;
    let myString = s.toLowerCase();
    for(let i=0; i<myString.length; i++){
        if(myString[i] == ' '){
            continue;
        }
        if(tab.includes(myString[i])){
            indexTab = tab.indexOf(myString[i]);
            tab.splice(indexTab, 1);
        }
    }
    if(tab.length > 0){
        return 'not pangram';
    }else{
        return 'pangram';
    }
}


let s = 'The quick brown fox jumps over the lazy dog';
console.log(pangrams(s));