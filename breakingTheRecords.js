/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let tempMax = scores[0];
    let tempMin = scores[0];
    let countMax = 0;
    let countMin = 0;
    for(let i=0; i<scores.length; i++){
        if(scores[i] > tempMax){
            tempMax = scores[i];
            countMax++;
        }
        if(scores[i] < tempMin){
            tempMin = scores[i];
            countMin++;
        }
    }
    return [countMax, countMin];
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]; //[2, 4]
// const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]; //[4, 0]
console.log(breakingRecords(scores));