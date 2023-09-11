/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b); 
    const result = [];

    function backtrack(start, currentSum, currentCombination) {
        if (currentSum === target) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (currentSum + candidates[i] <= target) {
                currentCombination.push(candidates[i]);
                backtrack(i + 1, currentSum + candidates[i], currentCombination);
                currentCombination.pop();
            }
        }
    }

    backtrack(0, 0, []);
    return result;
};

let candidates = [10, 1, 2, 7, 6, 1, 5];
let target = 8;
console.log(combinationSum2(candidates, target));