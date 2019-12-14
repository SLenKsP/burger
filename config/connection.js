let mysql = require(`mysql`);

let connection = mysql.createConnection({
    host: `localhost`,
    port: 3306,
    user: `root`,
    password: `password`,
    database: `burgers_db`
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected as id: ${ connection.threadId }`);
});

module.exports = connection;