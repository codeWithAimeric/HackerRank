/*
 * Complete the 'minimumLoss' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts LONG_INTEGER_ARRAY price as parameter.
 */

function minimumLoss(price) {
    // Write your code here
    let n = price.length;
    let map = new Map();
    let minLoss = Infinity;
    for (let i = 0; i < n; i++) {
        map.set(price[i], i);
    }
    console.log(map);
    price.sort((a, b) => b - a);
    console.log('price = == = =', price);
    for (let i = 0; i < n - 1; i++) {
        console.log('price[i]--', price[i]);
        let diff = price[i] - price[i + 1];

        if (diff < minLoss && map.get(price[i]) < map.get(price[i + 1])) {
            console.log('map.get(price[i])====', map.get(price[i]));
            minLoss = diff;
        }
    }
    return minLoss;
}

// let price = [20, 15, 8, 2, 12];
let price = [5, 10, 3];
console.log(minimumLoss(price));

