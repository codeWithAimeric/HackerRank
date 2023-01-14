// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    let resMin = 0; 
    let resTab = [];
    let distance = 0;
    let tempTab = [];
    if(c.length == n){
        return 0;
    }
    for(let i=0; i<n; i++){
        if(c.includes(i)) continue; 
        for(let j=0; j<c.length; j++){
            distance = Math.abs(c[j] - i);
            tempTab.push(distance);
        }
        resMin = Math.min(...tempTab);
        resTab.push(resMin);
        tempTab = [];
    }
    
    return Math.max(...resTab);
}

let n=20;
let c = [13, 1, 11, 10, 6];//6
console.log(flatlandSpaceStations(n, c));