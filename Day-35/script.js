//TASK SOLUTIONS

// 1. Closure Confusion

function makeMultipliers() {
  const result = [];
  for (let i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2)); // Expected: 2 * 1 = 2
console.log(triple(2)); // Expected: 2 * 2 = 4
console.log(quadruple(2)); // Expected: 2 * 3 = 6

// - [ ]  2. Async Bug with setTimeout in Loop

for (var i = 0; i <= 3; i++) {
  setTimeout(
    (function () {
      console.log("Count:", i);
    })(),
    1000
  );
}

// - Goal: This actually works fine because of let.
// But refactor it to use var instead, and now fix the broken version with var.

// 3. Object Mutation Trap

const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  return { ...config, ...newConfig };
}

let returnedResult = updateConfig({ version: "2.0" });
console.log(returnedResult);

// - Error: Assignment to constant variable.
// - Goal: Fix the error without changing const to let,
//     and apply a clean way to update nested configs.

// - [ ]  4. Promise Chain Gone Wrong

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ ok: true, body: "Data received" });
    }, 1000);
  });
}

async function start() {
  try {
    const data = await fetchData();
    if (!data.ok) throw new Error("Something went wrong!");
    console.log("Data:", data);
  } catch (e) {
    console.log(e.message);
  }
}

start();

// - Issue: Error isn’t caught properly. Unhandled rejection occurs.
// - Goal: Catch the error properly using try/catch with await pattern.
