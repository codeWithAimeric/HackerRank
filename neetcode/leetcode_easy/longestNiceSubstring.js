/**
 * @param {string} s
 * @return {string}
 */
const checkIsNice = (s) => {
    let myArr = s.split('');
    for(let i=0; i<myArr.length; i++){
        if(myArr[i] ==  myArr[i].toUpperCase()){
            if(!myArr.includes(myArr[i].toLowerCase())){
                return false;
            }
        }else{
            if(!myArr.includes(myArr[i].toUpperCase())){
                return false; 
            }
        }
    }
    return true; 
}
var longestNiceSubstring = function(s) {
    let maxSubstring = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substring = s.slice(i, j);
            if(substring.length > 1){
                if(checkIsNice(substring)){
                    if(substring.length > maxSubstring.length){
                        maxSubstring = substring;
                    }
                }
            }else{
                continue; 
            }
        }
    }

    return maxSubstring;
};

let s = "YazaAay";
console.log(longestNiceSubstring(s));