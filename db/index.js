const connection = require('./connection.js')
class DB {
    constructor(connection){
        this.connection=connection
    }
    getAllEmployees(){
        return this.connection.promise().query(
            'SELECT employee.id, employee.first_name, employee.last_name FROM employee;'
        )
    }
    createEmployee(employee){
        return this.connection.promise().query("INSERT INTO employee SET ?", employee)
    }

    createDept(department){
        return this.connection.promise().query("INSERT INTO department SET ?", department)
    }

    addRole(roles){
        return this.connection.promise().query("INSERT INTO roles SET ?",roles)
    }

    updateRole(employee){
        return this.connection.promise().query("UPDATE employee SET ? WHERE ?", employee)
    }
}
module.exports = new DB(connection);