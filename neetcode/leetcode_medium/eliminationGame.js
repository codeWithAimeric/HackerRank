/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  if (n === 1) {
    return 1;
  }

  if (n % 2 === 0) {
    return 2 * (n / 2 + 1 - lastRemaining(n / 2));
  } else {
    return 2 * (Math.floor(n / 2) + 1 - lastRemaining(Math.floor(n / 2)));
  }
};

let n = 9;
console.log(lastRemaining(n));


