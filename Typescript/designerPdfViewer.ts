/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

const designerPdfViewer = (h: number, word: string): number => {
    // Write your code here
    word.toLowerCase();
    let wordLength: number = word.length;
    let index: number = 0;
    let val: number = 0;
    let tempTab: Array<number> = [];
    let valMax: number = 0;
    let res: number = 0;
    let alphabet: Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(let i=0; i<word.length; i++){
        index = alphabet.indexOf(word[i]);
        val = h[index];
        tempTab.push(val);
    }
    valMax = Math.max(...tempTab);
    res = valMax * wordLength;
    return res;
}