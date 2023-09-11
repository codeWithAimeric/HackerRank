/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};
const checkInArray = (doubleArr, simpleArr) => {
    if(doubleArr.length == 0){
        return true; 
    }
    let copyDoubleArr = doubleArr.map(arr => [...arr]);
    let simpleArrSorted = simpleArr.sort((a, b) => a-b);
    for(let i=0; i<copyDoubleArr.length; i++){
        let currentVal = copyDoubleArr[i].sort((a, b) => a-b);
        if(arraysEqual(currentVal, simpleArrSorted)){
            return false; 
        }
    }
    return true; 
}
var combinationSum = function(candidates, target) {
    let tempArr = [];
    let resArr = [];
    for(let i=0; i<candidates.length; i++){
        if(target > candidates[i]){
            if(target % candidates[i] == 0){
                let n = candidates[i];
                let initialValue = 0;
                while (initialValue < target) {
                    tempArr.push(candidates[i]);
                    initialValue += n;
                }
                resArr.push(tempArr);
                tempArr = [];
            }else{
                let resDiv = Math.floor(target/candidates[i]);
                for(let j=resDiv; j>0; j--){
                    let val = target-(j*candidates[i]);
                    if(candidates.includes(val)){
                        tempArr.push(val);
                        for(let k=0; k<j; k++){
                            tempArr.push(candidates[i]);
                        }
                        if(checkInArray(resArr, tempArr)){
                            resArr.push(tempArr);
                        }
                        tempArr = [];
                        break; 
                    }
                }
            }
        }else if(target < candidates[i]){
            continue; 
        }else{
            resArr.push([target]);
        }
    }
    return resArr; 
};

// let candidates = [2, 3, 6, 7];
// let target = 7;
let candidates = [2, 3, 5];
let target = 8;
// let candidates = [2, 3];
// let target = 5;
console.log(combinationSum(candidates, target));