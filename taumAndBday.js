/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    const gifts = BigInt(b) + BigInt(w);

    const whiteGifts = gifts * BigInt(wc) + (BigInt(b) * BigInt(z));
    const blackGifts = gifts * BigInt(bc) + (BigInt(w) * BigInt(z));

    let min = BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc);

    (blackGifts < min) && (min = blackGifts);
    (whiteGifts < min) && (min = whiteGifts);

    return min;
}

let b=384; 
let w=887; 
let bc=2778; 
let wc=6916; 
let z=7794;

console.log(taumBday(b, w, bc, wc, z));