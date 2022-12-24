/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    // Write your code here
    word.toLowerCase();
    let wordLength = word.length;
    let index=0;
    let val=0;
    let tempTab = [];
    let valMax = 0;
    let res = 0;
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(let i=0; i<word.length; i++){
        index = alphabet.indexOf(word[i]);
        val = h[index];
        tempTab.push(val);
    }
    valMax = Math.max(...tempTab);
    res = valMax * wordLength;
    return res;
}