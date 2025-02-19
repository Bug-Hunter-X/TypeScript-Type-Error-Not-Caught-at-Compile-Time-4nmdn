function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
    return NaN; // Or throw an error
  }
}

let result1 = add(10, 5); // Correct
let result2 = add("hello", "world"); //Correct
let result3 = add("hello", 5); // Correct, returns NaN
console.log(result1, result2, result3); //15, helloworld, NaN 