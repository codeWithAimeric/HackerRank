var MinStack = function() {
    this.min = 0;
    this.length = 0;
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.length || x <= this.min) {
        this.stack.push(this.min);
        this.min = x;
    }
    this.stack.push(x);
    this.length++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (!this.length) return;
    var val = this.stack.pop();
    if (val === this.min) {
        this.min = this.stack.pop();
    }
    this.length--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.length ? this.stack[this.stack.length - 1] : 0;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */