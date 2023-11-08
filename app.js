function addTask() {
  const task = document.getElementById("task");
  const chooseInput = document.querySelector("#choose");
  const dateInput = document.querySelector("#date");
  const taskTitle = task.value.trim(); 
  const choose = chooseInput.value;
  const date = dateInput.value;

  if (taskTitle !== "") { 
    let taskList = document.getElementById("tasklist");
    let newTask = document.createElement("li");
    newTask.innerHTML =
      `${taskTitle} (choose: ${choose}, date: ${date})
      <button onclick="removeTask(this)">Delete</button>`;

    taskList.appendChild(newTask);
    task.value = "";
    chooseInput.value = "easy"; 
    dateInput.value = "";
  }
}

function removeTask(button) {
  let taskItem = button.parentElement;
  taskItem.remove(); 
  check();
}

function check() {
  let taskList = document.getElementById("tasklist");
  if (taskList.children.length === 0) {
    alert("Tebrikler! Tüm görevler tamamlandı."); 
  }
}