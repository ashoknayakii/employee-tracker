const connection = require('./connection.js')
class DB {
    constructor(connection){
        this.connection=connection
    }
    getAllEmployees(){
        return this.connection.promise().query(
            'SELECT id,first_name, last_name FROM employee WHERE id !=?'
        )
    }
}
module.exports = new DB(connection);