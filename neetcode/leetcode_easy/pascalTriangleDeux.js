/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [[1], [1, 1]];
    let tempArr = [1, 1];
    let numRows = rowIndex+1;
    if(rowIndex == 0){
        return [1];
    }else if(rowIndex == 1){
        return res[rowIndex];
    }else if(rowIndex > 1){
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
        return res[rowIndex]; 
    }
};

let rowIndex = 5;
console.log(getRow(rowIndex));