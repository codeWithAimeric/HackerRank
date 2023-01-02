/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here
    let lastAnswer = 0;
    let arr = [];
    let idx = 0;
    let resTab = [];
    for(let i=0; i<n; i++){
        arr.push([]);
    }
    for(let i=0; i<queries.length; i++){
        if(queries[i][0] == 1){
            idx = ((queries[i][1] ^ lastAnswer) % n);
            arr[idx].push(queries[i][2]);
        }else if(queries[i][0] == 2){
            idx = ((queries[i][1] ^ lastAnswer) % n);
            lastAnswer = arr[idx][queries[i][2] % arr[idx].length];
            resTab.push(lastAnswer);
        }
    }
    return resTab;
}
