const { log } = require("console");

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top-1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}

let s = new Stack();
s.push("David");
s.push("Bryan");
console.log('s = = = = === ', s);
console.log("length: ", s.length);
let popped = s.pop();
console.log("The popped element is : "+ popped);
console.log('s.peek = = = =', s.peek());
s.push("Cynthia");
console.log('s.peek = = = =', s.peek());
s.clear();
console.log("length : ", s.length);
console.log('s.peek = = = =', s.peek());
s.push("Clayton");
console.log('s.peek = = = =', s.peek());
console.log('s = = = = = = ', s);