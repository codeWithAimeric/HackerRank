/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if(s.length == 0){
        return [];
    }

    let sequences = new Map();
    let result = [];

    for(let i=0; i<=s.length-10; i++){
        let tempString = s.slice(i, i+10);
        if(sequences.has(tempString)){
            if(!result.includes(tempString)){
                result.push(tempString);
            }
        }else{
            sequences.set(tempString);
        }
        console.log("seq", sequences);
    }
    return result; 
};

let s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
// let s = "AAAAAAAAAAA";
console.log(findRepeatedDnaSequences(s));