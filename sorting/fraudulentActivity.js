/*
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */
function activityNotifications(expenditure, d) {
    const RANGE = 201
    let notifications = 0
    
    const getDoubleMedian = (count, d) => {
        const N = count.length
        const countPrefix = Array.from(count)
        // console.log('countPrefix = = = =', countPrefix);
        for (let i = 0; i < N; i++) {
            countPrefix[i] += countPrefix[i - 1] || 0
        }
        // console.log('countPrefix after boucle =  ', countPrefix);
        let a = 0
        let b = 0
    
        if (d % 2 === 0) {
            let first = Math.floor(d / 2)
            let second = first + 1
            let i = 0
            for (; i < RANGE; i++) {
                if (first <= countPrefix[i]) {
                    a = i
                    break
                }
            }
            for (; i < RANGE; i++) {
                if (second <= countPrefix[i]) {
                    b = i
                    break
                }
            }
        } else {
            let first = Math.floor(d / 2) + 1
            for (let i = 0; i < RANGE; i++) {
                if (first <= countPrefix[i]) {
                    a = i
                    b = i
                    break
                }
            }
        }
    
        return a + b
    }
  
    const count = Array(RANGE).fill(0)
    for (let i = 0; i < d; i++) {
        count[expenditure[i]]++
    }
    for (let i = d; i < expenditure.length; i++) {
        const median = getDoubleMedian(count, d)
        if (expenditure[i] >= median) {
            notifications++
        }
        
        count[expenditure[i]]++
        count[expenditure[i - d]]--
    }
    
        return notifications
}


let expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5];
let d = 5;
console.log(activityNotifications(expenditure, d));