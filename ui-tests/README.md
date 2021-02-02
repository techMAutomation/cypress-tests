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

It opens Test runner window then shows your tests (examples -> LoginTest.spec.js) then click on the test you want to run.

#### NOTE: To run tests, by default Cypress looks for TEST(s) files under 'Integration -> examples' directory

### To run all the Tests using Cypress CLI:
`node_modules/.bin/cypress run`

### To run a Specific Test:
`node_modules/.bin/cypress run —-spec “cypress/integration/examples/LoginTest.spec.js`

### To run headless tests on default 'Chrome' (Electron) Browser:
`node_modules/.bin/cypress run -—headed`

### To run Browser specific tests:
`node_modules/.bin/cypress run —-browser chrome`
#### NOTE: To make it work updated 'scripts' in package.json 
Ex:` "cy:run:chrome": "cypress run --browser chrome" `
