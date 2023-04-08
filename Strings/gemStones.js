/*
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function gemstones(arr) {
    // Write your code here
    let count = 1;
    let countVal = 0; 
    let lengthString = arr.length; 
    let tempTab = [];
    let myString = arr.map(element => element.split(''));
    for(let k=0; k<myString.length; k++){
        for(let i=0; i<myString[k].length; i++){
            for(let j=0; j<myString.length; j++){
                // console.log('i-------------', i);
                // console.log('j-------------', j);
                // console.log('k-------------', k);
                // console.log('mySTring[k][i]========', myString[k][i]);
                // console.log('mySTring[j]-------', myString[j]);
                if(k == j){
                    continue; 
                }
                if(tempTab.includes(myString[k][i])){
                    continue; 
                }
                if(!myString[j].includes(myString[k][i])){
                    break;
                }else{
                    count++;
                }
                if(count == lengthString){
                    tempTab.push(myString[k][i]);
                }
                console.log('tempTab--', tempTab);
            }
            // console.log('count ======', count);
            if(count == lengthString){
                countVal++;
                // console.log('countVal == =', countVal);
            }
            count = 1;
        }
    }
    return countVal; 
}

let arr = ['basdfj', 'asdlkjfdjsa', 'bnafvfnsd', 'oafhdlasd'];
console.log(gemstones(arr));