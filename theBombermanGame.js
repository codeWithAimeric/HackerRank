/*
 * Complete the 'bomberMan' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */

function bomberMan(n, grid) {
    // Write your code here
    let tempTab = [];
    let t = [];
    let tempBomb = [];
    let val1 = 0;
    let val2 = 0;
    let t2 = [];
    tempTab = grid.map(element => {
        return element.split('')
    });
    if(n==1){
        return grid;
    }else if(n == 2){
        for(let i=0; i<tempTab.length; i++){
            for(let j=0; j<tempTab[i].length; j++){
                tempTab[i][j] = 'O';
            }
        }
        return tempTab.map(element => {
            return element.join('')
        });
    }
    for(let i=0; i<tempTab.length; i++){
        for(let j=0; j<tempTab[i].length; j++){
            if(tempTab[i][j] == 'O'){
                t.push(i);
                t.push(j);
                tempBomb.push(t);
            }
            t = [];
        }
    }
    for(let i=3; i<=n; i++){
        console.log('tempBomb ---------------', tempBomb);
        for(let j=0; j<tempTab.length; j++){
            for(let k=0; k<tempTab[i].length; k++){
                tempTab[j][k] = 'O';
            }
        }
        for(let j=0; j<tempBomb.length; j++){
            val1 = tempBomb[j][0];
            val2 = tempBomb[j][1];
            if(tempTab[val1]){
                if(tempTab[val1][val2]){
                    tempTab[val1][val2] = '.';
                }
            }
            if(tempTab[val1 +1]){
                if(tempTab[val1 +1][val2]){
                    tempTab[val1 +1][val2] = '.';
                }
            }
            if(tempTab[val1 -1]){
                if(tempTab[val1 -1][val2]){
                    tempTab[val1 -1][val2] = '.';
                }
            }
            if(tempTab[val1]){
                if(tempTab[val1][val2 +1]){
                    tempTab[val1][val2 +1] = '.';
                }
            }
            if(tempTab[val1]){
                if(tempTab[val1][val2 -1]){
                    tempTab[val1][val2 -1] = '.';
                }
            }
        }

        console.log('tempTab n=i-------------', tempTab);
        tempBomb = [];
        //re-creation de tempBomb
        for(let j=0; j<tempTab.length; j++){
            for(let k=0; k<tempTab[j].length; k++){
                if(tempTab[j][k] == 'O'){
                    t2.push(j);
                    t2.push(k);
                    tempBomb.push(t2);
                    t2 = [];
                }
            }
        }

    }
    console.log('tempBomb', tempBomb);
    return tempTab.map(element => {
        return element.join('')
    });
}

// let grid =['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....'];
// let n=3;
let grid = ['.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...'];
let n=4;
console.log(bomberMan(n, grid));
