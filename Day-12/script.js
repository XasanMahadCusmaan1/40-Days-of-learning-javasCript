console.log("Day 12 - JavaScript Objects");

let user = {
  name: "tapas",
  age: 40,
  "is adimin": true,
};

console.log(user.name); // "tapas"
console.log(user.age); // 40

user.isSeniorCitizen = false;
user["movie lover"] = true;

console.log(user);

console.log(user["is adimin"]);

user.age = 34;
user["movie lover"] = false;

// delete user["movie lover"];
// delete user.age;
console.log(user);

const someKey = "age";

console.log(user[someKey]); // 34

/*let car = prompt("Which is your fav car?");

let favCars = {
    [car]: 5
}

console.log(favCars);*/

// Cosntructor Function
function Car(name, model) {
  this.name = name;
  this.model = model;
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");
console.log(bmwCar);
console.log(audiCar);

console.log(bmwCar instanceof Car);

// // const person = new Object();
// person.name = "Alpha";
// person.age = 76;
// console.log(person);

// factory
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(this.name);
    },
  };
}

const user1 = createUser("tapas", 39);
console.log(user1);
user1.name;
user1.age;
user1.greet();
const user2 = createUser("bob", 32);
console.log(user2);

let profile = {
  name: "tapas",
  company: "CreoWis",
  message: function () {
    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: "Bangalore",
    pin: 56032,
    state: "Karnataka",
    country: "India",
    greeting: function () {
      console.log("Welcome to India");
    },
  },
};
// for ... in

for (let key in profile) {
  console.log(key);
  console.log(profile[key]);
}

console.log(Object.keys(profile));

console.log(profile.salary); // undefined

console.log("salary" in profile);

if (!profile.salary) {
  console.log("The salary property doesn't exist");
}

console.log(profile.address.country); // India
profile.address.greeting();
console.log(profile.name); // "tapas"
console.log(profile.company); // "CreoWis"

profile.message();

// Object Reference

let fruit = { name: "mango" }; // XA01
const oneMoreFruit = { name: "mango" }; // YB02

console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false

fruit = oneMoreFruit;

console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true

// Static Methods

const target = { p: 1, a: 2 };
const source = { a: 3, b: 5 };

const retrunedObj = Object.assign(target, source);
console.log(retrunedObj);

const obj = { name: "tapaScript" };
const obj2 = Object.assign({}, obj);
console.log(obj2);
console.log(obj === obj2);

const obj3 = {
  a: 1,
  b: { c: 2 },
};
const obj4 = Object.assign({}, obj3);
console.log(obj4); // {a: 1, b: {c: 2}}
// obj4.b.c = 3;

// obj4.a = 100;

// console.log(obj4.a); // 100
// console.log(obj3.a); // 1

// console.log(obj4.b.c) // 3
// console.log(obj3.b.c) // 3

const obj5 = structuredClone(obj3);

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj5.b.c); // 30
console.log(obj3.b.c); // 2

const myObj = {
  a: "tapas",
  b: 32,
};

const myArr = Object.entries(myObj);
console.log(myArr);

const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const objEntries = Object.fromEntries(entries);
console.log(objEntries);

const emp = {
  sal: 100,
};

Object.freeze(emp);

emp.sal = 200;
emp.name = "Alex";
delete emp.sal;

console.log(emp);

console.log(Object.isFrozen(emp));

const dept = {
  name: "finance",
};

Object.seal(dept);

dept.address = "Bangalore";
delete dept.name;

dept.name = "HR";
console.log(dept);

console.log(Object.hasOwn(dept, "address"));

console.log("Learn Object Destructuring....");

const student = {
  name: "John Williamson",
  age: 9,
  std: 3,
  subjects: ["Maths", "English", "EVS"],
  parents: {
    father: "Brown Williamson",
    mother: "Sophia",
    email: "john-parents@abcde.com",
  },
  address: {
    street: "65/2, brooklyn road",
    city: "Carterton",
    country: "New Zealand",
    zip: 5791,
  },
};

// const { name, age, meal = "bread" } = student;
// console.log(name, age, meal);

const { subjects, numberOfSubjects = subjects.length } = student;
console.log(numberOfSubjects); // 3

const { std: standard } = student;
console.log(standard);

const {
  address: { zip },
} = student;
console.log(zip);

function sendEmail({ parents: { email } }) {
  console.log(`Sent an email to ${email}`);
}

sendEmail(student);

const getStudent = () => {
  return {
    name: "John Williamson",
    age: 9,
    std: 3,
    subjects: ["Maths", "English", "EVS"],
    parents: {
      father: "Brown Williamson",
      mother: "Sophia",
      email: "john-parents@abcde.com",
    },
    address: {
      street: "65/2, brooklyn road",
      city: "Carterton",
      country: "New Zealand",
      zip: 5791,
    },
  };
};

// const { name: anotherName, subjects: anotherSubs } = getStudent();
// console.log(anotherName, anotherSubs);

