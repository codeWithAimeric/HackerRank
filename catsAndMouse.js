// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let resB = 0;
    let resA = 0;
    resA = Math.abs(z - x);
    resB = Math.abs(z - y);
    if(resA > resB){
        return 'Cat B';
    }else if(resA < resB){
        return 'Cat A';
    }else if(resA == resB){
        return 'Mouse C';
    }

}
