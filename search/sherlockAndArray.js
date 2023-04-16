/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
    // Write your code here
    let firstArray = [];
    let secondArray = [];
    let sumFirstArray = 0;
    let sumSecondArray = 0;
    for(let i=0; i<arr.length; i++){
                firstArray = arr.slice(0, i);
                secondArray = arr.slice(i+1, arr.length);
                sumFirstArray = firstArray.reduce((a, b) => a+b, 0);
                sumSecondArray = secondArray.reduce((a, b) => a+b, 0);
                if(sumFirstArray == sumSecondArray){
                    return 'YES';
                }
    }
    return 'NO';
}

// let arr = [1, 2, 3, 3];
let arr = [75, 26, 45, 72, 81, 47, 29, 97, 2, 75, 25, 82, 84, 17, 56, 32, 2, 28, 37, 57, 39, 18, 11, 79, 6, 40, 68, 68, 16, 40, 63, 93, 49, 91, 10, 55, 68, 31, 80, 57, 18, 34, 28, 76, 55, 21, 80, 22, 45, 11, 67, 67, 74, 91, 4, 35, 34, 65, 80, 21, 95, 1, 52, 25, 31, 2, 53, 96, 22, 89, 99, 7, 66, 32, 2, 68, 33, 75, 92, 84, 10, 94, 28, 54, 12, 9, 80, 43, 21, 51, 92, 20, 97, 7, 25, 67, 17, 38, 100, 86];
console.log(balancedSums(arr));