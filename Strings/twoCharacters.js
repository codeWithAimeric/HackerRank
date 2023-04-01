/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    // Write your code here
    let tab = [];
    let isVerify = false; 
    let firstTemp = '';
    let secondTemp = '';
    let resTab = [];
    for(let i=0; i<s.length; i++){
        if(!tab.includes(s[i])){
            tab.push(s[i]);
        }
    }
    console.log(tab);
    for(let i=0; i<tab.length-1; i++){
        for(let j=i+1; j<tab.length; j++){
            // firstTemp= s.replaceAll(tab[i], '');
            secondTemp = s.split('').filter(char => char === tab[i] || char === tab[j]).join('');
            console.log('i---', tab[i]);
            console.log('j-------', tab[j]);
            for(let k=0; k<=1; k++){
                    for(let l=k; l<secondTemp.length; l+=2){
                        if(secondTemp[l] != secondTemp[l+2] && secondTemp[l+2] != undefined){
                            console.log('condit----', secondTemp);
                            isVerify = true;
                            break; 
                        }
                    }
                    if(isVerify){
                        break;
                    }
            }
            if(isVerify == false){
                console.log('resTab');
                resTab.push(secondTemp.length);
            }
            isVerify = false;
        }
    }
    if(resTab.length > 0){
        return Math.max(...resTab);
    }else{
        return 0;
    }
}

let s = 'asdcbsdcagfsdbgdfanfghbsfdab';
console.log(alternate(s));

// let isTwo = true; 
//     let lengthTab = 0;
//     let tab = s.split('');
//     for(let i=0; i<tab.length-1; i++){
//         for(let j=i+1; j<tab.length; j++){
//             isTwo = true;
//             for(let k=0; k<tab.length; k++){
//                 if(tab[k] == tab[i]){
//                     tab.splice(i, 1);
//                 }
//                 if(tab[k] == tab[j]){
//                     tab.splice(j, 1);
//                 }
//             }
//             for(let l=0, m=1; l<tab.length-2, m<tab.length-3; l+=2, m+=2){
//                 if(tab[l] != tab[l+2] || tab[m] != tab[m+2]){
//                     isTwo = false;
//                 }
//             }
//             lengthTab = tab.length; 
//             if(isTwo){
//                 break;
//             }
//         }
//         if(isTwo){
//             break; 
//         }
//     }
//     if(isTwo){
//         return 0;
//     }else{
//         return lengthTab; 
//     }