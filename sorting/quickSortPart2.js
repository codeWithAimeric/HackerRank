function quickSort(arr) {
    //Enter your code here
    if (arr.length <= 1) {
        return arr;
      }
    const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);
  const sortedArr = sortedLeft.concat(pivot, sortedRight);
  console.log(sortedArr.join(' '));
  return sortedArr;
} 

let tab = [5, 8, 1, 3, 7, 9, 2];
quickSort(tab);