/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here
    let count = 0;
    for(let i=0; i<=2; i++){
        if(i==0 || i==2){
            if(s[i] != 'S'){
                count++;
            }
        }
        if(i==1){
            if(s[i] != 'O'){
                count++;
            }
        }
        for(let j=i+3; j<s.length; j+=3){
            if(i==0 || i==2){
                if(s[j] != 'S'){
                    count++;
                }
            }
            if(i==1){
                if(s[j] != 'O'){
                    count++;
                }
            }
        }
    }
    return count; 
}

let s = 'SOSSOSSOT';
console.log(marsExploration(s));