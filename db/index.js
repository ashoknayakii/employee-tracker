const connection = require("./connection.js");
const mysql = require('mysql2');


class DB {
  constructor(connection) {
    this.connection = connection;
  }

  getAllTables() {
    return this.connection.promise().query("SELECT * from EMPLOYEE RIGHT JOIN department ON roles.department_id = department.id LEFT JOIN roles ON employee.roles_id = roles.id;")
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
    return this.connection
      .promise()
      .execute(
        "INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?, ?, ?, ?)",
        employee
      );
  }

  createDept(department) {
    return this.connection
      .promise()
      .execute(
        `INSERT INTO department (name) VALUES (?);`,
        department
      );
  }

  createRole(roles) {
      return this.connection
      .promise()
      .execute(
          "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", roles
      );
  }

}

module.exports = new DB(connection);

// 'SELECT employee.id, employee.first_name, employee.last_name FROM employee;'


// (err, results, fields) => {
//     if (err) {
//         console.log(`Error adding ${newDept} to the database.`
//         );
//     } else {
//         console.log(`${newDept} was added successfully to the database!`)
//     }
// })