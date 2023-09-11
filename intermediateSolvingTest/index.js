

const renameFile = (newName, oldName) => {
    let lengthSub = oldName.length - newName.length; 
    let newNameArray = oldName.split('');
    let copyNewNameArray = [...newNameArray];
    let count = 0; 
    for(let i=0; i<=oldName.length-lengthSub; i++){
        newNameArray.splice(i, lengthSub);
        let tempName = newNameArray.join('');
        if(tempName == newName){
            count++;
        }
        newNameArray = [...copyNewNameArray];
    }
    return count; 
}

let newName = "omo";
let oldName = "jnhigippjemzzzbcvoyplxenffmfdzdiojuodgbulvivhtbhayeeebiactyaovqbivudydgxwsgmhlracaayipsojleqhpygshcvxwwlneblfmnqgddqpcjxzftwrlgptrkbkrlwgsnlcaudzdujbbqlfzikgxohvhtuvcjmmwvhkxcgyekjkklcjqoneppydpspiwqbkpsunedqixlsifcokfrcvrszcvdyfwuhtzptbbnxbhqjomxrbhjqxvdaserffcvkecqylqprawyquevhvuzcvfmbewpxicskpmzsbsusmaddqkwgfirlzzbczeghmuhxnxejrspcvqejwowqsfhovhctwnhuuveprriyfwstsjdecyyfjbjsdlegqlklxiyrwvlppomdfdtvtkwokiwwpejxibdknponpsxrytoqgjrtjpatmdlhmqegvjhvlehsykrlvvssmambzusxuszyybdrdvzdbexsglyokvmykifwgfncsacjlkathfmnlctsqejfoxyvmtottlhrlypbzisucllqgaaitmxpmfinsowjaawsnmluizvpjbewqcipcqwvsqfbeutdcsdrviozobdytwsimseetqcklnkxtawoxiysv"

console.log(renameFile(newName, oldName));