const students = [
  {
    name: "William",
    grade: "A",
  },
  {
    name: "Tom",
    grade: "A+",
  },
  {
    name: "Bob",
    grade: "B",
  },
];

for (let { name, grade } of students) {
  console.log(name, grade);
}

console.log("Optional Chaining...");

const employee = {
  salary: {
    bonus: 300,
  },
};

console.log(employee.department); // undefined

//console.log(employee.department.name); // Error

// const name = employee.department && employee.department.name

// const name = employee.department?.name;
// console.log(name);

console.log("+++++++++++  TASK SOLUTIONS  ++++++++++");

//TASK SOLUTIONS

// 1. What will be the output and why?

const users = { name: "Alex", age: undefined };
console.log(users.age ?? "Not provided"); // 'Not provided'

/* SOLUTION 
    the output is 'Not provided', becouse of Nullish coalescing operator.
    it returns the right hand operand if the left hand one is undefined or null
*/

// 2. What will happen if we try to modify a frozen object?

const object = Object.freeze({ a: 1 });
object.a = 2;
console.log(object.a); // 1

/* SOLUTION
    nothing, you only get the original properties couse when you use freeze method means,
    you can't do any thing with object that become freeze.
*/

// 3. Given an object with deeply nested properties, extract name, company,
// and address.city using destructuring

const person = {
  firstName: "Tapas",
  company: {
    name: "tapaScript",
    address: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  firstName,
  company,
  company: {
    address: { city },
  },
} = person;
console.log(firstName);
console.log(company);
console.log(city);

// 4. Build a Student Management System

// - Store student details in an object (name, age, grades).
// - Implement a method to calculate the average grade.

const studentManagementSystem = {
  name: "Hassan",
  age: 19,
  grades: {
    math: 90,
    physics: 80,
    english: 100,
  },

  calcAverage() {
    let sum = 0;
    let lengthOfGrades = Object.values(this.grades).length;
    for (let [_, grade] of Object.entries(this.grades)) {
      sum += grade;
    }
    console.log(`The average grade is ${sum / lengthOfGrades}`);
  },
};

studentManagementSystem.calcAverage();

// 5- Book Store Inventory System

// - Store books in an object.
// - Add functionality to check availability and restock books.

const bookStoreInventory = {
  books: {
    book1: {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      quantity: 3,
    },

    book2: {
      title: "1984",
      author: "George Orwell",
      quantity: 1,
    },

    book3: {
      title: "The Alchemist",
      author: "Paulo Coelho",
      quantity: 10,
    },
  },

  // check availibalty method
  checkAvailability(bookTitle) {
    for (const [_bookIndex, titles] of Object.entries(this.books)) {
      if (bookTitle === titles.title) {
        console.log(`This book '${bookTitle}' is available`);
        return;
      }
    }
    console.log(`This book '${bookTitle}' is not available`);
  },

  // restock method
  restockBooks(bookTitle, quantity) {
    for (const [_bookIndex, titles] of Object.entries(this.books)) {
      if (bookTitle === titles.title) {
        titles.quantity += quantity;
        console.log(
          `'${bookTitle}' : was added another '${quantity}' books and the total available is '${titles.quantity}'`
        );
        return;
      }
    }
    console.log(`'${bookTitle}' : is not valid Enter valid book `);
  },
};

bookStoreInventory.checkAvailability("1984");
bookStoreInventory.restockBooks("The Alchemist", 5);
console.log(bookStoreInventory);

// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

/*
  SOLUTION :
    Object.keys : takes object and returns array which contains the object keys.
    Object.entries : it returns arrays which contain key and value of the object that is passed.
*/

// 7. How do you check if an object has a certain property?

/*
  SOLUTION :
    i can check using in operator which returns true or false.
*/

// 8. What will be the output and why?

const personName = {
  name: "John",
};

const newPerson = personName;
newPerson.name = "Doe";
console.log(personName.name); // 'Doe'

/*
  SOLUTION : 
    the output will be name propertye set to 'Doe',thats because
    objects are reference type that means if you copy it will share the same reference,
    so newPerson was copy to personName object that means they will be same if you change 
    newPerson object the personName will be changed.
*/

// 9. What’s the best way to deeply copy a nested object? Expalin with examples

/*
  SOLUTION :
    the best way of making deep clone for nested objects is using structuredClone method .
*/

//Example

const object1 = {
  a: 2,
  b: { c: 5 },
};

// This is called shallow copy means they share same reference, if i change one the other one will change.
let object2 = Object.assign({}, object1);

object2.a = 5; // a property was 2 now will become 5 with all the two objects, object1 and object2
object2.b.c = 10; // also this is the same.

console.log(object1, object2); // the two object become same as 10.

// to make deep copy you need to use structuredClone.

object2 = structuredClone(object1);

object1.a = 5; // a was 2 now becomes 5 object1 only

object1.b.c = 15; // also this one c will become the 15 only object1

console.log(object1, object2);

// so to make deep clone use structuredClone function.

// 10. Loop and print values using Object destructuiring

const userInfo = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (const { name, address, age } of userInfo) {
  console.log(name, address, age);
}
