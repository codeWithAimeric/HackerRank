//additionne tout les éléments d'un tableau 
let sumTab = tab.reduce((a, b) => a+b, 0);

//sort un tableau dans l'ordre croissant
let sortTab = tab.sort((a, b) => a-b);

//parcourir un objet
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

//insert in object
object.key1 = "value1";
//OR
object["key1"] = "value1";

//remove duplicate value in array js
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter(onlyUnique);

//reverse number into string 
let a = 12;
let aReverseString = a.toString().split("").reverse().join("");
//transform this string into number
let aNumber = Number(a);