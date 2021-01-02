const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'application',
    password: 'application',
    database: 'application',
};

const pool = mysql.createPool(config);

module.exports = pool;
