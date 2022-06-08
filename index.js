const inquirer = require("inquirer");
//import conection

const initQuestion = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "initial",
        message: "What would you like to do?",
        choices: [
          "Add Role",
          "Add Department",
          "Add Employee",
          "Update Employee",
        ],
      },
      {
        type: "list",
        name: "department",
        message: "What is the name of the department?",
        choices: [
          "Customer Service",
          "Engineering",
          "Sales",
          "Finance",
          "Legal",
        ],
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the employee's office number?",
      },
      {
        type: "list",
        name: "role",
        message:
          "What role will your new employee assume or have you finished building your team?",
        choices: ["Engineer", "Intern", "Finished Building Team"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's full name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id number",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the employee's github address?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's full name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id number",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
      },
    ])
    .then((answers) => {
      //Database code to save info
      //Database ase code to put answers variable
      //connection to save to database
    });
};
