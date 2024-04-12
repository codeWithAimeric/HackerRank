/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let count = 0;
    let altitude = 0;
    let ar = path.split('');
    let isValley = false;
    for(let i=0; i<ar.length; i++){
        if(ar[i] == 'U'){
            altitude++;
        }else{
            altitude--;
        }
        if(altitude == -1){
            isValley = true;
        }
        if(altitude == 0 && isValley){
            count++;
            isValley = false;
        }
    }
    return count; 
}

let steps = 8;
let path = 'UDDDUDUU'; //1
console.log(countingValleys(steps, path));
