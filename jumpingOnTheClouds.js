/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    let count = 0;
    for(let i=0; i<c.length-1; i++){
        if(i == c.length-1){
            break;
        }
        if(c[i] == 1){
            continue;
        }else if(c[i] == 0){
            if(i == c.length-2){
                if(c[i+1] == 0){
                    count++;
                }
            }
            if(c[i+1]== 0 && c[i+2] == 0){
                i+=1;
                count++;
            }else if(c[i+1] == 1 && c[i+2] == 0){
                i+=1;
                count++;
            }else if(c[i+1] == 0 && c[i+2] == 1){
                count++;
            }
        }
    }
    return count; 
}

let c = [0, 0, 0, 1, 0, 0]; //3
// let c = [0, 0, 0, 0, 1, 0]; //3
console.log(jumpingOnClouds(c));
