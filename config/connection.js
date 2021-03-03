const mysql = require('mysql');

require('dotenv').config();
let connection ;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 8080,
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'hockey_db',
    });
}

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(`connected as id ${connection.threadId}\n`);
});

module.exports = connection;