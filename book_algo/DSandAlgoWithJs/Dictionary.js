function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count; 
    this.clear =  clear; 
}
function add(key, value) {
    if(key in this.datastore){
        this.datastore[key] += 1;
    }else{
        this.datastore[key] = 1;
    }
}
function find(key) {
    return this.datastore[key];
}
function remove(key) {
    delete this.datastore[key];
}
function showAll() {
    for (let key of Object.keys(this.datastore.sort())) {
        console.log(key + " -> " + this.datastore[key]);
    }
}
function count() {
    let n = 0;
    for (let key of Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}
function clear() {
    for (let key of Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

let pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Raymond", "012");
pbook.add("Mike", "666");
pbook.add("Mike", "666");
pbook.showAll();
