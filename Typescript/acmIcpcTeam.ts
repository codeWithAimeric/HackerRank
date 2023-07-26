/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

const acmTeam = (topic: Array<string>): Array<number> => {
    // Write your code here
    let tempTopic1: string = '';
    let tempTopic2: string = '';
    let count: number = 0;
    let valMax: number = 0;
    let countMax: number = 0;
    let resTab: Array<number> = [];
    for(let i=0; i<topic.length-1; i++){
        for(let j=i+1; j<topic.length; j++){
            tempTopic1 = topic[i];
            tempTopic2 = topic[j];
            for(let k=0; k<tempTopic1.length; k++){
                if(tempTopic1[k] == '0' && tempTopic2[k] == '0'){
                    continue;
                }else{
                    count++;
                }
            }
            if(count > valMax){
                valMax = count;
                countMax=1;
            }else if(count == valMax){
                countMax++
            }
            count = 0; 
        }
    }
    resTab.push(valMax);
    resTab.push(countMax);
    return resTab;
}

// let topics = ['10101', '11110', '00010'];
// let topics = ['10101', '11100', '11010', '00101'];
let topics = ['11101', '10101', '11001', '10111', '10000', '01110'];
console.log(acmTeam(topics));