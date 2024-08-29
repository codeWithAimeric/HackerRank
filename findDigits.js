/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    // Write your code here
    let count = 0;
    let myString = n.toString();
    let myArr = myString.split('');
    let temp = 0;
    for(let i=0; i<myArr.length; i++){
        temp = Number(myArr[i]);
        if(temp == 0){
            continue;
        }
        if(n%temp == 0){
            count++;
        }
        
    }
    return count;
}