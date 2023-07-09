/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//-----------------Utilisation d'un Map() ----------------------
function getKeyByValue(map, value) {
    for (let [key, val] of map) {
      if (val === value) {
        return key;
      }
    }
    return undefined; 
}  
var topKFrequent = function(nums, k) {
    let resTab = [];
    let myMap = new Map(); 
    let tempMax = 0; 
    let tempKey;
    for(let i=0; i<nums.length; i++){
        if(!myMap.has(nums[i])){
            myMap.set(nums[i], 1);
        }else{
            myMap.set(nums[i], myMap.get(nums[i])+1);
        }
    }
    for(let i=1; i<=k; i++){
        tempMax = Math.max(...myMap.values());
        tempKey = getKeyByValue(myMap, tempMax)
        resTab.push(tempKey);
        myMap.delete(tempKey);
    }
    return resTab;
};


//---------------------Utilisation d'un object {}--------------------------
function getKeyByValueInObject(obj, value){
    for(let key in obj){
        if(obj[key] == value){
            return key;
        }
    }
    return undefined;
}
function topKFrequentByObject(nums, k){
    let myObj = {};
    let tempMax = 0;
    let tempKey;
    let resTab = []; 
    for(let i=0; i<nums.length; i++){
        if(myObj[nums[i]] === undefined){
            myObj[nums[i]] = 1; 
        }else{
            myObj[nums[i]] += 1;
        }
    }
    console.log('myOBj ===', myObj);
    for(let i=1; i<=k; i++){
        tempMax = Math.max(...Object.values(myObj));
        tempKey = getKeyByValueInObject(myObj, tempMax);
        resTab.push(parseInt(tempKey));
        delete(myObj[tempKey]);
    }
    return resTab;
}
let nums = [-1, -1];
let k = 1;
console.log(topKFrequent(nums, k));
console.log('-----------------------------');
console.log(topKFrequentByObject(nums, k));
