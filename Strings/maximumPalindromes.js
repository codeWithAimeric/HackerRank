/*
 * Complete the 'initialize' function below.
 *
 * The function accepts STRING s as parameter.
 */

function initialize(s) {
    // This function is called once before all queries.
    let queries = [[1, 4], [2, 7], [3, 8]];
    const resTab = [];
    for(let i=0; i<queries.length; i++){
        resTab.push(answerQuery(queries[i][0], queries[i][1]));
    }
    return resTab; 
}

/*
 * Complete the 'answerQuery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function answerQuery(l, r) {
    // Return the answer for this query modulo 1000000007.
    // let s = 'madamimadam';
    let s = 'abab';
    let myString = s.substring(l-1, r).split('');
    console.log('myString---', myString);
    let tempString = [];
    let x = 0;
    let countPalindrome = 0;
    let isPalindrome = true;
    for(let i=0; i<myString.length; i++){
        for(let j=i+1; j<myString.length; j++){
            if(myString[i] == myString[j]){
                tempString.splice(x, 0, myString[i]);
                tempString.splice(x+1, 0, myString[j]);
                myString.splice(j, 1);
                myString.splice(i, 1);
                x++;
                i =-1;
                countPalindrome++;
                break; 
            }
        }
    }
    console.log(countPalindrome);
    console.log('tempString---', tempString);
    for(let i=0, j=tempString.length-1; i<Math.floor(tempString.length/2) && j>Math.floor(tempString.length/2); i++, j--){
        if(tempString[i] != tempString[j]){
            isPalindrome = false; 
            break; 
        }
    }
    if(!isPalindrome){
        return 0;
    }else{
        if(myString.length > 1 && countPalindrome == 1){
            return myString.length;
        }else{
            return countPalindrome;
        }
    }
}

let l = 1;
let r = 4;
console.log(answerQuery(l, r));