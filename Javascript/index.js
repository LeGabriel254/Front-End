
// To ensure my Js code runs after the HTML has fullyLoaded
document.addEventListener("DOMContentLoaded", function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) ||  [];
  tasks.forEach(task => addTaskToDOM(task));
  // DOM  elements
  const form = document.getElementById("To-Do List Appplication");
  const addButton = document.getElementById("add-task-btn").onclick = addTasz
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
  });

  // Function for adding New tasks to the list
  function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText !== "") {
      alert("Please enter a task.");
      return taskText;
    }

    //Task craction and removal
    const li = document.createElement("li");
    li.textContent = taskText;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add = "remove-btn";
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };
    li.appendChild(removeButton);
    taskList.appendChild(li); 
    taskInput.value = "";
  }

  // this will disable reload on click
  addButton.addEventListener("click", addTask)
    // e.preventDefault();
    
  

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });

  // Task Addition functionality
  function addTask(task, save = true){
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
    addTaskToDOM(task);

    if (save) {
      const storedTasks = (localStorage.getItem ('tasks' || '[]'));
      storedTasks.push(taskText);
    }
  }

});