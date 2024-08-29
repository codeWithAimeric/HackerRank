/**
 * petit fonction de test
 */
function testFunction(c, k) {
    let e = 100;
    let n = c.length;
    for(let i=0; i<c.length; i++){
        let newIndex = (k+i) % n;
        if(c[newIndex] == 1){
            e -= 3;
        }else{
            e -= 1;
        }
        i = newIndex -1;
        if(newIndex == 0){
            break;
        }
    }
    return e;
}
let c=[0,0,1,0,0,1,1,0];
let k=2;
console.log(testFunction(c, k));