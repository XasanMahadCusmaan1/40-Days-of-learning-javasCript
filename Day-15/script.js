console.log("Day 15: JavaScript Array Master Course");

{
  const mixedArray = [100, true, "tapaScript", {}];

  // index = The position of an element in the array is known as its index.
  // index starts with 0
  // index end with length - 1

  const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

  function Car(model) {
    this.model = model;
  }

  const bmwCar = new Car("BMW X1");
  console.log(bmwCar);

  const anotherSalad = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑");

  console.log("Salad", salad);
  console.log("Another Salad", anotherSalad);

  console.log(salad === anotherSalad);

  const two = new Array(1, 2);
  console.log(two); // [1, 2]

  // const element = array[index]

  console.log(salad[0]); // '🍅'
  console.log(salad[2]); // '🥦'
  console.log(salad[5]); // '🥕'

  // const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

  for (let i = 0; i <= salad.length - 1; i++) {
    console.log(`Element at index ${i} is ${salad[i]}`);
  }

  // push() - end
  const ret = salad.push("🥜");
  console.log(ret); // 8
  console.log(salad);

  // unshift() - start

  const unRet = salad.unshift("🥜");
  console.log(unRet); // 9
  console.log(salad);

  // pop - end
  console.log(salad);
  const popRet = salad.pop();
  console.log(popRet);
  console.log(salad);

  // shift() - start
  console.log(salad);
  const shiftRet = salad.shift();
  console.log(shiftRet);
  console.log(salad);

  // slice() - copy

  // salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  const saladCopy = salad.slice();
  console.log("Salad Before Copy", salad);
  console.log("Salad After Copy", saladCopy);
  console.log(salad === saladCopy); // false

  // Deletermine if Array
  Array.isArray(["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]); // true;
  Array.isArray("🍅"); // returns false
  Array.isArray({ tomato: "🍅" }); // returns false
  Array.isArray([]); // returns true

  const arr = [1, 2, 3, 4];
  Array.isArray(arr); // true
}
// Array Destructuring
{
  const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

  const tomato = salad[0];
  const mushroom = salad[1];
  const carrot = salad[5];
}

{
  const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
  const [tomato, mushroom, carrot] = ["🍅", "🍄", "🥕"];
  console.log(tomato, mushroom, carrot);
}

{
  const [tomato, mushroom = "🍄"] = ["🍅"];

  console.log(tomato); // '🍅'
  console.log(mushroom); // '🍄'
}

{
  const [tomato, , carrot] = ["🍅", "🍄", "🥕"];

  console.log(tomato); // '🍅'
  console.log(carrot); // '🥕'
}

// Nested Array

// [1 ,2, [4, [6, 8, ['q']]]]
{
  let fruits = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];
  const veg = fruits[4]; // ['🍅', '🍄', '🥕']
  // const carrot = veg[2]; // '🥕'

  fruits[4][2]; // '🥕'

  let [, , , , [, , carrot]] = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];
}

// Rest and Spread
// ...
{
  const [tomato, mashroom, ...rest] = [
    "🍅",
    "🍄",
    "🥦",
    "🥒",
    "🌽",
    "🥕",
    "🥑",
  ];
  console.log(rest);

  const mySalad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
  const mySaaladCopy = [...mySalad];

  console.log(mySaaladCopy); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

  mySalad === mySaaladCopy; // false
}

// Swapping
{
  let first = "😔";
  let second = "🙂";

  [first, second] = [second, first];

  console.log(first); // '🙂'
  console.log(second); // '😔'
}

// Merge

{
  const emotions = ["🙂", "😔"];
  const veggies = ["🥦", "🥒", "🌽", "🥕"];

  const emotionalVeggies = [...emotions, ...veggies];

  console.log(emotionalVeggies);
}

// length

{
  const arr1 = [11, 21, 73];
  const arr2 = new Array(7);

  console.log(arr1.length); // 3
  console.log(arr2.length); // 7

  // 2 ** 32 - 1 // 4294967295

  arr1.length = 9;
  console.log(arr1);
}

// concat()

