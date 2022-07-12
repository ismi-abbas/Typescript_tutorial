"use strict";
/* Object-Oriented Programming
1. Classes - building block of OOP
2. Constructors
3. Properties and methods
4. Access control keywords
5. Getter and setters
6. Static members
7. Index signature
8. Inheritance
9. Polymorphism
10. Abstract classes
*/
// Class - blueprint of an object
// Can have property and method
// Use pascal name convention for class
// Access modifiers - public, private, protected
// Access is public by default
// Public - can be accessed from anywhere
// Private - can only be accessed from within the class
// Use private to write robust code
// Protected - can be accessed from within the class and subclasses
class Account {
    constructor(id, owner, _balance, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        // Record a transaction
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
// Creating object from classes and constructor
let account = new Account(1, 'Abbas', 100);
account.deposit(500);
console.log('Balance is:', `RM ${account.balance}`);
// Index signature - allow to access properties by index - creating property dynamically
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Abbas';
seats.A2 = 'Ali';
console.log(seats);
class Ride {
    start() {
        Ride._activeRide++;
    }
    stop() {
        Ride._activeRide--;
    }
    static get activeRide() {
        return Ride._activeRide;
    }
}
Ride._activeRide = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log('Active Ride:', Ride.activeRide);
// ============================================================
// Inheritance - extends class
// Parent / Base/ Super for master object
// Child/ Derived/ Sub for inheritance object
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(firstName, lastName, studentId) {
        // use to reference base class
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking test');
    }
}
let student = new Student('Muhammad', 'Abbas', 'IIL170011');
console.log(student);
// ===========================================================
class Teacher extends Person {
    get fullName() {
        return 'Sensei ' + super.fullName;
    }
}
let teacher = new Teacher('Muhammad', 'Abbas');
console.log(teacher.fullName);
// =========================POLYMORPHISM========================
// Poly = many Morph = forms
class Hokage extends Person {
    get fullName() {
        return 'Hokage ' + super.fullName;
    }
}
printNames([
    new Teacher('Hatake', 'Kakashi'),
    new Person('Sakura', 'Haruno'),
    new Student('Uzumaki', 'Naruto', 'IIL170022'),
    new Hokage('Hashirama', 'Tsunade'),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('Rendering a circle');
    }
}
let shape = new Circle('red', 5);
shape.render();
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error('Method not implemented.');
    }
    removeEvent() {
        throw new Error('Method not implemented.');
    }
}
