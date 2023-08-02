/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const encryption = (s: string): string => {
    // Write your code here
    let lengthS: number = 0;
    let valMin: number = 0;
    let valMax: number = 0;
    let tempString: string = '';
    let valSlice: number = 0;
    let tabString: Array<string> = [];
    let res: string = '';

    s = s.replace(/ +/g, "");
    lengthS = s.length; 
    lengthS = Math.sqrt(lengthS);
    valMin = Math.floor(lengthS);
    valMax = Math.ceil(lengthS);

    valSlice = valMax;
    for(let i=0; i<s.length; i+=valMax){
        tempString = s.slice(i, valSlice);
        tabString.push(tempString);
        valSlice += valMax; 
    }
    for(let j=0; j<tabString[0].length; j++){
        for(let i=0; i<tabString.length; i++){
            if(tabString[i][j]){
                res += tabString[i][j];
            }
        }
        res += ' ';
    }
    return res;
}


// let s = "have a nice day"; //hae and via ecy
let s = "i ffact s dontf i ttoth e orych a ngeth e facts"; //isieae fdtonf fotrga anoyec cttctt tfhhhs
console.log(encryption(s));