/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const getTotalBananas = (speed) => piles.reduce((total, pile) => total + Math.ceil(pile / speed), 0);
  
    let left = 1;
    let right = Math.max(...piles);
  
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const totalBananas = getTotalBananas(mid);
  
        if (totalBananas > h) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
  
    return left;
};

let piles = [3,6,7,11], h = 8 //4
// let piles = [30,11,23,4,20], h = 5 //30
// let piles = [30,11,23,4,20], h = 6 //23

console.log(minEatingSpeed(piles, h));