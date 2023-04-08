/*
 * Complete the 'stringConstruction' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function stringConstruction(s) {
    // Write your code here
    let p = [];
    for(let i=0; i<s.length; i++){
        if(!p.includes(s[i])){
            p.push(s[i]);
        }
    }
    return (p.length);
}

let s = 'abcabc';
console.log(stringConstruction(s));

// let p = [];
//     for(let i=0; i<s.length; i++){
//         if(!p.includes(s[i])){
//             p.push(s[i]);
//         }else{
//             for(let j=i+1; j<s.length; j++){
//                 if(!p.includes(s[j])){
//                     i = j-1;
//                     break; 
//                 }
//             }
//         }
//     }