/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    const dueDate = new Date(y2, m2 - 1, d2).getTime();
    const returnDate = new Date(y1, m1 - 1, d1).getTime();
    
    if (returnDate <= dueDate) {
        return 0;
    } else if (y1 > y2) {
        return 10000;
    } else if (m1 > m2 && y1 === y2) {
        return 500 * (m1 - m2);
    } else if (d1 > d2 && m1 === m2 && y1 === y2) {
        return 15 * (d1 - d2);
    }
    
    return 0;
}