/*
 * Complete the 'maxCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. STRING_ARRAY labels
 *  3. INTEGER dailyCount
 */

function maxCost(cost, labels, dailyCount) {
    // Write your code here
    let maxCost = 0;
    let curCount = 0;
    let curCost = 0;
    for(let i=0; i<cost.length; i++){
        curCost += cost[i];
        if (labels[i] == "illegal"){
            continue;
        }
        curCount += 1;
        if(curCount == dailyCount){
            maxCost = Math.max(maxCost, curCost);
            curCount = 0;
            curCost = 0;
        }
    }
    return maxCost;
}

let cost = [2, 5, 3, 11, 1];
let labels = ["legal", "illegal", "legal", "illegal", "legal"];
let dailyCount = 2;
console.log(maxCost(cost, labels, dailyCount));