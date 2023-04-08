/*
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function gameOfThrones(s) {
    // Write your code here
    let myString = s.split('');
    for(let i=0; i<myString.length; i++){
        for(let j=i+1; j<myString.length; j++){
            if(myString[i] == myString[j]){
                myString.splice(j, 1);
                myString.splice(i, 1);
                i = -1;
                break;
            }
        }
    }
    if(myString.length > 1){
        return 'NO';
    }else{
        return 'YES';
    }
}

let s = 'aabbccdd';
console.log(gameOfThrones(s));