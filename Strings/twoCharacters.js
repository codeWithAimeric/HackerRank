/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    // Write your code here
    let isTwo = true; 
    let lengthTab = 0;
    let tab = s.split('');
    for(let i=0; i<tab.length-1; i++){
        for(let j=i+1; j<tab.length; j++){
            isTwo = true;
            for(let k=0; k<tab.length; k++){
                if(tab[k] == tab[i]){
                    tab.splice(i, 1);
                }
                if(tab[k] == tab[j]){
                    tab.splice(j, 1);
                }
            }
            for(let l=0, m=1; l<tab.length-2, m<tab.length-3; l+=2, m+=2){
                if(tab[l] != tab[l+2] || tab[m] != tab[m+2]){
                    isTwo = false;
                }
            }
            lengthTab = tab.length; 
            if(isTwo){
                break;
            }
        }
        if(isTwo){
            break; 
        }
    }
    if(isTwo){
        return 0;
    }else{
        return lengthTab; 
    }
}

let s = 'beabeefeab';
console.log(alternate(s));