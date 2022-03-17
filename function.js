"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandleCallback(n1, n2, callback) {
    const result = n1 + n2;
    callback(result); // callback function
}
printResult(add(5, 12));
// Function types
let combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8)); // 16
addAndHandleCallback(1000, 400, (result) => {
    console.log(result);
});
