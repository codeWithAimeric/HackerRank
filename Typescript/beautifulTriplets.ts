/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

const beautifulTriplets = (d: number, arr: Array<number>): number => {
    // Write your code here
    let count: number = arr[0];
    let max: number = arr[arr.length - 1];
    let result: number = 0;
  
    let { values }: any = new Array(arr.length).fill(0).reduce(
      (target: any, item: number, index: number) => {
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


let d: number = 3;
let arr: Array<number> = [1, 2, 4, 5, 7, 8, 10];//3
console.log(beautifulTriplets(d, arr));