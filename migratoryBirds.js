/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  const myMap = new Map();
  for(let i=0; i<arr.length; i++){
      if(myMap.get(arr[i])){
          myMap.set(arr[i], myMap.get(arr[i])+1);
      }else{
          myMap.set(arr[i], 1);
      }
  }
  let maxKey = null;
  let maxValue = Number.NEGATIVE_INFINITY;
  let keysWithMaxValue = [];
  for(const [key, value] of myMap.entries()){
      if(value > maxValue){
          maxValue = value;
          maxKey = key;
          keysWithMaxValue = [key];
      }else if(value == maxValue){
          keysWithMaxValue.push(key);
      }
  }
  return Math.min(...keysWithMaxValue.map(Number));
}
