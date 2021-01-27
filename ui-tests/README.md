# Running Tests in Cypress:
First, launch the Test Runner with the command: node_modules/.bin/cypress open

It opens Test runner then shows your tests (examples -> FirstTest.js) then click on the test you want to run 

# To launch the browser (electron browser), use the below command:
-  node_modules/.bin/cypress run -—headed 

## To run single test under examples directory:
node_modules/.bin/cypress run —-spec “cypress/integration/examples/FirstTest.js” 

## - To run All thee tests under examples directory using chrome
node_modules/.bin/cypress run —-browser chrome

scripts: {
    "cy:run": "cypress run"
}