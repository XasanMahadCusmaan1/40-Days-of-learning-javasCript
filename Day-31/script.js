class Car {
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }

  isExpensive() {
    console.log(`Yes this ${this.name} is Expensive`);
  }
}

Object.prototype.isTrue = "Yes";

const bmwCar = new Car("BMW", "2H44", 2025);
const teslaCar = new Car("TESLA", "2V33", 2024);

console.log(bmwCar);
console.log(teslaCar);

bmwCar.isExpensive();
teslaCar.isExpensive();

// Debricated
console.log(bmwCar.__proto__);
// Modern
console.log(Object.getPrototypeOf(bmwCar));

console.log("TASK SOLUTIONS.............");

// - [ ]  1. Create a Simple Prototype Chain
// - Define a base object animal with a method eat.
// - Create another object dog that inherits from animal using Object.create.
// - Call eat from dog and explain how the prototype chain resolves it.

// this animal object was created for the real js Object
const animal = {
  eat() {
    console.log("Animal is eating");
  },
};

// this one is same couse Object.create created new object
// based on the prototype of the animal object
const dogObj = Object.create(animal);

// now if i try to retreive the eat method i am getting same as the animal object
// and that becouse this two object has same prototype wich is Object, and this is called
// inheritance.
dogObj.eat(); // Animal is eating

console.log(animal, dogObj);

// - [ ]  2. Build a Custom Constructor Function
// - Create a constructor function Book(title, author).
// - Add a method getDetails() to the prototype of Book.
// - Instantiate two books and show they share the method from the prototype.

function Book(title, author) {
  this.title = title;
  this.author = author;
}

// this makes one function for all instance books for this constructor.
Book.prototype.getDetails = function () {
  console.log(`These are the Details : ${this.title} and ${this.author}`);
};

const firstBook = new Book("Atomic Habits", "James");
const secondBook = new Book("48 Laws of power", "Miller");

// this is the proof that these two instances share one prototype and
// the function i defined on their constructor function prototype.
firstBook.getDetails();
secondBook.getDetails();

// this is the ultimate proof for they share same prototype.
console.log(firstBook.getDetails === secondBook.getDetails); //true

// - [ ]  3. Compare Object Creation Patterns

// Create three objects using:

// - Object literals
// - Constructor functions
// - Object.create

// Add similar methods and compare how inheritance works in each pattern.

const objLiterals = {
  run() {
    console.log("Run");
  },
};

// this object litteral so the method is defined
// directly on the object it self.
objLiterals.run();

function Human(name) {
  this.name = name;
}

// this method will be availible for all instances for this Human constructor,
// becouse they share same prototype wich is Human constructor
Human.prototype.run = function () {
  console.log("Run");
};

const firstPerson = new Human("Hassan");

// it will look the parent object wich is Person constructor
// and it finds thats why it works for this pattern.
firstPerson.run();

// this object will be created from the Object
const proto = {
  run() {
    console.log("Run");
  },
};

// but this was inherited and created from the proto object,
// if i run method protoPattern.run it will look curent proto level,
// if it miss and still it will look up to the proto Object wich i was
// created this object and it finds thats how they inherit for this pattern.
const protoPattern = Object.create(proto);
protoPattern.run();

// three creation patterns will be different for their prototype so
// they will be independent.
objLiterals.run();
firstPerson.run();
protoPattern.run();

// - [ ]  4. Simulate a Real-World Inheritance Chain
// - Simulate a real-life hierarchy: Person → Student → GraduateStudent.
// - Each level should add its own methods or properties using prototypes.
// - Show how a GraduateStudent can access methods from both Student and Person.

class Person {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }

  personDetails() {
    console.log(`PersonName :${this.name}, PersonTitle :${this.title}`);
  }
}

const newPerson = new Person("Hassan", "Student");
console.log(newPerson);

class Student extends Person {
  constructor(name, title, grade) {
    super(name, title);
    this.grade = grade;
  }

  studentDetails() {
    console.log(
      `StudentName :${this.name}, StudentTitle :${this.title}, StudentGrade :${this.grade}`
    );
  }
}

const newStudent = new Student("Hassan", "Student", 12);
console.log(newStudent);

class GraduateStudent extends Student {
  constructor(name, title, grade, isGraduate) {
    super(name, title, grade);
    this.isGraduate = isGraduate;
  }

  checkGraduateStudent() {
    console.log(
      `StudentName :${this.name}, StudentTitle :${this.title}, IsGraduated :${this.isGraduate}`
    );
  }
}

const firstStudent = new GraduateStudent("Hassan", "Student", 12, true);
console.log(firstStudent);

// this method comes from Person Class and it can access to this class also ,
// becouse of prototype and inheritance.
firstStudent.personDetails();

// this comes form Student class and still can access the graduted student.
firstStudent.studentDetails();

// this comes to the graduate student it self.
firstStudent.checkGraduateStudent();

// - [ ]  5. Object.create vs Class vs Constructor Function
// - Implement the same User entity using:
//     - Constructor Function
//     - ES6 Class
//     - Object.create
// - Write a summary comparing syntax, readability, and prototype behavior.

function UserConstractor(name, title) {
  this.name = name;
  this.title = title;
}

UserConstractor.prototype.userDetails = function () {
  console.log(`UserName :${this.name}, UserTitle :${this.title}`);
};

const firstUserComConstructor = new UserConstractor("Hassan", "Student");
console.log(firstUserComConstructor);

class UserClass {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }

  userDetails() {
    console.log(`UserName :${this.name}, UserTitle :${this.title}`);
  }
}

const secondUserComClass = new UserClass("Faadumo", "College Student");
console.log(secondUserComClass);

const UserObj = {
  name: "Wehliye",
  title: "University Student",

  userDetails() {
    console.log(`UserName :${this.name}, UserTitle :${this.title}`);
  },
};

const thirdUserComObjLitteral = Object.create(UserObj);
thirdUserComObjLitteral.name = 'David';
thirdUserComObjLitteral.title = 'Profersor';

console.log(thirdUserComObjLitteral)

// Summary :-

// Constructor Function :
//   Readability:
//      Familiar to those with older JavaScript or classical OOP backgrounds, but less intuitive for beginners.
//   Prototype Behavior:
//      Methods are attached to the constructor's prototype, so all instances share the same method reference.
//   Use Case:
//      Useful for legacy codebases or when you need function-based OOP.
// Class:
//   Syntax:
//      Uses the class keyword, with a constructor and methods
//      defined inside the class body.
//   Readability:
//      Modern, clean, and similar to class-based OOP in other l
//      anguages. Easier to read and maintain.
//   Prototype Behavior:
//      Methods are automatically placed on the class prototype,
//      shared by all instances.
//   Use Case:
//      Preferred in modern JavaScript for clarity, maintainability,
//      and scalability.
// Object.create:
//   Syntax:
//      Uses Object.create(protoObj) to create a new object with a
//      specified prototype.
//   Readability:
//      Can be confusing for beginners, but is powerful for prototypal inheritance 
//      and creating objects with custom prototypes.
//   Prototype Behavior:
//      The new object directly inherits from the prototype 
//      object passed to Object.create.
//   Use Case:
//      Useful for creating objects with a specific prototype, 
//      or for prototypal inheritance without classes or constructors.