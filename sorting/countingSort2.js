/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
    let tab = [];
    let sorted = [];
    for(let i=0; i<arr.length; i++){
        tab.push(0);
    }
    for(let i=0; i<arr.length; i++){
        tab[arr[i]]++;
    }
    // return tab;
    console.log('tab = = =', ...tab);
    for(let i=0; i<tab.length; i++){
        if(tab[i] == 0){
            continue; 
        }
        for(let j=1; j<=tab[i]; j++){
            sorted.push(i);
        }
    }
    return sorted; 
}

let tab = [1, 1, 3, 2, 1];
console.log(countingSort(tab));