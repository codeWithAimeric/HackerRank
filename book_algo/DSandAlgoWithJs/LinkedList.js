function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null; 
}
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    // this.findPrevious = findPrevious;
    this.remove = remove;
    this.dispReverse = dispReverse;
    this.findLast = findLast;
}
function find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
    currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}
function display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
        console.log('currentNode--', currNode.next.element);
        currNode = currNode.next;
    }
}
//no longer needed in a double linked list
// function findPrevious(item) {
//     let currNode = this.head;
//     while (!(currNode.next == null) &&
//     (currNode.next.element != item)) {
//         currNode = currNode.next;
//     }
//     return currNode;
// }
function remove(item) {
    let currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
function findLast() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}
function dispReverse() {
    let currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous == null)) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

let cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
console.log('Linked List  = == = = = = = =', cities);
cities.dispReverse();