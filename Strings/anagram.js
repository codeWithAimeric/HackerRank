/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here
    let n = s.length/2;
    let myString = s.split('');
    let min = 0;
    if(s.length %2 != 0){
        return -1;
    }else{
        let myString1 = myString.slice(0, n);
        let myString2 = myString.slice(n, s.length);
        for(let i=0; i<myString1.length; i++){
            if(myString2.includes(myString1[i])){
                myString2.splice(myString2.indexOf(myString[i]), 1);
            }else{
                min++;
            }
        }
    }
    return min; 
}

let s = 'xaxbbbxx';
console.log(anagram(s));