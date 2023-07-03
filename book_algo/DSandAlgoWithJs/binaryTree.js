function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    this.count = 1;
}
function show() {
    return this.data;
}
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.getMax = getMax;
    this.getMin = getMin;
    this.find = find; 
}
function insert(data) {
    let n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + "/");
        inOrder(node.right);
    }
}
function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}
function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}
function getMin() {
    let current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}
function getMax() {
    let current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}
function find(data) {
    let current = this.root;
    while (current.data != data) {
    if (data < current.data) {
    current = current.left;
    }
    else {
    current = current.right;
    }
    if (current == null) {
    return null;
    }
    }
    return current;
}
function remove(data) {
    root = removeNode(this.root, data);
}
function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
            return null;
        }
        // node has no left child
        if (node.left == null) {
            return node.right;
        }
        // node has no right child
        if (node.right == null) {
            return node.left;
        }
        // node has two children
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
}
function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}
function prArray(arr) {
    console.log(arr[0].toString() + ' ');
    for (var i = 1; i < arr.length; ++i) {
    console.log(arr[i].toString() + ' ');
    if (i % 10 == 0) {
        console.log("\n");
    }
    }
}
function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}


let nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
inOrder(nums.root);
console.log("PreOrder traversal: ");
preOrder(nums.root);
console.log("PostOrder traversal : ");
postOrder(nums.root);
let min = nums.getMin();
let max = nums.getMax();
console.log('Min = = =', min);
console.log('Max = = =', max);
let value = 235;
let found = nums.find(value);
if (found != null) {
console.log("Found " + value + " in the BST.");
} else {
console.log(value + " was not found in the BST.");
}