function factorielle(n){
    if(n==1){
        return 1;
    }else{
        return n* factorielle(n-1);
    }
}

let n = 5;
console.log(factorielle(n));