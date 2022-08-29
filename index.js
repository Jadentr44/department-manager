const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to view?',
      choices: ['all roles', 'crocodile'],
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.reptile);
  });