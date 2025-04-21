console.log("Day 18: DOM Manipulations");

// What will we learn today?

// - Creating Elements
// - Inserting Elements
// - Modifying Content
// - Removing/replacing Elements
// - Read, Write, and Remove Attributes
// - Travarsing/Navigating DOM
// - Mnaipulating Styles
// - Manipulating Classes
// - Controlling Visibilities
// - Build Project(s)
// - Tasks

// Creating Elements
{
  /*
    const pElem = document.createElement("p");
    pElem.innerText = "This is a text added dynamically.";
    document.body.appendChild(pElem);
    //console.log(pElem);
    */
}

// Insert Elements
{
  /*
        const span = document.createElement("span");
        span.innerText = "I am a Span";
        const pElem = document.querySelector("p")
        //console.log(pElem.nextElementSibling);
        document.body.insertBefore(span, pElem.nextElementSibling);
    */
}

// Modifying Content

{
  /*
    const pElem = document.querySelector("p");
    pElem.innerHTML = "<u>Hello How</u> are You doing?"

    const divElem = document.querySelector("div");

    console.log("Inner Text", divElem.innerText);
    console.log("Text Content", divElem.textContent);
    */
}

// Removing/replacing Elements

{
  /*
    let list = document.getElementById("myList");
    const itemToRemove = list.children[0];
    //list.removeChild(itemToRemove);
    //console.log(list.children)
    const pElem = document.querySelector("p");
    list.replaceChildren(pElem)

    document.getElementById("removeMe").remove()
    */
}

// Read, Write, and Remove Attributes
{
  /*
    const imageElem = document.querySelector("img")

    console.log(imageElem.getAttribute('alt'))

    imageElem.setAttribute("src", "banner.png");
    imageElem.setAttribute("alt", "banner");

    imageElem.removeAttribute("height");

    imageElem.hasAttribute("src") // true
    imageElem.hasAttribute("height") // false
    */
}

// Travarsing/Navigating DOM

{
  // parentElement and parentNode
  //const span = document.getElementById("text");
  // console.log("Parent Element", span.parentElement.parentElement);
  // console.log("Parent Node", span.parentNode.parentNode);
  // childern and childNodes
  // const mainElem = document.getElementById("main-id");
  // console.log("Children", mainElem.children);
  // console.log("Child Node", mainElem.childNodes);
  // console.log("First Child", mainElem.firstChild);
  // console.log("First Child Element", mainElem.firstElementChild);
  // nextSibling
  // nextElementSibling
  // previousSibling
  // previousElementSibling
}

// Mnaipulating Styles
{
  /*const pElem = document.getElementById("p-id");
    console.log(pElem.style)
    pElem.style.backgroundColor = "pink";
    */
}

// Manipulating Classes
{
  /*
    const mainDivElem = document.getElementById("main-id");

    // console.log(mainDivElem.className)
    // mainDivElem.className = "secondary-class";
    // console.log(mainDivElem.className);

    console.log(mainDivElem.classList);

    mainDivElem.classList.add("test");

    mainDivElem.classList.remove("layout");

    mainDivElem.classList.replace("main-class", "secondary-class");

    console.log("Does it have test?", mainDivElem.classList.contains("test"));

    console.log("Does it have main-class?", mainDivElem.classList.contains("main-class"));

    mainDivElem.classList.toggle("test");
    mainDivElem.classList.toggle("test");
    */
}

// Controlling Visibilities
{
  /*
    const mainDivElem = document.getElementById("main-id");
    //mainDivElem.style.display = "block";

    //mainDivElem.style.visibility = "hidden"

    mainDivElem.style.opacity = "1"
    */
}

// 1. Create a form dynamically using JavaScript and manipulate its behavior
// - Add input fields dynamically based on user selection e.g., text, email, number
// - Add a submit button that logs all the input values as an object.
// - Add a reset button that clears the form.
// - Use createElement, appendChild, setAttribute, and addEventListener.

