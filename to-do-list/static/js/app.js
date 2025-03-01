const addtask = document.getElementById("taskInput");

const addTaskButton = document.getElementById("taskButton");
const ul = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const task = addtask.value;
  if (task === "") {
    alert("Task cannot be empty");
    return;
  }
  const li = document.createElement("li");
  li.textContent = task;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("removeBtn");
  li.appendChild(removeBtn);
  ul.appendChild(li);

  addtask.value = "";
});

const removeTask = (e) => {
  const element = e.target;
  // element.parentElement.remove();
  if (element.classList.contains("removeBtn")) {
    const li = element.parentElement;
    li.remove();
  }
};
document.addEventListener("click", removeTask);
