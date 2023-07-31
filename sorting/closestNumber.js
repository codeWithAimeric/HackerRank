/*
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    // Write your code here
    let temp = 0;
    let resArr = [];
    let tempVal = Infinity; 
    arr.sort((a, b) => a-b);
    console.log(arr);
    for(let i=0; i<arr.length; i++){
        temp = arr[i+1] - arr[i];
        if(temp < tempVal){
            resArr = [];
            tempVal = temp;
            resArr.push(arr[i]);
            resArr.push(arr[i+1]);
        }else if(temp == tempVal){
            resArr.push(arr[i]);
            resArr.push(arr[i+1]);
        }
    }
    return resArr; 
}

// let arr = [5, 4, 3, 2, 1]; 
let arr = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]; //[-20, 30]
console.log(closestNumbers(arr));