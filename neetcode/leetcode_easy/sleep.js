/**
 * @param {number} millis
 * @return {Promise}
 */

const resolveAfterDate = (m) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolve');
        }, m)
    })
}
async function sleep(millis) {
   const result = await resolveAfterDate(millis);
   resolveAfterDate(millis)
   .then((res) => {
       return result; 
   })
   .catch((err) => {
       console.log(err);
   })
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/