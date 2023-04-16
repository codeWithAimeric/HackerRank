/*
 * Complete the 'filledOrders' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY order
 *  2. INTEGER k
 */

function filledOrders(order, k) {
    // Write your code here
    let count = 0;
    order.sort((a, b) => a-b);
    for(let i=0; i<order.length; i++){
        if(k <= 0) {
            break; 
        }
        if(order[i] > k){
            continue; 
        }else{
            k -= order[i];
            count++;
        }
    }
    return count; 
}

let order = [10, 30];
let k=40;
console.log(filledOrders(order, k));