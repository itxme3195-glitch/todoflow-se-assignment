# Software Engineering Assignment 01

**Student name:** [Enter student name]  
**Roll number:** [Enter roll number]  
**Class:** BCS (3A / 3B)  
**Application:** TodoFlow — To-Do List Application  
**Submission date:** 23 September 2026

## Required deliverables

- **GitHub repository:** [TodoFlow GitHub repository](https://github.com/itxme3195-glitch/todoflow-se-assignment)
- **Live deployed application:** [TodoFlow live application](https://itxme3195-glitch.github.io/todoflow-se-assignment/)
- **GitHub Actions workflow:** [TodoFlow CI workflow runs](https://github.com/itxme3195-glitch/todoflow-se-assignment/actions)

## 1. Application name and purpose

**TodoFlow** is a small browser-based to-do list application. Its purpose is to help a user capture everyday tasks, distinguish open work from completed tasks, and see progress at a glance. The application uses browser local storage, so tasks remain available when the same browser is reopened.

## 2. Main features

TodoFlow provides a task-entry form, task completion checkboxes, task deletion, filters for all/open/completed tasks, a button to clear completed tasks, a completion percentage indicator, and responsive styling for desktop and mobile screens. The application is implemented with HTML, CSS, and vanilla JavaScript as required by the assignment.

## 3. DevOps flow followed

The project was created with HTML, CSS, and JavaScript and tested locally in a browser. The local test command is `npm test`; it runs four smoke tests that check the required files, important page controls, task creation, and HTML escaping. The verified local result is **4 tests passed and 0 tests failed**.

The public GitHub repository is configured with the `main` branch and contains the complete source code, tests, documentation, and the GitHub Actions workflow at `.github/workflows/ci.yml`. The first three meaningful commits are:

1. `Initial application structure` — adds the HTML page, stylesheet, and package metadata.
2. `Add TodoFlow task management features` — adds the JavaScript behavior and smoke tests.
3. `Add CI workflow and assignment documentation` — adds the GitHub Actions workflow.

Additional commits were used to add the final report and correct the smoke-test path after the first CI failure. The repository therefore contains more than the required three meaningful commits.

The GitHub Actions workflow runs automatically when code is pushed to `main` and when a pull request targets `main`. It checks out the source code, sets up Node.js 20, runs `npm test`, and verifies that `index.html`, `styles.css`, and `app.js` exist. GitHub Pages is configured to deploy the root of the `main` branch.

### Failed CI and successful CI demonstration

An intentional test-path error was pushed to the repository, which produced a failed TodoFlow CI run. The test path was then corrected and pushed again. The next workflow run completed successfully. This demonstrates the requested failure-and-recovery CI process without leaving the final repository in a broken state.

## 4. Problems faced and how they were solved

One issue was ensuring that application data remained available after a page refresh. This was solved by serialising the task array to `localStorage` after every change and loading it safely when the page starts. Another issue was making the smoke tests run in Node.js even though the main JavaScript file is designed for a browser. The browser-only event wiring was guarded so reusable helper functions could be tested without a DOM. A third issue was preventing user-entered text from being interpreted as HTML. The rendering code escapes special characters before placing task text into the page.

The first GitHub Actions run also exposed a repository-layout mismatch: the uploaded smoke test was at the repository root while `package.json` referenced a nested path. The problem was fixed by correcting the test command and test-file paths, then confirming that the next workflow run passed.

## 5. What I learned from Continuous Integration (CI)

Continuous Integration checks a project automatically whenever code changes are pushed. This provides quick feedback before a change is considered complete. In this project, the workflow catches missing files, syntax or test failures, and incorrect assumptions about the repository layout. I learned that a failed CI run is useful evidence because it identifies the commit that introduced a problem and provides a repeatable check to confirm the fix. I also learned that the final repository should contain only the corrected version, even though the report records the temporary failure and its resolution.

## Screenshot evidence

### 1. Running application

![TodoFlow running locally](evidence/01-running-application.png)

*Figure 1. TodoFlow running locally in a browser.*

### 2. GitHub repository files

![GitHub repository files](evidence/02-repository-files.png)

*Figure 2. Public GitHub repository showing the TodoFlow source files and workflow directory.*

### 3. Commit history

![GitHub commit history](evidence/03-commit-history.png)

*Figure 3. GitHub commit history showing the meaningful project commits.*

### 4. Failed CI workflow

![Failed GitHub Actions workflow](evidence/04-failed-ci.png)

*Figure 4. GitHub Actions showing the failed workflow caused by the temporary test-path error.*

### 5. Successful CI workflow

![Successful GitHub Actions workflow](evidence/05-successful-ci.png)

*Figure 5. GitHub Actions showing the green workflow after the test-path correction.*

### 6. Deployed application

![TodoFlow deployed application](evidence/06-deployed-application.png)

*Figure 6. TodoFlow running at its live GitHub Pages URL.*

## Final submission checklist

- [ ] Enter the student name.
- [ ] Enter the roll number.
- [x] Add the GitHub repository link.
- [x] Add the live deployed application link.
- [x] Upload the complete source code to the repository.
- [x] Create at least three meaningful commits.
- [x] Configure CI to run on pushes to `main`.
- [x] Add simple build/test checks to the CI workflow.
- [x] Capture the failed CI screenshot.
- [x] Capture the successful CI screenshot.
- [x] Capture all six required screenshots.
- [ ] Rename the final file using the required format: `StdName_Roll#_SEAss01`.

## Conclusion

TodoFlow meets the application and DevOps requirements of Assignment 01. It demonstrates a complete path from a small HTML/CSS/JavaScript application to local testing, source control, automated CI validation, failure recovery, and free static deployment through GitHub Pages.

## References

[1]: https://docs.github.com/en/actions "GitHub Actions documentation"
[2]: https://docs.github.com/en/pages "GitHub Pages documentation"
