function max(a, b) {
    return (a > b) ? a : b;
    }
    function knapsack(capacity, size, value, n) {
    if (n == 0 || capacity == 0) {
    return 0;
    }
    if (size[n-1] > capacity) {
    return knapsack(capacity, size, value, n-1);
    }
    else {
    return max(value[n-1] +
    knapsack(capacity-size[n-1], size, value, n-1),
    knapsack(capacity, size, value, n-1));
    }
}

var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;
console.log(knapsack(capacity, size, value, n));