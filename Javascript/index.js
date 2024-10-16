// To ensure my Js code runs after the HTML has fullyLoaded
document.addEventListener('DOMContentLoaded', function () {

  let tasks = [];

  const storedTasks = localStorage.getItem('tasks')


  function loadTasks() {
    if (storedTasks) {
      tasks = JSON.parse(storedTasks)
      //Todo: Task Creation and Removal
      tasks.forEach(task => {
        const list = document.createElement('li');
        list.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = () => {
          taskList.removeChild(list);
        }
        list.appendChild(removeButton) /*To remove task added */
        taskList.appendChild(list)
      });
    }
  }
  //DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  //Code for loading tasks
  function addTask() {
    const taskText = taskInput.value.trim()
    if (taskText === "") {
      elert('Please enter task')
      return;
    }
    //Todo: Task Creation and Removal
    const list = document.createElement('li');
    list.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');
    removeButton.onclick = () => {
      taskList.removeChild(list);
    };

    list.appendChild(removeButton);
    taskList.appendChild(list);

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
}
);

// Fetching and logging a Random Activity from Bored API
async function getBoredActivity(){
  try{
    const res = await fetch('https://www.boredapi.com/api/activity/')
    if(!res.ok){
      throw new Error('Network error')
    }
    const data =  res.json()
    return data
  }catch(error){
 console.error('Netrowk error', error)
  }
};

const form = document.getElementById('form')

form.addEventListener('submit', function(event){
  event.preventDefault();

// validate Email
const username = document.getElementById('username')
const usernameError = document.getElementById('usernameError')
if(username.value.length < 3){
  usernameError.textContent=('Must be more than 3')
  return;
}else{
  usernameError.textContent = ''
};

// validate email
const ageInput = document.getElementById('age');
const ageError = document.getElementById('ageError')

if(ageInput.value.length < 18){
  ageError.textContent = "Age must be between 18 and below 99"
return;
  // age.focus();
}else{
  ageError.textContent = ''
}


// form.submit()
})