{
  const first = [1, 2, 3];
  const second = [4, 5, 6];
  const third = [7, 8, 9];

  const merged = first.concat(second, third);
  console.log(merged);

  console.log(first); // [1, 2, 3]
  console.log(second); // [4, 5, 6]

  // array.concat(arr1, arr2,..,..,..,arrN);
}

// join()
{
  const emotions = ["🙂", "😍", "🙄", "😟"];

  const joined = emotions.join("<=>");
  console.log(joined);

  [].join(); // return ""
}

// fill()
{
  const colors = ["red", "blue", "green"];
  colors.fill("pink", 1, 3);
  console.log(colors);
}

// includes()
{
  const names = ["tom", "alex", "bob", "john"];

  console.log(names.includes("tom"));
  console.log(names.includes("july"));
}

// indexOf() and lastIndexOf()
{
  const names = ["tom", "alex", "bob", "tom"];

  names.indexOf("alex"); // 1
  names.indexOf("rob"); // -1

  names.indexOf("tom"); // 0
  names.lastIndexOf("tom"); // 3
}

// reverse()
{
  const names = ["tom", "alex", "bob"];
  console.log(names.reverse());
}

// sort()
// The default sort() method converts the element types into strings
//  The default sorting order is ascending.

{
  const names = ["tom", "alex", "bob"];
  console.log("After default sorting", names.sort());

  const artists = [
    "John White Abbott",
    "Leonardo da Vinci",
    "Charles Aubry",
    "Anna Atkins",
    "Barent Avercamp",
  ];

  console.log("Default sorting of artists array", artists.sort());

  artists.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
  });

  console.log("Sort the artist names(Descending)", artists);

  let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

  console.log(
    "age with default sorting",
    ages.sort(function (a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
    })
  );
}

// splice()
{
  // splice(start, deleteCount, item, item1, item2)

  const names = ["tom", "alex", "bob"];

  //console.log(names.splice(0, 1, "john")); // ['tom']
  //console.log(names);

  //names.splice(1, 0, 'zack');

  names.splice(2, 1, "zack");
  console.log(names);
}

// at()
{
  const junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍿"];

  junkFoodILove.at(0); // '🥖'

  junkFoodILove.at(3); // '🍕'

  junkFoodILove.at(-1); // '🍿'

  junkFoodILove.at(-5); // '🍕'

  junkFoodILove.at(-8); // '🥖'

  junkFoodILove.at(10); // undefined
}

// copyWithin()
{
  // copyWithin(target, start, end)

  const array = [1, 2, 3, 4, 5, 6, 7];
  array.copyWithin(0, 3, 6);
  console.log(array);
  [4, 5, 6, 4, 5, 6, 7];

  const array1 = [1, 2, 3, 4, 5, 6, 7];
  array1.copyWithin(0, 4);
  console.log(array1);
}

// flat()
{
  const arr1 = [0, 1, 2, [3, 4]];
  console.log(arr1.flat());

  const arr2 = [0, 1, [2, [3, [4, 5]]]];
  console.log(arr2.flat(Infinity));
}

// grouping
{
  const employees = [
    { name: "Bob", dept: "Engineering", salary: 5000 },
    { name: "Alex", dept: "HR", salary: 3000 },
    { name: "Ravi", dept: "Engineering", salary: 7000 },
    { name: "John", dept: "Engineering", salary: 1000 },
    { name: "Tom", dept: "Sales", salary: 6000 },
  ];

  const groupedByDet = Object.groupBy(employees, ({ dept }) => dept);
  console.log(groupedByDet);

  const groupedByMoreThan5000 = Object.groupBy(employees, ({ salary }) => {
    return salary >= 5000 ? "More than 5k" : "Less than 5k";
  });
  console.log(groupedByMoreThan5000);
}

// toReversed()
{
  const items = [1, 2, 3];

  const reversedItems = items.toReversed();

  console.log(reversedItems);
  console.log(items);
}

// toSorted()
{
  const months = ["Mar", "Jan", "Feb", "Dec"];
  const sortedMonths = months.toSorted();

  console.log(sortedMonths);
  console.log(months);
}

// toSpliced()
{
  const months = ["Jan", "Mar", "Apr", "May"];

  const months2 = months.toSpliced(1, 0, "Feb");

  console.log("Original Array", months);
  console.log("Spliced Array", months2);
}

