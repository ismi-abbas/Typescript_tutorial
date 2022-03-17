"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read_only"] = 1] = "Read_only";
    Role[Role["Maker"] = 2] = "Maker";
    Role[Role["Checker"] = 3] = "Checker";
})(Role || (Role = {}));
const person = {
    name: 'Muhammad Abbas',
    age: 24,
    occupation: 'Software Developer',
    hobbies: ['Coding', 'Reading', 'Watching Movies'],
    role: Role.Checker,
};
// Array
let favoriteActivities;
favoriteActivities = ['Coding', 'Reading', 'Watching Movies'];
for (const hobby of person.hobbies) {
    console.warn(hobby.toUpperCase());
}
console.log(person);
