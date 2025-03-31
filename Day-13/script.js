"use strict";

console.log("Day 13: The this keyword");

// Global

// this keyword and window object
console.log("this at the global", this); // window

// object
// function

// Inside of an Object - Implicit Binding
const emplpyee = {
  id: "A5778",
  firstName: "Alex",
  lastName: "B",

  returnThis: function () {
    return this;
  },

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log("Employee Id", emplpyee.id); // "A5778"
console.log("this inside the employee object", emplpyee.returnThis());

console.log("Constructed Full Name using this", emplpyee.getFullName());

const tom = {
  name: "Tom",
  age: 7,
};

const jerry = {
  name: "jerry",
  age: 3,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old!`);
  };

  console.log(obj);
}

greetMe(tom);
tom.logMessage();

greetMe(jerry);
jerry.logMessage();

// Inside Function
function sayName() {
  console.log("this inside a function", this);
}

sayName(); //

function outer(a) {
  console.log("this inside an outer function", this);

  return function inner(b) {
    console.log("this inside an inner function", this);
  };
}
const outerResult = outer(5);
outerResult(3);

// Inside the Arrow Function

const getFood = () => this;

console.log(
  "this inside the arrow function defined in global scope",
  getFood()
);

const food = {
  name: "mango",
  color: "yellow",

  // getDesc: () => `${this.name} is ${this.color}`,
  /*getDesc: function() {
        return `${this.name} is ${this.color}`
    }*/
  getDesc: function () {
    return () => `${this.name} is ${this.color}`;
  },
};
const descFunc = food.getDesc();
console.log(descFunc());

// Explicit Binding - call, apply, bind

// The call method

function greeting() {
  console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
  name: "tapaScript",
  address: "All of YOU!",
};

greeting.call(user);

const likes = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

const person = {
  name: "Tapas",
};

likes.call(person, "Teaching", "Blogging");

// apply()

const hobbiesToApply = ["Sleeping", "Eating"];

likes.apply(person, hobbiesToApply);

// bind()
const newHobbies = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

const officer = {
  name: "Bob",
};

const newFn = newHobbies.bind(officer, "Dancing", "Singing");
newFn();

// The new binding

const Cartoon = function (name, animal) {
  this.name = name;
  this.animal = animal;
  this.log = function () {
    console.log(this.name + " is a " + this.animal);
  };
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();

console.log("**** Examples ****");

const userInfo = {
  name: "Tapas",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

userInfo.greet();

const obj = {
  name: "John",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;

greetFn.call(obj);

console.log("++++++++++ TASK SOLUTIONS ++++++++++");
// 1. Create a table of two columns, situation and value.
// Now add the rows for every situations and the value of this in that situation.
// Please cover the following situations

/*
    This an its values 

    in the global : window object
    inside an object method : the object it self
    Inside the Satandalone non-Arrow Function : strict = undefined, non-strict = window object 
    Inside an Arrow Function(standalone) : it inherit its parent wich is window object
    Inside an Arrow Function(as object method) : the window object
    Inside an object created with the Constructor Function : instance object it self

*/


// 2. What is the problem here? Fix it to log the correct name and explain the fix

const userGreating = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

userGreating.greet();

/*
    SOLUTION 

    the problem is that the this.name is undefined, and thats becouse of the arrow
    function inside an object, couse arrow function do not have their own value, but 
    they are lexical to thier parents, that means now on the window object
*/

// SOLVING

// 1- using regular fuction

const userGreatingSolve1 = {
  name: "tapaScript",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

userGreatingSolve1.greet();

// 2- using regualr function returning arrow function

const userGreatingSolve2 = {
  name: "tapaScript",
  greet: function () {
    return () => {
      console.log(`Hello, ${this.name}!`);
    };
  },
};

let userGreatingResult = userGreatingSolve2.greet();
userGreatingResult();

// 3. Can you explain what is the problem here and fix the issue to log the correct name?

const personObject = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

// const greetFunc = personObject.greet;
// greetFunc();

/*
    SOLUTION 

    the problem is that the great function is now stored in greetfunc variable,
    that means that variable was created for the global level when storing the function ,
    that means this.name is binded to the global object wich its value is undefined in strict mode.

*/

// to solve this i need to explicitly bind to the object that i need.

// i can do that with three methods call , apply, bind i am using the bind method

const greetfunc = personObject.greet.bind(personObject);
greetfunc();

// 4. What is the problem with the following code? Why isn't it logging the name correctly?

const userFixing = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

// userFixing.greet();

/*
    SOLUTION 

    the problem is the name is undefined , because the inner function is defined 
    inside another regular method, that means if a regular function is not defined 
    inside an object the value of this will be undefined.
*/

// 5. Create a Sports constructor function that takes name and number of players
// as arguments and assigns them using this keyword. Then,
// create two sports instances and log their details

function Sports(name, numberOfPlayers) {
  this.name = name;
  this.numberOfPlayers = numberOfPlayers;
}

const football = new Sports("football", 22);
console.log(football);

const basketball = new Sports("basketball", 13);
console.log(basketball);

// 6. Can you attach the car1's describe() method to car2 object?
// Give all possible solutions that you can think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car1.describe.call(car2); // solved

// 7. What will be the output of the following code and why?

const personSaying = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

personSaying.sayHello(); // "Charlie"
personSaying.sayHelloArrow(); // "undefined"

// because the this value of an array is its lexical scope parent , so that means now the
// arrow function is pointing to the window object which is undefined.
