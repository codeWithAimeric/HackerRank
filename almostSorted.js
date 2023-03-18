/*
 * Complete the 'almostSorted' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function almostSorted(arr) {
    // Write your code here
    let arrSorted = [];
    let resTab = [];
    let isConsecutive = true; 
    
    for(let i=0; i<arr.length; i++){
    		arrSorted[i] = arr[i];
    }
    arr.sort((a, b) => a-b);
    console.log(arr);
    console.log(arrSorted);
    for(let i=0; i<arrSorted.length; i++){
    	if(arr[i] != arrSorted[i]){
      		resTab.push(i);
      }
    }
    if(resTab.length == 2){
        console.log('yes');
        console.log('swap'+' '+resTab[0]+' '+resTab[1]);
    }else if(resTab.length == 0){
        console.log('yes');
    }else if(resTab.length > 2){
        for(let i=1; i<resTab.length; i++){
            if(resTab[i] != resTab[i-1]+1){
                isConsecutive = false; 
                break;
            }
        }
        if(isConsecutive == false){
            console.log('no');
        }else{
            console.log('yes');
            console.log('reverse'+' '+resTab[0]+' '+resTab[resTab.length-1]);
        }
    }
}

let tab = [3, 5, 2, 1];
let res = tab.sort((a, b) => a-b);
console.log('res', res);