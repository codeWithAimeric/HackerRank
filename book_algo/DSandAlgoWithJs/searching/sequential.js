function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data && i > (arr.length * 0.2)) {
            swap(arr,i,0);
            return true;
        } else if (arr[i] == data) {
            return true;
        }
    }
    return false;
}

function swap(arr, index, index1) {
    temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}

function dispArr(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
        if (i % 10 == 9) {
            console.log("\n");
        }
    }
    if (i % 10 != 0) {
        console.log("\n");
    }
}

//-------------search for minimum value --------------
function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

//-----------search for maximum value --------------
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


var nums = [];
for (var i = 0; i < 100; ++i) {
nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);
console.log("Enter a number to search for: ");
var num = 12;
console.log();
if (seqSearch(nums, num)) {
console.log(num + " is in the array.");
}
else {
console.log(num + " is not in the array.");
}
console.log();
dispArr(nums);