"use strict";
// Arrays
let numbers = [1, 2, 3];
let anyArray = [1, true, 'free'];
numbers.forEach((n) => n.toFixed());
// Tuples
let user = [1, 'abbas'];
user[0].valueOf();
user[1].length;
//Enums
const small = 1;
const medium = 2;
const large = 3;
let mySize = 1 /* Size.Medium */;
console.log(mySize);
// Functions
function calculateTax(income, taxyear = 2022) {
    if (taxyear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(20000);
calculateTax(100000, 2023);
let employee = {
    id: 1,
    name: 'Abbas',
    retire: (date) => {
        console.log(date);
    },
};
