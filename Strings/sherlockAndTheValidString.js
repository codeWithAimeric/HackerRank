/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
    // Write your code here
    let count = 1; 
    let tab = [];
    let myTab = s.split('');
    let countDiff = 0;
    let tempVal = 0;
    let isDiff = false; 
    for(let i=0; i<myTab.length-1; i++){
        for(let j=i+1; j<myTab.length; j++){
            if(myTab[i] == myTab[j]){
                count++;
                myTab.splice(j, 1);
            }
        }
        tab.push(count);
        count = 1;
    }
    console.log(tab);
    let firstElem = tab[0];
    for(let i=1; i<tab.length; i++){
        if(firstElem != tab[i]){
            countDiff++;
            tempVal = tab[i];
            isDiff = true;
        }
        if(countDiff > 1){
            return 'NO';
        }
    }
    if(!isDiff){
        return 'YES';
    }
    if(tempVal - firstElem != 1){
        return 'NO';
    }else{
        return 'YES';
    }
}

let s = 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd';
console.log(isValid(s));