function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
}

function areMapEqual(map1, map2){
    const keys1 = map1.keys();
    const keys2 = map2.keys();

    if(map1.size !== map2.size){
        return false; 
    }

    for (const [key, value] of map1) {
        if(!map2.has(key) || map2.get(key) != value){
            return false; 
        }
    }
    return true;
}

let obj1 = {a:1, b: 4};
let obj2 = {b: 4, a: 1};
// console.log(areObjectsEqual(obj1, obj2));

let map1 = new Map();
map1.set("map11", 1);
map1.set("map12", 2);

let map2 = new Map();
map2.set("map12", 2);
map2.set("map11", 1);

console.log(map1);
console.log(map2);
console.log(areMapEqual(map1, map2));