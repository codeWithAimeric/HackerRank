/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let count = 0;
    let regexLowerCase = /[a-z]/g;
    let regexUpperCase = /[A-Z]/g;
    let regexNumber = /[0-9]/g;
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let lengthChar = 0;
    let diff = 0;
    if(!password.match(regexLowerCase)){
        count++;
    }
    if(!password.match(regexUpperCase)){
        count++;
    }
    if(!password.match(regexNumber)){
        count++;
    }
    if(!password.match(specialChars)){
        count++;
    }
    if(password.length < 6){
        lengthChar = password.length + count;
        if(lengthChar < 6){
            diff = 6 - lengthChar;
            count += diff;
        }
    }
    return count; 
}

let n=3;
let password = 'Ab1';
console.log(minimumNumber(n, password));