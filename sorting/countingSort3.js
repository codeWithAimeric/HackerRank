/**
 * Counting sort 3
 */
function countingSort(arr) {
    const counts = new Array(100).fill(0);
  
    for (let i = 0; i < arr.length; i++) {
      counts[arr[i]]++;
    }
  
    let total = 0;
    const result = [];
  
    for (let count of counts) {
      total += count;
      result.push(total);
    }
  
    return result;
}
function processData(input) {
    //Enter your code here
    const lines = input.split('\n');
    const n = parseInt(lines[0]);

    const arr = [];
    for (let i = 1; i <= n; i++) {
        const num = parseInt(lines[i].split(' ')[0]);
        arr.push(num);
    }

    const result = countingSort(arr);
    console.log(result.join(' '));
} 