// with()
{
  const numbers = [1, 2, 3, 4, 5];

  // numbers[2] = 6;

  const newArray = numbers.with(2, 6);

  console.log(numbers); // Unchanged => [1, 2, 3, 4, 5];
  console.log(newArray); // Changed(A new copy) => [1, 2, 6, 4, 5];

  // numbers[-2] = 8 // undefined
  const anotherArray = numbers.with(-2, 8);
  console.log(numbers);
  console.log(anotherArray); // [1, 2, 3, 8, 5]
  // with(index, value)
}

// Array Like
{
  // {key: "value"} // object
  // [1,2,3] // array

  const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };

  console.log(arr_like);

  arr_like[2]; // 'array-like'
  arr_like.length; // 3

  console.log("is arr_like is an array?", Array.isArray(arr_like)); // false

  console.log("is arr_like is an object?", arr_like instanceof Object); // true

  function checkArgs() {
    console.log("Array Like Args", arguments);
    const argArr = [...arguments];
    console.log("Converetd Arary Args", argArr);
    argArr.forEach((elem) => {
      console.log(elem);
    });
  }

  checkArgs(1, 45);

  console.log(
    "HTML COllection as Array Like",
    document.getElementsByTagName("li")
  );
  const collectionArr = Array.from(document.getElementsByTagName("li"));
  console.log("Converted Array", collectionArr);
}

// fromAsync()
{
  const collectionPromise = Array.fromAsync(
    document.getElementsByTagName("li")
  );
  console.log("Converted Array", collectionPromise);

  collectionPromise.then((value) => console.log(value));

  const ret = Array.fromAsync({
    0: Promise.resolve("tapaScript"),
    1: Promise.resolve("Google"),
    2: Promise.resolve("Apple"),
    length: 3,
  }).then((value) => console.log(value));

  console.log(ret);
}

// of()
{
  const a = new Array(2, 3, 4); // [2,3,4]
  const b = [4, 5, 6]; // [4,5,6]

  const c = Array.of(2, true, "test", { name: "Alex" }, [1, 2, 3]);
  console.log("c", c);
}

