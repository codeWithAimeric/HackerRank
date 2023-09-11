/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let countW = 0;
    let res = Infinity;
    for(let i=0; i<=blocks.length-k; i++){
        let end = i+k-1;
        countW = 0;
        for(let j=i; j<=end; j++){
            if(blocks[j] == "W"){
                countW++;
            }
        }
        res = Math.min(res, countW);
    }
    return res; 
};

let blocks = "WBBWWBBWBW";
let k = 7;
console.log(minimumRecolors(blocks, k));