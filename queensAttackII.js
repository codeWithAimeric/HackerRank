/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    let up = n - r_q;
    let right = n - c_q;
    let down = r_q - 1;
    let left = c_q - 1;

    let up_left = Math.min(up, left);
    let up_right = n - Math.max(c_q, r_q);
    let down_left = Math.min(c_q, r_q) - 1;
    let down_right = Math.min(r_q - 1, n - c_q);

    for (let i of Array.from({ length: k }, (value, index) => index)) {
    let { 0: r_o, 1: c_o } = obstacles[i];

    r_o == r_q &&
      (c_o > c_q
        ? (up = Math.min(up, c_o - c_q - 1))
        : (down = Math.min(down, c_q - c_o - 1)));

    c_o == c_q &&
      (r_o > r_q
        ? (right = Math.min(right, r_o - r_q - 1))
        : (left = Math.min(left, r_q - r_o - 1)));

    Math.abs(c_o - c_q) == Math.abs(r_o - r_q) &&
      (c_o > c_q && r_o > r_q && (up_right = Math.min(up_right, c_o - c_q - 1)),
      c_o > c_q &&
        r_o < r_q &&
        (down_right = Math.min(down_right, c_o - c_q - 1)),
      c_o < c_q && r_o > r_q && (up_left = Math.min(up_left, c_q - c_o - 1)),
      c_o < c_q &&
        r_o < r_q &&
        (down_left = Math.min(down_left, c_q - c_o - 1)));
    }

    return right + left + up + down + down_left + up_left + down_right + up_right;
}

let obstacles = [[5, 5], [4, 2],[2, 3]];
// let obstacles = [];
let k=3; 
let r_q = 4;
let c_q = 3;
let n = 5;
console.log(queensAttack(n, k, r_q, c_q, obstacles));