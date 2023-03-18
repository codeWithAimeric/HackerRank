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

//count number of occurence in a string 
console.log(("str1,str2,str3,str4".match(/,/g) || []).length); //logs 3
console.log(("str1,str2,str3,str4".match(new RegExp("str", "g")) || []).length); //logs 4

//supprimer les éléments double d'un tableau 
let tableauAvecDoublons = [1, 2, 3, 1, 4, 5, 4, 6];
let tableauSansDoublon = Array.from(new Set(tableauAvecDoublons));
console.table(tableauSansDoublon); // [1, 2, 3, 4, 5, 6]


//différence entre set, map objet
const s = new Set(["toto", "truc", "truc", "bidule"]);
const m = new Map([[1, 2], [2, 4], [4, 8]]);
const p = new Object({a: 2, b: 4, c: 6});
console.log(s);
console.log(m);
console.log(p);


//Supprimer les espaces d'une chaîne de caractère
let SuppString = 'hello my friend';
SuppString = SuppString.replace(/ +/g, "");

//comparer si deux tableaux sont identiques //return boolean 
let array1 = [4,8,9,10];
let array2 = [4,8,9,10];
let is_same = (array1.length == array2.length) && array1.every(function(element, index) {
  return element === array2[index]; 
});