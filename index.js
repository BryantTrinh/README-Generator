// TODO: Include packages needed for this application

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateReadMe');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command do you want to run to install the dependencies?',
    default: 'npm i',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What licenses do you want to include with your project?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command do you want to run in able to run tests?'
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know when using the repository?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repository?',
  },
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating your README! ...');
    writeFile('README.md', generateReadMe({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
