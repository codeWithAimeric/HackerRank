function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    this.betterHash = betterHash;
    this.get = get;
    this.buildChains = buildChains;
    this.values = [];
}
function get(key) {
    let hash = -1;
    hash = this.betterHash(key);
    if (hash > -1) {
        for (let i = hash; this.table[hash] != undefined; i++) {
            if (this.table[hash] == key) {
                return this.values[hash];
            }
        }
    }
    return undefined;
}
function put(key, data) {
    let pos = this.betterHash(key);
    if (this.table[pos] == undefined) {
        this.table[pos] = key;
        this.values[pos] = data;
    } else {
        while (this.table[pos] != undefined) {
            pos++;
        }   
    this.table[pos] = key;
    this.values[pos] = data;
    }
}
function simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data + " -> " + total);
    return total % this.table.length;
}
function showDistro() {
    let n = 0;
    for (let i = 0; i < this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}
function betterHash(string) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length-1;
    }
    return parseInt(total);
}
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function genStuData(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let num = "";
        for (let j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50,100);
        arr[i] = num;
    }
}
function buildChains() {
    for (let i = 0; i < this.table.length; ++i) {
    this.table[i] = new Array();
    }
}

let hTable = new HashTable();
hTable.buildChains();
let someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (let i = 0; i < someNames.length; ++i) {
hTable.put(someNames[i]);
}
hTable.showDistro();