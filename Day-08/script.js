//LEXICAL ENVIRONMENT

// More Code here
// ...
// ..
// .

function sayName() {
  var name = "someName";
  console.log("The name is, ", name);
}

sayName();

// More Code here
// ...
// ..
// .

//CALL STACK EXAMPLE

console.log("Inside Global Execution Context");
var a = 5;
function testMe() {
  console.log("Inside testMe Execution context");
  var b = 10;
  var user = {
    name: "tapas",
    country: "India",
  };
  function testAgain() {
    console.log("Inside testAgain Execution Context");
    console.log("Exiting testAgain Execution Context");
  }
  testAgain();
  console.log("Exiting testMe execution context");
}
testMe();
console.log("Exiting global execution context");

//FUNCTION EXECUTION CONTEXT
var name = "Tom";

function tom() {
  console.log(this.name + " Runs");
}

// Invoke the function tom()
tom();

//GLOBAL EXECUTION CONTEXT
var name = "Tom";

function sayName() {
  console.log(this.name);
}

//TASKS SOLVED WITH THE TASK-SOLVE.MD FILE YOU CAN LOOK IT .
