// Arrays
let numbers: number[] = [1, 2, 3];
let anyArray: any[] = [1, true, 'free'];

numbers.forEach((n) => n.toFixed());

// Tuples
let user: [number, string] = [1, 'abbas'];
user[0].valueOf();
user[1].length;

//Enums
const small = 1;
const medium = 2;
const large = 3;

const enum Size {
  Small,
  Medium,
  Large,
}
const enum Size2 {
  S = 1,
  M = 2,
  L = 3,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
function calculateTax(income: number, taxyear = 2022) {
  if (taxyear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(20000);
calculateTax(10_0000, 2023);
