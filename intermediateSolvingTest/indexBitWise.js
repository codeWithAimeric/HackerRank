
const po2 = x => x > 0 && !(x & (x - 1));

const countPairs = (arr) => {
    let myMap = new Map();
    for(let i of arr){
        myMap.set(i, (myMap.get(i) || 0) +1);
    }
    let myArr = Array.from(myMap);
    console.log(myMap); 
    let count = 0; 
    for(let i=0; i<myArr.length; i++){
        const [a, aCnt] = myArr[i]; 
        for(let j=i; j<myArr.length; j++){
            const [b, bCnt] = myArr[j];
            if(po2(a & b)){
                if(a == b){
                    count += (aCnt * (aCnt-1)) / 2; 
                }else{
                    count += aCnt * bCnt;
                }
            }
        }
    }
    return count;
}

let arr = [10, 7, 2, 8, 3];
console.log(countPairs(arr)); 