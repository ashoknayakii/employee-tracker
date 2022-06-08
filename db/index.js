const connection = require("./connection.js");
const inquirerdata = require("../index");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  getAllDepartments() {
    return this.connection.promise().query("SELECT * from DEPARTMENT;");
  }

  getAllRoles() {
    return this.connection.promise().query("SELECT * from ROLES;");
  }

  getAllEmployees() {
    return this.connection.promise().query("SELECT * from EMPLOYEE;");
  }

  createEmployee(employee) {
    return this.connection.promise().execute("INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?, ?, ?, ?)", employee);
  }

      createDept() {
          return this.connection.promise().query(`INSERT INTO department (department.name) VALUES (?);`, answers.dept_name,
          (err, results, fields) => {
              if (err) {
                  console.log(`Error adding ${newDept} to the database.`
                  );
              } else {
                  console.log(`${newDept} was added successfully to the database!`)
              }
          })
      }

  //     addRole(roles){ //         return this.connection.promise().query("
  //     }

  //     updateRole(employee){
  //         return this.connection.promise().query("UPDATE employee SET ? WHERE ?", employee)
  //     }
}

module.exports = new DB(connection);

// 'SELECT employee.id, employee.first_name, employee.last_name FROM employee;'
