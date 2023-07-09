/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] == "."){
                board[i][j] = "";
            }
        }
    }
    let tempSet = new Set();
    let tempTab = [];
    let verticalTab = [];
    for(let i=0; i<board.length; i++){
        tempSet.add(board[i]);
        tempTab = Array.from(tempSet);
        if(tempTab.join('') == board[i].join('')){
            return false;
        }
    }
    tempSet = new Set();
    tempTab = [];
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            tempTab.push(board[j][i]);
            tempSet.add(board[j][i]);
        }
        verticalTab = Array.from(tempSet);
        if(verticalTab.join('') == tempTab.join('')){
            return false; 
        }
        tempSet = new Set();
        tempTab = [];
    }
    let tempSet1 = new Set();
    let tempTab1 = [];
    let compareArray1 = [];
    let tempSet2 = new Set();
    let tempTab2 = [];
    let compareArray2 = [];
    let tempSet3 = new Set();
    let tempTab3 = [];
    let compareArray3 = [];
    const subArray1 = [];
    const subArray2 = [];
    const subArray3 = [];
    subArray1.push(board[0]);
    subArray1.push(board[1]);
    subArray1.push(board[2]);
    console.log('subArray 1 ===', subArray1);
    subArray2.push(board[3]);
    subArray2.push(board[4]);
    subArray2.push(board[5]);
    console.log('subArray2 = = = = =', subArray2);
    subArray3.push(board[6]);
    subArray3.push(board[7]);
    subArray3.push(board[8]);
    console.log('subArray3 = = = = =', subArray3);
    for(let i=0; i<9; i+=3){
        for(let j=0; j<=2; j++){
            for(let k=i; k<=i+2; k++){
                tempTab1.push(subArray1[j][k]);
                tempSet1.add(subArray1[j][k]);
                tempTab2.push(subArray2[j][k]);
                tempSet2.add(subArray2[j][k]);
                tempTab3.push(subArray3[j][k]);
                tempSet3.add(subArray3[j][k]);
            }
        }
        compareArray1 = Array.from(tempSet1);
        compareArray2 = Array.from(tempSet2);
        compareArray3 = Array.from(tempSet3);
        if(compareArray1.join('') == tempTab1.join('')){
            return false; 
        }
        if(compareArray2.join('') == tempTab2.join('')){
            return false; 
        }
        if(compareArray3.join('') == tempTab3.join('')){
            return false; 
        }
        tempTab1 = [];
        tempSet1 = new Set();
        tempTab2 = [];
        tempSet2 = new Set();
        tempTab3 = [];
        tempSet3 = new Set();
    }
    return true; 
};

let  board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

// let board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]; //false 

console.log(isValidSudoku(board));
