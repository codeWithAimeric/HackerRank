/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s) {
    // Write your code here
    let arr = s.split('');
    let count = 1;
    for(let i=0; i<arr.length; i++){
        if(arr[i].toUpperCase() == arr[i]){
            count++;
        }
    }
    return count; 
}

let s = 'saveChangesInTheEditor';
console.log(camelcase(s));