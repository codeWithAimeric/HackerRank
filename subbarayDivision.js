/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
    let num = s;
    let nums = [];
    let count = 0;
    const add = (arr) => arr.reduce((a, b) => a + b, 0);
    for (let i = 0; i < s.length; i++) {
      let tempTab = num.slice(0 + i, m + i);
      nums.push(tempTab);
    }
    if(num.length===1 && num[0]===d){
        count++;
    }else{
      nums.forEach((item) => {
          if (add(item) === d) {
            count++;
          }
        });
    }
    return count;
}