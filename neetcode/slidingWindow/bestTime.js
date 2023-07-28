/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2) {
        return 0; 
    }
    
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }else{
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    return maxProfit; 
};

let prices = [7,1,5,3,6,4]; //5
// let prices = [7,6,4,3,1]; // 0
console.log(maxProfit(prices));