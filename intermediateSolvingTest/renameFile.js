

function renameFile(newName, oldName){
    let count = 0;
    let tab = oldName.split('');
    let temp = [];
    let resTab = [];
    let valTemp = '';
    for(let i=0; i<tab.length; i++){
        for(let j=0; j<tab.length; j++){
            tab.splice(i, j+1);
            valTemp = tab.join('');
            if(valTemp == newName && tab.length == newName.length){
                temp.push(i);
                temp.push(j+1);
                if(!resTab.includes(temp)){
                    resTab.push(temp);
                    count++;
                    temp = [];
                    tab = oldName.split('');
                    break; 
                }
                temp = [];
            }
            tab = oldName.split('');
        }
    }
    return count; 
}

let newName = "aba";
let oldName = "ababa"
console.log(renameFile(newName, oldName));