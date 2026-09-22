const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createTask, escapeHtml } = require("./app.js");

const root = __dirname;

test("required project files exist", () => {
  for (const file of ["index.html", "styles.css", "app.js", "package.json"]) {
    assert.equal(fs.existsSync(path.join(root, file)), true);
  }
});

test("page exposes the main interactive controls", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  for (const id of ["todo-form", "todo-input", "todo-list", "clear-completed"]) {
    assert.equal(html.includes('id="' + id + '"'), true);
  }
});

test("createTask trims titles and starts open", () => {
  const task = createTask("  Plan study session  ");
  assert.equal(task.title, "Plan study session");
  assert.equal(task.completed, false);
  assert.ok(task.id);
});

test("escapeHtml protects task text", () => {
  assert.equal(escapeHtml("<script>alert('x')</script>"), "&lt;script&gt;alert(&#39;x&#39;)&lt;/script&gt;");
});