let chooseInputType = document.querySelector("#dynamicInput");
let form = document.createElement("form");
form.setAttribute("id", "dynamic-input");

let submitBtn = document.createElement("button");
submitBtn.textContent = "Submit Button";
submitBtn.setAttribute("type", "button");

let resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Button";
resetBtn.setAttribute("type", "reset");

let horizontalLine = document.createElement("hr");

form.appendChild(submitBtn);
form.appendChild(resetBtn);
form.appendChild(horizontalLine);

document.body.appendChild(form);

let inputCounter = 1;

chooseInputType.addEventListener("change", (e) => {
  // get the selected option
  let inputTypeValue = e.target.value;

  // create input field and type based on the selected option
  let input = document.createElement("input");
  input.setAttribute("name", `${inputCounter++}`);
  input.setAttribute("type", `${inputTypeValue}`);

  // create new line

  let newLine = document.createElement("br");
  // make placeholders base on their type
  if (input.type === "number") {
    input.setAttribute("placeholder", "Enter Number");
  } else if (input.type === "email") {
    input.setAttribute("placeholder", "example@gmail.com");
  } else if (input.type === "text") {
    input.setAttribute("placeholder", "Enter Text");
  }

  chooseInputType.value = "";
  form.appendChild(input);
  form.appendChild(newLine);
});

// create sumbit button
submitBtn.addEventListener("click", () => {
  let objValues = {};
  let allInputValues = document.querySelectorAll("form > input");
  allInputValues.forEach((val) => {
    objValues[val.name] = val.value;
    val.value = '';
  });
  console.log(objValues);
});

// reset functionality
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Remove only the input elements, not the buttons
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => input.remove());

  // Reset the counter
  inputCounter = 1;
});

// 2. Add, delete, and search rows in a dynamic table
// - A form to add rows (Name, Age, Role).
// - Each row should have a “Delete” button to remove it.
// - Add a search input that filters the rows by name.
// - Use insertRow, deleteRow, and textContent/innerText.

// select table parent

let table = document.querySelector("#table");
let tbody = document.querySelector("#table > tbody");
let createMemberBtn = document.querySelector("#createBtn");

// get search input
let searchInput = document.querySelector("#table-search");

// get createMember inputs

let memberName = document.querySelector("#create-members__name");
let memberAge = document.querySelector("#create-members__age");
let memberRole = document.querySelector("#create-members__role");

createMemberBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    memberName.value !== "" &&
    memberAge.value !== "" &&
    memberRole.value !== ""
  ) {
    // each time inset new row
    let tableNewRow = tbody.insertRow();
    let nameCell = tableNewRow.insertCell();
    nameCell.textContent = memberName.value;
    let ageCell = tableNewRow.insertCell();
    ageCell.textContent = memberAge.value;
    let roleCell = tableNewRow.insertCell();
    roleCell.textContent = memberRole.value;
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    let buttonCell = tableNewRow.insertCell();
    buttonCell.appendChild(delBtn);

    // delete Btn functionality

    delBtn.onclick = () => {
      tbody.deleteRow(tableNewRow.rowIndex - 1);
    };

    memberName.value = "";
    memberAge.value = "";
    memberRole.value = "";
  } else {
    return;
  }
});

// implement search feuture

searchInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  let getSearchValue = searchInput.value;
  let getTrName = document.querySelectorAll("tbody > tr");
  getTrName.forEach((name) => {
    name.style.display = name.firstElementChild.textContent
      .toLowerCase()
      .includes(getSearchValue.toLowerCase())
      ? "table-row"
      : "none";
  });
});

// 3. Theme Switcher with Persistence
// - Toggle theme using a button or switch.
// - Persist the theme in localStorage and apply on page load.
// - Change background and text color based on the theme.

let toggleBtn = document.querySelector("#toggleTheme");
let body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
  let savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "Light Mode";
  } else {
    body.classList.remove("dark");
    toggleBtn.textContent = "Dark Mode";
  }
});

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "Dark Mode";
  }
});
