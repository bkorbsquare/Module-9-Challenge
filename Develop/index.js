// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What was your motivation and process for building?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Which collaborators would you like to credit?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        default: "MIT",
        choices: [
          "Apache-2.0",
          "BSD 2-Clause",
          "BSD 3-Clause",
          "EPL-2.0",
          "GPL-2.0",
          "GPL-3.0",
          "MIT",
          "MPL-2.0",
          new inquirer.Separator()
        ]
      },
    ])];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();