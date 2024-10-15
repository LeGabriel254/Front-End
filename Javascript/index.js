// To ensure my Js code runs after the HTML has fullyLoaded
//* Overview
//You are tasked with developing a To-Do List application that allows users to add tasks, display them, and remove tasks. This application will utilize advanced DOM manipulation techniques.

//Todo: Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function () {
    
  let tasks = [];

  //Todo: Initialize and Load Tasks
  const storedTasks = localStorage.getItem('tasks');


  //Todo: Code for Loading Tasks from Local Storage
  function loadTasks() {

      if (storedTasks) {
          tasks = JSON.parse(storedTasks);

          tasks.forEach(task => {
              const listElement = document.createElement('li');
              listElement.textContent = task;

              const removeButton = document.createElement('button');
              removeButton.textContent = "Remove";
              removeButton.classList.add('remove-btn');
              removeButton.onclick = () => {
                  taskList.removeChild(listElement);
              };

              listElement.appendChild(removeButton);
              taskList.appendChild(listElement);
          });

      }
  }


  //Todo: Select DOM Elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");


  //Todo: Create the addTask Function
  function addTask() {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
          alert("Enter a task!")
          return;
      }

      //Todo: Task Creation and Removal
      const listElement = document.createElement('li');
      listElement.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn');
      removeButton.onclick = () => {
          taskList.removeChild(listElement);
      };

      listElement.appendChild(removeButton);
      taskList.appendChild(listElement);

      //Todo: Update Task Addition Functionality
      tasks.push(taskText); // Add task to the array
      saveTasks(); // Save tasks to Local Storage

      taskInput.value = '';
  }

  //Todo: Implement Task Removal with Local Storage Update
  function removeTask(li) {
      const taskText = li.textContent;
      taskList.removeChild(li);
      tasks = tasks.filter(task => task !== taskText); // Remove task from the array
      saveTasks(); // Save tasks to Local Storage
  }

  //Todo: Saving Tasks to Local Storage
  function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  loadTasks(); // Load tasks on page load

  //Todo: Attach Event Listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
      if (event.key == "Enter") {
          addTask();
      }
  })

})