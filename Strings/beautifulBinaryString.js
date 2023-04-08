/*
 * Complete the 'beautifulBinaryString' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING b as parameter.
 */

function beautifulBinaryString(b) {
    // Write your code here
    let count = 0; 
    for(let i=0; i<b.length; i++){
        if(b[i] == '0' && b[i+1] == '1' && b[i+2] == '0'){
            count++;
            i+=2;
        }else{
            continue; 
        }
    }
    return count; 
}

let b = '0100101010';
console.log(beautifulBinaryString(b));