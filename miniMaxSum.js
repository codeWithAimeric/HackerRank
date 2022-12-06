/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let arr2 = [...arr];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    let indexOfMin = arr.indexOf(min);
    let indexOfMax = arr.indexOf(max);
    
    let tabMax = arr.splice(indexOfMin, 1);
    let resMax = arr.reduce((a, b) => a+b, 0);
    
    let tabMin = arr2.splice(indexOfMax, 1);  
    let resMin = arr2.reduce((a, b) => a+b, 0);
    
    console.log(resMin, resMax);
}
