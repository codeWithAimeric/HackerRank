/*
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER d
 *  3. INTEGER m
 *  4. INTEGER s
 */

function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    if (s < p) return 0;
    
    let sum = p;
    let itemsCount = 0;
    while(sum <= s) {
        p = Math.max(p-d, m)
        sum += p;
        itemsCount++;    
    }
    
    return itemsCount;
}

// let p=16; let d=2; let m=1; let s=9981; //9917
let p=1; let d=100; let m=1; let s=9777; //9777
console.log(howManyGames(p, d, m, s));