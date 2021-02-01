# WEB UI - Cypress Automation Framework 

## PreRequisites:
1. node.js
2. npm
3. Visual Studio Code Editor (VS Code)

# Steps:
1. Clone the Repo from GitHub
2. Open the project in the VS Code editor
3. In VS Code editor - open Terminal and run the command to install project existing dependencies: `npm install`

4. In case, `npm install` fails to install required dependencies then run the below command:
`npm install --save-dev cypress`

5. If Step 3 works fine, ignore Step 4

### Running Tests in Cypress:
First, launch the Test Runner with the command: 
`node_modules/.bin/cypress open`

It opens Test runner then shows your tests (examples -> FirstTest.js) then click on the test you want to run.

#### NOTE: To run tests, by default Cypress looks for TEST(s) files under 'Integration -> examples' directory

###  To run headless tests on default 'Chrome' (Electron) Browser:
`node_modules/.bin/cypress run -—headed`

### To run a Single Test:
`node_modules/.bin/cypress run —-spec “cypress/integration/examples/FirstTest.js` 

### To run all tests on chrome browser 
`node_modules/.bin/cypress run —-browser chrome`
