/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    // Write your code here
    let len = s.length;
    if(len == 1){
        console.log('NO');
        return; 
    }
    for (let i = 1; i <= Math.ceil(len / 2); i++) {
        let x = BigInt(s.substring(0, i));
        let temp = x;
        let res = x.toString();
        console.log('res=', res);
        while (res.length < len) {
        temp = temp + BigInt(1);
        res += temp.toString();
        }
        if (res === s) {
        console.log("YES " + x);
        return;
        }
    }
    console.log("NO");
}


let s = '7891011';
// let s = '91011';
// let s = '010203';
console.log(separateNumbers(s));
