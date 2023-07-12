/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while (i !== j) {
      if (numbers[i] + numbers[j] > target) {
        j--;
      } else if (numbers[i] + numbers[j] < target) {
        i++;
      } else {
        return [i + 1, j + 1];
      }
    }
};

let numbers = [1,2,3,4,4,9,56,90];
let target = 8;
// let numbers = [2,7,11,15];
// let target = 9;
console.log(twoSum(numbers, target));
