/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const cutTheSticks = (arr: Array<number>): Array<number> => {
    // Write your code here
    let resTab: Array<number> = [];
    let minVal: number = 0;
    resTab.push(arr.length);
    while(arr.length > 1){
        minVal = Math.min(...arr);
        for(let i=arr.length-1; i>=0; i--){
            arr[i] -= minVal;
            if(arr[i] == 0){
                arr.splice(i, 1);
            }
        }
        if(arr.length>0){
            resTab.push(arr.length);
        }
    }
    return resTab;
}


let arr = [5, 4, 4, 2, 2, 8];
console.log(cutTheSticks(arr));
