// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is your project title ?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What was your motivation for the project?',
            name: 'descriptionMotivation',
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'descriptionWhy',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'descriptionProblem',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'descriptionLearn',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'What are the instructions for use?',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'List your collaborators',
            name: 'Credits',
        },
        {
            type: 'input',
            message: 'What is the license used for this project?',
            name: 'License',
        }
     ]

     inquirer.prompt(questions).then(answers => {
        const readmeCard = 
    `
       ${answers.title}
       Description
       ${answers.descriptionMotivation}
       ${answers.descriptionWhy}
       ${answers.descriptionProblem}
       ${answers.descriptionLearn}
       Table of Contents
       ${answers.Installation}
       ${answers.Usage}
       ${answers.Credits}
       ${answers.License}
   `

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    fs.writeFile('README.md', readmeCard, (err) => {
        err ? console.log(err) : console.log('success')
    })
 })
// })
// writeToFile();
// TODO: Create a function to initialize app
// function init() { 
//     writeToFile();
// }

// // Function call to initialize app
// init();
