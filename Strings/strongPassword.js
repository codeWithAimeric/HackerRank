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
    let regexUpperCase = /[A-Z]/g;
    let regexLowerCaser = /[a-z]/g;
    let regexNumber = /[0-9]/g;
    let regexCharacter = /[!@#$%^&*()-+ ]./g;
    if(s.length < 6){
        count++;
    }
    if(!password.match(regexUpperCase)){
        count++;
    }
    if(!password.match(regexNumber)){
        count++;
    }
    if(!password.match(regexLowerCaser)){
        count++;
    }
    if(!password.match(regexCharacter)){
        count++;
    }
    return count; 
}

let password = "#HackerRank";
let n = 11;
console.log(minimumNumber(n, password));