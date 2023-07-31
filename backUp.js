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
const myArray = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = myArray.filter((item, index) => myArray.indexOf(item) === index);

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

//concat all element in array of array and transform them into one string : 
// myString2 = 'aacbbabaccddbdbadbac'
let myTabOfString = [
  [ 'a', 'ac' ],
  [ 'b', 'ba', 'bac' ],
  [ 'c' ],
  [ 'd', 'db', 'dba', 'dbac' ]
];
let myString2 = myTabOfString.reduce((acc, curr) => acc.concat(curr), []).join('');


// Trier les sous-chaînes dans un tableau à partir d'un 'Set'(substrings) dans l'ordre lexicographique
// const sortedSubstrings = Array.from(substrings).sort();

//---vérifier que deux objets {a:1, b:4} et {b:4, a:1} sont identiques 
function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

//---vérifier que deux Map { 'map11' => 1, 'map12' => 2 } sont identiques
function areMapEqual(map1, map2){
  const keys1 = map1.keys();
  const keys2 = map2.keys();

  if(map1.size !== map2.size){
      return false; 
  }

  for (const [key, value] of map1) {
      if(!map2.has(key) || map2.get(key) != value){
          return false; 
      }
  }
  return true;
}

/**
 * ----------------itération sur deux Map() et deux objets {} et get de leur key respectif voir : 
 *  ------------------    /home/aimeric/SymRea/HackerRank/neetcode/arrayAndHashing/topKFrequent.js
 */


/**
 * --------------trier un Map() par ordre décroissant en fonction de ces keys-----
 * mycar = {--------------};
 * let myArr = Array.from(myCar);
 *  myArr.sort((a, b) => b[0]-a[0]);
 *   const sortedMap = new Map(myArr);
 * 
 * -----------invérser b et a si ordre croissant et remplacer 0 par 1 si triage selon les values
 */

/**
 * décaler les éléments d'un tableau vers la droite
 *----------à chaque itération  
 */
function circularShiftLeft(arr) {
  const lastElement = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;
}
const decaledArr = ['a', 'b', 'c'];
for (let i = 0; i < decaledArr.length; i++) {
  console.log(decaledArr);
  circularShiftLeft(decaledArr);
}

/**
 * principe fenetre glissante sans faire de slice
 * -------- HackerRank/sorting/fraudulentActivity.js
 */