/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    // Write your code here
    let index = -1;
    let isVerify = false; 
    for(let i=0, j=s.length-1; i<s.length && j>=0; i++, j--){
        if(s[i] != s[j]){
            if(s[i] == s[j-1]){
                for(let k=i+1, l=j-2; k<Math.round(s.length/2) && l>=Math.round(s.length/2); k++, l--){
                    if(s[k] != s[l])
                    {
                        isVerify = true;
                        break;
                    }
                }
                if(!isVerify){
                    index = j;
                    break;
                }else{
                    index = i;
                    break;
                }
            }else if(s[i+1] == s[j]){
                index = i;
                break;
            }
        }
    }
    return index; 
}   

let s = 'uxxdlselxmwyiguugtpsypfudffswvwyswyyiiyywsywvsffdufpysptguugiywmxlesldxxu';
console.log(palindromeIndex(s));
