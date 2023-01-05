// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log('Are you ready to generate a README!?')
console.log('Answer the following questions to generate a README for your project')

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
        default: 'Title',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What was your motivation for building?',
        default: 'Homework',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'npm install',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
        default: 'To generate an mvp for the graders',
      },
      {
        type: 'input',
        name: 'contrabutions',
        message: 'Which collaborators would you like to credit?',
        default: 'Highlander', //There can be only one. =)
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license:',
        choices: ['isc','mit','cc','gpl','N/A'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Link',
        default: 'github.com/yournamehere',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: 'yourname@gmail.com',
      },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
  console.log('You did it!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
    console.log(userInput)
    writeToFile("README.md", generateMarkdown(userInput));
  });
};

// Function call to initialize app
init();