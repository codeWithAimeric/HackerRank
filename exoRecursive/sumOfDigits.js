

const sumOfDigits = (n) => {
    if(n<10){
        return n;
    }
    
    return n % 10 + sumOfDigits(Math.floor(n/10));
}
let n = 1289;
console.log(sumOfDigits(n));