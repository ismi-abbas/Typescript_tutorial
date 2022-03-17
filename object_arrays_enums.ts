enum Role {
  Admin,
  Read_only,
  Maker,
  Checker,
}

const person = {
  name: 'Muhammad Abbas',
  age: 24,
  occupation: 'Software Developer',
  hobbies: ['Coding', 'Reading', 'Watching Movies'],
  role: Role.Checker,
};

// Array
let favoriteActivities: string[];
favoriteActivities = ['Coding', 'Reading', 'Watching Movies'];

for (const hobby of person.hobbies) {
  console.warn(hobby.toUpperCase());
}

console.log(person);
