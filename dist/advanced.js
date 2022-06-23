"use strict";
var _a;
// Use in multiple places - known as type alias
let employeeAdvanced = {
    id: 1,
    name: 'Abbas',
    retire: (date) => {
        console.log(date);
    },
};
// Union types
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
// Nullable types
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Salam!');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
// if(customer !== null &7 customer !== undefined) {
//   console.log(customer.birthday);
// }
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// Optional element access operator
// if(customer !== null &7 customer !== undefined)
// customer?.[0]
// Optional call
let log = (message) => {
    console.log(message);
};
log === null || log === void 0 ? void 0 : log('Test');
