/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    // Write your code here
    let arr = s.split('');
    for(let i=0; i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            arr.splice(i, 2);
            i=0;
        }else if(arr[i] == arr[i-1]){
            arr.splice(i-1, 2);
            i=0;
        }
        if(i==arr.length-1){
            if(arr[i] == arr[i-1]){
                arr.splice(i-1, 2);
            }
        }
        console.log(arr);
    }
    if(arr.length == 0){
        return 'Empty String';
    }else{
        return arr.join('');
    }
}
let s = 'acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj';
// let s = 'oagciicgaoyjmahhamjymmwjnnjwmmvpxhpphxpvlikappakilyygvkkvgyymlpfddfplmhiodvvdoihfxpkggkpxfuevvuuvveu';
console.log(superReducedString(s));
// transform array to string and vice versa
// const str = "hello";
// const arr = str.split('');
// console.log(arr.join(''));