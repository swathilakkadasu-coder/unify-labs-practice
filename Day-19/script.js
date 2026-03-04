const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const stats = document.getElementById("stats");
const emptyMsg = document.getElementById("empty");
const filters = document.querySelectorAll(".filters button");
const themeToggle = document.getElementById("themeToggle");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

/* THEME */
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

/* SAVE */
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* RENDER */
function renderTasks() {
  taskList.innerHTML = "";

  const filtered = tasks.filter(task => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  filtered.forEach(task => {
    const li = document.createElement("li");
    li.className = `task ${task.completed ? "completed" : ""}`;

    const left = document.createElement("div");
    left.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleTask(task.id);

    const span = document.createElement("span");
    span.textContent = task.text;
    span.ondblclick = () => editTask(task.id, span);

    left.append(checkbox, span);

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = () => editTask(task.id, span);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete";
    delBtn.onclick = () => deleteTask(task.id);

    actions.append(editBtn, delBtn);
    li.append(left, actions);
    taskList.appendChild(li);
  });

  emptyMsg.style.display = tasks.length === 0 ? "block" : "none";
  updateStats();
}

/* ADD */
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({
    id: Date.now(),
    text,
    completed: false
  });

  taskInput.value = "";
  saveTasks();
  renderTasks();
}

/* TOGGLE */
function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

/* DELETE */
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}

/* EDIT */
function editTask(id, span) {
  const input = document.createElement("input");
  input.value = span.textContent;
  span.replaceWith(input);
  input.focus();

  input.onblur = () => {
    const task = tasks.find(t => t.id === id);
    task.text = input.value || task.text;
    saveTasks();
    renderTasks();
  };
}

/* STATS */
function updateStats() {
  const completed = tasks.filter(t => t.completed).length;
  stats.textContent = `Total: ${tasks.length} | Completed: ${completed}`;
}

/* EVENTS */
addBtn.onclick = addTask;
taskInput.addEventListener("keydown", e => e.key === "Enter" && addTask());

filters.forEach(btn => {
  btn.onclick = () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  };
});

/* INIT */
renderTasks();