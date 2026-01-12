// Add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

// Validate input
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

// Create a new list item
  const li = document.createElement("li");
  li.innerHTML = `
  
    <span onclick="toggleTask(this)">${taskText}</span>
    <button onclick="deleteTask(this)">X</button>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
// Delete a task

function deleteTask(button) {
  button.parentElement.remove();
}

// Toggle task completion
function toggleTask(task) {
  task.parentElement.classList.toggle("completed");
}
