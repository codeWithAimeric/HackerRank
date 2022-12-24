/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
    // Write your code here
    let temp;
    let res;
    let resTab = [];
    for(let i=1; i<=p.length; i++){
        temp = p.indexOf(i) +1;
        res = p.indexOf(temp) + 1;
        resTab.push(res);
    }
    return resTab; 
}
