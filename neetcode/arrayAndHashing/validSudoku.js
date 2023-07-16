/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isValidArray = (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i]) && arr[i] != "."){
            console.log('arr[i', arr[i]);
            console.log('arr = = =', arr);
            return false; 
        }
    }
    return true; 
}
var isValidSudoku = function(board) {
    let tempTab = [];
    let square = [];
    for(let i=0; i<9; i++){
        if(!isValidArray(board[i])){
            return false; 
        }
    }
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            tempTab.push(board[j][i]);
        }
        if(!isValidArray(tempTab)){
            return false;
        }
        tempTab = [];
    }
    for(let i=0; i<9; i+=3){
        for(let j=0; j<9; j+=3){
            square.push(board[i][j]);
            square.push(board[i][j+1]);
            square.push(board[i][j+2]);
            square.push(board[i+1][j]);
            square.push(board[i+1][j+1]);
            square.push(board[i+1][j+2]);
            square.push(board[i+2][j]);
            square.push(board[i+2][j+1]);
            square.push(board[i+2][j+2]);
            if(!isValidArray(square)){
                return false;
            }
            square = [];
        }
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
,[".",".",".",".","8",".",".","7","9"]]; //true

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
