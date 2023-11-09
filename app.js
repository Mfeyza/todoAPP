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
let deletedtask=0;
function removeTask(button) {
  let taskItem = button.parentElement;
  taskItem.remove();
  deletedtask++ 
  check();
}

function check() {
  let taskList = document.getElementById("tasklist");
  if (taskList.children.length === 0) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Congratulations, you have completed ${deletedtask} task 🤘🏻💯`,     
      showConfirmButton: false,
      timer: 5000,
      
     });
  }
}
document.getElementById("task").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    removeLastTask();
  }
});

function removeLastTask() {
  let taskList = document.getElementById("tasklist");
  let lastTask = taskList.lastChild;

  if (lastTask) {
    lastTask.remove();
    check();
  }
}