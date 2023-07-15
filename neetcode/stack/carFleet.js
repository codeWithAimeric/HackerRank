/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let n = position.length; 
    let myArr = [];
    for(let i=0; i<n; i++){
        const myCar = {
            position: position[i],
            time: (target - position[i] ) / speed[i]
        }
        myArr.push(myCar);
    }
    myArr.sort((a, b) => b.position - a.position);
    let count = 0;
    let prevTime = 0;
    for(let i=0; i<myArr.length; i++){
        let currentTime = myArr[i].time; 
        if(currentTime > prevTime){
            prevTime = currentTime;
            count++;
        }
    }
    return count; 
}

let target = 12; let position = [10,8,0,5,3]; let speed = [2,4,1,1,3];
console.log(carFleet(target, position, speed));