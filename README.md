# TodoFlow — Software Engineering Assignment 01

TodoFlow is a small, responsive to-do list application built with HTML, CSS, and vanilla JavaScript. It supports adding tasks, marking tasks complete, deleting tasks, filtering the list, clearing completed work, and saving tasks in the browser's local storage.

## Run locally

Open `index.html` directly in a browser, or serve the folder with a small local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Test locally

```bash
npm test
```

The smoke tests verify the required project files, important page controls, task creation behavior, and HTML escaping.

## GitHub Actions

The workflow at `.github/workflows/ci.yml` runs on pushes and pull requests targeting `main`. It checks out the project, installs Node.js 20, runs `npm test`, and validates the required source files.

## GitHub Pages deployment

1. Create a public GitHub repository named `todoflow-se-assignment`.
2. Push this project to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main`, select `/ (root)`, and save.
5. GitHub will provide the live Pages URL after deployment.
