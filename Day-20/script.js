// console.log("Day 20 - DOM: Advanced Tips");

// // Efficient DOM traversal
// const parent = document.querySelector(".card");
// const firstChild = parent.firstElementChild;
// const next = firstChild.nextElementSibling;
// const lastChild = parent.lastElementChild;
// const parentOfElement = firstChild.parentElement;

// // Templates and Cloning
// const template = document.getElementById("card-template");
// const clone = template.content.cloneNode(true);
// clone.querySelector(".title").textContent = "DOM Advance Topic";
// clone.querySelector(".desc").textContent =
//   "Hope you are learning something New";

// document.body.appendChild(clone);

// // Document Fragment and Range

// // Document Fragment
// // - Not part of the main DOM tree until you insert it
// // - Acts like a temp container
// // - Great for building chunks of DOM before adding them.

// const fragment = document.createDocumentFragment();

// for (let i = 0; i <= 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = `Item ${i}`;
//   fragment.appendChild(li);
// }

// document.getElementById("list").appendChild(fragment);

// // Range
// const p = document.getElementById("para");

// const range = document.createRange();

// range.setStart(p.firstChild, 6); // After "Hello "
// range.setEnd(p.childNodes[2], 4);

// const content = range.cloneContents();

// console.log(content);

// // Shadow DOM
// document.querySelector(".card").innerHTML;

// // shadow host

// const shadowHost = document.querySelector("#box");
// const shadow = shadowHost.attachShadow({ mode: "open" });
// shadow.innerHTML = `<style>p { color: red; }</style><p>Hello Shadow!</p>`;

// // Advanced Class Manipulation

// const btn = document.querySelector(".btn");
// btn.classList.add("active");
// btn.classList.remove("disabled");
// btn.classList.toggle("visible");
// btn.classList.replace("error", "success");

// // Handling Large-Scale DOM Updates

// function addItems(count) {
//   const frag = document.createDocumentFragment();
//   for (let i = 0; i < count; i++) {
//     const div = document.createElement("div");
//     div.textContent = `Item ${i}`;
//     frag.appendChild(div);
//   }
//   document.body.appendChild(frag);
// }

// addItems(10);

// // Mutation Observer

// // const observer = new MutationObserver(callback);
// // observer.observe(targetNode, config);

// const target = document.getElementById("watchMe");

// const observer = new MutationObserver((mutationsList, observer) => {
//   for (const mutation of mutationsList) {
//     console.log(`Type of mutation: ${mutation.type}`);

//     if (mutation.type === "childList") {
//       console.log("A child node was added or removed.");
//     }

//     if (mutation.type === "attributes") {
//       console.log(`Attribute ${mutation.attributeName} was changed.`);
//     }

//     if (mutation.type === "characterData") {
//       console.log(`Text content changed to: ${mutation.target.data}`);
//     }
//   }
// });

// const config = {
//   subtree: true,
//   characterData: true,
//   childList: true,
//   attributes: true,
// };

// observer.observe(target, config);

// function changeDOM() {
//   target.textContent = "Goodbye!";
//   target.setAttribute("data-status", "Changed");
// }

console.log("TASK SOLUTIONS________________");

// 1. Traverse and Toggle Classes

// Build a navigation menu. On click of a list item:

// - Traverse up to parent `<ul>`
let parent = document.querySelector("#parent");

parent.addEventListener("click", (e) => {
  e.preventDefault();
  let targetEl = e.target;
  if (targetEl === parent) return;

  // - Remove .active class from all `<li>`
  let allChilds = [...parent.children];
  allChilds.forEach((el) => {
    el.classList.remove("active");
  });

  // - Add .active only to the clicked `<li>`
  allChilds.forEach((el) => {
    if (el === targetEl) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

// 2. Highlight Text Using Range

// Use the Range API to highlight a portion of a
// paragraph by wrapping it with a `<mark>` tag.

const text = document.getElementById("text");
const createTextRange = document.createRange();

const node = text.firstChild;
const content = text.textContent;

const start = content.indexOf("Hassan"); // 17
const end = start + "Hassan".length; // 23

createTextRange.setStart(node, start);
createTextRange.setEnd(node, end);

const mark = document.createElement("mark");
createTextRange.surroundContents(mark);

// 3. Use DocumentFragment for Performance

// Insert 100 list items into the DOM using:

// - Plain DOM methods (one by one)
// - DocumentFragment (all at once)

const listItems = document.getElementById("listItems");
const creatfragment = document.createDocumentFragment();

for (let i = 0; i <= 10; i++) {
  let createLiEl = document.createElement("li");
  createLiEl.textContent = `item${i}`;
  creatfragment.appendChild(createLiEl);
}

listItems.appendChild(creatfragment);

// 4. Build a “Smart Cloner”

// Create a UI with an element and a “Clone” button.
// Use cloneNode(true) and cloneNode(false) and show the
// difference visually.

let personTemplate = document.getElementById("person__template");
let deep = document.getElementById("deepBtn");
let shallow = document.getElementById("shallowBtn");

deep.addEventListener("click", () => {
  let tempClone = personTemplate.content.cloneNode(true);
  tempClone.getElementById("person__name").textContent = "Hassan Mahad";
  tempClone.getElementById("person__info").textContent =
    "i am student who learns computer science live in ethiopia";

  document.body.appendChild(tempClone);
});

shallow.addEventListener("click", () => {
  let tempClone = personTemplate.content.cloneNode(false);
  document.body.appendChild(tempClone);
});

// 5. MutationObserver Watcher

// Create a div and use MutationObserver to log whenever:

// - A new child is added
// - The class attribute changes
// - Text is modified

let div = document.getElementById("div");

const observerer = new MutationObserver((mutationList, observer) => {
  for (const mutation of mutationList) {
    console.log(`Type of mutation is ${mutation.type}`);

    if (mutation.type === "childList") {
      console.log("A child node was added or removed");
    } else if (mutation.type === "attributes") {
      console.log(`Attribute ${mutation.attributeName} was changed`);
    } else if (mutation.type === "characterData") {
      console.log("The text content has changed");
    }
  }
});

const configer = {
  subtree: true,
  childList: true,
  attributes: true,
  characterData: true,
};

observerer.observe(div, configer);