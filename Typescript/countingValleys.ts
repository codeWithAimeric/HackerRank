/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

const countingValleys = (steps: number, path: string): number => {
    // Write your code here
    let point: number = 0;
    let tempFin: number = -1;
    let tempDebut: number = 0;
    let resTemp: string; 
    let count: number = 0;
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

let steps: number = 8;
let path: string = 'UDDDUDUU'; //1
console.log(countingValleys(steps, path));