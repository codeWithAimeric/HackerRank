/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let valMax = Math.max(...candles);
    return candles.filter(element => element == valMax).length; 

}

let candles = [3, 2, 1, 3]; //2
console.log(birthdayCakeCandles(candles));