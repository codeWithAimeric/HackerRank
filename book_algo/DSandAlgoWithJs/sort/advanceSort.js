function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.gaps = [5,3,1];
    this.setGaps = setGaps; 
    this.shellsort = shellsort; 
    this.mergeSort = mergeSort;
    this.mergeArrays = mergeArrays; 

    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}
function setData() {
    for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() *
    (this.numElements+1));
    }
}
function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
    }
}
function insert(element) {
    this.dataStore[this.pos++] = element;
}
function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function setGaps(arr) {
    this.gaps = arr;
}


//-----------shellsort----------------
function shellsort() {
    for (var g = 0; g < this.gaps.length; ++g) {
        for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
            var temp = this.dataStore[i];
            for (var j = i; j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > temp; j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
}

//-----------merge sort------------------
function mergeSort(arr) {
    if (arr.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left+step, right, right+step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left+step, right, arr.length);
        }
        step *= 2;
    }
}
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length-1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (var i = 0; i < (leftArr.length-1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length-1] = Infinity; // a sentinel value
    leftArr[leftArr.length-1] = Infinity; // a sentinel value
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        }
        else {
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log("left array - ", leftArr);
    console.log("right array - ", rightArr);
}

//----------------quick sort------------------
function qSort(arr)
{
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        console.log("pivot: " + pivot + " current element: " + arr[i]);
        if (arr[i] < pivot) {
            console.log("moving " + arr[i] + " to the left");
            left.push(arr[i]);
        } else {
            console.log("moving " + arr[i] + " to the right");
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}

/**
 * ---------quick sort avec une approche itérative qui évite la récursivité excessive
 * -----------------*******************----------------------------------------------
 */
function qSortIterative(arr){
    if(arr.length <= 1){
      return arr;
    }
    
    let stack = [[0, arr.length - 1]];
    
    while(stack.length > 0){
      let [low, high] = stack.pop();
      
      if(low < high){
        let pivotIndex = partition(arr, low, high);
        stack.push([low, pivotIndex - 1]);
        stack.push([pivotIndex + 1, high]);
      }
    }
    
    return arr;
}
  
function partition(arr, low, high){
    let pivot = arr[high];
    let i = low - 1;

    for(let j = low; j < high; j++){
        if(arr[j] < pivot){
            i++;
            swapIterative(arr, i, j);
        }
    }
    swapIterative(arr, i + 1, high);

    return i + 1;
}

function swapIterative(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var nums = new CArray(10);
nums.setData();
console.log("Before Shellsort: \n");
console.log(nums.toString());
console.log("\nDuring Shellsort: \n");
nums.shellsort();
console.log("\nAfter Shellsort: \n");
console.log(nums.toString());

var nums2 = [6,10,1,9,4,8,2,7,3,5];
console.log('-----------------merge sort-----------------');
console.log(nums2);
console.log();
mergeSort(nums2);
console.log();
console.log(nums2);

console.log('-------------quick sort----------------');
var a = [];
for (var i = 0; i < 10; ++i) {
    a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log();
console.log(qSort(a));