//correction sur hackerrank
//-------------------------
/*
 * Complete the 'ashtonString' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */
function ashtonString(s, k){
    const t = {};
    let sum = 0;
    let done = false;
    let letter = '';

    function suffArray(s) {
        const sarr = [];

        for (let i = 0; i < s.length; i++) sarr.push(i);

        console.log('sarr = = = = =', sarr);
        sarr.sort((a, b) => {
            while (true) {
                if (s[a] < s[b]) return -1;
                if (s[a] > s[b]) return 1;
                a++; b++;
                if ((a == b) && (a == s.length - 1)) return 0;
                if (a > s.length - 1) return -1;
                if (b > s.length - 1) return 1;
            }
        });
        console.log('sarr after sort --------------', sarr);
        return sarr;
    }

    function add(s, index) {
        let node = t, depth = 0, i = index;
        while (i < s.length) {
            console.log('s[i]----------------', s[i]);
            console.log('node = = =', node);
            if (s[i] in node) {
                node = node[s[i]];
                depth++; i++;
            } else {
                depth++;
                node[s[i]] = {};
                node = node[s[i]];
                sum += depth;
                console.log('sum = = = = ', sum);
                if (sum >= k) {
                    done = true;
                    letter = s[i - sum + k];
                    return true;
                }
                i++;
            }
        }
        return false;
    }

    const sa = suffArray(s);

    for (let i of sa) {
        console.log('i dans sa =  =', i);
        if (add(s, i)) break;
    };

    return letter;
}

let s = 'nvzjkcahjwlhmdiuobjdwbanmvrtadopapbktdtezellktgywrdstdhhayaadqrdhspavjgxprk'; //b
let k = 2071; 
console.log(ashtonString(s, k));


