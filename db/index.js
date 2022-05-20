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
    
}
module.exports = new DB(connection);