/*
 * Complete the 'happyLadybugs' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING b as parameter.
 */

function happyLadybugs(b) {
    // Write your code here
    let tab = [];
    for(let i=0; i<b.length; i++){
        tab.push(b[i]);
    }
    for(let i=0; i<tab.length; i++){
        if(tab[i] != '_'){
            if(tab.indexOf(tab[i]) != tab.lastIndexOf(tab[i])){
                if(tab[i] == tab[i+1] || tab[i] == tab[i-1]){
                    continue;
                }else{
                    if(!tab.includes('_')){
                        return 'NO';
                    }
                }
            }else{
                return 'NO';
            }
        }
    }
    return 'YES';
}

let tab = '_';
console.log(happyLadybugs(tab));

