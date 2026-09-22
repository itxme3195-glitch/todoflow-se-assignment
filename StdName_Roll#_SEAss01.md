# Software Engineering Assignment 01

**Student name:** [Enter student name]  
**Roll number:** [Enter roll number]  
**Class:** BCS (3A / 3B)  
**Application:** TodoFlow — To-Do List Application  
**Submission date:** 23 September 2026

## Required deliverables

- **GitHub repository:** [Paste the public GitHub repository link after pushing the project]
- **Live deployed application:** [Paste the GitHub Pages or other free-hosting link after deployment]

> Replace every bracketed placeholder before submitting the report. The repository link and live application link are mandatory deliverables.

## 1. Application name and purpose

**TodoFlow** is a small browser-based to-do list application. Its purpose is to help a user capture everyday tasks, distinguish open work from completed work, and see progress at a glance. The application uses browser local storage, so tasks remain available when the same browser is reopened.

## 2. Main features

TodoFlow provides a task-entry form, task completion checkboxes, task deletion, filters for all/open/completed tasks, a button to clear completed tasks, a completion percentage indicator, and responsive styling for desktop and mobile screens. The application is implemented with HTML, CSS, and vanilla JavaScript as required by the assignment.

## 3. DevOps flow followed

The project was created with HTML, CSS, and JavaScript, and it was tested locally in a browser. The local test command is `npm test`; it runs four smoke tests that check the required files, important page controls, task creation, and HTML escaping. The current local test result is **4 tests passed and 0 tests failed**.

The project uses the following three meaningful commits:

1. `Initial application structure` — adds the HTML page, stylesheet, JavaScript entry point, and project metadata.
2. `Add TodoFlow task management features` — adds task creation, completion, deletion, filtering, local storage, progress statistics, and smoke tests.
3. `Add CI workflow and assignment documentation` — adds the GitHub Actions workflow, documentation, and the assignment report.

The GitHub Actions workflow is stored at `.github/workflows/ci.yml`. It runs automatically when code is pushed to `main` and when a pull request targets `main`. The workflow checks out the source code, sets up Node.js 20, runs `npm test`, and validates that `index.html`, `styles.css`, and `app.js` exist. The application is deployed through GitHub Pages from the `main` branch root.

### Failed CI and successful CI demonstration

To demonstrate failure recovery, the following temporary experiment should be performed after the repository is created:

1. Make one small intentional error, such as changing an expected test value in `tests/smoke.test.js` so that `npm test` fails.
2. Commit and push the intentional error to `main`.
3. Open the **Actions** tab, wait for the red failed workflow, and capture `04-failed-ci.png`.
4. Restore the correct test value, commit the fix, and push it to `main`.
5. Open the next workflow run, wait for the green successful result, and capture `05-successful-ci.png`.
6. Do not leave the intentional error in the final version of the repository.

This procedure provides the exact failed-then-fixed CI evidence requested by the assignment.

## 4. Problems faced and how they were solved

One issue was ensuring that application data remained available after a page refresh. This was solved by serialising the task array to `localStorage` after every change and loading it safely when the page starts. Another issue was making the smoke tests run in Node.js even though the main JavaScript file is designed for a browser. The browser-only event wiring was guarded so that reusable helper functions can be tested without a DOM. A third issue was preventing user-entered text from being interpreted as HTML. The rendering code escapes special characters before placing task text into the page.

## 5. What I learned from Continuous Integration (CI)

Continuous Integration checks a project automatically whenever code changes are pushed. This provides quick feedback before a change is considered complete. In this project, the workflow catches missing files, syntax or test failures, and broken assumptions in the task helpers. I learned that a failed CI run is useful evidence because it identifies the commit that introduced a problem and provides a repeatable check to confirm the fix. I also learned that the final repository should contain only the corrected version, even though the report records the temporary failure and its resolution.

## Screenshot evidence

Insert each screenshot into this report and keep the filenames consistent with the table below. The first screenshot has already been captured locally. The other screenshots must be captured after the GitHub repository, CI runs, and deployment are available.

### 1. Running application

![TodoFlow running locally](evidence/01-running-application.png)

*Figure 1. TodoFlow running locally in a browser.*

### 2. GitHub repository files

![GitHub repository files](evidence/02-repository-files.png)

*Figure 2. GitHub repository root showing the complete source code and `.github/workflows` directory.*

### 3. Commit history

![GitHub commit history](evidence/03-commit-history.png)

*Figure 3. Git history showing at least three meaningful commits.*

### 4. Failed CI workflow

![Failed GitHub Actions workflow](evidence/04-failed-ci.png)

*Figure 4. GitHub Actions run failing because of the intentionally introduced temporary error.*

### 5. Successful CI workflow

![Successful GitHub Actions workflow](evidence/05-successful-ci.png)

*Figure 5. GitHub Actions run passing after the error was corrected.*

### 6. Deployed application

![TodoFlow deployed application](evidence/06-deployed-application.png)

*Figure 6. TodoFlow running at the live deployment URL.*

## Final submission checklist

Before sending the report to the CR, confirm that:

- [ ] Student name and roll number have been entered.
- [ ] The GitHub repository link has been added.
- [ ] The live deployed application link has been added.
- [ ] The repository contains the complete source code.
- [ ] The repository has at least three meaningful commits.
- [ ] The CI workflow runs on pushes to `main`.
- [ ] The failed CI screenshot has been added.
- [ ] The successful CI screenshot has been added.
- [ ] All six screenshot captions and images are present.
- [ ] The file has been renamed using the required format: `StdName_Roll#_SEAss01`.

## Conclusion

TodoFlow meets the application and DevOps requirements of Assignment 01. It demonstrates a complete path from a small HTML/CSS/JavaScript application to local testing, source control, automated CI validation, failure recovery, and free static deployment.

## References

[1]: https://docs.github.com/en/actions "GitHub Actions documentation"
[2]: https://docs.github.com/en/pages "GitHub Pages documentation"
