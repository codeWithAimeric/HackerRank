/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
    // Write your code here
    let count = arr[0];
    let max = arr[arr.length - 1];
    let result = 0;
  
    let { values } = new Array(arr.length).fill(0).reduce(
      (target, item, index) => {
        target["values"][arr[index]] = target["values"][arr[index]]
          ? (target["values"][arr[index]] += 1)
          : 1;
  
        return target;
      },
      { values: {} }
    );
  
    while (count <= max) {
      values[count] &&
        values[count + d] &&
        values[count + d * 2] &&
        (result += Math.max(
          values[count],
          values[count + d],
          values[count + d * 2]
        ));
  
      count++;
    }
  
    return result;
}


let d=3;
let arr=[1, 2, 4, 5, 7, 8, 10];//3
console.log(beautifulTriplets(d, arr));