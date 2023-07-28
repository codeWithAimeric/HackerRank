/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let count = 0;
    let max = 0;    
    for(let i = 0; i < candles.length ; i++)
    {
        let num = candles[i];
        if(num > max)
        {
            max = num;
            count = 1;
        }else if(max == num)
        {
            count++;
        }
    }
    return count;

}

let candles = [3, 2, 1, 3]; //2
console.log(birthdayCakeCandles(candles));