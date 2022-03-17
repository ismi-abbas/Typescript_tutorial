function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result: ' + num);
}

function addAndHandleCallback(
  n1: number,
  n2: number,
  callback: (num: number) => void
) {
  const result = n1 + n2;
  callback(result); // callback function
}

printResult(add(5, 12));

// Function types
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8)); // 16

addAndHandleCallback(1000, 400, (result) => {
  console.log(result);
});