let customers = [
  {
    // id: 001,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    // id: 002,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    // id: 003,
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    // id: 004,
    f_name: "Dev",
    l_name: "Currian",
    gender: "M",
    married: true,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    // id: 005,
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

// filter() - Get 'Senior Citizens' by Filtering out other customers

const seniorCustomers = customers.filter((customer) => {
  return customer.age >= 60;
});
console.log("Senior Customer list", seniorCustomers);

// map() - Transform to add title and full name

const customersWithFullName = customers.map((customer) => {
  let title = "";

  if (customer.gender === "M") {
    title = "Mr.";
  } else if (customer.gender === "F" && customer.married) {
    title = "Mrs.";
  } else {
    title = "Miss";
  }

  customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`;

  return customer;
});

console.log("Customer after adding fullname", customersWithFullName);

// reduce() - The average age of the Customers who have purchased the Item, 'Book'.

/*arr.reduce(
    reducer(
       accumulator,
       currentValue,
       index,
       array),
    initialValue);
// A reducer function which is also called as callback function to be called on each element of the array.

const ret = function reducer(accumulator, currentValue, index, array) {
    // do something with accumulator and currentvalue
    // You get a result
    // You return that result
}
*/
{
  const arr = [1, 2, 3, 4, 5];

  const result = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log(result);
}

let count = 0;
const total = customers.reduce((accumulator, customer) => {
  if (customer.purchased.includes("Book")) {
    accumulator = accumulator + customer.age;
    count = count + 1;
  }
  return accumulator;
}, 0);

console.log("Customer Avg age Purchased Book:", Math.floor(total / count));

// reduceRight() -- To reduce from the right

let number = [100, 40, 15];

const subsResult = number.reduceRight((accumulator, current) => {
  return accumulator - current;
});

console.log("Subs", subsResult);

// some() - Do we have a Young Customer(age less than 10 years)?

const hasYoungCustomer = customers.some((customer) => {
  return customer.age < 10;
});

console.log("Has Young Customer(Age < 10):", hasYoungCustomer);

// every() - Every Customer is Married?

const isAllMarried = customers.every((customer) => {
  return customer.married;
});

console.log("All Customer Married?:", isAllMarried);

// find() - Find the youngest customer

const foundYoungCustomer = customers.find((customer) => {
  return customer.age < 10;
});

console.log("Found Young Customer(Age < 10): ", foundYoungCustomer);

// findIndex() method
const youngCustomerIndex = customers.findIndex((customer) => {
  return customer.age < 10;
});

console.log("Found Young Customer Index: ", youngCustomerIndex);

// findLast() method

const lastFoundYoungCustomer = customers.findLast((customer) => {
  return customer.age < 10;
});
console.log(
  "[find] Last Found Young Customer(Age < 10): ",
  lastFoundYoungCustomer
);

// Array method Chaining

// Use Case: Get the total amount spent by Married Customers

// reduce()
// map()
// filter()

// Find all the married customers

const totalExpense = customers
  .filter((customer) => {
    return customer.married;
  })
  .map((marriedCustomer) => {
    return marriedCustomer.expense;
  })
  .reduce((accum, expense) => {
    return accum + expense;
  }, 0);

console.log("Total Expense of Married Customers in INR: ", totalExpense);

const arr = [1, 2, 3, 4, 5];

// forEach()
let sum = 0;
arr.forEach((elem) => {
  sum = sum + elem;
  //console.log(elem)
});
console.log("Sum using forEach", sum);

// entries()
const arrItr = arr.entries();
/*console.log("Array Iterator", arrItr.next().value) // [0, 1]
console.log("Array Iterator", arrItr.next().value) // [1, 2]*/

for (const [index, element] of arrItr) {
  console.log(index, element);
}

// values()

const arrItr2 = arr.values();

for (const value of arrItr2) {
  console.log(value);
}

// flatMap()

const arr1 = [1, 2, 3, 4];

// console.log(
//   "simple map",
//   arr1.map((item) => item * 2)
// );
// console.log(
//   "simple flatmap",
//   arr1.flatMap((item) => item * 2)
// );

// console.log(
//   "complex map",
//   arr1.map((item) => [item * 2])
// ); //[[2], [4], [6],..]
// console.log(
//   "complex flat map",
//   arr1.flatMap((item) => [item * 2])
// );

console.log(arr1.map((item) => [[item * 2]])); // its becoming 2 level nesting
console.log(arr1.flatMap((item) => [[item * 2]])); // but this only one level

// let start = "S";
// let end = "E";

// // [start, end] = [end, start];

// let swap = end;
// end = start;
// start = swap;
// console.log(start, end);

arr1.length = 2 ** 32 - 1;
console.log(arr1);

console.log("+++++++ TASK ANSWERS ++++++");

// 1-  T-001: Create an array of 5 elements using the Array Constructor.

// ANSWER
let person = new Array("Hassan", "Mahad", 19, 979524454, true);
console.log(person);

// 2-  T-002: Create an array of 3 empty slots.

// ANSWER
let slotArray = new Array(3);
console.log(slotArray);

// 3- T-003: Create an array of 6 elements using the
// Array literals and access the fourth element in
// the array using its length property.

// ANSWER
let animals = ["lion", "tigger", "goat", "sheep", "corocodile", "chicken"];
console.log(animals[4]);

// 4-  T-004: Use the for loop on the above array to print
// elements in the odd index.

// ANSWER
for (let i = 0; i < animals.length; i++) {
  if (i % 2 !== 0) {
    console.log(animals[i]);
  }
}

// 5- T-005: Add one element at the front and the end of an array.

//ANSWER
// adding end element for an array
animals.push("bird");

// adding front element for an array
animals.unshift("snake");
console.log(animals);

// 6- T-006: Remove an element from the front and
// the end of an array.

//ANSWER
// remove end of an array element
animals.pop();

// remove front of an array element
animals.shift();
console.log(animals);

// 7- T-007: Create an array containing the name of your favourite foods(10 foods).
// Destructure the 6th food element from the array using destructuring.

//ANSWER
let foods = [
  "bariis",
  "cambuulo",
  "ukun",
  "malaay",
  "sanbuus",
  "baasto",
  "canjeero",
  "timit",
  "pizza",
  "burger",
];

const [, , , , , sixFood] = foods;
console.log(sixFood);

// 8- T-008: Take out the last 8 food items from the
// above array using the Array destructuring.Hint: rest parameter.

//ANSWER
const [, , ...rest] = foods;
console.log(rest);

// 9- T-009: Clone an Array(Shallow cloning)

// ANSWER
// first way
let shallowCopy = foods.slice();
console.log(shallowCopy);

// second way using spread

let spreadShallowCopy = [...foods];
console.log(spreadShallowCopy);

// 10-  T-010: Empty an array using its length property

// ANSWER
shallowCopy.length = 0;
console.log(shallowCopy);

// 11- T-011: Create an array of 10 elements(number 1 to 10).
// Resize the array to length 6 once you
// find the number 5 in that array. Hint: Use for-loop.

// ANSWER
let arrElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrElements.length; i++) {
  if (arrElements[i] === 5) {
    arrElements.length = 6;
  }
}

console.log(arrElements);

// 12- T-012: Create an Array of 10 elements. Use the splice() method to empty the array.

// ANSWER
let names = [
  "Hassan",
  "Mahad",
  "Cusmaan",
  "Fiidoow",
  "Axmed",
  "Nuur",
  "Ali",
  "Yusuf",
  "Jimcaale",
  "Foodeey",
];

let emptyNames = names.splice(0, 10);
console.log(names);

// T-013: Create an Array of 10 elements.
// You can empty the array in multiple ways: using the length property,
// using the pop() method, using the shift() method,
// setting the array with [], or the splice() method.
// Which among these methods are most efficient and why?

// ANSWER
let arrOf10Elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrOf10Elements = [];
console.log(arrOf10Elements);

// in my opinion the best and officient way is setting with empty array,
// because its easy to read, clear, understandable, and less code also
// more efficient than the others.

// 14- T-014: What happens when you concatenate two empty arrays?

// ANSWER
// nothing, they will become one empty array.

// 15- T-015: How can you check if a value is partially
// matching with any of the elements of an Array?

// ANSWER

// you can know using array method called some.

// 16- T-016: What is the difference between the slice() and splice() methods?

/*
  the difference between slice and splice is that splice mutates
  the original array while slice only makes shallow copy.
*/

// 17- T-017: Create an Array of alphanumeric strings.
// Sort the elements in both ascending and descending orders.
// You must be doing this in an immutable way such that
// the source array never gets modified.

let alphanumeric = [1, "b", "d", "a", "c", 4, 2, 12, 9, 14];
console.log("Original array : ", alphanumeric);

let copyAlphanumeric = alphanumeric.slice();
console.log("Copy original array: ", copyAlphanumeric);

let sortByAscending = copyAlphanumeric.sort().sort((a, b) => {
  return a === b ? 0 : a > b ? 1 : -1;
});
console.log("Sorted by Ascending: ", sortByAscending);

let sortByDescending = copyAlphanumeric.sort().sort((a, b) => {
  return a === b ? 0 : a > b ? -1 : 1;
});
console.log("Sorted by Descending: ", sortByDescending);

// 18- T-018: Can you give examples of sparse and dense arrays?

// ANSWER

// sparse array example

// sparse array is an array wich has empty or undefined value,
// but still they are counted for the length .

let sparseArray = [1, , undefined, 2, "Hassan"];
console.log(sparseArray);

// dense array expample

// dense array  is an array wich has all value, that value are not contains any
// empty or undefined value.

let denseArray = [1, 3, "Hello", "Wrold"];
console.log(denseArray);

// 19- T-019: Give a practical usages of the .fill() method

// ANSWER

// the use case that i had in mind is, when you need to make
// array that are all its values same , instead of writing repeatedly
// you are only gona use fill method to fill till you want. by only writing
// one time for that value.

// this example fills all the array value to mango

let fillMango = ["Banana", "Lemon", "Juice"].fill("Mango");
console.log(fillMango);

// 20- T-020: How to convert an array to a string?

//ANSWER
// using join method.

let converToString = [1, 3, "Hi"];
console.log(typeof converToString.join(' '))