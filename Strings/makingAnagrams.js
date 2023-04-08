/*
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function makingAnagrams(s1, s2) {
    // Write your code here
    let myString1 = s1.split('');
    let myString2 = s2.split('');
    let val = s1.length + s2.length;
    for(let i=0; i<myString1.length; i++){
        for(let j=0; j<myString2.length; j++){
            if(myString1[i] == myString2[j]){
                val -= 2;
                myString2.splice(j, 1);
                break;
            }
        }
    }
    return val; 
}

let s1 = 'absdjkvuahdakejfnfauhdsaavasdlkj';
let s2 = 'djfladfhiawasdkjvalskufhafablsdkashlahdfa';
console.log(makingAnagrams(s1, s2));