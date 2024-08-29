/*
 * Complete the 'sibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
    // Write your code here
    let res = 0;
    let f = new Array(k);
    for(let i=0;i<k;i++){
        f[i]=0;
    }

    for (let i = 0; i < s.length; i++){
        f[s[i] % k]++;
    }

    if (k % 2 == 0){
        f[k/2] = Math.min(f[k/2], 1);
    }

    res = Math.min(f[0], 1);

    for (let i = 1; i <= k/2; i++){
        res += Math.max(f[i], f[k-i]);
    }
    return res;
}
let k=5;
let s = [770528134, 663501748, 384261537, 800309024, 103668401, 538539662, 385488901, 101262949, 557792122, 46058493];
// let s = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282,718, 771,436, 575];
// let s = [1, 2, 3, 4, 5];
// let k=1;
console.log(nonDivisibleSubset(k, s));


