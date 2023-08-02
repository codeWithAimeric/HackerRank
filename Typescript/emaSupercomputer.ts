/*
 * Complete the 'twoPluses' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY grid as parameter.
 */

const twoPluses = (grid: Array<string>): number => {
    // Write your code here
    let tab: string[][] = [];
    let valDroite: number = 0;
    let valGauche: number = 0;
    let valHaut: number = 0;
    let valBas: number = 0;
    let tabVal: Array<number> = [];
    let valMin: number = 0;
    let resTemp: number = 0;
    let resTab: Array<number> = [];
    let tempJ: number = 0;
    let tempI: number = 0;
    let tempJNegatif: number = 0;
    let tempINegatif: number = 0;
    let resMax1: number = 0;
    let resMax2: number = 0;
    let result: number = 0;
    tab = grid.map(element => {
        return element.split('')
    }); 
    for(let i=0; i<tab.length; i++){
        for(let j=0; j<tab[i].length; j++){
            if(tab[i][j] == 'G'){
                for(let k=j+1; k<tab[i].length; k++){
                    if(tab[i]){
                        if(tab[i][k]){
                            if(tab[i][k] == 'B'){
                                valDroite = k-1-j;
                                break;
                            }
                        }
                    }
                    valDroite = k-j;
                }
                tabVal.push(valDroite);
                for(let k=j-1; k>=0; k--){
                    if(tab[i][k] == 'B'){
                        valGauche = j-k-1;
                        break;
                    }
                    valGauche = j-k;
                }
                tabVal.push(valGauche);
                for(let k=i+1; k<tab.length; k++){
                    if(tab[k][j] == 'B'){
                        valBas = k-1-i;
                    }
                    valBas = k-i;
                }
                tabVal.push(valBas);
                for(let k=i-1; k>=0; k--){
                    if(tab[k][j] == 'B'){
                        valHaut = i-k-1;
                    }
                    valHaut = i-k;
                }
                tabVal.push(valHaut);
                
                //changement des 'G' en 'B' et push du resultat dans resTab
                valMin = Math.min(...tabVal);
                if(valMin != 0){
                    tab[i][j] = 'B';
                    tempJ = j+valMin;
                    tempI = i+valMin;
                    tempJNegatif = j-valMin;
                    tempINegatif = i-valMin;
                    for(let k=j+1; k<=tempJ; k++){
                        if(tab[i]){
                            if(tab[i][k]){
                                tab[i][k] = 'B';
                            }
                        }
                    }
                    for(let k=j-1; k>=tempJNegatif; k--){
                        if(tab[i]){
                            if(tab[i][k]){
                                tab[i][k] = 'B';
                            }
                        }
                    }
                    for(let k=i+1; k<=tempI; k++){
                        if(tab[k]){
                            if(tab[k][j]){
                                tab[k][j] = 'B';
                            }
                        }
                    }
                    for(let k=i-1; k>=tempINegatif; k--){
                        if(tab[k]){
                            if(tab[k][j]){
                                tab[k][j] = 'B';
                            }
                        }
                    }

                    resTemp = (valMin*4) + 1;
                    resTab.push(resTemp);

                    j += valMin;
                    j++;
                }
                tabVal = [];
            }
        }
    }
    if(resTab.length == 1){
        return resTab[0];
    }
    resMax1 = Math.max(...resTab);
    resTab.splice(resTab.indexOf(resMax1), 1);
    resMax2 = Math.max(...resTab);
    
    return resMax1 * resMax2;
}

// let grid = ['BGBBGB', 'GGGGGG', 'BGBBGB', 'GGGGGG', 'BGBBGB', 'BGBBGB']; //25
let grid = ['GGGGGG', 'GBBBGB', 'GGGGGG', 'GGBBGB', 'GGGGGG']; //5
// let grid = ['GGGGGGGG',
//     'GBGBGGBG',
//     'GBGBGGBG',
//     'GGGGGGGG',
//     'GBGBGGBG',
//     'GGGGGGGG',
//     'GBGBGGBG',
//     'GGGGGGGG']; //81
console.log(twoPluses(grid));