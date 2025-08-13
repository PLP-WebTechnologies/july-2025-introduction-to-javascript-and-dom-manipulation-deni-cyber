// ------------------------
// Part 1: Variables and Conditionals
// ------------------------

let tasks = []; // Array to store task strings
let maxTasks = 10;

// ------------------------
// Part 2: Custom Functions
// ------------------------

// Function to add a task
function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Task cannot be empty.");
    return;
  }

  if (tasks.length >= maxTasks) {
    alert("Task limit reached!");
    return;
  }

  tasks.push(taskText); // Add to array
  input.value = ""; // Clear input
  renderTasks(); // Update UI
  updateTaskCount(); // Update counter
}

// Function to toggle task completion
function toggleTask(index) {
  const listItem = document.getElementById(`task-${index}`);
  listItem.classList.toggle("completed");
}

// ------------------------
// Part 3: Loops
// ------------------------

// Loop 1: Rendering tasks (for loop)
function renderTasks() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.id = `task-${i}`;
    li.innerHTML = tasks[i];
    li.onclick = () => toggleTask(i);
    list.appendChild(li);
  }
}

// Loop 2: Log all tasks to the console (forEach)
function logTasks() {
  console.log("Current Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

// ------------------------
// Part 4: DOM Interactions
// ------------------------

// DOM Interaction 1: Access input field value (inside addTask)
// DOM Interaction 2: Modify innerHTML of task list (in renderTasks)
// DOM Interaction 3: Update task count display
function updateTaskCount() {
  const countElement = document.getElementById("taskCount");
  countElement.textContent = `You have ${tasks.length} task(s).`;
}
