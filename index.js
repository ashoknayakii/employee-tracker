const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
require('console.table');
const db = require('./db')

const initQuestion = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "initial",
            message: "What would you like to do?",
            choices: [{name: 'View all Employees', value: 'ALL_EMPLOYEES'},'Add Department', 'Add Employee', 'Add Role', 'Update Employee Role']
        }
    ]).then(answer => {
        switch (answer.initial) {
            case "ALL_EMPLOYEES":
                viewEmployees()
                break;
            case "Add Department":
                addDept()
                break;
            case "Add Employee":
                addEmployee()
                break;
            case "Add Role":
                addRole()
                break;
            case "Update Employee":
                updateEmployee()
                break;
            default:
                break;
        }
        // if (answer.role === "Add Role") {
        //     addRole();
        // }
        // else if (answer.role === "Add Department") {
        //     addDept();
        // }
        // else if (answer.role === "Add Employee") {
        //     addEmployee();
        // }
        // else if (answer.role === "Update Employee Role") {
        //     addSalary();
        // }
        // else if (answer.role === "Add Manager") {
        //     addManager();
        // }
        // else {
        //     console.log("Finished with Employee Tracker")
        // }
    })
};

const viewEmployees = ()=>{
 db.
 getAllEmployees()
 .then(([employees])=>{
console.log(employees)
//  console.table(employees)
})
.then(()=>initQuestion())
}

const addDept = () => {
    inquirer.prompt ([

        {        
            type: "list",
            name: "dept_name",
            message: "What is the name of the department?",
            choices: ['Customer Service', 'Engineering', 'Sales', 'Finance', 'Legal']
        },
    ])
    .then((deptData)=>{
        const {dept_name} = deptData
        const newDept = {dept_name}
        console.log(newDept)
        db.createDept()
    })
    .then(()=>{initQuestion})
}


const addEmployee = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?",
        },
        {
            type: "input",
            name: "roles_id",
            message: "What is the employee's role id?",
        },
        {
            type: "input",
            name: "manager_id",
            message: "Who is the employee's manager id?",
        },
    ])
    .then((employeeData)=>{
       const {first_name, last_name, roles_id, manager_id} = employeeData
       if(!manager_id || ''){
           const manager = {first_name, last_name, roles_id}
           db.createEmployee(manager)
       }
        const newEmployee = {first_name, last_name, roles_id, manager_id}
        console.log(newEmployee)
        db.createEmployee(newEmployee)
    })
    .then(()=>{initQuestion})
}

const addRole = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "role_name",
            message: "What is the name of the role?",
        },
        {
            type: "input",
            name: "role_salary",
            message: "What is the salary of the role?",
        },
        {
            type: "input",
            name: "role_dept",
            message: "What department does the role belong to?",
        }
    ])
    .then((roleData)=>{
        const {role_name, role_salary, roles_dept} = roleData
        const newRole = {role_name, role_salary, roles_dept}
         console.log(newRole)
         db.addRole(newRole)
     })
     .then(()=>{initQuestion})
 }

const updateEmployee = () => {
    inquirer.prompt ([
        {
            type: "list",
            name: "employee_list",
            message: "Which employee's role do you want to update?",
            choices: [{viewEmployees}]
        },
        {
            type: "input",
            name: "update_employee",
            message: "What role would you like to assign to the employee?"
        }
    ])
    .then((updateData)=>{
        const {employee_list, update_employee} = updateData
        const updatedEmployee = {employee_list, update_employee}
        console.log(updatedEmployee)
        db.updateRole(updatedEmployee)
    })
    .then(()=>{initQuestion()})
}



