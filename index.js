const inquirer = require('inquirer');


function askQuestion(){
inquirer
  .prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to do?',
      choices: ['view all roles', 'view all departments','view all employees','quit'],
    },
  ])
  .then(async(answers) => {
    let userInput = answers.option
    if(userInput === "view all departments"){
      const {viewDep} = require('./db/dbfunctions')
      await viewDep()
    }
    if(userInput === "view all employees"){
      const { viewEmp} = require('./db/dbfunctions')
      await viewEmp()
    }
    if(userInput === "view all roles"){
      const { viewRoles} = require('./db/dbfunctions')
      await viewRoles()
    }
    if(userInput === "quit") return
    setTimeout(() => {
      askQuestion()
    }, 1000)
    
  });
}
askQuestion()

