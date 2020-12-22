let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_jeunessefuture'
});
 
connection.connect()

module.exports = connection