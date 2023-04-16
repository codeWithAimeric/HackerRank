function fibonacci(n) {
    // base case
    if (n <= 1) {
      return n;
    }
    // recursive case
    else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let n=6;
console.log(fibonacci(n));