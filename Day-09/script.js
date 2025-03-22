// test();

var test = function () {
  console.log("I am being tested");
};

// Invoke a function, chase()
chase();

// Declare a function, chase()
function chase() {
  console.log("Tom chases Jerry!");
  // Invoke a function, caught();
  caught();
}

// Declare a function, caught()
function caught() {
  console.log("Tom caught Jerry :(");
}

// With var
{
  console.log("name is ", name);
  var name = "tom";
  name = "tom";
  console.log("name is ", name);
}

// With let
{
  //   console.log("name is ", name);
  let name = "tom";
  name = "tom";
  console.log("name is ", name);
}

// With const
{
  //   console.log("name is ", name);
  const name = "tom";
  //name = 'tom';
  console.log("name is ", name);
}

// Temporal Dead Zone(TDZ)

// TDZ = an area where you can not access a variable until it is initialized

// ReferenceError

{
  // === name variable's TDZ started here
  //
  //console.log(name); // RerenceError
  //
  //   console.log(address); // RerenceError
  let address = "bangalore";
  //
  let name = "tapaScript"; // === name variable's TDZ ends here
  console.log(name);
  //
  //
}

//TASK SOLUTIONS

// 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.
{
  console.log("hey"); // this is were the TDZ starts

  //this are is were we call TDZ are we cant acces the var1 variable here.
  // console.log(var1);// Undefined
  var var1 = "Hassan"; //the TDZ will end were the variable is declared. also var does not exist TDZ.

  console.log(var1); // but here it acceceible

  // console.log(var2)// Reference Error
  let var2 = "Mahad"; // this is were this varibales TDZ ends . also let and const they exest in the TDZ

  //but here its accessible
  console.log(var2);

  //can`t access here couse its TDZ area
  const var3 = "Cusmaan"; // its same with let

  //but here its accessible
  console.log(var3);
}

// 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

//starting variable hoisting

console.log(fVariable); // undefined
// this is what is called Hoisting accessing variable before initialization

var fVariable = "Hello";

//but let and const are hoisted if you try to access variable before initialization

//let and const : will throw Reference error

// function Hoisting

// functions are fully hoisted you can access before initialization

sayHello();

function sayHello() {
  console.log("Hello");
}

// but function expresion with declared var are not hoisted.

// error : say world is not a funciton becouse 
// sayWorld is initialized undefined that means you are calling undefined() and its not function .
sayWorld();


let sayWorld = function () {
  console.log("World");
};

