/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    // Write your code here
    bill.splice(k, 1);
    let sommeTab = bill.reduce((a, b) => a+b, 0);
    let bAnna;
    bAnna = sommeTab / 2;
    if(bAnna == b){
        console.log('Bon Appetit');
    }else{
        console.log(Math.abs(bAnna - b));
    }
}