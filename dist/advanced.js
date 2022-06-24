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
// The nullish
let speed = null;
let ride = {
    // falsy value (undefined, null, '', false, 0)
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
// Type assertion
let phone = document.getElementById('phone');
let number = document.getElementById('number');
// HTMLElement
// HTMLInputElement
phone.value;
// The unknown type
function render(document) {
    // Narrowing
    if (typeof document === 'string') {
        document.toUpperCase();
    }
}
// Never type - values that never occur
function processEvents() {
    while (true) {
        // Read a message from a queue
    }
}
function reject(message) {
    throw new Error(message);
}
processEvents();
reject('...');
console.log('Hello World');
