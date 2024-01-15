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
    name: 'githubUsername',
    message: 'What is your Github username?',
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'What is your email address?',
  },
  
];

// promt user with questions
inquirer.prompt(questions).then((data) => {
// generate a filename for the README based on the project name
  const filename = `${data.projectName.toLowerCase().split(' ').join('')}.README.md`;

// generate the content for the README using the gathered data
const tableOfContents = [

  'Installation',
  'Usage',
  'License',
  'Contributing',
  'Tests',
  'Questions',
  
].map((item) => `[${item}](#${item.toLowerCase()})`);


const tableOfContentsString = tableOfContents.join('\n-');
const licenseBadge = `![License](https://img.shields.io/badge/license-${data.license}-brightgreen)`;

const readmeContent = `
# ${data.projectName}

${licenseBadge}

## Description
${data.description}

## Table of Contents
${tableOfContents.join('\n- ')}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributions 
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me at [${data.githubUsername}](https://github.com/${data.githubUsername}) or [email me](mailto:${data.emailAddress}).
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
