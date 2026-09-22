const STORAGE_KEY = "todoflow.tasks.v1";

const state = {
  tasks: loadTasks(),
  filter: "all"
};

const elements = typeof document !== "undefined" ? {
  form: document.querySelector("#todo-form"),
  input: document.querySelector("#todo-input"),
  list: document.querySelector("#todo-list"),
  empty: document.querySelector("#empty-state"),
  date: document.querySelector("#date-label"),
  allCount: document.querySelector("#all-count"),
  activeCount: document.querySelector("#active-count"),
  completedCount: document.querySelector("#completed-count"),
  clearCompleted: document.querySelector("#clear-completed"),
  progressRing: document.querySelector("#progress-ring"),
  progressValue: document.querySelector("#progress-value")
} : {};

function loadTasks() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks));
}

function createTask(title) {
  return { id: crypto.randomUUID(), title: title.trim(), completed: false, createdAt: Date.now() };
}

function visibleTasks() {
  if (state.filter === "active") return state.tasks.filter((task) => !task.completed);
  if (state.filter === "completed") return state.tasks.filter((task) => task.completed);
  return state.tasks;
}

function render() {
  const completed = state.tasks.filter((task) => task.completed).length;
  const active = state.tasks.length - completed;
  const percentage = state.tasks.length ? Math.round((completed / state.tasks.length) * 100) : 0;

  elements.allCount.textContent = state.tasks.length;
  elements.activeCount.textContent = active;
  elements.completedCount.textContent = completed;
  elements.progressValue.textContent = `${percentage}%`;
  elements.progressRing.setAttribute("aria-label", `${percentage} percent complete`);
  elements.progressRing.classList.toggle("complete", percentage === 100 && state.tasks.length > 0);

  const tasks = visibleTasks();
  elements.list.innerHTML = tasks.map((task) => `
    <li class="todo-item ${task.completed ? "done" : ""}" data-id="${task.id}">
      <input class="todo-check" type="checkbox" ${task.completed ? "checked" : ""} aria-label="Mark ${escapeHtml(task.title)} as ${task.completed ? "open" : "complete"}" />
      <span class="todo-text">${escapeHtml(task.title)}</span>
      <button class="delete-button" type="button" aria-label="Delete ${escapeHtml(task.title)}">×</button>
    </li>
  `).join("");
  elements.empty.hidden = tasks.length > 0;
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
}

function setDate() {
  elements.date.textContent = new Intl.DateTimeFormat("en", { weekday: "long", month: "short", day: "numeric" }).format(new Date());
}

if (typeof document !== "undefined") {
elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = elements.input.value.trim();
  if (!title) return;
  state.tasks.unshift(createTask(title));
  saveTasks();
  elements.input.value = "";
  render();
  elements.input.focus();
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

elements.list.addEventListener("click", (event) => {
  const item = event.target.closest(".todo-item");
  if (!item) return;
  const task = state.tasks.find((candidate) => candidate.id === item.dataset.id);
  if (!task) return;
  if (event.target.matches(".todo-check")) task.completed = event.target.checked;
  if (event.target.matches(".delete-button")) state.tasks = state.tasks.filter((candidate) => candidate.id !== task.id);
  saveTasks();
  elements.progressRing.classList.add("bump");
  setTimeout(() => elements.progressRing.classList.remove("bump"), 250);
  render();
});

elements.clearCompleted.addEventListener("click", () => {
  state.tasks = state.tasks.filter((task) => !task.completed);
  saveTasks();
  render();
});

setDate();
render();
}

if (typeof module !== "undefined") {
  module.exports = { createTask, escapeHtml, visibleTasks };
}
