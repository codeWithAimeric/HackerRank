/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let temp;
    if((x2 > x1) && v2 > v1)
    {
        return 'YES';
    }
        for(let i=v1, j=v2; i<=10000, j<=10000; i+=v1, j+=v2){
            if((x1 += i) == (x2 += j)){
                temp = 1;
                break;
            }else continue;
        }
        if(temp == 1){
            return 'YES';
        }else return 'NO';
}