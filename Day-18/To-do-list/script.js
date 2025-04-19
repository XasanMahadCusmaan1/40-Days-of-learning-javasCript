let inputEl = document.querySelector("#taskInput");
let addTaskBtn = document.querySelector("#taskButton");
let taskListItems = document.querySelector("#taskList");
let searchInput = document.querySelector("#searchInput");

let taskBeingEdited = null;
// add task / remove / edit function
function addTask() {
  // get input value
  let taskInputValue = inputEl.value;

  // if its empty the don`t do nothing
  if (taskInputValue === "") return;

  // check if it there is text to edit or not
  if (taskBeingEdited) {
    taskBeingEdited.textContent = inputEl.value;
    taskBeingEdited = null;
    addTaskBtn.textContent = "Add Task";
    inputEl.value = "";
    return;
  }
  let li = document.createElement("li");

  // create text element
  let taskText = document.createElement("span");
  taskText.textContent = taskInputValue;
  taskText.className = "task-text";

  let completeBtn = document.createElement("button");
  completeBtn.textContent = "✔️";
  completeBtn.onclick = () => taskText.classList.toggle("completed");

  // editing functionality 
  let editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.style.marginInlineStart = "5px";
  editBtn.onclick = () => {
    inputEl.value = taskText.textContent;
    taskBeingEdited = taskText;
    addTaskBtn.textContent = "Edit Task";
  };

  // delete functionality 
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginInlineStart = "5px";
  deleteBtn.onclick = () => li.remove();

  // add dynamicly elements to the DOM
  li.appendChild(taskText);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskListItems.appendChild(li);
  inputEl.value = "";
}

addTaskBtn.addEventListener("click", addTask);

// search task functionality
function searchTask() {
  let inputValue = searchInput.value;
  // get all tasks
  let allTasks = document.querySelectorAll("#taskList li");

  // show only the tasks that are in the input value included the tasks.
  allTasks.forEach((task) => {
    task.style.display = task.textContent
      .toLowerCase()
      .includes(inputValue.toLowerCase())
      ? "flex"
      : "none";
  });
}

searchInput.addEventListener("keyup", searchTask);
