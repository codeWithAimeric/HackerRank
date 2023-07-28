/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

const breakingRecords = (scores: Array<number>): Array<number> => {
    // Write your code here
    let tempMax :number = scores[0];
    let tempMin :number = scores[0];
    let countMax :number = 0;
    let countMin :number = 0;
    let resTab :Array<number> = [];
    for(let i=1; i<scores.length; i++){
        if(tempMax < scores[i]){
            tempMax = scores[i];
            countMax++;
        }
    }
    resTab.push(countMax);
    for(let i=1; i<scores.length; i++){
        if(tempMin > scores[i]){
            tempMin = scores[i];
            countMin++;
        }
    }
    resTab.push(countMin);
    return resTab;
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]; //[2, 4]
// const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]; //[4, 0]
console.log(breakingRecords(scores));