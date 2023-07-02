/*
 * Complete the 'steadyGene' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING gene as parameter.
 */

function is_ok(freq, n){
    if (freq['A'] > n/4) {
        return false;
    }

    if (freq['C'] > n/4) {
        return false;
    }

    if (freq['T'] > n/4) {
        return false;
    }

    if (freq['G'] > n/4) {
        return false;
    }
    return true;
}

function steadyGene(gene) {
    // Write your code here
    let freq = {}, n = gene.length, ans = n, j = 0;

    for (let i = 0; i < n; i++) {
        if (!freq[gene[i]]) {
            freq[gene[i]] = 1;
        } else {
            freq[gene[i]]++;
        }
    }

    if (is_ok(freq, n)) {
        return 0;
    }

    for (let i = 0; i < n; i++) {
        while (j < n && !is_ok(freq, n)) {
            --freq[gene[j++]];
        }
        
        if (is_ok(freq, n)) {
            ans = Math.min(ans, j - i);
        }
        ++freq[gene[i]];
    }
    
    return ans;
    //-------------------------
    // let tab = gene.split('');
    // let numberOccurence = gene.length / 4;
    // let countA = 0;
    // let indexOfA = [];
    // let countC = 0;
    // let indexOfC = [];
    // let countG = 0;
    // let indexOfG = [];
    // let countT = 0;
    // let indexOfT = [];
    // let tempTab = [];
    // let resTab = [];
    // let indexOfASort = [];
    // let indexOfCSort = [];
    // let indexOfGSort = [];
    // let indexOfTSort = [];
    // let sliceTab = [];
    // let sliceTab1 = [];
    // let sliceTab2 = [];
    // let count = 0;
    // console.log('numberOfOccurence = = ', numberOccurence);
    // for(let i=0; i<tab.length; i++){
    //     switch(tab[i])
    //     {
    //         case 'A':
    //             if(countA >= numberOccurence){
    //                 continue; 
    //             }
    //             countA++;
    //             indexOfA.push(i);
    //             break;
    //             case 'C':
    //                 if(countC >= numberOccurence){
    //                     continue; 
    //                 }
    //                 countC++;
    //                 indexOfC.push(i);
    //                 break;
    //             case 'G':
    //                 if(countG >= numberOccurence){
    //                     continue; 
    //                 }
    //                 countG++;
    //                 indexOfG.push(i);
    //                 break;
    //             case 'T':
    //                 if(countT >= numberOccurence){
    //                     continue; 
    //                 }
    //                 countT++;
    //                 indexOfT.push(i);
    //                 break;
    //             default: 
    //                 break;
    //     }
    // }

    // console.log('tab before ----------------------', tab);
    // indexOfASort = indexOfA.sort((a, b) => a-b);
    // indexOfCSort = indexOfC.sort((a, b) => a-b);
    // indexOfGSort = indexOfG.sort((a, b) => a-b);
    // indexOfTSort = indexOfT.sort((a, b) => a-b);
    // console.log('indexOfA  == == ', indexOfA);
    // console.log('indexOfASort = = = = = =', indexOfASort);
    // if(countA == numberOccurence){
    //     tempTab.push('A');
    //     for(let i=indexOfASort.length-1; i>=0; i--){
    //         tab[indexOfASort[i]] = 'O';
    //     }
    //     // tab.splice(indexOfASort[1], 1);
    //     // tab.splice(indexOfASort[0], 1);
    // }
    // if(countC == numberOccurence){
    //     tempTab.push('C');
    //     for(let i=indexOfCSort.length-1; i>=0; i--){
    //         tab[indexOfCSort[i]] = 'O';
    //     }
    // }
    // if(countG == numberOccurence){
    //     tempTab.push('G');
    //     for(let i=indexOfGSort.length-1; i>=0; i--){
    //         tab[indexOfGSort[i]] = 'O';
    //     }
    // }
    // if(countT == numberOccurence){
    //     tempTab.push('T');
    //     for(let i=indexOfTSort.length-1; i>=0; i--){
    //         tab[indexOfTSort[i]] = 'O';
    //     }
    // }
    // console.log('tab after = = = = =====  = = ====', tab);
    // console.log('tempTab = = = = =', tempTab);
    // for(let i=tab.length-1; i>=0; i--){
    //     if(tab[i] === 'O'){
    //         tab.splice(i, 1);
    //     }
    // }
    // console.log('tab--------', tab);

    // //solution saika nety fa ajaona ian lo mandrapa so d ilaina
    // for(let i=0; i<tab.length-1; i++){
    //     for(let j=i+1; j<tab.length; j++){
    //         sliceTab = tab.slice(i, j+1);
    //         sliceTab1 = tab.slice(0, i);
    //         sliceTab2 = tab.slice(j+1, tab.length);
    //         if(sliceTab1.includes(...tempTab)){
    //             break;
    //         }
    //         if(sliceTab2.includes(...tempTab)){
    //             continue; 
    //         }else{
    //             resTab.push(sliceTab.length)
    //         }
    //     }
    // }
    // console.log('resTab = = ', resTab);
    // return Math.min(...resTab);
}

// let gene = 'GAAATAAA'; //5
let gene = 'TGATGCCGTCCCCTCAACTTGAGTGCTCCTAATGCGTTGC'; //5
//          TGATGCCGCAAGAGGAAGGG
// let gene = 'ACTGAAAG';
console.log(steadyGene(gene));