/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimetre = 0; 
    let m = grid.length; 
    let n = grid[0].length; 
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] == 1){
                perimetre += 4;
                if(i+1 < m && grid[i+1][0] == 1){
                    perimetre--; 
                }
                if(j+1 < n && grid[i][j+1] == 1){
                    perimetre--;
                }
                if(i-1 >= 0 && grid[i-1][j] == 1){
                    perimetre--;
                }
                if(j-1 >= 0 && grid[i][j-1] == 1){
                    perimetre--; 
                }
            }
        }
    }
    return perimetre; 
};

let grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];
console.log(islandPerimeter(grid)); 