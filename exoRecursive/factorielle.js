function factorielle(n){
    if(n == 1){
        return 1;
    }
    if(n == 0){
        return 0; 
    }
    return n* factorielle(n-1);
}

let n = 5;
console.log(factorielle(n));