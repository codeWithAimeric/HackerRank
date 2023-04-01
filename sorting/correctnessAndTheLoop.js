function insertionSort (ar) {
    let temp = 0;
    for(i = 1; i < ar.length; i++){
        var value = ar[i];
        var j = i - 1;
        while(j > 0 && ar[j] > value){
          ar[j + 1] = ar[j];
          j = j - 1;
        }
        ar[j + 1] = value;
    }
    for(let i=1; i<ar.length; i++){
            if(ar[i]>ar[i-1]){
                break;
            }
        temp = ar[i];
        ar[i] = ar[i-1];
        ar[i-1] = temp;
    }
    return ar;
}

var ar;
ar = [9, 8, 6, 7, 3, 5, 4, 1, 2];
// ar = [7, 4, 3, 5, 6, 2];
console.log(insertionSort(ar));
//print ar