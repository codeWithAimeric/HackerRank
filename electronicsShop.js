/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let tempTab = [];
    let temp;
    for(let i=0; i<keyboards.length; i++){
        if(keyboards[i] >= b){
            continue;
        }
        for(let j=0; j<drives.length; j++){
            if(drives[j] >= b){
                continue;
            }
            temp = keyboards[i] + drives[j];
            if(temp <= b){
                tempTab.push(temp);
            }
        }
    }
    if(tempTab.length == 0)
    {
        return -1;
    }
    return Math.max(...tempTab);
}
