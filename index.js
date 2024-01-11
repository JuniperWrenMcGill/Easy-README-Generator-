//  Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is this project named?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is a short description of the project?',
  },
  {
    type: 'checkbox',
    message: 'What would you like to include in your table of contents?',
    name: 'tableOfContents',
    choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information',
  },
  {
    type: 'list', 
    name: 'license',
    message: 'Choose a license for your project',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide instructions on how you would like others to contribute',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide instructions on how to run tests:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Provide details on how others can contact you to ask questions.',
  },
];

// promt user with questions
inquirer.prompt(questions).then((data) => {
// generate a filename for the README based on the project name
  const filename = `${data.projectName.toLowerCase().split(' ').join('')}.README.md`;

// generate the content for the README using the gathered data
  const readmeContent = `
# ${data.projectName}

## Description
${data.description}

## Table of Contents
${data.tableOfContents.join('\n')}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me at ${data.questions}.
`;

// write the generated content to a file with the generated filename
  fs.writeFile(filename, readmeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${filename} created successfully!`);
    }
  });
});
