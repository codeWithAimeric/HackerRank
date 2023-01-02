/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) {
    // Write your code here
    let resTab = [];
    let count = 0;
    for(let i=0; i<queries.length; i++){
        for(let j=0; j<stringList.length; j++){
            if(queries[i] == stringList[j]){
                count++;
            }else{
                continue;
            }
        }
        resTab.push(count);
        count = 0;
    }
    return resTab; 
}