/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let satisfiedChildren = 0;
    let cookieIndex = 0;

    for (let i = 0; i < g.length; i++) {
        while (cookieIndex < s.length && s[cookieIndex] < g[i]) {
            cookieIndex++;
        }
        
        if (cookieIndex < s.length) {
            satisfiedChildren++;
            cookieIndex++;
        } else {
            break;
        }
    }

    return satisfiedChildren;
};

let g = [1,2,3]
let s = [1,1]
console.log(findContentChildren(g, s));