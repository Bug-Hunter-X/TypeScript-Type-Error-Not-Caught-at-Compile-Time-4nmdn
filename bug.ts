function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 5); // Type error is not caught at compile time
console.log(result); // This will compile and run, producing NaN