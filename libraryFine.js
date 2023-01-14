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
    let fine = 0;
    let diffDay = 0;
    let diffMonth = 0;
    if(y1 < y2){
        return fine; 
    }
    if((m1 == m2) && (y1 == y2)){
        if(d1>=d2){
            diffDay = d1 - d2;
            fine = diffDay * 15;
            return fine;
        }else{
            return fine;
        }
    }
    if((y1 == y2) && (m1 != m2)){
        if(m1 > m2){
            diffMonth = Math.abs(m1-m2);
            fine = diffMonth * 500;
            return fine;
        }else if(m1 < m2){
            return 0;
        }
    }
    if(y1 != y2){
        fine = 10000;
        return fine; 
    }
}