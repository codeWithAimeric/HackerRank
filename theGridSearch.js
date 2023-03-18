/*
 * Complete the 'gridSearch' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY G
 *  2. STRING_ARRAY P
 */

function gridSearch(G, P) {
    // Write your code here
    let isYes = false;
    let resTab = [];
    let lengthP = P.length; 
    let lengthPElement = P[0].length; 
    let tempFirst = "";
    let tempString = "";
    for(let i=0; i<G.length; i++){
        for(let j=0; j<G[i].length; j++){
            if(G[i][j] == P[0][0]){
                console.log('G[i][j]----------', G[i][j]);
                console.log('j = = = =', j);
                console.log('i = = = =', i);
                console.log('P[0][0]----------', P[0][0]);
                tempFirst = G[i].slice(j, lengthPElement+j);
                console.log('tempFirst = = = = ', tempFirst);
                if(tempFirst == P[0]){
                    for(let k=i; k<lengthP+i; k++){
                        tempString = G[k].slice(j, lengthPElement+j);
                        resTab.push(tempString);
                    }
                    console.log(resTab);
                    isYes = (resTab.length == P.length) && resTab.every(function(element, index) {
                        return element === P[index]; 
                    });
                    if(isYes){
                        break;
                    }else{
                        resTab = [];
                    }
                }
            }
        }
        if(isYes){
            break;
        }
    }  
    if(isYes == true){
        return 'YES';
    }else{
        return 'NO';
    }
}

// let G = ["1234567890", "0987654321", "1111111111", "1111111111", "2222222222" ]; //YES
// let P = ["876543", "111111", "111111"];
let G = ["123412", "561212", "123634", "781288"];
let P = ["12", "34"];
console.log(gridSearch(G, P));
