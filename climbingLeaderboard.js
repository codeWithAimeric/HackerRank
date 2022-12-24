/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    // Write your code here
    let temp=0;
    let res = [];
    
    function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
        }
    let tab = ranked.filter(onlyUnique);
    
    for(let i=0; i<player.length; i++){
            for(let j=0; j<tab.length; j++){
                if(player[i] == tab[j]){
                    temp=tab.indexOf(tab[j]) +1;
                    res.push(temp);
                    break;
                }else if(player[i] >= tab[0]){
                    temp = 1;
                    res.push(temp);
                    break;
                }else if(player[i] <= tab[tab.length -1]){
                    temp = tab.length +1;
                    res.push(temp);
                    break;
                }else if(player[i] < tab[j] && player[i] > tab[j+1]){
                    temp=tab.indexOf(tab[j+1]) +1;
                    res.push(temp);
                    break;
                }
        }
    }
    return res;
}