/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0){
        return false;
    }
    return (n & (n - 1)) === 0;
};

let n = 16;
console.log(isPowerOfTwo(n));

//utilise  l'opérateur "&" bitwise AND, transforme n en nombre binaire