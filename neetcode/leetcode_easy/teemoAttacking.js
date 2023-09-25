/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0) {
        return 0;
    }

    let totalDuration = 0;

    for (let i = 0; i < timeSeries.length - 1; i++) {
        totalDuration += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
    }

    totalDuration += duration;

    return totalDuration;
};
function generateValuesBetween(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}



// let duration = 2;
let duration = 5;

// let timeSeries = [1, 2];
let timeSeries = [1, 2, 3, 4, 5];
console.log(findPoisonedDuration(timeSeries, duration));