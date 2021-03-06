// Define shape of object
type EmployeeAdvanced = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

// Use in multiple places - known as type alias
let employeeAdvanced: EmployeeAdvanced = {
  id: 1,
  name: 'Abbas',
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

// Intersection types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types
// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// Nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log('Salam!');
}
greet(null);

// Optional chaining
// type Customer = {
//   birthday: Date;
// };

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if(customer !== null &7 customer !== undefined) {
//   console.log(customer.birthday);
// }
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if(customer !== null &7 customer !== undefined)
// customer?.[0]

// Optional call
let log: any = (message: string) => {
  console.log(message);
};
log?.('Test');

// The nullish
let speed: number | null = null;
let ride = {
  // falsy value (undefined, null, '', false, 0)
  speed: speed ?? 30,
};

// Type assertion
let phone = document.getElementById('phone') as HTMLInputElement;
let number = <HTMLInputElement>document.getElementById('number');
// HTMLElement
// HTMLInputElement
phone.value;

// The unknown type
function render(document: unknown) {
  // Narrowing
  if (typeof document === 'string') {
    document.toUpperCase();
  }
}

// Never type - values that never occur
function processEvents(): never {
  while (true) {
    // Read a message from a queue
  }
}

function reject(message: string) {
  throw new Error(message);
}

processEvents();
reject('...');
console.log('Hello World');
