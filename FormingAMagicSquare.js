/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
    // Write your code here
        const squares = ['618753294', '816357492', '834159672', '438951276', '672159834', '276951438', '294753618', '492357816'];
    let min = 100;
    let cost = (s, squares) => {

        return [...s.map(value => value.join('')).join('')].reduce((target, item, index) => {
            target += Math.abs(+item - +squares[index])

            return target;
        }, 0)
    };

    squares.forEach((item, index) => {
        let value = cost(s, squares[index]);

        (value < min) && (min = value);
    });

    return min;
}
