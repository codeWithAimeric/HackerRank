/*
 * Complete the 'gridlandMetro' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER k
 *  4. 2D_INTEGER_ARRAY track
 */

function gridlandMetro(n, m, k, track) {
    // Write your code here
    let matrice = [];
    let tempTab = [];
    let count = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            tempTab.push(1);
        }
        matrice.push(tempTab);
        tempTab = [];
    }
    for(let i=0; i<track.length; i++){
        for(let j=track[i][1]-1; j<=track[i][2]-1; j++){
            matrice[track[i][0]-1][j] = 0;
        }
    }
    for(let i=0; i<matrice.length; i++){
        for(let j=0; j<matrice[i].length; j++){
            if(matrice[i][j] == 1){
                count++;
            }
        }
    }
    return count;
}

let n = 2;
let m = 9;
let k = 3;
let track = [[2, 1, 5], [2, 2, 4], [2, 8, 8]];
console.log(gridlandMetro(n, m, k, track));

// const map = new Map();
//   let total = BigInt(n) * BigInt(m);
//   for (let [r, c1, c2] of track) {
//     if (!map.has(r)) {
//       map.set(r, []);
//     }
//     const row = map.get(r);
//     let inserted = false;
//     for (let i = 0; i < row.length; i++) {
//       const [start, end] = row[i];
//       if (c1 > end) {
//         row.splice(i, 0, [c1, c2]);
//         inserted = true;
//         break;
//       } else if (c2 < start) {
//         row.splice(i, 0, [c1, c2]);
//         inserted = true;
//         break;
//       } else {
//         c1 = Math.min(c1, start);
//         c2 = Math.max(c2, end);
//         row.splice(i, 1);
//       }
//     }
//     if (!inserted) {
//       row.push([c1, c2]);
//     }
//   }
//   for (let [_, row] of map) {
//     for (let [start, end] of row) {
//       total -= BigInt(end - start + 1);
//     }
//   }
//   return total.toString();