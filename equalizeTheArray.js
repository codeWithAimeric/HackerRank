/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
    // Write your code here
    let count = 0;
    let maxVal = 0;
    let tempVal = 0;
    let valDuplicate = 0;
    let countOperation = 0;
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i] == arr[j]){
                count++;
                tempVal = arr[i];
            }
        }
        if(count > maxVal){
            maxVal = count;
            valDuplicate = tempVal;
        }
        count = 0;
    }
   
    for(let j=0; j<arr.length; j++){
        if(arr[j] != valDuplicate){
            countOperation++;
        }
    }
    return countOperation; 
}

let arr = [1, 2, 3, 1, 2, 3, 3, 3];//4
// let arr = [3, 3, 2, 1, 3, 3];//2
// let arr = [36 ,12 ,60 ,99, 78 ,33 ,4 ,21 ,22 ,9 ,12 ,21 ,34 ,76, 21, 3, 3, 37, 65, 27 ,21 ,42 ,11 ,14 ,21 ,88 ,46 ,63 ,79 ,6 ,3,7 ,94, 99 ,68 ,76, 6, 21 ,86, 49,56, 22, 90, 74, 83, 20, 21, 94, 60, 76, 75, 96, 99, 92, 65, 77, 26, 51, 21, 77, 22, 97, 34, 56];
console.log(equalizeArray(arr));

