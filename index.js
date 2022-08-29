const inquirer = require('inquirer');



inquirer
  .prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to view?',
      choices: ['all roles', 'all departments'],
    },
  ])
  .then((answers) => {
    let userInput = answers.option
    if(userInput === "all roles"){
      const {viewDep} = require('./db/dbfunctions')
      viewDep()
    }
  });

