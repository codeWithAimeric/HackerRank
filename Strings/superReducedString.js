/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    // Write your code here
    let tab = s.split('');
    let isDuplicated = false; 
    let res = "";
    while(tab.length > 0){
        for(let i=0; i<tab.length; i++){
            isDuplicated=false;
            if(tab[i] == tab[i+1]){
                isDuplicated = true;
                tab.splice(i, 1);
                tab.splice(i+1, 1);
                break;
            }
        }
        if(!isDuplicated){
            break;
        }
    }
    if(tab.length == 0){
        return "Empty String";
    }else{
        res = tab.join('');
        return res; 
    }
}

let s= "abba";
console.log(superReducedString(s));
