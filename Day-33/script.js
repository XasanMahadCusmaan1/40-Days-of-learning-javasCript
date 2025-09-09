const firstMap = new Map([
  ["name", "Hassan"],
  ["role", "Student"],
  ["age", 20],
]);

firstMap.set("isAdult", "yes");
console.log(firstMap);

const newset = new Set([200, 400, 500, 600]);
const setToArray = [...newset];
console.log(setToArray);

const first = new Set([1, 2, 3]);
const second = new Set([3, 4, 5]);

const getIntersection = new Set([
  ...[...first].filter((el) => !second.has(el)),
  ...[...second].filter((el) => !first.has(el)),
]);
console.log(getIntersection);

console.log(first.isSupersetOf(second));

console.log("TASK SOLUTIONS");

// - [ ]  1. Create a Map of Student IDs and Names
// - Add at least 5 students.
// - Retrieve a name using a student ID.
// - Delete one entry and print the Map.

const studentMap = new Map([
  [1, "Hassan"],
  [2, "Faadumo"],
  [3, "Maryamo"],
  [4, "Kamaal"],
  [5, "Sheikha"],
]);

console.log(studentMap.get(4));
studentMap.delete(1);
console.log(studentMap);

// - [ ]  2. Create a Set of Programming Languages
// - Add duplicate languages to test uniqueness.
// - Iterate and print all unique entries.

const programmingLangs = new Set([
  "Java",
  "JavasCript",
  "JavasCript",
  "Python",
  "C++",
  "C++",
]);

console.log(programmingLangs);

for (const values of programmingLangs.values()) {
  console.log(values);
}

// - [ ]  3. Compare Object vs Map for Key-Value Storage
// - Store the same data in both.
// - Compare insertion order and key types (e.g., object keys).

// objects only can have string or symbol keys
// objects their order isn`t grantee
// objects cant use any other data type as key exept string or symbol
// object dont have methods like size thats easy to use
const compObj = {
  name: "Hassan",
  age: 20,
  isHeUnder18: true,
};

// maps can have different key data types as you see below
// maps order is grantee they dont change
// map methods are easy to use

const compMap = new Map([
  [
    {
      fullName: "Hassan Mahad Osman",
    },
    "proved",
  ],
  ["age", 20],
  [false, true],
  [8023, "id"],
]);

console.log(compObj);
console.log(compMap);

// - [ ]  4. Build a Contact List Using Map
// - Use phone numbers as keys and names as values.
// - Add, update, delete contacts.
// - Search for a contact by number.

const contactList = new Map([
  [2520619505160, "Hassan"],
  [2520615672222, "Hooyo"],
  [2520615505160, "Aabo"],
]);

// Added
contactList.set(25109524454, "Ethiopia");

// Updated
contactList.set(25109524454, "Itoobiyan");

// Deleted
contactList.delete(25109524454);

// Searched
console.log(contactList.has(25109524454));

console.log(contactList);

// - [ ]  5. Remove Duplicates from Array Using Set
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
// Convert to a Set and back to an array with only unique values.

const fruits = ["apple", "banana", "apple", "orange", "banana"];

const uniqueFruits = new Set(fruits);
const backToArray = Array.from(uniqueFruits);

console.log(uniqueFruits);
console.log(backToArray);

// - [ ]  6. Track User Logins with Set
// - Add user IDs when users log in.
// - Remove them on logout.
// - Check if a specific user is currently logged in.

const userLogin = new Set();

// user loged in
userLogin.add(101);
userLogin.add(102);

// user loged out
userLogin.delete(101);

// if user exists
console.log(userLogin.has(101));
console.log(userLogin);

// - [ ]  7. Create a Map of Book Titles and Authors
// - Add at least 5 entries.
// - Update an author.
// - Count the number of books.

const bookMap = new Map([
  ["The Great Gatsby", "F. Scott Fitzgerald"],
  ["To Kill a Mockingbird", "Harper Lee"],
  ["1984", "George Orwell"],
  ["Pride and Prejudice", "Jane Austen"],
  ["The Catcher in the Rye", "J.D. Salinger"],
]);

// updated author
bookMap.set("The Great Gatsby", "Hassan");

// count of books
console.log("Total books ", bookMap.size);
console.log(bookMap);

// - [ ]  8. Associate Metadata with DOM Elements Using WeakMap
// - Create fake DOM elements (objects).
// - Store related metadata in a WeakMap.
// - Demonstrate benefits for garbage collection.

const metadata = new WeakMap();

// fake DOM element
let el = { tag: "div", id: "a" };

// attach metadata (object is a good value)
metadata.set(el, { createdAt: Date.now(), listeners: 2 });

// read metadata while element is reachable
console.log("metadata for el:", metadata.get(el)); // shows the object

// show `has` while reachable (explicit demonstration)
console.log("has el before:", metadata.has(el));

// remove the only strong reference
el = null;

