/*
 * Complete the 'twoPluses' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function twoPluses(grid) {
    // Write your code here
    let n = grid.length-1;
    let grid2 = grid.map(element => {
        return element.split('')
    });
    let m = grid2[0].length-1; 
    let isOne = false;
    let count = 1;
    let tab = [];
    let val1 = 0;
    let val2 = 0;
    let tmpMax = 0;
    console.log('grid2[0][1]------------------------', grid2[0][1]);
    for(let i=1; i<n; i++){
        for(let j=0; j<=m; j++){
            if(grid2[i][j] == 'G'){
                if(!isOne){
                    tab.push(1);
                    isOne=true;
                }
                for(let w=j-1, x=i-1, y=j+1, z=i+1; w>=0 && x>=0 && y<=m && z<=n; w--, x--, y++, z++){
                    if(grid2[i][w] == 'G' && grid2[x][j] == 'G' && grid2[i][y] == 'G' && grid2[z][j] == 'G'){
                        console.log('w = = = = ', w);
                        console.log('x = = = =', x);
                        console.log('y = = = =', y);
                        console.log('z = = = =', z);
                        console.log(grid2[i][w]);
                        console.log(grid2[x][j]);
                        console.log(grid2[i][y]);
                        console.log(grid2[z][j]);
                        count+=4;
                        grid2[i][w] = 'F';
                        grid2[x][j] = 'F';
                        grid2[i][y] = 'F';
                        grid2[z][j] = 'F';
                        console.log('grid2 = = ', grid2);
                    }else{
                        break;
                    }
                }
                tab.push(count);
                count = 1;
            }
        }
    } 
    console.log('tab = = = = =', tab);
    val1 = Math.max(...tab);
    tab.splice(tab.indexOf(val1), 1);
    val2 = Math.max(...tab);

    return val1*val2;
}

// let grid = [
//     'BGBBGB', 
//     'GGGGGG', 
//     'BGBBGB', 
//     'GGGGGG', 
//     'BGBBGB', 
//     'BGBBGB'
// ];
// let grid = ['GGGGGGGG',
//     'GBGBGGBG',
//     'GBGBGGBG',
//     'GGGGGGGG',
//     'GBGBGGBG',
//     'GGGGGGGG',
//     'GBGBGGBG',
//     'GGGGGGGG']; //81


let grid = ['GGGGGGGGGG',
    'GBBBBBBGGG',
    'GGGGGGGGGG',
    'GGGGGGGGGG',
    'GBBBBBBGGG',
    'GGGGGGGGGG',
    'GBBBBBBGGG',
    'GBBBBBBGGG',
    'GGGGGGGGGG'];
console.log(twoPluses(grid));