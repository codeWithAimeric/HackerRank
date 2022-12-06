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
    let resTab = [];
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