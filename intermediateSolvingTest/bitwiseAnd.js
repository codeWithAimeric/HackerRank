/**
 * le code commenté est une méthode 'brute force' tandis que l'autre est une méthode optimisée qui utilise un Map() 
 * Dans la méthode optimisée : 
 *  -on crée la fonction po2 qui sert à vérifier si un entier est power 2 ou pas(return true ou bien false)
 *  -on crée un Map() d, et on affecte ses clés par les valeurs contenues dans le tableau arr, ces valeurs sont le nombre
 *    de fois où la clé se répète dans le tableau
 *  -on crée un nouveau tableau dArr(à deux dimensions) à partir du Map() obtenu précédement 
 *  -on boucle sur dArr et on récupère les deux valeurs contenues dans chaque élément du tableau dArr et on ouvre une autre boucle
 *    à partir de l'indice i du premier boucle et on récupère de nouveau les valeurs comme dans la première boucle
 *  -dans les deux boucles on appelle la fonction po2 avec comme paramètre les deux premières valeurs contenues dans les valeurs pris dans chacune des boucles
 *    et on vérifie si la première valeur est égale à la deuxième valeur(a === b)
 * (la suite à lire dans le code)
 */

function countPairs(arr){
    // let count = 0;
    // for(let i=0; i<arr.length-1; i++){
    //     for(let j=i+1; j<arr.length; j++){
    //         if(Math.log(arr[i]& arr[j])/Math.log(2) % 1 === 0){
    //             count++;
    //         }
    //     }
    // }
    // return count;
    const po2 = x => x > 0 && !(x & (x - 1));
    const d = new Map();
    for (let x of arr) {
        d.set(x, (d.get(x) || 0) + 1);
    }
    console.log('arr = ', arr);
    console.log('d Map-----------------', d);
    console.log('-------------');
    const dArr = Array.from(d);
    console.log('dArr = = = = =', dArr);
    console.log('-------Début boucle------');
    let ans = 0;
    for (let i = 0; i < dArr.length; i++) {
        const [a, aCnt] = dArr[i];
        console.log('***********************************');
        console.log('a = = = = = =', a);
        console.log('aCnt = = = = = =', aCnt);
        console.log('***********************************');
        for (let j = i; j < dArr.length; j++) {
        const [b, bCnt] = dArr[j];
        console.log('b = =', b);
        console.log('bCnt', bCnt);
            if (po2(a & b)) {
                if (a === b) {
                ans += (aCnt * (aCnt - 1)) / 2;
                console.log('ans dans if = = = = = = = = = = = = = =', ans);
                } else {
                ans += aCnt * bCnt;
                console.log('ans dans else = = = = = = = = = = = = = =', ans);
                }
            }
        }
    }
    return ans;
}

let arr = [10, 7, 2, 8, 3];
// let arr = [10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3,
//     10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 
//     10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3,
//     10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3,
//     10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3,
//     10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3,10, 7, 2, 8, 3,
//     10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3, 10, 7, 2, 8, 3];
console.log(countPairs(arr));


