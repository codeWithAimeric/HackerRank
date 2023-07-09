function binSearch(arr, data) {
    var upperBound = arr.length-1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        console.log("Current midpoint: " + mid);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
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

function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (var i = position-1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
        for (var i = position+1; i < arr.length; ++i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
    }
    return count;
}   

var nums = [];
for (var i = 0; i < 100; ++i) {
nums[i] = Math.floor(Math.random() * 101);
}
// insertionsort(nums);
nums.sort();
dispArr(nums);
console.log();
var val = 14;
console.log("Enter a value to search for: "+ val);
var retVal = binSearch(nums, val);
if (retVal >= 0) {
console.log("Found " + val + " at position " + retVal);
}
else {
console.log(val + " is not in array.");
}
var retVal2 = count(nums, val);
console.log("Found " + retVal2 + " occurrences of " + val + ".");