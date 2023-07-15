/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    // Fonction récursive pour générer les combinaisons de parenthèses
    const generate = (str, open, close) => {
        // Condition de terminaison : lorsque le nombre total de parenthèses ouvertes et fermées est égal à 2n
        if (str.length === 2 * n) {
            result.push(str);
            return;
        }

        // Ajouter une parenthèse ouvrante si le nombre de parenthèses ouvertes est inférieur à n
        if (open < n) {
            generate(str + '(', open + 1, close);
        }

        // Ajouter une parenthèse fermante si le nombre de parenthèses fermées est inférieur au nombre de parenthèses ouvertes
        if (close < open) {
            generate(str + ')', open, close + 1);
        }
    };

    // Appeler la fonction récursive pour générer les combinaisons de parenthèses
    generate('', 0, 0);

    return result;
};

let n = 3;
console.log(generateParenthesis(n));