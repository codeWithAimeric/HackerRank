function compareTriplets(a, b) {
    let ap = 0;
    let bp = 0;
    let resTab = [];
    for(let i=0; i<=a.length; i++){
        if(a[i] < b[i]){
            bp++;
        } else if(a[i] > b[i]) {
            ap++;
        }
    }
    resTab.push(ap);
    resTab.push(bp);
    return resTab;
}