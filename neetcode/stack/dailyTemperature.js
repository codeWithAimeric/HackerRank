/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = [];
    let diff = 0;
    for(let i=0; i<temperatures.length; i++){
        for(let j=i+1; j<temperatures.length; j++){
            if(temperatures[j] > temperatures[i]){
                diff = j-i;
                res.push(diff);
                diff = 0;
                break;
            }
            if(j == temperatures.length-1 && diff == 0){
                res.push(diff);
            }
        }
    }
    res.push(0);
    return res; 
};

let temperatures = [73, 74, 75, 69, 68, 15, 89, 78];
console.log(dailyTemperatures(temperatures));