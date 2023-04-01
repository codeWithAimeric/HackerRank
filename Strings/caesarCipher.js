/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    let myString = s.toLowerCase().split('');
    let index = 0;
    let regexNumber = /[0-9]/g;
    let count = 0;
    let indexFinal = 0;
    let tab = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let regexSpecialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    for(let i=0; i<myString.length; i++){
        if(myString[i].match(regexSpecialChar) || myString[i].match(regexNumber)){
            continue;
        }else{
            index = tab.indexOf(myString[i]);
            if(k>25){
                while(k>25){
                    if(k<=25){
                        break;
                    }
                    count++;
                    k -= 26;
                }
                indexFinal = k + index;
                if(indexFinal > 25){
                    while(indexFinal>25){
                        if(indexFinal<=25){
                            break;
                        }
                        indexFinal -= 26;
                    }
                }
                if(s[i].toUpperCase() == s[i]){
                    myString[i] = tab[indexFinal].toUpperCase();
                }else{
                    myString[i] = tab[indexFinal];
                }
            }else{
                indexFinal = k + index;
                if(indexFinal > 25){
                    while(indexFinal>25){
                        if(indexFinal<=25){
                            break;
                        }
                        indexFinal -= 26;
                    }
                }
                if(s[i].toUpperCase() == s[i]){
                    myString[i] = tab[indexFinal].toUpperCase();
                }else{
                    myString[i] = tab[indexFinal];
                }
            }
        }
    }
    return myString.join(''); 
}

let k =26;
// let s = 'middle-Outz';
let s = 'Ciphering.';
console.log(caesarCipher(s, k));

// 6MFE95QigCLQY85mee3WH2laic1jX8s6p2iBMeODrSs6GFMuIeWWa
// okffng-Qwvb