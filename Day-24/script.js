// - Promises: What are the problems?
// - Promise to await
// - async function
// - async/await together
// - Does await make things synchronous?
// - Error Handling with async/await
// - Project example
// - Top Level await
// - Multiple async/await
// - PizzaHub example with async and await
// - Tasks and assignments

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("I am a promise");
  }, 1000);
});

promise.then((x) => console.log(x));

async function foo() {
  return Promise.resolve(101);
}

async function tacklePromise() {
  const result = await foo(); // 101
  console.log(result);
}

console.log("I am after tacklePromise()");
console.log(tacklePromise());

const errorPromise = new Promise((resolve, reject) => {
  reject("Error Occured!");
});

async function handleErrorPromise() {
  try {
    await errorPromise;
  } catch (error) {
    console.error(error);
  }
}

handleErrorPromise();

// errorPromise.catch((error) => console.error(error));

let stores;

(async () => {
  //   let response = await fetch("http://localhost:3000/api/pizzahub");
  //   stores = await response.json();

  console.log(stores);
})(); // IFE

console.log(stores);

const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";

async function resolvePokemons() {
  const responses = Promise.allSettled([
    fetch(BULBASAUR_POKEMONS_URL),
    fetch(RATICATE_POKEMONS_URL),
    fetch(KAKUNA_POKEMONS_URL),
  ]);
  const results = await responses;
  console.log(results);

  const pk_1 = await results[0]?.value.json();
  const pk_2 = await results[1]?.value.json();
  const pk_3 = await results[2]?.value.json();

  console.log(pk_1);
  console.log(pk_2);
  console.log(pk_3);
}

async function resolvePokemonsV2() {
  const responses = await Promise.allSettled([
    fetch(BULBASAUR_POKEMONS_URL).then((response) => response.json()),
    fetch(RATICATE_POKEMONS_URL).then((response) => response.json()),
    fetch(KAKUNA_POKEMONS_URL).then((response) => response.json()),
  ]);

  console.log(responses);
}

resolvePokemonsV2();

//Task Solutions
console.log("+++++++ Task Solutions ++++++++");

// 1. Create a function wait(ms) that returns a promise
// which resolves after ms milliseconds.
// Use async / await to log messages
// before and after the delay

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("i am the wait function");
      resolve();
    }, ms);
  });
}

// async function runTask() {
//   console.log("before wait");
//   await wait(4000);
//   console.log("after wait");
// }

// runTask();

// 2. Using async / await, log "One", then after
// 1 second log "Two", then "Three" after another
// 2 seconds.No setTimeout outside of promises

async function logMessages() {
  console.log("one");
  await wait(1000);
  console.log("two");
  await wait(2000);
  console.log("three");
}

logMessages();

// 3. Use fetch() with async/await to load a local
// JSON file (data.json) and display its contents
// in the console

async function displayContent() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
}

displayContent();

//4. Use the public API https://jsonplaceholder.typicode.com/users/1
// to fetch and display the user’s name, email,
// and address on the page

// 5. Modify the previous task to handle errors
// (e.g., wrong URL) and display a user-friendly
// error message in the DOM

const userEmail = document.getElementById("userEmail");
const userName = document.getElementById("userName");
const userAdress = document.getElementById("userAdress");

async function userInfo() {
  try {
    let API = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await API.json();
    if (!API.ok) throw new Error("Failed to fetch user data");
    userEmail.textContent = data.email;
    userName.textContent = data.name;
    userAdress.textContent = `${data.address.city}, ${data.address.street},${data.address.suite}, ${data.address.zipcode}`;
  } catch (error) {
    userEmail.textContent = "Error loading user data";
    userAdress.textContent = "";
    userName.textContent = "";
  }
}

userInfo();

// 6. Refactor then/catch to async/await

// fetch("/api/data")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

async function refactor() {
  try {
    let response = await fetch("/api/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

refactor();