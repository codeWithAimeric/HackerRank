/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const isMapEqual = (map1, map2) => {
    const keysArray = Array.from(map1.keys());
    keysArray.sort();
    const sortedMap = new Map();
    for (const key of keysArray) {
        sortedMap.set(key, map1.get(key));
    }
    for (let [key, value] of sortedMap) {
        if (!map2.has(key)) {
          return false;
        }
        if (map2.get(key) !== value) {
          return false;
        }
    }
    return true; 
}
var findAnagrams = function(s, p) {
    let mapFromP = new Map();
    let res = [];
    let pArr = p.split('');
    let pString = pArr.sort().join('');
    for(let i=0; i<p.length; i++){
        if(!mapFromP.has(pString[i])){
            mapFromP.set(pString[i], 1);
        }else{
            mapFromP.set(pString[i], mapFromP.get(pString[i])+1);
        }
    }
    let mapFromS = new Map();
    let pLength = p.length;
    for(let i=0; i<s.length; i++){
        let char = s[i];
        mapFromS.set(char, (mapFromS.get(char) || 0)+1);
        if(i >= pLength){
            // --déplacement de la fenêtre glissante--
            if(mapFromS.get(s[i-pLength]) == 1){
                mapFromS.delete(s[i-pLength]);
            }else{
                mapFromS.set(s[i-pLength], mapFromS.get(s[i-pLength])-1);
            }
        }
        if(isMapEqual(mapFromP, mapFromS)){
            res.push(i-pLength+1);
        }
    }
    return res; 
};

// let s = "baa";
// let p = "aa";
let s = "cbaebabacd";
let p = "abc";
console.log(findAnagrams(s, p));