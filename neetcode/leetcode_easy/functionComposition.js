/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if(0 == functions.length){
        return function(x){
            return x;
        }
    }
    return function(x) {
        let res = x;
        for(let i=functions.length-1; i>=0; i--){
            res = functions[i](res);
        }
        return res; 
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */