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
      let point = 0;
    let tempFin = -1;
    let tempDebut = 0;
    let resTemp; 
    let count = 0;
    for(let i=0; i<path.length; i++){
        if(path[i] == 'U'){
            point++;
        }
        if(path[i] == 'D'){
            point--;
        }
        if(point == 0){
            tempDebut = tempFin+1;
            tempFin = i;
            resTemp = path.substring(tempDebut, tempFin + 1);
            console.log(resTemp);
            if(resTemp[0] == 'D'){
                count++;
            }else continue;
        }
    }
    return count;      
}
