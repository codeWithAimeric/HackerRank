/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s) {
    // Write your code here
    let myString = s.split('');
    let count = 0;
    for(let i=0; i<myString.length-1; i++){
        console.log('i----', i);
        if(myString[i] != myString[i+1]){
            continue; 
        }else{
            for(let j=i+1; j<myString.length; j++){
                if(myString[j] != myString[i]){
                    break;
                }
                count++;
                i=j-1;
            }
        }
    }
    return count;
}

let s = 'AAABBBAABB';
console.log(alternatingCharacters(s));