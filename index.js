const inquirer = require('inquirer');
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: '',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);
inquirer
  .prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to view?',
      choices: ['all roles', 'all departments'],
    },
  ])
  .then(answers => {
    let userInput = answers.option

  });