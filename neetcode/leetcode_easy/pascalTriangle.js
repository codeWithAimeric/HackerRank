/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1], [1, 1]];
    let tempArr = [1, 1];
    if(numRows == 1){
        return [[1]];
    }else if(numRows == 2){
        return res;
    }else if(numRows > 2){
        for(let i=3; i<=numRows; i++){
            let resArr = [];
            let tempVal = 0;
            resArr.push(1);
            for(let j=0; j<tempArr.length-1; j++){
                tempVal = tempArr[j] + tempArr[j+1];
                resArr.push(tempVal);
            }
            resArr.push(1);
            tempArr = [...resArr];
            res.push(tempArr);
        }
        return res; 
    }
};

let numRows = 5; 
console.log(generate(numRows));