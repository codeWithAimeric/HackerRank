/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function circularArrayRotation(a, k, queries) {
    // Write your code here
    // return queries.map(value => a.reduce((target, item, index) => {
    //     let focus = (index + k) % a.length;
    //     target[focus] = item;

    //     return target;
    // }, [])[value]);
    let n = a.length;
    let res = [];
    let copyArr = Array.from(a);
     for (let i = 0; i < n; i++) {
        let newIndex = (i + k) % n;
        a[newIndex] = copyArr[i];
    }
    for(let i=0; i<queries.length; i++){
        res.push(a[queries[i]]);
    }
    return res;
}