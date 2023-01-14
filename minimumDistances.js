/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    // Write your code here
    let res = 0;
    let result = [];
    let resNull = -1;
    for(let i=0; i<a.length-1; i++){
        for(let j=i+1; j<a.length; j++){
            if(a[i] == a[j]){
                res=Math.abs(j-i);
                result.push(res);
                break;
            }
        }
    }
    if(result.length == 0){
        return resNull;
    }else{
        return Math.min(...result); 
    }
}

let a =[1, 2, 3, 4, 10];
console.log(minimumDistances(a));