// Now the pair is eligible for GC, but we cannot reliably observe it from JS.
// WeakMap has no size/iteration APIs, so console.log(metadata) won't show entries.
// To confirm actual reclamation you use browser devtools (heap snapshot) or trust the WeakMap contract.

// - [ ]  9. Track Instances of a Class with WeakSet
// - Define a `Session` class.
// - Add each instance to a WeakSet when created.
// - Discuss how it avoids memory leaks.

class Session {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const instanceOfWeakSet = new WeakSet();

let session1 = new Session("Hassan", 20);
instanceOfWeakSet.add(session1);

console.log(instanceOfWeakSet.has(session1));

session1 = null;

console.log(instanceOfWeakSet);

// WeakSet stores object references weakly.
// If an instance has no other strong references,
// it becomes eligible for GC even if it was added to the WeakSet.
// That means the WeakSet won’t cause memory leaks by keeping objects alive.

// - [ ]  10. Build a Shopping Cart Using Map
// - Product IDs as keys and quantity as values.
// - Add, remove, and update quantities.
// - Calculate total items in the cart.

const shoppingCart = new Map([
  [1, 200],
  [2, 400],
  [3, 50],
  [4, 60],
  [5, 1000],
]);

// add
shoppingCart.set(6, 2);
shoppingCart.set(7, 400);

// remove
shoppingCart.delete(2);

// update
shoppingCart.set(1, 600);

// total
const total = Array.from(shoppingCart.values()).reduce((s, q) => s + q, 0);
console.log(total);

console.log(shoppingCart);

// - [ ]  11. Anagram Checker with Set
// - Write a function that checks if two strings are anagrams.
// - Use Sets to compare character presence.

const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

function checkAnagram(str1, str2) {
  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (s1.length !== s2.length) return false;

  const set1 = new Set(s1);
  const set2 = new Set(s2);
  if (set1.size !== set2.size) return false;
  for (const ch of set1) if (!set2.has(ch)) return false;

  const counts = new Map();
  for (const ch of s1) counts.set(ch, (counts.get(ch) || 0) + 1);
  for (const ch of s2) {
    if (!counts.has(ch)) return false;
    counts.set(ch, counts.get(ch) - 1);
    if (counts.get(ch) < 0) return false;
  }

  return true;
}

console.log(checkAnagram("listen", "silent")); // true
console.log(checkAnagram("evil", "vile")); // true
console.log(checkAnagram("hello", "world")); // false
console.log(checkAnagram("The Eyes", "They See")); // true (spaces & case ignored)
console.log(checkAnagram("aab", "ab")); // false
console.log(checkAnagram("", "")); // true

// - [ ]  12. First Non-Repeating Character with Map
// - Count character frequencies in a string using a Map.
// - Return the first character with count 1.

function giveFirstNonRepCh(string) {
  const normalString = normalize(string);
  const nonRepeatingCh = new Map();

  for (const ch of normalString) {
    nonRepeatingCh.set(ch, (nonRepeatingCh.get(ch) || 0) + 1);
  }

  for (const [key, value] of nonRepeatingCh) {
    if (value === 1) return key;
  }

  return null;
}

console.log(giveFirstNonRepCh("aabb"));

// - [ ]  13. Measure Performance: Object vs Map
// - Insert 100,000 key-value pairs into both.
// - Use `console.time()` to benchmark speed.

// Measure insertion performance: Object vs Map
function measureInsertions(n = 100000) {
  const keys = [];
  for (let i = 0; i < n; i++) keys.push("k" + i);

  console.time("object-insert");
  const obj = {};
  for (let i = 0; i < n; i++) {
    obj[keys[i]] = i;
  }
  console.timeEnd("object-insert");

  console.time("map-insert");
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(keys[i], i);
  }
  console.timeEnd("map-insert");

  // quick sanity checks
  console.log("obj sample:", obj["k0"], obj["k" + (n - 1)]);
  console.log("map sample:", map.get("k0"), map.get("k" + (n - 1)));
}

measureInsertions(100000);

// - [ ]  14. Voting App with Set to Prevent Duplicate Votes
// - Track user IDs in a Set.
// - Allow each ID to vote only once.

const voteSet = new Set();

function vote(id) {
  voteSet.add(id);
}

vote(1);
vote(1);
vote(2);
vote(3);
console.log(voteSet);

// - [ ]  15. Employee Registry Using Object Keys in Map
// - Use employee objects as keys.
// - Add and retrieve job-related info.
// - Show that Object keys don't work similarly in plain objects.

const empInfo = {
  name: "Hassan",
  jobInfo: "developer who works google",
  age: 20,
};

const empInfo2 = {
  name: "Faarax",
  jobInfo: "Designer who works google",
  age: 30,
};
const employee = new Map();

employee.set(empInfo, 'empData');
employee.set(empInfo2, "empData2");


// in plain object i can retrieve keys value easily but in map
// the job is different as you see below

const objkeys = employee.keys();
console.log(objkeys.next().value.jobInfo)
console.log(objkeys.next());
