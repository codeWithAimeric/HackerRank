/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */
//n: number of prisoner
//m: number of candy
//s: the position where to start distribution

function saveThePrisoner(n, m, s) {
    // Write your code here
    let lastPrisoner = (s + m - 1) % n;
    
    return lastPrisoner === 0 ? n : lastPrisoner;
}
