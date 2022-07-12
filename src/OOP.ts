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
	constructor(
		public readonly id: number,
		public owner: string,
		private _balance: number,
		public nickname?: string
	) {}

	deposit(amount: number): void {
		if (amount <= 0) throw new Error('Invalid amount');
		// Record a transaction
		this._balance += amount;
	}

	get balance(): number {
		return this._balance;
	}

	// set balance(value: number) {
	//   if (value < 0)
	//     throw new Error('Invalid balance');
	//   this._balance = value;
	// }
}

// Creating object from classes and constructor
let account = new Account(1, 'Abbas', 100);
account.deposit(500);
console.log('Balance is:', `RM ${account.balance}`);

// Index signature - allow to access properties by index - creating property dynamically
class SeatAssignment {
	[seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Abbas';
seats.A2 = 'Ali';
console.log(seats);
class Ride {
	private static _activeRide: number = 0;

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
	constructor(public firstName: string, public lastName: string) {}
	get fullName() {
		return this.firstName + ' ' + this.lastName;
	}

	walk() {
		console.log('Walking');
	}
}

class Student extends Person {
	constructor(
		public override firstName: string,
		public override lastName: string,
		public studentId: string
	) {
		// use to reference base class
		super(firstName, lastName);
	}
	takeTest() {
		console.log('Taking test');
	}
}

let student = new Student('Muhammad', 'Abbas', 'IIL170011');
console.log(student);
// ===========================================================

class Teacher extends Person {
	override get fullName() {
		return 'Sensei ' + super.fullName;
	}
}
let teacher = new Teacher('Muhammad', 'Abbas');
console.log(teacher.fullName);

// =========================POLYMORPHISM========================
// Poly = many Morph = forms
class Hokage extends Person {
	override get fullName(): string {
		return 'Hokage ' + super.fullName;
	}
}

printNames([
	new Teacher('Hatake', 'Kakashi'),
	new Person('Sakura', 'Haruno'),
	new Student('Uzumaki', 'Naruto', 'IIL170022'),
	new Hokage('Hashirama', 'Tsunade'),
]);

function printNames(people: Person[]) {
	for (let person of people) {
		console.log(person.fullName);
	}
}

abstract class Shape {
	constructor(public color: string) {}
	abstract render(): void;
}

class Circle extends Shape {
	constructor(color: string, public radius: number) {
		super(color);
	}
	override render(): void {
		console.log('Rendering a circle');
	}
}

let shape = new Circle('red', 5);
shape.render();

// Interface - blueprint of an object =============================================
// Can have property and method
// Use camel name convention for interface

// abstract class Calendar {
// 	constructor(public year: number, public month: number) {}

// 	abstract addEvent(): void;
// 	abstract removeEnvent(): void;
// }

interface Calendar {
	name: string;
	addEvent(): void;
	removeEvent(): void;
}

interface CloudCalendar extends Calendar {
	sync(): void;
}

class GoogleCalendar implements Calendar {
	constructor(public name: string) {}
	addEvent(): void {
		throw new Error('Method not implemented.');
	}
	removeEvent(): void {
		throw new Error('Method not implemented.');
	}
}
